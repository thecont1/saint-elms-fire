import { NextResponse } from 'next/server';
import { z } from 'zod';
import { guideChatFlow } from '@/ai/flows/guide-chat';
import { friendChatFlow } from '@/ai/flows/friend-chat';
import { philosopherChatFlow } from '@/ai/flows/philosopher-chat';
import { resolveRequestIdentity, resolveStudentScope, authorizationResponse } from '@/lib/request-identity';
import { DataService } from '@/lib/data-service';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const MessageIdSchema = z.string().regex(/^[A-Za-z0-9_-]{1,128}$/).optional();

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
    const { question, courseId, history = [], topK, persona } = body;
    const messageId = MessageIdSchema.parse(body.messageId);
    
    if (!persona || !['guide', 'philosopher', 'friend'].includes(persona)) {
      return NextResponse.json({ error: 'persona is required and must be one of: guide, philosopher, friend' }, { status: 400 });
    }

    const studentId = resolveStudentScope(identity, body.studentId);

    if (!question) {
      return NextResponse.json({ error: 'Question is required' }, { status: 400 });
    }

    const now = new Date().toISOString();

    // Persist the student's question before generating the response.
    await DataService.saveChatMessage(studentId, {
      persona,
      sender: 'student',
      content: question,
      timestamp: now,
      isGrounded: false,
    }, messageId
      ? `${studentId}-${persona}-student-${messageId}`
      : undefined);

    let result;
    if (persona === 'guide') {
      result = await guideChatFlow({
        studentId,
        question,
        courseId,
        history,
        topK,
      });
    } else if (persona === 'friend') {
      result = await friendChatFlow({
        studentId,
        question,
        history,
        topK,
      });
    } else if (persona === 'philosopher') {
      result = await philosopherChatFlow({
        studentId,
        question,
        courseId,
        history,
        topK,
      });
    } else {
      // placeholders for now
      result = { answer: 'Not implemented', isGrounded: false, groundedSources: [] };
    }

    // Persist the tutor's response.
    await DataService.saveChatMessage(studentId, {
      persona,
      sender: 'tutor',
      content: result.answer,
      timestamp: new Date().toISOString(),
      isGrounded: result.isGrounded,
      groundedSources: result.groundedSources,
      servedBy: result.servedBy,
    }, messageId
      ? `${studentId}-${persona}-tutor-${messageId}`
      : undefined);

    return NextResponse.json(result);
  } catch (error: unknown) {
    const authResponse = authorizationResponse(error);
    if (authResponse) return authResponse;
    console.error('Chat flow execution error:', error);
    return NextResponse.json(
      { error: 'The selected persona could not answer this request.' },
      { status: publicErrorStatus(error) }
    );
  }
}
