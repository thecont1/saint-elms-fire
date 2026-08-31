***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-2
semesterName: Semester 2
subjectId: physics
subjectName: Physics
courseId: thermal-physics-and-statistical-mechanics
courseName: Thermal Physics and Statistical Mechanics
moduleId: thermal-physics-and-statistical-mechanics-module-3
moduleName: Ensembles, Probability, and Applications
lessonId: thermal-physics-and-statistical-mechanics-m3-l2
lessonName: Partition Functions in Practice
lessonNumber: 8
moduleNumber: 3
semesterNumber: 2
difficulty: advanced
estimatedStudyMinutes: 50
releaseOrder: 8
prerequisites:
  - thermal-physics-and-statistical-mechanics-m3-l1
learningObjectives:
  - Compute the partition function for ideal gases (translational, rotational, vibrational) and solids.
  - Apply the equipartition theorem and the quantum corrections to specific heat capacities.
  - Compute the entropy of an ideal gas and a harmonic solid from the partition function.
concepts:
  - Translational partition function
  - Rotational partition function
  - Vibrational partition function
  - Einstein solid
  - Debye model
  - Quantum statistics
tags:
  - physics
  - statistical-mechanics
  - partition-function
  - heat-capacity
sourceType: authored-courseware
assessmentHints:
  - conceptual
  - derivation
  - problem-solving
  - short-answer
***

# Partition Functions in Practice

## Overview

The partition function is the gateway from microscopic Hamiltonians to macroscopic thermodynamic quantities. The lesson applies the formalism of Lesson m3-l1 to the canonical examples of statistical mechanics: the ideal monatomic gas (translational), the ideal diatomic gas (translational + rotational + vibrational), the ideal polyatomic gas, and the harmonic solid (Einstein and Debye models). Each example illustrates a different feature of the partition function: a single quadratic degree of freedom (kinetic energy), two rotational degrees of freedom (rigid rotor), or many coupled harmonic oscillators (lattice vibrations). The lesson is the workhorse of quantitative statistical mechanics and the foundation of the free-energy and phase-transition treatments that follow.

## Learning Path

- **What you should already know**: the Boltzmann distribution and the partition function (Lesson m3-l1); the equipartition theorem and the quantum of action; the ideal gas law and the heat capacities from Modules 1 and 2.
- **What this lesson adds**: the explicit form of the partition function for translations, rotations, vibrations, and lattice modes; the Einstein and Debye models of solids; the quantum corrections to classical heat capacities.
- **What later lessons this will unlock**: free energies and chemical equilibrium (Lesson m3-l3); phase transitions and the Ising model; applications in chemistry, astrophysics, and condensed-matter physics.

## Core Explanation

### Factorisation of the partition function

When the Hamiltonian separates into a sum of independent terms, $H = \sum_a H_a$, the partition function factorises into a product of single-term partition functions:

$$Z = \sum_i e^{-\beta E_i} = \prod_a \sum_{i_a} e^{-\beta E_{i_a}} = \prod_a Z_a, \quad \ln Z = \sum_a \ln Z_a.$$

The factorisation is the basis of treating translations, rotations, and vibrations independently in the ideal-gas model. It also gives the additive decomposition of thermodynamic quantities: the free energy is a sum of free energies from each degree of freedom, and the heat capacity is a sum of contributions.

### Translational partition function

For a single particle of mass $m$ in a box of volume $V$, the translational Hamiltonian is $H = |\vec{p}|^2 / 2m$, and the partition function is

$$z_\text{trans} = \frac{1}{h^3} \int e^{-\beta |\vec{p}|^2 / 2m} d^3 p \int d^3 q = \frac{V}{h^3} \left(\frac{2 \pi m}{\beta}\right)^{3/2} = \frac{V}{\lambda^3},$$

where $\lambda = h / \sqrt{2 \pi m k_B T}$ is the thermal de Broglie wavelength. For $N$ indistinguishable particles, the partition function is $Z_\text{trans} = z_\text{trans}^N / N!$.

