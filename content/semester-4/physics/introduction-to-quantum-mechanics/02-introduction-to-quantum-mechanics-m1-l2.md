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
lessonId: introduction-to-quantum-mechanics-m1-l2
lessonName: Photoelectric Effect and Photons
lessonNumber: 2
moduleNumber: 1
semesterNumber: 4
difficulty: foundation
estimatedStudyMinutes: 50
releaseOrder: 2
prerequisites:
  - introduction-to-quantum-mechanics-m1-l1
learningObjectives:
  - Describe the photoelectric effect and its experimental features.
  - Explain why classical wave theory fails to explain the observations.
  - State Einstein's photon hypothesis and the photoelectric equation.
  - Compute the stopping potential from the photon energy.
concepts:
  - Photoelectric effect
  - Work function
  - Stopping potential
  - Photon
  - Einstein's photoelectric equation
  - Threshold frequency
tags:
  - physics
  - quantum-mechanics
  - photoelectric
sourceType: authored-courseware
assessmentHints:
  - conceptual
  - problem-solving
  - short-answer
***

# Photoelectric Effect and Photons

## Overview
In 1887, Heinrich Hertz observed that ultraviolet light could dislodge electrons from a metal surface. The *photoelectric effect* turned out to be the second major failure of classical wave theory and a key piece of evidence for the quantum nature of light. Einstein's 1905 explanation — that light comes in discrete packets (*photons*) of energy $E = h \nu$ — won him the Nobel Prize and laid the foundation for quantum mechanics. This lesson covers the experiment, the failure of the wave picture, and Einstein's resolution.

## Learning Path
- What you should already know: blackbody radiation, Planck's law, energy quantisation.
- What this lesson adds: the photon concept, the photoelectric equation, and the experimental confirmation.
- What it unlocks: the Compton effect, wave–particle duality, and the photon picture that underlies quantum optics.

## Core Explanation
**The experiment.** Light shines on a metal surface (the cathode), and electrons (photoelectrons) are ejected. A collector at variable voltage $V$ measures the photocurrent. Two key measurements: the *stopping potential* $V_s$ (the voltage that just prevents electrons from reaching the collector) and the *threshold frequency* $\nu_0$ (the minimum frequency of light that ejects electrons, regardless of intensity).

**Three puzzling features.**
1. The stopping potential depends on the frequency of light, not the intensity.
2. There is a threshold frequency $\nu_0$ below which no electrons are ejected, no matter how intense the light.
3. Electrons are ejected essentially instantaneously (within $10^{-9}\text{ s}$), even at low intensity.

**The classical failure.** A wave picture says: more intense light = more energy delivered = electrons ejected at any frequency (just take longer). But the experiments show a sharp threshold frequency, a frequency-dependent stopping potential, and instantaneous emission. None of this is consistent with the wave picture.

**Einstein's photon hypothesis.** Light is composed of discrete packets, *photons*, each with energy $E = h \nu$ (extending Planck's quantisation from material oscillators to the radiation field itself). A single photon is absorbed by a single electron. The electron uses part of the photon's energy to escape the metal (the *work function* $\phi$) and the rest becomes kinetic energy:

$$h \nu = \phi + \tfrac{1}{2} m v^2.$$

This is Einstein's photoelectric equation. The threshold frequency is $\nu_0 = \phi/h$, and the stopping potential is $V_s = h(\nu - \nu_0)/e$.

**Work function.** The energy required to remove an electron from a metal. Typical values: $2.14\text{ eV}$ for potassium, $4.28\text{ eV}$ for copper, $6.35\text{ eV}$ for tungsten. The work function is the depth of the *potential well* in which the electrons sit at the surface.

**Stopping potential.** A reverse voltage that just stops the photoelectrons from reaching the collector. The maximum kinetic energy is $K_\text{max} = e V_s$, so $V_s = h(\nu - \nu_0)/e$. A plot of $V_s$ vs. $\nu$ is a straight line with slope $h/e$ — a direct measurement of Planck's constant.

**Instantaneous emission.** Each photon delivers all its energy at once. An electron either absorbs a photon (and is ejected with some kinetic energy) or does not. There is no "build-up" of energy over time.

**Photons carry momentum too.** A photon has momentum $p = h/\lambda = E/c$ (relativistic relation $E^2 = p^2 c^2$ for a massless particle). The momentum is too small to detect in ordinary situations but is important in the Compton effect, in radiation pressure, and in the laser cooling of atoms.

**Photon number vs. intensity.** The intensity of monochromatic light is the energy flux: $I = n h \nu c$, where $n$ is the photon number density. The number of photons per unit area per unit time is $N/A = I/(h \nu)$. At low frequencies, even a bright source has few photons; at high frequencies, even a faint source has many.

