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
lessonId: astronomy-and-astrophysics-lab-m1-l3
lessonName: Calibration — Bias, Dark, and Flat Field
lessonNumber: 3
moduleNumber: 1
semesterNumber: 5
difficulty: advanced
estimatedStudyMinutes: 55
releaseOrder: 3
prerequisites:
  - astronomy-and-astrophysics-lab-m1-l2
learningObjectives:
  - Acquire bias frames, dark frames, and flat-field frames for a CCD camera.
  - Apply the calibration pipeline to a science image: bias subtraction, dark subtraction, flat-field division.
  - Measure the gain and read noise of the CCD from the bias and flat-field frames.
concepts:
  - Bias frame
  - Dark frame
  - Flat field
  - Bad pixel mask
  - Gain
  - Read noise
  - CCD calibration pipeline
  - Image reduction
tags:
  - physics
  - laboratory
  - astronomy
  - calibration
  - bias
  - flat-field
sourceType: authored-courseware
assessmentHints:
  - Bias frame: zero exposure time, shutter closed. Removes the electronic offset of the CCD.
  - Dark frame: same exposure time as the science image, shutter closed. Removes the dark current.
  - Flat field: uniformly illuminated screen. Removes the pixel-to-pixel sensitivity variation.
status: in-review
***

# Calibration — Bias, Dark, and Flat Field

## Overview

A CCD image is not a direct measurement of the sky brightness; it is contaminated by several instrumental effects that must be removed before the image can be used for photometry or astrometry. The three main calibration frames are:

- **Bias frame**: a zero-exposure image (shutter closed, no light). It measures the electronic offset of the CCD readout, which is added to every image.
- **Dark frame**: an image with the same exposure time as the science image, but with the shutter closed. It measures the dark current (thermally generated electrons) and any structure in the bias that is not removed by the bias subtraction.
- **Flat field**: an image of a uniformly illuminated surface (a dome flat or a twilight sky flat). It measures the pixel-to-pixel sensitivity variation of the CCD.

The calibration pipeline is:

science_calibrated = (science_raw − bias − dark) / flat_normalised,

where flat_normalised is the flat field divided by its median value.

This lesson covers the apparatus (a CCD camera, a uniformly illuminated screen or twilight sky, image acquisition software), the procedure (acquire bias, dark, and flat-field frames; apply the calibration pipeline to a science image), the analysis (measure the gain and read noise from the bias and flat frames; verify the calibration by checking the uniformity of the calibrated image), and the dominant sources of error (shutter timing, temperature variation, scattered light).

## Learning Path

1. **Acquire bias frames** — take 10-20 images with the shutter closed and the shortest possible exposure time. These measure the electronic offset.
2. **Acquire dark frames** — take 10-20 images with the shutter closed, with the same exposure time as the science image. These measure the dark current.
3. **Acquire flat-field frames** — point the telescope at a uniformly illuminated surface (dome flat) or at the twilight sky. Take 10-20 images with a count level of ~ 10,000-30,000 ADU per pixel.
4. **Apply the calibration pipeline** to a science image: (science − bias − dark) / flat.
5. **Measure the gain and read noise** from the bias and flat frames.

## Core Explanation

### Theory: Bias Frame

The bias frame is a zero-exposure image that measures the electronic offset of the CCD. The bias level is typically 1000-3000 ADU, set by the readout electronics. The bias level is not uniform across the CCD; it has a structure (a "bias structure") that is removed by subtracting a master bias frame.

The master bias is the average of 10-20 individual bias frames. The average reduces the read noise by √N, where N is the number of frames.

### Theory: Dark Frame

The dark frame measures the dark current — the thermally generated electrons. The dark current depends on the temperature of the CCD (typically -100 °C) and the exposure time. For a CCD at -100 °C, the dark current is ~ 0.001 electrons/pixel/s; for a 60 s exposure, the dark current is ~ 0.06 electrons/pixel, or ~ 0.2 ADU for a gain of 3 electrons/ADU. This is much smaller than the bias (~ 1000 ADU), but it is a function of the exposure time and the temperature, so it should be subtracted separately.

The master dark is the average of 10-20 individual dark frames, scaled to the exposure time of the science image.

### Theory: Flat Field

The flat field measures the pixel-to-pixel sensitivity variation of the CCD. The variation is due to:
- Pixel-to-pixel differences in the quantum efficiency.
- Vignetting by the optical system (the field is darker at the edges).
- Dust on the optical surfaces (the dust shadows are visible as "dust donuts" in the flat field).

The flat field is taken with a uniformly illuminated surface, either:
- A dome flat: a screen inside the dome, illuminated by a lamp.
- A twilight sky flat: the twilight sky, taken just after sunset or before sunrise.

