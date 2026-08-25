'use client';

import React, { useState, useEffect } from 'react';
import {
  FileText,
  Headphones,
  Video,
  Sparkles,
  RefreshCw,
  BookOpen,
  CheckCircle2,
  Copy,
  Layers,
  ArrowRight,
  Sliders,
  Flame,
} from 'lucide-react';
import type { Lesson, GeneratedFormat } from '@/lib/types';

interface MultiFormatViewerProps {
  lesson: Lesson;
  studentId: string;
}

type FormatTab = 'raw_markdown' | 'structured_notes' | 'podcast_dialogue' | 'video_lecture_script';

export function MultiFormatViewer({ lesson, studentId }: MultiFormatViewerProps) {
  const [activeTab, setActiveTab] = useState<FormatTab>('raw_markdown');
  const [formats, setFormats] = useState<Record<string, GeneratedFormat>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [selectedPersona, setSelectedPersona] = useState<string>('Master Lecturer (Feynman style)');

  useEffect(() => {
    fetchExistingFormats();
  }, [lesson.id, studentId]);

  const fetchExistingFormats = async () => {
    try {
      const res = await fetch(`/api/generate-format?lessonId=${lesson.id}&studentId=${studentId}`);
      const data = await res.json();
      if (data.formats) {
        const map: Record<string, GeneratedFormat> = {};
        for (const f of data.formats) {
          map[f.formatType] = f;
        }
        setFormats(map);
      }
    } catch (err) {
      console.error('Failed to load formats:', err);
    }
  };

  const handleGenerate = async (formatType: 'structured_notes' | 'podcast_dialogue' | 'video_lecture_script') => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/generate-format', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          lessonId: lesson.id,
          studentId,
          formatType,
          persona: formatType === 'video_lecture_script' ? selectedPersona : undefined,
        }),
      });
      const data = await res.json();
      if (data.error) throw new Error(data.error);

      setFormats((prev) => ({
        ...prev,
        [formatType]: {
          id: data.savedId || `gen-${Date.now()}`,
          lessonId: lesson.id,
          studentId,
          formatType,
          title: data.title,
          content: data.content,
          createdAt: new Date().toISOString(),
        },
      }));
    } catch (err: any) {
      alert(`Generation failed: ${err.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const currentFormat = formats[activeTab as string];

  return (
    <div className="bg-white rounded-2xl border border-sky-100 shadow-xl shadow-sky-500/5 overflow-hidden flex flex-col h-full">
      {/* Header with Title and Tab Switcher */}
      <div className="p-5 border-b border-sky-100 bg-gradient-to-r from-sky-50/70 via-white to-blue-50/40">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div>
            <span className="text-[10px] uppercase tracking-wider font-extrabold text-sky-700 flex items-center gap-1">
              <Flame className="w-3.5 h-3.5 text-sky-600" />
              Multimodal Knowledge Synthesis
            </span>
            <h3 className="text-base font-extrabold text-slate-900 mt-0.5">
              {lesson.title}
            </h3>
          </div>

          {activeTab !== 'raw_markdown' && currentFormat && (
            <button
              onClick={() => copyToClipboard(currentFormat.content)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition border border-slate-200 shadow-2xs"
            >
              {copied ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-500" />
                  <span>Copy Script / Notes</span>
                </>
              )}
            </button>
          )}
        </div>

        {/* Multimodal Format Navigation Tabs */}
        <div className="flex flex-wrap gap-1.5 bg-slate-100/80 p-1.5 rounded-xl border border-slate-200/80">
          <button
            onClick={() => setActiveTab('raw_markdown')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition ${
              activeTab === 'raw_markdown'
                ? 'bg-white text-slate-900 shadow-xs border border-slate-200'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5 text-sky-600" />
            <span>Original Courseware</span>
          </button>

          <button
            onClick={() => setActiveTab('structured_notes')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition ${
              activeTab === 'structured_notes'
                ? 'bg-amber-500 text-white shadow-xs'
                : 'text-slate-600 hover:text-amber-800'
            }`}
          >
            <FileText className="w-3.5 h-3.5 text-amber-500" />
            <span>Structured Notes & Diagrams</span>
            {formats['structured_notes'] && (
              <span className="w-2 h-2 rounded-full bg-emerald-400 ring-1 ring-white" />
            )}
          </button>

          <button
            onClick={() => setActiveTab('podcast_dialogue')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition ${
              activeTab === 'podcast_dialogue'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-indigo-800'
            }`}
          >
            <Headphones className="w-3.5 h-3.5 text-indigo-500" />
            <span>Podcast Dialogue Script</span>
            {formats['podcast_dialogue'] && (
              <span className="w-2 h-2 rounded-full bg-emerald-400 ring-1 ring-white" />
            )}
          </button>

          <button
            onClick={() => setActiveTab('video_lecture_script')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition ${
              activeTab === 'video_lecture_script'
                ? 'bg-sky-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-sky-800'
            }`}
          >
            <Video className="w-3.5 h-3.5 text-sky-500" />
            <span>Video Masterclass Script</span>
            {formats['video_lecture_script'] && (
              <span className="w-2 h-2 rounded-full bg-emerald-400 ring-1 ring-white" />
            )}
          </button>
        </div>
      </div>

      {/* Content Display Area */}
      <div className="flex-1 p-6 overflow-y-auto max-h-[560px] bg-white">
        {activeTab === 'raw_markdown' ? (
          <div className="prose-light max-w-none text-xs">
            <div className="whitespace-pre-wrap font-sans leading-relaxed text-slate-800">
              {lesson.markdownContent}
            </div>
          </div>
        ) : currentFormat ? (
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-sky-100 text-xs text-slate-500">
              <span className="font-bold text-sky-900">{currentFormat.title}</span>
              <span className="font-mono text-[11px] bg-sky-50 px-2.5 py-0.5 rounded-full text-sky-800 font-semibold">
                Synthesized with Gemini 3.7 Flash &bull; {new Date(currentFormat.createdAt).toLocaleDateString()}
              </span>
            </div>
            <div className="prose-light max-w-none text-xs leading-relaxed whitespace-pre-wrap text-slate-800">
              {currentFormat.content}
            </div>
          </div>
        ) : (
          /* Empty / Un-generated State */
          <div className="flex flex-col items-center justify-center p-8 text-center my-6">
            <div className="w-16 h-16 rounded-2xl bg-sky-50 border border-sky-200 flex items-center justify-center mb-4 text-sky-600 shadow-inner">
              {activeTab === 'structured_notes' && <FileText className="w-8 h-8 text-amber-500" />}
              {activeTab === 'podcast_dialogue' && <Headphones className="w-8 h-8 text-indigo-500" />}
              {activeTab === 'video_lecture_script' && <Video className="w-8 h-8 text-sky-500" />}
            </div>

            <h4 className="text-base font-extrabold text-slate-900 mb-1">
              {activeTab === 'structured_notes' && 'Structured Study Notes Not Yet Generated'}
              {activeTab === 'podcast_dialogue' && 'Podcast Dialogue Script Not Yet Generated'}
              {activeTab === 'video_lecture_script' && 'Video Masterclass Script Not Yet Generated'}
            </h4>

            <p className="text-xs text-slate-500 max-w-md mb-6 leading-relaxed">
              {activeTab === 'structured_notes' &&
                'Generate an executive summary, concept hierarchy, diagram blueprints, and review checklists grounded strictly in this lesson.'}
              {activeTab === 'podcast_dialogue' &&
                'Transform this technical lesson into a lively conversational podcast between Alex (curious learner) and Sam (expert mentor).'}
              {activeTab === 'video_lecture_script' &&
                'Create a punchy, 4-minute video lecture script complete with visual cues, camera transitions, and timestamps.'}
            </p>

            {/* Persona Selector for Video */}
            {activeTab === 'video_lecture_script' && (
              <div className="mb-4 flex items-center space-x-2 text-xs">
                <span className="text-slate-600 font-bold">Lecturer Persona:</span>
                <select
                  value={selectedPersona}
                  onChange={(e) => setSelectedPersona(e.target.value)}
                  className="bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 px-3 py-1.5 focus:outline-none focus:border-sky-500 font-medium"
                >
                  <option value="Master Lecturer (Feynman style)">Master Lecturer (Feynman style - Vivid analogies)</option>
                  <option value="Senior Staff Architect">Senior Staff Architect (Production tradeoffs & edge cases)</option>
                  <option value="Fast-Paced Speedrun">Fast-Paced Speedrun (High energy, concise)</option>
                </select>
              </div>
            )}

            <button
              onClick={() =>
                handleGenerate(activeTab as 'structured_notes' | 'podcast_dialogue' | 'video_lecture_script')
              }
              disabled={isLoading}
              className="px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold flex items-center gap-2 transition shadow-lg shadow-sky-600/20 disabled:opacity-50"
            >
              {isLoading ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Synthesizing with Gemini 3.7 Flash...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  <span>Generate {activeTab.replace(/_/g, ' ').toUpperCase()}</span>
                </>
              )}
            </button>
          </div>
        )}
      </div>

      {/* Footer Status */}
      <div className="p-3.5 border-t border-sky-100 bg-sky-50/50 flex items-center justify-between text-xs text-slate-600 font-medium">
        <span className="flex items-center gap-1.5 text-sky-800">
          <Layers className="w-4 h-4 text-sky-600" />
          Strict Factual Invariant: Traceable to underlying markdown with zero hallucination
        </span>
        {currentFormat && (
          <button
            onClick={() =>
              handleGenerate(activeTab as 'structured_notes' | 'podcast_dialogue' | 'video_lecture_script')
            }
            disabled={isLoading}
            className="flex items-center gap-1 text-sky-700 hover:text-sky-900 font-bold transition"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin' : ''}`} />
            <span>Regenerate</span>
          </button>
        )}
      </div>
    </div>
  );
}
