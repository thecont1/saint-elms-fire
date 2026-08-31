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
lessonId: thermal-physics-and-statistical-mechanics-m3-l1
lessonName: Probability, Microstates and the Boltzmann Distribution
lessonNumber: 7
moduleNumber: 3
semesterNumber: 2
difficulty: advanced
estimatedStudyMinutes: 50
releaseOrder: 7
prerequisites:
  - thermal-physics-and-statistical-mechanics-m2-l3
learningObjectives:
  - Define ensembles and state the fundamental postulates of statistical mechanics.
  - Derive the Boltzmann distribution for a system in thermal equilibrium.
  - Connect partition functions to thermodynamic quantities.
concepts:
  - Microstate
  - Ensemble
  - Microcanonical ensemble
  - Canonical ensemble
  - Boltzmann distribution
  - Partition function
tags:
  - physics
  - statistical-mechanics
  - boltzmann
  - probability
sourceType: authored-courseware
assessmentHints:
  - conceptual
  - derivation
  - problem-solving
  - short-answer
***

# Probability, Microstates and the Boltzmann Distribution

## Overview

Statistical mechanics derives the macroscopic properties of matter from the statistical behaviour of its microscopic constituents. The lesson introduces the basic postulates (equal a priori probabilities, the ergodic hypothesis, the maximum-entropy principle) and the three standard ensembles (microcanonical, canonical, grand canonical). The lesson then derives the Boltzmann distribution — the probability of a system in thermal equilibrium with a heat bath having a given energy — and shows how the partition function summarises all the thermodynamic information. The lesson is the foundation of the rest of Module 3 (free energies, phase transitions) and the basis of all quantitative statistical mechanics.

## Learning Path

- **What you should already know**: entropy and the Boltzmann formula (Lesson m2-l3); basic probability (averages, distributions); the Maxwell–Boltzmann distribution from kinetic theory.
- **What this lesson adds**: the ensembles of statistical mechanics; the canonical ensemble and the Boltzmann distribution; the partition function; the connection of the partition function to thermodynamic quantities.
- **What later lessons this will unlock**: the partition function in practice (Lesson m3-l2); free energies and phase transitions (Lesson m3-l3); applications in chemistry, biology, and astrophysics.

## Core Explanation

### The goal of statistical mechanics

Statistical mechanics has two goals:

1. **Forward problem**: given the microscopic Hamiltonian, compute the macroscopic properties (e.g. equation of state, heat capacity, magnetisation) of a system in thermal equilibrium.
2. **Inverse problem**: given the macroscopic properties, infer the microscopic Hamiltonian or the nature of the microscopic constituents.

The forward problem is the standard one: start with a model Hamiltonian (e.g. the ideal gas, the Ising model), compute the partition function, and derive the thermodynamic quantities.

### Microstates and macrostates

A **microstate** is a complete specification of the positions and momenta of all the particles in a system. For a classical system, a microstate is a point in $6N$-dimensional phase space (3 positions and 3 momenta for each of $N$ particles). For a quantum system, a microstate is a complete set of quantum numbers, or equivalently a state vector in the Hilbert space.

A **macrostate** is a specification of the macroscopic variables (e.g. $N$, $V$, $E$ for a closed system). Many microstates correspond to the same macrostate; the number of microstates per macrostate is the **multiplicity** $\Omega$.

### Postulates of statistical mechanics

Statistical mechanics rests on a small number of postulates:

1. **Equal a priori probabilities**: in an isolated system at equilibrium, all accessible microstates are equally probable.
2. **Ergodic hypothesis**: a system, given enough time, will visit every accessible microstate. Time averages equal ensemble averages.
3. **Maximum-entropy principle**: the equilibrium state is the macrostate with the largest multiplicity, subject to the constraints (energy, particle number, etc.).
4. **Boltzmann entropy**: $S = k_B \ln \Omega$, connecting the macrostate (via $\Omega$) to the entropy.

These postulates, together with the laws of mechanics (classical or quantum), determine the equilibrium properties of matter.

### Ensembles

An **ensemble** is a large collection of identical systems, each in a different microstate, that represents the equilibrium state of the system of interest. The average over the ensemble gives the macroscopic observable.

The three standard ensembles:

- **Microcanonical ensemble**: the systems are isolated, with fixed $(N, V, E)$. The entropy is $S = k_B \ln \Omega(N, V, E)$.
- **Canonical ensemble**: the systems are in thermal contact with a heat bath at temperature $T$, with fixed $(N, V, T)$. The probability of a microstate is the Boltzmann distribution.
- **Grand canonical ensemble**: the systems can exchange both energy and particles with a reservoir, with fixed $(\mu, V, T)$, where $\mu$ is the chemical potential. The probability of a microstate is the Gibbs distribution.

