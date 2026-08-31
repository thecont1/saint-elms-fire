// @ts-nocheck -- Bun exposes bun:test at runtime; this project intentionally does not ship @types/bun.
import { describe, expect, test } from 'bun:test';
import {
  parsePodcastScript,
  concatenateWavSegments,
  pcmToWav,
  synthesizePodcast,
  TtsUnavailableError,
  selectTtsAdapters,
  geminiTts,
  sarvamTts,
} from './tts';

const script = `# DeepDive Episode

**Alex:** [excited] So what actually is quorum?
**Sam:** A strict majority — 2f+1 nodes surviving f crashes.
[transition music]
HOST: Give me the intuition.
GUEST: Any two majorities intersect, so decisions can't fork.
Narrator stage direction that should be ignored.
`;

describe('parsePodcastScript', () => {
  test('maps Alex/HOST to HOST and Sam/GUEST to GUEST, strips cues', () => {
    const segments = parsePodcastScript(script);
    expect(segments.length).toBe(4);
    expect(segments[0]).toEqual({ speaker: 'HOST', text: 'So what actually is quorum?' });
    expect(segments[1].speaker).toBe('GUEST');
    expect(segments[2].speaker).toBe('HOST');
    expect(segments.every((s) => !s.text.includes('['))).toBe(true);
  });

  test('script with no labeled lines yields empty', () => {
    expect(parsePodcastScript('just prose\nno labels here')).toEqual([]);
  });
});

describe('WAV utilities', () => {
  test('pcmToWav produces a valid RIFF header', () => {
    const wav = pcmToWav(Buffer.alloc(100));
    expect(wav.subarray(0, 4).toString()).toBe('RIFF');
    expect(wav.subarray(8, 12).toString()).toBe('WAVE');
    expect(wav.readUInt32LE(40)).toBe(100);
  });

  test('concatenateWavSegments sums data sizes correctly', () => {
    const a = pcmToWav(Buffer.alloc(100));
    const b = pcmToWav(Buffer.alloc(50));
    const merged = concatenateWavSegments([a, b]);
    expect(merged.readUInt32LE(40)).toBe(150);
    expect(merged.length).toBe(44 + 150);
  });

  test('empty segment list throws', () => {
    expect(() => concatenateWavSegments([])).toThrow();
  });
});

describe('runtime TTS model selection', () => {
  test('selects Sarvam as primary when the override names Sarvam', () => {
    const selected = selectTtsAdapters('sarvam-tts-bulbul-v3');
    expect(selected.primary).toBe(sarvamTts);
    expect(selected.fallback).toBe(geminiTts);
  });

  test('selects Gemini as primary when the override names Gemini', () => {
    const selected = selectTtsAdapters('gemini-2.5-flash-preview-tts');
    expect(selected.primary).toBe(geminiTts);
    expect(selected.fallback).toBe(sarvamTts);
  });

  test('rejects unsupported TTS ids instead of silently ignoring the Helm', () => {
    expect(() => selectTtsAdapters('chat-model')).toThrow('Unsupported TTS model');
  });
});

describe('synthesizePodcast fallback behavior', () => {
  const okAdapter = (name, log) => ({
    name,
    async synthesize(segment) {
      log.push(`${name}:${segment.speaker}`);
      return pcmToWav(Buffer.alloc(10));
    },
  });
  const failingAdapter = (name) => ({
    name,
    async synthesize() {
      throw new TtsUnavailableError(`${name} down`);
    },
  });

  test('primary success never touches fallback', async () => {
    const log = [];
    const audio = await synthesizePodcast(script, {
      primary: okAdapter('primary', log),
      fallback: okAdapter('fallback', log),
    });
    expect(audio.subarray(0, 4).toString()).toBe('RIFF');
    expect(log.every((entry) => entry.startsWith('primary'))).toBe(true);
  });

  test('primary failure retries entire script on fallback', async () => {
    const log = [];
    await synthesizePodcast(script, {
      primary: failingAdapter('primary'),
      fallback: okAdapter('fallback', log),
    });
    expect(log.length).toBe(4);
  });

  test('both providers failing surfaces the fallback error honestly', async () => {
    await expect(
      synthesizePodcast(script, {
        primary: failingAdapter('primary'),
        fallback: failingAdapter('fallback'),
      }),
    ).rejects.toThrow('fallback down');
  });

  test('unlabeled script fails with TtsUnavailableError, not silent output', async () => {
    await expect(
      synthesizePodcast('no dialogue', { primary: failingAdapter('primary') }),
    ).rejects.toBeInstanceOf(TtsUnavailableError);
  });
});
