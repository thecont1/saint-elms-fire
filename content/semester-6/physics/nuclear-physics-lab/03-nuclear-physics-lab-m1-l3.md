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
lessonId: nuclear-physics-lab-m1-l3
lessonName: Nuclear Spectra — Alpha, Beta, Gamma
lessonNumber: 3
moduleNumber: 1
semesterNumber: 6
difficulty: advanced
estimatedStudyMinutes: 50
releaseOrder: 3
prerequisites:
  - nuclear-physics-lab-m1-l2
learningObjectives:
  - Measure the alpha spectrum of a ²⁴¹Am source with a silicon detector; identify the alpha peaks and their energies.
  - Measure the gamma spectrum of ⁶⁰Co and ¹³⁷Cs with a NaI(Tl) scintillation detector; identify the photopeaks and the Compton edges.
  - Determine the energy calibration of the detector (channel number vs energy).
concepts:
  - Alpha decay
  - Beta decay
  - Gamma decay
  - Alpha spectrum
  - Beta spectrum
  - Gamma spectrum
  - Photopeak
  - Compton edge
  - Energy calibration
  - Scintillation detector
  - Semiconductor detector
tags:
  - physics
  - laboratory
  - nuclear
  - spectra
  - alpha
  - beta
  - gamma
sourceType: authored-courseware
assessmentHints:
  - ²⁴¹Am alpha lines: 5.49 MeV (85%), 5.44 MeV (13%).
  - ⁶⁰Co gamma lines: 1.17 and 1.33 MeV.
  - ¹³⁷Cs gamma line: 0.662 MeV.
  - Compton edge = E_gamma / (1 + 2 E_gamma / (m_e c^2)) for back-scattered photons.
status: in-review
***

# Nuclear Spectra — Alpha, Beta, Gamma

## Overview

Nuclear spectroscopy is the measurement of the energy spectra of the particles emitted in nuclear decay. Alpha particles (²⁴¹Am, ²³⁸Pu) have discrete energies, typically 4-6 MeV. Beta particles (electrons or positrons) have a continuous spectrum from 0 to a maximum (the Q value). Gamma rays have discrete energies, typically 0.1-2 MeV. The spectra are measured with semiconductor detectors (for alpha and beta) or scintillation detectors (for gamma).

This lesson covers the apparatus (a silicon surface-barrier detector for alpha, a Geiger counter or a plastic scintillator for beta, a NaI(Tl) scintillation detector for gamma, a multichannel analyser, calibration sources), the procedure (record the spectra, identify the peaks, calibrate the energy scale), the analysis (determine the energy calibration, identify the alpha, beta, and gamma peaks, measure the resolution), and the dominant sources of error (energy calibration, detector resolution, dead time, pile-up).

## Learning Path

1. **Set up the alpha spectrometer.** Mount the silicon detector in a vacuum chamber; place the alpha source (²⁴¹Am) close to the detector; connect to the multichannel analyser.
2. **Calibrate the alpha spectrometer.** Use a calibration source (²⁴¹Am, ²⁴⁴Cm) with known alpha energies. Plot the channel number against the energy; fit a straight line.
3. **Measure the alpha spectrum of ²⁴¹Am.** Record the spectrum; identify the alpha peaks (5.49 and 5.44 MeV).
4. **Set up the gamma spectrometer.** Mount the NaI(Tl) detector; place the gamma source (⁶⁰Co, ¹³⁷Cs) near the detector; connect to the multichannel analyser.
5. **Calibrate the gamma spectrometer.** Use calibration sources (⁶⁰Co, ¹³⁷Cs, ⁵⁷Co) with known gamma energies. Plot the channel number against the energy; fit a straight line.
6. **Measure the gamma spectrum of ⁶⁰Co.** Record the spectrum; identify the photopeaks (1.17 and 1.33 MeV) and the Compton edges.

## Core Explanation

### Theory: Alpha Decay

Alpha decay is the emission of an alpha particle (⁴He nucleus) from a heavy nucleus. The alpha particle has a discrete energy, typically 4-6 MeV. The decay is

