***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-5
semesterName: Semester 5
subjectId: physics
subjectName: Physics
courseId: low-dimensional-materials-lab
courseName: Low-Dimensional Materials Lab (Option C)
moduleId: low-dimensional-materials-lab-module-1
moduleName: Thin Films, Nanomaterials, and Characterisation
lessonId: low-dimensional-materials-lab-m1-l2
lessonName: Optical Characterisation — UV-Vis, Ellipsometry, and Photoluminescence
lessonNumber: 2
moduleNumber: 1
semesterNumber: 5
difficulty: advanced
estimatedStudyMinutes: 50
releaseOrder: 2
prerequisites:
  - low-dimensional-materials-lab-m1-l1
learningObjectives:
  - Measure the UV-Vis transmission spectrum of a thin film; identify the absorption edge and compute the optical band gap.
  - Use an ellipsometer to measure the thickness and the optical constants of a thin film; understand the Tauc plot.
  - Measure the photoluminescence spectrum of a fluorescent thin film; identify the emission peaks.
concepts:
  - UV-Vis spectroscopy
  - Transmittance
  - Absorbance
  - Optical band gap
  - Tauc plot
  - Direct and indirect band gap
  - Ellipsometry
  - Polarisation
  - Photoluminescence
  - Stokes shift
tags:
  - physics
  - laboratory
  - thin-film
  - optical
  - uv-vis
  - ellipsometry
  - photoluminescence
sourceType: authored-courseware
assessmentHints:
  - UV-Vis: measure transmittance T(λ) and absorbance A = -log10(T). The absorption edge gives the optical band gap.
  - Tauc plot: (αhν)^n vs hν, where n = 1/2 for indirect, n = 2 for direct band gap. Extrapolate to α = 0 to get E_g.
  - Ellipsometry: measure the change in polarisation (Ψ, Δ) and fit to a model (e.g. Cauchy, Tauc-Lorentz) to get thickness and optical constants.
status: in-review
***

# Optical Characterisation — UV-Vis, Ellipsometry, and Photoluminescence

## Overview

Optical characterisation of thin films is the measurement of the film's interaction with light: transmittance, reflectance, absorption, photoluminescence, and the optical constants (refractive index, extinction coefficient). The most common techniques are UV-Vis spectroscopy (transmittance and absorbance), ellipsometry (thickness and optical constants), and photoluminescence (emission spectrum).

This lesson covers the apparatus (a UV-Vis spectrophotometer, an ellipsometer, a photoluminescence spectrometer, a sample holder, a reference sample), the procedure (measure the UV-Vis spectrum, the ellipsometric parameters, the PL spectrum), the analysis (compute the optical band gap from the Tauc plot, fit the ellipsometric model to get the thickness and the optical constants, identify the PL peaks), and the dominant sources of error (sample preparation, baseline correction, model fitting).

## Learning Path

1. **Measure the UV-Vis spectrum** of a thin film (e.g. a TiO₂ film on glass, a perovskite film on glass). Use a glass slide as the reference.
2. **Identify the absorption edge** and compute the optical band gap using the Tauc plot.
3. **Measure the ellipsometric parameters** (Ψ, Δ) of the film at several wavelengths (e.g. 400-800 nm).
4. **Fit the ellipsometric model** (e.g. Cauchy, Tauc-Lorentz) to the data; extract the thickness and the optical constants.
5. **Measure the photoluminescence spectrum** of a fluorescent film (e.g. a perovskite, a quantum dot film). Use a laser or a UV lamp as the excitation source.

## Core Explanation

### Theory: UV-Vis Spectroscopy

A UV-Vis spectrophotometer measures the transmittance T(λ) of a sample as a function of wavelength. The light source is a deuterium lamp (UV) and a tungsten lamp (visible); the monochromator selects the wavelength; the detector is a photomultiplier tube (UV) or a silicon photodiode (visible).

The absorbance is

A(λ) = − log_10 T(λ).

The absorption coefficient is

α(λ) = A(λ) · ln(10) / t,

where t is the film thickness. The Tauc plot is

(α h ν)^n vs h ν,

where n = 1/2 for an indirect band gap, n = 2 for a direct band gap, h is Planck's constant, and ν is the frequency. The extrapolation to α = 0 gives the optical band gap E_g.

For a direct band gap semiconductor (e.g. TiO₂, anatase, E_g ~ 3.2 eV), the Tauc plot is linear in (α h ν)² vs h ν. For an indirect band gap semiconductor (e.g. Si, E_g ~ 1.1 eV), the Tauc plot is linear in (α h ν)^(1/2) vs h ν.

### Theory: Ellipsometry

An ellipsometer measures the change in polarisation of light reflected from a sample. The light is polarised (typically at 45° to the plane of incidence); the reflected light is analysed. The ellipsometric parameters Ψ and Δ are defined by

ρ = r_p / r_s = tan(Ψ) · exp(i Δ),

