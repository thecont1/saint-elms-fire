'use client';

import React, { useEffect, useState } from 'react';
import { Compass, Shield, User, RefreshCw } from 'lucide-react';

interface ModelLightProps {
  label: string;
  /** up = green; down = red. */
  up: boolean;
  /** serving now or within the activity window = fast flicker. */
  serving: boolean;
  title: string;
}

/**
 * One model status light:
 * - red solid = unavailable
 * - green solid = available, idle
 * - green fast-flicker = actively serving (data in/out)
 */
function ModelLight({ label, up, serving, title }: ModelLightProps) {
  return (
    <span
      className="flex items-center gap-1.5"
      title={title}
      data-testid={`model-light-${label}`}
      aria-label={`${label} ${up ? 'available' : 'unavailable'}${serving ? ', serving requests' : ''}`}
    >
      <span
        className={`inline-block w-2 h-2 rounded-full ${
          up ? 'bg-emerald-500' : 'bg-red-400'
        } ${up && serving ? 'animate-flicker-fast' : ''} shadow-[0_0_4px_currentColor]`}
      />
      <span className="hidden xl:inline">{label}</span>
    </span>
  );
}

export function ModelStatusLights() {
  const [status, setStatus] = useState<{
    geminiUp: boolean;
    sarvamUp: boolean;
    geminiServing: boolean;
    sarvamServing: boolean;
  }>({ geminiUp: false, sarvamUp: false, geminiServing: false, sarvamServing: false });

  useEffect(() => {
    let cancelled = false;

    // Availability: slow poll of the (cached) health endpoint.
    const pollHealth = async () => {
      try {
        const res = await fetch('/api/health', { cache: 'no-store' });
        const data = await res.json();
        if (cancelled) return;
        const checks = data.checks ?? {};
        setStatus((prev) => ({
          ...prev,
          geminiUp: checks.gemini?.status === 'up',
          sarvamUp: checks.sarvam?.status === 'up',
        }));
      } catch {
        if (!cancelled) setStatus((prev) => ({ ...prev, geminiUp: false, sarvamUp: false }));
      }
    };

    // Activity: fast poll of the cheap observational endpoint so the light
    // flickers while a model is actually serving, not merely available.
    const pollActivity = async () => {
      try {
        const res = await fetch('/api/model-activity', { cache: 'no-store' });
        const data = await res.json();
        if (cancelled) return;
        const models = data.models ?? {};
        setStatus((prev) => ({
          ...prev,
          geminiServing: models['gemini-3.7-flash']?.inFlight || models['gemini-3.7-flash']?.recent || false,
          sarvamServing: models['sarvam-105b-conversations']?.inFlight || models['sarvam-105b-conversations']?.recent || false,
        }));
      } catch {
        // ignore transient poll failures; lights keep last known state
      }
    };

    void pollHealth();
    void pollActivity();
    const healthTimer = setInterval(pollHealth, 30_000);
    const activityTimer = setInterval(pollActivity, 1_500);
    return () => {
      cancelled = true;
      clearInterval(healthTimer);
      clearInterval(activityTimer);
    };
  }, []);

  return (
    <div className="flex items-center gap-3 chart-annotation">
      <ModelLight
        label="gemini-3.7-flash"
        up={status.geminiUp}
        serving={status.geminiServing}
        title={
          status.geminiUp
            ? `Primary model · available${status.geminiServing ? ' · serving requests (flickering)' : ''}`
            : 'Primary model · unavailable (falling back)'
        }
      />
      <ModelLight
        label="sarvam-105b"
        up={status.sarvamUp}
        serving={status.sarvamServing}
        title={
          status.sarvamUp
            ? `Fallback model · available${status.sarvamServing ? ' · serving requests (flickering)' : ''}`
            : 'Fallback model · unavailable'
        }
      />
    </div>
  );
}

interface NavigationProps {
  currentRole: 'admin' | 'student';
  onRoleChange: (role: 'admin' | 'student') => void;
  /** Optional: renders a Sync button to the right of the role switcher. */
  onSync?: () => void;
  isSyncing?: boolean;
  activeTab?: string;
  onTabChange?: (tab: string) => void;
}

/** The corona spark: St. Elmo's fire radiating at the masthead. */
export function CoronaMark({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="3.2" fill="currentColor" />
      {Array.from({ length: 8 }).map((_, i) => {
        const a = (i * Math.PI) / 4;
        const long = i % 2 === 0;
        const r1 = 5.4;
        const r2 = long ? 10.6 : 8.2;
        return (
          <line
            key={i}
            x1={12 + r1 * Math.cos(a)}
            y1={12 + r1 * Math.sin(a)}
            x2={12 + r2 * Math.cos(a)}
            y2={12 + r2 * Math.sin(a)}
            stroke="currentColor"
            strokeWidth={long ? 2 : 1.4}
            strokeLinecap="round"
          />
        );
      })}
    </svg>
  );
}

export function Navigation({
  currentRole,
  onRoleChange,
  onSync,
  isSyncing = false,
}: NavigationProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-beacon-100 bg-white/90 backdrop-blur-md">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Brand */}
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-full bg-beacon-600 text-white flex items-center justify-center corona-glow shrink-0">
              <CoronaMark className="w-6 h-6 animate-glow-breathe" />
            </div>
            <div className="min-w-0">
              <span className="font-display text-xl font-semibold tracking-tight text-marine-900 leading-none">
                Saint Elms Fire
              </span>
              <p className="chart-annotation mt-1 hidden sm:flex items-center gap-1.5 truncate">
                <Compass className="w-3 h-3 text-beacon-500" />
                A beacon for weary navigators
              </p>
            </div>
          </div>

          {/* Role Switcher + Sync */}
          <div className="flex items-center gap-2.5">
            <div className="flex items-center gap-1 rounded-full border border-beacon-200 bg-beacon-50 p-1">
              <button
                onClick={() => onRoleChange('admin')}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  currentRole === 'admin'
                    ? 'bg-white text-beacon-700 shadow-sm border border-beacon-200'
                    : 'text-marine-500 hover:text-marine-800'
                }`}
              >
                <Shield className="w-3.5 h-3.5" />
                <span>Admin</span>
              </button>

              <button
                onClick={() => onRoleChange('student')}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  currentRole === 'student'
                    ? 'bg-beacon-600 text-white shadow-sm'
                    : 'text-marine-500 hover:text-marine-800'
                }`}
              >
                <User className="w-3.5 h-3.5" />
                <span>Student · Alex</span>
              </button>
            </div>

            {onSync && (
              <button
                onClick={onSync}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-beacon-200 bg-white hover:bg-beacon-50 text-beacon-700 text-xs font-bold transition shadow-sm"
                title="Refresh Firestore database state"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${isSyncing ? 'animate-spin' : ''}`} />
                <span className="hidden sm:inline">Sync</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
