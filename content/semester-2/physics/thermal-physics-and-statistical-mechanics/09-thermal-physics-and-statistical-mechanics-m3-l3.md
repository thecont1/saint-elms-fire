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
lessonId: thermal-physics-and-statistical-mechanics-m3-l3
lessonName: Free Energies, Phase Transitions and Applications
lessonNumber: 9
moduleNumber: 3
semesterNumber: 2
difficulty: advanced
estimatedStudyMinutes: 55
releaseOrder: 9
prerequisites:
  - thermal-physics-and-statistical-mechanics-m3-l2
learningObjectives:
  - Define the Helmholtz free energy, the Gibbs free energy, and the grand potential.
  - Apply the Clausius–Clapeyron equation to phase coexistence curves.
  - Describe first-order and second-order phase transitions and the Ising model.
concepts:
  - Helmholtz free energy
  - Gibbs free energy
  - Grand potential
  - Clausius-Clapeyron equation
  - First-order phase transition
  - Second-order phase transition
tags:
  - physics
  - statistical-mechanics
  - free-energy
  - phase-transitions
sourceType: authored-courseware
assessmentHints:
  - conceptual
  - derivation
  - problem-solving
  - short-answer
***

# Free Energies, Phase Transitions and Applications

## Overview

The free energies are the natural state functions for systems in contact with reservoirs of temperature, pressure, or both. The lesson develops the Helmholtz free energy $F = U - TS$ (constant-$T$, constant-$V$), the Gibbs free energy $G = H - TS$ (constant-$T$, constant-$p$), and the grand potential $\Omega = -pV$ (constant-$T$, constant-$\mu$). The lesson then applies the Gibbs free energy to phase coexistence, deriving the Clausius–Clapeyron equation for the slope of the coexistence curve. The lesson closes with a survey of phase transitions: first-order (latent heat, discontinuous $S$ and $V$), second-order (continuous $S$ and $V$, divergent heat capacity), and the Ising model as a prototype. The lesson is the gateway to materials science, atmospheric physics, and the statistical mechanics of complex systems.

## Learning Path

- **What you should already know**: the entropy and the second law (Lesson m2-l3); the Boltzmann distribution and the partition function (Lessons m3-l1 and m3-l2); the chemical potential and the first law.
- **What this lesson adds**: the three thermodynamic potentials; the conditions for equilibrium; the Clausius–Clapeyron equation; first- and second-order phase transitions; the Ising model.
- **What later lessons this will unlock**: the application of these tools throughout the physics sequence (statistical physics, condensed matter, astrophysics).

## Core Explanation

### The Legendre transform and thermodynamic potentials

The internal energy $U(S, V, N)$ is a function of the natural variables entropy, volume, and particle number. To switch to a different set of natural variables, use the **Legendre transform**:

- **Helmholtz free energy** $F(T, V, N)$: $F = U - TS = U + (\partial U / \partial S) \cdot (-S)$. The natural variables are $T, V, N$.
- **Gibbs free energy** $G(T, p, N)$: $G = U + pV - TS$. The natural variables are $T, p, N$.
- **Grand potential** $\Omega(T, V, \mu)$: $\Omega = U - TS - \mu N$. The natural variables are $T, V, \mu$.
- **Enthalpy** $H(S, p, N)$: $H = U + pV$. The natural variables are $S, p, N$.

Each potential is convex in its natural variables (a consequence of the second law), and the natural variables are the ones held constant in typical laboratory conditions.

### The Helmholtz free energy

The **Helmholtz free energy** $F = U - TS$ is the natural potential for systems in contact with a thermal reservoir at fixed $T$ (and fixed $V$ and $N$). Its differential is

$$dF = -S\, dT - p\, dV + \mu\, dN,$$

giving the natural relations $S = -(\partial F / \partial T)_{V,N}$, $p = -(\partial F / \partial V)_{T,N}$, $\mu = (\partial F / \partial N)_{T,V}$.

The minimum of $F$ at fixed $T, V, N$ characterises equilibrium: a system held at fixed $T, V$ evolves to minimise $F$, just as an isolated system evolves to maximise $S$.

From the partition function, $F = -k_B T \ln Z$. So computing $Z$ immediately gives $F$, and all the other thermodynamic quantities follow by differentiation.

### The Gibbs free energy

The **Gibbs free energy** $G = H - TS = U + pV - TS$ is the natural potential for systems in contact with a thermal and pressure reservoir at fixed $T$ and $p$. Its differential is

$$dG = -S\, dT + V\, dp + \mu\, dN,$$

giving $S = -(\partial G / \partial T)_{p,N}$, $V = (\partial G / \partial p)_{T,N}$, $\mu = (\partial G / \partial N)_{T,p}$.

