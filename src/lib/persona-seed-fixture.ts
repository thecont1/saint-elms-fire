import type { Course, CourseModule, KnowledgeEdge, KnowledgeNode, Lesson, QuizSubmission, ReleaseEvent, SocraticSession } from './types';
import type { RecommendedReading } from './reading-recommendation';
import type { PersonaSeedPlan } from './persona-seed-plan';
import type { LibraryItem } from './library-catalog';
import { INGESTION_STAGES } from './release-integrity';

export interface PersonaCorpus {
  courses: Course[];
  modules: CourseModule[];
  lessons: Lesson[];
}

export interface PersonaSeedFixture {
  state: {
    id: string;
    studentId: string;
    personaId: PersonaSeedPlan['personaId'];
    completedSemester: number;
    breakMode: boolean;
    stage: string;
    seedVersion: string;
    seedComment: string;
    seededAt: string;
  };
  releases: ReleaseEvent[];
  nodes: KnowledgeNode[];
  edges: KnowledgeEdge[];
  quizzes: QuizSubmission[];
  socraticSessions: SocraticSession[];
  libraryItems: LibraryItem[];
  recommendations: RecommendedReading[];
}

const SEEDED_AT = '2026-08-31T12:00:00.000Z';
const SEED_VERSION = 'phase9-v3-71-row';
const LIBRARY: LibraryItem[] = [
  {
    id: 'phase9-reading-feynman', title: 'The Feynman Lectures on Physics', authors: ['Richard P. Feynman'], type: 'ebook',
    licenseNote: 'Demo university-library catalogue record.', url: 'https://www.feynmanlectures.caltech.edu/', subjectIds: ['physics'], excerptAllowed: false,
    addedBy: 'phase9-seeder', addedAt: SEEDED_AT,
  },
  {
    id: 'phase9-reading-abbott', title: 'Understanding Analysis', authors: ['Stephen Abbott'], type: 'ebook',
    licenseNote: 'Demo university-library catalogue record.', url: 'https://link.springer.com/book/10.1007/978-1-4939-2712-8', subjectIds: ['mathematics'], excerptAllowed: false,
    addedBy: 'phase9-seeder', addedAt: SEEDED_AT,
  },
  {
    id: 'phase9-reading-carroll', title: 'An Introduction to Modern Astrophysics', authors: ['Bradley W. Carroll', 'Dale A. Ostlie'], type: 'ebook',
    licenseNote: 'Demo university-library catalogue record.', url: 'https://www.cambridge.org/highereducation/books/an-introduction-to-modern-astrophysics/140DDF8A480C3841DCCD76D66984D858', subjectIds: ['astrophysics'], excerptAllowed: false,
    addedBy: 'phase9-seeder', addedAt: SEEDED_AT,
  },
];

function courseCode(course: Course): string {
  return course.code || course.id;
}

function conceptFor(lesson: Lesson, index: number): string {
  const title = lesson.title.replace(/[—–:].*$/, '').trim();
  return title || `Concept ${index + 1}`;
}

