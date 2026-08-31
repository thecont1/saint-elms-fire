'use client';

import React from 'react';
import type { ServedBy } from '@/ai/model-routing';

const LABELS: Record<string, string> = {
  'gemini-3.7-flash': 'Gemini 3.7 Flash',
  'gemini-3.6-flash': 'Gemini 3.6 Flash',
  'gemini-3.5-flash': 'Gemini 3.5 Flash',
  'sarvam-105b-conversations': 'Sarvam 105B',
  'gemini-embedding-001': 'Gemini Embedding 001',
  'gemini-2.5-flash-preview-tts': 'Gemini TTS',
  'sarvam-tts-bulbul-v3': 'Sarvam Bulbul v3',
};

export function modelDisplayName(model: string): string {
  return LABELS[model] ?? model;
}

export function ServedByChip({ servedBy, className = '' }: { servedBy?: ServedBy; className?: string }) {
  if (!servedBy) return null;
  return (
    <span
      className={`inline-flex items-center rounded-full border border-beacon-200 bg-beacon-50 px-2 py-0.5 text-[10px] font-semibold text-beacon-800 ${className}`}
      title={`${servedBy.role} model · ${servedBy.attemptCount} provider attempt${servedBy.attemptCount === 1 ? '' : 's'}`}
    >
      Lodestar · {modelDisplayName(servedBy.model)}{servedBy.role === 'fallback' ? ' (relief keeper)' : ''}
    </span>
  );
}
