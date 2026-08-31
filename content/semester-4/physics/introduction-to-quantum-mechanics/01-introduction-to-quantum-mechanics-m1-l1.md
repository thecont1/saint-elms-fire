***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-4
semesterName: Semester 4
subjectId: physics
subjectName: Physics
courseId: introduction-to-quantum-mechanics
courseName: Introduction to Quantum Mechanics
moduleId: introduction-to-quantum-mechanics-module-1
moduleName: Origins of QM
lessonId: introduction-to-quantum-mechanics-m1-l1
lessonName: Blackbody Radiation and the Ultraviolet Catastrophe
lessonNumber: 1
moduleNumber: 1
semesterNumber: 4
difficulty: foundation
estimatedStudyMinutes: 50
releaseOrder: 1
prerequisites:
  - waves-and-optics-m1-l2
  - electricity-and-magnetism-m3-l3
learningObjectives:
  - Describe blackbody radiation and the experimental blackbody spectrum.
  - Explain the failure of the Rayleigh–Jeans law (the ultraviolet catastrophe).
  - State Planck's law and explain the role of energy quantisation.
  - Compute blackbody spectra for simple cases.
concepts:
  - Blackbody
  - Blackbody spectrum
  - Rayleigh–Jeans law
  - Ultraviolet catastrophe
  - Planck's law
  - Energy quantisation
tags:
  - physics
  - quantum-mechanics
  - blackbody
sourceType: authored-courseware
assessmentHints:
  - conceptual
  - derivation
  - problem-solving
***

# Blackbody Radiation and the Ultraviolet Catastrophe

## Overview
A *blackbody* is an idealised object that absorbs all incident radiation and emits radiation purely from its temperature. The spectrum of blackbody radiation was a famous unsolved problem at the end of the 19th century. Classical physics gave the Rayleigh–Jeans law, which fails badly in the ultraviolet (the "ultraviolet catastrophe"). Max Planck resolved the crisis in 1900 by proposing that the energy of the oscillators in the blackbody is *quantised* — a radical idea that opened the door to quantum mechanics. This lesson develops the story: the experimental spectrum, the failure of classical theory, and Planck's resolution.

## Learning Path
- What you should already know: waves and wave equations, classical electromagnetism, basic statistics.
- What this lesson adds: the first concrete evidence that classical physics fails, and the birth of energy quantisation.
- What it unlocks: the photoelectric effect (next lesson), the Bohr atom, the Schrödinger equation, and the whole quantum-mechanical framework.

## Core Explanation
**A blackbody.** An object that absorbs all incident radiation (hence "black") and emits thermal radiation determined entirely by its temperature $T$. A small hole in a cavity is a good approximation: light entering the hole bounces around inside and is absorbed, and light emitted from the hole is characteristic of the cavity's temperature.

**The blackbody spectrum.** A plot of the spectral radiance $B_\lambda(\lambda, T)$ — the energy emitted per unit area per unit time per unit wavelength per steradian — vs. wavelength $\lambda$. The spectrum is universal: it depends only on $T$, not on the material of the blackbody. As $T$ increases, the total emitted power increases (Stefan–Boltzmann: $P/A = \sigma T^4$) and the peak shifts to shorter wavelengths (Wien: $\lambda_\text{max} T = 2.898 \times 10^{-3}\text{ m·K}$).

**Wien's displacement law.** $\lambda_\text{max} T = b$, where $b \approx 2.898 \times 10^{-3}\text{ m·K}$ is Wien's constant. A $3000\text{ K}$ source (a tungsten lamp) peaks at about $1\ \mu\text{m}$ (near-IR); the Sun at $5800\text{ K}$ peaks at about $500\text{ nm}$ (visible green); a $10^4\text{ K}$ star peaks in the UV.

**Stefan–Boltzmann law.** The total emitted power per unit area is $j^* = \sigma T^4$, where $\sigma \approx 5.67 \times 10^{-8}\text{ W/(m}^2 \text{·K}^4)$ is the Stefan–Boltzmann constant.

**Rayleigh–Jeans law.** The classical (pre-quantum) derivation of the spectrum used the equipartition theorem — each mode of the radiation field has average energy $k_B T$. The number of modes per unit volume per unit wavelength is $8\pi/\lambda^4$. The result is

$$B_\lambda(T) = \frac{2 c k_B T}{\lambda^4}.$$

This agrees with experiment at long wavelengths but fails catastrophically at short wavelengths. Integrating over all wavelengths gives infinite power — the "ultraviolet catastrophe".

**Planck's resolution.** Planck proposed that the oscillators in the cavity cannot have any energy, but only discrete values $E_n = n h \nu$, where $\nu$ is the frequency and $h$ is the new constant (Planck's constant, $h \approx 6.626 \times 10^{-34}\text{ J·s}$). The average energy of an oscillator is then

$$\langle E \rangle = \frac{h \nu}{e^{h \nu/(k_B T)} - 1},$$

which approaches $k_B T$ for $h \nu \ll k_B T$ (the classical limit) but decreases exponentially for $h \nu \gg k_B T$ (the quantum limit).

**Planck's law.** Combining the mode density with the quantised average energy,

$$B_\lambda(T) = \frac{2 h c^2/\lambda^5}{e^{h c/(\lambda k_B T)} - 1}.$$

