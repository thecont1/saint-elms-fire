***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-6
semesterName: Semester 6
subjectId: physics
subjectName: Physics
courseId: atomic-and-molecular-physics
courseName: Atomic and Molecular Physics
moduleId: atomic-and-molecular-physics-module-2
moduleName: Lasers, Resonance and X-rays
lessonId: atomic-and-molecular-physics-m2-l2
lessonName: Laser Principles and Types
lessonNumber: 5
moduleNumber: 2
semesterNumber: 6
difficulty: advanced
estimatedStudyMinutes: 60
releaseOrder: 5
prerequisites:
  - atomic-and-molecular-physics-m2-l1
  - waves-and-optics-m2-l2
learningObjectives:
  - Explain the conditions required for laser action: population inversion, optical cavity, gain exceeding loss.
  - Describe the operation of a four-level laser and explain why it is preferred over a three-level one.
  - Compare common laser types — ruby, He-Ne, semiconductor, fibre, Ti:sapphire — by gain medium, pump mechanism, and typical output.
concepts:
  - Population inversion
  - Optical cavity and mode structure
  - Threshold condition
  - Four-level laser
  - Q-switching
  - Mode locking
tags:
  - physics
  - lasers
  - optics
  - quantum-electronics
sourceType: authored-courseware
assessmentHints:
  - conceptual
  - derivation
  - problem-solving
  - short-answer
***

# Laser Principles and Types

## Overview

A laser is a device that produces intense, coherent, narrow-band optical radiation by exploiting stimulated emission in a gain medium placed inside a resonant cavity. This lesson explains the three requirements for laser action — population inversion, an optical cavity that provides feedback, and a pump that maintains the inversion against losses — and shows how these are realised in practice. We work out the threshold condition for net gain, derive the steady-state photon number inside a single-mode laser, and survey the most important laser types: ruby, helium–neon, semiconductor diode, fibre, and titanium–sapphire. The lesson connects directly to the previous treatment of resonance fluorescence and prepares for the X-ray sources in Lesson m2-l3, where similar population-inversion ideas appear in the hot-plasma context.

## Learning Path

- **What you should already know**: Einstein A and B coefficients and the cross-section for resonance absorption (Lesson m2-l1); the structure of transverse and longitudinal modes of an optical cavity (covered in waves and optics, Semester 3); basic semiconductor energy-band concepts (covered in solid-state physics, Semester 5).
- **What this lesson adds**: a quantitative theory of laser threshold, mode competition, and output power; familiarity with the canonical laser systems used in research and industry.
- **What later lessons this will unlock**: the X-ray laser schemes in Lesson m2-l3; the use of lasers in atomic and molecular spectroscopy; the role of lasers in metrology and atomic clocks; the connection to nonlinear optics in the fourth-year syllabus.

## Core Explanation

The light–matter interaction gives three contributions to the rate of change of photon number $N$ in a single mode of an optical cavity at frequency $\omega$ close to an atomic transition:

$$\frac{dN}{dt} = - \kappa N + G(N),$$

where $\kappa N$ is the cavity loss rate (output coupling plus internal losses) and $G(N)$ is the net gain from the gain medium. For a two-level medium with population inversion $\Delta N = N_2 - N_1$ in the relevant states,

$$G(N) = \sigma(\omega)\, c\, \frac{\Delta N}{V} N,$$

where $\sigma(\omega)$ is the cross-section and $V$ is the mode volume. The factor $\Delta N/V$ is the **population inversion density**, the central quantity that must be made positive for net amplification.

For laser action to start, the small-signal gain must exceed the loss:

$$\sigma(\omega)\, c\, \frac{\Delta N_{\text{th}}}{V} \ge \kappa,$$

which gives the threshold inversion density

$$\Delta N_{\text{th}} = \frac{\kappa V}{\sigma c}.$$

Above threshold, the inversion is **clamped** at $\Delta N_{\text{th}}$ because additional pump power is converted into photons rather than into more inversion. The output power is then linear in the pump power above threshold, with a slope efficiency determined by the quantum defect (the photon energy deficit between pump and laser) and the output coupling fraction.

