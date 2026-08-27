/**
 * University e-book catalog domain logic (Phase 6, Track B1).
 *
 * `library_items` models material the university actually licenses. Every
 * recommended reading must resolve to a real record here — recommendation
 * never invents open-web URLs.
 */

export const LIBRARY_ITEM_TYPES = ['ebook', 'chapter', 'paper'] as const;
export type LibraryItemType = (typeof LIBRARY_ITEM_TYPES)[number];

export const MAX_EXCERPT_BYTES = 20_480;

export interface LibraryItem {
  id: string;
  title: string;
  authors: string[];
  type: LibraryItemType;
  licenseNote: string;
  url?: string;
  storagePath?: string;
  subjectIds: string[];
  excerptAllowed: boolean;
  /** Licensed excerpt text; present only when excerptAllowed. */
  excerpt?: string;
  addedBy: string;
  addedAt: string;
}

export type LibraryItemInput = Omit<LibraryItem, 'id' | 'addedBy' | 'addedAt'>;

export function validateLibraryItemInput(raw: unknown): LibraryItemInput {
  const input = raw as Partial<LibraryItemInput>;
  const title = typeof input.title === 'string' ? input.title.trim() : '';
  if (!title) throw new Error('title is required');

  if (!Array.isArray(input.authors) || input.authors.length === 0 || !input.authors.every((a) => typeof a === 'string' && a.trim())) {
    throw new Error('authors must be a non-empty string array');
  }

  if (!LIBRARY_ITEM_TYPES.includes(input.type as LibraryItemType)) {
    throw new Error(`type must be one of: ${LIBRARY_ITEM_TYPES.join(', ')}`);
  }

  const licenseNote = typeof input.licenseNote === 'string' ? input.licenseNote.trim() : '';
  if (!licenseNote) throw new Error('licenseNote is required — catalog items must record license terms');

  const url = typeof input.url === 'string' && input.url.trim() ? input.url.trim() : undefined;
  const storagePath = typeof input.storagePath === 'string' && input.storagePath.trim() ? input.storagePath.trim() : undefined;
  if (!url && !storagePath) throw new Error('either url or storagePath is required');
  if (url) {
    let parsed: URL;
    try {
      parsed = new URL(url);
    } catch {
      throw new Error('url is not a valid URL');
    }
    if (parsed.protocol !== 'https:') throw new Error('url must use https');
  }

  const excerptAllowed = Boolean(input.excerptAllowed);
  let excerpt = typeof input.excerpt === 'string' && input.excerpt.trim() ? input.excerpt : undefined;
  if (!excerptAllowed) excerpt = undefined;
  if (excerpt && Buffer.byteLength(excerpt, 'utf8') > MAX_EXCERPT_BYTES) {
    throw new Error(`excerpt exceeds ${MAX_EXCERPT_BYTES} bytes`);
  }

  return {
    title,
    authors: input.authors.map((a) => a.trim()),
    type: input.type as LibraryItemType,
    licenseNote,
    url,
    storagePath,
    subjectIds: Array.isArray(input.subjectIds) ? input.subjectIds.filter((s) => typeof s === 'string' && s.trim()) : [],
    excerptAllowed,
    excerpt,
  };
}
