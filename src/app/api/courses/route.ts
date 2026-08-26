import { NextResponse } from 'next/server';
import { DataService } from '@/lib/data-service';
import { resolveRequestIdentity, requireAdmin, authorizationResponse } from '@/lib/request-identity';

export async function GET() {
  try {
    const courses = await DataService.getCourses();
    return NextResponse.json({ courses });
  } catch (error: any) {
    console.error('Failed to get courses:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const identity = resolveRequestIdentity(req);
    requireAdmin(identity);
    const body = await req.json();
    const { title, description, instructor, code, programmeId, subjectId, semesterId, category, credits } = body;
    if (!title) {
      return NextResponse.json({ error: 'Title is required' }, { status: 400 });
    }
    const course = await DataService.createCourse({
      title,
      description: description || '',
      instructor: instructor || 'Faculty Lead',
      code: code || 'CS-701',
      ...(programmeId && { programmeId }),
      ...(subjectId && { subjectId }),
      ...(semesterId && { semesterId }),
      ...(category && { category }),
      ...(credits != null && { credits }),
    });
    return NextResponse.json({ course });
  } catch (error: unknown) {
    const authResponse = authorizationResponse(error);
    if (authResponse) return authResponse;
    console.error('Failed to create course:', error);
    return NextResponse.json({ error: 'Failed to create course' }, { status: 500 });
  }
}
