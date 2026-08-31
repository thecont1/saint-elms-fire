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
lessonId: astronomy-and-astrophysics-lab-m1-l1
lessonName: Telescope Optics and CCD Imaging
lessonNumber: 1
moduleNumber: 1
semesterNumber: 5
difficulty: advanced
estimatedStudyMinutes: 60
releaseOrder: 1
prerequisites:
  - solid-state-physics-lab-m1-l6
learningObjectives:
  - Set up a small refracting or reflecting telescope and align the finder with the main optics.
  - Focus a CCD camera on a bright star and take a short-exposure image.
  - Measure the plate scale of the CCD (arcsec/pixel) and identify the field of view.
concepts:
  - Telescope optics
  - Refractor and reflector
  - Focal length
  - Plate scale
  - Field of view
  - CCD
  - Quantum efficiency
  - Read noise
  - Point spread function
  - FWHM
tags:
  - physics
  - laboratory
  - astronomy
  - telescope
  - ccd
  - imaging
sourceType: authored-courseware
assessmentHints:
  - Plate scale: 206265 / f (arcsec/mm), where f is the focal length in mm. For f = 1000 mm, plate scale is 206 arcsec/mm.
  - Field of view: θ_FOV = 206265 · d / f, where d is the detector dimension.
  - FWHM of a star image is set by the seeing (typically 1-3 arcsec at a good site).
status: in-review
***

# Telescope Optics and CCD Imaging

## Overview

A telescope collects light from a distant object and brings it to a focus. The image can be viewed with an eyepiece (visual observation) or recorded with a detector (photographic plate, CCD, CMOS). The plate scale at the focal plane is the angular size of an object on the sky per unit length on the focal plane, given by 206265 / f (arcsec/mm) where f is the focal length in mm. The field of view is the angular size of the detector as seen from the focal plane, given by 206265 · d / f where d is the detector dimension.

A CCD (charge-coupled device) is the standard detector in modern astronomy. It converts incoming photons into electrons, which are read out as a digital image. The quantum efficiency of a CCD (the fraction of incident photons that produce an electron) is typically 70-90 % in the visible and near-IR. The read noise is the noise introduced by the readout electronics (typically 2-10 electrons per pixel). The dark current is the thermally-generated electrons (suppressed by cooling the CCD to ~ -100 °C or lower).

This lesson covers the apparatus (a small telescope, a CCD camera, a computer for data acquisition), the procedure (set up the telescope, align the finder, focus the CCD, take a short-exposure image), the analysis (measure the plate scale, identify the field of view, measure the FWHM of a star image), and the dominant sources of error (tracking, seeing, focus).

## Learning Path

1. **Set up the telescope** — mount the telescope on an equatorial mount; balance the tube; align the polar axis with the celestial pole (for a small telescope, approximate alignment is sufficient).
2. **Align the finder** — point the telescope at a bright star; centre the star in the main optics; adjust the finder so the star is also centred in the finder.
3. **Attach the CCD camera** — connect the camera to the telescope's focuser; connect the camera to the computer.
4. **Focus the CCD** — take a series of short-exposure images at different focus positions; identify the position of best focus (the smallest FWHM of the star image).
5. **Take a short-exposure image** — a few seconds; sufficient to record the star without saturating the CCD.
6. **Measure the plate scale** — measure the position of two stars in the image (in pixels); look up their angular separation from a catalog; compute the plate scale.

## Core Explanation

### Theory: Telescope Optics

A telescope is characterised by its aperture D (the diameter of the primary lens or mirror), its focal length f, and its focal ratio f / D (also written as f-number or N).

The light-gathering power of a telescope is proportional to D². A telescope with D = 200 mm gathers 4× as much light as a telescope with D = 100 mm.

The plate scale at the focal plane is

plate scale = 206265 / f (arcsec/mm).

For a small telescope with f = 1000 mm, plate scale is 206 arcsec/mm. A CCD with 9 μm pixels has 0.206 arcsec/pixel, sufficient to sample the seeing disk (1-3 arcsec FWHM) at the Nyquist rate (2 pixels per FWHM).

The field of view of the CCD is

