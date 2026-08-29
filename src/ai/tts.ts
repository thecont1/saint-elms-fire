/**
 * TTS adapter (Phase 6, Track A2 / Task 10).
 *
 * Primary: Gemini TTS (generateContent with audio response modality).
 * Fallback: Sarvam text-to-speech (bulbul:v2) — same pattern as chat routing.
 * The adapter interface lets tests stub synthesis without network calls.
 *
 * Output: WAV (PCM 24kHz mono from Gemini; Sarvam returns WAV base64).
 * Podcast artifacts are therefore stored as audio/wav `.wav` objects.
 */
import { withDeadline } from '../lib/deadline';

export interface SpeakerSegment {
  speaker: 'HOST' | 'GUEST';
  text: string;
}

export interface TtsAdapter {
  /** Synthesize one segment; returns raw audio bytes (WAV container). */
  synthesize(segment: SpeakerSegment): Promise<Buffer>;
  readonly name: string;
}

export class TtsUnavailableError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'TtsUnavailableError';
  }
}

/**
 * Parse a two-host podcast script into speaker segments. Accepts the
 * generator's `Alex:`/`Sam:` or `HOST:`/`GUEST:` labels (case-insensitive),
 * ignoring pacing cues in [brackets] and unlabeled stage directions.
 */
export function parsePodcastScript(script: string): SpeakerSegment[] {
  const segments: SpeakerSegment[] = [];
  const hostAliases = new Set(['host', 'alex']);
  const guestAliases = new Set(['guest', 'sam']);
  for (const rawLine of script.split('\n')) {
    // Normalize bold speaker labels: "**Alex:**" / "**Alex**:" → "Alex:".
    const line = rawLine.trim().replace(/^\*\*([^*]+?)\*\*\s*/, '$1 ').replace(/^([A-Za-z]+)\s*:\s+/, '$1: ');
    const match = line.match(/^([A-Za-z]+)\s*[:：]\s*(.+)$/);
    if (!match) continue;
    const label = match[1].toLowerCase();
    const text = match[2].replace(/\[[^\]]*\]/g, '').trim();
    if (!text) continue;
    if (hostAliases.has(label)) segments.push({ speaker: 'HOST', text });
    else if (guestAliases.has(label)) segments.push({ speaker: 'GUEST', text });
  }
  return segments;
}

/** Concatenate WAV buffers: keep the first header, append raw PCM of the rest. */
export function concatenateWavSegments(buffers: Buffer[]): Buffer {
  if (buffers.length === 0) throw new Error('No audio segments to concatenate');
  if (buffers.length === 1) return buffers[0];
  const header = buffers[0].subarray(0, 44);
  const pcm = buffers.map((buf, i) => (i === 0 ? buf.subarray(44) : buf.subarray(44)));
  const dataSize = pcm.reduce((sum, part) => sum + part.length, 0);
  const out = Buffer.concat([Buffer.from(header), ...pcm]);
  // Fix RIFF and data chunk sizes.
  out.writeUInt32LE(36 + dataSize, 4);
  out.writeUInt32LE(dataSize, 40);
  return out;
}

/** Wrap raw 16-bit PCM in a WAV header (Gemini returns headerless PCM). */
export function pcmToWav(pcm: Buffer, sampleRate = 24_000, channels = 1): Buffer {
  const header = Buffer.alloc(44);
  header.write('RIFF', 0);
  header.writeUInt32LE(36 + pcm.length, 4);
  header.write('WAVE', 8);
  header.write('fmt ', 12);
  header.writeUInt32LE(16, 16);
  header.writeUInt16LE(1, 20);
  header.writeUInt16LE(channels, 22);
  header.writeUInt32LE(sampleRate, 24);
  header.writeUInt32LE(sampleRate * channels * 2, 28);
  header.writeUInt16LE(channels * 2, 32);
  header.writeUInt16LE(16, 34);
  header.write('data', 36);
  header.writeUInt32LE(pcm.length, 40);
  return Buffer.concat([header, pcm]);
}

const DEFAULT_FETCH_TIMEOUT_MS = 30_000;

async function fetchWithTimeout(url: string, options: RequestInit, timeoutMs = DEFAULT_FETCH_TIMEOUT_MS): Promise<Response> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(url, { ...options, signal: controller.signal });
  } finally {
    clearTimeout(timer);
  }
}

const GEMINI_TTS_MODEL = 'gemini-2.5-flash-preview-tts';
const GEMINI_VOICES = { HOST: 'Kore', GUEST: 'Puck' } as const;

export const geminiTts: TtsAdapter = {
  name: 'gemini-tts',
  async synthesize(segment) {
    const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY;
    if (!apiKey) throw new TtsUnavailableError('GEMINI_API_KEY not configured');
    const response = await fetchWithTimeout(
      `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_TTS_MODEL}:generateContent`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-goog-api-key': apiKey },
        body: JSON.stringify({
          contents: [{ parts: [{ text: segment.text }] }],
          generationConfig: {
            responseModalities: ['AUDIO'],
            speechConfig: {
              voiceConfig: { prebuiltVoiceConfig: { voiceName: GEMINI_VOICES[segment.speaker] } },
            },
          },
        }),
      },
    );
    if (!response.ok) {
      throw new TtsUnavailableError(`Gemini TTS responded ${response.status}`);
    }
    const json = await response.json() as {
      candidates?: Array<{ content?: { parts?: Array<{ inlineData?: { data?: string } }> } }>;
    };
    const data = json.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
    if (!data) throw new TtsUnavailableError('Gemini TTS returned no audio');
    return pcmToWav(Buffer.from(data, 'base64'));
  },
};