The master flat is the average of 10-20 individual flat frames, normalised by its median value. The normalised flat field is divided into the science image.

### Theory: Gain and Read Noise

The gain g (in electrons/ADU) is the conversion factor between the digital output (ADU) and the number of electrons. The gain is determined from the flat field frames: for a uniformly illuminated CCD, the variance of the pixel values is

σ² = (N − B) / g + σ_read²,

where N is the pixel value in ADU, B is the bias, and σ_read is the read noise. The slope of σ² vs (N − B) is 1 / g.

The read noise σ_read is determined from the bias frames: for a single bias frame, the standard deviation of the pixel values (after subtracting the mean) is

σ = σ_read / g.

So σ_read = g · σ.

The gain and the read noise are properties of the CCD and the readout electronics. Typical values: g = 1-5 electrons/ADU, σ_read = 2-10 electrons rms.

### Theory: Bad Pixel Mask

A bad pixel is a pixel that does not respond correctly to light (e.g. a "hot" pixel with high dark current, a "dead" pixel with zero sensitivity, a "cosmic ray" pixel hit during the exposure). A bad pixel mask identifies the bad pixels, which are flagged in the science image. The flagged pixels are not used for photometry or astrometry.

### Apparatus

- CCD camera (from L1).
- Computer with image acquisition software.
- Uniformly illuminated screen (for dome flats) or twilight sky.
- Image reduction software (e.g. AstroImageJ, IRAF, or Python with ccdproc, astropy).
- Thermometer (to monitor the CCD temperature).

### Procedure

1. **Acquire bias frames.** Set the exposure time to 0 s (or the shortest possible). Take 10-20 frames. The bias level should be ~ 1000-3000 ADU.
2. **Acquire dark frames.** Set the exposure time to the same as the science image. Take 10-20 frames. The dark current is added to the bias.
3. **Acquire flat-field frames.** Point the telescope at the dome flat (or wait for twilight). Set the exposure time to give ~ 10,000-30,000 ADU per pixel. Take 10-20 frames.
4. **Acquire a science image.** Take an image of the target field, with the same exposure time and filter as the calibration frames.
5. **Reduce the science image:** (science − bias − dark) / flat_normalised. Inspect the result; check for residual structure.
6. **Measure the gain and read noise** from the flat and bias frames.

### Analysis

#### Calibration Pipeline

For each science image:
1. Subtract the master bias: science_1 = science_raw − bias_master.
2. Subtract the master dark (scaled to the exposure time of the science image): science_2 = science_1 − dark_master · (t_science / t_dark).
3. Divide by the normalised master flat: science_cal = science_2 / flat_norm, where flat_norm = flat_master / median(flat_master).

The result is the calibrated science image, in electrons (if the gain is applied) or in ADU (if the gain is not applied).

#### Gain and Read Noise

For two flat frames with different exposure times, the variance of the pixel values is

σ² = (N − B) / g + σ_read².

Plot σ² (y) against (N − B) (x). The slope is 1 / g; the intercept is σ_read².

For a typical CCD: g ~ 2-3 electrons/ADU, σ_read ~ 5-10 electrons rms.

### Sources of Error

- **Shutter timing.** The bias frame should be taken with zero exposure time. Some shutters have a finite minimum exposure; the bias level may vary with the exposure time. Use the "bias" mode of the CCD (electronic shutter, no mechanical movement).
- **Temperature variation.** The dark current depends on the temperature. The dark frames should be taken at the same temperature as the science image.
- **Scattered light.** The flat field should be free of scattered light (from the dome, from the sky, from the telescope). Use a screen that is well-isolated from the rest of the dome.
- **Dust.** Dust on the optical surfaces produces "dust donuts" in the flat field. The dust donuts are removed by the flat-field division, but they add noise. Keep the optics clean.
- **Pixel non-linearity.** At high count levels (> 30,000-50,000 ADU for a 16-bit ADC), the CCD response becomes non-linear. Use exposure times that give < 30,000 ADU per pixel.

## Key Ideas

- Bias frame: zero exposure, measures the electronic offset.
- Dark frame: same exposure as science, measures the dark current.
- Flat field: uniformly illuminated surface, measures the pixel-to-pixel sensitivity.
- Calibration pipeline: (science − bias − dark) / flat.
- Gain g: electrons/ADU. Read noise σ_read: rms electrons per pixel.
- Bad pixel mask: identifies defective pixels.

## Worked Examples

#### Example 1: Calibration Pipeline

A science image has the following values at a specific pixel: raw = 5000 ADU, bias = 1500 ADU, dark (60 s) = 50 ADU, flat (normalised) = 1.05.

Calibrated value: (5000 − 1500 − 50) / 1.05 = 3450 / 1.05 = 3286 ADU.

