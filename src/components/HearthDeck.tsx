'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import { getPersonaConfig, HEARTH_PERSONAS, type HearthPersona } from './hearth-personas';
import { HearthRail } from './HearthNav';
import { PersonaChatPanel } from './PersonaChatPanel';
import { usePersonaChat, type PersonaChatState } from './usePersonaChat';

interface HearthDeckProps {
  studentId: string;
  initialQuery?: string;
}

function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(query.matches);
    const onChange = (event: MediaQueryListEvent) => setReduced(event.matches);
    query.addEventListener('change', onChange);
    return () => query.removeEventListener('change', onChange);
  }, []);
  return reduced;
}

export function HearthDeck({ studentId, initialQuery = '' }: HearthDeckProps) {
  const [active, setActive] = useState<HearthPersona>('friend');
  const [sheetPersona, setSheetPersona] = useState<HearthPersona | null>(null);
  const reducedMotion = useReducedMotion();

  const sectionRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const sheetRef = useRef<HTMLDivElement>(null);
  const barButtonsRef = useRef<Partial<Record<HearthPersona, HTMLButtonElement | null>>>({});

  // One chat state per persona, owned here so threads survive panel switches
  // and are shared between the desktop deck and the mobile bottom sheet.
  const guideChat = usePersonaChat(studentId, 'guide');
  const philosopherChat = usePersonaChat(studentId, 'philosopher');
  const friendChat = usePersonaChat(studentId, 'friend');
  const chats: Record<HearthPersona, PersonaChatState> = {
    guide: guideChat,
    philosopher: philosopherChat,
    friend: friendChat,
  };

  const scrollToPersona = useCallback(
    (persona: HearthPersona, behavior?: ScrollBehavior) => {
      const viewport = viewportRef.current;
      if (!viewport) return;
      const index = HEARTH_PERSONAS.findIndex((p) => p.id === persona);
      viewport.scrollTo({
        left: index * viewport.clientWidth,
        behavior: behavior ?? (reducedMotion ? 'auto' : 'smooth'),
      });
    },
    [reducedMotion],
  );

  const select = useCallback(
    (persona: HearthPersona) => {
      setActive(persona);
      scrollToPersona(persona);
    },
    [scrollToPersona],
  );

  // Swipe/drag: the native scroll position is the source of truth once it lands.
  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const width = viewport.clientWidth || 1;
        const index = Math.round(viewport.scrollLeft / width);
        const landed = HEARTH_PERSONAS[index];
        if (landed && landed.id !== active) setActive(landed.id);
      });
    };
    viewport.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      viewport.removeEventListener('scroll', onScroll);
    };
  }, [active]);

  // Keep the active panel aligned when the viewport resizes.
  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    const onResize = () => scrollToPersona(active, 'auto');
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [active, scrollToPersona]);

  // ←/→ (and Home/End) anywhere in the deck that isn't a text field. The rail
  // handles its own keys first and preventDefaults them; we stand down then.
  const handleDeckKeyDown = (event: React.KeyboardEvent) => {
    if (event.defaultPrevented) return;
    const target = event.target as HTMLElement;
    if (target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement) return;
    const index = HEARTH_PERSONAS.findIndex((p) => p.id === active);
    let next: HearthPersona | null = null;
    if (event.key === 'ArrowRight') next = HEARTH_PERSONAS[(index + 1) % HEARTH_PERSONAS.length].id;
    else if (event.key === 'ArrowLeft') next = HEARTH_PERSONAS[(index - 1 + HEARTH_PERSONAS.length) % HEARTH_PERSONAS.length].id;
    else if (event.key === 'Home') next = HEARTH_PERSONAS[0].id;
    else if (event.key === 'End') next = HEARTH_PERSONAS[HEARTH_PERSONAS.length - 1].id;
    if (next) {
      event.preventDefault();
      select(next);
    }
  };

  // Graph/concept hand-off: pre-load the Guide composer and bring the deck into view.
  useEffect(() => {
    if (!initialQuery) return;
    guideChat.setInput(initialQuery);
    if (window.matchMedia('(min-width: 768px)').matches) {
      select('guide');
      sectionRef.current?.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'start' });
    } else {
      setSheetPersona('guide');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialQuery]);

  // Mobile sheet: Escape closes, body scroll locks, focus moves in and returns.
  useEffect(() => {
    if (!sheetPersona) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSheetPersona(null);
    };
    document.addEventListener('keydown', onKeyDown);
    const closeButton = sheetRef.current?.querySelector<HTMLButtonElement>('[data-hearth-close]');
    closeButton?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
      barButtonsRef.current[sheetPersona]?.focus();
    };
  }, [sheetPersona]);

  const activeIndex = HEARTH_PERSONAS.findIndex((p) => p.id === active);
  const activeVoice = getPersonaConfig(active).voice;

  return (
    <>
      {/* ── Desktop: the frozen trident deck (≥768px) ─────────────────────── */}
      <section
        ref={sectionRef}
        aria-label="The Hearth — Socratic companions"
        className="relative hidden scroll-mt-16 md:block md:h-[165vh]"
      >
        <div className="sticky top-16 z-30 flex h-[calc(100dvh-4rem)] flex-col border-y border-beacon-100 bg-paper/95 backdrop-blur-sm">
          <div
            role="region"
            aria-roledescription="carousel"
            aria-label="Socratic companions"
            className="flex min-h-0 flex-1"
            onKeyDown={handleDeckKeyDown}
          >
            {/* 44px persona tab rail — the always-available alternative to swiping.
                The deck's masthead lives here, not in a header bar, so panels
                keep the full viewport height. */}
            <div className="flex w-[176px] shrink-0 flex-col border-r border-beacon-100 bg-white/70 px-3 py-4">
              <div className="space-y-1.5 px-1 text-center">
                <p className="chart-annotation text-beacon-700">The Hearth</p>
                <p className="chart-annotation leading-relaxed">Three companions · one flame</p>
              </div>
              <div className="flex flex-1 flex-col justify-center">
                <HearthRail active={active} onSelect={select} />
              </div>
            </div>

            <div className="relative min-w-0 flex-1">
              <div
                ref={viewportRef}
                className="flex h-full snap-x snap-mandatory overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              >
                {HEARTH_PERSONAS.map((config, index) => {
                  const isActive = config.id === active;
                  return (
                    <section
                      key={config.id}
                      id={`hearth-panel-${config.id}`}
                      role="group"
                      aria-roledescription="slide"
                      aria-label={`${config.voice}, panel ${index + 1} of ${HEARTH_PERSONAS.length}`}
                      aria-labelledby={`hearth-tab-${config.id}`}
                      aria-hidden={!isActive}
                      inert={!isActive}
                      className="h-full w-full shrink-0 snap-start snap-always"
                    >
                      <PersonaChatPanel config={config} chat={chats[config.id]} />
                    </section>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Slide switches are announced, never automatic */}
          <p aria-live="polite" role="status" className="sr-only">
            {`Showing ${activeVoice}, panel ${activeIndex + 1} of ${HEARTH_PERSONAS.length}`}
          </p>
        </div>
      </section>

      {/* ── Mobile: fixed persona bar + bottom-sheet deck (<768px, never sticky) ── */}
      <div className="md:hidden">
        <nav aria-label="Socratic companions" className="fixed inset-x-0 bottom-0 z-40 border-t border-beacon-100 bg-white/95 backdrop-blur">
          <div className="flex items-stretch">
            {HEARTH_PERSONAS.map((config) => {
              const { Icon } = config;
              return (
                <button
                  key={config.id}
                  ref={(el) => {
                    barButtonsRef.current[config.id] = el;
                  }}
                  onClick={() => setSheetPersona(config.id)}
                  aria-haspopup="dialog"
                  className="flex min-h-[56px] flex-1 flex-col items-center justify-center gap-1 px-2 py-2 text-marine-600 transition-colors hover:bg-beacon-50 hover:text-beacon-700 focus-visible:bg-beacon-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-beacon-400"
                >
                  <Icon className="h-4 w-4" />
                  <span className="text-[10px] font-semibold">{config.label}</span>
                </button>
              );
            })}
          </div>
        </nav>

        {sheetPersona && (
          <>
            <button
              aria-label={`Close ${getPersonaConfig(sheetPersona).voice}`}
              className="fixed inset-0 z-40 cursor-default bg-marine-950/40"
              onClick={() => setSheetPersona(null)}
              tabIndex={-1}
            />
            <div
              ref={sheetRef}
              role="dialog"
              aria-modal="true"
              aria-label={getPersonaConfig(sheetPersona).voice}
              className="fixed inset-x-0 bottom-0 z-50 flex h-[85dvh] flex-col rounded-t-2xl border border-beacon-200 bg-paper shadow-2xl"
            >
              <div className="flex shrink-0 items-center justify-between gap-2 border-b border-beacon-100 px-3 py-2">
                <HearthRail active={sheetPersona} onSelect={setSheetPersona} />
                <button
                  type="button"
                  data-hearth-close
                  onClick={() => setSheetPersona(null)}
                  aria-label="Close companion"
                  className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-full border border-beacon-200 bg-white text-marine-600 transition-colors hover:bg-beacon-50 hover:text-beacon-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-beacon-400"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className="min-h-0 flex-1">
                <PersonaChatPanel config={getPersonaConfig(sheetPersona)} chat={chats[sheetPersona]} />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
