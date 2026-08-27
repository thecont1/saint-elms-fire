/**
 * Peer share primitives (Phase 6, Track B2).
 *
 * `shared_items` are cohort-scoped, size-capped, markdown-sanitized, and
 * rate-limited. Sharing never mutates a peer's Second Brain — acceptance
 * (Track B3) does that per-acceptor.
 */

export const SHARED_ITEM_KINDS = ['note', 'link', 'artifact', 'lesson_annotation'] as const;
export type SharedItemKind = (typeof SHARED_ITEM_KINDS)[number];

export const MAX_SHARE_BODY_BYTES = 10_240;
export const SHARES_PER_DAY = 10;

export interface SharedItem {
  id: string;
  sharerId: string;
  cohortId: string;
  kind: SharedItemKind;
  title: string;
  body: string;
  sourceLessonId?: string;
  createdAt: string;
  status: 'active' | 'withdrawn';
}

export interface SharedItemInput {
  kind: SharedItemKind;
  title: string;
  body: string;
  sourceLessonId?: string;
}

export class ShareLimitError extends Error {
  readonly status = 429;
  constructor(message: string) {
    super(message);
    this.name = 'ShareLimitError';
  }
}

/**
 * Strip raw HTML from shared markdown (no HTML is allowed at all — the
 * renderer treats shares as plain markdown) and neutralize javascript:/data:
 * URI schemes in links.
 */
export function sanitizeSharedMarkdown(markdown: string): string {
  return markdown
    .replace(/<[^>]*>/g, '')
    .replace(/\]\(\s*(?:javascript|data|vbscript):[^)]*\)/gi, '](#)');
}

export function validateSharedItemInput(raw: unknown): SharedItemInput {
  const input = raw as Partial<SharedItemInput>;
  if (!SHARED_ITEM_KINDS.includes(input.kind as SharedItemKind)) {
    throw new Error(`kind must be one of: ${SHARED_ITEM_KINDS.join(', ')}`);
  }
  const title = typeof input.title === 'string' ? input.title.trim() : '';
  if (!title || title.length > 200) throw new Error('title is required (max 200 chars)');
  const rawBody = typeof input.body === 'string' ? input.body.trim() : '';
  if (!rawBody) throw new Error('body is required');
  if (Buffer.byteLength(rawBody, 'utf8') > MAX_SHARE_BODY_BYTES) {
    throw new Error(`body exceeds ${MAX_SHARE_BODY_BYTES} bytes`);
  }
  const body = sanitizeSharedMarkdown(rawBody);
  return {
    kind: input.kind as SharedItemKind,
    title: sanitizeSharedMarkdown(title),
    body,
    sourceLessonId: typeof input.sourceLessonId === 'string' && input.sourceLessonId.trim()
      ? input.sourceLessonId.trim()
      : undefined,
  };
}

/** Throws 429 when the student has already hit today's share cap. */
export function checkShareRateLimit(sharesToday: number, cap = SHARES_PER_DAY): void {
  if (sharesToday >= cap) {
    throw new ShareLimitError(`Daily share limit reached (${cap}/day)`);
  }
}
