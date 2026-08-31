***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-6
semesterName: Semester 6
subjectId: physics
subjectName: Physics
courseId: nuclear-physics-lab
courseName: Nuclear Physics Lab
moduleId: nuclear-physics-lab-module-1
moduleName: Radioactivity, Counting, and Nuclear Spectra
lessonId: nuclear-physics-lab-m1-l2
lessonName: Attenuation, Absorption Coefficients, and Half-Thickness
lessonNumber: 2
moduleNumber: 1
semesterNumber: 6
difficulty: intermediate
estimatedStudyMinutes: 50
releaseOrder: 2
prerequisites:
  - nuclear-physics-lab-m1-l1
learningObjectives:
  - Measure the attenuation of gamma rays through lead, aluminium, and other absorbers; determine the linear and mass attenuation coefficients.
  - Determine the half-thickness (the thickness that reduces the intensity by half) and the tenth-thickness for each material.
  - Distinguish the photoelectric, Compton, and pair-production contributions to the attenuation coefficient; identify the dominant mechanism at different energies.
concepts:
  - Linear attenuation coefficient
  - Mass attenuation coefficient
  - Half-thickness
  - Tenth-thickness
  - Beer-Lambert law
  - Photoelectric effect
  - Compton scattering
  - Pair production
  - Total attenuation coefficient
tags:
  - physics
  - laboratory
  - nuclear
  - attenuation
  - gamma-rays
  - photoelectric
sourceType: authored-courseware
assessmentHints:
  - Attenuation: I = I_0 exp(-mu x), where mu is the linear attenuation coefficient and x is the thickness.
  - Half-thickness: x_{1/2} = ln 2 / mu.
  - Photoelectric dominates at low energy; Compton at intermediate; pair production at high.
status: in-review
***

# Attenuation, Absorption Coefficients, and Half-Thickness

## Overview

When ionising radiation passes through matter, it is attenuated by interactions with the atoms. The intensity decreases exponentially with the thickness:

I(x) = I_0 exp(−μ x),

where μ is the linear attenuation coefficient (in cm⁻¹) and x is the thickness (in cm). The mass attenuation coefficient is μ/ρ, where ρ is the density of the material; it is independent of the physical state (solid, liquid, gas) and is more convenient for comparing different materials.

For gamma rays, the dominant attenuation mechanisms are the photoelectric effect (dominant at low energy), Compton scattering (dominant at intermediate energy), and pair production (dominant at high energy, above 1.022 MeV). The total attenuation coefficient is the sum of the three contributions.

This lesson covers the apparatus (a gamma source, an absorber, a GM counter or a scintillation counter, a set of absorbers of varying thickness), the procedure (measure the count rate as a function of the absorber thickness for several materials), the analysis (compute the linear and mass attenuation coefficients, the half-thickness, the tenth-thickness; identify the dominant attenuation mechanism), and the dominant sources of error (counting statistics, background, scattering, source geometry).

## Learning Path

1. **Set up the apparatus.** Place the gamma source (e.g. ⁶⁰Co, ¹³⁷Cs, ⁵⁷Co) at a fixed distance from the detector. Place the absorber between the source and the detector.
2. **Measure the unattenuated count rate.** Remove the absorber; count for 5 minutes. Compute I_0.
3. **Measure the count rate as a function of thickness.** For each material (lead, aluminium, copper, etc.), vary the thickness in steps. For each thickness, count for 1-5 minutes.
4. **Compute the attenuation coefficient.** Plot ln(I) vs x. The slope is −μ.
5. **Compute the half-thickness and the tenth-thickness.** x_{1/2} = ln 2 / μ. x_{1/10} = ln 10 / μ.
6. **Compare with the literature.** Compare the measured μ with the NIST X-ray mass attenuation coefficients.

## Core Explanation

### Theory: Beer-Lambert Law

The attenuation of ionising radiation in matter follows the Beer-Lambert law:

I(x) = I_0 exp(−μ x),

where μ is the linear attenuation coefficient (in cm⁻¹) and x is the thickness. The mass attenuation coefficient is

μ_m = μ / ρ,

where ρ is the density (in g/cm³). The Beer-Lambert law can be written as

I(x) = I_0 exp(− μ_m ρ x) = I_0 exp(− μ_m (ρ x)),

where ρ x is the mass thickness (in g/cm²).

### Theory: Half-Thickness and Tenth-Thickness

The half-thickness x_{1/2} is the thickness that reduces the intensity to half:

I(x_{1/2}) = I_0 / 2 = I_0 exp(− μ x_{1/2}) ⇒ x_{1/2} = ln 2 / μ.

The tenth-thickness x_{1/10} is the thickness that reduces the intensity to a tenth:

x_{1/10} = ln 10 / μ ≈ 3.32 x_{1/2}.

### Theory: Attenuation Mechanisms

The total linear attenuation coefficient for gamma rays is the sum of three contributions:

μ = μ_photo + μ_Compton + μ_pair,

