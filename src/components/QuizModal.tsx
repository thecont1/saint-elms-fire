'use client';

import React, { useState } from 'react';
import { HelpCircle, CheckCircle2, XCircle, Sparkles, Send, ArrowRight } from 'lucide-react';
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

  // Derive quiz question based on lesson title/content
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
    <div className="fixed inset-0 bg-black/75 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-800 rounded-xl max-w-lg w-full p-6 shadow-2xl animate-in fade-in">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <HelpCircle className="w-4 h-4 text-indigo-400" />
            <span className="text-xs font-mono text-indigo-400 uppercase tracking-wider font-semibold">
              Concept Mastery Check
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white text-xs p-1"
          >
            ✕
          </button>
        </div>

        <h3 className="text-sm font-bold text-white mb-1">{lesson.title}</h3>
        <p className="text-xs text-slate-300 font-medium mb-4 leading-relaxed">
          {quizData.question}
        </p>

        {/* Options */}
        <div className="space-y-2 mb-4">
          {quizData.options.map((opt, i) => {
            const isSelected = selectedOption === i;
            const isCorrectOption = i === quizData.correctIndex;

            let optionStyle = 'border-slate-800 bg-slate-950 text-slate-300 hover:border-slate-700';
            if (hasSubmitted) {
              if (isCorrectOption) {
                optionStyle = 'border-emerald-500 bg-emerald-950/40 text-emerald-200';
              } else if (isSelected && !isCorrectOption) {
                optionStyle = 'border-rose-500 bg-rose-950/40 text-rose-200';
              }
            } else if (isSelected) {
              optionStyle = 'border-indigo-500 bg-indigo-950/40 text-indigo-200';
            }

            return (
              <button
                key={i}
                disabled={hasSubmitted || isSubmitting}
                onClick={() => setSelectedOption(i)}
                className={`w-full p-3 rounded-lg border text-xs text-left transition flex items-center justify-between ${optionStyle}`}
              >
                <span>{opt}</span>
                {hasSubmitted && isCorrectOption && (
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                )}
                {hasSubmitted && isSelected && !isCorrectOption && (
                  <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
                )}
              </button>
            );
          })}
        </div>

        {/* Post-submission Feedback Box */}
        {hasSubmitted && (
          <div
            className={`p-3.5 rounded-lg border text-xs mb-4 leading-relaxed ${
              selectedOption === quizData.correctIndex
                ? 'bg-emerald-950/40 border-emerald-800 text-emerald-200'
                : 'bg-amber-950/40 border-amber-800 text-amber-200'
            }`}
          >
            <div className="font-semibold mb-1">
              {selectedOption === quizData.correctIndex ? 'Mastery Verified!' : 'Weak Spot Detected'}
            </div>
            {quizData.explanation}
            {selectedOption !== quizData.correctIndex && (
              <div className="text-[11px] text-amber-300/80 mt-2 italic">
                This weak spot will automatically trigger a proactive Socratic challenge on your dashboard!
              </div>
            )}
          </div>
        )}

        <div className="flex items-center justify-end space-x-2 pt-2 border-t border-slate-800">
          {!hasSubmitted ? (
            <button
              onClick={handleSubmit}
              disabled={selectedOption === null || isSubmitting}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold rounded-lg transition disabled:opacity-40 flex items-center gap-1.5"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Submit Answer</span>
            </button>
          ) : (
            <button
              onClick={onClose}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold rounded-lg transition"
            >
              Done
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
