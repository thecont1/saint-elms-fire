'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  GraduationCap,
  Network,
  Layers,
  Anchor,
  ChevronDown,
  Activity,
} from 'lucide-react';
import { Navigation, CoronaMark, ModelStatusLights } from '@/components/Navigation';
import { KnowledgeGraphVisualizer } from '@/components/KnowledgeGraphVisualizer';
import { HearthDeck } from '@/components/HearthDeck';
import { MultiFormatViewer } from '@/components/MultiFormatViewer';
import { CoursewareViewer } from '@/components/CoursewareViewer';
import { AdminCourseManager } from '@/components/AdminCourseManager';
import { AdminReleaseManager } from '@/components/AdminReleaseManager';
import { QuizModal } from '@/components/QuizModal';
import { InfoIcon } from '@/components/InfoIcon';
import { WikiPageView } from '@/components/WikiPageView';
import { ModelHelmPanel } from '@/components/ModelHelmPanel';
import type { Course, CourseModule, Lesson, ReleaseEvent, KnowledgeNode, KnowledgeEdge, ProgrammeOutline } from '@/lib/types';
import type { DemoPersona, DemoPersonaId } from '@/lib/demo-session';

interface LmsDashboardClientProps {
  initialCourse: Course | null;
  initialModules: CourseModule[];
  initialLessons: Lesson[];
  initialReleases: ReleaseEvent[];
  initialGraph: { nodes: KnowledgeNode[]; edges: KnowledgeEdge[] };
  programmeOutline?: ProgrammeOutline;
  identity: { userId: string; role: 'admin' | 'student' };
  demoSession?: { selected: DemoPersona; personas: readonly DemoPersona[] };
}

/**
 * Renders the LMS dashboard for student and administrator workflows.
 *
 * @param initialCourse - The course to display initially.
 * @param initialModules - The course modules loaded initially.
 * @param initialLessons - The course lessons loaded initially.
 * @param initialReleases - Release events loaded initially.
 * @param initialGraph - Knowledge graph data loaded initially.
 */