^A_Z X → ^{A-4}_{Z-2} Y + α.

The Q value is

Q = (m_X − m_Y − m_α) c² = T_α + T_Y,

where T_α and T_Y are the kinetic energies of the alpha particle and the daughter nucleus. By momentum conservation, T_Y = T_α · m_α / m_Y. For ²⁴¹Am (Z = 95), the alpha particle carries ~ 98 % of the Q value.

For ²⁴¹Am, the main alpha lines are at 5.49 MeV (85 %) and 5.44 MeV (13 %); the half-life is 432 years.

### Theory: Beta Decay

Beta decay is the emission of an electron (β⁻) or a positron (β⁺) from a nucleus. The beta particle has a continuous spectrum from 0 to a maximum (the Q value). The continuous spectrum is due to the three-body decay: the daughter nucleus, the beta particle, and the (anti)neutrino share the Q value.

The Q value is

Q = (m_X − m_Y) c² (for β⁻ decay, with the approximation m_e ≪ m_p, m_n).

The mean energy of the beta particle is ~ Q/3 (for an allowed transition); the maximum is Q.

### Theory: Gamma Decay

Gamma decay is the emission of a gamma ray from an excited nucleus. The gamma ray has a discrete energy, equal to the difference between the nuclear levels. The decay is

^A_Z X* → ^A_Z X + γ.

For ⁶⁰Co, the decay is

⁶⁰Co → ⁶⁰Ni* + β⁻ + ν̄_e (T_{1/2} = 5.27 y)
⁶⁰Ni* → ⁶⁰Ni + γ (1.17 MeV) + γ (1.33 MeV).

### Theory: Gamma Spectrum

A gamma spectrum measured with a NaI(Tl) detector has three components:
- **Photopeak**: the full energy of the gamma ray is absorbed by the detector (via photoelectric absorption, Compton scattering followed by photoelectric absorption, or pair production followed by annihilation). The photopeak is a Gaussian centred at E_γ.
- **Compton edge**: the maximum energy transferred to an electron in a single Compton scatter. The Compton edge is at

E_C = E_γ / (1 + m_e c² / (2 E_γ)).

For E_γ = 0.662 MeV (¹³⁷Cs), E_C = 0.662 / (1 + 0.511 / (2 · 0.662)) = 0.477 MeV. The Compton edge is the maximum energy in the Compton continuum; the back-scatter peak is at E_B = E_γ − E_C = 0.185 MeV.

- **Pair production peak**: if E_γ > 1.022 MeV, the gamma ray can produce an electron-positron pair in the detector. The kinetic energy of the pair is E_γ − 1.022 MeV; the positron annihilates with an electron, producing two 0.511 MeV photons. If both escape the detector, the energy deposited is E_γ − 1.022 MeV (single-escape peak). If one escapes, the energy is E_γ − 0.511 MeV (double-escape peak).

### Theory: Energy Calibration

The multichannel analyser records the pulse height in channels. The energy calibration is the relation between the channel number and the energy. The calibration is typically linear:

E = a · channel + b,

where a and b are determined by fitting two or more known peaks. For a NaI(Tl) detector, the resolution is ~ 8 % at 0.662 MeV (the FWHM is ~ 50 keV).

### Apparatus

- Alpha spectrometer: silicon surface-barrier detector (active area ~ 100 mm², depletion depth ~ 100 μm), vacuum chamber (10⁻³ Torr), preamplifier, spectroscopy amplifier, multichannel analyser (MCA).
- Gamma spectrometer: NaI(Tl) scintillation detector (1" × 1" or 2" × 2" crystal), photomultiplier tube, preamplifier, MCA.
- Beta spectrometer: plastic scintillator or Geiger counter.
- Sources: ²⁴¹Am (alpha, 5.49 MeV), ²⁴⁴Cm (alpha, 5.81 MeV), ⁶⁰Co (gamma, 1.17 and 1.33 MeV), ¹³⁷Cs (gamma, 0.662 MeV), ⁵⁷Co (gamma, 0.122 MeV).
- Safety equipment: lab coat, gloves, dosimeter, survey meter.
- Safety glasses.

