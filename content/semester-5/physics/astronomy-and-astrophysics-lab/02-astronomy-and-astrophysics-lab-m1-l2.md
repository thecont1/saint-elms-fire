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
lessonId: astronomy-and-astrophysics-lab-m1-l2
lessonName: Photometry — Aperture and Differential
lessonNumber: 2
moduleNumber: 1
semesterNumber: 5
difficulty: advanced
estimatedStudyMinutes: 55
releaseOrder: 2
prerequisites:
  - astronomy-and-astrophysics-lab-m1-l1
learningObjectives:
  - Perform aperture photometry on a star field; measure the instrumental magnitude of a target star and several comparison stars.
  - Apply differential photometry to remove atmospheric extinction; measure the magnitude difference between two stars.
  - Estimate the photometric uncertainty from the photon statistics and the sky background.
concepts:
  - Magnitude system
  - Apparent magnitude
  - Instrumental magnitude
  - Aperture photometry
  - Differential photometry
  - Atmospheric extinction
  - Standard stars
  - Photometric uncertainty
  - Signal-to-noise ratio
tags:
  - physics
  - laboratory
  - astronomy
  - photometry
  - magnitude
  - aperture
sourceType: authored-courseware
assessmentHints:
  - Magnitude: m = -2.5 log_10 (F / F_0), where F is the flux and F_0 is a reference flux.
  - Atmospheric extinction: Δm = k · X, where k is the extinction coefficient and X is the airmass.
  - Differential photometry: m_target - m_comp = -2.5 log_10 (F_target / F_comp), which is independent of the atmospheric extinction.
status: in-review
***

# Photometry — Aperture and Differential

## Overview

Photometry is the measurement of the brightness of an astronomical source. The brightness is expressed in magnitudes, a logarithmic scale: m = − 2.5 log_10 (F / F_0), where F is the flux and F_0 is a reference flux. A difference of 1 magnitude corresponds to a factor of 2.512 in flux; a difference of 5 magnitudes corresponds to a factor of 100. The reference flux F_0 defines the zero point of the magnitude system.

This lesson covers the apparatus (a telescope with a CCD, a set of standard stars, image acquisition software), the procedure (take images of the target field and the standard stars, perform aperture photometry), the analysis (compute the instrumental magnitudes, apply the atmospheric extinction correction, transform to the standard system), and the dominant sources of error (atmospheric extinction, sky background, flat field, photometric calibration).

## Learning Path

1. **Take an image of the target field.** Choose a field with a target star (variable or of unknown magnitude) and several comparison stars of known magnitude.
2. **Take images of standard stars.** Choose a standard field (e.g. a field from the Landolt or Stetson catalogs) at a similar airmass.
3. **Perform aperture photometry** on all stars. Measure the instrumental magnitude: m_inst = − 2.5 log_10 (N / t), where N is the number of ADU in the aperture and t is the exposure time.
4. **Apply atmospheric extinction** correction: m = m_inst + k · X, where k is the extinction coefficient and X is the airmass.
5. **Transform to the standard system** using the standard stars: m_std = m_inst + c, where c is a constant zero-point offset.

## Core Explanation

### Theory: Magnitude System

The apparent magnitude is

m = − 2.5 log_10 (F / F_0) = − 2.5 log_10 F + constant.

The reference flux F_0 depends on the photometric band. In the Johnson-Cousins system, the bands are U (ultraviolet), B (blue), V (visual), R (red), I (infrared). Each band has a central wavelength and a bandwidth.

For a star with apparent magnitudes m_V (V band), the flux in the V band is

F_V = F_0,V · 10^(-0.4 m_V).

The constant F_0,V is defined such that the star Vega has m_V = 0.03 (Vega is not exactly m_V = 0, but close).

### Theory: Atmospheric Extinction

The atmosphere absorbs and scatters some of the light from a star. The extinction is greater at lower elevations (larger airmass). The airmass X is

X = 1 / cos(z),

