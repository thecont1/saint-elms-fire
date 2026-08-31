import { z } from 'genkit';
import { ai } from '../genkit';
import { embedWithRouting } from '../embed-router';
import { generateWithFallback } from '../model-router';
import { DataService } from '../../lib/data-service';
import { db } from '../../lib/firestore';
import { classifyFriendQuestion, FRIEND_ACADEMIC_REDIRECT, FRIEND_PRIVACY_ANSWER } from '../persona-contracts';
import { safeFriendSources } from '../persona-responses';

export const FriendChatInputSchema = z.object({
  studentId: z.string().trim().min(1),
  question: z.string().trim().min(1),
  history: z.array(z.object({
    role: z.enum(['student', 'tutor', 'user', 'model', 'system']),
    content: z.string().trim().min(1),
  })).max(20).optional(),
  topK: z.number().int().min(1).max(12).optional(),
});

export const FriendChatOutputSchema = z.object({
  answer: z.string(),
  isGrounded: z.boolean(),
  groundedSources: z.array(z.object({
    lessonId: z.string(),
    lessonTitle: z.string(),
    concept: z.string(),
    summary: z.string(),
  })),
  confidence: z.number().min(0).max(1),
  retrievedChunkCount: z.number().int().nonnegative(),
  servedBy: z.object({ model: z.string(), role: z.enum(['primary', 'fallback']), attemptCount: z.number().int().positive() }).optional(),
});

const GeneratedAnswerSchema = z.object({
  answer: z.string().min(1),
  isGrounded: z.boolean(),
  groundedSources: z.array(z.object({
    lessonId: z.string(),
    lessonTitle: z.string(),
    concept: z.string(),
    summary: z.string(),
  })),
  confidence: z.number().min(0).max(1),
});

export const friendChatFlow = ai.defineFlow(
  {
    name: 'friendChat',
    inputSchema: FriendChatInputSchema,
    outputSchema: FriendChatOutputSchema,
  },
  async ({ studentId, question, history = [], topK = 6 }) => {
    // Deterministic preflight: academic or PII questions are intercepted before
    // any embedding or model call — no retrieval on the wrong lane.
    const lane = classifyFriendQuestion(question);
    if (lane === 'academic') {
      return { answer: FRIEND_ACADEMIC_REDIRECT, isGrounded: false, groundedSources: [], confidence: 1, retrievedChunkCount: 0 };
    }
    if (lane === 'pii') {
      return { answer: FRIEND_PRIVACY_ANSWER, isGrounded: false, groundedSources: [], confidence: 1, retrievedChunkCount: 0 };
    }

    const queryEmbedding = await embedWithRouting({
      content: question,
      options: { taskType: 'RETRIEVAL_QUERY' },
    });
    const vector = queryEmbedding.embedding;
    if (!vector?.length) throw new Error('Gemini returned no query embedding');

    // The dataset is extremely small (60 chunks), so we can just fetch all chunks where subjectId == 'university-support' and do in-memory dot product to avoid gRPC vector search index errors
    const snap = await db.collection('courseware_chunks')
      .where('subjectId', '==', 'university-support')
      .get();
    
    const allChunks = snap.docs.map(doc => doc.data() as any);
    
    const dotProduct = (a: any, b: number[]) => {
      const aArr = a.toArray ? a.toArray() : a;
      return aArr.reduce((sum: number, val: number, i: number) => sum + val * b[i], 0);
    };
    allChunks.sort((a, b) => dotProduct(b.embedding, vector) - dotProduct(a.embedding, vector));
    const chunks = allChunks.slice(0, topK);
    
    const context = chunks.map((chunk, index) =>
      `[${index + 1}] ${chunk.lessonTitle}\n${chunk.content}`
    ).join('\n\n');

    const { output, servedBy } = await generateWithFallback({
      system: `You are Socrates my Friend. You are a course-ops buddy. You help with university support like timetable, fees, contacts, and policies.
      
IMPORTANT RULES:
1. NEVER answer academic or course content questions (e.g. physics, math). If asked, reply exactly with: "I'm your course-ops buddy! For academic questions, please ask Socrates my Guide."
2. You must protect privacy. If asked for PII (like a phone number), state the privacy norms exactly as written in the corpus.
3. Base your answers ONLY on the provided context. If the context doesn't answer it, say so.`,
      prompt: `CONTEXT:\n${context}\n\nRECENT HISTORY:\n${history.map((item) => `${item.role}: ${item.content}`).join('\n')}\n\nSTUDENT QUESTION: ${question}`,
      schema: GeneratedAnswerSchema,
    });
    
    if (!output) throw new Error('model returned no structured answer');
    const generated = GeneratedAnswerSchema.parse(output);

    return {
      answer: generated.answer,
      isGrounded: generated.isGrounded,
      groundedSources: safeFriendSources(
        generated.groundedSources.map((source) => ({
          lessonId: source.lessonId, lessonTitle: source.lessonTitle, concept: source.concept, summary: source.summary,
        })),
        new Map(chunks.map((chunk) => [chunk.lessonId, {
          lessonId: chunk.lessonId,
          lessonTitle: chunk.lessonTitle || chunk.lessonId,
          concept: chunk.lessonTitle || chunk.lessonId,
          summary: String(chunk.content || '').slice(0, 220),
        }])),
      ),
      confidence: generated.confidence,
      retrievedChunkCount: chunks.length,
      servedBy,
    };
  }
);