export function buildPersonaSeedFixture(plan: PersonaSeedPlan, corpus: PersonaCorpus): PersonaSeedFixture {
  const allowed = new Set(plan.releasedCourseIds);
  const courses = corpus.courses.filter((course) => allowed.has(courseCode(course)));
  const missing = plan.releasedCourseIds.filter((id) => !courses.some((course) => courseCode(course) === id));
  if (missing.length) throw new Error(`Corpus is missing manifest courses: ${missing.join(', ')}`);
  const courseIds = new Set(courses.map((course) => course.id));
  const modules = corpus.modules.filter((module) => courseIds.has(module.courseId));
  const moduleIds = new Set(modules.map((module) => module.id));
  const lessons = corpus.lessons.filter((lesson) => moduleIds.has(lesson.moduleId));
  if (!lessons.length) throw new Error(`Corpus has no lessons for ${plan.personaId}`);

  const releases: ReleaseEvent[] = modules.map((module, index) => {
    const targets = lessons.filter((lesson) => lesson.moduleId === module.id).map((lesson) => lesson.id);
    const releasedAt = new Date(Date.parse(SEEDED_AT) - (modules.length - index) * 86_400_000).toISOString();
    return {
      id: `phase9-${plan.personaId}-release-${module.id}`,
      courseId: module.courseId,
      moduleId: module.id,
      studentId: plan.studentId,
      status: 'released', overallStatus: 'released', targetLessonIds: targets,
      requestedAt: releasedAt, releasedAt, attemptCount: 1, lastAttemptAt: releasedAt,
      steps: targets.flatMap((lessonId) => INGESTION_STAGES.map((stage) => ({ lessonId, stage, status: 'complete' as const, completedAt: releasedAt }))),
    };
  });

  const graphLessons = Array.from({ length: plan.graphNodeTarget }, (_, index) => lessons[index % lessons.length]);
  const nodes: KnowledgeNode[] = graphLessons.map((lesson, index) => ({
    id: `phase9-${plan.personaId}-node-${String(index + 1).padStart(2, '0')}`,
    studentId: plan.studentId, lessonId: lesson.id, moduleId: lesson.moduleId, courseId: lesson.courseId,
    concept: `${conceptFor(lesson, index)}${index >= lessons.length ? ` · revisit ${Math.floor(index / lessons.length) + 1}` : ''}`,
    category: index % 4 === 0 ? 'formula' : 'concept', summary: `A seeded learning-graph note from ${lesson.title}.`,
    importance: 2 + (index % 4), masteryLevel: Math.min(95, 45 + index), releasedAt: SEEDED_AT,
  }));
  const edges: KnowledgeEdge[] = nodes.slice(1).map((node, index) => ({
    id: `phase9-${plan.personaId}-edge-${String(index + 1).padStart(2, '0')}`,
    studentId: plan.studentId, sourceNodeId: nodes[index].id, targetNodeId: node.id,
    sourceConcept: nodes[index].concept, targetConcept: node.concept, relationshipType: index % 2 ? 'related_to' : 'builds_upon',
    description: 'Deterministic cross-course progression link.', strength: 0.65 + (index % 4) * 0.1, releasedAt: SEEDED_AT,
  }));

  const quizzes: QuizSubmission[] = Array.from({ length: plan.quizHistoryTarget }, (_, index) => {
    const lesson = lessons[index % lessons.length];
    const isCorrect = index % 3 !== 0;
    return {
      id: `phase9-${plan.personaId}-quiz-${String(index + 1).padStart(2, '0')}`,
      studentId: plan.studentId, lessonId: lesson.id, concept: conceptFor(lesson, index),
      question: `Checkpoint ${index + 1}: explain ${conceptFor(lesson, index)}.`, selectedOptionIndex: isCorrect ? 1 : 0,
      isCorrect, feedback: isCorrect ? 'Sound connection.' : 'Revisit the governing relation.', weakSpotDetected: !isCorrect,
      createdAt: new Date(Date.parse(SEEDED_AT) - index * 3_600_000).toISOString(),
    };
  });

  const socraticSessions: SocraticSession[] = Array.from({ length: plan.socraticSessionTarget }, (_, index) => {
    const lesson = lessons[index % lessons.length];
    const isLatest = index === 0;
    return {
      id: `phase9-${plan.personaId}-socratic-${String(index + 1).padStart(2, '0')}`,
      studentId: plan.studentId,
      triggerReason: plan.breakMode ? 'Spaced revisitation during the break before Semester VI.' : 'Quiz weak spot surfaced for Socratic follow-up.',
      socraticQuestion: plan.breakMode
        ? `Keep the fire banked: what connection from ${lesson.title} is worth revisiting today?`
        : `What assumption makes the central argument in ${lesson.title} work?`,
      targetConcept: conceptFor(lesson, index), relatedLessonId: lesson.id,
      status: isLatest ? 'pending' : 'answered',
      studentResponse: isLatest ? undefined : 'I connected the formal result to a physical example.',
      tutorEvaluation: isLatest ? undefined : { understandingScore: 6 + (index % 4), feedback: 'The connection is sound; sharpen the boundary case.', nextRecommendedStep: 'Try one contrasting example.' },
      createdAt: new Date(Date.parse(SEEDED_AT) - index * 86_400_000).toISOString(),
    };
  });

  const libraryItems = plan.recommendReadings ? LIBRARY : [];
  const recommendations: RecommendedReading[] = plan.recommendReadings
    ? libraryItems.map((item, index) => ({
      id: `${nodes[index].id}__${item.id}`, nodeId: nodes[index].id, studentId: plan.studentId, libraryItemId: item.id,
      rationale: `Break-mode trailhead: revisit ${nodes[index].concept} alongside ${item.title}; keep the fire banked.`,
      matchScore: 0.88 - index * 0.05, createdAt: SEEDED_AT,
    }))
    : [];

  return {
    state: {
      id: plan.studentId, studentId: plan.studentId, personaId: plan.personaId, completedSemester: plan.completedSemester,
      breakMode: plan.breakMode, stage: plan.personaId === 'ananya' ? 'Sem I' : plan.personaId === 'brinda' ? 'Sem III' : 'Break before Sem VI',
      seedVersion: SEED_VERSION, seedComment: plan.seedComment, seededAt: SEEDED_AT,
    },
    releases, nodes, edges, quizzes, socraticSessions, libraryItems, recommendations,
  };
}