**Photon picture vs. wave picture.** Both are correct in their regimes. The wave picture describes interference, diffraction, and propagation. The photon picture describes emission, absorption, and the photoelectric effect. Quantum electrodynamics (QED) reconciles them: light is fundamentally quantum, with a wave-like description emerging in the limit of many photons.

**Photoelectric cells.** Practical devices based on the photoelectric effect. Photodiodes, photomultiplier tubes, CCDs, and solar cells all rely on the conversion of photons to electrons. Solar cells use semiconductors rather than metals; the physics is similar but the work function is replaced by the band gap.

**Solar cell physics.** A photon with $h \nu > E_g$ (band gap) is absorbed and creates an electron–hole pair; the junction separates the charges, producing a current. The open-circuit voltage is about $E_g/e$; the maximum theoretical efficiency is about $33\%$ (the *Shockley–Queisser limit*).

**The Compton effect.** A photon scatters off a free electron. Classical theory predicts the scattered photon has the same wavelength; the experiment shows a wavelength shift

$$\Delta \lambda = \frac{h}{m_e c} (1 - \cos\theta),$$

where $\theta$ is the scattering angle. The shift depends on $h$, $m_e$, and $c$ — and is another confirmation of the photon picture.

## Key Ideas
- Photoelectric effect: light ejects electrons from a metal.
- Three features: threshold frequency, frequency-dependent stopping potential, instantaneous emission.
- Einstein's equation: $h \nu = \phi + \tfrac{1}{2} m v^2$.
- Photons are quanta of light with $E = h \nu$ and $p = h/\lambda$.
- Photon picture: light is composed of discrete energy packets.

## Worked Examples
**Example 1 — Stopping potential.** Sodium has $\phi = 2.28\text{ eV}$. Light of $\lambda = 400\text{ nm}$ ($h\nu = 1240/400 = 3.10\text{ eV}$). Maximum kinetic energy: $K = h\nu - \phi = 3.10 - 2.28 = 0.82\text{ eV}$. Stopping potential: $V_s = 0.82\text{ V}$.

**Example 2 — Threshold frequency.** For potassium ($\phi = 2.14\text{ eV}$): $\nu_0 = \phi/h = 2.14 \times 1.6 \times 10^{-19} / 6.63 \times 10^{-34} \approx 5.16 \times 10^{14}\text{ Hz}$. $\lambda_0 = c/\nu_0 \approx 580\text{ nm}$ (yellow-green). Potassium responds to green and UV but not red.

**Example 3 — Photons per second from a 100 W bulb.** A 100 W yellow bulb emits at $\lambda \approx 580\text{ nm}$. Energy per photon: $E = h c/\lambda = 1240\text{ eV·nm}/580\text{ nm} = 2.14\text{ eV} = 3.42 \times 10^{-19}\text{ J}$. Number of photons per second: $N = P/E = 100 / 3.42 \times 10^{-19} \approx 2.9 \times 10^{20}\text{ photons/s}$.

## Common Misconceptions
- **"Higher intensity = higher energy electrons."** No — higher intensity means *more* electrons ejected, all with the same maximum energy. Energy is set by frequency, not intensity.
- **"Photons are particles in the usual sense."** They are quantum objects with particle-like and wave-like properties. The "particle" label is a useful approximation, but a single photon interferes with itself.
- **"Photons have mass."** No — they are massless. They have energy and momentum.
- **"Photoelectric effect requires bright light."** No — even a single photon with enough energy can eject an electron. The threshold is on frequency, not intensity.

## Connections
The photon picture is the basis of *Atomic and Molecular Physics* (atomic transitions, lasers), *Solid State Physics* (band theory, photoconductivity), and *Astrophysics* (radiative transfer, photoionisation). The same constant $h$ appears in the Bohr model of the hydrogen atom (next lesson) and in the de Broglie wavelength. The Compton effect is the next experimental confirmation of the photon picture.

## Quick Check
1. State the three puzzling features of the photoelectric effect.
2. State Einstein's photoelectric equation.
3. What is the work function?
4. The stopping potential for a metal at $\lambda = 300\text{ nm}$ is $0.5\text{ V}$. Find the work function.
5. A $100\text{ W}$ bulb emits at $\lambda = 600\text{ nm}$. Estimate the number of photons per second.

## Takeaway
- Three puzzling features: threshold $\nu$, $\nu$-dependent $V_s$, instantaneous emission.
- Einstein's equation: $h \nu = \phi + \tfrac{1}{2} m v^2$.
- Photons: $E = h \nu$, $p = h/\lambda$.
- Stopping potential: $V_s = h(\nu - \nu_0)/e$.
- The photon picture underlies all of quantum optics.
