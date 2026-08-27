import { z } from 'genkit';
import { ai } from '../genkit';
import { DataService } from '../../lib/data-service';
import { resolveRegenerationSource } from '../../lib/courseware-rag';
import { assembleCorpus, type CorpusScope } from '../../lib/corpus-assembly';

export const FormatTypeSchema = z.enum([
  'structured_notes',
  'podcast_dialogue',
  'video_lecture_script',
]);

export const RegenerateFormatInputSchema = z.object({
  lessonId: z.string().trim().min(1).optional(),
  studentId: z.string().trim().min(1),
  markdownContent: z.string().trim().min(1).optional(),
  sourceTitle: z.string().trim().min(1).optional(),
  formatType: FormatTypeSchema,
  persona: z.string().max(200).optional(),
  /**
   * Phase 6, Track A0: 'second_brain' (default) grounds generation in the
   * student's curated corpus (lesson + accepted library/peer material);
   * 'lesson' restricts to released lesson chunks only.
   */
  corpusScope: z.enum(['lesson', 'second_brain']).optional(),
}).refine((input) => Boolean(input.lessonId || input.markdownContent), {
  message: 'lessonId or markdownContent is required',
});

export const RegenerateFormatOutputSchema = z.object({
  lessonId: z.string().optional(),
  formatType: FormatTypeSchema,
  title: z.string(),
  content: z.string(),
  savedId: z.string().optional(),
  metadata: z.record(z.string(), z.any()).optional(),
});

function formatInstructions(formatType: z.infer<typeof FormatTypeSchema>, persona?: string): string {
  if (formatType === 'structured_notes') {
    return 'Produce hierarchical notes with key takeaways, concise explanations, one Mermaid or ASCII diagram where justified, and a mastery checklist.';
  }
  if (formatType === 'podcast_dialogue') {
    return 'Produce a natural two-host podcast script with Alex asking sharp questions, Sam answering only from the source, speaker labels, pacing cues, a hook, and a takeaway.';
  }
  return `Produce a four-minute video lecture script with timestamps, camera directions, on-screen diagram cues, a hook, explanation, and synthesis. Presenter persona: ${persona || 'clear technical educator'}.`;
}

export const regenerateFormat = ai.defineFlow(
  {
    name: 'regenerateFormat',
    inputSchema: RegenerateFormatInputSchema,
    outputSchema: RegenerateFormatOutputSchema,
  },
  async (input) => {
    let lesson = null;
    let released: boolean | undefined;

    if (input.lessonId) {
      [lesson, released] = await Promise.all([
        DataService.getLesson(input.lessonId),
        DataService.isLessonReleasedToStudent(input.lessonId, input.studentId),
      ]);
    }
    const { lessonId, sourceTitle, markdown } = resolveRegenerationSource({
      lessonId: input.lessonId,
      lesson,
      isReleased: released,
      markdownContent: input.markdownContent,
      sourceTitle: input.sourceTitle,
    });

    // Phase 6, Track A0: assemble the Second-Brain-grounded corpus. Falls back
    // to the raw lesson markdown when no chunks are indexed yet (e.g. legacy
    // releases created before vector ingestion).
    const scope: CorpusScope = input.corpusScope ?? 'second_brain';
    let corpusMarkdown = markdown;
    let sources: Array<{ kind: string; refId: string; label?: string }> = lessonId
      ? [{ kind: 'lesson', refId: lessonId, label: sourceTitle }]
      : [];
    if (lessonId) {
      const chunks = await DataService.getCorpusChunksForLesson(input.studentId, lessonId);
      if (chunks.length > 0) {
        try {
          const assembled = assembleCorpus({ scope, chunks });
          corpusMarkdown = assembled.corpusMarkdown;
          sources = assembled.sources;
        } catch {
          // Empty corpus after scope filtering — keep the lesson markdown.
        }
      }
    }

    const titlePrefix = input.formatType === 'structured_notes'
      ? 'Structured Study Notes'
      : input.formatType === 'podcast_dialogue'
        ? 'DeepDive Podcast Episode'
        : 'Video Lecture Masterclass';
    const title = `${titlePrefix}: ${sourceTitle}`;

    const response = await ai.generate({
      system: 'You are Saint Elms Fire’s courseware adaptation engine. Preserve source meaning exactly; introduce no external facts.',
      prompt: `${formatInstructions(input.formatType, input.persona)}\n\nSOURCE MARKDOWN:\n${corpusMarkdown}`,
    });
    const content = response.text.trim();
    if (!content) throw new Error('Gemini returned an empty regenerated format');

    let savedId: string | undefined;
    if (lessonId) {
      const saved = await DataService.saveGeneratedFormat({
        lessonId,
        studentId: input.studentId,
        formatType: input.formatType,
        title,
        content,
        persona: input.persona,
      });
      savedId = saved.id;
    }

    return {
      lessonId,
      formatType: input.formatType,
      title,
      content,
      savedId,
      metadata: {
        generatedAt: new Date().toISOString(),
        source: lessonId ? 'released_lesson' : 'raw_markdown',
        corpusScope: scope,
        sources,
        persona: input.persona || 'default',
      },
    };
  }
);

export const multiFormatGenerationFlow = regenerateFormat;
export const MultiFormatInputSchema = RegenerateFormatInputSchema;
export const MultiFormatOutputSchema = RegenerateFormatOutputSchema;
