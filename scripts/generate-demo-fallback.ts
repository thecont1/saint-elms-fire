#!/usr/bin/env bun
import { mkdir, writeFile } from 'node:fs/promises';
import { renderNotesPdf } from '../src/lib/pdf-notes';

const markdown = `# Forced Oscillations and Resonance

## Demo fallback

A damped oscillator driven by a periodic force obeys

\`m x'' + b x' + k x = F₀ cos(ωt)\`.

Its steady-state amplitude is

\`A(ω) = F₀ / sqrt((k - mω²)² + (bω)²)\`.

Resonance is the large-amplitude response near the natural frequency. Damping lowers and broadens the peak; the exact peak lies below \`ω₀ = sqrt(k/m)\` when damping is non-zero.

## What to notice

- The driving force supplies energy continuously.
- Damping dissipates energy continuously.
- At steady state, average input power balances average dissipated power.
- The phase lag grows from nearly 0 below resonance to nearly π above resonance.

This file is pre-generated for demo continuity if live artifact generation exceeds 45 seconds.`;

const outputPath = 'artifacts/demo-fallback-forced-oscillations-notes.pdf';
const pdf = await renderNotesPdf({
  markdown,
  courseTitle: 'Differential Equations',
  moduleTitle: 'Second-Order ODEs',
  lessonTitle: 'Forced Oscillations and Resonance',
  releasedAt: '2026-09-01T00:00:00.000Z',
});
await mkdir('artifacts', { recursive: true });
await writeFile(outputPath, pdf);
console.log(`${outputPath} (${pdf.byteLength} bytes)`);
