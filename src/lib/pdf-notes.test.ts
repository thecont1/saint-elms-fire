// @ts-nocheck -- Bun exposes bun:test at runtime; this project intentionally does not ship @types/bun.
import { describe, expect, test } from 'bun:test';
import { parseMarkdownBlocks, renderNotesPdf } from './pdf-notes';

const md = `# Raft Consensus

Intro paragraph with **bold** and \`code\`.

## Quorum

- Majority is 2f+1
- Votes are per-term

> Callout: quorum intersection guarantees safety.

\`\`\`
state: follower -> candidate -> leader
\`\`\`
`;

describe('parseMarkdownBlocks', () => {
  test('parses headings, paragraphs, lists, quotes, and code fences', () => {
    const blocks = parseMarkdownBlocks(md);
    const types = blocks.map((b) => b.type);
    expect(types).toContain('heading1');
    expect(types).toContain('heading2');
    expect(types).toContain('paragraph');
    expect(types).toContain('listItem');
    expect(types).toContain('callout');
    expect(types).toContain('code');
  });

  test('is deterministic (golden structure)', () => {
    expect(parseMarkdownBlocks(md)).toEqual(parseMarkdownBlocks(md));
    const blocks = parseMarkdownBlocks(md);
    expect(blocks[0]).toEqual({ type: 'heading1', text: 'Raft Consensus' });
    expect(blocks.find((b) => b.type === 'callout').text).toContain('quorum intersection');
  });

  test('empty markdown throws', () => {
    expect(() => parseMarkdownBlocks('  \n ')).toThrow();
  });
});

describe('renderNotesPdf (golden render)', () => {
  test('produces a valid PDF buffer with branded header context', async () => {
    const buffer = await renderNotesPdf({
      markdown: md,
      courseTitle: 'CS-850',
      moduleTitle: 'Module 1',
      lessonTitle: '1.1 Raft',
      releasedAt: '2026-08-27T00:00:00.000Z',
      concepts: ['Quorum', 'Leader Election'],
    });
    expect(buffer.length).toBeGreaterThan(1000);
    expect(buffer.subarray(0, 5).toString('latin1')).toBe('%PDF-');
  }, 20_000);
});
