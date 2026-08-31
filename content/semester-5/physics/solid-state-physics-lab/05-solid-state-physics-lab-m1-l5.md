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
lessonId: solid-state-physics-lab-m1-l5
lessonName: Specific Heat of Solids and the Debye Model
lessonNumber: 5
moduleNumber: 1
semesterNumber: 5
difficulty: advanced
estimatedStudyMinutes: 50
releaseOrder: 5
prerequisites:
  - solid-state-physics-lab-m1-l4
learningObjectives:
  - Measure the specific heat capacity of a solid (e.g. copper, aluminium, lead) at low temperature using a calorimeter.
  - Verify the Debye T³ law at low temperature and the Dulong-Petit law at high temperature.
  - Estimate the Debye temperature of the solid from the low-temperature data.
concepts:
  - Specific heat
  - Dulong-Petit law
  - Einstein model
  - Debye model
  - Phonons
  - T³ law
  - Debye temperature
  - Lattice specific heat
  - Electronic specific heat
tags:
  - physics
  - laboratory
  - solid-state
  - specific-heat
  - debye
  - phonons
sourceType: authored-courseware
assessmentHints:
  - Dulong-Petit law: C = 3 R ≈ 25 J/(mol·K) at high T (above the Debye temperature).
  - Debye T³ law: C = (12 π⁴ / 5) R (T / Θ_D)³ at low T (T << Θ_D).
  - Debye temperatures: Cu ~ 343 K, Al ~ 428 K, Pb ~ 105 K, diamond ~ 1860 K.
status: in-review
***

# Specific Heat of Solids and the Debye Model

## Overview

The specific heat capacity of a solid reveals the spectrum of lattice vibrations (phonons) and, at low temperature, the contribution of the conduction electrons. At high temperature (above the Debye temperature Θ_D), the specific heat follows the Dulong-Petit law: C = 3 R ≈ 25 J/(mol·K), independent of the material. At low temperature (T << Θ_D), the specific heat follows the Debye T³ law: C = (12 π⁴ / 5) R (T / Θ_D)³ ∝ T³. The Debye temperature Θ_D is a characteristic of the material; it depends on the sound velocity and the atomic density.

This lesson covers the apparatus (a calorimeter, a sample, a thermometer, a heater, a temperature controller, a cryostat), the procedure (measure the specific heat at several temperatures using the heat-pulse method), the analysis (fit the data to the Debye model, extract Θ_D), and the dominant sources of error (heat loss, thermal relaxation, sample-thermometer coupling).

## Learning Path

1. **Set up the calorimeter** — a small sample (a few grams) mounted on a sample holder with a heater and a thermometer; the calorimeter is in a vacuum chamber to reduce heat loss.
2. **Cool the sample** to the lowest temperature (e.g. 2 K with liquid helium, or 80 K with liquid nitrogen).
3. **Apply a heat pulse** — send a known amount of heat Q = I² R t through the heater for a known time t. Measure the temperature rise ΔT.
4. **Compute the specific heat** C = Q / ΔT. The molar specific heat is c = C / n, where n is the number of moles.
5. **Repeat at several temperatures** — between 2 K and 300 K. The specific heat varies over many orders of magnitude, so a logarithmic plot is appropriate.

## Core Explanation

### Theory: Dulong-Petit Law

At high temperature (T ≫ Θ_D), the lattice specific heat follows the Dulong-Petit law:

C_lattice = 3 R ≈ 24.94 J/(mol·K).

This is the classical equipartition result: each atom has 3 degrees of translational freedom, each contributing (1/2) R to the heat capacity, for a total of 3 R. The Dulong-Petit law is a good approximation for many solids at room temperature (e.g. copper, aluminium, lead) but fails for light or stiff solids (e.g. diamond, beryllium, graphite) at room temperature because their Debye temperatures are above room temperature.

### Theory: Einstein Model

In 1907, Einstein proposed that each atom is an independent quantum harmonic oscillator with the same frequency ω_E. The specific heat is

C_E = 3 R (Θ_E / T)² exp(Θ_E / T) / (exp(Θ_E / T) − 1)²,

