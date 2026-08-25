'use client';

import React, { useState } from 'react';
import { Plus, BookOpen, UploadCloud, FileText, Check, AlertCircle, Sparkles, Layers } from 'lucide-react';
import type { Course, CourseModule, Lesson } from '@/lib/types';

interface AdminCourseManagerProps {
  course: Course;
  modules: CourseModule[];
  lessons: Lesson[];
  onRefresh: () => void;
}

export function AdminCourseManager({
  course,
  modules = [],
  lessons = [],
  onRefresh,
}: AdminCourseManagerProps) {
  const [showModuleModal, setShowModuleModal] = useState(false);
  const [showLessonModal, setShowLessonModal] = useState(false);
  const [moduleTitle, setModuleTitle] = useState('');
  const [moduleDescription, setModuleDescription] = useState('');

  const [lessonModuleId, setLessonModuleId] = useState(modules[0]?.id || '');
  const [lessonTitle, setLessonTitle] = useState('');
  const [lessonMarkdown, setLessonMarkdown] = useState('');
  const [lessonSummary, setLessonSummary] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCreateModule = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!moduleTitle.trim()) return;

    setIsSubmitting(true);
    try {
      const res = await fetch('/api/modules', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          courseId: course.id,
          title: moduleTitle.trim(),
          description: moduleDescription.trim(),
          order: modules.length + 1,
        }),
      });
      const data = await res.json();
      if (data.error) throw new Error(data.error);

      setModuleTitle('');
      setModuleDescription('');
      setShowModuleModal(false);
      onRefresh();
    } catch (err: any) {
      alert(`Error creating module: ${err.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCreateLesson = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!lessonTitle.trim() || !lessonMarkdown.trim() || !lessonModuleId) return;

    setIsSubmitting(true);
    try {
      const res = await fetch('/api/lessons', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          courseId: course.id,
          moduleId: lessonModuleId,
          title: lessonTitle.trim(),
          markdownContent: lessonMarkdown.trim(),
          summary: lessonSummary.trim(),
          order: lessons.filter((l) => l.moduleId === lessonModuleId).length + 1,
        }),
      });
      const data = await res.json();
      if (data.error) throw new Error(data.error);

      setLessonTitle('');
      setLessonMarkdown('');
      setLessonSummary('');
      setShowLessonModal(false);
      onRefresh();
    } catch (err: any) {
      alert(`Error uploading lesson: ${err.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      setLessonMarkdown(content);
      if (!lessonTitle) {
        setLessonTitle(file.name.replace(/\.md$/i, ''));
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="space-y-4">
      {/* Course Details Card */}
      <div className="bg-slate-900/90 rounded-xl border border-slate-800 p-5 shadow-xl flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2">
            <span className="text-xs font-mono text-amber-400 font-semibold px-2 py-0.5 rounded bg-amber-950/60 border border-amber-800/40">
              {course.code || 'COURSE'}
            </span>
            <h2 className="text-lg font-bold text-white">{course.title}</h2>
          </div>
          <p className="text-xs text-slate-400 mt-1 max-w-2xl">{course.description}</p>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => setShowModuleModal(true)}
            className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium flex items-center gap-1.5 transition border border-slate-700"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Module</span>
          </button>
          <button
            onClick={() => {
              if (modules.length > 0 && !lessonModuleId) {
                setLessonModuleId(modules[0].id);
              }
              setShowLessonModal(true);
            }}
            disabled={modules.length === 0}
            className="px-3.5 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-500 text-white text-xs font-semibold flex items-center gap-1.5 transition shadow-md shadow-amber-600/20 disabled:opacity-40"
          >
            <UploadCloud className="w-3.5 h-3.5" />
            <span>Upload Courseware (.md)</span>
          </button>
        </div>
      </div>

      {/* Modules & Lessons Hierarchy */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {modules.map((mod) => {
          const modLessons = lessons.filter((l) => l.moduleId === mod.id);

          return (
            <div
              key={mod.id}
              className="bg-slate-900/80 rounded-xl border border-slate-800 p-4 flex flex-col justify-between shadow-md"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono text-amber-400 uppercase tracking-wider font-semibold">
                    Module {mod.order}
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">
                    {modLessons.length} Lesson(s)
                  </span>
                </div>
                <h3 className="text-sm font-bold text-white mb-1">{mod.title}</h3>
                <p className="text-xs text-slate-400 mb-3">{mod.description}</p>

                <div className="space-y-1.5">
                  {modLessons.map((l) => (
                    <div
                      key={l.id}
                      className="p-2 rounded bg-slate-950 border border-slate-800/80 text-xs flex items-center justify-between"
                    >
                      <span className="truncate text-slate-300 font-medium">{l.title}</span>
                      <span className="text-[9px] font-mono text-slate-500 shrink-0 ml-2">
                        {l.markdownContent.length} chars
                      </span>
                    </div>
                  ))}
                  {modLessons.length === 0 && (
                    <p className="text-[11px] text-slate-500 italic">No lessons uploaded yet</p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Add Module Modal */}
      {showModuleModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-xl max-w-md w-full p-5 shadow-2xl animate-in fade-in">
            <h3 className="text-base font-bold text-white mb-3">Create New Module</h3>
            <form onSubmit={handleCreateModule} className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Module Title
                </label>
                <input
                  type="text"
                  value={moduleTitle}
                  onChange={(e) => setModuleTitle(e.target.value)}
                  placeholder="e.g. Module 4: Byzantine Fault Tolerance"
                  required
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Description
                </label>
                <textarea
                  value={moduleDescription}
                  onChange={(e) => setModuleDescription(e.target.value)}
                  placeholder="Summary of module curriculum..."
                  rows={2}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-amber-500 resize-none"
                />
              </div>

              <div className="flex items-center justify-end space-x-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowModuleModal(false)}
                  className="px-3 py-1.5 text-xs text-slate-400 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting || !moduleTitle.trim()}
                  className="px-4 py-2 bg-amber-600 hover:bg-amber-500 text-white text-xs font-semibold rounded-lg shadow-md disabled:opacity-50"
                >
                  {isSubmitting ? 'Creating...' : 'Create Module'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Add / Upload Lesson Modal */}
      {showLessonModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-xl max-w-2xl w-full p-6 shadow-2xl animate-in fade-in max-h-[90vh] overflow-y-auto">
            <h3 className="text-base font-bold text-white mb-4">Upload Markdown Courseware</h3>
            <form onSubmit={handleCreateLesson} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Assign to Module
                  </label>
                  <select
                    value={lessonModuleId}
                    onChange={(e) => setLessonModuleId(e.target.value)}
                    required
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
                  >
                    {modules.map((m) => (
                      <option key={m.id} value={m.id}>
                        Module {m.order}: {m.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Lesson Title
                  </label>
                  <input
                    type="text"
                    value={lessonTitle}
                    onChange={(e) => setLessonTitle(e.target.value)}
                    placeholder="e.g. 1.3 State Machine Safety Invariants"
                    required
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              {/* Upload file directly */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Import .md File (Optional)
                </label>
                <input
                  type="file"
                  accept=".md,.markdown,.txt"
                  onChange={handleFileUpload}
                  className="w-full text-xs text-slate-400 file:mr-3 file:py-1.5 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-medium file:bg-slate-800 file:text-slate-200 hover:file:bg-slate-700 cursor-pointer"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Markdown Content
                </label>
                <textarea
                  value={lessonMarkdown}
                  onChange={(e) => setLessonMarkdown(e.target.value)}
                  placeholder="# Lesson Content in Markdown format..."
                  rows={10}
                  required
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg p-3 text-xs text-white font-mono focus:outline-none focus:border-amber-500 resize-none"
                />
              </div>

              <div className="flex items-center justify-end space-x-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowLessonModal(false)}
                  className="px-3 py-1.5 text-xs text-slate-400 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting || !lessonTitle.trim() || !lessonMarkdown.trim()}
                  className="px-4 py-2 bg-amber-600 hover:bg-amber-500 text-white text-xs font-semibold rounded-lg shadow-md disabled:opacity-50"
                >
                  {isSubmitting ? 'Saving...' : 'Save Lesson'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
