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
lessonId: astrophysics-iv-m1-l2
lessonName: The Hubble Sequence and Galaxy Scaling Relations
lessonNumber: 2
moduleNumber: 1
semesterNumber: 4
difficulty: advanced
estimatedStudyMinutes: 50
releaseOrder: 2
prerequisites:
  - astrophysics-iv-m1-l1
learningObjectives:
  - Classify galaxies using the Hubble tuning-fork scheme and state the physical properties correlated with type.
  - Explain the morphology–density relation and what it implies about environment-driven transformation.
  - Derive distances and luminosities for galaxies using standard methods, and express luminosities in solar units.
  - Use the Tully–Fisher and Fundamental Plane relations as distance indicators and probes of galaxy formation.
concepts:
  - Hubble sequence
  - Galaxy morphology
  - Morphology–density relation
  - Tully–Fisher relation
  - Fundamental Plane
  - Luminosity function
tags:
  - astrophysics
  - galaxies
  - scaling-relations
sourceType: authored-courseware
***

# The Hubble Sequence and Galaxy Scaling Relations

## Overview

Beyond the Local Group, galaxies number in the hundreds of billions. Making a science of that census requires a classification scheme and a set of quantitative laws. Edwin Hubble's 1926 tuning fork — ellipticals through lenticulars to spirals and irregulars — remains the backbone of galaxy taxonomy, and remarkably, morphology correlates with nearly everything: colour, star formation rate, gas content, stellar ages, and environment. This lesson tours the sequence, then turns to the scaling relations that give galaxies their physics: the Tully–Fisher relation for spirals and the Fundamental Plane for ellipticals — tight correlations between kinematics, size, and luminosity that double as distance indicators and encode how galaxies formed.

## Learning Path

1. Learn the Hubble tuning fork: E0–E7 ellipticals, S0 lenticulars, Sa–Sc (and SBa–SBc) barred spirals, and irregulars.
2. Correlate morphology with physical properties: colour, gas fraction, star formation, stellar populations.
3. Understand the morphology–density relation: ellipticals dominate cluster cores, spirals the field.
4. Measure galaxies: angular size and surface brightness, distance indicators, luminosities in solar units.
5. Study the Tully–Fisher relation (spirals) and the Fundamental Plane (ellipticals), including their use as distance indicators.
6. Interpret the Schechter luminosity function as the population statistics of galaxies.

## Core Explanation

### The tuning fork

Hubble's scheme arranges galaxies by appearance:

- **Ellipticals (E):** smooth, featureless light distributions, classified E0 (round) through E7 (highly elongated) by apparent ellipticity n = 10(a−b)/a. Physically: old Population II stars, little gas and dust, negligible current star formation, red colours, pressure-supported stellar orbits.
- **Lenticulars (S0):** disc plus bulge but no spiral structure — transitional in appearance, with old stars and little gas.
- **Spirals (S):** disc, bulge, and spiral arms; subclassed Sa → Sb → Sc by bulge-to-disc ratio and arm tightness (Sa: large bulge, tight arms; Sc: small bulge, open arms). Physically: gas-rich, ongoing star formation, blue arms from young O/B stars, rotation-supported discs.
- **Barred spirals (SB):** the same sequence with a central bar; the majority of spirals, including the Milky Way, are barred.
- **Irregulars (Irr):** no symmetric structure; often gas-rich, star-forming, and low-mass (the Magellanic Clouds are the prototypes).

The fork is a classification, **not an evolutionary sequence** — galaxies do not "evolve along the fork". Yet it correlates with the underlying physics: gas fraction rises and stellar age falls from E to Irr; star formation rate follows gas content.

### The morphology–density relation

In dense environments (cluster cores) ellipticals and S0s dominate; in the field, spirals dominate. Environmental mechanisms explain the trend: **ram-pressure stripping** removes gas as galaxies fall through cluster intracluster medium; **galaxy harassment** and **mergers** disrupt discs; **strangulation** cuts off gas supply. A galaxy's morphology is thus partly a record of its environment — structure is history.

### Measuring galaxies

A galaxy at distance d subtends angle θ, giving physical size D = d θ. Its surface brightness (mag/arcsec²) is distance-independent in Euclidean geometry — a crucial fact for comparing galaxies across distances. Total apparent magnitude m and distance give luminosity:

M = m − 5 log₁₀(d/10 pc) − A(extinction), L/L_☉ = 10^0.4(M_☉ − M)

Typical scales: the Milky Way has L ≈ 2 × 10¹⁰ L_☉ (B-band), M_B ≈ −20.5; dwarf spheroidals reach M ≈ −8 (a million times fainter); brightest cluster giants reach M ≈ −23. Galaxy luminosities span over six orders of magnitude — which makes the statistical description below essential.

### Scaling relations

**Tully–Fisher relation (spirals):** luminosity correlates tightly with maximum rotation velocity:

L ∝ v_max^4 (roughly; 21-cm line width measures 2v_max sin i)

Physics: v² ∝ M/R (dynamics), L ∝ M × (light per mass); the tightness comes from regularities in stellar populations and halo structure. Use: measure a spiral's line width, infer L, compare with apparent magnitude → distance, good to ~15–20%, and a key rung of the extragalactic distance ladder.

**Fundamental Plane (ellipticals):** a tight relation among effective radius R_e, surface brightness I_e, and central velocity dispersion σ:

R_e ∝ σ^1.2 I_e^−0.8 (empirical; the "virial" expectation is R ∝ σ²/I)

Velocity dispersion (from absorption-line broadening) plays the role rotation plays in spirals — pressure-supported versus rotation-supported versions of the same virial logic. The small tilt of the plane from the virial prediction encodes systematic variations in stellar populations or dark-matter fractions. Use: distances to elliptical clusters, and a window into formation physics.

