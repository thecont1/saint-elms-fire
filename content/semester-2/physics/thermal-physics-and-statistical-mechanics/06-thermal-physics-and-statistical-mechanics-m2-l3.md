***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-2
semesterName: Semester 2
subjectId: physics
subjectName: Physics
courseId: thermal-physics-and-statistical-mechanics
courseName: Thermal Physics and Statistical Mechanics
moduleId: thermal-physics-and-statistical-mechanics-module-2
moduleName: Kinetic Theory and the Second Law
lessonId: thermal-physics-and-statistical-mechanics-m2-l3
lessonName: Entropy and the Statistical Interpretation
lessonNumber: 6
moduleNumber: 2
semesterNumber: 2
difficulty: advanced
estimatedStudyMinutes: 55
releaseOrder: 6
prerequisites:
  - thermal-physics-and-statistical-mechanics-m2-l2
learningObjectives:
  - Define entropy as a state function and compute entropy changes for reversible and irreversible processes.
  - State the second law in terms of entropy and the Clausius inequality.
  - Connect entropy to the statistical concept of multiplicity via the Boltzmann formula $S = k_B \ln \Omega$.
concepts:
  - Entropy
  - Clausius inequality
  - Reversible entropy change
  - Microstates and multiplicity
  - Boltzmann entropy
  - Third law of thermodynamics
tags:
  - physics
  - thermodynamics
  - entropy
  - statistical-mechanics
sourceType: authored-courseware
assessmentHints:
  - conceptual
  - derivation
  - problem-solving
  - short-answer
***

# Entropy and the Statistical Interpretation

## Overview

Entropy is the central concept of the second law of thermodynamics and the gateway to statistical mechanics. The lesson defines entropy as a state function whose change in a reversible process is $dS = \delta Q_\text{rev} / T$, derives the Clausius inequality and the entropy statement of the second law, and computes entropy changes for the canonical processes (isothermal expansion, heating, phase transitions). The lesson then introduces the statistical interpretation of entropy via the Boltzmann formula $S = k_B \ln \Omega$, where $\Omega$ is the number of microstates consistent with the macrostate. The lesson closes with the third law and the absolute determination of entropy. The lesson is the foundation of Module 3, which develops the Boltzmann distribution and the thermodynamic potentials.

## Learning Path

- **What you should already know**: the first and second laws; the four canonical processes; the kinetic theory and the Maxwell–Boltzmann distribution; basic probability.
- **What this lesson adds**: the definition of entropy; the Clausius inequality; entropy changes for the canonical processes and phase transitions; the statistical (Boltzmann) interpretation; the third law.
- **What later lessons this will unlock**: the Boltzmann distribution and partition functions in Module 3; free energies and phase transitions; applications in chemistry, biology, and astrophysics.

## Core Explanation

### Definition of entropy

The **entropy** $S$ of a system is a state function whose change between two equilibrium states is defined by a reversible path connecting them:

$$\Delta S = \int_{\text{rev}} \frac{\delta Q}{T}.$$

The integral is over any reversible path from the initial to the final state; the result is the same for any path because $S$ is a state function.

For an infinitesimal reversible change, $dS = \delta Q_\text{rev} / T$. The change is well-defined for any path because $S$ depends only on the state.

For an irreversible process, the entropy change of the system is still computed by a reversible path between the same two states. The total entropy (system + surroundings) increases; this is the entropy statement of the second law.

### Clausius inequality

The **Clausius inequality** is the integral form of the second law:

$$\oint \frac{\delta Q}{T} \le 0,$$

where the integral is over a closed cycle and equality holds for reversible cycles. The inequality is the statement that no cyclic process can extract heat from a single reservoir and convert it entirely to work.

For an isolated system ($\delta Q = 0$ throughout), the Clausius inequality gives $\oint \delta S \ge 0$ (with the sign convention that $\Delta S_\text{irr} \ge \Delta S_\text{rev}$). The entropy of an isolated system never decreases.

### Entropy statement of the second law

The second law can be stated in two equivalent ways:

**Local form**: the entropy change of a system plus its surroundings is non-negative,

$$\Delta S_\text{total} = \Delta S_\text{system} + \Delta S_\text{surroundings} \ge 0.$$

**Differential form**: the total entropy production is non-negative,

