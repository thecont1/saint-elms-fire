***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-5
semesterName: Semester 5
subjectId: physics
subjectName: Physics
courseId: astronomy-and-astrophysics
courseName: Astronomy and Astrophysics (Physics Option A)
moduleId: astronomy-and-astrophysics-module-3
moduleName: Galactic Structure and Observational Methods
lessonId: astronomy-and-astrophysics-m3-l2
lessonName: Photometry, CCD Signal-to-Noise and Spectroscopic Radial Velocities
lessonNumber: 8
moduleNumber: 3
semesterNumber: 5
difficulty: advanced
estimatedStudyMinutes: 60
releaseOrder: 8
prerequisites:
  - astronomy-and-astrophysics-m3-l1
  - astrophysics-iii-m1-l1
  - astrophysics-i-m3-l2
learningObjectives:
  - Convert between fluxes and magnitudes in the Vega and AB systems and use colour indices and bolometric corrections.
  - Describe how a CCD converts photons to digital counts, including quantum efficiency, gain, read noise and dark current.
  - Apply the CCD signal-to-noise equation and solve it for the exposure time needed to reach a target precision.
  - Measure radial velocities from Doppler shifts and relate velocity precision to spectral resolving power and signal-to-noise.
concepts:
  - Vega and AB magnitude systems
  - Colour index
  - Bolometric correction
  - Charge-coupled device
  - CCD signal-to-noise equation
  - Spectral resolving power
  - Radial velocity
tags:
  - physics
  - astronomy-and-astrophysics
  - photometry
  - spectroscopy
sourceType: authored-courseware
status: in-review
assessmentHints:
  - problem-solving
  - computational
  - conceptual
  - short-answer
***

# Photometry, CCD Signal-to-Noise and Spectroscopic Radial Velocities

## Overview

Every quantity in this course — effective temperatures, column densities, extinctions, rotation velocities — is ultimately inferred from counts of photoelectrons in a detector. This lesson treats the measurement chain quantitatively. Photometric systems define magnitudes through filter passbands and zero points, in either the Vega or the AB convention, and colour indices act as temperature and reddening indicators. Charge-coupled devices convert photons to electrons with high efficiency but add read noise and dark current, and the CCD signal-to-noise equation combines source, sky, dark and read noise into a single figure of merit that predicts how long an exposure must be. Spectroscopy then disperses the light; the grating equation and resolving power fix the velocity resolution, and Doppler shifts measured against laboratory wavelengths give the radial velocities used for Galactic rotation in Lesson m3-l1. The Astronomy and Astrophysics Lab carries out these procedures at the telescope; here we derive the equations behind them.

## Learning Path

- **What you should already know**: magnitudes and the distance modulus (astrophysics-iii-m1-l1); detectors and wavelength windows (astrophysics-i-m3-l2); extinction and $E(B-V)$ (Lesson m2-l3); radial velocities in Galactic rotation (Lesson m3-l1).
- **What this lesson adds**: filter-integrated magnitudes; Vega and AB zero points; colour–temperature relations; CCD operation and calibration; the CCD equation and exposure-time calculation; resolving power and Doppler velocity measurement.
- **What later lessons this will unlock**: fitting blackbodies to multi-band photometry, periodograms of light curves, and error propagation (Lesson m3-l3).

## Core Explanation

### Magnitudes and photometric systems

A filter with transmission $S(\lambda)$ defines a band flux $F = \int F_\lambda S(\lambda)\,d\lambda/\int S(\lambda)\,d\lambda$, and magnitudes compare band fluxes logarithmically,

$$m_1 - m_2 = -2.5\log_{10}\frac{F_1}{F_2}.$$

The zero point fixes absolute values. In the **Vega system** the star Vega has magnitude close to zero in every band (in V, 0.03). In the **AB system** the zero point is a constant flux per unit frequency,

$$m_{\rm AB} = -2.5\log_{10}\frac{f_\nu}{3631\ {\rm Jy}} = -2.5\log_{10}f_\nu - 56.10,$$

with $f_\nu$ in W m$^{-2}$ Hz$^{-1}$ (1 Jy $= 10^{-26}$ W m$^{-2}$ Hz$^{-1}$; the cgs constant is 48.60). AB magnitudes convert directly to physical flux, which is why they are used for the SDSS and most modern surveys.

