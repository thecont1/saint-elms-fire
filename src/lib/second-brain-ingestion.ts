import type {
  IngestionErrorCategory,
  IngestionStage,
  IngestionStepRecord,
  ReleaseEvent,
} from './types';
import type { MarkdownChunk } from './courseware-rag';

export interface ParsedMarkdown {
  normalized: string;
}

export interface IngestionArtifact {
  parsedMarkdown?: string;
  chunks?: MarkdownChunk[];
}

export interface StagedVectorRecord {
  id: string;
  lessonId: string;
  lessonTitle: string;
  courseId: string;
  moduleId: string;
  chunkIndex: number;
  heading: string;
  content: string;
  embeddingModel: string;
  embedding: number[];
  releaseId: string;
}

export interface ExtractedGraphNode {
  id: string;
  lessonId: string;
  moduleId: string;
  courseId: string;
  concept: string;
  category: 'core' | 'technique' | 'architecture' | 'formula' | 'tradeoff' | 'concept';
  summary: string;
  importance: number;
  releasedAt: string;
  releaseId: string;
}

export interface ExtractedGraphEdge {
  id: string;
  sourceNodeId: string;
  targetNodeId: string;
  sourceConcept: string;
  targetConcept: string;
  relationshipType: 'prerequisite' | 'builds_upon' | 'related_to' | 'contrasts_with' | 'part_of';
  description: string;
  strength?: number;
  releasedAt: string;
  releaseId: string;
}

export interface GraphExtraction {
  nodes: Array<Omit<ExtractedGraphNode, 'id' | 'lessonId' | 'moduleId' | 'courseId' | 'releasedAt' | 'releaseId'>>;
  edges: Array<Omit<ExtractedGraphEdge, 'id' | 'sourceNodeId' | 'targetNodeId' | 'releasedAt' | 'releaseId'>>;
}

export interface IngestionDependencies {
  now(): string;
  getRelease(releaseId: string): Promise<ReleaseEvent>;
  updateStep(
    releaseId: string,
    lessonId: string,
    stage: IngestionStage,
    patch: Partial<IngestionStepRecord>,
  ): Promise<void>;
  loadArtifact(releaseId: string, lessonId: string): Promise<IngestionArtifact | null>;
  saveArtifact(releaseId: string, lessonId: string, patch: Partial<IngestionArtifact>): Promise<void>;
  parseMarkdown(markdown: string): ParsedMarkdown | string;
  chunkMarkdown(markdown: string): MarkdownChunk[];
  getStagedEmbedding(releaseId: string, lessonId: string, chunkIndex: number): Promise<number[] | undefined>;
  saveStagedEmbedding(releaseId: string, lessonId: string, chunkIndex: number, embedding: number[]): Promise<void>;
  embedChunk(text: string, chunkIndex: number): Promise<number[]>;
  writeVectors(records: StagedVectorRecord[]): Promise<void>;
  verifyVectors(records: StagedVectorRecord[]): Promise<boolean>;
  extractGraph(markdown: string): Promise<GraphExtraction>;
  writeGraph(graph: { nodes: ExtractedGraphNode[]; edges: ExtractedGraphEdge[] }): Promise<void>;
  verifyGraph(graph: { nodes: ExtractedGraphNode[]; edges: ExtractedGraphEdge[] }): Promise<boolean>;
}

export interface LessonIngestionInput {
  releaseId: string;
  lessonId: string;
  lessonTitle: string;
  courseId: string;
  moduleId: string;
  studentId: string;
  markdownContent: string;
  releaseTimestamp: string;
}

export class IngestionStageError extends Error {
  constructor(
    readonly stage: IngestionStage,
    readonly category: IngestionErrorCategory,
    readonly publicMessage: string,
  ) {
    super(publicMessage);
    this.name = 'IngestionStageError';
  }
}

