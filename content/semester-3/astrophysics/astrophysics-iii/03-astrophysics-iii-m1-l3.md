***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-3
semesterName: Semester 3
subjectId: astrophysics
subjectName: Astrophysics (minor)
courseId: astrophysics-iii
courseName: Astrophysics III — Stars and Stellar Evolution
moduleId: astrophysics-iii-module-1
moduleName: Stellar Properties and Spectra
lessonId: astrophysics-iii-m1-l3
lessonName: The Hertzsprung–Russell Diagram
lessonNumber: 3
moduleNumber: 1
semesterNumber: 3
difficulty: advanced
estimatedStudyMinutes: 50
releaseOrder: 3
prerequisites:
  - astrophysics-iii-m1-l2
learningObjectives:
  - Construct and read the Hertzsprung–Russell diagram, naming its axes and their conventional orientations.
  - Locate the main sequence, giant branch, supergiants, and white dwarfs on the diagram and state what physically distinguishes each region.
  - Use the Stefan–Boltzmann law to relate luminosity, radius, and temperature on the diagram, and derive radii from positions.
  - Explain why the main sequence is a mass sequence, and why most stars are found on it.
concepts:
  - Hertzsprung–Russell diagram
  - Main sequence
  - Giant branch
  - White dwarfs
  - Stefan–Boltzmann law
  - Mass–luminosity relation
tags:
  - astrophysics
  - hr-diagram
  - stellar-classification
sourceType: authored-courseware
***

# The Hertzsprung–Russell Diagram

## Overview

Every observable of a star so far — brightness, colour, spectral type, temperature — is one-dimensional. The Hertzsprung–Russell diagram takes two of these quantities, luminosity and surface temperature, and plots every star on a single plane. The stunning empirical fact is that stars do not scatter randomly across that plane: they crowd along a narrow diagonal band (the main sequence) and collect in a few other well-defined regions (giants, supergiants, white dwarfs). That pattern is not bookkeeping; it is a map of stellar structure and evolution. Where a star sits on the HR diagram tells you what it is made of internally, how it generates energy, and roughly how long it has left to live.

This lesson builds the diagram, uses the Stefan–Boltzmann law to show that its diagonal lines are lines of constant radius, and explains why the main sequence is fundamentally a sequence of mass. By the end, the spectral types from the last lesson and the magnitudes from the one before it will all live in one picture.

## Learning Path

1. Define the axes: luminosity (or absolute magnitude) versus temperature (or spectral type or colour), with their conventional orientations.
2. Place the Sun and see that it falls on the main-sequence diagonal.
3. Use the Stefan–Boltzmann law L = 4πR²σT⁴ to overlay constant-radius lines and read stellar radii directly off the diagram.
4. Identify the giant branch, supergiant region, and white-dwarf corner, and connect each to surface gravity and luminosity classes I–III and V.
5. Understand the main sequence as a mass sequence via the mass–luminosity relation L ∝ M^3.5, and connect residence time to nuclear fuel.
6. Practise converting positions on the diagram into physical quantities.

## Core Explanation

### Building the axes

Take the vertical axis to be luminosity L in solar units (or equivalently absolute bolometric magnitude M_bol, which decreases upward). Take the horizontal axis to be surface temperature T_eff — conventionally **decreasing to the right**, so that hotter stars sit on the left, matching the O-to-M order of spectral types. Equivalent horizontal axes used in practice: spectral type (O left, M right) or colour index B−V (bluest left, reddest right).

| Reference point | Value |
|-----------------|-------|
| Sun | L = 1 L_☉, T_eff = 5772 K, spectral type G2 V, M_bol = +4.74 |
| Bright O star | L ~ 10⁵–10⁶ L_☉, T_eff ~ 30 000–50 000 K |
| Red giant | L ~ 10²–10³ L_☉, T_eff ~ 3000–5000 K |
| White dwarf | L ~ 10⁻³–10⁻⁴ L_☉, T_eff ~ 5000–100 000 K |

When you plot thousands of stars with known distances (hence known luminosities), the structure emerges:

- **The main sequence**: a tight diagonal from hot-and-luminous (upper left) to cool-and-dim (lower right). Roughly 90% of field stars sit here.
- **The giant branch**: a nearly vertical column above the main sequence at temperatures 3000–5000 K — cool but luminous.
- **Supergiants**: the top of the diagram, spanning all temperatures, luminosities 10⁴–10⁶ L_☉.
- **White dwarfs**: lower-left corner — hot but extremely faint.

