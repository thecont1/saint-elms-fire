import { NextResponse } from 'next/server';
import { generateQuizFlow } from '@/ai/flows/generate-quiz';

// Uses the Firestore client + Google AI SDK, neither of which runs on the edge.
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

function publicGenerationError(error: unknown): string {
  const message = error instanceof Error ? error.message : String(error);
  if (/resource_exhausted|429|quota|credits|billing/i.test(message)) {
    return 'Gemini quota or billing is unavailable';
  }
  if (/unauthenticated|unauthorized|permission|credential|api key|403|401/i.test(message)) {
    return 'Gemini authentication or permission was denied';
  }
  return 'Live quiz generation failed';
}

/**
 * GET /api/quiz/generate?lessonId=...&studentId=...&difficulty=...
 *
 * Authors a fresh quiz question by round-tripping the lesson through Gemini
 * 3.7 Flash. Release-gated: a 403 is returned if the lesson is not unlocked
 * for the student. On generation failure the error surfaces (no silent canned
 * content) so callers can tell live output from a dead dependency.
 */
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const lessonId = searchParams.get('lessonId');
  const studentId = searchParams.get('studentId');
  const difficultyParam = searchParams.get('difficulty');

  if (!lessonId) {
    return NextResponse.json(
      { error: 'lessonId query parameter is required' },
      { status: 400 },
    );
  }

  if (!studentId) {
    return NextResponse.json(
      { error: 'studentId query parameter is required' },
      { status: 400 },
    );
  }

  const DIFFICULTIES = ['foundational', 'intermediate', 'advanced'] as const;
  const difficulty = DIFFICULTIES.find((value) => value === difficultyParam);
  if (difficultyParam && !difficulty) {
    return NextResponse.json(
      { error: 'difficulty must be foundational, intermediate, or advanced' },
      { status: 400 },
    );
  }

  try {
    const quiz = await generateQuizFlow({ lessonId, studentId, difficulty });
    return NextResponse.json({ quiz });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Quiz generation failed';
    // Release-gate denials map to 403; missing lesson to 404; everything else 502
    // (the upstream model/data dependency failed — an honest, visible failure).
    // Only our flow's own anchored error strings map to 403/404, and client
    // messages are fixed — never raw error text or lesson titles.
    const status = /^Access Denied:/i.test(message)
      ? 403
      : /^Lesson with id ".+" not found$/.test(message)
        ? 404
        : 502;
    console.error('Quiz generation error:', error);
    return NextResponse.json(
      {
        error:
          status === 403
            ? 'This lesson has not been released to your Second Brain yet.'
            : status === 404
              ? 'Lesson not found.'
              : publicGenerationError(error),
      },
      { status },
    );
  }
}
