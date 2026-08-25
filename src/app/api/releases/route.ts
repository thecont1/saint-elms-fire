import { NextResponse } from 'next/server';
import { DataService } from '@/lib/data-service';
import { ingestCoursewareFlow } from '@/ai/flows/ingestion';
import { IngestionStageError } from '@/lib/second-brain-ingestion';
import type { IngestionErrorCategory, Lesson, ReleaseEvent } from '@/lib/types';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const studentId = searchParams.get('studentId') || 'student-alex';
    const releases = await DataService.getReleaseAuditForStudent(studentId);
    return NextResponse.json({ releases });
  } catch (error: unknown) {
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
  const completedRelease = await DataService.finalizeRelease(release.id);
  return { release: completedRelease, ingestionResults };
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { courseId, moduleId, lessonId, studentId = 'student-alex' } = body;
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
    const existing = await DataService.findEquivalentRelease({ moduleId, studentId, targetLessonIds });
    if (existing) {
      return NextResponse.json({
        release: existing,
        ingestionResults: [],
        ingestedCount: 0,
        idempotent: true,
      }, { status: 200 });
    }

    const pending = await DataService.createPendingRelease({
      courseId,
      moduleId,
      lessonId: lessonId || undefined,
      studentId,
      targetLessonIds,
    });
    const result = await ingestRelease(pending, lessonsToIngest);
    return NextResponse.json({
      ...result,
      ingestedCount: result.ingestionResults.filter(item => item.status === 'success').length,
      retryUrl: result.release.overallStatus === 'failed' ? `/api/releases/${result.release.id}/retry` : undefined,
    }, { status: result.release.overallStatus === 'failed' ? 502 : 201 });
  } catch (error: unknown) {
    console.error('Failed to process release:', error);
    return NextResponse.json({ error: 'Release processing failed' }, { status: 500 });
  }
}
