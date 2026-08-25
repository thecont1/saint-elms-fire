// @ts-nocheck -- Bun exposes bun:test at runtime; this project intentionally does not ship @types/bun.
import { describe, expect, test } from 'bun:test';
import {
  chunkMarkdown,
  filterReleasedRetrievedChunks,
  isReleaseActive,
  resolveRegenerationSource,
  selectProactiveTarget,
  type RetrievedCoursewareChunk,
} from './courseware-rag';

describe('chunkMarkdown', () => {
  test('rejects empty markdown', () => {
    expect(() => chunkMarkdown('   \n\n')).toThrow('Markdown content is required');
  });

  test('preserves heading context, stable ordering, and bounded chunk size', () => {
    const markdown = `# Main Title\n\nIntro paragraph.\n\n## Alpha\n\n${'alpha '.repeat(60)}\n\n## Beta\n\n${'beta '.repeat(55)}`;
    const chunks = chunkMarkdown(markdown, { maxChars: 180, overlapChars: 30 });

    expect(chunks.length).toBeGreaterThan(3);
    expect(chunks.map((chunk) => chunk.index)).toEqual(
      chunks.map((_, index) => index)
    );
    expect(chunks.every((chunk) => chunk.content.trim().length > 0)).toBe(true);
    expect(chunks.every((chunk) => chunk.content.length <= 180)).toBe(true);
    expect(chunks.some((chunk) => chunk.heading === 'Alpha')).toBe(true);
    expect(chunks.some((chunk) => chunk.heading === 'Beta')).toBe(true);
  });

  test('does not duplicate short sections', () => {
    const chunks = chunkMarkdown('# Title\n\n## One\n\nA short paragraph.\n\n## Two\n\nAnother short paragraph.');
    expect(chunks.map((chunk) => chunk.heading)).toEqual(['Title', 'One', 'Two']);
  });
});

describe('release boundaries', () => {
  test('scheduled and future releases do not unlock content', () => {
    const now = new Date('2026-08-25T12:00:00.000Z');
    expect(isReleaseActive({ status: 'scheduled', releasedAt: '2026-08-24T12:00:00.000Z' }, now)).toBe(false);
    expect(isReleaseActive({ status: 'released', releasedAt: '2026-08-26T12:00:00.000Z' }, now)).toBe(false);
    expect(isReleaseActive({ status: 'released', releasedAt: '2026-08-24T12:00:00.000Z' }, now)).toBe(true);
  });
});

describe('filterReleasedRetrievedChunks', () => {
  const chunks: RetrievedCoursewareChunk[] = [
    { id: 'b', lessonId: 'released-1', lessonTitle: 'Released', content: 'second', chunkIndex: 1, distance: 0.3 },
    { id: 'a', lessonId: 'secret', lessonTitle: 'Secret', content: 'unreleased', chunkIndex: 0, distance: 0.01 },
    { id: 'b', lessonId: 'released-1', lessonTitle: 'Released', content: 'duplicate', chunkIndex: 1, distance: 0.2 },
    { id: 'c', lessonId: 'released-2', lessonTitle: 'Released 2', content: 'first', chunkIndex: 0, distance: 0.1 },
  ];

  test('removes unreleased and duplicate chunks, then orders by distance', () => {
    const result = filterReleasedRetrievedChunks(chunks, new Set(['released-1', 'released-2']), 5);
    expect(result.map((chunk) => chunk.id)).toEqual(['c', 'b']);
    expect(result.every((chunk) => chunk.lessonId.startsWith('released-'))).toBe(true);
  });

  test('respects topK and handles an empty release set', () => {
    expect(filterReleasedRetrievedChunks(chunks, new Set(), 3)).toEqual([]);
    expect(filterReleasedRetrievedChunks(chunks, new Set(['released-1', 'released-2']), 1)).toHaveLength(1);
  });
});

describe('selectProactiveTarget', () => {
  const lessons = [
    { id: 'old', title: 'Old lesson', markdownContent: 'old content' },
    { id: 'new', title: 'New lesson', markdownContent: 'new content' },
  ];

  test('prefers the most recent weak quiz that still belongs to released content', () => {
    const target = selectProactiveTarget({
      releasedLessons: lessons,
      activeReleases: [
        { lessonId: 'old', releasedAt: '2026-08-20T00:00:00.000Z' },
        { lessonId: 'new', releasedAt: '2026-08-24T00:00:00.000Z' },
      ],
      quizHistory: [
        { lessonId: 'secret', concept: 'Secret', isCorrect: false, createdAt: '2026-08-25T00:00:00.000Z' },
        { lessonId: 'old', concept: 'Quorum', isCorrect: false, createdAt: '2026-08-24T00:00:00.000Z' },
      ],
      knowledgeNodes: [],
    });
    expect(target.lessonId).toBe('old');
    expect(target.concept).toBe('Quorum');
  });

  test('otherwise selects the most recently unlocked lesson', () => {
    const target = selectProactiveTarget({
      releasedLessons: lessons,
      activeReleases: [
        { lessonId: 'old', releasedAt: '2026-08-20T00:00:00.000Z' },
        { lessonId: 'new', releasedAt: '2026-08-24T00:00:00.000Z' },
      ],
      quizHistory: [],
      knowledgeNodes: [],
    });
    expect(target.lessonId).toBe('new');
    expect(target.lessonTitle).toBe('New lesson');
  });

  test('fails when no courseware is released', () => {
    expect(() => selectProactiveTarget({
      releasedLessons: [],
      activeReleases: [],
      quizHistory: [],
      knowledgeNodes: [],
    })).toThrow('No released courseware');
  });
});

describe('resolveRegenerationSource', () => {
  test('uses released lesson content when only lessonId is provided', () => {
    expect(resolveRegenerationSource({
      lessonId: 'l1',
      lesson: { id: 'l1', title: 'Released', markdownContent: '# Source' },
      isReleased: true,
    })).toEqual({ lessonId: 'l1', sourceTitle: 'Released', markdown: '# Source' });
  });

  test('requires release access whenever a lessonId is present', () => {
    expect(() => resolveRegenerationSource({
      lessonId: 'l1',
      markdownContent: '# Override',
      lesson: { id: 'l1', title: 'Hidden', markdownContent: '# Hidden' },
      isReleased: false,
    })).toThrow('Access Denied');
  });

  test('accepts standalone raw markdown without lesson persistence', () => {
    expect(resolveRegenerationSource({
      markdownContent: '# Raw',
      sourceTitle: 'Upload',
    })).toEqual({ lessonId: undefined, sourceTitle: 'Upload', markdown: '# Raw' });
  });

  test('rejects missing lesson and blank raw markdown', () => {
    expect(() => resolveRegenerationSource({ markdownContent: '   ' })).toThrow('Markdown content is required');
  });
});