$$d S_\text{total} = d S_\text{system} + d S_\text{surroundings} \ge 0.$$

The total entropy of an isolated system can only stay the same (reversible processes) or increase (irreversible processes); it can never decrease.

### Entropy of the canonical processes

For an ideal gas:

**Isothermal expansion** from $V_1$ to $V_2$ at temperature $T$:

$$\Delta S = n R \ln(V_2 / V_1).$$

The entropy change is positive on expansion ($V_2 > V_1$). The system absorbs heat $Q = n R T \ln(V_2 / V_1)$ from the reservoir, increasing its entropy. The reservoir loses the same amount of heat, with $\Delta S_\text{reservoir} = -Q / T = -n R \ln(V_2 / V_1)$. The total entropy change is zero, as expected for a reversible process.

**Free expansion** (irreversible) from $V_1$ to $V_2$ in an isolated system. The state is the same as after the isothermal expansion, so $\Delta S = n R \ln(V_2 / V_1)$. But the surroundings do not change (the system is isolated), so $\Delta S_\text{total} = n R \ln(V_2 / V_1) > 0$. The irreversible process has the same entropy change for the system as the reversible process, but the total entropy increases.

**Heating at constant volume** from $T_1$ to $T_2$:

$$\Delta S = n c_{V,m} \ln(T_2 / T_1).$$

**Heating at constant pressure** from $T_1$ to $T_2$:

$$\Delta S = n c_{p,m} \ln(T_2 / T_1).$$

**Phase transition** at temperature $T$ with latent heat $L$ per mole:

$$\Delta S = n L / T.$$

The entropy of vaporisation of water at $100 °C$ is $\Delta S = (40.7 \text{ kJ/mol}) / 373 \text{ K} = 109$ J/(mol·K). The high entropy of vaporisation reflects the increased disorder of the gas phase compared with the liquid.

### Statistical interpretation

The **Boltzmann entropy formula** connects the macroscopic entropy to the microscopic number of microstates:

$$S = k_B \ln \Omega,$$

where $\Omega$ is the number of microstates consistent with the macroscopic state. A microstate is a complete specification of the positions and momenta of all the particles; a macrostate is specified by macroscopic variables (e.g. $T$, $V$, $N$).

The formula is the most general definition of entropy. The thermodynamic entropy is the statistical entropy, multiplied by $k_B \ln$. The formula is engraved on Boltzmann's tombstone in Vienna.

The entropy is a measure of the **disorder** of the system: a system with more microstates is more disordered, and has higher entropy. The second law — entropy never decreases — is the statement that isolated systems evolve toward the macrostate with the most microstates.

### Multiplicity and the macrostate

For a system with $N$ particles and total energy $E$, the number of microstates consistent with the macrostate $(N, V, E)$ is the **multiplicity** $\Omega(N, V, E)$. The multiplicity is enormous for a macroscopic system: a mole of gas has $\Omega \sim e^{N_A}$, where $N_A$ is Avogadro's number. The entropy is then $S = N_A k_B \ln(\text{some large number}) = R \ln(\text{some large number})$, a macroscopic quantity.

The multiplicity is the foundation of the statistical description of matter. The probability of a microstate is uniform across all accessible microstates (the fundamental postulate of statistical mechanics), so the probability of a macrostate is proportional to its multiplicity:

$$P(\text{macrostate}) \propto \Omega(\text{macrostate}).$$

The most probable macrostate is the one with the largest $\Omega$, and the entropy is the logarithm of that $\Omega$.

### Two-state system: a worked example

A simple system illustrates the statistical interpretation. Consider $N$ independent particles, each of which can be in one of two energy states $0$ and $\epsilon$. The total energy is $E = n \epsilon$ where $n$ is the number of particles in the upper state. The multiplicity is

$$\Omega(N, n) = \binom{N}{n} = \frac{N!}{n! (N - n)!}.$$

The entropy is

$$S = k_B \ln \Omega = k_B \ln \frac{N!}{n! (N - n)!}.$$

Using Stirling's approximation $\ln N! \approx N \ln N - N$ for large $N$:

$$S \approx k_B [N \ln N - n \ln n - (N - n) \ln(N - n)].$$

In thermal equilibrium at temperature $T$, the ratio $n / N$ is determined by the Boltzmann factor: $n / (N - n) = e^{-\epsilon / k_B T}$, so

