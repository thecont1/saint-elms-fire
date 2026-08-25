'use client';

import React, { useState, useEffect } from 'react';
import {
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
import type { Course, CourseModule, Lesson, ReleaseEvent, KnowledgeNode, KnowledgeEdge } from '@/lib/types';

export default function HomePage() {
  const [role, setRole] = useState<'admin' | 'student'>('student');
  const [studentId, setStudentId] = useState('student-alex');

  // Core Data States
  const [courses, setCourses] = useState<Course[]>([]);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [modules, setModules] = useState<CourseModule[]>([]);
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [releases, setReleases] = useState<ReleaseEvent[]>([]);
  const [releasedLessons, setReleasedLessons] = useState<Lesson[]>([]);
  const [graphData, setGraphData] = useState<{ nodes: KnowledgeNode[]; edges: KnowledgeEdge[] }>({
    nodes: [],
    edges: [],
  });

  // UI Selection States
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [activeStudentTab, setActiveStudentTab] = useState<'graph' | 'courseware' | 'multimodal' | 'chat'>('graph');
  const [quizModalLesson, setQuizModalLesson] = useState<Lesson | null>(null);
  const [chatInitialQuery, setChatInitialQuery] = useState('');

  // Loading States
  const [isLoading, setIsLoading] = useState(true);
  const [isSeeding, setIsSeeding] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    loadAllData();
  }, [studentId]);

  const loadAllData = async () => {
    setIsLoading(true);
    setErrorMsg(null);
    try {
      // 1. Fetch courses
      const coursesRes = await fetch('/api/courses');
      const coursesData = await coursesRes.json();
      const loadedCourses = coursesData.courses || [];
      setCourses(loadedCourses);

      if (loadedCourses.length > 0) {
        const primaryCourse = loadedCourses[0];
        setSelectedCourse(primaryCourse);

        // 2. Fetch modules and lessons for primary course
        const detailsRes = await fetch(`/api/courses/${primaryCourse.id}`);
        const detailsData = await detailsRes.json();
        setModules(detailsData.modules || []);
        setLessons(detailsData.lessons || []);

        if (detailsData.lessons && detailsData.lessons.length > 0) {
          setSelectedLesson(detailsData.lessons[0]);
        }
      }

      // 3. Fetch releases for student
      const releasesRes = await fetch(`/api/releases?studentId=${studentId}`);
      const releasesData = await releasesRes.json();
      const loadedReleases = releasesData.releases || [];
      setReleases(loadedReleases);

      // 4. Fetch Knowledge Graph
      const graphRes = await fetch(`/api/graph?studentId=${studentId}`);
      const graphJson = await graphRes.json();
      setGraphData({
        nodes: graphJson.nodes || [],
        edges: graphJson.edges || [],
      });
    } catch (err: any) {
      console.error('Failed to load application data:', err);
      setErrorMsg(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Recompute released lessons when lessons or releases change
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

    // If currently selected lesson is not unlocked, default to first unlocked lesson if available
    if (unLocked.length > 0 && (!selectedLesson || !unLocked.some((l) => l.id === selectedLesson.id))) {
      setSelectedLesson(unLocked[0]);
    }
  }, [lessons, releases]);

  const handleSeedDatabase = async () => {
    setIsSeeding(true);
    try {
      const res = await fetch('/api/seed', { method: 'POST' });
      const data = await res.json();
      if (data.error) throw new Error(data.error);

      // Now auto-release Module 1 to student-alex to demonstrate the second brain graph immediately
      if (data.course && data.modules && data.modules[0]) {
        await fetch('/api/releases', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            courseId: data.course.id,
            moduleId: data.modules[0].id,
            studentId: 'student-alex',
          }),
        });
      }

      await loadAllData();
    } catch (err: any) {
      alert(`Seeding error: ${err.message}`);
    } finally {
      setIsSeeding(false);
    }
  };

  const handleConceptSelectFromGraph = (concept: string) => {
    setChatInitialQuery(`Can you explain the significance of "${concept}" in our courseware?`);
    setActiveStudentTab('chat');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#090D16] text-slate-100">
      <Navigation
        currentRole={role}
        onRoleChange={setRole}
        activeTab={activeStudentTab}
        onTabChange={(t) => setActiveStudentTab(t as any)}
      />

      {/* Top Banner / Empty State helper */}
      {courses.length === 0 && !isLoading && (
        <div className="bg-gradient-to-r from-amber-950/60 via-slate-900 to-indigo-950/60 border-b border-amber-800/40 px-4 py-3">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span className="text-amber-200 font-medium">
                Fresh Firestore Database connected! Initialize sample Distributed Systems & AI courseware to start the demo.
              </span>
            </div>
            <button
              onClick={handleSeedDatabase}
              disabled={isSeeding}
              className="px-3.5 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-500 text-white font-semibold transition flex items-center gap-1.5 shadow-md shadow-amber-600/20 disabled:opacity-50"
            >
              <PlusCircle className="w-3.5 h-3.5" />
              <span>{isSeeding ? 'Seeding Firestore...' : '1-Click Seed Sample Courseware'}</span>
            </button>
          </div>
        </div>
      )}

      {/* Main Workspace Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8 space-y-6">
        {/* Role Overview Badge */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-2 border-b border-slate-800/80">
          <div>
            <div className="flex items-center space-x-2">
              <h1 className="text-xl font-extrabold tracking-tight text-white font-mono">
                {role === 'admin' ? 'INSTRUCTOR / ADMIN CONSOLE' : 'STUDENT SECOND BRAIN WORKSPACE'}
              </h1>
              <span
                className={`text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full font-bold ${
                  role === 'admin'
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                    : 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30'
                }`}
              >
                {role === 'admin' ? 'Release Authority' : 'Alex (Learner)'}
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              {role === 'admin'
                ? 'Manage markdown courseware, schedule incremental drip releases, and trigger Genkit knowledge ingestion.'
                : 'Interactive Knowledge Graph grows with each release event. Strict release-gated RAG tutor & multi-format regeneration.'}
            </p>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={loadAllData}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-300 hover:text-white transition text-xs flex items-center gap-1.5"
              title="Refresh Firestore state"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin' : ''}`} />
              <span className="hidden sm:inline">Sync DB</span>
            </button>
          </div>
        </div>

        {/* ADMIN VIEW */}
        {role === 'admin' && selectedCourse && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <AdminCourseManager
              course={selectedCourse}
              modules={modules}
              lessons={lessons}
              onRefresh={loadAllData}
            />

            <AdminReleaseManager
              courseId={selectedCourse.id}
              modules={modules}
              lessons={lessons}
              releases={releases}
              onRefresh={loadAllData}
            />
          </div>
        )}

        {/* STUDENT VIEW */}
        {role === 'student' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            {/* 1. Proactive Socratic Tutor Card (Agent-Initiated on Dashboard) */}
            <SocraticTutorCard studentId={studentId} />

            {/* Student Navigation Sub-Tabs */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-2">
              <div className="flex space-x-2 bg-slate-950 p-1 rounded-lg border border-slate-800">
                <button
                  onClick={() => setActiveStudentTab('graph')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold transition ${
                    activeStudentTab === 'graph'
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Network className="w-3.5 h-3.5" />
                  <span>Second Brain Graph</span>
                </button>

                <button
                  onClick={() => setActiveStudentTab('multimodal')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold transition ${
                    activeStudentTab === 'multimodal'
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>Multimodal Adaptation</span>
                </button>

                <button
                  onClick={() => setActiveStudentTab('chat')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold transition ${
                    activeStudentTab === 'chat'
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Grounded Tutor Chat</span>
                </button>
              </div>

              <div className="text-xs text-slate-400 font-mono">
                Unlocked: <span className="text-emerald-400 font-bold">{releasedLessons.length}</span> / {lessons.length} Lessons
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
                    isLoading={isLoading}
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
            loadAllData();
          }}
        />
      )}

      {/* Footer */}
      <footer className="border-t border-slate-800/80 bg-slate-950/60 py-4 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between text-xs text-slate-500 gap-2">
          <div>
            <span className="font-mono text-slate-400 font-semibold">SAINT ELMS FIRE</span> &bull; Production Feasibility Spike &bull; Hackathon MVP
          </div>
          <div className="flex items-center space-x-4 text-[11px] font-mono">
            <span>Orchestration: Genkit 1.41.0</span>
            <span>&bull;</span>
            <span>Model: Gemini 3.7 Flash</span>
            <span>&bull;</span>
            <span>Graph Store: GCP Firestore</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
