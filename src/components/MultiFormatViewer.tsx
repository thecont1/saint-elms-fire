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
  AlertTriangle,
} from 'lucide-react';
import { CoronaMark } from '@/components/Navigation';
import { ArtifactPanel } from '@/components/ArtifactPanel';
import type { Lesson, GeneratedFormat } from '@/lib/types';
import { ServedByChip } from '@/components/ServedByChip';

interface MultiFormatViewerProps {
  lesson: Lesson;
  studentId: string;
}

type FormatTab = 'raw_markdown' | 'structured_notes' | 'podcast_dialogue' | 'video_lecture_script';

/** Phase 7, Track A5: the sync path must terminate in bounded time on the
 *  client too; the server enforces its own 75s generation deadline. */
const CLIENT_GENERATION_DEADLINE_MS = 90_000;

/**
 * Displays a lesson with its original markdown and generated alternative formats.
 *
 * @param lesson - The lesson content and metadata to display and transform
 * @param studentId - The student whose generated formats are loaded and saved
 * @returns The lesson format viewer interface
 */
export function MultiFormatViewer({ lesson, studentId }: MultiFormatViewerProps) {
  const [activeTab, setActiveTab] = useState<FormatTab>('raw_markdown');
  const [formats, setFormats] = useState<Record<string, GeneratedFormat>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [generationError, setGenerationError] = useState<string | null>(null);
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
    setGenerationError(null);
    setElapsedSeconds(0);
    const ticker = setInterval(() => setElapsedSeconds((s) => s + 1), 1000);
    const controller = new AbortController();
    const deadline = setTimeout(() => controller.abort(), CLIENT_GENERATION_DEADLINE_MS);
    try {
      const res = await fetch('/api/generate-format', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        signal: controller.signal,
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
          servedBy: data.metadata?.servedBy,
        },
      }));
    } catch (err: any) {
      const message = err?.name === 'AbortError'
        ? 'Generation timed out — the models may be busy, please retry.'
        : `Generation failed: ${err.message}`;
      setGenerationError(message);
    } finally {
      clearInterval(ticker);
      clearTimeout(deadline);
      setIsLoading(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const currentFormat = formats[activeTab as string];

  const tabs: { id: FormatTab; label: string; icon: React.ReactNode }[] = [
    { id: 'raw_markdown', label: 'Original Courseware', icon: <BookOpen className="w-3.5 h-3.5" /> },
    { id: 'structured_notes', label: 'Structured Notes', icon: <FileText className="w-3.5 h-3.5" /> },
    { id: 'podcast_dialogue', label: 'Podcast Dialogue', icon: <Headphones className="w-3.5 h-3.5" /> },
    { id: 'video_lecture_script', label: 'Video Masterclass', icon: <Video className="w-3.5 h-3.5" /> },
  ];

  return (
    <div className="overflow-hidden flex flex-col h-full rounded-xl border border-beacon-100 bg-white">
      {/* Header with Title and Tab Switcher */}
      <div className="p-5 border-b border-beacon-100 bg-beacon-50/50">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div>
            <span className="chart-annotation flex items-center gap-1.5 text-beacon-600">
              <CoronaMark className="w-3.5 h-3.5" />
              One lesson, many lights
            </span>
            <h3 className="font-display text-lg font-semibold text-marine-900 mt-1">
              {lesson.title}
            </h3>
          </div>

          {activeTab !== 'raw_markdown' && currentFormat && (
            <button
              onClick={() => copyToClipboard(currentFormat.content)}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white hover:bg-beacon-50 text-marine-600 text-xs font-semibold transition border border-beacon-200"
            >
              {copied ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-beacon-600" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-marine-400" />
                  <span>Copy script / notes</span>
                </>
              )}
            </button>
          )}
        </div>

        {/* Multimodal Format Navigation Tabs */}
        <div className="flex flex-wrap gap-1 bg-white p-1 rounded-full border border-beacon-200 w-fit">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition ${
                activeTab === tab.id
                  ? 'bg-beacon-600 text-white shadow-sm'
                  : 'text-marine-500 hover:text-marine-900 hover:bg-beacon-50'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
              {tab.id !== 'raw_markdown' && formats[tab.id] && (
                <span className={`w-1.5 h-1.5 rounded-full ${activeTab === tab.id ? 'bg-white' : 'bg-beacon-500'}`} />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Content Display Area */}
      <div className="flex-1 p-6 overflow-y-auto max-h-[560px] bg-white">
        {generationError && (
          <p className="mb-4 text-xs text-red-600 flex items-center gap-1.5">
            <AlertTriangle className="w-3.5 h-3.5" /> {generationError}
          </p>
        )}
        {activeTab === 'raw_markdown' ? (
          <div className="prose-light max-w-none text-xs">
            <div className="whitespace-pre-wrap font-sans leading-relaxed text-marine-800">
              {lesson.markdownContent}
            </div>
          </div>
        ) : currentFormat ? (
          <div className="space-y-4">
            <div className="flex items-center justify-between gap-2 pb-3 border-b border-beacon-100 text-xs text-marine-500 flex-wrap">
              <span className="font-bold text-beacon-800">{currentFormat.title}</span>
              <div className="flex items-center gap-2">
                <ServedByChip servedBy={currentFormat.servedBy} />
                <span>{new Date(currentFormat.createdAt).toLocaleDateString()}</span>
              </div>
            </div>
            <div className="prose-light max-w-none text-xs leading-relaxed whitespace-pre-wrap text-marine-800">
              {currentFormat.content}
            </div>
          </div>
        ) : (
          /* Empty / Un-generated State */
          <div className="flex flex-col items-center justify-center p-8 text-center my-6">
            <div className="w-16 h-16 rounded-full bg-beacon-50 border border-beacon-200 flex items-center justify-center mb-4 text-beacon-500">
              {activeTab === 'structured_notes' && <FileText className="w-7 h-7" />}
              {activeTab === 'podcast_dialogue' && <Headphones className="w-7 h-7" />}
              {activeTab === 'video_lecture_script' && <Video className="w-7 h-7" />}
            </div>

            <h4 className="font-display text-lg font-semibold text-marine-900 mb-1">
              {activeTab === 'structured_notes' && 'No chart notes yet'}
              {activeTab === 'podcast_dialogue' && 'No dialogue on the wire'}
              {activeTab === 'video_lecture_script' && 'The lecture hall is dark'}
            </h4>

            <p className="text-xs text-marine-500 max-w-md mb-6 leading-relaxed">
              {activeTab === 'structured_notes' &&
                'Generate an executive summary, concept hierarchy, diagram blueprints, and review checklists grounded strictly in this lesson.'}
              {activeTab === 'podcast_dialogue' &&
                'Transform this technical lesson into a lively conversational podcast between Alex (curious learner) and Sam (expert mentor).'}
              {activeTab === 'video_lecture_script' &&
                'Create a punchy, 4-minute video lecture script complete with visual cues, camera transitions, and timestamps.'}
            </p>

            {/* Persona Selector for Video */}
            {activeTab === 'video_lecture_script' && (
              <div className="mb-4 flex items-center gap-2 text-xs">
                <span className="chart-annotation">Lecturer persona:</span>
                <select
                  value={selectedPersona}
                  onChange={(e) => setSelectedPersona(e.target.value)}
                  className="bg-white border border-beacon-200 rounded-full text-xs text-marine-800 px-3 py-1.5 focus:outline-none focus:border-beacon-500 font-medium"
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
              className="px-5 py-2.5 rounded-full bg-beacon-600 hover:bg-beacon-500 text-white text-xs font-bold flex items-center gap-2 transition shadow-sm disabled:opacity-50"
            >
              {isLoading ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Kindling the fire… {elapsedSeconds}s</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  <span>Generate {activeTab.replace(/_/g, ' ')}</span>
                </>
              )}
            </button>
          </div>
        )}
      </div>

      {/* Phase 6: binary artifact hub (PDF notes, podcast audio) */}
      <div className="px-5 pb-4">
        <ArtifactPanel lessonId={lesson.id} studentId={studentId} />
      </div>

      {/* Footer Status */}
      <div className="p-3.5 border-t border-beacon-100 bg-beacon-50/50 flex items-center justify-between gap-2 text-xs text-marine-600 font-medium flex-wrap">
        <span className="flex items-center gap-1.5 text-beacon-800">
          <Layers className="w-4 h-4 text-beacon-500" />
          Strict invariant: traceable to the source markdown — zero hallucination
        </span>
        {currentFormat && (
          <button
            onClick={() =>
              handleGenerate(activeTab as 'structured_notes' | 'podcast_dialogue' | 'video_lecture_script')
            }
            disabled={isLoading}
            className="flex items-center gap-1 text-beacon-600 hover:text-beacon-800 font-bold transition"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin' : ''}`} />
            <span>Regenerate</span>
          </button>
        )}
      </div>
    </div>
  );
}
