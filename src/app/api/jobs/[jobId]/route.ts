import { NextResponse } from 'next/server';
import { DataService } from '@/lib/data-service';
import { resolveRequestIdentity, authorizationResponse } from '@/lib/request-identity';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/**
 * GET /api/jobs/[jobId] — poll async job status.
 * Students may only see jobs whose payload.studentId is their own; admins see all.
 */
export async function GET(
  req: Request,
  { params }: { params: Promise<{ jobId: string }> },
) {
  try {
    const identity = resolveRequestIdentity(req);
    const { jobId } = await params;
    const job = await DataService.getJob(jobId);
    if (!job) return NextResponse.json({ error: 'Job not found' }, { status: 404 });
    if (identity.role !== 'admin' && job.payload.studentId !== identity.userId) {
      return NextResponse.json({ error: 'Job belongs to another student' }, { status: 403 });
    }
    return NextResponse.json({
      job: {
        id: job.id,
        kind: job.kind,
        status: job.status,
        attempts: job.attempts,
        createdAt: job.createdAt,
        completedAt: job.completedAt,
        errorCategory: job.errorCategory,
      },
    });
  } catch (error: unknown) {
    const authResponse = authorizationResponse(error);
    if (authResponse) return authResponse;
    console.error('Failed to get job:', error);
    return NextResponse.json({ error: 'Unable to load job' }, { status: 500 });
  }
}
