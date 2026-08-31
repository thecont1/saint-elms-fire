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
lessonId: thermal-physics-and-statistical-mechanics-m2-l1
lessonName: Kinetic Theory of Gases
lessonNumber: 4
moduleNumber: 2
semesterNumber: 2
difficulty: intermediate
estimatedStudyMinutes: 50
releaseOrder: 4
prerequisites:
  - thermal-physics-and-statistical-mechanics-m1-l3
learningObjectives:
  - Derive the ideal gas law and the equipartition theorem from kinetic theory.
  - Compute the mean free path, collision rate, and transport coefficients of a dilute gas.
  - Connect microscopic molecular properties to macroscopic thermodynamic quantities.
concepts:
  - Kinetic theory
  - Equipartition theorem
  - Mean free path
  - Collision cross-section
  - Transport coefficients
  - Maxwell–Boltzmann distribution
tags:
  - physics
  - thermodynamics
  - kinetic-theory
  - statistical-mechanics
sourceType: authored-courseware
assessmentHints:
  - conceptual
  - derivation
  - problem-solving
  - short-answer
***

# Kinetic Theory of Gases

## Overview

Kinetic theory derives the macroscopic properties of a gas from the microscopic motion of its molecules. The lesson develops the basic postulates of kinetic theory, derives the ideal gas law, the equipartition theorem, the Maxwell–Boltzmann speed distribution, and the transport coefficients (viscosity, thermal conductivity, diffusion). The mean free path and collision rate are derived from the molecular cross-section. The lesson is the bridge between the macroscopic thermodynamics of Modules 1 and 3 and the statistical mechanics of Module 3; the Maxwell–Boltzmann distribution is the foundation of the statistical description of gases.

## Learning Path

- **What you should already know**: the ideal gas law (Lesson m1-l2); the first law and the heat capacities (Lesson m1-l3); basic probability (averages, distributions).
- **What this lesson adds**: the kinetic-theory derivation of the ideal gas law; the equipartition theorem; the Maxwell–Boltzmann distribution; the mean free path and collision rate; the transport coefficients.
- **What later lessons this will unlock**: the second law and the Carnot cycle (Lesson m2-l2); entropy and the statistical interpretation (Lesson m2-l3); the Boltzmann distribution and partition functions (Module 3).

## Core Explanation

### Postulates of kinetic theory

Kinetic theory is based on a small number of postulates:

1. The gas is composed of a large number of identical particles in random motion.
2. The particles are much smaller than the average distance between them (the dilute-gas limit).
3. The particles interact only through brief, elastic collisions; between collisions they move in straight lines.
4. The collisions with the walls are elastic; the time spent in collision is negligible.
5. The gas is in thermal equilibrium: the macroscopic state is time-independent.

Under these postulates, the macroscopic quantities of the gas (pressure, temperature, internal energy) are statistical averages over the microscopic motion.

### Derivation of the ideal gas law

Consider $N$ point particles in a cubical box of side $L$ and volume $V = L^3$. A particle moving with speed $v_x$ in the $x$-direction bounces off the walls perpendicular to $x$, reversing $v_x$ on each collision. The momentum change per collision is $2 m v_x$ (where $m$ is the particle mass); the time between collisions with the same wall is $2 L / v_x$; the average force on the wall from this particle is $2 m v_x / (2 L / v_x) = m v_x^2 / L$. Summing over all particles and dividing by the wall area $L^2$:

$$p = \frac{N m \langle v_x^2 \rangle}{L^3} = \frac{N m \langle v_x^2 \rangle}{V},$$

where $\langle v_x^2 \rangle$ is the mean square of the $x$-component of velocity. By symmetry, $\langle v_x^2 \rangle = \langle v_y^2 \rangle = \langle v_z^2 \rangle = \langle v^2 \rangle / 3$. So

$$p V = \frac{N m \langle v^2 \rangle}{3}.$$

The kinetic-theory result $p V = (2/3) N \langle K \rangle$ where $\langle K \rangle = (1/2) m \langle v^2 \rangle$ is the average kinetic energy. Comparing with the ideal gas law $p V = N k_B T$:

$$\langle K \rangle = \frac{3}{2} k_B T.$$

This is the kinetic interpretation of temperature: the average translational kinetic energy per molecule is $(3/2) k_B T$, independent of the particle mass or the gas. The total internal energy of a monatomic ideal gas is $U = N \langle K \rangle = (3/2) N k_B T = (3/2) n R T$, giving $C_V = (3/2) n R$ as expected.