const PUBLIC_MESSAGES: Record<IngestionErrorCategory, string> = {
  invalid_markdown: 'Markdown parsing failed.',
  chunking_failed: 'Courseware chunking failed.',
  embedding_unavailable: 'Embedding provider unavailable.',
  rate_limited: 'Embedding provider rate limit reached.',
  firestore_write_failed: 'Second Brain storage write failed.',
  verification_failed: 'Second Brain write verification failed.',
  graph_extraction_failed: 'Knowledge graph extraction failed.',
  unknown: 'Ingestion failed unexpectedly.',
};

function slug(value: string): string {
  return value.toLowerCase().normalize('NFKD').replace(/[^a-z0-9]+/g, '_').replace(/^_+|_+$/g, '').slice(0, 80) || 'item';
}

/**
 * Stable FNV-1a 32-bit hash (hex) of the ORIGINAL concept string.
 *
 * slug() normalizes away punctuation and spacing, so distinct concepts such
 * as "API Gateway" and "API-Gateway" collide to the same slug. Appending a
 * hash of the un-normalized string keeps node/edge IDs collision-safe while
 * remaining deterministic across retries (same input → same ID → upsert, no
 * duplicates).
 */
function stableHash(value: string): string {
  let hash = 0x811c9dc5;
  for (let i = 0; i < value.length; i++) {
    hash ^= value.charCodeAt(i);
    hash = Math.imul(hash, 0x01000193);
  }
  return (hash >>> 0).toString(16).padStart(8, '0');
}

function categorize(stage: IngestionStage, error: unknown): IngestionErrorCategory {
  const candidate = error as { code?: unknown; status?: unknown; message?: unknown };
  const code = String(candidate?.code ?? candidate?.status ?? '').toLowerCase();
  const message = String(candidate?.message ?? '').toLowerCase();
  if (stage === 'parsing') return 'invalid_markdown';
  if (stage === 'chunking') return 'chunking_failed';
  if (stage === 'embedding') {
    if (code.includes('429') || code.includes('rate') || code.includes('resource_exhausted') || message.includes('429') || message.includes('rate limit') || message.includes('resource_exhausted')) return 'rate_limited';
    return 'embedding_unavailable';
  }
  if (stage === 'vector_write' || stage === 'graph_write') return 'firestore_write_failed';
  return 'unknown';
}

async function markFailed(
  deps: IngestionDependencies,
  input: LessonIngestionInput,
  stage: IngestionStage,
  error: unknown,
): Promise<IngestionStageError> {
  const category = error instanceof IngestionStageError ? error.category : categorize(stage, error);
  const publicMessage = error instanceof IngestionStageError ? error.publicMessage : PUBLIC_MESSAGES[category];
  await deps.updateStep(input.releaseId, input.lessonId, stage, {
    status: 'failed',
    completedAt: deps.now(),
    error: { category, message: publicMessage },
  });
  console.error('second_brain_ingestion_stage', { releaseId: input.releaseId, lessonId: input.lessonId, stage, status: 'failed', category });
  return error instanceof IngestionStageError ? error : new IngestionStageError(stage, category, publicMessage);
}

function getParsedText(parsed: ParsedMarkdown | string): string {
  return typeof parsed === 'string' ? parsed : parsed.normalized;
}

function buildGraph(input: LessonIngestionInput, extracted: GraphExtraction) {
  const nodeIdByConcept = new Map<string, string>();
  const nodes = extracted.nodes.map((node) => {
    // Hash of the ORIGINAL concept keeps distinct-but-similar concepts
    // ("API Gateway" vs "API-Gateway") from collapsing into one document.
    const id = `${input.releaseId}_${input.lessonId}_node_${slug(node.concept)}_${stableHash(node.concept)}`;
    nodeIdByConcept.set(node.concept.toLowerCase().trim(), id);
    return {
      ...node,
      id,
      lessonId: input.lessonId,
      moduleId: input.moduleId,
      courseId: input.courseId,
      releasedAt: input.releaseTimestamp,
      releaseId: input.releaseId,
    };
  });
  const edges = extracted.edges.map((edge) => ({
    ...edge,
    id: `${input.releaseId}_${input.lessonId}_edge_${slug(edge.sourceConcept)}_${stableHash(edge.sourceConcept)}_${slug(edge.targetConcept)}_${stableHash(edge.targetConcept)}_${edge.relationshipType}`,
    sourceNodeId: nodeIdByConcept.get(edge.sourceConcept.toLowerCase().trim()) ?? '',
    targetNodeId: nodeIdByConcept.get(edge.targetConcept.toLowerCase().trim()) ?? '',
    releasedAt: input.releaseTimestamp,
    releaseId: input.releaseId,
  }));
  return { nodes, edges };
}

