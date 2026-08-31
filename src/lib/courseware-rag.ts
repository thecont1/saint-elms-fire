export interface MarkdownChunk {
  index: number;
  heading: string;
  content: string;
}

export interface RetrievedCoursewareChunk {
  id: string;
  lessonId: string;
  lessonTitle: string;
  content: string;
  chunkIndex: number;
  distance?: number;
  courseId?: string;
  moduleId?: string;
  releaseId?: string;
}

export interface RagRetrievalConfig {
  topK: number;
  candidateK: number;
  /** Minimum cosine similarity (1 - Firestore COSINE distance). */
  similarityThreshold: number;
}

export interface RagRetrievalMetrics {
  candidatesRetrieved: number;
  filteredByRelease: number;
  filteredByThreshold: number;
  returned: number;
}

const DEFAULT_RAG_RETRIEVAL_CONFIG: RagRetrievalConfig = {
  topK: 8,
  candidateK: 24,
  similarityThreshold: 0.72,
};

function parseIntegerEnv(name: string, raw: string | undefined, fallback: number): number {
  if (raw === undefined || raw.trim() === '') return fallback;
  const value = Number(raw);
  if (!Number.isInteger(value) || value < 1 || value > 100) {
    throw new Error(`${name} must be an integer between 1 and 100`);
  }
  return value;
}

function parseSimilarityEnv(raw: string | undefined, fallback: number): number {
  if (raw === undefined || raw.trim() === '') return fallback;
  const value = Number(raw);
  if (!Number.isFinite(value) || value < 0 || value > 1) {
    throw new Error('RAG_SIMILARITY_THRESHOLD must be a number between 0 and 1');
  }
  return value;
}

export function resolveRagRetrievalConfig(
  env: Record<string, string | undefined> = process.env,
): RagRetrievalConfig {
  const topK = parseIntegerEnv('RAG_TOP_K', env.RAG_TOP_K, DEFAULT_RAG_RETRIEVAL_CONFIG.topK);
  const configuredCandidateK = parseIntegerEnv(
    'RAG_CANDIDATE_K',
    env.RAG_CANDIDATE_K,
    DEFAULT_RAG_RETRIEVAL_CONFIG.candidateK,
  );
  return {
    topK,
    candidateK: Math.max(topK, configuredCandidateK),
    similarityThreshold: parseSimilarityEnv(
      env.RAG_SIMILARITY_THRESHOLD,
      DEFAULT_RAG_RETRIEVAL_CONFIG.similarityThreshold,
    ),
  };
}

interface ChunkOptions {
  maxChars?: number;
  overlapChars?: number;
}

interface TargetLesson {
  id: string;
  title: string;
  markdownContent: string;
}

interface TargetRelease {
  lessonId?: string;
  releasedAt: string;
}

interface TargetQuiz {
  lessonId: string;
  concept: string;
  isCorrect: boolean;
  weakSpotDetected?: boolean;
  createdAt: string;
}

interface TargetNode {
  lessonId: string;
  concept: string;
  importance: number;
}

export interface ProactiveTarget {
  lessonId: string;
  lessonTitle: string;
  concept: string;
  lessonContent: string;
  triggerReason: string;
}

interface RegenerationLesson {
  id: string;
  title: string;
  markdownContent: string;
}

export function resolveRegenerationSource(input: {
  lessonId?: string;
  lesson?: RegenerationLesson | null;
  isReleased?: boolean;
  markdownContent?: string;
  sourceTitle?: string;
}): { lessonId: string | undefined; sourceTitle: string; markdown: string } {
  const markdownOverride = input.markdownContent?.trim();

  if (input.lessonId) {
    if (!input.lesson) throw new Error(`Lesson with id ${input.lessonId} not found`);
    if (!input.isReleased) {
      throw new Error(`Access Denied: Lesson "${input.lesson.title}" has not been released.`);
    }
    return {
      lessonId: input.lessonId,
      sourceTitle: input.sourceTitle?.trim() || input.lesson.title,
      markdown: markdownOverride || input.lesson.markdownContent,
    };
  }

  if (!markdownOverride) throw new Error('Markdown content is required');
  return {
    lessonId: undefined,
    sourceTitle: input.sourceTitle?.trim() || 'Courseware',
    markdown: markdownOverride,
  };
}

