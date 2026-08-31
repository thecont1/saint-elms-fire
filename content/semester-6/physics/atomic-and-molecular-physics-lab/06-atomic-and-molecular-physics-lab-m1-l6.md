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
lessonId: atomic-and-molecular-physics-lab-m1-l6
lessonName: Uncertainty, Advanced Data Analysis, and the Viva
lessonNumber: 6
moduleNumber: 1
semesterNumber: 6
difficulty: advanced
estimatedStudyMinutes: 55
releaseOrder: 6
prerequisites:
  - atomic-and-molecular-physics-lab-m1-l5
learningObjectives:
  - Apply advanced data analysis techniques to atomic and molecular spectra: line fitting, peak deconvolution, baseline correction.
  - Use Fourier transform spectroscopy to extract high-resolution spectra from interferograms.
  - Write a complete lab report for an atomic or molecular physics experiment.
  - Anticipate and answer viva-style questions about the five atomic and molecular physics experiments.
concepts:
  - Line fitting (Gaussian, Lorentzian, Voigt)
  - Peak deconvolution
  - Baseline correction
  - Fourier transform spectroscopy
  - Interferogram
  - Apodisation
  - Phase correction
  - Report writing
  - Viva preparation
tags:
  - physics
  - laboratory
  - atomic
  - data-analysis
  - ftir
  - report-writing
  - viva
sourceType: authored-courseware
assessmentHints:
  - Voigt profile: convolution of Gaussian and Lorentzian. Use for spectral lines that have both Doppler (Gaussian) and natural (Lorentzian) broadening.
  - FTIR: Fourier transform of the interferogram gives the spectrum. Apodisation reduces the side lobes.
  - The report should be self-contained; the viva should test the understanding of the experiment, the analysis, and the conclusions.
status: in-review
***

# Uncertainty, Advanced Data Analysis, and the Viva

## Overview

The five atomic and molecular physics experiments you have done — atomic spectroscopy, interferometry, lasers, molecular spectroscopy, and electronic spectra — produce data that require sophisticated analysis. The spectral lines must be fit (to extract the centre, the width, and the area), the baseline must be corrected, the lines must be deconvolved (to separate overlapping lines), and the interferogram (in FTIR) must be transformed to a spectrum. This lesson covers these advanced data analysis techniques, the principles of Fourier transform spectroscopy, a worked example of a complete lab report, and the viva questions an examiner is likely to ask.

## Learning Path

1. **Fit a spectral line** with a Gaussian, Lorentzian, or Voigt profile; extract the centre, the width, and the area.
2. **Deconvolve overlapping lines** (e.g. the sodium doublet, the mercury triplet) with multiple Voigt profiles.
3. **Correct the baseline** of a spectrum (e.g. with a polynomial, with asymmetric least squares).
4. **Compute the Fourier transform** of an interferogram; apply apodisation and phase correction.
5. **Write a complete report** for an atomic or molecular physics experiment.
6. **Viva rehearsal** — work through the viva questions with a partner.

## Core Explanation

### Line Fitting

A spectral line is typically fit with a Gaussian (for Doppler-broadened lines), a Lorentzian (for pressure-broadened or lifetime-broadened lines), or a Voigt (a convolution of Gaussian and Lorentzian, for lines with both types of broadening).

The Gaussian profile is

G(ν) = A exp(− (ν − ν_0)² / (2 σ²)),

where A is the peak amplitude, ν_0 is the centre, and σ is the standard deviation. The FWHM is 2.355 σ.

The Lorentzian profile is

L(ν) = (A / π) (Γ / 2) / ((ν − ν_0)² + (Γ / 2)²),

where A is the area, ν_0 is the centre, and Γ is the FWHM.

The Voigt profile is the convolution of a Gaussian and a Lorentzian:

V(ν) = ∫ G(ν − ν') L(ν') dν'.

The Voigt profile is the most general line shape for a spectral line with both Gaussian and Lorentzian broadening. The fit returns the centre, the Gaussian width, the Lorentzian width, and the area.

