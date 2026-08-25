'use client';

import React, { useState, useEffect } from 'react';
import {
  Compass,
  Sparkles,
  Send,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  RefreshCw,
  Flame,
  ArrowRight,
  Lightbulb,
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

  useEffect(() => {
    fetchActiveSession();
  }, [studentId]);

  const fetchActiveSession = async (forceNew = false) => {
    setIsLoadingSession(true);
    try {
      const res = await fetch(`/api/socratic-tutor?studentId=${studentId}&forceNew=${forceNew}`);
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
    <div className="bg-gradient-to-br from-sky-50/80 via-white to-blue-50/60 rounded-2xl border border-sky-200 shadow-md shadow-sky-500/5 p-6 relative overflow-hidden">
      {/* Decorative celestial background accent */}
      <div className="absolute -top-16 -right-16 w-48 h-48 bg-sky-200/40 rounded-full blur-3xl pointer-events-none" />

      {/* Card Header */}
      <div className="flex items-start justify-between gap-3 mb-4">
        <div className="flex items-center space-x-3.5">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-sky-500 to-blue-600 flex items-center justify-center text-white shadow-md shadow-sky-500/20">
            <Flame className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h3 className="text-base font-extrabold text-slate-900 tracking-tight">
                Saint Elms Socratic Beacon
              </h3>
              <span className="text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full font-bold bg-sky-100 text-sky-800 border border-sky-300">
                Proactive Inquiry
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              Illuminating uncertainty &bull; Agent-initiated challenge targeting your recent quiz concepts
            </p>
          </div>
        </div>

        <button
          onClick={() => fetchActiveSession(true)}
          disabled={isLoadingSession}
          className="p-2 text-slate-400 hover:text-sky-700 rounded-xl hover:bg-sky-50 transition border border-transparent hover:border-sky-200"
          title="Request new Socratic challenge"
        >
          <RefreshCw className={`w-4 h-4 ${isLoadingSession ? 'animate-spin' : ''}`} />
        </button>
      </div>

      {isLoadingSession ? (
        <div className="p-6 flex flex-col items-center justify-center text-center">
          <div className="w-7 h-7 border-3 border-sky-500 border-t-transparent rounded-full animate-spin mb-2" />
          <span className="text-xs text-sky-800 font-semibold">
            The Socratic Beacon is formulating an inquiry from your curriculum...
          </span>
        </div>
      ) : session ? (
        <div className="space-y-4">
          {/* Trigger Context Pill */}
          <div className="flex items-center gap-2 p-3 rounded-xl bg-white border border-sky-100 text-xs text-slate-700 shadow-2xs">
            <Compass className="w-4 h-4 text-sky-600 shrink-0" />
            <span className="text-slate-500 font-semibold">Inquiry Trigger:</span>
            <span className="text-sky-900 font-medium">{session.triggerReason}</span>
          </div>

          {/* Socratic Question Box */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-sky-100/60 to-blue-50 border border-sky-200/80 text-slate-900 shadow-xs">
            <div className="text-[10px] uppercase text-sky-800 tracking-wider font-bold mb-1.5 flex items-center justify-between">
              <span className="flex items-center gap-1">
                <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                Target Pillar: {session.targetConcept} &bull; {session.relatedLessonTitle}
              </span>
            </div>
            <p className="text-sm sm:text-base font-bold leading-relaxed text-slate-900">
              &ldquo;{session.socraticQuestion}&rdquo;
            </p>
            {session.contextHint && (
              <p className="text-xs text-sky-800 mt-2.5 font-medium bg-white/70 p-2 rounded-lg border border-sky-100 inline-block">
                🧭 Navigational Hint: {session.contextHint}
              </p>
            )}
          </div>

          {/* Evaluation Result View */}
          {evaluation ? (
            <div className="p-5 rounded-2xl bg-emerald-50/80 border border-emerald-200 space-y-3 animate-in fade-in shadow-xs">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-xs font-bold text-emerald-900">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Socratic Synthesis Evaluated
                </span>
                <span className="text-xs px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300 font-extrabold">
                  Comprehension: {evaluation.understandingScore} / 10
                </span>
              </div>

              <p className="text-xs text-slate-800 leading-relaxed font-medium">
                {evaluation.feedback}
              </p>

              {evaluation.socraticFollowUp && (
                <div className="pt-2.5 border-t border-emerald-200 text-xs text-emerald-900 font-semibold flex items-center gap-1.5">
                  <TrendingUp className="w-4 h-4 text-emerald-600" />
                  {evaluation.socraticFollowUp}
                </div>
              )}

              <div className="flex items-center justify-between pt-2 text-xs text-emerald-800 font-semibold">
                <span className="flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  {evaluation.masteryUpdate}
                </span>
                <button
                  onClick={() => {
                    setEvaluation(null);
                    setStudentAnswer('');
                    fetchActiveSession(true);
                  }}
                  className="flex items-center gap-1 px-3 py-1 rounded-lg bg-emerald-600 text-white font-bold hover:bg-emerald-700 transition shadow-xs"
                >
                  Next Challenge <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ) : (
            /* Student Answer Form */
            <form onSubmit={handleSubmitResponse} className="space-y-3">
              <textarea
                value={studentAnswer}
                onChange={(e) => setStudentAnswer(e.target.value)}
                placeholder="Explain your reasoning here. What are the key architectural tradeoffs, state boundaries, or edge cases?"
                rows={3}
                disabled={isEvaluating}
                className="w-full bg-white border border-slate-300 focus:border-sky-500 rounded-xl p-3.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-200 disabled:opacity-50 resize-none leading-relaxed shadow-inner"
              />

              <div className="flex items-center justify-between">
                <span className="text-[11px] text-slate-500 font-medium">
                  Reasoning Engine: Gemini 3.7 Flash
                </span>

                <button
                  type="submit"
                  disabled={!studentAnswer.trim() || isEvaluating}
                  className="px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold flex items-center gap-2 transition disabled:opacity-40 shadow-md shadow-sky-600/25"
                >
                  {isEvaluating ? (
                    <>
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                      <span>Evaluating Mastery...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Submit Reasoning</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      ) : (
        <div className="p-4 text-center text-xs text-slate-500 font-medium">
          No active Socratic inquiry. Complete a quiz or unlock a module to light the beacon!
        </div>
      )}
    </div>
  );
}
