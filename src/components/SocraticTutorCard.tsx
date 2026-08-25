'use client';

import React, { useState, useEffect } from 'react';
import {
  BrainCircuit,
  Sparkles,
  Send,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  RefreshCw,
  Compass,
  ArrowRight,
  MessageSquare,
} from 'lucide-react';
import type { SocraticSession } from '@/lib/types';

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
    <div className="bg-gradient-to-br from-indigo-950/40 via-slate-900 to-slate-900/90 rounded-xl border border-indigo-500/30 shadow-2xl p-5 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute -top-12 -right-12 w-44 h-44 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Card Header */}
      <div className="flex items-start justify-between gap-3 mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400 shadow-md">
            <BrainCircuit className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h3 className="text-sm font-bold text-white tracking-tight">
                Agent-Initiated Socratic Challenge
              </h3>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 animate-pulse">
                Proactive Tutor
              </span>
            </div>
            <p className="text-xs text-slate-400">
              Triggered automatically based on your recent quiz patterns & weak spots
            </p>
          </div>
        </div>

        <button
          onClick={() => fetchActiveSession(true)}
          disabled={isLoadingSession}
          className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition"
          title="Request new Socratic challenge"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${isLoadingSession ? 'animate-spin' : ''}`} />
        </button>
      </div>

      {isLoadingSession ? (
        <div className="p-6 flex flex-col items-center justify-center text-center">
          <div className="w-6 h-6 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin mb-2" />
          <span className="text-xs text-slate-400 font-mono">
            Tutor analyzing quiz history and crafting Socratic inquiry...
          </span>
        </div>
      ) : session ? (
        <div className="space-y-4">
          {/* Trigger Context Pill */}
          <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-950/70 border border-slate-800 text-xs text-slate-300">
            <Compass className="w-4 h-4 text-amber-400 shrink-0" />
            <span className="text-slate-400">Trigger:</span>
            <span className="text-amber-200 font-medium">{session.triggerReason}</span>
          </div>

          {/* Socratic Question Box */}
          <div className="p-4 rounded-xl bg-indigo-950/30 border border-indigo-800/40 text-slate-100">
            <div className="text-[10px] font-mono uppercase text-indigo-400 tracking-wider font-semibold mb-1 flex items-center justify-between">
              <span>Target: {session.targetConcept} &bull; {session.relatedLessonTitle}</span>
            </div>
            <p className="text-xs sm:text-sm font-semibold leading-relaxed text-indigo-100">
              &ldquo;{session.socraticQuestion}&rdquo;
            </p>
            {session.contextHint && (
              <p className="text-[11px] text-slate-400 mt-2 italic">
                Hint: {session.contextHint}
              </p>
            )}
          </div>

          {/* Evaluation Result View */}
          {evaluation ? (
            <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-800/50 space-y-3 animate-in fade-in">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-xs font-bold text-emerald-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Socratic Synthesis Evaluated
                </span>
                <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-emerald-900/60 text-emerald-200 border border-emerald-700 font-bold">
                  Comprehension: {evaluation.understandingScore} / 10
                </span>
              </div>

              <p className="text-xs text-slate-200 leading-relaxed">
                {evaluation.feedback}
              </p>

              {evaluation.socraticFollowUp && (
                <div className="pt-2 border-t border-emerald-900/50 text-xs text-emerald-200 font-medium flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                  {evaluation.socraticFollowUp}
                </div>
              )}

              <div className="flex items-center justify-between pt-1 text-[11px] text-emerald-400 font-mono">
                <span>{evaluation.masteryUpdate}</span>
                <button
                  onClick={() => {
                    setEvaluation(null);
                    setStudentAnswer('');
                    fetchActiveSession(true);
                  }}
                  className="flex items-center gap-1 text-indigo-300 hover:text-white transition"
                >
                  Next Challenge <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ) : (
            /* Student Answer Form */
            <form onSubmit={handleSubmitResponse} className="space-y-2.5">
              <textarea
                value={studentAnswer}
                onChange={(e) => setStudentAnswer(e.target.value)}
                placeholder="Explain your reasoning here. What are the key tradeoffs or edge cases?"
                rows={3}
                disabled={isEvaluating}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg p-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 disabled:opacity-50 resize-none leading-relaxed"
              />

              <div className="flex items-center justify-between">
                <span className="text-[10px] text-slate-500 font-mono">
                  Agent reasoning model: Gemini 3.7 Flash
                </span>

                <button
                  type="submit"
                  disabled={!studentAnswer.trim() || isEvaluating}
                  className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold flex items-center gap-1.5 transition disabled:opacity-40 shadow-md shadow-indigo-600/20"
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
        <div className="p-4 text-center text-xs text-slate-400">
          No active Socratic session. Complete a quiz or release a module to trigger tutor inquiries!
        </div>
      )}
    </div>
  );
}
