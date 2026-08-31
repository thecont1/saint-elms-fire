import { genkit } from 'genkit';
import { googleAI } from '@genkit-ai/google-genai';

/**
 * Central Genkit instance for Saint Elms Fire.
 * Configured with Gemini 3.7 Flash model.
 */

const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY || '';

export const GEMINI_FLASH = 'gemini-3.7-flash';
export const GEMINI_FLASH_MODEL = googleAI.model(GEMINI_FLASH);
export const COURSEWARE_EMBEDDER = googleAI.embedder('gemini-embedding-001', {
  outputDimensionality: 768,
});

export const ai = genkit({
  plugins: [
    googleAI({
      apiKey: apiKey,
    }),
  ],
  model: GEMINI_FLASH_MODEL,
});
