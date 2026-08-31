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
lessonId: astrophysics-iii-m1-l2
lessonName: Stellar Spectra and Spectral Classification
lessonNumber: 2
moduleNumber: 1
semesterNumber: 3
difficulty: advanced
estimatedStudyMinutes: 50
releaseOrder: 2
prerequisites:
  - astrophysics-iii-m1-l1
learningObjectives:
  - Explain how a stellar spectrum combines a thermal continuum with absorption and emission features, and what those features encode about the star.
  - Use the Harvard sequence O B A F G K M correctly and state the temperature ordering it implies.
  - Describe the physical reasons line strengths vary across the sequence, distinguishing temperature-dependent excitation and ionisation from abundance effects.
  - Apply the Morgan–Keenan luminosity classes and read a full spectral type such as G2 V.
concepts:
  - Stellar spectrum
  - Absorption lines
  - Harvard spectral classification
  - Spectral type
  - Ionisation and excitation balance
  - Morgan–Keenan luminosity class
  - Spectroscopic parallax
tags:
  - astrophysics
  - spectroscopy
  - stellar-classification
sourceType: authored-courseware
***

# Stellar Spectra and Spectral Classification

## Overview

In the previous lesson we compressed a star's brightness into a single number — a magnitude. A spectrum refuses that compression: it spreads the star's light out by wavelength and records how much energy arrives in each narrow interval. The result is the single most information-dense observation in astrophysics. From one good spectrum you can read off the star's surface temperature, surface gravity, chemical composition, radial velocity, and rotation rate — and, with care, even its mass and distance.

This lesson builds the classification language that turns raw spectra into stellar types. The Harvard sequence (O, B, A, F, G, K, M) organises stars by surface temperature, and the Morgan–Keenan system adds a luminosity class that encodes surface gravity and hence size. Together they let an astronomer look at the label "G2 V" and immediately know the object is a Sun-like main-sequence star with a surface near 5800 K. Along the way we will see *why* the lines change across the sequence — the answer is physics you already know from thermal physics and atomic structure: excitation and ionisation balance.

## Learning Path

1. Recall how a thermal continuum is formed and how Wien's law links peak wavelength to temperature (Thermal Physics; Astrophysics I).
2. See how atoms and ions imprint absorption lines on that continuum, and why line strength depends on temperature as well as abundance.
3. Learn the Harvard sequence and the mnemonic ordering, with approximate temperature ranges and signature lines for each class.
4. Understand the physics behind the sequence: the rise and fall of hydrogen Balmer lines, the appearance of ionised metals, and the molecular bands of cool stars.
5. Add the Morgan–Keenan luminosity classes (I to V) and see how pressure broadening lets spectra measure surface gravity.
6. Practise reading full spectral types and estimating temperatures and luminosities from them.

## Core Explanation

### The continuum: a star is (almost) a blackbody

A star's photosphere is dense enough that photons scatter and absorb many times before escaping, so the emergent continuum is close to a blackbody at the photospheric temperature. Its shape follows Planck's law, and the peak obeys Wien's displacement law:

λ_max = 2.898 × 10⁻³ m·K / T

A 5800 K photosphere peaks near 500 nm (visible green); a 30 000 K star peaks in the ultraviolet; a 3000 K star peaks near 1 µm in the infrared. The continuum slope — blue versus red — is therefore a crude but robust thermometer, and it is what colour indices like B−V measure.

### Absorption lines: fingerprints on the continuum

Above the photosphere lies a thinner layer where atoms and ions can absorb photons at precise wavelengths, removing them from the outward beam. Each transition has a fixed energy difference, so each species absorbs at a fixed set of wavelengths. The result is the familiar dark-line pattern superposed on the rainbow continuum.

But seeing a line requires more than the species being present. Two conditions matter:

1. **The atom must be in the right ionisation stage.** A neutral hydrogen atom can absorb Balmer photons; a proton cannot. The fraction of atoms in each ionisation stage is governed by temperature through the Saha equation (which you will meet formally in statistical mechanics).
2. **The atom must be in the right energy level.** Balmer absorption requires the electron already in n = 2. At 4000 K almost no hydrogen is excited to n = 2; at 30 000 K most hydrogen is ionised. The occupation of each level follows the Boltzmann distribution.

The combination explains the great paradox of stellar spectroscopy: **the strongest hydrogen lines appear not in the hottest stars but at intermediate temperatures (~10 000 K)**, where hydrogen is mostly neutral yet significantly excited to n = 2.

