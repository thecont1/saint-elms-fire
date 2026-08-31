***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-1
semesterName: Semester 1
subjectId: astrophysics
subjectName: Astrophysics (minor)
courseId: astrophysics-i
courseName: Astrophysics I — The Sky and Coordinates
moduleId: astrophysics-i-module-3
moduleName: Instruments
lessonId: astrophysics-i-m3-l3
lessonName: Observing from the Ground and from Space
lessonNumber: 9
moduleNumber: 3
semesterNumber: 3
difficulty: foundation
estimatedStudyMinutes: 45
releaseOrder: 9
prerequisites:
  - astrophysics-i-m3-l1
  - astrophysics-i-m3-l2
learningObjectives:
  - Identify the main challenges of ground-based observing.
  - Describe the benefits and trade-offs of space telescopes.
  - Choose a wavelength band for a given observational problem.
  - Recognise the role of interferometry in achieving high angular resolution.
concepts:
  - Atmospheric seeing
  - Adaptive optics
  - Light pollution
  - Space telescope
  - Interferometry
  - Site selection
tags:
  - astrophysics
  - astronomy
  - observing-techniques
sourceType: authored-courseware
assessmentHints:
  - conceptual
  - short-answer
  - problem-solving
***

# Observing from the Ground and from Space

## Overview
Where you observe matters as much as what you observe with. Atmospheric turbulence blurs images, weather disrupts schedules, and light pollution overwhelms faint objects. Space telescopes avoid all of these but cost orders of magnitude more and have limited lifetimes. This lesson covers the practical constraints of observing — site selection, seeing, adaptive optics, and the role of interferometry — and the trade-offs between ground and space.

## Learning Path
- What you should already know: the wavelength windows, telescopes, and detectors.
- What this lesson adds: the trade-offs of observing site and platform, and a few key techniques.
- What it unlocks: multi-wavelength astronomy in *Astrophysics II*, the resolution discussion in *Waves and Optics*, and the practical details of running an observatory.

## Core Explanation
**Atmospheric seeing.** Turbulence in the air creates cells of slightly different temperature and density, which refract light by small amounts. The result is that a star's image "twinkles" and is blurred to a seeing disk of typically $0.5''$–$2''$ in diameter at good sites. The Fried parameter $r_0$ (typically $10$–$20$ cm at a good site at visible wavelengths) is the size of a telescope aperture at which the resolution is dominated by seeing rather than diffraction.

**Site selection.** Good observatory sites share several features:
- High altitude (above as much atmosphere as possible).
- Dry climate (less water vapour, less IR absorption).
- Far from cities (less light pollution).
- Stable air (less turbulence, good seeing).
- Many clear nights per year.

Examples: Mauna Kea (Hawaii, $4205\text{ m}$), Paranal (Chile, $2635\text{ m}$), Hanle (Ladakh, $4500\text{ m}$ — the Indian Astronomical Observatory). Hanle is one of the best sites in the world for submillimetre observations because of its extreme dryness.

**Adaptive optics (AO).** A way to undo atmospheric seeing in real time. A wavefront sensor measures the distortion; a deformable mirror corrects it many times per second. The correction must be done for a bright reference star (natural guide star) or an artificial laser guide star. With AO, large ground-based telescopes can reach diffraction-limited performance in the near-IR and, with newer systems, in the visible.

**Light pollution.** Excess artificial light in the night sky raises the background, drowning out faint objects. Light pollution is growing worldwide at about $2$–$6\%$ per year. A dark site has a sky background of $V \approx 22$ per square arcsecond; a city site is $V \approx 18$ or worse — about $16\times$ more background per square arcsecond, a factor of $4$ in sensitivity per exposure time.

**Space telescopes.** Avoid the atmosphere entirely, enabling observations in UV, X-ray, gamma-ray, and far-IR. They also have stable pointings, no weather, and no light pollution. Trade-offs: cost (orders of magnitude higher), limited size (aperture constrained by fairing), limited lifetime (no servicing for most modern missions), and launch risk.

Major space observatories:
- Hubble Space Telescope (HST): UV, visible, near-IR; $2.4\text{ m}$ aperture; launched 1990.
- James Webb Space Telescope (JWST): mid-IR; $6.5\text{ m}$ segmented; at L2; launched 2021.
- Chandra X-ray Observatory: X-ray; launched 1999.
- Spitzer Space Telescope: mid- to far-IR; $0.85\text{ m}$; operated 2003–2020.
- Fermi Gamma-ray Space Telescope: gamma-ray; launched 2008.