The three ensembles give the same thermodynamic predictions in the thermodynamic limit (large $N$), but they emphasise different macroscopic variables. The canonical ensemble is the most common starting point for theoretical calculations.

### The canonical ensemble

Consider a system $S$ in thermal contact with a much larger heat bath $R$ at temperature $T$. The total system (S + R) is isolated, with total energy $E_\text{tot} = E_S + E_R$. The energy of the small system $E_S$ is much less than the total, so $E_R \approx E_\text{tot}$ and the bath is essentially unchanged when $S$ gains or loses energy.

The multiplicity of a microstate of $S$ with energy $E$ is some number $\Omega_S(E)$. The multiplicity of the reservoir is $\Omega_R(E_R) = \Omega_R(E_\text{tot} - E) \approx \Omega_R(E_\text{tot}) e^{-\beta E}$, where $\beta = 1 / k_B T$. (The exponential factor is the first-order Taylor expansion of $\ln \Omega_R$ around $E_\text{tot}$.)

The total multiplicity is the product: $\Omega_\text{tot}(E) = \Omega_S(E) \Omega_R(E_\text{tot} - E)$. The probability of a microstate of $S$ with energy $E$ is

$$P(E) \propto \Omega_S(E) \Omega_R(E_\text{tot} - E) \propto \Omega_S(E) e^{-\beta E}.$$

If we further assume that the degeneracies within $S$ are spread over many states with the same energy, the probability of a particular microstate with energy $E$ is

$$P(\text{state}) = \frac{e^{-\beta E}}{Z},$$

where $Z = \sum_i e^{-\beta E_i}$ is the **partition function** (German: Zustandssumme, "sum over states"). This is the **Boltzmann distribution**: the probability of a state is proportional to the Boltzmann factor $e^{-\beta E}$, with the partition function as the normalisation.

### The partition function

The **partition function** $Z$ is the central object of statistical mechanics. It is defined as

$$Z(T) = \sum_i e^{-\beta E_i},$$

where the sum is over all microstates of the system. (For a classical system, the sum is replaced by an integral over phase space: $Z = (1 / h^{3N} N!) \int e^{-\beta H}\, d^{3N} p\, d^{3N} q$.)

All thermodynamic quantities can be derived from $Z$:

- **Free energy**: $F = -k_B T \ln Z$.
- **Entropy**: $S = -(\partial F / \partial T)_V = k_B (\ln Z + \beta \langle E \rangle)$.
- **Average energy**: $\langle E \rangle = -\partial \ln Z / \partial \beta$.
- **Pressure**: $p = k_B T (\partial \ln Z / \partial V)$.
- **Heat capacity**: $C_V = (\partial \langle E \rangle / \partial T)_V$.

The partition function is the bridge between the microscopic Hamiltonian (which determines $E_i$) and the macroscopic thermodynamic quantities (which are derivatives of $\ln Z$).

### Two-state system revisited

For the two-state system of Lesson m2-l3, with energies $0$ and $\epsilon$, the partition function is

$$Z = 1 + e^{-\beta \epsilon}.$$

The average energy is

$$\langle E \rangle = -\frac{\partial \ln Z}{\partial \beta} = \frac{\epsilon e^{-\beta \epsilon}}{1 + e^{-\beta \epsilon}} = \frac{\epsilon}{e^{\beta \epsilon} + 1}.$$

The probability of the upper state is $P(\text{upper}) = e^{-\beta \epsilon} / (1 + e^{-\beta \epsilon}) = 1 / (e^{\beta \epsilon} + 1)$, which is the Fermi–Dirac distribution at zero chemical potential. The two-state system is the simplest example of a partition function calculation.

### The Boltzmann distribution for a gas

For a dilute monatomic ideal gas of $N$ particles, the partition function factorises into a product of single-particle partition functions (because the particles are non-interacting):

$$Z = \frac{z^N}{N!},$$

where $z$ is the single-particle partition function. For a classical ideal gas in a box of volume $V$,

$$z = \frac{V}{\lambda^3}, \quad \lambda = \sqrt{\frac{2 \pi \hbar^2}{m k_B T}}$$

is the thermal de Broglie wavelength. So

$$\ln Z = N \ln(V / \lambda^3) - \ln N! \approx N [\ln(V / N \lambda^3) + 1].$$

The pressure is

$$p = k_B T \frac{\partial \ln Z}{\partial V} = \frac{N k_B T}{V},$$

recovering the ideal gas law. The average energy is

$$\langle E \rangle = -\frac{\partial \ln Z}{\partial \beta} = \frac{3}{2} N k_B T,$$

recovering the kinetic-theory result. The entropy is

$$S = k_B (\ln Z + \beta \langle E \rangle) = N k_B \left[\ln(V / N \lambda^3) + \frac{5}{2}\right],$$

the Sackur–Tetrode equation.