where z is the zenith angle. For a star at the zenith, X = 1; for a star at 30° from the zenith, X = 1.15; for a star at the horizon, X = 38.

The extinction is approximately linear in X:

m_observed = m_true + k · X,

where k is the extinction coefficient (in magnitudes per airmass). For the V band at a good site, k_V ~ 0.1-0.2 mag/airmass. The extinction is larger at shorter wavelengths (B band) and smaller at longer wavelengths (R, I bands).

### Theory: Aperture Photometry

Aperture photometry sums the flux from a star within a circular aperture of radius r_ap. The flux is

F = Σ_{i in aperture} (ADU_i − sky_i) · g,

where ADU_i is the analog-to-digital unit value at pixel i, sky_i is the sky background at pixel i, and g is the gain (electrons/ADU). The summation is over all pixels within the aperture.

The choice of aperture radius is a compromise: a small aperture misses some of the star's flux (especially in poor seeing), while a large aperture includes more sky background. A common choice is r_ap = 1.5 × FWHM of the PSF.

The sky background is estimated from an annulus around the star (inner radius r_in, outer radius r_out), excluding any nearby stars. The sky value is the median of the pixels in the annulus.

### Theory: Differential Photometry

In differential photometry, the magnitude of a target star is measured relative to a comparison star of known magnitude. The magnitude difference is

Δm = m_target − m_comp = − 2.5 log_10 (F_target / F_comp).

Differential photometry is independent of the atmospheric extinction (if the target and the comparison are at the same airmass) and of the absolute calibration. The precision is typically 1-2 mmag (0.001-0.002 mag) for bright stars in good conditions.

### Theory: Photometric Uncertainty

The photometric uncertainty is set by the signal-to-noise ratio. For a star with flux F and a sky background B (in ADU/pixel), the SNR in an aperture of area A (in pixels) is

SNR = F · t / √((F + B) · A · t + σ_read² · A),

where t is the exposure time and σ_read is the read noise (in ADU/pixel). The photometric precision is

σ_m = 1.0857 / SNR (magnitudes).

For SNR = 100, σ_m = 0.011 mag (~ 1 %). For SNR = 1000, σ_m = 0.0011 mag (~ 0.1 %).

### Apparatus

- Telescope with CCD (from L1).
- Computer with image acquisition and photometry software (e.g. AstroImageJ, IRAF, or Python with photutils).
- Standard star catalog (e.g. Landolt 1992; Stetson 2000; APASS).
- Target field: a variable star, a field with stars of known magnitude, or a field chosen for the project.
- Filters: a Johnson-Cousins filter set (B, V, R, I) for the standard photometry.

### Procedure

1. **Take images of the target field** in the B, V, R, I filters. The exposure time should be sufficient to get SNR > 100 for the target star and the comparison stars.
2. **Take images of a standard star field** at a similar airmass. Standard fields are cataloged in Landolt 1992 or Stetson 2000.
3. **Reduce the images**: subtract the bias, divide by the flat field, subtract the dark current (if necessary).
4. **Perform aperture photometry** on all stars in the target field and the standard field. Use the same aperture radius for all stars.
5. **Apply the atmospheric extinction correction**: m_obs = m_inst + k · X. The extinction coefficient k is determined from the standard stars.
6. **Determine the zero point**: m_std = m_inst + c. The constant c is determined from the standard stars.
7. **Compute the magnitude of the target star** in each band.

### Analysis

#### Atmospheric Extinction

Plot the standard star's instrumental magnitude m_inst against the airmass X. The slope is the extinction coefficient k. The intercept is m_inst(X = 0) = m_std − c.

For a standard star with m_V = 12.0 measured at X = 1.0 (zenith) and X = 1.5 (lower elevation), the instrumental magnitudes are m_inst(1.0) = 12.15 and m_inst(1.5) = 12.30. The extinction coefficient is

k = (12.30 − 12.15) / (1.5 − 1.0) = 0.15 / 0.5 = 0.30 mag/airmass.

(This is large; a more typical value is 0.15 mag/airmass for the V band.)

