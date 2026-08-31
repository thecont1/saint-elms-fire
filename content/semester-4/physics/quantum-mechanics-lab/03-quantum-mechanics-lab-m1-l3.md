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
lessonId: quantum-mechanics-lab-m1-l3
lessonName: Franck-Hertz Experiment and Atomic Energy Levels
lessonNumber: 3
moduleNumber: 1
semesterNumber: 4
difficulty: intermediate
estimatedStudyMinutes: 50
releaseOrder: 3
prerequisites:
  - quantum-mechanics-lab-m1-l2
learningObjectives:
  - Measure the I-V curve of a Franck-Hertz tube filled with mercury (or neon) and identify the peaks corresponding to inelastic electron-mercury collisions.
  - Determine the first excitation energy of mercury from the spacing of the peaks and verify E_1 ≈ 4.9 eV.
  - Relate the Franck-Hertz result to the emission spectrum of mercury (the 253.7 nm UV line).
concepts:
  - Inelastic collision
  - Excitation energy
  - Franck-Hertz experiment
  - Mercury atom
  - Quantised energy levels
  - Spacing of peaks
tags:
  - physics
  - laboratory
  - quantum
  - franck-hertz
  - mercury
  - energy-levels
sourceType: authored-courseware
assessmentHints:
  - The peaks in the I-V curve are spaced by 4.9 V for mercury (corresponding to the 4.9 eV excitation energy of the 6s6p 1P1 state).
  - The first peak is at ~ 4.9 V; the second at ~ 9.8 V (twice); the third at ~ 14.7 V; etc.
  - The Franck-Hertz experiment was the first direct measurement of atomic excitation energies.
status: in-review
***

# Franck-Hertz Experiment and Atomic Energy Levels

## Overview

The Franck-Hertz experiment (1914) provided direct evidence for the quantised energy levels of atoms. In a tube filled with mercury vapour (or neon), electrons are emitted from a cathode and accelerated towards a grid by a variable voltage. Between the grid and the anode, a small reverse bias prevents low-energy electrons from reaching the anode. As the accelerating voltage is increased, the anode current rises, then drops sharply when the electron energy reaches the first excitation energy of mercury (4.9 eV). At this voltage, inelastic collisions between electrons and mercury atoms transfer 4.9 eV to the atoms, exciting them; the electrons lose kinetic energy and cannot overcome the reverse bias. As the voltage is further increased, the electrons regain enough energy between collisions to excite another atom, and the current peaks again at 2 × 4.9 = 9.8 V, then 14.7 V, and so on.

This lesson covers the apparatus (a Franck-Hertz tube with a heater, a variable DC voltage supply, an ammeter or electrometer), the procedure (record the I-V curve, identify the peaks), the analysis (measure the peak spacing, verify that it equals 4.9 V for mercury), and the connection to the emission spectrum (the 253.7 nm line emitted when the excited mercury atoms decay).

## Learning Path

1. **Set up the Franck-Hertz tube** — a tube with a cathode (heated by a filament), a grid (with a variable accelerating voltage V_grid), and an anode (with a small reverse bias V_retard).
2. **Heat the cathode** to the operating temperature (typically 800–900 °C, controlled by the filament current).
3. **Maintain the mercury vapour pressure** by heating the tube to ~ 180 °C (a separate oven or a heating jacket).
4. **Sweep V_grid** from 0 to 60 V in 0.5 V steps. Record the anode current I at each step.
5. **Plot I against V_grid** — observe the peaks and troughs.
6. **Measure the peak spacing** — the difference between successive peaks is the first excitation energy of mercury.

## Core Explanation

### Theory: The Franck-Hertz Experiment

The Franck-Hertz tube has three electrodes: a cathode (C), a grid (G), and an anode (A). The cathode is heated to emit electrons (thermionic emission). The electrons are accelerated towards the grid by a variable voltage V_grid. Between the grid and the anode, a small reverse bias V_retard (~ 1–2 V) prevents low-energy electrons from reaching the anode.

Electrons that have not lost energy in inelastic collisions have kinetic energy K = e (V_grid − V_retard) when they reach the anode (approximately; the actual energy depends on the contact potential and the geometry). If the electron energy is less than the first excitation energy of mercury (4.9 eV), the electron can reach the anode (after overcoming V_retard), and the current is high.

When the electron energy reaches 4.9 eV, an inelastic collision can excite a mercury atom: the electron loses 4.9 eV, the atom is excited to the 6s6p ¹P₁ state, and the electron no longer has enough energy to overcome V_retard. The current drops.

As V_grid increases further, the electrons regain enough energy between collisions to excite another atom. At V_grid ≈ 9.8 V, an electron can excite one atom near the cathode (losing 4.9 eV), regain 4.9 eV from the field, and excite another atom near the grid (losing another 4.9 eV). The current peaks again as more electrons reach the anode.

