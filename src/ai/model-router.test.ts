// @ts-nocheck -- Bun exposes bun:test at runtime.
import { describe, expect, test } from 'bun:test';
import { extractJsonObject } from './model-router';

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
