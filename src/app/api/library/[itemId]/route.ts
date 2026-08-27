import { NextResponse } from 'next/server';
import { DataService } from '@/lib/data-service';
import { resolveRequestIdentity, requireAdmin, authorizationResponse } from '@/lib/request-identity';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/** DELETE /api/library/[itemId] — admin-only catalog removal. */
export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ itemId: string }> },
) {
  try {
    requireAdmin(resolveRequestIdentity(req));
    const { itemId } = await params;
    const item = await DataService.getLibraryItem(itemId);
    if (!item) return NextResponse.json({ error: 'Library item not found' }, { status: 404 });
    await DataService.deleteLibraryItem(itemId);
    return NextResponse.json({ deleted: itemId });
  } catch (error: unknown) {
    const authResponse = authorizationResponse(error);
    if (authResponse) return authResponse;
    console.error('Failed to delete library item:', error);
    return NextResponse.json({ error: 'Unable to delete library item' }, { status: 500 });
  }
}
