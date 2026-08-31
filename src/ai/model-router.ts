/**
 * Model routing with graceful degradation.
 *
 * Primary inference: Gemini 3.7 Flash (Genkit + AI Studio).
 * Fallback: Sarvam sarvam-105b (OpenAI-compatible REST).
 *
 * `generateWithFallback` mirrors Genkit's ai.generate({ output }) contract.
 * When the primary model fails with an availability error (429/5xx), the
 * fallback is attempted once; auth/config errors are never retried on the
 * fallback since they would fail identically.
 *
 * Schema strategy (avoids dual-zod conflicts entirely):
 * - Primary path: pass the caller's JSON SCHEMA to Genkit via
 *   `output: { jsonSchema }` — Genkit accepts raw JSON Schema natively and
 *   enforces constrained decoding with it.
 * - Fallback path: embed the same JSON Schema in the prompt, then validate
 *   Sarvam's raw-JSON response with the caller's schema.parse().
 */

import { ai, GEMINI_FLASH } from './genkit';
import { googleAI } from '@genkit-ai/google-genai';
import { sarvamGenerate, SARVAM_MODEL } from './sarvam';
// zod-to-json-schema (transitive dep of Genkit) converts both Zod v3 (the
// version Genkit's `z` re-exports) and Zod v4 schemas into JSON Schema.
// Zod v3 has no .toJSONSchema() method, so this is the version-agnostic path.
import { zodToJsonSchema } from 'zod-to-json-schema';
import { modelRoutingStore } from './model-routing-store';
import {
  globalCircuitBreakers,
  routeModelCall,
  type ServedBy,
} from './model-routing';

/**
 * Gemini models the primary dropdown can route to. 3.7 Flash is preferred;
 * 3.6 and 3.5 are closer fallbacks for when 3.7 is under severe demand.
 * The canonical Genkit model IDs match the dropdown value directly.
 */
export const GEMINI_MODELS = {
  'gemini-3.7-flash': {
    label: 'Gemini 3.7 Flash',
    modelId: 'gemini-3.7-flash',
  },
  'gemini-3.6-flash': {
    label: 'Gemini 3.6 Flash',
    modelId: 'gemini-3.6-flash',
  },
  'gemini-3.5-flash': {
    label: 'Gemini 3.5 Flash (preferred)',
    modelId: 'gemini-3.5-flash',
  },
} as const;

export const ROUTABLE_GEMINI_MODELS = Object.values(GEMINI_MODELS).map((m) => m.modelId);

export function resolveGeminiModel(model: string | undefined | null): string {
  if (model && (GEMINI_MODELS as Record<string, { modelId: string }>)[model]) {
    return (GEMINI_MODELS as Record<string, { modelId: string }>)[model].modelId;
  }
  return GEMINI_FLASH;
}

export const ACTIVE_MODELS = {
  generation_primary: GEMINI_FLASH,
  generation_primary_options: ROUTABLE_GEMINI_MODELS,
  generation_fallback: SARVAM_MODEL,
  embeddings: 'gemini-embedding-001@768',
} as const;

/** Any provider that can actually serve a generation call (Gemini or Sarvam). */
export type ModelUsed = string;

/**
 * Lightweight in-process activity tracking for the model status lights.
 * Records every generation call start/finish so the UI can flicker a light at
 * high frequency while that provider is actually serving (data in/out), not
 * merely available. Module-level counters are fine here: the health/lights
 * surface is observational, not authoritative.
 */
const ACTIVITY_WINDOW_MS = 5000;

/** Pre-seed activity tracking for every model the UI dropdown can select. */
const activity: Record<string, { active: number; lastActivityAt: number }> = {
  [GEMINI_FLASH]: { active: 0, lastActivityAt: 0 },
  'gemini-3.6-flash': { active: 0, lastActivityAt: 0 },
  'gemini-3.5-flash': { active: 0, lastActivityAt: 0 },
  [SARVAM_MODEL]: { active: 0, lastActivityAt: 0 },
};

/**
 * Track activity under an arbitrary model ID. Unknown models are tracked
 * lazily so the status lights never crash on an unexpected provider.
 */
export function markModelActivityStart(model: string): void {
  const entry = activity[model] ?? (activity[model] = { active: 0, lastActivityAt: 0 });
  entry.active += 1;
  entry.lastActivityAt = Date.now();
}

export function markModelActivityEnd(model: string): void {
  const entry = activity[model];
  if (!entry) return;
  entry.active = Math.max(0, entry.active - 1);
  entry.lastActivityAt = Date.now();
}

/** Which providers have served (or are serving) a call within the window. */
export function getActiveModelActivity(now = Date.now()): {
  [key: string]: { inFlight: boolean; recent: boolean };
} {
  const out: { [key: string]: { inFlight: boolean; recent: boolean } } = {};
  for (const [model, entry] of Object.entries(activity)) {
    out[model] = {
      inFlight: entry.active > 0,
      recent: entry.lastActivityAt > 0 && now - entry.lastActivityAt < ACTIVITY_WINDOW_MS,
    };
  }
  return out;
}

