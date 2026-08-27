import { NextResponse } from 'next/server';
import { DataService } from '@/lib/data-service';
import { runPeerAcceptance, validateAcceptance } from '@/lib/peer-acceptance';
import { chunkMarkdown } from '@/lib/courseware-rag';
import { ai, COURSEWARE_EMBEDDER } from '@/ai/genkit';
import { generateWithFallback } from '@/ai/model-router';
import { z } from 'genkit';
import { resolveRequestIdentity, authorizationResponse } from '@/lib/request-identity';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const PeerGraphSchema = z.object({
  nodes: z.array(z.object({
    concept: z.string().min(1),
    category: z.enum(['core', 'technique', 'architecture', 'formula', 'tradeoff', 'concept']),
    summary: z.string().min(1),
    importance: z.number().int().min(1).max(5),
  })),
  edges: z.array(z.object({
    sourceConcept: z.string().min(1),
    targetConcept: z.string().min(1),
    relationshipType: z.enum(['prerequisite', 'builds_upon', 'related_to', 'contrasts_with', 'part_of']),
    description: z.string().min(1),
  })),
});

/**
 * POST /api/shares/[shareId]/decision — { decision: 'accept' | 'dismiss' | 'undo' }
 * Accept ingests into the CALLER's own Second Brain only. Undo removes the
 * caller's copies idempotently. The sharer's brain is never touched.
 */
export async function POST(
  req: Request,
  { params }: { params: Promise<{ shareId: string }> },
) {
  try {
    const identity = resolveRequestIdentity(req);
    const { shareId } = await params;
    const body = await req.json().catch(() => ({}));
    const decision = body?.decision;
    if (!['accept', 'dismiss', 'undo'].includes(decision)) {
      return NextResponse.json({ error: 'decision must be accept, dismiss, or undo' }, { status: 400 });
    }

    const share = await DataService.getSharedItem(shareId);
    if (!share) return NextResponse.json({ error: 'Shared item not found' }, { status: 404 });

    if (decision === 'dismiss') {
      await DataService.recordShareDecision({ sharedItemId: shareId, studentId: identity.userId, decision: 'dismissed' });
      return NextResponse.json({ decision: 'dismissed' });
    }

    if (decision === 'undo') {
      const removed = await DataService.removePeerIngestion(shareId, identity.userId);
      await DataService.recordShareDecision({ sharedItemId: shareId, studentId: identity.userId, decision: 'dismissed' });
      return NextResponse.json({ decision: 'undone', ...removed });
    }

    // accept
    try {
      validateAcceptance(share, identity.userId);
    } catch (validationError) {
      return NextResponse.json(
        { error: validationError instanceof Error ? validationError.message : 'Cannot accept item' },
        { status: 403 },
      );
    }

    const result = await runPeerAcceptance(
      { share, acceptorId: identity.userId },
      {
        chunkMarkdown,
        embedText: async (text) => {
          const response = await ai.embed({
            embedder: COURSEWARE_EMBEDDER,
            content: text,
            options: { taskType: 'RETRIEVAL_DOCUMENT' },
          });
          const embedding = response[0]?.embedding ?? [];
          if (!embedding.length) throw new Error('Empty embedding');
          return embedding;
        },
        extractGraph: async (markdown) => {
          const { output } = await generateWithFallback({
            system: 'You extract concise knowledge graphs from peer-shared study notes. Use only facts present in the text.',
            prompt: `Extract a small knowledge graph (1-4 nodes) from this shared note:\n\n${markdown}`,
            schema: PeerGraphSchema,
          });
          if (!output) throw new Error('graph extraction returned no output');
          return PeerGraphSchema.parse(output);
        },
        writePeerChunks: (chunks) => DataService.writePeerChunks(chunks),
        writePeerGraph: (nodes, edges) => DataService.writePeerGraph(nodes, edges),
      },
    );

    await DataService.recordShareDecision({ sharedItemId: shareId, studentId: identity.userId, decision: 'accepted' });
    return NextResponse.json({ decision: 'accepted', ...result });
  } catch (error: unknown) {
    const authResponse = authorizationResponse(error);
    if (authResponse) return authResponse;
    console.error('Failed to process share decision:', error);
    return NextResponse.json({ error: 'Unable to process share decision' }, { status: 500 });
  }
}
