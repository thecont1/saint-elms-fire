***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-4
semesterName: Semester 4
subjectId: astrophysics
subjectName: Astrophysics (minor)
courseId: astrophysics-iv
courseName: Astrophysics IV — Galaxies, Cosmology and Compact Objects
moduleId: astrophysics-iv-module-1
moduleName: The Milky Way and Galaxies
lessonId: astrophysics-iv-m1-l3
lessonName: Active Galactic Nuclei and Quasars
lessonNumber: 3
moduleNumber: 1
semesterNumber: 4
difficulty: advanced
estimatedStudyMinutes: 55
releaseOrder: 3
prerequisites:
  - astrophysics-iv-m1-l2
learningObjectives:
  - Explain the AGN phenomenon: compact, luminous nuclei powered by accretion onto supermassive black holes.
  - Estimate accretion efficiency and the Eddington luminosity, and use both in quantitative arguments.
  - Classify AGN types (Seyfert, quasar, blazar, radio galaxy) and explain the unification scheme.
  - Describe quasars as high-redshift objects and interpret their cosmological evolution.
concepts:
  - Active galactic nucleus
  - Accretion disc
  - Eddington luminosity
  - Quasar
  - Unification scheme
  - Relativistic jet
tags:
  - astrophysics
  - agn
  - black-holes
sourceType: authored-courseware
***

# Active Galactic Nuclei and Quasars

## Overview

Some galaxies violate every scaling relation from the last lesson: their nuclei outshine entire host galaxies, vary in days, launch relativistic jets spanning megaparsecs, and emit from radio to gamma rays. The power source cannot be stars — no stellar population can pack such luminosity into such a volume. The answer, established over decades, is accretion onto supermassive black holes: matter falling into a million-to-billion-solar-mass hole converts 6–40% of its rest mass to radiation, the most efficient sustained engine in the Universe. Quasars — the most luminous AGN, visible from when the Universe was under a billion years old — were the discovery that opened this field, and their cosmic history charts the growth of black holes alongside galaxies.

## Learning Path

1. Use variability arguments to bound the size of an AGN engine and show stars cannot power it.
2. Build the accretion-disc model: efficiency η, Eddington luminosity, and the characteristic scales.
3. Survey the AGN zoo: Seyferts, quasars, radio galaxies, blazars.
4. Learn the unification scheme — one engine viewed through different angles and obscuration.
5. Interpret quasars cosmologically: redshifts, cosmic evolution, and black-hole/galaxy co-growth.
6. Connect to Sgr A*: the Milky Way's own dormant AGN engine.

## Core Explanation

### The engine must be small and efficient

Quasar 3C 273 varies measurably in weeks. Causality bounds the source size: R ≲ c Δt. Explicitly, Δt = 2 weeks ≈ 1.2 × 10⁶ s gives R ≲ 3.6 × 10¹⁴ m ≈ 2400 AU ≈ 0.04 light-years. Yet the luminosity reaches ~10¹²–10¹⁴ L_☉. No stellar process — fusion tops out at ~0.7% mass-to-energy efficiency and requires a large volume — can do this. Gravitational accretion onto a compact object can: a non-rotating black hole's accretion disc radiates up to η ≈ 0.057 of rest mass (up to ~0.42 for maximal spin), orders of magnitude above fusion, in a volume set by the hole's gravity.

### Accretion physics

Gas falling toward the black hole conserves angular momentum, forming a rotating disc. Viscous stresses let matter drift inward, releasing gravitational binding energy as heat and radiation:

L = η Ṁ c²

with η ≈ 0.1 typical. To shine at 10³⁹ W (~10⁴⁶ erg/s, a bright quasar) requires Ṁ ≈ L/(0.1 c²) ≈ 1.8 M_☉/yr — solar masses of gas consumed annually.

Radiation pressure sets a ceiling. The **Eddington luminosity** balances gravity against photon pressure on ionised gas:

