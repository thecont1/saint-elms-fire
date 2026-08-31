***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-3
semesterName: Semester 3
subjectId: physics
subjectName: Physics
courseId: waves-and-optics-lab
courseName: Waves and Optics Lab
moduleId: waves-and-optics-lab-module-1
moduleName: Oscillations, Geometrical Optics, and Wave Optics
lessonId: waves-and-optics-lab-m1-l1
lessonName: Standing Waves on a String — Melde's Experiment
lessonNumber: 1
moduleNumber: 1
semesterNumber: 3
difficulty: intermediate
estimatedStudyMinutes: 50
releaseOrder: 1
prerequisites:
  - thermal-physics-lab-m1-l6
learningObjectives:
  - Produce standing waves on a stretched string and measure the wavelength for several modes.
  - Verify the relation v = √(T/μ) for the speed of a transverse wave on a string under tension.
  - Demonstrate the two modes of Melde's experiment (transverse and longitudinal) and the frequency relation between them.
concepts:
  - Travelling wave
  - Standing wave
  - Wave speed on a string
  - Resonance
  - Melde's experiment
  - Linear mass density
  - Tension
  - Harmonics
tags:
  - physics
  - laboratory
  - waves
  - standing-waves
  - melde
  - resonance
sourceType: authored-courseware
assessmentHints:
  - The wave speed v = f λ = √(T/μ). Verify by measuring v from f and λ, and comparing with √(T/μ).
  - In Melde's transverse mode, the string frequency equals the driving frequency.
  - In Melde's longitudinal mode, the string frequency is half the driving frequency (a loop corresponds to half a wavelength of the driving force).
status: in-review
***

# Standing Waves on a String — Melde's Experiment

## Overview

A stretched string, when plucked, can support a rich variety of standing-wave patterns. The simplest is the fundamental mode, with one antinode at the centre and two nodes at the fixed ends. Higher harmonics have 2, 3, 4, ... antinodes. The frequency of the n-th harmonic is f_n = (n / 2L) √(T/μ), where L is the string length, T is the tension, and μ is the linear mass density. Measure f, L, T, and the number of loops, and you can extract √(T/μ) or, conversely, verify the relation.

Melde's experiment is the lab's classic realisation: an electrically-driven tuning fork or oscillator sets the string into transverse vibration, and the tension is adjusted until the string resonates in a clean standing-wave pattern. The two modes of the experiment — transverse (string vibrates perpendicular to its length) and longitudinal (string vibrates parallel to its length via a pendulum arrangement) — give the same wave speed but different relations between the driving frequency and the string's frequency.

## Learning Path

1. **Set up the apparatus** — fix a string between a rigid end and a pulley; pass the string over the pulley and hang a mass pan for tension; attach the other end to the prong of an electrically-driven tuning fork (transverse mode) or a vibrator (longitudinal mode).
2. **Drive the fork** at its rated frequency (e.g. 50 Hz or 100 Hz).
3. **Adjust the tension** by adding masses to the pan; for each mass, observe the number of loops n in the standing-wave pattern.
4. **Verify v = √(T/μ)** — at each mass, compute the wave speed v = f (2L/n) and compare with √(T/μ).
5. **Switch to longitudinal mode** (if apparatus supports) — observe that the number of loops doubles for the same tension.
6. **Analyse** — plot v² (y) against T (x); the slope is 1/μ.

## Core Explanation

### Theory: Standing Waves on a String

A stretched string of length L, linear mass density μ, under tension T, supports transverse waves with speed

v = √(T / μ).

The string has fixed ends (nodes). The standing wave patterns occur at wavelengths λ_n = 2L / n, for n = 1, 2, 3, ... The corresponding frequencies are

f_n = v / λ_n = (n / 2L) √(T / μ).

For the fundamental (n = 1), f_1 = (1 / 2L) √(T / μ). For the second harmonic (n = 2), f_2 = (2 / 2L) √(T / μ) = 2 f_1. The frequencies are integer multiples of f_1 — the harmonic series.

### Theory: Melde's Experiment

In Melde's apparatus, an electrically-driven tuning fork (or oscillator) drives one end of the string. The driving force is sinusoidal at frequency f_drive. The string can vibrate in two modes:

- **Transverse mode.** The tuning fork vibrates perpendicular to the string; the wave on the string is transverse; the resonance condition is f_string = f_drive, and the number of loops is n = f_drive · 2L / v.

- **Longitudinal mode.** The tuning fork vibrates along the string's length (or the string is driven by a small pendulum that swings along the string's length). The driving force has a period 2/f_drive (it pushes in both directions once per cycle); the string resonates with f_string = f_drive / 2, and the number of loops is n = 2 f_drive · L / v.

In both modes, the wave speed is v = √(T/μ), and the relation between the loop count and the tension is

T = μ (2L f / n)²  (transverse) or  T = μ (2L · 2f / n)²  (longitudinal).