| Band | $\lambda_{\rm eff}$ (nm) | Width (nm) | System |
|---|---|---|---|
| U, B, V | 365, 445, 551 | 66, 94, 88 | Johnson (Vega) |
| R, I | 658, 806 | 138, 149 | Cousins (Vega) |
| u, g, r, i, z | 355, 469, 617, 748, 893 | 60–150 | SDSS (AB) |

A V = 0 star delivers $F_\lambda = 3.63\times10^{-11}$ W m$^{-2}$ nm$^{-1}$ at 551 nm, about 1,000 photons s$^{-1}$ cm$^{-2}$ Å$^{-1}$, or $8.9\times10^9$ photons s$^{-1}$ m$^{-2}$ across the V band.

A **colour index** such as $B - V = -2.5\log_{10}(F_B/F_V) + {\rm const}$ is independent of distance and measures the slope of the spectrum, hence temperature. An empirical blackbody-based fit valid for main-sequence stars is

$$T \approx 4600\ {\rm K}\left[\frac{1}{0.92(B-V) + 1.7} + \frac{1}{0.92(B-V) + 0.62}\right],$$

which gives 5,780 K for the Sun's $B - V = 0.65$. Colours must first be dereddened, $(B-V)_0 = (B-V) - E(B-V)$. The **bolometric correction** ${\rm BC}_V = M_{\rm bol} - M_V$ accounts for flux outside the band, and $L/L_\odot = 10^{-0.4(M_{\rm bol} - 4.74)}$. Observations from the ground are first corrected for atmospheric extinction, $m_0 = m - kX$, where $k$ is the extinction coefficient in magnitudes per airmass and $X \approx \sec z$ is the airmass.

### Charge-coupled devices

A CCD is a silicon array in which each photon with $h\nu$ above the 1.12 eV band gap ($\lambda < 1.1\,\mu$m) can liberate an electron. The **quantum efficiency** reaches 90% in back-illuminated devices. Electrons accumulate in potential wells (full well $\sim10^5$ e$^-$), are clocked across the array to an output amplifier and are digitised with a **gain** $g$ in e$^-$ per ADU. The amplifier contributes **read noise** $\sigma_R$ of 2–10 e$^-$ rms per pixel per readout. Thermally generated **dark current** is suppressed by cooling to about $-100\,^\circ$C, leaving $10^{-3}$–$10^{-2}$ e$^-$ s$^{-1}$ per pixel. Raw frames are calibrated as (raw $-$ bias $-$ dark)/(normalised flat), the procedure carried out in the lab. The pixel scale on the sky is

$$\theta_{\rm pix} = 206.265\,\frac{p\,(\mu{\rm m})}{f\,({\rm mm})}\ {\rm arcsec},$$

so 13.5 μm pixels at the focus of a 1.0 m f/5.6 telescope ($f = 5600$ mm) subtend 0.50 arcsec. Seeing of 1–2 arcsec is then sampled by at least two pixels per FWHM.

### The CCD signal-to-noise equation

Photon arrivals are Poisson-distributed, so a count $N$ has variance $N$, and independent noise sources add in quadrature. For a star giving $R_*$ e$^-$ s$^{-1}$ in an aperture of $n_{\rm pix}$ pixels, with sky $R_S$ and dark current $R_D$ per pixel in e$^-$ s$^{-1}$, an exposure of $t$ seconds gives

$$\frac{S}{N} = \frac{R_* t}{\sqrt{R_* t + n_{\rm pix}\left(R_S t + R_D t + \sigma_R^2\right)}}.$$

Three regimes follow:

- **Source-limited** (bright stars): $S/N \approx \sqrt{R_* t}$.
- **Sky-limited** (faint stars, long exposures): $S/N \approx R_*\sqrt{t}/\sqrt{n_{\rm pix}R_S}$; a star fainter by $\Delta m$ needs $10^{0.8\Delta m}$ times longer, which is why dark sites and good seeing (small $n_{\rm pix}$) matter so much.
- **Read-noise-limited** (short exposures): $S/N \propto t$, so splitting an observation into many short frames costs signal-to-noise.

Because $dm = -1.0857\,dF/F$, the magnitude uncertainty is $\sigma_m \approx 1.0857/(S/N)$. Squaring the CCD equation for a target $S/N$ gives a quadratic in $t$:

$$R_*^2t^2 - (S/N)^2\left[R_* + n_{\rm pix}(R_S + R_D)\right]t - (S/N)^2 n_{\rm pix}\sigma_R^2 = 0,$$

whose positive root is the required exposure time:

```python
import numpy as np

def exposure_time(snr, R_star, R_sky, R_dark, n_pix, read_noise):
    """Seconds needed to reach snr; rates in e-/s (sky, dark per pixel)."""
    a = R_star**2
    b = snr**2 * (R_star + n_pix*(R_sky + R_dark))
    c = snr**2 * n_pix * read_noise**2
    return (b + np.sqrt(b**2 + 4*a*c)) / (2*a)
```

### Spectroscopy and radial velocities

A grating with groove spacing $d$ disperses light according to $m\lambda = d(\sin\alpha + \sin\beta)$, with incidence angle $\alpha$, diffraction angle $\beta$ and order $m$. Its theoretical **resolving power** is $\mathcal{R} = \lambda/\Delta\lambda = mN$ for $N$ illuminated grooves; in practice the projected slit width usually sets $\Delta\lambda$. The corresponding velocity resolution is $\Delta v = c/\mathcal{R}$: 150 km s$^{-1}$ at $\mathcal{R} = 2000$ (classification) and 3 km s$^{-1}$ at $\mathcal{R} = 100{,}000$ (échelle spectrographs).

A source moving away at $v_r \ll c$ shifts every line by

$$\frac{\Delta\lambda}{\lambda_0} = \frac{v_r}{c},$$

with the relativistic form $1 + z = \sqrt{(1+\beta)/(1-\beta)}$ when needed. Wavelengths are calibrated against arc-lamp lines (Fe–Ar or Th–Ar) observed through the same optics, and the observed velocity is corrected to the solar-system barycentre: Earth's orbital motion contributes up to $\pm29.8$ km s$^{-1}$ and its rotation up to $\pm0.46$ km s$^{-1}$. A single line can be centred to a fraction of a resolution element that falls as $1/(S/N)$; cross-correlating against a template containing $N_{\rm lines}$ lines improves this roughly as $1/\sqrt{N_{\rm lines}}$, so

$$\sigma_v \sim \frac{c/\mathcal{R}}{(S/N)\sqrt{N_{\rm lines}}}$$

as an order-of-magnitude estimate. Stabilised échelle spectrographs such as HARPS reach about 1 m s$^{-1}$, enough to detect Earth-mass planets.

## Key Ideas

- **Magnitudes**: $m_1 - m_2 = -2.5\log_{10}(F_1/F_2)$; Vega and AB systems differ in zero point, with $m_{\rm AB} = -2.5\log_{10}(f_\nu/3631\,{\rm Jy})$.
- **Colour index**: a distance-independent temperature indicator once dereddened; ${\rm BC}_V$ converts to bolometric magnitude.
- **CCD**: high quantum efficiency, gain in e$^-$/ADU, read noise per pixel, dark current; calibrated with bias, dark and flat frames.
- **CCD equation**: $S/N = N_*/\sqrt{N_* + n_{\rm pix}(N_S + N_D + \sigma_R^2)}$, with source-, sky- and read-noise-limited regimes.
- **Precision**: $\sigma_m \approx 1.0857/(S/N)$; exposure time from the quadratic.
- **Resolving power**: $\mathcal{R} = \lambda/\Delta\lambda$ sets the velocity resolution $c/\mathcal{R}$.
- **Radial velocity**: $v_r = c\Delta\lambda/\lambda_0$, corrected to the barycentre.

## Worked Examples

### Example 1 — Photon rate from a V = 18 star

A 1.0 m telescope has a 0.30 m central obstruction and total throughput (optics, filter and quantum efficiency) of 0.50. Find the detected V-band rate from a V = 18.0 star and its AB flux density.

**Solution.** The collecting area is $\pi(0.50^2 - 0.15^2) = 0.715$ m$^2$, so the effective area is 0.357 m$^2$. The photon flux is $8.86\times10^9\times10^{-0.4\times18.0} = 8.86\times10^9\times6.31\times10^{-8} = 559$ photons s$^{-1}$ m$^{-2}$, giving

$$R_* = 559\times0.357 = 200\ {\rm e^-\,s^{-1}}.$$

Taking $V_{\rm AB} \approx V$, $f_\nu = 3631\times10^{-7.2}$ Jy $= 0.23$ mJy.

### Example 2 — Signal-to-noise and exposure time

For Example 1, use an aperture of radius 2.0 arcsec, pixel scale 0.50 arcsec, sky brightness 21.0 mag arcsec$^{-2}$, dark current 0.01 e$^-$ s$^{-1}$ pixel$^{-1}$ and read noise 5 e$^-$. Find $S/N$ in 60 s and the exposure time for $S/N = 100$.

