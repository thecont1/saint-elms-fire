import { NextResponse } from 'next/server';
import { DataService } from '@/lib/data-service';
import { resolveRequestIdentity, resolveStudentScope, authorizationResponse } from '@/lib/request-identity';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/** GET /api/artifacts?lessonId= — list the caller's artifacts for a released lesson. */
export async function GET(req: Request) {
  try {
    const identity = resolveRequestIdentity(req);
    const { searchParams } = new URL(req.url);
    const lessonId = searchParams.get('lessonId');
    const studentId = resolveStudentScope(identity, searchParams.get('studentId'));
    if (!lessonId) {
      return NextResponse.json({ error: 'lessonId query parameter is required' }, { status: 400 });
    }
    const released = await DataService.isLessonReleasedToStudent(lessonId, studentId);
    if (!released) {
      return NextResponse.json({ error: 'Lesson has not been released to this student' }, { status: 403 });
    }
    const artifacts = (await DataService.getArtifactsForLesson(studentId, lessonId)).map(
      ({ storagePath: _storagePath, ...rest }) => rest
    );
    return NextResponse.json({ artifacts });
  } catch (error: unknown) {
    const authResponse = authorizationResponse(error);
    if (authResponse) return authResponse;
    console.error('Failed to list artifacts:', error);
    return NextResponse.json({ error: 'Unable to list artifacts' }, { status: 500 });
  }
}
