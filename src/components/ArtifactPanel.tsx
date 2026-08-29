'use client';

/**
 * Artifact hub (Phase 6, Track A4): per-lesson binary artifacts — branded PDF
 * notes and two-voice podcast audio — generated from the student's Second
 * Brain corpus. Status chips: generating / ready / failed-with-retry.
 *
 * Phase 7, Track A4 polling discipline: backoff while pending (3s → 5s → 8s),
 * polling survives transient fetch errors (notice after 3 in a row), and a
 * 4-minute deadline renders a distinct "taking longer" state with escape
 * hatches instead of an endless spinner.
 */
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { FileDown, AudioLines, RefreshCw, AlertTriangle, Loader2, Hourglass } from 'lucide-react';

interface ArtifactJobState {
  status: string;
  attempts: number;
  errorCategory?: string;
}

interface ArtifactRecord {
  id: string;
  formatType: 'notes_pdf' | 'podcast_audio';
  status: string;
  createdAt: string;
  error?: string;
  job?: ArtifactJobState;
  sources?: Array<{ kind: string; refId: string; label?: string }>;
}

interface ArtifactPanelProps {
  lessonId: string;
  studentId: string;
}

const POLL_INITIAL_MS = 3000;
const POLL_MAX_MS = 8000;
const POLL_DEADLINE_MS = 4 * 60_000;
const MAX_CONSECUTIVE_ERRORS = 3;

const LABELS: Record<ArtifactRecord['formatType'], { title: string; icon: React.ReactNode; action: string }> = {
  notes_pdf: { title: 'PDF Notes', icon: <FileDown className="w-4 h-4" />, action: 'Download PDF' },
  podcast_audio: { title: 'Podcast Audio', icon: <AudioLines className="w-4 h-4" />, action: 'Play episode' },
};

/**
 * Displays PDF and podcast artifacts for a lesson, including their generation status and available actions.
 *
 * @param lessonId - The lesson whose artifacts are displayed
 * @param studentId - The student associated with the artifacts
 */