### Peak Deconvolution

When two lines overlap (e.g. the sodium doublet at 589.0 and 589.6 nm), a single Voigt profile is not sufficient. The spectrum is fit with two Voigt profiles (one for each line), with the centres, widths, and areas as free parameters. The fit is done by non-linear least squares (Levenberg-Marquardt).

For the sodium doublet, the centres are known (589.0 and 589.6 nm). The fit returns the widths (FWHM ~ 0.05 nm) and the areas (the area ratio is the intensity ratio of the two lines).

### Baseline Correction

The baseline of a spectrum can be corrected with:
- A constant (if the baseline is flat).
- A linear function (if the baseline is sloping).
- A polynomial (if the baseline is curved).
- Asymmetric least squares (for complex baselines).

The baseline is estimated from the regions of the spectrum without lines, then subtracted from the full spectrum.

### Fourier Transform Spectroscopy

In a Fourier transform spectrometer (e.g. an FTIR), the light is split into two beams; one beam is reflected from a fixed mirror, the other from a moving mirror. The two beams are recombined; the intensity at the detector is an interferogram: I(δ) as a function of the path difference δ. The spectrum is the Fourier transform of the interferogram:

S(ν) = ∫ I(δ) exp(−2 π i ν δ) dδ.

The interferogram is sampled at discrete values of δ; the discrete Fourier transform gives the spectrum. The resolution is Δν = 1 / δ_max, where δ_max is the maximum path difference.

Apodisation is the multiplication of the interferogram by a function that decays smoothly to zero at the edges (e.g. a triangle, a Hanning, a Happ-Genzel). Apodisation reduces the side lobes in the spectrum at the cost of slightly broader lines.

Phase correction is the correction of the phase error in the interferogram (due to the finite sampling and the electronic delays). The Mertz method and the Forman method are the standard phase-correction techniques.

### Apparatus

- Computer with Python and SciPy.
- Data from previous lessons (atomic spectra, molecular spectra, FTIR data).
- Data visualisation software.

### Procedure

1. **Load the spectrum.** Load the data (wavelength, intensity) from the previous lessons.
2. **Fit a spectral line.** Use scipy.optimize.curve_fit to fit a Voigt profile to a single line. Extract the centre, the widths, and the area.
3. **Fit multiple lines.** Fit two or more Voigt profiles to overlapping lines (e.g. the sodium doublet). Extract the centres, the widths, and the areas.
4. **Correct the baseline.** Identify the regions without lines; fit a polynomial; subtract the baseline.
5. **Fourier transform an interferogram.** Compute the FFT; apply apodisation; apply phase correction. Plot the spectrum.
6. **Write a complete report** for one of the atomic or molecular physics experiments.
7. **Viva rehearsal** — work through the viva questions with a partner.

### Analysis

#### Line Fitting Example

A sodium doublet spectrum is fit with two Voigt profiles. The centres are fixed at 589.0 and 589.6 nm. The fit returns:

- Line 1 (589.0 nm): area A₁ = 1000 (arbitrary units), Gaussian FWHM Γ_G = 0.05 nm, Lorentzian FWHM Γ_L = 0.01 nm.
- Line 2 (589.6 nm): area A₂ = 500, Γ_G = 0.05 nm, Γ_L = 0.01 nm.

The intensity ratio is 2:1, consistent with the D2:D1 ratio (the D2 line is twice as strong as the D1 line because the upper level is J = 3/2, with 4 degenerate states; the D1 line is J = 1/2, with 2 degenerate states).

#### FTIR Example

An FTIR interferogram of HCl is acquired. The interferogram is sampled at every 0.5 μm of mirror displacement, for a total of 2¹⁶ = 65536 points. The maximum path difference is δ_max = 0.5 × 10⁻⁶ × 65536 = 0.033 m. The resolution is Δν = 1 / δ_max = 30 cm⁻¹ (in wavenumber).

The interferogram is apodised with a Hanning function; the FFT gives the spectrum. The fundamental band of HCl is at 2885.9 cm⁻¹, with a FWHM of ~ 5 cm⁻¹. The overtone is at 5668.0 cm⁻¹.

