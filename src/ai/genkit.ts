import { genkit } from 'genkit';
import { googleAI } from '@genkit-ai/google-genai';

/**
 * Central Genkit instance for Saint Elms Fire.
 *
 * Auth: the googleAI plugin reads GEMINI_API_KEY (or GOOGLE_API_KEY) from the
 * environment. It does NOT use Application Default Credentials — ADC is only
 * used by the Firestore client in src/lib/firestore.ts.
 */

if (!process.env.GEMINI_API_KEY) {
  throw new Error(
    'GEMINI_API_KEY is not set. Add it to .env (see .env.example).',
  );
}

export const GEMINI_FLASH = 'gemini-3.7-flash';

export const ai = genkit({
  plugins: [
    googleAI({
      apiKey: process.env.GEMINI_API_KEY,
    }),
  ],
  // Default model for every ai.generate() call that doesn't override it.
  model: googleAI.model(GEMINI_FLASH),
});
