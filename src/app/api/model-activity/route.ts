import { NextResponse } from 'next/server';
import { getActiveModelActivity } from '@/ai/model-router';
import { GEMINI_FLASH } from '@/ai/genkit';
import { SARVAM_MODEL } from '@/ai/sarvam';
import { DataService } from '@/lib/data-service';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

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

  let generation: Awaited<ReturnType<typeof DataService.getGenerationMetrics>> | undefined;
  if (searchParams.get('metrics') === '1') {
    try {
      generation = await DataService.getGenerationMetrics();
    } catch (error) {
      console.error('Failed to load generation metrics:', error);
    }
  }

  return NextResponse.json({
    models: {
      [GEMINI_FLASH]: activity[GEMINI_FLASH] ?? { inFlight: false, recent: false },
      [SARVAM_MODEL]: activity[SARVAM_MODEL] ?? { inFlight: false, recent: false },
    },
    ...(generation ? { generation } : {}),
    timestamp: new Date().toISOString(),
  });
}
