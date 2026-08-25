import { NextResponse } from 'next/server';
import { multiFormatGenerationFlow } from '@/ai/flows/multi-format';
import { DataService } from '@/lib/data-service';

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const lessonId = searchParams.get('lessonId');
    const studentId = searchParams.get('studentId') || 'student-alex';

    if (!lessonId) {
      return NextResponse.json({ error: 'lessonId query parameter is required' }, { status: 400 });
    }

    const formats = await DataService.getGeneratedFormats(lessonId, studentId);
    return NextResponse.json({ formats });
  } catch (error: any) {
    console.error('Failed to retrieve formats:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { lessonId, studentId = 'student-alex', formatType, persona } = body;

    if (!lessonId || !formatType) {
      return NextResponse.json(
        { error: 'lessonId and formatType are required' },
        { status: 400 }
      );
    }

    const result = await multiFormatGenerationFlow({
      lessonId,
      studentId,
      formatType,
      persona,
    });

    return NextResponse.json(result);
  } catch (error: any) {
    console.error('Multi-format generation flow error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