### RMS speed

The **root-mean-square speed** is

$$v_\text{rms} = \sqrt{\langle v^2 \rangle} = \sqrt{\frac{3 k_B T}{m}} = \sqrt{\frac{3 R T}{M}},$$

where $M$ is the molar mass. At $T = 300$ K: $v_\text{rms}$ is about $517$ m/s for nitrogen ($M = 0.028$ kg/mol), $1840$ m/s for hydrogen ($M = 0.002$ kg/mol), and $160$ m/s for a heavy gas like xenon ($M = 0.131$ kg/mol).

The RMS speed is a measure of the "typical" molecular speed; the actual distribution of speeds is described by the Maxwell–Boltzmann distribution.

### Equipartition theorem

The **equipartition theorem** states: at thermal equilibrium, each quadratic degree of freedom of a molecule contributes $\frac{1}{2} k_B T$ to the average energy per molecule.

The total average energy per molecule is $\frac{1}{2} k_B T$ times the number of quadratic degrees of freedom $f$. Examples:

- Monatomic gas (3 translational): $\langle E \rangle = (3/2) k_B T$.
- Diatomic gas at ordinary temperatures (3 translational + 2 rotational): $\langle E \rangle = (5/2) k_B T$.
- Diatomic gas at high temperatures (3 + 2 + 2 vibrational): $\langle E \rangle = (7/2) k_B T$.
- Solid (3 translational + 3 potential from lattice): $\langle E \rangle = 3 k_B T$ (Dulong–Petit law for the molar heat capacity).

The equipartition theorem is a classical result; it fails at low temperatures, where quantum effects freeze out the higher-energy degrees of freedom. The quantum mechanical generalisation involves the Bose–Einstein and Fermi–Dirac distributions (advanced).

### Maxwell–Boltzmann speed distribution

The **Maxwell–Boltzmann speed distribution** gives the probability density of a molecule having a speed in $[v, v + d v]$:

$$f(v) = 4 \pi n \left(\frac{m}{2 \pi k_B T}\right)^{3/2} v^2 e^{-m v^2 / 2 k_B T},$$

where $n$ is the number density. The distribution is normalised: $\int_0^\infty f(v)\, dv = n$.

The most probable speed (peak of the distribution) is

$$v_p = \sqrt{\frac{2 k_B T}{m}}.$$

The mean speed is

$$\langle v \rangle = \sqrt{\frac{8 k_B T}{\pi m}}.$$

The RMS speed is $v_\text{rms} = \sqrt{3 k_B T / m}$ (as derived above). The three speeds are related by $v_p < \langle v \rangle < v_\text{rms}$.

The distribution broadens with temperature (higher temperature means a wider range of speeds) and shifts to higher speeds.

### Mean free path and collision rate

The **mean free path** $\lambda$ is the average distance a molecule travels between collisions. For a gas of hard-sphere molecules of diameter $d$ at number density $n$:

$$\lambda = \frac{1}{\sqrt{2} \pi d^2 n}.$$

The factor $\sqrt{2}$ accounts for the relative motion of the colliding molecules.

The **collision rate** (number of collisions per unit time per molecule) is

$$z = \frac{\langle v \rangle}{\lambda} = \sqrt{2} \pi d^2 n \langle v \rangle.$$

For air at STP, $\lambda \approx 68$ nm and $z \approx 7 \times 10^9$ s$^{-1}$: a molecule collides about $7$ billion times per second and travels about $68$ nm between collisions. The mean free path is much smaller than the macroscopic dimensions of typical containers, which is why gases are well described by macroscopic thermodynamics in everyday situations.

### Transport coefficients

Kinetic theory predicts the transport coefficients of a dilute gas in terms of molecular properties.

**Viscosity** $\eta$. The momentum flux between layers of gas moving with different velocities gives a shear stress $\tau = \eta (d v / d z)$. The kinetic-theory result is

$$\eta = \frac{1}{3} \rho \langle v \rangle \lambda,$$

where $\rho = m n$ is the mass density. Since $\lambda \propto 1/n$ and $\langle v \rangle \propto \sqrt{T}$, the viscosity is independent of density to first approximation and increases with $\sqrt{T}$. The independence of density is counterintuitive but observed.

**Thermal conductivity** $\kappa$. The heat flux between regions of different temperature is $q = -\kappa (d T / d z)$. The kinetic-theory result is

