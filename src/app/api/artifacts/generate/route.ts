import { NextResponse } from 'next/server';
import { DataService } from '@/lib/data-service';
import { kickArtifactJobs } from '@/lib/artifact-jobs';
import { ARTIFACT_FORMAT_TYPES, type ArtifactFormatType } from '@/lib/artifacts';
import { ArtifactQuotaError } from '@/lib/quotas';
import { resolveRequestIdentity, resolveStudentScope, authorizationResponse } from '@/lib/request-identity';
import { HEARTH_PERSONA_IDS, type HearthPersona } from '@/lib/ai-contracts';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/**
 * Initiates artifact generation for a released lesson.
 *
 * @returns An HTTP response containing the artifact and job identifiers with a pending status, or an error response for invalid, unauthorized, quota-exceeded, or failed requests.
 */
export async function POST(req: Request) {
  try {
    const identity = resolveRequestIdentity(req);

    let body: unknown;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
    }
    if (typeof body !== 'object' || body === null || Array.isArray(body)) {
      return NextResponse.json({ error: 'Request body must be a JSON object' }, { status: 400 });
    }

    const {
      studentId: requestedStudentId,
      lessonId,
      formatType,
      persona,
      corpusScope,
    } = body as Record<string, unknown>;
    const studentId = resolveStudentScope(identity, typeof requestedStudentId === 'string' ? requestedStudentId : null);

    if (!lessonId || typeof lessonId !== 'string' || !formatType || !ARTIFACT_FORMAT_TYPES.includes(formatType as ArtifactFormatType)) {
      return NextResponse.json(
        { error: `lessonId and formatType (${ARTIFACT_FORMAT_TYPES.join('|')}) are required` },
        { status: 400 },
      );
    }
    if (corpusScope && !['lesson', 'second_brain'].includes(corpusScope as string)) {
      return NextResponse.json({ error: 'corpusScope must be lesson or second_brain' }, { status: 400 });
    }
    if (persona && !HEARTH_PERSONA_IDS.includes(persona as HearthPersona)) {
      return NextResponse.json({ error: 'persona must be guide, philosopher, or friend' }, { status: 400 });
    }

    // Release gating: artifacts for unreleased lessons cannot be generated.
    const released = await DataService.isLessonReleasedToStudent(lessonId, studentId);
    if (!released) {
      return NextResponse.json({ error: 'Lesson has not been released to this student' }, { status: 403 });
    }

    const since = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
    const { artifact, job } = await DataService.createArtifactAndJob({
      studentId,
      lessonId,
      formatType: formatType as ArtifactFormatType,
      sinceIso: since,
      persona: typeof persona === 'string' ? persona as HearthPersona : undefined,
      corpusScope: corpusScope === 'lesson' ? 'lesson' : corpusScope === 'second_brain' ? 'second_brain' : undefined,
    });
    kickArtifactJobs();

    return NextResponse.json(
      { artifactId: artifact.id, jobId: job.id, status: 'pending' },
      { status: 202 },
    );
  } catch (error: unknown) {
    const authResponse = authorizationResponse(error);
    if (authResponse) return authResponse;
    if (error instanceof ArtifactQuotaError) {
      return NextResponse.json({ error: error.message }, { status: 429 });
    }
    console.error('Failed to start artifact generation:', error);
    return NextResponse.json({ error: 'Unable to start artifact generation' }, { status: 500 });
  }
}
