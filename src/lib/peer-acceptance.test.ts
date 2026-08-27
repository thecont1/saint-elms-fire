// @ts-nocheck -- Bun exposes bun:test at runtime; this project intentionally does not ship @types/bun.
import { describe, expect, test } from 'bun:test';
import { runPeerAcceptance, validateAcceptance, peerChunkId, peerNodeId } from './peer-acceptance';

const share = {
  id: 'share-1',
  sharerId: 'student-priya',
  cohortId: 'cohort-all',
  kind: 'note',
  title: 'Raft quorum intuition',
  body: '## Quorum\nA majority of 2f+1 survives f crashes.',
  sourceLessonId: 'lesson-1',
  createdAt: '2026-08-27T00:00:00.000Z',
  status: 'active',
};

describe('validateAcceptance', () => {
  test('sharer cannot accept their own share', () => {
    expect(() => validateAcceptance(share, 'student-priya')).toThrow();
  });
  test('withdrawn items are no longer acceptable', () => {
    expect(() => validateAcceptance({ ...share, status: 'withdrawn' }, 'student-alex')).toThrow();
  });
  test('peer in cohort may accept an active item', () => {
    expect(() => validateAcceptance(share, 'student-alex')).not.toThrow();
  });
});

describe('deterministic peer ids', () => {
  test('chunk and node ids embed acceptor + share so re-accept is idempotent', () => {
    expect(peerChunkId('student-alex', 'share-1', 0)).toBe(peerChunkId('student-alex', 'share-1', 0));
    expect(peerChunkId('student-alex', 'share-1', 0)).not.toBe(peerChunkId('student-bhavya', 'share-1', 0));
    expect(peerNodeId('student-alex', 'share-1', 'Quorum')).not.toBe(peerNodeId('student-bhavya', 'share-1', 'Quorum'));
  });
});

describe('runPeerAcceptance isolation', () => {
  function makeDeps() {
    const written = { chunks: [], nodes: [], edges: [] };
    return {
      written,
      deps: {
        chunkMarkdown: (md) => [{ index: 0, heading: 'Quorum', content: md.slice(0, 100) }],
        embedText: async () => [0.1, 0.2, 0.3],
        extractGraph: async () => ({
          nodes: [{ concept: 'Quorum', category: 'core', summary: 'Majority voting', importance: 3 }],
          edges: [],
        }),
        writePeerChunks: async (chunks) => { written.chunks.push(...chunks); },
        writePeerGraph: async (nodes, edges) => { written.nodes.push(...nodes); written.edges.push(...edges); },
      },
    };
  }

  test('accept writes only into the acceptor own space, tagged peer_share', async () => {
    const { written, deps } = makeDeps();
    const result = await runPeerAcceptance({ share, acceptorId: 'student-alex' }, deps);
    expect(result.chunksIngested).toBe(1);
    expect(written.chunks.every((c) => c.studentId === 'student-alex' && c.origin === 'peer_share' && c.sharedItemId === 'share-1')).toBe(true);
    expect(written.nodes.every((n) => n.studentId === 'student-alex' && n.origin === 'peer_share')).toBe(true);
    expect(written.chunks.some((c) => c.studentId === 'student-priya')).toBe(false);
  });

  test('graph extraction failure degrades to chunks-only, honest partial flag', async () => {
    const { deps } = makeDeps();
    deps.extractGraph = async () => { throw new Error('model down'); };
    const result = await runPeerAcceptance({ share, acceptorId: 'student-alex' }, deps);
    expect(result.chunksIngested).toBe(1);
    expect(result.graphExtracted).toBe(false);
  });
});