$$\kappa = \frac{1}{3} \rho c_V \langle v \rangle \lambda,$$

where $c_V$ is the specific heat capacity (per unit mass). The thermal conductivity is also roughly independent of density.

**Diffusion coefficient** $D$. The flux of particles from a region of high concentration to low concentration is $J = -D (d n / d z)$. The kinetic-theory result is

$$D = \frac{1}{3} \langle v \rangle \lambda.$$

The three transport coefficients are related: $\eta / (\rho D) = 1$ (with some numerical factors depending on the model) and $\kappa / (\eta c_V) = 1$. The relationships are approximate; more accurate treatments give different numerical factors.

### Viscosity and the mean free path

The mean free path and the viscosity are linked in an important way. As the density of the gas decreases, $\lambda$ increases. At very low density, the mean free path becomes comparable to the size of the apparatus; the gas is no longer in the continuum regime, and the viscosity is no longer independent of density. This is the regime of molecular flow (or Knudsen flow), which is important in vacuum technology and in the study of the upper atmosphere.

For a long cylindrical tube of radius $R$ and length $L$, the Poiseuille flow rate scales as $\Delta p R^4 / (\eta L)$; the regime of validity requires $\lambda \ll R$. When $\lambda \gg R$, the flow becomes molecular, with a different scaling.

### Viscosity of mixtures

The viscosity of a gas mixture is not a simple average of the viscosities of the components. The kinetic theory gives a more complex combination rule (the Wilke formula in engineering). The viscosity of a gas mixture is a non-trivial function of the composition, the molecular masses, and the molecular sizes.

### Molecular sizes and the van der Waals $b$

The hard-sphere diameter $d$ that appears in the mean free path is related to the van der Waals $b$ parameter: $b = (2/3) \pi N_A d^3$. So $b$ measures four-thirds the volume of one mole of molecules. Typical values of $d$ are 0.2–0.4 nm, giving $b$ of order $10^{-5}$ m$^3$/mol.

### Evaporation and the Maxwell–Boltzmann distribution

The rate of evaporation from a liquid depends on the fraction of molecules at the surface with sufficient kinetic energy to escape. The Maxwell–Boltzmann distribution determines the fraction with $K > E_\text{escape}$ (the binding energy). The result is the Arrhenius rate law (covered in Module 3):

$$\text{rate} \propto e^{-E_\text{escape} / k_B T}.$$

The same exponential factor appears in chemical reaction rates, the thermionic emission of electrons from a hot metal, and the escape of atmospheric gases from a planet.

### Kinetic theory in astrophysics

Kinetic theory applies to stellar atmospheres and the interstellar medium, where the densities are low and the temperatures are extreme. The mean free path in the photosphere of the sun is of order $1$ cm; deeper in, the mean free path is much smaller. The radiative transfer in stellar atmospheres depends on the kinetic theory of the gas coupled with the radiative processes.

The Jeans escape from a planetary atmosphere is a kinetic-theory problem: a fraction of the molecules in the high-speed tail of the Maxwell–Boltzmann distribution can escape if their speed exceeds the escape velocity. Hydrogen escapes readily from the Earth; oxygen and nitrogen do not.

## Key Ideas

- The ideal gas law follows from kinetic theory: $p V = (2/3) N \langle K \rangle$.
- $\langle K \rangle = (3/2) k_B T$ per molecule for a monatomic ideal gas.
- Equipartition: each quadratic degree of freedom contributes $\frac{1}{2} k_B T$.
- Maxwell–Boltzmann distribution: $f(v) = 4 \pi n (m/2\pi k_B T)^{3/2} v^2 e^{-m v^2 / 2 k_B T}$.
- Mean free path: $\lambda = 1/(\sqrt{2} \pi d^2 n)$; collision rate $z = \langle v \rangle / \lambda$.
- Transport coefficients: $\eta = (1/3) \rho \langle v \rangle \lambda$, $\kappa = (1/3) \rho c_V \langle v \rangle \lambda$, $D = (1/3) \langle v \rangle \lambda$.
- Viscosity is roughly independent of density (a counterintuitive result).
- Astrophysical applications: stellar atmospheres, planetary escape, interstellar medium.

## Worked Examples

### Example 1 — RMS speed of helium

Find the RMS speed of a helium atom ($M = 0.004$ kg/mol) at $T = 300$ K.

**Solution.** $v_\text{rms} = \sqrt{3 R T / M} = \sqrt{3 \times 8.314 \times 300 / 0.004} = \sqrt{1{,}870{,}650} \approx 1368$ m/s. (Helium is light, so the RMS speed is high.)