where Θ_E = ℏ ω_E / k_B is the Einstein temperature. At T ≫ Θ_E, C_E → 3 R (Dulong-Petit). At T ≪ Θ_E, C_E → 0 exponentially. The Einstein model captures the high-temperature saturation and the low-temperature suppression, but it predicts a faster-than-observed decrease at low T (the data show C ∝ T³, not exp(−Θ_E / T)).

### Theory: Debye Model

In 1912, Debye improved on the Einstein model by recognising that the lattice vibrations are not independent oscillators with a single frequency, but a continuum of acoustic modes with a linear dispersion ω = v_s k (where v_s is the sound velocity). The density of states is

g(ω) = (9 N / ω_D³) ω²   for ω < ω_D,

where ω_D is the Debye cutoff frequency and N is the number of atoms. The Debye temperature is Θ_D = ℏ ω_D / k_B.

The specific heat is

C_lattice = 9 R (T / Θ_D)³ ∫_0^{Θ_D / T} (x⁴ e^x) / ((e^x − 1)²) dx.

At T ≫ Θ_D, C_lattice → 3 R (Dulong-Petit). At T ≪ Θ_D, the upper limit of the integral can be extended to infinity, and the integral evaluates to 4 π⁴ / 15. Hence

C_lattice = (12 π⁴ / 5) R (T / Θ_D)³ ≈ 234 R (T / Θ_D)³   for T ≪ Θ_D.

This is the Debye T³ law. A plot of C / T (y) against T² (x) is a straight line through the origin, with slope proportional to 1 / Θ_D³.

### Theory: Electronic Specific Heat

At very low temperature (typically below ~ 5 K), the lattice specific heat becomes very small, and the electronic specific heat becomes dominant. The electronic specific heat is linear in T:

C_electronic = γ T,

where γ is the Sommerfeld coefficient (proportional to the density of states at the Fermi level). For a free electron gas, γ = (π² / 3) k_B² g(E_F) = (π² / 2) (N k_B² / E_F).

The total specific heat at low T is

C_total = γ T + β T³,

where β = (12 π⁴ / 5) R / Θ_D³. A plot of C / T (y) against T² (x) is a straight line with slope β and intercept γ.

### Apparatus

- Calorimeter with a sample stage (a few cm², with a heater and a thermometer).
- Sample: a small piece of the material (a few grams; a disc or a small cylinder).
- Heater: a thin-film resistor or a strain gauge, with resistance ~ 100 Ω.
- Thermometer: a silicon diode, a Cernox sensor, or a platinum RTD.
- Temperature controller (a cryostat with liquid helium for T < 4 K, liquid nitrogen for T < 80 K; a heater stage for higher T).
- Power supply for the heater.
- Vacuum pump (to reduce heat loss by convection).
- Safety glasses.

### Procedure

