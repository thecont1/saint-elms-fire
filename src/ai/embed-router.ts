import { ai } from './genkit';
import { googleAI } from '@genkit-ai/google-genai';
import { modelRoutingStore } from './model-routing-store';
import { globalCircuitBreakers, modelsForCapability, routeModelCall, type ServedBy } from './model-routing';

export async function embedWithRouting(input: {
  content: string;
  options?: Record<string, unknown>;
}): Promise<{ embedding: number[]; servedBy: ServedBy }> {
  const routing = await modelRoutingStore.get();
  const models = modelsForCapability(routing, 'embed');
  // No cross-provider embedding fallback exists today: changing vector models
  // also changes index compatibility. The breaker still protects a sick model.
  const result = await routeModelCall({
    primary: models.primary,
    fallback: models.fallback,
    maxRetries: 2,
    breakers: globalCircuitBreakers,
    call: async (targetModel) => {
      const response = await ai.embed({
        embedder: googleAI.embedder(targetModel as Parameters<typeof googleAI.embedder>[0], {
          outputDimensionality: 768,
        }),
        content: input.content,
        options: input.options,
      } as any);
      const embedding = response[0]?.embedding;
      if (!embedding?.length) throw new Error('UNAVAILABLE: embedding model returned no vector');
      return embedding;
    },
  });
  return { embedding: result.value, servedBy: result.servedBy };
}
