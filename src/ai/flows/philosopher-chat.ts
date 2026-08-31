import { z } from 'genkit';
import { ai } from '../genkit';
import { embedWithRouting } from '../embed-router';
import { generateWithFallback } from '../model-router';
import { DataService } from '../../lib/data-service';
import { filterReleasedRetrievedChunks } from '../../lib/courseware-rag';
import { findMentionedUnreleasedTitle, validatePhilosopherAnswer } from '../persona-contracts';

export const ChatHistoryMessageSchema = z.object({
  role: z.enum(['student', 'tutor', 'user', 'model', 'system']),
  content: z.string().trim().min(1),
});

export const PhilosopherChatInputSchema = z.object({
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

export const PhilosopherChatOutputSchema = z.object({
  answer: z.string(),
  isGrounded: z.boolean(),
  groundedSources: z.array(GroundedSourceSchema),
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

export const philosopherChatFlow = ai.defineFlow(
  {
    name: 'philosopherChat',
    inputSchema: PhilosopherChatInputSchema,
    outputSchema: PhilosopherChatOutputSchema,
  },
  async ({ studentId, question, courseId, history = [], topK = 6 }) => {
    const releasedLessons = await DataService.getReleasedLessonsForStudent(studentId, courseId);
    let chunks: any[] = [];
    let releasedIds = new Set<string>();
    let lessonById = new Map();

    if (releasedLessons.length > 0) {
      const activeReleases = await DataService.getReleasesForStudent(studentId);
      const queryEmbedding = await embedWithRouting({
        content: question,
        options: { taskType: 'RETRIEVAL_QUERY' },
      });
      const vector = queryEmbedding.embedding;
      if (vector?.length) {
        releasedIds = new Set(releasedLessons.map((lesson) => lesson.id));
        const rawChunks = await DataService.retrieveCoursewareChunks(
          vector,
          [...releasedIds],
          topK,
          activeReleases.map(release => release.id),
        );
        const visibleReleaseIds = new Set(activeReleases.map(release => release.id));
        chunks = filterReleasedRetrievedChunks(rawChunks, releasedIds, topK)
          .filter(chunk => !chunk.releaseId || visibleReleaseIds.has(chunk.releaseId));
        
        lessonById = new Map(releasedLessons.map((lesson) => [lesson.id, lesson]));
      }
    }

    const context = chunks.map((chunk, index) =>
      `[course_chunk_${index + 1}] ${chunk.lessonTitle} (lessonId=${chunk.lessonId}, chunk=${chunk.chunkIndex})\n${chunk.content}`
    ).join('\n\n');

    const { output, servedBy } = await generateWithFallback({
      system: `You are Socratest my Philosopher, a forward-looking mentor. You use BOTH the courseware context and Google Search (web) to answer the student's question.
      
IMPORTANT RULES:
1. Every factual claim MUST be tagged inline with [course] if it comes from the courseware, or [web] if it comes from web/search grounding. Do NOT invent claims.
2. NEVER reveal unreleased course content from the web if it matches something they haven't been taught yet.
3. You MUST end your response with a "trailhead" — one forward question or reading direction that pushes the student to explore beyond the syllabus.
4. Your tone is Socratic, thought-provoking, and encouraging.`,
      prompt: `COURSEWARE PASSAGES:\n${context}\n\nRECENT HISTORY:\n${history.map((item) => `${item.role}: ${item.content}`).join('\n')}\n\nSTUDENT QUESTION: ${question}`,
      schema: GeneratedAnswerSchema,
      config: { googleSearch: {} },
    });

    if (!output) throw new Error('model returned no structured RAG answer');
    const generated = GeneratedAnswerSchema.parse(output);

    // Post-hoc contract validation: every claim line must carry [course] or [web],
    // the response must end with exactly one Trailhead question, and no unreleased
    // title may appear — even if it leaked through web grounding.
    const allTitles = await DataService.getLessonTitles();
    const releasedTitleSet = new Set(releasedLessons.map(l => l.title.toLowerCase()));
    const unreleasedNames = allTitles
      .filter(t => !releasedTitleSet.has(t.title.toLowerCase()))
      .map(t => t.title);
    const validation = validatePhilosopherAnswer(generated.answer, unreleasedNames);
    if (!validation.ok) {
      throw new Error(`Philosopher contract violation: ${validation.reason}`);
    }

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
      isGrounded: generated.isGrounded,
      groundedSources: [...sourceMap.values()],
      confidence: generated.confidence,
      retrievedChunkCount: chunks.length,
      servedBy,
    };
  }
);
