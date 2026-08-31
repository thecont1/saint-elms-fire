import { db } from './firestore';
import { buildPersonaSeedFixture, type PersonaCorpus, type PersonaSeedFixture } from './persona-seed-fixture';
import { buildPersonaSeedPlans, readProgrammeManifest } from './persona-seed-plan';

const STUDENT_COLLECTIONS = [
  'releases', 'knowledge_nodes', 'knowledge_edges', 'quiz_submissions', 'socratic_sessions',
  'recommended_readings', 'chat_messages', 'generated_formats', 'generated_artifacts', 'jobs',
] as const;

async function replaceStudentDocuments(collectionName: string, studentId: string, documents: Array<{ id: string }>): Promise<void> {
  const existing = await db.collection(collectionName).where('studentId', '==', studentId).get();
  let batch = db.batch();
  let operations = 0;
  const commit = async () => {
    if (!operations) return;
    await batch.commit();
    batch = db.batch();
    operations = 0;
  };
  for (const document of existing.docs) {
    batch.delete(document.ref);
    operations += 1;
    if (operations === 400) await commit();
  }
  for (const document of documents) {
    batch.set(db.collection(collectionName).doc(document.id), document);
    operations += 1;
    if (operations === 400) await commit();
  }
  await commit();
}

async function loadCorpus(): Promise<PersonaCorpus> {
  const [coursesSnap, modulesSnap, lessonsSnap] = await Promise.all([
    db.collection('courses').get(), db.collection('modules').get(), db.collection('lessons').get(),
  ]);
  const withId = <T>(doc: FirebaseFirestore.QueryDocumentSnapshot) => ({ id: doc.id, ...doc.data() }) as T;
  return {
    courses: coursesSnap.docs.map((doc) => withId<PersonaCorpus['courses'][number]>(doc)),
    modules: modulesSnap.docs.map((doc) => withId<PersonaCorpus['modules'][number]>(doc)),
    lessons: lessonsSnap.docs.map((doc) => withId<PersonaCorpus['lessons'][number]>(doc)),
  };
}

export async function seedPersonas(manifestPath = 'content/programme-manifest.yaml'): Promise<{ fixtures: PersonaSeedFixture[]; counts: Record<string, number> }> {
  const plans = buildPersonaSeedPlans(await readProgrammeManifest(manifestPath));
  const corpus = await loadCorpus();
  const fixtures = Object.values(plans).map((plan) => buildPersonaSeedFixture(plan, corpus));
  const counts: Record<string, number> = {};

  for (const fixture of fixtures) {
    const studentId = fixture.state.studentId;
    const writes: Record<(typeof STUDENT_COLLECTIONS)[number], Array<{ id: string }>> = {
      releases: fixture.releases,
      knowledge_nodes: fixture.nodes,
      knowledge_edges: fixture.edges,
      quiz_submissions: fixture.quizzes,
      socratic_sessions: fixture.socraticSessions,
      recommended_readings: fixture.recommendations,
      chat_messages: [], generated_formats: [], generated_artifacts: [], jobs: [],
    };
    for (const collectionName of STUDENT_COLLECTIONS) {
      await replaceStudentDocuments(collectionName, studentId, writes[collectionName]);
    }
    await db.collection('persona_states').doc(studentId).set(fixture.state);
    counts[studentId] = Object.values(writes).reduce((sum, documents) => sum + documents.length, 1);
  }

  for (const item of fixtures.flatMap((fixture) => fixture.libraryItems)) {
    await db.collection('library_items').doc(item.id).set(item);
  }
  return { fixtures, counts };
}
