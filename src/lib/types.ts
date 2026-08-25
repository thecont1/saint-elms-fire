export type UserRole = 'admin' | 'student';

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  cohortId?: string;
  avatarUrl?: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  instructor?: string;
  code?: string;
  createdAt: string;
}

export interface CourseModule {
  id: string;
  courseId: string;
  title: string;
  description: string;
  order: number;
}

export interface Lesson {
  id: string;
  courseId: string;
  moduleId: string;
  title: string;
  order: number;
  markdownContent: string;
  summary?: string;
  tags?: string[];
  createdAt: string;
}

export interface ReleaseEvent {
  id: string;
  courseId: string;
  moduleId: string;
  lessonId?: string;
  studentId: string; // specific student ID or 'cohort-all'
  cohortId?: string;
  releasedAt: string;
  status: 'released' | 'scheduled';
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

export interface CoursewareChunk {
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
