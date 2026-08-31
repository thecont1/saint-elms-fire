***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-5
semesterName: Semester 5
subjectId: physics
subjectName: Physics
courseId: solid-state-physics-lab
courseName: Solid State Physics Lab
moduleId: solid-state-physics-lab-module-1
moduleName: Crystal Structure, Conductivity, and Semiconductors
lessonId: solid-state-physics-lab-m1-l1
lessonName: Crystal Structure and X-Ray Diffraction
lessonNumber: 1
moduleNumber: 1
semesterNumber: 5
difficulty: advanced
estimatedStudyMinutes: 55
releaseOrder: 1
prerequisites:
  - communication-electronics-lab-m1-l6
learningObjectives:
  - Use Bragg's law to relate the X-ray diffraction angle to the interplanar spacing of a crystal.
  - Identify the crystal structure of a sample (e.g. NaCl, KCl, silicon) from the powder diffraction pattern.
  - Determine the lattice constant and the Miller indices of the diffracting planes.
concepts:
  - Crystal lattice
  - Bravais lattice
  - Unit cell
  - Miller indices
  - Bragg's law
  - Powder diffraction
  - X-ray diffraction
  - Structure factor
  - Atomic form factor
tags:
  - physics
  - laboratory
  - solid-state
  - xrd
  - crystal-structure
  - braggs-law
sourceType: authored-courseware
assessmentHints:
  - Bragg's law: 2 d sin θ = n λ. For Cu Kα radiation (λ = 1.5406 Å), the diffraction angles for Si (a = 5.43 Å) are at 2θ = 28.4°, 47.3°, 56.1°, ...
  - The Miller indices (hkl) and the lattice constant a are related by 1/d² = (h² + k² + l²) / a² for cubic crystals.
  - The selection rules for diffraction depend on the lattice type (P, I, F) and the basis (one atom, two atoms, ...).
status: in-review
***

# Crystal Structure and X-Ray Diffraction

## Overview

A crystal is a solid whose atoms are arranged in a periodic pattern in three dimensions. The smallest repeating unit is the unit cell; the lattice describes the periodic arrangement of the cell. The structure of a crystal determines its electrical, optical, magnetic, and mechanical properties. X-ray diffraction is the primary tool for determining the crystal structure: a beam of X-rays incident on a crystal is diffracted by the atomic planes, and the diffraction pattern reveals the spacing and orientation of the planes.

This lesson covers the apparatus (an X-ray diffractometer, a powder sample, Cu Kα radiation), the procedure (mount the sample, scan the diffraction angle 2θ, record the diffraction pattern), the analysis (identify the peaks, assign Miller indices, determine the lattice constant), and the dominant sources of error (sample preparation, peak position, instrument broadening).

## Learning Path

1. **Set up the X-ray diffractometer** — turn on the X-ray tube (Cu Kα, λ = 1.5406 Å); align the goniometer; mount the powder sample on the sample holder.
2. **Scan the diffraction angle** 2θ from 10° to 90° in 0.02° steps; record the intensity at each step.
3. **Identify the peaks** — the diffraction pattern has a series of peaks at specific 2θ values.
4. **Assign Miller indices** — for each peak, determine the (hkl) that gives the observed d-spacing.
5. **Compute the lattice constant** — for cubic crystals, a = d √(h² + k² + l²). Average over several peaks.

## Core Explanation

### Theory: Crystal Structure

A crystal is described by a Bravais lattice (one of 14 types) and a basis (one or more atoms per lattice point). The seven crystal systems are cubic, tetragonal, orthorhombic, hexagonal, rhombohedral, monoclinic, and triclinic. The simplest is the cubic system, with three types: simple cubic (SC), body-centered cubic (BCC), and face-centered cubic (FCC).

The unit cell is described by its lattice constants (a, b, c, α, β, γ). For cubic systems, a = b = c and α = β = γ = 90°.

The Miller indices (hkl) describe a set of parallel atomic planes. The (hkl) plane has intercepts a/h, b/k, c/l on the crystallographic axes. The interplanar spacing for a cubic crystal is

d_{hkl} = a / √(h² + k² + l²).

