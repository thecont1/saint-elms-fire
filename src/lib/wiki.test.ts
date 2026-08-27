// @ts-nocheck -- Bun exposes bun:test at runtime; this project intentionally does not ship @types/bun.
import { describe, expect, test } from 'bun:test';
import { buildWikiPage } from './wiki';

const nodes = [
  { id: 'n1', concept: 'Quorum', summary: 'Majority voting', lessonId: 'lesson-1', category: 'core', importance: 5 },
  { id: 'n2', concept: 'Leader Election', summary: 'Term-based voting', lessonId: 'lesson-1', category: 'technique', importance: 4, origin: 'peer_share', sharedItemId: 'share-1' },
  { id: 'n3', concept: 'HNSW', summary: 'Graph ANN', lessonId: 'lesson-2', category: 'architecture', importance: 4 },
];
const edges = [
  { id: 'e1', sourceNodeId: 'n1', targetNodeId: 'n2', sourceConcept: 'Quorum', targetConcept: 'Leader Election', relationshipType: 'part_of', description: 'Election needs quorum' },
  { id: 'e2', sourceNodeId: 'n3', targetNodeId: 'n1', sourceConcept: 'HNSW', targetConcept: 'Quorum', relationshipType: 'related_to', description: 'Both distributed' },
];

describe('buildWikiPage', () => {
  test('assembles summary, backlinks in both directions, and source lesson', () => {
    const page = buildWikiPage('n1', { nodes, edges, lessons: [{ id: 'lesson-1', title: 'Raft' }], readings: [], peerItems: [] });
    expect(page.concept).toBe('Quorum');
    expect(page.sourceLessons).toEqual([{ id: 'lesson-1', title: 'Raft' }]);
    const linkedIds = page.backlinks.map((b) => b.nodeId).sort();
    expect(linkedIds).toEqual(['n2', 'n3']);
    expect(page.backlinks.find((b) => b.nodeId === 'n2').direction).toBe('outgoing');
    expect(page.backlinks.find((b) => b.nodeId === 'n3').direction).toBe('incoming');
  });

  test('flags peer-derived origin and attaches readings + peer material', () => {
    const page = buildWikiPage('n2', {
      nodes, edges,
      lessons: [{ id: 'lesson-1', title: 'Raft' }],
      readings: [{ nodeId: 'n2', libraryItemId: 'lib-1', rationale: 'match', matchScore: 0.8, item: { title: 'Raft Illustrated' } }],
      peerItems: [{ id: 'share-1', title: 'Priya note', sharerId: 'student-priya' }],
    });
    expect(page.origin).toBe('peer_share');
    expect(page.recommendedReadings.length).toBe(1);
    expect(page.peerMaterial[0].sharerId).toBe('student-priya');
  });

  test('unknown node throws', () => {
    expect(() => buildWikiPage('nope', { nodes, edges, lessons: [], readings: [], peerItems: [] })).toThrow();
  });
});
