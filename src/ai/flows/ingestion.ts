import { z } from 'genkit';
import { ai, COURSEWARE_EMBEDDER, GEMINI_FLASH } from '../genkit';
import { DataService } from '../../lib/data-service';
import { chunkMarkdown } from '../../lib/courseware-rag';

export const IngestCoursewareInputSchema = z.object({
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
  strength: z.number().int().min(1).max(5),
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

const GraphExtractionSchema = z.object({
  nodes: z.array(ExtractedConceptSchema),
  edges: z.array(ExtractedEdgeSchema),
});

export const ingestCourseware = ai.defineFlow(
  {
    name: 'ingestCourseware',
    inputSchema: IngestCoursewareInputSchema,
    outputSchema: IngestCoursewareOutputSchema,
  },
  async (input) => {
    const releaseTime = input.releaseTimestamp || new Date().toISOString();
    const lessonTitle = input.lessonTitle || input.lessonId;
    const chunks = chunkMarkdown(input.markdownContent);

    const embeddings: number[][] = [];
    for (let start = 0; start < chunks.length; start += 8) {
      const batch = chunks.slice(start, start + 8);
      const batchEmbeddings = await Promise.all(
        batch.map(async (chunk) => {
          const result = await ai.embed({
            embedder: COURSEWARE_EMBEDDER,
            content: `${lessonTitle}\n${chunk.heading}\n${chunk.content}`,
            options: { taskType: 'RETRIEVAL_DOCUMENT', title: `${lessonTitle}: ${chunk.heading}` },
          });
          const embedding = result[0]?.embedding;
          if (!embedding?.length) throw new Error(`Embedding failed for chunk ${chunk.index}`);
          return embedding;
        })
      );
      embeddings.push(...batchEmbeddings);
    }

    const existingGraph = await DataService.getStudentKnowledgeGraph(input.studentId);
    const response = await ai.generate({
      prompt: `Extract a concise knowledge graph from the released lesson below. Use only facts in the Markdown. Connect to prior concepts only when the lesson explicitly supports the relationship.\n\nPrior concepts: ${JSON.stringify(existingGraph.nodes.map((node) => node.concept))}\n\nLesson: ${lessonTitle}\n\n${input.markdownContent}`,
      output: { schema: GraphExtractionSchema },
    });
    if (!response.output) throw new Error('Gemini returned no structured knowledge graph');
    const parsed = GraphExtractionSchema.parse(response.output);

    const chunksStored = await DataService.replaceCoursewareChunks(
      input.lessonId,
      chunks.map((chunk, index) => ({
        lessonId: input.lessonId,
        lessonTitle,
        courseId: input.courseId,
        moduleId: input.moduleId,
        chunkIndex: chunk.index,
        heading: chunk.heading,
        content: chunk.content,
        embeddingModel: 'gemini-embedding-001/768',
        embedding: embeddings[index],
      }))
    );

    const { savedNodes, savedEdges } = await DataService.saveKnowledgeNodesAndEdges(
      input.studentId,
      parsed.nodes.map((node) => ({
        lessonId: input.lessonId,
        moduleId: input.moduleId,
        courseId: input.courseId,
        ...node,
        releasedAt: releaseTime,
      })),
      parsed.edges.map((edge) => ({
        sourceNodeId: '',
        targetNodeId: '',
        ...edge,
        releasedAt: releaseTime,
      }))
    );

    return {
      lessonId: input.lessonId,
      studentId: input.studentId,
      chunksStored,
      embeddingModel: 'gemini-embedding-001/768',
      extractedNodesCount: savedNodes.length,
      extractedEdgesCount: savedEdges.length,
      nodes: parsed.nodes,
      edges: parsed.edges,
      message: `Embedded ${chunksStored} chunks and updated the Knowledge Constellation using ${GEMINI_FLASH}.`,
    };
  }
);

// Compatibility export for existing release-route callers.
export const ingestCoursewareFlow = ingestCourseware;
export const IngestionInputSchema = IngestCoursewareInputSchema;
export const IngestionOutputSchema = IngestCoursewareOutputSchema;
