import { timingSafeEqual } from 'node:crypto';
import { NextResponse } from 'next/server';
import type { UserRole } from './types';

export interface RequestIdentity {
  userId: string;
  role: UserRole;
  mode: 'demo' | 'trusted-proxy';
}

export class AuthorizationError extends Error {
  status: number;
  constructor(status: number, message: string) {
    super(message);
    this.status = status;
  }
}

function isProduction(): boolean {
  return process.env.NODE_ENV === 'production';
}

function getAuthMode(): string | undefined {
  return process.env.AUTH_MODE;
}

function safeCompare(a: string, b: string): boolean {
  const bufA = Buffer.from(a);
  const bufB = Buffer.from(b);
  if (bufA.length !== bufB.length) return false;
  return timingSafeEqual(bufA, bufB);
}

/**
 * Resolve the acting principal from the request.
 *
 * - `demo` mode: identity comes from env vars, headers are ignored.
 * - `trusted-proxy` mode: identity comes from trusted headers with a shared secret.
 * - Missing/unknown mode in production: fails closed with 401.
 * - `demo` mode in production: fails closed with 401.
 */
export function resolveRequestIdentity(req: Request): RequestIdentity {
  const mode = getAuthMode();
  const production = isProduction();

  if (production && (!mode || mode !== 'trusted-proxy')) {
    throw new AuthorizationError(401, 'Authentication required');
  }

  if (!mode || mode === 'demo') {
    return {
      userId: process.env.DEMO_USER_ID || 'student-alex',
      role: (process.env.DEMO_USER_ROLE as UserRole) || 'admin',
      mode: 'demo',
    };
  }

  if (mode === 'trusted-proxy') {
    const secret = req.headers.get('X-Saint-Elms-Auth-Secret');
    const userId = req.headers.get('X-Saint-Elms-User-Id');
    const role = req.headers.get('X-Saint-Elms-Role');

    const expectedSecret = process.env.AUTH_PROXY_SECRET;
    if (!expectedSecret) {
      throw new AuthorizationError(500, 'Proxy secret not configured');
    }

    if (!secret || !safeCompare(secret, expectedSecret)) {
      throw new AuthorizationError(401, 'Authentication required');
    }

    if (!userId) {
      throw new AuthorizationError(401, 'Missing user identity');
    }

    if (role !== 'admin' && role !== 'student') {
      throw new AuthorizationError(401, 'Missing or invalid role');
    }

    return { userId, role, mode: 'trusted-proxy' };
  }

  throw new AuthorizationError(401, 'Authentication required');
}

/**
 * Resolve the student scope for a student-scoped operation.
 *
 * - If no `requestedStudentId` is provided, uses the authenticated user's ID.
 * - If `requestedStudentId` matches the authenticated user, returns it.
 * - If the caller is admin and provides an explicit `requestedStudentId`, returns it.
 * - If a student requests another student's ID, throws 403.
 * - If admin provides no explicit target, throws 400.
 */
export function resolveStudentScope(
  identity: RequestIdentity,
  requestedStudentId?: string | null,
): string {
  if (identity.role === 'admin') {
    if (!requestedStudentId) {
      throw new AuthorizationError(400, 'Admin requests must specify a target studentId');
    }
    return requestedStudentId;
  }

  // Student role
  if (!requestedStudentId || requestedStudentId === identity.userId) {
    return identity.userId;
  }

  throw new AuthorizationError(403, 'Cross-student access is not permitted');
}

/**
 * Require admin role. Throws 403 if the caller is not admin.
 */
export function requireAdmin(identity: RequestIdentity): RequestIdentity {
  if (identity.role !== 'admin') {
    throw new AuthorizationError(403, 'Admin access required');
  }
  return identity;
}

/**
 * Convert an AuthorizationError into a NextResponse, or null if not an auth error.
 */
export function authorizationResponse(error: unknown): Response | null {
  if (error instanceof AuthorizationError) {
    return NextResponse.json(
      { error: error.message },
      { status: error.status },
    );
  }
  return null;
}
