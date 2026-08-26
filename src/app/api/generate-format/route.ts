import { NextResponse } from 'next/server';
import { multiFormatGenerationFlow } from '@/ai/flows/multi-format';
import { DataService } from '@/lib/data-service';
import { resolveRequestIdentity, resolveStudentScope, authorizationResponse } from '@/lib/request-identity';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(req: Request) {
  try {
    const identity = resolveRequestIdentity(req);
    const { searchParams } = new URL(req.url);
    const lessonId = searchParams.get('lessonId');
    const studentId = resolveStudentScope(identity, searchParams.get('studentId'));

    if (!lessonId) {
      return NextResponse.json({ error: 'lessonId query parameter is required' }, { status: 400 });
    }

    const formats = await DataService.getGeneratedFormats(lessonId, studentId);
    return NextResponse.json({ formats });
  } catch (error: unknown) {
    const authResponse = authorizationResponse(error);
    if (authResponse) return authResponse;
    console.error('Failed to retrieve formats:', error);
    return NextResponse.json({ error: 'Unable to retrieve formats' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const identity = resolveRequestIdentity(req);
    const body = await req.json();
    const {
      lessonId,
      markdownContent,
      sourceTitle,
      formatType,
      persona,
    } = body;

    const studentId = resolveStudentScope(identity, body.studentId);

    if ((!lessonId && !markdownContent) || !formatType) {
      return NextResponse.json(
        { error: 'formatType and either lessonId or markdownContent are required' },
        { status: 400 }
      );
    }

    const result = await multiFormatGenerationFlow({
      lessonId,
      studentId,
      markdownContent,
      sourceTitle,
      formatType,
      persona,
    });

    return NextResponse.json(result);
  } catch (error: unknown) {
    const authResponse = authorizationResponse(error);
    if (authResponse) return authResponse;
    console.error('Multi-format generation flow error:', error);
    const message = error instanceof Error ? error.message : '';
    if (message.includes('not found')) {
      return NextResponse.json({ error: 'Lesson not found' }, { status: 404 });
    }
    if (message.includes('Access Denied')) {
      return NextResponse.json({ error: 'Lesson has not been released to this student' }, { status: 403 });
    }
    return NextResponse.json({ error: 'Format generation failed upstream' }, { status: 502 });
  }
}
