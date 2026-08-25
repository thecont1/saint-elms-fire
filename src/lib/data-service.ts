import { db, FieldValue } from './firestore';
import type {
  Course,
  CourseModule,
  Lesson,
  ReleaseEvent,
  KnowledgeNode,
  KnowledgeEdge,
  GeneratedFormat,
  QuizSubmission,
  SocraticSession,
} from './types';

// Helper to convert Firestore timestamp / plain dates to ISO string
function sanitizeDoc<T>(doc: import('@google-cloud/firestore').DocumentSnapshot): T {
  const data = doc.data() || {};
  const res: Record<string, unknown> = { id: doc.id, ...data };
  for (const key of Object.keys(res)) {
    const val = res[key];
    if (val && typeof val === 'object' && 'toDate' in val && typeof (val as { toDate: () => Date }).toDate === 'function') {
      res[key] = (val as { toDate: () => Date }).toDate().toISOString();
    }
  }
  return res as T;
}

export const DataService = {
  // COURSES
  async getCourses(): Promise<Course[]> {
    const snap = await db.collection('courses').orderBy('createdAt', 'desc').get();
    return snap.docs.map(doc => sanitizeDoc<Course>(doc));
  },

  async getCourse(id: string): Promise<Course | null> {
    const doc = await db.collection('courses').doc(id).get();
    if (!doc.exists) return null;
    return sanitizeDoc<Course>(doc);
  },

  async createCourse(course: Omit<Course, 'id' | 'createdAt'>): Promise<Course> {
    const ref = db.collection('courses').doc();
    const newCourse: Course = {
      id: ref.id,
      ...course,
      createdAt: new Date().toISOString(),
    };
    await ref.set(newCourse);
    return newCourse;
  },

  // MODULES
  async getModules(courseId: string): Promise<CourseModule[]> {
    const snap = await db
      .collection('modules')
      .where('courseId', '==', courseId)
      .get();
    const list = snap.docs.map(doc => sanitizeDoc<CourseModule>(doc));
    return list.sort((a, b) => a.order - b.order);
  },

  async createModule(mod: Omit<CourseModule, 'id'>): Promise<CourseModule> {
    const ref = db.collection('modules').doc();
    const newMod: CourseModule = { id: ref.id, ...mod };
    await ref.set(newMod);
    return newMod;
  },

  // LESSONS
  async getLessons(courseId: string, moduleId?: string): Promise<Lesson[]> {
    let query: import('@google-cloud/firestore').Query = db.collection('lessons').where('courseId', '==', courseId);
    if (moduleId) {
      query = query.where('moduleId', '==', moduleId);
    }
    const snap = await query.get();
    const list = snap.docs.map(doc => sanitizeDoc<Lesson>(doc));
    return list.sort((a, b) => a.order - b.order);
  },

  async getLesson(id: string): Promise<Lesson | null> {
    const doc = await db.collection('lessons').doc(id).get();
    if (!doc.exists) return null;
    return sanitizeDoc<Lesson>(doc);
  },

  async createLesson(lesson: Omit<Lesson, 'id' | 'createdAt'>): Promise<Lesson> {
    const ref = db.collection('lessons').doc();
    const newLesson: Lesson = {
      id: ref.id,
      ...lesson,
      createdAt: new Date().toISOString(),
    };
    await ref.set(newLesson);
    return newLesson;
  },

  // RELEASES & RELEASE-GATING
  async getReleasesForStudent(studentId: string): Promise<ReleaseEvent[]> {
    const snap = await db
      .collection('releases')
      .where('studentId', 'in', [studentId, 'cohort-all'])
      .get();
    return snap.docs.map(doc => sanitizeDoc<ReleaseEvent>(doc));
  },

  async getReleasedLessonsForStudent(studentId: string, courseId?: string): Promise<Lesson[]> {
    const releases = await this.getReleasesForStudent(studentId);
    if (releases.length === 0) return [];

    const releasedLessonIds = new Set<string>();
    const releasedModuleIds = new Set<string>();

    for (const rel of releases) {
      if (rel.lessonId) {
        releasedLessonIds.add(rel.lessonId);
      } else if (rel.moduleId) {
        releasedModuleIds.add(rel.moduleId);
      }
    }

    // Fetch lessons
    let allLessons: Lesson[] = [];
    if (courseId) {
      allLessons = await this.getLessons(courseId);
    } else {
      const snap = await db.collection('lessons').get();
      allLessons = snap.docs.map(doc => sanitizeDoc<Lesson>(doc));
    }

    return allLessons.filter(
      lesson => releasedLessonIds.has(lesson.id) || releasedModuleIds.has(lesson.moduleId)
    );
  },

  async isLessonReleasedToStudent(lessonId: string, studentId: string): Promise<boolean> {
    const lesson = await this.getLesson(lessonId);
    if (!lesson) return false;
    const releases = await this.getReleasesForStudent(studentId);
    return releases.some(
      rel => rel.lessonId === lessonId || rel.moduleId === lesson.moduleId
    );
  },

  async createRelease(release: Omit<ReleaseEvent, 'id' | 'releasedAt'>): Promise<ReleaseEvent> {
    const ref = db.collection('releases').doc();
    const newRelease: ReleaseEvent = {
      id: ref.id,
      ...release,
      releasedAt: new Date().toISOString(),
    };
    await ref.set(newRelease);
    return newRelease;
  },

  // SECOND BRAIN KNOWLEDGE GRAPH (NODES & EDGES)
  async getStudentKnowledgeGraph(studentId: string): Promise<{
    nodes: KnowledgeNode[];
    edges: KnowledgeEdge[];
  }> {
    const nodesSnap = await db
      .collection('knowledge_nodes')
      .where('studentId', '==', studentId)
      .get();
    const edgesSnap = await db
      .collection('knowledge_edges')
      .where('studentId', '==', studentId)
      .get();

    const nodes = nodesSnap.docs.map(doc => sanitizeDoc<KnowledgeNode>(doc));
    const edges = edgesSnap.docs.map(doc => sanitizeDoc<KnowledgeEdge>(doc));

    return { nodes, edges };
  },

  async saveKnowledgeNodesAndEdges(
    studentId: string,
    nodes: Omit<KnowledgeNode, 'id' | 'studentId'>[],
    edges: Omit<KnowledgeEdge, 'id' | 'studentId'>[]
  ): Promise<{ savedNodes: KnowledgeNode[]; savedEdges: KnowledgeEdge[] }> {
    const batch = db.batch();
    const savedNodes: KnowledgeNode[] = [];
    const savedEdges: KnowledgeEdge[] = [];

    const conceptToIdMap = new Map<string, string>();

    // Fetch existing nodes for student to prevent duplicate concept nodes
    const existingNodesSnap = await db
      .collection('knowledge_nodes')
      .where('studentId', '==', studentId)
      .get();
    
    for (const doc of existingNodesSnap.docs) {
      const data = doc.data() as KnowledgeNode;
      conceptToIdMap.set(data.concept.toLowerCase().trim(), doc.id);
    }

    for (const n of nodes) {
      const key = n.concept.toLowerCase().trim();
      let nodeId = conceptToIdMap.get(key);
      if (!nodeId) {
        const ref = db.collection('knowledge_nodes').doc();
        nodeId = ref.id;
        conceptToIdMap.set(key, nodeId);
        const nodeObj: KnowledgeNode = {
          id: nodeId,
          studentId,
          ...n,
        };
        batch.set(ref, nodeObj);
        savedNodes.push(nodeObj);
      } else {
        // Update existing node summary or mastery
        const ref = db.collection('knowledge_nodes').doc(nodeId);
        batch.update(ref, {
          summary: n.summary,
          importance: n.importance,
          releasedAt: n.releasedAt,
        });
        savedNodes.push({
          id: nodeId,
          studentId,
          ...n,
        });
      }
    }

    for (const e of edges) {
      const sourceId = conceptToIdMap.get(e.sourceConcept.toLowerCase().trim()) || e.sourceNodeId;
      const targetId = conceptToIdMap.get(e.targetConcept.toLowerCase().trim()) || e.targetNodeId;
      
      const ref = db.collection('knowledge_edges').doc();
      const edgeObj: KnowledgeEdge = {
        id: ref.id,
        studentId,
        sourceNodeId: sourceId,
        targetNodeId: targetId,
        sourceConcept: e.sourceConcept,
        targetConcept: e.targetConcept,
        relationshipType: e.relationshipType,
        description: e.description,
        strength: e.strength ?? 1,
        releasedAt: e.releasedAt,
      };
      batch.set(ref, edgeObj);
      savedEdges.push(edgeObj);
    }

    await batch.commit();
    return { savedNodes, savedEdges };
  },

  // MULTI-FORMAT GENERATION ARTIFACTS
  async saveGeneratedFormat(format: Omit<GeneratedFormat, 'id' | 'createdAt'>): Promise<GeneratedFormat> {
    const ref = db.collection('generated_formats').doc();
    const newFormat: GeneratedFormat = {
      id: ref.id,
      ...format,
      createdAt: new Date().toISOString(),
    };
    await ref.set(newFormat);
    return newFormat;
  },

  async getGeneratedFormats(lessonId: string, studentId?: string): Promise<GeneratedFormat[]> {
    let query = db.collection('generated_formats').where('lessonId', '==', lessonId);
    if (studentId) {
      query = query.where('studentId', 'in', [studentId, 'shared']);
    }
    const snap = await query.get();
    return snap.docs.map(doc => sanitizeDoc<GeneratedFormat>(doc));
  },

  // QUIZ SUBMISSIONS & SCRIPTED SESSIONS
  async recordQuizSubmission(sub: Omit<QuizSubmission, 'id' | 'createdAt'>): Promise<QuizSubmission> {
    const ref = db.collection('quiz_submissions').doc();
    const newSub: QuizSubmission = {
      id: ref.id,
      ...sub,
      createdAt: new Date().toISOString(),
    };
    await ref.set(newSub);
    return newSub;
  },

  async getQuizHistory(studentId: string): Promise<QuizSubmission[]> {
    const snap = await db
      .collection('quiz_submissions')
      .where('studentId', '==', studentId)
      .get();
    const list = snap.docs.map(doc => sanitizeDoc<QuizSubmission>(doc));
    return list.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  },

  // SOCRATIC SESSIONS
  async createSocraticSession(session: Omit<SocraticSession, 'id' | 'createdAt'>): Promise<SocraticSession> {
    const ref = db.collection('socratic_sessions').doc();
    const newSession: SocraticSession = {
      id: ref.id,
      ...session,
      createdAt: new Date().toISOString(),
    };
    await ref.set(newSession);
    return newSession;
  },

  async getActiveSocraticSession(studentId: string): Promise<SocraticSession | null> {
    const snap = await db
      .collection('socratic_sessions')
      .where('studentId', '==', studentId)
      .where('status', '==', 'pending')
      .limit(1)
      .get();
    if (snap.empty) return null;
    return sanitizeDoc<SocraticSession>(snap.docs[0]);
  },

  async getRecentSocraticSessions(studentId: string): Promise<SocraticSession[]> {
    const snap = await db
      .collection('socratic_sessions')
      .where('studentId', '==', studentId)
      .get();
    const list = snap.docs.map(doc => sanitizeDoc<SocraticSession>(doc));
    return list.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  },

  async updateSocraticSession(id: string, updates: Partial<SocraticSession>): Promise<void> {
    await db.collection('socratic_sessions').doc(id).update({
      ...updates,
      updatedAt: new Date().toISOString(),
    });
  },
};
