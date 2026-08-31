// @ts-nocheck -- Bun exposes bun:test at runtime; the app build has no Bun types.
import { describe, expect, test } from 'bun:test';
import {
  GenerateQuizInputSchema,
  GenerateQuizOutputSchema,
} from './generate-quiz';

const validQuiz = {
  lessonId: 'lesson-1',
  concept: 'Raft quorum',
  question: 'How many nodes form a quorum in a five-node cluster?',
  options: ['Two', 'Three', 'Four', 'Five'],
  correctIndex: 1,
  explanation: 'A strict majority of five is three.',
  model: 'gemini-3.7-flash',
  servedBy: { model: 'gemini-3.7-flash', role: 'primary', attemptCount: 1 },
};

describe('GenerateQuizInputSchema', () => {
  test('accepts a released lesson request', () => {
    expect(
      GenerateQuizInputSchema.safeParse({
        lessonId: 'lesson-1',
        studentId: 'student-alex',
        difficulty: 'advanced',
      }).success,
    ).toBe(true);
  });

  test('rejects blank identifiers', () => {
    expect(
      GenerateQuizInputSchema.safeParse({ lessonId: '', studentId: 'student-alex' })
        .success,
    ).toBe(false);
    expect(
      GenerateQuizInputSchema.safeParse({ lessonId: 'lesson-1', studentId: '  ' })
        .success,
    ).toBe(false);
  });
});

describe('GenerateQuizOutputSchema', () => {
  test('accepts a well-formed four-option quiz', () => {
    expect(GenerateQuizOutputSchema.safeParse(validQuiz).success).toBe(true);
  });

  test('requires exactly four options', () => {
    expect(
      GenerateQuizOutputSchema.safeParse({
        ...validQuiz,
        options: validQuiz.options.slice(0, 3),
      }).success,
    ).toBe(false);
    expect(
      GenerateQuizOutputSchema.safeParse({
        ...validQuiz,
        options: [...validQuiz.options, 'Six'],
      }).success,
    ).toBe(false);
  });

  test('rejects a correctIndex outside the options array', () => {
    expect(
      GenerateQuizOutputSchema.safeParse({
        ...validQuiz,
        correctIndex: validQuiz.options.length,
      }).success,
    ).toBe(false);
  });

  test('rejects blank generated content', () => {
    expect(
      GenerateQuizOutputSchema.safeParse({ ...validQuiz, question: '  ' }).success,
    ).toBe(false);
  });
});