### The luminosity function

Galaxy counts per luminosity interval are summarised by the Schechter function:

Φ(L) dL = φ* (L/L*)^α e^(−L/L*) d(L/L*)

with L* the characteristic "knee" luminosity (~L_Milky Way), φ* the normalisation, and α ≈ −1.3 the faint-end slope. The exponential cutoff means super-luminous galaxies are exponentially rare; the power-law faint end means most galaxies are dwarfs, though they carry modest total light. Integrating Φ(L)·L gives the cosmic luminosity density — the raw material for cosmic star-formation and reionization accounting.

## Key Ideas

- The Hubble sequence (E → S0 → S/SB → Irr) is a taxonomy, not an evolutionary track, but correlates tightly with gas content, star formation, colour, and stellar age.
- Morphology depends on environment: dense cluster cores favour ellipticals/S0s; the field favours spirals — via stripping, harassment, and strangulation.
- Surface brightness is distance-independent; luminosity requires distance and extinction correction.
- Tully–Fisher (L ∝ v⁴, spirals) and the Fundamental Plane (R_e–σ–I_e, ellipticals) are tight virial-flavoured relations usable as distance indicators.
- The Schechter function describes the galaxy luminosity distribution: an L* knee with exponential cutoff and a faint-end dwarf slope.
- Galaxy scaling relations are observational shortcuts and formation fossils at once.

## Worked Examples

**Example 1 — Luminosity of a spiral.**
A galaxy with m_B = 12.2 at d = 20 Mpc, negligible extinction:

M_B = 12.2 − 5 log₁₀(20 × 10⁶/10) = 12.2 − 5 × 6.30 = −19.3
L/L_☉ = 10^0.4(4.34 + 19.3) ≈ 10^9.46 ≈ 2.9 × 10⁹

A modest spiral, ~15% of the Milky Way's luminosity.

**Example 2 — Tully–Fisher distance.**
A spiral's 21-cm profile (inclination-corrected) gives v_max = 200 km/s. Calibrated TF gives M_B = −19.6 at that velocity. Observed m_B = 14.4:

(m − M) = 34.0 → d = 10^((34+5)/5) = 10^7.8 pc = 63 Mpc

**Example 3 — Fundamental Plane distance.**
A cluster elliptical has measured σ = 250 km/s, R_e = 4 kpc, I_e fixed by photometry. The FP predicts its absolute luminosity; comparison with m gives (m − M) = 35.2 → d ≈ 110 Mpc, consistent with independent rungs — the kind of cross-check that anchors the ladder.

**Example 4 — Reading the Schechter function.**
With α = −1.3, the number of galaxies per log luminosity bin at L = 0.1 L* scales as (0.1)^α · e^−0.1 ≈ 20 × 0.9 ≈ 18 times the count at L* — dwarfs vastly outnumber L* galaxies, but each contributes 100× less light, so the luminosity density is L*-dominated.

## Common Misconceptions

1. **"Galaxies evolve along the tuning fork."** Hubble's labels ("early"/"late type") are vestigial; ellipticals are not "young" spirals — many are merger products of older disc systems.
2. **"Ellipticals are just squashed spirals."** They are pressure-supported systems with different orbital structure, star-formation histories, and often merger-built origins.
3. **"Bigger apparent size means closer."** Angular size needs distance to convert; some nearby dwarfs look larger than distant giants while carrying a millionth the light.
4. **"Tully–Fisher is a definition."** It is an empirical relation rooted in virial dynamics plus population regularities — and it has scatter, zero-point calibrations, and band dependence.
5. **"Most light comes from the most numerous galaxies."** Dwarfs dominate counts; L* galaxies dominate luminosity density. Numbers and light weight differently.

## Connections

- **Milky Way lesson:** Our barred-spiral classification and stellar populations are the local anchor for the whole scheme.
- **Astrophysics III:** Stellar populations I/II and isochrone ages generalise from clusters to whole galaxies; Type Ia supernovae (previous course) provide the sharpest extragalactic distances.
- **Next lesson:** When the scaling relations break — when a nucleus outshines the whole galaxy — we meet AGN.
- **Module 2:** The same galaxies, counted and redshifted, become the data of cosmology.

## Quick Check

1. Order the spiral subclasses Sa, Sb, Sc by bulge size and gas richness.
2. What physical mechanisms produce the morphology–density relation?
3. Why is surface brightness distance-independent, and why does that matter?
4. State the Tully–Fisher relation and explain why it works as a distance indicator.
5. What does the Schechter function's faint-end slope tell us about the galaxy population?

**Answers:**
1. Sa: largest bulges, tightest arms, least gas; Sc: smallest bulges, open arms, most gas and star formation. Gas richness increases Sa → Sc.
2. Ram-pressure stripping of gas by the intracluster medium, tidal harassment, mergers, and strangulation — all environment-driven transformations that remove gas or disrupt discs.
3. Both flux and angular area fall as d², so flux per solid angle is constant; it lets us compare stellar surface densities of galaxies across cosmic distances without knowing distances precisely.
4. L ∝ v_max⁴: the line width measures mass-dynamics, the calibration maps it to luminosity; comparing with apparent brightness yields distance.
5. α ≈ −1.3 implies dwarf galaxies vastly outnumber bright ones, though total light is dominated by L*-scale systems.

## Takeaway

Hubble gave galaxies a vocabulary; scaling relations gave them equations. Between the two, a picture is either a number — distance, luminosity, mass — or a clue to formation history. Galaxies are not just classified; they are calibrated. The next lesson takes the one part of a galaxy no scaling relation predicts: the engine at the centre.
