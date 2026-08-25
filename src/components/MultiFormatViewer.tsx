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
    <div className="bg-slate-900/90 rounded-xl border border-slate-800 shadow-xl overflow-hidden flex flex-col h-full">
      {/* Header with Title and Tab Switcher */}
      <div className="p-4 border-b border-slate-800 bg-slate-950/40">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
          <div>
            <span className="text-[10px] font-mono text-indigo-400 uppercase tracking-wider font-semibold">
              Multimodal Courseware Adaptation Engine
            </span>
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              {lesson.title}
            </h3>
          </div>

          {activeTab !== 'raw_markdown' && currentFormat && (
            <button
              onClick={() => copyToClipboard(currentFormat.content)}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium transition"
            >
              {copied ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Content</span>
                </>
              )}
            </button>
          )}
        </div>

        {/* Multimodal Format Navigation Tabs */}
        <div className="flex flex-wrap gap-1.5 bg-slate-950 p-1 rounded-lg border border-slate-800/80">
          <button
            onClick={() => setActiveTab('raw_markdown')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition ${
              activeTab === 'raw_markdown'
                ? 'bg-slate-800 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5 text-blue-400" />
            <span>Original Courseware</span>
          </button>

          <button
            onClick={() => setActiveTab('structured_notes')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition ${
              activeTab === 'structured_notes'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
            }`}
          >
            <FileText className="w-3.5 h-3.5 text-amber-400" />
            <span>Structured Notes & Diagrams</span>
            {formats['structured_notes'] && (
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            )}
          </button>

          <button
            onClick={() => setActiveTab('podcast_dialogue')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition ${
              activeTab === 'podcast_dialogue'
                ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
            }`}
          >
            <Headphones className="w-3.5 h-3.5 text-purple-400" />
            <span>Podcast Dialogue Script</span>
            {formats['podcast_dialogue'] && (
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
            )}
          </button>

          <button
            onClick={() => setActiveTab('video_lecture_script')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition ${
              activeTab === 'video_lecture_script'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
            }`}
          >
            <Video className="w-3.5 h-3.5 text-cyan-400" />
            <span>Video Masterclass Script</span>
            {formats['video_lecture_script'] && (
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            )}
          </button>
        </div>
      </div>

      {/* Content Display Area */}
      <div className="flex-1 p-5 overflow-y-auto max-h-[560px] bg-[#090d16]">
        {activeTab === 'raw_markdown' ? (
          <div className="prose-dark max-w-none text-xs">
            <div className="whitespace-pre-wrap font-sans leading-relaxed">
              {lesson.markdownContent}
            </div>
          </div>
        ) : currentFormat ? (
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs text-slate-400">
              <span className="font-semibold text-slate-200">{currentFormat.title}</span>
              <span className="font-mono text-[10px]">
                Generated via Gemini 3.7 Flash &bull; {new Date(currentFormat.createdAt).toLocaleDateString()}
              </span>
            </div>
            <div className="prose-dark max-w-none text-xs leading-relaxed whitespace-pre-wrap">
              {currentFormat.content}
            </div>
          </div>
        ) : (
          /* Empty / Un-generated State */
          <div className="flex flex-col items-center justify-center p-8 text-center my-6">
            <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-4 text-indigo-400">
              {activeTab === 'structured_notes' && <FileText className="w-7 h-7 text-amber-400" />}
              {activeTab === 'podcast_dialogue' && <Headphones className="w-7 h-7 text-purple-400" />}
              {activeTab === 'video_lecture_script' && <Video className="w-7 h-7 text-cyan-400" />}
            </div>

            <h4 className="text-sm font-bold text-slate-100 mb-1">
              {activeTab === 'structured_notes' && 'Structured Study Notes Not Yet Generated'}
              {activeTab === 'podcast_dialogue' && 'Podcast Dialogue Script Not Yet Generated'}
              {activeTab === 'video_lecture_script' && 'Video Masterclass Script Not Yet Generated'}
            </h4>

            <p className="text-xs text-slate-400 max-w-md mb-5 leading-relaxed">
              {activeTab === 'structured_notes' &&
                'Generate an executive summary, concept hierarchy, diagram blueprints, and review checklists grounded strictly in this lesson.'}
              {activeTab === 'podcast_dialogue' &&
                'Transform this technical lesson into a dynamic conversational podcast between Alex (curious learner) and Sam (expert mentor).'}
              {activeTab === 'video_lecture_script' &&
                'Create a punchy, 4-minute video lecture script complete with visual cues, camera transitions, and timestamps.'}
            </p>

            {/* Persona Selector for Video */}
            {activeTab === 'video_lecture_script' && (
              <div className="mb-4 flex items-center space-x-2 text-xs">
                <span className="text-slate-400">Persona:</span>
                <select
                  value={selectedPersona}
                  onChange={(e) => setSelectedPersona(e.target.value)}
                  className="bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-200 px-3 py-1.5 focus:outline-none focus:border-cyan-500"
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
              className="px-4 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold flex items-center gap-2 transition shadow-lg shadow-indigo-600/20 disabled:opacity-50"
            >
              {isLoading ? (
                <>
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  <span>Synthesizing via Gemini 3.7 Flash...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Generate {activeTab.replace('_', ' ').toUpperCase()}</span>
                </>
              )}
            </button>
          </div>
        )}
      </div>

      {/* Footer Status */}
      <div className="p-3 border-t border-slate-800 bg-slate-950/40 flex items-center justify-between text-[11px] text-slate-400">
        <span className="flex items-center gap-1.5">
          <Layers className="w-3.5 h-3.5 text-amber-400" />
          Strict Factual Invariant: No hallucinated facts outside source markdown
        </span>
        {currentFormat && (
          <button
            onClick={() =>
              handleGenerate(activeTab as 'structured_notes' | 'podcast_dialogue' | 'video_lecture_script')
            }
            disabled={isLoading}
            className="flex items-center gap-1 text-slate-400 hover:text-slate-200 transition"
          >
            <RefreshCw className={`w-3 h-3 ${isLoading ? 'animate-spin' : ''}`} />
            <span>Regenerate</span>
          </button>
        )}
      </div>
    </div>
  );
}
