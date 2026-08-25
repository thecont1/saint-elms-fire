// @ts-nocheck -- Bun exposes bun:test at runtime.
import { describe, expect, test } from 'bun:test';
import { buildPendingRelease } from './release-integrity';
import { runLessonIngestion, type IngestionDependencies } from './second-brain-ingestion';

const lesson = {
  releaseId: 'r1', lessonId: 'l1', lessonTitle: 'Lesson One', courseId: 'c1', moduleId: 'm1',
  studentId: 's1', markdownContent: '# Lesson One\n\n## Alpha\n\nAlpha body.\n\n## Beta\n\nBeta body.',
  releaseTimestamp: '2026-08-25T10:00:00.000Z',
};

function fakeDependencies(failAt?: string) {
  const release = buildPendingRelease({
    id: 'r1', courseId: 'c1', moduleId: 'm1', studentId: 's1',
    targetLessonIds: ['l1'], requestedAt: lesson.releaseTimestamp,
  });
  const transitions: string[] = [];
  const artifacts: any = {};
  const embeddings = new Map<number, number[]>();
  const vectorIds = new Set<string>();
  const graphIds = new Set<string>();
  let parseCalls = 0;
  let chunkCalls = 0;
  let embedCalls = 0;

  const deps: IngestionDependencies = {
    now: () => '2026-08-25T10:00:01.000Z',
    getRelease: async () => release,
    updateStep: async (_releaseId, lessonId, stage, patch) => {
      const step = release.steps.find((item: any) => item.lessonId === lessonId && item.stage === stage);
      Object.assign(step, patch);
      transitions.push(`${stage}:${patch.status}${patch.itemsProcessed === undefined ? '' : `:${patch.itemsProcessed}/${patch.itemsTotal}`}`);
    },
    loadArtifact: async () => artifacts,
    saveArtifact: async (_r, _l, patch) => Object.assign(artifacts, patch),
    parseMarkdown: (markdown) => {
      parseCalls += 1;
      if (failAt === 'parsing') throw new Error('raw parser secret');
      return markdown.trim();
    },
    chunkMarkdown: () => {
      chunkCalls += 1;
      if (failAt === 'chunking') throw new Error('raw chunker secret');
      return [
        { index: 0, heading: 'Alpha', content: 'Alpha body.' },
        { index: 1, heading: 'Beta', content: 'Beta body.' },
      ];
    },
    getStagedEmbedding: async (_r, _l, index) => embeddings.get(index),
    saveStagedEmbedding: async (_r, _l, index, embedding) => { embeddings.set(index, embedding); },
    embedChunk: async (_text, index) => {
      embedCalls += 1;
      if (failAt === `embedding:${index}`) throw Object.assign(new Error('provider token leaked'), { code: 429 });
      return [index + 0.1, index + 0.2];
    },
    writeVectors: async (records) => {
      if (failAt === 'vector_write') throw new Error('firestore internals');
      records.forEach((record) => vectorIds.add(record.id));
    },
    verifyVectors: async (records) => failAt === 'vector_verify' ? false : records.every((record) => vectorIds.has(record.id)),
    extractGraph: async () => ({
      nodes: [{ concept: 'Alpha', category: 'concept', summary: 'A', importance: 3 }],
      edges: [],
    }),
    writeGraph: async (graph) => {
      if (failAt === 'graph_write') throw new Error('firestore internals');
      graph.nodes.forEach((node) => graphIds.add(node.id));
      graph.edges.forEach((edge) => graphIds.add(edge.id));
    },
    verifyGraph: async (graph) => failAt === 'graph_verify' ? false : graph.nodes.every((node) => graphIds.has(node.id)),
  };

  return { deps, release, transitions, artifacts, embeddings, vectorIds, graphIds,
    calls: () => ({ parseCalls, chunkCalls, embedCalls }) };
}