θ_FOV = 206265 · d / f (arcsec),

where d is the dimension of the CCD. For a 2048 × 2048 CCD with 9 μm pixels, d = 2048 · 9 = 18.4 mm. For f = 1000 mm, θ_FOV = 3794 arcsec = 1.05 degrees.

The diffraction limit of the telescope is

θ_diff = 1.22 λ / D (in radians) = 0.25 arcsec for D = 200 mm at λ = 550 nm.

In practice, the image is broadened by atmospheric turbulence (seeing), with FWHM typically 1-3 arcsec at a good site.

### Theory: CCD Operation

A CCD is a silicon chip with a 2D array of pixels. Each pixel is a metal-oxide-semiconductor (MOS) capacitor that collects photoelectrons generated by the incident photons. After the exposure, the charge is read out by shifting the rows of pixels (one at a time) to a serial register, then shifting the serial register to an output amplifier.

The output of the amplifier is an analog voltage, which is digitised by an analog-to-digital converter (ADC). The digital value (in ADU, analog-to-digital units) is proportional to the number of electrons. The gain g (in electrons/ADU) is the conversion factor.

The noise sources are:
- **Read noise** σ_read: introduced by the output amplifier. Typically 2-10 electrons rms per pixel. Independent of exposure time.
- **Dark current** D: thermally generated electrons. Depends on temperature; for a CCD at -100 °C, D ~ 0.001 electrons/pixel/s. Suppressed by cooling.
- **Photon noise** σ_photon = √N: the Poisson noise of the incoming photons. Dominant at high signal levels.
- **Sky background** B: photons from the sky (light pollution, airglow, moonlight, zodiacal light). For a dark site, B ~ 100 photons/pixel/s in a broadband filter.

The total noise in a pixel is

σ_total = √(σ_read² + D · t + g · (N_photon + B · t))

where t is the exposure time and N_photon is the number of photons from the source.

### Theory: Point Spread Function

The point spread function (PSF) of a star is the image of a point source. For a ground-based telescope, the PSF is set by:
- **Diffraction** by the telescope aperture: the Airy disk, with FWHM ≈ 1.03 λ / D.
- **Atmospheric turbulence** ("seeing"): typically 1-3 arcsec FWHM at a good site.
- **Tracking errors**: the telescope does not perfectly track the sky, so the image is smeared.
- **Focus errors**: the image is defocused, broadening the PSF.

The FWHM of the PSF is the standard measure of the image quality. A smaller FWHM means a sharper image.

### Apparatus

- Small telescope: a refractor (e.g. 80 mm aperture, f/7) or a reflector (e.g. 150 mm aperture, f/5). Equatorial mount.
- CCD camera: a cooled CCD with ~ 1 megapixel, ~ 9 μm pixels, USB connection to a computer.
- Computer with image acquisition software (e.g. MaxIm DL, AstroImageJ, or ASCOM drivers with a generic client).
- Finder scope: a small low-power scope attached to the main telescope, used for initial pointing.
- Eyepiece (for visual focusing, before attaching the CCD).
- Red flashlight (to preserve night vision).
- Safety glasses (not for solar observation!); a solar filter if the sun is the target.
- Planisphere or star chart (to find bright stars).
- Notebook (for recording observations).

### Procedure

1. **Set up the telescope on the equatorial mount.** Balance the tube; align the polar axis approximately with the celestial pole.
2. **Align the finder.** Point the telescope at a bright star (e.g. Sirius, Vega, Altair). Centre the star in the main telescope (using a high-power eyepiece). Adjust the finder so the star is also centred in the finder.
3. **Attach the CCD camera** to the focuser. Connect to the computer.
4. **Focus the CCD.** Take a series of 1-second exposures at different focus positions. Examine the images; identify the position of best focus (the smallest FWHM).
5. **Take a short-exposure image** of the star field. Use an exposure of 1-10 seconds, sufficient to record the stars without saturating the brightest ones.
6. **Save the image** as a FITS file.
7. **Measure the plate scale.** Identify two stars in the image; measure their pixel positions. Look up the angular separation of the two stars from a catalog (e.g. SIMBAD, VizieR). Compute the plate scale as (angular separation) / (pixel separation).

