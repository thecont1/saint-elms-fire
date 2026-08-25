'use client';

import React from 'react';
import { BookOpen, Lock, CheckCircle2, ChevronRight, Layers, FileText, Sparkles, Compass } from 'lucide-react';
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
  const completionPercent = Math.round((releasedLessons.length / Math.max(1, lessons.length)) * 100);

  return (
    <div className="bg-white rounded-2xl border border-sky-100 shadow-xl shadow-sky-500/5 overflow-hidden flex flex-col h-full">
      {/* Header */}
      <div className="p-4 border-b border-sky-100 bg-gradient-to-r from-sky-50/80 via-white to-blue-50/40 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-2 rounded-xl bg-sky-100 border border-sky-200 text-sky-700 shadow-2xs">
            <BookOpen className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900">Curriculum Progression</h3>
            <p className="text-xs text-slate-500">
              {releasedLessons.length} of {lessons.length} Lessons Unlocked
            </p>
          </div>
        </div>

        {/* Completion Pill */}
        <div className="text-xs px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-800 font-bold">
          {completionPercent}% Unlocked
        </div>
      </div>

      {/* Modules List */}
      <div className="flex-1 p-3.5 overflow-y-auto space-y-3">
        {modules.map((mod) => {
          const modLessons = lessons.filter((l) => l.moduleId === mod.id);
          const releasedInMod = modLessons.filter((l) => releasedLessonIds.has(l.id));
          const isModFullyUnlocked = modLessons.length > 0 && releasedInMod.length === modLessons.length;
          const isModPartiallyUnlocked = releasedInMod.length > 0 && !isModFullyUnlocked;

          return (
            <div
              key={mod.id}
              className="rounded-xl border border-slate-200/80 bg-slate-50/50 overflow-hidden shadow-2xs transition hover:border-sky-200"
            >
              {/* Module Header */}
              <div className="p-3 bg-white border-b border-slate-200/80 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-sky-700 uppercase tracking-wider font-extrabold">
                    Module {mod.order}
                  </span>
                  <h4 className="text-xs font-bold text-slate-900">{mod.title}</h4>
                </div>

                <div className="flex items-center space-x-1.5">
                  {isModFullyUnlocked ? (
                    <span className="flex items-center gap-1 text-[10px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Unlocked
                    </span>
                  ) : isModPartiallyUnlocked ? (
                    <span className="flex items-center gap-1 text-[10px] text-sky-700 font-bold bg-sky-50 px-2 py-0.5 rounded-full border border-sky-200">
                      <Sparkles className="w-3 h-3 text-sky-600" /> In Progress
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-[10px] text-slate-400 font-medium bg-slate-100 px-2 py-0.5 rounded-full">
                      <Lock className="w-3 h-3" /> Locked
                    </span>
                  )}
                </div>
              </div>

              {/* Lessons within Module */}
              <div className="divide-y divide-slate-100">
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
                          ? 'opacity-40 cursor-not-allowed bg-slate-50/30'
                          : isSelected
                          ? 'bg-sky-50 text-sky-950 font-semibold border-l-3 border-sky-600 cursor-pointer shadow-2xs'
                          : 'hover:bg-white text-slate-700 cursor-pointer'
                      }`}
                    >
                      <div className="flex items-center space-x-2.5 flex-1 min-w-0 pr-2">
                        {isReleased ? (
                          <FileText className="w-4 h-4 text-sky-600 shrink-0" />
                        ) : (
                          <Lock className="w-4 h-4 text-slate-400 shrink-0" />
                        )}
                        <span className="truncate">{lesson.title}</span>
                      </div>

                      <div className="flex items-center space-x-2 shrink-0">
                        {isReleased && onOpenQuiz && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onOpenQuiz(lesson);
                            }}
                            className="px-2.5 py-0.5 rounded-md bg-white hover:bg-sky-50 text-[11px] text-sky-700 font-bold border border-sky-200 shadow-2xs transition"
                          >
                            Quiz
                          </button>
                        )}
                        {isReleased ? (
                          <ChevronRight className="w-4 h-4 text-slate-400" />
                        ) : (
                          <span className="text-[10px] text-slate-400 font-medium">Locked</span>
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
