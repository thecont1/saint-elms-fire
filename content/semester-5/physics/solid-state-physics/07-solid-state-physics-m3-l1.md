***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-5
semesterName: Semester 5
subjectId: physics
subjectName: Physics
courseId: solid-state-physics
courseName: Solid State Physics
moduleId: solid-state-physics-module-3
moduleName: Band Theory
lessonId: solid-state-physics-m3-l1
lessonName: Free Electron Model and Fermi Level
lessonNumber: 7
moduleNumber: 3
semesterNumber: 5
difficulty: intermediate
estimatedStudyMinutes: 55
releaseOrder: 7
prerequisites:
  - solid-state-physics-m2-l3
  - differential-equations-m2-l1
learningObjectives:
  - State the free-electron density of states.
  - Compute the Fermi energy for a free electron gas.
  - Derive the temperature dependence of the chemical potential.
  - Apply Fermi–Dirac statistics to electrons in metals.
concepts:
  - Free electron gas
  - Density of states
  - Fermi energy
  - Fermi–Dirac distribution
  - Chemical potential
  - Sommerfeld expansion
tags:
  - physics
  - solid-state
  - free-electron
sourceType: authored-courseware
assessmentHints:
  - derivation
  - problem-solving
  - conceptual
***

# Free Electron Model and Fermi Level

## Overview
The free electron model treats the conduction electrons in a metal as a gas of non-interacting particles in a box, with the Pauli exclusion principle. The model explains the heat capacity (up to a factor), the magnetic susceptibility, and the basic features of the conductivity. This lesson develops the model: the density of states, the Fermi energy, the Fermi–Dirac distribution, and the low-temperature thermodynamics (Sommerfeld expansion).

## Learning Path
- What you should already know: quantum mechanics of a particle in a box, the Pauli exclusion principle, Fermi–Dirac statistics.
- What this lesson adds: the density of states, the Fermi energy, the Sommerfeld expansion.
- What it unlocks: nearly-free electrons, band structure, and the transport properties of metals.

## Core Explanation
**Free electron model.** $N$ electrons in a volume $V$, treated as non-interacting particles of mass $m$ in a box. Each state is specified by a wavevector $\vec{k}$ and a spin $\sigma = \pm 1/2$. The energy is $E = \hbar^2 k^2/(2m)$.

**Density of states.** The number of states per unit energy per unit volume. For a 3D free electron gas,

$$g(E) = \frac{1}{2\pi^2} \left(\frac{2m}{\hbar^2}\right)^{3/2} \sqrt{E} = \frac{3 n}{2 E_F} \sqrt{\frac{E}{E_F}},$$

where $E_F$ is the Fermi energy and $n = N/V$ is the electron density. (Two spin states per $\vec{k}$.)

**Derivation.** The number of states with $|\vec{k}| \le k$ is $(4/3) \pi k^3 \cdot V/(2\pi)^3$ (factor of $2$ for spin), so $N(E) = (V/3\pi^2) k^3 = (V/3\pi^2) (2 m E/\hbar^2)^{3/2}$. Differentiate to get $g(E) = (1/V) dN/dE = (1/2\pi^2) (2 m/\hbar^2)^{3/2} \sqrt{E}$.

**Fermi energy.** The energy of the highest occupied state at $T = 0$:

$$E_F = \frac{\hbar^2}{2m} (3 \pi^2 n)^{2/3}.$$

For typical metals ($n \sim 10^{28}$–$10^{29}\text{ m}^{-3}$), $E_F \sim 1$–$10\text{ eV}$. Examples: Cu, $E_F = 7.0\text{ eV}$; Na, $3.2\text{ eV}$; Al, $11.7\text{ eV}$.

**Fermi wavevector and velocity.** $k_F = (3 \pi^2 n)^{1/3}$ and $v_F = \hbar k_F / m$. For Cu, $v_F \approx 1.6 \times 10^6\text{ m/s}$ (about $1\%$ of the speed of light).

