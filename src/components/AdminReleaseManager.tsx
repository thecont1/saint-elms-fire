'use client';

import React, { useEffect, useState } from 'react';
import {
  Send,
  Sparkles,
  Layers,
  Clock,
  CheckCircle2,
  AlertCircle,
  Network,
  RefreshCw,
  User,
  BookOpen,
  Compass,
} from 'lucide-react';
import type { CourseModule, Lesson, ReleaseEvent } from '@/lib/types';
import { getReleaseDisplayState } from '@/lib/release-integrity';

interface AdminReleaseManagerProps {
  courseId: string;
  modules: CourseModule[];
  lessons: Lesson[];
  releases: ReleaseEvent[];
  onRefresh: () => void;
}

export function AdminReleaseManager({
  courseId,
  modules = [],
  lessons = [],
  releases = [],
  onRefresh,
}: AdminReleaseManagerProps) {
  const [selectedModuleId, setSelectedModuleId] = useState<string>(modules[0]?.id || '');
  const [selectedLessonId, setSelectedLessonId] = useState<string>('all-in-module');
  const [targetStudent, setTargetStudent] = useState<string>('student-alex');
  const [isReleasing, setIsReleasing] = useState(false);
  const [retryingId, setRetryingId] = useState<string | null>(null);
  const [lastReleaseResult, setLastReleaseResult] = useState<any>(null);

  const hasActiveIngestion = releases.some((release) => release.overallStatus === 'pending');
  useEffect(() => {
    if (!hasActiveIngestion && !isReleasing) return;
    const timer = window.setInterval(onRefresh, 1500);
    return () => window.clearInterval(timer);
  }, [hasActiveIngestion, isReleasing, onRefresh]);

  const handleRetry = async (releaseId: string) => {
    setRetryingId(releaseId);
    try {
      const response = await fetch(`/api/releases/${releaseId}/retry`, { method: 'POST' });
      const data = await response.json();
      if (!response.ok && data.release?.overallStatus !== 'failed') throw new Error(data.error || 'Retry failed');
      setLastReleaseResult(data);
      await onRefresh();
    } catch (error) {
      alert(`Retry failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setRetryingId(null);
    }
  };

  const availableLessons = lessons.filter((l) => l.moduleId === selectedModuleId);

  const handleTriggerRelease = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedModuleId) return;

    setIsReleasing(true);
    setLastReleaseResult(null);

    try {
      const res = await fetch('/api/releases', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          courseId,
          moduleId: selectedModuleId,
          lessonId: selectedLessonId === 'all-in-module' ? undefined : selectedLessonId,
          studentId: targetStudent,
        }),
      });

      const data = await res.json();
      if (!res.ok && !data.release) throw new Error(data.error || 'Release failed');

      setLastReleaseResult(data);
      onRefresh();
    } catch (err: any) {
      alert(`Release trigger failed: ${err.message}`);
    } finally {
      setIsReleasing(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Release Action Panel */}
      <div className="lg:col-span-1 bg-white rounded-2xl border border-beacon-100 p-6 shadow-xl shadow-beacon-500/5 flex flex-col justify-between">
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2.5 rounded-xl bg-beacon-100 border border-beacon-200 text-beacon-700 shadow-2xs">
              <Send className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-extrabold text-slate-900">Trigger Drip Release</h3>
              <p className="text-xs text-slate-500">
                Unlock curriculum & trigger Genkit Second Brain Ingestion
              </p>
            </div>
          </div>

          <form onSubmit={handleTriggerRelease} className="space-y-4 mt-4">
            {/* Target Cohort / Student */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Target Student / Cohort
              </label>
              <select
                value={targetStudent}
                onChange={(e) => setTargetStudent(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 focus:border-beacon-500 rounded-xl p-2.5 text-xs text-slate-900 focus:outline-none"
              >
                <option value="student-alex">Alex (Student #101)</option>
                <option value="cohort-all">All Cohort Learners (Global Drip)</option>
              </select>
            </div>

            {/* Select Module */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Select Module to Unlock
              </label>
              <select
                value={selectedModuleId}
                onChange={(e) => {
                  setSelectedModuleId(e.target.value);
                  setSelectedLessonId('all-in-module');
                }}
                className="w-full bg-slate-50 border border-slate-300 focus:border-beacon-500 rounded-xl p-2.5 text-xs text-slate-900 focus:outline-none"
              >
                {modules.map((m) => (
                  <option key={m.id} value={m.id}>
                    Module {m.order}: {m.title}
                  </option>
                ))}
              </select>
            </div>

            {/* Scope: Full module vs single lesson */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Release Granularity
              </label>
              <select
                value={selectedLessonId}
                onChange={(e) => setSelectedLessonId(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 focus:border-beacon-500 rounded-xl p-2.5 text-xs text-slate-900 focus:outline-none"
              >
                <option value="all-in-module">Entire Module (All Lessons)</option>
                {availableLessons.map((l) => (
                  <option key={l.id} value={l.id}>
                    Single Lesson: {l.title}
                  </option>
                ))}
              </select>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isReleasing || modules.length === 0}
                className="w-full py-3 px-4 rounded-xl bg-beacon-600 hover:bg-beacon-500 text-white text-xs font-bold flex items-center justify-center gap-2 transition shadow-lg shadow-beacon-600/25 disabled:opacity-50"
              >
                {isReleasing ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Ingesting into Second Brain (Gemini 3.7 Flash)...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    <span>Push Release Live to Learner</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Real-time Ingestion Result Pill */}
        {lastReleaseResult && (
          <div className={`mt-4 p-4 rounded-xl border text-xs space-y-1 animate-in fade-in shadow-2xs ${lastReleaseResult.release?.overallStatus === 'released' ? 'bg-emerald-50 border-emerald-200 text-emerald-900' : 'bg-red-50 border-red-200 text-red-900'}`}>
            <div className="flex items-center gap-1.5 font-bold">
              {lastReleaseResult.release?.overallStatus === 'released'
                ? <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                : <AlertCircle className="w-4 h-4 text-red-600" />}
              {lastReleaseResult.release?.overallStatus === 'released'
                ? 'Release verified and synced.'
                : 'Release failed. See the audit log and retry.'}
            </div>
            <p>{lastReleaseResult.ingestedCount ?? 0} lesson(s) verified.</p>
          </div>
        )}
      </div>

      {/* Release History & Second Brain Sync Logs */}
      <div className="lg:col-span-2 bg-white rounded-2xl border border-beacon-100 p-6 shadow-xl shadow-beacon-500/5 flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-beacon-600" />
            <h3 className="text-base font-extrabold text-slate-900">Release Audit Log & Drip Timeline</h3>
          </div>
          <span className="text-xs font-mono font-semibold text-slate-500 bg-slate-50 px-2.5 py-0.5 rounded-full border border-slate-200">
            {releases.length} Release Event(s)
          </span>
        </div>

        <div className="flex-1 overflow-y-auto space-y-2.5 max-h-[420px]">
          {releases.map((rel) => {
            const mod = modules.find((m) => m.id === rel.moduleId);
            const lesson = lessons.find((l) => l.id === rel.lessonId);
            const state = getReleaseDisplayState(rel);
            const style = {
              grey: 'bg-slate-100 text-slate-700 border-slate-300',
              blue: 'bg-blue-100 text-blue-800 border-blue-300',
              green: 'bg-emerald-100 text-emerald-800 border-emerald-300',
              red: 'bg-red-100 text-red-800 border-red-300',
            }[state.tone];
            const dot = { grey: 'bg-slate-400', blue: 'bg-blue-500', green: 'bg-emerald-500', red: 'bg-red-500' }[state.tone];

            return (
              <div
                key={rel.id}
                className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs flex flex-wrap items-center justify-between gap-2 shadow-2xs"
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-2.5 h-2.5 rounded-full shadow-xs ${dot} ${state.tone === 'blue' ? 'animate-pulse' : ''}`} />
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="font-bold text-slate-900">
                        {mod ? `Module ${mod.order}: ${mod.title}` : 'Course Module'}
                      </span>
                      {lesson && (
                        <span className="text-beacon-700 font-semibold text-xs">
                          &bull; {lesson.title}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center space-x-3 text-xs text-slate-500 mt-0.5">
                      <span className="flex items-center gap-1 font-medium">
                        <User className="w-3 h-3 text-slate-400" />
                        Target: {rel.studentId}
                      </span>
                      <span>&bull;</span>
                      <span className="font-mono text-[11px]">
                        {new Date(rel.releasedAt).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <span className={`px-3 py-1 rounded-full text-[11px] font-bold border flex items-center gap-1 ${style}`}>
                    {state.tone === 'green' ? <CheckCircle2 className="w-3.5 h-3.5" /> : state.tone === 'red' ? <AlertCircle className="w-3.5 h-3.5" /> : <RefreshCw className={`w-3.5 h-3.5 ${state.tone === 'blue' ? 'animate-spin' : ''}`} />}
                    {state.label}{state.detail ? ` — ${state.detail.replaceAll('_', ' ')}` : ''}
                  </span>
                  {rel.overallStatus === 'failed' && (
                    <button
                      type="button"
                      onClick={() => handleRetry(rel.id)}
                      disabled={retryingId === rel.id}
                      className="px-3 py-1 rounded-full text-[11px] font-bold bg-white text-red-700 border border-red-300 hover:bg-red-50 disabled:opacity-50 flex items-center gap-1"
                    >
                      <RefreshCw className={`w-3.5 h-3.5 ${retryingId === rel.id ? 'animate-spin' : ''}`} />
                      Retry Sync
                    </button>
                  )}
                </div>
              </div>
            );
          })}

          {releases.length === 0 && (
            <div className="p-8 text-center text-xs text-slate-500 font-medium">
              No releases triggered yet. Select a module on the left to push the first release.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