$$n = \frac{N e^{-\epsilon / k_B T}}{1 + e^{-\epsilon / k_B T}}, \quad N - n = \frac{N}{1 + e^{-\epsilon / k_B T}}.$$

Substituting gives the equilibrium entropy. The maximum-entropy principle selects the macrostate with the most microstates, which coincides with the thermal-equilibrium distribution.

### Entropy of mixing

When two different gases are mixed, the entropy increases by

$$\Delta S_\text{mix} = -n R (x_1 \ln x_1 + x_2 \ln x_2),$$

where $x_1, x_2$ are the mole fractions. The mixing entropy is positive because the gases occupy a larger volume after mixing; the multiplicity is much larger.

The mixing entropy is the basis of the second law of thermodynamics applied to solutions, alloys, and the atmosphere. It explains why gases mix spontaneously but do not unmix spontaneously.

### Entropy and the third law

The **third law of thermodynamics** states: the entropy of a perfect crystal at absolute zero is exactly zero.

The argument: a perfect crystal at $T = 0$ has a unique ground state (a single microstate), so $\Omega = 1$ and $S = k_B \ln 1 = 0$. The third law is the basis of the absolute determination of entropy: by measuring the heat capacity from $T = 0$ to the temperature of interest and integrating $C_p / T$, the absolute entropy is obtained (with the addition of any latent heats of phase transitions).

The third law also implies the unattainability of absolute zero: cooling a body to $T = 0$ would require the removal of all entropy, but the entropy of a finite system is a non-trivial function of the state, and the cooling can be made arbitrarily close to $T = 0$ but not exactly $T = 0$.

### Irreversibility and the arrow of time