In electrons: 3286 · g = 3286 · 2.5 = 8215 electrons.

#### Example 2: Gain and Read Noise

Two flat frames with mean pixel values N_1 = 5000 ADU and N_2 = 10000 ADU (after bias subtraction) have standard deviations σ_1 = 45 ADU and σ_2 = 64 ADU.

σ_1² = 2025 = 5000 / g + σ_read².
σ_2² = 4096 = 10000 / g + σ_read².

Subtracting: 4096 − 2025 = 2071 = 5000 / g ⇒ g = 5000 / 2071 = 2.41 electrons/ADU.

Then σ_read² = 2025 − 5000 / 2.41 = 2025 − 2075 = − 50 (negative! — error in the data).

Let me redo with consistent data. For g = 2 electrons/ADU and σ_read = 10 electrons, the variance for a flat with N = 5000 ADU is

σ² = N / g + σ_read² = 5000 / 2 + 100 = 2600 (ADU)², σ = 51 ADU.

For N = 10000 ADU: σ² = 5000 + 100 = 5100, σ = 71 ADU.

These are reasonable values for a typical CCD.

#### Example 3: Signal-to-Noise Ratio

For a star with F = 1000 electrons/s, exposure t = 60 s, sky B = 50 electrons/pixel/s, aperture A = 30 pixels, read noise σ_read = 10 electrons/pixel:

Signal: S = F · t · g (if gain is applied) = 1000 · 60 · 2.5 = 150000 electrons.

Noise: σ² = (F + B) · A · t · g + σ_read² · A · g² = (1000 + 50) · 30 · 60 · 2.5 + 10² · 30 · 2.5² = 4725000 + 1875 = 4726875.

σ = 2174 electrons.

SNR = S / σ = 150000 / 2174 = 69.

σ_m = 1.0857 / SNR = 0.016 mag.

This is a typical photometric precision for a 60 s exposure on a 1-m telescope with a 30-pixel aperture.

## Common Misconceptions

- **"The bias frame is the same as the dark frame."** The bias frame has zero exposure time; it measures only the electronic offset. The dark frame has a finite exposure time; it measures the dark current plus the bias.
- **"The flat field is a uniform image."** A raw flat field is not uniform; it has pixel-to-pixel sensitivity variations and vignetting. The flat field is divided into the science image to remove these variations.
- **"The gain is the same for all CCDs."** No. The gain depends on the readout electronics; it is typically 1-5 electrons/ADU. The gain is determined by the variance method or by the manufacturer's specification.
- **"The dark current is negligible."** At room temperature, the dark current is large (~ 1000 electrons/pixel/s). At -100 °C, it is ~ 0.001 electrons/pixel/s, which is small but not negligible for long exposures.
- **"A bad pixel mask is optional."** For high-precision photometry, bad pixels can bias the measurement. The mask is essential.

## Connections

- **Astronomy and Astrophysics (Sem 5/6 theory).** The calibration pipeline is the foundation of all astronomical image processing. The bias, dark, and flat corrections are applied to every science image; the bad pixel mask is applied to identify defective pixels.
- **Digital imaging.** The same principles apply to digital cameras (bias, dark current, flat field), to medical imaging (X-ray, CT, MRI), and to remote sensing (satellite imagery).
- **Signal processing.** The calibration pipeline is a sequence of linear operations (subtraction and division) that transform the raw data into calibrated data. The noise propagation is straightforward for linear operations.
- **Optoelectronics.** The CCD is a silicon detector with applications beyond astronomy: digital cameras, scanners, medical imaging, machine vision. The same calibration principles apply to all of them.
- **Data reduction.** The calibration pipeline is the first step in any data reduction. The subsequent steps (image stacking, photometry, astrometry, spectroscopy) build on the calibrated data.

## Quick Check

1. What is a bias frame? A dark frame? A flat field?
2. State the calibration pipeline formula.
3. What is the gain of a CCD? What is the read noise?
4. How is the gain determined from the flat field?
5. How is the read noise determined from the bias frame?
6. Why are multiple bias, dark, and flat frames averaged?
7. What is a bad pixel mask? When is it applied?
8. A student observes that the calibrated image still has structure. What might be wrong?

## Takeaway

The calibration pipeline is the foundation of astronomical image processing. The bias, dark, and flat corrections are applied to every science image; the bad pixel mask identifies the defective pixels. The lab's discipline — careful acquisition of calibration frames, accurate application of the pipeline, honest verification of the result — is the same discipline that runs through every astronomical observation. The same principles apply to all CCD-based imaging, from astronomy to digital cameras to medical imaging. The calibrated image is the starting point for the photometry, astrometry, and spectroscopy that follow.