For example, the (100) plane has d = a, the (110) plane has d = a / √2, the (111) plane has d = a / √3.

### Theory: Bragg's Law

X-rays incident on a crystal are diffracted by the atomic planes. The condition for constructive interference is

2 d_{hkl} sin θ = n λ,

where d is the interplanar spacing, θ is the angle of incidence (and reflection), n is the order of the diffraction, and λ is the wavelength of the X-rays. For n = 1, the first-order diffraction is at the smallest angle for a given set of planes.

The X-ray powder diffraction pattern is a plot of intensity vs 2θ. For a powder (a polycrystalline sample with randomly oriented crystallites), each set of (hkl) planes produces a cone of diffracted radiation at angle 2θ to the incident beam. The cone intersects the detector in a ring; the position of the ring (2θ) gives the d-spacing.

### Theory: Structure Factor

The intensity of a diffraction peak depends on the structure factor F_{hkl}, which is the sum of the scattering amplitudes of all atoms in the unit cell, weighted by their phase factors:

F_{hkl} = Σ_j f_j exp[2π i (h x_j + k y_j + l z_j)],

where f_j is the atomic form factor of atom j and (x_j, y_j, z_j) is its position in the unit cell.

For a simple cubic lattice with one atom per cell, F_{hkl} = f (the form factor), and all (hkl) reflections are allowed.

For a BCC lattice (two atoms per cell at (0, 0, 0) and (1/2, 1/2, 1/2)):

F_{hkl} = f [1 + exp(π i (h + k + l))] = f [1 + (− 1)^{h + k + l}].

This is 2f if h + k + l is even, and 0 if h + k + l is odd. So the BCC lattice has diffraction peaks only for h + k + l even.

For an FCC lattice (four atoms per cell at (0, 0, 0), (1/2, 1/2, 0), (1/2, 0, 1/2), (0, 1/2, 1/2)):

F_{hkl} = f [1 + exp(π i (h + k)) + exp(π i (h + l)) + exp(π i (k + l))].

This is 4f if h, k, l are all even or all odd, and 0 otherwise. So the FCC lattice has diffraction peaks only for h, k, l all even or all odd.

### Apparatus

- X-ray diffractometer (with Cu Kα radiation, λ = 1.5406 Å; a goniometer with a scintillation or solid-state detector).
- Powder sample (e.g. NaCl, KCl, Si, Ge, or another known crystal).
- Sample holder (a flat plate or a capillary).
- Safety glasses; X-ray shielding (the X-ray tube should be in a shielded enclosure with interlocks).
- X-ray film or a computer-based data acquisition system.

### Procedure

1. **Set up the diffractometer.** Turn on the X-ray tube (typically 30–40 kV, 20–30 mA). Allow 10 minutes for the tube to stabilise.
2. **Mount the powder sample** on the sample holder. The sample should be finely ground and pressed into a flat surface.
3. **Align the goniometer.** The X-ray source, sample, and detector should be on the goniometer circle, with the sample at the centre.
4. **Scan the diffraction angle** 2θ from 10° to 90° in 0.02° steps. The detector records the intensity at each step. A complete scan takes 10–30 minutes.
5. **Save the diffraction pattern** as a file (e.g. a .csv or .xy file with columns 2θ and intensity).

### Analysis

#### Peak Identification

The diffraction pattern has a series of peaks at specific 2θ values. For Cu Kα radiation and a cubic crystal with lattice constant a, the peak positions are at

2θ = 2 arcsin(λ √(h² + k² + l²) / (2 a)).

For silicon (a = 5.4309 Å), the peaks are at 2θ = 28.44° (111), 47.30° (220), 56.12° (311), 69.13° (400), 76.91° (331), 88.47° (422), ... (Note: Si is FCC, so only all-odd or all-even Miller indices are allowed.)

For NaCl (a = 5.6402 Å), the same pattern is observed but with slightly different angles (NaCl is FCC with a two-atom basis: Na and Cl; the structure factor allows the same reflections as a simple FCC lattice).

#### Lattice Constant

For each peak, compute d_{hkl} = λ / (2 sin θ). Then, for a cubic crystal, a = d_{hkl} √(h² + k² + l²). Average over several peaks for the best value.

