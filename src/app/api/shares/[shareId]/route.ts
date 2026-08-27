import { NextResponse } from 'next/server';
import { DataService } from '@/lib/data-service';
import { resolveRequestIdentity, authorizationResponse } from '@/lib/request-identity';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/** GET /api/shares/[shareId] — preview (rendered client-side) with provenance. */
export async function GET(
  req: Request,
  { params }: { params: Promise<{ shareId: string }> },
) {
  try {
    resolveRequestIdentity(req);
    const { shareId } = await params;
    const item = await DataService.getSharedItem(shareId);
    if (!item || item.status !== 'active') {
      return NextResponse.json({ error: 'Shared item not found' }, { status: 404 });
    }
    return NextResponse.json({ item });
  } catch (error: unknown) {
    const authResponse = authorizationResponse(error);
    if (authResponse) return authResponse;
    console.error('Failed to get share:', error);
    return NextResponse.json({ error: 'Unable to load share' }, { status: 500 });
  }
}

/** DELETE /api/shares/[shareId] — sharer withdraws their item. */
export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ shareId: string }> },
) {
  try {
    const identity = resolveRequestIdentity(req);
    const { shareId } = await params;
    const item = await DataService.getSharedItem(shareId);
    if (!item) return NextResponse.json({ error: 'Shared item not found' }, { status: 404 });
    if (item.sharerId !== identity.userId && identity.role !== 'admin') {
      return NextResponse.json({ error: 'Only the sharer may withdraw a shared item' }, { status: 403 });
    }
    const withdrawn = await DataService.withdrawSharedItem(shareId, item.sharerId);
    return NextResponse.json({ item: withdrawn });
  } catch (error: unknown) {
    const authResponse = authorizationResponse(error);
    if (authResponse) return authResponse;
    console.error('Failed to withdraw share:', error);
    return NextResponse.json({ error: 'Unable to withdraw share' }, { status: 500 });
  }
}
