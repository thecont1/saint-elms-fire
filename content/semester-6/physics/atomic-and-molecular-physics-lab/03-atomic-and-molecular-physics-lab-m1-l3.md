***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-6
semesterName: Semester 6
subjectId: physics
subjectName: Physics
courseId: atomic-and-molecular-physics-lab
courseName: Atomic and Molecular Physics Lab
moduleId: atomic-and-molecular-physics-lab-module-1
moduleName: Atomic Spectroscopy, Lasers, and Molecular Physics
lessonId: atomic-and-molecular-physics-lab-m1-l3
lessonName: Lasers — He-Ne, Diode, and Mode Structure
lessonNumber: 3
moduleNumber: 1
semesterNumber: 6
difficulty: advanced
estimatedStudyMinutes: 50
releaseOrder: 3
prerequisites:
  - atomic-and-molecular-physics-lab-m1-l2
learningObjectives:
  - Set up a He-Ne laser and a diode laser; measure the output power and the beam profile.
  - Observe the longitudinal mode structure of a laser with a Fabry-Perot etalon; measure the mode spacing.
  - Characterise the laser linewidth, the polarisation, and the coherence length.
concepts:
  - Laser
  - He-Ne laser
  - Diode laser
  - Population inversion
  - Stimulated emission
  - Optical cavity
  - Longitudinal modes
  - Transverse modes
  - Linewidth
  - Coherence length
  - Polarisation
tags:
  - physics
  - laboratory
  - laser
  - he-ne
  - diode
  - cavity
sourceType: authored-courseware
assessmentHints:
  - He-Ne laser: 632.8 nm (red), 1-10 mW output, longitudinal mode spacing c / (2 L) = 1500 / (2 · 0.25) MHz = 750 MHz for L = 0.25 m.
  - Diode laser: 635-1550 nm, 1-100 mW output, longitudinal mode spacing depends on the cavity length.
  - Laser linewidth: typically 1 MHz for a He-Ne, 100 kHz for a diode, 1 Hz for a stabilised laser.
status: in-review
***

# Lasers — He-Ne, Diode, and Mode Structure

## Overview

A laser (Light Amplification by Stimulated Emission of Radiation) is a device that produces a coherent, monochromatic, collimated beam of light. The laser medium is excited to a population inversion by pumping; the spontaneous emission is amplified by stimulated emission in an optical cavity. The output is a beam with a narrow linewidth, a long coherence length, and a low divergence.

The He-Ne laser and the diode laser are the two most common lasers in the lab. The He-Ne laser is a gas laser with a wavelength of 632.8 nm (red) and a power of 1-10 mW. The diode laser is a semiconductor laser with a wavelength in the visible (635-690 nm) or near-infrared (780-1550 nm) and a power of 1-100 mW. Both have longitudinal mode structures determined by the cavity length; both can be characterised with a Fabry-Perot etalon.

This lesson covers the apparatus (a He-Ne laser, a diode laser, a Fabry-Perot etalon, a power meter, a beam profiler, a polariser), the procedure (measure the output power, the beam profile, the longitudinal modes, the polarisation, the linewidth), the analysis (compute the mode spacing, the linewidth, the coherence length), and the dominant sources of error (mode hopping, polarisation drift, thermal effects).

## Learning Path

1. **Set up the He-Ne laser.** Mount the laser; turn on the power supply; allow the laser to warm up (10-15 minutes).
2. **Measure the output power.** Use a power meter to measure the output power. Verify the rated power (1-10 mW).
3. **Measure the beam profile.** Use a beam profiler or a knife-edge measurement to determine the beam waist and the divergence.
4. **Observe the longitudinal modes.** Use a Fabry-Perot etalon to observe the mode structure. The mode spacing is Δν = c / (2 L), where L is the cavity length.
5. **Measure the polarisation.** Use a polariser to verify the linear polarisation of the He-Ne laser.
6. **Repeat for the diode laser.** The diode laser is similar but with different wavelengths, powers, and mode structures.

