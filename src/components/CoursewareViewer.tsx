'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { BookOpen, Lock, CheckCircle2, ChevronRight, ChevronDown, FileText, Sparkles, Compass, Layers } from 'lucide-react';
import { InfoIcon } from '@/components/InfoIcon';
import type { CourseModule, Lesson, ProgrammeOutline, ProgrammeOutlineLesson } from '@/lib/types';

interface CoursewareViewerProps {
  modules: CourseModule[];
  lessons: Lesson[];
  releasedLessons: Lesson[];
  /** Full programme outline (all semesters/courses/modules/lessons). When
   * provided, the viewer renders the entire programme tree with locked
   * content visible but non-interactive. */
  programmeOutline?: ProgrammeOutline;
  /** Course-agnostic set of released lesson IDs (from all releases). */
  releasedLessonIds?: Set<string>;
  /** Course-agnostic set of released module IDs (module-level releases). */
  releasedModuleIds?: Set<string>;
  selectedLessonId: string | null;
  onSelectLesson: (lesson: Lesson) => void;
  /** Called when a lesson is selected from the programme outline (may be
   * in a different course than the currently loaded one). */
  onSelectProgrammeLesson?: (lesson: ProgrammeOutlineLesson) => void;
  onOpenQuiz?: (lesson: Lesson) => void;
}

// ── Persistence helpers ─────────────────────────────────────────────────

const STORAGE_KEY_EXPANSION = 'sef-courseware-expansion';

type ExpansionState = {
  semesters: Record<string, boolean>;
  courses: Record<string, boolean>;
};

function loadExpansionState(): ExpansionState | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY_EXPANSION);
    if (!raw) return null;
    return JSON.parse(raw) as ExpansionState;
  } catch {
    return null;
  }
}

function saveExpansionState(state: ExpansionState) {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(STORAGE_KEY_EXPANSION, JSON.stringify(state));
  } catch {
    // ignore quota errors
  }
}

/** Determine the latest semester that has at least one released lesson. */
function findLatestSailingSemester(
  outline: ProgrammeOutline,
  releasedLessonIds: Set<string>,
  releasedModuleIds: Set<string>,
): string | null {
  let latestId: string | null = null;
  let latestOrder = -1;
  for (const sem of outline.semesters) {
    let hasReleased = false;
    for (const c of sem.courses) {
      for (const mod of c.modules) {
        for (const l of mod.lessons) {
          if (releasedLessonIds.has(l.id) || releasedModuleIds.has(l.moduleId)) {
            hasReleased = true;
            break;
          }
        }
        if (hasReleased) break;
      }
      if (hasReleased) break;
    }
    if (hasReleased && sem.order > latestOrder) {
      latestOrder = sem.order;
      latestId = sem.id;
    }
  }
  return latestId;
}

