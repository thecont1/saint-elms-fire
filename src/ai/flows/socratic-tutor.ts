import { z } from 'genkit';
import { googleAI } from '@genkit-ai/google-genai';
import { ai } from '../genkit';
import { resolveGeminiModel } from '../model-router';
import { DataService } from '../../lib/data-service';
import { selectProactiveTarget } from '../../lib/courseware-rag';

export const ProactiveTutorInputSchema = z.object({
  studentId: z.string().trim().min(1),
  forceNew: z.boolean().optional(),
  model: z.string().optional().default('gemini-3.7-flash'),
});

export const SocraticChallengeOutputSchema = z.object({
  sessionId: z.string(),
  studentId: z.string(),
  targetConcept: z.string(),
  relatedLessonTitle: z.string(),
  triggerReason: z.string(),
  socraticQuestion: z.string(),
  contextHint: z.string(),
  status: z.enum(['pending', 'answered']),
});

const GeneratedChallengeSchema = z.object({
  socraticQuestion: z.string().min(1),
  contextHint: z.string().min(1),
});

export const proactiveTutor = ai.defineFlow(
  {
    name: 'proactiveTutor',
    inputSchema: ProactiveTutorInputSchema,
    outputSchema: SocraticChallengeOutputSchema,
  },
  async ({ studentId, forceNew = false, model = 'gemini-3.7-flash' }) => {
    if (!forceNew) {
      const active = await DataService.getActiveSocraticSession(studentId);
      if (active) {
        const lesson = await DataService.getLesson(active.relatedLessonId);
        return {
          sessionId: active.id,
          studentId: active.studentId,
          targetConcept: active.targetConcept,
          relatedLessonTitle: lesson?.title || 'Released courseware',
          triggerReason: active.triggerReason,
          socraticQuestion: active.socraticQuestion,
          contextHint: 'Review your earlier reasoning and test it against the released lesson.',
          status: active.status,
        };
      }
    }

    const releasedLessons = await DataService.getReleasedLessonsForStudent(studentId);
    if (releasedLessons.length === 0) {
      return {
        sessionId: '',
        studentId,
        targetConcept: '',
        relatedLessonTitle: '',
        triggerReason: 'No released courseware is available yet',
        socraticQuestion: '',
        contextHint: 'Once your instructor releases a lesson, a Socratic challenge will appear here.',
        status: 'pending' as const,
      };
    }

    const [quizHistory, graph, activeReleases] = await Promise.all([
      DataService.getQuizHistory(studentId),
      DataService.getStudentKnowledgeGraph(studentId),
      DataService.getReleasesForStudent(studentId),
    ]);
    const target = selectProactiveTarget({
      releasedLessons,
      activeReleases,
      quizHistory,
      knowledgeNodes: graph.nodes,
    });

    const response = await ai.generate({
      system: 'You are Socrates my Guide. Ask one question that tests reasoning without revealing the answer. Use only the supplied released lesson.',
      prompt: `TARGET: ${target.concept}\nREASON: ${target.triggerReason}\nRELEASED LESSON: ${target.lessonTitle}\n\n${target.lessonContent}`,
      output: { schema: GeneratedChallengeSchema },
      model: googleAI.model(resolveGeminiModel(model) as Parameters<typeof googleAI.model>[0]),
    });
    if (!response.output) throw new Error('Gemini returned no Socratic challenge');
    const generated = GeneratedChallengeSchema.parse(response.output);

    const session = await DataService.createSocraticSession({
      studentId,
      triggerReason: target.triggerReason,
      socraticQuestion: generated.socraticQuestion,
      targetConcept: target.concept,
      relatedLessonId: target.lessonId,
      status: 'pending',
    });

    return {
      sessionId: session.id,
      studentId,
      targetConcept: target.concept,
      relatedLessonTitle: target.lessonTitle,
      triggerReason: target.triggerReason,
      socraticQuestion: generated.socraticQuestion,
      contextHint: generated.contextHint,
      status: 'pending' as const,
    };
  }
);

export const proactiveSocraticTutorFlow = proactiveTutor;