### Apparatus

- Melde's apparatus: a string (~ 1.5 m) fixed at one end, passing over a pulley, with a mass pan on the other end.
- Electrically-driven tuning fork (e.g. 50 Hz or 100 Hz) with a power supply.
- Set of slotted masses (10 g to 1 kg).
- Metre scale (for the string length L).
- Balance (for the string's linear mass density: weigh a known length of the string and compute μ = mass / length).
- Safety glasses.

### Procedure

1. Measure the string length L (from the tuning fork prong to the pulley) to ± 1 mm.
2. Weigh the string to determine μ. If the string is uniform, μ = mass / length.
3. Set up the tuning fork at the fixed end; clamp the string to the prong.
4. Set the driving frequency to the rated value (e.g. 50 Hz). The tuning fork should be vibrating strongly.
5. Add masses to the pan in 50 g increments, starting from a small mass. For each mass, observe the string; you should see a standing wave pattern with a clear number of loops. The tension at resonance is T = m_pan g + m_string g / 2 (the string's weight is shared between the two ends, but the dominant tension is from the pan).
6. For each mass, record the pan mass m and the number of loops n. Compute the wave speed v = 2L f / n (transverse mode). Compute the predicted speed v_pred = √(T/μ).
7. Switch to longitudinal mode (if the apparatus supports it). Repeat the measurements.

### Analysis

For each (m, n) pair:

- T = m g (in newtons).
- v_measured = 2L f / n.
- v_predicted = √(T/μ).
- Compare; they should agree within 1–3 %.

Plot v² (y) against T (x). The slope is 1/μ. A linear fit returns μ_fit = 1 / slope. Compare with the directly measured μ.

### Sources of Error

- **End correction.** The effective length of the string is from the tuning fork prong to the pulley, but the antinode is not exactly at the prong — it is slightly inside the tuning fork. The end correction is small (~ 1–2 % of L) and is usually ignored in a first lab.
- **String stiffness.** A real string is not perfectly flexible; the bending stiffness adds a small correction to the wave speed. For a typical lab string, this is < 1 %.
- **Tension non-uniformity.** The string's own weight contributes a slight tension gradient; the pan tension is approximately constant. The mass of the string should be much smaller than the pan mass for the tension to be approximately uniform.
- **Driving frequency stability.** The tuning fork's frequency depends weakly on the drive current; for a well-regulated power supply, the variation is < 1 %.
- **Loop count error.** The number of loops is an integer; a partial loop at the end of the string can be ambiguous. Use only clean patterns with whole loops.

## Key Ideas

- Standing waves on a string: nodes at fixed ends, λ_n = 2L / n, f_n = (n / 2L) √(T/μ).
- Wave speed on a string: v = √(T/μ).
- The harmonic series: f_1, 2f_1, 3f_1, ...
- Melde's transverse mode: f_string = f_drive; longitudinal mode: f_string = f_drive / 2.
- Plot v² against T to extract μ.

## Worked Examples

### Example 1: Verifying v = √(T/μ)

You have a string of L = 1.500 m, μ = 0.500 g/m = 5.0 × 10⁻⁴ kg/m. You drive it at 50 Hz in transverse mode. For each pan mass, you record the number of loops:

| m (g) | n | T (N) | v_meas (m/s) | v_pred (m/s) |
|------:|---|------:|-------------:|-------------:|
| 100 | 5 | 0.981 | 30.0 | 44.3 |
| 150 | 4 | 1.471 | 37.5 | 54.2 |
| 200 | 4 | 1.962 | 37.5 | 62.6 |
| 250 | 3 | 2.453 | 50.0 | 70.0 |
| 300 | 3 | 2.943 | 50.0 | 76.7 |

The measured speeds are systematically lower than the predicted. The discrepancy is largest at small n (high T), suggesting that the end correction or the loop count is off. For n = 3, the loop length is 1.500 / 3 = 0.500 m, and the half-wavelength is 0.500 m, giving v = 2 · 0.500 · 50 = 50 m/s. The predicted v = √(T/μ) = √(2.453 / 5 × 10⁻⁴) = √(4906) = 70.0 m/s. The 28 % discrepancy is too large for a measurement error and suggests a problem with the model.

A likely cause: the string is heavier than reported. Re-measuring μ: weigh a 5 m length of the string. If the string is actually 1 g/m, then μ = 10⁻³ kg/m, and v_pred = √(T/μ) = √(2.453 / 10⁻³) = 49.5 m/s, which matches v_meas = 50 m/s.

### Example 2: μ from the v² vs T plot

Plot v² (y) against T (x). The slope is 1/μ. From the data:

| T (N) | v_meas (m/s) | v² (m²/s²) |
|------:|-------------:|-----------:|
| 0.981 | 30.0 | 900 |
| 1.471 | 37.5 | 1406 |
| 1.962 | 37.5 | 1406 |
| 2.453 | 50.0 | 2500 |
| 2.943 | 50.0 | 2500 |

Wait, the v² values are not strictly proportional to T — the v_meas values are repeated. The reason is that the loop count n is integer, and the same n can correspond to different T (the loop count is the integer that produces a clean resonance; if the tension is off, the resonance is not clean). The data should be taken at the tensions that produce clean resonances for each n.

For the data above, the v² vs T plot has slope ~ (2500 - 900) / (2.943 - 0.981) = 1600 / 1.962 = 815 (m²/s²)/N. Hence μ = 1 / slope = 1.23 × 10⁻³ kg/m = 1.23 g/m. This is more than twice the catalog value of 0.5 g/m. The discrepancy suggests the string is heavier than catalog, or the loop count is wrong.

### Example 3: Melde's longitudinal mode

In longitudinal mode, the same string is driven at 50 Hz, but the resonance condition is f_string = f_drive / 2 = 25 Hz. The number of loops is n = 2 f_drive · L / v. For v = 50 m/s, L = 1.5 m, n = 2 · 50 · 1.5 / 50 = 3 loops. The pan mass is 250 g, and the tension is T = 2.45 N. The predicted speed is v = √(T/μ) = √(2.45 / 5 × 10⁻⁴) = 70 m/s. For the observed n = 3, the implied v = 2 · 50 · 1.5 / 3 = 50 m/s. The discrepancy is 30 %; the same string-stiffness or μ measurement issue as before.

## Common Misconceptions

- **"The wave speed on a string depends on the amplitude."** It does not (in the linear regime). The amplitude affects the energy but not the speed.
- **"Higher tension gives higher frequency, so the wavelength also increases."** Tension increases v, which increases the wavelength for a fixed frequency: λ = v / f. The frequency is set by the driver; the wavelength adjusts.
- **"A standing wave is two waves moving in opposite directions."** A standing wave is a single mode of vibration of the string; it can be decomposed into two counter-propagating travelling waves, but it is a single physical pattern with stationary nodes and antinodes.
- **"The end of the string is a node because it is fixed."** Correct. The fixed end is a node. The free end (in Melde's longitudinal mode, or in an open pipe) is an antinode.
- **"Melde's experiment verifies v = √(T/μ)."** It verifies the relationship between T, μ, f, and n. Whether the proportionality is exactly v ∝ √T depends on the accuracy of the loop count and the string parameters.

## Connections

- **Waves and Optics (Sem 3 theory).** Standing waves on a string are the simplest example of a normal mode. Every bounded vibrating system has normal modes with discrete frequencies, and the patterns are described by the boundary conditions.
- **Music.** Every musical instrument is built on standing waves: strings (guitar, piano, violin), air columns (flute, organ, trumpet), membranes (drums), bars (xylophone, marimba). The harmonic series is the basis of musical intervals and tuning.
- **Optics (next lessons).** The interference and diffraction patterns in optics are mathematically identical to the single-slit and double-slit patterns of water waves or sound waves. The wave equation is the same; the boundary conditions differ.
- **Quantum mechanics (later).** A particle in a box has wavefunctions that are standing waves in a 1D potential well. The boundary conditions are nodes at the walls; the energy levels are E_n ∝ n². The same mathematics.
- **Engineering.** Standing waves on transmission lines (coaxial cables, microstrip) are critical in RF engineering; the standing wave ratio (SWR) is a measure of impedance matching. Standing waves in laser cavities determine the laser's longitudinal modes.

## Quick Check

1. State the formula for the speed of a transverse wave on a string. Define each symbol.
2. For a string of length L, what are the wavelengths of the first three harmonics? The frequencies?
3. A string of μ = 1 g/m is under tension T = 10 N. What is the wave speed?
4. In Melde's transverse mode, the tuning fork vibrates at 50 Hz and you observe 4 loops in a 1.5 m string. What is the wave speed?
5. In Melde's longitudinal mode, the same string and tuning fork produce 8 loops. What is the wave speed? Compare with the transverse result.
6. Plot v² against T. What is the slope? What does it give you?
7. Why is the end of the string at the tuning fork not exactly a node? What is the end correction?
8. A student observes n = 2.5 loops. What does this mean? What is the most likely cause?

## Takeaway

Melde's experiment is the lab's introduction to standing waves. The relation v = √(T/μ) is the fundamental result; the harmonic series and the two modes of Melde's experiment are the practical applications. The lab's discipline — careful measurement of L, μ, T, and n; the use of integer loop counts; the comparison of v_measured and v_predicted — is the same discipline that runs through every standing-wave measurement in physics and engineering. The wave equation, the boundary conditions, and the normal modes are the three concepts to carry forward. The same mathematics governs the modes of a laser cavity, the vibrational modes of a molecule, and the energy levels of a quantum particle in a box.
