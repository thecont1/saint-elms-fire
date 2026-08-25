'use client';

import React, { useState } from 'react';
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
} from 'lucide-react';
import type { CourseModule, Lesson, ReleaseEvent } from '@/lib/types';

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
  const [lastReleaseResult, setLastReleaseResult] = useState<any>(null);

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
      if (data.error) throw new Error(data.error);

      setLastReleaseResult(data);
      onRefresh();
    } catch (err: any) {
      alert(`Release trigger failed: ${err.message}`);
    } finally {
      setIsReleasing(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
      {/* Release Action Panel */}
      <div className="lg:col-span-1 bg-slate-900/90 rounded-xl border border-slate-800 p-5 shadow-xl flex flex-col justify-between">
        <div>
          <div className="flex items-center space-x-2.5 mb-3">
            <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400">
              <Send className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">Trigger Incremental Release</h3>
              <p className="text-xs text-slate-400">
                Drip-feed content & trigger Genkit Second Brain Ingestion
              </p>
            </div>
          </div>

          <form onSubmit={handleTriggerRelease} className="space-y-3.5 mt-4">
            {/* Target Cohort / Student */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Target Student / Cohort
              </label>
              <select
                value={targetStudent}
                onChange={(e) => setTargetStudent(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-xs text-white focus:outline-none focus:border-amber-500"
              >
                <option value="student-alex">Alex (Student #101)</option>
                <option value="cohort-all">All Cohort Students (Global Drip)</option>
              </select>
            </div>

            {/* Select Module */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Select Module to Unlock
              </label>
              <select
                value={selectedModuleId}
                onChange={(e) => {
                  setSelectedModuleId(e.target.value);
                  setSelectedLessonId('all-in-module');
                }}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-xs text-white focus:outline-none focus:border-amber-500"
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
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Release Granularity
              </label>
              <select
                value={selectedLessonId}
                onChange={(e) => setSelectedLessonId(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-xs text-white focus:outline-none focus:border-amber-500"
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
                className="w-full py-2.5 px-4 rounded-lg bg-amber-600 hover:bg-amber-500 text-white text-xs font-bold flex items-center justify-center gap-2 transition shadow-lg shadow-amber-600/25 disabled:opacity-50"
              >
                {isReleasing ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Ingesting into Second Brain (Gemini 3.7 Flash)...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    <span>Push Release Live to Student</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Real-time Ingestion Result Pill */}
        {lastReleaseResult && (
          <div className="mt-4 p-3 rounded-lg bg-emerald-950/40 border border-emerald-800/60 text-xs text-emerald-300 space-y-1 animate-in fade-in">
            <div className="flex items-center gap-1.5 font-semibold text-emerald-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Release & Ingestion Complete!
            </div>
            <p className="text-[11px] text-emerald-300/80">
              {lastReleaseResult.ingestedCount} lesson(s) ingested into student graph.
            </p>
          </div>
        )}
      </div>

      {/* Release History & Second Brain Sync Logs */}
      <div className="lg:col-span-2 bg-slate-900/90 rounded-xl border border-slate-800 p-5 shadow-xl flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-slate-400" />
            <h3 className="text-sm font-bold text-white">Release Audit Log & Drip Timeline</h3>
          </div>
          <span className="text-xs font-mono text-slate-400">
            {releases.length} Release Event(s)
          </span>
        </div>

        <div className="flex-1 overflow-y-auto space-y-2.5 max-h-[420px]">
          {releases.map((rel) => {
            const mod = modules.find((m) => m.id === rel.moduleId);
            const lesson = lessons.find((l) => l.id === rel.lessonId);

            return (
              <div
                key={rel.id}
                className="p-3.5 rounded-lg bg-slate-950 border border-slate-800 text-xs flex flex-wrap items-center justify-between gap-2"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400" />
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="font-semibold text-white">
                        {mod ? `Module ${mod.order}: ${mod.title}` : 'Course Module'}
                      </span>
                      {lesson && (
                        <span className="text-indigo-300 font-mono text-[10px]">
                          &bull; {lesson.title}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center space-x-3 text-[11px] text-slate-400 mt-0.5">
                      <span className="flex items-center gap-1">
                        <User className="w-3 h-3 text-slate-500" />
                        Target: {rel.studentId}
                      </span>
                      <span>&bull;</span>
                      <span className="font-mono">
                        {new Date(rel.releasedAt).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-emerald-950 text-emerald-300 border border-emerald-800/60 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Second Brain Synced
                  </span>
                </div>
              </div>
            );
          })}

          {releases.length === 0 && (
            <div className="p-8 text-center text-xs text-slate-500">
              No releases triggered yet. Select a module on the left to push the first release.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
