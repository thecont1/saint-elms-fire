'use client';

import React, { useState, useEffect } from 'react';
import {
  Compass,
  GraduationCap,
  Network,
  Layers,
  Anchor,
  Star,
} from 'lucide-react';
import { Navigation, CoronaMark, ModelStatusLights } from '@/components/Navigation';
import { KnowledgeGraphVisualizer } from '@/components/KnowledgeGraphVisualizer';
import { StudentChat } from '@/components/StudentChat';
import { MultiFormatViewer } from '@/components/MultiFormatViewer';
import { SocraticTutorCard } from '@/components/SocraticTutorCard';
import { CoursewareViewer } from '@/components/CoursewareViewer';
import { AdminCourseManager } from '@/components/AdminCourseManager';
import { AdminReleaseManager } from '@/components/AdminReleaseManager';
import { QuizModal } from '@/components/QuizModal';
import type { Course, CourseModule, Lesson, ReleaseEvent, KnowledgeNode, KnowledgeEdge, SocraticSession } from '@/lib/types';

interface LmsDashboardClientProps {
  initialCourse: Course | null;
  initialModules: CourseModule[];
  initialLessons: Lesson[];
  initialReleases: ReleaseEvent[];
  initialGraph: { nodes: KnowledgeNode[]; edges: KnowledgeEdge[] };
  initialSocraticSession: SocraticSession | null;
}

