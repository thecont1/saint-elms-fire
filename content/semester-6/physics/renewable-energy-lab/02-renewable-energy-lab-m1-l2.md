***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-6
semesterName: Semester 6
subjectId: physics
subjectName: Physics
courseId: renewable-energy-lab
courseName: Renewable Energy and Applications Lab (Option A)
moduleId: renewable-energy-lab-module-1
moduleName: Solar Cells, Energy Conversion, and Storage
lessonId: renewable-energy-lab-m1-l2
lessonName: Spectral Response and Quantum Efficiency
lessonNumber: 2
moduleNumber: 1
semesterNumber: 6
difficulty: advanced
estimatedStudyMinutes: 50
releaseOrder: 2
prerequisites:
  - renewable-energy-lab-m1-l1
learningObjectives:
  - Measure the spectral response of a silicon solar cell from 400 nm to 1100 nm; identify the cutoff wavelength.
  - Compute the external quantum efficiency (EQE) and the internal quantum efficiency (IQE).
  - Verify the band gap of silicon (~ 1.12 eV) from the cutoff wavelength.
concepts:
  - Spectral response
  - External quantum efficiency (EQE)
  - Internal quantum efficiency (IQE)
  - Band gap
  - Cutoff wavelength
  - Reflectance
  - Absorption coefficient
tags:
  - physics
  - laboratory
  - solar
  - quantum-efficiency
  - spectral-response
  - band-gap
sourceType: authored-courseware
assessmentHints:
  - EQE = (number of collected electrons) / (number of incident photons).
  - Cutoff wavelength: lambda_g = hc / E_g = 1240 / E_g(eV) nm. For Si, lambda_g = 1100 nm.
  - IQE = EQE / (1 - R), where R is the reflectance.
status: in-review
***

# Spectral Response and Quantum Efficiency

## Overview

The spectral response SR(λ) of a solar cell is the ratio of the short-circuit current to the incident optical power at each wavelength. The external quantum efficiency EQE(λ) is the ratio of the number of collected electrons to the number of incident photons at each wavelength:

EQE(λ) = (h c / q) · SR(λ) / λ = 1240 · SR(λ) / λ (with λ in nm and SR in A/W).

The internal quantum efficiency IQE is the EQE corrected for the reflectance:

IQE(λ) = EQE(λ) / (1 − R(λ)).

The spectral response of a silicon solar cell is non-zero from ~ 400 nm (UV cutoff) to ~ 1100 nm (band gap cutoff). The peak is typically at ~ 900-1000 nm. The band gap can be estimated from the cutoff wavelength: λ_g = 1240 / E_g (in nm, with E_g in eV).

This lesson covers the apparatus (a monochromator, a solar cell, a current amplifier, a voltmeter, a calibrated photodiode), the procedure (measure the spectral response, compute the EQE and the IQE), the analysis (identify the cutoff, estimate the band gap, fit the Urbach tail), and the dominant sources of error (light intensity, wavelength accuracy, reflectance, recombination).

## Learning Path

1. **Set up the monochromator** with a tungsten (visible) or xenon (UV) lamp. Set the wavelength to 400 nm.
2. **Measure the spectral response.** For each wavelength from 400 nm to 1100 nm in 20 nm steps, measure the short-circuit current of the solar cell and the incident optical power (with the calibrated photodiode). Compute SR(λ) = I_sc(λ) / P_in(λ).
3. **Measure the reflectance** of the solar cell. Use a spectrophotometer or a reflectometer.
4. **Compute the EQE and IQE.** EQE = 1240 · SR / λ. IQE = EQE / (1 - R).
5. **Identify the cutoff wavelength** λ_g. Estimate the band gap E_g = 1240 / λ_g.

## Core Explanation

### Theory: Spectral Response

The spectral response SR(λ) is defined as the short-circuit current per unit incident optical power:

SR(λ) = I_sc(λ) / P_in(λ).

