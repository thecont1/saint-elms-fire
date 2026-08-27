// @ts-nocheck -- Bun exposes bun:test at runtime; this project intentionally does not ship @types/bun.
import { describe, expect, test } from 'bun:test';
import {
  validateSharedItemInput,
  sanitizeSharedMarkdown,
  checkShareRateLimit,
  MAX_SHARE_BODY_BYTES,
  SHARES_PER_DAY,
} from './shared-items';

const valid = {
  kind: 'note',
  title: 'Raft quorum intuition',
  body: '## Why 2f+1?\nA majority survives any f crashes. **Bold** and `code` are fine.',
  sourceLessonId: 'lesson-1',
};

describe('validateSharedItemInput', () => {
  test('accepts a valid note', () => {
    const item = validateSharedItemInput(valid);
    expect(item.kind).toBe('note');
    expect(item.title).toBe(valid.title);
  });

  test('rejects unknown kind, empty title, empty body', () => {
    expect(() => validateSharedItemInput({ ...valid, kind: 'meme' })).toThrow();
    expect(() => validateSharedItemInput({ ...valid, title: '  ' })).toThrow();
    expect(() => validateSharedItemInput({ ...valid, body: '' })).toThrow();
  });

  test('enforces 10KB body cap', () => {
    expect(() => validateSharedItemInput({ ...valid, body: 'x'.repeat(MAX_SHARE_BODY_BYTES + 1) })).toThrow();
  });
});

describe('sanitizeSharedMarkdown', () => {
  test('strips raw HTML tags but keeps markdown', () => {
    const out = sanitizeSharedMarkdown('# Hi\n<script>alert(1)</script>\n**bold** <img src=x onerror=y>');
    expect(out).not.toContain('<script>');
    expect(out).not.toContain('<img');
    expect(out).toContain('**bold**');
    expect(out).toContain('# Hi');
  });

  test('neutralizes javascript: links', () => {
    const out = sanitizeSharedMarkdown('[click](javascript:alert(1)) and [ok](https://example.com)');
    expect(out).not.toContain('javascript:');
    expect(out).toContain('https://example.com');
  });
});

describe('checkShareRateLimit', () => {
  test('allows under the daily cap and rejects at the cap', () => {
    expect(() => checkShareRateLimit(SHARES_PER_DAY - 1)).not.toThrow();
    try {
      checkShareRateLimit(SHARES_PER_DAY);
      throw new Error('should have thrown');
    } catch (error) {
      expect(error.status).toBe(429);
    }
  });
});
