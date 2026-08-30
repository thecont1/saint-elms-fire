import { createHash } from 'node:crypto';
import { db, FieldValue } from './firestore';
import type { RequestIdentity } from './request-identity';
import type {
  Course,
  CourseModule,
  Lesson,
  Programme,
  Subject,
  Semester,
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
  ChatMessage,
} from './types';
import type { IngestionArtifact, StagedVectorRecord, ExtractedGraphNode, ExtractedGraphEdge } from './second-brain-ingestion';
import { buildPendingRelease, completeRelease, failRelease, isReleaseVisible } from './release-integrity';
import {
  buildPendingArtifact,
  completeArtifact,
  failArtifact as failArtifactRecord,
  retryArtifact as retryArtifactRecord,
  type ArtifactErrorCategory,
  type GeneratedArtifact,
} from './artifacts';
import { ARTIFACTS_PER_DAY, ArtifactQuotaError } from './quotas';
import { buildPendingJob, type JobRecord, type JobStore, type JobErrorCategory } from './job-queue';
import type { LibraryItem, LibraryItemInput } from './library-catalog';
import type { RecommendedReading } from './reading-recommendation';
import type { SharedItem, SharedItemInput } from './shared-items';
import { SHARES_PER_DAY, ShareLimitError } from './shared-items';
import type { PeerChunkRecord, PeerNodeRecord, PeerEdgeRecord } from './peer-acceptance';
import type { CorpusChunk } from './corpus-assembly';
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
  // PROGRAMMES
  async getProgrammes(): Promise<Programme[]> {
    const snap = await db.collection('programmes').orderBy('createdAt', 'desc').get();
    return snap.docs.map(doc => sanitizeDoc<Programme>(doc));
  },

  async getProgramme(id: string): Promise<Programme | null> {
    const doc = await db.collection('programmes').doc(id).get();
    if (!doc.exists) return null;
    return sanitizeDoc<Programme>(doc);
  },

  async createProgramme(programme: Omit<Programme, 'id' | 'createdAt'>): Promise<Programme> {
    const ref = db.collection('programmes').doc();
    const newProgramme: Programme = {
      id: ref.id,
      ...programme,
      createdAt: new Date().toISOString(),
    };
    await ref.set(newProgramme);
    return newProgramme;
  },

  // SUBJECTS
  async getSubjects(programmeId?: string): Promise<Subject[]> {
    let query: import('@google-cloud/firestore').Query = db.collection('subjects');
    if (programmeId) {
      query = query.where('programmeId', '==', programmeId);
    }
    const snap = await query.get();
    return snap.docs.map(doc => sanitizeDoc<Subject>(doc));
  },

  async getSubject(id: string): Promise<Subject | null> {
    const doc = await db.collection('subjects').doc(id).get();
    if (!doc.exists) return null;
    return sanitizeDoc<Subject>(doc);
  },

  async createSubject(subject: Omit<Subject, 'id' | 'createdAt'>): Promise<Subject> {
    const ref = db.collection('subjects').doc();
    const newSubject: Subject = {
      id: ref.id,
      ...subject,
      createdAt: new Date().toISOString(),
    };
    await ref.set(newSubject);
    return newSubject;
  },

  // SEMESTERS
  async getSemesters(subjectId?: string): Promise<Semester[]> {
    let query: import('@google-cloud/firestore').Query = db.collection('semesters');
    if (subjectId) {
      query = query.where('subjectId', '==', subjectId);
    }
    const snap = await query.get();
    const list = snap.docs.map(doc => sanitizeDoc<Semester>(doc));
    return list.sort((a, b) => a.order - b.order);
  },

  async getSemester(id: string): Promise<Semester | null> {
    const doc = await db.collection('semesters').doc(id).get();
    if (!doc.exists) return null;
    return sanitizeDoc<Semester>(doc);
  },

  async createSemester(semester: Omit<Semester, 'id' | 'createdAt'>): Promise<Semester> {
    const ref = db.collection('semesters').doc();
    const newSemester: Semester = {
      id: ref.id,
      ...semester,
      createdAt: new Date().toISOString(),
    };
    await ref.set(newSemester);
    return newSemester;
  },

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

  async createModule(mod: Omit<CourseModule, 'id' | 'createdAt'>): Promise<CourseModule> {
    const ref = db.collection('modules').doc();
    const newMod: CourseModule = {
      id: ref.id,
      ...mod,
      createdAt: new Date().toISOString(),
    };
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

  /**
   * Shared courseware read used by both `GET /api/courses/[courseId]` and
   * `GET /api/lessons`. Admins see all lessons; students only see released
   * lessons with unreleased markdown content redacted.
   */
  async getCoursewareLessons(
    courseId: string,
    moduleId: string | undefined,
    identity: RequestIdentity,
    targetStudentId?: string | null,
  ): Promise<Lesson[]> {
    const allLessons = await this.getLessons(courseId, moduleId);
    if (identity.role === 'admin' && !targetStudentId) {
      return allLessons;
    }
    const studentId = identity.role === 'admin' && targetStudentId ? targetStudentId : identity.userId;
    const released = await this.getReleasedLessonsForStudent(studentId, courseId);
    const releasedIds = new Set(released.map(l => l.id));
    return allLessons.map(l =>
      releasedIds.has(l.id) ? l : { ...l, markdownContent: '' }
    );
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
    const visible = (data: { releaseId?: string; lessonId?: string; moduleId?: string; origin?: string }) =>
      // Peer-accepted material is visible by explicit acceptance, not release.
      data.origin === 'peer_share' ? true :
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

  // GENERATED BINARY ARTIFACTS (Phase 6, Track A)
  async createArtifactAndJob(input: {
    studentId: string;
    lessonId: string;
    formatType: GeneratedArtifact['formatType'];
    sinceIso: string;
    cap?: number;
    persona?: string;
    corpusScope?: 'lesson' | 'second_brain';
    sources?: GeneratedArtifact['sources'];
  }): Promise<{ artifact: GeneratedArtifact; job: JobRecord }> {
    const cap = input.cap ?? ARTIFACTS_PER_DAY;

    // Stable request key based on the generation parameters. Using this as the
    // artifact doc id makes identical concurrent requests collide on the same
    // document, so the second transaction retries and returns the first's record.
    const requestKey = createHash('sha256')
      .update(
        [
          input.studentId,
          input.lessonId,
          input.formatType,
          input.persona ?? '',
          input.corpusScope ?? 'second_brain',
        ].join(':'),
      )
      .digest('hex');

    return db.runTransaction(async (transaction) => {
      const ref = db.collection('generated_artifacts').doc(requestKey);
      const existingSnap = await transaction.get(ref);

      if (existingSnap.exists) {
        const existing = sanitizeDoc<GeneratedArtifact>(existingSnap);
        // Return any non-failed artifact and its backing job. The retry endpoint
        // handles explicit regeneration of a failed artifact.
        if (existing.status !== 'failed' && existing.jobId) {
          const jobSnap = await transaction.get(db.collection('jobs').doc(existing.jobId));
          if (jobSnap.exists) {
            const job = sanitizeDoc<JobRecord>(jobSnap);
            return { artifact: existing, job };
          }
        }
        // If the existing artifact is active but its job record is missing,
        // continue and allocate a new job below. A failed artifact with no job
        // will also be re-created (the client should prefer the retry route).
      }

      const snap = await transaction.get(
        db.collection('generated_artifacts').where('studentId', '==', input.studentId)
      );
      const generatedToday = snap.docs
        .map(doc => sanitizeDoc<GeneratedArtifact>(doc))
        .filter(a => Date.parse(a.createdAt) >= Date.parse(input.sinceIso)).length;
      if (generatedToday >= cap) {
        throw new ArtifactQuotaError(`Daily artifact generation limit reached (${cap}/day)`);
      }

      const requestedAt = new Date().toISOString();
      const jobRef = db.collection('jobs').doc();

      const artifact = buildPendingArtifact({
        id: requestKey,
        studentId: input.studentId,
        lessonId: input.lessonId,
        formatType: input.formatType,
        requestedAt,
        persona: input.persona,
        corpusScope: input.corpusScope,
        sources: input.sources,
        jobId: jobRef.id,
      });
      transaction.set(ref, artifact);

      const payload: Record<string, string> = {
        artifactId: artifact.id,
        studentId: input.studentId,
        lessonId: input.lessonId,
      };
      if (input.persona) payload.persona = input.persona.slice(0, 200);
      if (input.corpusScope) payload.corpusScope = input.corpusScope;

      const job = buildPendingJob({
        id: jobRef.id,
        kind: input.formatType,
        payload,
        requestedAt,
      });
      transaction.set(jobRef, job);

      return { artifact, job };
    });
  },

  async getArtifact(id: string): Promise<GeneratedArtifact | null> {
    const doc = await db.collection('generated_artifacts').doc(id).get();
    return doc.exists ? sanitizeDoc<GeneratedArtifact>(doc) : null;
  },

  async getArtifactsForLesson(studentId: string, lessonId: string): Promise<GeneratedArtifact[]> {
    const snap = await db
      .collection('generated_artifacts')
      .where('studentId', '==', studentId)
      .where('lessonId', '==', lessonId)
      .get();
    return snap.docs
      .map(doc => sanitizeDoc<GeneratedArtifact>(doc))
      .sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt));
  },

  async markArtifactReady(id: string, sizeBytes: number, sources?: GeneratedArtifact['sources']): Promise<GeneratedArtifact> {
    const ref = db.collection('generated_artifacts').doc(id);
    return db.runTransaction(async transaction => {
      const snap = await transaction.get(ref);
      if (!snap.exists) throw new Error('Artifact not found');
      const updated = completeArtifact(sanitizeDoc<GeneratedArtifact>(snap), sizeBytes, new Date().toISOString(), sources);
      transaction.set(ref, updated);
      return updated;
    });
  },

  async markArtifactFailed(id: string, category: ArtifactErrorCategory, expectedStatus?: 'pending' | 'running'): Promise<GeneratedArtifact> {
    const ref = db.collection('generated_artifacts').doc(id);
    return db.runTransaction(async transaction => {
      const snap = await transaction.get(ref);
      if (!snap.exists) throw new Error('Artifact not found');
      const artifact = sanitizeDoc<GeneratedArtifact>(snap);
      if (expectedStatus && artifact.status !== expectedStatus) {
        return artifact;
      }
      const updated = failArtifactRecord(artifact, category);
      transaction.set(ref, updated);
      return updated;
    });
  },

  async beginArtifactRetry(id: string): Promise<GeneratedArtifact> {
    const ref = db.collection('generated_artifacts').doc(id);
    return db.runTransaction(async transaction => {
      const snap = await transaction.get(ref);
      if (!snap.exists) throw new Error('Artifact not found');
      const updated = retryArtifactRecord(sanitizeDoc<GeneratedArtifact>(snap), new Date().toISOString());
      transaction.set(ref, updated);
      return updated;
    });
  },

  async setArtifactJobId(id: string, jobId: string): Promise<void> {
    await db.collection('generated_artifacts').doc(id).set({ jobId }, { merge: true });
  },

  /** Observability (Phase 6, Track C3): cheap aggregate counts for artifacts + shares. */
  async getGenerationMetrics(): Promise<{
    artifacts: { total: number; pending: number; ready: number; failed: number };
    shares: { active: number; withdrawn: number };
  }> {
    const [artifactsSnap, sharesSnap] = await Promise.all([
      db.collection('generated_artifacts').get(),
      db.collection('shared_items').get(),
    ]);
    const artifacts = { total: artifactsSnap.size, pending: 0, ready: 0, failed: 0 };
    for (const doc of artifactsSnap.docs) {
      const status = doc.data().status as 'pending' | 'ready' | 'failed';
      if (status in artifacts) artifacts[status] += 1;
    }
    const shares = { active: 0, withdrawn: 0 };
    for (const doc of sharesSnap.docs) {
      const status = doc.data().status as 'active' | 'withdrawn';
      if (status in shares) shares[status] += 1;
    }
    return { artifacts, shares };
  },

  // SECOND-BRAIN CORPUS (Phase 6, Track A0)
  /**
   * All corpus chunks a student may generate from, for one lesson:
   * - released lesson chunks (no studentId / origin field), plus
   * - the student's own accepted library + peer_share chunks.
   */
  async getCorpusChunksForLesson(studentId: string, lessonId: string): Promise<CorpusChunk[]> {
    const [lessonSnap, personalSnap] = await Promise.all([
      db.collection('courseware_chunks').where('lessonId', '==', lessonId).get(),
      db.collection('courseware_chunks').where('studentId', '==', studentId).get(),
    ]);
    const toCorpusChunk = (doc: import('@google-cloud/firestore').QueryDocumentSnapshot): CorpusChunk => {
      const data = doc.data();
      return {
        id: doc.id,
        origin: data.origin as CorpusChunk['origin'],
        lessonId: String(data.lessonId || ''),
        lessonTitle: String(data.lessonTitle || ''),
        heading: String(data.heading || ''),
        content: String(data.content || ''),
        chunkIndex: Number(data.chunkIndex || 0),
        libraryItemId: data.libraryItemId ? String(data.libraryItemId) : undefined,
        sharedItemId: data.sharedItemId ? String(data.sharedItemId) : undefined,
      };
    };
    const lessonChunks = lessonSnap.docs
      .filter(doc => !doc.data().origin) // released lesson content only
      .map(toCorpusChunk);
    const personalChunks = personalSnap.docs
      .filter(doc => ['library', 'peer_share'].includes(String(doc.data().origin || '')))
      .map(toCorpusChunk);
    return [...lessonChunks, ...personalChunks];
  },

  // PEER ACCEPTANCE (Phase 6, Track B3)
  async recordShareDecision(input: {
    sharedItemId: string;
    studentId: string;
    decision: 'accepted' | 'dismissed';
  }): Promise<void> {
    await db.collection('share_decisions').doc(`${input.sharedItemId}__${input.studentId}`).set({
      ...input,
      decidedAt: new Date().toISOString(),
    });
  },

  async getShareDecision(sharedItemId: string, studentId: string): Promise<'accepted' | 'dismissed' | null> {
    const doc = await db.collection('share_decisions').doc(`${sharedItemId}__${studentId}`).get();
    return doc.exists ? (doc.data()!.decision as 'accepted' | 'dismissed') : null;
  },

  async getShareDecisionsForStudent(studentId: string): Promise<Array<{ sharedItemId: string; decision: 'accepted' | 'dismissed' }>> {
    const snap = await db.collection('share_decisions').where('studentId', '==', studentId).get();
    return snap.docs.map(doc => doc.data() as { sharedItemId: string; decision: 'accepted' | 'dismissed' });
  },

  async writePeerChunks(chunks: PeerChunkRecord[]): Promise<void> {
    if (chunks.length === 0) return;
    const createdAt = new Date().toISOString();
    const batch = db.batch();
    for (const chunk of chunks) {
      const { embedding, ...metadata } = chunk;
      batch.set(db.collection('courseware_chunks').doc(chunk.id), {
        ...metadata,
        embeddingModel: 'gemini-embedding-001/768',
        embedding: FieldValue.vector(embedding),
        createdAt,
      });
    }
    await batch.commit();
  },

  async writePeerGraph(nodes: PeerNodeRecord[], edges: PeerEdgeRecord[]): Promise<void> {
    if (nodes.length === 0 && edges.length === 0) return;
    const batch = db.batch();
    for (const node of nodes) batch.set(db.collection('knowledge_nodes').doc(node.id), node);
    for (const edge of edges) batch.set(db.collection('knowledge_edges').doc(edge.id), edge);
    await batch.commit();
  },

  /**
   * Idempotent undo: remove the acceptor's peer chunks and graph records for
   * one shared item. Never touches other students' copies.
   */
  async removePeerIngestion(sharedItemId: string, studentId: string): Promise<{ chunksRemoved: number; nodesRemoved: number; edgesRemoved: number }> {
    const [chunksSnap, nodesSnap, edgesSnap] = await Promise.all([
      db.collection('courseware_chunks').where('sharedItemId', '==', sharedItemId).where('studentId', '==', studentId).get(),
      db.collection('knowledge_nodes').where('sharedItemId', '==', sharedItemId).where('studentId', '==', studentId).get(),
      db.collection('knowledge_edges').where('sharedItemId', '==', sharedItemId).where('studentId', '==', studentId).get(),
    ]);
    const batch = db.batch();
    for (const doc of [...chunksSnap.docs, ...nodesSnap.docs, ...edgesSnap.docs]) batch.delete(doc.ref);
    await batch.commit();
    return { chunksRemoved: chunksSnap.size, nodesRemoved: nodesSnap.size, edgesRemoved: edgesSnap.size };
  },

  /** Lesson-id namespace of a student's accepted peer + library chunks, for retrieval scope. */
  async getPersonalCorpusLessonIds(studentId: string): Promise<string[]> {
    const snap = await db.collection('courseware_chunks').where('studentId', '==', studentId).get();
    return [...new Set(snap.docs.map(doc => String(doc.data().lessonId || '')).filter(Boolean))];
  },

  // PEER SHARES (Phase 6, Track B2)
  async createSharedItem(input: SharedItemInput & { sharerId: string; cohortId: string }): Promise<SharedItem> {
    const ref = db.collection('shared_items').doc();
    const item: SharedItem = {
      id: ref.id,
      sharerId: input.sharerId,
      cohortId: input.cohortId,
      kind: input.kind,
      title: input.title,
      body: input.body,
      sourceLessonId: input.sourceLessonId,
      createdAt: new Date().toISOString(),
      status: 'active',
    };
    await ref.set(item);
    return item;
  },

  async createSharedItemWithRateLimit(
    input: SharedItemInput & { sharerId: string; cohortId: string },
    sinceIso: string,
    cap = SHARES_PER_DAY,
  ): Promise<SharedItem> {
    return db.runTransaction(async (transaction) => {
      const snap = await transaction.get(
        db.collection('shared_items').where('sharerId', '==', input.sharerId)
      );
      const sharesToday = snap.docs
        .map(doc => sanitizeDoc<SharedItem>(doc))
        .filter(item => Date.parse(item.createdAt) >= Date.parse(sinceIso)).length;
      if (sharesToday >= cap) {
        throw new ShareLimitError(`Daily share limit reached (${cap}/day)`);
      }
      const ref = db.collection('shared_items').doc();
      const item: SharedItem = {
        id: ref.id,
        sharerId: input.sharerId,
        cohortId: input.cohortId,
        kind: input.kind,
        title: input.title,
        body: input.body,
        sourceLessonId: input.sourceLessonId,
        createdAt: new Date().toISOString(),
        status: 'active',
      };
      transaction.set(ref, item);
      return item;
    });
  },

  async getSharedItem(id: string): Promise<SharedItem | null> {
    const doc = await db.collection('shared_items').doc(id).get();
    return doc.exists ? sanitizeDoc<SharedItem>(doc) : null;
  },

  async getActiveSharedItems(cohortId: string): Promise<SharedItem[]> {
    const snap = await db
      .collection('shared_items')
      .where('cohortId', '==', cohortId)
      .where('status', '==', 'active')
      .get();
    return snap.docs
      .map(doc => sanitizeDoc<SharedItem>(doc))
      .sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt));
  },

  async countSharesSince(sharerId: string, sinceIso: string): Promise<number> {
    const snap = await db.collection('shared_items').where('sharerId', '==', sharerId).get();
    return snap.docs
      .map(doc => sanitizeDoc<SharedItem>(doc))
      .filter(item => Date.parse(item.createdAt) >= Date.parse(sinceIso)).length;
  },

  async withdrawSharedItem(id: string, sharerId: string): Promise<SharedItem> {
    const ref = db.collection('shared_items').doc(id);
    return db.runTransaction(async transaction => {
      const snap = await transaction.get(ref);
      if (!snap.exists) throw new Error('Shared item not found');
      const item = sanitizeDoc<SharedItem>(snap);
      if (item.sharerId !== sharerId) throw new Error('Only the sharer may withdraw a shared item');
      const updated: SharedItem = { ...item, status: 'withdrawn' };
      transaction.set(ref, updated);
      return updated;
    });
  },

  // RECOMMENDED READINGS (Phase 6, Track B1)
  async saveRecommendedReadings(readings: RecommendedReading[]): Promise<void> {
    if (readings.length === 0) return;
    const batch = db.batch();
    for (const reading of readings) {
      // Deterministic id (nodeId__libraryItemId) → retries upsert, no duplicates.
      batch.set(db.collection('recommended_readings').doc(reading.id), reading);
    }
    await batch.commit();
  },

  async getRecommendedReadingsForStudent(studentId: string, nodeIds?: string[]): Promise<RecommendedReading[]> {
    const snap = await db.collection('recommended_readings').where('studentId', '==', studentId).get();
    const list = snap.docs.map(doc => sanitizeDoc<RecommendedReading>(doc));
    if (!nodeIds) return list;
    const wanted = new Set(nodeIds);
    return list.filter(reading => wanted.has(reading.nodeId));
  },

  /**
   * Ingest licensed library excerpt chunks into a student's vector space,
   * tagged origin:'library' so they participate in RAG and generation.
   */
  async writeLibraryExcerptChunks(input: {
    studentId: string;
    libraryItemId: string;
    nodeId: string;
    lessonId: string;
    courseId: string;
    moduleId: string;
    itemTitle: string;
    chunks: Array<{ index: number; heading: string; content: string; embedding: number[] }>;
  }): Promise<number> {
    const createdAt = new Date().toISOString();
    const batch = db.batch();
    for (const chunk of input.chunks) {
      const ref = db.collection('courseware_chunks').doc(
        `lib_${input.studentId}_${input.libraryItemId}_${input.nodeId}_${String(chunk.index).padStart(5, '0')}`
      );
      batch.set(ref, {
        id: ref.id,
        origin: 'library',
        studentId: input.studentId,
        libraryItemId: input.libraryItemId,
        nodeId: input.nodeId,
        lessonId: input.lessonId,
        lessonTitle: input.itemTitle,
        courseId: input.courseId,
        moduleId: input.moduleId,
        chunkIndex: chunk.index,
        heading: chunk.heading,
        content: chunk.content,
        embeddingModel: 'gemini-embedding-001/768',
        embedding: FieldValue.vector(chunk.embedding),
        createdAt,
      });
    }
    await batch.commit();
    return input.chunks.length;
  },

  // LIBRARY CATALOG (Phase 6, Track B1)
  async createLibraryItem(input: LibraryItemInput, addedBy: string): Promise<LibraryItem> {
    const ref = db.collection('library_items').doc();
    const item: LibraryItem = { id: ref.id, ...input, addedBy, addedAt: new Date().toISOString() };
    await ref.set(item);
    return item;
  },

  async getLibraryItems(): Promise<LibraryItem[]> {
    const snap = await db.collection('library_items').get();
    return snap.docs
      .map(doc => sanitizeDoc<LibraryItem>(doc))
      .sort((a, b) => Date.parse(b.addedAt) - Date.parse(a.addedAt));
  },

  async getLibraryItem(id: string): Promise<LibraryItem | null> {
    const doc = await db.collection('library_items').doc(id).get();
    return doc.exists ? sanitizeDoc<LibraryItem>(doc) : null;
  },

  async deleteLibraryItem(id: string): Promise<void> {
    await db.collection('library_items').doc(id).delete();
  },

  // ASYNC JOBS (Phase 6, Track C1)
  async createJob(input: { kind: JobRecord['kind']; payload: Record<string, string> }): Promise<JobRecord> {
    const ref = db.collection('jobs').doc();
    const job = buildPendingJob({
      id: ref.id,
      kind: input.kind,
      payload: input.payload,
      requestedAt: new Date().toISOString(),
    });
    await ref.set(job);
    return job;
  },

  async getJob(id: string): Promise<JobRecord | null> {
    const doc = await db.collection('jobs').doc(id).get();
    return doc.exists ? sanitizeDoc<JobRecord>(doc) : null;
  },

  /**
   * Reset a failed job back to pending so the runner can claim and re-execute it.
   * Recommendations are SOFT-failure by design and their writes are idempotent,
   * so re-running is safe. Returns null when the job is missing or not failed.
   */
  async requeueJob(id: string): Promise<JobRecord | null> {
    return db.runTransaction(async (transaction) => {
      const snap = await transaction.get(db.collection('jobs').doc(id));
      if (!snap.exists) return null;
      const job = sanitizeDoc<JobRecord>(snap);
      if (job.status !== 'failed') return null;
      transaction.update(snap.ref, {
        status: 'pending',
        errorCategory: FieldValue.delete(),
        startedAt: FieldValue.delete(),
        completedAt: FieldValue.delete(),
      });
      return {
        ...job,
        status: 'pending',
        errorCategory: undefined,
        startedAt: undefined,
        completedAt: undefined,
      };
    });
  },

  /**
   * Firestore-backed JobStore. Claiming runs in a transaction so a job can
   * only transition pending→running once even under concurrent drains.
   */
  jobStore: {
    async claimNextPending(): Promise<JobRecord | null> {
      return db.runTransaction(async transaction => {
        const snap = await transaction.get(
          db.collection('jobs').where('status', '==', 'pending').limit(1)
        );
        if (snap.empty) return null;
        const job = sanitizeDoc<JobRecord>(snap.docs[0]);
        const claimed: JobRecord = { ...job, status: 'running', startedAt: new Date().toISOString() };
        transaction.set(snap.docs[0].ref, claimed);
        return claimed;
      });
    },
    async update(id: string, patch: Partial<JobRecord>): Promise<void> {
      const clean = Object.fromEntries(Object.entries(patch).filter(([, v]) => v !== undefined));
      await db.collection('jobs').doc(id).set(clean, { merge: true });
    },
  } satisfies JobStore,

  // JOB WATCHDOG (Phase 7, Track A2)
  async listRunningJobs(): Promise<JobRecord[]> {
    const snap = await db.collection('jobs').where('status', '==', 'running').get();
    return snap.docs.map((doc) => sanitizeDoc<JobRecord>(doc));
  },

  async listPendingJobs(): Promise<JobRecord[]> {
    const snap = await db.collection('jobs').where('status', '==', 'pending').get();
    return snap.docs.map((doc) => sanitizeDoc<JobRecord>(doc));
  },

  async listPendingArtifactsOlderThan(cutoffIso: string): Promise<GeneratedArtifact[]> {
    const snap = await db.collection('generated_artifacts').where('status', '==', 'pending').get();
    return snap.docs
      .map((doc) => sanitizeDoc<GeneratedArtifact>(doc))
      .filter((artifact) => artifact.createdAt < cutoffIso);
  },

  async resetJobToPending(job: JobRecord): Promise<void> {
    const ref = db.collection('jobs').doc(job.id);
    await db.runTransaction(async (transaction) => {
      const snap = await transaction.get(ref);
      if (!snap.exists) return;
      const current = sanitizeDoc<JobRecord>(snap);
      if (current.status === 'running' && current.attempts === job.attempts && current.startedAt === job.startedAt) {
        transaction.update(ref, {
          status: 'pending',
          startedAt: FieldValue.delete(),
        });
      }
    });
  },

  async failJobAsLost(job: JobRecord, category?: JobErrorCategory): Promise<void> {
    const ref = db.collection('jobs').doc(job.id);
    await db.runTransaction(async (transaction) => {
      const snap = await transaction.get(ref);
      if (!snap.exists) return;
      const current = sanitizeDoc<JobRecord>(snap);
      if ((current.status === 'running' || current.status === 'pending') && current.attempts === job.attempts) {
        transaction.set(
          ref,
          { status: 'failed', errorCategory: category || 'job_lost', completedAt: new Date().toISOString() },
          { merge: true },
        );
      }
    });
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

  // CHAT MESSAGES
  async saveChatMessage(studentId: string, msg: Omit<ChatMessage, 'id'>): Promise<ChatMessage> {
    const ref = db.collection('chat_messages').doc();
    const record: ChatMessage = {
      id: ref.id,
      ...msg,
    };
    await ref.set({ ...record, studentId, createdAt: msg.timestamp });
    return record;
  },

  async getChatHistory(studentId: string, limit = 100): Promise<ChatMessage[]> {
    const snap = await db
      .collection('chat_messages')
      .where('studentId', '==', studentId)
      .orderBy('createdAt', 'desc')
      .limit(limit)
      .get();
    const list = snap.docs.map(doc => sanitizeDoc<ChatMessage>(doc));
    return list.reverse();
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
      // Create UGC hierarchy: Programme → Subject → Semester → Course
      const programmes = await this.getProgrammes();
      let programme: Programme;
      if (programmes.length === 0) {
        programme = await this.createProgramme({
          title: 'M.Sc. in Computer Science',
          level: 'postgraduate',
          durationSemesters: 4,
          totalCredits: 80,
          description: 'Postgraduate programme in distributed systems and AI architectures.',
        });
      } else {
        programme = programmes[0];
      }

      let subjects = await this.getSubjects(programme.id);
      let subject: Subject;
      if (subjects.length === 0) {
        subject = await this.createSubject({
          programmeId: programme.id,
          title: 'Computer Science',
          code: 'CS',
          description: 'Core computer science discipline.',
        });
      } else {
        subject = subjects[0];
      }

      let semesters = await this.getSemesters(subject.id);
      let semester: Semester;
      if (semesters.length === 0) {
        semester = await this.createSemester({
          programmeId: programme.id,
          subjectId: subject.id,
          title: 'Year I - Semester 1',
          yearNumber: 1,
          semesterNumber: 1,
          order: 1,
        });
      } else {
        semester = semesters[0];
      }

      course = await this.createCourse({
        programmeId: programme.id,
        subjectId: subject.id,
        semesterId: semester.id,
        title: 'CS-850: Distributed Systems & Autonomous AI Architectures',
        description: 'Foundations of resilient consensus, vector index partitioning, event-driven streaming, and decentralized agent graphs.',
        category: 'core',
        credits: 4,
        instructor: 'Dr. Elena Vance & Staff',
        code: 'CS-850',
      });

      const mod1 = await this.createModule({
        programmeId: programme.id,
        subjectId: subject.id,
        semesterId: semester.id,
        courseId: course.id,
        title: 'Module 1: Consensus & State Machine Replication',
        description: 'Raft protocol, Byzantine Fault Tolerance, and distributed WALs.',
        order: 1,
      });

      const mod2 = await this.createModule({
        programmeId: programme.id,
        subjectId: subject.id,
        semesterId: semester.id,
        courseId: course.id,
        title: 'Module 2: High-Throughput Vector Indices & RAG Partitioning',
        description: 'HNSW, Quantization, Sharding strategies, and multi-tenant graph memory.',
        order: 2,
      });

      const mod3 = await this.createModule({
        programmeId: programme.id,
        subjectId: subject.id,
        semesterId: semester.id,
        courseId: course.id,
        title: 'Module 3: Autonomous Agent Orbits & Multi-Agent Consensus',
        description: 'Durable workflows, actor mailboxes, and agentic reflection loops.',
        order: 3,
      });

      modules = [mod1, mod2, mod3];

      const lesson1_1 = await this.createLesson({
        programmeId: programme.id,
        subjectId: subject.id,
        semesterId: semester.id,
        courseId: course.id,
        moduleId: mod1.id,
        title: '1.1 The Raft Consensus Algorithm & Leader Election',
        order: 1,
        summary: 'Leader election, heartbeat timeouts, term numbers, and log replication safety in Raft.',
        tags: ['Consensus', 'Raft', 'Distributed Systems'],
        markdownContent: `# The Raft Consensus Algorithm: Leader Election & Safety\n\n## 1. Introduction & Problem Statement\nIn distributed computing, achieving consensus across unreliable nodes over an asynchronous network is the bedrock of resilient infrastructure. Raft addresses this by decomposing consensus into three distinct subproblems:\n- **Leader Election**\n- **Log Replication**\n- **Safety Invariants**\n\n\`\`\`\n       +-------------+\n       |   Follower  |<----------------+\n       +-------------+                 |\n              | (election timeout)     | (discovers current leader\n              v                        |  or higher term)\n       +-------------+                 |\n       |  Candidate  |-----------------+\n       +-------------+\n              | (receives majority votes)\n              v\n       +-------------+\n       |    Leader   |\n       +-------------+\n\`\`\`\n\n## 2. Server States & State Transitions\nAt any given moment, each server is in one of three states:\n1. **Leader**: Handles all client requests, replicates log entries to followers, and sends periodic heartbeats (\`AppendEntries\` RPC with empty entries).\n2. **Follower**: Passive responder; only replies to RPCs from candidates and leaders. If election timeout elapses without heartbeats, it transitions to candidate.\n3. **Candidate**: Increments term counter, votes for itself, and broadcasts \`RequestVote\` RPCs to peers.\n\n## 3. Election Invariants & Quorum\n- A candidate wins an election if it collects votes from a strict majority (\`N/2 + 1\`) of servers in the cluster for that term.\n- Each server votes for at most **one** candidate per term on a first-come, first-served basis.\n- Randomized election timeouts (e.g., 150ms–300ms) prevent split votes when multiple nodes detect leader failure simultaneously.\n\n## 4. Log Matching Invariant\nIf two logs contain an entry with the same index and term:\n- They store the same command.\n- Their logs are identical in all preceding entries.\n\n## 5. Architectural Tradeoffs\n- **Pros**: Understandable formal model, deterministic single-leader operational simplicity.\n- **Cons**: Leader bottleneck under extreme write pressure; failover pause during re-election window.\n`,
      });

      const lesson1_2 = await this.createLesson({
        programmeId: programme.id,
        subjectId: subject.id,
        semesterId: semester.id,
        courseId: course.id,
        moduleId: mod1.id,
        title: '1.2 Log Replication, Commit Indexes, and Byzantine Resistance',
        order: 2,
        summary: 'Handling network partitions, log matching checks, and comparing crash-fault-tolerant vs Byzantine systems.',
        tags: ['Log Replication', 'Partitions', 'BFT'],
        markdownContent: `# Log Replication & Fault Boundaries in Distributed State Machines\n\n## 1. The AppendEntries Protocol\nOnce a leader is elected, it begins serving client commands:\n1. Leader appends command to its local log as an uncommitted entry.\n2. Leader sends \`AppendEntries\` RPC containing the entry, the previous entry index, and previous entry term (\`prevLogIndex\`, \`prevLogTerm\`).\n3. Follower rejects the RPC if its log does not contain an entry matching \`prevLogIndex\` and \`prevLogTerm\`.\n4. Leader retries by decrementing \`nextIndex\` until follower log converges.\n\n## 2. Commit Rule\nAn entry is considered **committed** once it is safely replicated on a majority of nodes by the leader of the current term. Once committed, the leader executes the state machine transition and returns the result to the client.\n\n## 3. Handling Network Partitions (Split-Brain Defense)\nConsider a 5-node cluster \`[S1, S2, S3, S4, S5]\` partitioned into \`{S1, S2}\` and \`{S3, S4, S5}\`:\n- Minority partition \`{S1, S2}\` cannot commit any writes because quorum requires 3 nodes.\n- Majority partition \`{S3, S4, S5}\` elects a new leader with a higher term and commits valid client writes.\n- Upon partition healing, \`S1\` and \`S2\` recognize the higher term, step down, and overwrite uncommitted speculative logs.\n\n## 4. Crash Fault Tolerance (CFT) vs. Byzantine Fault Tolerance (BFT)\n- **CFT (Raft, Paxos)**: Assumes non-malicious nodes that may crash or drop messages, but do not lie. Tolerates up to \`f\` failures with \`2f + 1\` nodes.\n- **BFT (PBFT, Tendermint)**: Assumes adversarial nodes capable of forging messages or equivocation. Requires \`3f + 1\` nodes to tolerate \`f\` Byzantine actors.\n`,
      });

      const lesson2_1 = await this.createLesson({
        programmeId: programme.id,
        subjectId: subject.id,
        semesterId: semester.id,
        courseId: course.id,
        moduleId: mod2.id,
        title: '2.1 Vector Indexing with HNSW & Product Quantization',
        order: 1,
        summary: 'Hierarchical Navigable Small World graphs, dimensional reduction, and approximate nearest neighbor search.',
        tags: ['Vector Search', 'HNSW', 'Quantization'],
        markdownContent: `# Vector Indexing: HNSW Graphs & Compression Techniques\n\n## 1. High-Dimensional Similarity & The Curse of Dimensionality\nExact Nearest Neighbor (kNN) search in d-dimensional space has time complexity \\(O(N \\cdot d)\\), which fails under real-time retrieval requirements with millions of embedding vectors. Approximate Nearest Neighbor (ANN) trades small recall losses for sub-millisecond query latency.\n\n## 2. Hierarchical Navigable Small World (HNSW)\nHNSW builds a multi-layer graph hierarchy where:\n- Top layers contain sparse nodes with long-range skip connections (express routing).\n- Bottom layer (Layer 0) contains all vectors with dense local neighborhood connections.\n- Greedy routing starts at the top layer, descends upon reaching local minima, and conducts beam search on Layer 0.\n\n\`\`\`\nLayer 2: [A] ------------------------> [G]\n           \\                            \\\nLayer 1: [A] ---------> [D] ---------> [G]\n           \\            /  \\           / \\\nLayer 0: [A] -> [B] -> [C] -> [D] -> [E] -> [F] -> [G]\n\`\`\`\n\n## 3. Product Quantization (PQ)\nTo fit billions of vectors in RAM:\n1. Decompose a d-dimensional vector into \\(m\\) sub-vectors of size \\(d/m\\).\n2. Run k-means clustering on each sub-space to generate \\(k^*\\) centroids (typically 256, encoded as 1 byte).\n3. Replace each sub-vector with its nearest centroid ID.\n4. Asymmetric Distance Computation (ADC) allows calculating query-to-centroid lookup distances without decompressing stored vectors.\n`,
      });

      const lesson3_1 = await this.createLesson({
        programmeId: programme.id,
        subjectId: subject.id,
        semesterId: semester.id,
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