### The Maxwell–Boltzmann distribution revisited

The Maxwell–Boltzmann speed distribution is the probability density of a single particle having a particular speed. It can be derived from the Boltzmann distribution: the probability of a particle having momentum $\vec{p}$ is proportional to $e^{-\beta p^2 / 2m}$, and the speed distribution is obtained by integrating over angles. The result is

$$f(v) = 4 \pi n \left(\frac{m}{2 \pi k_B T}\right)^{3/2} v^2 e^{-m v^2 / 2 k_B T},$$

as derived in Lesson m2-l1.

The Maxwell–Boltzmann distribution is the probability distribution of a single particle in a gas; the partition function gives the macroscopic thermodynamic quantities. The two are connected: the partition function is the normalisation constant for the Boltzmann distribution.

### Equipartition from the partition function

The equipartition theorem can be derived from the partition function. Consider a Hamiltonian $H = \sum_i a_i q_i^2$ (a sum of squares with no cross terms). The partition function is

$$Z = \int e^{-\beta H}\, dq_1 \ldots dq_n = \prod_i \int e^{-\beta a_i q_i^2}\, dq_i = \prod_i \sqrt{\frac{\pi}{\beta a_i}}.$$

The average energy is

$$\langle E \rangle = -\frac{\partial \ln Z}{\partial \beta} = \sum_i \frac{1}{2 \beta} = \frac{n}{2} k_B T,$$

where $n$ is the number of quadratic terms. Each quadratic degree of freedom contributes $(1/2) k_B T$ to the average energy, recovering the equipartition theorem.

### Fluctuations

In the canonical ensemble, the energy of the system fluctuates around its average. The variance of the energy is

$$\sigma_E^2 = \langle E^2 \rangle - \langle E \rangle^2 = k_B T^2 C_V,$$

where $C_V$ is the heat capacity. The relative fluctuation is

$$\frac{\sigma_E}{\langle E \rangle} = \sqrt{\frac{k_B T}{C_V}} \cdot \frac{1}{\sqrt{N}} \cdot \sqrt{\text{const}}.$$

For a macroscopic system, $C_V \propto N$, so the relative fluctuation scales as $1/\sqrt{N}$: it is negligible for $N \sim 10^{23}$ but observable for $N \sim 10^6$ (e.g. in atomic nuclei or in Brownian motion).

The fluctuations are a necessary consequence of the second law applied to a finite system. The relative size of the fluctuations goes to zero as the system size goes to infinity, justifying the thermodynamic limit.

### Ergodicity

The ergodic hypothesis — that time averages equal ensemble averages — is essential for statistical mechanics: the heat capacity of a system in thermal equilibrium is a time average, but the calculation uses an ensemble average. Ergodicity is a deep mathematical question, and many realistic systems (e.g. glasses) are non-ergodic on laboratory timescales. For these systems, the "equilibrium" state depends on the history of the sample.

The glass transition is a celebrated example: as a liquid is cooled, the relaxation time increases dramatically, and the system falls out of equilibrium at the glass transition temperature. The properties of the glass depend on the cooling rate; different cooling rates give different glasses.

### The Gibbs paradox

The Gibbs paradox arises in the classical calculation of the entropy of mixing. Without the factor of $1/N!$ in the classical partition function, the entropy of mixing two identical gases is non-zero — but mixing identical gases should produce no entropy change, because the gases are indistinguishable.

The factor of $1/N!$ corrects the overcounting of microstates in the classical integral. It comes from the quantum-mechanical fact that identical particles are indistinguishable, so interchanging two particles does not produce a new microstate. The classical partition function with the $1/N!$ factor gives the correct Sackur–Tetrode equation and the correct mixing entropy.

The Gibbs paradox was an early hint that classical statistical mechanics was incomplete, and that quantum mechanics (with its indistinguishability of identical particles) was needed. The paradox is resolved by the symmetrisation postulate of quantum mechanics.

## Key Ideas

- Microstate vs macrostate; the multiplicity $\Omega$ counts the microstates per macrostate.
- Postulates: equal a priori probabilities, ergodicity, maximum entropy, $S = k_B \ln \Omega$.
- Three ensembles: microcanonical, canonical, grand canonical.
- Boltzmann distribution: $P(\text{state}) = e^{-\beta E} / Z$, where $Z$ is the partition function.
- Thermodynamics from the partition function: $F = -k_B T \ln Z$, $S = k_B (\ln Z + \beta \langle E \rangle)$, $\langle E \rangle = -\partial \ln Z / \partial \beta$, $p = k_B T \partial \ln Z / \partial V$.
- Fluctuations: $\sigma_E^2 = k_B T^2 C_V$, with $\sigma_E / \langle E \rangle \sim 1/\sqrt{N}$.
- The Gibbs paradox and the $1/N!$ factor: identical particles are indistinguishable.