export function LmsDashboardClient({
  initialCourse,
  initialModules = [],
  initialLessons = [],
  initialReleases = [],
  initialGraph = { nodes: [], edges: [] },
  initialSocraticSession,
}: LmsDashboardClientProps) {
  const [role, setRole] = useState<'admin' | 'student'>('student');
  const [studentId, setStudentId] = useState('student-alex');

  // Core Data States initialized with server-loaded data
  const [courses, setCourses] = useState<Course[]>(initialCourse ? [initialCourse] : []);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(initialCourse);
  const [modules, setModules] = useState<CourseModule[]>(initialModules);
  const [lessons, setLessons] = useState<Lesson[]>(initialLessons);
  const [releases, setReleases] = useState<ReleaseEvent[]>(initialReleases);
  const [releasedLessons, setReleasedLessons] = useState<Lesson[]>([]);
  const [graphData, setGraphData] = useState<{ nodes: KnowledgeNode[]; edges: KnowledgeEdge[] }>(initialGraph);

  // UI Selection States
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(initialLessons[0] || null);
  const [centerTab, setCenterTab] = useState<'graph' | 'multimodal'>('graph');
  const [quizModalLesson, setQuizModalLesson] = useState<Lesson | null>(null);
  const [chatInitialQuery, setChatInitialQuery] = useState('');

  // Loading & Sync States
  const [isSyncing, setIsSyncing] = useState(false);

  // Compute released lessons
  useEffect(() => {
    const releasedIds = new Set<string>();
    const releasedModIds = new Set<string>();

    for (const r of releases) {
      const verified = r.overallStatus === 'released'
        || (r.status === 'released' && r.overallStatus === undefined && r.steps === undefined);
      if (!verified) continue;
      for (const targetId of r.targetLessonIds ?? []) releasedIds.add(targetId);
      if (r.lessonId) releasedIds.add(r.lessonId);
      if (!r.targetLessonIds?.length && !r.lessonId && r.moduleId) releasedModIds.add(r.moduleId);
    }

    const unLocked = lessons.filter(
      (l) => releasedIds.has(l.id) || releasedModIds.has(l.moduleId)
    );
    setReleasedLessons(unLocked);

    if (unLocked.length > 0 && (!selectedLesson || !unLocked.some((l) => l.id === selectedLesson.id))) {
      setSelectedLesson(unLocked[0]);
    }
  }, [lessons, releases]);

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

        if (detailsData.lessons && detailsData.lessons.length > 0 && !selectedLesson) {
          setSelectedLesson(detailsData.lessons[0]);
        }
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

  const handleConceptSelectFromGraph = (concept: string) => {
    setChatInitialQuery(`Can you explain the significance of "${concept}" in our courseware?`);
  };

  const completionPercentage = Math.round((releasedLessons.length / Math.max(1, lessons.length)) * 100);

  return (
    <div className="min-h-screen flex flex-col bg-transparent text-marine-900">
      {/* 1. TOP HEADER / APP NAVIGATION */}
      <Navigation
        currentRole={role}
        onRoleChange={setRole}
        onSync={refreshAllData}
        isSyncing={isSyncing}
      />

      {/* 2. HERO — the legend of the fire */}
      <section className="border-b border-beacon-100 bg-white/60">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="chart-annotation flex items-center gap-2 mb-3">
                <Star className="w-3.5 h-3.5 text-beacon-500" />
                The light sailors trusted at the masthead
              </p>
              <h1 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight text-marine-950 leading-[1.05]">
                Guidance through<br />the <span className="text-beacon-600 italic">storm</span>.
              </h1>
              <p className="mt-4 text-sm sm:text-[15px] text-marine-600 leading-relaxed max-w-xl">
                When St. Elmo's Fire danced blue upon the rigging, sailors knew the worst
                of the tempest was behind them — a corona of science, not superstition.
                This is that light for learners: knowledge held steady against the
                unknown, one unlocked lesson at a time.
              </p>
            </div>

            {/* Ship's-log metrics: 2x2 matrix, stretches to match hero text height */}
            <div className="grid grid-cols-2 gap-3 w-full sm:w-auto sm:min-w-[320px] items-stretch self-stretch">
              <div className="chart-card px-4 py-4 flex flex-col justify-center h-full">
                <p className="chart-annotation mb-1">Course plotted</p>
                <p className="font-display text-2xl font-semibold text-marine-900">
                  {releasedLessons.length}<span className="text-marine-400 text-lg">/{lessons.length}</span>
                </p>
                <p className="text-[11px] text-marine-500 font-medium">lessons unlocked</p>
              </div>
              <div className="chart-card px-4 py-4 flex flex-col justify-center h-full">
                <p className="chart-annotation mb-1">Constellation</p>
                <p className="font-display text-2xl font-semibold text-marine-900">{graphData.nodes.length}</p>
                <p className="text-[11px] text-marine-500 font-medium">stars mapped</p>
              </div>
              <div className="chart-card px-4 py-4 flex flex-col justify-center h-full">
                <p className="chart-annotation mb-1">Voyage</p>
                <p className="font-display text-2xl font-semibold text-beacon-600">{completionPercentage}%</p>
                <p className="text-[11px] text-marine-500 font-medium">complete</p>
              </div>
              <div className="chart-card px-4 py-4 flex flex-col justify-center h-full">
                <p className="chart-annotation mb-1">Active models</p>
                <ModelStatusLights />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MAIN CONTENT: 3-COLUMN LAYOUT (STUDENT) / 2-COLUMN LAYOUT (ADMIN) */}
      <main className="flex-1 max-w-[1600px] w-full mx-auto p-4 sm:p-6 lg:p-8">
        {/* STUDENT EXPERIENCE: 3 STRUCTURED COLUMNS */}
        {role === 'student' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* COLUMN 1: LEFT CURRICULUM & NAVIGATION RAIL (3 cols) */}
            <aside className="lg:col-span-3 space-y-4">
              {/* Course Overview Widget */}
              {selectedCourse && (
                <div className="chart-card p-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="chart-annotation text-beacon-600">
                      {selectedCourse.code || 'CS-850'}
                    </span>
                    <span className="chart-annotation flex items-center gap-1">
                      <GraduationCap className="w-3.5 h-3.5 text-beacon-500" /> Lead course
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-marine-900 leading-snug">
                    {selectedCourse.title}
                  </h3>
                  <p className="text-xs text-marine-500 leading-relaxed line-clamp-2">{selectedCourse.description}</p>

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
                  selectedLessonId={selectedLesson?.id || null}
                  onSelectLesson={(lesson) => {
                    setSelectedLesson(lesson);
                    setCenterTab('multimodal');
                  }}
                  onOpenQuiz={(lesson) => setQuizModalLesson(lesson)}
                />
              </div>
            </aside>

            {/* COLUMN 2: CENTER PRIMARY KNOWLEDGE & SECOND BRAIN CANVAS (6 cols) */}
            <section className="lg:col-span-6 space-y-5">
              {/* Top: Proactive Socratic Tutor Card (Agent-Initiated Challenge) */}
              <SocraticTutorCard studentId={studentId} />

              {/* Center Canvas Header with View Mode Switcher */}
              <div className="chart-card p-5 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-beacon-100 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-beacon-50 border border-beacon-200 text-beacon-600 flex items-center justify-center">
                      {centerTab === 'graph' ? (
                        <Network className="w-4 h-4" />
                      ) : (
                        <Layers className="w-4 h-4" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-display text-base font-semibold text-marine-900">
                        {centerTab === 'graph'
                          ? 'The Knowledge Constellation'
                          : 'Multimodal Courseware Reader'}
                      </h3>
                      <p className="chart-annotation mt-0.5">
                        {centerTab === 'graph'
                          ? 'Fixed stars of your unlocked curriculum'
                          : `Sighting: ${selectedLesson?.title || 'Selected Lesson'}`}
                      </p>
                    </div>
                  </div>

                  {/* View Mode Toggle */}
                  <div className="flex gap-1 bg-beacon-50 p-1 rounded-full border border-beacon-100">
                    <button
                      onClick={() => setCenterTab('graph')}
                      className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition ${
                        centerTab === 'graph'
                          ? 'bg-beacon-600 text-white shadow-sm'
                          : 'text-marine-500 hover:text-marine-800'
                      }`}
                    >
                      <Network className="w-3.5 h-3.5" />
                      <span>Constellation</span>
                    </button>

                    <button
                      onClick={() => setCenterTab('multimodal')}
                      className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition ${
                        centerTab === 'multimodal'
                          ? 'bg-beacon-600 text-white shadow-sm'
                          : 'text-marine-500 hover:text-marine-800'
                      }`}
                    >
                      <Layers className="w-3.5 h-3.5" />
                      <span>Reader</span>
                    </button>
                  </div>
                </div>

                {/* Primary Canvas Body */}
                <div className="min-h-[500px]">
                  {centerTab === 'graph' ? (
                    <KnowledgeGraphVisualizer
                      nodes={graphData.nodes}
                      edges={graphData.edges}
                      onSelectConcept={handleConceptSelectFromGraph}
                      isLoading={isSyncing}
                    />
                  ) : selectedLesson ? (
                    <MultiFormatViewer
                      lesson={selectedLesson}
                      studentId={studentId}
                    />
                  ) : (
                    <div className="p-12 text-center text-xs text-marine-400">
                      Select a lesson from the left column to view its content and generated formats.
                    </div>
                  )}
                </div>
              </div>
            </section>

            {/* COLUMN 3: RIGHT ACADEMIC TUTOR CHAT RAIL (3 cols) */}
            <aside className="lg:col-span-3 space-y-4">
              <div className="h-[760px] sticky top-20">
                <StudentChat
                  studentId={studentId}
                  releasedLessonCount={releasedLessons.length}
                  initialQuery={chatInitialQuery}
                />
              </div>
            </aside>
          </div>
        )}

        {/* ADMIN EXPERIENCE: 2 STRUCTURED COLUMNS */}
        {role === 'admin' && selectedCourse && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
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

          <div className="pb-6 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-beacon-600 text-white flex items-center justify-center">
                <CoronaMark className="w-4.5 h-4.5" />
              </div>
              <div>
                <span className="font-display text-sm font-semibold text-marine-900">Saint Elms Fire</span>
                <p className="chart-annotation mt-0.5">Lux in tempestate — light in the storm</p>
              </div>
            </div>

            <p className="text-[11px] text-marine-500 max-w-md leading-relaxed text-center">
              Trust the light, not the thunder. Reasoned knowledge, drip-fed with
              courage, mapped as a constellation, and guarded by a Socratic beacon.
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
    </div>
  );
}
