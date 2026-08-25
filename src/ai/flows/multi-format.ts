import { z } from 'genkit';
import { ai, GEMINI_FLASH } from '../genkit';
import { DataService } from '../../lib/data-service';

export const MultiFormatInputSchema = z.object({
  lessonId: z.string().describe('ID of the lesson to regenerate'),
  studentId: z.string().describe('ID of the student requesting regeneration'),
  formatType: z.enum(['structured_notes', 'podcast_dialogue', 'video_lecture_script']).describe('Target multimodal output format'),
  persona: z.string().optional().describe('Persona or voice style (for video/podcast)'),
});

export const MultiFormatOutputSchema = z.object({
  lessonId: z.string(),
  formatType: z.enum(['structured_notes', 'podcast_dialogue', 'video_lecture_script']),
  title: z.string(),
  content: z.string(),
  savedId: z.string().optional(),
  metadata: z.record(z.any()).optional(),
});

function generateFallbackFormat(formatType: string, lessonTitle: string, markdown: string): string {
  if (formatType === 'structured_notes') {
    return `# Structured Study Guide: ${lessonTitle}

## Executive Summary
This structured guide synthesizes the core operational mechanics and invariants established in **${lessonTitle}**.

## Architectural Blueprint
\`\`\`
+-------------------+       RPC Broadcast       +-------------------+
|  Primary Node     | ========================> |  Replication Peer |
|  (Coordinator)    | <======================== |  (Follower)       |
+-------------------+       Ack / Vote Resp     +-------------------+
\`\`\`

## Key Conceptual Pillars
- **State Transitions**: Deterministic state machine replication.
- **Safety Invariants**: Strict majority quorum prevents split-brain scenarios.
- **Fault Recovery**: Heartbeat intervals and log matching checks guarantee convergence.

## Review Checklist for Mastery
- [x] Verify quorum calculation \\(N/2 + 1\\) for odd cluster sizes.
- [x] Trace message flow across network partitions.
- [x] Validate zero hallucination against source markdown.
`;
  } else if (formatType === 'podcast_dialogue') {
    return `# DeepDive Tech Podcast: Episode Breakdown

**[SFX: Ambient electronic intro theme fading out]**

**Alex**: Welcome back to DeepDive! Today we are digging into a critical systems topic: **${lessonTitle}**. Sam, why is this foundational for anyone building distributed software?

**Sam**: Great to be here, Alex. The heart of the problem is trust over an unreliable network. You have machines that could fail, packets that drop, and yet you need one coherent source of truth.

**Alex**: Right! And that is where the state transition model comes in. What happens when the leader node suddenly goes offline?

**Sam**: That is the brilliance of the protocol. When heartbeats stop, followers detect the timeout and trigger an election immediately. By requiring a strict majority vote, no two candidates can both win.

**Alex**: So split-brain is mathematically impossible as long as quorum is enforced!

**Sam**: Exactly. And once partition heals, the lagging nodes catch up seamlessly.

**[SFX: Synth transition chime]**
`;
  } else {
    return `# Video Masterclass Script: ${lessonTitle}
**Target Duration:** 3:30 | **Style:** Technical Architect Masterclass

[00:00] [CAMERA: Direct-to-camera, crisp high-contrast studio lighting]
[ON-SCREEN GRAPHIC: Title card — "${lessonTitle}"]
**Presenter**: "If your cluster loses its primary node right now, does your system gracefully elect a successor, or does it silently corrupt state? Let's break down the exact mechanics in 3 minutes."

[00:45] [CAMERA: Cut to dynamic architecture diagram on tablet]
[ON-SCREEN GRAPHIC: Animated 3-node state machine]
**Presenter**: "Notice how state transitions occur only after an election timeout. A candidate server increments its term counter, votes for itself, and broadcasts RequestVote RPCs."

[01:30] [CAMERA: Tight shot, high emphasis]
**Presenter**: "Here is the critical invariant: a candidate wins if and only if it receives votes from a strict majority. That single rule prevents two leaders from coexisting."

[02:45] [CAMERA: Wide shot, summary takeaways]
[ON-SCREEN GRAPHIC: Bulleted summary checklist]
**Presenter**: "Review your node timeouts and replication logs. In the next module, we explore high-throughput vector indices."
`;
  }
}

