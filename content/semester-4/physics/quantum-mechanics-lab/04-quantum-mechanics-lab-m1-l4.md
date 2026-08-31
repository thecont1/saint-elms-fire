***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-4
semesterName: Semester 4
subjectId: physics
subjectName: Physics
courseId: quantum-mechanics-lab
courseName: Quantum Mechanics Lab
moduleId: quantum-mechanics-lab-module-1
moduleName: Spectroscopy, the Photoelectric Effect, and Quantum Demonstrations
lessonId: quantum-mechanics-lab-m1-l4
lessonName: Electron Diffraction and de Broglie's Wavelength
lessonNumber: 4
moduleNumber: 1
semesterNumber: 4
difficulty: intermediate
estimatedStudyMinutes: 50
releaseOrder: 4
prerequisites:
  - quantum-mechanics-lab-m1-l3
learningObjectives:
  - Observe the diffraction of electrons by a polycrystalline graphite target and measure the diffraction ring diameters.
  - Verify de Broglie's relation λ = h / p for electrons at several accelerating voltages.
  - Compute the interplanar spacing of graphite from the diffraction pattern and compare with the catalog value.
concepts:
  - de Broglie wavelength
  - Electron diffraction
  - Bragg's law
  - Polycrystalline target
  - Diffraction ring
  - Accelerating voltage
  - Momentum and wavelength
tags:
  - physics
  - laboratory
  - quantum
  - electron-diffraction
  - de-broglie
  - bragg
sourceType: authored-courseware
assessmentHints:
  - de Broglie's relation: λ = h / p, where p is the electron's momentum.
  - For an electron accelerated through V volts, p = √(2 m e V), so λ = h / √(2 m e V).
  - For V = 150 V, λ ≈ 0.1 nm. For V = 5000 V, λ ≈ 0.017 nm.
status: in-review
***

# Electron Diffraction and de Broglie's Wavelength

## Overview

In 1924, Louis de Broglie proposed that particles have a wave nature, with wavelength λ = h / p, where p is the particle's momentum. In 1927, Davisson and Germer observed the diffraction of electrons by a crystal of nickel, confirming de Broglie's hypothesis. The electron diffraction tube is the lab's modern realisation: a beam of electrons, accelerated through a known voltage, is incident on a thin polycrystalline graphite target. The electrons diffract from the regular atomic planes of the graphite, producing a set of concentric rings on a fluorescent screen. The ring diameters are related to the diffraction angles by Bragg's law, and the diameters give the de Broglie wavelength.

This lesson covers the apparatus (an electron diffraction tube with a variable accelerating voltage, a graphite target, a fluorescent screen), the procedure (set the accelerating voltage, measure the diffraction ring diameters), the analysis (Bragg's law, de Broglie's relation, interplanar spacing of graphite), and the dominant sources of error (ring measurement, target contamination, electron energy spread).

## Learning Path

