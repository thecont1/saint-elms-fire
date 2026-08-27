'use client';

import React, { useEffect, useState } from 'react';
import { Shield, User } from 'lucide-react';

function RefreshIcon({ className = 'w-3.5 h-3.5', spin = false }: { className?: string; spin?: boolean }) {
  return (
    <svg viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg" className={`${className} ${spin ? 'animate-spin' : ''}`} fill="currentColor">
      <path d="M1639 1056q0 5-1 7-64 268-268 434.5T892 1664q-146 0-282.5-55T366 1452l-129 129q-19 19-45 19t-45-19-19-45v-448q0-26 19-45t45-19h448q26 0 45 19t19 45-19 45l-137 137q71 66 161 102t187 36q134 0 250-65t186-179q11-17 53-117 8-23 30-23h192q13 0 22.5 9.5t9.5 22.5zm25-800v448q0 26-19 45t-45 19h-448q-26 0-45-19t-19-45 19-45l138-138q-148-137-349-137-134 0-250 65T460 628q-11 17-53 117-8 23-30 23H178q-13 0-22.5-9.5T146 736v-7q65-268 270-434.5T896 128q146 0 284 55.5T1425 340l130-129q19-19 45-19t45 19 19 45z" />
    </svg>
  );
}

function BoomIcon({ className = 'w-3.5 h-3.5' }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className={className} fill="currentColor">
      <path d="M 432 0 L 459 53 L 432 0 L 459 53 L 512 80 L 512 80 L 459 107 L 459 107 L 432 160 L 432 160 L 405 107 L 405 107 L 352 80 L 352 80 L 405 53 L 405 53 L 432 0 L 432 0 Z M 291 164 L 262 153 L 291 164 L 262 153 Q 237 144 208 144 Q 140 146 95 191 Q 50 236 48 304 Q 50 372 95 417 Q 140 462 208 464 Q 276 462 321 417 Q 366 372 368 304 Q 368 275 359 250 L 348 221 L 348 221 L 361 208 L 361 208 L 304 151 L 304 151 L 291 164 L 291 164 Z M 338 117 L 395 174 L 338 117 L 395 174 L 407 185 L 407 185 L 429 208 L 429 208 L 407 231 L 407 231 L 404 234 L 404 234 Q 416 267 416 304 Q 414 392 355 451 Q 296 510 208 512 Q 120 510 61 451 Q 2 392 0 304 Q 2 216 61 157 Q 120 98 208 96 Q 245 96 279 108 L 281 105 L 281 105 L 304 83 L 304 83 L 327 105 L 327 105 L 338 117 L 338 117 Z M 208 224 Q 174 225 151 247 L 151 247 L 151 247 Q 129 270 128 304 L 80 304 L 80 304 Q 81 250 117 213 Q 154 177 208 176 L 208 224 L 208 224 Z" />
    </svg>
  );
}

interface ModelLightProps {
  label: string;
  /** up = green; down = red. */
  up: boolean;
  /** serving now or within the activity window = fast flicker. */
  serving: boolean;
  latencyMs?: number | null;
  title: string;
}

/**
 * One model status light:
 * - red solid = unavailable
 * - green solid = available, idle
 * - green fast-flicker = actively serving (data in/out)
 */
function ModelLight({ label, up, serving, latencyMs, title }: ModelLightProps) {
  return (
    <span
      className="flex items-center gap-1.5 text-xs"
      title={title}
      data-testid={`model-light-${label}`}
      aria-label={`${label} ${up ? 'available' : 'unavailable'}${serving ? ', serving requests' : ''}`}
    >
      <span
        className={`inline-block w-2 h-2 rounded-full shrink-0 ${
          up ? 'bg-emerald-500' : 'bg-red-400'
        } ${up && serving ? 'animate-flicker-fast' : ''} shadow-[0_0_4px_currentColor]`}
      />
      <span className="capitalize">{label.replace(/-/g, ' ')}</span>
      {latencyMs != null && (
        <span className={`tabular-nums ${up ? 'text-marine-400' : 'text-red-400'}`}>
          {up ? `${(latencyMs / 1000).toFixed(1)}s` : '—'}
        </span>
      )}
    </span>
  );
}

