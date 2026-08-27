import { randomUUID } from 'node:crypto';
import { db, FieldValue } from '@/lib/firestore';
import { ai, GEMINI_FLASH } from '@/ai/genkit';
import { sarvamGenerate, SARVAM_MODEL } from '@/ai/sarvam';

/**
 * Shared deep-health implementation used by /api/health and /health.
 * Probes are cached briefly so an unauthenticated endpoint can't be abused
 * into hammering Firestore/Gemini on every request.
 */

const PROBE_TIMEOUT_MS = 15_000;
// Above the UI's 10s polling interval so normal requests are served from
// cache without firing generation probes on every poll. Deep checks happen
// only when explicitly requested (?deep=true) or on cold cache.
// 30s keeps the lights responsive without re-probing during temporary
// Gemini capacity blips.
const PROBE_CACHE_TTL_MS = 30_000;

export type DepStatus = {
  status: 'up' | 'down';
  latencyMs: number;
  error?: string;
};

export interface HealthReport {
  status: 'ok' | 'degraded';
  timestamp: string;
  project: string | null;
  model: string;
  fallbackModel: string;
  embeddings: string;
  checks: { firestore: DepStatus; gemini: DepStatus; sarvam: DepStatus };
}

type CacheEntry = { expiresAt: number; report: HealthReport };
let cache: CacheEntry | null = null;

function publicProbeError(error: unknown): string {
  const message = error instanceof Error ? error.message : String(error);
  if (/timed out/i.test(message)) return 'probe timed out';
  if (/resource_exhausted|429|quota|credits|billing/i.test(message)) {
    return 'quota or billing unavailable';
  }
  if (/unauthenticated|unauthorized|permission|credential|api key|403|401/i.test(message)) {
    return 'authentication or permission denied';
  }
  return 'dependency probe failed';
}

/** Reject if a probe hangs; always clears its timer once the race settles.
 *  Also catch the underlying promise so a slow call that eventually fails
 *  after the timeout does not leak as an unhandled rejection. */
function withTimeout<T>(p: Promise<T>, ms: number, label: string): Promise<T> {
  let handle: ReturnType<typeof setTimeout> | undefined;
  // Observe the slow path so a rejected call after the timeout is not unhandled.
  void p.catch(() => {});
  try {
    return Promise.race([
      p,
      new Promise<T>((_, reject) => {
        handle = setTimeout(() => reject(new Error(`${label} probe timed out after ${ms}ms`)), ms);
      }),
    ]).finally(() => {
      if (handle !== undefined) clearTimeout(handle);
    });
  } catch (error) {
    if (handle !== undefined) clearTimeout(handle);
    throw error;
  }
}

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

/** Round-trip a real write+read+delete against Firestore using a unique doc. */
async function probeFirestore(): Promise<DepStatus> {
  const start = Date.now();
  // Unique per probe so concurrent invocations never contend on one document.
  const ref = db.collection('_health').doc(`probe-${randomUUID()}`);
  try {
    await withTimeout(
      ref.set({ at: FieldValue.serverTimestamp(), ok: true }),
      PROBE_TIMEOUT_MS,
      'firestore',
    );
    const snap = await withTimeout(ref.get(), PROBE_TIMEOUT_MS, 'firestore');
    if (!snap.exists) throw new Error('probe document not readable after write');
    await ref.delete().catch(() => {}); // best-effort cleanup
    return { status: 'up', latencyMs: Date.now() - start };
  } catch (error: unknown) {
    console.error('Firestore health probe failed:', error);
    await ref.delete().catch(() => {});
    return {
      status: 'down',
      latencyMs: Date.now() - start,
      error: publicProbeError(error),
    };
  }
}

/** Round-trip a trivial generation through the wired Gemini model. */
async function probeGemini(): Promise<DepStatus> {
  const start = Date.now();
  let delay = 500;
  const maxRetries = 1;
  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      const res = await withTimeout(
        ai.generate('Reply with exactly: OK'),
        PROBE_TIMEOUT_MS,
        'gemini',
      );
      const text = (res.text || '').trim();
      if (!text) throw new Error('empty model response');
      return { status: 'up', latencyMs: Date.now() - start };
    } catch (error: unknown) {
      const is503 = error instanceof Error
        && (('code' in error && (error as any).code === 503)
            || ('status' in error && (error as any).status === 'UNAVAILABLE')
            || error.message.includes('503 Service Unavailable'));
      if (is503 && attempt < maxRetries) {
        console.warn(`Gemini health probe attempt ${attempt + 1} failed with 503, retrying in ${delay}ms...`);
        await sleep(delay);
        delay *= 2;
        continue;
      }
      const summary = error instanceof Error ? error.message : String(error);
      console.warn('Gemini health probe failed:', summary);
      return {
        status: 'down',
        latencyMs: Date.now() - start,
        error: publicProbeError(error),
      };
    }
  }
  // Should not reach here
  return { status: 'down', latencyMs: Date.now() - start, error: 'Max retries exceeded' };
}

/** Round-trip a trivial generation through the Sarvam fallback model. */
async function probeSarvam(): Promise<DepStatus> {
  const start = Date.now();
  try {
    // sarvam-105b-conversations is slow (~40s for structured output), so the
    // probe needs more headroom than the standard PROBE_TIMEOUT_MS.
    const text = await withTimeout(
      sarvamGenerate({ prompt: 'Reply with exactly: OK', timeoutMs: 60_000 }),
      65_000,
      'sarvam',
    );
    if (!text) throw new Error('empty model response');
    return { status: 'up', latencyMs: Date.now() - start };
  } catch (error: unknown) {
    console.error('Sarvam health probe failed:', error);
    return {
      status: 'down',
      latencyMs: Date.now() - start,
      error: publicProbeError(error),
    };
  }
}

/**
 * Pings Firestore, Gemini, and the Sarvam fallback in parallel and reports
 * honest per-dependency status. Cached for PROBE_CACHE_TTL_MS so repeated
 * requests reuse the last result instead of re-probing dependencies.
 *
 * Normal requests (deep = false) are served from cache when fresh — they do
 * NOT trigger generation probes. Pass deep = true (e.g. ?deep=true on the
 * endpoint) to force both generation probes on demand; the cold-cache path
 * also performs a full probe so the first observation is real.
 */
export async function getHealthReport(deep = false): Promise<HealthReport> {
  const now = Date.now();
  if (cache && cache.expiresAt > now && !deep) {
    // Refresh timestamp per response; dependency results stay cached.
    return { ...cache.report, timestamp: new Date().toISOString() };
  }

  const [firestore, gemini, sarvam] = await Promise.all([
    probeFirestore(),
    probeGemini(),
    probeSarvam(),
  ]);
  // Overall health requires Firestore plus Gemini. Gemini is not optional:
  // courseware embeddings (gemini-embedding-001) have NO fallback, so with
  // Gemini down neither ingestion nor RAG chat can function even though the
  // Sarvam generation fallback may be up. Sarvam up makes the report more
  // informative but cannot keep the product healthy on its own.
  const healthy = firestore.status === 'up' && gemini.status === 'up';

  const report: HealthReport = {
    status: healthy ? 'ok' : 'degraded',
    timestamp: new Date().toISOString(),
    project: process.env.GOOGLE_CLOUD_PROJECT ?? null,
    model: GEMINI_FLASH,
    fallbackModel: SARVAM_MODEL,
    embeddings: 'gemini-embedding-001@768',
    checks: { firestore, gemini, sarvam },
  };

  cache = { expiresAt: now + PROBE_CACHE_TTL_MS, report };
  return report;
}