### Sources of Error

- **Initial guess.** The Levenberg-Marquardt algorithm requires a good initial guess. A bad initial guess can lead to a local minimum.
- **Baseline correction.** An incorrect baseline shifts the line positions and the areas. Use a robust baseline estimation (e.g. asymmetric least squares).
- **Apodisation.** The choice of apodisation function affects the line shape. A strong apodisation (e.g. Happ-Genzel) reduces the side lobes but broadens the lines.
- **Phase correction.** An incorrect phase correction introduces artefacts in the spectrum. The Mertz method is generally more robust.
- **Noise.** The noise in the spectrum limits the detection of weak lines. Use signal averaging to reduce the noise.

## Key Ideas

- Line fitting: Gaussian (Doppler), Lorentzian (pressure/lifetime), Voigt (both).
- Peak deconvolution: fit multiple Voigt profiles to overlapping lines.
- Baseline correction: polynomial or asymmetric least squares.
- Fourier transform spectroscopy: FFT of the interferogram gives the spectrum. Apodisation and phase correction are required.
- The report and the viva are the formal record and the oral examination of the project.

## Common Misconceptions

- **"The Voigt profile is just a sum of a Gaussian and a Lorentzian."** No. The Voigt profile is the convolution of a Gaussian and a Lorentzian. The convolution in the frequency domain is the product in the time domain; both forms are equivalent.
- **"The baseline is always constant."** No. The baseline can be sloping, curved, or structured. A constant baseline is the simplest case.
- **"Apodisation is optional."** Apodisation is required to reduce the side lobes in the spectrum. Without apodisation, the side lobes can overwhelm the weak lines.
- **"The phase correction is a small correction."** The phase correction can be a large correction (up to a few radians) if the interferometer is not perfectly aligned.
- **"A higher resolution is always better."** A higher resolution (longer maximum path difference) requires a longer measurement time and a more stable interferometer. The optimal resolution is the smallest that resolves the features of interest.

## Connections

- **Atomic and Molecular Physics (Sem 6 theory).** The advanced data analysis techniques are the standard tools in atomic and molecular spectroscopy. The line fitting, the peak deconvolution, the baseline correction, and the FTIR are the everyday tools of the spectroscopist.
- **Optics.** The Fourier transform is the central tool of optics. The Fourier transform of an interferogram gives the spectrum; the Fourier transform of a diffraction pattern gives the image; the Fourier transform of a hologram gives the reconstructed object.
- **Signal processing.** The same techniques (filtering, apodisation, phase correction) are used in every signal processing application: audio, video, communications, control systems.
- **Data science.** The data analysis (fitting, deconvolution, baseline correction) is the same as in any data science project. The tools (Python, SciPy) are standard.
- **Astronomy (Sem 5/6).** FTIR is used in astronomy to observe the IR spectra of stars, galaxies, and interstellar clouds. The same techniques (Fourier transform, apodisation, phase correction) are used.

## Quick Check

1. What is the Voigt profile? When is it used?
2. What is the FWHM of a Gaussian with σ = 0.1 nm?
3. What is the difference between apodisation and phase correction?
4. What is the resolution of an FTIR with δ_max = 1 cm?
5. How is the baseline corrected?
6. What is the maximum path difference for a resolution of 0.1 cm⁻¹?
7. What is the fluorescence quantum yield?
8. What is the Bohr magneton?

## Takeaway

Advanced data analysis is the lab's introduction to the sophisticated techniques used in modern atomic and molecular physics. The line fitting, the peak deconvolution, the baseline correction, the Fourier transform spectroscopy, and the uncertainty analysis are the central concepts. The lab's discipline — careful data collection, proper application of the model, honest estimation of the uncertainties, clear reporting of the results — is the same discipline that runs through every atomic and molecular physics experiment. The same techniques apply to all spectroscopic data, from the laboratory spectrum to the astronomical spectrum. The data you analyse today is the raw material for the conclusions you draw tomorrow.