export async function runLessonIngestion(input: LessonIngestionInput, deps: IngestionDependencies) {
  const release = await deps.getRelease(input.releaseId);
  const status = (stage: IngestionStage) => release.steps?.find((step) => step.lessonId === input.lessonId && step.stage === stage)?.status;
  let artifact = await deps.loadArtifact(input.releaseId, input.lessonId) ?? {};

  if (status('parsing') !== 'complete') {
    console.info('second_brain_ingestion_stage', { releaseId: input.releaseId, lessonId: input.lessonId, stage: 'parsing', status: 'in_progress' });
    await deps.updateStep(input.releaseId, input.lessonId, 'parsing', { status: 'in_progress', startedAt: deps.now(), error: undefined });
    try {
      const parsed = deps.parseMarkdown(input.markdownContent);
      artifact.parsedMarkdown = getParsedText(parsed);
      await deps.saveArtifact(input.releaseId, input.lessonId, { parsedMarkdown: artifact.parsedMarkdown });
      await deps.updateStep(input.releaseId, input.lessonId, 'parsing', { status: 'complete', completedAt: deps.now() });
    } catch (error) {
      throw await markFailed(deps, input, 'parsing', error);
    }
  }

  if (status('chunking') !== 'complete') {
    console.info('second_brain_ingestion_stage', { releaseId: input.releaseId, lessonId: input.lessonId, stage: 'chunking', status: 'in_progress' });
    await deps.updateStep(input.releaseId, input.lessonId, 'chunking', { status: 'in_progress', startedAt: deps.now(), error: undefined });
    try {
      artifact.chunks = deps.chunkMarkdown(artifact.parsedMarkdown ?? input.markdownContent);
      if (artifact.chunks.length === 0) throw new Error('No chunks');
      await deps.saveArtifact(input.releaseId, input.lessonId, { chunks: artifact.chunks });
      await deps.updateStep(input.releaseId, input.lessonId, 'chunking', {
        status: 'complete', completedAt: deps.now(), itemsProcessed: artifact.chunks.length, itemsTotal: artifact.chunks.length,
      });
    } catch (error) {
      throw await markFailed(deps, input, 'chunking', error);
    }
  }

  artifact = await deps.loadArtifact(input.releaseId, input.lessonId) ?? artifact;
  const chunks = artifact.chunks ?? [];
  const embeddings: number[][] = [];
  if (status('embedding') !== 'complete') {
    console.info('second_brain_ingestion_stage', { releaseId: input.releaseId, lessonId: input.lessonId, stage: 'embedding', status: 'in_progress', itemsTotal: chunks.length });
    await deps.updateStep(input.releaseId, input.lessonId, 'embedding', {
      status: 'in_progress', startedAt: deps.now(), error: undefined, itemsProcessed: 0, itemsTotal: chunks.length,
    });
    try {
      for (const chunk of chunks) {
        let embedding = await deps.getStagedEmbedding(input.releaseId, input.lessonId, chunk.index);
        if (!embedding?.length) {
          embedding = await deps.embedChunk(`${input.lessonTitle}\n${chunk.heading}\n${chunk.content}`, chunk.index);
          if (!embedding.length) throw new Error('Empty embedding');
          await deps.saveStagedEmbedding(input.releaseId, input.lessonId, chunk.index, embedding);
        }
        embeddings.push(embedding);
        await deps.updateStep(input.releaseId, input.lessonId, 'embedding', {
          status: 'in_progress', itemsProcessed: embeddings.length, itemsTotal: chunks.length,
        });
      }
      await deps.updateStep(input.releaseId, input.lessonId, 'embedding', {
        status: 'complete', completedAt: deps.now(), itemsProcessed: chunks.length, itemsTotal: chunks.length,
      });
    } catch (error) {
      throw await markFailed(deps, input, 'embedding', error);
    }
  } else {
    for (const chunk of chunks) {
      const embedding = await deps.getStagedEmbedding(input.releaseId, input.lessonId, chunk.index);
      if (!embedding?.length) throw await markFailed(deps, input, 'embedding', new Error('Missing staged embedding'));
      embeddings.push(embedding);
    }
  }

  const vectors = chunks.map((chunk, index): StagedVectorRecord => ({
    id: `${input.releaseId}_${input.lessonId}_${String(chunk.index).padStart(5, '0')}`,
    lessonId: input.lessonId,
    lessonTitle: input.lessonTitle,
    courseId: input.courseId,
    moduleId: input.moduleId,
    chunkIndex: chunk.index,
    heading: chunk.heading,
    content: chunk.content,
    embeddingModel: 'gemini-embedding-001/768',
    embedding: embeddings[index],
    releaseId: input.releaseId,
  }));

  if (status('vector_write') !== 'complete') {
    console.info('second_brain_ingestion_stage', { releaseId: input.releaseId, lessonId: input.lessonId, stage: 'vector_write', status: 'in_progress', itemsTotal: vectors.length });
    await deps.updateStep(input.releaseId, input.lessonId, 'vector_write', { status: 'in_progress', startedAt: deps.now(), error: undefined });
    try {
      await deps.writeVectors(vectors);
      if (!await deps.verifyVectors(vectors)) {
        throw new IngestionStageError('vector_write', 'verification_failed', PUBLIC_MESSAGES.verification_failed);
      }
      await deps.updateStep(input.releaseId, input.lessonId, 'vector_write', {
        status: 'complete', completedAt: deps.now(), itemsProcessed: vectors.length, itemsTotal: vectors.length,
      });
    } catch (error) {
      throw await markFailed(deps, input, 'vector_write', error);
    }
  }

  let graph = { nodes: [] as ExtractedGraphNode[], edges: [] as ExtractedGraphEdge[] };
  if (status('graph_write') !== 'complete') {
    console.info('second_brain_ingestion_stage', { releaseId: input.releaseId, lessonId: input.lessonId, stage: 'graph_write', status: 'in_progress' });
    await deps.updateStep(input.releaseId, input.lessonId, 'graph_write', { status: 'in_progress', startedAt: deps.now(), error: undefined });
    try {
      const extracted = await deps.extractGraph(artifact.parsedMarkdown ?? input.markdownContent);
      graph = buildGraph(input, extracted);
      await deps.writeGraph(graph);
      if (!await deps.verifyGraph(graph)) {
        throw new IngestionStageError('graph_write', 'verification_failed', PUBLIC_MESSAGES.verification_failed);
      }
      await deps.updateStep(input.releaseId, input.lessonId, 'graph_write', {
        status: 'complete', completedAt: deps.now(), itemsProcessed: graph.nodes.length + graph.edges.length,
        itemsTotal: graph.nodes.length + graph.edges.length,
      });
    } catch (error) {
      // Log the raw error before wrapping so provider-side failures are
      // diagnosable even though only bounded categories reach Firestore.
      console.error('graph_write_stage_error', {
        releaseId: input.releaseId,
        lessonId: input.lessonId,
        error: error instanceof Error ? error.message : String(error),
      });
      const wrapped = error instanceof IngestionStageError
        ? error
        : new IngestionStageError('graph_write', error instanceof Error && error.message.includes('extract') ? 'graph_extraction_failed' : categorize('graph_write', error),
          error instanceof Error && error.message.includes('extract') ? PUBLIC_MESSAGES.graph_extraction_failed : PUBLIC_MESSAGES[categorize('graph_write', error)]);
      throw await markFailed(deps, input, 'graph_write', wrapped);
    }
  }

  return {
    chunksStored: vectors.length,
    extractedNodesCount: graph.nodes.length,
    extractedEdgesCount: graph.edges.length,
    nodes: graph.nodes,
    edges: graph.edges,
  };
}