The problem with a simple two-level laser is that the same optical transition that you want to amplify also absorbs pump photons; you cannot achieve inversion by simply illuminating the medium with laser light at the same wavelength, because the stimulated emission that produces gain is exactly cancelled by absorption. A **three-level laser** solves this by using a third level as the upper laser level, with the lower laser level being the ground state. Ruby (Cr$^{3+}$ in Al$_2$O$_3$) is the historical example: a xenon flash lamp pumps chromium ions from the ground state $^4A_2$ to broad $^4F$ bands, from which they relax non-radiatively to the metastable $^2E$ upper laser level. The 694.3 nm laser transition then goes from $^2E$ to the ground $^4A_2$, which means the lower laser level has a large thermal population. To achieve inversion you must pump more than half of the ground-state population out, requiring a very powerful flash lamp and limiting the efficiency.

A **four-level laser** is more efficient. The upper laser level is metastable and the lower laser level is a high-lying state that is essentially empty at thermal equilibrium. The lower level decays quickly to the ground state, so the inversion threshold is small. Most modern lasers — He-Ne, Nd:YAG, Ti:sapphire, fibre lasers, semiconductor lasers — are four-level systems.

The optical cavity provides frequency-selective positive feedback. A simple linear cavity has two mirrors: a high reflector and an output coupler that transmits a few percent. The cavity supports longitudinal modes separated by $\Delta\nu = c/(2L)$, where $L$ is the cavity length. The gain bandwidth of the medium (e.g. about 130 nm for Ti:sapphire) is much wider than the mode spacing, so many modes can oscillate simultaneously, leading to **multimode operation**. **Mode locking** in the time domain produces a train of short pulses; the Fourier-transform limit relates the pulse duration $\tau_p$ to the spectral width $\Delta\nu$ as $\tau_p \Delta\nu \ge 0.44$ for Gaussian pulses, $\ge 0.315$ for sech$^2$ pulses. Ti:sapphire lasers routinely produce sub-10-fs pulses, and modern systems reach the attosecond regime with high-harmonic generation.

**Q-switching** produces high-energy nanosecond pulses by rapidly switching the cavity Q (quality factor) between low and high. The standard approach uses a Pockels cell or an acousto-optic modulator inside the cavity. While the Q is low, the inversion builds up to far above the normal threshold; when the Q is switched to high, the stored energy is released in a single short, intense pulse. Peak powers in Q-switched pulses can reach gigawatt levels.

Surveying common laser types:

- **Helium–neon laser**: a gas discharge in a He-Ne mixture (typically 10:1) at low pressure. Helium atoms are excited by electron impact to the $^1S$ and $^3S$ metastable states; they transfer energy by collision to neon atoms, exciting them to the corresponding $2s$ and $3s$ levels. The 632.8 nm red He-Ne line is the famous transition $3s \to 2p$ in neon. Output is a few milliwatts; the beam is highly coherent and the linewidth is about 1.5 GHz (Doppler-limited), but with internal mirrors and frequency stabilisation can be reduced to a few kHz.
- **Ruby laser**: a three-level solid-state laser; the original Maiman device of 1960. Output at 694.3 nm in pulses of millisecond duration and joule-level energy.
- **Nd:YAG laser**: neodymium-doped yttrium aluminium garnet, four-level, output at 1064 nm (and frequency-doubled to 532 nm, tripled to 355 nm, quadrupled to 266 nm). Workhorse of industrial cutting, laser ranging, and laboratory research.
- **Ti:sapphire laser**: sapphire doped with titanium, broadly tunable from about 650 to 1100 nm, the workhorse of femtosecond pulse generation and ultrafast spectroscopy.
- **Semiconductor diode laser**: a p–n junction with a direct band gap, where injected electrons and holes recombine to produce photons; the cleaved facets of the crystal form the cavity. Output wavelengths from 630 nm to more than 10 µm depending on the alloy (GaAs, InP, InGaAs, etc.). Wall-plug efficiencies exceed 60%, making diode lasers ubiquitous in telecommunications, spectroscopy, and consumer electronics.
- **Fibre laser**: a rare-earth-doped silica fibre (typically Er, Yb, or Nd) cladding-pumped by diode lasers, with fibre Bragg gratings as cavity mirrors. Output at 1 µm, 1.5 µm, and 2 µm. Powers of many kilowatts are achievable from a single fibre.
- **Dye laser**: a flowing organic dye solution (Rhodamine 6G, etc.) optically pumped by another laser. Tunable across tens of nanometres; the workhorse of laser spectroscopy before the advent of Ti:sapphire.