### Constant-radius diagonals: the Stefan–Boltzmann law

A star's luminosity is the power radiated from its photosphere:

L = 4πR² σ T_eff⁴

In solar units this becomes the clean form:

L / L_☉ = (R / R_☉)² × (T_eff / T_☉)⁴

On the HR diagram, fixing R gives a curve L ∝ T⁴ — a diagonal band. So the main sequence is *not* a radius sequence; main-sequence radii vary only modestly (roughly 0.1 R_☉ to 10 R_☉). The diagram's structure comes from combining a modest radius range with the steep fourth power of temperature.

The law immediately explains the odd corners:

- **Giants** are cool (low T⁴) yet luminous, so R must be huge — tens to hundreds of solar radii. Betelgeuse (M2 Iab, T ≈ 3600 K, L ≈ 10⁵ L_☉) has R ≈ 900 R_☉; placed at the Sun's position its surface would engulf the orbit of Jupiter.
- **White dwarfs** are hot yet faint, so R must be tiny — about Earth-sized (R ≈ 0.01 R_☉). Their spectra showed high temperatures and hence luminosity class confusion until their minuscule radii were understood.

This is the power of the diagram: one algebraic relation turns position into radius.

### The main sequence is a mass sequence

What keeps a main-sequence star on that diagonal? Core hydrogen fusion. Stars in this phase balance gravity with the pressure generated by burning hydrogen into helium, and a remarkable regularity governs them — the **mass–luminosity relation**:

L ∝ M^3.5 (approximately, for solar-type and higher masses)

Double the mass and luminosity rises by roughly 2^3.5 ≈ 11. Massive stars are hotter, larger, bluer, and more luminous — pushing them up the main sequence. Low-mass stars are cooler, smaller, redder, and dimmer — down the sequence. Along the main sequence, mass is the single parameter that fixes everything else; position on the diagram is effectively a mass meter.

The exponent has a dramatic consequence for lifetimes. Nuclear fuel is proportional to mass M, but the consumption rate is the luminosity L ∝ M^3.5, so

t_MS ∝ M / L ∝ M^−2.5

A 10 M_☉ star has ten times the fuel of the Sun but burns it at ~10^3.5 ≈ 3000 times the rate — lasting only ~10⁷ years, a thousandth of the Sun's ~10¹⁰-year main-sequence life. The most massive stars live cosmically brief lives; the least massive red dwarfs burn for trillions of years, far longer than the current age of the Universe.

### Why the diagram is populated unevenly

The HR diagram is a map of residence times. Stars spend ~90% of their active lives on the main sequence, so a random sample is ~90% main sequence. Post-main-sequence phases (giant, supergiant) are short, so those regions are sparsely populated. White dwarfs are numerous because they are the final state of most stars, but they are faint and nearby samples dominate what we see. **Number density on the diagram tracks evolutionary duration** — the diagram is a clock as well as a map.

## Key Ideas

- The HR diagram plots luminosity (or M_bol) against temperature (or spectral type, or colour), hotter on the left.
- The **main sequence** is the hydrogen-core-burning phase and contains ~90% of stars; it is fundamentally a **mass sequence**.
- Giants and supergiants are cool but luminous → enormous radii (Stefan–Boltzmann reasoning); white dwarfs are hot but faint → tiny radii.
- L = 4πR²σT⁴ means constant-radius lines run diagonally across the diagram, so position yields radius.
- The mass–luminosity relation L ∝ M^3.5 implies main-sequence lifetime t ∝ M^−2.5: massive stars die young.
- Stellar density on the diagram reflects how long each phase lasts.

## Worked Examples

**Example 1 — Radius of Sirius A.**
Sirius A: T_eff ≈ 9900 K, L ≈ 25 L_☉. Then

R/R_☉ = √(L/L_☉) × (T_eff/T_☉)^−2 = √25 × (9900/5772)^−2 = 5 × (1.715)^−2 ≈ 5/2.94 ≈ 1.7

Sirius A is about 1.7 solar radii — consistent with its A1 V classification.

**Example 2 — Radius of Betelgeuse.**
Take T_eff ≈ 3600 K and L ≈ 10⁵ L_☉:

