// @ts-nocheck -- Bun exposes bun:test at runtime.
import { describe, expect, test } from 'bun:test';
import {
  extractJsonObject,
  resolveGeminiModel,
  GEMINI_MODELS,
  ROUTABLE_GEMINI_MODELS,
  markModelActivityStart,
  markModelActivityEnd,
  getActiveModelActivity,
} from './model-router';

describe('extractJsonObject', () => {
  test('QA regression: braces inside a string value are content, not delimiters', () => {
    // The exact QA scenario: the answer string contains literal braces.
    const text = '{"answer":"A Raft cluster uses { term: n } voting to elect a leader."}';
    const parsed = extractJsonObject(text) as { answer: string };
    expect(parsed).not.toBeNull();
    expect(parsed.answer).toBe('A Raft cluster uses { term: n } voting to elect a leader.');
  });

  test('escaped quotes inside strings do not close the string', () => {
    const text = '{"answer":"the \\"commit rule\\" and { nested: { deep: true } } maps"}';
    const parsed = extractJsonObject(text) as { answer: string };
    expect(parsed).not.toBeNull();
    expect(parsed.answer).toContain('{ nested: { deep: true } }');
    expect((parsed.answer.match(/"/g) ?? []).length).toBe(2); // the unescaped quotes
  });

  test('nested JSON objects still balance correctly', () => {
    const text = 'prose before {"a":{"b":[1,{"c":2}]},"d":3} trailing prose';
    const parsed = extractJsonObject(text) as { d: number };
    expect(parsed).not.toBeNull();
    expect(parsed.a.b[1].c).toBe(2);
    expect(parsed.d).toBe(3);
  });

  test('braces in prose after the object do not break extraction', () => {
    const text = '{"answer":"ok"} and then unrelated { broken: prose';
    const parsed = extractJsonObject(text) as { answer: string };
    expect(parsed?.answer).toBe('ok');
  });

  test('unterminated object or missing braces return null', () => {
    expect(extractJsonObject('{"answer":"unclosed { brace')).toBeNull();
    expect(extractJsonObject('no json here')).toBeNull();
    expect(extractJsonObject('')).toBeNull();
  });

  test('unbalanced braces inside an unclosed string return null (malformed JSON)', () => {
    // String never closes -> depth never returns to 0 -> null. Correct: the
    // input is genuinely malformed and must not parse.
    expect(extractJsonObject('{"answer":"never closed')).toBeNull();
  });
});

describe('Gemini model selection (dropdown)', () => {
  test('GEMINI_MODELS exposes 3.7, 3.6, and 3.5 Flash with matching labels and IDs', () => {
    expect(Object.keys(GEMINI_MODELS).sort()).toEqual(
      ['gemini-3.5-flash', 'gemini-3.6-flash', 'gemini-3.7-flash'].sort(),
    );
    for (const entry of Object.values(GEMINI_MODELS)) {
      expect(entry.label).toBeTruthy();
      expect(entry.modelId).toMatch(/^gemini-3\.[5-7]-flash$/);
    }
  });

  test('ROUTABLE_GEMINI_MODELS lists every dropdown model ID', () => {
    expect(ROUTABLE_GEMINI_MODELS).toContain('gemini-3.7-flash');
    expect(ROUTABLE_GEMINI_MODELS).toContain('gemini-3.6-flash');
    expect(ROUTABLE_GEMINI_MODELS).toContain('gemini-3.5-flash');
    expect(ROUTABLE_GEMINI_MODELS.length).toBe(3);
  });
});

describe('resolveGeminiModel', () => {
  test('returns the canonical ID for each valid dropdown selection', () => {
    expect(resolveGeminiModel('gemini-3.7-flash')).toBe('gemini-3.7-flash');
    expect(resolveGeminiModel('gemini-3.6-flash')).toBe('gemini-3.6-flash');
    expect(resolveGeminiModel('gemini-3.5-flash')).toBe('gemini-3.5-flash');
  });

  test('falls back to the preferred 3.7 Flash model for unknown values', () => {
    expect(resolveGeminiModel('gemini-9.9-flash')).toBe('gemini-3.7-flash');
    expect(resolveGeminiModel('gpt-4o')).toBe('gemini-3.7-flash');
    expect(resolveGeminiModel('')).toBe('gemini-3.7-flash');
  });

  test('falls back to the preferred model for null/undefined (tampered/missing query params)', () => {
    expect(resolveGeminiModel(undefined)).toBe('gemini-3.7-flash');
    expect(resolveGeminiModel(null)).toBe('gemini-3.7-flash');
  });
});

describe('model activity tracking (per-selected-model)', () => {
  test('marks the chosen Gemini model as in-flight while serving', () => {
    const before = getActiveModelActivity();
    expect(before['gemini-3.6-flash']?.inFlight ?? false).toBe(false);

    markModelActivityStart('gemini-3.6-flash');
    const during = getActiveModelActivity();
    expect(during['gemini-3.6-flash'].inFlight).toBe(true);
    expect(during['gemini-3.6-flash'].recent).toBe(true);

    markModelActivityEnd('gemini-3.6-flash');
    const after = getActiveModelActivity();
    expect(after['gemini-3.6-flash'].inFlight).toBe(false);
    expect(after['gemini-3.6-flash'].recent).toBe(true);
  });

  test('tracks each selected model independently', () => {
    markModelActivityStart('gemini-3.7-flash');
    markModelActivityStart('gemini-3.5-flash');
    const state = getActiveModelActivity();
    expect(state['gemini-3.7-flash'].inFlight).toBe(true);
    expect(state['gemini-3.5-flash'].inFlight).toBe(true);

    markModelActivityEnd('gemini-3.7-flash');
    const after = getActiveModelActivity();
    expect(after['gemini-3.7-flash'].inFlight).toBe(false);
    expect(after['gemini-3.5-flash'].inFlight).toBe(true);

    markModelActivityEnd('gemini-3.5-flash');
  });

  test('lazily tracks an unknown model without crashing', () => {
    markModelActivityStart('some-future-model');
    const state = getActiveModelActivity();
    expect(state['some-future-model'].inFlight).toBe(true);
    markModelActivityEnd('some-future-model');
    expect(getActiveModelActivity()['some-future-model'].inFlight).toBe(false);
  });
});