The uncertainty in a comes from the uncertainty in the peak position. For a sharp peak, the position can be read to ± 0.02°; the resulting uncertainty in a is ~ 0.001 Å.

### Sources of Error

- **Sample preparation.** A coarsely ground sample has few crystallites in the diffraction condition, giving spotty or weak peaks. A finely ground, well-pressed sample is essential.
- **Sample displacement.** If the sample surface is not exactly at the goniometer centre, the peak positions are shifted. The shift is Δ(2θ) ≈ − 2 δ / R, where δ is the displacement and R is the goniometer radius.
- **Zero error.** A misalignment of the goniometer zero gives a constant offset to all peak positions. Calibrate with a known standard (e.g. Si or LaB₆).
- **X-ray absorption.** The sample absorbs some of the X-rays, reducing the intensity. For a thick sample, the effect is small; for a thin sample, it can be significant.
- **Kα₂ contamination.** The Cu Kα line is actually a doublet (Kα₁ at 1.5406 Å, Kα₂ at 1.5444 Å). The Kα₂ line produces a small satellite peak next to each main peak. For high-accuracy work, strip the Kα₂ contribution or use a monochromator.

## Key Ideas

- A crystal is a periodic arrangement of atoms in 3D. The unit cell is the smallest repeating unit; the Bravais lattice describes the periodicity.
- Miller indices (hkl) describe a set of parallel atomic planes. The interplanar spacing for a cubic crystal is d = a / √(h² + k² + l²).
- Bragg's law: 2 d sin θ = n λ. The diffraction angle θ depends on the d-spacing and the wavelength.
- The structure factor F_{hkl} determines the intensity of each diffraction peak. The selection rules depend on the lattice type (P, I, F) and the basis.
- Powder diffraction gives a series of peaks at specific 2θ values. The peak positions give the d-spacings; the lattice constant is computed from the d-spacings and the Miller indices.

## Worked Examples

### Example 1: NaCl powder diffraction

A powder diffraction pattern of NaCl (cubic, a = 5.6402 Å) with Cu Kα radiation (λ = 1.5406 Å) shows peaks at 2θ = 27.4°, 31.7°, 45.4°, 53.9°, 56.5°, 66.2°, 73.1°, 75.3°, 84.0°, 90.4°.

Compute d for each peak:

| 2θ (°) | d (Å) | (h² + k² + l²) | (hkl) |
|--------:|------:|---------------:|------|
| 27.4 | 3.254 | 3 | 111 |
| 31.7 | 2.820 | 4 | 200 |
| 45.4 | 1.994 | 8 | 220 |
| 53.9 | 1.698 | 11 | 311 |
| 56.5 | 1.626 | 12 | 222 |
| 66.2 | 1.410 | 16 | 400 |
| 73.1 | 1.293 | 19 | 331 |
| 75.3 | 1.261 | 20 | 420 |
| 84.0 | 1.150 | 24 | 422 |
| 90.4 | 1.085 | 27 | 333 |

For each peak, a = d √(h² + k² + l²). For 2θ = 27.4°: a = 3.254 · √3 = 5.636 Å. The average over all peaks is 5.638 ± 0.005 Å, consistent with the catalog value 5.6402 Å.

### Example 2: Si vs NaCl

Silicon (a = 5.4309 Å) and NaCl (a = 5.6402 Å) have similar powder patterns (both FCC) but at slightly different angles. The first peak (111) is at:

For Si: 2θ = 2 arcsin(1.5406 · √3 / (2 · 5.4309)) = 2 arcsin(0.2459) = 28.45°.
For NaCl: 2θ = 2 arcsin(1.5406 · √3 / (2 · 5.6402)) = 2 arcsin(0.2368) = 27.40°.

The difference of 1° is easily resolved by the diffractometer.

### Example 3: Miller indices from d-spacing

A cubic crystal has a peak at d = 2.00 Å. The next three peaks are at d = 1.414 Å, d = 1.155 Å, d = 1.000 Å. The ratios of d are 1, 1/√2, 1/√3, 1/2.

