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
  CoursewareChunk,
  IngestionErrorCategory,
  IngestionStage,
  IngestionStepRecord,
} from './types';
import type { IngestionArtifact, StagedVectorRecord, ExtractedGraphNode, ExtractedGraphEdge } from './second-brain-ingestion';
import { buildPendingRelease, completeRelease, failRelease, isReleaseVisible } from './release-integrity';
import type { RetrievedCoursewareChunk } from './courseware-rag';

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

/** Deterministic edge identity: same student+concepts+relationship upserts in place. */
function edgeKey(
  studentId: string,
  source: string,
  target: string,
  relationshipType: KnowledgeEdge['relationshipType'],
): string {
  const norm = (value: string) => value.toLowerCase().trim().replace(/\s+/g, ' ');
  return `${studentId}__${norm(source)}__${norm(target)}__${relationshipType}`;
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
  async getRelease(id: string): Promise<ReleaseEvent | null> {
    const doc = await db.collection('releases').doc(id).get();
    return doc.exists ? sanitizeDoc<ReleaseEvent>(doc) : null;
  },

  async getReleaseAuditForStudent(studentId: string): Promise<ReleaseEvent[]> {
    const snap = await db
      .collection('releases')
      .where('studentId', 'in', [studentId, 'cohort-all'])
      .get();
    return snap.docs
      .map(doc => sanitizeDoc<ReleaseEvent>(doc))
      .sort((a, b) => Date.parse(b.requestedAt || b.releasedAt) - Date.parse(a.requestedAt || a.releasedAt));
  },

  async getReleasesForStudent(studentId: string): Promise<ReleaseEvent[]> {
    const releases = await this.getReleaseAuditForStudent(studentId);
    return releases.filter(release => isReleaseVisible(release));
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

  async findEquivalentRelease(input: {
    moduleId: string;
    studentId: string;
    targetLessonIds: string[];
  }): Promise<ReleaseEvent | null> {
    const snap = await db.collection('releases').where('studentId', '==', input.studentId).get();
    const targetKey = [...input.targetLessonIds].sort().join('\u0000');
    return snap.docs
      .map(doc => sanitizeDoc<ReleaseEvent>(doc))
      .find(release =>
        release.moduleId === input.moduleId
        && release.overallStatus !== 'failed'
        && (release.targetLessonIds ?? []).slice().sort().join('\u0000') === targetKey
      ) ?? null;
  },

  /**
   * Atomically detect an equivalent non-failed release and, only when none
   * exists, create the pending release. Runs inside one Firestore transaction
   * so concurrent identical requests cannot both create a pending record
   * (TOCTOU race between findEquivalentRelease and createPendingRelease).
   */
  async createPendingReleaseIfAbsent(input: {
    courseId: string;
    moduleId: string;
    lessonId?: string;
    studentId: string;
    targetLessonIds: string[];
  }): Promise<{ release: ReleaseEvent; created: boolean }> {
    const targetKey = [...input.targetLessonIds].sort().join('\u0000');
    return db.runTransaction(async transaction => {
      const snap = await transaction.get(
        db.collection('releases').where('studentId', '==', input.studentId)
      );
      const existing = snap.docs
        .map(doc => sanitizeDoc<ReleaseEvent>(doc))
        .find(release =>
          release.moduleId === input.moduleId
          && release.overallStatus !== 'failed'
          && (release.targetLessonIds ?? []).slice().sort().join('\u0000') === targetKey
        );
      if (existing) return { release: existing, created: false };

      const ref = db.collection('releases').doc();
      const requestedAt = new Date().toISOString();
      const release = buildPendingRelease({ id: ref.id, ...input, requestedAt });
      transaction.set(ref, release);
      return { release, created: true };
    });
  },

  async createPendingRelease(input: {
    courseId: string;
    moduleId: string;
    lessonId?: string;
    studentId: string;
    targetLessonIds: string[];
  }): Promise<ReleaseEvent> {
    const ref = db.collection('releases').doc();
    const requestedAt = new Date().toISOString();
    const release = buildPendingRelease({ id: ref.id, ...input, requestedAt });
    await ref.set(release);
    return release;
  },

  async updateIngestionStep(
    releaseId: string,
    lessonId: string,
    stage: IngestionStage,
    patch: Partial<IngestionStepRecord>,
  ): Promise<void> {
    const ref = db.collection('releases').doc(releaseId);
    await db.runTransaction(async transaction => {
      const snap = await transaction.get(ref);
      if (!snap.exists) throw new Error('Release not found');
      const release = sanitizeDoc<ReleaseEvent>(snap);
      const steps = release.steps?.map(step =>
        step.lessonId === lessonId && step.stage === stage ? { ...step, ...patch } : step
      );
      if (!steps?.some(step => step.lessonId === lessonId && step.stage === stage)) {
        throw new Error('Ingestion step not found');
      }
      transaction.update(ref, { steps });
    });
  },

  async beginReleaseRetry(releaseId: string): Promise<ReleaseEvent> {
    const ref = db.collection('releases').doc(releaseId);
    return db.runTransaction(async transaction => {
      const snap = await transaction.get(ref);
      if (!snap.exists) throw new Error('Release not found');
      const release = sanitizeDoc<ReleaseEvent>(snap);
      if (release.overallStatus !== 'failed') throw new Error('Only failed releases can be retried');
      const now = new Date().toISOString();
      const steps = (release.steps ?? []).map(step =>
        step.status === 'failed' ? { ...step, status: 'pending' as const, error: undefined, completedAt: undefined } : step
      );
      const updated: ReleaseEvent = {
        ...release,
        status: 'pending', overallStatus: 'pending', failureCategory: undefined,
        attemptCount: (release.attemptCount ?? 0) + 1, lastAttemptAt: now, steps,
      };
      transaction.set(ref, updated);
      return updated;
    });
  },

  async finalizeRelease(releaseId: string): Promise<ReleaseEvent> {
    const ref = db.collection('releases').doc(releaseId);
    return db.runTransaction(async transaction => {
      const snap = await transaction.get(ref);
      if (!snap.exists) throw new Error('Release not found');
      const completed = completeRelease(sanitizeDoc<ReleaseEvent>(snap), new Date().toISOString());
      transaction.set(ref, completed);
      return completed;
    });
  },

  async failRelease(releaseId: string, category: IngestionErrorCategory): Promise<ReleaseEvent> {
    const ref = db.collection('releases').doc(releaseId);
    return db.runTransaction(async transaction => {
      const snap = await transaction.get(ref);
      if (!snap.exists) throw new Error('Release not found');
      const failed = failRelease(sanitizeDoc<ReleaseEvent>(snap), category);
      transaction.set(ref, failed);
      return failed;
    });
  },

  async getIngestionArtifact(releaseId: string, lessonId: string): Promise<IngestionArtifact | null> {
    const doc = await db.collection('ingestion_artifacts').doc(`${releaseId}_${lessonId}`).get();
    return doc.exists ? doc.data() as IngestionArtifact : null;
  },

  async saveIngestionArtifact(releaseId: string, lessonId: string, patch: Partial<IngestionArtifact>): Promise<void> {
    await db.collection('ingestion_artifacts').doc(`${releaseId}_${lessonId}`).set(patch, { merge: true });
  },

  async getStagedEmbedding(releaseId: string, lessonId: string, chunkIndex: number): Promise<number[] | undefined> {
    const doc = await db.collection('ingestion_embeddings').doc(`${releaseId}_${lessonId}_${String(chunkIndex).padStart(5, '0')}`).get();
    const embedding = doc.data()?.embedding as { toArray?: () => number[] } | number[] | undefined;
    if (Array.isArray(embedding)) return embedding.map(Number);
    return embedding?.toArray?.().map(Number);
  },

  async saveStagedEmbedding(releaseId: string, lessonId: string, chunkIndex: number, embedding: number[]): Promise<void> {
    await db.collection('ingestion_embeddings').doc(`${releaseId}_${lessonId}_${String(chunkIndex).padStart(5, '0')}`).set({
      releaseId, lessonId, chunkIndex, embedding: FieldValue.vector(embedding),
    });
  },

  // SECOND BRAIN KNOWLEDGE GRAPH (NODES & EDGES)
  async getStudentKnowledgeGraph(studentId: string): Promise<{
    nodes: KnowledgeNode[];
    edges: KnowledgeEdge[];
  }> {
    const [nodesSnap, edgesSnap, releases] = await Promise.all([
      db.collection('knowledge_nodes').where('studentId', 'in', [studentId, 'cohort-all']).get(),
      db.collection('knowledge_edges').where('studentId', 'in', [studentId, 'cohort-all']).get(),
      this.getReleasesForStudent(studentId),
    ]);
    const visibleReleaseIds = new Set(releases.map(release => release.id));
    const visibleLessonIds = new Set(
      releases.flatMap(release => release.targetLessonIds ?? (release.lessonId ? [release.lessonId] : []))
    );
    const visibleModuleIds = new Set(
      releases.filter(release => !release.targetLessonIds?.length && !release.lessonId).map(release => release.moduleId)
    );
    const visible = (data: { releaseId?: string; lessonId?: string; moduleId?: string }) =>
      data.releaseId
        ? visibleReleaseIds.has(data.releaseId)
        : Boolean((data.lessonId && visibleLessonIds.has(data.lessonId)) || (data.moduleId && visibleModuleIds.has(data.moduleId)));

    const nodes = nodesSnap.docs.map(doc => sanitizeDoc<KnowledgeNode & { releaseId?: string }>(doc)).filter(visible);
    const nodeIds = new Set(nodes.map(node => node.id));
    const edges = edgesSnap.docs
      .map(doc => sanitizeDoc<KnowledgeEdge & { releaseId?: string; lessonId?: string }>(doc))
      .filter(edge => edge.releaseId ? visibleReleaseIds.has(edge.releaseId) : nodeIds.has(edge.sourceNodeId) && nodeIds.has(edge.targetNodeId));

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

    // Fetch existing edges once so re-ingestion upserts instead of appending duplicates.
    const existingEdgesSnap = await db
      .collection('knowledge_edges')
      .where('studentId', '==', studentId)
      .get();
    const existingEdgeKeyToRef = new Map<string, FirebaseFirestore.DocumentReference>();
    for (const doc of existingEdgesSnap.docs) {
      const data = doc.data() as KnowledgeEdge;
      const key = edgeKey(studentId, data.sourceNodeId || data.sourceConcept, data.targetNodeId || data.targetConcept, data.relationshipType);
      existingEdgeKeyToRef.set(key, doc.ref);
    }

    for (const e of edges) {
      const sourceId = conceptToIdMap.get(e.sourceConcept.toLowerCase().trim()) || e.sourceNodeId;
      const targetId = conceptToIdMap.get(e.targetConcept.toLowerCase().trim()) || e.targetNodeId;

      const key = edgeKey(studentId, sourceId || e.sourceConcept, targetId || e.targetConcept, e.relationshipType);
      const ref = existingEdgeKeyToRef.get(key) ?? db.collection('knowledge_edges').doc(key);
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

  async writeVerifiedCoursewareVectors(records: StagedVectorRecord[]): Promise<void> {
    let batch = db.batch();
    let operationCount = 0;
    const flush = async () => {
      if (!operationCount) return;
      await batch.commit();
      batch = db.batch();
      operationCount = 0;
    };
    const createdAt = new Date().toISOString();
    for (const record of records) {
      const ref = db.collection('courseware_chunks').doc(record.id);
      const { embedding, ...metadata } = record;
      batch.set(ref, { ...metadata, embedding: FieldValue.vector(embedding), createdAt });
      operationCount += 1;
      if (operationCount === 450) await flush();
    }
    await flush();
  },

  async verifyCoursewareVectors(records: StagedVectorRecord[]): Promise<boolean> {
    if (records.length === 0) return false;
    const docs = await db.getAll(...records.map(record => db.collection('courseware_chunks').doc(record.id)));
    return docs.length === records.length && docs.every((doc, index) => {
      const data = doc.data();
      return doc.exists && data?.releaseId === records[index].releaseId && data?.lessonId === records[index].lessonId;
    });
  },

  async writeVerifiedKnowledgeGraph(
    studentId: string,
    graph: { nodes: ExtractedGraphNode[]; edges: ExtractedGraphEdge[] },
  ): Promise<void> {
    const batch = db.batch();
    for (const node of graph.nodes) {
      batch.set(db.collection('knowledge_nodes').doc(node.id), { ...node, studentId });
    }
    for (const edge of graph.edges) {
      batch.set(db.collection('knowledge_edges').doc(edge.id), { ...edge, studentId });
    }
    await batch.commit();
  },

  async verifyKnowledgeGraph(graph: { nodes: ExtractedGraphNode[]; edges: ExtractedGraphEdge[] }): Promise<boolean> {
    const refs = [
      ...graph.nodes.map(node => db.collection('knowledge_nodes').doc(node.id)),
      ...graph.edges.map(edge => db.collection('knowledge_edges').doc(edge.id)),
    ];
    if (refs.length === 0) return true;
    const docs = await db.getAll(...refs);
    return docs.length === refs.length && docs.every(doc => doc.exists);
  },

  // COURSEWARE VECTOR CHUNKS
  async replaceCoursewareChunks(
    lessonId: string,
    chunks: Array<Omit<CoursewareChunk, 'id' | 'createdAt'> & { embedding: number[] }>
  ): Promise<number> {
    const existing = await db.collection('courseware_chunks').where('lessonId', '==', lessonId).get();
    const createdAt = new Date().toISOString();
    let batch = db.batch();
    let operationCount = 0;
    const flush = async () => {
      if (operationCount === 0) return;
      await batch.commit();
      batch = db.batch();
      operationCount = 0;
    };

    for (const doc of existing.docs) {
      batch.delete(doc.ref);
      operationCount += 1;
      if (operationCount === 450) await flush();
    }
    for (const chunk of chunks) {
      const ref = db.collection('courseware_chunks').doc(
        `${lessonId}_${String(chunk.chunkIndex).padStart(5, '0')}`
      );
      const { embedding, ...metadata } = chunk;
      batch.set(ref, {
        id: ref.id,
        ...metadata,
        embedding: FieldValue.vector(embedding),
        createdAt,
      });
      operationCount += 1;
      if (operationCount === 450) await flush();
    }
    await flush();
    return chunks.length;
  },

  async retrieveCoursewareChunks(
    queryVector: number[],
    releasedLessonIds: string[],
    limit = 6,
    visibleReleaseIds?: string[],
  ): Promise<RetrievedCoursewareChunk[]> {
    if (releasedLessonIds.length === 0 || limit <= 0) return [];

    // Query each released lesson separately. This keeps unreleased documents
    // outside the query itself instead of retrieving globally and filtering
    // only after the fact.
    const snapshots = await Promise.all(
      [...new Set(releasedLessonIds)].map((lessonId) =>
        db
          .collection('courseware_chunks')
          .where('lessonId', '==', lessonId)
          .findNearest({
            vectorField: 'embedding',
            queryVector,
            limit,
            distanceMeasure: 'COSINE',
            distanceResultField: 'vectorDistance',
          })
          .get()
      )
    );

    const visibleSet = visibleReleaseIds ? new Set(visibleReleaseIds) : null;
    return snapshots.flatMap((snapshot) => snapshot.docs)
      .map((doc) => {
        const data = doc.data();
        return {
          id: doc.id,
          lessonId: String(data.lessonId || ''),
          lessonTitle: String(data.lessonTitle || ''),
          courseId: String(data.courseId || ''),
          moduleId: String(data.moduleId || ''),
          releaseId: String(data.releaseId || ''),
          chunkIndex: Number(data.chunkIndex || 0),
          content: String(data.content || ''),
          distance: typeof data.vectorDistance === 'number' ? data.vectorDistance : undefined,
        };
      })
      .filter(chunk => !visibleSet || !chunk.releaseId || visibleSet.has(chunk.releaseId))
      .sort((a, b) => (a.distance ?? Number.POSITIVE_INFINITY) - (b.distance ?? Number.POSITIVE_INFINITY))
      .slice(0, limit);
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

  // QUIZ SUBMISSIONS
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

  // AUTOMATIC INITIAL SEED HELPER
  async ensureSeededData(studentId = 'student-alex'): Promise<{
    course: Course;
    modules: CourseModule[];
    lessons: Lesson[];
    releases: ReleaseEvent[];
    graph: { nodes: KnowledgeNode[]; edges: KnowledgeEdge[] };
    activeSocraticSession: SocraticSession | null;
  }> {
    let courses = await this.getCourses();
    let course: Course;
    let modules: CourseModule[];
    let lessons: Lesson[];

    if (courses.length === 0) {
      course = await this.createCourse({
        title: 'CS-850: Distributed Systems & Autonomous AI Architectures',
        description: 'Foundations of resilient consensus, vector index partitioning, event-driven streaming, and decentralized agent graphs.',
        instructor: 'Dr. Elena Vance & Staff',
        code: 'CS-850',
      });

      const mod1 = await this.createModule({
        courseId: course.id,
        title: 'Module 1: Consensus & State Machine Replication',
        description: 'Raft protocol, Byzantine Fault Tolerance, and distributed WALs.',
        order: 1,
      });

      const mod2 = await this.createModule({
        courseId: course.id,
        title: 'Module 2: High-Throughput Vector Indices & RAG Partitioning',
        description: 'HNSW, Quantization, Sharding strategies, and multi-tenant graph memory.',
        order: 2,
      });

      const mod3 = await this.createModule({
        courseId: course.id,
        title: 'Module 3: Autonomous Agent Orbits & Multi-Agent Consensus',
        description: 'Durable workflows, actor mailboxes, and agentic reflection loops.',
        order: 3,
      });

      modules = [mod1, mod2, mod3];

      const lesson1_1 = await this.createLesson({
        courseId: course.id,
        moduleId: mod1.id,
        title: '1.1 The Raft Consensus Algorithm & Leader Election',
        order: 1,
        summary: 'Leader election, heartbeat timeouts, term numbers, and log replication safety in Raft.',
        tags: ['Consensus', 'Raft', 'Distributed Systems'],
        markdownContent: `# The Raft Consensus Algorithm: Leader Election & Safety\n\n## 1. Introduction & Problem Statement\nIn distributed computing, achieving consensus across unreliable nodes over an asynchronous network is the bedrock of resilient infrastructure. Raft addresses this by decomposing consensus into three distinct subproblems:\n- **Leader Election**\n- **Log Replication**\n- **Safety Invariants**\n\n\`\`\`\n       +-------------+\n       |   Follower  |<----------------+\n       +-------------+                 |\n              | (election timeout)     | (discovers current leader\n              v                        |  or higher term)\n       +-------------+                 |\n       |  Candidate  |-----------------+\n       +-------------+\n              | (receives majority votes)\n              v\n       +-------------+\n       |    Leader   |\n       +-------------+\n\`\`\`\n\n## 2. Server States & State Transitions\nAt any given moment, each server is in one of three states:\n1. **Leader**: Handles all client requests, replicates log entries to followers, and sends periodic heartbeats (\`AppendEntries\` RPC with empty entries).\n2. **Follower**: Passive responder; only replies to RPCs from candidates and leaders. If election timeout elapses without heartbeats, it transitions to candidate.\n3. **Candidate**: Increments term counter, votes for itself, and broadcasts \`RequestVote\` RPCs to peers.\n\n## 3. Election Invariants & Quorum\n- A candidate wins an election if it collects votes from a strict majority (\`N/2 + 1\`) of servers in the cluster for that term.\n- Each server votes for at most **one** candidate per term on a first-come, first-served basis.\n- Randomized election timeouts (e.g., 150ms–300ms) prevent split votes when multiple nodes detect leader failure simultaneously.\n\n## 4. Log Matching Invariant\nIf two logs contain an entry with the same index and term:\n- They store the same command.\n- Their logs are identical in all preceding entries.\n\n## 5. Architectural Tradeoffs\n- **Pros**: Understandable formal model, deterministic single-leader operational simplicity.\n- **Cons**: Leader bottleneck under extreme write pressure; failover pause during re-election window.\n`,
      });

      const lesson1_2 = await this.createLesson({
        courseId: course.id,
        moduleId: mod1.id,
        title: '1.2 Log Replication, Commit Indexes, and Byzantine Resistance',
        order: 2,
        summary: 'Handling network partitions, log matching checks, and comparing crash-fault-tolerant vs Byzantine systems.',
        tags: ['Log Replication', 'Partitions', 'BFT'],
        markdownContent: `# Log Replication & Fault Boundaries in Distributed State Machines\n\n## 1. The AppendEntries Protocol\nOnce a leader is elected, it begins serving client commands:\n1. Leader appends command to its local log as an uncommitted entry.\n2. Leader sends \`AppendEntries\` RPC containing the entry, the previous entry index, and previous entry term (\`prevLogIndex\`, \`prevLogTerm\`).\n3. Follower rejects the RPC if its log does not contain an entry matching \`prevLogIndex\` and \`prevLogTerm\`.\n4. Leader retries by decrementing \`nextIndex\` until follower log converges.\n\n## 2. Commit Rule\nAn entry is considered **committed** once it is safely replicated on a majority of nodes by the leader of the current term. Once committed, the leader executes the state machine transition and returns the result to the client.\n\n## 3. Handling Network Partitions (Split-Brain Defense)\nConsider a 5-node cluster \`[S1, S2, S3, S4, S5]\` partitioned into \`{S1, S2}\` and \`{S3, S4, S5}\`:\n- Minority partition \`{S1, S2}\` cannot commit any writes because quorum requires 3 nodes.\n- Majority partition \`{S3, S4, S5}\` elects a new leader with a higher term and commits valid client writes.\n- Upon partition healing, \`S1\` and \`S2\` recognize the higher term, step down, and overwrite uncommitted speculative logs.\n\n## 4. Crash Fault Tolerance (CFT) vs. Byzantine Fault Tolerance (BFT)\n- **CFT (Raft, Paxos)**: Assumes non-malicious nodes that may crash or drop messages, but do not lie. Tolerates up to \`f\` failures with \`2f + 1\` nodes.\n- **BFT (PBFT, Tendermint)**: Assumes adversarial nodes capable of forging messages or equivocation. Requires \`3f + 1\` nodes to tolerate \`f\` Byzantine actors.\n`,
      });

      const lesson2_1 = await this.createLesson({
        courseId: course.id,
        moduleId: mod2.id,
        title: '2.1 Vector Indexing with HNSW & Product Quantization',
        order: 1,
        summary: 'Hierarchical Navigable Small World graphs, dimensional reduction, and approximate nearest neighbor search.',
        tags: ['Vector Search', 'HNSW', 'Quantization'],
        markdownContent: `# Vector Indexing: HNSW Graphs & Compression Techniques\n\n## 1. High-Dimensional Similarity & The Curse of Dimensionality\nExact Nearest Neighbor (kNN) search in d-dimensional space has time complexity \\(O(N \\cdot d)\\), which fails under real-time retrieval requirements with millions of embedding vectors. Approximate Nearest Neighbor (ANN) trades small recall losses for sub-millisecond query latency.\n\n## 2. Hierarchical Navigable Small World (HNSW)\nHNSW builds a multi-layer graph hierarchy where:\n- Top layers contain sparse nodes with long-range skip connections (express routing).\n- Bottom layer (Layer 0) contains all vectors with dense local neighborhood connections.\n- Greedy routing starts at the top layer, descends upon reaching local minima, and conducts beam search on Layer 0.\n\n\`\`\`\nLayer 2: [A] ------------------------> [G]\n           \\                            \\\nLayer 1: [A] ---------> [D] ---------> [G]\n           \\            /  \\           / \\\nLayer 0: [A] -> [B] -> [C] -> [D] -> [E] -> [F] -> [G]\n\`\`\`\n\n## 3. Product Quantization (PQ)\nTo fit billions of vectors in RAM:\n1. Decompose a d-dimensional vector into \\(m\\) sub-vectors of size \\(d/m\\).\n2. Run k-means clustering on each sub-space to generate \\(k^*\\) centroids (typically 256, encoded as 1 byte).\n3. Replace each sub-vector with its nearest centroid ID.\n4. Asymmetric Distance Computation (ADC) allows calculating query-to-centroid lookup distances without decompressing stored vectors.\n`,
      });

      const lesson3_1 = await this.createLesson({
        courseId: course.id,
        moduleId: mod3.id,
        title: '3.1 Durable Agent Workflows & State Synchronization',
        order: 1,
        summary: 'Actor models, deterministic replay, event-sourced agent state, and tool-call checkpoints.',
        tags: ['Agents', 'Durable Execution', 'State Machines'],
        markdownContent: `# Durable Agent Workflows & State Synchronization\n\n## 1. Ephemeral vs. Durable Agent Execution\nStandard LLM agent loops execute in transient memory. If a network blip occurs mid-workflow (e.g. during a 30-second multi-step code generation or external API call), the entire context is lost.\n\nDurable Execution provides:\n- **Automatic Checkpointing**: State is saved to durable storage at each workflow step.\n- **Deterministic Replay**: When recovering, previous successful steps are replayed from cached outputs rather than re-executing expensive LLM calls.\n- **Reliable Sleep/Alarms**: Workflows can pause for hours or days waiting for user input without consuming active compute.\n`,
      });

      lessons = [lesson1_1, lesson1_2, lesson2_1, lesson3_1];
    } else {
      course = courses[0];
      modules = await this.getModules(course.id);
      lessons = await this.getLessons(course.id);
    }

    // Check releases
    let releases = await this.getReleasesForStudent(studentId);
    if (releases.length === 0 && modules.length > 0) {
      const rel = await this.createRelease({
        courseId: course.id,
        moduleId: modules[0].id,
        studentId,
        status: 'released',
      });
      releases = [rel];
    }

    // Check knowledge graph
    let graph = await this.getStudentKnowledgeGraph(studentId);
    if (graph.nodes.length === 0 && lessons.length > 0) {
      const initialNodes = [
        {
          lessonId: lessons[0].id,
          moduleId: lessons[0].moduleId,
          courseId: course.id,
          concept: '1.1 The Raft Consensus Algorithm',
          category: 'core' as const,
          summary: 'Foundation of leader election, log safety, and state machine replication.',
          importance: 5,
          releasedAt: new Date().toISOString(),
        },
        {
          lessonId: lessons[0].id,
          moduleId: lessons[0].moduleId,
          courseId: course.id,
          concept: 'Server States & Transitions',
          category: 'architecture' as const,
          summary: 'Follower, Candidate, and Leader state machine with heartbeat timeouts.',
          importance: 4,
          releasedAt: new Date().toISOString(),
        },
        {
          lessonId: lessons[0].id,
          moduleId: lessons[0].moduleId,
          courseId: course.id,
          concept: 'Election Invariants & Quorum',
          category: 'technique' as const,
          summary: 'Strict majority (N/2 + 1) quorum prevents dual leaders in any partition.',
          importance: 4,
          releasedAt: new Date().toISOString(),
        },
        {
          lessonId: lessons[0].id,
          moduleId: lessons[0].moduleId,
          courseId: course.id,
          concept: 'Log Matching Invariant',
          category: 'technique' as const,
          summary: 'Identical index and term ensures identical history up to that point.',
          importance: 4,
          releasedAt: new Date().toISOString(),
        },
        {
          lessonId: lessons[0].id,
          moduleId: lessons[0].moduleId,
          courseId: course.id,
          concept: 'Byzantine Fault Tolerance (BFT)',
          category: 'tradeoff' as const,
          summary: 'Comparing Crash Fault Tolerant (2f+1) systems vs Byzantine Adversarial (3f+1) models.',
          importance: 4,
          releasedAt: new Date().toISOString(),
        },
      ];

      const initialEdges = [
        {
          sourceNodeId: '',
          targetNodeId: '',
          sourceConcept: '1.1 The Raft Consensus Algorithm',
          targetConcept: 'Server States & Transitions',
          relationshipType: 'part_of' as const,
          description: 'Core state machine lifecycle.',
          strength: 3,
          releasedAt: new Date().toISOString(),
        },
        {
          sourceNodeId: '',
          targetNodeId: '',
          sourceConcept: '1.1 The Raft Consensus Algorithm',
          targetConcept: 'Election Invariants & Quorum',
          relationshipType: 'part_of' as const,
          description: 'Prevents split-brain.',
          strength: 3,
          releasedAt: new Date().toISOString(),
        },
        {
          sourceNodeId: '',
          targetNodeId: '',
          sourceConcept: '1.1 The Raft Consensus Algorithm',
          targetConcept: 'Log Matching Invariant',
          relationshipType: 'part_of' as const,
          description: 'Guarantees log consistency.',
          strength: 3,
          releasedAt: new Date().toISOString(),
        },
        {
          sourceNodeId: '',
          targetNodeId: '',
          sourceConcept: 'Election Invariants & Quorum',
          targetConcept: 'Byzantine Fault Tolerance (BFT)',
          relationshipType: 'contrasts_with' as const,
          description: 'CFT vs BFT assumption comparison.',
          strength: 3,
          releasedAt: new Date().toISOString(),
        },
      ];

      const { savedNodes, savedEdges } = await this.saveKnowledgeNodesAndEdges(
        studentId,
        initialNodes,
        initialEdges
      );
      graph = { nodes: savedNodes, edges: savedEdges };
    }

    // Check active Socratic session
    let activeSocraticSession = await this.getActiveSocraticSession(studentId);
    if (!activeSocraticSession && lessons.length > 0) {
      activeSocraticSession = await this.createSocraticSession({
        studentId,
        triggerReason: 'Proactive inquiry on core distributed systems principles.',
        socraticQuestion: 'If a 5-node cluster is partitioned into 2 nodes and 3 nodes, why can the 2-node group never commit new log entries even if it can still communicate internally?',
        targetConcept: 'Raft Consensus Quorum',
        relatedLessonId: lessons[0].id,
        status: 'pending',
      });
    }

    return {
      course,
      modules,
      lessons,
      releases,
      graph,
      activeSocraticSession,
    };
  },
};