### Analysis

#### Plate Scale

For two stars with catalog angular separation θ (in arcsec) and pixel separation Δp (in pixels), the plate scale is

plate scale = θ / Δp (arcsec/pixel).

For a 1000 mm focal length and 9 μm pixels, the expected plate scale is 206265 · 9 × 10⁻³ / 1000 = 1.86 arcsec/pixel. The measured value should be close to this.

#### Field of View

The field of view of the CCD is

θ_FOV = plate scale · N_pixels (arcsec).

For N_pixels = 2048 and plate scale = 1.86 arcsec/pixel, θ_FOV = 3810 arcsec ≈ 1.06 degrees.

#### FWHM

Measure the FWHM of a star image. This is the seeing disk. For a good site, the FWHM is 1-3 arcsec.

### Sources of Error

- **Tracking.** The telescope does not perfectly track the sky, so the image is smeared. Use a guide star (or an auto-guider) for long exposures.
- **Seeing.** The atmospheric turbulence broadens the image. The FWHM is set by the seeing, not the telescope.
- **Focus.** A defocused image has a larger FWHM. Use a focus routine to find the best focus.
- **Flat field.** The CCD response is not uniform; the centre of the field is more sensitive than the edges. A flat field correction is needed for accurate photometry (next lesson).
- **Read noise.** The read noise limits the detection of faint stars. Use a CCD with low read noise (~ 2-5 electrons rms).
- **Dark current.** The dark current adds a background that depends on exposure time and temperature. Subtract a dark frame (an exposure of the same length, with the shutter closed).

## Key Ideas

- Telescope: aperture D, focal length f, focal ratio f/D. Light-gathering power ∝ D².
- Plate scale: 206265 / f (arcsec/mm). For a 1000 mm focal length, plate scale is 206 arcsec/mm.
- Field of view: 206265 · d / f, where d is the detector dimension.
- CCD: quantum efficiency ~ 80 %, read noise ~ 2-10 electrons, dark current ~ 0.001 electrons/pixel/s at -100 °C.
- FWHM: set by the seeing (1-3 arcsec at a good site) and the telescope's diffraction limit.

## Worked Examples

#### Example 1: Plate scale

A telescope has f = 1200 mm and a CCD with 6.8 μm pixels. The expected plate scale is

plate scale = 206265 · 6.8 × 10⁻³ / 1200 = 1.17 arcsec/pixel.

A 2048 × 2048 CCD has a field of view of

θ_FOV = 1.17 · 2048 = 2395 arcsec ≈ 0.66 degrees.

This is a small field of view, suitable for galaxy or star cluster imaging, but not for wide-field surveys.

#### Example 2: FWHM of the PSF

The image of a star is fitted with a Gaussian profile. The FWHM (full width at half maximum) is 2.35 σ, where σ is the standard deviation. For a Gaussian with σ = 1.5 pixels (on a 1 arcsec/pixel scale), the FWHM is 3.5 pixels = 3.5 arcsec. This is the seeing.

#### Example 3: Detection limit

The detection limit of a CCD is set by the signal-to-noise ratio (SNR). For a star with flux F (in photons/pixel/s), the SNR is

SNR = F · t / √(F · t + B · t + D · t + σ_read²),

where B is the sky background, D is the dark current, σ_read is the read noise, and t is the exposure time.

For a dark site (B = 100 photons/pixel/s), a cooled CCD (D = 0.001 electrons/pixel/s), a read noise σ_read = 5 electrons, an exposure of 60 s, and a star with F = 1 photon/pixel/s:

SNR = 60 / √(60 + 6000 + 0.06 + 25) = 60 / √6085 = 60 / 78 = 0.77.

The star is not detectable. For a longer exposure (600 s):

SNR = 600 / √(600 + 60000 + 0.6 + 25) = 600 / √60625 = 600 / 246 = 2.4.

Still not detectable. The detection limit (SNR = 5) is reached at F · t ≈ 5 √(B · t), or t ≈ (5/B)² / F² = 25 / (100 · 1)² = 2.5 × 10⁻³ ... wait, that doesn't work.

