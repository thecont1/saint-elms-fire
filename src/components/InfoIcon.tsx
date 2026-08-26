'use client';

import { Info } from 'lucide-react';

interface InfoIconProps {
  text: string;
  className?: string;
}

export function InfoIcon({ text, className = '' }: InfoIconProps) {
  return (
    <span className={`relative inline-flex group ${className}`}>
      <Info className="w-3.5 h-3.5 text-marine-400 cursor-help transition-colors group-hover:text-beacon-600" />
      <span className="pointer-events-none absolute right-0 top-full mt-1.5 z-50 w-56 rounded-lg border border-beacon-200 bg-white px-3 py-2 text-[11px] leading-relaxed text-marine-600 shadow-lg opacity-0 invisible transition-all duration-150 group-hover:opacity-100 group-hover:visible">
        {text}
      </span>
    </span>
  );
}
