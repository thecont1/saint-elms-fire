// @ts-nocheck -- Bun exposes bun:test at runtime.
import { afterEach, beforeEach, describe, expect, mock, test } from 'bun:test';

const identity = { userId: 'admin-1', role: 'admin', mode: 'demo' };
let stored = {
  primary: 'gemini-primary',
  fallback: 'sarvam-fallback',
  overrides: {},
  updatedAt: '2026-08-31T00:00:00.000Z',
  updatedBy: 'bootstrap',
};

mock.module('@/lib/request-identity', () => ({
  resolveRequestIdentity: () => identity,
  requireAdmin: (value: typeof identity) => {
    if (value.role !== 'admin') {
      const error = new Error('Admin access required') as Error & { status: number };
      error.status = 403;
      throw error;
    }
    return value;
  },
  authorizationResponse: (error: Error & { status?: number }) => error.status
    ? Response.json({ error: error.message }, { status: error.status })
    : null,
}));

mock.module('@/ai/model-routing-store', () => ({
  modelRoutingStore: {
    get: async () => stored,
    put: async (value: any, updatedBy: string) => {
      stored = { ...value, updatedAt: '2026-08-31T12:00:00.000Z', updatedBy };
      return stored;
    },
  },
}));

let testFireError: Error | null = null;
mock.module('@/ai/model-router', () => ({
  testFireModel: async (model: string) => {
    if (testFireError) throw testFireError;
    return {
      latencyMs: 17,
      servedBy: { model, role: 'primary', attemptCount: 1 },
      text: 'OK',
    };
  },
}));

const { GET, PUT } = await import('./route');
const { POST: TEST_FIRE } = await import('./test/route');

beforeEach(() => {
  identity.userId = 'admin-1';
  identity.role = 'admin';
  testFireError = null;
});

afterEach(() => {
  identity.role = 'admin';
});

describe('/api/model-routing', () => {
  test('GET returns runtime config to an authenticated student', async () => {
    identity.role = 'student';
    const response = await GET(new Request('http://local/api/model-routing'));
    expect(response.status).toBe(200);
    const data = await response.json();
    expect(data.config.primary).toBe('gemini-primary');
    expect(Array.isArray(data.breakers)).toBe(true);
  });

  test('PUT returns 403 to non-admin', async () => {
    identity.role = 'student';
    const response = await PUT(new Request('http://local/api/model-routing', {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ primary: 'a', fallback: 'b', overrides: {} }),
    }));
    expect(response.status).toBe(403);
  });

  test('PUT validates the exact public write contract', async () => {
    const response = await PUT(new Request('http://local/api/model-routing', {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ primary: '', fallback: 'b', overrides: { vision: 'x' } }),
    }));
    expect(response.status).toBe(400);
  });

  test('PUT stamps authenticated admin as updatedBy', async () => {
    const response = await PUT(new Request('http://local/api/model-routing', {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ primary: 'new-primary', fallback: 'new-fallback', overrides: { chat: 'chat-model' } }),
    }));
    expect(response.status).toBe(200);
    const data = await response.json();
    expect(data.config).toMatchObject({ primary: 'new-primary', updatedBy: 'admin-1' });
  });
});

describe('/api/model-routing/test', () => {
  const request = (model: string) => new Request('http://local/api/model-routing/test', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ model }),
  });

  test('requires admin', async () => {
    identity.role = 'student';
    expect((await TEST_FIRE(request('gemini-3.7-flash'))).status).toBe(403);
  });

  test('returns measured status for the exact requested model', async () => {
    const response = await TEST_FIRE(request('custom-model-id'));
    expect(response.status).toBe(200);
    expect(await response.json()).toMatchObject({
      ok: true,
      latencyMs: 17,
      servedBy: { model: 'custom-model-id', role: 'primary', attemptCount: 1 },
    });
  });

  test('reports provider failures as 502 without a fallback disguise', async () => {
    testFireError = new Error('503 unavailable');
    const response = await TEST_FIRE(request('sick-model'));
    expect(response.status).toBe(502);
    expect(await response.json()).toEqual({ ok: false, error: '503 unavailable' });
  });
});
