***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-4
semesterName: Semester 4
subjectId: astrophysics
subjectName: Astrophysics (minor)
courseId: astrophysics-iv
courseName: Astrophysics IV — Galaxies, Cosmology and Compact Objects
moduleId: astrophysics-iv-module-2
moduleName: Cosmology
lessonId: astrophysics-iv-m2-l5
lessonName: The Big Bang, Primordial Nucleosynthesis and the CMB
lessonNumber: 5
moduleNumber: 2
semesterNumber: 4
difficulty: advanced
estimatedStudyMinutes: 55
releaseOrder: 5
prerequisites:
  - astrophysics-iv-m2-l4
learningObjectives:
  - Describe the thermal history of the Universe from the first seconds through recombination.
  - Explain Big Bang nucleosynthesis and why it predicts the observed primordial helium, deuterium, and lithium abundances.
  - Interpret the cosmic microwave background as relic radiation with a blackbody spectrum and tiny anisotropies.
  - Read the CMB power spectrum as a measurement of the Universe's geometry, contents, and age.
concepts:
  - Big Bang model
  - Big Bang nucleosynthesis
  - Recombination
  - Cosmic microwave background
  - Blackbody spectrum
  - CMB anisotropies
tags:
  - astrophysics
  - cosmology
  - cmb
sourceType: authored-courseware
***

# The Big Bang, Primordial Nucleosynthesis and the CMB

## Overview

Expansion backward-extrapolated demands a hot, dense beginning — and the hot beginning leaves two receipts we can still read. The first is chemical: in the first few minutes, the Universe was a fusion reactor that synthesised the light elements in ratios that only that reactor could produce. The second is thermal: ~380 000 years later the plasma cooled enough for atoms to form, and the light that filled space decoupled and has streamed freely ever since, redshifted to microwaves — the cosmic microwave background. Together, nucleosynthesis and the CMB turned the Big Bang from extrapolation into the best-tested model in all of astrophysics. This lesson walks the thermal history, derives the two predictions, and shows how the CMB's tiny ripples encode the Universe's contents, geometry, and age.

## Learning Path

1. Trace the thermal timeline: radiation era, nucleosynthesis (minutes), recombination (380 000 yr), and beyond.
2. Understand why fusion in the early Universe stopped at lithium: density and the expansion race.
3. Check the predicted primordial abundances against observation.
4. Derive the CMB: recombination, photon decoupling, and the 2.725 K blackbody.
5. Examine the anisotropies (~10⁻⁵) and the acoustic peaks of the angular power spectrum.
6. Read off the cosmological parameters the CMB fixes.

## Core Explanation

### The thermal timeline

As the scale factor grows, the Universe cools: photon temperature scales as T ∝ 1/a. Key epochs:

| Time | Temperature | Event |
|------|-------------|-------|
| 10⁻⁶ s | ~10¹³ K | Quarks bind into protons and neutrons |
| 1 s | ~10¹⁰ K | Neutrinos decouple; e⁺e⁻ annihilation heats photons |
| 1 s – 3 min | 10¹⁰ → 10⁹ K | Neutron/proton freeze-out, then nucleosynthesis |
| ~3 min | ~10⁹ K | Deuterium survives; helium assembles |
| ~380 000 yr | ~3000 K | Recombination; photons decouple → CMB |
| 100–200 Myr | — | First stars; reionisation begins |

Two facts govern everything: particle reactions stay in equilibrium while faster than the expansion rate, and every species "freezes out" when the Universe outruns it. Cosmology is a sequence of freeze-outs.

### Big Bang nucleosynthesis (BBN)

At t ≈ 1 s, weak reactions interconverting neutrons and protons freeze out with n/p ≈ 1/6 (set by the neutron–proton mass difference, Δm c² = 1.29 MeV, through Boltzmann statistics). Free neutrons then decay (half-life ~880 s), so by t ≈ 3 min, n/p ≈ 1/7.

But fusion cannot start at freeze-out: deuterium, the necessary first step, is fragile and photons outnumber baryons ~10⁹ to 1, photodissociating it until T falls to ~0.1 MeV (~10⁹ K, t ≈ 3 min). Then nuclear assembly races the expansion:

