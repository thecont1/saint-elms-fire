'use client';

import React, { useState } from 'react';
import { HelpCircle, CheckCircle2, XCircle, Sparkles, Send, ArrowRight, Lightbulb } from 'lucide-react';
import type { Lesson } from '@/lib/types';

interface QuizModalProps {
  lesson: Lesson;
  studentId: string;
  onClose: () => void;
  onSubmitted?: () => void;
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

  const isRaftLesson = lesson.title.toLowerCase().includes('raft') || lesson.title.toLowerCase().includes('consensus');
  const isVectorLesson = lesson.title.toLowerCase().includes('vector') || lesson.title.toLowerCase().includes('hnsw');

  const quizData = isRaftLesson
    ? {
        concept: 'Raft Consensus Quorum',
        question: 'In a 5-node Raft cluster, what is the minimum quorum required to safely commit a log entry?',
        options: [
          '2 nodes (Any active pair)',
          '3 nodes (Strict majority N/2 + 1)',
          '4 nodes (Supermajority)',
          '5 nodes (All nodes must acknowledge)',
        ],
        correctIndex: 1,
        explanation: 'Raft requires a strict majority (3 out of 5) to guarantee that any two quorums overlap on at least one node containing the latest committed log.',
      }
    : isVectorLesson
    ? {
        concept: 'HNSW Graph Routing',
        question: 'What is the primary role of the upper layers in an HNSW vector index?',
        options: [
          'Store compressed quantized centroids only',
          'Provide long-range skip connections for express greedy routing',
          'Enforce strict BFT consensus across replicas',
          'Perform exhaustive kNN search over all vectors',
        ],
        correctIndex: 1,
        explanation: 'Upper layers in HNSW contain sparse nodes with long skip links, enabling logarithmic search scaling before descending to Layer 0.',
      }
    : {
        concept: 'Durable Workflows',
        question: 'How do durable execution workflows handle failure recovery without re-executing previous LLM calls?',
        options: [
          'By discarding previous state and starting fresh',
          'By deterministic event replay using cached step checkpoints',
          'By doubling the prompt temperature on retry',
          'By routing requests to a different LLM provider',
        ],
        correctIndex: 1,
        explanation: 'Durable execution caches outputs at each checkpoint and deterministically replays past step results on recovery.',
      };

  const handleSubmit = async () => {
    if (selectedOption === null) return;
    setIsSubmitting(true);

    const isCorrect = selectedOption === quizData.correctIndex;

    try {
      await fetch('/api/quiz', {
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

      setHasSubmitted(true);
      if (onSubmitted) onSubmitted();
    } catch (err) {
      console.error('Quiz submission error:', err);
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
        <p className="text-xs text-marine-700 font-semibold mb-4 leading-relaxed">
          {quizData.question}
        </p>

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
                The Socratic Beacon will light a proactive challenge on your dashboard to reinforce this concept.
              </div>
            )}
          </div>
        )}

        <div className="flex items-center justify-end space-x-2 pt-3 border-t border-beacon-100">
          {!hasSubmitted ? (
            <button
              onClick={handleSubmit}
              disabled={selectedOption === null || isSubmitting}
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
