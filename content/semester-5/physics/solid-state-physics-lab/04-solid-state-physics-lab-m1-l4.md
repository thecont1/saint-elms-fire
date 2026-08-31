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
lessonId: solid-state-physics-lab-m1-l4
lessonName: Magnetic Susceptibility and the Curie-Weiss Law
lessonNumber: 4
moduleNumber: 1
semesterNumber: 5
difficulty: advanced
estimatedStudyMinutes: 50
releaseOrder: 4
prerequisites:
  - solid-state-physics-lab-m1-l3
learningObjectives:
  - Measure the magnetic susceptibility of a paramagnetic or ferromagnetic sample using a magnetometer.
  - Verify the Curie-Weiss law for a paramagnet: χ = C / (T − θ).
  - Determine the Curie temperature of a ferromagnetic sample from the susceptibility-vs-temperature curve.
concepts:
  - Magnetic susceptibility
  - Diamagnetism
  - Paramagnetism
  - Ferromagnetism
  - Curie law
  - Curie-Weiss law
  - Curie temperature
  - Hysteresis loop
  - SQUID magnetometer
tags:
  - physics
  - laboratory
  - solid-state
  - magnetism
  - curie
  - susceptibility
sourceType: authored-courseware
assessmentHints:
  - Curie law: χ = C / T (for paramagnets above the Curie temperature).
  - Curie-Weiss law: χ = C / (T − θ), where θ is the Weiss temperature (positive for ferromagnets above T_C).
  - Ferromagnetic transition: χ diverges at T = T_C.
status: in-review
***

# Magnetic Susceptibility and the Curie-Weiss Law

## Overview

The magnetic susceptibility χ is the ratio of the magnetisation M to the applied magnetic field H: M = χ H. For diamagnets (e.g. copper, water, bismuth), χ is small and negative (~ − 10⁻⁵). For paramagnets (e.g. aluminium, platinum, oxygen), χ is small and positive (~ 10⁻³ to 10⁻⁵), and depends on temperature as χ = C / T (Curie law). For ferromagnets (e.g. iron, cobalt, nickel), χ is large and positive (~ 10³ to 10⁵) below the Curie temperature T_C, and follows the Curie-Weiss law χ = C / (T − T_C) above T_C.

This lesson covers the apparatus (a magnetometer — Faraday balance, vibrating sample magnetometer (VSM), or SQUID — a sample, a temperature controller), the procedure (measure the magnetisation as a function of applied field and temperature), the analysis (Curie law for paramagnets, Curie-Weiss law for ferromagnets above T_C, hysteresis loop for ferromagnets below T_C), and the dominant sources of error (sample alignment, demagnetisation factor, temperature measurement).

## Learning Path

1. **Set up the magnetometer** — Faraday balance, VSM, or SQUID. Calibrate with a known sample (e.g. nickel, with a known saturation magnetisation).
2. **Mount the sample** — a small piece of the material (a few mg for SQUID, ~ 100 mg for VSM, ~ 1 g for Faraday balance).
3. **Measure the magnetisation vs applied field** at a fixed temperature (e.g. room temperature). For a paramagnet, M is linear in H; for a ferromagnet, M saturates at high H.
4. **Measure the magnetisation vs temperature** at a fixed field (e.g. 0.1 T). For a paramagnet, M decreases with T; for a ferromagnet, M drops sharply at T_C.
5. **Fit the temperature dependence** to the Curie or Curie-Weiss law. Extract C and θ.

## Core Explanation

### Theory: Magnetic Susceptibility

The magnetic susceptibility χ is defined by M = χ H, where M is the magnetisation (magnetic moment per unit volume) and H is the applied magnetic field. In SI units, χ is dimensionless. In CGS units, χ_SI = 4π χ_CGS.

Diamagnets have χ < 0 (small, ~ − 10⁻⁵). The diamagnetic response is a quantum mechanical effect (Larmor precession of the electron orbits) that is present in all materials but is usually masked by stronger paramagnetic or ferromagnetic responses.

