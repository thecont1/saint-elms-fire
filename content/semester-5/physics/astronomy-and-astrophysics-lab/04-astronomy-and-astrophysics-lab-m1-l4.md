***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-5
semesterName: Semester 5
subjectId: physics
subjectName: Physics
courseId: astronomy-and-astrophysics-lab
courseName: Astronomy and Astrophysics Lab (Option A)
moduleId: astronomy-and-astrophysics-lab-module-1
moduleName: Observational Techniques, Photometry, and Data Reduction
lessonId: astronomy-and-astrophysics-lab-m1-l4
lessonName: Spectroscopy with a Slit Spectrograph
lessonNumber: 4
moduleNumber: 1
semesterNumber: 5
difficulty: advanced
estimatedStudyMinutes: 55
releaseOrder: 4
prerequisites:
  - astronomy-and-astrophysics-lab-m1-l3
learningObjectives:
  - Acquire a spectrum of a bright star with a slit spectrograph attached to a telescope.
  - Calibrate the wavelength scale using a comparison lamp (e.g. Hg, Ne, Ar).
  - Identify spectral features (absorption lines, emission lines) in the spectrum and measure their equivalent widths.
concepts:
  - Spectrograph
  - Slit
  - Grating
  - Wavelength calibration
  - Comparison lamp
  - Spectral resolution
  - Equivalent width
  - Doppler shift
tags:
  - physics
  - laboratory
  - astronomy
  - spectroscopy
  - spectrograph
  - equivalent-width
sourceType: authored-courseware
assessmentHints:
  - Wavelength calibration: use a comparison lamp with known spectral lines (e.g. Hg, Ne, Ar).
  - Equivalent width: measure the area of an absorption line, in wavelength units.
  - Doppler shift: Δλ / λ = v / c, where v is the radial velocity.
status: in-review
***

# Spectroscopy with a Slit Spectrograph

## Overview

A spectrograph is an instrument that disperses the light from an astronomical source into its constituent wavelengths and records the resulting spectrum on a detector. A slit spectrograph uses a narrow slit at the focal plane of the telescope, followed by a collimator, a dispersing element (a grating or a prism), and a camera that focuses the spectrum onto a CCD. The output is a two-dimensional image: one axis is the spatial position along the slit, the other is the wavelength.

This lesson covers the apparatus (a telescope with a slit spectrograph, a comparison lamp, a CCD camera), the procedure (acquire a spectrum of a bright star, acquire a comparison spectrum, calibrate the wavelength scale), the analysis (identify spectral features, measure equivalent widths, compute the radial velocity from the Doppler shift), and the dominant sources of error (slit alignment, wavelength calibration, scattered light).

## Learning Path

1. **Set up the spectrograph** — attach the spectrograph to the telescope; align the slit with the focal plane; focus the camera.
2. **Acquire a flat field for the spectrograph** — illuminate the slit with a uniform source (e.g. a continuum lamp).
3. **Acquire a comparison spectrum** — illuminate the slit with a comparison lamp (e.g. Hg, Ne, Ar).
4. **Acquire a science spectrum** — point the telescope at a bright star; record the spectrum.
5. **Reduce the spectrum** — bias subtraction, flat field, extraction of the one-dimensional spectrum, wavelength calibration.

## Core Explanation

### Theory: Spectrograph

A slit spectrograph consists of:
- **Slit**: a narrow opening (typically 10-100 μm wide) at the focal plane of the telescope. The slit defines the spatial resolution along the slit direction.
- **Collimator**: a lens or mirror that collimates the light from the slit.
- **Dispersing element**: a grating or prism that disperses the light into its constituent wavelengths.
- **Camera**: a lens or mirror that focuses the spectrum onto the CCD.

The output is a two-dimensional image: one axis is the spatial position along the slit, the other is the wavelength. The "spatial" axis is the position on the slit; the "spectral" axis is the wavelength. A point source (a star) is imaged as a horizontal line in the raw image, with the wavelength varying along the line.

The spectral resolution R = λ / Δλ is set by the slit width, the grating, and the camera focal length. For a typical slit spectrograph with a 1200 lines/mm grating and a 10 μm slit, R ~ 5000-10000.

### Theory: Wavelength Calibration

The wavelength scale is calibrated using a comparison lamp. The comparison lamp emits lines at known wavelengths (e.g. Hg: 404.7, 435.8, 546.1, 577-579 nm; Ne: 585.2, 588.2, 594.5, 614.3, 640.2 nm; Ar: 696.5, 706.7, 727.3, 738.4, 750.4 nm). The lines are identified in the comparison spectrum, and a polynomial fit gives the wavelength as a function of the pixel position.

The polynomial is typically a cubic or quartic in the pixel position. The residuals of the fit give the wavelength calibration error.

### Theory: Equivalent Width

The equivalent width W_λ of a spectral line is the width of a rectangle with height equal to the continuum that has the same area as the line. For an absorption line, the equivalent width is

