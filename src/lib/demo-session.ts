import { createHmac, timingSafeEqual } from 'node:crypto';
import type { UserRole } from './types';

export const DEMO_SESSION_COOKIE = 'saint_elms_demo_session';

export type DemoPersonaId = 'admin' | 'ananya' | 'brinda' | 'chetna';

export interface DemoPersona {
  id: DemoPersonaId;
  userId: string;
  role: UserRole;
  label: string;
  shortStage: string;
  stage: string;
}

export const DEMO_PERSONAS: readonly DemoPersona[] = [
  {
    id: 'admin',
    userId: 'admin-demo',
    role: 'admin',
    label: 'Admin',
    shortStage: 'Administration',
    stage: 'Administration',
  },
  {
    id: 'ananya',
    userId: 'student-ananya',
    role: 'student',
    label: 'Ananya',
    shortStage: 'Sem I',
    stage: 'Sem I ongoing',
  },
  {
    id: 'brinda',
    userId: 'student-brinda',
    role: 'student',
    label: 'Brinda',
    shortStage: 'Sem III',
    stage: 'end Sem III',
  },
  {
    id: 'chetna',
    userId: 'student-chetna',
    role: 'student',
    label: 'Chetna',
    shortStage: 'Sem V · break',
    stage: 'completed Sem V, break before Sem VI',
  },
] as const;

export function getDemoPersona(id: string | null | undefined): DemoPersona | undefined {
  return DEMO_PERSONAS.find((persona) => persona.id === id);
}

function getEnv(name: string): string | undefined {
  return process.env[name];
}

function deploymentEnv(): string | undefined {
  return getEnv('SAINT_ELMS_ENV') || getEnv('NODE_ENV');
}

export function demoSessionsEnabled(): boolean {
  return deploymentEnv() !== 'production' && process.env.AUTH_MODE !== 'trusted-proxy';
}

function signingSecret(): string {
  return process.env.DEMO_SESSION_SECRET || 'saint-elms-local-demo-session-v1';
}

function signature(personaId: DemoPersonaId): string {
  return createHmac('sha256', signingSecret()).update(personaId).digest('base64url');
}

function safeEqual(a: string, b: string): boolean {
  const left = Buffer.from(a);
  const right = Buffer.from(b);
  return left.length === right.length && timingSafeEqual(left, right);
}

function cookieValue(header: string | null | undefined): string | null {
  if (!header) return null;
  const part = header
    .split(';')
    .map((value) => value.trim())
    .find((value) => value.startsWith(`${DEMO_SESSION_COOKIE}=`));
  return part ? decodeURIComponent(part.slice(DEMO_SESSION_COOKIE.length + 1)) : null;
}

export function demoIdentityFromCookie(cookieHeader: string | null | undefined):
  | { userId: string; role: UserRole; mode: 'demo'; personaId: DemoPersonaId }
  | null {
  if (!demoSessionsEnabled()) return null;
  const value = cookieValue(cookieHeader);
  if (!value) return null;
  const separator = value.indexOf('.');
  if (separator <= 0) return null;
  const personaId = value.slice(0, separator);
  const suppliedSignature = value.slice(separator + 1);
  const persona = getDemoPersona(personaId);
  if (!persona || !safeEqual(suppliedSignature, signature(persona.id))) return null;
  return { userId: persona.userId, role: persona.role, mode: 'demo', personaId: persona.id };
}

export function createDemoSessionCookie(personaId: DemoPersonaId): string {
  const persona = getDemoPersona(personaId);
  if (!persona) throw new Error('Unknown demo persona');
  const value = encodeURIComponent(`${persona.id}.${signature(persona.id)}`);
  const secure = process.env.NODE_ENV === 'production' ? '; Secure' : '';
  return `${DEMO_SESSION_COOKIE}=${value}; Path=/; HttpOnly; SameSite=Lax; Max-Age=2592000${secure}`;
}
