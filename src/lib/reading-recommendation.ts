/**
 * Recommended-reading matching (Phase 6, Track B1).
 *
 * Retrieval-and-match against the university catalog: knowledge-node concepts
 * are embedded and ranked against `library_items` embeddings. Every match
 * resolves to a real catalog record — no open-web URL generation, ever.
 *
 * Recommendation is enrichment, not content: failures here are SOFT (release
 * still completes; the recommend job can retry). This is an explicit,
 * documented deviation from the all-or-nothing ingestion contract.
 */

export interface CatalogEmbedding {
  id: string;
  title: string;
  embedding: number[];
  excerptAllowed: boolean;
}

export interface CatalogMatch {
  libraryItemId: string;
  matchScore: number;
}

export interface RecommendedReading {
  id: string;
  nodeId: string;
  studentId: string;
  libraryItemId: string;
  rationale: string;
  matchScore: number;
  createdAt: string;
}

export function cosineSimilarity(a: number[], b: number[]): number {
  if (a.length !== b.length || a.length === 0) {
    throw new Error('Vectors must be non-empty and of equal length');
  }
  let dot = 0;
  let normA = 0;
  let normB = 0;
  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i];
    normA += a[i] * a[i];
    normB += b[i] * b[i];
  }
  if (normA === 0 || normB === 0) return 0;
  return dot / (Math.sqrt(normA) * Math.sqrt(normB));
}

export function rankCatalogMatches(
  nodeEmbedding: number[],
  catalog: CatalogEmbedding[],
  options: { max: number; minScore: number },
): CatalogMatch[] {
  return catalog
    .map((item) => ({ libraryItemId: item.id, matchScore: cosineSimilarity(nodeEmbedding, item.embedding) }))
    .filter((match) => match.matchScore >= options.minScore)
    .sort((a, b) => b.matchScore - a.matchScore)
    .slice(0, options.max);
}

interface RecommendInput {
  studentId: string;
  nodes: Array<{ id: string; concept: string; summary: string }>;
  catalog: CatalogEmbedding[];
  embedText: (text: string) => Promise<number[]>;
  minScore?: number;
  maxPerNode?: number;
  now?: () => string;
}

export interface RecommendResult {
  recommendations: RecommendedReading[];
  /** True when the stage failed softly; caller should queue a retry, not fail the release. */
  failed: boolean;
}

export async function recommendReadingsForNodes(input: RecommendInput): Promise<RecommendResult> {
  const minScore = input.minScore ?? 0.55;
  const maxPerNode = input.maxPerNode ?? 4;
  const now = input.now ?? (() => new Date().toISOString());
  const recommendations: RecommendedReading[] = [];

  if (input.catalog.length === 0) return { recommendations, failed: false };

  try {
    for (const node of input.nodes) {
      const embedding = await input.embedText(`${node.concept}\n${node.summary}`);
      const matches = rankCatalogMatches(embedding, input.catalog, { max: maxPerNode, minScore });
      for (const match of matches) {
        const item = input.catalog.find((c) => c.id === match.libraryItemId)!;
        recommendations.push({
          id: `${node.id}__${match.libraryItemId}`,
          nodeId: node.id,
          studentId: input.studentId,
          libraryItemId: match.libraryItemId,
          rationale: `Catalog match: "${item.title}" aligns with "${node.concept}" (score ${match.matchScore.toFixed(2)}).`,
          matchScore: match.matchScore,
          createdAt: now(),
        });
      }
    }
    return { recommendations, failed: false };
  } catch (error) {
    // Soft failure by design: readings are enrichment. Log a bounded signal only.
    console.error('reading_recommendation_failed', {
      studentId: input.studentId,
      nodeCount: input.nodes.length,
      reason: error instanceof Error ? error.name : 'unknown',
    });
    return { recommendations: [], failed: true };
  }
}
