import { z } from 'genkit';
import { ai, GEMINI_FLASH } from '../genkit';
import { DataService } from '../../lib/data-service';

export const ProactiveTutorInputSchema = z.object({
  studentId: z.string().describe('ID of the student'),
  forceNew: z.boolean().optional().describe('Force generation of a new Socratic challenge'),
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

export const proactiveSocraticTutorFlow = ai.defineFlow(
  {
    name: 'proactiveSocraticTutorFlow',
    inputSchema: ProactiveTutorInputSchema,
    outputSchema: SocraticChallengeOutputSchema,
  },
  async (input) => {
    const { studentId, forceNew = false } = input;

    // Check if there's already an active pending session
    if (!forceNew) {
      const activeSession = await DataService.getActiveSocraticSession(studentId);
      if (activeSession) {
        const lesson = await DataService.getLesson(activeSession.relatedLessonId);
        return {
          sessionId: activeSession.id,
          studentId: activeSession.studentId,
          targetConcept: activeSession.targetConcept,
          relatedLessonTitle: lesson ? lesson.title : 'Course Concept',
          triggerReason: activeSession.triggerReason,
          socraticQuestion: activeSession.socraticQuestion,
          contextHint: 'Review your earlier thinking on this topic and respond with your reasoning.',
          status: activeSession.status as 'pending' | 'answered',
        };
      }
    }

    // 1. Fetch student's quiz history and released nodes
    const quizHistory = await DataService.getQuizHistory(studentId);
    const { nodes: releasedNodes } = await DataService.getStudentKnowledgeGraph(studentId);
    const releasedLessons = await DataService.getReleasedLessonsForStudent(studentId);

    // 2. Identify weak spots: incorrect quiz questions or lower mastery concepts
    const weakQuizzes = quizHistory.filter((q) => !q.isCorrect || q.weakSpotDetected);
    
    let targetConcept = 'Raft Quorum & State Consistency';
    let triggerReason = 'Proactive reinforcement of core distributed systems pillars.';
    let targetLessonId = releasedLessons[0]?.id || 'lesson-1';
    let targetLessonTitle = releasedLessons[0]?.title || '1.1 The Raft Consensus Algorithm';

    if (weakQuizzes.length > 0) {
      const latestWeak = weakQuizzes[0];
      targetConcept = latestWeak.concept;
      triggerReason = `Detected misconception in recent quiz regarding "${latestWeak.concept}" (Student selected option index ${latestWeak.selectedOptionIndex}).`;
      targetLessonId = latestWeak.lessonId;
      const matchingLesson = releasedLessons.find((l) => l.id === latestWeak.lessonId);
      if (matchingLesson) targetLessonTitle = matchingLesson.title;
    } else if (releasedNodes.length > 0) {
      const chosenNode = releasedNodes.sort((a, b) => b.importance - a.importance)[0];
      targetConcept = chosenNode.concept;
      triggerReason = `Proactive check-in to deepen mastery of core pillar "${chosenNode.concept}".`;
      targetLessonId = chosenNode.lessonId;
      const matchingLesson = releasedLessons.find((l) => l.id === chosenNode.lessonId);
      if (matchingLesson) targetLessonTitle = matchingLesson.title;
    }

    const relevantLesson = releasedLessons.find((l) => l.id === targetLessonId);
    const lessonSnippet = relevantLesson ? relevantLesson.markdownContent.slice(0, 1500) : '';

    const prompt = `
You are the Proactive Socratic Tutor in "Saint Elms Fire".
Your goal is to provoke deep understanding and self-discovery in the student, without giving away the answer.

TARGET CONCEPT: "${targetConcept}"
TRIGGER CONTEXT: "${triggerReason}"
LESSON CONTEXT ("${targetLessonTitle}"):
"""
${lessonSnippet}
"""

TASK:
Craft an agent-initiated, thought-provoking Socratic question.
- Do NOT lecture or explain the entire concept.
- Pose a real-world scenario, paradox, edge case, or thought experiment that challenges their mental model.
- Keep the tone encouraging, curious, and intellectually stimulating.

OUTPUT FORMAT (JSON):
{
  "socraticQuestion": "The single compelling question or brief scenario + prompt for the student",
  "contextHint": "A gentle nudge on which perspective or tradeoff to consider"
}
`;

    let parsed = {
      socraticQuestion: `If a 5-node cluster is partitioned into 2 nodes and 3 nodes, why can the 2-node group never commit new log entries even if it can still communicate internally?`,
      contextHint: 'Think about what would happen once the network partition heals.',
    };

    try {
      const response = await ai.generate({
        prompt,
        output: {
          schema: z.object({
            socraticQuestion: z.string(),
            contextHint: z.string(),
          }),
        },
      });

      if (response.output) {
        parsed = response.output;
      }
    } catch (genError: any) {
      console.warn('Gemini 3.7 Flash generation call rate-limited, using fallback Socratic prompt:', genError.message);
    }

    // Save session in Firestore
    const session = await DataService.createSocraticSession({
      studentId,
      triggerReason,
      socraticQuestion: parsed.socraticQuestion,
      targetConcept,
      relatedLessonId: targetLessonId,
      status: 'pending',
    });

    return {
      sessionId: session.id,
      studentId,
      targetConcept,
      relatedLessonTitle: targetLessonTitle,
      triggerReason,
      socraticQuestion: parsed.socraticQuestion,
      contextHint: parsed.contextHint,
      status: 'pending' as const,
    };
  }
);
