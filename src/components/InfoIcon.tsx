'use client';

import { Info } from 'lucide-react';

interface InfoIconProps {
  text: string;
  className?: string;
}

export function InfoIcon({ text, className = '' }: InfoIconProps) {
  return (
    <button
      type="button"
      aria-label={text}
      className={`relative inline-flex group bg-transparent border-0 p-0 cursor-help focus:outline-none focus-visible:ring-2 focus-visible:ring-beacon-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded ${className}`}
    >
      <Info className="w-3.5 h-3.5 text-marine-400 transition-colors group-hover:text-beacon-600 group-focus-visible:text-beacon-600" />
      <span className="pointer-events-none absolute right-0 top-full mt-1.5 z-50 w-56 rounded-lg border border-beacon-200 bg-white px-3 py-2 text-[11px] leading-relaxed text-marine-600 shadow-lg opacity-0 invisible transition-all duration-150 group-hover:opacity-100 group-hover:visible group-focus-visible:opacity-100 group-focus-visible:visible">
        {text}
      </span>
    </button>
  );
}
