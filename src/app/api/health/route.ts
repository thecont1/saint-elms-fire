import { NextResponse } from 'next/server';
import { getHealthReport } from '@/lib/health';

// Touches Firestore + the Google AI SDK — must run on the Node runtime, and must
// never be statically cached (it reports live, point-in-time connectivity).
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/**
 * GET /api/health
 *
 * Returns 200 only when BOTH dependencies are up, otherwise 503. Probe results
 * are briefly cached in the shared health module to bound request amplification.
 */
export async function GET() {
  const report = await getHealthReport();
  return NextResponse.json(report, { status: report.status === 'ok' ? 200 : 503 });
}
