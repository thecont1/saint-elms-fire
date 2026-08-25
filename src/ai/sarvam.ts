/**
 * Sarvam AI fallback for chat generation.
 *
 * Primary inference stays on Gemini 3.7 Flash (Genkit + AI Studio). When
 * Gemini is unavailable (503 UNAVAILABLE / high demand), generation calls can
 * degrade to Sarvam's OpenAI-compatible endpoint instead of failing outright.
 *
 * Embeddings are NOT routed here — the courseware embedder remains
 * gemini-embedding-001 @ 768 dims via the Google AI plugin, because switching
 * embedders would change the vector space and require a full re-ingestion.
 */

const SARVAM_BASE_URL = 'https://api.sarvam.ai/v1/chat/completions';
export const SARVAM_MODEL = 'sarvam-105b';

export function sarvamConfigured(): boolean {
  return Boolean(process.env.SARVAM_API_KEY);
}

export class SarvamUnavailableError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'SarvamUnavailableError';
  }
}

interface SarvamOptions {
  system?: string;
  prompt: string;
  timeoutMs?: number;
}

/**
 * Calls Sarvam chat completions and returns the assistant message content.
 * sarvam-105b is a reasoning model: it may emit reasoning_content before the
 * final answer, so we request enough tokens and surface only `content`.
 */
export async function sarvamGenerate({
  system,
  prompt,
  timeoutMs = 30_000,
}: SarvamOptions): Promise<string> {
  const apiKey = process.env.SARVAM_API_KEY;
  if (!apiKey) {
    throw new SarvamUnavailableError('SARVAM_API_KEY not configured');
  }

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetch(SARVAM_BASE_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: SARVAM_MODEL,
        messages: [
          ...(system ? [{ role: 'system', content: system }] : []),
          { role: 'user', content: prompt },
        ],
        max_completion_tokens: 2048,
      }),
      signal: controller.signal,
    });

    if (!response.ok) {
      const body = await response.text().catch(() => '');
      throw new SarvamUnavailableError(
        `Sarvam responded ${response.status}: ${body.slice(0, 200) || 'no body'}`,
      );
    }

    const data = (await response.json()) as {
      choices?: Array<{ message?: { content?: string | null } }>;
    };
    const content = data.choices?.[0]?.message?.content?.trim();
    if (!content) {
      throw new SarvamUnavailableError('Sarvam returned empty content');
    }
    return content;
  } finally {
    clearTimeout(timer);
  }
}
