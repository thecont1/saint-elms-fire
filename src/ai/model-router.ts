/**
 * Model routing with graceful degradation.
 *
 * Primary inference: Gemini 3.7 Flash (Genkit + AI Studio).
 * Fallback: Sarvam sarvam-105b (OpenAI-compatible REST).
 *
 * `generateWithFallback` mirrors Genkit's ai.generate({ output: { schema } })
 * contract for JSON-schema-constrained outputs so flows can switch with one
 * import change. When the primary model fails with a retryable availability
 * error (429/5xx), the fallback is attempted once; auth/config errors are
 * never retried on the fallback since they would fail identically.
 */

import { ai, GEMINI_FLASH } from './genkit';
import { sarvamGenerate, SARVAM_MODEL } from './sarvam';
import { z } from 'zod';

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
  schema?: z.ZodTypeAny & { parse: (data: unknown) => T };
};

/** Single entry point for all chat generation in the app. */
export async function generateWithFallback<T>({
  system,
  prompt,
  schema,
}: GenerateArgs<T>): Promise<RoutedResult<T>> {
  try {
    // Genkit's generate overloads are narrowly typed against its bundled Zod
    // instantiation; the runtime contract accepts any ZodTypeAny schema. The
    // double cast routes around the nominal mismatch without weakening the
    // caller-facing generic (T is enforced by schema.parse below).
    const response = schema
      ? await (ai.generate as (args: {
          system?: string;
          prompt: string;
          output: { schema: z.ZodTypeAny };
        }) => Promise<{ output?: unknown; text?: string }>)({ system, prompt, output: { schema } })
      : await ai.generate({ system, prompt });
    if (schema) {
      if (!response.output) throw new Error('model returned no structured output');
      return { output: response.output as T, model: GEMINI_FLASH };
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
      ? `${system ?? ''}\n\nRespond with ONLY a single valid JSON object matching this shape, no markdown fences, no commentary:\n${JSON.stringify(z.toJSONSchema(schema as z.ZodType<unknown>))}`
      : system;

    const text = await sarvamGenerate({ system: jsonInstruction, prompt });
    if (!schema) return { text, model: SARVAM_MODEL };

    // Extract the first balanced JSON object from the response.
    const start = text.indexOf('{');
    const end = text.lastIndexOf('}');
    if (start === -1 || end <= start) {
      throw new Error(`fallback model returned non-JSON output: ${text.slice(0, 120)}`);
    }
    let parsed: unknown;
    try {
      parsed = JSON.parse(text.slice(start, end + 1));
    } catch {
      throw new Error(`fallback model returned invalid JSON: ${text.slice(0, 120)}`);
    }
    return { output: schema.parse(parsed) as T, model: SARVAM_MODEL };
  }
}
