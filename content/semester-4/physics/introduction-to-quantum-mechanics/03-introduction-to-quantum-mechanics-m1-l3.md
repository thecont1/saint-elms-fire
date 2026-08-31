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
lessonId: introduction-to-quantum-mechanics-m1-l3
lessonName: Bohr Model, de Broglie and Wave–Particle Duality
lessonNumber: 3
moduleNumber: 1
semesterNumber: 4
difficulty: foundation
estimatedStudyMinutes: 55
releaseOrder: 3
prerequisites:
  - introduction-to-quantum-mechanics-m1-l2
learningObjectives:
  - State the postulates of the Bohr model of the hydrogen atom.
  - Compute the energy levels and wavelengths of hydrogen spectral lines.
  - State the de Broglie relation and apply it.
  - Explain wave–particle duality and the double-slit experiment for electrons.
concepts:
  - Bohr model
  - Stationary state
  - Angular momentum quantisation
  - de Broglie wavelength
  - Wave–particle duality
  - Double-slit experiment with electrons
tags:
  - physics
  - quantum-mechanics
  - bohr
  - de-broglie
sourceType: authored-courseware
assessmentHints:
  - derivation
  - problem-solving
  - conceptual
***

# Bohr Model, de Broglie and Wave–Particle Duality

## Overview
By 1913, the structure of the atom was a puzzle: Rutherford's scattering experiments showed a tiny dense nucleus, but classical electrodynamics predicted that electrons orbiting the nucleus would radiate and spiral in. Niels Bohr proposed a radical resolution: the angular momentum is quantised, and only certain orbits are allowed. The Bohr model successfully explained the hydrogen spectrum. Then de Broglie made a deeper proposal: if light is both a wave and a particle, perhaps matter is too. The de Broglie relation $p = h/\lambda$ launched wave mechanics, and electron diffraction experiments confirmed it. This lesson develops the Bohr model, the de Broglie relation, and the wave–particle duality.

## Learning Path
- What you should already know: the photon, the photoelectric effect, basic atomic physics.
- What this lesson adds: the quantisation of atomic orbits, the de Broglie wavelength, and the experimental confirmation of matter waves.
- What it unlocks: the Schrödinger equation, the quantum-mechanical hydrogen atom, and the wavefunction formalism.

## Core Explanation
**Bohr's postulates (1913).** The hydrogen atom consists of an electron of mass $m$ and charge $-e$ in circular orbit around a proton of charge $+e$. Bohr's postulates:
1. The electron moves in certain *stationary* orbits without radiating. The orbital angular momentum is quantised: $L = m v r = n \hbar$, where $\hbar = h/(2\pi)$ and $n = 1, 2, 3, \ldots$.
2. The electron can jump between orbits by absorbing or emitting a photon of energy exactly equal to the difference in orbit energies: $h \nu = E_i - E_f$.

**Quantisation of angular momentum.** $m v r = n \hbar$. This is the most direct way to introduce quantisation into atomic physics. The allowed orbits are those for which the de Broglie wavelength fits an integer number of times around the circumference: $2 \pi r = n \lambda = n h / (m v)$, giving $m v r = n h/(2\pi) = n \hbar$. ✓

**Bohr radius.** The radius of the lowest orbit ($n = 1$) is

$$a_0 = \frac{4 \pi \varepsilon_0 \hbar^2}{m e^2} \approx 5.29 \times 10^{-11}\text{ m}.$$

This is the natural atomic unit of length.

**Energy levels.** The total energy of the electron in orbit $n$ is

$$E_n = -\frac{m e^4}{2 (4 \pi \varepsilon_0)^2 \hbar^2} \frac{1}{n^2} = -\frac{13.6\text{ eV}}{n^2}.$$

The ground state ($n = 1$) is $-13.6\text{ eV}$; ionisation requires $13.6\text{ eV}$. Higher levels ($n = 2, 3, \ldots$) have energies $-3.4, -1.51\text{ eV}, \ldots$

**Spectral lines.** The wavelength of a photon emitted in a transition $n \to n'$ is