export interface RoutedResult<T> {
  /** Parsed structured output when a schema was supplied. */
  output?: T;
  /** Raw text when no schema was supplied. */
  text?: string;
  /** Which model actually served this request. */
  model: ModelUsed;
  /** Runtime routing provenance for UI chips and observability. */
  servedBy: ServedBy;
}

export interface ModelRequestActivity {
  id: string;
  startedAt: string;
  completedAt: string;
  latencyMs: number;
  status: 'served' | 'failed';
  servedBy?: ServedBy;
  error?: string;
}

const REQUEST_HISTORY_LIMIT = 50;
const recentRequests: ModelRequestActivity[] = [];

function recordRequest(entry: ModelRequestActivity): void {
  recentRequests.unshift(entry);
  if (recentRequests.length > REQUEST_HISTORY_LIMIT) recentRequests.length = REQUEST_HISTORY_LIMIT;
}

export function getRecentModelRequests(limit = 20): ModelRequestActivity[] {
  return recentRequests.slice(0, Math.max(0, Math.min(REQUEST_HISTORY_LIMIT, limit)));
}

export function clearRecentModelRequestsForTest(): void {
  recentRequests.length = 0;
}

type GenerateArgs<T> = {
  system?: string;
  prompt: string | Array<{ text: string }>;
  model?: string | undefined | null;
  config?: any;
  tools?: any[];
  schema?: {
    parse: (data: unknown) => T;
    safeParse?: (data: unknown) => { success: boolean };
    toJSONSchema?: () => unknown;
  };
};

function promptAsText(prompt: GenerateArgs<unknown>['prompt']): string {
  return typeof prompt === 'string' ? prompt : prompt.map((part) => part.text).join('\n');
}

/**
 * Extract the first balanced JSON object from a model response. Returns null
 * when no complete JSON object is present. String-aware: braces inside JSON
 * string values (e.g. {"answer":"uses { term: n } voting"}) are content, not
 * delimiters — backslash escapes are honored so \" never opens a string.
 * Exported for regression tests of the brace-in-string failure mode.
 */
export function extractJsonObject(text: string): unknown | null {
  const start = text.indexOf('{');
  if (start === -1) return null;
  let depth = 0;
  let inString = false;
  for (let i = start; i < text.length; i++) {
    const ch = text[i];
    if (inString) {
      if (ch === '\\') i++; // skip escaped character (\" \\ \n etc.)
      else if (ch === '"') inString = false;
      continue;
    }
    if (ch === '"') inString = true;
    else if (ch === '{') depth++;
    else if (ch === '}') {
      depth--;
      if (depth === 0) {
        try {
          return JSON.parse(text.slice(start, i + 1));
        } catch {
          return null;
        }
      }
    }
  }
  return null;
}

/**
 * Build a schema-shaped placeholder object for example anchoring. Mirrors the
 * required keys with valid placeholder values: enums pick their first member,
 * numbers use 1, booleans use true, strings use a sentinel. Arrays get one
 * minimal element. This is best-effort — the fallback only needs KEY structure.
 */
function schemaExample(schema: { toJSONSchema?: () => unknown }): Record<string, unknown> {
  const js = (schema.toJSONSchema?.() ?? {}) as Record<string, unknown>;
  const props = (js.properties ?? {}) as Record<string, unknown>;
  const example: Record<string, unknown> = {};
  for (const [key, prop] of Object.entries(props)) {
    const p = prop as Record<string, unknown>;
    if (p.type === 'array') {
      const item = (p.items as Record<string, unknown>) ?? {};
      const itemProps = (item.properties ?? {}) as Record<string, unknown>;
      const itemExample: Record<string, unknown> = {};
      for (const [ikey, iprop] of Object.entries(itemProps)) {
        const ip = iprop as Record<string, unknown>;
        if (Array.isArray(ip.enum)) itemExample[ikey] = ip.enum[0];
        else if (ip.type === 'number' || ip.type === 'integer') itemExample[ikey] = 1;
        else if (ip.type === 'boolean') itemExample[ikey] = true;
        else itemExample[ikey] = `sample-${ikey}`;
      }
      example[key] = [itemExample];
    } else if (Array.isArray(p.enum)) {
      example[key] = p.enum[0];
    } else if (p.type === 'number' || p.type === 'integer') {
      example[key] = 1;
    } else if (p.type === 'boolean') {
      example[key] = true;
    } else {
      example[key] = `sample-${key}`;
    }
  }
  return example;
}

function isSarvamModel(model: string): boolean {
  return model === SARVAM_MODEL || model.toLowerCase().startsWith('sarvam-');
}