function splitBounded(text: string, maxChars: number, overlapChars: number): string[] {
  const normalized = text.replace(/\r\n?/g, '\n').trim();
  if (!normalized) return [];
  if (normalized.length <= maxChars) return [normalized];

  const chunks: string[] = [];
  let start = 0;

  while (start < normalized.length) {
    const hardEnd = Math.min(start + maxChars, normalized.length);
    let end = hardEnd;

    if (hardEnd < normalized.length) {
      const window = normalized.slice(start, hardEnd);
      const candidates = [
        window.lastIndexOf('\n\n'),
        window.lastIndexOf('. '),
        window.lastIndexOf(' '),
      ];
      const best = Math.max(...candidates);
      if (best >= Math.floor(maxChars * 0.55)) {
        end = start + best + (window.slice(best, best + 2) === '. ' ? 1 : 0);
      }
    }

    const chunk = normalized.slice(start, end).trim();
    if (chunk) chunks.push(chunk);
    if (end >= normalized.length) break;

    const nextStart = Math.max(start + 1, end - overlapChars);
    start = nextStart;
  }

  return chunks;
}

/**
 * Split Markdown into stable, heading-aware chunks suitable for embedding.
 * Headings are retained as metadata instead of copied into every chunk so the
 * configured maximum is a hard bound on stored content.
 */
