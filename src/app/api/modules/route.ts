import { NextResponse } from 'next/server';
import { DataService } from '@/lib/data-service';
import { resolveRequestIdentity, requireAdmin, authorizationResponse } from '@/lib/request-identity';

export async function POST(req: Request) {
  try {
    const identity = resolveRequestIdentity(req);
    requireAdmin(identity);
    const body = await req.json();
    const { courseId, title, description, order, programmeId, subjectId, semesterId } = body;
    if (!courseId || !title) {
      return NextResponse.json({ error: 'courseId and title are required' }, { status: 400 });
    }
    const module = await DataService.createModule({
      courseId,
      title,
      description: description || '',
      order: order ?? 1,
      ...(programmeId && { programmeId }),
      ...(subjectId && { subjectId }),
      ...(semesterId && { semesterId }),
    });
    return NextResponse.json({ module });
  } catch (error: unknown) {
    const authResponse = authorizationResponse(error);
    if (authResponse) return authResponse;
    console.error('Failed to create module:', error);
    return NextResponse.json({ error: 'Failed to create module' }, { status: 500 });
  }
}
