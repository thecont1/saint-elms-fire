import { z } from 'genkit';
import { ai, COURSEWARE_EMBEDDER, GEMINI_FLASH } from '../genkit';
import { DataService } from '../../lib/data-service';
import { chunkMarkdown } from '../../lib/courseware-rag';
import { runLessonIngestion, type GraphExtraction } from '../../lib/second-brain-ingestion';

export const IngestCoursewareInputSchema = z.object({
  releaseId: z.string().trim().min(1),
  lessonId: z.string().trim().min(1),
  courseId: z.string().trim().min(1),
  moduleId: z.string().trim().min(1),
  studentId: z.string().trim().min(1),
  markdownContent: z.string().trim().min(1),
  lessonTitle: z.string().trim().min(1).optional(),
  releaseTimestamp: z.string().datetime().optional(),
});

const ExtractedConceptSchema = z.object({
  concept: z.string().min(1),
  category: z.enum(['core', 'technique', 'architecture', 'formula', 'tradeoff', 'concept']),
  summary: z.string().min(1),
  importance: z.number().int().min(1).max(5),
});

const ExtractedEdgeSchema = z.object({
  sourceConcept: z.string().min(1),
  targetConcept: z.string().min(1),
  relationshipType: z.enum(['prerequisite', 'builds_upon', 'related_to', 'contrasts_with', 'part_of']),
  description: z.string().min(1),
  strength: z.number().int().min(1).max(5).optional(),
});

const GraphExtractionSchema = z.object({
  nodes: z.array(ExtractedConceptSchema),
  edges: z.array(ExtractedEdgeSchema),
});

export const IngestCoursewareOutputSchema = z.object({
  lessonId: z.string(),
  studentId: z.string(),
  chunksStored: z.number().int().nonnegative(),
  embeddingModel: z.string(),
  extractedNodesCount: z.number().int().nonnegative(),
  extractedEdgesCount: z.number().int().nonnegative(),
  nodes: z.array(ExtractedConceptSchema),
  edges: z.array(ExtractedEdgeSchema),
  message: z.string(),
});

function parseMarkdown(markdown: string): string {
  const normalized = markdown.replace(/\r\n?/g, '\n').trim();
  if (!normalized) throw new Error('Markdown content is required');
  if (!/^#{1,6}\s+\S/m.test(normalized)) throw new Error('Markdown must contain at least one heading');
  return normalized;
}

export const ingestCourseware = ai.defineFlow(
  {
    name: 'ingestCourseware',
    inputSchema: IngestCoursewareInputSchema,
    outputSchema: IngestCoursewareOutputSchema,
  },
  async (input) => {
    const releaseTimestamp = input.releaseTimestamp || new Date().toISOString();
    const lessonTitle = input.lessonTitle || input.lessonId;
    const result = await runLessonIngestion({
      releaseId: input.releaseId,
      lessonId: input.lessonId,
      courseId: input.courseId,
      moduleId: input.moduleId,
      studentId: input.studentId,
      markdownContent: input.markdownContent,
      lessonTitle,
      releaseTimestamp,
    }, {
      now: () => new Date().toISOString(),
      getRelease: async (releaseId) => {
        const release = await DataService.getRelease(releaseId);
        if (!release) throw new Error('Release not found');
        return release;
      },
      updateStep: (releaseId, lessonId, stage, patch) => DataService.updateIngestionStep(releaseId, lessonId, stage, patch),
      loadArtifact: (releaseId, lessonId) => DataService.getIngestionArtifact(releaseId, lessonId),
      saveArtifact: (releaseId, lessonId, patch) => DataService.saveIngestionArtifact(releaseId, lessonId, patch),
      parseMarkdown,
      chunkMarkdown,
      getStagedEmbedding: (releaseId, lessonId, index) => DataService.getStagedEmbedding(releaseId, lessonId, index),
      saveStagedEmbedding: (releaseId, lessonId, index, embedding) => DataService.saveStagedEmbedding(releaseId, lessonId, index, embedding),
      embedChunk: async (content) => {
        const response = await ai.embed({
          embedder: COURSEWARE_EMBEDDER,
          content,
          options: { taskType: 'RETRIEVAL_DOCUMENT', title: lessonTitle },
        });
        return response[0]?.embedding ?? [];
      },
      writeVectors: (records) => DataService.writeVerifiedCoursewareVectors(records),
      verifyVectors: (records) => DataService.verifyCoursewareVectors(records),
      extractGraph: async (markdown): Promise<GraphExtraction> => {
        const existingGraph = await DataService.getStudentKnowledgeGraph(input.studentId);
        const response = await ai.generate({
          prompt: `Extract a concise knowledge graph from the lesson below. Use only facts in the Markdown. Connect to prior concepts only when explicitly supported.\n\nPrior concepts: ${JSON.stringify(existingGraph.nodes.map(node => node.concept))}\n\nLesson: ${lessonTitle}\n\n${markdown}`,
          output: { schema: GraphExtractionSchema },
        });
        if (!response.output) throw new Error('graph extraction returned no output');
        return GraphExtractionSchema.parse(response.output);
      },
      writeGraph: (graph) => DataService.writeVerifiedKnowledgeGraph(input.studentId, graph),
      verifyGraph: (graph) => DataService.verifyKnowledgeGraph(graph),
    });

    return {
      lessonId: input.lessonId,
      studentId: input.studentId,
      chunksStored: result.chunksStored,
      embeddingModel: 'gemini-embedding-001/768',
      extractedNodesCount: result.extractedNodesCount,
      extractedEdgesCount: result.extractedEdgesCount,
      nodes: result.nodes.map(({ id: _id, lessonId: _lessonId, moduleId: _moduleId, courseId: _courseId, releasedAt: _releasedAt, releaseId: _releaseId, ...node }) => node),
      edges: result.edges.map(({ id: _id, sourceNodeId: _sourceNodeId, targetNodeId: _targetNodeId, releasedAt: _releasedAt, releaseId: _releaseId, ...edge }) => edge),
      message: `Verified ${result.chunksStored} vectors and the Knowledge Constellation using ${GEMINI_FLASH}.`,
    };
  }
);

export const ingestCoursewareFlow = ingestCourseware;
export const IngestionInputSchema = IngestCoursewareInputSchema;
export const IngestionOutputSchema = IngestCoursewareOutputSchema;
