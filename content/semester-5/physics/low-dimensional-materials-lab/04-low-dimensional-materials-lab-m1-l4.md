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
lessonId: low-dimensional-materials-lab-m1-l4
lessonName: Structural Characterisation — Raman, AFM, and SEM
lessonNumber: 4
moduleNumber: 1
semesterNumber: 5
difficulty: advanced
estimatedStudyMinutes: 55
releaseOrder: 4
prerequisites:
  - low-dimensional-materials-lab-m1-l3
learningObjectives:
  - Measure the Raman spectrum of a thin film (e.g. graphene, MoS₂, a perovskite); identify the Raman peaks and interpret them.
  - Use an atomic force microscope (AFM) to image the surface of a thin film; measure the surface roughness.
  - Use a scanning electron microscope (SEM) to image the surface and the cross-section of a thin film; identify the morphology.
concepts:
  - Raman spectroscopy
  - Phonon modes
  - Raman shift
  - Atomic force microscopy (AFM)
  - Surface roughness
  - RMS roughness
  - Scanning electron microscopy (SEM)
  - Secondary electrons
  - Backscattered electrons
  - Magnification
tags:
  - physics
  - laboratory
  - thin-film
  - raman
  - afm
  - sem
sourceType: authored-courseware
assessmentHints:
  - Raman shift: ν = (1/λ_laser - 1/λ_Raman) in cm⁻¹.
  - AFM: tip scans the surface; the deflection is measured. RMS roughness = sqrt(<z²> - <z>²).
  - SEM: electron beam scans the surface; secondary electrons are detected. Magnification 10× to 100000×.
status: in-review
***

# Structural Characterisation — Raman, AFM, and SEM

## Overview

Structural characterisation of thin films is the measurement of the film's structure at the atomic and nanometre scale. The most common techniques are Raman spectroscopy (vibrational modes), atomic force microscopy (AFM, surface topography), and scanning electron microscopy (SEM, surface morphology). Together, these techniques provide a complete picture of the film's structure.

This lesson covers the apparatus (a Raman spectrometer, an AFM, a SEM, a thin-film sample), the procedure (measure the Raman spectrum, image the surface with AFM, image the surface and cross-section with SEM), the analysis (identify the Raman peaks, measure the surface roughness, identify the morphology), and the dominant sources of error (sample preparation, laser heating, tip artifacts, beam damage).

## Learning Path

1. **Measure the Raman spectrum** of a thin film (e.g. graphene, MoS₂, a perovskite). Use a 532 nm laser with low power (e.g. 1 mW) to avoid heating.
2. **Identify the Raman peaks** and interpret them. For graphene, the G peak is at ~ 1580 cm⁻¹ and the 2D peak is at ~ 2700 cm⁻¹.
3. **Image the surface with AFM.** Use a contact or tapping mode; scan a 1 μm × 1 μm area; measure the surface roughness.
4. **Image the surface with SEM.** Use a 5-10 kV accelerating voltage; image the surface at 10000× to 100000× magnification.
5. **Image the cross-section with SEM.** Cleave the sample; image the cross-section to measure the film thickness.

## Core Explanation

### Theory: Raman Spectroscopy

Raman spectroscopy measures the inelastic scattering of light by a material. A monochromatic laser (e.g. 532 nm) is incident on the sample; most of the light is scattered elastically (Rayleigh scattering), but a small fraction is scattered inelastically, with the photons gaining or losing energy to the vibrational modes (phonons) of the material. The energy shift is the Raman shift, in cm⁻¹.

The Raman shift is

ν = (1 / λ_laser − 1 / λ_Raman) in cm⁻¹,

where λ_laser is the laser wavelength and λ_Raman is the wavelength of the Raman-scattered light. For a laser at 532 nm and a Raman peak at 558 nm, ν = (1/532 − 1/558) × 10⁷ = (1.880 − 1.792) × 10⁷ = 880 cm⁻¹.

The Raman spectrum is a plot of intensity vs Raman shift. Each Raman peak corresponds to a specific phonon mode of the material. The position, width, and intensity of the peaks provide information about the crystal structure, the strain, the doping, and the defects.

For graphene, the G peak is at ~ 1580 cm⁻¹ (E₂g phonon at the Γ point) and the 2D peak is at ~ 2700 cm⁻¹ (second-order process involving two phonons near the K point). The ratio of the 2D peak to the G peak is a measure of the number of graphene layers: ~ 2 for a monolayer, ~ 1 for a bilayer, ~ 0.5 for bulk graphite.

For MoS₂, the E¹₂g peak is at ~ 385 cm⁻¹ and the A₁g peak is at ~ 405 cm⁻¹. The separation between the two peaks is a measure of the number of layers: ~ 19 cm⁻¹ for a monolayer, ~ 22 cm⁻¹ for a bilayer, ~ 25 cm⁻¹ for bulk.

