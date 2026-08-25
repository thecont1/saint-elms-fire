import { NextResponse } from 'next/server';
import { getActiveModelActivity } from '@/ai/model-router';
import { GEMINI_FLASH } from '@/ai/genkit';
import { SARVAM_MODEL } from '@/ai/sarvam';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/**
 * GET /api/model-activity
 *
 * Observational endpoint for the model status lights: which generation
 * provider is serving right now (in-flight) or served within the last few
 * seconds. Polled frequently by the header lights — deliberately cheap, no
 * probes, no caching.
 */
export async function GET() {
  const activity = getActiveModelActivity();
  return NextResponse.json({
    models: {
      [GEMINI_FLASH]: activity[GEMINI_FLASH] ?? { inFlight: false, recent: false },
      [SARVAM_MODEL]: activity[SARVAM_MODEL] ?? { inFlight: false, recent: false },
    },
    timestamp: new Date().toISOString(),
  });
}
