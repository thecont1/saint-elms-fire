import { NextResponse } from 'next/server';
import { z } from 'zod';
import { studentChatFlow } from '@/ai/flows/student-chat';
import { resolveRequestIdentity, resolveStudentScope, authorizationResponse } from '@/lib/request-identity';
import { DataService } from '@/lib/data-service';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

function publicErrorStatus(error: unknown): number {
  if (error instanceof z.ZodError) return 400;
  const message = error instanceof Error ? error.message : '';
  if (/query requires an INDEX|FAILED_PRECONDITION.*INDEX/i.test(message)) return 503;
  return 502;
}

export async function POST(req: Request) {
  try {
    const identity = resolveRequestIdentity(req);
    const body = await req.json();
    const { question, courseId, history = [], topK } = body;

    const studentId = resolveStudentScope(identity, body.studentId);

    if (!question) {
      return NextResponse.json({ error: 'Question is required' }, { status: 400 });
    }

    const now = new Date().toISOString();

    // Persist the student's question before generating the response.
    await DataService.saveChatMessage(studentId, {
      sender: 'student',
      content: question,
      timestamp: now,
      isGrounded: false,
    });

    const result = await studentChatFlow({
      studentId,
      question,
      courseId,
      history,
      topK,
    });

    // Persist the tutor's response.
    await DataService.saveChatMessage(studentId, {
      sender: 'tutor',
      content: result.answer,
      timestamp: new Date().toISOString(),
      isGrounded: result.isGrounded,
      groundedSources: result.groundedSources,
    });

    return NextResponse.json(result);
  } catch (error: unknown) {
    const authResponse = authorizationResponse(error);
    if (authResponse) return authResponse;
    console.error('Chat flow execution error:', error);
    return NextResponse.json(
      { error: 'Socrates my Guide could not answer from indexed courseware.' },
      { status: publicErrorStatus(error) }
    );
  }
}