Let me redo. The detection limit is set by the sky background. For B = 100 photons/pixel/s and SNR = 5, the source flux must be F = 5 √(B / t) = 5 · √(100 / 600) = 5 · 0.408 = 2.04 photons/pixel/s. So the star is detectable if F > 2 photons/pixel/s; not detectable if F < 2 photons/pixel/s.

## Common Misconceptions

- **"A larger telescope gives a sharper image."** A larger telescope has a smaller diffraction limit (∝ 1/D), but the image is broadened by atmospheric turbulence. For a ground-based telescope, the FWHM is set by the seeing, not the diffraction.
- **"The plate scale depends on the aperture."** It depends only on the focal length: plate scale = 206265 / f. The aperture affects the light-gathering power and the diffraction limit, not the plate scale.
- **"A CCD is a perfect detector."** A CCD has finite quantum efficiency (~ 80 %), read noise (~ 2-10 electrons), dark current (~ 0.001 electrons/pixel/s at -100 °C), and a finite well depth (~ 10⁵ electrons). For high-precision work, these effects must be calibrated.
- **"The exposure time should be as long as possible."** Long exposures are limited by tracking errors (the telescope does not perfectly track the sky), by sky background (the sky brightness adds noise), and by cosmic rays (which hit the CCD and produce spurious signals). The optimal exposure depends on the target and the conditions.
- **"The FWHM of a star is the resolution of the telescope."** The FWHM is the convolution of the diffraction limit, the seeing, the tracking errors, and the focus errors. The "resolution" is sometimes defined as the FWHM, but the Rayleigh criterion uses the first minimum of the Airy disk (1.22 λ / D), which is ~ 1.22 × FWHM_diffraction.

## Connections

- **Astronomy and Astrophysics (Sem 5/6 theory).** Telescopes and CCDs are the primary tools of observational astronomy. The image formation (Fourier optics), the photometry (aperture and PSF-fitting), and the data reduction (flat field, dark subtraction, sky subtraction) are central to the field.
- **Optics.** The telescope is a large-scale application of geometric and physical optics. The lens and mirror designs, the coatings, the aberrations, and the diffraction limit are all important.
- **Optoelectronics.** The CCD is a silicon detector with applications beyond astronomy: digital cameras, scanners, medical imaging, machine vision. The same physics (photoelectric effect, charge transfer, read noise) governs all of them.
- **Signal processing.** The image processing (flat fielding, dark subtraction, stacking, photometry) is a major application of signal processing. The same algorithms (Fourier transform, matched filter, Bayesian inference) are used in many fields.
- **History of astronomy.** The development of the telescope (Galileo, 1609; Newton, 1668) and the CCD (1970s) revolutionised astronomy. The current generation of telescopes (8-10 m ground-based, 2.4 m space-based) and detectors (gigapixel CCDs, infrared arrays) continues to push the limits.

## Quick Check

1. State the plate scale formula. For a 2000 mm focal length, what is the plate scale (arcsec/mm)?
2. What is the diffraction limit of a 200 mm telescope at λ = 550 nm?
3. What is the FWHM of the seeing disk at a good site?
4. What is the quantum efficiency of a typical CCD? The read noise?
5. Why must a CCD be cooled?
6. What is the field of view of a 1000 mm focal length telescope with a 4k × 4k CCD (9 μm pixels)?
7. What is the limiting magnitude of a 200 mm telescope in a 60 s exposure?
8. A student measures a star FWHM of 10 pixels with 1.86 arcsec/pixel. Is this the seeing?

## Takeaway

The telescope and the CCD are the lab's primary tools for observational astronomy. The plate scale, the field of view, the diffraction limit, the quantum efficiency, the read noise, and the FWHM of the PSF are the central concepts. The lab's discipline — careful alignment, accurate focusing, proper calibration, correct image processing — is the same discipline that runs through every astronomical observation. The same physics (diffraction, photoelectric effect, signal processing) governs the operation of every telescope and every detector. The image you take tonight is the raw material for the photometry, spectroscopy, and astrometry that follow.