**Fermi temperature.** $T_F = E_F / k_B$. For Cu, $T_F \approx 8.1 \times 10^4\text{ K}$. Room temperature is far below $T_F$, so the gas is highly degenerate.

**Fermi–Dirac distribution.** $f(E) = 1/(e^{(E - \mu)/(k_B T)} + 1)$, where $\mu$ is the chemical potential. At $T = 0$, $f = 1$ for $E < \mu$ and $f = 0$ for $E > \mu$ — the step function. For $T > 0$, the step is smeared over a range $\sim k_B T$ around $\mu$.

**Density of electrons.** $n = \int_0^\infty g(E) f(E) dE$. At $T = 0$, $\mu = E_F$ and $n = \int_0^{E_F} g(E) dE$. For $T > 0$, $\mu$ shifts to keep $n$ fixed.

**Sommerfeld expansion.** A low-temperature expansion of integrals of the form $I = \int_0^\infty H(E) f(E) dE$:

$$I = \int_0^\mu H(E) dE + \frac{\pi^2}{6} (k_B T)^2 H'(\mu) + O(T^4).$$

This is the *Sommerfeld expansion*; the leading correction is $\propto T^2$. The key result: only the behaviour of $H$ near the Fermi level matters at low $T$.

**Internal energy.** $U = \int_0^\infty E g(E) f(E) dE$. Apply the Sommerfeld expansion with $H(E) = E g(E)$:

