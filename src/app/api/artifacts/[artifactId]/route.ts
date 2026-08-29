import { NextResponse } from 'next/server';
import { DataService } from '@/lib/data-service';
import { authorizeArtifactAccess, ArtifactAccessError } from '@/lib/artifacts';
import { resolveRequestIdentity, resolveStudentScope, authorizationResponse } from '@/lib/request-identity';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/**
 * Retrieves an artifact and its associated job status for an authorized student.
 *
 * @returns A JSON response containing the artifact without its storage path, or an error response when access fails or the artifact cannot be found.
 */
export async function GET(
  req: Request,
  { params }: { params: Promise<{ artifactId: string }> },
) {
  try {
    const identity = resolveRequestIdentity(req);
    const { searchParams } = new URL(req.url);
    const studentId = resolveStudentScope(identity, searchParams.get('studentId'));
    const { artifactId } = await params;

    const artifact = await DataService.getArtifact(artifactId);
    if (!artifact) {
      return NextResponse.json({ error: 'Artifact not found' }, { status: 404 });
    }
    const released = await DataService.isLessonReleasedToStudent(artifact.lessonId, studentId);
    authorizeArtifactAccess({ artifact, requesterStudentId: studentId, lessonReleased: released });

    // Never serialize storagePath to clients — URLs are minted via /url only.
    const { storagePath: _storagePath, ...publicArtifact } = artifact;
    const job = artifact.jobId ? await DataService.getJob(artifact.jobId) : null;
    return NextResponse.json({
      artifact: {
        ...publicArtifact,
        job: job ? { status: job.status, attempts: job.attempts, errorCategory: job.errorCategory } : undefined,
      },
    });
  } catch (error: unknown) {
    const authResponse = authorizationResponse(error);
    if (authResponse) return authResponse;
    if (error instanceof ArtifactAccessError) {
      return NextResponse.json({ error: error.message }, { status: error.status });
    }
    console.error('Failed to get artifact:', error);
    return NextResponse.json({ error: 'Unable to load artifact' }, { status: 500 });
  }
}
