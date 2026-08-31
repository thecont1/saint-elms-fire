import { NextResponse } from 'next/server';
import { z } from 'zod';
import { testFireModel } from '@/ai/model-router';
import { authorizationResponse, requireAdmin, resolveRequestIdentity } from '@/lib/request-identity';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const TestFireSchema = z.object({
  model: z.string().trim().min(1).max(200),
}).strict();

export async function POST(req: Request) {
  try {
    requireAdmin(resolveRequestIdentity(req));
    const { model } = TestFireSchema.parse(await req.json());
    const result = await testFireModel(model);
    return NextResponse.json({ ok: true, ...result });
  } catch (error: unknown) {
    const auth = authorizationResponse(error);
    if (auth) return auth;
    if (error instanceof z.ZodError || error instanceof SyntaxError) {
      return NextResponse.json({ error: 'A valid model id is required' }, { status: 400 });
    }
    return NextResponse.json(
      { ok: false, error: error instanceof Error ? error.message : 'Model test failed' },
      { status: 502 },
    );
  }
}