export function CoursewareViewer({
  modules = [],
  lessons = [],
  releasedLessons = [],
  programmeOutline,
  releasedLessonIds,
  releasedModuleIds,
  selectedLessonId,
  onSelectLesson,
  onSelectProgrammeLesson,
  onOpenQuiz,
}: CoursewareViewerProps) {
  const releasedLessonIdSet = releasedLessonIds ?? new Set(releasedLessons.map((l) => l.id));
  const releasedModuleIdSet = releasedModuleIds ?? new Set<string>();
  const completionPercent = Math.round((releasedLessons.length / Math.max(1, lessons.length)) * 100);

  // If we have a programme outline with semesters, render the full tree.
  if (programmeOutline && programmeOutline.semesters.length > 0) {
    return (
      <ProgrammeTree
        outline={programmeOutline}
        releasedLessonIds={releasedLessonIdSet}
        releasedModuleIds={releasedModuleIdSet}
        selectedLessonId={selectedLessonId}
        onSelectProgrammeLesson={onSelectProgrammeLesson}
        onSelectLesson={onSelectLesson}
        currentLessons={lessons}
        onOpenQuiz={onOpenQuiz}
      />
    );
  }

  // Legacy single-course view
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
          const releasedInMod = modLessons.filter((l) => releasedLessonIdSet.has(l.id));
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
                {mod.description && <p className="text-[10px] text-marine-700 mt-0.5 line-clamp-2">{mod.description}</p>}
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
                    <span className="flex items-center gap-1 chart-annotation text-marine-700 bg-beacon-50 px-2 py-1 rounded-full border border-beacon-100">
                      <Lock className="w-3 h-3" /> Fogbound
                    </span>
                  )}
                </div>
              </div>

              {/* Lessons within Module */}
              <div className="divide-y divide-beacon-50">
                {modLessons.map((lesson) => {
                  const isReleased = releasedLessonIdSet.has(lesson.id) || releasedModuleIdSet.has(lesson.moduleId);
                  const isSelected = selectedLessonId === lesson.id;

                  return (
                    <div
                      key={lesson.id}
                      onClick={() => {
                        if (isReleased) onSelectLesson(lesson);
                      }}
                      className={`p-3 flex items-center justify-between text-xs transition ${
                        !isReleased
                          ? 'cursor-not-allowed'
                          : isSelected
                          ? 'bg-beacon-50 text-beacon-900 font-semibold border-l-2 border-beacon-600 cursor-pointer'
                          : 'hover:bg-beacon-50/60 text-marine-900 cursor-pointer'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 flex-1 min-w-0 pr-2">
                        {isReleased ? (
                          <FileText className="w-4 h-4 text-beacon-500 shrink-0" />
                        ) : (
                          <Lock className="w-4 h-4 text-marine-600 shrink-0" />
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

// ── Full Programme Tree ─────────────────────────────────────────────────

interface ProgrammeTreeProps {
  outline: ProgrammeOutline;
  releasedLessonIds: Set<string>;
  releasedModuleIds: Set<string>;
  selectedLessonId: string | null;
  onSelectProgrammeLesson?: (lesson: ProgrammeOutlineLesson) => void;
  onSelectLesson: (lesson: Lesson) => void;
  currentLessons: Lesson[];
  onOpenQuiz?: (lesson: Lesson) => void;
}

function ProgrammeTree({
  outline,
  releasedLessonIds,
  releasedModuleIds,
  selectedLessonId,
  onSelectProgrammeLesson,
  onSelectLesson,
  currentLessons,
  onOpenQuiz,
}: ProgrammeTreeProps) {
  // Count total and released lessons across the entire programme
  let totalLessons = 0;
  let releasedCount = 0;
  for (const sem of outline.semesters) {
    for (const c of sem.courses) {
      for (const mod of c.modules) {
        totalLessons += mod.lessons.length;
        for (const l of mod.lessons) {
          if (releasedLessonIds.has(l.id) || releasedModuleIds.has(l.moduleId)) releasedCount++;
        }
      }
    }
  }
  for (const c of outline.orphanCourses) {
    for (const mod of c.modules) {
      totalLessons += mod.lessons.length;
      for (const l of mod.lessons) {
        if (releasedLessonIds.has(l.id) || releasedModuleIds.has(l.moduleId)) releasedCount++;
      }
    }
  }

  const programmePercent = Math.round((releasedCount / Math.max(1, totalLessons)) * 100);

  // ── Expansion state with persistence ──
  // Default: only the latest sailing semester is expanded; all others
  // collapsed. Within the expanded semester, all courses are collapsed.
  const latestSailingSemId = React.useMemo(
    () => findLatestSailingSemester(outline, releasedLessonIds, releasedModuleIds),
    [outline, releasedLessonIds, releasedModuleIds],
  );

  const [expansionState, setExpansionState] = useState<ExpansionState>(() => {
    const saved = loadExpansionState();
    if (saved) return saved;
    // Compute default: latest sailing semester expanded, rest collapsed
    const semesters: Record<string, boolean> = {};
    for (const sem of outline.semesters) {
      semesters[sem.id] = sem.id === latestSailingSemId;
    }
    return { semesters, courses: {} };
  });

  // Persist on every change
  useEffect(() => {
    saveExpansionState(expansionState);
  }, [expansionState]);

  const toggleSemester = useCallback((semId: string) => {
    setExpansionState((prev) => ({
      ...prev,
      semesters: { ...prev.semesters, [semId]: !prev.semesters[semId] },
    }));
  }, []);

  const toggleCourse = useCallback((courseId: string) => {
    setExpansionState((prev) => ({
      ...prev,
      courses: { ...prev.courses, [courseId]: !prev.courses[courseId] },
    }));
  }, []);

  return (
    <div className="chart-card overflow-hidden flex flex-col h-full">
      {/* Header — programme-wide view */}
      <div className="p-4 border-b border-beacon-100 bg-beacon-50/60 flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-white border border-beacon-200 text-beacon-600 flex items-center justify-center">
            <Compass className="w-4 h-4" />
          </div>
          <div>
            <h3 className="font-display text-sm font-semibold text-marine-900">The Charted Voyage</h3>
            <p className="chart-annotation mt-0.5">
              {releasedCount} of {totalLessons} waypoints across the programme
            </p>
          </div>
        </div>

        <div className="flex flex-col items-end gap-1">
          <InfoIcon text="The Charted Voyage shows your entire programme from Semester I onward. Future courses and lessons are visible so you can see what's ahead, but only unlocked lessons can be opened, read, or quizzed." />
          <div className="chart-annotation px-2.5 py-1 rounded-full bg-white border border-beacon-200 text-beacon-700 font-semibold">
            {programmePercent}%
          </div>
        </div>
      </div>

      {/* Programme Tree */}
      <div className="flex-1 p-3.5 overflow-y-auto space-y-3">
        {outline.semesters.map((sem) => (
          <SemesterGroup
            key={sem.id}
            semester={sem}
            releasedLessonIds={releasedLessonIds}
            releasedModuleIds={releasedModuleIds}
            selectedLessonId={selectedLessonId}
            onSelectProgrammeLesson={onSelectProgrammeLesson}
            onSelectLesson={onSelectLesson}
            currentLessons={currentLessons}
            onOpenQuiz={onOpenQuiz}
            expanded={expansionState.semesters[sem.id] ?? false}
            onToggleSemester={() => toggleSemester(sem.id)}
            courseExpansion={expansionState.courses}
            onToggleCourse={toggleCourse}
          />
        ))}

        {outline.orphanCourses.length > 0 && (
          <SemesterGroup
            semester={{
              id: 'orphan',
              title: 'Unplaced Courses',
              semesterNumber: 0,
              order: 999,
              synthesized: true,
              courses: outline.orphanCourses,
            }}
            releasedLessonIds={releasedLessonIds}
            releasedModuleIds={releasedModuleIds}
            selectedLessonId={selectedLessonId}
            onSelectProgrammeLesson={onSelectProgrammeLesson}
            onSelectLesson={onSelectLesson}
            currentLessons={currentLessons}
            onOpenQuiz={onOpenQuiz}
            expanded={expansionState.semesters['orphan'] ?? false}
            onToggleSemester={() => toggleSemester('orphan')}
            courseExpansion={expansionState.courses}
            onToggleCourse={toggleCourse}
          />
        )}
      </div>
    </div>
  );
}

interface SemesterGroupProps {
  semester: ProgrammeOutline['semesters'][number];
  releasedLessonIds: Set<string>;
  releasedModuleIds: Set<string>;
  selectedLessonId: string | null;
  onSelectProgrammeLesson?: (lesson: ProgrammeOutlineLesson) => void;
  onSelectLesson: (lesson: Lesson) => void;
  currentLessons: Lesson[];
  onOpenQuiz?: (lesson: Lesson) => void;
  expanded: boolean;
  onToggleSemester: () => void;
  courseExpansion: Record<string, boolean>;
  onToggleCourse: (courseId: string) => void;
}

function SemesterGroup({
  semester,
  releasedLessonIds,
  releasedModuleIds,
  selectedLessonId,
  onSelectProgrammeLesson,
  onSelectLesson,
  currentLessons,
  onOpenQuiz,
  expanded,
  onToggleSemester,
  courseExpansion,
  onToggleCourse,
}: SemesterGroupProps) {
  // Count released lessons in this semester
  let semTotal = 0;
  let semReleased = 0;
  for (const c of semester.courses) {
    for (const mod of c.modules) {
      semTotal += mod.lessons.length;
      for (const l of mod.lessons) {
        if (releasedLessonIds.has(l.id) || releasedModuleIds.has(l.moduleId)) semReleased++;
      }
    }
  }
  const semFullyLocked = semReleased === 0 && semTotal > 0;

  return (
    <div className="rounded-xl border border-beacon-200 bg-white overflow-hidden">
      {/* Semester Header */}
      <button
        onClick={onToggleSemester}
        className="w-full p-3 bg-beacon-50/70 border-b border-beacon-100 flex items-center justify-between gap-2 text-left hover:bg-beacon-50 transition"
        aria-expanded={expanded}
      >
        <div className="flex items-center gap-2 min-w-0">
          <ChevronDown className={`w-4 h-4 text-beacon-600 shrink-0 transition-transform ${expanded ? '' : '-rotate-90'}`} />
          <div className="min-w-0">
            <h4 className="text-xs font-bold text-marine-900 truncate">
              {semester.title}
            </h4>
            <p className="chart-annotation text-beacon-600 mt-0.5">
              {semReleased}/{semTotal} waypoints
              {semester.synthesized && ' · draft'}
            </p>
          </div>
        </div>
        <div className="flex items-center shrink-0">
          {semFullyLocked ? (
            <span className="flex items-center gap-1 chart-annotation text-marine-700 bg-beacon-50 px-2 py-1 rounded-full border border-beacon-100">
              <Lock className="w-3 h-3" /> Ahead
            </span>
          ) : semReleased === semTotal && semTotal > 0 ? (
            <span className="flex items-center gap-1 chart-annotation text-beacon-700 bg-white px-2 py-1 rounded-full border border-beacon-200">
              <CheckCircle2 className="w-3 h-3 text-beacon-500" /> Charted
            </span>
          ) : (
            <span className="flex items-center gap-1 chart-annotation text-beacon-600 bg-white px-2 py-1 rounded-full border border-beacon-200">
              <Sparkles className="w-3 h-3 text-beacon-500" /> Sailing
            </span>
          )}
        </div>
      </button>

      {/* Courses within Semester */}
      {expanded && (
        <div className="p-2 space-y-2">
          {semester.courses.map(({ course, modules }) => (
            <CourseGroup
              key={course.id}
              courseId={course.id}
              courseTitle={course.title}
              courseCode={course.code}
              modules={modules}
              releasedLessonIds={releasedLessonIds}
              releasedModuleIds={releasedModuleIds}
              selectedLessonId={selectedLessonId}
              onSelectProgrammeLesson={onSelectProgrammeLesson}
              onSelectLesson={onSelectLesson}
              currentLessons={currentLessons}
              onOpenQuiz={onOpenQuiz}
              expanded={courseExpansion[course.id] ?? false}
              onToggle={() => onToggleCourse(course.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

interface CourseGroupProps {
  courseId: string;
  courseTitle: string;
  courseCode?: string;
  modules: ProgrammeOutline['semesters'][number]['courses'][number]['modules'];
  releasedLessonIds: Set<string>;
  releasedModuleIds: Set<string>;
  selectedLessonId: string | null;
  onSelectProgrammeLesson?: (lesson: ProgrammeOutlineLesson) => void;
  onSelectLesson: (lesson: Lesson) => void;
  currentLessons: Lesson[];
  onOpenQuiz?: (lesson: Lesson) => void;
  expanded: boolean;
  onToggle: () => void;
}

function CourseGroup({
  courseId,
  courseTitle,
  courseCode,
  modules,
  releasedLessonIds,
  releasedModuleIds,
  selectedLessonId,
  onSelectProgrammeLesson,
  onSelectLesson,
  currentLessons,
  onOpenQuiz,
  expanded,
  onToggle,
}: CourseGroupProps) {
  return (
    <div className="rounded-lg border border-beacon-100 bg-beacon-50/30 overflow-hidden">
      {/* Course Header */}
      <button
        onClick={onToggle}
        className="w-full px-3 py-2 flex items-center gap-2 text-left hover:bg-beacon-50/60 transition"
        aria-expanded={expanded}
      >
        <ChevronDown className={`w-3.5 h-3.5 text-beacon-500 shrink-0 transition-transform ${expanded ? '' : '-rotate-90'}`} />
        <Layers className="w-3.5 h-3.5 text-beacon-500 shrink-0" />
        <div className="min-w-0">
          {courseCode && <span className="chart-annotation text-beacon-600 mr-1.5">{courseCode}</span>}
          <span className="text-[11px] font-bold text-marine-900 truncate">{courseTitle}</span>
        </div>
      </button>

      {/* Modules within Course */}
      {expanded && (
        <div className="divide-y divide-beacon-50">
          {modules.map((mod) => {
            const modLessons = mod.lessons;
            const releasedInMod = modLessons.filter(
              (l) => releasedLessonIds.has(l.id) || releasedModuleIds.has(l.moduleId)
            );
            const isModFullyUnlocked = modLessons.length > 0 && releasedInMod.length === modLessons.length;
            const isModPartiallyUnlocked = releasedInMod.length > 0 && !isModFullyUnlocked;

            return (
              <div key={mod.id}>
                {/* Module sub-header */}
                <div className="px-3 py-1.5 bg-white/50 flex items-center justify-between gap-2">
                  <div className="min-w-0">
                    <span className="chart-annotation text-beacon-700">Leg {mod.order}</span>
                    <span className="text-[10px] font-semibold text-marine-900 ml-1.5 truncate">{mod.title}</span>
                  </div>
                  <div className="flex items-center shrink-0">
                    {isModFullyUnlocked ? (
                      <CheckCircle2 className="w-3 h-3 text-beacon-500" />
                    ) : isModPartiallyUnlocked ? (
                      <Sparkles className="w-3 h-3 text-beacon-500" />
                    ) : (
                      <Lock className="w-3 h-3 text-marine-500" />
                    )}
                  </div>
                </div>

                {/* Lessons */}
                {modLessons.map((lesson) => {
                  const isReleased = releasedLessonIds.has(lesson.id) || releasedModuleIds.has(lesson.moduleId);
                  const isSelected = selectedLessonId === lesson.id;
                  const fullLesson = currentLessons.find((l) => l.id === lesson.id);

                  const handleClick = () => {
                    if (!isReleased) return;
                    if (fullLesson) {
                      onSelectLesson(fullLesson);
                    } else if (onSelectProgrammeLesson) {
                      onSelectProgrammeLesson(lesson);
                    }
                  };

                  const handleQuiz = (e: React.MouseEvent) => {
                    e.stopPropagation();
                    if (isReleased && onOpenQuiz && fullLesson) onOpenQuiz(fullLesson);
                  };

                  const handleKeyDown = (e: React.KeyboardEvent) => {
                    if (!isReleased || (e.key !== 'Enter' && e.key !== ' ')) return;
                    e.preventDefault();
                    handleClick();
                  };

                  return (
                    <div
                      key={lesson.id}
                      onClick={handleClick}
                      onKeyDown={handleKeyDown}
                      role={isReleased ? 'button' : undefined}
                      tabIndex={isReleased ? 0 : -1}
                      className={`px-3 py-2 flex items-center justify-between text-xs transition ${
                        !isReleased
                          ? 'cursor-not-allowed'
                          : isSelected
                          ? 'bg-beacon-50 text-beacon-900 font-semibold border-l-2 border-beacon-600 cursor-pointer'
                          : 'hover:bg-beacon-50/60 text-marine-900 cursor-pointer'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 flex-1 min-w-0 pr-2">
                        {isReleased ? (
                          <FileText className="w-3.5 h-3.5 text-beacon-500 shrink-0" />
                        ) : (
                          <Lock className="w-3.5 h-3.5 text-marine-600 shrink-0" />
                        )}
                        <span className="truncate">{lesson.title}</span>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        {isReleased && onOpenQuiz && fullLesson && (
                          <button
                            onClick={handleQuiz}
                            className="px-2 py-0.5 rounded-full bg-white hover:bg-beacon-50 text-[10px] text-beacon-700 font-bold border border-beacon-200 transition"
                          >
                            Quiz
                          </button>
                        )}
                        {isReleased ? (
                          <ChevronRight className="w-3.5 h-3.5 text-beacon-300" />
                        ) : (
                          <span className="chart-annotation">Locked</span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