export function LmsDashboardClient({
  initialCourse,
  initialModules = [],
  initialLessons = [],
  initialReleases = [],
  initialGraph = { nodes: [], edges: [] },
  programmeOutline,
  identity,
  demoSession,
}: LmsDashboardClientProps) {
  const role = identity.role;
  const studentId = identity.role === 'admin' ? 'student-ananya' : identity.userId;
  const [isChangingPersona, setIsChangingPersona] = useState(false);

  // Core Data States initialized with server-loaded data
  const [courses, setCourses] = useState<Course[]>(initialCourse ? [initialCourse] : []);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(initialCourse);
  const [modules, setModules] = useState<CourseModule[]>(initialModules);
  const [lessons, setLessons] = useState<Lesson[]>(initialLessons);
  const [releases, setReleases] = useState<ReleaseEvent[]>(initialReleases);
  const [releasedLessons, setReleasedLessons] = useState<Lesson[]>([]);
  const [graphData, setGraphData] = useState<{ nodes: KnowledgeNode[]; edges: KnowledgeEdge[] }>(initialGraph);

  // UI Selection States
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [quizModalLesson, setQuizModalLesson] = useState<Lesson | null>(null);
  const [chatInitialQuery, setChatInitialQuery] = useState('');
  const [wikiNodeId, setWikiNodeId] = useState<string | null>(null);

  // Loading & Sync States
  const [isSyncing, setIsSyncing] = useState(false);
  const [isBooming, setIsBooming] = useState(false);
  const [constellationCollapsed, setConstellationCollapsed] = useState(false);
  const [readerCollapsed, setReaderCollapsed] = useState(false);

  // ── Resizable sidebar ──
  // Persisted in localStorage; defaults to 25% of the 12-col grid (3/12).
  const SIDEBAR_STORAGE_KEY = 'sef-sidebar-width';
  const [sidebarWidth, setSidebarWidth] = useState<number>(300);
  const [isResizing, setIsResizing] = useState(false);
  const resizeStartX = useRef(0);
  const resizeStartWidth = useRef(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const saved = window.localStorage.getItem(SIDEBAR_STORAGE_KEY);
    if (saved) {
      const w = parseInt(saved, 10);
      if (!isNaN(w) && w >= 220 && w <= 600) setSidebarWidth(w);
    }
  }, []);

  const handleResizeStart = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setIsResizing(true);
    resizeStartX.current = e.clientX;
    resizeStartWidth.current = sidebarWidth;
  }, [sidebarWidth]);

  useEffect(() => {
    if (!isResizing) return;
    const handleMove = (e: MouseEvent) => {
      const delta = e.clientX - resizeStartX.current;
      const newWidth = Math.max(220, Math.min(600, resizeStartWidth.current + delta));
      setSidebarWidth(newWidth);
    };
    const handleUp = () => {
      setIsResizing(false);
      setSidebarWidth((w) => {
        if (typeof window !== 'undefined') {
          window.localStorage.setItem(SIDEBAR_STORAGE_KEY, String(w));
        }
        return w;
      });
    };
    document.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseup', handleUp);
    document.body.style.cursor = 'col-resize';
    document.body.style.userSelect = 'none';
    return () => {
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseup', handleUp);
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
    };
  }, [isResizing]);

  // Toggle the admin theme from the server-resolved principal.
  useEffect(() => {
    const root = document.documentElement;
    if (role === 'admin') root.classList.add('admin-theme');
    else root.classList.remove('admin-theme');
    return () => root.classList.remove('admin-theme');
  }, [role]);

  const handlePersonaChange = async (persona: DemoPersonaId) => {
    setIsChangingPersona(true);
    try {
      const response = await fetch('/api/session', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ persona }),
      });
      if (!response.ok) throw new Error(`Session switch failed: ${response.status}`);
      window.location.assign('/');
    } catch (error) {
      console.error(error);
      setIsChangingPersona(false);
    }
  };

  // Compute released lesson/module ID sets from releases (course-agnostic).
  // Used both for the current-course releasedLessons list and for the
  // full-programme outline gating in the left courseware rail.
  const releasedLessonIds = React.useMemo(() => {
    const ids = new Set<string>();
    const modIds = new Set<string>();
    for (const r of releases) {
      const verified = r.overallStatus === 'released'
        || (r.status === 'released' && r.overallStatus === undefined && r.steps === undefined);
      if (!verified) continue;
      for (const targetId of r.targetLessonIds ?? []) ids.add(targetId);
      if (r.lessonId) ids.add(r.lessonId);
      if (!r.targetLessonIds?.length && !r.lessonId && r.moduleId) modIds.add(r.moduleId);
    }
    return { lessonIds: ids, moduleIds: modIds };
  }, [releases]);

  // Compute released lessons and keep selectedLesson within release eligibility
  useEffect(() => {
    if (role === 'admin') {
      setReleasedLessons(lessons);
      if (!selectedLesson || !lessons.some((l) => l.id === selectedLesson.id)) {
        setSelectedLesson(lessons[0] || null);
      }
      return;
    }

    const { lessonIds: releasedIds, moduleIds: releasedModIds } = releasedLessonIds;

    const unLocked = lessons.filter(
      (l) => releasedIds.has(l.id) || releasedModIds.has(l.moduleId)
    );
    setReleasedLessons(unLocked);

    if (unLocked.length === 0) {
      setSelectedLesson(null);
    } else if (!selectedLesson || !unLocked.some((l) => l.id === selectedLesson.id)) {
      setSelectedLesson(unLocked[0]);
    }
  }, [lessons, releases, role, releasedLessonIds]);

  // Handle lesson selection from the full programme outline. If the lesson
  // belongs to a different course than the currently loaded one, fetch that
  // course's modules/lessons first so the reader gets full markdownContent.
  const programmeSelectionRequest = React.useRef(0);
  const handleProgrammeLessonSelect = async (lesson: { id: string; courseId: string }) => {
    const requestId = ++programmeSelectionRequest.current;
    const existing = lessons.find((l) => l.id === lesson.id);
    if (existing) {
      setSelectedLesson(existing);
      setReaderCollapsed(false);
      return;
    }
    // Load the target course's courseware
    setIsSyncing(true);
    try {
      const courseRes = await fetch(`/api/courses/${lesson.courseId}`);
      if (!courseRes.ok) throw new Error(`Failed to load course: ${courseRes.status}`);
      const data = await courseRes.json();
      if (requestId !== programmeSelectionRequest.current) return;
      const targetCourse = courses.find((c) => c.id === lesson.courseId) ?? data.course;
      if (targetCourse) setSelectedCourse(targetCourse);
      setModules(data.modules || []);
      setLessons(data.lessons || []);
      const found = (data.lessons || []).find((l: Lesson) => l.id === lesson.id);
      if (found) {
        setSelectedLesson(found);
        setReaderCollapsed(false);
      }
    } catch (err) {
      if (requestId === programmeSelectionRequest.current) {
        console.error('Failed to load programme lesson:', err);
      }
    } finally {
      if (requestId === programmeSelectionRequest.current) setIsSyncing(false);
    }
  };

  const refreshAllData = async () => {
    setIsSyncing(true);
    try {
      const coursesRes = await fetch('/api/courses');
      const coursesData = await coursesRes.json();
      const loadedCourses = coursesData.courses || [];
      setCourses(loadedCourses);

      if (loadedCourses.length > 0) {
        const primaryCourse = loadedCourses[0];
        setSelectedCourse(primaryCourse);

        const detailsRes = await fetch(`/api/courses/${primaryCourse.id}`);
        const detailsData = await detailsRes.json();
        setModules(detailsData.modules || []);
        setLessons(detailsData.lessons || []);

        // selectedLesson is synchronized by the release-eligibility effect after setLessons
      }

      const releasesRes = await fetch(`/api/releases?studentId=${studentId}`);
      const releasesData = await releasesRes.json();
      setReleases(releasesData.releases || []);

      const graphRes = await fetch(`/api/graph?studentId=${studentId}`);
      const graphJson = await graphRes.json();
      setGraphData({
        nodes: graphJson.nodes || [],
        edges: graphJson.edges || [],
      });
    } catch (err) {
      console.error('Failed to sync data:', err);
    } finally {
      setIsSyncing(false);
    }
  };

  const handleBoom = async () => {
    if (!confirm('Restore Ananya, Brinda, and Chetna to the canonical Phase 9 demo states? Programme courseware is preserved.')) return;
    setIsBooming(true);
    try {
      const response = await fetch('/api/flush', { method: 'POST' });
      if (!response.ok) throw new Error(`Persona restore failed: ${response.status}`);
      window.location.reload();
    } catch (err) {
      console.error('Boom failed:', err);
      setIsBooming(false);
    }
  };

  const handleConceptSelectFromGraph = (concept: string) => {
    setChatInitialQuery(`Can you explain the significance of "${concept}" in our courseware?`);
  };

  // Flatten ALL lessons across the entire programme outline for the header
  // metrics. The `lessons` state only holds one course's lessons (for the
  // Knowledge Reader), but the header cards should reflect the whole voyage.
  const allProgrammeLessons = React.useMemo(() => {
    if (!programmeOutline) return lessons;
    const all: { id: string; moduleId: string }[] = [];
    for (const sem of programmeOutline.semesters) {
      for (const c of sem.courses) {
        for (const mod of c.modules) {
          for (const lesson of mod.lessons) {
            all.push({ id: lesson.id, moduleId: lesson.moduleId });
          }
        }
      }
    }
    for (const c of programmeOutline.orphanCourses) {
      for (const mod of c.modules) {
        for (const lesson of mod.lessons) {
          all.push({ id: lesson.id, moduleId: lesson.moduleId });
        }
      }
    }
    return all;
  }, [programmeOutline, lessons]);

  const releasedProgrammeLessonCount = React.useMemo(() => {
    if (role === 'admin') return allProgrammeLessons.length;
    const { lessonIds, moduleIds } = releasedLessonIds;
    return allProgrammeLessons.filter(
      (l) => lessonIds.has(l.id) || moduleIds.has(l.moduleId)
    ).length;
  }, [allProgrammeLessons, releasedLessonIds, role]);

  const completionPercentage = Math.round(
    (releasedProgrammeLessonCount / Math.max(1, allProgrammeLessons.length)) * 100
  );

  return (
    <div className="min-h-screen flex flex-col bg-transparent text-marine-900">
      {/* 1. TOP HEADER / APP NAVIGATION */}
      <Navigation
        currentRole={role}
        currentPersona={demoSession?.selected}
        personas={demoSession?.personas}
        onPersonaChange={demoSession ? handlePersonaChange : undefined}
        isChangingPersona={isChangingPersona}
        onSync={refreshAllData}
        isSyncing={isSyncing}
        onBoom={role === 'admin' ? handleBoom : undefined}
        isBooming={isBooming}
      />

      {/* 2. HERO — the legend of the fire; scrolls away naturally into the Hearth */}
      <section className="bg-white/90 border-b border-beacon-100">
          <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
            {/* Inspirational ship's motto */}
            <div className="mb-3 border-l-2 border-beacon-300 pl-4">
              <p className="font-display italic text-sm sm:text-base text-marine-800 leading-relaxed">
                “I can see the new horizon underneath the blazing sky, I’ll be where the eagle’s flying, higher and higher...”
              </p>
            </div>

            {/* Ship's-log metrics: single row, responsive to 2x2 on very small screens */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full items-stretch">
              <div className="chart-card px-4 py-4 flex flex-col justify-center h-full">
                <p className="chart-annotation mb-1">Course plotted</p>
                <p className="font-display text-2xl font-semibold text-marine-900">
                  {releasedProgrammeLessonCount}<span className="text-marine-600 text-lg">/{allProgrammeLessons.length}</span>
                </p>
                <p className="text-[11px] text-marine-700 font-medium">lessons unlocked</p>
              </div>
              <div className="chart-card px-4 py-4 flex flex-col justify-center h-full">
                <p className="chart-annotation mb-1">Constellation</p>
                <p className="font-display text-2xl font-semibold text-marine-900">{graphData.nodes.length}</p>
                <p className="text-[11px] text-marine-700 font-medium">stars mapped</p>
              </div>
              <div className="chart-card px-4 py-4 flex flex-col justify-center h-full">
                <p className="chart-annotation mb-1">Voyage</p>
                <p className="font-display text-2xl font-semibold text-beacon-600">{completionPercentage}%</p>
                <p className="text-[11px] text-marine-700 font-medium">complete</p>
              </div>
              <div className="chart-card px-4 py-4 flex flex-col justify-center h-full">
                <div className="flex items-center gap-1.5 mb-1">
                  <Activity className="w-3.5 h-3.5 text-beacon-500" />
                  <p className="chart-annotation">Active models</p>
                </div>
                <ModelStatusLights />
                <p className="text-[11px] text-marine-700 font-medium mt-1.5">latency shown per model</p>
              </div>
            </div>
          </div>
      </section>

      {/* 2.5 THE HEARTH — frozen trident deck (student only); the page
          scrolls into and out of it while the frame never moves */}
      {role === 'student' && (
        <HearthDeck
          studentId={studentId}
          initialQuery={chatInitialQuery}
        />
      )}

      {/* 3. MAIN CONTENT: 3-COLUMN LAYOUT (STUDENT) / 2-COLUMN LAYOUT (ADMIN) */}
      <main className="flex-1 max-w-[1600px] w-full mx-auto pt-2 sm:pt-3 lg:pt-4 px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6 lg:pb-8">
        {/* STUDENT EXPERIENCE: 3 STRUCTURED COLUMNS */}
        {role === 'student' && (
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 items-start">
            {/* COLUMN 1: LEFT CURRICULUM & NAVIGATION RAIL — resizable */}
            <aside
              className="space-y-4 lg:sticky lg:top-20 self-start shrink-0 hidden lg:block"
              style={{ width: `${sidebarWidth}px` }}
            >
              {/* Course Overview Widget */}
              {selectedCourse && (
                <div className="chart-card p-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="chart-annotation text-beacon-600">
                      {selectedCourse.code || 'Course'}
                    </span>
                    <span className="chart-annotation flex items-center gap-1">
                      <GraduationCap className="w-3.5 h-3.5 text-beacon-500" /> Lead course
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-marine-900 leading-snug">
                    {selectedCourse.title}
                  </h3>
                  <p className="text-xs text-marine-700 leading-relaxed line-clamp-2">{selectedCourse.description}</p>

                  {/* Progress — plotted course */}
                  <div className="pt-1">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="chart-annotation">Voyage progress</span>
                      <span className="text-xs font-bold text-beacon-600">{completionPercentage}%</span>
                    </div>
                    <div className="w-full bg-beacon-100 h-1.5 rounded-full overflow-hidden">
                      <div
                        className="bg-beacon-500 h-full rounded-full transition-all duration-500"
                        style={{ width: `${completionPercentage}%` }}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Courseware Modules & Lessons List */}
              <div className="h-[600px]">
                <CoursewareViewer
                  modules={modules}
                  lessons={lessons}
                  releasedLessons={releasedLessons}
                  programmeOutline={programmeOutline}
                  releasedLessonIds={releasedLessonIds.lessonIds}
                  releasedModuleIds={releasedLessonIds.moduleIds}
                  selectedLessonId={selectedLesson?.id || null}
                  onSelectLesson={(lesson) => {
                    setSelectedLesson(lesson);
                    setReaderCollapsed(false);
                  }}
                  onSelectProgrammeLesson={handleProgrammeLessonSelect}
                  onOpenQuiz={(lesson) => setQuizModalLesson(lesson)}
                />
              </div>
            </aside>

            {/* Mobile-only sidebar (not resizable, shown below) */}
            <aside className="lg:hidden space-y-4 w-full">
              {selectedCourse && (
                <div className="chart-card p-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="chart-annotation text-beacon-600">
                      {selectedCourse.code || 'Course'}
                    </span>
                    <span className="chart-annotation flex items-center gap-1">
                      <GraduationCap className="w-3.5 h-3.5 text-beacon-500" /> Lead course
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-marine-900 leading-snug">
                    {selectedCourse.title}
                  </h3>
                  <p className="text-xs text-marine-700 leading-relaxed line-clamp-2">{selectedCourse.description}</p>
                  <div className="pt-1">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="chart-annotation">Voyage progress</span>
                      <span className="text-xs font-bold text-beacon-600">{completionPercentage}%</span>
                    </div>
                    <div className="w-full bg-beacon-100 h-1.5 rounded-full overflow-hidden">
                      <div
                        className="bg-beacon-500 h-full rounded-full transition-all duration-500"
                        style={{ width: `${completionPercentage}%` }}
                      />
                    </div>
                  </div>
                </div>
              )}
              <div className="h-[600px]">
                <CoursewareViewer
                  modules={modules}
                  lessons={lessons}
                  releasedLessons={releasedLessons}
                  programmeOutline={programmeOutline}
                  releasedLessonIds={releasedLessonIds.lessonIds}
                  releasedModuleIds={releasedLessonIds.moduleIds}
                  selectedLessonId={selectedLesson?.id || null}
                  onSelectLesson={(lesson) => {
                    setSelectedLesson(lesson);
                    setReaderCollapsed(false);
                  }}
                  onSelectProgrammeLesson={handleProgrammeLessonSelect}
                  onOpenQuiz={(lesson) => setQuizModalLesson(lesson)}
                />
              </div>
            </aside>

            {/* Drag handle — between sidebar and main content */}
            <div
              onMouseDown={handleResizeStart}
              className="hidden lg:flex w-1.5 cursor-col-resize hover:bg-beacon-300 active:bg-beacon-500 transition-colors self-stretch rounded-full shrink-0"
              role="separator"
              aria-orientation="vertical"
              aria-label="Resize sidebar"
              tabIndex={0}
              style={{ minHeight: '600px' }}
            />

            {/* COLUMN 2: CENTER PRIMARY KNOWLEDGE & SECOND BRAIN CANVAS */}
            <section className="flex-1 min-w-0 space-y-5">
              {/* The Knowledge Reader Card */}
              <div className="chart-card overflow-hidden">
                <button
                  onClick={() => setReaderCollapsed(v => !v)}
                  className="w-full flex items-start justify-between p-5 text-left border-b border-beacon-100"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-beacon-50 border border-beacon-200 text-beacon-600 flex items-center justify-center">
                      <Layers className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-display text-base font-semibold text-marine-900">
                        The Knowledge Reader
                      </h3>
                      <p className="chart-annotation mt-0.5">
                        Sighting: {selectedLesson?.title || 'Selected Lesson'}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <InfoIcon text="The Reader shows your lesson in multiple formats — structured notes, a podcast dialogue script, or a video lecture script — all generated from the same source material." />
                    <ChevronDown className={`w-4 h-4 text-marine-500 transition-transform ${readerCollapsed ? '' : 'rotate-180'}`} />
                  </div>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${readerCollapsed ? 'max-h-0' : 'max-h-[2000px]'}`}>
                  <div className="p-5">
                    <div className="min-h-[500px]">
                      {selectedLesson && releasedLessons.some((l) => l.id === selectedLesson.id) ? (
                        <MultiFormatViewer
                          lesson={selectedLesson}
                          studentId={studentId}
                        />
                      ) : (
                        <div className="p-12 text-center text-xs text-marine-600">
                          Select a lesson from the left column to view its content and generated formats.
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* The Knowledge Constellation Card */}
              <div className="chart-card overflow-hidden">
                <button
                  onClick={() => setConstellationCollapsed(v => !v)}
                  className="w-full flex items-start justify-between p-5 text-left border-b border-beacon-100"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-beacon-50 border border-beacon-200 text-beacon-600 flex items-center justify-center">
                      <Network className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-display text-base font-semibold text-marine-900">
                        The Knowledge Constellation
                      </h3>
                      <p className="chart-annotation mt-0.5">
                        Fixed stars of your unlocked curriculum
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <InfoIcon text="The Knowledge Constellation is a visual map of concepts extracted from your released lessons. Each star is a concept; lines show how they connect. It grows as more lessons are unlocked." />
                    <ChevronDown className={`w-4 h-4 text-marine-500 transition-transform ${constellationCollapsed ? '' : 'rotate-180'}`} />
                  </div>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${constellationCollapsed ? 'max-h-0' : 'max-h-[2000px]'}`}>
                  <div className="p-5">
                    <div className="min-h-[500px]">
                      <KnowledgeGraphVisualizer
                        nodes={graphData.nodes}
                        edges={graphData.edges}
                        onSelectConcept={handleConceptSelectFromGraph}
                        onOpenWiki={setWikiNodeId}
                        isLoading={isSyncing}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ADMIN EXPERIENCE: 2 STRUCTURED COLUMNS */}
        {role === 'admin' && selectedCourse && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-12">
              <ModelHelmPanel />
            </div>
            {/* Admin Left Column: Course Structure & Markdown Upload (5 cols) */}
            <div className="lg:col-span-5 space-y-5">
              <AdminCourseManager
                course={selectedCourse}
                modules={modules}
                lessons={lessons}
                onRefresh={refreshAllData}
              />
            </div>

            {/* Admin Right Column: Incremental Release Manager & Logs (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              <AdminReleaseManager
                courseId={selectedCourse.id}
                modules={modules}
                lessons={lessons}
                releases={releases}
                onRefresh={refreshAllData}
              />
            </div>
          </div>
        )}
      </main>

      {/* Quiz Modal if opened */}
      {quizModalLesson && (
        <QuizModal
          lesson={quizModalLesson}
          studentId={studentId}
          onClose={() => setQuizModalLesson(null)}
          onSubmitted={() => {
            refreshAllData();
          }}
        />
      )}

      {/* 4. FOOTER — the chart's legend */}
      <footer className="bg-white mt-auto">
        {/* Compass-rose divider: dashed line with symbol, balanced spacing */}
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 py-6">
            <div className="course-line flex-1 h-0.5 opacity-60" />
            <CoronaMark className="w-5 h-5 text-beacon-500" />
            <div className="course-line flex-1 h-0.5 opacity-60" />
          </div>

          <div className="pb-24 md:pb-6 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-beacon-600 text-white flex items-center justify-center">
                <CoronaMark className="w-4.5 h-4.5" />
              </div>
              <div>
                <span className="font-display text-sm font-semibold text-marine-900">Saint Elms Fire</span>
                <p className="chart-annotation mt-0.5">© 2026 Mahesh Shantaram. All rights reserved.</p>
              </div>
            </div>

            <p className="text-[11px] text-marine-700 max-w-md leading-relaxed text-center">
              Trust the light, not the thunder. Reasoned knowledge, drip-fed with
              courage, mapped as a constellation, and guarded by Socrates.
            </p>

            <div className="chart-annotation flex items-center gap-4">
              <span>Genkit 1.41</span>
              <span className="h-3 w-px bg-beacon-200" />
              <span>Gemini 3.7 Flash</span>
              <span className="h-3 w-px bg-beacon-200" />
              <span className="flex items-center gap-1.5">
                <Anchor className="w-3 h-3 text-beacon-500" />
                GCP Firestore
              </span>
            </div>
          </div>
        </div>
      </footer>
      {/* Second Brain wiki page (Phase 6, Track B4) */}
      {wikiNodeId && (
        <WikiPageView
          studentId={studentId}
          nodeId={wikiNodeId}
          onClose={() => setWikiNodeId(null)}
          onNavigate={setWikiNodeId}
        />
      )}
    </div>
  );
}
