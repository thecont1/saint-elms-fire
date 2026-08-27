// @ts-nocheck -- Bun exposes bun:test at runtime; this project intentionally does not ship @types/bun.
import { describe, expect, test } from 'bun:test';
import { rankCatalogMatches, recommendReadingsForNodes, cosineSimilarity } from './reading-recommendation';

const catalog = [
  { id: 'lib-raft', title: 'Raft Illustrated', embedding: [1, 0, 0], excerptAllowed: true },
  { id: 'lib-hnsw', title: 'ANN Indexes', embedding: [0, 1, 0], excerptAllowed: false },
  { id: 'lib-agents', title: 'Durable Agents', embedding: [0, 0, 1], excerptAllowed: false },
];

describe('cosineSimilarity', () => {
  test('orthogonal vectors score 0, identical score 1', () => {
    expect(cosineSimilarity([1, 0], [0, 1])).toBe(0);
    expect(cosineSimilarity([1, 2], [1, 2])).toBeCloseTo(1);
  });
  test('mismatched dims throw', () => {
    expect(() => cosineSimilarity([1], [1, 2])).toThrow();
  });
});

describe('rankCatalogMatches', () => {
  test('returns top matches above threshold, bounded 2-4, sorted by score', () => {
    const matches = rankCatalogMatches([0.9, 0.1, 0.05], catalog, { max: 4, minScore: 0.3 });
    expect(matches[0].libraryItemId).toBe('lib-raft');
    expect(matches.every((m) => m.matchScore >= 0.3)).toBe(true);
    expect(matches.length).toBeLessThanOrEqual(4);
  });

  test('never invents items — result ids are all from the catalog', () => {
    const matches = rankCatalogMatches([1, 1, 1], catalog, { max: 4, minScore: 0 });
    const ids = new Set(catalog.map((c) => c.id));
    expect(matches.every((m) => ids.has(m.libraryItemId))).toBe(true);
  });

  test('empty catalog yields no matches', () => {
    expect(rankCatalogMatches([1, 0, 0], [], { max: 4, minScore: 0 })).toEqual([]);
  });
});

describe('recommendReadingsForNodes (soft failure)', () => {
  const nodes = [
    { id: 'node-1', concept: 'Raft', summary: 'Leader election' },
    { id: 'node-2', concept: 'HNSW', summary: 'Vector graphs' },
  ];

  test('produces recommendations resolving to real catalog items', async () => {
    const result = await recommendReadingsForNodes({
      studentId: 'student-alex',
      nodes,
      catalog,
      embedText: async (text) => (text.includes('Raft') ? [1, 0, 0] : [0, 1, 0]),
      minScore: 0.5,
    });
    expect(result.failed).toBe(false);
    expect(result.recommendations.length).toBeGreaterThan(0);
    for (const rec of result.recommendations) {
      expect(catalog.some((c) => c.id === rec.libraryItemId)).toBe(true);
      expect(rec.studentId).toBe('student-alex');
    }
  });

  test('embedding failure is soft: returns failed=true, empty recs, does not throw', async () => {
    const result = await recommendReadingsForNodes({
      studentId: 'student-alex',
      nodes,
      catalog,
      embedText: async () => {
        throw new Error('embedder down');
      },
      minScore: 0.5,
    });
    expect(result.failed).toBe(true);
    expect(result.recommendations).toEqual([]);
  });
});