R/R_☉ = √(10⁵) × (3600/5772)^−2 = 316 × (0.624)^−2 ≈ 316 × 2.57 ≈ 810

Roughly 800–900 solar radii: a supergiant whose surface, at the Sun's position, would lie beyond Jupiter's orbit.

**Example 3 — White dwarf check.**
A white dwarf with T_eff = 12 000 K and R = 0.01 R_☉:

L/L_☉ = (0.01)² × (12000/5772)⁴ = 10⁻⁴ × (2.079)⁴ ≈ 10⁻⁴ × 18.7 ≈ 1.9 × 10⁻³

Hotter than the Sun yet ~500 times fainter — precisely the lower-left corner of the diagram.

**Example 4 — Lifetime of a B star.**
A 15 M_☉ main-sequence star: t ∝ M^−2.5 gives

t ≈ 10¹⁰ yr × 15^−2.5 ≈ 10¹⁰ / 700 ≈ 1.4 × 10⁷ yr

About fourteen million years. Such a star forms, shines, and explodes within a time span that is a rounding error in the Sun's life — which is why massive stars are found only near their birthplaces.

## Common Misconceptions

1. **"The main sequence is an evolutionary track — stars climb up it as they age."** No: a star's main-sequence position is set by its mass at birth and changes hardly at all while it burns hydrogen. Evolution moves stars *off* the main sequence, not along it.
2. **"Giants are hot because they're luminous."** Giants are luminous despite being cool — their enormous surface area compensates a low T⁴.
3. **"White dwarfs are cool."** Many are hotter than the Sun; they are faint because they are small. Their temperatures fall slowly over billions of years as they cool.
4. **"Upper right of the diagram is crowded."** The upper right (cool and luminous) is where giants live, but it is sparsely populated because the giant phase is short.
5. **"Luminosity class and HR position are independent."** Luminosity class V *is* main sequence; III is the giant branch; I is the supergiant region. The MK system and the diagram are the same physics seen from two directions.

## Connections

- **Previous two lessons:** Spectral type supplies the horizontal axis; absolute magnitude (distance modulus) supplies the vertical axis. The HR diagram is where Modules 1's tools converge.
- **Thermal Physics:** The Stefan–Boltzmann law and blackbody radiation are the quantitative backbone of this lesson.
- **Module 2 (Stellar Structure):** The physics that keeps stars on the main sequence — hydrostatic equilibrium and core fusion — is the next module's subject.
- **Module 3 (Evolution):** Tracks *across* the diagram (main sequence → giant branch → remnants) are the content of stellar evolution, and star clusters turn the diagram into a clock via isochrones.
- **Astrophysics IV:** The same diagram, applied to entire stellar populations, becomes a tool for reading the histories of galaxies.

## Quick Check

1. State the axes of the HR diagram and the conventional orientation of the temperature axis.
2. Where on the diagram are giants, and what does the Stefan–Boltzmann law imply about their radii?
3. Why is the main sequence a mass sequence, and what relation quantifies it?
4. Estimate the main-sequence lifetime of a 3 M_☉ star relative to the Sun's.
5. A star has T_eff = 4000 K and L = 400 L_☉. Compute its radius in solar units and classify the region of the diagram it occupies.

**Answers:**
1. Luminosity (or absolute bolometric magnitude) vertical; temperature horizontal, decreasing to the right (O left, M right).
2. Above the main sequence at cool temperatures (3000–5000 K). Since L = 4πR²σT⁴, cool yet luminous means large R — tens to hundreds of R_☉.
3. Core hydrogen fusion is regulated by mass: L ∝ M^3.5, so mass fixes temperature, radius, and luminosity together.
4. t ∝ M^−2.5 → 3^−2.5 ≈ 1/15.6, so ≈ 6 × 10⁸ years (about 0.6 billion years).
5. R/R_☉ = √400 × (4000/5772)^−2 = 20 × (0.693)^−2 ≈ 20 × 2.08 ≈ 42. Cool and luminous with R ≈ 40 R_☉: a giant.

## Takeaway

The HR diagram is astronomy's periodic table: a two-dimensional plot whose structure reveals underlying physics. Position encodes radius through the Stefan–Boltzmann law; main-sequence position encodes mass through the mass–luminosity relation; and population density encodes time. Everything that follows in this course — how stars burn, age, and die — is the story of motion on this diagram.
