// Entry point for the Genkit Developer UI.
// Next loads .env automatically; the standalone tsx process does not.
import nextEnv from '@next/env';

nextEnv.loadEnvConfig(process.cwd());

await Promise.all([
  import('./flows/ingestion'),
  import('./flows/guide-chat'),
  import('./flows/friend-chat'),
  import('./flows/philosopher-chat'),
  import('./flows/multi-format'),
  import('./flows/socratic-tutor'),
  import('./flows/evaluate-socratic'),
  import('./flows/generate-quiz'),
]);