## Core Explanation

### Theory: Laser Operation

A laser consists of three components: the gain medium, the pump, and the optical cavity. The gain medium is excited by the pump to a population inversion. The spontaneous emission in the gain medium is amplified by stimulated emission as it passes through the medium. The optical cavity (two parallel mirrors) provides the feedback: light is reflected back and forth through the gain medium, amplified on each pass. A small fraction of the light is transmitted through one of the mirrors (the output coupler) and forms the laser beam.

The condition for lasing is that the gain exceeds the losses (including the output coupling, the absorption in the medium, and the scattering at the mirrors). The threshold pump power is the minimum pump power at which the gain equals the losses.

### Theory: Longitudinal Modes

The optical cavity supports standing waves at specific frequencies. The resonant frequencies are

ν_m = m c / (2 n L), m = 1, 2, 3, ...

where n is the refractive index of the medium, L is the cavity length, and m is the order. The frequency difference between adjacent modes is the mode spacing:

Δν = c / (2 n L).

For a He-Ne laser with L = 0.25 m and n ≈ 1, Δν = 3 × 10⁸ / (2 · 0.25) = 600 MHz. The gain bandwidth of the He-Ne laser is ~ 1.5 GHz, so 2-3 longitudinal modes can oscillate simultaneously.

The mode structure can be observed with a Fabry-Perot etalon. The etalon's free spectral range must be larger than the gain bandwidth, and the resolution must be smaller than the mode spacing. For a He-Ne laser (Δν = 600 MHz), a Fabry-Perot with FSR > 1.5 GHz and resolution < 100 MHz is suitable. For d = 10 cm, FSR = 1.5 GHz; for R = 0.95, finesse = 60, resolution = 25 MHz — sufficient.

### Theory: Transverse Modes

In addition to the longitudinal modes, the cavity supports transverse modes (TEM_{mn}). The fundamental mode TEM_{00} has a Gaussian beam profile; the higher-order modes have more complex profiles (TEM_{01}, TEM_{11}, etc.). The transverse modes are determined by the cavity geometry and the alignment.

For most applications, the laser is operated in the TEM_{00} mode. The beam waist w_0 and the divergence θ are related by

w_0 · θ = λ / π.

For a He-Ne laser with w_0 = 0.5 mm, θ = 632.8 × 10⁻⁹ / (π · 0.5 × 10⁻³) = 0.4 mrad. The beam expands to ~ 10 mm at 25 m.

### Theory: Linewidth

The linewidth of a laser is set by the Schawlow-Townes formula:

Δν = (h ν / (2 P)) · (Δν_cavity)²,

where P is the output power and Δν_cavity is the cavity linewidth (set by the mirror losses and the cavity length). For a He-Ne laser with P = 1 mW and Δν_cavity = 1 MHz, Δν ≈ 10⁻³ Hz. In practice, the linewidth is broadened by technical noise (vibrations, temperature drift) to ~ 1 kHz-1 MHz. A stabilised laser (e.g. locked to a molecular line) can have a linewidth of ~ 1 Hz.

### Theory: Coherence Length

The coherence length is the propagation distance over which the laser maintains a fixed phase. It is related to the linewidth by

L_coherence = c / Δν.

For a He-Ne laser with Δν = 1 MHz, L_coherence = 300 m. For a diode laser with Δν = 100 kHz, L_coherence = 3 km. For a stabilised laser with Δν = 1 Hz, L_coherence = 3 × 10⁸ m (the distance from the Earth to the Moon).

### Apparatus

- He-Ne laser (1-10 mW, 632.8 nm, linearly polarised).
- Diode laser (1-100 mW, 635-690 nm or 780-1550 nm, possibly with a collimating lens).
- Fabry-Perot etalon (FSR > 1.5 GHz, finesse > 50).
- Power meter (silicon photodiode with a calibration at the laser wavelength).
- Beam profiler or knife-edge measurement.
- Polariser (to verify the polarisation).
- Safety glasses (laser safety: OD > 3 at the laser wavelength).

