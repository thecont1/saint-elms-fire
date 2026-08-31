'use client';

import React, { useState } from 'react';
import { Plus, BookOpen, UploadCloud, FileText, Check, AlertCircle, Sparkles, Layers, Shield } from 'lucide-react';
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
    <div className="space-y-5">
      {/* Course Details Header Card */}
      <div className="bg-white rounded-2xl border border-beacon-100 p-6 shadow-xl shadow-beacon-500/5 flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2.5">
            <span className="text-xs font-bold text-beacon-800 px-2.5 py-0.5 rounded-full bg-beacon-50 border border-beacon-200">
              {course.code || 'COURSE'}
            </span>
            <h2 className="text-xl font-extrabold text-slate-900">{course.title}</h2>
          </div>
          <p className="text-xs text-slate-500 mt-1 max-w-2xl leading-relaxed">{course.description}</p>
        </div>

        <div className="flex items-center space-x-2.5">
          <button
            onClick={() => setShowModuleModal(true)}
            className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold flex items-center gap-1.5 transition border border-slate-200"
          >
            <Plus className="w-4 h-4 text-slate-600" />
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
            className="px-4 py-2 rounded-xl bg-beacon-600 hover:bg-beacon-500 text-white text-xs font-bold flex items-center gap-1.5 transition shadow-md shadow-beacon-600/20 disabled:opacity-50"
          >
            <UploadCloud className="w-4 h-4" />
            <span>Upload Courseware (.md)</span>
          </button>
        </div>
      </div>

      {/* Modules & Lessons Hierarchy Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {modules.map((mod) => {
          const modLessons = lessons.filter((l) => l.moduleId === mod.id);

          return (
            <div
              key={mod.id}
              className="bg-white rounded-2xl border border-beacon-100 p-5 flex flex-col justify-between shadow-md shadow-beacon-500/5 transition hover:border-beacon-300"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] text-beacon-700 uppercase tracking-wider font-extrabold">
                    Module {mod.order}
                  </span>
                  <span className="text-[11px] text-slate-500 font-semibold bg-slate-50 px-2.5 py-0.5 rounded-full border border-slate-200">
                    {modLessons.length} Lesson(s)
                  </span>
                </div>
                <h3 className="text-sm font-extrabold text-slate-900 mb-1">{mod.title}</h3>
                <p className="text-xs text-slate-500 mb-4 leading-relaxed">{mod.description || ''}</p>

                <div className="space-y-2">
                  {modLessons.map((l) => (
                    <div
                      key={l.id}
                      className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs flex items-center justify-between shadow-2xs hover:bg-white transition"
                    >
                      <span className="truncate text-slate-800 font-semibold">{l.title}</span>
                      <span className="text-[10px] font-mono text-slate-400 shrink-0 ml-2">
                        {l.markdownContent.length} chars
                      </span>
                    </div>
                  ))}
                  {modLessons.length === 0 && (
                    <p className="text-xs text-slate-400 italic">No lessons uploaded yet</p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Add Module Modal */}
      {showModuleModal && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white border border-beacon-200 rounded-2xl max-w-md w-full p-6 shadow-2xl animate-in fade-in">
            <h3 className="text-base font-extrabold text-slate-900 mb-4">Create New Module</h3>
            <form onSubmit={handleCreateModule} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Module Title
                </label>
                <input
                  type="text"
                  value={moduleTitle}
                  onChange={(e) => setModuleTitle(e.target.value)}
                  placeholder="e.g. Module 4: Byzantine Fault Tolerance"
                  required
                  className="w-full bg-slate-50 border border-slate-300 focus:border-beacon-500 focus:bg-white rounded-xl p-3 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-beacon-200"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Description
                </label>
                <textarea
                  value={moduleDescription}
                  onChange={(e) => setModuleDescription(e.target.value)}
                  placeholder="Summary of module curriculum..."
                  rows={2}
                  className="w-full bg-slate-50 border border-slate-300 focus:border-beacon-500 focus:bg-white rounded-xl p-3 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-beacon-200 resize-none"
                />
              </div>

              <div className="flex items-center justify-end space-x-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowModuleModal(false)}
                  className="px-4 py-2 text-xs font-bold text-slate-500 hover:text-slate-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting || !moduleTitle.trim()}
                  className="px-5 py-2.5 bg-beacon-600 hover:bg-beacon-500 text-white text-xs font-bold rounded-xl shadow-md disabled:opacity-50"
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
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white border border-beacon-200 rounded-2xl max-w-2xl w-full p-6 shadow-2xl animate-in fade-in max-h-[90vh] overflow-y-auto">
            <h3 className="text-base font-extrabold text-slate-900 mb-4">Upload Markdown Courseware</h3>
            <form onSubmit={handleCreateLesson} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Assign to Module
                  </label>
                  <select
                    aria-label="Assign to module"
                    value={lessonModuleId}
                    onChange={(e) => setLessonModuleId(e.target.value)}
                    required
                    className="w-full bg-slate-50 border border-slate-300 focus:border-beacon-500 focus:bg-white rounded-xl p-3 text-xs text-slate-900 focus:outline-none"
                  >
                    {modules.map((m) => (
                      <option key={m.id} value={m.id}>
                        Module {m.order}: {m.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Lesson Title
                  </label>
                  <input
                    type="text"
                    value={lessonTitle}
                    onChange={(e) => setLessonTitle(e.target.value)}
                    placeholder="e.g. 1.3 State Machine Safety Invariants"
                    required
                    className="w-full bg-slate-50 border border-slate-300 focus:border-beacon-500 focus:bg-white rounded-xl p-3 text-xs text-slate-900 focus:outline-none"
                  />
                </div>
              </div>

              {/* Upload file directly */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Import .md File (Optional)
                </label>
                <input
                  type="file"
                  accept=".md,.markdown,.txt"
                  onChange={handleFileUpload}
                  className="w-full text-xs text-slate-600 file:mr-3 file:py-2 file:px-3.5 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-beacon-50 file:text-beacon-800 hover:file:bg-beacon-100 cursor-pointer"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Markdown Content
                </label>
                <textarea
                  value={lessonMarkdown}
                  onChange={(e) => setLessonMarkdown(e.target.value)}
                  placeholder="# Lesson Content in Markdown format..."
                  rows={10}
                  required
                  className="w-full bg-slate-50 border border-slate-300 focus:border-beacon-500 focus:bg-white rounded-xl p-3 text-xs text-slate-900 font-mono focus:outline-none resize-none"
                />
              </div>

              <div className="flex items-center justify-end space-x-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowLessonModal(false)}
                  className="px-4 py-2 text-xs font-bold text-slate-500 hover:text-slate-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting || !lessonTitle.trim() || !lessonMarkdown.trim()}
                  className="px-5 py-2.5 bg-beacon-600 hover:bg-beacon-500 text-white text-xs font-bold rounded-xl shadow-md disabled:opacity-50"
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
