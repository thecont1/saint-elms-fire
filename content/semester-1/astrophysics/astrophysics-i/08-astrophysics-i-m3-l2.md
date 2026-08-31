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
lessonId: astrophysics-i-m3-l2
lessonName: Detectors, Spectra and Wavelength Windows
lessonNumber: 8
moduleNumber: 3
semesterNumber: 1
difficulty: foundation
estimatedStudyMinutes: 50
releaseOrder: 8
prerequisites:
  - astrophysics-i-m3-l1
learningObjectives:
  - Describe the main types of astronomical detectors and their role.
  - Explain how a spectrograph produces a stellar spectrum.
  - Identify the main wavelength windows used in astronomy.
  - Recognise the importance of the infrared, ultraviolet, and radio bands.
concepts:
  - Photographic plate
  - CCD
  - Spectrograph
  - Wavelength windows
  - Atmospheric transmission
  - Quantum efficiency
tags:
  - astrophysics
  - astronomy
  - detectors
  - spectroscopy
sourceType: authored-courseware
assessmentHints:
  - conceptual
  - short-answer
  - derivation
***

# Detectors, Spectra and Wavelength Windows

## Overview
A telescope collects light; a detector records it. The choice of detector and the wavelength band in which you observe determine what you can measure. Modern astronomy has migrated from photographic plates to electronic detectors (CCDs and CMOS), and from the visible band to a full multi-wavelength coverage from radio to gamma rays. This lesson covers the basics of detectors, the production of spectra, and the wavelength windows that the Earth's atmosphere does and does not allow.

## Learning Path
- What you should already know: the electromagnetic spectrum, basic optics.
- What this lesson adds: the main detector technologies, the anatomy of a spectrograph, and where the atmosphere is transparent.
- What it unlocks: stellar spectra in *Atomic and Molecular Physics*, multi-wavelength astronomy, and spectroscopy in *Numerical Methods*.

## Core Explanation
**Detectors.** A detector converts incoming photons into a measurable signal.
- **Photographic plates** (emulsion of silver halide grains on glass) were the workhorse of astronomy from the late 1800s to the 1980s. Quantum efficiency (fraction of incident photons recorded) was about $1$–$3\%$. Non-linear, requiring careful calibration.
- **CCDs** (charge-coupled devices) are silicon chips with an array of pixels. Each pixel accumulates photoelectrons in a potential well; the charges are read out serially. Quantum efficiency is about $80$–$95\%$ at the peak wavelength. Linear response, low noise, large dynamic range. This is the standard optical detector today.
- **CMOS** detectors are similar to CCDs but each pixel has its own amplifier; faster readout, more flexible, slightly noisier.
- **Infrared array detectors** (e.g. HgCdTe) extend the sensitivity to $1$–$5\ \mu\text{m}$ and beyond. They must be cooled to reduce thermal noise.
- **Bolometers** measure the total power in a band by the temperature rise of an absorber; used in the submillimetre and far-infrared.

**Quantum efficiency (QE).** The QE is the fraction of incoming photons that produce a useful signal. A high QE means more science per photon. CCDs reach $90\%$ in the visible; photographic plates achieved $1\%$; the human eye about $1\%$.

**Spectrographs.** A spectrograph takes the light from one or more objects, disperses it by wavelength, and records the spectrum. Two main dispersion methods:
- A **prism** disperses by refraction; the dispersion is non-linear and the throughput is low. Used in early spectrographs.
- A **diffraction grating** (a ruled surface with thousands of lines per mm) disperses by diffraction; the dispersion is linear and the efficiency is high. The modern standard.

A slit spectrograph uses a narrow slit at the focal plane to define the source region; a slitless spectrograph uses the telescope's image itself. Slitless spectrographs are good for bright stars and survey work; slit spectrographs are better for faint sources and detailed work.

A **fibre spectrograph** uses optical fibres to bring the light from many objects in the focal plane to a single spectrograph — a powerful technique for multi-object spectroscopy.

**Wavelength windows.** The Earth's atmosphere is transparent only in certain windows. The main windows are:
- **Radio**: from about $10\text{ MHz}$ to $300\text{ GHz}$ (long-wavelength end limited by ionospheric reflection; short-wavelength end by atmospheric absorption).
- **Visible**: $0.3$–$0.9\ \mu\text{m}$, where the atmosphere is most transparent.
- **Near-infrared**: $1$–$5\ \mu\text{m}$, with strong absorption bands from water vapour and $\text{CO}_2$.
- **Mid- and far-infrared**: $5\ \mu\text{m}$ to $1\text{ mm}$, mostly opaque from the ground.
- **Ultraviolet** ($\lambda < 0.3\ \mu\text{m}$): absorbed by ozone and oxygen.
- **X-ray and gamma-ray**: completely absorbed by the atmosphere.

