import { NextResponse } from 'next/server';
import { seedPersonas } from '@/lib/persona-seeder';
import { resolveRequestIdentity, requireAdmin, authorizationResponse } from '@/lib/request-identity';

/**
 * Phase 9 "Boom" is a deterministic demo reset, not a programme-corpus wipe.
 * It preserves authored courses/lessons/chunks and replaces only the canonical
 * student-scoped persona state through seedPersonas().
 */
export async function POST(req: Request) {
  try {
    const identity = resolveRequestIdentity(req);
    requireAdmin(identity);
    const { fixtures, counts } = await seedPersonas();
    return NextResponse.json({
      message: 'Canonical persona states restored.',
      personas: fixtures.map((fixture) => ({
        persona: fixture.state.personaId,
        studentId: fixture.state.studentId,
        stage: fixture.state.stage,
        documents: counts[fixture.state.studentId],
      })),
    });
  } catch (error: unknown) {
    const authResponse = authorizationResponse(error);
    if (authResponse) return authResponse;
    console.error('Persona restore error:', error);
    return NextResponse.json({ error: error instanceof Error ? error.message : 'Persona restore failed' }, { status: 500 });
  }
}
