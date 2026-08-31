import type { ServedBy } from './model-routing';

export interface GroundedSource {
  lessonId: string;
  lessonTitle: string;
  concept: string;
  summary: string;
}

export interface PersonaChatResponse {
  answer: string;
  isGrounded: boolean;
  groundedSources: GroundedSource[];
  confidence: number;
  retrievedChunkCount: number;
  unreleasedTopicsWarning?: string;
  servedBy?: ServedBy;
}

export function buildGuideRefusal(): PersonaChatResponse {
  return {
    answer: "that's beyond what I've released to you — try the Philosopher",
    isGrounded: false,
    groundedSources: [],
    confidence: 1,
    retrievedChunkCount: 0,
    unreleasedTopicsWarning: 'The requested topic is not in your released courseware.',
  };
}

export function safeFriendSources(
  generatedSources: GroundedSource[],
  supportSources: ReadonlyMap<string, GroundedSource>,
): GroundedSource[] {
  const unique = new Map<string, GroundedSource>();
  for (const generated of generatedSources) {
    const support = supportSources.get(generated.lessonId);
    if (support) unique.set(support.lessonId, support);
  }
  return [...unique.values()];
}

export interface BreakModeChallengeInput {
  studentId: string;
  sessionId: string;
  concept: string;
  lessonTitle: string;
  readingTitle: string;
}

export function buildBreakModeChallenge(input: BreakModeChallengeInput) {
  return {
    sessionId: input.sessionId,
    studentId: input.studentId,
    targetConcept: input.concept,
    relatedLessonTitle: input.lessonTitle,
    triggerReason: 'Spaced revisitation during the break before Semester VI.',
    socraticQuestion: `To keep the fire banked, what connection from ${input.lessonTitle} would you revisit through ${input.concept}?`,
    contextHint: `Recommend-reading trailhead: revisit ${input.readingTitle} from the licensed university library.`,
    status: 'pending' as const,
  };
}
