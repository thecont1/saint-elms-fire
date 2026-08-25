import { GET as getHealth } from '@/app/api/health/route';

// Public liveness alias for infrastructure and demo probes.
// /api/health remains available for clients that conventionally namespace APIs.
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET() {
  return getHealth();
}
