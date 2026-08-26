import { NextResponse } from 'next/server';
import { DataService } from '@/lib/data-service';
import { resolveRequestIdentity, resolveStudentScope, authorizationResponse } from '@/lib/request-identity';

export async function GET(req: Request) {
  try {
    const identity = resolveRequestIdentity(req);
    const { searchParams } = new URL(req.url);
    const studentId = resolveStudentScope(identity, searchParams.get('studentId'));

    const history = await DataService.getQuizHistory(studentId);
    return NextResponse.json({ history });
  } catch (error: unknown) {
    const authResponse = authorizationResponse(error);
    if (authResponse) return authResponse;
    console.error('Failed to get quiz history:', error);
    return NextResponse.json({ error: 'Unable to load quiz history' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const identity = resolveRequestIdentity(req);
    const body = await req.json();
    const {
      lessonId,
      concept,
      question,
      selectedOptionIndex,
      isCorrect,
      feedback,
    } = body;

    const studentId = resolveStudentScope(identity, body.studentId);

    if (!lessonId || !concept || !question || selectedOptionIndex === undefined) {
      return NextResponse.json(
        { error: 'Missing required quiz submission fields' },
        { status: 400 }
      );
    }

    const submission = await DataService.recordQuizSubmission({
      studentId,
      lessonId,
      concept,
      question,
      selectedOptionIndex,
      isCorrect: Boolean(isCorrect),
      feedback: feedback || (isCorrect ? 'Correct!' : 'Incorrect conceptual alignment.'),
      weakSpotDetected: !isCorrect,
    });

    return NextResponse.json({ submission });
  } catch (error: unknown) {
    const authResponse = authorizationResponse(error);
    if (authResponse) return authResponse;
    console.error('Failed to record quiz submission:', error);
    return NextResponse.json({ error: 'Unable to record quiz submission' }, { status: 500 });
  }
}