$$U = \int_0^\mu E g(E) dE + \frac{\pi^2}{6} (k_B T)^2 (\mu g(\mu) + \mu g'(\mu) \mu) + \ldots = U_0 + \frac{\pi^2}{6} g(\mu) (k_B T)^2 + \ldots,$$

where $U_0$ is the $T = 0$ energy. (The exact form of the second term depends on $g(\mu)$.) For the free electron gas, $g(\mu) = (3 n/2) / E_F$ (at $\mu \approx E_F$), so

$$U \approx U_0 + \frac{\pi^2}{4} n k_B T^2 / E_F, \quad U_0 = (3/5) n E_F.$$

**Specific heat.** $C_V = dU/dT = \frac{\pi^2}{2} n k_B^2 T / E_F = \gamma T$, where $\gamma = \pi^2 n k_B / (2 E_F)$. At room $T$, $C_V^\text{el} = \gamma T \sim 0.01 \times 3 n k_B$ (Dulong–Petit) — much smaller than the lattice contribution. The quantum treatment fixes Drude's overestimate.

**Density of states at the Fermi level.** $g(E_F) = 3 n / (2 E_F)$. The specific heat is $C_V = (\pi^2/3) k_B^2 T g(E_F)$. This is the general formula (not just for free electrons).

**Chemical potential at low $T$.** $\mu(T) = E_F [1 - (\pi^2/12) (k_B T/E_F)^2 + O(T^4)]$ for the free electron gas. The chemical potential decreases slightly from $E_F$ as $T$ rises.

**Why the chemical potential shifts.** As $T$ rises, states below $E_F$ are emptied and states above are filled. Because $g(E)$ is higher above $E_F$ (for free electrons, $g \propto \sqrt{E}$), more states need to be filled above than emptied below, so $\mu$ shifts down to conserve particle number.

**Fermi–Dirac integrals.** $F_j(\eta) = (1/\Gamma(j+1)) \int_0^\infty x^j/(e^{x - \eta} + 1) dx$, where $\eta = \mu/(k_B T)$. Many thermodynamic quantities can be expressed in terms of these integrals.

**Electronic specific heat coefficient.** $\gamma = (\pi^2/3) k_B^2 g(E_F)$. Experimentally measured by plotting $C_V/T$ vs. $T^2$ and extrapolating to $T = 0$; the intercept is $\gamma$. Heavy-fermion materials have $\gamma$ values $100$–$1000$ times larger than ordinary metals (because $g(E_F)$ is large due to $f$-electron narrow bands).

**Pauli paramagnetism.** A magnetic field $B$ splits the electron energies by $\pm \mu_B B$ (Zeeman). The net spin susceptibility is $\chi_P = \mu_0 \mu_B^2 g(E_F)$. $T$-independent (in the low-$T$ limit). The free electron gas is Pauli paramagnetic, not Curie paramagnetic as Drude predicted.

**Density of states and the band structure.** For real metals, $g(E_F)$ can be very different from the free electron value, because the band dispersion $E(\vec{k})$ is non-parabolic. Measurements of $\gamma$ give the band-structure $g(E_F)$ directly.

**Effective mass.** The band dispersion near $E_F$ is often approximately parabolic: $E(\vec{k}) = E_F + \hbar^2 (k - k_F)^2/(2 m^*)$, with $m^*$ the effective mass. Then $g(E_F) \propto m^*$. Heavy-fermion materials have $m^* \sim 100$–$1000 m_e$.

**Thermionic emission.** Electrons in a metal have a distribution of energies (the high-energy tail of the Fermi–Dirac). Electrons with $E > \phi$ (the work function) can escape the metal. The thermionic emission current is

$$J = A T^2 e^{-\phi/(k_B T)},$$

where $A$ is the Richardson constant. The basis of vacuum tubes and electron guns.

**Field emission.** A strong electric field lowers the surface barrier and allows electrons to tunnel out. The Fowler–Nordheim equation gives the current density.

**Photoelectric effect.** Photons with $h \nu > \phi$ eject electrons (covered in *Introduction to Quantum Mechanics*). The energy distribution of the emitted electrons is the Fermi–Dirac distribution above the work function.

**Heat capacity and the energy gap in superconductors.** Below $T_c$, the electronic specific heat is exponentially suppressed: $C_V \sim e^{-\Delta/(k_B T)}$ (BCS theory). The gap $\Delta$ is the binding energy of a Cooper pair.

**DOS of common metals.** Cu: $g(E_F) \approx 0.7$ states/eV/atom (reduced from the free-electron value by band-structure effects). Na: $\approx 1.0$ (close to free electron). Ni: $\approx 10$ (large, due to $d$-bands at $E_F$).

**Specific heat of insulators.** No free electrons, so $C_V^\text{el} = 0$. The lattice (Debye) contribution dominates.

**Specific heat of semiconductors.** Small $C_V^\text{el} \propto e^{-E_g/(2 k_B T)}$ from the few carriers.

**Measurement of $g(E_F)$.** Three main ways: (1) electronic specific heat coefficient $\gamma$; (2) Pauli spin susceptibility $\chi_P$; (3) amplitude of de Haas–van Alphen oscillations. All give $g(E_F)$, with the relation $\gamma/\chi_P \propto$ known constant.

**Cyclotron mass.** In a magnetic field, electrons execute cyclotron orbits with frequency $\omega_c = e B / m^*$. The cyclotron effective mass $m_c$ is determined by the band curvature. Measured by de Haas–van Alphen or cyclotron resonance.

**Density of states in 2D.** $g(E) = m^*/(\pi \hbar^2)$ (constant in 2D, not $\propto \sqrt{E}$). The 2D electron gas has very different properties — the basis of quantum Hall physics.

**Density of states in 1D.** $g(E) \propto 1/\sqrt{E}$ (diverges at the band edge). The 1D DOS is dominated by the band edge.

**Quasi-1D and quasi-2D systems.** Materials with strong anisotropy (e.g. organic conductors, graphene, carbon nanotubes) have effectively 1D or 2D electronic structure. Their thermodynamic and transport properties differ from 3D.

**Van Hove singularities.** Points in the band structure where $dE/dk = 0$ (band edges or saddle points) give divergent DOS. The peaks are observed in photoemission spectra. Important for resonant effects.

**Electron–phonon coupling and the mass enhancement.** The electron effective mass can be enhanced by electron–phonon coupling: $m^* = m_\text{band} (1 + \lambda)$, where $\lambda$ is the electron–phonon coupling constant. This is the basis of the isotope effect in superconductors.

**Electronic structure calculations.** Density functional theory (DFT) computes the band structure of real materials from first principles. Used to predict $g(E_F)$, the Fermi surface, optical properties, etc.

**Fermi surfaces in real metals.** Cu: a sphere distorted by the BZ boundary (necks along $[111]$). Fe: complex multi-band Fermi surface. The Fermi surface is measured by de Haas–van Alphen oscillations and by positron annihilation.

**Fermi liquid theory.** The free electron gas is the prototype of a *Fermi liquid*: low-energy excitations are quasi-particles with the same charge and spin as electrons, but with a renormalised mass. The theory of metals below the Fermi temperature is the theory of Fermi liquids.

**Marginal Fermi liquids.** In some materials (e.g. high-$T_c$ superconductors), the quasi-particle lifetime is comparable to the energy, breaking the Fermi-liquid picture. The marginal Fermi liquid is a phenomenological model.

**Non-Fermi liquids.** Materials where the low-energy excitations are not fermionic — heavy fermions near quantum critical points, certain frustrated magnets, the strange metal phase of cuprates.

**Why metals are shiny.** The free electron gas has a plasma frequency $\omega_p = (n e^2/(\epsilon_0 m))^{1/2}$ in the UV. Visible light is reflected (because $\omega < \omega_p$). Below the plasma frequency, metals reflect; above, they transmit. The colour of gold and copper comes from interband transitions.

**Plasma frequency of metals.** For Cu, $n = 8.5 \times 10^{28}\text{ m}^{-3}$: $\omega_p = 1.6 \times 10^{16}\text{ rad/s}$ (10 eV, in the UV). Above this, the metal becomes transparent.

**Electron screening.** The Coulomb interaction between electrons is screened by the other electrons, with screening length $\lambda_\text{TF}^{-1} \sim k_F$. The Thomas–Fermi screening length is $\lambda_\text{TF}^{-2} = (4 \pi e^2/\epsilon_0) g(E_F)$.

**Plasmons.** Collective oscillations of the electron gas at the plasma frequency. Observed in electron energy-loss spectroscopy. Quantised as plasmon quasiparticles.

**Screening in semiconductors.** The Thomas–Fermi screening length is much longer (because $g(E_F)$ is small). Impurity potentials are screened less effectively, leading to bound states and the donor/acceptor energy levels.

**Tunneling.** Electrons can tunnel through thin barriers. The tunneling current depends exponentially on the barrier width and height. The basis of the tunnel diode, the STM, and Josephson junctions.

**Density of states from specific heat.** $g(E_F) = 3 \gamma/(\pi^2 k_B^2)$. Measure $\gamma$ from low-$T$ specific heat, get $g(E_F)$ directly.

**Fermi level pinning.** In semiconductor–metal contacts, the Fermi level at the interface is "pinned" by surface states. Important for ohmic contacts and Schottky barriers.

**2D electron gas.** Electrons confined to a 2D layer (e.g. at a semiconductor interface, as in MOSFETs) have a constant DOS. The basis of the quantum Hall effect.

**Composite fermions.** In the fractional quantum Hall effect, electrons bind to magnetic flux quanta to form new quasi-particles (composite fermions) with fractional charge and statistics. The modern theory of the FQHE.

## Key Ideas
- DOS: $g(E) = (1/2\pi^2) (2m/\hbar^2)^{3/2} \sqrt{E}$ (3D free electron).
- Fermi energy: $E_F = (\hbar^2/2m) (3\pi^2 n)^{2/3}$.
- $C_V^\text{el} = \gamma T$, $\gamma \propto g(E_F)$.
- $\chi_P = \mu_0 \mu_B^2 g(E_F)$ (Pauli paramagnetism).
- Sommerfeld expansion: leading correction is $\propto T^2$.

## Worked Examples
**Example 1 — Fermi energy of Cu.** $n = 8.5 \times 10^{28}\text{ m}^{-3}$, $m = 9.11 \times 10^{-31}\text{ kg}$. $E_F = (\hbar^2/2m) (3 \pi^2 n)^{2/3} = (1.05 \times 10^{-34})^2/(2 \times 9.11 \times 10^{-31}) \times (3 \pi^2 \times 8.5 \times 10^{28})^{2/3} \approx 1.1 \times 10^{-18}\text{ J} \approx 7.0\text{ eV}$. ✓

**Example 2 — Specific heat coefficient of Na.** $g(E_F) = 3 n/(2 E_F) = 3 \times 2.5 \times 10^{28}/(2 \times 3.2 \times 1.6 \times 10^{-19}) \approx 7.3 \times 10^{46}\text{ J}^{-1}\text{m}^{-3}$. $\gamma = (\pi^2/3) k_B^2 g(E_F) \times V/m_\text{Na}$ per mole. With $V = M/\rho = 23 \times 10^{-3}/970 \approx 2.4 \times 10^{-5}\text{ m}^3/\text{mol}$: $\gamma \approx (\pi^2/3) (1.38 \times 10^{-23})^2 \times 7.3 \times 10^{46} \times 2.4 \times 10^{-5} \approx 1.4 \times 10^{-3}\text{ J/(mol·K}^2)$. Observed: $\gamma = 1.4\text{ mJ/(mol·K}^2)$. ✓

**Example 3 — Pauli susceptibility.** $\chi_P = \mu_0 \mu_B^2 g(E_F)$. For Cu: $\mu_0 = 4\pi \times 10^{-7}$, $\mu_B = 9.27 \times 10^{-24}\text{ J/T}$, $g(E_F) \approx 1.0 \times 10^{47}\text{ J}^{-1}\text{m}^{-3}$ (approximately). $\chi_P \approx 1 \times 10^{-5}$ (dimensionless SI). Observed: $\chi \approx 1.0 \times 10^{-5}$ for Cu. ✓

**Example 4 — Fermi velocity of Al.** $n = 18 \times 10^{28}\text{ m}^{-3}$. $k_F = (3 \pi^2 n)^{1/3} = (3 \pi^2 \times 18 \times 10^{28})^{1/3} \approx 1.7 \times 10^{10}\text{ m}^{-1}$. $v_F = \hbar k_F/m \approx 2.0 \times 10^6\text{ m/s}$. About $0.7\%$ of the speed of light.

**Example 5 — Energy of a single electron in a box.** For Cu, $E_F = 7\text{ eV}$, mean energy per electron $= (3/5) E_F \approx 4.2\text{ eV}$. The "Fermi sea" has total kinetic energy $(3/5) N E_F$, a substantial reservoir of energy that the Pauli principle prevents from being thermalised.

## Common Misconceptions
- **"All electrons in a metal are at $E_F$."** No — they fill all states from $0$ to $E_F$.
- **"The Fermi energy is the energy of a typical electron."** It is the energy of the *highest* occupied state at $T = 0$. The mean energy is $(3/5) E_F$.
- **"Electrons in a metal move at the Fermi velocity."** Only the *fastest* electrons (at the Fermi surface) do. The mean speed is lower.
- **"The specific heat of metals is large at room $T$."** The electronic specific heat is much smaller than the lattice at room $T$ (and is the dominant term only at very low $T$).

## Connections
The free electron model is the simplest description of metals; band theory (next lesson) is the generalisation to include the periodic potential. The Fermi energy, density of states, and Sommerfeld expansion are the key concepts used throughout solid-state physics. Heavy-fermion materials and quantum criticality are the modern frontier.

## Quick Check
1. State the density of states for a 3D free electron gas.
2. State the formula for the Fermi energy.
3. What is the Sommerfeld expansion?
4. Why is the electronic specific heat of metals linear in $T$?
5. What is Pauli paramagnetism?

## Takeaway
- DOS: $g(E) = (1/2\pi^2)(2m/\hbar^2)^{3/2} \sqrt{E}$ (3D).
- Fermi energy: $E_F = (\hbar^2/2m)(3\pi^2 n)^{2/3}$.
- $C_V = \gamma T$, $\gamma \propto g(E_F)$.
- Pauli paramagnetism: $\chi_P \propto g(E_F)$.
- Sommerfeld expansion: leading correction $\propto T^2$.