1. **Set up the electron diffraction tube** — connect the high-voltage supply (0–5 kV or 0–10 kV) to the accelerating electrode; connect the filament supply (6.3 V) to heat the cathode.
2. **Evacuate the tube** (if not already evacuated) — a vacuum of ~ 10⁻⁶ Torr is typical.
3. **Set the accelerating voltage** to a low value (e.g. 3 kV) and observe the diffraction pattern on the fluorescent screen. You should see a central bright spot (the direct beam) and one or two concentric rings.
4. **Measure the ring diameters** for several accelerating voltages (e.g. 3, 4, 5 kV).
5. **Compute the de Broglie wavelength** from the accelerating voltage: λ = h / √(2 m e V).
6. **Compare with the measured wavelength** from the diffraction pattern (using Bragg's law).

## Core Explanation

### Theory: de Broglie's Wavelength

For a particle of mass m and velocity v, the de Broglie wavelength is

λ = h / p = h / (m v).

For an electron accelerated from rest through a potential difference V, the kinetic energy is e V, so

(1/2) m v² = e V   ⇒   v = √(2 e V / m)   ⇒   p = m v = √(2 m e V).

Hence

λ = h / √(2 m e V) = 1.227 / √V (in nm, with V in volts).

For V = 100 V, λ = 0.123 nm. For V = 1000 V, λ = 0.039 nm. For V = 5000 V, λ = 0.017 nm. These wavelengths are comparable to atomic spacings (~ 0.1–0.5 nm), so the diffraction by crystals is observable.

### Theory: Bragg's Law

For X-rays or electrons incident on a crystal, the diffraction condition is

2 d sin θ = n λ,

where d is the spacing between atomic planes, θ is the angle of incidence (and reflection), n is the order, and λ is the wavelength. For a polycrystalline target, the randomly-oriented crystallites produce cones of diffracted radiation at angles 2θ to the incident beam. These cones intersect a flat screen (perpendicular to the incident beam) in circles (rings) of radius R = L tan(2θ), where L is the distance from the target to the screen.

For small angles (θ ≪ 1), tan(2θ) ≈ 2θ, so R ≈ 2L θ. Combining with Bragg's law:

θ = n λ / (2 d)   ⇒   R = L n λ / d.

For the first-order (n = 1) ring,

λ = R d / L.

### Theory: Graphite Structure

Graphite has a hexagonal layered structure. The interplanar spacing for the (002) planes (the most prominent in electron diffraction) is d ≈ 0.335 nm. Higher-order diffractions (n = 2, 3, ...) are also visible, with progressively larger ring diameters.

### Apparatus

- Electron diffraction tube: an evacuated tube with an electron gun (cathode, anode, focusing electrode), a polycrystalline graphite target, and a fluorescent screen. The whole tube is at ~ 10⁻⁶ Torr.
- High-voltage supply (0–5 kV or 0–10 kV) for the accelerating voltage.
- Filament supply (6.3 V) for the cathode heater.
- Calibrated scale or ruler behind the screen, to measure the ring diameters.
- Safety glasses; high-voltage interlock; the tube should be in a protective cage.

### Procedure

1. **Set up the apparatus** according to the manufacturer's instructions. Allow the tube to reach operating vacuum (typically 10–20 minutes for the pump to stabilise).
2. **Set the accelerating voltage** to 3.0 kV (or another low value). The diffraction pattern should appear within seconds.
3. **Measure the diameters** of the visible rings. The first ring (innermost) corresponds to the (002) planes at d = 0.335 nm, first order (n = 1). The second ring (if visible) corresponds to (002), n = 2, or another set of planes.
4. **Repeat for several accelerating voltages** (e.g. 3, 4, 5 kV). Record the ring diameters.
5. **Compute the de Broglie wavelength** for each voltage using λ = 1.227 / √V (in nm).
6. **Compare** with the wavelength derived from the diffraction pattern (using the ring diameter, the target-screen distance, and the known d).

### Analysis

For each voltage V:

- λ_predicted = 1.227 / √V (in nm).
- λ_measured = R · d / L, where R is the ring radius, d is the interplanar spacing (0.335 nm for graphite (002)), and L is the target-screen distance.
- Compare λ_predicted and λ_measured; they should agree within a few per cent.

For V = 4.0 kV, λ_predicted = 1.227 / √4000 = 0.0194 nm. For a ring of radius R = 15 mm and L = 200 mm, λ_measured = 15 · 0.335 / 200 = 0.0251 nm. The discrepancy is ~ 30 %; the likely cause is that the first ring is not (002), n = 1 but rather (100), n = 1, with a different d. The (100) spacing in graphite is d ≈ 0.213 nm, giving λ_measured = 15 · 0.213 / 200 = 0.0160 nm — closer to the predicted value.

### Sources of Error

- **Target contamination.** The graphite target may be contaminated with adsorbed gases or with other materials. The contamination produces additional rings or shifts the ring positions. A clean target is essential.
- **Electron energy spread.** The electrons emitted from the cathode have a distribution of energies (Maxwell-Boltzmann, ~ 0.5 eV wide). The high-voltage supply may also have a small ripple. The energy spread broadens the rings.
- **Screen distance.** The target-screen distance L must be measured precisely. A 5 % error in L gives a 5 % error in λ.
- **Ring measurement.** The rings are not perfectly sharp; their edges are diffuse due to the energy spread and the finite crystallite size. The radius is read to ~ 0.5 mm, which is a few per cent of the ring radius.
- **Target crystallite size.** If the crystallites are too large, the rings are spotty (only a few crystallites contribute to each direction). If they are too small, the rings are broad (the Bragg condition is relaxed). The optimum is ~ 10 nm crystallites.

## Key Ideas

- de Broglie's wavelength: λ = h / p.
- For an electron accelerated through V volts: λ = 1.227 / √V (in nm).
- Bragg's law: 2 d sin θ = n λ.
- Electron diffraction: confirms the wave nature of electrons.
- The graphite (002) interplanar spacing is d ≈ 0.335 nm.

## Worked Examples

### Example 1: de Broglie wavelength

For V = 150 V, λ = 1.227 / √150 = 1.227 / 12.25 = 0.100 nm. This is comparable to the lattice spacing of crystals and is the basis of low-energy electron diffraction (LEED).

For V = 5000 V, λ = 1.227 / √5000 = 0.0173 nm. This is comparable to the wavelength of X-rays and is used in high-energy electron diffraction.

### Example 2: Interplanar spacing

For V = 4.0 kV (λ = 0.0194 nm), the first ring has radius R = 15 mm at L = 200 mm. Then

d = λ L / R = 0.0194 · 200 / 15 = 0.259 nm.

This is between the (002) spacing (0.335 nm) and the (100) spacing (0.213 nm) of graphite. The ring is likely a combination of (100) and (101) or a different reflection.

### Example 3: Multi-order diffraction

If the second ring has radius R_2 = 30 mm at the same voltage and L, then

d = 2 λ L / R_2 = 2 · 0.0194 · 200 / 30 = 0.259 nm.

Wait, that's the same d. Hmm. Let me recheck.

For n = 1, the ring radius is R_1 = L tan(2θ_1) with sin θ_1 = λ / (2d). For small θ, R_1 ≈ L · 2θ_1 ≈ L · λ / d.

For n = 2, sin θ_2 = 2λ / (2d) = λ / d. For λ = 0.0194 nm and d = 0.213 nm, sin θ_2 = 0.091, θ_2 = 5.2°. R_2 = L · 2 tan θ_2 = 200 · 2 · 0.0913 = 36.5 mm.

So the first-order ring (n = 1) is at R_1 ≈ 18.2 mm, and the second-order ring (n = 2) is at R_2 ≈ 36.5 mm. The ratio is 2:1 (as expected for a small-angle, two-order diffraction).

### Example 4: de Broglie's relation confirmed

Plot λ_measured (y) against 1/√V (x). The slope is 1.227 nm·V^½. From the data:

| V (kV) | λ_measured (nm) | 1/√V (V^(-1/2)) |
|-------:|----------------:|----------------:|
| 3.0 | 0.0222 | 0.577 |
| 4.0 | 0.0194 | 0.500 |
| 5.0 | 0.0173 | 0.447 |

A linear fit through the origin gives slope = (0.0222 − 0.0173) / (0.577 − 0.447) = 0.0049 / 0.130 = 0.0377 nm·V^(1/2). Hmm, that's much smaller than 1.227. The data is in kV, so convert: slope = 0.0377 nm · (V)^(1/2) / (kV)^(1/2) = 0.0377 · 31.6 = 1.19 nm·V^(1/2). The agreement with 1.227 is within 3 %.

## Common Misconceptions

- **"Electrons are particles, not waves."** Electrons have both particle and wave aspects. The diffraction pattern is a wave phenomenon; the detection of each electron on the screen is a particle event. The full description is given by quantum mechanics.
- **"The diffraction pattern is the average of many electrons."** The diffraction pattern emerges from many individual electron events, each of which lands at a specific point on the screen. The pattern is the statistical distribution of these points. A single electron goes through the apparatus as a wave (described by a wavefunction) and lands at a specific point.
- **"The Bragg angle is small for electron diffraction."** It depends on the accelerating voltage. For low V (long λ), the Bragg angle can be 5–10°; for high V (short λ), it is much smaller.
- **"The de Broglie wavelength is the same for all particles at a given energy."** No — it depends on the mass. For a proton at the same kinetic energy, the wavelength is shorter by a factor of √(m_e / m_p) = 1/43.
- **"Electron diffraction is a historical curiosity."** It is the basis of LEED (low-energy electron diffraction), used to study surface structure; TEM (transmission electron microscopy), which images materials at atomic resolution; and electron microscopy of biological samples.

## Connections

- **Quantum Mechanics (Sem 4 theory).** Electron diffraction is the experimental confirmation of the wave nature of matter, a central prediction of quantum mechanics. The same physics governs the diffraction of neutrons (used to study magnetic structure) and the interference of atoms and molecules (modern atom interferometry).
- **Materials science.** LEED and TEM are the workhorses of surface science and materials characterisation. The diffraction pattern reveals the crystal structure, the lattice parameters, and the presence of defects.
- **Biology.** Cryo-electron microscopy images individual proteins and viruses at near-atomic resolution. The same de Broglie wavelength and the same diffraction physics.
- **History of physics.** The Davisson-Germer experiment (1927) confirmed de Broglie's hypothesis. Clinton Davisson and Lester Germer shared the 1937 Nobel Prize in Physics with George Paget Thomson, who observed electron diffraction independently using a different geometry.
- **Quantum information.** Electron interferometers are used to test the foundations of quantum mechanics (the wave-particle duality, the role of the observer, decoherence). The same physics, applied to single electrons, is the most direct demonstration of quantum behaviour.

## Quick Check

1. State de Broglie's relation. What is the wavelength of an electron accelerated through 100 V? Through 1000 V?
2. State Bragg's law. Define each symbol.
3. Why is graphite a good target for electron diffraction?
4. The first ring of an electron diffraction pattern has radius R at target-screen distance L. What is λ in terms of R, L, d?
5. For V = 5 kV, the first ring is at R = 10 mm. L = 200 mm. d = 0.335 nm. Is this consistent with de Broglie's relation?
6. Why are the rings concentric, not single spots?
7. Why must the tube be evacuated?
8. A student measures R = 12 mm for V = 4 kV, but the predicted value is R = 15 mm. What might be wrong?

## Takeaway

Electron diffraction is the lab's confirmation of the wave nature of matter. de Broglie's relation λ = h / p and Bragg's law 2 d sin θ = n λ are the two central formulas; the diffraction rings are the visual confirmation. The lab's discipline — clean target, accurate ring measurement, stable high voltage, careful vacuum — is the same discipline that runs through every diffraction experiment in physics and materials science. The electron diffraction tube is the prototype of every modern electron microscope; the same de Broglie wavelength governs the resolution. The wave-particle duality is the central mystery of quantum mechanics; the diffraction pattern is its most direct visual evidence.
