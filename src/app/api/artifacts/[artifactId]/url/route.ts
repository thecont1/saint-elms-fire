import { NextResponse } from 'next/server';
import { DataService } from '@/lib/data-service';
import { authorizeArtifactAccess, ArtifactAccessError } from '@/lib/artifacts';
import { gcsArtifactStorage, SIGNED_URL_TTL_MS } from '@/lib/artifact-storage';
import { resolveRequestIdentity, resolveStudentScope, authorizationResponse } from '@/lib/request-identity';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/** GET /api/artifacts/[artifactId]/url — mint a 15-minute signed download URL. */
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
    if (artifact.status !== 'ready') {
      return NextResponse.json({ error: `Artifact is not ready (status: ${artifact.status})` }, { status: 409 });
    }

    const url = await gcsArtifactStorage.getSignedUrl(artifact.storagePath);
    return NextResponse.json({
      url,
      mimeType: artifact.mimeType,
      expiresAt: new Date(Date.now() + SIGNED_URL_TTL_MS).toISOString(),
    });
  } catch (error: unknown) {
    const authResponse = authorizationResponse(error);
    if (authResponse) return authResponse;
    if (error instanceof ArtifactAccessError) {
      return NextResponse.json({ error: error.message }, { status: error.status });
    }
    console.error('Failed to mint artifact URL:', error);
    return NextResponse.json({ error: 'Unable to mint artifact URL' }, { status: 500 });
  }
}
