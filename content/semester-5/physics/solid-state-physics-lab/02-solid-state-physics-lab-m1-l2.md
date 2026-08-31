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
lessonId: solid-state-physics-lab-m1-l2
lessonName: Electrical Resistivity and the Four-Probe Method
lessonNumber: 2
moduleNumber: 1
semesterNumber: 5
difficulty: advanced
estimatedStudyMinutes: 50
releaseOrder: 2
prerequisites:
  - solid-state-physics-lab-m1-l1
learningObjectives:
  - Measure the electrical resistivity of a metal or semiconductor using the four-probe method.
  - Distinguish the four-probe method from the two-probe method and explain why the four-probe method is more accurate.
  - Measure the temperature dependence of the resistivity and verify the linear (metal) or activated (semiconductor) behaviour.
concepts:
  - Electrical resistivity
  - Four-probe method
  - Contact resistance
  - Sheet resistance
  - Matthiessen's rule
  - Temperature coefficient of resistance
  - Semiconductor activation energy
  - Variable-range hopping
tags:
  - physics
  - laboratory
  - solid-state
  - resistivity
  - four-probe
  - semiconductor
sourceType: authored-courseware
assessmentHints:
  - Four-probe method: current through outer probes, voltage across inner probes. Contact resistance does not affect the measurement.
  - Metal resistivity: ρ = ρ_0 (1 + α (T − T_0)), where α is the temperature coefficient (positive for metals).
  - Semiconductor resistivity: ρ ∝ exp(E_g / (2 k_B T)), where E_g is the band gap.
status: in-review
***

# Electrical Resistivity and the Four-Probe Method

## Overview

The electrical resistivity ρ of a material is the proportionality constant between the electric field E and the current density J: E = ρ J. For a wire of length L and cross-sectional area A, the resistance is R = ρ L / A. The four-probe method is the standard way to measure ρ accurately: a current is passed through the outer two probes, and the voltage is measured across the inner two probes. The contact resistance at the outer probes does not affect the voltage measurement, because the voltmeter has a high input impedance and draws negligible current.

This lesson covers the apparatus (a four-probe apparatus, a sample — metal wire, semiconductor bar, or thin film — a constant current source, a voltmeter, a cryostat or temperature-controlled stage for temperature-dependence measurements), the procedure (measure R at several temperatures; compute ρ), the analysis (linear fit for metals, exponential fit for semiconductors), and the dominant sources of error (thermometry, contact placement, sample geometry).

## Learning Path

1. **Set up the four-probe apparatus** — four collinear, equally-spaced probes on the sample; the outer two connected to a constant current source; the inner two connected to a voltmeter.
2. **Measure the voltage** as a function of the current (I-V curve). Verify linearity; compute R = V / I.
3. **Compute the resistivity** from the resistance, the probe spacing, and the sample cross-section.
4. **Measure the temperature dependence** — cool the sample (e.g. with liquid nitrogen) or heat it (with a heater); record R at several temperatures.
5. **Fit the temperature dependence** — for a metal, R = R_0 (1 + α (T − T_0)); for a semiconductor, R ∝ exp(E_g / (2 k_B T)).

## Core Explanation

### Theory: The Four-Probe Method

For a sample of length much greater than the probe spacing s, and with the four probes collinear and equally spaced, the resistance measured by the four-probe method is related to the resistivity by

R = ρ / (2 π s),

where s is the probe spacing. The formula is exact for a semi-infinite sample; for a finite sample, correction factors depend on the sample geometry.

For a thin film of thickness t (with t ≪ s ≪ film dimensions), the relevant quantity is the sheet resistance R_s = ρ / t. The four-probe measurement gives

R = (R_s / π) [ln(2) + ln(sinh(t / s))] ≈ (R_s / π) ln(2)   (for t ≪ s),

a factor that depends on the ratio t / s. For t ≪ s, the four-probe voltage is insensitive to the film thickness.

For a rectangular bar of width w and thickness t (with s ≪ w, t ≪ w), the four-probe measurement gives