Paramagnets have χ > 0 (small, ~ 10⁻⁵ to 10⁻³). The paramagnetic response is due to unpaired electron spins; the magnetisation follows Curie's law:

χ = C / T,

where C is the Curie constant. The law applies in the limit of non-interacting spins at high temperature (k_B T ≫ μ_B B, where μ_B is the Bohr magneton).

Ferromagnets have χ > 0 (very large, ~ 10³ to 10⁵) below the Curie temperature T_C. The magnetisation is non-zero even in the absence of an applied field (spontaneous magnetisation). Above T_C, a ferromagnet becomes a paramagnet and follows the Curie-Weiss law:

χ = C / (T − T_C).

### Theory: Curie-Weiss Law

The Curie-Weiss law is

χ = C / (T − θ),

where θ is the Weiss temperature. For ferromagnets, θ = T_C (the Weiss temperature equals the Curie temperature). For antiferromagnets, θ < 0 (the Weiss temperature is negative).

A plot of 1/χ (y) against T (x) is a straight line with slope 1/C and intercept θ / C. The intercept on the T-axis is θ.

### Theory: Hysteresis Loop

A ferromagnet below T_C exhibits hysteresis: the magnetisation depends on the history of the applied field. The hysteresis loop is a plot of M (y) against H (x). The key parameters are:

- **Saturation magnetisation M_s:** the value of M at high H.
- **Remanent magnetisation M_r:** the value of M at H = 0 after the sample has been magnetised.
- **Coercive field H_c:** the value of H at which M = 0 (after the sample has been magnetised in the opposite direction).

A "hard" ferromagnet has a wide hysteresis loop (large H_c); a "soft" ferromagnet has a narrow loop (small H_c).

### Apparatus

- Magnetometer: Faraday balance (uses the force on a sample in a non-uniform field), vibrating sample magnetometer (VSM; measures the voltage induced by the oscillating sample), or SQUID (superconducting quantum interference device; the most sensitive, measures ~ 10⁻⁸ emu).
- Sample: a paramagnet (e.g. Gd₂O₃, CuSO₄·5H₂O) or a ferromagnet (e.g. Ni, Fe, Co).
- Temperature controller (a cryostat for low T; a heater stage for high T; a silicon diode or a thermocouple for thermometry).
- Power supply for the electromagnet.
- Safety glasses.

### Procedure

1. **Set up the magnetometer** according to the manufacturer's instructions. Calibrate with a known sample (e.g. a nickel standard with a known M_s = 485 emu/g at room temperature).
2. **Mount the sample** in the magnetometer. The sample mass should be measured to ± 0.1 mg.
3. **Measure the magnetisation vs applied field at a fixed temperature** (e.g. room temperature). Sweep H from − 1 T to + 1 T in 0.01 T steps. Record M at each step. This gives the hysteresis loop.
4. **Measure the magnetisation vs temperature at a fixed field** (e.g. H = 0.1 T). Cool the sample to low T (e.g. 80 K); record M. Heat the sample to high T (e.g. 400 K for a ferromagnet); record M. The Curie temperature is the temperature at which M drops sharply.
5. **Fit the data** to the Curie law (paramagnet) or Curie-Weiss law (ferromagnet above T_C).

### Analysis

#### Curie Law for a Paramagnet

A plot of 1/χ (y) against T (x) is a straight line through the origin with slope 1/C. The Curie constant is C = χ T.

For CuSO₄·5H₂O at room temperature, χ ≈ 1.5 × 10⁻⁷ m³/mol (SI) or 1.2 × 10⁻² cm³/mol (CGS). The effective magnetic moment is μ_eff = √(3 k_B C / N_A) ≈ 1.9 μ_B, consistent with one unpaired electron (S = 1/2, μ = 1.73 μ_B).

#### Curie-Weiss Law for a Ferromagnet Above T_C

