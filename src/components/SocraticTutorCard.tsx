'use client';

import React, { useState, useEffect } from 'react';
import {
  Compass,
  Send,
  CheckCircle2,
  TrendingUp,
  RefreshCw,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

interface SocraticTutorCardProps {
  studentId: string;
}

export function SocraticTutorCard({ studentId }: SocraticTutorCardProps) {
  const [session, setSession] = useState<any>(null);
  const [studentAnswer, setStudentAnswer] = useState('');
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [evaluation, setEvaluation] = useState<any>(null);
  const [isLoadingSession, setIsLoadingSession] = useState(false);
  const [selectedModel, setSelectedModel] = useState('gemini-3.7-flash');

  useEffect(() => {
    fetchActiveSession();
  }, [studentId]);

  const fetchActiveSession = async (forceNew = false) => {
    setIsLoadingSession(true);
    try {
      const res = await fetch(`/api/socratic-tutor?studentId=${studentId}&forceNew=${forceNew}&model=${selectedModel}`);
      const data = await res.json();
      if (data.activeSession) {
        setSession(data.activeSession);
      }
    } catch (err) {
      console.error('Failed to load socratic session:', err);
    } finally {
      setIsLoadingSession(false);
    }
  };

  const handleSubmitResponse = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentAnswer.trim() || !session?.sessionId || isEvaluating) return;

    setIsEvaluating(true);
    try {
      const res = await fetch('/api/socratic-tutor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sessionId: session.sessionId,
          studentResponse: studentAnswer.trim(),
          model: selectedModel,
        }),
      });
      const data = await res.json();
      if (data.error) throw new Error(data.error);

      setEvaluation(data.evaluation);
    } catch (err: any) {
      alert(`Evaluation error: ${err.message}`);
    } finally {
      setIsEvaluating(false);
    }
  };

  return (
    <div className="relative overflow-hidden p-5">
      {/* The beacon's glow */}
      <div className="absolute -top-20 -right-20 w-56 h-56 bg-beacon-200/40 rounded-full blur-3xl pointer-events-none" />

      {isLoadingSession ? (
        <div className="relative p-6 flex flex-col items-center justify-center text-center">
          <div className="w-7 h-7 border-3 border-beacon-500 border-t-transparent rounded-full animate-spin mb-2" />
          <span className="text-xs text-beacon-700 font-semibold">
            Socratest my Philosopher is kindling an inquiry...
          </span>
        </div>
      ) : session ? (
        <div className="relative space-y-4">
          {/* Trigger Context */}
          <div className="flex items-center gap-2 p-3 rounded-xl bg-beacon-50/70 border border-beacon-100 text-xs">
            <Compass className="w-4 h-4 text-beacon-500 shrink-0" />
            <span className="chart-annotation shrink-0">Bearing:</span>
            <span className="text-beacon-900 font-medium">{session.triggerReason}</span>
          </div>

          {/* Socratic Question Box */}
          <div className="p-5 rounded-xl bg-white border border-beacon-200 border-l-4 border-l-beacon-500 text-marine-900">
            <div className="chart-annotation mb-2 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-beacon-500" />
              Destination: {session.targetConcept} &bull; {session.relatedLessonTitle}
            </div>
            <p className="font-display text-base sm:text-lg font-medium leading-relaxed text-marine-950 italic">
              &ldquo;{session.socraticQuestion}&rdquo;
            </p>
            {session.contextHint && (
              <p className="text-xs text-beacon-800 mt-3 font-medium bg-beacon-50 p-2.5 rounded-lg border border-beacon-100 inline-flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-beacon-500" />
                Navigational hint: {session.contextHint}
              </p>
            )}
          </div>

          {/* Evaluation Result View */}
          {evaluation ? (
            <div className="p-5 rounded-xl bg-beacon-50 border border-beacon-200 space-y-3 animate-in fade-in">
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <span className="flex items-center gap-1.5 text-xs font-bold text-beacon-800">
                  <CheckCircle2 className="w-4 h-4 text-beacon-600" />
                  Reasoning verified by Socratest my Philosopher
                </span>
                <span className="chart-annotation px-3 py-1 rounded-full bg-white text-beacon-700 border border-beacon-200 font-semibold">
                  Comprehension {evaluation.understandingScore}/10
                </span>
              </div>

              <p className="text-xs text-marine-800 leading-relaxed font-medium">
                {evaluation.feedback}
              </p>

              {evaluation.socraticFollowUp && (
                <div className="pt-2.5 border-t border-beacon-200 text-xs text-beacon-900 font-semibold flex items-center gap-1.5">
                  <TrendingUp className="w-4 h-4 text-beacon-600" />
                  {evaluation.socraticFollowUp}
                </div>
              )}

              <div className="flex items-center justify-between gap-2 pt-2 text-xs text-beacon-800 font-semibold flex-wrap">
                <span className="flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-beacon-500" />
                  {evaluation.masteryUpdate}
                </span>
                <button
                  onClick={() => {
                    setEvaluation(null);
                    setStudentAnswer('');
                    fetchActiveSession(true);
                  }}
                  className="flex items-center gap-1 px-3.5 py-1.5 rounded-full bg-beacon-600 text-white font-bold hover:bg-beacon-500 transition shadow-sm"
                >
                  Next challenge <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ) : (
            /* Student Answer Form */
            <form onSubmit={handleSubmitResponse} className="space-y-3">
              <textarea
                value={studentAnswer}
                onChange={(e) => setStudentAnswer(e.target.value)}
                placeholder="Reason it out, sailor. What are the key architectural tradeoffs, state boundaries, or edge cases?"
                rows={3}
                disabled={isEvaluating}
                className="w-full bg-white border border-beacon-200 focus:border-beacon-500 rounded-xl p-3.5 text-xs text-marine-900 placeholder-marine-400 focus:outline-none focus:ring-2 focus:ring-beacon-200 disabled:opacity-50 resize-none leading-relaxed"
              />

              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="chart-annotation">Reasoning engine:</span>
                  <div className="relative w-[200px]">
                    <select
                      aria-label="Reasoning engine"
                      value={selectedModel}
                      onChange={(e) => setSelectedModel(e.target.value)}
                      className="block w-full rounded-md border-beacon-200 bg-white px-3 py-2 text-sm text-marine-900 focus:border-beacon-500 focus:outline-none focus:ring-beacon-200 disabled:opacity-50"
                    >
                      <option value="gemini-3.7-flash">Gemini 3.7 Flash (preferred)</option>
                      <option value="gemini-3.6-flash">Gemini 3.6 Flash</option>
                      <option value="gemini-3.5-flash">Gemini 3.5 Flash</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={!studentAnswer.trim() || isEvaluating}
                  className="px-5 py-2.5 rounded-full bg-beacon-600 hover:bg-beacon-500 text-white text-xs font-bold flex items-center gap-2 transition disabled:opacity-40 shadow-sm"
                >
                  {isEvaluating ? (
                    <>
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                      <span>Sounding the depths...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Submit reasoning</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      ) : (
        <div className="relative p-4 text-center text-xs text-marine-700 font-medium">
          No active inquiry on the horizon. Complete a quiz or unlock a module to summon the Philosopher.
        </div>
      )}
    </div>
  );
}
