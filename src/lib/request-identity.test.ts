// @ts-nocheck -- Bun exposes bun:test at runtime.
import { afterEach, beforeEach, describe, expect, test } from 'bun:test';
import { resolveRequestIdentity, resolveStudentScope } from './request-identity';
import { createDemoSessionCookie } from './demo-session';

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

describe('demo request identity', () => {
  test('resolves the server-issued selected persona instead of request headers', () => {
    const req = new Request('http://local/api/graph', {
      headers: {
        cookie: createDemoSessionCookie('brinda'),
        'X-Saint-Elms-User-Id': 'student-chetna',
        'X-Saint-Elms-Role': 'admin',
      },
    });
    expect(resolveRequestIdentity(req)).toEqual({
      userId: 'student-brinda',
      role: 'student',
      mode: 'demo',
      personaId: 'brinda',
    });
  });

  test('defaults a fresh demo session to Ananya', () => {
    delete process.env.DEMO_USER_ID;
    delete process.env.DEMO_USER_ROLE;
    expect(resolveRequestIdentity(new Request('http://local'))).toMatchObject({
      userId: 'student-ananya', role: 'student', personaId: 'ananya',
    });
  });

  test('preserves an explicitly configured legacy demo principal', () => {
    process.env.DEMO_USER_ID = 'student-configured';
    process.env.DEMO_USER_ROLE = 'admin';
    expect(resolveRequestIdentity(new Request('http://local'))).toMatchObject({
      userId: 'student-configured', role: 'admin', mode: 'demo',
    });
  });

  test('student A cannot resolve student B scope', () => {
    const identity = resolveRequestIdentity(new Request('http://local', {
      headers: { cookie: createDemoSessionCookie('ananya') },
    }));
    expect(() => resolveStudentScope(identity, 'student-brinda')).toThrow('Cross-student access');
    expect(resolveStudentScope(identity)).toBe('student-ananya');
  });
});
