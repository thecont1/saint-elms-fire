import { NextResponse } from 'next/server';
import { DataService } from '@/lib/data-service';
import { ingestCoursewareFlow } from '@/ai/flows/ingestion';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const studentId = searchParams.get('studentId') || 'student-alex';
    const releases = await DataService.getReleasesForStudent(studentId);
    return NextResponse.json({ releases });
  } catch (error: any) {
    console.error('Failed to get releases:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { courseId, moduleId, lessonId, studentId = 'student-alex' } = body;

    if (!courseId || !moduleId) {
      return NextResponse.json(
        { error: 'courseId and moduleId are required' },
        { status: 400 }
      );
    }

    // 1. Record release event in Firestore
    const release = await DataService.createRelease({
      courseId,
      moduleId,
      lessonId: lessonId || undefined,
      studentId,
      status: 'released',
    });

    // 2. Identify lessons that need ingestion into Second Brain
    let lessonsToIngest = [];
    if (lessonId) {
      const single = await DataService.getLesson(lessonId);
      if (single) lessonsToIngest.push(single);
    } else {
      lessonsToIngest = await DataService.getLessons(courseId, moduleId);
    }

    // 3. Trigger Genkit Ingestion Flow for each lesson to extract knowledge graph nodes/edges
    const ingestionResults = [];
    for (const lesson of lessonsToIngest) {
      try {
        const result = await ingestCoursewareFlow({
          lessonId: lesson.id,
          courseId: lesson.courseId,
          moduleId: lesson.moduleId,
          studentId,
          markdownContent: lesson.markdownContent,
          lessonTitle: lesson.title,
          releaseTimestamp: release.releasedAt,
        });
        ingestionResults.push({ lessonId: lesson.id, status: 'success', result });
      } catch (ingestErr: unknown) {
        console.error(`Ingestion flow failed for lesson ${lesson.id}:`, ingestErr);
        ingestionResults.push({
          lessonId: lesson.id,
          status: 'error',
          error: 'Courseware ingestion failed upstream',
        });
      }
    }

    const failedIngestions = ingestionResults.filter((result) => result.status === 'error').length;
    return NextResponse.json({
      release,
      ingestedCount: lessonsToIngest.length,
      ingestionResults,
    }, { status: failedIngestions > 0 ? 502 : 200 });
  } catch (error: any) {
    console.error('Failed to process release:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
