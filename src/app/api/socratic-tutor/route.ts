import { NextResponse } from 'next/server';
import { proactiveSocraticTutorFlow } from '@/ai/flows/socratic-tutor';
import { evaluateSocraticFlow } from '@/ai/flows/evaluate-socratic';
import { DataService } from '@/lib/data-service';
import { resolveRequestIdentity, resolveStudentScope, authorizationResponse } from '@/lib/request-identity';

export async function GET(req: Request) {
  try {
    const identity = resolveRequestIdentity(req);
    const { searchParams } = new URL(req.url);
    const studentId = resolveStudentScope(identity, searchParams.get('studentId'));
    const forceNew = searchParams.get('forceNew') === 'true';

    const session = await proactiveSocraticTutorFlow({
      studentId,
      forceNew,
    });

    const recentSessions = await DataService.getRecentSocraticSessions(studentId);

    return NextResponse.json({
      activeSession: session,
      recentSessions,
    });
  } catch (error: unknown) {
    const authResponse = authorizationResponse(error);
    if (authResponse) return authResponse;
    console.error('Socratic tutor error:', error);
    return NextResponse.json({ error: 'Unable to load Socratic tutor session' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const identity = resolveRequestIdentity(req);
    const body = await req.json();
    const { sessionId, studentResponse } = body;

    if (!sessionId || !studentResponse) {
      return NextResponse.json(
        { error: 'sessionId and studentResponse are required' },
        { status: 400 }
      );
    }

    // Verify session ownership before evaluating
    const session = await DataService.getActiveSocraticSession(identity.userId);
    if (identity.role === 'student') {
      const allSessions = await DataService.getRecentSocraticSessions(identity.userId);
      const owned = allSessions.some(s => s.id === sessionId);
      if (!owned) {
        return NextResponse.json({ error: 'Session not found or not owned by caller' }, { status: 403 });
      }
    }

    const evaluation = await evaluateSocraticFlow({
      sessionId,
      studentResponse,
    });

    return NextResponse.json({ evaluation });
  } catch (error: unknown) {
    const authResponse = authorizationResponse(error);
    if (authResponse) return authResponse;
    console.error('Socratic evaluation error:', error);
    return NextResponse.json({ error: 'Unable to evaluate Socratic response' }, { status: 500 });
  }
}