where r_p and r_s are the Fresnel reflection coefficients for p-polarised and s-polarised light. The ratio ρ is complex; its magnitude is tan(Ψ) and its phase is Δ.

The measured Ψ and Δ are fit to a model that describes the film (e.g. a single layer on a substrate). The model parameters are the film thickness and the optical constants (n, k) of the film. Common models are:
- **Cauchy**: n(λ) = A + B / λ² + C / λ⁴, k = 0 (transparent films).
- **Sellmeier**: similar to Cauchy, used for transparent films in the visible.
- **Tauc-Lorentz**: used for absorbing films; the imaginary part of the dielectric constant is described by a Tauc edge and a Lorentz oscillator.
- **Drude**: used for metals; the dielectric constant is described by the plasma frequency and the scattering time.

The fit returns the film thickness and the optical constants at each wavelength. The fit is non-linear and requires a good initial guess.

### Theory: Photoluminescence

Photoluminescence (PL) is the emission of light by a material after absorbing photons. The material is excited by a light source (a laser or a UV lamp); the excited electrons relax to the ground state by emitting photons. The PL spectrum is the intensity of the emitted light as a function of wavelength.

The PL peak position depends on the band gap (for a direct band gap semiconductor) or on the defect states (for an indirect band gap semiconductor). The PL intensity depends on the radiative recombination rate; non-radiative recombination (Auger, surface, defect) reduces the PL intensity.

The Stokes shift is the difference between the absorption edge and the PL peak. The Stokes shift is caused by the relaxation of the excited state before emission.

### Apparatus

- UV-Vis spectrophotometer (e.g. a PerkinElmer Lambda, an Agilent Cary).
- Ellipsometer (e.g. a J.A. Woollam, a Horiba).
- Photoluminescence spectrometer (e.g. a Horiba Fluoromax, a Renishaw inVia).
- Sample holder.
- Reference sample (e.g. a blank glass slide).
- Computer with data acquisition software.

### Procedure

1. **Measure the UV-Vis spectrum.** Place the sample in the spectrophotometer; place a blank glass slide in the reference beam. Scan from 200 nm to 1100 nm in 1 nm steps. Record the transmittance T(λ).
2. **Compute the absorbance** A = − log_10 T. Plot T(λ) and A(λ).
3. **Identify the absorption edge.** The absorption edge is the wavelength at which the absorbance rises sharply. The optical band gap is E_g = h c / λ_edge (for a direct band gap).
4. **Construct the Tauc plot.** Compute α = A · ln(10) / t. Compute (α h ν)^n for n = 1/2 or 2. Plot vs h ν. Extrapolate to α = 0.
5. **Measure the ellipsometric parameters.** Set the angle of incidence (e.g. 70°). Scan the wavelength from 400 nm to 800 nm in 10 nm steps. Record Ψ and Δ.
6. **Fit the ellipsometric model.** Use the manufacturer's software (e.g. WVASE for J.A. Woollam) to fit the model. Extract the thickness and the optical constants.
7. **Measure the PL spectrum.** Place the sample in the PL spectrometer. Set the excitation wavelength (e.g. 405 nm for a blue laser). Scan the emission from 400 nm to 800 nm. Record the spectrum.

### Analysis

#### UV-Vis Tauc Plot

For a TiO₂ film (anatase, direct band gap, E_g = 3.2 eV), the Tauc plot is (α h ν)² vs h ν. The extrapolation to (α h ν)² = 0 gives h ν = E_g = 3.2 eV.

For a Si film (indirect band gap, E_g = 1.1 eV), the Tauc plot is (α h ν)^(1/2) vs h ν. The extrapolation gives h ν = E_g = 1.1 eV.

#### Ellipsometry

For a SiO₂ film on Si (Cauchy model, transparent), the fit returns the thickness (~ 100 nm) and the refractive index (n ~ 1.46 at 632 nm).

For an a-Si film on glass (Tauc-Lorentz model), the fit returns the thickness (~ 200 nm) and the optical constants (n ~ 3.5, k ~ 0.5 at 500 nm).

#### Photoluminescence

For a CH₃NH₃PbI₃ perovskite film, the PL peak is at ~ 770 nm, with a FWHM of ~ 50 nm. The Stokes shift is small (~ 10 nm), indicating that the band gap is direct and the exciton binding energy is small.

### Sources of Error

- **Sample preparation.** Dust, fingerprints, and surface contamination affect the optical measurement. Clean the sample with isopropanol and dry with nitrogen.
- **Baseline correction.** The UV-Vis spectrum must be baseline-corrected with a reference sample. An incorrect baseline shifts the absorption edge.
- **Model fitting.** The ellipsometric model must be appropriate for the film. A wrong model gives incorrect thickness and optical constants.
- **Substrate interference.** The substrate can interfere with the measurement (e.g. the glass substrate has its own absorption in the UV). Use a reference substrate to subtract the substrate signal.
- **Photoluminescence background.** The PL spectrum can have a background (e.g. scattering of the excitation light, substrate fluorescence). Subtract the background using a reference measurement.

