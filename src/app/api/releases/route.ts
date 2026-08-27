import { NextResponse } from 'next/server';
import { DataService } from '@/lib/data-service';
import { ingestCoursewareFlow } from '@/ai/flows/ingestion';
import { IngestionStageError } from '@/lib/second-brain-ingestion';
import { getArtifactJobRunner } from '@/lib/artifact-jobs';
import { resolveRequestIdentity, resolveStudentScope, requireAdmin, authorizationResponse } from '@/lib/request-identity';
import type { IngestionErrorCategory, Lesson, ReleaseEvent } from '@/lib/types';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(req: Request) {
  try {
    const identity = resolveRequestIdentity(req);
    const { searchParams } = new URL(req.url);
    const studentId = resolveStudentScope(identity, searchParams.get('studentId'));
    const releases = await DataService.getReleaseAuditForStudent(studentId);
    return NextResponse.json({ releases });
  } catch (error: unknown) {
    const authResponse = authorizationResponse(error);
    if (authResponse) return authResponse;
    console.error('Failed to get release audit log:', error);
    return NextResponse.json({ error: 'Unable to load releases' }, { status: 500 });
  }
}

function boundedCategory(error: unknown): IngestionErrorCategory {
  return error instanceof IngestionStageError ? error.category : 'unknown';
}

export async function ingestRelease(release: ReleaseEvent, lessons: Lesson[]) {
  const ingestionResults = [];
  for (const lesson of lessons) {
    try {
      const result = await ingestCoursewareFlow({
        releaseId: release.id,
        lessonId: lesson.id,
        courseId: lesson.courseId,
        moduleId: lesson.moduleId,
        studentId: release.studentId,
        markdownContent: lesson.markdownContent,
        lessonTitle: lesson.title,
        releaseTimestamp: release.requestedAt || release.releasedAt,
      });
      ingestionResults.push({ lessonId: lesson.id, status: 'success' as const, result });
    } catch (error: unknown) {
      const category = boundedCategory(error);
      console.error('Second Brain ingestion failed', { releaseId: release.id, lessonId: lesson.id, category });
      const failedRelease = await DataService.failRelease(release.id, category);
      return { release: failedRelease, ingestionResults: [...ingestionResults, { lessonId: lesson.id, status: 'error' as const, error: category }] };
    }
  }
  // Finalize can throw if, e.g., the transaction hits a conflicting write or
  // a step record is missing at completion time. Do not let that escape to the
  // outer 500 handler: persist a bounded failure so the release stays
  // retryable and the audit log reports an honest state.
  let completedRelease: ReleaseEvent;
  try {
    completedRelease = await DataService.finalizeRelease(release.id);
  } catch (finalizeError) {
    console.error('Release finalization failed', { releaseId: release.id, error: finalizeError instanceof Error ? finalizeError.message : String(finalizeError) });
    const failedRelease = await DataService.failRelease(release.id, 'unknown');
    return { release: failedRelease, ingestionResults };
  }
  // Phase 6, Track B1: recommended readings are a SOFT post-release stage.
  // They enrich the released material but must never fail or delay the release.
  // Persist a durable job so retries survive process restarts and idempotent
  // ingestion prevents duplicate recommendations on replay.
  const targetLessonIds = completedRelease.targetLessonIds ?? (completedRelease.lessonId ? [completedRelease.lessonId] : []);
  const job = await DataService.createJob({
    kind: 'reading_recommendation',
    payload: {
      releaseId: completedRelease.id,
      studentId: completedRelease.studentId,
      courseId: completedRelease.courseId,
      moduleId: completedRelease.moduleId,
      targetLessonIds: targetLessonIds.join(','),
    },
  });
  getArtifactJobRunner().kick();
  return { release: completedRelease, ingestionResults, recommendJobId: job.id };
}

export async function POST(req: Request) {
  try {
    const identity = resolveRequestIdentity(req);
    requireAdmin(identity);
    const body = await req.json();
    const { courseId, moduleId, lessonId } = body;
    const studentId = resolveStudentScope(identity, body.studentId);
    if (!courseId || !moduleId) {
      return NextResponse.json({ error: 'courseId and moduleId are required' }, { status: 400 });
    }

    let lessonsToIngest: Lesson[] = [];
    if (lessonId) {
      const lesson = await DataService.getLesson(lessonId);
      if (!lesson || lesson.courseId !== courseId || lesson.moduleId !== moduleId) {
        return NextResponse.json({ error: 'Lesson does not belong to the requested course/module' }, { status: 400 });
      }
      lessonsToIngest = [lesson];
    } else {
      lessonsToIngest = await DataService.getLessons(courseId, moduleId);
    }
    if (lessonsToIngest.length === 0) {
      return NextResponse.json({ error: 'No lessons found for release target' }, { status: 400 });
    }

    const targetLessonIds = lessonsToIngest.map(lesson => lesson.id);
    // Atomically dedupe + create in one transaction (no TOCTOU between the
    // equivalent-release check and the pending-record write).
    const { release: pending, created } = await DataService.createPendingReleaseIfAbsent({
      courseId,
      moduleId,
      lessonId: lessonId || undefined,
      studentId,
      targetLessonIds,
    });
    if (!created) {
      return NextResponse.json({
        release: pending,
        ingestionResults: [],
        ingestedCount: 0,
        idempotent: true,
      }, { status: 200 });
    }

    const result = await ingestRelease(pending, lessonsToIngest);
    return NextResponse.json({
      ...result,
      ingestedCount: result.ingestionResults.filter(item => item.status === 'success').length,
      retryUrl: result.release.overallStatus === 'failed' ? `/api/releases/${result.release.id}/retry` : undefined,
    }, { status: result.release.overallStatus === 'failed' ? 502 : 201 });
  } catch (error: unknown) {
    const authResponse = authorizationResponse(error);
    if (authResponse) return authResponse;
    console.error('Failed to process release:', error);
    return NextResponse.json({ error: 'Release processing failed' }, { status: 500 });
  }
}