#### Photometric Zero Point

For the standard star, the difference between the standard magnitude and the corrected instrumental magnitude is the zero point c:

c = m_std − (m_inst − k · X).

For the example above: c = 12.0 − (12.15 − 0.30 · 1.0) = 12.0 − 11.85 = 0.15 mag.

For a target star with m_inst = 13.5 measured at X = 1.2, the corrected magnitude is

m = 13.5 − 0.30 · 1.2 + 0.15 = 13.5 − 0.36 + 0.15 = 13.29.

The standard magnitude is m = 13.29.

#### Photometric Uncertainty

The SNR for the target star is

SNR = F · t / √((F + B) · A · t + σ_read² · A).

For F = 1000 ADU/s, t = 60 s, B = 10 ADU/pixel/s, A = 50 pixels (aperture area), σ_read = 5 ADU:

SNR = 1000 · 60 / √((1000 + 10) · 50 · 60 + 5² · 50) = 60000 / √(3030000 + 1250) = 60000 / 1741 = 34.5.

σ_m = 1.0857 / 34.5 = 0.031 mag (~ 3 %).

For a longer exposure (600 s):

SNR = 1000 · 600 / √((1010) · 50 · 600 + 1250) = 600000 / √(30300000 + 1250) = 600000 / 5504 = 109.

σ_m = 0.010 mag (~ 1 %).

### Sources of Error

- **Atmospheric extinction.** The extinction coefficient is not constant; it varies with the wavelength, the airmass, the time (atmospheric conditions change), and the position on the sky (the extinction is larger near the horizon). Use standards at similar airmass.
- **Flat field.** The flat field correction is critical for accurate photometry. Take dome flats (a uniformly illuminated screen inside the dome) or sky flats (twilight sky).
- **Sky background.** The sky background is variable; it depends on the moon phase, the light pollution, the airglow. Subtract the sky carefully.
- **Photometric aperture.** The aperture radius is a compromise between including all the star's flux and excluding the sky background. A small aperture underestimates the flux; a large aperture includes too much sky.
- **Read noise.** The read noise sets the detection limit for faint stars. Use a CCD with low read noise.

## Key Ideas

- Magnitude: m = − 2.5 log_10 (F / F_0). A difference of 1 mag is a factor of 2.512 in flux.
- Atmospheric extinction: m_obs = m_true + k · X. The extinction coefficient k is ~ 0.15 mag/airmass for the V band.
- Aperture photometry: sum the flux within a circular aperture. Choose r_ap ≈ 1.5 × FWHM.
- Differential photometry: the magnitude difference is independent of the extinction and the absolute calibration.
- Photometric uncertainty: σ_m = 1.0857 / SNR. For SNR = 100, σ_m = 0.011 mag.

## Worked Examples

#### Example 1: Magnitude Calculation

A star has a flux of F = 10⁻¹² W/m²/μm. The reference flux for the V band is F_0 = 3.92 × 10⁻¹² W/m²/μm (corresponding to m_V = 0).

m_V = − 2.5 log_10 (10⁻¹² / 3.92 × 10⁻¹²) = − 2.5 log_10 (0.255) = − 2.5 · (− 0.593) = 1.48.

So the star has m_V = 1.48, comparable to Polaris (m_V = 1.98).

#### Example 2: Photometric Transformation

A standard star has catalog magnitudes m_B = 12.50, m_V = 11.85. It is observed at X = 1.1 with instrumental magnitudes m_B,inst = 13.00, m_V,inst = 12.20.

Extinction coefficients: k_B = 0.30, k_V = 0.15.

True instrumental magnitudes: m_B,true = 13.00 − 0.30 · 1.1 = 12.67, m_V,true = 12.20 − 0.15 · 1.1 = 12.04.

Zero points: c_B = 12.50 − 12.67 = − 0.17, c_V = 11.85 − 12.04 = − 0.19.

The zero points are similar but not identical; the difference (B − V zero point difference = 0.02) reflects the colour-dependent transformation.

