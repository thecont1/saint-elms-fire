'use client';

import React from 'react';
import { Compass, Shield, User, Cpu, Database } from 'lucide-react';

interface NavigationProps {
  currentRole: 'admin' | 'student';
  onRoleChange: (role: 'admin' | 'student') => void;
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

          {/* Chart-margin status annotations */}
          <div className="hidden lg:flex items-center gap-5 chart-annotation">
            <span className="flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-beacon-500" />
              gemini-3.7-flash
            </span>
            <span className="h-3 w-px bg-beacon-200" />
            <span className="flex items-center gap-1.5">
              <Database className="w-3.5 h-3.5 text-beacon-500" />
              firestore · saint-elms-fire
            </span>
          </div>

          {/* Role Switcher */}
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
        </div>
      </div>
    </header>
  );
}
