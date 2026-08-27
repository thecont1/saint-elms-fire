'use client';

/**
 * Artifact hub (Phase 6, Track A4): per-lesson binary artifacts — branded PDF
 * notes and two-voice podcast audio — generated from the student's Second
 * Brain corpus. Status chips: generating / ready / failed-with-retry.
 */
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { FileDown, AudioLines, RefreshCw, AlertTriangle, Loader2 } from 'lucide-react';

interface ArtifactRecord {
  id: string;
  formatType: 'notes_pdf' | 'podcast_audio';
  status: 'pending' | 'ready' | 'failed';
  createdAt: string;
  error?: string;
  sources?: Array<{ kind: string; refId: string; label?: string }>;
}

interface ArtifactPanelProps {
  lessonId: string;
  studentId: string;
}

const LABELS: Record<ArtifactRecord['formatType'], { title: string; icon: React.ReactNode; action: string }> = {
  notes_pdf: { title: 'PDF Notes', icon: <FileDown className="w-4 h-4" />, action: 'Download PDF' },
  podcast_audio: { title: 'Podcast Audio', icon: <AudioLines className="w-4 h-4" />, action: 'Play episode' },
};

export function ArtifactPanel({ lessonId, studentId }: ArtifactPanelProps) {
  const [artifacts, setArtifacts] = useState<Record<string, ArtifactRecord>>({});
  const [busy, setBusy] = useState<string | null>(null);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);
  const pollTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const refresh = useCallback(async () => {
    try {
      const res = await fetch(`/api/artifacts?lessonId=${lessonId}&studentId=${studentId}`);
      if (!res.ok) return;
      const data = await res.json();
      const map: Record<string, ArtifactRecord> = {};
      for (const artifact of data.artifacts ?? []) {
        // Keep the newest per formatType (list is sorted newest-first).
        if (!map[artifact.formatType]) map[artifact.formatType] = artifact;
      }
      setArtifacts(map);
      if (Object.values(map).some((a) => a.status === 'pending')) {
        if (pollTimer.current) clearTimeout(pollTimer.current);
        pollTimer.current = setTimeout(refresh, 4000);
      }
    } catch {
      // Silent: status panel refresh is best-effort.
    }
  }, [lessonId, studentId]);

  useEffect(() => {
    refresh();
    return () => {
      if (pollTimer.current) clearTimeout(pollTimer.current);
    };
  }, [refresh]);

  const generate = async (formatType: ArtifactRecord['formatType']) => {
    setBusy(formatType);
    setNotice(null);
    try {
      const res = await fetch('/api/artifacts/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ lessonId, studentId, formatType }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Generation failed');
      await refresh();
    } catch (error) {
      setNotice(error instanceof Error ? error.message : 'Generation failed');
    } finally {
      setBusy(null);
    }
  };

  const open = async (artifact: ArtifactRecord) => {
    setNotice(null);
    try {
      const res = await fetch(`/api/artifacts/${artifact.id}/url?studentId=${studentId}`);
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Unable to fetch artifact');
      if (artifact.formatType === 'podcast_audio') {
        setAudioUrl(data.url);
      } else {
        window.open(data.url, '_blank', 'noopener');
      }
    } catch (error) {
      setNotice(error instanceof Error ? error.message : 'Unable to open artifact');
    }
  };

  return (
    <div className="rounded-xl border border-beacon-100 bg-white p-4 space-y-3">
      <span className="chart-annotation text-beacon-600">Second-Brain artifacts</span>
      {notice && (
        <p className="text-xs text-red-600 flex items-center gap-1.5">
          <AlertTriangle className="w-3.5 h-3.5" /> {notice}
        </p>
      )}
      <div className="grid gap-2 sm:grid-cols-2">
        {(['notes_pdf', 'podcast_audio'] as const).map((formatType) => {
          const artifact = artifacts[formatType];
          const meta = LABELS[formatType];
          return (
            <div key={formatType} className="border border-beacon-100 rounded-lg p-3 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-xs font-bold text-marine-800">
                  {meta.icon} {meta.title}
                </span>
                {artifact && (
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      artifact.status === 'ready'
                        ? 'bg-green-50 text-green-700 border border-green-200'
                        : artifact.status === 'failed'
                          ? 'bg-red-50 text-red-700 border border-red-200'
                          : 'bg-beacon-50 text-beacon-700 border border-beacon-200'
                    }`}
                  >
                    {artifact.status === 'pending' ? 'generating…' : artifact.status}
                  </span>
                )}
              </div>
              {artifact?.status === 'ready' && artifact.sources && artifact.sources.length > 0 && (
                <p className="text-[10px] text-marine-500 leading-snug">
                  Built from: {artifact.sources.map((s) => s.label ?? s.refId).join(', ')}
                </p>
              )}
              {artifact?.status === 'failed' && (
                <p className="text-[10px] text-red-600">Failed: {artifact.error ?? 'unknown'} — retry below.</p>
              )}
              <div className="flex gap-2 mt-auto">
                {artifact?.status === 'ready' && (
                  <button
                    onClick={() => open(artifact)}
                    className="text-xs font-bold px-3 py-1.5 rounded-full bg-beacon-600 hover:bg-beacon-500 text-white transition"
                  >
                    {meta.action}
                  </button>
                )}
                <button
                  onClick={() => generate(formatType)}
                  disabled={busy === formatType || artifact?.status === 'pending'}
                  className="text-xs font-bold px-3 py-1.5 rounded-full border border-beacon-200 text-beacon-700 hover:bg-beacon-50 transition disabled:opacity-50 flex items-center gap-1.5"
                >
                  {busy === formatType || artifact?.status === 'pending' ? (
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  ) : (
                    <RefreshCw className="w-3.5 h-3.5" />
                  )}
                  {artifact ? 'Regenerate' : 'Generate'}
                </button>
              </div>
            </div>
          );
        })}
      </div>
      {audioUrl && (
        <audio controls autoPlay src={audioUrl} className="w-full mt-1">
          Your browser does not support inline audio.
        </audio>
      )}
    </div>
  );
}