R = ρ s / (w t)   (for s ≪ w, t).

### Theory: Temperature Dependence

For a metal, the resistivity at temperature T is

ρ(T) = ρ_0 (1 + α (T − T_0)),

where ρ_0 is the resistivity at T_0, and α is the temperature coefficient of resistance (positive for metals, ~ 4 × 10⁻³ K⁻¹ for copper). The linear dependence is approximate; at low temperatures, the resistivity saturates (the residual resistance).

For a semiconductor, the resistivity is

ρ(T) = ρ_0 exp(E_g / (2 k_B T)),

where E_g is the band gap (~ 1.1 eV for silicon, ~ 0.67 eV for germanium). The exponential dependence is the signature of the activated carrier density.

For a disordered metal or a heavily-doped semiconductor, the resistivity at low temperature can follow

ρ(T) = ρ_0 exp((T_0 / T)^{1/4}),

the Mott variable-range hopping law. The exponent 1/4 is for 3D; in 2D it is 1/3.

### Theory: Matthiessen's Rule

The total resistivity of a metal is the sum of the temperature-independent residual resistivity ρ_0 (from defects and impurities) and the temperature-dependent ideal resistivity ρ_i(T) (from electron-phonon scattering):

ρ(T) = ρ_0 + ρ_i(T).

This is Matthiessen's rule, an empirical rule that is approximately correct for many metals. The residual resistivity is set by the defect density; the ideal resistivity is set by the electron-phonon interaction.

### Apparatus

- Four-probe apparatus (four collinear, equally-spaced probes; typically tungsten or osmium tips; spacing ~ 1 mm).
- Sample: a metal wire (e.g. copper, constantan), a semiconductor bar (e.g. Si, Ge), or a thin film on a substrate.
- Constant current source (0–100 mA, with a digital readout).
- Voltmeter (digital, with high input impedance > 10 MΩ).
- Temperature controller (a cryostat with liquid nitrogen for low T; a heater stage for high T; a silicon diode or thermocouple for thermometry).
- Safety glasses.

### Procedure

1. **Set up the four-probe apparatus** on the sample. Verify that the probes are in good contact with the sample (no scratches, no oxidation).
2. **Connect the current source** to the outer probes; the voltmeter to the inner probes. Use a four-wire connection to avoid lead resistance.
3. **Sweep the current** from 0 to 100 mA in 10 mA steps. Record the voltage at each step. Verify linearity.
4. **Compute the resistance** R = V / I.
5. **Measure the temperature dependence** — set the temperature controller to several setpoints (e.g. 80, 100, 150, 200, 250, 300 K for low T; 300, 350, 400 K for high T). Allow 5–10 minutes for thermal equilibrium at each setpoint. Record R at each setpoint.
6. **Plot R vs T** for a metal (linear) or ln R vs 1/T for a semiconductor (linear with slope E_g / (2 k_B)).

### Analysis

#### For a Metal

R(T) = R_0 (1 + α (T − T_0)).

A linear fit of R (y) against T (x) gives slope = R_0 α and intercept = R_0 (1 − α T_0). From these, R_0 and α can be extracted.

For copper: α ≈ 4 × 10⁻³ K⁻¹. For constantan: α ≈ 10⁻⁵ K⁻¹ (nearly zero, useful for standard resistors).

#### For a Semiconductor

ln R = ln R_0 + E_g / (2 k_B T).

A linear fit of ln R (y) against 1/T (x) gives slope = E_g / (2 k_B). Hence E_g = 2 k_B · slope.

For silicon: E_g ≈ 1.1 eV. For germanium: E_g ≈ 0.67 eV.

### Sources of Error

- **Probe placement.** The probes should be collinear and equally spaced. A misalignment adds a systematic error in the geometric factor.
- **Probe contact.** The probes must make good electrical contact with the sample. Oxidation or surface contamination increases the contact resistance (which does not affect the four-probe measurement, but it can affect the current distribution).
- **Sample geometry.** The sample dimensions (length, width, thickness) must be known accurately. The geometric factor in the formula for R depends on the sample shape.
- **Thermometry.** The temperature of the sample must be measured accurately. A silicon diode or a thermocouple near the sample is essential; the sample temperature may differ from the sensor temperature if there is a thermal gradient.
- **Self-heating.** The current through the sample heats it. Use a small current (~ 1 mA) for high-resistivity samples; verify the linearity of the I-V curve.

