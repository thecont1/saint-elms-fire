// @ts-nocheck -- Bun exposes bun:test at runtime; this project intentionally does not ship @types/bun.
import { describe, expect, test } from 'bun:test';
import { assembleCorpus, corpusSources } from './corpus-assembly';

const lessonChunk = { id: 'c1', origin: undefined, lessonId: 'lesson-1', lessonTitle: 'Raft', heading: 'Quorum', content: 'Majority voting...', chunkIndex: 0 };
const libraryChunk = { id: 'c2', origin: 'library', libraryItemId: 'lib-raft', lessonId: 'lesson-1', lessonTitle: 'Raft Illustrated', heading: 'Ch 4', content: 'Excerpt...', chunkIndex: 0 };
const peerChunk = { id: 'c3', origin: 'peer_share', sharedItemId: 'share-1', lessonId: 'lesson-1', lessonTitle: 'Priya note', heading: 'Quorum', content: 'Peer note...', chunkIndex: 0 };
const foreignPeer = { id: 'c4', origin: 'peer_share', sharedItemId: 'share-9', studentId: 'student-bhavya', lessonId: 'lesson-1', lessonTitle: 'x', heading: 'x', content: 'x', chunkIndex: 0 };

describe('assembleCorpus', () => {
  test('lesson scope keeps only lesson-origin chunks', () => {
    const { corpusMarkdown, sources } = assembleCorpus({
      scope: 'lesson',
      chunks: [lessonChunk, libraryChunk, peerChunk],
    });
    expect(corpusMarkdown).toContain('Majority voting');
    expect(corpusMarkdown).not.toContain('Peer note');
    expect(sources).toEqual([{ kind: 'lesson', refId: 'lesson-1', label: 'Raft' }]);
  });

  test('second_brain scope includes lesson + library + peer material with provenance', () => {
    const { corpusMarkdown, sources } = assembleCorpus({
      scope: 'second_brain',
      chunks: [lessonChunk, libraryChunk, peerChunk],
    });
    expect(corpusMarkdown).toContain('Excerpt');
    expect(corpusMarkdown).toContain('Peer note');
    const kinds = sources.map((s) => s.kind).sort();
    expect(kinds).toEqual(['lesson', 'library', 'peer_share'].sort());
    expect(sources.find((s) => s.kind === 'library').refId).toBe('lib-raft');
    expect(sources.find((s) => s.kind === 'peer_share').refId).toBe('share-1');
  });

  test('two students with different accepted material get different corpora', () => {
    const alex = assembleCorpus({ scope: 'second_brain', chunks: [lessonChunk, peerChunk] });
    const bhavya = assembleCorpus({ scope: 'second_brain', chunks: [lessonChunk] });
    expect(alex.corpusMarkdown).not.toBe(bhavya.corpusMarkdown);
    expect(alex.sources.length).toBe(2);
    expect(bhavya.sources).toEqual([{ kind: 'lesson', refId: 'lesson-1', label: 'Raft' }]);
  });

  test('empty corpus throws honestly rather than generating from nothing', () => {
    expect(() => assembleCorpus({ scope: 'second_brain', chunks: [] })).toThrow();
  });
});

describe('corpusSources', () => {
  test('deduplicates repeated refs', () => {
    const sources = corpusSources([lessonChunk, { ...lessonChunk, id: 'c9', chunkIndex: 1 }]);
    expect(sources.length).toBe(1);
  });
});