A plot of 1/χ (y) against T (x) is a straight line with slope 1/C and intercept θ / C. The Weiss temperature θ equals T_C (within a few per cent for a typical ferromagnet).

For nickel, T_C = 627 K. For iron, T_C = 1043 K. For cobalt, T_C = 1388 K.

#### Hysteresis Loop for a Ferromagnet Below T_C

A plot of M (y) against H (x). The loop should be symmetric about the origin. From the loop, read M_s, M_r, and H_c.

For a soft ferromagnet (e.g. iron): M_s ≈ 1700 emu/cm³, M_r ≈ 1000 emu/cm³, H_c ≈ 1 Oe.
For a hard ferromagnet (e.g. Nd₂Fe₁₄B): M_s ≈ 1300 emu/cm³, M_r ≈ 1250 emu/cm³, H_c ≈ 10000 Oe.

### Sources of Error

- **Sample alignment.** The sample should be aligned with the applied field. A misalignment reduces the apparent magnetisation by a geometric factor.
- **Demagnetisation factor.** The internal field in the sample is H_internal = H_applied − N M, where N is the demagnetisation factor (depends on the sample shape). For a long thin sample aligned with H, N ≈ 0; for a flat plate perpendicular to H, N ≈ 1.
- **Temperature measurement.** The sample temperature may differ from the sensor temperature, especially during heating. Use a calibrated sensor close to the sample.
- **Background signal.** The sample holder and the magnetometer components may have a magnetic signal. Subtract the background (measured without the sample).
- **Hysteresis loop drift.** The hysteresis loop can drift with time (e.g. due to temperature changes or to magnetic relaxation in the sample). Multiple loops should be consistent.

## Key Ideas

- Diamagnets: χ < 0, small (~ − 10⁻⁵).
- Paramagnets: χ > 0, small (~ 10⁻⁵ to 10⁻³), χ = C / T (Curie law).
- Ferromagnets: χ > 0, large (~ 10³ to 10⁵) below T_C, χ = C / (T − T_C) above T_C (Curie-Weiss law).
- Hysteresis loop: M vs H. Key parameters: M_s, M_r, H_c.
- Magnetometers: Faraday balance, VSM, SQUID.

## Worked Examples

### Example 1: Paramagnet — CuSO₄·5H₂O

A sample of CuSO₄·5H₂O (M = 249.7 g/mol) is measured at T = 300 K in a field of H = 0.5 T. The magnetisation is M = 2.5 emu/g.

χ = M / H = 2.5 / 5000 = 5 × 10⁻⁴ emu/(g·Oe) = 6.3 × 10⁻⁷ m³/mol (SI).

The Curie constant: C = χ T = 6.3 × 10⁻⁷ · 300 = 1.89 × 10⁻⁴ m³·K/mol (SI) = 0.015 cm³·K/mol (CGS).

The effective magnetic moment: μ_eff = √(3 k_B C / N_A) = √(3 · 1.38 × 10⁻²³ · 1.89 × 10⁻⁴ / 6.02 × 10²³) = √(1.3 × 10⁻⁵⁰) = 1.14 × 10⁻²⁵ J/T = 1.95 μ_B.

This is consistent with one unpaired electron (μ = √3 μ_B for S = 1/2, or 1.73 μ_B; the small discrepancy is due to the orbital contribution).

### Example 2: Ferromagnet — Nickel

A nickel sample is measured at several temperatures in a field of H = 0.1 T. The magnetisation is:

| T (K) | M (emu/g) | 1/χ (g/(emu·Oe)) |
|------:|----------:|------------------:|
| 300 | 50.0 | 200 |
| 400 | 30.0 | 333 |
| 500 | 15.0 | 667 |
| 550 | 8.0 | 1250 |
| 600 | 3.0 | 3333 |
| 620 | 1.0 | 10000 |
| 625 | 0.5 | 20000 |

A linear fit of 1/χ (y) against T (x) for T > 600 K gives slope ≈ 1/C and intercept θ / C ≈ T_C. Extrapolating, the intercept is at T ≈ 627 K, which is the Curie temperature of nickel.