For wavelengths where the atmosphere blocks, astronomers put telescopes in space: HST (UV, visible, near-IR), JWST (mid-IR), Chandra (X-ray), Fermi (gamma-ray), and so on.

**Photometry vs. spectroscopy.** In **photometry**, the detector records the total brightness in a wavelength band (e.g. the $V$ band centred on $550\text{ nm}$). In **spectroscopy**, the detector records the brightness as a function of wavelength — a much richer dataset, revealing the chemical composition, temperature, and motion of the source.

**Filters and standard bands.** A photometric system uses a set of standard filters (e.g. the Johnson-Cousins $UBVRI$ system) with well-defined central wavelengths and bandpasses. Photometric calibration uses standard stars (e.g. Vega, or the AB magnitude system, or the ST magnitudes).

## Key Ideas
- Modern detectors are CCDs and CMOS arrays, with quantum efficiencies of $80$–$95\%$.
- Spectrographs use prisms or diffraction gratings to disperse light by wavelength.
- The atmosphere is transparent in radio, visible, and near-IR windows; UV, X-ray, gamma-ray need space telescopes.
- Photometry measures brightness in a band; spectroscopy measures brightness as a function of wavelength.
- Filter systems (UBVRI, SDSS ugriz, JWST NIRCam) define standard photometric bands.

## Worked Examples
**Example 1 — Exposure time estimate.** A star has $V = 15$. A $1$-m telescope with a CCD of QE $0.8$ records about $0.013$ photons per second per cm² of aperture per magnitude. The collected photon rate is $0.013 \times 100^2 \times 10^{-0.4 \cdot 15} = 0.013 \times 10^4 \times 10^{-6} = 0.13\text{ photons/s}$. To collect $1000$ photons (a few percent accuracy in photometry), need $\sim 7700\text{ s} \approx 2.1\text{ h}$.

**Example 2 — Grating dispersion.** A grating with $1200$ lines/mm gives a grating constant $d = 1/1200\text{ mm} = 833\text{ nm}$. For first-order ($m = 1$) light at $\lambda = 500\text{ nm}$, the diffraction angle satisfies $d \sin\theta = m\lambda$, so $\sin\theta = 500/833 \approx 0.6$, giving $\theta \approx 37°$. A second-order spectrum appears at $\sin\theta = 1000/833 = 1.2$ — outside the real range, so this grating is single-order for visible light.

**Example 3 — Atmospheric windows.** A radio observation at $1.4\text{ GHz}$ ($21\text{ cm}$ wavelength) — the famous neutral hydrogen line — is well within the radio window. The same observation at $1.4\text{ THz}$ ($214\ \mu\text{m}$ wavelength, far-IR) is blocked by the atmosphere and would need a space telescope.

## Common Misconceptions
- **"Photographic plates are still in use."** No — they have been replaced by CCDs and CMOS detectors in essentially every observatory.
- **"X-ray astronomy is just 'normal' astronomy at higher energy."** X-ray photons are absorbed by the atmosphere, so X-ray astronomy is done from space. X-ray detectors use different physics (e.g. microchannel plates, CCDs in special configurations, silicon drift detectors).
- **"A spectrograph measures colour."** It measures brightness as a function of wavelength — much more detailed than colour.
- **"The atmosphere is mostly transparent."** It is transparent in only a few narrow windows; the rest is opaque.

## Connections
Spectroscopy is the heart of astrophysics — the next module of this course, and much of *Atomic and Molecular Physics* (Sem 6), is built on it. The quantum efficiency and noise properties of detectors are practical matters in *Numerical Methods* (Sem 4), where signal-to-noise and error analysis are essential. The wavelength windows explain the placement of space telescopes in *Astrophysics II*.

## Quick Check
1. Why have CCDs replaced photographic plates in astronomy?
2. State two wavelength windows in which the Earth's atmosphere is transparent.
3. What is the role of a diffraction grating in a spectrograph?
4. Why does X-ray astronomy require space telescopes?
5. Explain the difference between photometry and spectroscopy.

## Takeaway
- Modern astronomical detectors are CCDs/CMOS arrays with quantum efficiencies of $80$–$95\%$.
- Spectrographs disperse light with prisms or gratings; spectra contain far more information than photometry.
- The atmosphere is transparent in radio, visible, and some near-IR windows; UV, X-ray, gamma-ray need space.
- Filter systems (e.g. $UBVRI$, SDSS) define standard photometric bands.
- The choice of detector and wavelength band is dictated by the science question.
