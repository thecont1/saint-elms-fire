import { NextResponse } from 'next/server';
import { z } from 'zod';
import { modelRoutingStore } from '@/ai/model-routing-store';
import {
  ModelRoutingWriteSchema,
  globalCircuitBreakers,
  modelsForCapability,
} from '@/ai/model-routing';
import {
  authorizationResponse,
  requireAdmin,
  resolveRequestIdentity,
} from '@/lib/request-identity';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

function publicState(config: Awaited<ReturnType<typeof modelRoutingStore.get>>) {
  const routedModels = new Set([
    config.primary,
    config.fallback,
    ...Object.values(config.overrides).filter((value): value is string => Boolean(value)),
  ]);
  return {
    config,
    resolved: {
      chat: modelsForCapability(config, 'chat'),
      embed: modelsForCapability(config, 'embed'),
      tts: modelsForCapability(config, 'tts'),
    },
    breakers: globalCircuitBreakers.listStates(routedModels),
  };
}

/** Any authenticated principal may inspect current routing and breaker state. */
export async function GET(req: Request) {
  try {
    resolveRequestIdentity(req);
    return NextResponse.json(publicState(await modelRoutingStore.get()));
  } catch (error: unknown) {
    const auth = authorizationResponse(error);
    if (auth) return auth;
    console.error('model_routing_get_failed', error instanceof Error ? error.name : 'unknown');
    return NextResponse.json({ error: 'Unable to read model routing' }, { status: 500 });
  }
}

/** Only an authenticated admin may replace runtime routing config. */
export async function PUT(req: Request) {
  try {
    const identity = requireAdmin(resolveRequestIdentity(req));
    const body = ModelRoutingWriteSchema.parse(await req.json());
    const config = await modelRoutingStore.put(body, identity.userId);
    return NextResponse.json(publicState(config));
  } catch (error: unknown) {
    const auth = authorizationResponse(error);
    if (auth) return auth;
    if (error instanceof z.ZodError || error instanceof SyntaxError) {
      return NextResponse.json(
        { error: 'Invalid model routing configuration' },
        { status: 400 },
      );
    }
    console.error('model_routing_put_failed', error instanceof Error ? error.name : 'unknown');
    return NextResponse.json({ error: 'Unable to update model routing' }, { status: 500 });
  }
}
