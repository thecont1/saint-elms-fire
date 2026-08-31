'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { getPersonaConfig, HEARTH_PERSONAS, type HearthPersona } from './hearth-personas';

// ── Rail ──────────────────────────────────────────────────────────────────
// Vertical tabs: icons + labels, one visible at a time, keyboard-navigable.

interface HearthRailProps {
  active: HearthPersona;
  onSelect: (p: HearthPersona) => void;
  loading?: boolean;
}

export function HearthRail({ active, onSelect, loading = false }: HearthRailProps) {
  const listRef = useRef<HTMLDivElement>(null);

  const focusTab = (persona: HearthPersona) => {
    const el = listRef.current?.querySelector<HTMLButtonElement>(`[data-persona="${persona}"]`);
    el?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
    const idx = HEARTH_PERSONAS.findIndex((p) => p.id === active);
    let next: HearthPersona | null = null;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      next = HEARTH_PERSONAS[(idx + 1) % HEARTH_PERSONAS.length].id;
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      next = HEARTH_PERSONAS[(idx - 1 + HEARTH_PERSONAS.length) % HEARTH_PERSONAS.length].id;
    }
    if (next) {
      e.preventDefault();
      onSelect(next);
      focusTab(next);
    }
  };

  return (
    <div
      role="tablist"
      aria-label="Companion personas"
      className="flex w-full flex-row justify-center gap-1 sm:flex-col sm:justify-start sm:gap-2"
      onKeyDown={handleKeyDown}
      ref={listRef}
    >
      {HEARTH_PERSONAS.map((p) => {
        const isActive = p.id === active;
        const { Icon } = p;
        return (
          <button
            key={p.id}
            data-persona={p.id}
            role="tab"
            aria-selected={isActive}
            aria-controls={`hearth-panel-${p.id}`}
            id={`hearth-tab-${p.id}`}
            tabIndex={isActive ? 0 : -1}
            disabled={loading}
            onClick={() => onSelect(p.id)}
            className={[
              'flex min-h-[44px] min-w-[44px] flex-col items-center gap-0.5 rounded-lg border px-3 py-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-beacon-400 focus-visible:ring-offset-1 sm:w-full sm:flex-row sm:items-center sm:gap-2.5 sm:px-3.5 sm:py-3',
              isActive
                ? 'border-beacon-300 bg-white text-marine-900 shadow-sm'
                : 'border-transparent bg-transparent text-marine-700 hover:bg-white/60 hover:text-marine-900',
            ].join(' ')}
          >
            <Icon className="h-4 w-4 shrink-0" />
            <span className="text-[10px] font-semibold leading-tight sm:text-xs sm:font-medium">{p.label}</span>
          </button>
        );
      })}
    </div>
  );
}
