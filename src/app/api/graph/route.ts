import { NextResponse } from 'next/server';
import { DataService } from '@/lib/data-service';

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const studentId = searchParams.get('studentId') || 'student-alex';

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
  } catch (error: any) {
    console.error('Failed to get knowledge graph:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
