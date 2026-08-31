import { z } from 'genkit';
import { ai } from '../genkit';
import { embedWithRouting } from '../embed-router';
import { generateWithFallback } from '../model-router';
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
  servedBy: z.object({ model: z.string(), role: z.enum(['primary', 'fallback']), attemptCount: z.number().int().positive() }).optional(),
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
    const releasedLessons = await DataService.getReleasedLessonsForStudent(studentId, courseId);
    if (releasedLessons.length === 0) {
      return {
        answer: "You do not have any released courseware yet. Once your instructor unlocks a lesson, Socrates my Guide can answer from it.",
        isGrounded: false,
        groundedSources: [],
        unreleasedTopicsWarning: 'No courseware has been released to you yet.',
        confidence: 1,
        retrievedChunkCount: 0,
      };
    }

    // Only fetch the visible-release set once we know released lessons exist —
    // the empty-courseware path returns above without an extra Firestore read.
    const activeReleases = await DataService.getReleasesForStudent(studentId);

    const queryEmbedding = await embedWithRouting({
      content: question,
      options: { taskType: 'RETRIEVAL_QUERY' },
    });
    const vector = queryEmbedding.embedding;
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

    // Generation goes through the model router: Gemini primary, Sarvam
    // fallback on availability errors — chat never waits out a 503 storm.
    const { output, servedBy } = await generateWithFallback({
      system: `You are Socrates my Guide. Answer only from the retrieved passages. If the passages do not support an answer, or the question is out of bounds, you MUST refuse by returning this exact answer: "that's beyond what I've released to you — try the Philosopher". Never infer or reveal unreleased curriculum. Cite lesson titles in the answer.`,
      prompt: `RETRIEVED RELEASE-GATED PASSAGES:\n${context}\n\nRECENT HISTORY:\n${history.map((item) => `${item.role}: ${item.content}`).join('\n')}\n\nSTUDENT QUESTION: ${question}`,
      schema: GeneratedAnswerSchema,
    });
    if (!output) throw new Error('model returned no structured RAG answer');
    const generated = GeneratedAnswerSchema.parse(output);

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
      servedBy,
    };
  }
);

// Compatibility exports for the existing API and UI.
export const guideChatFlow = ragChat;
export const GuideChatInputSchema = RagChatInputSchema;
export const GuideChatOutputSchema = RagChatOutputSchema;
