'use client';

import React from 'react';
import { Sparkles, Shield, User, Database, Cpu, BookOpen, Layers, Network } from 'lucide-react';

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
    <header className="border-b border-slate-800 bg-[#0c1220]/80 backdrop-blur-md sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-500 via-orange-600 to-amber-700 flex items-center justify-center shadow-lg shadow-amber-500/20 ring-1 ring-amber-400/40">
              <Sparkles className="w-5 h-5 text-amber-100" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-bold text-lg tracking-tight text-white font-mono">
                  SAINT ELMS FIRE
                </span>
                <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/30">
                  Second Brain LMS
                </span>
              </div>
              <p className="text-xs text-slate-400 hidden sm:block">
                Multimodal AI Courseware &bull; Genkit &bull; Gemini 3.7 Flash &bull; Firestore
              </p>
            </div>
          </div>

          {/* System Status Pills */}
          <div className="hidden lg:flex items-center space-x-2">
            <div className="flex items-center space-x-1.5 px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs text-slate-300">
              <Cpu className="w-3.5 h-3.5 text-cyan-400" />
              <span>Model:</span>
              <span className="font-mono text-cyan-300 font-medium">gemini-3.7-flash</span>
            </div>
            <div className="flex items-center space-x-1.5 px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs text-slate-300">
              <Database className="w-3.5 h-3.5 text-amber-400" />
              <span>GCP Firestore:</span>
              <span className="font-mono text-amber-300 font-medium">saint-elms-fire</span>
            </div>
          </div>

          {/* Role Switcher */}
          <div className="flex items-center space-x-2">
            <div className="bg-slate-900/90 p-1 rounded-lg border border-slate-800 flex items-center">
              <button
                onClick={() => onRoleChange('admin')}
                className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                  currentRole === 'admin'
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                <Shield className="w-3.5 h-3.5" />
                <span>Admin View</span>
              </button>

              <button
                onClick={() => onRoleChange('student')}
                className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                  currentRole === 'student'
                    ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                <User className="w-3.5 h-3.5" />
                <span>Student View (Alex)</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
