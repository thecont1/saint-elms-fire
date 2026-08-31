# Saint Elms Fire — Project Notes

## Stack
- Next.js 16 (App Router, Turbopack) + React 19 + Tailwind CSS v4
- Genkit + Gemini flows in `src/ai/flows/`, Firestore via `src/lib/firestore.ts`

## Commands
- Dev: `bun run dev` (port 3002 if 3000/3001 are taken)
- Typecheck: `bun run typecheck`
- Build: `bun run build`

## Styling (important)
- Tailwind v4 is wired through `@tailwindcss/postcss` in `postcss.config.mjs` — required, do not remove; without it no utility classes are generated.
- Theme tokens live in `@theme` in `src/app/globals.css`: `beacon-*` (blue accent), `marine-*` (navy ink), `paper`/`chart` (backgrounds), fonts `font-display` (Fraunces), `font-sans` (Instrument Sans), `font-mono` (IBM Plex Mono).
- Design language: "mariner's chart" — two-colour white & blue, `.chart-card`, `.chart-annotation`, `.course-line`, `.corona-glow` helpers in globals.css; the `CoronaMark` logo SVG is exported from `src/components/Navigation.tsx`.

## Gotchas
- Chat timestamps use `toLocaleTimeString` — keep `suppressHydrationWarning` on the timestamp element in PersonaChatPanel (used by HearthDeck) to avoid hydration mismatch.
- Student chat is the Hearth deck: `HearthDeck.tsx` (sticky trident carousel, mobile bottom sheet) + `PersonaChatPanel.tsx` (presentational) + `usePersonaChat.ts` (state) + `hearth-personas.ts` / `HearthNav.tsx` (44px tab rail). Trident order is Friend, Philosopher, Guide; panel voices are branded "Socrates my Friend" / "Socratest my Philosopher" / "Socrates my Guide". Persona identity is iconography + typography, never hue.