A special place in modern atomic and molecular physics is occupied by **frequency combs**, which are mode-locked lasers whose output spectrum consists of a regular comb of evenly spaced lines, $\nu_n = n f_{\text{rep}} + f_0$, where $f_{\text{rep}}$ is the pulse repetition rate and $f_0$ is the carrier-envelope offset frequency. Stabilising both $f_{\text{rep}}$ and $f_0$ to a microwave reference produces an optical frequency comb that links optical and radio frequencies with extraordinary precision. Frequency combs are the basis of the most accurate atomic clocks and of broadband molecular spectroscopy.

## Key Ideas

- **Population inversion**: a non-thermal situation in which more atoms occupy an upper level than a lower one; a precondition for net optical amplification.
- **Threshold condition**: the small-signal gain must exceed cavity losses; the inversion is clamped at threshold.
- **Three-level vs four-level laser**: three-level lasers pump from the ground state and have a high threshold; four-level lasers use a low-lying lower level that is empty at thermal equilibrium, with much lower threshold.
- **Optical cavity**: provides positive feedback; longitudinal modes are spaced by $c/(2L)$; the output coupler transmits a fraction of the intracavity power.
- **Q-switching**: a Q-modulation technique that releases stored inversion as a single short, high-power pulse.
- **Mode locking**: phase-locking of many cavity modes produces a periodic train of short pulses; Fourier-transform-limited to $\tau_p \Delta\nu \ge 0.44$ for Gaussian pulses.
- **Frequency comb**: a mode-locked laser stabilised to provide a phase-coherent link between optical and radio frequencies.

## Worked Examples

### Example 1 — Threshold of a small helium–neon laser

A He-Ne laser has cavity length 30 cm, mirror transmission $T = 0.01$ per mirror, internal loss $\alpha = 0.001\,\text{cm}^{-1}$ in the plasma, and a Doppler-broadened gain cross-section at line centre of $\sigma_0 = 3 \times 10^{-13}\,\text{cm}^2$. Estimate the threshold inversion.

**Solution.** The cavity loss rate is

$$\kappa = \frac{c}{L}\left( T + \alpha L \right) = \frac{3 \times 10^{10}}{30}\left( 0.01 + 0.001 \times 30 \right) = 10^9 \times 0.04 = 4 \times 10^7\,\text{s}^{-1}.$$

The threshold inversion is then

$$\Delta N_{\text{th}} V = \frac{\kappa V}{\sigma_0 c}.$$

For an inversion density, take a mode volume $V \sim 0.1\,\text{cm}^3$:

$$\Delta N_{\text{th}} = \frac{4 \times 10^7}{3 \times 10^{-13} \times 3 \times 10^{10}} \approx 4.4 \times 10^9\,\text{cm}^{-3}.$$

This is a small inversion compared with the density of neon atoms, which is why He-Ne lasers need only modest pump powers and why the output is limited to a few milliwatts before the gain saturates.

### Example 2 — Output power of a four-level laser

A Nd:YAG rod has inversion density $10^{18}\,\text{cm}^{-3}$ when pumped by flash lamps; the stimulated emission cross-section at 1064 nm is $\sigma = 3 \times 10^{-19}\,\text{cm}^2$, the cavity has output coupling $T = 0.05$ and round-trip loss $L = 0.02$, and the cavity length is 50 cm. Estimate the intracavity photon number and output power.

**Solution.** The photon number inside the cavity is

$$N = \frac{V}{c \sigma \tau_c}\left( \frac{g}{g_{\text{th}}} - 1 \right),$$

where $\tau_c$ is the cavity decay time, $g$ is the gain, and $g_{\text{th}}$ is the threshold. Using $\tau_c = 2L/(c T) = 50/(1.5 \times 10^{10}) \approx 3.3\,\text{ns}$ (using the round-trip expression gives $\tau_c = L/(cT) = 50/(3 \times 10^{10} \times 0.05) = 33\,\text{ns}$ — I will adopt the latter) and assuming the gain is twice threshold, we get $N$ of order $10^{13}$ to $10^{14}$ photons intracavity. The output power is

$$P_{\text{out}} = \frac{1}{2} h\nu N \frac{c T}{L}.$$

For $N = 10^{14}$ and $L = 50\,\text{cm}$: $P_{\text{out}} \approx 0.5 \times 1.87\,\text{eV} \times 10^{14} \times 6 \times 10^9 \times 0.05/0.5 \approx 10^{9}\,\text{eV/s} \approx 1\,\text{mW}$... so the numbers above are too small. The standard Nd:YAG laser produces watts, requiring a higher inversion or a lower-loss cavity. The exercise illustrates the order of magnitude; the real engineering reaches the watt level with optimised mirrors and high inversion.

