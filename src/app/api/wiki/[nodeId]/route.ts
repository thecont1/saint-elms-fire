import { NextResponse } from 'next/server';
import { DataService } from '@/lib/data-service';
import { buildWikiPage } from '@/lib/wiki';
import { resolveRequestIdentity, resolveStudentScope, authorizationResponse } from '@/lib/request-identity';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/** GET /api/wiki/[nodeId] — the Karpathy-wiki reading surface for one concept. */
export async function GET(
  req: Request,
  { params }: { params: Promise<{ nodeId: string }> },
) {
  try {
    const identity = resolveRequestIdentity(req);
    const { searchParams } = new URL(req.url);
    const studentId = resolveStudentScope(identity, searchParams.get('studentId'));
    const { nodeId } = await params;

    const graph = await DataService.getStudentKnowledgeGraph(studentId);
    const node = graph.nodes.find(candidate => candidate.id === nodeId);
    if (!node) return NextResponse.json({ error: 'Concept not found in your Second Brain' }, { status: 404 });

    const [lessons, readings, decisions] = await Promise.all([
      DataService.getReleasedLessonsForStudent(studentId),
      DataService.getRecommendedReadingsForStudent(studentId, [nodeId]),
      DataService.getShareDecisionsForStudent(studentId),
    ]);
    const acceptedShareIds = decisions.filter(d => d.decision === 'accepted').map(d => d.sharedItemId);
    const peerItems = (await Promise.all(acceptedShareIds.map(id => DataService.getSharedItem(id))))
      .filter((item): item is NonNullable<typeof item> => Boolean(item))
      .map(item => ({ id: item.id, title: item.title, sharerId: item.sharerId }));
    const libraryItems = await Promise.all(readings.map(reading => DataService.getLibraryItem(reading.libraryItemId)));

    const page = buildWikiPage(nodeId, {
      nodes: graph.nodes as never,
      edges: graph.edges as never,
      lessons: lessons.map(lesson => ({ id: lesson.id, title: lesson.title })),
      readings: readings.map((reading, index) => ({
        nodeId: reading.nodeId,
        libraryItemId: reading.libraryItemId,
        rationale: reading.rationale,
        matchScore: reading.matchScore,
        item: libraryItems[index] ? { title: libraryItems[index]!.title } : undefined,
      })),
      peerItems,
    });

    return NextResponse.json({ page });
  } catch (error: unknown) {
    const authResponse = authorizationResponse(error);
    if (authResponse) return authResponse;
    console.error('Failed to build wiki page:', error);
    return NextResponse.json({ error: 'Unable to load wiki page' }, { status: 500 });
  }
}
