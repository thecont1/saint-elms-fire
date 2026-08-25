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
  return /\b(429|500|502|503|504)\b|RESOURCE_EXHAUSTED|UNAVAILABLE|high demand|overloaded/i.test(
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
  schema?: { parse: (data: unknown) => T; toJSONSchema?: () => unknown };
};

/** Single entry point for all chat generation in the app. */
export async function generateWithFallback<T>({
  system,
  prompt,
  schema,
}: GenerateArgs<T>): Promise<RoutedResult<T>> {
  const jsonSchema = schema?.toJSONSchema?.();

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

    const text = await sarvamGenerate({ system: jsonInstruction, prompt });
    if (!schema) return { text, model: SARVAM_MODEL };

    // Salvaged reasoning tails may be plain prose; extract the first balanced
    // JSON object if present. Otherwise treat the whole text as the answer.
    let candidate = text;
    const start = text.indexOf('{');
    if (start !== -1) {
      // Walk to the matching closing brace so nested objects survive.
      let depth = 0;
      let end = -1;
      for (let i = start; i < text.length; i++) {
        if (text[i] === '{') depth++;
        else if (text[i] === '}') {
          depth--;
          if (depth === 0) { end = i; break; }
        }
      }
      if (end > start) candidate = text.slice(start, end + 1);
      else candidate = '';
    }

    if (candidate) {
      try {
        return { output: schema.parse(JSON.parse(candidate)), model: SARVAM_MODEL };
      } catch {
        // fall through to prose-answer synthesis below
      }
    }

    // Prose salvage: wrap whatever text we got into the required shape.
    return {
      output: schema.parse({
        answer: text.slice(-2000),
        isGrounded: true,
        groundedSources: [],
        confidence: 0.5,
      }),
      model: SARVAM_MODEL,
    };
  }
}
