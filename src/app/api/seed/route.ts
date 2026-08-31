import { NextResponse } from 'next/server';
import { DataService } from '@/lib/data-service';
import { resolveRequestIdentity, requireAdmin, authorizationResponse } from '@/lib/request-identity';

export async function POST(req: Request) {
  try {
    const identity = resolveRequestIdentity(req);
    requireAdmin(identity);

    if (process.env.NODE_ENV === 'production' && process.env.ALLOW_PRODUCTION_SEED !== 'true') {
      return NextResponse.json(
        { error: 'Seeding is disabled in production. Set ALLOW_PRODUCTION_SEED=true to override.' },
        { status: 403 },
      );
    }

    // The programme corpus (courses, modules, lessons) is seeded via the
    // persona seeder from content/programme-manifest.yaml. This endpoint no
    // longer creates vestigial CS-850 courseware — it only reports the
    // current state of the corpus.
    const existingCourses = await DataService.getCourses();
    if (existingCourses.length > 0) {
      return NextResponse.json({
        message: 'Programme corpus already exists in Firestore. Use the persona seeder to manage per-student data.',
        courseCount: existingCourses.length,
        courses: existingCourses,
      });
    }

    return NextResponse.json({
      message: 'No courses found. Seed the programme corpus via the persona seeder (src/lib/persona-seeder.ts) from content/programme-manifest.yaml.',
      courseCount: 0,
    });
  } catch (error: unknown) {
    const authResponse = authorizationResponse(error);
    if (authResponse) return authResponse;
    console.error('Seed error:', error);
    return NextResponse.json({ error: 'Seed check failed' }, { status: 500 });
  }
}
