// @ts-nocheck -- Bun exposes bun:test at runtime.
import { afterEach, beforeEach, describe, expect, test } from 'bun:test';
import { createDemoSessionCookie } from '@/lib/demo-session';
import { GET, POST } from './route';

const originalEnv = { ...process.env };

beforeEach(() => {
  process.env.NODE_ENV = 'test';
  process.env.AUTH_MODE = 'demo';
  process.env.DEMO_SESSION_SECRET = 'test-secret-with-enough-entropy';
});

afterEach(() => {
  for (const key of Object.keys(process.env)) {
    if (!(key in originalEnv)) delete process.env[key];
  }
  Object.assign(process.env, originalEnv);
});

describe('/api/session', () => {
  test('sets a selected principal server-side', async () => {
    const response = await POST(new Request('http://local/api/session', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ persona: 'brinda' }),
    }));
    expect(response.status).toBe(200);
    expect(response.headers.get('set-cookie')).toContain('HttpOnly');
    expect((await response.json()).selected.userId).toBe('student-brinda');
  });

  test('resolves the selected session on GET', async () => {
    const response = await GET(new Request('http://local/api/session', {
      headers: { cookie: createDemoSessionCookie('chetna') },
    }));
    const body = await response.json();
    expect(body.selected.id).toBe('chetna');
    expect(body.personas).toHaveLength(4);
  });

  test('rejects arbitrary identities', async () => {
    const response = await POST(new Request('http://local/api/session', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ persona: 'student-injected', role: 'admin' }),
    }));
    expect(response.status).toBe(400);
  });

  test('is absent in trusted-proxy and production modes', async () => {
    process.env.AUTH_MODE = 'trusted-proxy';
    expect((await GET(new Request('http://local/api/session'))).status).toBe(404);
    process.env.AUTH_MODE = 'demo';
    process.env.NODE_ENV = 'production';
    expect((await GET(new Request('http://local/api/session'))).status).toBe(404);
  });
});
