import { NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/**
 * Process liveness only. Dependency connectivity belongs to /health, whose
 * honest 503 response must not restart an otherwise healthy Cloud Run instance.
 */
export async function GET() {
  return NextResponse.json({ status: 'ok' });
}