The translational contribution to the free energy is $F_\text{trans} = -k_B T \ln Z_\text{trans}$. Using Stirling's approximation, $F_\text{trans} = -N k_B T [\ln(V / N \lambda^3) + 1]$. The pressure is $p = -(\partial F / \partial V)_T = N k_B T / V$, the ideal gas law. The average energy is $\langle E_\text{trans} \rangle = (3/2) N k_B T$, recovering equipartition for three translational degrees of freedom.

### Rotational partition function (diatomic)

For a rigid diatomic rotor with moment of inertia $I$, the energies are $E_\ell = \hbar^2 \ell (\ell + 1) / 2I$, with $\ell = 0, 1, 2, \ldots$ and degeneracy $2 \ell + 1$. The rotational partition function is

$$z_\text{rot} = \sum_{\ell = 0}^\infty (2 \ell + 1) e^{-\beta \hbar^2 \ell (\ell + 1) / 2 I} = \sum_{\ell = 0}^\infty (2 \ell + 1) e^{-T_\text{rot} \ell (\ell + 1) / T},$$

where $T_\text{rot} = \hbar^2 / 2 I k_B$ is the rotational temperature (typically a few kelvin for light diatomics, tens of kelvin for heavier ones).

In the high-temperature limit ($T \gg T_\text{rot}$), the sum is well approximated by an integral:

$$z_\text{rot} \approx \int_0^\infty (2 \ell + 1) e^{-T_\text{rot} \ell (\ell + 1) / T}\, d\ell \approx \frac{T}{T_\text{rot}} = \frac{2 I k_B T}{\hbar^2}.$$

The factor of 2 is the symmetry number for a heteronuclear diatomic (rotation by $\pi$ gives a distinct state). For a homonuclear diatomic (e.g. $H_2$, $N_2$), the symmetry number is 2, and the partition function is divided by 2 to account for the indistinguishability of the two orientations.

The rotational contribution to the average energy is $\langle E_\text{rot} \rangle = k_B T$ in the high-temperature limit (two quadratic degrees of freedom). The heat capacity contribution is $C_{V,\text{rot}} = k_B$ per molecule, or $C_{V,\text{rot}} = n R$ for $n$ moles. At low temperatures, the rotational contribution freezes out and the heat capacity drops to zero (the rotational temperature is the scale at which this happens).

### Vibrational partition function (diatomic)

For a harmonic oscillator with frequency $\nu$, the energies are $E_n = (n + 1/2) h \nu$, $n = 0, 1, 2, \ldots$ (no degeneracy). The partition function is

$$z_\text{vib} = \sum_{n = 0}^\infty e^{-\beta h \nu (n + 1/2)} = \frac{e^{-\beta h \nu / 2}}{1 - e^{-\beta h \nu}} = \frac{1}{2 \sinh(\beta h \nu / 2)}.$$

The average energy is

$$\langle E_\text{vib} \rangle = h \nu \left(\frac{1}{2} + \frac{1}{e^{\beta h \nu} - 1}\right).$$

The first term is the zero-point energy $(1/2) h \nu$; the second is the thermal contribution. In the high-temperature limit ($\beta h \nu \ll 1$), the thermal contribution becomes $k_B T$, recovering the equipartition result. In the low-temperature limit, the thermal contribution becomes $h \nu e^{-\beta h \nu}$, exponentially small.

The heat capacity contribution is

$$C_{V,\text{vib}} = k_B \left(\frac{\beta h \nu / 2}{\sinh(\beta h \nu / 2)}\right)^2 = k_B \left(\frac{\theta_\text{vib} / 2 T}{\sinh(\theta_\text{vib} / 2 T)}\right)^2,$$

where $\theta_\text{vib} = h \nu / k_B$ is the vibrational temperature (typically a few thousand kelvin for light diatomics). The function is known as the **Einstein function**; it approaches $k_B$ in the high-temperature limit and goes to zero at low temperatures.

### The Einstein solid