### Procedure

1. **Set up the laser.** Mount the laser on an optical breadboard. Turn on the power supply. Allow the laser to warm up (10-15 minutes for He-Ne; 1-2 minutes for diode).
2. **Measure the output power.** Place the power meter in the beam. Record the power. Compare with the rated power.
3. **Measure the beam profile.** Use a beam profiler or a knife-edge to measure the beam waist and the divergence. For a Gaussian beam, the beam waist is at the output coupler; the beam expands as it propagates.
4. **Observe the longitudinal modes.** Set up the Fabry-Perot etalon; align the laser beam with the etalon. Scan the etalon (by changing the spacing or the angle) and observe the mode structure. The mode spacing is Δν = c / (2 L); the number of modes is the gain bandwidth divided by the mode spacing.
5. **Measure the polarisation.** Place a polariser in the beam; rotate the polariser and measure the transmitted power. The transmitted power should follow Malus's law (cos² θ).
6. **Measure the linewidth.** Use a scanning Fabry-Perot or a heterodyne beat-note measurement. The linewidth is the FWHM of the mode peak.

### Analysis

#### He-Ne Mode Spacing

For a He-Ne laser with L = 0.25 m, Δν = c / (2 L) = 3 × 10⁸ / 0.5 = 600 MHz. The gain bandwidth is ~ 1.5 GHz, so 2-3 longitudinal modes can oscillate.

#### Diode Laser Mode Structure

A diode laser has a shorter cavity (~ 1 mm for a Fabry-Perot diode, ~ 0.1 mm for a DFB diode). The mode spacing is Δν = c / (2 n L) = 3 × 10⁸ / (2 · 3.5 · 10⁻⁴) = 4.3 × 10¹¹ Hz = 430 GHz. The gain bandwidth is ~ 10 THz, so many modes oscillate. A Fabry-Perot etalon with a high FSR (e.g. 100 GHz) can select a single mode.

#### Beam Divergence

For a He-Ne laser with w_0 = 0.5 mm, the divergence is θ = λ / (π w_0) = 0.4 mrad. At a distance of 10 m, the beam diameter is 2 w_0 + 2 θ · 10 m = 1 mm + 8 mm = 9 mm.

#### Coherence Length

For a He-Ne laser with Δν = 1 MHz, L_coherence = 3 × 10⁸ / 10⁶ = 300 m. For a diode laser with Δν = 100 kHz, L_coherence = 3 × 10⁸ / 10⁵ = 3000 m.

### Sources of Error

- **Mode hopping.** The laser modes can hop as the cavity length changes (due to temperature drift). The mode structure is not stable over long time scales.
- **Polarisation drift.** The polarisation of the laser can drift over time, especially for diode lasers. A polarisation-maintaining fibre can be used to fix the polarisation.
- **Thermal effects.** The cavity length changes with temperature, shifting the modes. A temperature-stabilised laser (with a thermal enclosure) has a more stable mode structure.
- **Beam pointing stability.** The beam direction can drift over time, especially for diode lasers. A beam stabilisation system can be used.
- **Power drift.** The output power can drift over time, especially for diode lasers. A power stabilisation system (with a photodiode and a feedback loop) can be used.

## Key Ideas

- Laser: gain medium + pump + optical cavity. Population inversion + stimulated emission.
- Longitudinal modes: Δν = c / (2 n L). For He-Ne, Δν = 600 MHz; for diode, Δν = 100 GHz.
- Transverse modes: TEM_{mn}. TEM_{00} is the Gaussian fundamental mode.
- Linewidth: Δν = (h ν / (2 P)) · (Δν_cavity)². Typically 1 kHz-1 MHz for a free-running laser.
- Coherence length: L_coherence = c / Δν. Typically 1-1000 m for a free-running laser.

## Worked Examples

#### Example 1: He-Ne Mode Spacing