where:
- μ_photo is the photoelectric contribution. Dominant at low energy (E_γ < 100 keV for high-Z materials, E_γ < 50 keV for low-Z materials). The cross section scales as Z⁴ / E_γ³.
- μ_Compton is the Compton scattering contribution. Dominant at intermediate energy (100 keV < E_γ < 1 MeV). The cross section is approximately independent of Z and decreases slowly with E_γ.
- μ_pair is the pair production contribution. Dominant at high energy (E_γ > 1.022 MeV, the rest mass of the electron-positron pair). The cross section scales as Z² and increases logarithmically with E_γ.

The mass attenuation coefficient is plotted in the NIST X-ray mass attenuation coefficient database (https://physics.nist.gov/PhysRefData/XrayMassCoef/).

### Apparatus

- Gamma source (e.g. ⁶⁰Co, 1.17 and 1.33 MeV; ¹³⁷Cs, 0.662 MeV; ⁵⁷Co, 0.122 MeV).
- Absorbers: lead (high Z, high attenuation), aluminium (low Z, low attenuation), copper, iron, etc. Several thicknesses of each material.
- Detector: GM counter or scintillation counter (NaI(Tl)).
- Source holder, absorber holder, detector shield.
- Stopwatch, ruler.
- Safety equipment: lab coat, gloves, dosimeter, survey meter.
- Safety glasses.

### Procedure

1. **Set up the apparatus.** Place the source, absorber, and detector in a fixed geometry. The distance from the source to the detector should be large enough to approximate a narrow beam (no scattered photons reach the detector).
2. **Measure the unattenuated count rate.** Remove the absorber; count for 5 minutes. The count rate is I_0.
3. **Measure the count rate as a function of thickness.** For each material, vary the thickness in steps. For each thickness, count for 1-5 minutes. The count rate should decrease exponentially with the thickness.
4. **Repeat for each material.** Measure the attenuation for lead, aluminium, copper, etc.
5. **Correct for the background.** Subtract the background count rate from each measurement.
6. **Correct for the dead time.** For high count rates, apply the dead-time correction.

### Analysis

#### Linear Attenuation Coefficient

For each material, plot ln(I) against x. A linear fit returns the slope = −μ. The intercept is ln(I_0).

For example, for ⁶⁰Co gamma rays (1.25 MeV average) in lead:
- μ ≈ 0.65 cm⁻¹ (from the NIST database).
- Half-thickness: x_{1/2} = ln 2 / 0.65 = 1.07 cm.
- Tenth-thickness: x_{1/10} = ln 10 / 0.65 = 3.54 cm.

For aluminium:
- μ ≈ 0.20 cm⁻¹.
- Half-thickness: x_{1/2} = ln 2 / 0.20 = 3.47 cm.
- Tenth-thickness: x_{1/10} = ln 10 / 0.20 = 11.5 cm.

For lead, the half-thickness is ~ 1 cm; for aluminium, ~ 3.5 cm. The high-Z lead is much more effective at attenuating gamma rays than the low-Z aluminium.

#### Mass Attenuation Coefficient

The mass attenuation coefficient is μ_m = μ / ρ. For lead (ρ = 11.3 g/cm³), μ_m = 0.65 / 11.3 = 0.058 cm²/g. For aluminium (ρ = 2.7 g/cm³), μ_m = 0.20 / 2.7 = 0.074 cm²/g. The mass attenuation coefficient is similar for lead and aluminium, but the linear attenuation coefficient is much larger for lead (because of the higher density).

#### Identification of the Dominant Mechanism

For ⁶⁰Co (1.25 MeV) in lead, the dominant mechanism is Compton scattering (μ_Compton ≈ 0.40 cm⁻¹, μ_pair ≈ 0.15 cm⁻¹, μ_photo ≈ 0.10 cm⁻¹). For ¹³⁷Cs (0.662 MeV) in lead, the dominant mechanism is also Compton scattering, with a smaller pair production contribution (since 0.662 MeV is below the pair production threshold of 1.022 MeV). For ⁵⁷Co (0.122 MeV) in lead, the photoelectric contribution is significant (μ_photo ≈ 5 cm⁻¹, dominant at this energy).

### Sources of Error

- **Counting statistics.** The dominant uncertainty in any counting measurement is the Poisson statistics. To reduce the uncertainty, count for longer times.
- **Background.** The background must be subtracted. The background uncertainty is the Poisson uncertainty of the background count.
- **Scattering.** Scattered photons can reach the detector, increasing the observed count rate. Use a narrow-beam geometry to minimise the scattering.
- **Source geometry.** The source-detector geometry affects the count rate. A well-defined geometry (a point source at a known distance) is essential.
- **Dead time.** The dead time correction is important for high count rates. Use the two-source method to measure the dead time.

## Key Ideas

- Beer-Lambert law: I = I_0 exp(− μ x). The mass attenuation coefficient μ_m = μ / ρ.
- Half-thickness: x_{1/2} = ln 2 / μ.
- Attenuation mechanisms: photoelectric (low E), Compton (intermediate E), pair production (high E).
- The total attenuation coefficient is the sum of the three contributions.

## Worked Examples

#### Example 1: Attenuation in Lead

A ¹³⁷Cs source (0.662 MeV) is placed 10 cm from a GM counter. The count rate without absorber is 1000 cpm. With a 2 cm lead absorber, the count rate is 250 cpm. The attenuation coefficient is

μ = − ln(250/1000) / 2 = − ln(0.25) / 2 = 1.386 / 2 = 0.69 cm⁻¹.

The half-thickness is x_{1/2} = ln 2 / 0.69 = 1.00 cm. The tenth-thickness is x_{1/10} = ln 10 / 0.69 = 3.34 cm.

#### Example 2: Attenuation in Aluminium

For the same source (¹³⁷Cs, 0.662 MeV) but with aluminium absorbers, the count rate is 1000 cpm without absorber, 800 cpm with 1 cm aluminium, 640 cpm with 2 cm aluminium, 512 cpm with 3 cm aluminium.

μ = − ln(512/1000) / 3 = − ln(0.512) / 3 = 0.669 / 3 = 0.22 cm⁻¹.

The half-thickness is x_{1/2} = ln 2 / 0.22 = 3.15 cm.

#### Example 3: Identification of the Dominant Mechanism

For ⁶⁰Co (1.25 MeV) in lead:
- μ_photo ≈ 0.10 cm⁻¹
- μ_Compton ≈ 0.40 cm⁻¹
- μ_pair ≈ 0.15 cm⁻¹
- μ_total ≈ 0.65 cm⁻¹

The dominant mechanism is Compton scattering.

For ⁵⁷Co (0.122 MeV) in lead:
- μ_photo ≈ 5 cm⁻¹
- μ_Compton ≈ 0.5 cm⁻¹
- μ_pair ≈ 0 (below threshold)
- μ_total ≈ 5.5 cm⁻¹

The dominant mechanism is the photoelectric effect.

## Common Misconceptions

- **"The attenuation is linear in thickness."** No. The attenuation is exponential in thickness: I = I_0 exp(−μ x). The half-thickness is a more useful measure of the attenuation than the linear coefficient.
- **"The mass attenuation coefficient is the same for all materials at a given energy."** No. The mass attenuation coefficient depends on Z (the atomic number) and the energy. High-Z materials have a larger photoelectric contribution.
- **"The Compton scattering is the same for all materials."** No. The Compton scattering is approximately independent of Z (per atom), but the mass attenuation coefficient (per unit mass) decreases with Z (because the number of atoms per unit mass decreases with Z).
- **"The pair production threshold is 1.022 MeV."** Correct. The pair production requires at least 1.022 MeV (the rest mass of an electron-positron pair). Below this energy, pair production is energetically forbidden.
- **"The photoelectric effect is independent of the binding energy."** The photoelectric cross section depends on the binding energy of the inner-shell electrons. The K-edge is the energy at which the photoelectric cross section increases sharply (when the photon energy exceeds the K-shell binding energy).

## Connections

- **Nuclear Physics (Sem 6 theory).** Attenuation is the central phenomenon of the interaction of ionising radiation with matter. The attenuation mechanisms (photoelectric, Compton, pair production) are the same for all ionising radiation (gamma rays, X-rays).
- **Medical physics.** The attenuation of X-rays in tissue is the basis of medical imaging (X-ray, CT). The contrast between bone and soft tissue is due to the different attenuation coefficients.
- **Geology.** The attenuation of cosmic rays in the atmosphere is a measure of the atmospheric depth. The attenuation of gamma rays in rock is used in geophysical surveys.
- **Astronomy (Sem 5/6).** The attenuation of X-rays and gamma rays in the interstellar medium is important for high-energy astrophysics. The photoelectric absorption is the dominant mechanism at low energies.
- **Engineering.** Shielding design (for nuclear reactors, accelerators, medical facilities) requires accurate attenuation coefficients. The NIST database is the standard reference.

## Quick Check

1. What is the Beer-Lambert law?
2. What is the half-thickness? How is it related to the attenuation coefficient?
3. What are the three attenuation mechanisms for gamma rays?
4. Which mechanism dominates at low energy? At intermediate energy? At high energy?
5. What is the pair production threshold?
6. Why does the photoelectric effect depend strongly on Z?
7. What is the mass attenuation coefficient? Why is it useful?
8. A ⁶⁰Co source is attenuated by a 2 cm lead absorber by a factor of 4. What is the half-thickness?

## Takeaway

Attenuation and absorption coefficients are the lab's primary tools for characterising the interaction of ionising radiation with matter. The Beer-Lambert law, the half-thickness, the tenth-thickness, and the three attenuation mechanisms are the central concepts. The lab's discipline — careful source handling, accurate counting, proper geometry, honest uncertainty estimation — is the same discipline that runs through every attenuation measurement. The same principles (exponential attenuation, photoelectric, Compton, pair production) apply to all ionising radiation, from the laboratory source to the medical X-ray. The data you collect today is the raw material for the analysis that follows.
