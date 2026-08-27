/**
 * Recommend-reading stage (Phase 6, Track B1).
 *
 * Runs AFTER a release finalizes. Embeds each newly-extracted knowledge node
 * and matches it against the university `library_items` catalog. Matches are
 * stored as `recommended_readings`; when the catalog item allows excerpts,
 * the excerpt is chunked + embedded into the student's own vector space with
 * origin:'library' so licensed e-book content participates in RAG/generation.
 *
 * SOFT FAILURE by design: this stage never fails a release. Failures are
 * logged with bounded categories and can be retried via the job loop.
 */
import { ai, COURSEWARE_EMBEDDER } from '../genkit';
import { DataService } from '../../lib/data-service';
import { chunkMarkdown } from '../../lib/courseware-rag';
import {
  recommendReadingsForNodes,
  type CatalogEmbedding,
} from '../../lib/reading-recommendation';

async function embedText(text: string): Promise<number[]> {
  const response = await ai.embed({
    embedder: COURSEWARE_EMBEDDER,
    content: text,
    options: { taskType: 'RETRIEVAL_QUERY' },
  });
  const embedding = response[0]?.embedding ?? [];
  if (!embedding.length) throw new Error('Empty embedding');
  return embedding;
}

export interface RecommendStageInput {
  studentId: string;
  courseId: string;
  moduleId: string;
  nodes: Array<{ id: string; lessonId: string; concept: string; summary: string }>;
}

export interface RecommendStageResult {
  recommendedCount: number;
  excerptChunksIngested: number;
  failed: boolean;
}

export async function runRecommendReadingStage(input: RecommendStageInput): Promise<RecommendStageResult> {
  try {
    const catalogItems = await DataService.getLibraryItems();
    if (catalogItems.length === 0 || input.nodes.length === 0) {
      return { recommendedCount: 0, excerptChunksIngested: 0, failed: false };
    }

    // Embed catalog metadata (+ excerpt lead when licensed) once per run.
    const catalog: CatalogEmbedding[] = [];
    for (const item of catalogItems) {
      const meta = `${item.title}\n${item.authors.join(', ')}\n${item.excerptAllowed && item.excerpt ? item.excerpt.slice(0, 1000) : ''}`;
      catalog.push({
        id: item.id,
        title: item.title,
        embedding: await embedText(meta),
        excerptAllowed: item.excerptAllowed,
      });
    }

    const { recommendations, failed } = await recommendReadingsForNodes({
      studentId: input.studentId,
      nodes: input.nodes,
      catalog,
      embedText,
    });
    if (failed) return { recommendedCount: 0, excerptChunksIngested: 0, failed: true };

    await DataService.saveRecommendedReadings(recommendations);

    // Ingest licensed excerpts for matched items (once per item per student).
    let excerptChunksIngested = 0;
    const matchedItemIds = [...new Set(recommendations.map((rec) => rec.libraryItemId))];
    for (const itemId of matchedItemIds) {
      const item = catalogItems.find((candidate) => candidate.id === itemId)!;
      if (!item.excerptAllowed || !item.excerpt) continue;
      const rec = recommendations.find((candidate) => candidate.libraryItemId === itemId)!;
      const node = input.nodes.find((candidate) => candidate.id === rec.nodeId)!;
      const chunks = chunkMarkdown(item.excerpt);
      const embedded = [];
      for (const chunk of chunks) {
        embedded.push({
          index: chunk.index,
          heading: chunk.heading,
          content: chunk.content,
          embedding: await embedText(`${item.title}\n${chunk.heading}\n${chunk.content}`),
        });
      }
      excerptChunksIngested += await DataService.writeLibraryExcerptChunks({
        studentId: input.studentId,
        libraryItemId: item.id,
        lessonId: node.lessonId,
        courseId: input.courseId,
        moduleId: input.moduleId,
        itemTitle: item.title,
        chunks: embedded,
      });
    }

    return { recommendedCount: recommendations.length, excerptChunksIngested, failed: false };
  } catch (error) {
    console.error('recommend_reading_stage_failed', {
      studentId: input.studentId,
      reason: error instanceof Error ? error.name : 'unknown',
    });
    return { recommendedCount: 0, excerptChunksIngested: 0, failed: true };
  }
}
