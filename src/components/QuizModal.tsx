'use client';

import React, { useState, useEffect } from 'react';
import { HelpCircle, CheckCircle2, XCircle, Sparkles, Send, Lightbulb, Loader2, AlertTriangle } from 'lucide-react';
import type { Lesson } from '@/lib/types';
import type { ServedBy } from '@/lib/ai-contracts';
import { ServedByChip } from '@/components/ServedByChip';

interface QuizModalProps {
  lesson: Lesson;
  studentId: string;
  onClose: () => void;
  onSubmitted?: () => void;
}

interface QuizData {
  concept: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  model?: string;
  servedBy?: ServedBy;
}

export function QuizModal({
  lesson,
  studentId,
  onClose,
  onSubmitted,
}: QuizModalProps) {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Live-authored quiz state (replaces the old hardcoded question banks).
  const [quizData, setQuizData] = useState<QuizData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    async function loadQuiz() {
      setIsLoading(true);
      setLoadError(null);
      try {
        const params = new URLSearchParams({
          lessonId: lesson.id,
          studentId,
        });
        const res = await fetch(`/api/quiz/generate?${params.toString()}`);
        if (!res.ok) {
          let errorMessage = `Quiz generation failed (${res.status})`;
          try {
            const errData = await res.json();
            if (errData?.error) errorMessage = String(errData.error);
          } catch {
            // Non-JSON error body — keep the generic status-bearing message.
          }
          throw new Error(errorMessage);
        }
        const data = await res.json();
        if (!cancelled) setQuizData(data.quiz as QuizData);
      } catch (error: unknown) {
        if (!cancelled) {
          setLoadError(
            error instanceof Error
              ? error.message
              : 'Could not generate quiz question',
          );
        }
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    }
    loadQuiz();
    return () => {
      cancelled = true;
    };
  }, [lesson.id, studentId]);

  const handleSubmit = async () => {
    if (selectedOption === null || !quizData) return;
    setIsSubmitting(true);
    setSubmitError(null);

    const isCorrect = selectedOption === quizData.correctIndex;

    try {
      const response = await fetch('/api/quiz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          studentId,
          lessonId: lesson.id,
          concept: quizData.concept,
          question: quizData.question,
          selectedOptionIndex: selectedOption,
          isCorrect,
          feedback: isCorrect
            ? 'Correct! Solid grasp of the underlying invariant.'
            : `Incorrect. ${quizData.explanation}`,
        }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(data?.error || `Quiz submission failed (${response.status})`);
      }

      setHasSubmitted(true);
      if (onSubmitted) onSubmitted();
    } catch (error: unknown) {
      console.error('Quiz submission error:', error);
      setSubmitError(
        error instanceof Error ? error.message : 'Could not record your answer',
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-marine-950/50 backdrop-blur-xs z-50 flex items-center justify-center p-4">
      <div className="bg-white border border-beacon-200 rounded-2xl max-w-lg w-full p-6 shadow-2xl animate-in fade-in">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <Lightbulb className="w-5 h-5 text-beacon-500" />
            <span className="chart-annotation text-beacon-700 font-semibold">
              Sounding the depths — mastery check
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-800 text-sm p-1 rounded-md"
          >
            ✕
          </button>
        </div>

        <h3 className="font-display text-lg font-semibold text-marine-900 mb-1">{lesson.title}</h3>

        {/* Loading state: quiz is being authored live by Gemini 3.7 Flash */}
        {isLoading && (
          <div className="flex items-center gap-2 text-marine-600 text-xs font-semibold py-8 justify-center">
            <Loader2 className="w-4 h-4 animate-spin text-beacon-500" />
            Authoring a fresh question from this lesson…
          </div>
        )}

        {/* Honest failure state: no canned fallback — surface the real error */}
        {!isLoading && loadError && (
          <div className="p-4 rounded-xl border border-rose-200 bg-rose-50 text-rose-900 text-xs my-4 leading-relaxed">
            <div className="font-extrabold mb-1 flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4" />
              Could not generate a live question
            </div>
            {loadError}
          </div>
        )}

        {!isLoading && !loadError && quizData && (
          <>
            <p className="text-xs text-marine-700 font-semibold mb-4 leading-relaxed flex items-start gap-1.5">
              <HelpCircle className="w-3.5 h-3.5 text-beacon-500 mt-0.5 shrink-0" />
              <span>{quizData.question}</span>
            </p>
            <ServedByChip servedBy={quizData.servedBy} className="mb-4" />

            {/* Options */}
            <div className="space-y-2.5 mb-4">
              {quizData.options.map((opt, i) => {
                const isSelected = selectedOption === i;
                const isCorrectOption = i === quizData.correctIndex;

                let optionStyle = 'border-beacon-100 bg-white text-marine-800 hover:border-beacon-300 hover:bg-beacon-50/50';
                if (hasSubmitted) {
                  if (isCorrectOption) {
                    optionStyle = 'border-emerald-400 bg-emerald-50 text-emerald-900 font-bold';
                  } else if (isSelected && !isCorrectOption) {
                    optionStyle = 'border-rose-300 bg-rose-50 text-rose-900 font-bold';
                  }
                } else if (isSelected) {
                  optionStyle = 'border-beacon-500 bg-beacon-50 text-beacon-900 font-bold ring-1 ring-beacon-300';
                }

                return (
                  <button
                    key={i}
                    disabled={hasSubmitted || isSubmitting}
                    onClick={() => setSelectedOption(i)}
                    className={`w-full p-3.5 rounded-xl border text-xs text-left transition flex items-center justify-between shadow-2xs ${optionStyle}`}
                  >
                    <span>{opt}</span>
                    {hasSubmitted && isCorrectOption && (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    )}
                    {hasSubmitted && isSelected && !isCorrectOption && (
                      <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Post-submission Feedback Box */}
            {hasSubmitted && (
              <div
                className={`p-4 rounded-xl border text-xs mb-4 leading-relaxed ${
                  selectedOption === quizData.correctIndex
                    ? 'bg-emerald-50 border-emerald-200 text-emerald-900 font-medium'
                    : 'bg-amber-50 border-amber-200 text-amber-900 font-medium'
                }`}
              >
                <div className="font-extrabold mb-1 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4" />
                  {selectedOption === quizData.correctIndex ? 'Mastery Verified!' : 'Weak Spot Identified'}
                </div>
                {quizData.explanation}
                {selectedOption !== quizData.correctIndex && (
                  <div className="text-[11px] text-amber-800 mt-2 font-semibold">
                    Socrates my Guide will light a proactive challenge on your dashboard to reinforce this concept.
                  </div>
                )}
              </div>
            )}
            {!hasSubmitted && submitError && (
              <div className="p-3 rounded-xl border border-rose-200 bg-rose-50 text-rose-900 text-xs mb-4">
                {submitError}
              </div>
            )}
          </>
        )}

        <div className="flex items-center justify-end space-x-2 pt-3 border-t border-beacon-100">
          {!hasSubmitted ? (
            <button
              onClick={handleSubmit}
              disabled={selectedOption === null || isSubmitting || isLoading || !quizData}
              className="px-5 py-2.5 bg-beacon-600 hover:bg-beacon-500 text-white text-xs font-bold rounded-full transition disabled:opacity-40 flex items-center gap-1.5 shadow-sm"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Submit Answer</span>
            </button>
          ) : (
            <button
              onClick={onClose}
              className="px-5 py-2.5 bg-marine-900 hover:bg-marine-800 text-white text-xs font-bold rounded-full transition"
            >
              Done
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