p + n → ²H; ²H chains quickly to ⁴He

Nearly all surviving neutrons end in helium-4: mass fraction

Y_p ≈ 2(n/p)/(1 + n/p) ≈ 2(1/7)/(8/7) ≈ 0.25

**Prediction: ~25% of ordinary matter by mass is primordial helium** — before any star has ever burned. Trace products: deuterium ~2.5 × 10⁻⁵ (by number relative to H), ³He comparable, ⁷Li ~10⁻¹⁰. Fusion stops at lithium: no stable mass 5 or 8 exists (the same bottleneck stellar triple-alpha overcomes with time and density the early Universe lacked), and the density falls too fast for three-body reactions.

Observations confirm: helium-4 plateaus at ~24–25% in the most metal-poor gas; deuterium measured in high-redshift quasar absorption systems matches the BBN value — and, because deuterium is destroyed in stars, its primordial value constrains the baryon density precisely. The one blemish: observed ⁷Li in old stars is ~3× below BBN prediction (the "lithium problem", still open).

### Recombination and the CMB

At ~3000 K, electrons bind to nuclei (mostly hydrogen; "recombination" is a misnomer — the first combination). Free-electron density collapses, and photons stop Thomson-scattering: the Universe becomes transparent. The radiation field, last scattered at that surface, has streamed freely since, cooling with expansion to

T₀ = 2.7255 K — a blackbody spectrum measured by COBE/FIRAS to parts in 10⁵, the most perfect blackbody ever observed in nature.

This is the CMB: an all-sky thermal image of the 380 000-year-old Universe. Its existence, temperature, and spectrum were predicted before detection (Gamow, Alpher, Herman; discovered by accident by Penzias and Wilson, 1965, Nobel 1978).

### Anisotropies: the acoustic peaks

The CMB is uniform to one part in 10⁵ — but not exactly. Tiny temperature fluctuations ΔT/T ~ 10⁻⁵ map density ripples in the primordial plasma: gravity pulls matter into overdensities while photon pressure pushes back, producing **acoustic oscillations** — sound waves in the plasma, frozen at decoupling.

Decomposed into angular scale (the power spectrum C_ℓ versus multipole ℓ), the pattern shows:

- **First peak at ℓ ≈ 220 (~1°):** the fundamental oscillation mode; its location measures spatial geometry. Observed at exactly the flat-Universe position — total density Ω_total = 1.00 ± small error.
- **Peak heights:** the relative baryon loading (baryons deepen compressions) measures Ω_baryon; the pattern plus damping tail measures the matter density Ω_m.
- **Polarisation (E-modes):** Thomson scattering of an anisotropic radiation field polarises the CMB, independently confirming the acoustic picture and measuring the reionisation epoch.

The CMB thus delivers a complete inventory: ~5% baryons, ~27% dark matter, ~68% dark energy (next lesson), a flat geometry, and an age of 13.8 billion years — all from one all-sky photograph of babyhood.

## Key Ideas

- The Universe cools as T ∝ 1/a; its history is a sequence of freeze-outs as expansion outruns reactions.
- BBN predicts ~25% primordial helium by mass, deuterium ~2.5 × 10⁻⁵, and trace lithium — set by the n/p freeze-out and the deuterium bottleneck.
- Observed light-element abundances match predictions and independently fix the baryon density.
- Recombination at ~3000 K (~380 000 yr) decoupled photons, now observed as the 2.725 K CMB — a near-perfect blackbody.
- CMB anisotropies (~10⁻⁵) are frozen acoustic oscillations; the first peak at ~1° establishes spatial flatness.
- The CMB power spectrum measures the Universe's contents, geometry, and age in one dataset.

## Worked Examples

**Example 1 — Helium mass fraction.**
With n/p = 1/7 at nucleosynthesis, every neutron pairs with a proton into ⁴He. The formula Y_p = 2(n/p)/(1 + n/p) gives 2 × (1/7) ÷ (8/7) ≈ 25%. Observed plateau 24–25% — agreement to within the physics' uncertainties.