W_λ = ∫ (1 − F_λ / F_continuum) dλ,

where F_λ is the flux at wavelength λ and F_continuum is the continuum flux. The equivalent width is positive for absorption lines, negative for emission lines.

The equivalent width is a measure of the strength of the line. For a weak line, W_λ is small; for a strong line, W_λ is large.

### Theory: Doppler Shift

The Doppler shift of a spectral line is

Δλ / λ = v_r / c,

where v_r is the radial velocity of the source (positive for recession, negative for approach) and c is the speed of light. The radial velocity is measured by comparing the observed wavelength of a line with the rest wavelength.

For a star with a radial velocity of 30 km/s, the Doppler shift is

Δλ / λ = 30 / 3 × 10⁵ = 10⁻⁴.

For a line at λ = 500 nm, the shift is 0.05 nm. This is easily measurable with a slit spectrograph.

### Apparatus

- Telescope (from L1).
- Slit spectrograph (a commercial spectrograph, e.g. a Shelyak LHIRES III, or a custom-built spectrograph).
- CCD camera.
- Comparison lamp (Hg, Ne, Ar, or a combination).
- Continuum lamp (for flat fields).
- Calibration software (e.g. IRAF, or Python with specutils, astropy).

### Procedure

1. **Set up the spectrograph.** Attach the spectrograph to the telescope; align the slit with the focal plane; focus the camera.
2. **Acquire a spectrograph flat field.** Illuminate the slit with the continuum lamp; take an image. The flat field is used to remove the pixel-to-pixel sensitivity variation and the slit illumination profile.
3. **Acquire a comparison spectrum.** Illuminate the slit with the comparison lamp; take an image. The comparison lines are used for the wavelength calibration.
4. **Acquire a science spectrum.** Point the telescope at a bright star; take an image. The exposure time should be sufficient to get a high SNR (e.g. SNR > 100 for the continuum).
5. **Reduce the spectrum:**
   a. Bias subtraction.
   b. Flat field division.
   c. Extraction of the one-dimensional spectrum (sum the flux along the slit direction).
   d. Wavelength calibration (using the comparison spectrum).
6. **Identify spectral features** in the reduced spectrum.
7. **Measure equivalent widths** of selected lines.
8. **Measure the radial velocity** from the Doppler shift.

### Analysis

#### Wavelength Calibration

Identify the comparison lines in the comparison spectrum. Fit a polynomial (cubic or quartic) to the wavelength vs pixel position. The residuals of the fit give the wavelength calibration error, typically ~ 0.01-0.1 nm for a typical slit spectrograph.

#### Spectral Features

Identify the major absorption lines in the science spectrum (e.g. Hα at 656.3 nm, Hβ at 486.1 nm, Na D at 589.0 and 589.6 nm, Ca II H and K at 396.8 and 393.4 nm). Compare with a stellar spectral library (e.g. the MILES library, the ELODIE library) to determine the spectral type of the star.

#### Equivalent Width

For each absorption line, fit a Gaussian or a Voigt profile to the line. The equivalent width is the area of the profile, in wavelength units:

W_λ = ∫ (1 − F_λ / F_continuum) dλ.

For a Gaussian profile with amplitude A and standard deviation σ (in wavelength units),

W_λ = √(2π) · A · σ.

#### Radial Velocity

For a line at rest wavelength λ_0, the observed wavelength λ_obs is

λ_obs = λ_0 · (1 + v_r / c).

The radial velocity is

v_r = c · (λ_obs − λ_0) / λ_0.

For a star with v_r = 30 km/s and λ_0 = 500 nm, the shift is Δλ = 0.05 nm. With a wavelength calibration error of 0.01 nm, the velocity error is ~ 6 km/s.

### Sources of Error

- **Slit alignment.** The slit should be aligned with the optical axis. A misaligned slit reduces the throughput and broadens the spectral lines.
- **Wavelength calibration.** The comparison lamp should be observed at the same temperature and pressure as the science spectrum. Drift in the spectrograph (due to temperature changes or flexure) can shift the wavelength scale.
- **Scattered light.** Stray light in the spectrograph (from the sky, from the telescope, from the spectrograph itself) adds a background that biases the line strengths. The background is measured from the inter-order regions of the spectrum.
- **Flat field.** The flat field for a spectrograph is different from the flat field for imaging. The spectrograph flat field includes the slit illumination profile and the pixel-to-pixel sensitivity.

## Key Ideas

- Slit spectrograph: slit + collimator + dispersing element + camera. Output is a 2D image.
- Wavelength calibration: use a comparison lamp with known spectral lines.
- Equivalent width: W_λ = ∫ (1 − F_λ / F_continuum) dλ. Measure of line strength.
- Doppler shift: Δλ / λ = v_r / c. Measure of radial velocity.
- Spectral resolution: R = λ / Δλ. Set by slit width, grating, and camera.