The minimum of $G$ at fixed $T, p, N$ characterises equilibrium at constant temperature and pressure. The Gibbs free energy is the most useful potential in chemistry, where most reactions occur at constant $T$ and $p$.

For an ideal gas, $G(T, p, N) = N k_B T [\ln(p \lambda^3 / k_B T) - \ln N + \text{const}]$, a useful starting point for chemical equilibrium calculations.

### The grand potential

The **grand potential** $\Omega = U - TS - \mu N = -pV$ is the natural potential for systems in contact with a thermal and particle reservoir at fixed $T$ and $\mu$. Its differential is

$$d\Omega = -S\, dT - p\, dV - N\, d\mu,$$

and the grand potential is related to the grand partition function by $\Omega = -k_B T \ln \mathcal{Z}$, where $\mathcal{Z} = \sum_{N, i} e^{-\beta (E_i - \mu N)}$.

The grand potential is the natural potential for open systems (e.g. photons in a cavity, where the number of photons is not fixed) and for systems with variable particle number (chemical reactions, evaporation, condensation).

### Equilibrium conditions

The equilibrium state of a system in contact with a reservoir is the state that minimises the appropriate thermodynamic potential:

- Constant $T, V, N$: minimise $F$.
- Constant $T, p, N$: minimise $G$.
- Constant $T, V, \mu$: minimise $\Omega$.

For two systems in thermal contact (constant total $T$ and $V$), the equilibrium condition is that the temperatures are equal. For two systems in mechanical contact (constant total $V$ but variable volumes), the equilibrium condition is that the pressures are equal. For two systems that can exchange particles, the equilibrium condition is that the chemical potentials are equal.

The general principle: at equilibrium, the intensive variables ($T$, $p$, $\mu$) are uniform across the system.

### Phase coexistence

A **phase** is a region of a system with uniform physical properties. Common phases: solid, liquid, gas, but also more exotic phases (ferromagnetic, superconducting, superfluid, etc.). Different phases of the same substance can coexist in equilibrium, separated by sharp boundaries.

The condition for two phases (say, liquid and gas) to coexist in equilibrium is that the temperatures, pressures, and chemical potentials are equal:

$$T_\text{liq} = T_\text{gas}, \quad p_\text{liq} = p_\text{gas}, \quad \mu_\text{liq}(T, p) = \mu_\text{gas}(T, p).$$

The third condition is a single equation in two unknowns ($T$ and $p$), so the solution is a curve in the $(T, p)$ plane: the **phase coexistence curve**. The curve is one-dimensional because the equality of chemical potentials gives one equation relating $T$ and $p$.

### Clausius–Clapeyron equation

The **Clausius–Clapeyron equation** gives the slope of the phase coexistence curve:

$$\frac{dp}{dT} = \frac{L}{T \Delta v},$$

where $L$ is the latent heat of the transition (per unit mass or per mole) and $\Delta v$ is the change in specific volume. The equation is exact for first-order phase transitions.

For the liquid-gas transition, $L$ is the latent heat of vaporisation and $\Delta v = v_\text{gas} - v_\text{liq}$. Far from the critical point, $v_\text{gas} \gg v_\text{liq}$ and the ideal gas law gives $v_\text{gas} = R T / p M$ (with $M$ the molar mass). Substituting:

$$\frac{dp}{dT} = \frac{L M p}{R T^2}.$$

Integrating (assuming $L$ is approximately constant):

$$p(T) = p_0 \exp\left(\frac{L M}{R}\left(\frac{1}{T_0} - \frac{1}{T}\right)\right).$$

The boiling point is the temperature at which the saturation pressure equals the atmospheric pressure.

For the solid-liquid transition, the change in volume is small, and the slope $dp/dT$ is large (a small change in $T$ corresponds to a large change in $p$).

For water, the solid-liquid line has a *negative* slope (because ice is less dense than water, $\Delta v < 0$). This is unusual and is the basis of many phenomena: ice floats, ice skates work, frost wedging breaks rocks, and aquatic life survives under ice.

### First-order phase transitions

A **first-order phase transition** is one in which the first derivatives of the Gibbs free energy ($S$ and $V$) are discontinuous. The transition involves a latent heat $L = T \Delta S$ and a change in volume $\Delta V$. Examples: melting, boiling, sublimation, condensation, the ferromagnetic transition at the Curie temperature (in mean-field theory).

At a first-order transition, the two phases coexist over a range of conditions. The phase diagram shows regions of single-phase stability separated by coexistence curves. The triple point is where three phases coexist; the critical point is the terminus of the liquid-gas coexistence curve.

