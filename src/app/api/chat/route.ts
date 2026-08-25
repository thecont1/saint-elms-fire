import { NextResponse } from 'next/server';
import { studentChatFlow } from '@/ai/flows/student-chat';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { studentId = 'student-alex', question, courseId, history = [] } = body;

    if (!question) {
      return NextResponse.json({ error: 'Question is required' }, { status: 400 });
    }

    const result = await studentChatFlow({
      studentId,
      question,
      courseId,
      history,
    });

    return NextResponse.json(result);
  } catch (error: any) {
    console.error('Chat flow execution error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
