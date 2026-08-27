import { NextResponse } from 'next/server';
import { DataService } from '@/lib/data-service';
import { ingestRelease } from '../../route';
import { resolveRequestIdentity, requireAdmin, authorizationResponse } from '@/lib/request-identity';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(req: Request, context: { params: Promise<{ releaseId: string }> }) {
  try {
    const identity = resolveRequestIdentity(req);
    requireAdmin(identity);
    const { releaseId } = await context.params;
    const release = await DataService.getRelease(releaseId);
    if (!release) return NextResponse.json({ error: 'Release not found' }, { status: 404 });
    if (release.overallStatus !== 'failed') {
      return NextResponse.json({ error: 'Only failed releases can be retried' }, { status: 409 });
    }

    const lessons = await Promise.all((release.targetLessonIds ?? []).map(id => DataService.getLesson(id)));
    if (lessons.some(lesson => !lesson)) {
      return NextResponse.json({ error: 'One or more target lessons no longer exist' }, { status: 409 });
    }
    const retrying = await DataService.beginReleaseRetry(releaseId);
    const result = await ingestRelease(retrying, lessons.filter((lesson): lesson is NonNullable<typeof lesson> => Boolean(lesson)));
    return NextResponse.json({
      ...result,
      ingestedCount: result.ingestionResults.filter(item => item.status === 'success').length,
      retryUrl: result.release.overallStatus === 'failed' ? `/api/releases/${releaseId}/retry` : undefined,
    }, { status: result.release.overallStatus === 'failed' ? 502 : 200 });
  } catch (error: unknown) {
    const authResponse = authorizationResponse(error);
    if (authResponse) return authResponse;
    console.error('Release retry failed:', error);
    return NextResponse.json({ error: 'Release retry failed' }, { status: 500 });
  }
}
