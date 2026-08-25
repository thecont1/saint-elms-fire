'use client';

import React from 'react';
import { Flame, Compass, Shield, User, Database, Cpu, Sparkles, Navigation as NavIcon } from 'lucide-react';

interface NavigationProps {
  currentRole: 'admin' | 'student';
  onRoleChange: (role: 'admin' | 'student') => void;
  activeTab?: string;
  onTabChange?: (tab: string) => void;
}

export function Navigation({
  currentRole,
  onRoleChange,
  activeTab,
  onTabChange,
}: NavigationProps) {
  return (
    <header className="border-b border-sky-100 bg-white/85 backdrop-blur-md sticky top-0 z-40 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand with St. Elmo's Luminous Fire Logo */}
          <div className="flex items-center space-x-3.5">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-600 via-cyan-500 to-blue-600 flex items-center justify-center shadow-md shadow-sky-500/20 ring-2 ring-sky-300/40">
              <Flame className="w-5 h-5 text-white animate-pulse" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-extrabold text-lg tracking-tight text-slate-900 font-sans">
                  ST. ELMO&apos;S FIRE
                </span>
                <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full font-bold bg-sky-50 text-sky-700 border border-sky-200">
                  Second Brain LMS
                </span>
              </div>
              <p className="text-xs text-slate-500 hidden sm:flex items-center gap-1">
                <Compass className="w-3 h-3 text-sky-500" />
                <span>Navigating the unknown through reasoned knowledge</span>
              </p>
            </div>
          </div>

          {/* System Status Badges */}
          <div className="hidden lg:flex items-center space-x-2.5">
            <div className="flex items-center space-x-1.5 px-3 py-1 rounded-full bg-sky-50/80 border border-sky-200 text-xs text-sky-900 font-medium shadow-2xs">
              <Cpu className="w-3.5 h-3.5 text-sky-600" />
              <span>Model:</span>
              <span className="font-mono text-sky-800 font-bold">gemini-3.7-flash</span>
            </div>
            <div className="flex items-center space-x-1.5 px-3 py-1 rounded-full bg-blue-50/80 border border-blue-200 text-xs text-blue-900 font-medium shadow-2xs">
              <Database className="w-3.5 h-3.5 text-blue-600" />
              <span>GCP Firestore:</span>
              <span className="font-mono text-blue-800 font-bold">saint-elms-fire</span>
            </div>
          </div>

          {/* Role Switcher */}
          <div className="flex items-center space-x-2">
            <div className="bg-slate-100/90 p-1 rounded-xl border border-slate-200 flex items-center shadow-inner">
              <button
                onClick={() => onRoleChange('admin')}
                className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  currentRole === 'admin'
                    ? 'bg-white text-sky-800 shadow-sm border border-slate-200/80'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                }`}
              >
                <Shield className="w-3.5 h-3.5 text-sky-600" />
                <span>Admin View</span>
              </button>

              <button
                onClick={() => onRoleChange('student')}
                className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  currentRole === 'student'
                    ? 'bg-sky-600 text-white shadow-sm shadow-sky-600/30'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                }`}
              >
                <User className="w-3.5 h-3.5 text-white" />
                <span>Student View (Alex)</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