## Key Ideas

- Resistivity ρ: E = ρ J. Resistance R = ρ L / A.
- Four-probe method: current through outer probes, voltage across inner probes. Contact resistance does not affect the voltage.
- For a metal, ρ ∝ T (linear). For a semiconductor, ρ ∝ exp(E_g / (2 k_B T)).
- Matthiessen's rule: ρ_total = ρ_residual + ρ_phonon.
- Sheet resistance R_s = ρ / t is the relevant quantity for thin films.

## Worked Examples

### Example 1: Copper wire

A copper wire of length 1.000 m and cross-section 1.000 mm² is measured with a four-probe apparatus. The probe spacing is 1.0 mm. At T = 20 °C, the measured resistance is R = 17.2 mΩ. The resistivity is

ρ = R · 2 π s = 0.0172 · 2π · 0.001 = 1.08 × 10⁻⁴ Ω·m = ... wait, this doesn't match.

Let me reconsider. The four-probe formula R = ρ / (2 π s) gives ρ = R · 2 π s. For s = 1 mm = 10⁻³ m and R = 17.2 mΩ = 0.0172 Ω:

ρ = 0.0172 · 2π · 10⁻³ = 1.08 × 10⁻⁴ Ω·m.

This is much larger than the catalog resistivity of copper (~ 1.7 × 10⁻⁸ Ω·m). The discrepancy is because the four-probe formula R = ρ / (2 π s) applies to a semi-infinite sample, not a thin wire.

For a thin wire (radius a ≪ s), the four-probe formula is more complex. The standard formula for a wire of length L ≫ s is

R = ρ / (π a) · 1 / [some geometric factor].

For a 1 mm² wire (radius a = 0.564 mm), the geometric factor is ~ 0.5. So R ≈ ρ / (π · 0.000564) · 2 = 1.7 × 10⁻⁸ / (1.77 × 10⁻³) · 2 = 1.92 × 10⁻⁵ Ω · 2 = ... hmm, this isn't matching either.

Actually, for a wire, the standard measurement is a two-probe measurement: R = ρ L / A. For L = 1 m and A = 10⁻⁶ m², R = 1.7 × 10⁻⁸ · 1 / 10⁻⁶ = 0.017 Ω = 17 mΩ. So R = 17 mΩ matches.

The four-probe method on a wire is used to eliminate the contact resistance. The probes are placed at the inner positions (e.g. 0.4 m and 0.6 m along the wire); the four-probe resistance is

R = ρ · (L_inner) / A,

where L_inner is the distance between the inner probes (0.2 m in this case). For the same wire, R = 1.7 × 10⁻⁸ · 0.2 / 10⁻⁶ = 0.0034 Ω = 3.4 mΩ.

This is a more accurate measurement of the wire's resistivity, but the geometry is different from a bulk sample.

The bottom line: the four-probe formula R = ρ / (2 π s) is for a semi-infinite bulk sample. For a wire, the formula is different. The lab should use a sample geometry that matches the formula being used.

### Example 2: Silicon bar

A silicon bar of cross-section 1 mm × 1 mm is measured with a four-probe apparatus. The probe spacing is 1.0 mm. At T = 300 K, the resistance is R = 2.20 kΩ.

For a thin bar (s ≪ w), R = ρ s / (w t) = ρ · 10⁻³ / (10⁻³ · 10⁻³) = ρ · 10³.

ρ = R · 10⁻³ = 2200 · 10⁻³ = 2.2 Ω·m. This is consistent with the intrinsic resistivity of silicon at 300 K (~ 2300 Ω·cm = 23 Ω·m for high-purity Si, but heavily-doped Si can be much lower).