L_Edd ≈ 1.3 × 10³¹ (M/M_☉) W ≈ 3.3 × 10⁴ (M/M_☉) L_☉

A 10⁸ M_☉ black hole has L_Edd ≈ 1.3 × 10³⁹ W ≈ 3 × 10¹² L_☉. Sustained quasar luminosities sit near or below this ceiling; observed accretion rates are often quoted as fractions of Eddington. The Eddington argument also gives minimum black-hole masses: a quasar of luminosity L must contain M ≳ L/L_Edd-per-solar-mass, so the brightest quasars demand 10⁹–10¹⁰ M_☉ holes.

The disc radiates thermally (optical/UV "big blue bump"); surrounding gas clouds reprocess it into broad and narrow emission lines; a hot corona inverse-Comptons photons to X-rays. The black hole's sphere of influence, the broad-line region (light-days to light-months), and the dusty torus (light-years) form concentric zones — sizes measurable directly via **reverberation mapping**: emission lines echo continuum flares with time delays that weigh the central mass.

### The AGN zoo and unification

Observational classes differ mainly in viewing angle and obscuration:

| Type | Character |
|------|-----------|
| Seyfert 1 | Bright nucleus, broad + narrow lines |
| Seyfert 2 | Narrow lines only; broad lines hidden |
| Quasar | Luminous AGN outshining its host; type 1/2 by lines |
| Radio galaxy | Powerful jets and lobes at radio wavelengths |
| Blazar | Jet pointed nearly at us: extreme variability, superluminal apparent motion, polarised |

The **unification scheme** holds that one central engine — black hole, disc, broad-line clouds, dusty torus, jets — produces all these types depending on orientation: a torus edge-on hides the broad-line region (Seyfert 2); a jet in our face makes a blazar; accretion rate and host galaxy set the luminosity. Polarised-light observations reveal hidden broad lines in Seyfert 2s, confirming the scheme in detail.

### Quasars as cosmological beacons

Quasars show large redshifts — 3C 273 at z = 0.158, the record holders beyond z = 7, when the Universe was ~700 million years old. Their luminosity made them the first objects found at extreme distances, and they remain backlights for the intergalactic medium: the **Lyman-alpha forest** in quasar spectra maps hydrogen clouds along the line of sight, tracing cosmic structure (Module 2 will reuse this).

The quasar population peaks at z ≈ 2 — the cosmic-noon era of maximum star formation and black-hole growth — and declines sharply toward the present. This "downsizing" tells us most supermassive black holes assembled early; today's are mostly dormant, including the Milky Way's Sgr A* at ~10⁻⁹ Eddington. The tight correlation between black-hole mass and host bulge properties (M–σ relation) suggests co-evution: feedback from AGN jets and winds may regulate star formation, linking the smallest scales (black holes) to the largest (galaxy formation).

## Key Ideas

- AGN are compact, super-luminous nuclei; variability bounds their size to sub-light-year scales, ruling out stellar power.
- Accretion onto supermassive black holes supplies L = ηṀc² with η ≈ 0.1 — far beyond fusion efficiency.
- The Eddington luminosity (∝ M) caps steady accretion and sets minimum masses for observed luminosities.
- Unification: Seyferts, quasars, radio galaxies, and blazars are one engine viewed at different angles and obscuration states.
- Reverberation mapping measures black-hole masses from light-echo delays.
- Quasars peak at z ≈ 2 and act as backlights for the intergalactic medium; the M–σ relation ties black holes to their hosts.

## Worked Examples

**Example 1 — Size from variability.**
A quasar flares in Δt = 10 days = 8.6 × 10⁵ s: R ≲ cΔt ≈ 2.6 × 10¹⁴ m ≈ 1700 AU ≈ 0.03 ly. Compare: the Solar System out to Neptune is ~30 AU — the entire engine is tens of Solar Systems across while outshining 10¹² stars.