$$\frac{1}{\lambda} = R \left(\frac{1}{n'^2} - \frac{1}{n^2}\right),$$

where $R \approx 1.097 \times 10^7\text{ m}^{-1}$ is the Rydberg constant. For $n' = 1$: Lyman series (UV). For $n' = 2$: Balmer series (visible: H$\alpha$ at $656\text{ nm}$, H$\beta$ at $486\text{ nm}$, ...). For $n' = 3$: Paschen series (IR).

**de Broglie's hypothesis (1924).** Every particle has a wave associated with it, the *matter wave*, with wavelength

$$\lambda = \frac{h}{p},$$

where $p$ is the particle's momentum. For an electron accelerated through a potential $V$: $p = \sqrt{2 m e V}$, $\lambda \approx 1.23 / \sqrt{V}$ nm (with $V$ in volts). For a $100\text{ V}$ electron, $\lambda \approx 0.123\text{ nm}$ — comparable to atomic spacings.

**Davisson–Germer experiment (1927).** Electrons scattered off a nickel crystal showed a diffraction pattern — exactly the same as X-ray diffraction. The peaks corresponded to de Broglie's wavelength. This confirmed de Broglie's hypothesis and the wave nature of matter.

**Electron diffraction in TEM.** Transmission electron microscopes use the de Broglie wavelength of electrons to image at sub-nanometre resolution. The wavelength of a $100\text{ keV}$ electron is about $0.004\text{ nm}$ — much smaller than the spacing of atoms.

**Wave–particle duality.** Both light and matter exhibit wave-like and particle-like behaviour. Which aspect is observed depends on the experiment:
- Interference and diffraction → wave nature.
- Photoelectric effect, Compton scattering → particle nature.

This is not a contradiction but a feature of quantum theory: the classical categories of "wave" and "particle" are inadequate at the quantum scale.

**Double-slit with electrons.** A beam of electrons passing through a double slit produces an interference pattern on a detector, even when the electrons are sent one at a time. The single-electron pattern builds up to the multi-electron interference pattern. Each electron "interferes with itself". The pattern is destroyed if you try to determine which slit the electron went through.

**The wavefunction.** The de Broglie wave is described by a complex *wavefunction* $\Psi(x, t)$, with $|\Psi|^2$ interpreted as the probability density of finding the particle. This is the Born rule, the probabilistic interpretation of quantum mechanics.

**The double-slit intensity.** The probability of arrival at position $x$ is $|\Psi_1 + \Psi_2|^2 = |\Psi_1|^2 + |\Psi_2|^2 + 2 \text{Re}(\Psi_1^* \Psi_2)$. The cross term is the *interference term*, which produces the fringes. It vanishes if you know which slit the electron went through.

**de Broglie's argument for stationary orbits.** A standing wave must fit an integer number of wavelengths around the orbit: $2 \pi r = n \lambda = n h / p$. With $L = m v r = p r$, this gives $L = n h/(2\pi) = n \hbar$ — the Bohr quantisation rule. Stationary orbits are standing electron waves.

**Matter waves for other particles.** The de Broglie wavelength applies to all matter. For a $1\text{ kg}$ object moving at $1\text{ m/s}$: $\lambda = h/p = 6.63 \times 10^{-34}\text{ m}$ — utterly negligible. For a neutron at thermal energy ($0.025\text{ eV}$): $\lambda \approx 0.18\text{ nm}$ — useful for neutron diffraction in solid-state physics.

**The principle of complementarity (Bohr).** The wave and particle aspects are *complementary*: both are needed for a complete description, but they are observed in mutually exclusive experiments. This was Bohr's philosophical reading of quantum mechanics.

## Key Ideas
- Bohr: $L = n \hbar$ for the electron in hydrogen.
- Energy levels: $E_n = -13.6\text{ eV}/n^2$.
- Spectral series: Lyman, Balmer, Paschen, Brackett, Pfund.
- de Broglie: $\lambda = h/p$ for any particle.
- Wave–particle duality: both wave and particle aspects are real.

## Worked Examples
**Example 1 — Balmer series.** The H$\alpha$ line: $n = 3 \to n' = 2$. $1/\lambda = R(1/4 - 1/9) = R \cdot 5/36$. $\lambda = 36/(5 R) = 36/(5 \times 1.097 \times 10^7) = 656\text{ nm}$ — red. ✓

**Example 2 — Ionisation energy.** $E_1 = -13.6\text{ eV}$. To ionise hydrogen from the ground state requires $+13.6\text{ eV}$ — enough to free the electron from the proton.

**Example 3 — de Broglie of a baseball.** A $0.15\text{ kg}$ baseball at $40\text{ m/s}$: $\lambda = 6.63 \times 10^{-34} / (0.15 \times 40) = 1.1 \times 10^{-34}\text{ m}$ — about $10^{19}$ times smaller than an atomic nucleus. No wonder we don't see quantum effects in baseball.

**Example 4 — de Broglie of an electron at $100\text{ V}$.** $p = \sqrt{2 m e V} = \sqrt{2 \times 9.11 \times 10^{-31} \times 1.6 \times 10^{-19} \times 100} \approx 5.4 \times 10^{-24}\text{ kg·m/s}$. $\lambda = h/p \approx 0.123\text{ nm}$.

## Common Misconceptions
- **"The Bohr model is the correct picture of the atom."** No — the Schrödinger equation (next module) is the modern picture. The Bohr model is a useful semi-classical approximation that works for hydrogen.
- **"The de Broglie wavelength is a property of waves of matter."** It is a property of *every* particle, including baseballs — but for macroscopic objects the wavelength is absurdly small.
- **"An electron is sometimes a wave and sometimes a particle."** No — an electron is a quantum object that shows wave-like or particle-like behaviour depending on the experiment. Both aspects are present at all times.
- **"In the double-slit, the electron goes through both slits."** The standard interpretation: the electron's wavefunction goes through both slits and interferes with itself. The electron is detected at a single point, but the probability of detection shows the interference pattern.

## Connections
The Bohr model is the prototype of every quantum-mechanical model of a bound system. The de Broglie relation is the foundation of the Schrödinger equation, which treats matter as a wave governed by a wave equation. Wave–particle duality is the conceptual heart of quantum mechanics and reappears in every quantum phenomenon: tunnelling, entanglement, the uncertainty principle.

## Quick Check
1. State the Bohr quantisation condition for angular momentum.
2. What is the energy of the $n = 2$ level of hydrogen?
3. What series does the H$\alpha$ line belong to, and what is its wavelength?
4. State the de Broglie relation.
5. What wavelength is associated with an electron accelerated through $100\text{ V}$?

## Takeaway
- Bohr: $L = n \hbar$ for the electron; $E_n = -13.6\text{ eV}/n^2$.
- Hydrogen spectral series: Lyman (UV), Balmer (visible), Paschen (IR).
- de Broglie: $\lambda = h/p$ for every particle.
- Davisson–Germer confirmed matter-wave diffraction.
- Wave–particle duality: both aspects are real and complementary.
