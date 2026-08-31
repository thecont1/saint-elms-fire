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
lessonId: atomic-and-molecular-physics-m2-l1
lessonName: Resonance Fluorescence and Spontaneous vs Stimulated Emission
lessonNumber: 4
moduleNumber: 2
semesterNumber: 6
difficulty: intermediate
estimatedStudyMinutes: 50
releaseOrder: 4
prerequisites:
  - atomic-and-molecular-physics-m1-l3
  - introduction-to-quantum-mechanics-m3-l1
learningObjectives:
  - Distinguish spontaneous, stimulated, and resonant radiative processes.
  - Explain resonance fluorescence and describe its experimental signature.
  - Estimate the natural linewidth of an atomic transition and relate it to the lifetime.
concepts:
  - Spontaneous emission
  - Stimulated emission
  - Resonance fluorescence
  - Natural linewidth
  - Lorentzian lineshape
  - Cross-section
tags:
  - physics
  - atomic-physics
  - spectroscopy
  - quantum-optics
sourceType: authored-courseware
assessmentHints:
  - conceptual
  - derivation
  - problem-solving
  - short-answer
***

# Resonance Fluorescence and Spontaneous vs Stimulated Emission

## Overview

This lesson zooms in on what happens when an atom interacts with a radiation field near one of its resonances. We unpack the three fundamental radiative processes — absorption, stimulated emission, and spontaneous emission — and then specialise to resonance fluorescence, the canonical laboratory realisation of a two-level atom driven by a near-resonant laser. We introduce the natural linewidth, derive its connection to the radiative lifetime via the energy-time uncertainty relation, and sketch the Lorentzian lineshape that is the Fourier transform of an exponentially decaying wave train. The lesson prepares you for the laser principles treated next, where stimulated emission and population inversion are put to work.

## Learning Path

- **What you should already know**: stationary states, the Bohr frequency condition, and the Einstein A and B coefficients from Lesson m1-l3; the postulates of quantum mechanics and the notion of expectation values from the introductory quantum-mechanics sequence.
- **What this lesson adds**: a more explicit time-dependent picture of photon emission, the connection between lifetime and linewidth, and the language of cross-sections used to characterise atom–field interactions.
- **What later lessons this will unlock**: laser action and population inversion in Lesson m2-l2; the diagnostic use of resonance lines in X-ray and astrophysical spectroscopy in Lesson m2-l3.

## Core Explanation