## Worked Examples

### Example 1 — Two-state system

For the two-state system with energies $0$ and $\epsilon = 0.1$ eV, find the partition function and the average energy at $T = 300$ K.

**Solution.** $\beta \epsilon = 0.1 / (8.617 \times 10^{-5} \times 300) = 0.1 / 0.02585 \approx 3.87$. $Z = 1 + e^{-3.87} = 1 + 0.021 = 1.021$. $\langle E \rangle = \epsilon e^{-\beta \epsilon} / Z = 0.1 \times 0.021 / 1.021 \approx 0.002$ eV. So at $T = 300$ K, only about $2$% of the particles are in the upper state.

### Example 2 — Partition function of a classical ideal gas

Derive the ideal gas law and the average energy from the partition function of a classical ideal gas.

**Solution.** $Z = z^N / N!$ with $z = V / \lambda^3$. $\ln Z = N \ln(V / \lambda^3) - N \ln N + N$ (using Stirling). $p = k_B T (\partial \ln Z / \partial V)_T = N k_B T / V$. ✓ $\langle E \rangle = -\partial \ln Z / \partial \beta$. $\lambda \propto \beta^{-1/2}$, so $\ln \lambda^{-3} = (3/2) \ln \beta$. $\partial \ln Z / \partial \beta = (3/2) N / \beta = (3/2) N k_B T$, so $\langle E \rangle = -(3/2) N k_B T$... wait, the sign convention: $\beta = 1 / k_B T$, so $\partial \beta / \partial T = -1 / k_B T^2$. The standard formula $\langle E \rangle = -\partial \ln Z / \partial \beta$ gives $\langle E \rangle = (3/2) N k_B T$. ✓

### Example 3 — Energy fluctuations in a classical ideal gas

Compute the relative energy fluctuation $\sigma_E / \langle E \rangle$ for a mole of a monatomic ideal gas at $T = 300$ K.

**Solution.** $C_V = (3/2) n R = (3/2) \times 1 \times 8.314 = 12.47$ J/K. $\sigma_E^2 = k_B T^2 C_V = 1.38 \times 10^{-23} \times 300^2 \times 12.47 = 1.55 \times 10^{-17}$ J$^2$. $\sigma_E = 3.94 \times 10^{-9}$ J. $\langle E \rangle = (3/2) n R T = (3/2) \times 8.314 \times 300 = 3741$ J. $\sigma_E / \langle E \rangle = 3.94 \times 10^{-9} / 3741 \approx 10^{-12}$. The relative fluctuation is negligible. ✓

## Common Misconceptions

- **"All microstates are equally probable in any system."** Only in an isolated system at equilibrium (the microcanonical ensemble). In the canonical ensemble, the Boltzmann distribution gives different probabilities to different energies.
- **"The partition function is a probability."** No. The Boltzmann factor $e^{-\beta E} / Z$ is a probability; the partition function $Z$ is a normalisation constant.
- **"The ergodic hypothesis is always true."** It is true for many systems but not all. Glasses, disordered solids, and some quantum systems are non-ergodic on accessible timescales.
- **"The Boltzmann distribution applies to any system in contact with a bath."** Yes, but the bath must be much larger than the system, so the system's energy is a small perturbation.
- **"The Gibbs paradox is a real paradox."** It is a paradox of classical statistical mechanics, resolved by quantum-mechanical indistinguishability.

## Connections

- The Boltzmann distribution is the central tool of statistical mechanics; most calculations start from $Z$.
- The thermodynamic limit ($N \to \infty$) is the regime where the macroscopic description is accurate; the partition function gives the macroscopic quantities.
- The fluctuations of thermodynamic quantities are a window into the microscopic behaviour: the magnitude of the fluctuations reveals the size of the system.
- The Gibbs paradox is the gateway to quantum statistics; the $1/N!$ factor is essential for the correct counting of microstates.
- The Boltzmann distribution is the basis of all of equilibrium statistical mechanics; the rest of the course applies it to specific systems.

## Quick Check

1. State the three ensembles of statistical mechanics.
2. Define the partition function and state the formula for the average energy.
3. Derive the Boltzmann distribution from the canonical ensemble.
4. Compute the average energy of a two-state system with $\epsilon = 0.05$ eV at $T = 300$ K.
5. What is the relative magnitude of energy fluctuations in a macroscopic system?

## Takeaway

- Statistical mechanics derives macroscopic properties from microscopic behaviour.
- The Boltzmann distribution is the central tool; the partition function summarises the system.
- Thermodynamic quantities are derivatives of $\ln Z$.
- Fluctuations are small for macroscopic systems; they are observable for small systems.
- The Gibbs paradox is resolved by quantum-mechanical indistinguishability.
- The ergodic hypothesis is the bridge between time and ensemble averages.