### Second-order phase transitions

A **second-order phase transition** (or continuous transition) is one in which $S$ and $V$ are continuous but their derivatives ($C_p$, $\alpha$, $\kappa_T$) are discontinuous or divergent. There is no latent heat, but the heat capacity and other response functions show characteristic critical behaviour.

Examples: the superfluid transition in helium-4 at the $\lambda$-point, the superconducting transition at the critical temperature, the Curie point of a uniaxial ferromagnet, the order–disorder transition in alloys.

Near a second-order transition, the response functions show power-law divergences: $C_p \propto |T - T_c|^{-\alpha}$, $\xi \propto |T - T_c|^{-\nu}$ (correlation length), $\chi \propto |T - T_c|^{-\gamma}$ (susceptibility). The exponents are universal (depend on symmetry and dimensionality, not on microscopic details), the central subject of **renormalisation group theory**.

### The Ising model

The **Ising model** is a prototype of a phase transition. The Hamiltonian is

$$H = -J \sum_{\langle i, j \rangle} s_i s_j - h \sum_i s_i,$$

where $s_i = \pm 1$ are spins on a lattice, $J$ is the coupling (ferromagnetic if $J > 0$), and $h$ is the external field. The first sum is over nearest-neighbour pairs.

The 1D Ising model has no phase transition at finite temperature. The 2D Ising model, solved exactly by Onsager in 1944, has a phase transition at $T_c / J = 2 / \ln(1 + \sqrt{2}) \approx 2.269$. The 3D Ising model has been studied numerically and has $T_c / J \approx 4.51$.

The Ising model is the workhorse of statistical mechanics: it is simple enough to be solvable in some cases and rich enough to exhibit the essential features of phase transitions. The model is also a basis for the study of magnetism, alloys, neural networks, and other complex systems.

### Critical exponents and universality

Near the critical point, the response functions have power-law behaviour with **critical exponents**. The exponents are not independent: they are related by **scaling relations** (e.g. $\alpha + 2 \beta + \gamma = 2$, the Rushbrooke inequality). The same exponents describe the critical behaviour of many different systems — the basis of **universality**.

The universality classes are characterised by the symmetry of the order parameter (scalar, vector, complex), the dimensionality of space, and the range of the interaction. The 3D Ising model (scalar order parameter, short-range interaction) is in the same universality class as the liquid-gas critical point and the Curie point of a uniaxial ferromagnet.

### Order parameters

An **order parameter** is a quantity that is zero in the disordered phase and non-zero in the ordered phase. Examples:

- Magnetisation $M$ for a ferromagnet.
- Difference in density $\Delta \rho = \rho_\text{liq} - \rho_\text{gas}$ for the liquid-gas transition.
- Superfluid density $\rho_s$ for superfluid helium.
- Amplitude of the superconducting gap $\Delta$ for a superconductor.

The order parameter is the central quantity for characterising the phase transition. Its behaviour near $T_c$ defines the critical exponent $\beta$: $M \propto |T - T_c|^\beta$ for $T < T_c$.

### Mean-field theory

**Mean-field theory** is the simplest approximation for a phase transition: each spin interacts with the average magnetisation rather than with its specific neighbours. The self-consistency equation is $M = \tanh(\beta (J z M + h))$, where $z$ is the coordination number.

Mean-field theory predicts a phase transition in any dimension, with critical exponents that are independent of dimensionality. The predictions are exact in $d = 4$ (the upper critical dimension) and above, but inaccurate in $d = 2$ and $d = 3$. The renormalisation group explains why: fluctuations are negligible in $d \ge 4$ but important in $d < 4$.

### Applications

The free energies and the Clausius–Clapeyron equation are used in:

- **Materials science**: phase diagrams of alloys, melting and boiling points, the design of materials with specific properties.
- **Atmospheric physics**: the water-vapour saturation pressure, the boiling point at altitude, the formation of clouds and rain.
- **Astrophysics**: the equation of state of stellar interiors, the phase transitions in neutron stars, the chemical composition of the early universe.
- **Chemistry**: the equilibrium composition of reaction mixtures, the phase behaviour of solutions.

The statistical mechanics of phase transitions is one of the great achievements of 20th-century physics, and the foundation of modern materials science.

## Key Ideas

- Thermodynamic potentials: $F = U - TS$, $G = H - TS$, $\Omega = U - TS - \mu N$.
- Equilibrium: minimum of the appropriate potential at fixed natural variables.
- Phase coexistence: equality of $\mu$, $T$, $p$ across phases.
- Clausius–Clapeyron: $dp/dT = L / (T \Delta v)$.
- First-order transitions: latent heat, discontinuous $S$ and $V$.
- Second-order transitions: divergent response functions, critical exponents, universality.
- The Ising model: a prototype of a phase transition; mean-field theory and the renormalisation group.
- Applications: materials science, atmospheric physics, astrophysics, chemistry.

