import { describe, expect, test } from 'bun:test';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const read = (path: string) => readFileSync(join(root, path), 'utf8');

describe('Cloud Run container contract', () => {
  test('listens on port 8080 and probes the public health endpoint', () => {
    const dockerfile = read('Dockerfile');

    expect(dockerfile).toContain('ENV PORT=8080');
    expect(dockerfile).toContain('EXPOSE 8080');
    expect(dockerfile).toMatch(/HEALTHCHECK[\s\S]*127\.0\.0\.1:8080\/health\/live/);
    expect(dockerfile).toContain('USER node');
    expect(dockerfile).not.toContain('EXPOSE 3000');
  });

  test('does not copy local secrets or build output into the image context', () => {
    const dockerignore = read('.dockerignore');

    for (const entry of ['.env', '.env.*', 'secrets/', '.git/', 'node_modules/', '.next/']) {
      expect(dockerignore).toContain(entry);
    }
    expect(dockerignore).toContain('!.env.example');
  });
});

describe('Genkit presentation surface', () => {
  test('registers production flows without scaffold examples', () => {
    const devEntry = read('src/ai/dev.ts');

    for (const flow of [
      "import('./flows/ingestion')",
      "import('./flows/student-chat')",
      "import('./flows/multi-format')",
      "import('./flows/socratic-tutor')",
      "import('./flows/evaluate-socratic')",
      "import('./flows/generate-quiz')",
    ]) {
      expect(devEntry).toContain(flow);
    }
    expect(devEntry).not.toContain("import('./flows/example')");
    expect(devEntry).not.toContain("import('./flows/incident-summary')");
  });

  test('uses a static Firestore import in Socratic evaluation', () => {
    const evaluator = read('src/ai/flows/evaluate-socratic.ts');

    expect(evaluator).toContain("import { db } from '../../lib/firestore';");
    expect(evaluator).not.toContain("import('../../../src/lib/firestore')");
  });
});

describe('model fallback routing', () => {
  test('graph extraction routes generation through the model router', () => {
    const ingestion = read('src/ai/flows/ingestion.ts');

    expect(ingestion).toContain("import { generateWithFallback } from '../model-router';");
    // The graph stage must never call ai.generate directly — a retryable
    // Gemini outage would otherwise fail graph_write instead of degrading.
    expect(ingestion).toContain('const { output, model } = await generateWithFallback({');
    expect(ingestion).toContain('schema: GraphExtractionSchema');
  });

  test('RAG chat routes generation through the model router', () => {
    const chat = read('src/ai/flows/student-chat.ts');

    expect(chat).toContain("import { generateWithFallback } from '../model-router';");
    expect(chat).toContain('const { output, model } = await generateWithFallback({');
    expect(chat).not.toContain('Gemini returned no structured RAG answer');
  });

  test('model router treats retryable availability errors as fallback triggers', () => {
    const router = read('src/ai/model-router.ts');

    expect(router).toMatch(/RESOURCE_EXHAUSTED|UNAVAILABLE|high demand/);
    expect(router).toContain("import { sarvamGenerate, SARVAM_MODEL } from './sarvam';");
  });
});
