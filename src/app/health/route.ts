import { NextResponse } from 'next/server';
import { getHealthReport } from '@/lib/health';

// Public liveness alias for infrastructure and demo probes.
// /api/health remains available for clients that conventionally namespace APIs.
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const deep = searchParams.get('deep') === 'true';
  const report = await getHealthReport(deep);
  return NextResponse.json(report, { status: report.status === 'ok' ? 200 : 503 });
}