**Example 2 — Fuel budget.**
L = 10³⁹ W at η = 0.1: Ṁ = L/(ηc²) = 10³⁹/(0.1 × 9 × 10¹⁶) ≈ 1.1 × 10²³ kg/s ≈ 1.8 M_☉/yr. Over 10⁷ years of activity: ~2 × 10⁷ M_☉ consumed — growing the hole substantially.

**Example 3 — Eddington check.**
A quasar at L = 2 × 10⁴⁰ W radiating at Eddington requires M ≥ L/(1.3 × 10³¹ W/M_☉) ≈ 1.5 × 10⁹ M_☉. Observed reverberation masses of such objects agree within factors of a few — a non-trivial confirmation.

**Example 4 — Blazar beaming.**
A jet component appears to move at 5c across the sky. This superluminal motion is geometric: material at speed v close to c at a small angle θ to the line of sight has apparent transverse speed v_app = v sin θ/(1 − v cos θ/c), exceeding c for θ ≲ 30° and v ≳ 0.95c — special relativity intact, orientation diagnosed.

## Common Misconceptions

1. **"Quasars are nearby bright stars."** The name (quasi-stellar) reflects their point-like appearance; their redshifts place them at cosmological distances — billions of light-years away.
2. **"Black holes suck in everything nearby."** Accretion requires gas to lose angular momentum; at a few parsecs from Sgr A*, stars orbit safely for billions of years.
3. **"The jet's superluminal motion breaks relativity."** It is a projection effect; no material exceeds c.
4. **"All AGN are quasars."** Quasars are the high-luminosity tip; Seyferts and low-luminosity AGN are the common body, and dormant nuclei like Sgr A* are the most common state today.
5. **"Unification explains every difference."** Orientation dominates, but accretion rate, black-hole mass, and host properties also matter; the scheme is a framework, not an identity.

## Connections

- **Milky Way lesson:** Sgr A* is the same engine idling; AGN physics is its floor-revved limit.
- **Astrophysics III:** White-dwarf accretion (novae, Type Ia) is the stellar-mass analogue; the Eddington argument reappears in any radiating accretor.
- **Module 3:** Black-hole physics — horizons, gravitational waves, the EHT — gets its full treatment after this phenomenological introduction.
- **Module 2:** Quasar spectra and the Lyman-alpha forest become cosmological probes; AGN feedback shapes galaxy formation models.

## Quick Check

1. How does variability constrain an AGN's size, and what does that rule out?
2. State the Eddington luminosity and its physical origin.
3. What distinguishes Seyfert 1 from Seyfert 2 galaxies in the unification scheme?
4. Why do quasar numbers peak at z ≈ 2 and decline today?
5. How does reverberation mapping weigh the central black hole?

**Answers:**
1. R ≲ cΔt: a source varying on days must be light-days across. Stellar clusters cannot fit 10¹² L_☉ of fusion into that volume; only black-hole accretion is compact and efficient enough.
2. L_Edd ≈ 1.3 × 10³¹ (M/M_☉) W, set by radiation pressure on electrons balancing gravity on ionised gas — the ceiling for steady spherical accretion.
3. Orientation: a dusty torus edge-on hides the broad-line region in Seyfert 2s; face-on views (Seyfert 1s) show broad and narrow lines. Polarised hidden broad lines confirm this.
4. Gas supply and merger rate peaked in that era; feedback and gas exhaustion quenched accretion afterward, leaving today's mostly dormant nuclei.
5. Emission lines echo continuum flares after a light-travel delay τ; the broad-line radius is R = cτ, and line widths give velocities — combining yields M ≈ v²R/G.

## Takeaway

The Universe's most extravagant light show runs on the simplest recipe: gravity, angular momentum, and a black hole. AGN turned galaxies from static taxonomic entries into dynamic engines whose central masses correlate with their hosts and whose winds and jets help decide how galaxies grow. With the Milky Way, the Hubble sequence, and the AGN engine in hand, Module 1 completes — and Module 2 zooms out to the ensemble: the expanding, evolving Universe itself.
