import { NextResponse } from 'next/server';
import { DataService } from '@/lib/data-service';

export async function GET(
  req: Request,
  { params }: { params: Promise<{ courseId: string }> }
) {
  try {
    const { courseId } = await params;
    const course = await DataService.getCourse(courseId);
    if (!course) {
      return NextResponse.json({ error: 'Course not found' }, { status: 404 });
    }
    const modules = await DataService.getModules(courseId);
    const lessons = await DataService.getLessons(courseId);

    return NextResponse.json({
      course,
      modules,
      lessons,
    });
  } catch (error: any) {
    console.error('Failed to get course details:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