A solid can be modelled as $N$ independent quantum harmonic oscillators (the **Einstein model**), one for each atom. Each oscillator has three vibrational degrees of freedom (one for each direction), so the total vibrational partition function is

$$Z_\text{Einstein} = \left(\frac{1}{2 \sinh(\beta \hbar \omega / 2)}\right)^{3N}.$$

The average energy is $3 N \hbar \omega (\langle n \rangle + 1/2)$ with $\langle n \rangle = 1 / (e^{\beta \hbar \omega} - 1)$, and the heat capacity is

$$C_V = 3 N k_B \left(\frac{\theta_E / T}{\sinh(\theta_E / T)}\right)^2 e^{\theta_E / T},$$

where $\theta_E = \hbar \omega / k_B$ is the Einstein temperature. The Dulong–Petit classical limit $C_V = 3 N k_B$ is recovered at high temperature; at low temperature, the heat capacity drops exponentially to zero.

The Einstein model is qualitatively correct for the temperature dependence of $C_V$ at low $T$, but the actual low-temperature behaviour is $C_V \propto T^3$, not exponential. The discrepancy is because the Einstein model treats each atom as an independent oscillator, ignoring the coupling between the oscillators (the phonons). The Debye model fixes this.

### The Debye model

In a real solid, the atomic vibrations are not independent: they are coupled, with a spectrum of vibrational modes (phonons) up to a maximum frequency $\omega_D$ (the Debye frequency). The density of states is $g(\omega) = 9 N \omega^2 / \omega_D^3$ for $\omega \le \omega_D$ (in 3D). The partition function is

$$\ln Z = -3 N \ln\left(1 - e^{-\beta \hbar \omega_D}\right) + \frac{9 N}{\omega_D^3} \int_0^{\omega_D} \ln\left(1 - e^{-\beta \hbar \omega}\right) \omega^2\, d\omega.$$

The low-temperature limit gives the famous **Debye $T^3$ law**:

$$C_V = \frac{12 \pi^4}{5} N k_B \left(\frac{T}{\theta_D}\right)^3,$$

where $\theta_D = \hbar \omega_D / k_B$ is the Debye temperature (typically $100$–$400$ K for solids). The $T^3$ dependence is the correct low-temperature behaviour for insulators and is one of the great successes of the Debye model. (For metals, the electronic contribution $\propto T$ is also present, and at very low $T$ the linear term dominates.)

### Polyatomic ideal gas

For a polyatomic ideal gas, the partition function factorises into translational, rotational, and vibrational parts:

$$Z = \frac{z_\text{trans}^N}{N!} \cdot z_\text{rot}^N \cdot z_\text{vib}^N.$$

The translational part is the same as for a monatomic gas. The rotational part depends on the moments of inertia: for a general (asymmetric-top) molecule, the rotational partition function is a sum over $\ell$ and $m$ that does not have a simple closed form. For a symmetric-top molecule (one unique axis), $z_\text{rot} \propto T^{3/2} / \sigma$, where $\sigma$ is the symmetry number. For a linear molecule, $z_\text{rot} \propto T / \sigma$ (the heteronuclear case).

The vibrational part is a product over the $3N - 6$ (or $3N - 5$ for linear) vibrational modes:

$$z_\text{vib} = \prod_{a = 1}^{3N - 6} \frac{1}{2 \sinh(\beta \hbar \omega_a / 2)}.$$

Each mode contributes $(1/2) \hbar \omega_a$ to the zero-point energy and $k_B T$ to the average energy in the high-temperature limit.

The heat capacity of a polyatomic gas is the sum of translational, rotational, and vibrational contributions:

$$C_V = \frac{3}{2} n R + \frac{3}{2} n R + \sum_a n R \left(\frac{\theta_{v,a} / 2 T}{\sinh(\theta_{v,a} / 2 T)}\right)^2 e^{\theta_{v,a} / T},$$

where the first term is translation (3/2), the second is rotation (3/2 for non-linear, 1 for linear), and the third is the sum of Einstein functions for the vibrational modes.

### Blackbody radiation