For a He-Ne laser with L = 0.25 m, the mode spacing is Δν = c / (2 L) = 600 MHz. The free spectral range of the Fabry-Perot etalon must be > 1.5 GHz (the gain bandwidth) to avoid mode overlap. For d = 10 cm, FSR = c / (2 d) = 1.5 GHz — exactly at the limit.

#### Example 2: Diode Laser Mode Hopping

A diode laser with L = 1 mm and n = 3.5 has Δν = 43 GHz. The gain bandwidth is ~ 10 THz, so ~ 230 modes could oscillate. In practice, only 1-5 modes oscillate due to mode competition. Mode hopping occurs when the cavity length changes by ~ λ / 2 = 230 nm.

#### Example 3: Beam Divergence

For a He-Ne laser with w_0 = 0.5 mm, the divergence is θ = λ / (π w_0) = 632.8 nm / (π · 0.5 mm) = 0.4 mrad. At 1 m, the beam diameter is 1 mm + 0.8 mm = 1.8 mm. At 10 m, it is 1 mm + 8 mm = 9 mm.

## Common Misconceptions

- **"All lasers are the same."** Different lasers have different wavelengths, powers, linewidths, and mode structures. The He-Ne and the diode laser are the most common in the lab; other lasers (e.g. solid-state, fibre, dye) are used for specific applications.
- **"A laser is perfectly monochromatic."** No. The linewidth is finite (typically 1 kHz-1 MHz for a free-running laser). A stabilised laser (e.g. locked to a molecular line) can have a linewidth of ~ 1 Hz.
- **"A laser is perfectly collimated."** No. A laser beam has a finite divergence (set by the diffraction limit). For a He-Ne laser, the divergence is ~ 0.4 mrad.
- **"The output power is constant."** No. The power drifts over time (due to temperature changes, mode hopping, etc.). A power stabilisation system can reduce the drift to < 0.1 %.
- **"The mode structure is stable."** No. The mode structure drifts as the cavity length changes. A temperature-stabilised laser has a more stable mode structure, but it is not perfectly stable.

## Connections

- **Atomic and Molecular Physics (Sem 6 theory).** Lasers are essential tools for atomic and molecular physics: laser cooling, laser spectroscopy, optical pumping, laser-induced fluorescence. The narrow linewidth and the tunability of the laser make it possible to probe atomic and molecular transitions with high precision.
- **Optics.** Lasers are the workhorses of modern optics: interferometry, holography, lidar, optical communications, optical data storage.
- **Engineering.** Lasers are used in manufacturing (cutting, welding, 3D printing), in medicine (surgery, ophthalmology, dermatology), in telecommunications (fibre optics), and in entertainment (laser shows, projectors).
- **Astronomy (Sem 5/6).** Lasers are used in astronomy for laser guide stars (adaptive optics), for LIDAR (atmospheric studies), and for gravitational-wave detectors (LIGO, Virgo).
- **Quantum information.** Lasers are the source of single photons for quantum communication and quantum computing. The narrow linewidth and the coherence of the laser make it possible to generate single photons on demand.

## Quick Check

1. What is the mode spacing of a He-Ne laser with L = 0.25 m?
2. What is the linewidth of a free-running He-Ne laser?
3. What is the coherence length of a He-Ne laser?
4. What is the divergence of a He-Ne laser beam?
5. What is the difference between longitudinal and transverse modes?
6. What is the population inversion?
7. What is the role of the optical cavity?
8. What is mode hopping? How is it suppressed?

## Takeaway

Lasers are the lab's primary tools for high-resolution spectroscopy, interferometry, and many other applications. The He-Ne laser and the diode laser are the most common; each has its own mode structure, linewidth, and coherence. The lab's discipline — careful alignment, accurate mode characterisation, proper polarisation control, stable temperature — is the same discipline that runs through every laser application. The same physics (population inversion, stimulated emission, optical cavity) governs every laser, from the He-Ne to the diode to the free-electron laser. The laser you characterise today is the prototype of every modern coherent light source.