## Worked Examples

#### Example 1: Wavelength Calibration

A comparison spectrum has lines at the following pixel positions and wavelengths:

| Pixel | λ (nm) |
|------:|-------:|
| 100 | 400.0 |
| 300 | 450.0 |
| 500 | 500.0 |
| 700 | 550.0 |
| 900 | 600.0 |

A linear fit: λ = 0.25 · pixel + 375.0. The residuals are zero (the data are perfectly linear).

For a more complex spectrum, the polynomial may be cubic or quartic. The residuals give the wavelength calibration error.

#### Example 2: Equivalent Width

An absorption line has a Gaussian profile with amplitude A = 0.5 (relative to the continuum) and standard deviation σ = 0.2 nm. The equivalent width is

W_λ = √(2π) · 0.5 · 0.2 = 0.5 nm.

For a line at λ = 500 nm, the equivalent width is 0.5 nm. The line is moderately strong.

#### Example 3: Radial Velocity

A star has a spectral line at λ_0 = 500.0 nm (rest wavelength). The observed wavelength is λ_obs = 500.05 nm.

v_r = c · (λ_obs − λ_0) / λ_0 = 3 × 10⁵ · 0.05 / 500.0 = 30 km/s.

The star is receding at 30 km/s.

## Common Misconceptions

- **"A prism and a grating are the same."** A prism disperses light by refraction; a grating disperses by interference. Prisms have higher throughput in a single order; gratings have higher resolution and broader wavelength coverage.
- **"The slit should be as narrow as possible."** A very narrow slit reduces the throughput; the resolution is limited by the slit width only when the slit width is smaller than the diffraction limit of the spectrograph. A slit width of 1-2× the seeing disk is typically optimal.
- **"The wavelength calibration is exact."** The wavelength calibration has an error of ~ 0.01-0.1 nm for a typical slit spectrograph. The error is set by the comparison lamp line width, the slit width, and the stability of the spectrograph.
- **"The equivalent width is the same as the FWHM."** No. The equivalent width is the area of the line; the FWHM is the width at half maximum. For a Gaussian, W_λ = √(2π) · σ · A ≈ 2.355 · σ · A. For a typical absorption line with A = 0.5 and FWHM = 0.47 nm, σ = 0.2 nm, W_λ = 0.5 nm.
- **"The radial velocity is the same as the proper motion."** No. The radial velocity is the velocity along the line of sight (from the Doppler shift); the proper motion is the velocity perpendicular to the line of sight (from the change in position on the sky).

## Connections

- **Astronomy and Astrophysics (Sem 5/6 theory).** Spectroscopy is the primary tool for determining the composition, temperature, density, and velocity of astronomical objects. The spectral lines identify the chemical elements; the line strengths give the abundances; the Doppler shift gives the radial velocity.
- **Atomic physics.** The spectral lines are fingerprints of the atoms. The Balmer series of hydrogen (Hα, Hβ, Hγ, ...) is the same in the laboratory and in the stars; the same physics governs both.
- **Stellar astrophysics.** The spectral classification (O, B, A, F, G, K, M) is based on the strength of the absorption lines. The Hertzsprung-Russell diagram is a plot of absolute magnitude vs spectral type.
- **Cosmology.** The redshift of galaxies is measured from the Doppler shift of their spectral lines. The expansion of the universe is the basis of the standard cosmological model.
- **Exoplanets.** The radial velocity method for detecting exoplanets measures the small Doppler shift of the host star as the planet orbits. The precision is ~ 1 m/s for the best spectrographs.

## Quick Check

1. What are the four main components of a slit spectrograph?
2. What is the role of the comparison lamp?
3. Define the equivalent width. What does it measure?
4. A star has a radial velocity of 50 km/s. What is the Doppler shift at λ = 600 nm?
5. The equivalent width of a line is 0.5 nm. What does this mean?
6. What is the spectral resolution of a spectrograph with a 1200 lines/mm grating and a 10 μm slit?
7. Why must the comparison lamp be observed at the same temperature as the science spectrum?
8. A student observes a line at λ = 500.1 nm; the rest wavelength is 500.0 nm. What is the radial velocity?

## Takeaway

Spectroscopy is the lab's primary tool for measuring the composition, temperature, density, and velocity of astronomical objects. The slit spectrograph, the wavelength calibration, the equivalent width, the Doppler shift, and the spectral resolution are the five central concepts. The lab's discipline — careful alignment of the spectrograph, accurate wavelength calibration, proper extraction of the spectrum, honest measurement of the line parameters — is the same discipline that runs through every spectroscopic observation in astronomy. The same principles (dispersion, calibration, line identification) govern the spectroscopy from the ultraviolet to the infrared, from the ground to space. The spectrum you record tonight is the raw material for the chemical abundances, the radial velocities, and the stellar parameters that follow.
