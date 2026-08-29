import { NextResponse } from 'next/server';
import { kickArtifactJobs, runArtifactWatchdogSweep } from '@/lib/artifact-jobs';
import { resolveRequestIdentity, requireAdmin, authorizationResponse } from '@/lib/request-identity';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/** POST /api/jobs/sweep — admin/dev forced watchdog sweep + runner kick. */
export async function POST(req: Request) {
  try {
    const identity = resolveRequestIdentity(req);
    requireAdmin(identity);
    const result = await runArtifactWatchdogSweep(true);
    kickArtifactJobs();
    return NextResponse.json({ swept: result });
  } catch (error: unknown) {
    const authResponse = authorizationResponse(error);
    if (authResponse) return authResponse;
    console.error('Job sweep failed:', error);
    return NextResponse.json({ error: 'Job sweep failed' }, { status: 500 });
  }
}