The peaks are spaced by ~ 4.9 V, the first excitation energy of mercury. The corresponding emission line is the 253.7 nm UV line (h c / 4.9 eV = 253.7 nm), emitted when the excited mercury atoms decay.

### Theory: Mercury Energy Levels

The first excited state of mercury is the 6s6p ¹P₁ state at 4.886 eV above the ground state. The decay to the ground state is by emission of a 253.7 nm photon. The next excited state (6s6p ³P₀) is at 4.667 eV, but the transition from the ground state is forbidden by the selection rules (ΔS = 0 for electric dipole transitions). The 4.886 eV state decays rapidly (~ 1.3 ns lifetime) by emission of 253.7 nm radiation; this is the line observed in low-pressure mercury lamps and in the Franck-Hertz experiment.

### Apparatus

- Franck-Hertz tube (mercury-filled, with cathode, grid, and anode; typically mounted in a temperature-controlled oven).
- Variable DC voltage supply (0–60 V) for the grid.
- Fixed reverse-bias supply (~ 1.5 V) for the anode.
- Ammeter or electrometer (to measure the anode current, typically 10 nA to 10 μA).
- Filament supply (to heat the cathode; 6.3 V at a few amps).
- Temperature controller (to maintain the tube at 180–200 °C).
- Oscilloscope (optional; for displaying the I-V curve in real time).
- Safety glasses; UV-protective eyewear if the tube emits 253.7 nm radiation.

### Procedure

