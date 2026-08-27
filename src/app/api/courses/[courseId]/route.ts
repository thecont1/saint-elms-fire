import { NextResponse } from 'next/server';
import { DataService } from '@/lib/data-service';
import { resolveRequestIdentity, authorizationResponse } from '@/lib/request-identity';

export async function GET(
  req: Request,
  { params }: { params: Promise<{ courseId: string }> }
) {
  try {
    const identity = resolveRequestIdentity(req);
    const { courseId } = await params;
    const course = await DataService.getCourse(courseId);
    if (!course) {
      return NextResponse.json({ error: 'Course not found' }, { status: 404 });
    }
    const modules = await DataService.getModules(courseId);
    const lessons = await DataService.getCoursewareLessons(courseId, undefined, identity);

    return NextResponse.json({
      course,
      modules,
      lessons,
    });
  } catch (error: unknown) {
    const authResponse = authorizationResponse(error);
    if (authResponse) return authResponse;
    console.error('Failed to get course details:', error);
    return NextResponse.json({ error: 'Failed to load course details' }, { status: 500 });
  }
}