/** Single entry point for routed generation in the app. */
export async function generateWithFallback<T>({
  system,
  prompt,
  model,
  config,
  tools,
  schema,
}: GenerateArgs<T>): Promise<RoutedResult<T>> {
  const requestStartedAt = Date.now();
  const requestId = `model-${requestStartedAt}-${Math.random().toString(36).slice(2, 8)}`;
  const routing = await modelRoutingStore.get();
  // Preserve the public per-call selection as an explicit override. Otherwise
  // the durable config is authoritative and can change without a restart.
  const primaryModel = model?.trim() || routing.overrides.chat || routing.primary;
  const fallbackModel = routing.fallback;
  let jsonSchema: Record<string, unknown> | undefined;
  try {
    const rawJsonSchema = schema
      ? (zodToJsonSchema(schema as never, { target: 'draft-2020-12' as never }) as Record<string, unknown>)
      : undefined;
    // JSON Schema meta-key can confuse Genkit's format handler; strip it.
    jsonSchema = rawJsonSchema ? { ...rawJsonSchema, $schema: undefined } : undefined;
  } catch (conversionError) {
    // Schemas with transforms/dates/bigints may not be representable as JSON
    // Schema. Do not let the conversion failure prevent the request: log it
    // and proceed unconstrained so the primary call still happens and the
    // fallback can still be attempted (with local schema.parse validation).
    console.warn('json_schema_conversion_failed', {
      error: conversionError instanceof Error ? conversionError.message : String(conversionError),
    });
  }

  let example = '';
  if (schema) {
    try {
      example = JSON.stringify(schema.parse(schemaExample(schema)));
    } catch (exampleError) {
      console.warn('fallback_example_build_failed', {
        error: exampleError instanceof Error ? exampleError.message : String(exampleError),
      });
    }
  }

  const callOne = async (targetModel: string): Promise<{ output?: T; text?: string }> => {
    markModelActivityStart(targetModel);
    try {
      if (isSarvamModel(targetModel)) {
        const sarvamSystem = schema
          ? `${system ?? ''}\n\nRespond with ONLY one valid JSON object matching this schema. No fences or commentary:\n${jsonSchema ? JSON.stringify(jsonSchema) : '(use every key in the worked example)'}\n\nWorked example (placeholder values):\n${example}`
          : system;
        const raw = await sarvamGenerate({ system: sarvamSystem, prompt: promptAsText(prompt) });
        if (!schema) return { text: raw };
        const parsed = extractJsonObject(raw);
        if (!parsed || (schema.safeParse && !schema.safeParse(parsed).success)) {
          throw new Error('Model returned schema-invalid output');
        }
        return { output: schema.parse(parsed) };
      }

      const modelRef = googleAI.model(targetModel as Parameters<typeof googleAI.model>[0]);
      const response = schema
        ? await (ai.generate as any)({ system, prompt, output: { jsonSchema }, model: modelRef, config, tools })
        : await ai.generate({ system, prompt, model: modelRef, config, tools } as any);
      if (schema) {
        if (!response.output || (schema.safeParse && !schema.safeParse(response.output).success)) {
          throw new Error('Model returned schema-invalid output');
        }
        return { output: schema.parse(response.output) };
      }
      const text = (response.text || '').trim();
      if (!text) throw new Error('UNAVAILABLE: model returned empty response');
      return { text };
    } finally {
      markModelActivityEnd(targetModel);
    }
  };

  try {
    const routed = await routeModelCall({
      primary: primaryModel,
      fallback: fallbackModel,
      maxRetries: 2,
      breakers: globalCircuitBreakers,
      call: (targetModel) => callOne(targetModel),
    });
    const completedAt = Date.now();
    recordRequest({
      id: requestId,
      startedAt: new Date(requestStartedAt).toISOString(),
      completedAt: new Date(completedAt).toISOString(),
      latencyMs: completedAt - requestStartedAt,
      status: 'served',
      servedBy: routed.servedBy,
    });
    return { ...routed.value, model: routed.servedBy.model, servedBy: routed.servedBy };
  } catch (error) {
    const completedAt = Date.now();
    recordRequest({
      id: requestId,
      startedAt: new Date(requestStartedAt).toISOString(),
      completedAt: new Date(completedAt).toISOString(),
      latencyMs: completedAt - requestStartedAt,
      status: 'failed',
      error: error instanceof Error ? error.message.slice(0, 240) : 'unknown',
    });
    throw error;
  }
}

/** Admin Helm test-fire: one real attempt against exactly one model. */
export async function testFireModel(model: string): Promise<{ latencyMs: number; servedBy: ServedBy; text: string }> {
  const startedAt = Date.now();
  const result = await routeModelCall({
    primary: model,
    fallback: model,
    maxRetries: 0,
    breakers: globalCircuitBreakers,
    call: async (targetModel) => {
      markModelActivityStart(targetModel);
      try {
        if (isSarvamModel(targetModel)) {
          return (await sarvamGenerate({ prompt: 'Reply with exactly: helm-ok' })).trim();
        }
        const response = await ai.generate({
          prompt: 'Reply with exactly: helm-ok',
          model: googleAI.model(targetModel as Parameters<typeof googleAI.model>[0]),
        } as any);
        return (response.text || '').trim();
      } finally {
        markModelActivityEnd(targetModel);
      }
    },
  });
  return { latencyMs: Date.now() - startedAt, servedBy: result.servedBy, text: result.value };
}