## Key Ideas

- UV-Vis: measure T(λ) and A(λ); identify the absorption edge; compute the optical band gap from the Tauc plot.
- Ellipsometry: measure Ψ and Δ; fit a model (Cauchy, Tauc-Lorentz) to get the thickness and the optical constants.
- Photoluminescence: measure the emission spectrum; identify the peaks; determine the Stokes shift.
- Tauc plot: (α h ν)^n vs h ν. n = 1/2 for indirect, n = 2 for direct band gap.

## Worked Examples

#### Example 1: Tauc Plot for TiO₂

A TiO₂ film (anatase) has a thickness of 100 nm. The UV-Vis spectrum shows the transmittance dropping from 90 % at 400 nm to 10 % at 320 nm. The absorption edge is at ~ 380 nm (50 % transmittance).

The optical band gap is E_g = h c / λ_edge = 6.626 × 10⁻³⁴ · 3 × 10⁸ / 380 × 10⁻⁹ = 5.23 × 10⁻¹⁹ J = 3.27 eV. This is consistent with the literature value for anatase (3.2 eV).

#### Example 2: Ellipsometry of SiO₂

A SiO₂ film on Si is measured with an ellipsometer at 70° incidence. The measured parameters are Ψ = 30.5°, Δ = 120°. The fit with a Cauchy model returns a thickness of 105 nm and a refractive index of 1.46 (at 632 nm).

#### Example 3: PL of a Perovskite

A CH₃NH₃PbI₃ perovskite film is excited with a 405 nm laser. The PL spectrum shows a peak at 770 nm with a FWHM of 50 nm. The Stokes shift is 10 nm (the absorption edge is at ~ 760 nm). The PL intensity is 10⁵ counts/s.

## Common Misconceptions

- **"The band gap from the Tauc plot is the same as the electrical band gap."** The optical band gap is the energy of the optical transition; the electrical band gap is the energy of the band-to-band transition. They are the same for a direct band gap semiconductor; they differ for an indirect band gap semiconductor (e.g. Si).
- **"The Tauc plot is linear in the absorption edge."** The Tauc plot is linear in the absorption edge only for the correct value of n (1/2 for indirect, 2 for direct). A wrong n gives a non-linear plot and an incorrect E_g.
- **"The ellipsometric model is exact."** The model is an approximation. A wrong model gives incorrect thickness and optical constants. The fit must be validated with another measurement (e.g. profilometry, XRR).
- **"The PL peak position is the band gap."** The PL peak is the energy of the optical transition, which is the band gap (for a direct band gap) or the energy of the defect state (for an indirect band gap). The Stokes shift is the difference.
- **"The PL intensity is proportional to the absorption."** The PL intensity depends on the radiative and non-radiative recombination rates. A sample with high absorption but high non-radiative recombination has low PL.

## Connections

- **Low-Dimensional Materials (Sem 5 theory).** Optical characterisation is the primary tool for studying low-dimensional systems. The optical band gap, the exciton binding energy, and the carrier dynamics are all measured by optical techniques.
- **Materials science.** Optical characterisation is the workhorse of materials science: band gap, refractive index, extinction coefficient, PL lifetime. The same techniques are used in every laboratory.
- **Solar cells.** The optical band gap and the absorption coefficient of the absorber determine the solar cell efficiency. The PL lifetime is a measure of the carrier recombination.
- **LEDs.** The emission wavelength, the FWHM, and the PL efficiency of the active layer determine the LED performance. The same optical characterisation is used.
- **Lasers.** The gain spectrum, the lasing threshold, and the output wavelength of a laser are all measured by optical techniques.

## Quick Check

1. What is the Tauc plot? How is it used to find the band gap?
2. What is the difference between n = 1/2 and n = 2 in the Tauc plot?
3. What is the role of the QCM in ellipsometry? (Trick question — QCM is for thermal evaporation; ellipsometry is for thickness measurement.)
4. What is the Stokes shift?
5. What is the angle of incidence in a typical ellipsometer?
6. What is the Cauchy model used for?
7. What is the Tauc-Lorentz model used for?
8. A film has an absorption edge at 500 nm. What is the optical band gap?

## Takeaway

Optical characterisation is the lab's primary tool for studying the electronic structure of thin films. UV-Vis gives the band gap; ellipsometry gives the thickness and the optical constants; PL gives the emission spectrum. The lab's discipline — careful sample preparation, proper baseline correction, accurate model fitting, honest uncertainty estimation — is the same discipline that runs through every optical measurement. The same principles (Tauc plot, ellipsometric model, PL spectrum) apply to all thin films, from the laboratory sample to the industrial product. The data you collect today is the raw material for the analysis that follows.
