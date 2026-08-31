import { headers } from 'next/headers';
import { DataService } from '@/lib/data-service';
import { DEMO_PERSONAS, getDemoPersona } from '@/lib/demo-session';
import { resolveRequestIdentity } from '@/lib/request-identity';

export async function loadDashboardPageData() {
  const incomingHeaders = await headers();
  const identity = resolveRequestIdentity(new Request('http://saint-elms.local/', {
    headers: incomingHeaders,
  }));
  const studentId = identity.role === 'admin' ? 'student-ananya' : identity.userId;
  const seeded = await DataService.ensureSeededData(studentId);
  const selected = identity.mode === 'demo'
    ? getDemoPersona(identity.personaId)
      ?? DEMO_PERSONAS.find((persona) => persona.userId === identity.userId && persona.role === identity.role)
    : undefined;

  return {
    seeded,
    identity: { userId: identity.userId, role: identity.role },
    demoSession: selected ? { selected, personas: DEMO_PERSONAS } : undefined,
  };
}
