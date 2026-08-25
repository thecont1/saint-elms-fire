import { NextResponse } from 'next/server';
import { DataService } from '@/lib/data-service';

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const studentId = searchParams.get('studentId') || 'student-alex';

    const history = await DataService.getQuizHistory(studentId);
    return NextResponse.json({ history });
  } catch (error: any) {
    console.error('Failed to get quiz history:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      studentId = 'student-alex',
      lessonId,
      concept,
      question,
      selectedOptionIndex,
      isCorrect,
      feedback,
    } = body;

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
  } catch (error: any) {
    console.error('Failed to record quiz submission:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
