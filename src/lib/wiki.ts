/**
 * Second Brain wiki page assembly (Phase 6, Track B4).
 *
 * The constellation is the map; the wiki page is the territory: per-concept
 * summary, source lessons, recommended readings, accepted peer material, and
 * backlinks derived from graph edges in both directions.
 */

export interface WikiNodeInput {
  id: string;
  concept: string;
  summary: string;
  lessonId: string;
  category: string;
  importance: number;
  masteryLevel?: number;
  origin?: string;
  sharedItemId?: string;
}

export interface WikiEdgeInput {
  id: string;
  sourceNodeId: string;
  targetNodeId: string;
  sourceConcept: string;
  targetConcept: string;
  relationshipType: string;
  description: string;
}

export interface WikiBacklink {
  nodeId: string;
  concept: string;
  relationshipType: string;
  description: string;
  direction: 'incoming' | 'outgoing';
}

export interface WikiPage {
  nodeId: string;
  concept: string;
  summary: string;
  category: string;
  importance: number;
  masteryLevel?: number;
  origin: 'lesson' | 'library' | 'peer_share';
  sourceLessons: Array<{ id: string; title: string }>;
  recommendedReadings: Array<{ libraryItemId: string; rationale: string; matchScore: number; item?: { title: string } }>;
  peerMaterial: Array<{ id: string; title: string; sharerId: string }>;
  backlinks: WikiBacklink[];
}

export function buildWikiPage(
  nodeId: string,
  context: {
    nodes: WikiNodeInput[];
    edges: WikiEdgeInput[];
    lessons: Array<{ id: string; title: string }>;
    readings: Array<{ nodeId: string; libraryItemId: string; rationale: string; matchScore: number; item?: { title: string } }>;
    peerItems: Array<{ id: string; title: string; sharerId: string }>;
  },
): WikiPage {
  const node = context.nodes.find((candidate) => candidate.id === nodeId);
  if (!node) throw new Error(`Knowledge node ${nodeId} not found`);

  const conceptById = new Map(context.nodes.map((candidate) => [candidate.id, candidate.concept]));
  const backlinks: WikiBacklink[] = [];
  for (const edge of context.edges) {
    if (edge.sourceNodeId === nodeId) {
      backlinks.push({
        nodeId: edge.targetNodeId,
        concept: conceptById.get(edge.targetNodeId) ?? edge.targetConcept,
        relationshipType: edge.relationshipType,
        description: edge.description,
        direction: 'outgoing',
      });
    } else if (edge.targetNodeId === nodeId) {
      backlinks.push({
        nodeId: edge.sourceNodeId,
        concept: conceptById.get(edge.sourceNodeId) ?? edge.sourceConcept,
        relationshipType: edge.relationshipType,
        description: edge.description,
        direction: 'incoming',
      });
    }
  }

  const sourceLessons = context.lessons.filter((lesson) => lesson.id === node.lessonId);
  const readings = context.readings.filter((reading) => reading.nodeId === nodeId);
  const peerMaterial = node.sharedItemId
    ? context.peerItems.filter((item) => item.id === node.sharedItemId)
    : [];

  return {
    nodeId,
    concept: node.concept,
    summary: node.summary,
    category: node.category,
    importance: node.importance,
    masteryLevel: node.masteryLevel,
    origin: (node.origin as WikiPage['origin']) ?? 'lesson',
    sourceLessons,
    recommendedReadings: readings.map(({ nodeId: _n, ...rest }) => rest),
    peerMaterial,
    backlinks,
  };
}
