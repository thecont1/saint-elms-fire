/**
 * Shared connection context for production verification scripts (Phase 8).
 * Resolves the service URL, a Cloud Run invoker identity token, and the
 * trusted-proxy secret, then builds the app-layer identity headers.
 */
import { execFileSync } from 'node:child_process';

export const DEFAULT_SERVICE_URL = 'https://saint-elms-fire-ldyuznepoq-el.a.run.app';
const PROJECT_ID = process.env.GOOGLE_CLOUD_PROJECT || 'saint-elms-fire';
const PROXY_SECRET_NAME = process.env.AUTH_PROXY_SECRET_NAME || 'saint-elms-auth-proxy-secret';

export interface ProdContext {
  baseUrl: string;
  /** Headers for an authenticated app-layer request as the given principal. */
  headers(userId: string, role: 'admin' | 'student'): Record<string, string>;
  /** Headers carrying only the Cloud Run invoker token — no app identity. */
  invokerOnlyHeaders(): Record<string, string>;
}

function gcloud(args: string[]): string {
  return execFileSync('gcloud', args, {
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'inherit'],
  }).trim();
}

export function resolveProdContext(argvBaseUrl?: string): ProdContext {
  const baseUrl = (argvBaseUrl || process.env.SERVICE_URL || DEFAULT_SERVICE_URL).replace(/\/+$/, '');

  // Service accounts require --audiences; user accounts reject it. Try the
  // audience-scoped form first, fall back to the plain token.
  let identityToken = process.env.IDENTITY_TOKEN;
  if (!identityToken) {
    try {
      identityToken = gcloud(['auth', 'print-identity-token', `--audiences=${baseUrl}`]);
    } catch {
      identityToken = gcloud(['auth', 'print-identity-token']);
    }
  }
  const proxySecret =
    process.env.AUTH_PROXY_SECRET ||
    gcloud(['secrets', 'versions', 'access', 'latest', `--secret=${PROXY_SECRET_NAME}`, `--project=${PROJECT_ID}`]);

  if (!identityToken) throw new Error('Unable to resolve a Cloud Run invoker identity token (set IDENTITY_TOKEN or gcloud auth login).');
  if (!proxySecret) throw new Error(`Unable to resolve the proxy secret from Secret Manager (set AUTH_PROXY_SECRET or check ${PROXY_SECRET_NAME}).`);

  return {
    baseUrl,
    headers: (userId, role) => ({
      Authorization: `Bearer ${identityToken}`,
      'X-Saint-Elms-Auth-Secret': proxySecret,
      'X-Saint-Elms-User-Id': userId,
      'X-Saint-Elms-Role': role,
      'Content-Type': 'application/json',
    }),
    invokerOnlyHeaders: () => ({
      Authorization: `Bearer ${identityToken}`,
      'Content-Type': 'application/json',
    }),
  };
}

export async function fetchJson<T = Record<string, unknown>>(
  url: string,
  init: RequestInit = {},
  timeoutMs = 60_000,
): Promise<{ status: number; body: T }> {
  const controller = new AbortController();
  const handle = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(url, { ...init, signal: controller.signal });
    const text = await res.text();
    let body: T;
    try {
      body = JSON.parse(text) as T;
    } catch {
      body = { raw: text.slice(0, 300) } as T;
    }
    return { status: res.status, body };
  } finally {
    clearTimeout(handle);
  }
}

export const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export interface ArtifactPollResult {
  status: string;
  jobStatus?: string;
  errorCategory?: string;
  elapsedMs: number;
}

/**
 * Polls an artifact until it leaves `pending` or the budget elapses.
 * Returns the terminal artifact status plus job metadata and elapsed time.
 */
export async function pollArtifactToTerminal(
  ctx: ProdContext,
  artifactId: string,
  studentId: string,
  budgetMs: number,
  intervalMs = 5_000,
): Promise<ArtifactPollResult> {
  const started = Date.now();
  let status = 'pending';
  let jobStatus: string | undefined;
  let errorCategory: string | undefined;
  while (Date.now() - started < budgetMs) {
    await sleep(intervalMs);
    const { status: http, body } = await fetchJson<{
      artifact?: { status: string; job?: { status: string; errorCategory?: string } };
    }>(
      `${ctx.baseUrl}/api/artifacts/${artifactId}?studentId=${encodeURIComponent(studentId)}`,
      { headers: ctx.headers(studentId, 'student') },
      30_000,
    );
    if (http !== 200 || !body.artifact) continue;
    status = body.artifact.status;
    jobStatus = body.artifact.job?.status;
    errorCategory = body.artifact.job?.errorCategory;
    if (status !== 'pending') break;
  }
  return { status, jobStatus, errorCategory, elapsedMs: Date.now() - started };
}

