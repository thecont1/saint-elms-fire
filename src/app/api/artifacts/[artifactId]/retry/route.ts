import { NextResponse } from 'next/server';
import { DataService } from '@/lib/data-service';
import { getArtifactJobRunner } from '@/lib/artifact-jobs';
import { authorizeArtifactAccess, ArtifactAccessError } from '@/lib/artifacts';
import { resolveRequestIdentity, resolveStudentScope, authorizationResponse } from '@/lib/request-identity';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/**
 * POST /api/artifacts/[artifactId]/retry (Phase 6, Track C3)
 * Mirrors the release retry endpoint: only the owner may retry, only failed
 * artifacts are retryable, and retry re-enqueues the same generation job.
 */
export async function POST(
  req: Request,
  { params }: { params: Promise<{ artifactId: string }> },
) {
  try {
    const identity = resolveRequestIdentity(req);
    const { searchParams } = new URL(req.url);
    const studentId = resolveStudentScope(identity, searchParams.get('studentId'));
    const { artifactId } = await params;

    const artifact = await DataService.getArtifact(artifactId);
    if (!artifact) return NextResponse.json({ error: 'Artifact not found' }, { status: 404 });

    const released = await DataService.isLessonReleasedToStudent(artifact.lessonId, studentId);
    authorizeArtifactAccess({ artifact, requesterStudentId: studentId, lessonReleased: released });

    if (artifact.status !== 'failed') {
      return NextResponse.json({ error: 'Only failed artifacts can be retried' }, { status: 409 });
    }

    const retried = await DataService.beginArtifactRetry(artifactId);
    const payload: Record<string, string> = {
      artifactId: retried.id,
      studentId,
      lessonId: retried.lessonId,
    };
    if (retried.persona) payload.persona = retried.persona;
    if (retried.corpusScope) payload.corpusScope = retried.corpusScope;
    const job = await DataService.createJob({
      kind: retried.formatType,
      payload,
    });
    getArtifactJobRunner().kick();

    return NextResponse.json(
      { artifactId: retried.id, jobId: job.id, status: 'pending' },
      { status: 202 },
    );
  } catch (error: unknown) {
    const authResponse = authorizationResponse(error);
    if (authResponse) return authResponse;
    if (error instanceof ArtifactAccessError) {
      return NextResponse.json({ error: error.message }, { status: error.status });
    }
    console.error('Artifact retry failed:', error);
    return NextResponse.json({ error: 'Artifact retry failed' }, { status: 500 });
  }
}
