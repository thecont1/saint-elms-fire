import { NextResponse } from 'next/server';
import { DataService } from '@/lib/data-service';
import { validateLibraryItemInput } from '@/lib/library-catalog';
import { resolveRequestIdentity, requireAdmin, authorizationResponse } from '@/lib/request-identity';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/**
 * GET /api/library — list the university catalog.
 * Readable by any authenticated principal (students see recommended readings
 * resolved from it), but excerpt text is only returned to admins: excerpts are
 * licensed content that reaches students via ingestion, not raw listing.
 */
export async function GET(req: Request) {
  try {
    const identity = resolveRequestIdentity(req);
    const items = await DataService.getLibraryItems();
    const visible = identity.role === 'admin'
      ? items
      : items.map(({ excerpt: _excerpt, ...rest }) => rest);
    return NextResponse.json({ items: visible });
  } catch (error: unknown) {
    const authResponse = authorizationResponse(error);
    if (authResponse) return authResponse;
    console.error('Failed to list library items:', error);
    return NextResponse.json({ error: 'Unable to list library items' }, { status: 500 });
  }
}

/** POST /api/library — admin-only catalog CRUD (create). */
export async function POST(req: Request) {
  try {
    const identity = requireAdmin(resolveRequestIdentity(req));
    let body: unknown;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
    }
    let input;
    try {
      input = validateLibraryItemInput(body);
    } catch (validationError) {
      return NextResponse.json(
        { error: validationError instanceof Error ? validationError.message : 'Invalid library item' },
        { status: 400 },
      );
    }
    const item = await DataService.createLibraryItem(input, identity.userId);
    return NextResponse.json({ item }, { status: 201 });
  } catch (error: unknown) {
    const authResponse = authorizationResponse(error);
    if (authResponse) return authResponse;
    console.error('Failed to create library item:', error);
    return NextResponse.json({ error: 'Unable to create library item' }, { status: 500 });
  }
}
