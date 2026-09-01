#!/usr/bin/env bun
import { createHash, randomUUID } from 'node:crypto';
import { resolveProdContext, fetchJson, parseBaseUrlArg } from './lib/prod-context';

interface SmokeQuestion {
  question: string;
  expectedPattern: RegExp;
}

interface ChatResponse {
  answer?: string;
  isGrounded?: boolean;
  groundedSources?: Array<{ lessonId?: string; lessonTitle?: string }>;
  retrievedChunkCount?: number;
  error?: string;
}

const PERSONAS: Record<string, string> = {
  ananya: 'student-ananya',
  brinda: 'student-brinda',
  chetna: 'student-chetna',
};
const SHARED_QUESTIONS: SmokeQuestion[] = [
  { question: 'resonance in a driven oscillator', expectedPattern: /resonan|oscillat|driv/i },
  { question: 'The Harmonic Oscillator', expectedPattern: /harmonic|oscillat/i },
  { question: 'What does the chain rule say?', expectedPattern: /chain|derivative|differentiat/i },
  { question: 'What is simple harmonic motion?', expectedPattern: /harmonic|restor|oscillat/i },
  { question: 'How is energy conserved in mechanics?', expectedPattern: /energy|conserv/i },
];
const CHETNA_ONLY: SmokeQuestion[] = [
  { question: 'What is Bragg diffraction?', expectedPattern: /bragg|diffraction|lattice/i },
  { question: 'Explain the Hall effect.', expectedPattern: /hall|magnetic|carrier/i },
];

function arg(name: string): string | undefined {
  const prefix = `--${name}=`;
  return process.argv.slice(2).find((value) => value.startsWith(prefix))?.slice(prefix.length);
}

const studentArg = arg('student') ?? 'chetna';
const studentId = PERSONAS[studentArg] ?? studentArg;
const argv = process.argv.slice(2);

let baseUrlArg: string | undefined;
try {
  baseUrlArg = parseBaseUrlArg(argv);
} catch (error) {
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(2);
}

const ctx = resolveProdContext(baseUrlArg);
const questions = studentArg === 'chetna' ? [...SHARED_QUESTIONS, ...CHETNA_ONLY] : SHARED_QUESTIONS.slice(0, 5);
const results: Array<{ question: string; pass: boolean; detail: string }> = [];

console.log(`RAG smoke test: ${studentArg} (${studentId})`);
console.log(`Target: ${ctx.baseUrl}`);

for (const item of questions) {
  const messageId = createHash('sha256').update(`${studentId}\0${item.question}\0${randomUUID()}`).digest('hex');
  try {
    const { status, body } = await fetchJson<ChatResponse>(
      `${ctx.baseUrl}/api/chat`,
      {
        method: 'POST',
        headers: ctx.headers(studentId, 'student'),
        body: JSON.stringify({
          messageId,
          persona: 'guide',
          studentId,
          question: item.question,
        }),
      },
      180_000,
    );
    const answer = body.answer?.trim() ?? '';
    const pass = status === 200
      && body.isGrounded === true
      && (body.groundedSources?.length ?? 0) > 0
      && (body.retrievedChunkCount ?? 0) > 0
      && item.expectedPattern.test(answer);
    const detail = `HTTP ${status}; grounded=${body.isGrounded}; chunks=${body.retrievedChunkCount ?? 0}; sources=${body.groundedSources?.length ?? 0}`;
    results.push({ question: item.question, pass, detail });
    console.log(`${pass ? 'PASS' : 'FAIL'}  ${item.question}\n      ${detail}${pass ? '' : `; answer=${answer.slice(0, 180) || body.error || 'empty'}`}`);
  } catch (error) {
    const detail = error instanceof Error ? error.message : String(error);
    results.push({ question: item.question, pass: false, detail });
    console.log(`FAIL  ${item.question}\n      ${detail}`);
  }
}

const failed = results.filter((result) => !result.pass);
console.log(`\nRAG smoke test: ${results.length - failed.length}/${results.length} passed.`);
if (failed.length > 0) process.exit(1);
