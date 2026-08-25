import { NextResponse } from 'next/server';
import { db, FieldValue } from '@/lib/firestore';
import { ai, GEMINI_FLASH } from '@/ai/genkit';

// Touches Firestore + the Google AI SDK — must run on the Node runtime, and must
// never be statically cached (it reports live, point-in-time connectivity).
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const PROBE_TIMEOUT_MS = 8000;

type DepStatus = {
  status: 'up' | 'down';
  latencyMs: number;
  error?: string;
};

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

/** Reject if a probe hangs, so one dead dependency can't hang the whole check. */
function withTimeout<T>(p: Promise<T>, ms: number, label: string): Promise<T> {
  return Promise.race([
    p,
    new Promise<T>((_, reject) =>
      setTimeout(() => reject(new Error(`${label} probe timed out after ${ms}ms`)), ms),
    ),
  ]);
}

/** Round-trip a real write+read+delete against Firestore. */
async function probeFirestore(): Promise<DepStatus> {
  const start = Date.now();
  try {
    const ref = db.collection('_health').doc('probe');
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
    console.error('Gemini health probe failed:', error);
    return {
      status: 'down',
      latencyMs: Date.now() - start,
      error: publicProbeError(error),
    };
  }
}

/**
 * GET /api/health
 *
 * Pings Firestore and Gemini in parallel and reports honest per-dependency
 * status. Returns 200 only when BOTH are up, otherwise 503 — so an uptime
 * probe or a demo dashboard can distinguish a live backend from one running on
 * silent fallbacks. Never leaks the API key; only whether the key works.
 */
export async function GET() {
  const [firestore, gemini] = await Promise.all([probeFirestore(), probeGemini()]);

  const healthy = firestore.status === 'up' && gemini.status === 'up';

  const body = {
    status: healthy ? 'ok' : 'degraded',
    timestamp: new Date().toISOString(),
    project: process.env.GOOGLE_CLOUD_PROJECT ?? null,
    model: GEMINI_FLASH,
    checks: { firestore, gemini },
  };

  return NextResponse.json(body, { status: healthy ? 200 : 503 });
}