**Interferometry.** Combining the light from two or more telescopes to synthesise a larger effective aperture. The angular resolution is $\lambda / B$, where $B$ is the *baseline* (the maximum distance between telescopes). The Very Large Array has $B$ up to $36\text{ km}$, giving sub-arcsecond resolution at centimetre wavelengths. Optical interferometry is harder (atmospheric path-length fluctuations) but possible — the CHARA array on Mount Wilson achieves sub-milliarcsecond resolution.

**Synthetic aperture and aperture synthesis.** The principle that you can build up an image by combining many interferometric baselines, just as a single large aperture would. Used in radio (VLA, ALMA) and is being developed for optical interferometry.

**Time-domain astronomy.** The newest frontier. Survey telescopes (e.g. ZTF, LSST) scan the sky repeatedly, looking for transient events — supernovae, gamma-ray bursts, near-Earth asteroids, variable stars, gravitational-wave counterparts. The Vera C. Rubin Observatory's LSST will image the entire visible sky every few nights.

## Key Ideas
- Atmospheric seeing limits ground-based resolution to typically $0.5''$–$2''$ at good sites.
- Adaptive optics can correct seeing in real time, achieving near-diffraction-limited performance.
- Light pollution raises the sky background and degrades sensitivity.
- Space telescopes avoid the atmosphere, enabling UV, X-ray, gamma-ray, and far-IR observations.
- Interferometry synthesises a large aperture from many smaller ones, achieving high angular resolution.

## Worked Examples
**Example 1 — Site quality.** Hanle's median seeing is about $1''$ in the visible. Compare to a typical $0.5''$ seeing at Paranal. If you are limited by seeing, the resolution is set by the Fried parameter $r_0$, and a larger aperture does not help. Hanle's advantage is its submillimetre transparency; Paranal's advantage is its consistent seeing.

**Example 2 — AO performance.** With a Shack-Hartmann wavefront sensor and a deformable mirror with $20 \times 20$ actuators, you can correct up to about $20$ Zernike modes, corresponding to a Strehl ratio of $0.3$–$0.5$ in the $K$ band ($2.2\ \mu\text{m}$). This gives near-diffraction-limited images on a $8$-m telescope at $2.2\ \mu\text{m}$.

**Example 3 — Interferometric resolution.** The VLA at $B = 36\text{ km}$, $\lambda = 21\text{ cm}$ (H I line): $\theta \approx \lambda / B = 0.21 / 36000 = 5.8 \times 10^{-6}\text{ rad} \approx 1.2''$. This is comparable to HST's resolution at visible wavelengths, but the VLA observes a totally different band.

## Common Misconceptions
- **"A larger telescope always gives better resolution."** Only if the resolution is diffraction-limited. If the seeing disk is $1''$, a $1$-m and a $10$-m telescope have the same angular resolution.
- **"Space telescopes have no problems."** They have launch risk, pointing constraints, no servicing (usually), contamination, and limited lifetime.
- **"Light pollution only affects visual observations."** No — it affects any observation of faint objects in any band, including CCD imaging.
- **"Interferometry is just a clever way to make a large telescope."** It is a way to make a large *effective baseline*, not a large filled aperture. Interferometers have very limited fields of view and are far harder to use than filled apertures.

## Connections
The Fried parameter $r_0$ and the seeing limit are also studied in *Waves and Optics* (Sem 3) as examples of random media. Adaptive optics is a control-systems problem with overlap to *Numerical Methods* (Sem 4). The trade-off between filled aperture and interferometry is the design choice behind the next generation of giant telescopes (E-ELT, GMT, TMT) versus long-baseline interferometers.

## Quick Check
1. What is atmospheric seeing, and what sets the typical scale of the seeing disk?
2. State one advantage and one disadvantage of space telescopes compared to ground-based ones.
3. Why is Hanle a good site for submillimetre observations?
4. What is the resolution limit of an interferometer with baseline $B$ at wavelength $\lambda$?
5. Explain how adaptive optics improves angular resolution.

## Takeaway
- Atmospheric seeing limits ground-based resolution; adaptive optics can recover near-diffraction-limited performance.
- Light pollution, weather, and turbulence make site selection a key part of observatory design.
- Space telescopes avoid the atmosphere entirely, enabling UV, X-ray, gamma-ray, and far-IR observations.
- Interferometry synthesises a large effective baseline, achieving high angular resolution.
- The next generation of instruments is multi-wavelength, multi-epoch, and increasingly automated.