### Example 3: Temperature dependence of a semiconductor

You measure the resistance of a thermistor (a temperature-sensitive resistor) at several temperatures:

| T (K) | R (Ω) | 1/T (K⁻¹) | ln R |
|------:|------:|----------:|------:|
| 300 | 1000 | 0.00333 | 6.91 |
| 320 | 500 | 0.00313 | 6.21 |
| 340 | 250 | 0.00294 | 5.52 |
| 360 | 130 | 0.00278 | 4.87 |
| 380 | 70 | 0.00263 | 4.25 |

A linear fit of ln R (y) against 1/T (x):

slope = (4.25 − 6.91) / (0.00263 − 0.00333) = − 2.66 / (− 0.00070) = 3800 K.

E_g = 2 k_B · slope = 2 · 8.617 × 10⁻⁵ · 3800 = 0.655 eV.

This is consistent with a thermistor based on a semiconductor with E_g ~ 0.65 eV.

## Common Misconceptions

- **"The four-probe method eliminates the contact resistance."** It eliminates the contact resistance at the outer (current) probes. The contact resistance at the inner (voltage) probes is in series with the voltmeter, which has a high input impedance; the current through the voltmeter is negligible, so the contact resistance is irrelevant.
- **"The resistivity is the same as the resistance."** The resistivity is a material property; the resistance depends on the sample geometry. R = ρ L / A.
- **"The temperature coefficient of resistance is the same for all metals."** No. For pure metals, α ~ 4 × 10⁻³ K⁻¹; for alloys, α can be much smaller (constantan) or much larger (some nichromes).
- **"The band gap is the activation energy for conduction."** For an intrinsic semiconductor, the activation energy is E_g / 2, because both electrons and holes contribute to the conduction.
- **"Self-heating is not a problem at low currents."** Even a small current (1 mA) in a high-resistance sample (1 MΩ) dissipates 1 mW, which can heat the sample by several degrees if it is not well-thermalised.

## Connections

- **Solid State Physics (Sem 5 theory).** The temperature dependence of the resistivity is one of the central experimental signatures of the electronic structure of a material. The Drude model gives the linear T dependence for metals; the band theory gives the exponential T dependence for semiconductors.
- **Semiconductor physics.** The four-probe method is the standard way to measure the resistivity of a semiconductor. The Hall effect (next lesson) is the standard way to measure the carrier density and mobility.
- **Materials science.** The resistivity is one of the central material properties. The temperature coefficient, the Matthiessen rule, and the residual resistivity are used to characterise the purity and the defect density of a metal.
- **Engineering.** The resistivity is critical in the design of resistors, heating elements, and interconnects. The four-probe method is used in the quality control of metal films, semiconductor wafers, and conductive polymers.
- **Geophysics.** The resistivity of the Earth's crust is measured by four-probe methods (in DC resistivity surveys). The resistivity depends on the rock type, the porosity, the fluid content, and the temperature.

## Quick Check

1. State the formula for the resistance in terms of the resistivity.
2. Why does the four-probe method give a more accurate measurement than the two-probe method?
3. A metal wire has L = 1 m, A = 1 mm², ρ = 1.7 × 10⁻⁸ Ω·m. What is R?
4. A semiconductor has R = 1000 Ω at 300 K and R = 100 Ω at 350 K. What is E_g?
5. State Matthiessen's rule.
6. What is the temperature coefficient of resistance? What is its sign for a metal? For a semiconductor?
7. Why must the current be small in a high-resistance sample?
8. A student measures R at 300 K and 350 K and computes E_g = 5 eV. What might be wrong?

## Takeaway

The four-probe method is the lab's standard for accurate resistivity measurements. The linear T dependence of metals and the exponential T dependence of semiconductors are the two central experimental signatures. The lab's discipline — careful probe placement, accurate thermometry, control of self-heating, proper analysis of the temperature dependence — is the same discipline that runs through every resistivity measurement in solid-state physics, semiconductor physics, and materials science. The resistivity is one of the most fundamental material properties; the four-probe method is the most reliable way to measure it.