The atomic Hamiltonian in the presence of a quantised radiation field contains an interaction term that drives transitions between energy eigenstates. Working out the dynamics in perturbation theory (Fermi's golden rule), the rate of transition from an initial state $|i\rangle$ to a continuum of final states $|f\rangle$ is

$$w_{i\to f} = \frac{2\pi}{\hbar} |\langle f | V | i \rangle|^2 \rho(E_f),$$

where $V$ is the interaction operator (typically $- \mathbf{d}\cdot\mathbf{E}$ for electric-dipole coupling) and $\rho(E_f)$ is the density of final states.

Apply this to the two-level atom interacting with a monochromatic field of frequency $\omega$ close to the transition frequency $\omega_0 = (E_2 - E_1)/\hbar$. Three processes appear:

- **Absorption**: the atom is in state 1, absorbs a photon, and ends in state 2. Rate proportional to $B_{12} u(\omega)$ or, equivalently, to the photon flux $\Phi$ times the absorption cross-section $\sigma_{12}(\omega)$.
- **Stimulated emission**: the atom is in state 2, an incoming photon induces it to emit a second, identical photon, leaving it in state 1. The emitted photon is in the same mode (same direction, polarisation, phase) as the stimulating one. Rate proportional to $B_{21} u(\omega)$ or to $\Phi \sigma_{21}(\omega)$.
- **Spontaneous emission**: the atom is in state 2 and decays to state 1 even in the absence of an external field, by coupling to the vacuum modes of the electromagnetic field. Rate $A_{21}$ independent of $\Phi$.

Stimulated emission is the conceptual key to lasers. The two emitted photons are coherent and identical; the radiation field has gained one photon in exactly the same mode, which is the meaning of optical amplification.

The frequency dependence of the cross-section near resonance is governed by the natural lineshape. A two-level atom with no external broadening has a complex susceptibility

$$\chi(\omega) \propto \frac{1}{\omega_0 - \omega - i \gamma/2},$$

where $\gamma = A_{21}$ is the spontaneous emission rate. The intensity lineshape (the spectrum of emitted or absorbed light) is therefore Lorentzian:

$$S(\omega) = S_0 \frac{(\gamma/2)^2}{(\omega - \omega_0)^2 + (\gamma/2)^2}.$$

The full width at half maximum is $\Delta\omega = \gamma$, and the corresponding frequency linewidth in Hz is $\Delta\nu = A_{21}/(2\pi)$. For an allowed electric-dipole transition, $A_{21}$ is on the order of $10^8\,\text{s}^{-1}$, giving $\Delta\nu \sim 10\,\text{MHz}$ and a quality factor $Q = \nu/\Delta\nu$ of order $10^8$ for a visible transition. Forbidden transitions can have linewidths orders of magnitude smaller.

The energy-time uncertainty relation is the heuristic explanation of this linewidth: a state with lifetime $\tau = 1/A_{21}$ has an energy uncertainty $\Delta E \sim \hbar/\tau$, hence a frequency uncertainty $\Delta\omega \sim 1/\tau = A_{21}$.

In addition to natural broadening, real atoms experience **collisional broadening** (collisions interrupt the wave train, shortening the effective lifetime) and **Doppler broadening** (thermal motion shifts the resonance frequency in the atom's rest frame). Doppler broadening dominates for gas-phase atoms at room temperature; for sodium D lines at 589 nm, Doppler broadening is about 1 GHz, two orders of magnitude larger than the natural linewidth. In stellar atmospheres, Doppler and pressure broadening set the width of the absorption lines that are the primary spectroscopic diagnostic of stellar properties.

**Resonance fluorescence** is the experiment in which a tunable laser is swept across an atomic resonance while the atom is observed with a photodetector. The signature is a sharp Lorentzian peak in scattered intensity versus laser frequency, with a width given by the power-broadened, Doppler-broadened, and natural contributions combined. At low laser intensity, the linewidth is essentially the natural width; at high intensity, **power broadening** sets in because the atom spends significant time in a dressed state of the atom-plus-field system, and the effective lifetime decreases. At very high intensity and in tightly focused beams, a single atom can scatter photons one at a time, producing the famous "antibunching" in the second-order correlation function $g^{(2)}(\tau)$: a photon cannot be emitted immediately after another because the atom must first be re-excited. This is a clean quantum signature of the granularity of light.

The cross-section for resonance absorption has a particularly transparent form:

$$\sigma(\omega) = \frac{\lambda^2}{2\pi} \frac{\gamma_{\text{rad}}}{\gamma_{\text{tot}}} \frac{(\gamma/2)^2}{(\omega - \omega_0)^2 + (\gamma/2)^2},$$

where $\gamma_{\text{rad}}$ is the radiative part of the decay rate, $\gamma_{\text{tot}}$ is the total (including non-radiative) decay rate, and $\lambda$ is the transition wavelength. On resonance, $\sigma_0 = \lambda^2 / (2\pi) \cdot (\gamma_{\text{rad}}/\gamma_{\text{tot}})$. For a strongly allowed transition, $\sigma_0$ is on the order of $\lambda^2$, a remarkable result meaning that an atom is "as big as a square wavelength" for resonant photons. This is why resonance fluorescence is so bright and why atom–light interaction cross-sections are so large.

## Key Ideas

- **Fermi's golden rule** gives the transition rate in terms of the matrix element of the perturbation and the density of final states.
- **Three radiative processes** in a two-level atom: absorption, stimulated emission, spontaneous emission.
- **Stimulated emission** produces a second photon identical to the stimulating one — the basis of laser amplification.
- **Natural linewidth** $\Delta\nu = A_{21}/(2\pi)$ follows from the energy-time uncertainty relation and gives a Lorentzian lineshape.
- **Resonance fluorescence** is the experimental observation of light scattered by atoms driven at a transition frequency.
- **Resonant cross-section** on resonance is of order $\lambda^2$, the largest possible for a single atom.
- **Power broadening**, **Doppler broadening**, and **collisional broadening** add to the natural width in real systems.

## Worked Examples

### Example 1 — Natural linewidth of the sodium D2 line

The sodium D2 line at 588.995 nm has a spontaneous emission rate $A_{21} \approx 6.3 \times 10^7\,\text{s}^{-1}$. Compute the natural linewidth in Hz and in wavelength units, and compare to the Doppler width at 500 K.

**Solution.** The natural linewidth is

$$\Delta\nu_{\text{nat}} = \frac{A_{21}}{2\pi} = \frac{6.3 \times 10^7}{2\pi} \approx 1.0 \times 10^7\,\text{Hz} = 10\,\text{MHz}.$$

In wavelength units, $\Delta\lambda = (\lambda^2 / c) \Delta\nu \approx (5.89 \times 10^{-7})^2 / 3 \times 10^8 \times 10^7 \approx 1.2 \times 10^{-14}\,\text{m}$, a hundredth of a picometre.

The Doppler width at temperature $T$ is

$$\Delta\nu_{\text{Doppler}} = \frac{2\nu_0}{c}\sqrt{\frac{2 k_B T \ln 2}{M}}.$$

For sodium ($M = 23\,\text{amu} = 3.8 \times 10^{-26}\,\text{kg}$), $T = 500\,\text{K}$:

$$\Delta\nu_{\text{Doppler}} \approx \frac{2 \times 5.09 \times 10^{14}}{3 \times 10^8}\sqrt{\frac{2 \times 1.38 \times 10^{-23} \times 500 \times 0.693}{3.8 \times 10^{-26}}} \approx 3.4 \times 10^6 \times 1.59 \times 10^2 \approx 5.4 \times 10^8\,\text{Hz}.$$

So at 500 K, the Doppler width of about 540 MHz is roughly 50 times the natural width. This is why high-resolution spectroscopy of gases requires either sub-Doppler techniques (saturated absorption, two-photon spectroscopy) or cold atoms.

### Example 2 — Resonant cross-section of a strong transition

A visible atomic transition at 600 nm has $A_{21} = 5 \times 10^8\,\text{s}^{-1}$ and a total decay rate (including non-radiative quenching) of $6 \times 10^8\,\text{s}^{-1}$. Compute the on-resonance absorption cross-section and the mean free path of a resonant photon in a gas of number density $10^{16}\,\text{m}^{-3}$.

**Solution.** The on-resonance cross-section is

$$\sigma_0 = \frac{\lambda^2}{2\pi} \cdot \frac{\gamma_{\text{rad}}}{\gamma_{\text{tot}}} = \frac{(6 \times 10^{-7})^2}{2\pi} \cdot \frac{5}{6} \approx 4.8 \times 10^{-14}\,\text{m}^2.$$

The mean free path is

$$\ell = \frac{1}{n \sigma_0} = \frac{1}{10^{16} \times 4.8 \times 10^{-14}} \approx 2\,\text{m}.$$

This shows that even at low laboratory densities, resonance radiation is absorbed within a short path. The same physics, in stellar atmospheres, makes line opacities large and shapes the formation of Fraunhofer lines.

### Example 3 — Resonant scattering of a single atom

A single trapped atom is illuminated by a weak, resonant laser with intensity $I$. The atom scatters photons at a rate $R = \gamma/2$ when saturated, where the saturation intensity is $I_{\text{sat}} = \pi h c / (3 \lambda^3 \tau)$ for a non-degenerate two-level atom. Estimate $R$ and the mean time between scattered photons for a sodium atom on the D2 line at saturation.

**Solution.** At saturation, the atom spends half its time in the excited state and half in the ground state, so the scattering rate is $R = A_{21}/2 \approx 3.15 \times 10^7\,\text{s}^{-1}$. The mean time between photons is

$$\langle \Delta t \rangle = 1/R \approx 32\,\text{ns}.$$

In a Hanbury Brown–Twiss measurement of the second-order correlation function, one finds $g^{(2)}(0) = 0$ (perfect antibunching): two photons can never be detected simultaneously, because the atom must be re-excited before it can emit a second photon. This is a vivid demonstration of the quantised nature of light and of the discrete, sequential character of resonance fluorescence.

## Common Misconceptions

- **"Spontaneous emission is instantaneous."** No. Spontaneous emission is a random, exponentially distributed process with mean lifetime $\tau = 1/A_{21}$. The instant of emission is not predictable; only the distribution is.
- **"The natural linewidth is the smallest possible linewidth."** Natural linewidth is the smallest linewidth for an isolated atom at rest, but several other broadening mechanisms (Doppler, pressure, power) easily dominate in practice. Subnatural resolution is possible with Ramsey fringes or quantum-interference techniques.
- **"A high spontaneous emission rate is bad."** It depends on the context. For lasers, a high $A_{21}$ is good because it allows fast population inversion cycles. For atomic clocks, a low $A_{21}$ (long-lived metastable state) is preferred because the narrow linewidth gives a high quality factor.
- **"Resonance fluorescence is the same as Rayleigh scattering."** Rayleigh scattering is elastic scattering from a virtual level, off-resonance; resonance fluorescence is scattering on a real atomic transition. Both scatter elastically, but the resonance cross-section is enormously larger — by many orders of magnitude — and has a Lorentzian lineshape peaked at the transition frequency.
- **"Stimulated and spontaneous emissions are different physical processes."** In quantum electrodynamics, both arise from the same atom–field interaction, but with different initial states of the field. The presence or absence of an external photon in the same mode as the emitted one is what distinguishes them.

## Connections

- The Einstein A and B coefficients and the $A_{21} \propto \nu^3$ scaling were introduced in Lesson m1-l3; here we used them in a time-dependent setting to derive the natural linewidth.
- The Lorentzian lineshape is the Fourier transform of an exponentially decaying amplitude; the same mathematics describes the response of any damped harmonic oscillator and is the origin of "resonance" in classical physics.
- The cross-section formula $\sigma_0 \sim \lambda^2$ is a recurring result in scattering theory, from nuclear physics to radar; it sets the scale for "resonant" processes in any wave system.
- Resonance fluorescence under strong driving is the simplest example of a "dressed atom" and an entry point to modern quantum optics.
- The phenomenon of photon antibunching is one of the most direct experimental confirmations of the quantisation of light and is closely related to the underlying quantum postulate that observables are represented by operators acting on a Hilbert space.

## Quick Check

1. Name the three radiative processes that couple a two-level atom to the radiation field, and identify which one is independent of the photon flux.
2. A transition has $A_{21} = 4 \times 10^7\,\text{s}^{-1}$. What is the natural linewidth in Hz and the corresponding lifetime?
3. Why is the resonant absorption cross-section of an atom of order $\lambda^2$ rather than, say, $a_0^2$ where $a_0$ is the Bohr radius?
4. The sodium D2 line at room temperature has Doppler width about 1.5 GHz and natural width about 10 MHz. What does this imply about the difficulty of resolving the natural linewidth in a conventional absorption experiment?
5. What does it mean for the second-order correlation function $g^{(2)}(\tau)$ to vanish at $\tau = 0$, and what does this tell us about the underlying physics?

## Takeaway

- Spontaneous, stimulated, and resonant absorption are the three radiative processes that couple a two-level atom to light.
- Stimulated emission produces a photon identical to the stimulating one — the principle of optical amplification.
- The natural linewidth is the Fourier transform of an exponentially decaying excited state; it is the irreducible minimum broadening for an isolated atom at rest.
- Resonance fluorescence is a sharp, Lorentzian-bright phenomenon that reveals the quantised, sequential character of light emission.
- The on-resonance cross-section of an atom is of order $\lambda^2$, which is why even dilute atomic gases are opaque on resonance.