The units are A/W. The maximum possible spectral response is at λ = 1240 nm (the wavelength at which each photon has energy equal to the band gap). For λ < 1240 nm, each photon has more energy than the band gap; the excess is lost as heat. For λ > 1240 nm, each photon has less energy than the band gap; it is not absorbed.

The external quantum efficiency is

EQE(λ) = (h c / q) · SR(λ) / λ = 1240 · SR(λ) / λ (in nm).

For a perfect solar cell, EQE = 1 for all λ < λ_g. For a real cell, EQE < 1 due to reflection, recombination, and contact shading.

### Theory: Internal Quantum Efficiency

The internal quantum efficiency IQE is the EQE corrected for the reflectance:

IQE(λ) = EQE(λ) / (1 − R(λ)).

The IQE is a measure of the cell's internal efficiency: the fraction of absorbed photons that are converted to collected electrons. A high IQE indicates good absorption and collection; a low IQE indicates recombination or poor collection.

### Theory: Band Gap from Cutoff

The cutoff wavelength is the longest wavelength at which the cell is sensitive:

λ_g = 1240 / E_g (in nm, with E_g in eV).

For Si, E_g = 1.12 eV, λ_g = 1107 nm. For GaAs, E_g = 1.42 eV, λ_g = 873 nm. For CdTe, E_g = 1.45 eV, λ_g = 855 nm. For perovskite (CH₃NH₃PbI₃), E_g = 1.55 eV, λ_g = 800 nm.

The cutoff is not sharp: there is a tail (the Urbach tail) due to the thermal broadening of the band edge. The Urbach tail is exponential:

α(E) = α_0 exp((E − E_0) / E_U),

where E_U is the Urbach energy (typically 10-15 meV for silicon at room temperature).

### Apparatus

- Monochromator (with a tungsten or xenon lamp; wavelength range 400-1100 nm; resolution 5 nm).
- Solar cell (the same one as in L1).
- Calibrated photodiode (e.g. a silicon photodiode with known spectral response).
- Current amplifier (for the low short-circuit current at the monochromator output).
- Voltmeter.
- Reflectometer (or a spectrophotometer with a reflectance accessory).
- Computer for data acquisition.

### Procedure

1. **Set up the monochromator.** Align the monochromator; set the wavelength to 400 nm.
2. **Measure the spectral response.** For each wavelength from 400 nm to 1100 nm in 20 nm steps:
   a. Measure the short-circuit current of the solar cell.
   b. Measure the incident optical power (with the calibrated photodiode).
   c. Compute SR(λ) = I_sc(λ) / P_in(λ).
3. **Measure the reflectance** of the solar cell. Use a spectrophotometer.
4. **Compute the EQE and IQE.** EQE = 1240 · SR / λ. IQE = EQE / (1 - R).
5. **Identify the cutoff wavelength** λ_g. Estimate the band gap E_g = 1240 / λ_g.
6. **Fit the Urbach tail** in the band-edge region.

### Analysis

#### Spectral Response of a Silicon Solar Cell

The SR is typically 0.1-0.4 A/W in the visible (400-700 nm), with a peak at ~ 900-1000 nm of ~ 0.5 A/W. The cutoff is at ~ 1100 nm.

For a silicon cell:
- At 500 nm: SR ≈ 0.3 A/W. EQE = 1240 · 0.3 / 500 = 0.74 (74 %).
- At 800 nm: SR ≈ 0.45 A/W. EQE = 1240 · 0.45 / 800 = 0.70 (70 %).
- At 1000 nm: SR ≈ 0.4 A/W. EQE = 1240 · 0.4 / 1000 = 0.50 (50 %).
- At 1100 nm: SR ≈ 0.05 A/W. EQE = 1240 · 0.05 / 1100 = 0.06 (6 %).

#### Band Gap

