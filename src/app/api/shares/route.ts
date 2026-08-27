import { NextResponse } from 'next/server';
import { DataService } from '@/lib/data-service';
import {
  validateSharedItemInput,
  ShareLimitError,
} from '@/lib/shared-items';
import { resolveRequestIdentity, authorizationResponse } from '@/lib/request-identity';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/**
 * Cohort resolution: the demo deployment has a single cohort. When user
 * profiles gain real cohort membership, this becomes a profile lookup —
 * the API contract (cohort-scoped visibility) stays the same.
 */
const DEFAULT_COHORT = 'cohort-all';

/** GET /api/shares — peers see active items in their cohort. */
export async function GET(req: Request) {
  try {
    resolveRequestIdentity(req);
    const items = await DataService.getActiveSharedItems(DEFAULT_COHORT);
    return NextResponse.json({ items });
  } catch (error: unknown) {
    const authResponse = authorizationResponse(error);
    if (authResponse) return authResponse;
    console.error('Failed to list shares:', error);
    return NextResponse.json({ error: 'Unable to list shares' }, { status: 500 });
  }
}

/** POST /api/shares — share a note/link from one's own released lesson. */
export async function POST(req: Request) {
  try {
    const identity = resolveRequestIdentity(req);
    const body = await req.json();

    let input;
    try {
      input = validateSharedItemInput(body);
    } catch (validationError) {
      return NextResponse.json(
        { error: validationError instanceof Error ? validationError.message : 'Invalid shared item' },
        { status: 400 },
      );
    }

    // Shares referencing a lesson must reference a lesson released to the sharer.
    if (input.sourceLessonId) {
      const released = await DataService.isLessonReleasedToStudent(input.sourceLessonId, identity.userId);
      if (!released) {
        return NextResponse.json(
          { error: 'Cannot share material from an unreleased lesson' },
          { status: 403 },
        );
      }
    }

    const since = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
    const item = await DataService.createSharedItemWithRateLimit(
      {
        ...input,
        sharerId: identity.userId,
        cohortId: DEFAULT_COHORT,
      },
      since,
    );
    return NextResponse.json({ item }, { status: 201 });
  } catch (error: unknown) {
    const authResponse = authorizationResponse(error);
    if (authResponse) return authResponse;
    if (error instanceof ShareLimitError) {
      return NextResponse.json({ error: error.message }, { status: 429 });
    }
    console.error('Failed to create share:', error);
    return NextResponse.json({ error: 'Unable to create share' }, { status: 500 });
  }
}