The second law gives a direction to time: entropy increases in the forward direction of time. The microscopic laws of physics (Newton's, Maxwell's, Schrödinger's) are time-reversal invariant, so a movie of microscopic motion run backwards is also a valid movie. The macroscopic direction of time is the direction of increasing entropy.

The connection between microscopic time-reversal invariance and macroscopic time asymmetry is one of the deepest puzzles in physics. The standard resolution is that the universe started in a state of very low entropy (the Big Bang) and has been increasing its entropy ever since; the second law is the result of the initial conditions, not of the microscopic laws.

### Entropy in astrophysics

The entropy of the universe is dominated by the cosmic microwave background and by the supermassive black holes. The entropy of the CMB is about $10^{88} k_B$; the entropy of a single supermassive black hole is about $10^{91} k_B$, larger by three orders of magnitude. The total entropy of the universe is approximately $10^{103} k_B$, dominated by black holes.

The second law applied to the universe says that the total entropy will continue to increase, asymptotically approaching a "heat death" in which all matter is at the same temperature and no useful work can be extracted. The timescale is enormously long: of order $10^{100}$ years.

### Entropy in information theory

The **Shannon entropy** in information theory,

$$H = -\sum_i p_i \log_2 p_i,$$

has the same mathematical form as the Boltzmann entropy, with the logarithm base 2 (so $H$ is in bits) and the probabilities $p_i$ summing to 1. The Shannon entropy is the average information content of a message; the Boltzmann entropy is the logarithm of the multiplicity. The connection is more than formal: the Landauer limit in computing, the Bekenstein–Hawking entropy of black holes, and the Maxwell demon paradox are all resolved by recognising the entropy cost of information processing.

## Key Ideas

- Entropy: state function with $dS = \delta Q_\text{rev} / T$ in reversible processes.
- Clausius inequality: $\oint \delta Q / T \le 0$; entropy of an isolated system never decreases.
- Entropy of canonical processes: $\Delta S = n R \ln(V_2 / V_1)$ (isothermal), $n c \ln(T_2 / T_1)$ (heating), $n L / T$ (phase transition).
- Boltzmann entropy: $S = k_B \ln \Omega$.
- Multiplicity: the number of microstates consistent with a macrostate; the macrostate with the largest $\Omega$ is the most probable.
- Third law: $S = 0$ for a perfect crystal at $T = 0$.
- The arrow of time: entropy increases in the forward direction of macroscopic time.

## Worked Examples

### Example 1 — Isothermal expansion

A monatomic ideal gas ($n = 1$ mol) is expanded isothermally at $T = 300$ K from $V_1 = 10$ L to $V_2 = 20$ L. Find $\Delta S$ of the gas and of the reservoir.

**Solution.** $\Delta S_\text{gas} = n R \ln(V_2 / V_1) = 1 \times 8.314 \times \ln 2 = 5.76$ J/K. The gas absorbs $Q = n R T \ln 2 = 1729$ J. The reservoir loses this heat: $\Delta S_\text{reservoir} = -Q / T = -1729 / 300 = -5.76$ J/K. The total $\Delta S = 0$, consistent with a reversible process. ✓

### Example 2 — Heating water

Find the entropy change of $1$ kg of water heated from $20 °C$ to $80 °C$. Take $c_p = 4186$ J/(kg·K) (approximately constant).

**Solution.** $\Delta S = m c_p \ln(T_2 / T_1) = 1 \times 4186 \times \ln(353/293) = 4186 \times 0.1863 \approx 780$ J/K. The water absorbs $Q = m c_p \Delta T = 1 \times 4186 \times 60 = 251$ kJ. The reservoir (e.g. a heater at $T \approx 1000$ K) loses this heat, with $\Delta S_\text{reservoir} = -251000 / 1000 = -251$ J/K. The total $\Delta S = 780 - 251 = 529$ J/K > 0, consistent with an irreversible process. ✓

### Example 3 — Two-state multiplicity

For $N = 100$ particles with $n = 50$ in the upper state, compute the multiplicity using Stirling's approximation.

**Solution.** $\Omega = \binom{100}{50} = 100! / (50! 50!)$. Using Stirling: $\ln \Omega \approx N \ln N - n \ln n - (N - n) \ln(N - n) = 100 \ln 100 - 50 \ln 50 - 50 \ln 50 = 100 \times 4.605 - 100 \times 3.912 = 460.5 - 391.2 = 69.3$. So $\Omega \approx e^{69.3} \approx 10^{30}$. The entropy is $S = k_B \ln \Omega = 1.38 \times 10^{-23} \times 69.3 \approx 9.6 \times 10^{-22}$ J/K.

## Common Misconceptions

- **"Entropy is disorder."** It is a measure of the number of microstates, which is loosely correlated with disorder but is not the same thing. A glass of water has more entropy than an ice cube at the same temperature, but a crystal of a complex molecule can have more entropy than a glass of a simple one.
- **"The second law says entropy always increases."** It says the total entropy of an isolated system increases or stays the same. The entropy of a system can decrease (e.g. a refrigerator) if the surroundings' entropy increases more.
- **"Entropy is conserved."** No. Entropy is produced in irreversible processes. The total entropy of an isolated system increases monotonically.
- **"$S = k_B \ln \Omega$ is a definition."** It is a deep connection between macroscopic thermodynamics and microscopic statistical mechanics. The connection can be derived from the postulates of statistical mechanics; it is not a tautology.
- **"The third law means entropy is always positive."** It means entropy approaches zero as $T \to 0$. At higher temperatures, entropy is positive for typical systems (the multiplicity is large).

## Connections

- Entropy is the central concept of thermodynamics; the rest of the course refines and extends it.
- The statistical interpretation connects thermodynamics to microscopic physics.
- The entropy of mixing explains solution chemistry, atmospheric composition, and many engineering processes.
- The third law sets the absolute scale of entropy and the limit of low-temperature physics.
- The arrow of time is one of the deepest puzzles in physics; the second law is a phenomenological statement of the asymmetry.
- The information-theory entropy is the same mathematical object, applied to messages and computation.

## Quick Check

1. Define entropy as a state function.
2. State the Clausius inequality.
3. Compute the entropy change of $2$ mol of a monatomic ideal gas heated at constant volume from $300$ K to $600$ K.
4. State the Boltzmann entropy formula and explain its meaning.
5. State the third law of thermodynamics.

## Takeaway

- Entropy is a state function; $dS = \delta Q_\text{rev} / T$ in reversible processes.
- The Clausius inequality and the entropy statement are the two forms of the second law.
- The entropy of canonical processes is computed by reversible paths.
- The Boltzmann entropy $S = k_B \ln \Omega$ is the statistical interpretation.
- The third law sets the absolute scale of entropy.
- The arrow of time is connected to the second law through the initial conditions of the universe.