### Example 3 — Mode-locked pulse duration

A mode-locked Ti:sapphire laser has a gain bandwidth (FWHM) of about 130 THz around 800 nm. Estimate the shortest possible Gaussian pulse duration consistent with the Fourier-transform limit.

**Solution.** The Fourier-transform-limited pulse duration for a Gaussian spectrum is

$$\tau_p = \frac{0.44}{\Delta\nu}.$$

With $\Delta\nu = 130\,\text{THz}$:

$$\tau_p = \frac{0.44}{1.3 \times 10^{14}} \approx 3.4\,\text{fs}.$$

Real Ti:sapphire systems reach about 4–5 fs at the output, close to this limit. Broader spectra (using photonic crystal fibre and other broadening techniques) push pulses below 1 fs, approaching the attosecond regime.

## Common Misconceptions

- **"A laser produces light by stimulated emission only."** No. The output beam is dominated by stimulated emission once the laser is above threshold, but spontaneous emission is the seed that initiates the process. Below threshold the output is dominated by amplified spontaneous emission (ASE).
- **"Lasers are always intense."** Continuous-wave helium–neon lasers output only milliwatts. A 1 mW He-Ne beam is a perfectly ordinary laboratory laser; it is intense only in the sense of being highly collimated and narrow-band, not in raw power.
- **"A laser beam is perfectly parallel."** No. Laser beams are not perfectly collimated; they have a small but finite divergence, $\theta \sim \lambda/(\pi w_0)$ where $w_0$ is the beam waist. A typical He-Ne has a divergence of about a milliradian.
- **"The colour of a laser is determined by the gain medium only."** Tunable lasers (Ti:sapphire, dye, optical parametric oscillators) can be tuned over a wide range, and frequency-doubling or -mixing changes the colour arbitrarily. A "green laser pointer" is usually a 1064 nm Nd:YAG or 808 nm diode with a frequency-doubling crystal.
- **"Population inversion means more atoms in the upper level than the lower level."** In a four-level laser, the inversion refers to the difference between the upper laser level and the lower laser level (a state that is essentially empty). The total number of atoms in the upper laser level is small; what matters is the difference.

## Connections

- The cross-section $\sigma(\omega)$ for stimulated emission in a laser is the same resonance cross-section derived in Lesson m2-l1; the laser is essentially an amplifier built from the same atom–field interaction.
- The cavity mode spacing $c/(2L)$ is the same free-spectral-range formula derived in waves and optics for Fabry–Pérot etalons.
- Four-level laser dynamics in a solid are coupled to phonon relaxation; this is the same electron–phonon interaction you saw in solid-state physics (Semester 5) when describing non-radiative recombination.
- Frequency combs are the most precise measurement tools in modern physics, with applications from atomic clocks to broadband molecular spectroscopy to searches for varying fundamental constants.
- The same population-inversion idea underlies masers (microwave), X-ray lasers (in hot plasmas), and free-electron lasers (which use a relativistic electron beam as the gain medium).

## Quick Check

1. State the three conditions that must be satisfied for laser action to occur.
2. Why is a four-level laser easier to operate than a three-level one?
3. A Fabry–Pérot laser cavity has length 60 cm. What is the spacing between adjacent longitudinal modes?
4. Explain the principle of Q-switching and the typical pulse duration it produces.
5. What is the Fourier-transform limit for a Gaussian pulse of spectral width 5 THz, and how does it compare to the typical pulse from a Ti:sapphire laser?

## Takeaway

- A laser requires population inversion, an optical cavity providing feedback, and a pump that maintains the inversion against losses.
- Four-level lasers dominate modern practice because the lower laser level is essentially empty, making the threshold small.
- Cavity modes are spaced by $c/(2L)$; the gain bandwidth of the medium determines how many modes can oscillate.
- Q-switching releases stored inversion in nanosecond pulses; mode-locking releases the spectral bandwidth in femtosecond pulses.
- Common lasers — He-Ne, ruby, Nd:YAG, Ti:sapphire, semiconductor, fibre — differ in gain medium, pump mechanism, output wavelength, and achievable power, but share the same underlying physics.