### Procedure

1. **Set up the alpha spectrometer.** Mount the silicon detector in a vacuum chamber; place the alpha source close to the detector (a few cm); evacuate the chamber; connect to the MCA.
2. **Calibrate.** Use a ²⁴¹Am + ²⁴⁴Cm mixed source (alpha lines at 5.49 and 5.81 MeV). Record the spectrum; identify the peaks; fit the energy calibration.
3. **Measure the alpha spectrum of ²⁴¹Am.** Record the spectrum; identify the two main alpha peaks (5.49 and 5.44 MeV).
4. **Set up the gamma spectrometer.** Mount the NaI(Tl) detector; place the gamma source near the detector; connect to the MCA.
5. **Calibrate.** Use ⁵⁷Co (0.122 MeV), ¹³⁷Cs (0.662 MeV), and ⁶⁰Co (1.17 and 1.33 MeV). Record the spectra; identify the photopeaks; fit the energy calibration.
6. **Measure the gamma spectrum of ⁶⁰Co.** Record the spectrum; identify the photopeaks and the Compton edges.

### Analysis

#### Alpha Spectrum

The alpha spectrum of ²⁴¹Am shows two peaks: a major peak at 5.49 MeV (85 %) and a minor peak at 5.44 MeV (13 %). The energy resolution is ~ 1 % (FWHM ~ 50 keV for a 5 MeV alpha).

#### Gamma Spectrum of ⁶⁰Co