export function chunkMarkdown(markdown: string, options: ChunkOptions = {}): MarkdownChunk[] {
  const normalized = markdown.replace(/\r\n?/g, '\n').trim();
  if (!normalized) throw new Error('Markdown content is required');

  const maxChars = options.maxChars ?? 1200;
  const overlapChars = options.overlapChars ?? 160;
  if (!Number.isInteger(maxChars) || maxChars < 80) {
    throw new Error('maxChars must be an integer of at least 80');
  }
  if (!Number.isInteger(overlapChars) || overlapChars < 0 || overlapChars >= maxChars) {
    throw new Error('overlapChars must be a non-negative integer smaller than maxChars');
  }

  const sections: Array<{ heading: string; body: string[] }> = [];
  let current: { heading: string; body: string[] } | null = null;

  for (const line of normalized.split('\n')) {
    const headingMatch = line.match(/^#{1,6}\s+(.+?)\s*$/);
    if (headingMatch) {
      if (current) sections.push(current);
      current = { heading: headingMatch[1].trim(), body: [] };
      continue;
    }
    if (!current) current = { heading: 'Introduction', body: [] };
    current.body.push(line);
  }
  // Always finalize the trailing section so documents ending in a bare
  // heading still contribute their heading-based chunk.
  if (current) {
    sections.push(current);
  }

  const output: MarkdownChunk[] = [];
  for (const section of sections) {
    const body = section.body.join('\n').trim();
    const source = body || section.heading;
    for (const content of splitBounded(source, maxChars, overlapChars)) {
      output.push({ index: output.length, heading: section.heading, content });
    }
  }

  return output;
}

export function isReleaseActive(
  release: Pick<{ status: 'released' | 'scheduled'; releasedAt: string }, 'status' | 'releasedAt'>,
  now = new Date()
): boolean {
  const releasedAt = Date.parse(release.releasedAt);
  return release.status === 'released' && Number.isFinite(releasedAt) && releasedAt <= now.getTime();
}

export function filterReleasedRetrievedChunks(
  chunks: RetrievedCoursewareChunk[],
  releasedLessonIds: ReadonlySet<string>,
  topK: number
): RetrievedCoursewareChunk[] {
  if (releasedLessonIds.size === 0 || topK <= 0) return [];

  const bestById = new Map<string, RetrievedCoursewareChunk>();
  for (const chunk of chunks) {
    if (!releasedLessonIds.has(chunk.lessonId)) continue;
    const existing = bestById.get(chunk.id);
    const distance = chunk.distance ?? Number.POSITIVE_INFINITY;
    const existingDistance = existing?.distance ?? Number.POSITIVE_INFINITY;
    if (!existing || distance < existingDistance) bestById.set(chunk.id, chunk);
  }

  return [...bestById.values()]
    .sort((a, b) => {
      const distanceDelta = (a.distance ?? Number.POSITIVE_INFINITY) - (b.distance ?? Number.POSITIVE_INFINITY);
      if (distanceDelta !== 0) return distanceDelta;
      if (a.lessonId !== b.lessonId) return a.lessonId.localeCompare(b.lessonId);
      return a.chunkIndex - b.chunkIndex;
    })
    .slice(0, Math.floor(topK));
}

/**
 * Apply release and relevance guardrails to an over-fetched vector candidate
 * set. Firestore COSINE queries return distance, so similarity is `1-distance`.
 */
export function selectReleasedRetrievedChunks(
  candidates: RetrievedCoursewareChunk[],
  releasedLessonIds: ReadonlySet<string>,
  config: RagRetrievalConfig,
): { chunks: RetrievedCoursewareChunk[]; metrics: RagRetrievalMetrics } {
  const candidateWindow = candidates.slice(0, config.candidateK);
  const releasedCandidates = candidateWindow.filter((chunk) => releasedLessonIds.has(chunk.lessonId));
  const relevantCandidates = releasedCandidates.filter((chunk) => {
    if (chunk.distance === undefined) return false;
    return 1 - chunk.distance >= config.similarityThreshold;
  });
  const chunks = filterReleasedRetrievedChunks(relevantCandidates, releasedLessonIds, config.topK);
  return {
    chunks,
    metrics: {
      candidatesRetrieved: candidateWindow.length,
      filteredByRelease: candidateWindow.length - releasedCandidates.length,
      filteredByThreshold: releasedCandidates.length - relevantCandidates.length,
      returned: chunks.length,
    },
  };
}

export function selectProactiveTarget(input: {
  releasedLessons: TargetLesson[];
  activeReleases: TargetRelease[];
  quizHistory: TargetQuiz[];
  knowledgeNodes: TargetNode[];
}): ProactiveTarget {
  const lessonById = new Map(input.releasedLessons.map((lesson) => [lesson.id, lesson]));
  if (lessonById.size === 0) throw new Error('No released courseware is available for this student');

  const weakQuiz = [...input.quizHistory]
    .filter((quiz) => (!quiz.isCorrect || quiz.weakSpotDetected) && lessonById.has(quiz.lessonId))
    .filter((quiz) => Number.isFinite(Date.parse(quiz.createdAt)))
    .sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt))[0];

  if (weakQuiz) {
    const lesson = lessonById.get(weakQuiz.lessonId)!;
    return {
      lessonId: lesson.id,
      lessonTitle: lesson.title,
      concept: weakQuiz.concept,
      lessonContent: lesson.markdownContent,
      triggerReason: `Recent quiz evidence shows a misconception about "${weakQuiz.concept}".`,
    };
  }

  const strongestNode = [...input.knowledgeNodes]
    .filter((node) => lessonById.has(node.lessonId))
    .sort((a, b) => b.importance - a.importance)[0];
  if (strongestNode) {
    const lesson = lessonById.get(strongestNode.lessonId)!;
    return {
      lessonId: lesson.id,
      lessonTitle: lesson.title,
      concept: strongestNode.concept,
      lessonContent: lesson.markdownContent,
      triggerReason: `Proactive mastery check for the released concept "${strongestNode.concept}".`,
    };
  }

  const newestRelease = [...input.activeReleases]
    .filter((release): release is Required<TargetRelease> =>
      Boolean(release.lessonId && lessonById.has(release.lessonId) && Number.isFinite(Date.parse(release.releasedAt))))
    .sort((a, b) => Date.parse(b.releasedAt) - Date.parse(a.releasedAt))[0];
  const lesson = newestRelease
    ? lessonById.get(newestRelease.lessonId)!
    : input.releasedLessons[input.releasedLessons.length - 1];

  return {
    lessonId: lesson.id,
    lessonTitle: lesson.title,
    concept: lesson.title,
    lessonContent: lesson.markdownContent,
    triggerReason: `Recently unlocked courseware: "${lesson.title}".`,
  };
}
