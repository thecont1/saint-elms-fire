export type UserRole = 'admin' | 'student';

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  cohortId?: string;
  avatarUrl?: string;
}

// ── UGC Academic Hierarchy ──────────────────────────────────────────────
// Programme → Subject → Semester → Course → CourseModule → Lesson
// Every descendant carries its full ancestor chain as flat optional string
// fields, mirroring the KnowledgeNode pattern. Fields are optional so
// existing Firestore documents without ancestor IDs remain valid.

export type ProgrammeLevel = 'undergraduate' | 'postgraduate' | 'diploma' | 'certificate';

export interface Programme {
  id: string;
  title: string;
  level: ProgrammeLevel;
  durationSemesters: number;
  totalCredits?: number;
  description?: string;
  createdAt: string;
}

export interface Subject {
  id: string;
  programmeId: string;
  title: string;
  code?: string;
  description?: string;
  createdAt: string;
}

export interface Semester {
  id: string;
  programmeId: string;
  subjectId: string;
  title: string;
  yearNumber: number;
  semesterNumber: number;
  order: number;
  createdAt: string;
}

export type CourseCategory =
  | 'core'
  | 'elective_discipline_specific'
  | 'elective_generic'
  | 'ability_enhancement'
  | 'skill_enhancement';

export interface Course {
  id: string;
  programmeId?: string;
  subjectId?: string;
  semesterId?: string;
  title: string;
  description: string;
  category?: CourseCategory;
  credits?: number;
  instructor?: string;
  code?: string;
  createdAt: string;
}

export interface CourseModule {
  id: string;
  programmeId?: string;
  subjectId?: string;
  semesterId?: string;
  courseId: string;
  title: string;
  description?: string;
  order: number;
  createdAt?: string;
}

export interface Lesson {
  id: string;
  programmeId?: string;
  subjectId?: string;
  semesterId?: string;
  courseId: string;
  moduleId: string;
  title: string;
  order: number;
  markdownContent: string;
  summary?: string;
  tags?: string[];
  createdAt: string;
}

export type IngestionStage = 'parsing' | 'chunking' | 'embedding' | 'vector_write' | 'graph_write';
export type IngestionStageStatus = 'pending' | 'in_progress' | 'complete' | 'failed';
export type IngestionErrorCategory =
  | 'invalid_markdown'
  | 'chunking_failed'
  | 'embedding_unavailable'
  | 'rate_limited'
  | 'firestore_write_failed'
  | 'verification_failed'
  | 'graph_extraction_failed'
  | 'unknown';

export interface IngestionStepRecord {
  lessonId: string;
  stage: IngestionStage;
  status: IngestionStageStatus;
  startedAt?: string;
  completedAt?: string;
  error?: { category: IngestionErrorCategory; message: string };
  itemsProcessed?: number;
  itemsTotal?: number;
}

export interface ReleaseEvent {
  id: string;
  courseId: string;
  moduleId: string;
  lessonId?: string;
  studentId: string; // specific student ID or 'cohort-all'
  cohortId?: string;
  /** Legacy compatibility field. New releases mirror overallStatus here. */
  status: 'pending' | 'released' | 'failed' | 'scheduled';
  overallStatus?: 'pending' | 'released' | 'failed';
  steps?: IngestionStepRecord[];
  targetLessonIds?: string[];
  requestedAt?: string;
  releasedAt: string;
  lastAttemptAt?: string;
  attemptCount?: number;
  failureCategory?: IngestionErrorCategory;
}

export interface KnowledgeNode {
  id: string;
  studentId: string;
  lessonId: string;
  moduleId: string;
  courseId: string;
  concept: string;
  category: 'core' | 'technique' | 'architecture' | 'formula' | 'tradeoff' | 'concept';
  summary: string;
  importance: number; // 1 to 5
  masteryLevel?: number; // 0 to 100
  releasedAt: string;
  /** Phase 6: source origin; absent means released lesson content. */
  origin?: CorpusOrigin;
  /** Phase 6: backing shared item for origin 'peer_share'. */
  sharedItemId?: string;
}

export interface KnowledgeEdge {
  id: string;
  studentId: string;
  sourceNodeId: string;
  targetNodeId: string;
  sourceConcept: string;
  targetConcept: string;
  relationshipType: 'prerequisite' | 'builds_upon' | 'related_to' | 'contrasts_with' | 'part_of';
  description: string;
  strength?: number;
  releasedAt: string;
}

/** Source origin for Second Brain material (Phase 6). Default (absent) = released lesson. */
export type CorpusOrigin = 'lesson' | 'library' | 'peer_share';

export interface CoursewareChunk {
  /** Phase 6: origin tag; absent means released lesson content. */
  origin?: CorpusOrigin;
  /** Phase 6: set for library/peer_share chunks, which are per-student. */
  studentId?: string;
  /** Phase 6: backing shared item for origin 'peer_share'. */
  sharedItemId?: string;
  /** Phase 6: backing catalog item for origin 'library'. */
  libraryItemId?: string;
  id: string;
  lessonId: string;
  lessonTitle: string;
  courseId: string;
  moduleId: string;
  chunkIndex: number;
  heading: string;
  content: string;
  embeddingModel: string;
  createdAt: string;
}

export interface GeneratedFormat {
  id: string;
  lessonId: string;
  studentId: string;
  formatType: 'structured_notes' | 'podcast_dialogue' | 'video_lecture_script';
  title: string;
  content: string; // Markdown or script
  persona?: string;
  createdAt: string;
}

export interface QuizQuestion {
  id: string;
  lessonId: string;
  concept: string;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export interface QuizSubmission {
  id: string;
  studentId: string;
  lessonId: string;
  concept: string;
  question: string;
  selectedOptionIndex: number;
  isCorrect: boolean;
  feedback: string;
  weakSpotDetected: boolean;
  createdAt: string;
}

export interface SocraticSession {
  id: string;
  studentId: string;
  triggerReason: string;
  socraticQuestion: string;
  targetConcept: string;
  relatedLessonId: string;
  status: 'pending' | 'answered';
  studentResponse?: string;
  tutorEvaluation?: {
    understandingScore: number; // 1-10
    feedback: string;
    nextRecommendedStep: string;
  };
  createdAt: string;
  updatedAt?: string;
}

export interface ChatMessage {
  id: string;
  sender: 'student' | 'tutor' | 'system';
  content: string;
  timestamp: string;
  groundedSources?: Array<{
    lessonTitle: string;
    lessonId: string;
    concept: string;
  }>;
  isGrounded: boolean;
}