The gamma spectrum of ⁶⁰Co shows:
- A photopeak at 1.33 MeV (the 1.17 MeV photopeak is also present, but is partially obscured by the Compton continuum of the 1.33 MeV peak).
- A Compton edge at 0.96 MeV (for E_γ = 1.33 MeV: E_C = 1.33 / (1 + 0.511 / (2 · 1.33)) = 1.04 MeV; close to 0.96 MeV — there's a slight discrepancy because of the finite detector resolution).
- A back-scatter peak at ~ 0.2 MeV.
- A 0.511 MeV peak (from the pair production and annihilation in the surrounding material).
- A single-escape peak at 0.82 MeV (E_γ − 0.511 MeV = 0.82 MeV) and a double-escape peak at 1.33 − 1.022 = 0.31 MeV.

#### Energy Calibration

For the gamma spectrometer, the energy calibration is

E (MeV) = a · channel + b.

For the ⁵⁷Co (0.122 MeV), ¹³⁷Cs (0.662 MeV), and ⁶⁰Co (1.17 and 1.33 MeV) photopeaks, plot the channel number against the energy; fit a straight line.

The slope a is the energy per channel (e.g. 0.005 MeV/channel = 5 keV/channel). The intercept b is the energy at channel 0.

### Sources of Error

- **Energy calibration.** The energy calibration is the dominant source of systematic error. Use multiple calibration sources to fit the calibration.
- **Detector resolution.** The finite resolution of the detector broadens the peaks. The resolution is the FWHM of the photopeak.
- **Dead time.** High count rates can saturate the MCA. Use a low activity source or a longer distance.
- **Pile-up.** Two gamma rays arriving at the same time can be recorded as one event with the sum of the energies. Use a low count rate to avoid pile-up.
- **Background.** The background (cosmic rays, natural radioactivity) contributes to the spectrum. Subtract the background or use shielding.

## Key Ideas

- Alpha spectrum: discrete energies (4-6 MeV). For ²⁴¹Am, 5.49 and 5.44 MeV.
- Beta spectrum: continuous from 0 to Q. The mean energy is ~ Q/3.
- Gamma spectrum: photopeak (full energy), Compton edge (E_C = E_γ / (1 + m_e c² / (2 E_γ))), back-scatter peak, pair production peaks.
- Energy calibration: E = a · channel + b.

## Worked Examples

#### Example 1: Alpha Energy of ²⁴¹Am

The ²⁴¹Am alpha spectrum shows peaks at channels 1098 and 1088. The energy calibration gives

E = 0.005 MeV/channel · channel + 0.02 MeV.

For the major peak: E = 0.005 · 1098 + 0.02 = 5.51 MeV. For the minor peak: E = 0.005 · 1088 + 0.02 = 5.46 MeV. The literature values are 5.49 and 5.44 MeV. The agreement is within the calibration uncertainty.

#### Example 2: Compton Edge of ¹³⁷Cs

For E_γ = 0.662 MeV, the Compton edge is

E_C = E_γ / (1 + m_e c² / (2 E_γ)) = 0.662 / (1 + 0.511 / (2 · 0.662)) = 0.477 MeV.

The measured Compton edge in the spectrum is at ~ 0.48 MeV, in agreement with the theoretical value.

#### Example 3: Pair Production in ⁶⁰Co

For ⁶⁰Co (E_γ = 1.33 MeV), the single-escape peak is at E_γ − 0.511 = 0.82 MeV, and the double-escape peak is at E_γ − 1.022 = 0.31 MeV.

The measured spectrum shows peaks at ~ 0.82 and ~ 0.31 MeV, in agreement with the theoretical values.

## Common Misconceptions

- **"The alpha particle has a single energy."** No. The alpha spectrum has multiple lines (e.g. ²⁴¹Am has two main lines at 5.49 and 5.44 MeV).
- **"The beta particle has a single energy."** No. The beta spectrum is continuous from 0 to Q. The shape is determined by the Fermi theory.
- **"The gamma ray has a single energy."** Each gamma transition has a single energy, but the spectrum may have multiple gamma rays (e.g. ⁶⁰Co has two gamma rays at 1.17 and 1.33 MeV).
- **"The Compton edge is at E_γ / 2."** No. The Compton edge is at E_C = E_γ / (1 + m_e c² / (2 E_γ)). For E_γ = 0.662 MeV, E_C = 0.48 MeV, not 0.33 MeV.
- **"The photopeak is always the largest peak."** For high-energy gamma rays, the pair production peaks can be larger than the photopeak (if the detector is small).

## Connections

- **Nuclear Physics (Sem 6 theory).** Nuclear spectroscopy is the central tool for studying nuclear structure. The alpha, beta, and gamma spectra give the level scheme of the nucleus; the decay rates give the matrix elements; the angular correlations give the spins and parities.
- **Medical physics.** Nuclear medicine uses gamma-emitting isotopes (⁹⁹ᵐTc, ¹³¹I, ⁶⁰Co, ¹⁸F) for imaging and therapy. The gamma spectrum is used to identify the isotope and to quantify the activity.
- **Geology.** Gamma spectroscopy is used to identify radioactive isotopes in rocks and minerals. The ⁴⁰K gamma ray at 1.46 MeV is the basis of the K-Ar dating method.
- **Astronomy (Sem 5/6).** Gamma-ray telescopes (e.g. Fermi, INTEGRAL) observe the gamma-ray spectra of celestial sources. The line emission identifies the radioactive isotopes produced in supernovae and other nucleosynthesis events.
- **Environmental science.** Gamma spectroscopy is used to monitor radioactive contamination in the environment. The ¹³⁷Cs from Chernobyl and Fukushima is a major concern.

## Quick Check

1. What are the main alpha lines of ²⁴¹Am?
2. What is the shape of the beta spectrum?
3. What is the photopeak? The Compton edge? The back-scatter peak?
4. What is the energy of the Compton edge for ¹³⁷Cs (0.662 MeV)?
5. What is the single-escape peak for ⁶⁰Co (1.33 MeV)?
6. How is the energy calibration done?
7. What is the resolution of a NaI(Tl) detector?
8. Why is pair production only possible above 1.022 MeV?

## Takeaway

Nuclear spectroscopy is the lab's primary tool for studying nuclear decay. The alpha, beta, and gamma spectra give the level scheme, the decay rates, and the spins and parities. The lab's discipline — careful source handling, accurate energy calibration, proper detector operation, honest uncertainty estimation — is the same discipline that runs through every nuclear spectroscopy experiment. The same principles (energy calibration, photopeak identification, Compton edge) apply to all gamma-ray spectra, from the laboratory source to the astronomical source. The data you collect today is the raw material for the analysis that follows.
