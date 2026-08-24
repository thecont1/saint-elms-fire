import { ai } from '../genkit';
import { z } from 'genkit';

const ExampleFlowInputSchema = z.object({
  prompt: z.string().describe('The prompt to send to the model.'),
});

const ExampleFlowOutputSchema = z.object({
  text: z.string().describe('The generated text response.'),
});

export const exampleFlow = ai.defineFlow(
  {
    name: 'exampleFlow',
    inputSchema: ExampleFlowInputSchema,
    outputSchema: ExampleFlowOutputSchema,
  },
  async ({ prompt }) => {
    const { text } = await ai.generate({
      prompt,
    });
    return { text };
  }
);