### Theory: Atomic Force Microscopy

An atomic force microscope (AFM) images the surface topography by scanning a sharp tip (radius ~ 10 nm) across the surface. The tip is mounted on a cantilever (a flexible beam) with a known spring constant. As the tip scans, the cantilever deflects due to the tip-sample interaction; the deflection is measured by a laser and a photodiode.

There are three main AFM modes:
- **Contact mode**: the tip is in contact with the surface; the deflection is held constant. Best for hard, flat surfaces.
- **Tapping mode**: the tip oscillates near its resonant frequency; the amplitude is held constant. Less damaging than contact mode; best for soft or fragile surfaces.
- **Non-contact mode**: the tip oscillates just above the surface; the resonant frequency is shifted by the tip-sample interaction. Best for very delicate surfaces.

The surface roughness is measured from the topography. The root-mean-square (RMS) roughness is

R_q = √(<z²> − <z>²),

where the average is over the scan area. A smooth film has R_q < 1 nm; a rough film has R_q > 10 nm.

### Theory: Scanning Electron Microscopy

A scanning electron microscope (SEM) images the surface by scanning a focused electron beam (1-30 kV) across the surface. The electrons interact with the atoms in the sample, producing secondary electrons (SE), backscattered electrons (BSE), and X-rays.

The secondary electrons (low-energy, < 50 eV) are produced by the inelastic scattering of the primary electrons. They escape from the top few nm of the surface, giving a topographic image with a resolution of ~ 1-10 nm.

The backscattered electrons (high-energy, > 50 eV) are produced by the elastic scattering of the primary electrons. They come from a deeper region (~ 100 nm) and are sensitive to the atomic number (Z-contrast): heavier atoms appear brighter.

The X-rays are produced by the inelastic scattering of the primary electrons. The X-ray spectrum is used for energy-dispersive X-ray spectroscopy (EDS), which gives the elemental composition.

The magnification of the SEM is the ratio of the scan area on the sample to the scan area on the display: M = L_display / L_sample. Magnifications of 10× to 100000× are typical, with a resolution of ~ 1 nm at high magnification.

### Apparatus

- Raman spectrometer (with a laser, a microscope, a spectrometer, a CCD detector).
- AFM (with a cantilever, a tip, a scanner, a controller).
- SEM (with an electron gun, a scan coil, a detector).
- Thin-film samples.
- Substrate (e.g. Si, glass, sapphire).
- Sample preparation tools (tweezers, cleaving tools, conductive tape).
- Safety glasses; the SEM requires special training due to the high voltage and the X-ray emission.

### Procedure

1. **Measure the Raman spectrum.** Place the sample on the Raman microscope. Focus the laser on the sample. Set the laser power (1-5 mW for a 532 nm laser). Acquire the spectrum from 100 to 3500 cm⁻¹ with an integration time of 10 s.
2. **Image the surface with AFM.** Mount the sample on the AFM stage. Engage the tip. Scan a 1 μm × 1 μm area in tapping mode. Record the topography.
3. **Image the surface with SEM.** Mount the sample on the SEM stage with conductive tape. Apply a conductive coating (e.g. sputter-coat with Au/Pd) if the sample is not conductive. Image at 5-10 kV and 10000-100000× magnification.
4. **Image the cross-section with SEM.** Cleave the sample to expose the cross-section. Mount the cross-section vertically. Image at 5-10 kV and 50000-100000× magnification.

### Analysis

#### Raman Peak Identification

For graphene, the G peak is at ~ 1580 cm⁻¹ and the 2D peak is at ~ 2700 cm⁻¹. The 2D/G ratio is ~ 2 for a monolayer, ~ 1 for a bilayer, ~ 0.5 for bulk. The D peak at ~ 1350 cm⁻¹ is a measure of defects.

For MoS₂, the E¹₂g peak is at ~ 385 cm⁻¹ and the A₁g peak is at ~ 405 cm⁻¹. The separation is ~ 19 cm⁻¹ for a monolayer.

For a perovskite (e.g. CH₃NH₃PbI₃), the Raman peaks are at low frequencies (50-200 cm⁻¹), corresponding to the Pb-I stretching modes.

#### AFM Roughness

For a scan area of 1 μm × 1 μm, the RMS roughness R_q is computed from the topography. A smooth perovskite film has R_q ~ 1-10 nm. A rough film has R_q > 50 nm.

#### SEM Image Analysis

The SEM image shows the surface morphology. For a perovskite film, the grain size is typically 100-500 nm. The cross-section shows the film thickness; for a 100 nm film, the cross-section shows a 100 nm layer on top of the substrate.

### Sources of Error

