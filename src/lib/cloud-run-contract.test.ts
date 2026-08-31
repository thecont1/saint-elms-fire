import { describe, expect, test } from 'bun:test';
import { readFileSync, statSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { join } from 'node:path';

const root = process.cwd();
const read = (path: string) => readFileSync(join(root, path), 'utf8');

/** Run the deploy script in --dry-run with a controlled environment. */
function runDeployScript(env: Record<string, string | undefined>) {
  const scriptEnv: Record<string, string> = { ...(process.env as Record<string, string>) };
  delete scriptEnv.AUTH_MODE;
  delete scriptEnv.ENVIRONMENT;
  for (const [key, value] of Object.entries(env)) {
    if (value === undefined) delete scriptEnv[key];
    else scriptEnv[key] = value;
  }
  return spawnSync('bash', ['scripts/deploy-cloud-run.sh', '--dry-run'], {
    cwd: root,
    env: scriptEnv as NodeJS.ProcessEnv,
    encoding: 'utf8',
    timeout: 30_000,
  });
}

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
      "import('./flows/guide-chat')",
      "import('./flows/friend-chat')",
      "import('./flows/philosopher-chat')",
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
    expect(ingestion).toContain('const { output, servedBy } = await generateWithFallback({');
    expect(ingestion).toContain('schema: GraphExtractionSchema');
  });

  test('RAG chat routes generation through the model router', () => {
    const chat = read('src/ai/flows/guide-chat.ts');

    expect(chat).toContain("import { generateWithFallback } from '../model-router';");
    expect(chat).toContain('const { output, servedBy } = await generateWithFallback({');
    expect(chat).toContain('servedBy,');
    expect(chat).toContain("throw new Error('model returned no structured RAG answer')");
  });

  test('model router treats retryable availability errors as fallback triggers', () => {
    const router = read('src/ai/model-router.ts');

    expect(router).toMatch(/RESOURCE_EXHAUSTED|UNAVAILABLE|high demand/);
    expect(router).toContain("import { sarvamGenerate, SARVAM_MODEL } from './sarvam';");
  });
});

describe('Cloud Run runtime contract (Phase 8)', () => {
  const SCRIPT = 'scripts/deploy-cloud-run.sh';

  test('deploy script pins the in-process-queue runtime flags', () => {
    const script = read(SCRIPT);

    // The contract pair: warm container AND live CPU between requests.
    expect(script).toContain('--min-instances=1');
    expect(script).toContain('--no-cpu-throttling');
    // Single-writer semantics for the in-process job queue.
    expect(script).toContain('--max-instances=1');
    // The service stays private.
    expect(script).toContain('--no-allow-unauthenticated');
  });

  test('deploy script is executable', () => {
    const mode = statSync(join(root, SCRIPT)).mode;
    expect(mode & 0o111).not.toBe(0);
  });

  test('deploy script binds the proxy secret from Secret Manager', () => {
    const script = read(SCRIPT);

    expect(script).toContain('AUTH_PROXY_SECRET=');
    expect(script).toContain('saint-elms-auth-proxy-secret');
    // Pre-flight: refuse to deploy if the secret does not exist.
    expect(script).toContain('gcloud secrets describe');
  });

  test('production deploy fails closed when AUTH_MODE is not trusted-proxy', () => {
    const result = runDeployScript({ ENVIRONMENT: 'production' });

    expect(result.status).not.toBe(0);
    expect(result.stderr).toContain('trusted-proxy');
  });

  test('production deploy warns and refuses AUTH_MODE=demo', () => {
    const result = runDeployScript({ ENVIRONMENT: 'production', AUTH_MODE: 'demo' });

    expect(result.status).not.toBe(0);
    expect(result.stderr).toContain('AUTH_MODE=demo detected in production context');
  });

  test('trusted-proxy dry-run echoes the full contract deploy command', () => {
    const result = runDeployScript({ ENVIRONMENT: 'production', AUTH_MODE: 'trusted-proxy' });

    expect(result.status).toBe(0);
    const out = result.stdout;
    expect(out).toContain('gcloud run deploy');
    expect(out).toContain('--min-instances=1');
    expect(out).toContain('--max-instances=1');
    expect(out).toContain('--no-cpu-throttling');
    expect(out).toContain('AUTH_PROXY_SECRET=saint-elms-auth-proxy-secret:');
    expect(out).toContain('AUTH_MODE=trusted-proxy');
    expect(out).toContain('--no-allow-unauthenticated');
  });

  test('documentation warns that omitting --no-cpu-throttling hangs background jobs', () => {
    const phase3 = read('docs/PHASE3.md');
    expect(phase3).toContain('--no-cpu-throttling');
    expect(phase3).toContain('--min-instances=1');
    expect(phase3).toMatch(/background.*(?:hang|starv|pending)/is);

    const setup = read('SETUP.md');
    expect(setup).toContain('--no-cpu-throttling');
    expect(setup).toMatch(/background.*(?:hang|starv|pending)/is);
  });
});
