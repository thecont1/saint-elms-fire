'use client';

import React from 'react';
import { BookOpen, Lock, CheckCircle2, ChevronRight, FileText, Sparkles } from 'lucide-react';
import { InfoIcon } from '@/components/InfoIcon';
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
    <div className="chart-card overflow-hidden flex flex-col h-full">
      {/* Header */}
      <div className="p-4 border-b border-beacon-100 bg-beacon-50/60 flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-white border border-beacon-200 text-beacon-600 flex items-center justify-center">
            <BookOpen className="w-4 h-4" />
          </div>
          <div>
            <h3 className="font-display text-sm font-semibold text-marine-900">The Charted Course</h3>
            <p className="chart-annotation mt-0.5">
              {releasedLessons.length} of {lessons.length} waypoints reached
            </p>
          </div>
        </div>

        {/* Completion annotation */}
        <div className="flex flex-col items-end gap-1">
          <InfoIcon text="The Charted Course is your lesson list. Lessons are released incrementally by your instructor. Locked lessons become available as they are unlocked for your voyage." />
          <div className="chart-annotation px-2.5 py-1 rounded-full bg-white border border-beacon-200 text-beacon-700 font-semibold">
            {completionPercent}%
          </div>
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
              className="rounded-xl border border-beacon-100 bg-white overflow-hidden transition hover:border-beacon-300"
            >
              {/* Module Header */}
              <div className="p-3 bg-beacon-50/50 border-b border-beacon-100 flex items-center justify-between gap-2">
                <div className="min-w-0">
                  <span className="chart-annotation text-beacon-600">
                    Leg {mod.order}
                  </span>
                  <h4 className="text-xs font-bold text-marine-900 truncate">{mod.title}</h4>
                {mod.description && <p className="text-[10px] text-marine-500 mt-0.5 line-clamp-2">{mod.description}</p>}
                </div>

                <div className="flex items-center shrink-0">
                  {isModFullyUnlocked ? (
                    <span className="flex items-center gap-1 chart-annotation text-beacon-700 bg-white px-2 py-1 rounded-full border border-beacon-200">
                      <CheckCircle2 className="w-3 h-3 text-beacon-500" /> Charted
                    </span>
                  ) : isModPartiallyUnlocked ? (
                    <span className="flex items-center gap-1 chart-annotation text-beacon-600 bg-white px-2 py-1 rounded-full border border-beacon-200">
                      <Sparkles className="w-3 h-3 text-beacon-500" /> Sailing
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 chart-annotation text-marine-400 bg-beacon-50 px-2 py-1 rounded-full border border-beacon-100">
                      <Lock className="w-3 h-3" /> Fogbound
                    </span>
                  )}
                </div>
              </div>

              {/* Lessons within Module */}
              <div className="divide-y divide-beacon-50">
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
                          ? 'opacity-45 cursor-not-allowed'
                          : isSelected
                          ? 'bg-beacon-50 text-beacon-900 font-semibold border-l-2 border-beacon-600 cursor-pointer'
                          : 'hover:bg-beacon-50/60 text-marine-700 cursor-pointer'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 flex-1 min-w-0 pr-2">
                        {isReleased ? (
                          <FileText className="w-4 h-4 text-beacon-500 shrink-0" />
                        ) : (
                          <Lock className="w-4 h-4 text-marine-400 shrink-0" />
                        )}
                        <span className="truncate">{lesson.title}</span>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        {isReleased && onOpenQuiz && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onOpenQuiz(lesson);
                            }}
                            className="px-2.5 py-0.5 rounded-full bg-white hover:bg-beacon-50 text-[11px] text-beacon-700 font-bold border border-beacon-200 transition"
                          >
                            Quiz
                          </button>
                        )}
                        {isReleased ? (
                          <ChevronRight className="w-4 h-4 text-beacon-300" />
                        ) : (
                          <span className="chart-annotation">Locked</span>
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
