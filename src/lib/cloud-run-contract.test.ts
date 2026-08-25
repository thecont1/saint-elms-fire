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
