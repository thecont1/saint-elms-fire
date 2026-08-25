import { NextResponse } from 'next/server';
import { studentChatFlow } from '@/ai/flows/student-chat';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

function publicErrorStatus(error: unknown): number {
  const message = error instanceof Error ? error.message : '';
  if (/validation|invalid|too_big|too_small/i.test(message)) return 400;
  if (/index/i.test(message)) return 503;
  return 502;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { studentId = 'student-alex', question, courseId, history = [], topK } = body;

    if (!question) {
      return NextResponse.json({ error: 'Question is required' }, { status: 400 });
    }

    const result = await studentChatFlow({
      studentId,
      question,
      courseId,
      history,
      topK,
    });

    return NextResponse.json(result);
  } catch (error: unknown) {
    console.error('Chat flow execution error:', error);
    return NextResponse.json(
      { error: 'The Socratic Beacon could not answer from indexed courseware.' },
      { status: publicErrorStatus(error) }
    );
  }
}
