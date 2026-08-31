import { NextResponse } from 'next/server';
import { z } from 'zod';
import {
  createDemoSessionCookie,
  demoIdentityFromCookie,
  demoSessionsEnabled,
  getDemoPersona,
  DEMO_PERSONAS,
} from '@/lib/demo-session';

const SessionWriteSchema = z.object({
  persona: z.enum(['admin', 'ananya', 'brinda', 'chetna']),
}).strict();

function unavailable(): NextResponse {
  return NextResponse.json({ error: 'Not found' }, { status: 404 });
}

export async function GET(req: Request) {
  if (!demoSessionsEnabled()) return unavailable();
  const identity = demoIdentityFromCookie(req.headers.get('cookie'));
  const selected = identity ? getDemoPersona(identity.personaId) : getDemoPersona('ananya');
  return NextResponse.json({ selected, personas: DEMO_PERSONAS });
}

export async function POST(req: Request) {
  if (!demoSessionsEnabled()) return unavailable();
  const parsed = SessionWriteSchema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json({ error: 'persona must be admin, ananya, brinda, or chetna' }, { status: 400 });
  }
  const selected = getDemoPersona(parsed.data.persona)!;
  const response = NextResponse.json({ selected });
  response.headers.set('Set-Cookie', createDemoSessionCookie(selected.id));
  return response;
}