export function ArtifactPanel({ lessonId, studentId }: ArtifactPanelProps) {
  const [artifacts, setArtifacts] = useState<Record<string, ArtifactRecord>>({});
  const [readyArtifacts, setReadyArtifacts] = useState<Record<string, ArtifactRecord>>({});
  const [busy, setBusy] = useState<string | null>(null);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);
  const [pollNotice, setPollNotice] = useState<'connection' | 'taking-longer' | null>(null);
  const pollTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pollInterval = useRef(POLL_INITIAL_MS);
  const consecutiveErrors = useRef(0);
  const pendingSince = useRef<number | null>(null);

  const schedule = useCallback((delay: number) => {
    if (pollTimer.current) clearTimeout(pollTimer.current);
    pollTimer.current = setTimeout(() => void refreshRef.current(), delay);
  }, []);

  const refresh = useCallback(async () => {
    let serverArtifacts: ArtifactRecord[];
    try {
      const res = await fetch(`/api/artifacts?lessonId=${lessonId}&studentId=${studentId}`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      serverArtifacts = (data.artifacts ?? []) as ArtifactRecord[];
      consecutiveErrors.current = 0;
      setPollNotice((current) => (current === 'connection' ? null : current));
    } catch {
      // Keep trying: a transient 500 must not freeze the panel in stale state.
      consecutiveErrors.current += 1;
      if (consecutiveErrors.current >= MAX_CONSECUTIVE_ERRORS) setPollNotice('connection');
      schedule(POLL_MAX_MS);
      return;
    }

    setArtifacts((prev) => {
      const next = { ...prev };
      for (const artifact of serverArtifacts) {
        const existing = next[artifact.formatType];
        if (!existing || Date.parse(artifact.createdAt) > Date.parse(existing.createdAt)) {
          next[artifact.formatType] = artifact;
        }
      }
      return next;
    });
    setReadyArtifacts((prev) => {
      const next = { ...prev };
      for (const artifact of serverArtifacts) {
        if (artifact.status !== 'ready') continue;
        const existing = next[artifact.formatType];
        if (!existing || Date.parse(artifact.createdAt) > Date.parse(existing.createdAt)) {
          next[artifact.formatType] = artifact;
        }
      }
      return next;
    });

    if (serverArtifacts.some((artifact) => artifact.status === 'pending')) {
      if (!pendingSince.current) pendingSince.current = Date.now();
      if (Date.now() - pendingSince.current > POLL_DEADLINE_MS) {
        setPollNotice('taking-longer');
        schedule(POLL_MAX_MS);
      } else {
        pollInterval.current = pollInterval.current === POLL_INITIAL_MS ? 5000 : POLL_MAX_MS;
        schedule(pollInterval.current);
      }
    } else {
      pendingSince.current = null;
      pollInterval.current = POLL_INITIAL_MS;
      setPollNotice((current) => (current === 'taking-longer' ? null : current));
    }
  }, [lessonId, studentId, schedule]);

  const refreshRef = useRef(refresh);
  refreshRef.current = refresh;

  useEffect(() => {
    void refresh();
    return () => {
      if (pollTimer.current) clearTimeout(pollTimer.current);
    };
  }, [refresh]);

  const generate = async (formatType: ArtifactRecord['formatType']) => {
    setBusy(formatType);
    setNotice(null);
    try {
      // Failed artifacts re-run through the retry endpoint (Track C3), which
      // does not count against the daily generation quota a second time.
      const failed = artifacts[formatType];
      const res = failed?.status === 'failed'
        ? await fetch(`/api/artifacts/${failed.id}/retry?studentId=${studentId}`, { method: 'POST' })
        : await fetch('/api/artifacts/generate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ lessonId, studentId, formatType }),
          });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Generation failed');
      pendingSince.current = Date.now();
      pollInterval.current = POLL_INITIAL_MS;
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

  const stopWaiting = () => {
    if (pollTimer.current) clearTimeout(pollTimer.current);
    pendingSince.current = null;
    setPollNotice(null);
  };

  return (
    <div className="rounded-xl border border-beacon-100 bg-white p-4 space-y-3">
      <span className="chart-annotation text-beacon-600">Second-Brain artifacts</span>
      {notice && (
        <p className="text-xs text-red-600 flex items-center gap-1.5">
          <AlertTriangle className="w-3.5 h-3.5" /> {notice}
        </p>
      )}
      {pollNotice === 'connection' && (
        <p className="text-xs text-marine-500 flex items-center gap-1.5">
          <Loader2 className="w-3.5 h-3.5 animate-spin" /> Waiting on the server — still trying…
        </p>
      )}
      {pollNotice === 'taking-longer' && (
        <div className="text-xs text-marine-600 flex items-center gap-2 flex-wrap">
          <Hourglass className="w-3.5 h-3.5 text-beacon-600" />
          <span>Taking longer than expected — the watchdog will settle this job.</span>
          <button
            onClick={stopWaiting}
            className="font-bold text-marine-500 hover:text-marine-800 underline underline-offset-2"
          >
            Stop waiting
          </button>
          <button
            onClick={() => void refresh()}
            className="font-bold text-beacon-700 hover:text-beacon-900 underline underline-offset-2"
          >
            Check status
          </button>
        </div>
      )}
      <div className="grid gap-2 sm:grid-cols-2">
        {(['notes_pdf', 'podcast_audio'] as const).map((formatType) => {
          const artifact = artifacts[formatType];
          const readyArtifact = artifact?.status === 'ready' ? artifact : readyArtifacts[formatType];
          const meta = LABELS[formatType];
          const chip =
            artifact?.status === 'ready'
              ? { label: 'ready', classes: 'bg-green-50 text-green-700 border border-green-200' }
              : artifact?.status === 'failed'
                ? { label: 'failed', classes: 'bg-red-50 text-red-700 border border-red-200' }
                : artifact?.status === 'pending'
                  ? { label: 'generating…', classes: 'bg-beacon-50 text-beacon-700 border border-beacon-200' }
                  : artifact
                    ? { label: 'unknown', classes: 'bg-marine-50 text-marine-600 border border-marine-100' }
                    : null;
          return (
            <div key={formatType} className="border border-beacon-100 rounded-lg p-3 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-xs font-bold text-marine-800">
                  {meta.icon} {meta.title}
                </span>
                {chip && (
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${chip.classes}`}>
                    {chip.label}
                  </span>
                )}
              </div>
              {artifact?.status === 'ready' && artifact.sources && artifact.sources.length > 0 && (
                <p className="text-[10px] text-marine-500 leading-snug">
                  Built from: {artifact.sources.map((s) => s.label ?? s.refId).join(', ')}
                </p>
              )}
              {artifact?.status === 'failed' && (
                <p className="text-[10px] text-red-600">
                  Failed: {artifact.error ?? artifact.job?.errorCategory ?? 'unknown'} — retry below.
                </p>
              )}
              <div className="flex gap-2 mt-auto">
                {readyArtifact && (
                  <button
                    onClick={() => open(readyArtifact)}
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
