/**
 * Peer share accept/reject → personal wiki ingestion (Phase 6, Track B3).
 *
 * Accept ingests the shared body into the ACCEPTOR's own vector space and
 * knowledge graph, tagged origin:'peer_share'. The sharer's brain is never
 * mutated; two acceptors get independent copies (deterministic per-acceptor
 * ids make re-accept idempotent). Withdrawn items cannot be newly accepted,
 * but already-accepted copies persist — documented semantics.
 */
import type { SharedItem } from './shared-items';

export interface PeerChunkRecord {
  id: string;
  studentId: string;
  origin: 'peer_share';
  sharedItemId: string;
  lessonId: string;
  lessonTitle: string;
  chunkIndex: number;
  heading: string;
  content: string;
  embedding: number[];
}

export interface PeerNodeRecord {
  id: string;
  studentId: string;
  origin: 'peer_share';
  sharedItemId: string;
  lessonId: string;
  moduleId: string;
  courseId: string;
  concept: string;
  category: 'core' | 'technique' | 'architecture' | 'formula' | 'tradeoff' | 'concept';
  summary: string;
  importance: number;
  releasedAt: string;
}

export interface PeerEdgeRecord {
  id: string;
  studentId: string;
  origin: 'peer_share';
  sharedItemId: string;
  sourceNodeId: string;
  targetNodeId: string;
  sourceConcept: string;
  targetConcept: string;
  relationshipType: 'prerequisite' | 'builds_upon' | 'related_to' | 'contrasts_with' | 'part_of';
  description: string;
  releasedAt: string;
}

export interface PeerAcceptanceDeps {
  chunkMarkdown(markdown: string): Array<{ index: number; heading: string; content: string }>;
  embedText(text: string): Promise<number[]>;
  extractGraph(markdown: string): Promise<{
    nodes: Array<{ concept: string; category: PeerNodeRecord['category']; summary: string; importance: number }>;
    edges: Array<{ sourceConcept: string; targetConcept: string; relationshipType: PeerEdgeRecord['relationshipType']; description: string }>;
  }>;
  writePeerChunks(chunks: PeerChunkRecord[]): Promise<void>;
  writePeerGraph(nodes: PeerNodeRecord[], edges: PeerEdgeRecord[]): Promise<void>;
}

function slug(value: string): string {
  return value.toLowerCase().normalize('NFKD').replace(/[^a-z0-9]+/g, '_').replace(/^_+|_+$/g, '').slice(0, 60) || 'item';
}

export function peerChunkId(acceptorId: string, sharedItemId: string, index: number): string {
  return `peer_${acceptorId}_${sharedItemId}_${String(index).padStart(5, '0')}`;
}

export function peerNodeId(acceptorId: string, sharedItemId: string, concept: string): string {
  return `peer_${acceptorId}_${sharedItemId}_node_${slug(concept)}`;
}

export function validateAcceptance(share: SharedItem, acceptorId: string): void {
  if (share.status !== 'active') {
    throw new Error('Shared item is no longer available for acceptance');
  }
  if (share.sharerId === acceptorId) {
    throw new Error('Cannot accept your own shared item');
  }
}

export interface PeerAcceptanceResult {
  chunksIngested: number;
  nodesIngested: number;
  edgesIngested: number;
  /** False when graph extraction failed softly — chunks still landed. */
  graphExtracted: boolean;
}

export async function runPeerAcceptance(
  input: { share: SharedItem; acceptorId: string },
  deps: PeerAcceptanceDeps,
): Promise<PeerAcceptanceResult> {
  const { share, acceptorId } = input;
  validateAcceptance(share, acceptorId);

  const source = `# ${share.title}\n\n${share.body}`;
  const lessonId = share.sourceLessonId ?? `share-${share.id}`;
  const now = new Date().toISOString();

  const rawChunks = deps.chunkMarkdown(source);
  const chunks: PeerChunkRecord[] = [];
  for (const chunk of rawChunks) {
    chunks.push({
      id: peerChunkId(acceptorId, share.id, chunk.index),
      studentId: acceptorId,
      origin: 'peer_share',
      sharedItemId: share.id,
      lessonId,
      lessonTitle: share.title,
      chunkIndex: chunk.index,
      heading: chunk.heading,
      content: chunk.content,
      embedding: await deps.embedText(`${share.title}\n${chunk.heading}\n${chunk.content}`),
    });
  }
  await deps.writePeerChunks(chunks);

  // Graph extraction is enrichment for the constellation: soft failure keeps
  // the accepted chunks (RAG-visible) and reports graphExtracted=false.
  let nodes: PeerNodeRecord[] = [];
  let edges: PeerEdgeRecord[] = [];
  let graphExtracted = true;
  try {
    const extracted = await deps.extractGraph(source);
    const nodeIdByConcept = new Map<string, string>();
    nodes = extracted.nodes.map((node) => {
      const id = peerNodeId(acceptorId, share.id, node.concept);
      nodeIdByConcept.set(node.concept.toLowerCase().trim(), id);
      return {
        id,
        studentId: acceptorId,
        origin: 'peer_share' as const,
        sharedItemId: share.id,
        lessonId,
        moduleId: `share-${share.id}`,
        courseId: `share-${share.id}`,
        concept: node.concept,
        category: node.category,
        summary: node.summary,
        importance: node.importance,
        releasedAt: now,
      };
    });
    edges = extracted.edges
      .map((edge) => ({
        edge,
        sourceNodeId: nodeIdByConcept.get(edge.sourceConcept.toLowerCase().trim()),
        targetNodeId: nodeIdByConcept.get(edge.targetConcept.toLowerCase().trim()),
      }))
      .filter(({ sourceNodeId, targetNodeId }) => sourceNodeId && targetNodeId)
      .map(({ edge, sourceNodeId, targetNodeId }) => ({
        id: `peer_${acceptorId}_${share.id}_edge_${slug(edge.sourceConcept)}_${slug(edge.targetConcept)}_${edge.relationshipType}`,
        studentId: acceptorId,
        origin: 'peer_share' as const,
        sharedItemId: share.id,
        sourceNodeId: sourceNodeId as string,
        targetNodeId: targetNodeId as string,
        sourceConcept: edge.sourceConcept,
        targetConcept: edge.targetConcept,
        relationshipType: edge.relationshipType,
        description: edge.description,
        releasedAt: now,
      }));
    await deps.writePeerGraph(nodes, edges);
  } catch (error) {
    graphExtracted = false;
    console.error('peer_acceptance_graph_failed', {
      shareId: share.id,
      acceptorId,
      reason: error instanceof Error ? error.name : 'unknown',
    });
  }

  return {
    chunksIngested: chunks.length,
    nodesIngested: nodes.length,
    edgesIngested: edges.length,
    graphExtracted,
  };
}
