import { NextResponse } from 'next/server';
import { DataService } from '@/lib/data-service';
import { resolveRequestIdentity, resolveStudentScope, authorizationResponse } from '@/lib/request-identity';

export async function GET(req: Request) {
  try {
    const identity = resolveRequestIdentity(req);
    const { searchParams } = new URL(req.url);
    const studentId = resolveStudentScope(identity, searchParams.get('studentId'));

    const graph = await DataService.getStudentKnowledgeGraph(studentId);
    const releasedLessons = await DataService.getReleasedLessonsForStudent(studentId);

    return NextResponse.json({
      studentId,
      nodes: graph.nodes,
      edges: graph.edges,
      releasedLessonsCount: releasedLessons.length,
      nodeCount: graph.nodes.length,
      edgeCount: graph.edges.length,
    });
  } catch (error: unknown) {
    const authResponse = authorizationResponse(error);
    if (authResponse) return authResponse;
    console.error('Failed to get knowledge graph:', error);
    return NextResponse.json({ error: 'Unable to load knowledge graph' }, { status: 500 });
  }
}
