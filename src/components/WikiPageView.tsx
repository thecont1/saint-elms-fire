'use client';

import React, { useEffect, useState } from 'react';
import { BookOpen, Library, Users, Link2, X, ArrowDownLeft, ArrowUpRight } from 'lucide-react';

/**
 * Second Brain wiki page (Phase 6, Track B4).
 * The constellation is the map; this page is the territory: per-concept
 * summary, source lessons, recommended readings, accepted peer material,
 * and backlinks in both directions.
 */

interface WikiBacklink {
  nodeId: string;
  concept: string;
  relationshipType: string;
  description: string;
  direction: 'incoming' | 'outgoing';
}

interface WikiPage {
  nodeId: string;
  concept: string;
  summary: string;
  category: string;
  importance: number;
  masteryLevel?: number;
  origin: 'lesson' | 'library' | 'peer_share';
  sourceLessons: Array<{ id: string; title: string }>;
  recommendedReadings: Array<{ libraryItemId: string; rationale: string; matchScore: number; item?: { title: string } }>;
  peerMaterial: Array<{ id: string; title: string; sharerId: string }>;
  backlinks: WikiBacklink[];
}

const ORIGIN_LABELS: Record<WikiPage['origin'], string> = {
  lesson: 'From a released lesson',
  library: 'From a library reading',
  peer_share: 'Shared by a peer',
};

export function WikiPageView({
  studentId,
  nodeId,
  onClose,
  onNavigate,
}: {
  studentId: string;
  nodeId: string;
  onClose: () => void;
  onNavigate?: (nodeId: string) => void;
}) {
  const [page, setPage] = useState<WikiPage | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    setPage(null);
    setError(null);
    fetch(`/api/wiki/${encodeURIComponent(nodeId)}?studentId=${encodeURIComponent(studentId)}`)
      .then(async (res) => {
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || 'Unable to load wiki page');
        if (!cancelled) setPage(data.page);
      })
      .catch((err: Error) => {
        if (!cancelled) setError(err.message);
      });
    return () => {
      cancelled = true;
    };
  }, [studentId, nodeId]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-marine-950/40 backdrop-blur-sm p-4" onClick={onClose}>
      <div
        className="w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-white rounded-2xl border border-beacon-200 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={page ? `Wiki page: ${page.concept}` : 'Wiki page'}
      >
        <div className="sticky top-0 bg-white/95 backdrop-blur border-b border-beacon-100 px-5 py-3 flex items-center justify-between">
          <h3 className="font-display text-base font-semibold text-marine-900 flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-beacon-600" />
            {page ? page.concept : 'Loading concept…'}
          </h3>
          <button onClick={onClose} className="p-1.5 rounded-md text-marine-400 hover:text-marine-800" aria-label="Close">
            <X className="w-4 h-4" />
          </button>
        </div>

        {error && <div className="p-6 text-sm text-red-600">{error}</div>}
        {!error && !page && (
          <div className="p-10 flex justify-center">
            <div className="w-6 h-6 border-2 border-beacon-500 border-t-transparent rounded-full animate-spin" />
          </div>
        )}

        {page && (
          <div className="p-5 space-y-5">
            <div className="flex items-center gap-2 flex-wrap text-[11px]">
              <span className="px-2 py-0.5 rounded-full bg-beacon-50 text-beacon-700 border border-beacon-200 font-semibold capitalize">
                {page.category}
              </span>
              <span
                className={`px-2 py-0.5 rounded-full border font-semibold ${
                  page.origin === 'peer_share'
                    ? 'bg-cyan-50 text-cyan-700 border-cyan-200'
                    : 'bg-marine-50 text-marine-600 border-marine-200'
                }`}
              >
                {ORIGIN_LABELS[page.origin]}
              </span>
              <span className="text-beacon-600 font-bold">Magnitude: {'✦'.repeat(page.importance || 3)}</span>
            </div>

            <p className="text-sm text-marine-700 leading-relaxed">{page.summary}</p>

            {page.sourceLessons.length > 0 && (
              <section>
                <h4 className="text-xs font-bold text-marine-900 uppercase tracking-wide mb-1.5 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-beacon-500" /> Source lessons
                </h4>
                <ul className="text-xs text-marine-600 space-y-1">
                  {page.sourceLessons.map((lesson) => (
                    <li key={lesson.id}>{lesson.title}</li>
                  ))}
                </ul>
              </section>
            )}

            {page.recommendedReadings.length > 0 && (
              <section>
                <h4 className="text-xs font-bold text-marine-900 uppercase tracking-wide mb-1.5 flex items-center gap-1.5">
                  <Library className="w-3.5 h-3.5 text-beacon-500" /> Recommended readings
                </h4>
                <ul className="space-y-2">
                  {page.recommendedReadings.map((reading) => (
                    <li key={reading.libraryItemId} className="text-xs bg-beacon-50/60 border border-beacon-100 rounded-lg p-2.5">
                      <span className="font-semibold text-marine-800">{reading.item?.title ?? 'Available in library'}</span>
                      <p className="text-marine-500 mt-0.5">{reading.rationale}</p>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {page.peerMaterial.length > 0 && (
              <section>
                <h4 className="text-xs font-bold text-marine-900 uppercase tracking-wide mb-1.5 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-cyan-600" /> Accepted peer material
                </h4>
                <ul className="space-y-1 text-xs text-marine-600">
                  {page.peerMaterial.map((item) => (
                    <li key={item.id}>
                      <span className="font-semibold text-marine-800">{item.title}</span>{' '}
                      <span className="text-marine-400">— shared by {item.sharerId}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {page.backlinks.length > 0 && (
              <section>
                <h4 className="text-xs font-bold text-marine-900 uppercase tracking-wide mb-1.5 flex items-center gap-1.5">
                  <Link2 className="w-3.5 h-3.5 text-beacon-500" /> Connections
                </h4>
                <ul className="space-y-1.5">
                  {page.backlinks.map((link) => (
                    <li key={`${link.direction}-${link.nodeId}`} className="text-xs flex items-center gap-1.5">
                      {link.direction === 'outgoing' ? (
                        <ArrowUpRight className="w-3 h-3 text-beacon-500 shrink-0" />
                      ) : (
                        <ArrowDownLeft className="w-3 h-3 text-marine-400 shrink-0" />
                      )}
                      <button
                        onClick={() => onNavigate?.(link.nodeId)}
                        className="font-semibold text-beacon-700 hover:underline"
                        disabled={!onNavigate}
                      >
                        {link.concept}
                      </button>
                      <span className="text-marine-400">({link.relationshipType})</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
