// @ts-nocheck -- Bun exposes bun:test at runtime.
import { beforeEach, describe, expect, mock, test } from 'bun:test';

const identity = { userId: 'student-brinda', role: 'student', mode: 'demo', personaId: 'brinda' };

mock.module('@/lib/request-identity', () => ({
  resolveRequestIdentity: () => identity,
  resolveStudentScope: (value: typeof identity, requested?: string | null) => {
    if (value.role === 'student') return value.userId;
    return requested || value.userId;
  },
  authorizationResponse: (error: Error & { status?: number }) => error.status
    ? Response.json({ error: error.message }, { status: error.status })
    : null,
}));

const savedMessages: any[] = [];
const savedIds: Array<string | undefined> = [];
const persistedMessages = new Map<string, any>();
mock.module('@/lib/data-service', () => ({
  DataService: {
    saveChatMessage: async (studentId: string, msg: any, id?: string) => {
      savedIds.push(id);
      const record = { id: id ?? `msg-${savedMessages.length + 1}`, ...msg };
      savedMessages.push({ studentId, ...record });
      persistedMessages.set(record.id, { studentId, ...record });
      return record;
    },
  },
}));

const flowCalls: Array<{ flow: string; input: any }> = [];
let guideFailuresRemaining = 0;
const flowResult = (tag: string) => ({
  answer: `${tag} answer`,
  isGrounded: true,
  groundedSources: [],
  servedBy: { model: 'gemini-3.7-flash', role: 'primary', attemptCount: 1 },
});

mock.module('@/ai/flows/guide-chat', () => ({
  guideChatFlow: async (input: any) => {
    flowCalls.push({ flow: 'guide', input });
    if (guideFailuresRemaining > 0) {
      guideFailuresRemaining -= 1;
      throw new Error('503 unavailable');
    }
    return flowResult('guide');
  },
}));
mock.module('@/ai/flows/friend-chat', () => ({
  friendChatFlow: async (input: any) => {
    flowCalls.push({ flow: 'friend', input });
    return flowResult('friend');
  },
}));
mock.module('@/ai/flows/philosopher-chat', () => ({
  philosopherChatFlow: async (input: any) => {
    flowCalls.push({ flow: 'philosopher', input });
    return flowResult('philosopher');
  },
}));

const { POST } = await import('./route');

function chatRequest(body: Record<string, unknown>): Request {
  return new Request('http://local/api/chat', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(body),
  });
}

beforeEach(() => {
  savedMessages.length = 0;
  savedIds.length = 0;
  persistedMessages.clear();
  flowCalls.length = 0;
  guideFailuresRemaining = 0;
  identity.userId = 'student-brinda';
  identity.role = 'student';
});

describe('/api/chat persona contract', () => {
  test('rejects a missing persona with 400 and never touches a flow', async () => {
    const response = await POST(chatRequest({ question: 'hello' }));
    expect(response.status).toBe(400);
    const data = await response.json();
    expect(data.error).toContain('persona');
    expect(flowCalls).toHaveLength(0);
    expect(savedMessages).toHaveLength(0);
  });

  test.each(['', 'bad/id', 'x'.repeat(129)])('rejects unsafe retry message ids before persistence %#', async (messageId) => {
    const res = await POST(chatRequest({ persona: 'guide', question: 'Explain momentum', messageId }));
    expect(res.status).toBe(400);
    expect(savedMessages).toHaveLength(0);
    expect(flowCalls).toHaveLength(0);
  });

  test('rejects an unknown persona with 400', async () => {
    const response = await POST(chatRequest({ question: 'hello', persona: 'oracle' }));
    expect(response.status).toBe(400);
    expect(flowCalls).toHaveLength(0);
  });

  test('rejects a missing question with 400', async () => {
    const response = await POST(chatRequest({ persona: 'guide' }));
    expect(response.status).toBe(400);
    expect(flowCalls).toHaveLength(0);
  });

  test.each(['guide', 'friend', 'philosopher'])('dispatches persona=%s to its own flow', async (persona) => {
    const response = await POST(chatRequest({ persona, question: 'lane check' }));
    expect(response.status).toBe(200);
    expect(flowCalls).toHaveLength(1);
    expect(flowCalls[0].flow).toBe(persona);
    const data = await response.json();
    expect(data.answer).toBe(`${persona} answer`);
    expect(data.servedBy.model).toBe('gemini-3.7-flash');
  });

  test('persists both turns tagged with the persona and the resolved student scope', async () => {
    const response = await POST(chatRequest({
      persona: 'friend',
      question: 'When are semester fees due?',
      studentId: 'student-ananya',
    }));
    expect(response.status).toBe(200);
    expect(flowCalls[0].input.studentId).toBe('student-brinda');
    expect(savedMessages).toHaveLength(2);
    expect(savedMessages[0]).toMatchObject({ studentId: 'student-brinda', persona: 'friend', sender: 'student' });
    expect(savedMessages[1]).toMatchObject({
      studentId: 'student-brinda',
      persona: 'friend',
      sender: 'tutor',
      servedBy: { model: 'gemini-3.7-flash', role: 'primary', attemptCount: 1 },
    });
  });

  test('uses stable document ids when the client retries the same turn', async () => {
    guideFailuresRemaining = 1;
    const first = await POST(chatRequest({ persona: 'guide', question: 'Explain momentum', messageId: 'turn-42' }));
    const retry = await POST(chatRequest({ persona: 'guide', question: 'Explain momentum', messageId: 'turn-42' }));

    expect(first.status).toBe(502);
    expect(retry.status).toBe(200);
    expect(savedIds).toEqual([
      'student-brinda-guide-student-turn-42',
      'student-brinda-guide-student-turn-42',
      'student-brinda-guide-tutor-turn-42',
    ]);
    expect([...persistedMessages.values()].filter((message) => message.sender === 'student')).toHaveLength(1);
    expect([...persistedMessages.values()].filter((message) => message.sender === 'tutor')).toHaveLength(1);
  });

  test('keeps one incomplete student turn when the retry also fails', async () => {
    guideFailuresRemaining = 2;
    const request = () => POST(chatRequest({
      persona: 'guide',
      question: 'Explain momentum',
      messageId: 'turn-43',
    }));

    expect((await request()).status).toBe(502);
    expect((await request()).status).toBe(502);
    expect([...persistedMessages.values()].filter((message) => message.sender === 'student')).toHaveLength(1);
    expect([...persistedMessages.values()].filter((message) => message.sender === 'tutor')).toHaveLength(0);
  });

  test('passes conversation history through to the persona flow', async () => {
    const history = [{ role: 'user', content: 'earlier question' }];
    await POST(chatRequest({ persona: 'philosopher', question: 'follow up', history }));
    expect(flowCalls[0].input.history).toEqual(history);
  });
});
