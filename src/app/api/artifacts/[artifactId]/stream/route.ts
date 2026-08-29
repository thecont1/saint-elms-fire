import { NextResponse } from 'next/server';
import { DataService } from '@/lib/data-service';
import { authorizeArtifactAccess, ArtifactAccessError } from '@/lib/artifacts';
import { gcsArtifactStorage } from '@/lib/artifact-storage';
import { resolveRequestIdentity, resolveStudentScope, authorizationResponse } from '@/lib/request-identity';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/**
 * GET /api/artifacts/[artifactId]/stream — owner-only server-side streaming of
 * artifact bytes. Fallback delivery path when V4 signed URLs cannot be minted
 * (user-ADC credentials locally, or a runtime SA without the token-creator
 * role); same authorization as the /url route.
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
    if (artifact.status !== 'ready') {
      return NextResponse.json({ error: `Artifact is not ready (status: ${artifact.status})` }, { status: 409 });
    }

    const content = await gcsArtifactStorage.read(artifact.storagePath);
    const disposition = artifact.mimeType.startsWith('audio/')
      ? `inline; filename="${artifactId}.wav"`
      : `attachment; filename="${artifactId}.pdf"`;
    return new NextResponse(new Uint8Array(content), {
      headers: {
        'Content-Type': artifact.mimeType,
        'Content-Disposition': disposition,
        'Content-Length': String(content.byteLength),
        'Cache-Control': 'private, no-store',
      },
    });
  } catch (error: unknown) {
    const authResponse = authorizationResponse(error);
    if (authResponse) return authResponse;
    if (error instanceof ArtifactAccessError) {
      return NextResponse.json({ error: error.message }, { status: error.status });
    }
    console.error('Failed to stream artifact:', error);
    return NextResponse.json({ error: 'Unable to stream artifact' }, { status: 500 });
  }
}