- **Sample preparation.** Dust, fingerprints, and surface contamination affect the Raman, AFM, and SEM measurements. Clean the sample with isopropanol and dry with nitrogen.
- **Laser heating.** A high laser power can heat the sample, shifting the Raman peaks or damaging the film. Use a low laser power (1-5 mW) and a short integration time.
- **Tip artifacts.** The AFM tip can be damaged or contaminated, leading to image artifacts. Use a fresh tip and verify the tip shape with a calibration sample.
- **Beam damage.** The SEM electron beam can damage sensitive samples (e.g. polymers, perovskites). Use a low accelerating voltage (1-5 kV) and a low beam current.
- **Charging.** Non-conductive samples charge under the electron beam, distorting the image. Apply a conductive coating or use a low accelerating voltage.

## Key Ideas

- Raman spectroscopy: measures the vibrational modes (phonons) of a material. Each peak corresponds to a specific phonon.
- AFM: images the surface topography with a sharp tip. The RMS roughness is a measure of the surface quality.
- SEM: images the surface with a focused electron beam. The secondary electrons give a topographic image; the backscattered electrons give a Z-contrast image.

## Worked Examples

#### Example 1: Raman Spectrum of Graphene

A graphene monolayer is measured with a 532 nm Raman spectrometer. The spectrum shows:
- G peak at 1582 cm⁻¹
- 2D peak at 2680 cm⁻¹
- D peak at 1350 cm⁻¹ (small)

The 2D/G ratio is ~ 3 (typical for a monolayer). The D/G ratio is < 0.1 (low defect density). The monolayer is of high quality.

#### Example 2: AFM Roughness of a Perovskite Film

A perovskite film is imaged with AFM in tapping mode over a 5 μm × 5 μm area. The RMS roughness is R_q = 12 nm. The peak-to-valley roughness is R_max = 80 nm. The grain size is ~ 300 nm (estimated from the AFM image).

#### Example 3: SEM Cross-Section of a Thin Film

A thin film is cleaved and imaged in cross-section by SEM. The cross-section shows:
- A 100 nm layer on top of the substrate.
- A sharp interface between the film and the substrate.
- A columnar grain structure in the film.

The film thickness is 100 ± 5 nm. The grain size is 50-100 nm.

## Common Misconceptions

- **"Raman spectroscopy measures the composition."** It measures the vibrational modes. The composition is inferred from the comparison with reference spectra.
- **"AFM measures the absolute height."** It measures the relative height (the deflection of the cantilever). The absolute height is calibrated with a step standard.
- **"SEM measures the composition."** The SEM image is a topographic image (from secondary electrons) or a Z-contrast image (from backscattered electrons). The composition is measured by EDS.
- **"The Raman peak position is the same for all samples."** The peak position depends on the strain, the doping, the temperature, and the defects. The peak position can be used to characterise these effects.
- **"The AFM tip is sharp."** A typical AFM tip has a radius of ~ 10 nm. For features smaller than the tip radius, the image is convolved with the tip shape; the actual feature is sharper than the image.

## Connections

- **Low-Dimensional Materials (Sem 5 theory).** Raman, AFM, and SEM are the primary tools for characterising low-dimensional systems. The number of layers, the strain, the defects, the surface roughness, and the morphology are all measured by these techniques.
- **Materials science.** The same techniques are used for bulk materials, thin films, and nanostructures. The information is complementary: Raman gives the vibrational modes, AFM gives the topography, SEM gives the morphology.
- **Chemistry.** Raman spectroscopy is used to identify chemical compounds (the "fingerprint" of the molecule). The technique is non-destructive and requires minimal sample preparation.
- **Biology.** AFM is used to image biological samples (proteins, DNA, cells) at the nanometre scale. The technique works in air and in liquid.
- **Nanotechnology.** SEM and AFM are the workhorses of nanotechnology. Every nanostructure is imaged by SEM; every surface is characterised by AFM.

## Quick Check

1. What is the Raman shift? How is it calculated?
2. What is the G peak and the 2D peak of graphene?
3. What is the difference between contact mode and tapping mode AFM?
4. What is the RMS roughness?
5. What are secondary electrons? Backscattered electrons?
6. What is the magnification of a SEM?
7. Why must a non-conductive sample be coated for SEM?
8. A graphene sample has a 2D/G ratio of 0.5. Is it a monolayer or bulk?

## Takeaway

Raman, AFM, and SEM are the lab's primary tools for characterising the structure of thin films at the atomic and nanometre scale. Raman gives the vibrational modes; AFM gives the topography; SEM gives the morphology. The lab's discipline — careful sample preparation, proper measurement conditions, accurate data analysis, honest uncertainty estimation — is the same discipline that runs through every structural characterisation. The same techniques apply to all thin films, from the laboratory sample to the industrial product. The data you collect today is the raw material for the analysis that follows.
