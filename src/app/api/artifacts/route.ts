import { NextResponse } from 'next/server';
import { DataService } from '@/lib/data-service';
import { runArtifactWatchdogSweep } from '@/lib/artifact-jobs';
import { resolveRequestIdentity, resolveStudentScope, authorizationResponse } from '@/lib/request-identity';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/**
 * Lists the caller’s artifacts for a lesson released to the applicable student.
 *
 * @returns A JSON response containing the artifacts and limited status information for associated jobs.
 */
export async function GET(req: Request) {
  try {
    const identity = resolveRequestIdentity(req);
    const { searchParams } = new URL(req.url);
    const lessonId = searchParams.get('lessonId');
    const studentId = resolveStudentScope(identity, searchParams.get('studentId'));
    if (!lessonId) {
      return NextResponse.json({ error: 'lessonId query parameter is required' }, { status: 400 });
    }
    const released = await DataService.isLessonReleasedToStudent(lessonId, studentId);
    if (!released) {
      return NextResponse.json({ error: 'Lesson has not been released to this student' }, { status: 403 });
    }
    void runArtifactWatchdogSweep().catch(() => {});
    const stored = await DataService.getArtifactsForLesson(studentId, lessonId);
    const jobs = await Promise.all(
      stored.map((artifact) => (artifact.jobId ? DataService.getJob(artifact.jobId) : Promise.resolve(null)))
    );
    const artifacts = stored.map(({ storagePath: _storagePath, ...rest }, index) => {
      const job = jobs[index];
      return {
        ...rest,
        job: job ? { status: job.status, attempts: job.attempts, errorCategory: job.errorCategory } : undefined,
      };
    });
    return NextResponse.json({ artifacts });
  } catch (error: unknown) {
    const authResponse = authorizationResponse(error);
    if (authResponse) return authResponse;
    console.error('Failed to list artifacts:', error);
    return NextResponse.json({ error: 'Unable to list artifacts' }, { status: 500 });
  }
}
