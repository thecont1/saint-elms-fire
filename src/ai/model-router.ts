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
import { sarvamGenerate, SARVAM_MODEL } from './sarvam';
// zod-to-json-schema (transitive dep of Genkit) converts both Zod v3 (the
// version Genkit's `z` re-exports) and Zod v4 schemas into JSON Schema.
// Zod v3 has no .toJSONSchema() method, so this is the version-agnostic path.
import { zodToJsonSchema } from 'zod-to-json-schema';

export const ACTIVE_MODELS = {
  generation_primary: GEMINI_FLASH,
  generation_fallback: SARVAM_MODEL,
  embeddings: 'gemini-embedding-001@768',
} as const;

export type ModelUsed = typeof GEMINI_FLASH | typeof SARVAM_MODEL;

export interface RoutedResult<T> {
  /** Parsed structured output when a schema was supplied. */
  output?: T;
  /** Raw text when no schema was supplied. */
  text?: string;
  /** Which model actually served this request. */
  model: ModelUsed;
}

function isAvailabilityError(error: unknown): boolean {
  const message = error instanceof Error ? error.message : String(error);
  return /\b(429|500|502|503|504)\b|RESOURCE_EXHAUSTED|UNAVAILABLE|high demand|overloaded|JSON5: invalid|no schema with key or ref|parse error/i.test(
    message,
  );
}

type GenerateArgs<T> = {
  system?: string;
  prompt: string;
  /**
   * App-level Zod v4 schema. Converted once via its own toJSONSchema() and
   * handed to Genkit as plain JSON Schema — no cross-zod-version coupling.
   */
  schema?: {
    parse: (data: unknown) => T;
    safeParse?: (data: unknown) => { success: boolean };
    toJSONSchema?: () => unknown;
  };
};

/**
 * Extract the first balanced JSON object from a model response. Returns null
 * when no complete JSON object is present.
 */
function extractJsonObject(text: string): unknown | null {
  const start = text.indexOf('{');
  if (start === -1) return null;
  let depth = 0;
  for (let i = start; i < text.length; i++) {
    if (text[i] === '{') depth++;
    else if (text[i] === '}') {
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

/** Single entry point for all chat generation in the app. */
export async function generateWithFallback<T>({
  system,
  prompt,
  schema,
}: GenerateArgs<T>): Promise<RoutedResult<T>> {
  const rawJsonSchema = schema
    ? (zodToJsonSchema(schema as never, { target: 'draft-2020-12' as never }) as Record<string, unknown>)
    : undefined;
  // JSON Schema meta-key can confuse Genkit's format handler; strip it.
  const jsonSchema = rawJsonSchema
    ? { ...rawJsonSchema, $schema: undefined }
    : undefined;

  try {
    const response = schema
      ? await (ai.generate as (args: {
          system?: string;
          prompt: string;
          output: { jsonSchema: unknown };
        }) => Promise<{ output?: unknown; text?: string }>)({
          system,
          prompt,
          output: { jsonSchema },
        })
      : await ai.generate({ system, prompt });
    if (schema) {
      // Gemini may return null output when jsonSchema-constrained decoding
      // yields no tool call; fall back rather than failing the request.
      if (!response.output) {
        throw new Error('UNAVAILABLE: primary model returned no structured output');
      }
      // Gemini may return JSON that parses but does not match the requested
      // schema (e.g. missing keys on complex shapes). Treat that as a
      // fallback-eligible failure too — the caller asked for a verified shape.
      if (schema.safeParse && !schema.safeParse(response.output).success) {
        throw new Error('UNAVAILABLE: primary model returned schema-invalid output');
      }
      return { output: schema.parse(response.output) as T, model: GEMINI_FLASH };
    }
    const text = (response.text || '').trim();
    if (!text) throw new Error('empty model response');
    return { text, model: GEMINI_FLASH };
  } catch (primaryError) {
    if (!isAvailabilityError(primaryError)) throw primaryError;
    console.warn('gemini_unavailable_falling_back', {
      model: GEMINI_FLASH,
      error: primaryError instanceof Error ? primaryError.message : String(primaryError),
    });

    // Schema-constrained path: instruct the fallback to emit raw JSON and
    // validate locally — sarvam-105b has no native structured-output mode.
    const jsonInstruction = schema
      ? `${system ?? ''}\n\nRespond with ONLY a single valid JSON object matching this shape, no markdown fences, no commentary:\n${JSON.stringify(jsonSchema)}`
      : system;

    // sarvam-105b-conversations is nondeterministic on complex schemas: it
    // sometimes returns a plausible-but-wrong shape (e.g. {id,label} nodes
    // instead of the schema contract). Retry with escalating anchors until
    // the response validates against the caller's schema.
    if (schema) {
      // The example anchors the exact shape; build defensively so a schema
      // introspection failure can't mask the real fallback behavior.
      let example: string;
      try {
        example = JSON.stringify(schema.parse(schemaExample(schema)));
      } catch (exampleError) {
        console.warn('fallback_example_build_failed', {
          error: exampleError instanceof Error ? exampleError.message : String(exampleError),
        });
        example = '';
      }
      const attempts = [
        jsonInstruction,
        `${jsonInstruction}\n\nWorked example — match this EXACT key structure (values are placeholders):\n${example}`,
        `${jsonInstruction}\n\nWorked example — match this EXACT key structure (values are placeholders):\n${example}\n\nSTRICT REQUIREMENT: output ONLY the JSON object. Every key in the example must appear. No extra keys. No prose before or after.`,
      ];
      let text = '';
      let parsed: unknown | null = null;
      for (let i = 0; i < attempts.length; i++) {
        text = await sarvamGenerate({ system: attempts[i], prompt });
        parsed = extractJsonObject(text);
        if (parsed && schema.safeParse && schema.safeParse(parsed).success) {
          return { output: schema.parse(parsed), model: SARVAM_MODEL };
        }
        console.warn('fallback_schema_mismatch_retrying', {
          model: SARVAM_MODEL,
          attempt: i + 1,
          received: text.slice(0, 120),
        });
      }
      throw new Error(`fallback model could not produce schema-valid output: ${text.slice(0, 200)}`);
    }

    const text = await sarvamGenerate({ system: jsonInstruction, prompt });
    return { text, model: SARVAM_MODEL };
  }
}