const SARVAM_TTS_URL = 'https://api.sarvam.ai/text-to-speech';
const SARVAM_TTS_CHAR_LIMIT = 500;
const SARVAM_VOICES = { HOST: 'priya', GUEST: 'aditya' } as const;

/**
 * Splits text into trimmed chunks that fit within the specified length.
 *
 * @param limit - The maximum preferred length of each chunk
 * @returns The resulting text chunks
 */
function splitTextIntoChunks(text: string, limit: number): string[] {
  if (text.length <= limit) return [text];
  const chunks: string[] = [];
  let start = 0;
  while (start < text.length) {
    let end = Math.min(start + limit, text.length);
    // Prefer to break at a space so words are not split mid-segment.
    if (end < text.length && text[end] !== ' ' && text[end - 1] !== ' ') {
      const lastSpace = text.lastIndexOf(' ', end);
      if (lastSpace > start) end = lastSpace;
    }
    chunks.push(text.slice(start, end).trim());
    start = end;
    while (text[start] === ' ') start += 1;
  }
  return chunks;
}

export const sarvamTts: TtsAdapter = {
  name: 'sarvam-tts',
  async synthesize(segment) {
    const apiKey = process.env.SARVAM_API_KEY;
    if (!apiKey) throw new TtsUnavailableError('SARVAM_API_KEY not configured');
    const chunks = splitTextIntoChunks(segment.text, SARVAM_TTS_CHAR_LIMIT);
    const audioBuffers: Buffer[] = [];
    for (const text of chunks) {
      const response = await fetchWithTimeout(SARVAM_TTS_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'api-subscription-key': apiKey },
        body: JSON.stringify({
          text,
          target_language_code: 'en-IN',
          speaker: SARVAM_VOICES[segment.speaker],
          model: 'bulbul:v3',
        }),
      });
      if (!response.ok) {
        throw new TtsUnavailableError(`Sarvam TTS responded ${response.status}`);
      }
      const json = await response.json() as { audios?: string[] };
      const audio = json.audios?.[0];
      if (!audio) throw new TtsUnavailableError('Sarvam TTS returned no audio');
      audioBuffers.push(Buffer.from(audio, 'base64'));
    }
    return concatenateWavSegments(audioBuffers);
  },
};

/** Phase 7, Track A1: per-segment caps exist, but a long episode needs an
 *  overall ceiling so synthesis terminates in bounded time. */
export const PODCAST_SYNTHESIS_DEADLINE_MS = 120_000;

/**
 * Synthesizes a complete two-voice podcast from a dialogue script.
 *
 * @param script - The dialogue script to synthesize
 * @param adapters - The primary text-to-speech adapter and optional fallback adapter
 * @returns The synthesized podcast as WAV audio data
 */
export function synthesizePodcast(
  script: string,
  adapters: { primary: TtsAdapter; fallback?: TtsAdapter } = { primary: geminiTts, fallback: sarvamTts },
): Promise<Buffer> {
  return withDeadline(
    synthesizePodcastUncapped(script, adapters),
    PODCAST_SYNTHESIS_DEADLINE_MS,
    'podcast synthesis',
  );
}

/**
 * Synthesizes a labeled podcast script into a single WAV buffer.
 *
 * If primary synthesis fails and a fallback adapter is available, retries the
 * complete script with the fallback adapter.
 *
 * @param script - The speaker-labeled podcast script
 * @param adapters - The primary adapter and optional fallback adapter
 * @returns The synthesized podcast audio as a WAV buffer
 * @throws TtsUnavailableError If the script contains no speaker-labeled dialogue
 */
async function synthesizePodcastUncapped(
  script: string,
  adapters: { primary: TtsAdapter; fallback?: TtsAdapter },
): Promise<Buffer> {
  const segments = parsePodcastScript(script);
  if (segments.length === 0) {
    throw new TtsUnavailableError('Script contains no speaker-labeled dialogue lines');
  }

  const runWith = async (adapter: TtsAdapter): Promise<Buffer> => {
    const parts: Buffer[] = [];
    for (const segment of segments) {
      parts.push(await adapter.synthesize(segment));
    }
    return concatenateWavSegments(parts);
  };

  try {
    return await runWith(adapters.primary);
  } catch (error) {
    if (!adapters.fallback) throw error;
    console.warn(
      `tts_primary_failed_falling_back primary=${adapters.primary.name} fallback=${adapters.fallback.name} reason=${error instanceof Error ? error.name : 'unknown'}`,
    );
    return runWith(adapters.fallback);
  }
}