#### Example 3: Photometric Uncertainty

A star has flux F = 500 ADU/s, sky background B = 20 ADU/pixel/s, aperture area A = 30 pixels, read noise σ_read = 3 ADU/pixel, exposure t = 30 s.

SNR = 500 · 30 / √((500 + 20) · 30 · 30 + 3² · 30) = 15000 / √(468000 + 270) = 15000 / 684 = 21.9.

σ_m = 1.0857 / 21.9 = 0.050 mag.

This is a typical precision for a 30 s exposure on a 1-m telescope.

## Common Misconceptions

- **"A magnitude is a unit of brightness."** It is a logarithmic scale of brightness. A difference of 1 magnitude corresponds to a factor of 2.512 in flux; a difference of 5 magnitudes is a factor of 100.
- **"The atmospheric extinction is the same at all wavelengths."** It is larger at shorter wavelengths (B band) and smaller at longer wavelengths (R, I bands). The wavelength dependence is used to characterise the atmosphere.
- **"Differential photometry is the same as absolute photometry."** Differential photometry measures the magnitude difference between two stars; absolute photometry measures the magnitude on a standard system. Differential is easier and more precise.
- **"The aperture should be as large as possible."** A large aperture includes more sky background, which adds noise. The optimal aperture is ~ 1.5 × FWHM.
- **"The photometric precision is limited by the telescope."** It is limited by the photon statistics (the SNR), the sky background, and the read noise. A larger telescope reduces the photon noise; a darker site reduces the sky background; a better CCD reduces the read noise.

## Connections

- **Astronomy and Astrophysics (Sem 5/6 theory).** Photometry is the primary tool for measuring the brightness of stars, galaxies, and other astronomical objects. The photometric system, the atmospheric extinction, the standard stars, and the photometric transformations are central to the field.
- **Stellar astrophysics.** The photometric measurements are used to characterise stars: the Hertzsprung-Russell diagram is a plot of absolute magnitude vs spectral type; the period-luminosity relation for Cepheids is the basis of the distance scale.
- **Exoplanet transits.** The transit of an exoplanet in front of its host star causes a small (~ 1 %) drop in brightness. Differential photometry can detect this drop with a precision of ~ 0.001 mag.
- **Cosmology.** The photometric redshifts of galaxies are estimated from broadband photometry. The standard candles (Type Ia supernovae, Cepheids) are calibrated with photometric measurements.
- **History of astronomy.** The magnitude system dates back to Hipparchus (190-120 BC), who classified stars into 6 magnitudes based on their naked-eye brightness. The modern logarithmic system was introduced by Pogson in 1856.

## Quick Check

1. Define the magnitude. What is the flux ratio for a difference of 1 mag? 5 mag? 10 mag?
2. State the atmospheric extinction formula. What is the airmass at the zenith? At 30° from the zenith?
3. What is the optimal aperture radius for aperture photometry?
4. What is the photometric precision for SNR = 100? For SNR = 1000?
5. What is differential photometry? Why is it more precise than absolute photometry?
6. A standard star has m_V = 12.00 and m_V,inst = 12.20 at X = 1.0. What is the extinction coefficient?
7. A star has F = 1000 ADU/s and B = 50 ADU/pixel/s, with A = 30 pixels and σ_read = 5 ADU. What is the SNR for t = 60 s?
8. Why is the B-band extinction larger than the V-band extinction?

## Takeaway

Photometry is the lab's primary tool for measuring the brightness of astronomical sources. The magnitude system, the atmospheric extinction, the aperture photometry, the differential photometry, and the photometric uncertainty are the five central concepts. The lab's discipline — careful calibration, accurate photometry, proper extinction correction, honest uncertainty estimation — is the same discipline that runs through every photometric measurement in astronomy. The same principles (magnitudes, extinction, standard stars) govern the photometry from the visible to the infrared, from the ground to space. The measurement you make tonight is a small contribution to the vast body of photometric data that underpins modern astronomy.
