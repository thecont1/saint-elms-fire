'use client';

import React, { useState, useEffect } from 'react';
import {
  Flame,
  Sparkles,
  Database,
  Cpu,
  Layers,
  Network,
  BookOpen,
  MessageSquare,
  Shield,
  User,
  RefreshCw,
  PlusCircle,
  CheckCircle2,
  AlertTriangle,
  Compass,
  Lightbulb,
  ChevronRight,
  GraduationCap,
  Activity,
  Maximize2,
} from 'lucide-react';
import { Navigation } from '@/components/Navigation';
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
      if (r.lessonId) releasedIds.add(r.lessonId);
      if (r.moduleId) releasedModIds.add(r.moduleId);
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
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-sky-50/50 via-slate-50 to-white text-slate-900">
      {/* 1. TOP HEADER / APP NAVIGATION */}
      <Navigation
        currentRole={role}
        onRoleChange={setRole}
      />

      {/* 2. SUB-HEADER HERO / BRAND METRICS BAR */}
      <section className="bg-gradient-to-r from-sky-100/70 via-white to-blue-50/60 border-b border-sky-100 py-4 px-4 sm:px-6 lg:px-8 shadow-2xs">
        <div className="max-w-[1600px] mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center space-x-3.5">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-600 via-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-md shadow-sky-500/20 ring-2 ring-sky-300/40">
              <Flame className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-sm font-extrabold text-slate-900 font-sans tracking-tight">
                  Saint Elms Fire
                </span>
                <span className="text-[10px] uppercase font-extrabold px-2 py-0.5 rounded-full bg-sky-100 text-sky-800 border border-sky-200">
                  Multimodal Second Brain LMS
                </span>
              </div>
              <p className="text-xs text-slate-500 hidden sm:block">
                Illuminating the unknown with incremental drip-feeding, strict release-gated RAG, and proactive Socratic guidance.
              </p>
            </div>
          </div>

          {/* Quick Metrics & Actions */}
          <div className="flex items-center space-x-3">
            <div className="hidden sm:flex items-center space-x-2 text-xs font-semibold text-slate-600 bg-white/90 px-3 py-1.5 rounded-xl border border-sky-100 shadow-2xs">
              <span className="text-sky-700 font-bold">{releasedLessons.length}/{lessons.length}</span>
              <span>Lessons Unlocked ({completionPercentage}%)</span>
              <span>&bull;</span>
              <span className="text-sky-700 font-bold">{graphData.nodes.length}</span>
              <span>Graph Nodes</span>
            </div>

            <button
              onClick={refreshAllData}
              className="p-2 px-3 rounded-xl bg-white border border-sky-200 hover:bg-sky-50 text-slate-700 hover:text-sky-900 transition text-xs font-bold flex items-center gap-1.5 shadow-2xs"
              title="Refresh Firestore database state"
            >
              <RefreshCw className={`w-3.5 h-3.5 text-sky-600 ${isSyncing ? 'animate-spin' : ''}`} />
              <span>Sync Firestore</span>
            </button>
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
                <div className="bg-white rounded-2xl border border-sky-100 p-4 shadow-sm shadow-sky-500/5 space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-extrabold text-sky-700 uppercase tracking-wider bg-sky-50 px-2.5 py-0.5 rounded-full border border-sky-200">
                      {selectedCourse.code || 'CS-850'}
                    </span>
                    <span className="text-xs text-slate-400 font-semibold flex items-center gap-1">
                      <GraduationCap className="w-3.5 h-3.5 text-sky-600" /> Lead Course
                    </span>
                  </div>
                  <h3 className="text-xs font-extrabold text-slate-900 leading-snug">{selectedCourse.title}</h3>
                  <p className="text-[11px] text-slate-500 leading-relaxed line-clamp-2">{selectedCourse.description}</p>
                  
                  {/* Progress Bar */}
                  <div className="pt-1">
                    <div className="flex items-center justify-between text-[10px] font-bold text-slate-500 mb-1">
                      <span>Drip Progression</span>
                      <span className="text-sky-700">{completionPercentage}%</span>
                    </div>
                    <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                      <div
                        className="bg-sky-600 h-full rounded-full transition-all duration-500"
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
              <div className="bg-white rounded-2xl border border-sky-100 shadow-sm shadow-sky-500/5 p-4 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-sky-100 pb-3">
                  <div className="flex items-center space-x-2">
                    <div className="p-1.5 rounded-lg bg-sky-100 text-sky-700">
                      {centerTab === 'graph' ? (
                        <Network className="w-4 h-4" />
                      ) : (
                        <Layers className="w-4 h-4" />
                      )}
                    </div>
                    <div>
                      <h3 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">
                        {centerTab === 'graph'
                          ? 'Second Brain Knowledge Constellation'
                          : 'Multimodal Courseware Reader'}
                      </h3>
                      <p className="text-[11px] text-slate-500">
                        {centerTab === 'graph'
                          ? 'Radial concept graph showing extracted entities & relational bonds'
                          : `Currently viewing: ${selectedLesson?.title || 'Selected Lesson'}`}
                      </p>
                    </div>
                  </div>

                  {/* View Mode Toggle */}
                  <div className="flex space-x-1.5 bg-slate-100 p-1 rounded-xl border border-slate-200">
                    <button
                      onClick={() => setCenterTab('graph')}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                        centerTab === 'graph'
                          ? 'bg-sky-600 text-white shadow-xs'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      <Network className="w-3.5 h-3.5" />
                      <span>Graph Constellation</span>
                    </button>

                    <button
                      onClick={() => setCenterTab('multimodal')}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                        centerTab === 'multimodal'
                          ? 'bg-sky-600 text-white shadow-xs'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      <Layers className="w-3.5 h-3.5" />
                      <span>Multimodal Reader</span>
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
                    <div className="p-12 text-center text-xs text-slate-400">
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

      {/* 4. BOTTOM FOOTER WITH REFINED METRICS & CREDITS */}
      <footer className="border-t border-sky-100 bg-white/90 py-5 mt-auto shadow-xs">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between text-xs text-slate-500 gap-3">
          <div className="flex items-center space-x-2">
            <Flame className="w-4 h-4 text-sky-600" />
            <span className="font-extrabold text-slate-900">SAINT ELMS FIRE</span>
            <span>&bull;</span>
            <span>The Second Brain LMS &bull; Illuminating reasoned knowledge through AI-native orchestration</span>
          </div>
          <div className="flex items-center space-x-4 text-[11px] font-semibold text-slate-500">
            <span>Genkit 1.41.0</span>
            <span>&bull;</span>
            <span>Gemini 3.7 Flash</span>
            <span>&bull;</span>
            <span>GCP Firestore Native</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