For a cubic crystal, a = d √(h² + k² + l²). For the four peaks:
- d = 2.00 Å: if (hkl) = (110), a = 2.00 · √2 = 2.828 Å. If (hkl) = (200), a = 2.00 · 2 = 4.00 Å. If (hkl) = (100), a = 2.00 · 1 = 2.00 Å.
- d = 1.414 Å: if (hkl) = (200), a = 1.414 · 2 = 2.828 Å. ✓ (consistent with (110) for first peak)
- d = 1.155 Å: if (hkl) = (211), a = 1.155 · √6 = 2.828 Å. ✓
- d = 1.000 Å: if (hkl) = (220), a = 1.000 · √8 = 2.828 Å. ✓

So the lattice is cubic with a = 2.828 Å, and the peaks are (110), (200), (211), (220). This is consistent with a BCC lattice (h + k + l even) for a simple cubic crystal.

## Common Misconceptions

- **"X-ray diffraction is only for crystals."** It is for any material with periodic structure — crystals, polycrystalline materials, fibres, liquid crystals, and even some biological samples. The technique is limited by the requirement for periodicity on the scale of the X-ray wavelength (~ 1 Å).
- **"The diffraction pattern is a direct image of the crystal."** It is a Fourier transform of the electron density. The relationship between the pattern and the structure is mathematical (a Fourier transform), not direct imaging. The structure is reconstructed by inverting the transform.
- **"All crystals diffract X-rays."** Most do, but the diffraction may be weak or absent for certain orientations. The powder method uses many crystallites to ensure that all (hkl) planes are sampled.
- **"The Kα line is a single wavelength."** It is a doublet (Kα₁ and Kα₂). For high-accuracy work, the Kα₂ contribution must be removed or the doublet must be resolved.
- **"The lattice constant is exact."** It depends on the temperature, the composition, and the defects in the crystal. The precision is typically 0.001 Å; the accuracy depends on the calibration and the sample.

## Connections

- **Solid State Physics (Sem 5 theory).** X-ray diffraction is the primary tool for determining crystal structures. The structure determines the electronic band structure, the phonon spectrum, and the magnetic and optical properties. The same techniques (Bragg's law, structure factor, Miller indices) are used in electron diffraction and neutron diffraction.
- **Materials science.** X-ray diffraction is the workhorse of materials characterisation: phase identification, lattice constant measurement, residual stress analysis, texture analysis, thin-film analysis. The technique is used in metallurgy, ceramics, polymers, and pharmaceuticals.
- **Chemistry.** X-ray crystallography determined the structures of DNA, proteins, and many other molecules. The method is the same; the samples are single crystals rather than powders.
- **Geology.** X-ray diffraction is used to identify minerals in rocks and soils. The technique is essential for understanding the composition and history of geological samples.
- **Engineering.** X-ray diffraction is used for non-destructive testing: residual stress in welds, fatigue in machine parts, and quality control in manufacturing.

## Quick Check

1. State Bragg's law. Define each symbol.
2. A cubic crystal has a = 4.0 Å. What is d for the (100), (110), (111) planes?
3. A powder pattern of a cubic crystal has a peak at 2θ = 30° with Cu Kα radiation (λ = 1.5406 Å). What is d?
4. Why does the BCC lattice have no peak for (100)?
5. Why does the FCC lattice have no peak for (110)?
6. A student reports a peak at 2θ = 30° but the expected peak is at 2θ = 30.5°. What might be wrong?
7. Why is the sample ground to a fine powder?
8. What is the structure factor? What does it tell you?

## Takeaway

X-ray diffraction is the lab's primary tool for determining crystal structure. Bragg's law, the structure factor, and the powder diffraction pattern are the three central concepts. The lab's discipline — careful sample preparation, accurate goniometer alignment, proper peak identification, accurate lattice constant determination — is the same discipline that runs through every crystallography experiment in physics, chemistry, materials science, and geology. The same principles (Bragg's law, Fourier transform) govern the analysis of any diffraction pattern, from X-rays to electrons to neutrons. The crystal structure is the foundation of all solid-state properties; X-ray diffraction is the foundation of all crystal structure determination.
