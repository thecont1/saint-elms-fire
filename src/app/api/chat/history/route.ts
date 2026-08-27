import { NextResponse } from 'next/server';
import { DataService } from '@/lib/data-service';
import { resolveRequestIdentity, resolveStudentScope, authorizationResponse } from '@/lib/request-identity';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/**
 * GET /api/chat/history?studentId=...&limit=...
 *
 * Returns persisted chat messages for the student, oldest first.
 */
export async function GET(req: Request) {
  try {
    const identity = resolveRequestIdentity(req);
    const { searchParams } = new URL(req.url);
    const studentId = resolveStudentScope(identity, searchParams.get('studentId'));
    const limit = Math.min(200, Math.max(1, Number(searchParams.get('limit')) || 100));

    const messages = await DataService.getChatHistory(studentId, limit);
    return NextResponse.json({ messages });
  } catch (error: unknown) {
    const authResponse = authorizationResponse(error);
    if (authResponse) return authResponse;
    console.error('Chat history fetch failed:', error);
    return NextResponse.json({ error: 'Failed to load chat history' }, { status: 500 });
  }
}
