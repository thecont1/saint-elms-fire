import { NextResponse } from 'next/server';
import { DataService } from '@/lib/data-service';
import { kickArtifactJobs } from '@/lib/artifact-jobs';
import { resolveRequestIdentity, authorizationResponse } from '@/lib/request-identity';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/**
 * Requeues an authorized failed reading recommendation job for processing.
 *
 * @param params - Route parameters containing the job identifier
 * @returns A response containing the requeued job details
 */
export async function POST(
  req: Request,
  { params }: { params: Promise<{ jobId: string }> },
) {
  try {
    const identity = resolveRequestIdentity(req);
    const { jobId } = await params;
    const job = await DataService.getJob(jobId);
    if (!job) return NextResponse.json({ error: 'Job not found' }, { status: 404 });

    if (job.kind !== 'reading_recommendation') {
      return NextResponse.json({ error: 'Only reading_recommendation jobs can be retried' }, { status: 400 });
    }

    const isOwner = identity.role === 'admin' || job.payload.studentId === identity.userId;
    if (!isOwner) {
      return NextResponse.json({ error: 'Job belongs to another student' }, { status: 403 });
    }

    if (job.status !== 'failed') {
      return NextResponse.json({ error: `Job is ${job.status}, only failed jobs can be retried` }, { status: 409 });
    }

    const requeued = await DataService.requeueJob(jobId);
    if (!requeued) {
      return NextResponse.json({ error: 'Job is no longer in a failed state' }, { status: 409 });
    }

    kickArtifactJobs();
    return NextResponse.json({
      requeued: true,
      job: {
        id: requeued.id,
        kind: requeued.kind,
        status: requeued.status,
        attempts: requeued.attempts,
        createdAt: requeued.createdAt,
      },
    });
  } catch (error: unknown) {
    const authResponse = authorizationResponse(error);
    if (authResponse) return authResponse;
    console.error('Job retry failed:', error);
    return NextResponse.json({ error: 'Job retry failed' }, { status: 500 });
  }
}