export function ModelStatusLights() {
  const [status, setStatus] = useState<{
    geminiUp: boolean;
    sarvamUp: boolean;
    geminiServing: boolean;
    sarvamServing: boolean;
    geminiLatency: number | null;
    sarvamLatency: number | null;
  }>({ geminiUp: false, sarvamUp: false, geminiServing: false, sarvamServing: false, geminiLatency: null, sarvamLatency: null });

  const [selectedGemini, setSelectedGemini] = useState('gemini-3.7-flash');
  const selectedSarvam = 'sarvam-105b-conversations';

  useEffect(() => {
    let cancelled = false;

    // Availability: poll the (cached) health endpoint.
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
          geminiLatency: checks.gemini?.latencyMs ?? null,
          sarvamLatency: checks.sarvam?.latencyMs ?? null,
        }));
      } catch {
        if (!cancelled) setStatus((prev) => ({ ...prev, geminiUp: false, sarvamUp: false, geminiLatency: null, sarvamLatency: null }));
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
        if (!cancelled) setStatus((prev) => ({ ...prev, geminiServing: false, sarvamServing: false }));
      }
    };

    void pollHealth();
    void pollActivity();
    const healthTimer = setInterval(pollHealth, 10_000);
    const activityTimer = setInterval(pollActivity, 1_500);
    return () => {
      cancelled = true;
      clearInterval(healthTimer);
      clearInterval(activityTimer);
    };
  }, []);

  return (
    <div className="flex flex-col gap-1.5 mt-0.5">
      {/* Gemini primary model dropdown */}
      <div className="flex items-center gap-1.5">
        <span className={`inline-block w-2 h-2 rounded-full shrink-0 ${status.geminiUp ? 'bg-emerald-500' : 'bg-red-400'} ${status.geminiUp && status.geminiServing ? 'animate-flicker-fast' : ''} shadow-[0_0_4px_currentColor]`} />
        <select
          value={selectedGemini}
          onChange={(e) => setSelectedGemini(e.target.value)}
          className="flex-1 min-w-0 rounded-md border-beacon-200 bg-white px-2 py-1 text-xs text-marine-900 focus:border-beacon-500 focus:outline-none focus:ring-beacon-200"
          title={status.geminiUp
            ? `Primary model · available${status.geminiLatency != null ? ` (${(status.geminiLatency / 1000).toFixed(1)}s)` : ''}${status.geminiServing ? ' · serving requests' : ''}`
            : 'Primary model · unavailable (falling back)'}
        >
          <option value="gemini-3.7-flash">Gemini 3.7 Flash (preferred)</option>
          <option value="gemini-3.6-flash">Gemini 3.6 Flash</option>
          <option value="gemini-3.5-flash">Gemini 3.5 Flash</option>
        </select>
        {status.geminiLatency != null && (
          <span className={`tabular-nums text-[10px] ${status.geminiUp ? 'text-marine-400' : 'text-red-400'}`}>
            {status.geminiUp ? `${(status.geminiLatency / 1000).toFixed(1)}s` : '—'}
          </span>
        )}
      </div>

      {/* Sarvam fallback model dropdown — single option */}
      <div className="flex items-center gap-1.5">
        <span className={`inline-block w-2 h-2 rounded-full shrink-0 ${status.sarvamUp ? 'bg-emerald-500' : 'bg-red-400'} ${status.sarvamUp && status.sarvamServing ? 'animate-flicker-fast' : ''} shadow-[0_0_4px_currentColor]`} />
        <select
          value={selectedSarvam}
          onChange={() => {}}
          disabled={true}
          className="flex-1 min-w-0 rounded-md border-beacon-200 bg-white px-2 py-1 text-xs text-marine-900 opacity-70 cursor-not-allowed"
          title={status.sarvamUp
            ? `Fallback model · available${status.sarvamLatency != null ? ` (${(status.sarvamLatency / 1000).toFixed(1)}s)` : ''}${status.sarvamServing ? ' · serving requests' : ''}`
            : 'Fallback model · unavailable'}
        >
          <option value="sarvam-105b-conversations">Sarvam 105b (fallback)</option>
        </select>
        {status.sarvamLatency != null && (
          <span className={`tabular-nums text-[10px] ${status.sarvamUp ? 'text-marine-400' : 'text-red-400'}`}>
            {status.sarvamUp ? `${(status.sarvamLatency / 1000).toFixed(1)}s` : '—'}
          </span>
        )}
      </div>
    </div>
  );
}

interface NavigationProps {
  currentRole: 'admin' | 'student';
  onRoleChange: (role: 'admin' | 'student') => void;
  /** Optional: renders a Sync button to the right of the role switcher. */
  onSync?: () => void;
  isSyncing?: boolean;
  /** Optional: renders a Boom (flush all data) button next to Sync. */
  onBoom?: () => void;
  isBooming?: boolean;
  /** Optional: hides all header controls (role switcher, sync, boom). */
  controlsHidden?: boolean;
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
  onBoom,
  isBooming = false,
  controlsHidden = false,
}: NavigationProps) {
  const formatDateTime = (d: Date) => {
    const date = d.toLocaleDateString('en-GB', {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    }).replace(/,/g, '');
    const time = d.toLocaleTimeString('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    });
    return `${date} ${time}`;
  };

  const [currentDateTime, setCurrentDateTime] = useState<string>(formatDateTime(new Date()));

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(formatDateTime(new Date()));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-beacon-100 bg-white/90 backdrop-blur-md">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Brand */}
          <div className="flex items-start gap-3 min-w-0">
            <div className="w-10 h-10 rounded-full bg-beacon-600 text-white flex items-center justify-center corona-glow shrink-0">
              <CoronaMark className="w-6 h-6 animate-glow-breathe" />
            </div>
            <div className="min-w-0 flex flex-col items-start gap-0.5">
              <span className="font-display text-3xl font-thin tracking-[-0.06em] text-marine-900 leading-none uppercase">
                Saint Elms Fire
              </span>
              <span
                className="hidden sm:inline font-mono text-[10px] text-marine-500 leading-none"
                suppressHydrationWarning
              >
                {currentDateTime}
              </span>
            </div>
          </div>

          {/* Role Switcher + Sync */}
          {!controlsHidden && (
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
                  <RefreshIcon className="w-3.5 h-3.5" spin={isSyncing} />
                  <span className="hidden sm:inline">Sync</span>
                </button>
              )}

              {onBoom && (
                <button
                  onClick={onBoom}
                  disabled={isBooming}
                  className="flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-red-600 bg-red-600 hover:bg-red-700 text-white text-xs font-bold transition shadow-sm disabled:opacity-50"
                  title="Flush all data from Firestore — start from scratch"
                >
                  <BoomIcon className={`w-3.5 h-3.5 ${isBooming ? 'animate-pulse' : ''}`} />
                  <span className="hidden sm:inline">Boom</span>
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