### Example 3: Hysteresis loop

A hysteresis loop of iron is measured. The loop has M_s = 1700 emu/cm³, M_r = 1000 emu/cm³, H_c = 1 Oe. The squareness ratio M_r / M_s = 0.59. This is typical of a soft ferromagnet.

## Common Misconceptions

- **"Diamagnets are repelled by magnets, paramagnets are attracted."** Diamagnets are weakly repelled; paramagnets are weakly attracted; ferromagnets are strongly attracted. The sign of χ determines the direction of the force.
- **"The Curie temperature is the temperature at which the magnetisation disappears."** It is the temperature at which the spontaneous magnetisation disappears (for a ferromagnet in zero field). In an applied field, the magnetisation persists above T_C, but it is no longer spontaneous.
- **"The hysteresis loop is the same for all ferromagnets."** No. The shape and size of the loop depend on the material's microstructure, the grain size, the defects, and the temperature. A "hard" ferromagnet has a wide loop (high H_c); a "soft" ferromagnet has a narrow loop (low H_c).
- **"The magnetic susceptibility is the same in SI and CGS units."** No. χ_SI = 4π χ_CGS. The conversion factor is 4π ≈ 12.57.
- **"A SQUID is the same as a VSM."** A SQUID (Superconducting Quantum Interference Device) is the most sensitive magnetometer (resolution ~ 10⁻⁸ emu); a VSM is less sensitive (~ 10⁻⁵ emu) but works at higher temperatures and in higher fields. A Faraday balance is the least sensitive but simplest.

## Connections

- **Solid State Physics (Sem 5 theory).** Magnetism is one of the central phenomena in solid-state physics. The Curie-Weiss law is the high-temperature limit of the Heisenberg model; the low-temperature behaviour (spontaneous magnetisation, spin waves) is more complex.
- **Materials science.** Magnetic materials are critical for many applications: transformer cores (soft ferromagnets), permanent magnets (hard ferromagnets), magnetic recording (medium-coercivity ferromagnets), magnetic refrigeration (paramagnetic salts). The hysteresis loop is the central characterisation.
- **Engineering.** Magnetic sensors (Hall effect sensors, magnetoresistive sensors, SQUIDs), magnetic recording (hard disks, magnetic tape), and electric motors all rely on the magnetic properties of materials.
- **Medicine.** Magnetic resonance imaging (MRI) uses the magnetic moment of the proton (a nuclear spin) to image the body. The signal is detected by a SQUID or a similar sensitive magnetometer.
- **Geophysics.** The Earth's magnetic field is maintained by dynamo action in the liquid iron outer core. The same magnetohydrodynamics governs the magnetic fields of the Sun and other stars.

## Quick Check

1. Define the magnetic susceptibility. What are its units in SI? In CGS?
2. State the Curie law. For a paramagnet, what is the temperature dependence of χ?
3. State the Curie-Weiss law. For a ferromagnet, what is the relationship between θ and T_C?
4. What is the Curie temperature of iron? Of nickel? Of cobalt?
5. Sketch a hysteresis loop. Label M_s, M_r, and H_c.
6. A sample has M = 10 emu/g in a field H = 1000 Oe. What is χ in CGS units? In SI units?
7. Why does the hysteresis loop depend on the sample's microstructure?
8. A student reports M = 0 at T > T_C in zero applied field. Is this correct?

## Takeaway

The magnetic susceptibility is the lab's introduction to solid-state magnetism. The Curie law, the Curie-Weiss law, and the hysteresis loop are the three central concepts. The lab's discipline — careful sample preparation, accurate temperature control, proper calibration of the magnetometer, correct analysis of the temperature and field dependence — is the same discipline that runs through every magnetic measurement in solid-state physics, materials science, and engineering. The same physics, scaled up, governs the magnetic properties of the Earth's core, the Sun's magnetic field, and the magnetic fields of galaxies.
