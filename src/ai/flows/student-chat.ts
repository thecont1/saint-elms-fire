import { z } from 'genkit';
import { ai, COURSEWARE_EMBEDDER } from '../genkit';
import { DataService } from '../../lib/data-service';
import { filterReleasedRetrievedChunks } from '../../lib/courseware-rag';

export const ChatHistoryMessageSchema = z.object({
  role: z.enum(['student', 'tutor', 'user', 'model', 'system']),
  content: z.string().trim().min(1),
});

export const RagChatInputSchema = z.object({
  studentId: z.string().trim().min(1),
  question: z.string().trim().min(1),
  courseId: z.string().trim().min(1).optional(),
  history: z.array(ChatHistoryMessageSchema).max(20).optional(),
  topK: z.number().int().min(1).max(12).optional(),
});

export const GroundedSourceSchema = z.object({
  lessonId: z.string(),
  lessonTitle: z.string(),
  concept: z.string(),
  summary: z.string(),
});

export const RagChatOutputSchema = z.object({
  answer: z.string(),
  isGrounded: z.boolean(),
  groundedSources: z.array(GroundedSourceSchema),
  unreleasedTopicsWarning: z.string().optional(),
  confidence: z.number().min(0).max(1),
  retrievedChunkCount: z.number().int().nonnegative(),
});

const GeneratedAnswerSchema = z.object({
  answer: z.string().min(1),
  isGrounded: z.boolean(),
  groundedSources: z.array(GroundedSourceSchema),
  confidence: z.number().min(0).max(1),
});

export const ragChat = ai.defineFlow(
  {
    name: 'ragChat',
    inputSchema: RagChatInputSchema,
    outputSchema: RagChatOutputSchema,
  },
  async ({ studentId, question, courseId, history = [], topK = 6 }) => {
    const [releasedLessons, activeReleases] = await Promise.all([
      DataService.getReleasedLessonsForStudent(studentId, courseId),
      DataService.getReleasesForStudent(studentId),
    ]);
    if (releasedLessons.length === 0) {
      return {
        answer: "You do not have any released courseware yet. Once your instructor unlocks a lesson, the Socratic Beacon can answer from it.",
        isGrounded: false,
        groundedSources: [],
        unreleasedTopicsWarning: 'No courseware has been released to you yet.',
        confidence: 1,
        retrievedChunkCount: 0,
      };
    }

    const queryEmbedding = await ai.embed({
      embedder: COURSEWARE_EMBEDDER,
      content: question,
      options: { taskType: 'RETRIEVAL_QUERY' },
    });
    const vector = queryEmbedding[0]?.embedding;
    if (!vector?.length) throw new Error('Gemini returned no query embedding');

    const releasedIds = new Set(releasedLessons.map((lesson) => lesson.id));
    const rawChunks = await DataService.retrieveCoursewareChunks(
      vector,
      [...releasedIds],
      topK,
      activeReleases.map(release => release.id),
    );
    const visibleReleaseIds = new Set(activeReleases.map(release => release.id));
    const chunks = filterReleasedRetrievedChunks(rawChunks, releasedIds, topK)
      .filter(chunk => !chunk.releaseId || visibleReleaseIds.has(chunk.releaseId));
    if (chunks.length === 0) {
      return {
        answer: 'No indexed passage from your released lessons matched this question. Ask your instructor to re-ingest the released courseware, or try a question closer to the lesson text.',
        isGrounded: false,
        groundedSources: [],
        unreleasedTopicsWarning: 'Released lessons are not fully indexed yet.',
        confidence: 1,
        retrievedChunkCount: 0,
      };
    }

    const lessonById = new Map(releasedLessons.map((lesson) => [lesson.id, lesson]));
    const context = chunks.map((chunk, index) =>
      `[${index + 1}] ${chunk.lessonTitle} (lessonId=${chunk.lessonId}, chunk=${chunk.chunkIndex})\n${chunk.content}`
    ).join('\n\n');

    const response = await ai.generate({
      system: `You are the Socratic Beacon. Answer only from the retrieved passages. If the passages do not support an answer, say so. Never infer or reveal unreleased curriculum. Cite lesson titles in the answer.`,
      prompt: `RETRIEVED RELEASE-GATED PASSAGES:\n${context}\n\nRECENT HISTORY:\n${history.map((item) => `${item.role}: ${item.content}`).join('\n')}\n\nSTUDENT QUESTION: ${question}`,
      output: { schema: GeneratedAnswerSchema },
    });
    if (!response.output) throw new Error('Gemini returned no structured RAG answer');
    const generated = GeneratedAnswerSchema.parse(response.output);

    const safeSources = generated.groundedSources.filter((source) => releasedIds.has(source.lessonId));
    const defaultSources = chunks.map((chunk) => ({
      lessonId: chunk.lessonId,
      lessonTitle: lessonById.get(chunk.lessonId)?.title || chunk.lessonTitle,
      concept: lessonById.get(chunk.lessonId)?.title || chunk.lessonTitle,
      summary: chunk.content.slice(0, 220),
    }));
    const sourceMap = new Map((safeSources.length ? safeSources : defaultSources).map((source) => [`${source.lessonId}:${source.concept}`, source]));

    return {
      answer: generated.answer,
      isGrounded: generated.isGrounded && sourceMap.size > 0,
      groundedSources: [...sourceMap.values()],
      confidence: generated.confidence,
      retrievedChunkCount: chunks.length,
    };
  }
);

// Compatibility exports for the existing API and UI.
export const studentChatFlow = ragChat;
export const StudentChatInputSchema = RagChatInputSchema;
export const StudentChatOutputSchema = RagChatOutputSchema;