1. **Set up the calorimeter** according to the manufacturer's instructions. Mount the sample on the sample stage with a thin layer of Apiezon grease (for thermal contact). Connect the heater and the thermometer.
2. **Evacuate the sample chamber** to ~ 10⁻⁶ Torr. The vacuum reduces heat loss by convection.
3. **Cool the sample** to the lowest temperature. For a helium cryostat, this is ~ 2 K; for a nitrogen cryostat, ~ 78 K.
4. **Stabilise the temperature** at a setpoint. Allow 5–10 minutes for thermal equilibrium.
5. **Apply a heat pulse** — apply a known voltage V to the heater for a known time t. The heat is Q = V² t / R (for a constant-voltage pulse) or Q = I² R t (for a constant-current pulse). The temperature rise is ΔT.
6. **Record the temperature** vs time during and after the pulse. The temperature should rise linearly during the pulse (if the heat loss is negligible) and decay exponentially after the pulse (Newton's law of cooling).
7. **Compute C = Q / ΔT** at the average temperature.
8. **Repeat** at several setpoints between 2 K and 300 K.

### Analysis

#### Heat Capacity

For each temperature T, compute C = Q / ΔT. Convert to molar specific heat: c = C / n, where n is the number of moles of the sample.

#### Dulong-Petit Check

At high T (T > Θ_D), c should approach 3 R = 24.94 J/(mol·K). For copper, this is reached at room temperature (T = 300 K > Θ_D = 343 K? — actually 300 K < 343 K, so the Dulong-Petit limit is not quite reached). For lead (Θ_D = 105 K), the Dulong-Petit limit is reached at room temperature.

#### Debye T³ Law

At low T (T < Θ_D / 50, roughly), plot C / T (y) against T² (x). The data should fall on a straight line through the origin, with slope β. Then Θ_D = (12 π⁴ R / (5 β))^{1/3}.

For copper, Θ_D ≈ 343 K. For aluminium, Θ_D ≈ 428 K. For lead, Θ_D ≈ 105 K. For diamond, Θ_D ≈ 1860 K (so the T³ law is followed up to ~ 50 K, and the Dulong-Petit limit is not reached at room temperature).

#### Electronic Specific Heat

At very low T (below ~ 5 K), the electronic contribution becomes visible. A plot of C / T against T² should be a straight line with slope β (lattice) and intercept γ (electronic). For copper, γ ≈ 0.695 mJ/(mol·K²); for aluminium, γ ≈ 1.35 mJ/(mol·K²).

### Sources of Error

- **Heat loss.** Heat loss during the pulse reduces the temperature rise. Use a short pulse and a small temperature rise (ΔT / T < 5 %).
- **Thermal relaxation.** The sample, the heater, the thermometer, and the stage may not be at the same temperature. The relaxation time is set by the heat capacity and the thermal conductance. Wait long enough for equilibrium.
- **Sample-thermometer coupling.** The thermal contact between the sample and the thermometer may be poor. Use Apiezon grease or a similar thermal interface material.
- **Addenda heat capacity.** The heater, the thermometer, the stage, and the grease contribute to the total heat capacity. The "addenda" heat capacity is measured in a separate run (without the sample) and subtracted.
- **Temperature measurement.** The thermometer may drift; calibrate before and after the run.

## Key Ideas

- Dulong-Petit law: C = 3 R at high T (T ≫ Θ_D).
- Einstein model: C ∝ (Θ_E / T)² exp(Θ_E / T) at low T (exponential suppression).
- Debye T³ law: C ∝ T³ at low T (T ≪ Θ_D).
- Debye temperature: Θ_D = ℏ ω_D / k_B; depends on the sound velocity and the atomic density.
- Electronic specific heat: γ T, dominant at very low T.
- Total specific heat at low T: C = γ T + β T³.

## Worked Examples

#### Example 1: Copper at room temperature

A copper sample (n = 0.05 mol, m = 3.18 g) is heated by a 0.5 s pulse of V = 1.0 V through a 100 Ω heater. The temperature rises by ΔT = 0.030 K.

Q = V² t / R = 1.0² · 0.5 / 100 = 5 × 10⁻³ J.

C = Q / ΔT = 5 × 10⁻³ / 0.030 = 0.167 J/K.

c = C / n = 0.167 / 0.05 = 3.33 J/(mol·K). 

Hmm, that's much less than 3 R = 25 J/(mol·K). The discrepancy is because T = 300 K is below the Debye temperature of copper (Θ_D = 343 K), so the Dulong-Petit limit is not reached. The Debye model at T = 300 K gives c ≈ 22 J/(mol·K) for copper, still below 3 R.

#### Example 2: Lead at room temperature

A lead sample (n = 0.05 mol, m = 10.4 g) is heated by the same pulse. The temperature rises by ΔT = 0.012 K.

C = 5 × 10⁻³ / 0.012 = 0.417 J/K.
c = 0.417 / 0.05 = 8.33 J/(mol·K). 

Still below 3 R. The Debye model at T = 300 K for lead (Θ_D = 105 K) gives c ≈ 24 J/(mol·K), closer to the Dulong-Petit limit. The discrepancy is because the temperature rise of 0.012 K is small enough that the approximation ΔT = Q / C is valid, but the thermal relaxation may not be complete.

#### Example 3: Copper at low temperature

A copper sample is measured at T = 5 K. Q = 10⁻⁶ J, ΔT = 0.05 K.

C = 10⁻⁶ / 0.05 = 2 × 10⁻⁵ J/K.
c = 2 × 10⁻⁵ / 0.05 = 4 × 10⁻⁴ J/(mol·K).

Compare with the Debye T³ law: c = (12 π⁴ / 5) R (T / Θ_D)³ = 234 · 8.314 · (5 / 343)³ = 1945 · (0.0146)³ = 1945 · 3.10 × 10⁻⁶ = 6.0 × 10⁻³ J/(mol·K).

The measured value (4 × 10⁻⁴) is much smaller than the predicted (6 × 10⁻³). The discrepancy is because the electronic specific heat is dominant at 5 K. For copper, γ = 0.695 mJ/(mol·K²), so c_electronic = γ T = 0.695 × 10⁻³ · 5 = 3.5 × 10⁻³ J/(mol·K), comparable to c_lattice.

The total c = c_lattice + c_electronic ≈ 6.0 × 10⁻³ + 3.5 × 10⁻³ = 9.5 × 10⁻³ J/(mol·K). The measured value (4 × 10⁻⁴) is still smaller, suggesting an experimental error (perhaps the heat pulse was too small, or the thermal relaxation was not complete).

## Common Misconceptions

- **"The specific heat of a solid is a constant."** It depends strongly on temperature, especially at low T. At room temperature, it is approximately constant for many solids (Dulong-Petit), but at low T it varies as T³ (Debye).
- **"The Dulong-Petit law is exact."** It is an approximation at high T (T ≫ Θ_D). At room temperature, it is approximately correct for many solids (e.g. lead) but not for stiff or light solids (e.g. diamond, beryllium).
- **"The Debye model is exact."** It is an approximation. It assumes a linear dispersion ω = v_s k, an isotropic solid, and a sharp cutoff. Real solids have anisotropic elastic constants, optical branches (for multi-atom bases), and a smoother cutoff. The model is accurate to ~ 10 % for most solids.
- **"The electronic specific heat is the same for all metals."** It is proportional to the density of states at the Fermi level, which varies from metal to metal. For copper, γ ≈ 0.7 mJ/(mol·K²); for iron, γ ≈ 5 mJ/(mol·K²); for heavy fermion materials, γ can be 1000 mJ/(mol·K²) or more.
- **"The Debye temperature is a fixed number for a material."** It depends on the temperature (the approximation ω = v_s k is not exact) and on the sample (the elastic constants depend on the sample's microstructure, impurities, and defects). A range of values (~ 5–10 %) is typical in the literature.

## Connections

- **Solid State Physics (Sem 5 theory).** The specific heat is one of the central experimental signatures of the lattice dynamics. The Debye model is the first successful theory of the lattice specific heat; the Born-von Karman model and ab initio calculations give more accurate descriptions.
- **Materials science.** The specific heat is a fundamental thermodynamic property, used in calorimetry, thermal analysis (DSC), and the design of thermal management systems.
- **Engineering.** The specific heat is critical in any thermal design: heat sinks, thermal storage, cryogenic systems, etc. The Debye model is used to extrapolate the specific heat to temperatures where measurements are not available.
- **Astrophysics (Sem 5/6).** The specific heat of stellar matter (mostly ionised hydrogen) is dominated by the ions at high T and by the electrons at low T. The Debye model is used in white dwarf cooling calculations.
- **Cryogenics.** The specific heat of materials at low T is critical for the design of cryogenic systems. The Debye model is the standard extrapolation.

## Quick Check

1. State the Dulong-Petit law. What is its value at high T?
2. State the Debye T³ law. At what T is it valid?
3. What is the Debye temperature of copper? Of lead? Of diamond?
4. Why does the Einstein model predict a faster decrease of c at low T than is observed?
5. What is the Sommerfeld coefficient? What is its physical meaning?
6. A solid has c = 10 J/(mol·K) at T = 50 K and Θ_D = 200 K. Is this consistent with the Debye model?
7. A student measures c = 5 J/(mol·K) at T = 300 K for a metal and concludes Θ_D is low. Is this correct?
8. Why must the addenda heat capacity be subtracted?

## Takeaway

The specific heat of a solid is the lab's introduction to the thermal properties of crystalline materials. The Dulong-Petit law, the Einstein model, the Debye model, and the electronic specific heat are the four central concepts. The lab's discipline — careful sample mounting, accurate temperature control, proper heat-pulse measurement, correct addenda subtraction — is the same discipline that runs through every specific-heat measurement in solid-state physics, materials science, and cryogenics. The Debye temperature is a fundamental material property; the Debye model is the first successful theory of the lattice specific heat; the same model is used in astrophysics (white dwarf cooling) and in engineering (thermal management).