**Example 2 — Photon-to-baryon ratio.**
The CMB photon density today is ~411 cm⁻³ versus baryons ~2.5 × 10⁻⁷ cm⁻³: ratio ~1.6 × 10⁹. This enormous ratio explains the deuterium bottleneck (high-energy photons in the blackbody tail destroy deuterium until late) and why BBN abundance ratios are such sharp baryometers.

**Example 3 — CMB redshift.**
Last scattering at T ≈ 3000 K, observed at 2.725 K: 1 + z = 3000/2.725 ≈ 1100. The CMB comes from z ≈ 1100 — and the same stretch factor dilutes its energy density by (1+z)⁴ relative to then.

**Example 4 — Reading the first peak.**
The sound horizon at decoupling subtends ~1° in a flat Universe. If space were positively curved, the same ruler would look larger (peak at lower ℓ); negative curvature, smaller (higher ℓ). Observed ℓ ≈ 220 → flat, Ω_total ≈ 1 — geometry measured by trigonometry on a cosmic ruler.

## Common Misconceptions

1. **"The Big Bang was an explosion at a point in space."** It was the hot dense state *of all space*; every point was hot and dense, and expansion is of space everywhere.
2. **"We see the CMB from the centre of the explosion."** The last-scattering surface surrounds us in all directions because every direction looks back to the same epoch — there is no centre.
3. **"Helium was made in stars."** Stars add helium, but the ~25% baseline is primordial — too abundant for stellar production in the available time, one of the original Big Bang arguments.
4. **"The CMB is smooth because the early Universe was featureless."** It is smooth to 10⁻⁵; those tiny ripples are precisely the seeds of every galaxy. Without them, structure could not form.
5. **"Recombination means atoms re-formed."** It was the first formation of neutral atoms; the name is historical.

## Connections

- **Thermal physics:** Blackbody radiation, Boltzmann factors, and equilibrium kinetics run the entire early-Universe calculation.
- **Nuclear physics:** The mass-5/8 gaps, binding energies, and weak rates that set BBN are laboratory nuclear physics applied cosmologically.
- **Previous lesson:** Expansion supplies the cooling; BBN and CMB are its backward extrapolation made visible.
- **Next lesson:** The CMB inventory (5/27/68%) is the budget that dark matter and dark energy lessons spend.
- **Astrophysics III cross-link:** Stellar helium enriches a primordial floor; disentangling the two uses metallicity extrapolation exactly as clusters were used.

## Quick Check

1. Why did fusion in the early Universe stop at mass 7, while stars fuse far heavier elements?
2. Derive the ~25% helium mass fraction from n/p ≈ 1/7.
3. What is the CMB, and why is its blackbody spectrum decisive evidence for a hot dense past?
4. What does the first acoustic peak's location at ~1° measure?
5. Why is deuterium such a sensitive measure of the baryon density?

**Answers:**
1. No stable mass 5 or 8 nuclei exist; three-body reactions (like triple-alpha) need densities and times the rapidly thinning early Universe could not provide, while stars sustain them for millions of years.
2. Y_p = 2(n/p)/(1 + n/p): each neutron pairs with a proton into ⁴He; with n/p = 1/7, Y_p ≈ 0.25.
3. Relic photons last scattered when the plasma became neutral at ~3000 K, now redshifted to 2.725 K; only a once-thermalised dense opaque phase produces so perfect a blackbody.
4. Spatial geometry: the sound horizon at decoupling acts as a standard ruler; its ~1° apparent size fixes flatness (Ω_total ≈ 1).
5. Deuterium is only made in BBN and destroyed in stars; its fragile survival depends sharply on how quickly reactions proceed, which the baryon density controls.

## Takeaway

The Universe keeps its receipts. Three minutes of primordial fusion wrote the light-element abundances; 380 000 years of cooling released a flash that still fills the sky as a 2.725 K blackbody with ripples of one part in 100 000. From those two records we read the baryon budget, the geometry, and the age of everything — and the reading is accurate enough that the remaining unknowns (dark matter, dark energy) stand out not as gaps but as line items. Next lesson audits them.
