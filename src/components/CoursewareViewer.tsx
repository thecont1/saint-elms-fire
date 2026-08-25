'use client';

import React from 'react';
import { BookOpen, Lock, CheckCircle2, ChevronRight, Layers, FileText, Sparkles } from 'lucide-react';
import type { CourseModule, Lesson } from '@/lib/types';

interface CoursewareViewerProps {
  modules: CourseModule[];
  lessons: Lesson[];
  releasedLessons: Lesson[];
  selectedLessonId: string | null;
  onSelectLesson: (lesson: Lesson) => void;
  onOpenQuiz?: (lesson: Lesson) => void;
}

export function CoursewareViewer({
  modules = [],
  lessons = [],
  releasedLessons = [],
  selectedLessonId,
  onSelectLesson,
  onOpenQuiz,
}: CoursewareViewerProps) {
  const releasedLessonIds = new Set(releasedLessons.map((l) => l.id));

  return (
    <div className="bg-slate-900/90 rounded-xl border border-slate-800 shadow-xl overflow-hidden flex flex-col h-full">
      {/* Header */}
      <div className="p-4 border-b border-slate-800 bg-slate-950/40 flex items-center justify-between">
        <div className="flex items-center space-x-2.5">
          <div className="p-1.5 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-400">
            <BookOpen className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-100">Courseware Progression</h3>
            <p className="text-xs text-slate-400">
              {releasedLessons.length} of {lessons.length} Lessons Unlocked
            </p>
          </div>
        </div>

        {/* Completion Pill */}
        <div className="text-xs font-mono px-2.5 py-1 rounded-full bg-slate-950 border border-slate-800 text-slate-300">
          {Math.round((releasedLessons.length / Math.max(1, lessons.length)) * 100)}% Released
        </div>
      </div>

      {/* Modules List */}
      <div className="flex-1 p-3 overflow-y-auto space-y-3 max-h-[500px]">
        {modules.map((mod) => {
          const modLessons = lessons.filter((l) => l.moduleId === mod.id);
          const releasedInMod = modLessons.filter((l) => releasedLessonIds.has(l.id));
          const isModFullyUnlocked = modLessons.length > 0 && releasedInMod.length === modLessons.length;
          const isModPartiallyUnlocked = releasedInMod.length > 0 && !isModFullyUnlocked;

          return (
            <div
              key={mod.id}
              className="rounded-lg border border-slate-800/80 bg-slate-950/40 overflow-hidden"
            >
              {/* Module Header */}
              <div className="p-3 bg-slate-950/80 border-b border-slate-800/60 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-indigo-400 uppercase tracking-wider font-semibold">
                    Module {mod.order}
                  </span>
                  <h4 className="text-xs font-bold text-slate-200">{mod.title}</h4>
                </div>

                <div className="flex items-center space-x-1.5">
                  {isModFullyUnlocked ? (
                    <span className="flex items-center gap-1 text-[10px] text-emerald-400 font-mono">
                      <CheckCircle2 className="w-3 h-3" /> Unlocked
                    </span>
                  ) : isModPartiallyUnlocked ? (
                    <span className="flex items-center gap-1 text-[10px] text-amber-400 font-mono">
                      <Sparkles className="w-3 h-3" /> In Progress
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-[10px] text-slate-500 font-mono">
                      <Lock className="w-3 h-3" /> Locked
                    </span>
                  )}
                </div>
              </div>

              {/* Lessons within Module */}
              <div className="divide-y divide-slate-800/40">
                {modLessons.map((lesson) => {
                  const isReleased = releasedLessonIds.has(lesson.id);
                  const isSelected = selectedLessonId === lesson.id;

                  return (
                    <div
                      key={lesson.id}
                      onClick={() => {
                        if (isReleased) onSelectLesson(lesson);
                      }}
                      className={`p-3 flex items-center justify-between text-xs transition ${
                        !isReleased
                          ? 'opacity-40 cursor-not-allowed bg-slate-950/20'
                          : isSelected
                          ? 'bg-indigo-950/40 text-indigo-200 border-l-2 border-indigo-500 cursor-pointer'
                          : 'hover:bg-slate-900/80 text-slate-300 cursor-pointer'
                      }`}
                    >
                      <div className="flex items-center space-x-2.5 flex-1 min-w-0 pr-2">
                        {isReleased ? (
                          <FileText className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                        ) : (
                          <Lock className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                        )}
                        <span className="truncate font-medium">{lesson.title}</span>
                      </div>

                      <div className="flex items-center space-x-2 shrink-0">
                        {isReleased && onOpenQuiz && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onOpenQuiz(lesson);
                            }}
                            className="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-[10px] text-indigo-300 font-mono"
                          >
                            Quiz
                          </button>
                        )}
                        {isReleased ? (
                          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                        ) : (
                          <span className="text-[10px] text-slate-500 font-mono">Unreleased</span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
