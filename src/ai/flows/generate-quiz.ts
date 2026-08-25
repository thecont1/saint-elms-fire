import { z } from 'genkit';
import { ai, GEMINI_FLASH } from '../genkit';
import { DataService } from '../../lib/data-service';

/**
 * generateQuizFlow
 *
 * Authors a single mastery-check question for a lesson by round-tripping the
 * lesson's own markdown through Gemini 3.7 Flash. This replaces the three
 * hardcoded keyword-selected question banks that previously lived in
 * QuizModal.tsx.
 *
 * Design principles (Phase 1 audit remediation):
 *  - REAL round-trip: the question is authored by the wired model, not canned.
 *  - RELEASE-GATED: mirrors the rest of the app's security model. A student can
 *    only generate a quiz for a lesson that has actually been released to them.
 *  - HONEST FAILURE: if the model is unreachable / quota-exhausted, the flow
 *    THROWS instead of silently returning fabricated content. The audit called
 *    out silent fallbacks as the thing judges can't distinguish from live
 *    output, so this path surfaces the failure to the caller.
 *  - VALIDATED: the correct-answer index is checked to be inside the options
 *    array before the question is returned, so a malformed generation can never
 *    reach the UI (which would render an unanswerable question).
 */

export const GenerateQuizInputSchema = z.object({
  lessonId: z
    .string()
    .trim()
    .min(1)
    .describe('ID of the lesson to author a quiz question for'),
  studentId: z
    .string()
    .trim()
    .min(1)
    .describe('ID of the student requesting the quiz (used for release-gating)'),
  difficulty: z
    .enum(['foundational', 'intermediate', 'advanced'])
    .optional()
    .describe('Optional target difficulty; defaults to intermediate'),
});
export type GenerateQuizInput = z.infer<typeof GenerateQuizInputSchema>;

export const GenerateQuizOutputSchema = z.object({
  lessonId: z.string().trim().min(1),
  concept: z
    .string()
    .trim()
    .min(1)
    .describe('The specific concept the question probes'),
  question: z.string().trim().min(1).describe('The multiple-choice question stem'),
  options: z
    .array(z.string().trim().min(1))
    .length(4)
    .describe('Answer choices; exactly one is correct'),
  correctIndex: z
    .number()
    .int()
    .min(0)
    .max(3)
    .describe('0-based index into options of the correct answer'),
  explanation: z
    .string()
    .trim()
    .min(1)
    .describe('Why the correct answer is correct, grounded in lesson content'),
  model: z.string().trim().min(1).describe('Model string that authored the question'),
});
export type GenerateQuizOutput = z.infer<typeof GenerateQuizOutputSchema>;

// The shape we ask the model to fill. Kept separate from the flow output so we
// can attach lessonId/model ourselves rather than trusting the model for them.
const QuizGenerationSchema = z.object({
  concept: z.string().trim().min(1),
  question: z.string().trim().min(1),
  options: z.array(z.string().trim().min(1)).length(4),
  correctIndex: z.number().int().min(0).max(3),
  explanation: z.string().trim().min(1),
});

export const generateQuizFlow = ai.defineFlow(
  {
    name: 'generateQuizFlow',
    inputSchema: GenerateQuizInputSchema,
    outputSchema: GenerateQuizOutputSchema,
  },
  async (input): Promise<GenerateQuizOutput> => {
    const { lessonId, studentId, difficulty = 'intermediate' } = input;

    // 1. Lesson must exist.
    const lesson = await DataService.getLesson(lessonId);
    if (!lesson) {
      throw new Error(`Lesson with id "${lessonId}" not found`);
    }

    // 2. RELEASE BOUNDARY: only generate for content unlocked to this student.
    const isReleased = await DataService.isLessonReleasedToStudent(
      lessonId,
      studentId,
    );
    if (!isReleased) {
      throw new Error(
        `Access Denied: Lesson "${lesson.title}" has not been released to your Second Brain yet.`,
      );
    }

    // 3. Author the question from the lesson's own markdown.
    const prompt = `You are the Assessment Author for "Saint Elms Fire".
Write ONE rigorous multiple-choice question that tests genuine conceptual
understanding of the lesson below. Target difficulty: ${difficulty}.

STRICT REQUIREMENTS:
- The question and every answer option must be grounded ONLY in the source
  lesson markdown. Introduce no outside facts.
- Provide exactly 4 options.
- Exactly one option is correct; the distractors must be plausible but wrong.
- "correctIndex" is the 0-based position of the correct option in "options".
- "concept" names the single idea being assessed.
- "explanation" justifies the correct answer by reference to the lesson.

SOURCE LESSON: "${lesson.title}"
"""
${lesson.markdownContent}
"""`;

    const response = await ai.generate({
      prompt,
      output: { schema: QuizGenerationSchema },
    });

    const generated = response.output;
    if (!generated) {
      // Honest failure: the model returned nothing parseable. Do NOT fabricate.
      throw new Error(
        `Quiz generation for lesson "${lesson.title}" returned no structured output`,
      );
    }

    // 4. Validate the correct index is actually inside the options array.
    if (generated.correctIndex >= generated.options.length) {
      throw new Error(
        `Quiz generation returned an out-of-range correctIndex ` +
          `(${generated.correctIndex} for ${generated.options.length} options)`,
      );
    }

    return {
      lessonId,
      concept: generated.concept,
      question: generated.question,
      options: generated.options,
      correctIndex: generated.correctIndex,
      explanation: generated.explanation,
      model: GEMINI_FLASH,
    };
  },
);