describe('runLessonIngestion', () => {
  test('records exact awaited stage transitions and deterministic verified writes', async () => {
    const state = fakeDependencies();
    const result = await runLessonIngestion(lesson, state.deps);

    expect(result.chunksStored).toBe(2);
    expect(state.transitions).toEqual([
      'parsing:in_progress', 'parsing:complete',
      'chunking:in_progress', 'chunking:complete:2/2',
      'embedding:in_progress:0/2', 'embedding:in_progress:1/2', 'embedding:in_progress:2/2', 'embedding:complete:2/2',
      'vector_write:in_progress', 'vector_write:complete:2/2',
      'graph_write:in_progress', 'graph_write:complete:1/1',
    ]);
    expect([...state.vectorIds]).toEqual(['r1_l1_00000', 'r1_l1_00001']);
    // Node ID now carries a stable hash suffix for collision safety; keep the
    // assertion shape-aware rather than hardcoding the hash.
    expect([...state.graphIds]).toEqual([expect.stringMatching(/^r1_l1_node_alpha_[0-9a-f]{8}$/)]);
    expect(state.release.steps.every((step: any) => step.status === 'complete')).toBe(true);
  });

  test('fails fast with a bounded category and never stores raw provider text', async () => {
    const state = fakeDependencies('embedding:1');
    await expect(runLessonIngestion(lesson, state.deps)).rejects.toMatchObject({ category: 'rate_limited', stage: 'embedding' });

    const failed = state.release.steps.find((step: any) => step.stage === 'embedding');
    expect(failed.status).toBe('failed');
    expect(failed.error).toEqual({ category: 'rate_limited', message: 'Embedding provider rate limit reached.' });
    expect(JSON.stringify(failed)).not.toContain('provider token leaked');
    expect(state.release.steps.find((step: any) => step.stage === 'vector_write').status).toBe('pending');
    expect(state.vectorIds.size).toBe(0);
  });

  test('retry resumes the failed stage, reuses chunks and completed embeddings, and does not duplicate vectors', async () => {
    const state = fakeDependencies('embedding:1');
    await expect(runLessonIngestion(lesson, state.deps)).rejects.toBeTruthy();
    expect(state.calls()).toEqual({ parseCalls: 1, chunkCalls: 1, embedCalls: 2 });

    // Replacement embedder counts every invocation so we can assert exact
    // embedding-call totals across both retry runs.
    let replacementEmbedCalls = 0;
    const retryDeps = {
      ...state.deps,
      embedChunk: async (_text: string, index: number) => {
        replacementEmbedCalls += 1;
        return [index + 0.1, index + 0.2];
      },
    };
    await runLessonIngestion(lesson, retryDeps);
    await runLessonIngestion(lesson, retryDeps);

    expect(state.calls().parseCalls).toBe(1);
    expect(state.calls().chunkCalls).toBe(1);
    // First run: 2 chunks attempted, chunk 1 failed before staging. The first
    // retry must re-embed exactly the ONE missing chunk (resumption, not
    // redo); the second retry reuses every staged embedding, so the
    // replacement embedder is called exactly once across both retry runs.
    expect(replacementEmbedCalls).toBe(1);
    expect(state.embeddings.size).toBe(2);
    expect(state.vectorIds.size).toBe(2);
  });

  test('read-back mismatch fails the vector stage and blocks graph writes', async () => {
    const state = fakeDependencies('vector_verify');
    await expect(runLessonIngestion(lesson, state.deps)).rejects.toMatchObject({ category: 'verification_failed', stage: 'vector_write' });
    expect(state.release.steps.find((step: any) => step.stage === 'graph_write').status).toBe('pending');
    expect(state.graphIds.size).toBe(0);
  });

  test('graph count/read-back mismatch fails instead of reporting synced', async () => {
    const state = fakeDependencies('graph_verify');
    await expect(runLessonIngestion(lesson, state.deps)).rejects.toMatchObject({ category: 'verification_failed', stage: 'graph_write' });
    expect(state.release.steps.find((step: any) => step.stage === 'graph_write').status).toBe('failed');
  });

  test('concepts differing only by punctuation/spacing keep distinct node IDs', async () => {
    const state = fakeDependencies();
    state.deps.extractGraph = async () => ({
      nodes: [
        { concept: 'API Gateway', category: 'concept', summary: 'The gateway', importance: 4 },
        { concept: 'API-Gateway', category: 'concept', summary: 'Hyphenated gateway', importance: 3 },
      ],
      edges: [
        { sourceConcept: 'API Gateway', targetConcept: 'API-Gateway', relationshipType: 'related_to', description: 'same idea, different spelling' },
      ],
    });
    await runLessonIngestion(lesson, state.deps);

    const ids = [...state.graphIds];
    // Two nodes must not collapse into one document key even though both
    // slug() to api_gateway.
    const nodeIds = ids.filter((id) => id.includes('_node_'));
    expect(nodeIds).toHaveLength(2);
    expect(new Set(nodeIds).size).toBe(2);
    // The edge resolves to both distinct node IDs via the concept map.
    const edgeIds = ids.filter((id) => id.includes('_edge_'));
    expect(edgeIds).toHaveLength(1);
  });

});
