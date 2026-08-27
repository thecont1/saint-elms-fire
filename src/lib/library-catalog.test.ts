// @ts-nocheck -- Bun exposes bun:test at runtime; this project intentionally does not ship @types/bun.
import { describe, expect, test } from 'bun:test';
import { validateLibraryItemInput, LIBRARY_ITEM_TYPES } from './library-catalog';

const valid = {
  title: 'Manning: Grokking Distributed Systems',
  authors: ['Roberto Vitillo'],
  type: 'ebook',
  licenseNote: 'University site license, 40 seats',
  url: 'https://library.example.edu/ebook/grokking-ds',
  subjectIds: ['cs'],
  excerptAllowed: true,
  excerpt: 'Consensus lets a cluster of unreliable machines agree on a single value...',
};

describe('validateLibraryItemInput', () => {
  test('accepts a valid catalog item', () => {
    const item = validateLibraryItemInput(valid);
    expect(item.title).toBe(valid.title);
    expect(LIBRARY_ITEM_TYPES).toContain(item.type);
  });

  test('rejects missing title / authors / licenseNote', () => {
    expect(() => validateLibraryItemInput({ ...valid, title: ' ' })).toThrow();
    expect(() => validateLibraryItemInput({ ...valid, authors: [] })).toThrow();
    expect(() => validateLibraryItemInput({ ...valid, licenseNote: '' })).toThrow();
  });

  test('rejects unknown type', () => {
    expect(() => validateLibraryItemInput({ ...valid, type: 'blogpost' })).toThrow();
  });

  test('requires either url or storagePath', () => {
    expect(() => validateLibraryItemInput({ ...valid, url: undefined, storagePath: undefined })).toThrow();
  });

  test('rejects non-https urls (no open-web http or javascript schemes)', () => {
    expect(() => validateLibraryItemInput({ ...valid, url: 'javascript:alert(1)' })).toThrow();
    expect(() => validateLibraryItemInput({ ...valid, url: 'http://insecure.example.com' })).toThrow();
  });

  test('strips excerpt when excerptAllowed is false', () => {
    const item = validateLibraryItemInput({ ...valid, excerptAllowed: false });
    expect(item.excerpt).toBeUndefined();
  });

  test('caps excerpt length at 20KB', () => {
    expect(() => validateLibraryItemInput({ ...valid, excerpt: 'x'.repeat(20_481) })).toThrow();
  });
});