### Example 2 — Mean free path in air

The diameter of an air molecule is about $0.3$ nm. Find the mean free path of an air molecule at STP ($T = 273$ K, $p = 1$ atm).

**Solution.** The number density is $n = p / (k_B T) = 101325 / (1.38 \times 10^{-23} \times 273) \approx 2.69 \times 10^{25}$ m$^{-3}$. The mean free path is

$$\lambda = \frac{1}{\sqrt{2} \pi d^2 n} = \frac{1}{\sqrt{2} \times \pi \times (0.3 \times 10^{-9})^2 \times 2.69 \times 10^{25}} \approx \frac{1}{1.41 \times 3.14 \times 9 \times 10^{-20} \times 2.69 \times 10^{25}} \approx \frac{1}{10.7} \approx 0.094 \text{ μm}.$$

The exact value is about $68$ nm, depending on the precise diameter. The order of magnitude is correct.

### Example 3 — Viscosity of air at STP

Estimate the viscosity of air at STP using kinetic theory. Take $d = 0.3$ nm, $M = 0.029$ kg/mol.

**Solution.** $\rho = p M / (R T) = 101325 \times 0.029 / (8.314 \times 273) \approx 1.29$ kg/m$^3$. $\langle v \rangle = \sqrt{8 R T / (\pi M)} = \sqrt{8 \times 8.314 \times 273 / (\pi \times 0.029)} \approx 458$ m/s. Using $\lambda \approx 68$ nm:

$$\eta = \frac{1}{3} \rho \langle v \rangle \lambda = \frac{1}{3} \times 1.29 \times 458 \times 68 \times 10^{-9} \approx 1.34 \times 10^{-5} \text{ Pa·s}.$$

The accepted value of the viscosity of air at STP is about $1.8 \times 10^{-5}$ Pa·s. The kinetic-theory estimate is in the right ballpark; a more accurate treatment (with the correct numerical factor and a more realistic interaction potential) improves the agreement.

## Common Misconceptions

- **"All molecules move at the RMS speed."** No. The Maxwell–Boltzmann distribution gives a range of speeds; the RMS speed is a single number that summarises the distribution.
- **"Lower density means lower viscosity."** Counterintuitively, the kinetic-theory result is that viscosity is independent of density. This is observed: at low enough density, the mean free path becomes comparable to the apparatus size, and the regime changes.
- **"The mean free path is the distance a molecule travels in $1$ second."** No. The mean free path is the average distance between collisions, not a speed. The speed is $\langle v \rangle$; the mean free path is the distance; the ratio is the collision rate.
- **"Kinetic theory proves the ideal gas law."** It derives the ideal gas law from microscopic postulates. The postulates (point particles, elastic collisions, no interactions) are the idealisations that the law encodes.
- **"Equipartition holds at all temperatures."** No. It is a classical result; quantum effects freeze out the higher-energy degrees of freedom at low temperatures.

## Connections

- Kinetic theory bridges the macroscopic and microscopic descriptions of matter.
- The Maxwell–Boltzmann distribution is the basis of the statistical mechanics developed in Module 3.
- The mean free path and transport coefficients are the foundation of fluid mechanics, vacuum technology, and plasma physics.
- The kinetic-theory picture is the basis of the kinetic theory of gases in astrophysics (stellar atmospheres, planetary escape, interstellar medium).
- The equipartition theorem's failure at low temperature is the gateway to quantum statistical mechanics (Bose–Einstein and Fermi–Dirac distributions).

## Quick Check

1. Derive the ideal gas law from kinetic theory.
2. State the equipartition theorem and apply it to a diatomic gas.
3. Find the RMS speed of an oxygen molecule ($M = 0.032$ kg/mol) at $300$ K.
4. Estimate the mean free path of a nitrogen molecule at STP.
5. State the kinetic-theory predictions for the viscosity, thermal conductivity, and diffusion coefficient.

## Takeaway

- Kinetic theory derives macroscopic gas properties from molecular motion.
- The equipartition theorem gives heat capacities in terms of degrees of freedom.
- The Maxwell–Boltzmann distribution describes the distribution of molecular speeds.
- The mean free path and transport coefficients connect microscopic properties to macroscopic flow.
- The kinetic theory is the basis of gas dynamics, plasma physics, and astrophysics.
- Equipartition fails at low temperatures; quantum statistics is needed there.