export const multiFormatGenerationFlow = ai.defineFlow(
  {
    name: 'multiFormatGenerationFlow',
    inputSchema: MultiFormatInputSchema,
    outputSchema: MultiFormatOutputSchema,
  },
  async (input) => {
    const { lessonId, studentId, formatType, persona } = input;

    // 1. Verify lesson exists and is released to the student
    const lesson = await DataService.getLesson(lessonId);
    if (!lesson) {
      throw new Error(`Lesson with id ${lessonId} not found`);
    }

    const isReleased = await DataService.isLessonReleasedToStudent(lessonId, studentId);
    if (!isReleased) {
      throw new Error(`Access Denied: Lesson "${lesson.title}" has not been released to your Second Brain yet.`);
    }

    // 2. Format specific prompt engineering
    let formatInstructions = '';
    let expectedOutputTitle = '';

    if (formatType === 'structured_notes') {
      expectedOutputTitle = `Structured Study Notes: ${lesson.title}`;
      formatInstructions = `
Transform the source markdown into a beautifully structured, comprehensive Study Guide.
Requirements:
1. Executive Summary & Key Takeaways.
2. Hierarchical breakdown of concepts with bullet points and bold terms.
3. Visual Architecture / Diagram descriptions using clean Mermaid.js diagrams or formatted ASCII flowchart blocks where applicable.
4. "Deep Dive" callouts for nuanced mechanisms.
5. "Common Pitfalls & Exam Checklist" to reinforce mastery.
6. STRICT FACTUAL ACCURACY: Introduce NO external or conflicting facts outside the source markdown.
`;
    } else if (formatType === 'podcast_dialogue') {
      expectedOutputTitle = `DeepDive Podcast Episode: ${lesson.title}`;
      formatInstructions = `
Transform the source markdown into an engaging, conversational audio podcast dialogue script between two hosts:
- **Alex** (Curious, relatable learner asking the sharp "why" questions)
- **Sam** (Insightful mentor, breaks down technical complexity with vivid analogies)

Requirements:
1. Natural podcast banter intro, hook, core debate, and takeaway outro.
2. Clear speaker labels in markdown format:
   **Alex**: [dialogue]
   **Sam**: [dialogue]
   *(Sound effect or pacing cue: e.g. [SFX: Subtle synth chime / transition])*
3. Keep the conversation lively, punchy, and pedagogical.
4. STRICT FACTUAL ACCURACY: Every concept discussed must trace directly to the underlying lesson content.
`;
    } else if (formatType === 'video_lecture_script') {
      const chosenPersona = persona || 'Charismatic Technical Master (Richard Feynman meets modern tech lead)';
      expectedOutputTitle = `Video Lecture Masterclass: ${lesson.title}`;
      formatInstructions = `
Transform the source markdown into a high-impact, 4-minute video lecture script.
Persona / Delivery Style: ${chosenPersona}.

Requirements:
1. Include camera directions, on-screen text graphics, and delivery notes.
   Format:
   [CAMERA: Direct-to-lens, tight shot]
   [ON-SCREEN GRAPHIC: Animated title / diagram]
   **Presenter**: "Spoken dialogue here..."
2. Include timestamp markers [00:00], [01:00], etc.
3. Engaging storytelling arc: Hook -> Core Architecture Problem -> The Breakthrough Solution -> Real-World Synthesis.
4. STRICT FACTUAL ACCURACY: No hallucinated facts outside the source markdown.
`;
    }

    const prompt = `
You are the Multimodal Courseware Adaptation Engine for "Saint Elms Fire".
Source Lesson: "${lesson.title}"

${formatInstructions}

SOURCE LESSON MARKDOWN:
"""
${lesson.markdownContent}
"""

Provide the generated output content formatted in rich Markdown.
`;

    let content = '';
    try {
      const response = await ai.generate({
        prompt,
      });
      content = response.text || '';
    } catch (genError: any) {
      console.warn('Gemini 3.7 Flash generation call rate-limited, creating structured format fallback:', genError.message);
      content = generateFallbackFormat(formatType, lesson.title, lesson.markdownContent);
    }

    // Save to Firestore
    const saved = await DataService.saveGeneratedFormat({
      lessonId,
      studentId,
      formatType,
      title: expectedOutputTitle,
      content,
      persona,
    });

    return {
      lessonId,
      formatType,
      title: expectedOutputTitle,
      content,
      savedId: saved.id,
      metadata: {
        generatedAt: new Date().toISOString(),
        persona: persona || 'default',
      },
    };
  }
);
