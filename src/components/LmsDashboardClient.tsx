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
  const [activeStudentTab, setActiveStudentTab] = useState<'graph' | 'courseware' | 'multimodal' | 'chat'>('graph');
  const [quizModalLesson, setQuizModalLesson] = useState<Lesson | null>(null);
  const [chatInitialQuery, setChatInitialQuery] = useState('');

  // Loading & Sync States
  const [isSyncing, setIsSyncing] = useState(false);
  const [isSeeding, setIsSeeding] = useState(false);

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
    setActiveStudentTab('chat');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-sky-50/50 via-slate-50 to-white text-slate-900">
      <Navigation
        currentRole={role}
        onRoleChange={setRole}
        activeTab={activeStudentTab}
        onTabChange={(t) => setActiveStudentTab(t as any)}
      />

      {/* Hero Welcome / St. Elmo's Storytelling Header */}
      <section className="bg-gradient-to-r from-sky-100/70 via-white to-blue-50/60 border-b border-sky-100 py-6 px-4 sm:px-6 lg:px-8 shadow-xs">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-2 text-sky-700 font-extrabold text-xs uppercase tracking-wider mb-1">
              <Compass className="w-4 h-4 text-sky-600" />
              <span>The Beacon of Empirical Knowledge &bull; Victory of Science over the Unknown</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              St. Elmo&apos;s Fire — The Second Brain LMS
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
              In turbulent waters, sailors once saw electrical plasma on ship masts and believed in miracles. Science revealed it as the natural illumination of atmospheric energy. In this LMS, an AI-native Second Brain replaces uncertainty with structured clarity through incremental drip releases, strict release-gated RAG, and proactive Socratic guidance.
            </p>
          </div>

          <div className="flex items-center space-x-2.5">
            <button
              onClick={refreshAllData}
              className="p-2.5 rounded-xl bg-white border border-sky-200 hover:bg-sky-50 text-slate-700 hover:text-sky-800 transition text-xs font-bold flex items-center gap-1.5 shadow-2xs"
              title="Refresh Firestore database state"
            >
              <RefreshCw className={`w-3.5 h-3.5 text-sky-600 ${isSyncing ? 'animate-spin' : ''}`} />
              <span className="hidden sm:inline">Sync Firestore</span>
            </button>
          </div>
        </div>
      </section>

      {/* Main Workspace Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8 space-y-6">
        {/* Role Overview Header Banner */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-sky-100">
          <div>
            <div className="flex items-center space-x-2">
              <h2 className="text-xl font-extrabold text-slate-900">
                {role === 'admin' ? 'INSTRUCTOR CONSOLE' : 'STUDENT SECOND BRAIN CONSTELLATION'}
              </h2>
              <span
                className={`text-[10px] uppercase px-3 py-0.5 rounded-full font-extrabold ${
                  role === 'admin'
                    ? 'bg-amber-100 text-amber-800 border border-amber-300'
                    : 'bg-sky-100 text-sky-800 border border-sky-300'
                }`}
              >
                {role === 'admin' ? 'Curriculum Commander' : 'Alex (Learner)'}
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              {role === 'admin'
                ? 'Upload markdown lessons, schedule incremental drip releases, and trigger Genkit knowledge ingestion into student graphs.'
                : 'Your knowledge constellation illuminates progressively. Explore your Second Brain, interact with the grounded tutor, or regenerate multimodally.'}
            </p>
          </div>
        </div>

        {/* ADMIN VIEW */}
        {role === 'admin' && selectedCourse && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <AdminCourseManager
              course={selectedCourse}
              modules={modules}
              lessons={lessons}
              onRefresh={refreshAllData}
            />

            <AdminReleaseManager
              courseId={selectedCourse.id}
              modules={modules}
              lessons={lessons}
              releases={releases}
              onRefresh={refreshAllData}
            />
          </div>
        )}

        {/* STUDENT VIEW */}
        {role === 'student' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            {/* 1. Proactive Socratic Tutor Card (Agent-Initiated on Dashboard) */}
            <SocraticTutorCard studentId={studentId} />

            {/* Student Navigation Sub-Tabs */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-sky-100 pb-2.5">
              <div className="flex space-x-2 bg-slate-100/90 p-1.5 rounded-xl border border-slate-200/80 shadow-inner">
                <button
                  onClick={() => setActiveStudentTab('graph')}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold transition ${
                    activeStudentTab === 'graph'
                      ? 'bg-sky-600 text-white shadow-md shadow-sky-600/20'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Network className="w-3.5 h-3.5" />
                  <span>Knowledge Constellation</span>
                </button>

                <button
                  onClick={() => setActiveStudentTab('multimodal')}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold transition ${
                    activeStudentTab === 'multimodal'
                      ? 'bg-sky-600 text-white shadow-md shadow-sky-600/20'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>Multimodal Adaptation</span>
                </button>

                <button
                  onClick={() => setActiveStudentTab('chat')}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold transition ${
                    activeStudentTab === 'chat'
                      ? 'bg-sky-600 text-white shadow-md shadow-sky-600/20'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Academic Tutor Chat</span>
                </button>
              </div>

              <div className="text-xs text-slate-500 font-semibold bg-white px-3 py-1.5 rounded-full border border-sky-200 shadow-2xs">
                Unlocked Curriculum: <span className="text-sky-700 font-extrabold">{releasedLessons.length}</span> of {lessons.length} Lessons
              </div>
            </div>

            {/* Layout Grid: Curriculum Explorer on left, Dynamic Tab view on right */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Left Column: Drip-Feed Curriculum Viewer */}
              <div className="lg:col-span-4">
                <CoursewareViewer
                  modules={modules}
                  lessons={lessons}
                  releasedLessons={releasedLessons}
                  selectedLessonId={selectedLesson?.id || null}
                  onSelectLesson={(lesson) => {
                    setSelectedLesson(lesson);
                    if (activeStudentTab === 'graph') {
                      setActiveStudentTab('multimodal');
                    }
                  }}
                  onOpenQuiz={(lesson) => setQuizModalLesson(lesson)}
                />
              </div>

              {/* Right Column: Tab View */}
              <div className="lg:col-span-8">
                {activeStudentTab === 'graph' && (
                  <KnowledgeGraphVisualizer
                    nodes={graphData.nodes}
                    edges={graphData.edges}
                    onSelectConcept={handleConceptSelectFromGraph}
                    isLoading={isSyncing}
                  />
                )}

                {activeStudentTab === 'multimodal' && selectedLesson && (
                  <MultiFormatViewer
                    lesson={selectedLesson}
                    studentId={studentId}
                  />
                )}

                {activeStudentTab === 'chat' && (
                  <StudentChat
                    studentId={studentId}
                    releasedLessonCount={releasedLessons.length}
                    initialQuery={chatInitialQuery}
                  />
                )}
              </div>
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

      {/* Footer with Science & St. Elmo's Fire Motif */}
      <footer className="border-t border-sky-100 bg-white/90 py-5 mt-auto shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between text-xs text-slate-500 gap-3">
          <div className="flex items-center space-x-2">
            <Flame className="w-4 h-4 text-sky-600" />
            <span className="font-extrabold text-slate-800">ST. ELMO&apos;S FIRE</span>
            <span>&bull;</span>
            <span>Illuminating reasoned knowledge through AI-native orchestration</span>
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
