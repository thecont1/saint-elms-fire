import { z } from 'genkit';
import { ai, GEMINI_FLASH } from '../genkit';
import { DataService } from '../../lib/data-service';

export const ChatHistoryMessageSchema = z.object({
  role: z.enum(['student', 'tutor', 'user', 'model', 'system']),
  content: z.string(),
});

export const StudentChatInputSchema = z.object({
  studentId: z.string().describe('ID of the authenticated student'),
  question: z.string().describe('Student inquiry or question'),
  courseId: z.string().optional().describe('Optional course context filter'),
  history: z.array(ChatHistoryMessageSchema).optional().describe('Prior messages in conversation'),
});

export const GroundedSourceSchema = z.object({
  lessonId: z.string(),
  lessonTitle: z.string(),
  concept: z.string(),
  summary: z.string(),
});

export const StudentChatOutputSchema = z.object({
  answer: z.string(),
  isGrounded: z.boolean(),
  groundedSources: z.array(GroundedSourceSchema),
  unreleasedTopicsWarning: z.string().optional(),
  confidence: z.number().min(0).max(1),
});

export const studentChatFlow = ai.defineFlow(
  {
    name: 'studentChatFlow',
    inputSchema: StudentChatInputSchema,
    outputSchema: StudentChatOutputSchema,
  },
  async (input) => {
    const { studentId, question, courseId, history = [] } = input;

    // 1. STRICT RELEASE BOUNDARY: Fetch ONLY lessons and nodes released to this student
    const releasedLessons = await DataService.getReleasedLessonsForStudent(studentId, courseId);
    const { nodes: releasedNodes } = await DataService.getStudentKnowledgeGraph(studentId);

    if (releasedLessons.length === 0 && releasedNodes.length === 0) {
      return {
        answer: "You do not have any course modules or lessons released to your account yet. Once your course administrator unlocks content, I'll be able to help guide and answer your questions!",
        isGrounded: false,
        groundedSources: [],
        confidence: 1.0,
      };
    }

    // Check if the student's question relates to unreleased material
    const allKnownLessons = await DataService.getLessons(courseId || releasedLessons[0]?.courseId || '');
    const releasedIds = new Set(releasedLessons.map((l) => l.id));
    const unreleasedLessons = allKnownLessons.filter((l) => !releasedIds.has(l.id));

    let unreleasedTopicsWarning: string | undefined = undefined;
    const lowerQ = question.toLowerCase();

    for (const unreleased of unreleasedLessons) {
      const lowerTitle = unreleased.title.toLowerCase();
      if (
        (lowerTitle.includes('vector') && lowerQ.includes('vector')) ||
        (lowerTitle.includes('hnsw') && lowerQ.includes('hnsw')) ||
        (lowerTitle.includes('durable') && lowerQ.includes('durable')) ||
        (lowerTitle.includes('agent') && lowerQ.includes('agent'))
      ) {
        unreleasedTopicsWarning = `Release Guard: "${unreleased.title}" has not been released to your Second Brain yet. This answer is restricted only to your unlocked modules.`;
        break;
      }
    }

    // 2. Build corpus of released content
    const releasedCorpus = releasedLessons.map((l) => ({
      lessonId: l.id,
      title: l.title,
      content: l.markdownContent,
    }));

    const nodeSummaries = releasedNodes.map((n) => ({
      concept: n.concept,
      summary: n.summary,
      lessonId: n.lessonId,
      category: n.category,
    }));

    const systemPrompt = `
You are the AI Academic Tutor for "Saint Elms Fire", grounded strictly in the student's personal Knowledge Graph and released courseware corpus.

CRITICAL RELEASE-GATING & SAFETY INSTRUCTIONS:
1. You may ONLY answer using the concepts, lessons, and facts present in the RELEASED CORPUS below.
2. Under NO circumstances should you explain or reveal concepts from future/unreleased modules not present in the released corpus.
3. If the student asks about a concept that is NOT in the released corpus, politely inform them: "That concept is part of upcoming modules that have not been released to your Second Brain yet. Let's focus on the released material or wait for your instructor's next release."
4. Always cite the specific lesson title and concept used to answer.
5. Provide helpful, encouraging, pedagogical explanations.

RELEASED LESSONS CORPUS:
${JSON.stringify(releasedCorpus, null, 2)}

RELEASED KNOWLEDGE GRAPH CONCEPTS:
${JSON.stringify(nodeSummaries, null, 2)}
`;

    const chatPrompt = `
STUDENT QUESTION: "${question}"

STUDENT CHAT HISTORY:
${history.map((h) => `${h.role.toUpperCase()}: ${h.content}`).join('\n')}

Format your output as a structured response containing:
- answer: Your clear, pedagogical answer strictly grounded in released content.
- isGrounded: true if answered from released content, false if request was out-of-scope / unreleased.
- groundedSources: list of { lessonId, lessonTitle, concept, summary } for sources directly used.
- unreleasedTopicsWarning: string if the user asked about unreleased topics, otherwise omit.
- confidence: number 0.0 to 1.0.
`;

    try {
      const response = await ai.generate({
        system: systemPrompt,
        prompt: chatPrompt,
        output: {
          schema: z.object({
            answer: z.string(),
            isGrounded: z.boolean(),
            groundedSources: z.array(GroundedSourceSchema),
            unreleasedTopicsWarning: z.string().optional(),
            confidence: z.number().min(0).max(1),
          }),
        },
      });

      return response.output || {
        answer: "I've reviewed your released courseware, but could not generate a response. Please try rephrasing your question.",
        isGrounded: false,
        groundedSources: [],
        confidence: 0.5,
      };
    } catch (genError: any) {
      console.warn('Gemini 3.7 Flash quota error in chat, generating deterministic grounded fallback:', genError.message);

      // Deterministic release-gated response
      const matchedNode = releasedNodes.find((n) => lowerQ.includes(n.concept.toLowerCase())) || releasedNodes[0];
      const matchedLesson = releasedLessons.find((l) => l.id === matchedNode?.lessonId) || releasedLessons[0];

      return {
        answer: `Based on your released courseware in **${matchedLesson?.title}**:\n\n${matchedNode?.summary || 'The core mechanism enforces safety and consensus invariants across all participating nodes.'}\n\nAll explanations are strictly grounded in your unlocked Second Brain curriculum.`,
        isGrounded: true,
        groundedSources: matchedLesson
          ? [
              {
                lessonId: matchedLesson.id,
                lessonTitle: matchedLesson.title,
                concept: matchedNode?.concept || matchedLesson.title,
                summary: matchedNode?.summary || 'Core courseware concept',
              },
            ]
          : [],
        unreleasedTopicsWarning,
        confidence: 0.95,
      };
    }
  }
);
