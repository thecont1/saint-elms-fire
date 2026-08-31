// @ts-nocheck -- Bun exposes bun:test at runtime.
import { afterEach, beforeEach, describe, expect, test } from 'bun:test';
import {
  DEMO_PERSONAS,
  createDemoSessionCookie,
  demoIdentityFromCookie,
  demoSessionsEnabled,
  getDemoPersona,
} from './demo-session';

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

describe('demo personas', () => {
  test('defines the four canonical identities and stages in header order', () => {
    expect(DEMO_PERSONAS.map(({ id, label, stage }) => ({ id, label, stage }))).toEqual([
      { id: 'admin', label: 'Admin', stage: 'Administration' },
      { id: 'ananya', label: 'Ananya', stage: 'Sem I ongoing' },
      { id: 'brinda', label: 'Brinda', stage: 'end Sem III' },
      { id: 'chetna', label: 'Chetna', stage: 'completed Sem V, break before Sem VI' },
    ]);
    expect(getDemoPersona('brinda')?.userId).toBe('student-brinda');
  });
});

describe('demo session cookie', () => {
  test('round-trips an HttpOnly server-issued principal', () => {
    const cookie = createDemoSessionCookie('chetna');
    expect(cookie).toContain('saint_elms_demo_session=');
    expect(cookie).toContain('HttpOnly');
    expect(cookie).toContain('SameSite=Lax');
    expect(demoIdentityFromCookie(cookie)).toMatchObject({
      userId: 'student-chetna',
      role: 'student',
      personaId: 'chetna',
    });
  });

  test('rejects tampered and unknown persona cookies', () => {
    const cookie = createDemoSessionCookie('ananya');
    expect(demoIdentityFromCookie(cookie.replace('ananya', 'brinda'))).toBeNull();
    expect(demoIdentityFromCookie('saint_elms_demo_session=unknown.bad')).toBeNull();
  });
});

describe('demo session availability', () => {
  test('is disabled in trusted-proxy mode', () => {
    process.env.AUTH_MODE = 'trusted-proxy';
    expect(demoSessionsEnabled()).toBe(false);
  });

  test('is disabled in production even if AUTH_MODE is demo', () => {
    process.env.NODE_ENV = 'production';
    process.env.AUTH_MODE = 'demo';
    expect(demoSessionsEnabled()).toBe(false);
  });
});
