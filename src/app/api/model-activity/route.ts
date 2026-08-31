import { NextResponse } from 'next/server';
import { getActiveModelActivity, getRecentModelRequests } from '@/ai/model-router';
import { DataService } from '@/lib/data-service';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const METRICS_TTL_MS = 30_000;

let cachedMetrics: Awaited<ReturnType<typeof DataService.getGenerationMetrics>> | undefined;
let cachedAt = 0;

async function getCachedGenerationMetrics(): Promise<Awaited<ReturnType<typeof DataService.getGenerationMetrics>>> {
  if (cachedMetrics && Date.now() - cachedAt < METRICS_TTL_MS) return cachedMetrics;
  cachedMetrics = await DataService.getGenerationMetrics();
  cachedAt = Date.now();
  return cachedMetrics;
}

/**
 * GET /api/model-activity
 *
 * Observational endpoint for the model status lights: which generation
 * provider is serving right now (in-flight) or served within the last few
 * seconds. Polled frequently by the header lights — deliberately cheap, no
 * probes, no caching.
 *
 * Phase 6, Track C3: pass ?metrics=1 to also include artifact/share
 * aggregate counts (opt-in so the frequent polls stay cheap).
 */
export async function GET(req: Request) {
  const activity = getActiveModelActivity();
  const { searchParams } = new URL(req.url);
  const parsedLimit = Number(searchParams.get('limit'));
  const limit = Number.isFinite(parsedLimit) ? parsedLimit : 20;

  let generation: Awaited<ReturnType<typeof DataService.getGenerationMetrics>> | undefined;
  if (searchParams.get('metrics') === '1') {
    try {
      generation = await getCachedGenerationMetrics();
    } catch (error) {
      console.error('Failed to load generation metrics:', error);
    }
  }

  return NextResponse.json({
    models: activity,
    recentRequests: getRecentModelRequests(limit),
    ...(generation ? { generation } : {}),
    timestamp: new Date().toISOString(),
  });
}
