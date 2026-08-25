import { NextResponse } from 'next/server';
import { proactiveSocraticTutorFlow } from '@/ai/flows/socratic-tutor';
import { evaluateSocraticFlow } from '@/ai/flows/evaluate-socratic';
import { DataService } from '@/lib/data-service';

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const studentId = searchParams.get('studentId') || 'student-alex';
    const forceNew = searchParams.get('forceNew') === 'true';

    const session = await proactiveSocraticTutorFlow({
      studentId,
      forceNew,
    });

    const recentSessions = await DataService.getRecentSocraticSessions(studentId);

    return NextResponse.json({
      activeSession: session,
      recentSessions,
    });
  } catch (error: any) {
    console.error('Socratic tutor error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { sessionId, studentResponse } = body;

    if (!sessionId || !studentResponse) {
      return NextResponse.json(
        { error: 'sessionId and studentResponse are required' },
        { status: 400 }
      );
    }

    const evaluation = await evaluateSocraticFlow({
      sessionId,
      studentResponse,
    });

    return NextResponse.json({ evaluation });
  } catch (error: any) {
    console.error('Socratic evaluation error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