## Worked Examples

### Example 1 — Boiling point of water at altitude

The latent heat of vaporisation of water is $L = 2260$ kJ/kg. At $T_0 = 373$ K, $p_0 = 1$ atm. Estimate the boiling point at an altitude where the atmospheric pressure is $0.8$ atm.

**Solution.** $\ln(p / p_0) = (L M / R)(1 / T_0 - 1 / T)$. $L M / R = 2260 \times 10^3 \times 0.018 / 8.314 = 4893$ K. $\ln(0.8) = -0.223 = 4893 (1/373 - 1/T)$. $1/373 = 0.00268$. $1/T = 0.00268 + 0.223 / 4893 = 0.00268 + 0.0000456 = 0.002726$. $T = 367$ K $\approx 94 °C$. The boiling point is lower at altitude, as expected.

### Example 2 — Mean-field critical temperature

For an Ising model with coordination number $z$ and coupling $J$, the mean-field critical temperature is $k_B T_c = z J$. For a 3D simple cubic lattice, $z = 6$, so $T_c = 6 J / k_B$. For a 2D square lattice, $z = 4$, $T_c = 4 J / k_B$ (mean-field), but the exact value is $T_c = 2.269 J / k_B$. The mean-field theory overestimates $T_c$ by a factor of about $1.77$ in 2D.

### Example 3 — Clausius–Clapeyron for water-ice

For the water-ice transition at $0 °C$, $L = 333$ kJ/kg, $\Delta v = v_\text{water} - v_\text{ice} = 1.000 - 1.091 = -0.091$ cm$^3$/g $= -9.1 \times 10^{-8}$ m$^3$/kg. Compute $dp/dT$ at $T = 273$ K.

**Solution.** $dp/dT = L / (T \Delta v) = 333 \times 10^3 / (273 \times (-9.1 \times 10^{-8})) = 333 \times 10^3 / (-2.48 \times 10^{-5}) = -1.34 \times 10^{10}$ Pa/K. The negative slope indicates that increasing pressure favours ice (the denser phase at higher pressure is ice, which is denser under pressure because the slope of the coexistence line is negative). This is the basis of ice skating: the pressure of the skate blade lowers the melting point, and a thin film of liquid water forms under the blade, providing lubrication.

## Common Misconceptions

- **"Phase transitions occur at a single temperature."** First-order transitions occur over a range of conditions (the coexistence curve); only at the critical point is there a single temperature.
- **"The Clausius–Clapeyron equation is approximate."** It is exact for first-order phase transitions, given the latent heat and the change in specific volume.
- **"All phase transitions have latent heat."** Only first-order transitions. Second-order transitions have a divergent heat capacity but no latent heat.
- **"Mean-field theory is exact in 3D."** It is approximate; the exact critical exponents differ from the mean-field values by a few percent in 3D, and by larger amounts in lower dimensions.
- **"The Ising model is only for magnetism."** It is a prototype of any two-state system with nearest-neighbour interactions: alloys, lattice gases, neural networks, opinion dynamics.

## Connections

- The thermodynamic potentials are the natural state functions for systems in contact with reservoirs; they are the foundation of all of equilibrium thermodynamics.
- The Clausius–Clapeyron equation is the workhorse of phase-equilibrium calculations; it appears in materials science, atmospheric physics, and astrophysics.
- The Ising model is a prototype of a phase transition; its exact solution in 2D (Onsager) and the renormalisation group analysis in any dimension are landmarks of theoretical physics.
- Critical phenomena and universality are the foundation of modern condensed-matter physics.
- The free energies and phase transitions appear in every area of physics that deals with matter in bulk.

## Quick Check

1. Define the Helmholtz free energy and the Gibbs free energy.
2. State the Clausius–Clapeyron equation.
3. What is the slope of the ice-water coexistence line at $0 °C$? Why is it negative?
4. Distinguish first-order and second-order phase transitions.
5. What is the order parameter for the ferromagnetic transition?

## Takeaway

- The thermodynamic potentials are the natural state functions for systems in contact with reservoirs.
- The Clausius–Clapeyron equation gives the slope of the phase coexistence curve.
- First-order transitions have latent heat; second-order transitions have divergent response functions.
- The Ising model is a prototype of a phase transition; mean-field theory and the renormalisation group are the standard analytical tools.
- Phase transitions are central to materials science, atmospheric physics, astrophysics, and chemistry.
- Critical exponents and universality connect disparate physical systems.