This matches experiment at all wavelengths, and reproduces the Rayleigh–Jeans law at long wavelengths (small $h\nu/k_BT$) and Wien's law at short wavelengths. The factor of $h$ is the seed of quantum mechanics.

**Energy quantisation.** Planck's hypothesis that $E = n h \nu$ was a desperate move to fit the data. He expected to retract it; instead, the idea stuck and was extended by Einstein, Bohr, and others to all of microscopic physics. The constant $h$ is now one of the fundamental constants of nature.

**Wien's law from Planck.** Differentiating Planck's law with respect to $\lambda$ and setting to zero gives $\lambda_\text{max} T = b$, with $b \approx 2.898 \times 10^{-3}\text{ m·K}$.

**Stefan–Boltzmann from Planck.** Integrating Planck's law over all wavelengths gives $j^* = \sigma T^4$ with $\sigma = 2 \pi^5 k_B^4/(15 h^3 c^2)$.

**Cosmic microwave background.** The CMB is the most perfect blackbody spectrum ever measured: a $2.725\text{ K}$ Planck spectrum, matching to one part in $10^5$. The CMB is the relic radiation of the hot early universe.

**Sun's spectrum.** The Sun's photosphere is approximately a blackbody at $T \approx 5800\text{ K}$. The observed spectrum deviates from a pure blackbody because of absorption lines (Fraunhofer lines) in the solar atmosphere.

**Colour temperature.** A light source can be characterised by the temperature of the blackbody whose spectrum it most closely matches. A typical incandescent bulb at $2700\text{ K}$ looks "warm"; a fluorescent tube at $4000\text{ K}$ looks "cool"; daylight is about $5500\text{ K}$.

## Key Ideas
- A blackbody absorbs all incident radiation; its emitted spectrum depends only on $T$.
- Stefan–Boltzmann: $j^* = \sigma T^4$.
- Wien: $\lambda_\text{max} T = 2.898 \times 10^{-3}\text{ m·K}$.
- Rayleigh–Jeans: $B_\lambda = 2 c k_B T/\lambda^4$ — fails at short wavelengths.
- Planck: $B_\lambda = (2 h c^2/\lambda^5)/(e^{h c/\lambda k_B T} - 1)$, with $E = n h \nu$ oscillators.

## Worked Examples
**Example 1 — Peak wavelength of the Sun.** $T = 5800\text{ K}$: $\lambda_\text{max} = 2.898 \times 10^{-3} / 5800 \approx 500\text{ nm}$. Visible green — the peak of the Sun's spectrum is in the visible, which is why our eyes evolved to see it.

**Example 2 — Total power from a light bulb.** A $60\text{ W}$ bulb has filament temperature about $2500\text{ K}$. Filament area $\sim 0.5\text{ cm}^2 = 5 \times 10^{-5}\text{ m}^2$. Predicted power: $\sigma T^4 A = 5.67 \times 10^{-8} \times (2500)^4 \times 5 \times 10^{-5} \approx 110\text{ W}$ — more than the electrical input. The discrepancy is because the filament is not a perfect blackbody (emissivity $< 1$).

**Example 3 — CMB temperature.** $T = 2.725\text{ K}$: $\lambda_\text{max} \approx 1.06\text{ mm}$ (microwave). $j^* = 5.67 \times 10^{-8} \times 2.725^4 \approx 3.13 \times 10^{-6}\text{ W/m}^2$. Tiny, but measurable.

## Common Misconceptions
- **"Blackbody radiation is black."** No — the "black" refers to its absorption; its emission is bright at typical temperatures.
- **"The Rayleigh–Jeans law is approximately right at long wavelengths."** Correct — but the integral diverges, which is the catastrophe.
- **"Energy quantisation is just a trick."** It is a *description* of nature, not a trick. Every subsequent quantum-mechanical idea is built on it.
- **"The CMB is a blackbody because of the Big Bang."** The CMB is a blackbody because it was thermalised in the early universe by Compton scattering; the expansion redshifted it but preserved the blackbody shape.

## Connections
The blackbody spectrum is the prototype of every quantum-mechanical calculation: count modes, apply energy quantisation, sum. The same logic gives the photoelectric effect, the specific heats of solids (Einstein and Debye models in *Solid State Physics*), the blackbody peaks of stars (in *Astrophysics I*), and the cosmic microwave background. The constant $h$ is the gateway to all of quantum mechanics.

## Quick Check
1. State the Stefan–Boltzmann law.
2. State Wien's displacement law.
3. What is the ultraviolet catastrophe?
4. State Planck's law.
5. What was the radical new assumption in Planck's derivation?

## Takeaway
- A blackbody absorbs all incident radiation; its emission depends only on $T$.
- Stefan–Boltzmann: $j^* = \sigma T^4$.
- Wien: $\lambda_\text{max} T = 2.898 \times 10^{-3}\text{ m·K}$.
- Rayleigh–Jeans law: $B_\lambda = 2 c k_B T/\lambda^4$, fails at short $\lambda$.
- Planck: $B_\lambda = (2 h c^2/\lambda^5)/(e^{h c/\lambda k_B T} - 1)$, with $E = n h \nu$ quantisation.
