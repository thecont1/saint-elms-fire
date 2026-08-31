import { z } from 'genkit';
import { ai } from '../genkit';
import { generateWithFallback } from '../model-router';
import { DataService } from '../../lib/data-service';
import { selectProactiveTarget } from '../../lib/courseware-rag';
import { shouldUseBreakMode } from '../persona-contracts';
import { buildBreakModeChallenge } from '../persona-responses';

export const ProactiveTutorInputSchema = z.object({
  studentId: z.string().trim().min(1),
  forceNew: z.boolean().optional(),
  model: z.string().trim().min(1).optional(),
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
  async ({ studentId, forceNew = false, model }) => {
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

    const [quizHistory, graph, activeReleases, releaseAudit, personaState, recommendations, libraryItems] = await Promise.all([
      DataService.getQuizHistory(studentId),
      DataService.getStudentKnowledgeGraph(studentId),
      DataService.getReleasesForStudent(studentId),
      DataService.getReleaseAuditForStudent(studentId),
      DataService.getPersonaState(studentId),
      DataService.getRecommendedReadingsForStudent(studentId),
      DataService.getLibraryItems(),
    ]);

    // Chetna break mode: all released through Sem V, no pending releases, and seeded
    // recommend-readings. Switch from quiz-weak-spot challenges to spaced revisitation.
    const pendingCount = releaseAudit.filter(r => r.status === 'pending' || r.status === 'scheduled').length;
    if (personaState && shouldUseBreakMode({
      breakMode: personaState.breakMode,
      completedSemester: personaState.completedSemester,
      pendingReleaseCount: pendingCount,
    })) {
      const reading = recommendations[0];
      const book = libraryItems.find(item => item.id === reading?.libraryItemId);
      const node = graph.nodes.find(n => n.id === reading?.nodeId) ?? graph.nodes[0];
      if (node && book) {
        const lesson = await DataService.getLesson(node.lessonId);
        const lessonTitle = lesson?.title || node.lessonId;
        const challenge = buildBreakModeChallenge({
          studentId, sessionId: '', concept: node.concept, lessonTitle, readingTitle: book.title,
        });
        const session = await DataService.createSocraticSession({
          studentId,
          triggerReason: challenge.triggerReason,
          socraticQuestion: challenge.socraticQuestion,
          targetConcept: node.concept,
          relatedLessonId: node.lessonId,
          status: 'pending',
        });
        return { ...challenge, sessionId: session.id, relatedLessonTitle: lessonTitle };
      }
    }
    const target = selectProactiveTarget({
      releasedLessons,
      activeReleases,
      quizHistory,
      knowledgeNodes: graph.nodes,
    });

    const response = await generateWithFallback({
      system: 'You are Socratest my Philosopher. You push students to explore beyond the syllabus. Ask one thought-provoking question that builds on the target concept and connects to the broader world. Ask one Socratic question.',
      prompt: `TARGET: ${target.concept}\nREASON: ${target.triggerReason}\nRELEASED LESSON: ${target.lessonTitle}\n\n${target.lessonContent}`,
      schema: GeneratedChallengeSchema,
      model,
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
