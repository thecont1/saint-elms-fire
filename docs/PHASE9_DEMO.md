# Phase 9 — Demo Script: The Socratic Trident in Four Beats

Four beats, four proofs that lanes hold. Reset between runs with **Boom**
(admin header) — it restores Ananya, Brinda, and Chetna to their canonical
seeded states.

**Setup:** `bun run dev`, open `/`, and use the header dropdown to switch
identity. The Hearth deck sits between the hero metrics and the dashboard;
scroll into it and it pins — the frame never moves while you converse.

---

## Beat 1 — Ananya asks beyond the chart (Guide refuses, redirects)

1. Switch to **Ananya · Sem I ongoing**.
2. In the Hearth, choose the **Guide** tab (compass star, third panel).
3. Ask: *"Explain fine-structure splitting from Atomic and Molecular Physics."*
4. **Expected:** the Guide answers, exactly in voice — *"that's beyond what
   I've released to you — try the Philosopher"* — with **zero** grounded
   sources. The unreleased Sem VI lesson never surfaces, not even as a title
   citation. The `Lodestar · …` servedBy chip still records which model
   served the refusal.
5. Contrast beat: ask *"Explain the difference between displacement and
   distance."* — same panel answers, grounded in **Mechanics**, sources listed.

## Beat 2 — Brinda gets a trailhead, not a summary (Philosopher)

1. Switch to **Brinda · end Sem III**.
2. Choose the **Philosopher** tab (telescope, second panel).
3. Ask: *"How does resonance appear outside physics?"*
4. **Expected:** every substantive line begins `[course]` or `[web]` —
   courseware and Google-Search grounding are never blended unattributed —
   and the answer **ends with exactly one** `Trailhead: …?` question pushing
   past the syllabus. Brinda's Sem III state follows every released course in
   the canonical 71-row manifest, including Astrophysics III now that WP-D has
   landed; nothing in her world references courses outside that manifest.

## Beat 3 — Chetna keeps the fire banked (break mode)

1. Switch to **Chetna · completed Sem V, break before Sem VI**.
2. Look at the **Socratest my Philosopher** proactive card at the top of the
   central column, above the Knowledge Reader (no prompt needed — this beat
   is deterministic and model-free).
3. **Expected:** no new-material pressure. The active challenge reads in the
   revisitation register — *"Keep the fire banked: what connection from … is
   worth revisiting today?"* with trigger reason *"Spaced revisitation during
   the break before Semester VI."* — aimed at her own graph plus licensed
   library trailheads (Feynman, Abbott, Carroll).
4. Optional: ask the Philosopher *"What should I read next to keep my quantum
   mechanics understanding alive?"* — the trailhead lands on a reading, not
   on Sem VI.

## Beat 4 — The Friend minds the office (ops lane, grounded)

1. Any stage; choose the **Friend** tab (banked flame, first panel).
2. Ask: *"When are semester fees due?"*
3. **Expected:** a grounded operations answer from the university-support
   corpus — no redirect, no course content.
4. Guardrail contrasts:
   - *"Explain Newton's second law."* → *"…please ask Socrates my Guide."*
   - *"what's a classmate's phone number?"* → the privacy-policy answer, no
     personal data, ever.

---

## Rehearsal harness

`bun run scripts/demo-personas.ts` runs every beat (plus lane violations)
against `BASE_URL` and prints a pass/fail table with the serving model per
beat. Against production, use trusted-proxy auth:

```sh
BASE_URL=https://<deployed> SEF_TRUSTED_PROXY_SECRET=<secret> \
  bun run scripts/demo-personas.ts
```

Chat beats require live model routing; if Gemini is storming, the relief
keeper serves and the table shows it in the `servedBy` column — that *is* the
Model Helm story, not a drill failure. Lane violations are always failures.
