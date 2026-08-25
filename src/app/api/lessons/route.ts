import { NextResponse } from 'next/server';
import { DataService } from '@/lib/data-service';

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const courseId = searchParams.get('courseId');
    const moduleId = searchParams.get('moduleId') || undefined;

    if (!courseId) {
      return NextResponse.json({ error: 'courseId query parameter is required' }, { status: 400 });
    }

    const lessons = await DataService.getLessons(courseId, moduleId);
    return NextResponse.json({ lessons });
  } catch (error: any) {
    console.error('Failed to get lessons:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { courseId, moduleId, title, markdownContent, summary, tags, order } = body;

    if (!courseId || !moduleId || !title || !markdownContent) {
      return NextResponse.json(
        { error: 'courseId, moduleId, title, and markdownContent are required' },
        { status: 400 }
      );
    }

    const lesson = await DataService.createLesson({
      courseId,
      moduleId,
      title,
      markdownContent,
      summary: summary || '',
      tags: tags || [],
      order: order ?? 1,
    });

    return NextResponse.json({ lesson });
  } catch (error: any) {
    console.error('Failed to create lesson:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
