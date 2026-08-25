// Entry point for the Genkit Developer UI.
// Next loads .env automatically; the standalone tsx process does not.
import nextEnv from '@next/env';

nextEnv.loadEnvConfig(process.cwd());

await Promise.all([
  import('./flows/ingestion'),
  import('./flows/student-chat'),
  import('./flows/multi-format'),
  import('./flows/socratic-tutor'),
  import('./flows/evaluate-socratic'),
  import('./flows/generate-quiz'),
]);
