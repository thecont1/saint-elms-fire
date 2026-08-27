import { NextResponse } from 'next/server';
import { DataService } from '@/lib/data-service';
import { getArtifactJobRunner } from '@/lib/artifact-jobs';
import { ARTIFACT_FORMAT_TYPES, type ArtifactFormatType } from '@/lib/artifacts';
import { checkArtifactQuota, ArtifactQuotaError } from '@/lib/quotas';
import { resolveRequestIdentity, resolveStudentScope, authorizationResponse } from '@/lib/request-identity';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/**
 * POST /api/artifacts/generate — { lessonId, formatType: 'notes_pdf'|'podcast_audio', persona?, corpusScope? }
 * Returns 202 { artifactId, jobId, status: 'pending' }; client polls
 * GET /api/artifacts/{artifactId} and mints a URL when ready.
 */
export async function POST(req: Request) {
  try {
    const identity = resolveRequestIdentity(req);
    const body = await req.json();
    const studentId = resolveStudentScope(identity, body.studentId);
    const { lessonId, formatType, persona, corpusScope } = body as {
      lessonId?: string; formatType?: ArtifactFormatType; persona?: string; corpusScope?: string;
    };

    if (!lessonId || !formatType || !ARTIFACT_FORMAT_TYPES.includes(formatType)) {
      return NextResponse.json(
        { error: `lessonId and formatType (${ARTIFACT_FORMAT_TYPES.join('|')}) are required` },
        { status: 400 },
      );
    }
    if (corpusScope && !['lesson', 'second_brain'].includes(corpusScope)) {
      return NextResponse.json({ error: 'corpusScope must be lesson or second_brain' }, { status: 400 });
    }

    // Release gating: artifacts for unreleased lessons cannot be generated.
    const released = await DataService.isLessonReleasedToStudent(lessonId, studentId);
    if (!released) {
      return NextResponse.json({ error: 'Lesson has not been released to this student' }, { status: 403 });
    }

    // Cost guardrail (Track C2): per-student daily generation quota.
    const since = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
    const generatedToday = await DataService.countArtifactsCreatedSince(studentId, since);
    checkArtifactQuota(generatedToday);

    const artifact = await DataService.createArtifact({ studentId, lessonId, formatType });
    const job = await DataService.createJob({
      kind: formatType,
      payload: {
        artifactId: artifact.id,
        studentId,
        lessonId,
        ...(persona ? { persona: String(persona).slice(0, 200) } : {}),
        ...(corpusScope ? { corpusScope } : {}),
      },
    });
    getArtifactJobRunner().kick();

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