A photon gas in a cavity is a quantum mechanical system with a temperature-dependent number of particles. The grand canonical partition function gives the free energy, and the average energy is the Stefan–Boltzmann result:

$$\langle E \rangle = a V T^4, \quad a = \frac{8 \pi^5 k_B^4}{15 h^3 c^3}.$$

The energy density is $u = a T^4 \approx 7.57 \times 10^{-16} T^4$ J/m$^3$·K$^4$. The energy flux from a blackbody surface is $\sigma T^4$ with $\sigma = a c / 4 = 5.67 \times 10^{-8}$ W/m$^2$·K$^4$ (the Stefan–Boltzmann constant).

The blackbody spectrum (Planck's law) gives the energy density per unit frequency interval:

$$u(\nu) = \frac{8 \pi h \nu^3}{c^3} \frac{1}{e^{h \nu / k_B T} - 1}.$$

The peak of the spectrum is at $h \nu_\text{peak} \approx 2.82 k_B T$ (Wien's displacement law), and the spectrum is a universal function of $h \nu / k_B T$.

### Degenerate quantum gases

For a gas at very low temperature or very high density, the quantum statistics becomes important. Two cases:

- **Fermi–Dirac statistics** (e.g. electrons): $P(\text{state}) = 1 / (e^{\beta (E - \mu)} + 1)$, where $\mu$ is the chemical potential. The Pauli exclusion principle prevents two fermions from occupying the same state, so the system has a Fermi sea at zero temperature.
- **Bose–Einstein statistics** (e.g. photons, helium-4): $P(\text{state}) = 1 / (e^{\beta (E - \mu)} - 1)$. Bosons can occupy the same state, and below a critical temperature a macroscopic fraction of the particles condense into the ground state (Bose–Einstein condensation).

These are advanced topics; the first exposure to them is in the second-year statistical-mechanics course.

### The chemical equilibrium constant

The partition function of a gas gives the equilibrium constant for a chemical reaction. For the reaction $\text{A} \to \text{B}$ with partition functions $z_A$ and $z_B$ per particle, the equilibrium constant is

$$K = \frac{z_B / V}{z_A / V} e^{-(E_{0,B} - E_{0,A}) / k_B T},$$

where $E_0$ is the ground-state energy. The exponential factor accounts for the difference in zero-point energies. The equilibrium constant determines the equilibrium composition of the reaction mixture.

The generalisation to multi-particle reactions is straightforward. The free energy of each species is $F = -k_B T \ln(z^N / N!)$ per species; the equilibrium composition minimises the total free energy of the reaction mixture.

### Worked Examples

**Example 1 — Rotational partition function of $H_2$ at $300$ K.** The rotational temperature of $H_2$ is $T_\text{rot} = 85.4$ K. Compute the rotational contribution to the heat capacity per mole.

**Solution.** $T / T_\text{rot} = 300 / 85.4 = 3.51$. The rotational heat capacity per mole is $C_{V,\text{rot}} / R$ given by a function of $T / T_\text{rot}$. For $T \gg T_\text{rot}$, the heat capacity approaches the classical value $R$ (per mole). At $T / T_\text{rot} = 3.51$, the heat capacity is close to the classical value but with a small correction; the full calculation requires numerical evaluation of the sum.

**Example 2 — Vibrational temperature of $N_2$.** The vibrational frequency of $N_2$ is $\nu = 7.07 \times 10^{13}$ Hz. Compute the vibrational temperature and the fraction of molecules in the first excited state at $T = 300$ K.

**Solution.** $\theta_\text{vib} = h \nu / k_B = 6.626 \times 10^{-34} \times 7.07 \times 10^{13} / 1.38 \times 10^{-23} = 3390$ K. At $T = 300$ K, $\theta_\text{vib} / T = 11.3$. The fraction in the first excited state is $e^{-\theta_\text{vib} / T} = e^{-11.3} \approx 1.2 \times 10^{-5}$, essentially zero. Vibration is completely frozen out at room temperature for $N_2$. ✓

**Example 3 — Blackbody radiation from the sun.** The sun has $T = 5778$ K. Compute the peak wavelength and the total radiated power per unit area.

**Solution.** Wien's law: $\lambda_\text{peak} = 2.898 \times 10^{-3} / T = 5.0 \times 10^{-7}$ m $= 500$ nm (green-yellow, consistent with the sun's colour). The power per unit area: $\sigma T^4 = 5.67 \times 10^{-8} \times 5778^4 = 5.67 \times 10^{-8} \times 1.12 \times 10^{15} = 6.3 \times 10^7$ W/m$^2$. The sun's total luminosity is $L = 4 \pi R^2 \sigma T^4 = 4 \pi (7 \times 10^8)^2 \times 6.3 \times 10^7 \approx 3.9 \times 10^{26}$ W, the accepted value. ✓

## Key Ideas

- The partition function factorises when the Hamiltonian separates.
- Translational partition function of an ideal gas: $z = V / \lambda^3$; ideal gas law and equipartition follow.
- Rotational partition function: $z \propto T$ (linear) or $T^{3/2}$ (non-linear) in the high-temperature limit.
- Vibrational partition function: $z = 1 / (2 \sinh(\beta \hbar \omega / 2))$.
- Einstein model of solids: $C_V \propto (\theta_E / T)^2$ at low $T$ (exponential).
- Debye model: $C_V \propto T^3$ at low $T$ (the correct low-temperature behaviour).
- Polyatomic gas: $C_V = (3/2) R + (3/2 \text{ or } 1) R + \text{vibrational contributions}$.
- Blackbody radiation: $\sigma T^4$; Planck spectrum peaks at $\lambda_\text{peak} \propto 1/T$.

## Common Misconceptions

- **"The partition function is a probability."** No; it is a normalisation constant for the Boltzmann distribution.
- **"All rotational and vibrational modes are excited at room temperature."** No. Rotational modes of light diatomics are excited at room temperature, but vibrational modes are frozen out (the vibrational temperature is much higher).
- **"The Debye $T^3$ law applies at all temperatures."** Only in the low-temperature limit $T \ll \theta_D$. At intermediate temperatures, the full Debye formula is needed.
- **"The Stefan–Boltzmann constant is fundamental."** It is derived from the more fundamental constants $k_B$, $h$, $c$; the value is fixed by the underlying physics.
- **"Blackbody radiation is a classical phenomenon."** No. It is a quantum phenomenon; the classical Rayleigh–Jeans law gives the wrong low-wavelength behaviour (the "ultraviolet catastrophe") and the wrong total energy.

## Connections

- The partition function is the bridge between microscopic Hamiltonians and macroscopic thermodynamics.
- The Debye model is the basis of low-temperature solid-state physics and the explanation of heat capacity at low $T$.
- Blackbody radiation is the foundation of radiative heat transfer, stellar astrophysics, and the cosmic microwave background.
- The chemical equilibrium constant is the basis of chemical thermodynamics; the same formalism applies to phase equilibria.
- Quantum statistics (Fermi–Dirac, Bose–Einstein) extends the classical treatment to degenerate gases; the foundations are the partition function and the grand canonical ensemble.

## Quick Check

1. State the translational partition function of a single particle in a box of volume $V$.
2. What is the rotational temperature of a diatomic molecule?
3. Sketch the Einstein heat capacity as a function of $T / \theta_E$.
4. State the low-temperature Debye $T^3$ law.
5. Use Wien's law to find the peak wavelength of blackbody radiation at $T = 1000$ K.

## Takeaway

- The partition function factorises when the Hamiltonian separates.
- Each quadratic degree of freedom contributes $(1/2) k_B T$ to the average energy at high $T$.
- Quantum effects freeze out the high-energy degrees of freedom at low $T$.
- The Debye model gives the correct low-temperature $T^3$ behaviour of solid heat capacities.
- Blackbody radiation is a quantum phenomenon with a universal spectrum.
- The partition function is the basis of chemical and phase equilibria.