The cutoff is at λ_g ≈ 1100 nm. E_g = 1240 / 1100 = 1.13 eV. The literature value for silicon at 300 K is 1.12 eV.

#### Urbach Tail

The Urbach tail is visible as a slow decrease in the SR below the band gap. The Urbach energy is typically 10-15 meV for silicon at room temperature.

### Sources of Error

- **Light intensity.** The light intensity from the monochromator is small. The current amplifier must have low noise.
- **Wavelength accuracy.** The monochromator wavelength must be calibrated (with a mercury or neon lamp).
- **Reflectance.** The reflectance measurement is critical for the IQE. Use a calibrated spectrophotometer.
- **Recombination.** The IQE is reduced by recombination in the bulk and at the surfaces. Use a passivated cell to minimise the recombination.
- **Temperature.** The band gap depends on the temperature. Measure at a known temperature.

## Key Ideas

- Spectral response: SR(λ) = I_sc / P_in. Peak ~ 0.5 A/W for Si.
- EQE = 1240 · SR / λ (nm). Peak ~ 70-80 % for Si.
- IQE = EQE / (1 - R). A measure of the internal efficiency.
- Band gap: E_g = 1240 / λ_g (in nm, eV). For Si, E_g = 1.12 eV, λ_g = 1100 nm.

## Worked Examples

#### Example 1: EQE Calculation

For a SR = 0.40 A/W at λ = 800 nm, the EQE is 1240 · 0.40 / 800 = 0.62 (62 %). For a reflectance R = 0.10, the IQE is 0.62 / 0.90 = 0.69 (69 %).

#### Example 2: Band Gap from Cutoff

The spectral response drops sharply at λ_g = 1100 nm. The band gap is E_g = 1240 / 1100 = 1.13 eV. The literature value for Si at 300 K is 1.12 eV. The agreement is within the measurement uncertainty.

## Common Misconceptions

- **"The spectral response is constant."** No. The SR depends on the wavelength, the reflectance, the absorption coefficient, and the recombination.
- **"The EQE is 100 % at the peak."** No. The peak EQE for a real cell is 70-90 %. The losses are due to reflectance, recombination, and contact shading.
- **"The band gap is the same for all temperatures."** No. The band gap decreases with temperature: dE_g / dT ≈ − 0.3 meV/K for Si.
- **"The cutoff is sharp."** No. The Urbach tail gives a soft cutoff over ~ 10-20 nm.

## Connections

- **Renewable Energy and Applications (Sem 6 theory).** The spectral response is the central characterisation of a solar cell. The band gap, the EQE, the IQE, and the Urbach tail are the key parameters.
- **Materials science.** The absorption coefficient, the reflectance, and the recombination are material properties. They are related to the band structure, the doping, and the defects.
- **Engineering.** The spectral response determines the current output of the cell under different spectra (AM 1.5G, space sunlight, indoor lighting).
- **Optoelectronics.** Photodiodes, CCDs, and CMOS sensors have similar spectral response characteristics. The same physics applies.

## Quick Check

1. What is the spectral response?
2. What is the EQE? How is it related to the SR?
3. What is the IQE? How is it related to the EQE?
4. What is the band gap of silicon? The cutoff wavelength?
5. What is the Urbach tail?
6. Why does the EQE peak at some wavelength, not at the shortest wavelength?
7. What is the dominant loss mechanism in a real solar cell?
8. How is the reflectance measured?

## Takeaway

The spectral response and the quantum efficiency are the lab's primary tools for characterising the wavelength dependence of a solar cell. The SR, the EQE, the IQE, and the band gap are the central concepts. The lab's discipline — accurate wavelength calibration, proper reflectance measurement, careful temperature control, honest uncertainty estimation — is the same discipline that runs through every spectral response measurement. The same principles (band gap, absorption, recombination) apply to all solar cells, from silicon to GaAs to perovskite. The data you collect today is the raw material for the design of the next-generation solar cell.