### The Harvard sequence

Around 1900, Annie Jump Cannon reordered earlier alphabetical schemes into a single temperature sequence. The classes, hottest to coolest:

| Class | T_eff (K) | Signature features |
|-------|-----------|--------------------|
| O | 30 000–50 000 | Ionised helium (He II), highly ionised metals; weak hydrogen |
| B | 10 000–30 000 | Neutral helium strongest near B2; hydrogen strengthening |
| A | 7 500–10 000 | Hydrogen Balmer lines at maximum; first ionised metals |
| F | 6 000–7 500 | Balmer weakening; ionised metals (Ca II H & K) strengthening |
| G | 5 200–6 000 | Ca II strong; neutral metals appearing; the Sun is G2 |
| K | 3 700–5 200 | Neutral metals dominate; faint molecular hints |
| M | 2 400–3 700 | Titanium oxide (TiO) molecular bands; very red continuum |

The classic mnemonic is **"Oh Be A Fine Girl/Guy, Kiss Me"** — any phrase that preserves the O-B-A-F-G-K-M order works.

Each class is subdivided into ten subclasses (B0, B1, …, B9, A0, …), so the numbering is a temperature dial: B0 is hottest, B9 nearly an A star. A star typed "G2" sits two tenths of the way from G0 toward G9 — slightly warmer than an average G star.

The sequence was arranged empirically before anyone understood temperature's role; later physics showed it *is* a temperature sequence. This is a recurring pattern in astronomy: a descriptive classification predates, and then guides, the underlying theory.

### Morgan–Keenan luminosity classes

Two stars with the same surface temperature have the same spectrum of excitation and ionisation — but not necessarily identical spectra. A supergiant's atmosphere is far less dense than a dwarf's at the same temperature. Lower density means fewer collisions, narrower lines, and subtly altered ionisation balance. The MK system classifies this second dimension:

| Class | Meaning |
|-------|---------|
| Ia / Ib | Bright / less luminous supergiants |
| II | Bright giants |
| III | Giants |
| IV | Subgiants |
| V | Main sequence (dwarfs) |

So the Sun is **G2 V**: a G2-temperature star on the main sequence. Betelgeuse is approximately M1–M2 Ia: a cool supergiant. The width and detailed shape of certain lines (and the strength of gravity-sensitive features) fix the luminosity class, which is why spectra can distinguish a nearby dim dwarf from a distant luminous giant that have identical colours.

### Spectroscopic parallax

Once you know the spectral type and luminosity class, you know the absolute magnitude from calibrated relations (the HR diagram, next lesson). Comparing with the apparent magnitude gives the distance via the distance modulus:

m − M = 5 log₁₀(d / 10 pc)

This method — historically called spectroscopic parallax, though it involves no parallax — extends distance measurements far beyond Gaia's geometric reach, at the cost of systematic uncertainty (typically 10–20% per star).

## Key Ideas

- A stellar spectrum is a near-blackbody continuum crossed by absorption lines; the continuum slope gives temperature, the lines give temperature, gravity, composition, and motion.
- Line strength depends on **ionisation and excitation balance**, both temperature-driven — so a weak line can mean "wrong temperature", not "element absent".
- The Harvard sequence O B A F G K M is a **temperature sequence**, with ten numbered subclasses per letter.
- Hydrogen Balmer lines peak in A stars (~10 000 K), weakening both toward hotter stars (ionisation) and cooler stars (under-excitation).
- The MK luminosity class (I–V) encodes surface gravity via pressure-sensitive line shapes, breaking the dwarf/giant colour degeneracy.
- A full spectral type like "K1 III" tells you temperature and luminosity at a glance, and hence approximate radius and distance capability.

## Worked Examples

**Example 1 — Reading a spectral type.**
The bright star Capella is typed G8 III (with a G0 companion). *Temperature:* G8 is near the cool end of the G range, so T_eff ≈ 5000 K. *Luminosity class:* III means a giant — larger and more luminous than a main-sequence star of the same temperature. Its colour therefore resembles a K-ish dwarf, but its spectrum reveals the low-gravity giant atmosphere.

