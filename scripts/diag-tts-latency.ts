/** TTS latency diagnostic — measures per-segment wall time for gemini-2.5-flash-preview-tts
 *  using the exact production request shape, to size PODCAST_SYNTHESIS_DEADLINE_MS.
 *  Key comes from env (gcloud secrets → GEMINI_API_KEY); never printed. Delete after use. */
const MODEL = 'gemini-2.5-flash-preview-tts';
const VOICES = { HOST: 'Kore', GUEST: 'Puck' } as const;

const key = process.env.GEMINI_API_KEY;
if (!key) {
  console.error('GEMINI_API_KEY not set');
  process.exit(1);
}

/** The 8 realistic dialogue segments from scripts/diag-stage-podcast.ts FALLBACK_SCRIPT,
 *  plus one long segment to measure latency scaling with text length. */
const segments: Array<{ speaker: 'HOST' | 'GUEST'; text: string }> = [
  { speaker: 'HOST', text: 'Sam, welcome aboard. Today we chart the Raft consensus algorithm.' },
  { speaker: 'GUEST', text: 'A pleasure, Alex. Raft decomposes consensus into leader election, log replication, and safety.' },
  { speaker: 'HOST', text: 'Why does the leader matter so much?' },
  { speaker: 'GUEST', text: 'The leader serializes client commands and replicates them; followers only commit what a quorum acknowledges.' },
  { speaker: 'HOST', text: 'And if the leader vanishes mid-voyage?' },
  { speaker: 'GUEST', text: 'A follower times out, becomes a candidate, and calls an election with a higher term; the majority vote prevents split-brain.' },
  { speaker: 'HOST', text: 'So the quorum is the true captain.' },
  { speaker: 'GUEST', text: 'Exactly. Entries commit only when a majority replicates them — that is the heart of the safety invariant.' },
  {
    speaker: 'HOST',
    text: 'Before we drop anchor, let me leave you with the compass heading: consensus is not about trusting a single captain, it is about the crew keeping identical logs. Every follower applies entries in the same order the leader committed them, and an entry is only committed once a majority has persisted it. When the leader crashes, the surviving crew elects a new one with the most complete log, so nothing acknowledged is ever lost. That invariant — majority commitment plus deterministic log application — is what lets a distributed fleet behave like a single reliable ship even in a storm of failures.',
  },
];

const controller = new AbortController();
const timer = setTimeout(() => controller.abort(), 60_000);
const perSegmentMs: number[] = [];
let totalBytes = 0;

try {
  for (const [i, segment] of segments.entries()) {
    const started = Date.now();
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-goog-api-key': key },
        signal: controller.signal,
        body: JSON.stringify({
          contents: [{ parts: [{ text: segment.text }] }],
          generationConfig: {
            responseModalities: ['AUDIO'],
            speechConfig: { voiceConfig: { prebuiltVoiceConfig: { voiceName: VOICES[segment.speaker] } } },
          },
        }),
      }
    );
    const elapsed = Date.now() - started;
    const json = (await res.json()) as {
      candidates?: Array<{ content?: { parts?: Array<{ inlineData?: { data?: string } }> } }>;
    };
    const data = json.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
    const bytes = data ? Buffer.from(data, 'base64').byteLength : 0;
    perSegmentMs.push(elapsed);
    totalBytes += bytes;
    console.log(
      `segment ${i + 1}/${segments.length} speaker=${segment.speaker} chars=${segment.text.length} -> HTTP ${res.status} in ${elapsed}ms audioBytes=${bytes}`
    );
    if (!res.ok || !data) {
      console.error('probe FAILED — stopping');
      process.exit(1);
    }
  }
} catch (error) {
  console.error('probe FAILED:', error instanceof Error ? error.message : String(error));
  process.exit(1);
} finally {
  clearTimeout(timer);
}

const totalMs = perSegmentMs.reduce((sum, ms) => sum + ms, 0);
const eightMs = perSegmentMs.slice(0, 8).reduce((sum, ms) => sum + ms, 0);
console.log('---');
console.log(`total for 8 realistic segments: ${eightMs}ms (budget: 120000ms)`);
console.log(`total including long segment: ${totalMs}ms, audio ${totalBytes} bytes`);
console.log(`per-segment min/median/max: ${Math.min(...perSegmentMs)}/${perSegmentMs.sort((a, b) => a - b)[Math.floor(perSegmentMs.length / 2)]}/${Math.max(...perSegmentMs)}ms`);
process.exit(0);

export {};