1. **Set up the apparatus** according to the manufacturer's instructions. Allow the tube to reach operating temperature (typically 10–20 minutes for the oven to stabilise).
2. **Set V_retard** to ~ 1.5 V (or per the manufacturer's recommendation).
3. **Set V_grid** to 0 V. Measure the anode current I. (It should be small or zero.)
4. **Sweep V_grid** from 0 to 60 V in 0.5 V steps. Record I at each step.
5. **Plot I against V_grid.** Identify the peaks (local maxima) and troughs (local minima). Measure the spacing of the peaks.
6. **Repeat** with a different V_retard to verify the result is independent of V_retard (the peak spacing is fixed at 4.9 V, set by the mercury excitation energy).

### Analysis

For a clean I-V curve, the peak-to-peak spacing should be 4.9 V (for mercury) or ~ 19 V (for neon, which has a higher first excitation energy). The peak spacing is the first excitation energy divided by e.

The first peak (at V_grid ≈ 4.9 V) corresponds to the first inelastic collision near the grid. The second peak (at V_grid ≈ 9.8 V) corresponds to two inelastic collisions (one near the cathode, one near the grid). The third peak is at 14.7 V, and so on.

A more careful analysis: the I-V curve is periodic in V_grid, with period 4.9 V. The first peak may not be exactly at 4.9 V; the contact potential and the geometry shift it. The peak-to-peak spacing is more reliable than the absolute position of the first peak.

### Sources of Error

- **Contact potential.** A small contact potential (~ 0.5–1 V) shifts the absolute position of the peaks. It is the same for all peaks, so the peak-to-peak spacing is unaffected.
- **Tube temperature.** The mercury vapour pressure depends on the tube temperature. At low temperature, there are too few atoms to produce visible peaks; at high temperature, the mean free path is too short and the peaks are washed out. The optimum is ~ 180 °C.
- **V_retard.** If V_retard is too small, the troughs are not deep (low-energy electrons still reach the anode). If V_retard is too large, the peaks are at higher V_grid and may be hard to distinguish.
- **Electron energy distribution.** The electrons emitted from the cathode have a distribution of energies (Maxwell-Boltzmann, ~ 0.2 eV wide). This blurs the peaks; a sharper distribution gives sharper peaks.
- **Oscilloscope display.** A digital scope with averaging can give a cleaner curve than a single sweep.

## Key Ideas

- The Franck-Hertz experiment: electrons in mercury vapour show I-V peaks spaced by 4.9 V.
- The peak spacing equals the first excitation energy of mercury (4.9 eV).
- The corresponding emission line is at 253.7 nm (UV).
- The experiment is the first direct measurement of atomic excitation energies.
- The current drops at the peak because the electrons lose energy in inelastic collisions.

## Worked Examples

### Example 1: Reading the I-V curve

You record the I-V curve for a mercury Franck-Hertz tube:

| V_grid (V) | I (nA) |
|-----------:|-------:|
| 0 | 0 |
| 1 | 5 |
| 2 | 20 |
| 3 | 50 |
| 4 | 90 |
| 4.9 | 100 (peak 1) |
| 5.5 | 50 |
| 6 | 25 |
| 7 | 15 |
| 8 | 30 |
| 9 | 70 |
| 9.8 | 95 (peak 2) |
| 10.5 | 50 |
| ... | ... |
| 14.7 | 90 (peak 3) |

The peaks are at 4.9, 9.8, 14.7 V. The peak-to-peak spacing is 4.9 V, corresponding to the first excitation energy of mercury.

### Example 2: First excitation energy

From the peak spacing, E_1 = e × 4.9 V = 4.9 eV = 7.85 × 10⁻¹⁹ J. The corresponding wavelength is

λ = h c / E = 6.626 × 10⁻³⁴ · 3 × 10⁸ / 7.85 × 10⁻¹⁹ = 2.53 × 10⁻⁷ m = 253 nm.

This is the mercury 253.7 nm UV line, the same line observed in low-pressure mercury lamps.

### Example 3: Neon tube

A neon Franck-Hertz tube shows peak spacing of ~ 19 V. The first excitation energy of neon is

E_1 = 19 eV = 3.04 × 10⁻¹⁸ J.

The corresponding wavelength is

λ = h c / E = 6.626 × 10⁻³⁴ · 3 × 10⁸ / 3.04 × 10⁻¹⁸ = 6.54 × 10⁻⁸ m = 65.4 nm.

This is a deep UV line, not visible. The neon visible lines (red, orange) are transitions between higher excited states.

## Common Misconceptions

- **"The Franck-Hertz experiment directly measures the photon energy."** It measures the electron energy lost in an inelastic collision, which is the atom's excitation energy. The photon is emitted when the atom decays; the photon energy equals the excitation energy.
- **"The I-V curve is a single peak."** It is a series of peaks, spaced by the first excitation energy. The first peak is at V_grid = 4.9 V; subsequent peaks are at 9.8, 14.7, 19.6 V, etc.
- **"The Franck-Hertz experiment is the same as the photoelectric effect."** They are related (both involve electron-atom energy transfer) but different. The photoelectric effect is electron emission from a metal; the Franck-Hertz experiment is electron energy loss in an inelastic collision with a free atom.
- **"The mercury atom can absorb any amount of energy."** It can only absorb discrete amounts corresponding to the differences between its energy levels. The first excited state is at 4.886 eV; the next at 5.461 eV; etc. The Franck-Hertz experiment shows the first excitation directly.
- **"The 253.7 nm line is the only mercury line."** Mercury has many lines: 253.7, 365, 404.7, 435.8, 491.6, 546.1, 577–579 nm, and more. The 253.7 nm line is the resonance line (the transition from the first excited state to the ground state).

## Connections

- **Quantum Mechanics (Sem 4 theory).** The Franck-Hertz experiment was the first direct confirmation of the Bohr model's prediction of quantised atomic energy levels. It launched the experimental study of atomic physics.
- **Spectroscopy.** The Franck-Hertz result is consistent with the mercury emission spectrum: the 253.7 nm line is the dominant feature in low-pressure mercury lamps.
- **History of physics.** James Franck and Gustav Hertz received the 1925 Nobel Prize in Physics for this experiment. It was one of the first experiments to provide direct evidence for the quantum nature of atoms.
- **Lasers.** The Franck-Hertz principle is the basis of the helium-neon laser: electrons accelerated in a He-Ne discharge excite He atoms, which transfer their energy to Ne atoms by resonant collisions, and the Ne atoms emit laser light at 632.8 nm.
- **Plasma physics.** In a plasma, electrons collide with atoms and ions, exciting and ionising them. The Franck-Hertz experiment is the prototype for understanding electron-atom collisions in plasmas.

## Quick Check

1. What is the first excitation energy of mercury? Of neon?
2. Why does the I-V curve show peaks at 4.9 V, 9.8 V, 14.7 V?
3. What is the wavelength of the photon emitted when a mercury atom decays from the first excited state to the ground state?
4. Why is the tube heated to ~ 180 °C?
5. Why is V_retard applied between the grid and the anode?
6. What is the role of the contact potential in the I-V curve?
7. A Franck-Hertz tube shows peaks at 5.0, 9.9, 14.8 V. What is the first excitation energy of the gas?
8. Why is the first peak not at 0 V?

## Takeaway

The Franck-Hertz experiment is the lab's direct measurement of atomic excitation energies. The peaks in the I-V curve, spaced by 4.9 V for mercury, are the signature of the quantised energy levels of the atom. The corresponding 253.7 nm UV line is the photon emitted when the excited atom decays. The experiment is the historical companion to the Bohr model: Franck and Hertz provided the experimental evidence, Bohr provided the theoretical framework. The same physics governs the operation of mercury lamps, fluorescent tubes, and gas lasers. The lab's discipline — careful temperature control, accurate voltage sweep, clean I-V curve, identification of peaks — is the same discipline that runs through every experiment in atomic physics.
