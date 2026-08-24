import { z } from 'genkit';
import { ai } from '../genkit';
import { db, FieldValue } from '../../lib/firestore';

/**
 * Example flow that exercises both live services:
 *   Firestore read -> Gemini 3.7 Flash generate -> Firestore write.
 *
 * Run the Genkit dev UI with:  bunx genkit start -- bun run src/ai/dev.ts
 */

const IncidentInput = z.object({
  incidentId: z.string().describe('Firestore document ID in `incidents`'),
});

const IncidentOutput = z.object({
  headline: z.string(),
  summary: z.string(),
  severity: z.enum(['low', 'moderate', 'high', 'critical']),
});

export const incidentSummaryFlow = ai.defineFlow(
  {
    name: 'incidentSummary',
    inputSchema: IncidentInput,
    outputSchema: IncidentOutput,
  },
  async ({ incidentId }) => {
    const ref = db.collection('incidents').doc(incidentId);
    const snap = await ref.get();

    if (!snap.exists) {
      throw new Error(`Incident ${incidentId} not found`);
    }

    const { output } = await ai.generate({
      prompt: [
        {
          text:
            'Summarise this fire incident record for an operations dashboard. ' +
            'Be factual and terse; do not speculate beyond the data.\n\n' +
            JSON.stringify(snap.data(), null, 2),
        },
      ],
      output: { schema: IncidentOutput },
      config: { temperature: 0.2 },
    });

    if (!output) {
      throw new Error('Model returned no structured output');
    }

    await ref.set(
      { aiSummary: output, aiSummaryUpdatedAt: FieldValue.serverTimestamp() },
      { merge: true },
    );

    return output;
  },
);