**Example 2 — Why O stars lack strong hydrogen lines.**
O stars have T_eff ≳ 30 000 K. At such temperatures the Saha balance pushes most hydrogen into the ionised state: bare protons have no bound electron and cannot produce absorption lines. The little neutral hydrogen that remains is also highly excited. Signature lines instead come from species that survive extreme temperatures in ionised form, notably He II. Weak hydrogen lines in an O star are therefore an ionisation effect, not a hydrogen deficiency.

**Example 3 — Classifying an unknown spectrum.**
A survey spectrum shows: strong Ca II H and K lines, moderately weak Balmer lines, visible neutral iron lines, no TiO bands. *Reasoning:* strong Ca II rules out B/A; visible neutral metals and absent TiO place it in G or K; the Balmer lines still being moderately visible favours G over K. Estimate: **G5–K0**. If the lines are narrow and gravity-sensitive features indicate low pressure, add luminosity class III; the star is then a G-type giant.

**Example 4 — Spectroscopic parallax.**
A star is classified B5 V. Calibration gives M_V ≈ −1.2 for B5 V. Photometry gives V = 8.3, and the line of sight suffers negligible extinction. Then:

m − M = 8.3 − (−1.2) = 9.5 = 5 log₁₀(d / 10 pc)
log₁₀(d / 10 pc) = 1.9 → d = 10 × 10^1.9 ≈ 790 pc

A single spectrum plus one magnitude has placed the star nearly a kiloparsec away — far beyond direct parallax of older missions.

## Common Misconceptions

1. **"Harvard letters run alphabetically by temperature."** They do not — the sequence is O through M, a reordering of a discarded alphabetical scheme. A and B stars are not "classes A and B of a sequence beginning at A".
2. **"Weak hydrogen lines mean little hydrogen."** Hydrogen dominates nearly all stellar atmospheres. Balmer line weakness at high temperature is ionisation; at low temperature, under-excitation.
3. **"Spectral type measures luminosity."** It measures temperature. Luminosity comes from the separate MK class (or from knowing the radius).
4. **"Dwarf means small and faint in an absolute sense."** "Dwarf" (class V) means main sequence. An O5 V "dwarf" is tens of thousands of times more luminous than the Sun; the term is relative to giants of the same temperature.
5. **"Spectroscopic parallax uses parallax geometry."** It is a distance-modulus inference calibrated against stars with geometric distances; its errors are systematic, not trigonometric.

## Connections

- **Thermal Physics & Statistical Mechanics:** The Boltzmann and Saha distributions are the quantitative machinery behind every claim in this lesson about excitation and ionisation balance.
- **Astrophysics I (Spectroscopy basics):** Gratings, resolving power, and the Doppler formula for radial velocity reuse the instrumental language from your first course.
- **Next lesson:** Absolute magnitude plus spectral type places stars on the Hertzsprung–Russell diagram, where the main sequence, giants, and white dwarfs become one coherent map.
- **Later in this course:** Stellar structure (Module 2) explains *why* luminosity class V stars obey a mass–luminosity relation, and evolution (Module 3) explains how stars climb from class V to classes III and I.

## Quick Check

1. List the Harvard spectral classes in order of decreasing temperature.
2. Why are Balmer lines strongest in A stars rather than O stars?
3. What physical quantity does the MK luminosity class actually measure, and how does it do so?
4. A star is typed M2 V. Roughly what is its surface temperature, and is it a giant or a main-sequence star?
5. Using M_V = +5 for an M2 V star, compute the distance modulus and distance of one observed at V = 15 (ignore extinction).

**Answers:**
1. O, B, A, F, G, K, M (hottest to coolest).
2. At O-star temperatures hydrogen is mostly ionised (no bound electron to absorb); at A-star temperatures (~10 000 K) it is mostly neutral with a large n = 2 population — the ideal condition for Balmer absorption.
3. Surface gravity (hence radius/luminosity class), inferred from pressure-sensitive line widths and gravity-sensitive line ratios — lower pressure in giants/supergiants yields narrower, sharper lines.
4. About 3500 K; main sequence (V = dwarf).
5. m − M = 15 − 5 = 10 → log₁₀(d/10 pc) = 2 → d = 1000 pc = 1 kpc.

## Takeaway

A spectral type is compressed physics. The letter tells you the photospheric temperature through the physics of excitation and ionisation; the luminosity class tells you the surface gravity through pressure's imprint on lines; together they locate the star on the HR diagram and, via the distance modulus, in space. Master this two-part label and every later topic — stellar structure, evolution, and galactic astronomy — has a coordinate system to hang on.