**Solution.** The aperture covers $\pi\times2.0^2 = 12.57$ arcsec$^2$, so $n_{\rm pix} = 12.57/0.25 = 50.3$. The sky rate in the aperture is $8.86\times10^9\times10^{-8.4}\times0.357\times12.57 = 158$ e$^-$ s$^{-1}$, and the dark rate is $0.50$ e$^-$ s$^{-1}$. In 60 s:

| Term | Electrons |
|---|---|
| Star $N_*$ | 11,990 |
| Sky | 9,500 |
| Dark | 30 |
| Read noise $n_{\rm pix}\sigma_R^2$ | 1,257 |
| Total variance | 22,780 |

$S/N = 11{,}990/\sqrt{22{,}780} = 11{,}990/150.9 = 79$, so $\sigma_m = 1.0857/79 = 0.014$ mag. For $S/N = 100$: $a = 200^2 = 4.0\times10^4$, $b = 10^4\times(200 + 158 + 0.5) = 3.59\times10^6$, $c = 10^4\times50.3\times25 = 1.26\times10^7$, and

$$t = \frac{3.59\times10^6 + \sqrt{(3.59\times10^6)^2 + 4\times4.0\times10^4\times1.26\times10^7}}{2\times4.0\times10^4} = 93\ {\rm s}.$$

The sky contributes almost as much variance as the star: the observation is near the sky-limited regime.

### Example 3 — Radial velocity from H$\alpha$

H$\alpha$ ($\lambda_0 = 656.280$ nm) is observed at 656.324 nm, and the barycentric correction for the date is $-8.5$ km s$^{-1}$. Find the barycentric radial velocity and the resolving power of a 600 lines mm$^{-1}$ grating illuminated over 50 mm in first order.

**Solution.** $v = c\,\Delta\lambda/\lambda_0 = 2.998\times10^5\times0.044/656.280 = 20.1$ km s$^{-1}$ observed, and $20.1 - 8.5 = 11.6$ km s$^{-1}$ barycentric (receding). The grating has $N = 600\times50 = 30{,}000$ grooves, so $\mathcal{R} = 30{,}000$, $\Delta\lambda = 0.022$ nm and $c/\mathcal{R} = 10$ km s$^{-1}$; the shift of 0.044 nm spans two resolution elements and is easily measured.

## Common Misconceptions

- **"A magnitude-zero star has zero flux."** Magnitude zero is the reference flux; the scale is logarithmic and can go negative.
- **"Doubling the exposure doubles the signal-to-noise."** In the source- and sky-limited regimes $S/N \propto \sqrt{t}$; only in the read-noise regime is it linear.
- **"Vega and AB magnitudes are interchangeable."** They differ by band-dependent offsets, reaching about 1.9 mag in the K band.
- **"Velocity precision cannot be better than the resolution element."** Centroiding and cross-correlation over many lines reach small fractions of $c/\mathcal{R}$.

## Connections

- Poisson counting statistics are the same as in nuclear-physics-lab-m1-l1; the $1/\sqrt{N}$ law is the basis of every SNR estimate.
- The photoelectric conversion in CCDs is the photoelectric effect of introduction-to-quantum-mechanics-m1-l2 in a semiconductor with the band gap of solid-state-physics-m3-l3.
- Grating dispersion and resolving power come from waves-and-optics-m3-l2; the astronomy-and-astrophysics-lab applies them in its CCD imaging, photometry, calibration and slit spectrograph lessons.
- Radial-velocity surveys detect exoplanets (astrophysics-ii-m3-l2); CCD signal-to-noise analysis also governs medical X-ray imaging and smartphone cameras.

## Quick Check

1. Convert a flux density of 1.0 mJy to an AB magnitude.
2. Two stars differ by 2.5 mag. By what factor must the exposure on the fainter one increase to reach the same $S/N$ in the sky-limited regime?
3. Why does the read-noise term grow when an observation is split into many short exposures?
4. Find the pixel scale of 15 μm pixels on a 2 m f/8 telescope.
5. What resolving power is needed for a velocity resolution of 5 km s$^{-1}$?

## Takeaway

- Magnitudes are logarithmic band fluxes tied to Vega or AB zero points; colours measure temperature after dereddening.
- CCDs convert photons to electrons efficiently but add read noise and dark current, removed by bias, dark and flat calibration.
- The CCD equation predicts signal-to-noise and exposure times and identifies whether source, sky or read noise dominates.
- Spectral resolving power sets the velocity resolution, and Doppler shifts corrected to the barycentre give radial velocities.
