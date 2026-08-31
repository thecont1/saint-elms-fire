***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-5
semesterName: Semester 5
subjectId: physics
subjectName: Physics
courseId: solid-state-physics
courseName: Solid State Physics
moduleId: solid-state-physics-module-2
moduleName: Phonons and Thermal Properties
lessonId: solid-state-physics-m2-l3
lessonName: Thermal and Electrical Conductivity in Solids
lessonNumber: 6
moduleNumber: 2
semesterNumber: 5
difficulty: advanced
estimatedStudyMinutes: 55
releaseOrder: 6
prerequisites:
  - solid-state-physics-m2-l2
  - solid-state-physics-m3-l1
learningObjectives:
  - Describe the Drude model of electrical conduction and its successes and failures.
  - State the Bloch theorem and the formation of energy bands.
  - Distinguish metals, insulators, and semiconductors by band structure.
  - Explain the temperature dependence of electrical and thermal conductivity.
concepts:
  - Drude model
  - Bloch theorem
  - Energy bands
  - Metals, insulators, semiconductors
  - Wiedemann–Franz law
  - Electron mean free path
tags:
  - physics
  - solid-state
  - conductivity
sourceType: authored-courseware
assessmentHints:
  - derivation
  - problem-solving
  - conceptual
***

# Thermal and Electrical Conductivity in Solids

## Overview
The Drude model (1900) treated electrons in a metal as a classical gas, explaining the Wiedemann–Franz law (the ratio of thermal to electrical conductivity is proportional to temperature). The model failed to predict the right temperature dependence of the resistivity, the specific heat, or the magnetic susceptibility. Quantum mechanics resolved the failures: electrons are described by Bloch waves, and the Pauli exclusion principle limits the available states. The result is band theory, the modern theory of solids. This lesson develops the Drude model, the Bloch theorem, and the basic features of metals, insulators, and semiconductors.

## Learning Path
- What you should already know: kinetic theory of gases, the free electron gas, basic quantum mechanics.
- What this lesson adds: Drude model, Bloch theorem, band structure, and the classification of solids.
- What it unlocks: the band theory of solids (next module), semiconductor physics, and the quantum theory of metals.

## Core Explanation
**Drude model.** Treats the conduction electrons in a metal as a classical ideal gas of particles, with mean free path $\ell$ between collisions. The electrons respond to an electric field $\vec{E}$ by accelerating and being scattered.

**Drude conductivity.** $\sigma = n e^2 \tau / m$, where $n$ is the electron density, $e$ the charge, $\tau$ the relaxation time (mean time between collisions), and $m$ the electron mass. $\tau = \ell / v_\text{th}$, where $v_\text{th}$ is the thermal velocity. The conductivity is independent of the electric field (Ohm's law).

**Drude resistivity.** $\rho = 1/\sigma = m/(n e^2 \tau)$. For copper at room temperature, $n \approx 8.5 \times 10^{28}\text{ m}^{-3}$, $\tau \approx 2.5 \times 10^{-14}\text{ s}$, giving $\rho \approx 1.7 \times 10^{-8}\ \Omega\cdot\text{m}$ (close to the measured $1.7 \times 10^{-8}$).

**Temperature dependence of $\rho$.** At high $T$ ($T > \theta_D$), $\tau \propto 1/T$ (from phonon scattering); $\rho \propto T$. At low $T$ ($T \ll \theta_D$), $\tau \propto 1/T^5$ (Bloch–Grüneisen); $\rho \propto T^5$. At very low $T$, impurity scattering dominates; $\rho$ saturates to a residual value (Matthiessen's rule).

**Matthiessen's rule.** The total resistivity is the sum of contributions from different scattering mechanisms: $\rho = \rho_\text{phonon} + \rho_\text{impurity} + \ldots$. The impurity term is $T$-independent (residual resistivity), so it dominates at very low $T$.

**Wiedemann–Franz law.** The ratio of thermal to electrical conductivity is proportional to $T$:

$$\frac{\kappa}{\sigma} = L T,$$

where $L = (\pi^2/3) (k_B/e)^2 \approx 2.44 \times 10^{-8}\text{ W}\Omega/\text{K}^2$ is the Lorenz number. The Drude model predicts this; the derivation gives $L = (3/2) (k_B/e)^2$ (without the Sommerfeld correction from quantum statistics).

**Sommerfeld correction.** The quantum treatment of the free electron gas modifies the Lorenz number: $L = (\pi^2/3) (k_B/e)^2$. The Sommerfeld model (quantum free electron gas with the Pauli exclusion principle) gives the correct electronic specific heat ($C_V = \gamma T$) and the correct Lorenz number.

**Failures of the Drude model.**
- Specific heat of the electron gas: predicts $3 k_B/2$ per electron (like a classical gas); experiment gives $\gamma T \ll 3 k_B/2$ at low $T$. The Sommerfeld model fixes this.
- Magnetic susceptibility: predicts Curie law (paramagnetic, $\chi \propto 1/T$); metals are weakly *Pauli paramagnetic* (nearly $T$-independent). The Pauli exclusion principle fixes this.
- Temperature dependence of $\rho$: predicts $\rho \propto \sqrt{T}$ (from $v_\text{th} \propto \sqrt{T}$ and $\tau$ from the cross section); actually $\rho \propto T$ at high $T$. The Bloch–Grüneisen formula gives the right dependence.

**Bloch theorem.** The wavefunction of an electron in a periodic potential is a plane wave times a periodic function: $\psi_k(\vec{r}) = e^{i \vec{k} \cdot \vec{r}} u_k(\vec{r})$, where $u_k$ has the periodicity of the lattice. This is a deep result: it holds for any periodic potential and any wavevector $\vec{k}$.

**Energy bands.** Because of the periodic potential, the energy $E(\vec{k})$ has *bands* — ranges of energy where electron states exist, separated by *gaps* where no states exist. In 1D, the bands are separated by gaps at the Brillouin zone boundaries.

**Brillouin zone.** The Wigner–Seitz cell of the reciprocal lattice. For fcc, the BZ is a truncated octahedron; for bcc, a truncated octahedron; for simple cubic, a cube. The energy bands are usually plotted along high-symmetry directions of the BZ (e.g. $\Gamma$–$X$–$W$–$L$–$\Gamma$ for fcc).

**Nearly-free electron model.** Start with free electrons (plane waves); turn on a weak periodic potential perturbatively. The result: energy gaps open at the Brillouin zone boundaries (where the free-electron bands cross). The gaps have size $2|V_G|$ where $V_G$ is the Fourier component of the potential at the reciprocal lattice vector $\vec{G}$.

**Energy gap at the BZ boundary.** In 1D, the free-electron dispersion $E = \hbar^2 k^2/(2m)$ has a degeneracy at $k = \pm \pi/a$ (where the two branches $k$ and $k - 2\pi/a$ have the same $E$). A weak periodic potential couples these degenerate states and splits them, opening a gap.

**Metal vs. insulator.** In a metal, the highest occupied band is partially filled. In an insulator (or semiconductor), the highest occupied band is completely filled (the *valence band*) and the next band (the *conduction band*) is separated by a gap $E_g$.

**Band gap.** The energy difference between the top of the valence band and the bottom of the conduction band. For insulators, $E_g > 3\text{ eV}$ or so. For semiconductors, $E_g \sim 0.1$–$3\text{ eV}$ (Si: $1.1\text{ eV}$, GaAs: $1.4\text{ eV}$, Ge: $0.7\text{ eV}$).

**Bloch oscillation.** In a perfect crystal with a constant electric field, an electron's wavevector increases linearly in time (in the absence of scattering): $\hbar \dot{\vec{k}} = -e \vec{E}$. When $\vec{k}$ reaches the BZ boundary, it Bragg-reflects, leading to oscillations in real space — *Bloch oscillations*. In practice, scattering destroys them, but they have been observed in optical lattices.

**Effective mass.** Near a band extremum at $\vec{k}_0$, the energy is parabolic: $E(\vec{k}) = E_0 + \hbar^2 (\vec{k} - \vec{k}_0)^2 / (2 m^*)$, where $m^*$ is the effective mass. For electrons in semiconductors, $m^*$ can be much smaller or larger than the free electron mass (e.g. $m^* = 0.067 m$ in GaAs).

**Density of states.** The number of states per unit energy. For a parabolic band with effective mass $m^*$, $g(E) \propto \sqrt{E - E_c}$ (3D). The van Hove singularities occur where $dE/dk = 0$ (band edges, saddle points).

**Fermi surface.** The constant-energy surface at the Fermi energy in $\vec{k}$-space. For a free electron gas, a sphere of radius $k_F = (3 \pi^2 n)^{1/3}$. For real metals, distorted by the periodic potential. The shape is measured by de Haas–van Alphen oscillations.

**Drude formula for conductivity in the band picture.** $\sigma = n e^2 \tau / m^*$, with $m^*$ the effective mass. The Drude formula survives the quantum treatment, but with $m \to m^*$.

**Bloch–Grüneisen formula.** $\rho(T) = \rho_0 + A (T/\theta_D)^5 \int_0^{\theta_D/T} x^5/((\sinh x - 1)(1 - e^{-x})) dx$ for $T \ll \theta_D$, and $\rho \propto T$ for $T \gg \theta_D$. The $T^5$ law at low $T$ comes from the small-angle scattering of electrons by phonons.

**Mott formula.** $\sigma = n e^2 \tau(E_F)/m$, with $\tau$ evaluated at the Fermi energy. The quantum treatment: only electrons near $E_F$ contribute (within $k_B T$). This is the Sommerfeld correction to Drude.

**Temperature dependence of $\tau$.** $\tau \propto 1/T$ at high $T$ (phonon scattering, $n_\text{phonon} \propto T$). At low $T$, $\tau \propto 1/T^3$ for electron–phonon scattering (Bloch–Grüneisen). At very low $T$, $\tau$ saturates to a $T$-independent value set by impurity scattering.

**Electrical conductivity of insulators.** Zero at $T = 0$ (full valence band, empty conduction band). At finite $T$, some electrons are thermally excited across the gap: $\sigma \propto e^{-E_g/(2 k_B T)}$ (intrinsic semiconductor). For doped insulators, additional carriers from donors/acceptors.

**Semiconductor statistics.** The Fermi–Dirac distribution applied to a semiconductor: $n$ (electron density in the conduction band) and $p$ (hole density in the valence band) depend on the position of the Fermi level relative to the band edges. The law of mass action: $n p = n_i^2$, where $n_i$ is the intrinsic carrier density.

**Doped semiconductors.** Donors (e.g. P in Si) add electrons to the conduction band. Acceptors (e.g. B in Si) add holes to the valence band. The Fermi level moves towards the band that is being populated. The basis of all modern electronics.

**p–n junctions.** A junction of p-type and n-type semiconductors has a depletion region, a built-in potential, and rectifying current–voltage characteristics. The basis of diodes, transistors, solar cells, LEDs.

**Transistors.** The bipolar junction transistor (BJT) and the field-effect transistor (FET, including MOSFET) are the building blocks of modern electronics. Their operation depends on the control of carrier densities in semiconductors.

**Hall effect.** A magnetic field perpendicular to a current produces a voltage perpendicular to both. The Hall coefficient $R_H = 1/(n e)$ for a single carrier type; sign reveals the carrier type. The basis of magnetic-field sensors and of the quantum Hall effect.

**Quantum Hall effect.** In a 2D electron gas at low $T$ and high $B$, the Hall conductivity is quantised: $\sigma_{xy} = \nu e^2/h$, where $\nu$ is the integer (or fractional) filling factor. A topological effect, robust against disorder.

**Thermal conductivity of insulators.** Carried by phonons: $\kappa_\text{lat} = (1/3) C_V v_s \ell$. At high $T$, $\ell \propto 1/T$ (Umklapp) and $\kappa \propto 1/T$. At low $T$, $\ell$ is limited by impurities and boundaries; $\kappa$ rises as $T^3$ (matches $C_V$).

**Thermal conductivity of metals.** Carried mostly by electrons: $\kappa = (\pi^2/3) (k_B^2 T/m) n \tau = L \sigma T$ (Wiedemann–Franz). The electron thermal conductivity is much larger than the phonon contribution in metals.

**Lattice thermal conductivity vs. electronic.** In metals, $\kappa_\text{el} \gg \kappa_\text{lat}$. In insulators, only $\kappa_\text{lat}$ contributes. In heavily doped semiconductors, both can matter.

**Thermal Hall effect.** A magnetic field produces a thermal Hall conductivity. In insulators, this is carried by phonons (the phonon Hall effect) or by magnons. In metals, by electrons.

**Thermoelectric effects.** Seebeck effect: a temperature gradient produces a voltage (the basis of thermocouples and thermoelectric generators). Peltier effect: a current produces heating or cooling (the basis of Peltier coolers). Both are described by the Onsager relations.

**Seebeck coefficient.** $S = \Delta V / \Delta T$ (V/K). For a metal, $S$ is small (a few $\mu$V/K) and roughly linear in $T$. For a semiconductor, $S$ can be hundreds of $\mu$V/K. The basis of thermoelectric devices.

**Figure of merit.** $ZT = S^2 \sigma T / \kappa$, where $S$ is the Seebeck coefficient, $\sigma$ the electrical conductivity, $\kappa$ the thermal conductivity. $ZT > 1$ is needed for efficient thermoelectric devices. Phonon-glass electron-crystal materials achieve this.

**Anderson localisation.** In a disordered system, electron wavefunctions can become localised (exponentially decaying). No diffusion, zero conductivity at $T = 0$. Important in disordered metals and semiconductors.

**Variable-range hopping.** In disordered insulators, electrons hop between localised states with rates $\propto e^{-(T_0/T)^{1/(d+1)}}$ (Mott's law). The basis of many low-temperature transport measurements.

**Topological insulators.** Materials that are insulators in the bulk but have conducting surface states protected by topology. The surface states are robust against disorder. A new state of matter.

**Weyl and Dirac semimetals.** Materials with linear band crossings near the Fermi level. Electrons behave as massless relativistic particles. Anomaly in magnetotransport (the chiral magnetic effect).

**Superconductivity.** Below $T_c$, the resistivity drops to zero. The BCS theory: electrons form Cooper pairs via phonon exchange. Coherence length, penetration depth, and the energy gap are key length scales.

**Heavy-fermion materials.** Compounds with $f$-electrons (e.g. Ce, U) where the effective mass is $100$–$1000$ times the free electron mass. Large $\gamma$, anisotropic magnetic response, often superconducting at low $T$.

**Kondo effect.** Magnetic impurities in a metal: at low $T$, the conduction electrons screen the impurity spin, leading to a resistance minimum and a logarithmic rise. The Kondo temperature $T_K$ sets the scale.

**Topological materials.** Topological insulators, Weyl semimetals, and Dirac semimetals are characterised by topological invariants. Their transport properties are robust against disorder. Active research area.

**Phonon drag.** At low $T$, phonons can drag electrons, contributing to the thermopower. The phonon-drag peak is a characteristic feature of the thermopower of clean metals.

**2D materials.** Graphene, transition-metal dichalcogenides, etc. Have unique electronic and thermal properties. The basis of much current research.

**Quantum oscillations.** de Haas–van Alphen (magnetic susceptibility), Shubnikov–de Haas (resistivity), and other oscillations as a function of magnetic field. The frequencies give the Fermi surface; the amplitudes give the effective mass and the Dingle temperature.

**Topological transport.** Quantised Hall, quantum spin Hall, and quantum anomalous Hall effects. Topological invariants determine the response. Robust to disorder.

## Key Ideas
- Drude model: $\sigma = n e^2 \tau / m$.
- Wiedemann–Franz: $\kappa/\sigma = L T$ (Sommerfeld value $L = \pi^2 k_B^2/(3 e^2)$).
- Bloch theorem: $\psi_k = e^{i \vec{k} \cdot \vec{r}} u_k(\vec{r})$.
- Bands, gaps, Fermi surface.
- Metals (partially filled band) vs. insulators (filled band + gap).
- Effective mass $m^*$, Bloch–Grüneisen $T^5$ at low $T$.

## Worked Examples
**Example 1 — Copper conductivity.** $n = 8.5 \times 10^{28}\text{ m}^{-3}$, $m = m_e$, $e = 1.6 \times 10^{-19}\text{ C}$, $\tau = 2.5 \times 10^{-14}\text{ s}$. $\sigma = n e^2 \tau / m = 8.5 \times 10^{28} \times 2.56 \times 10^{-38} \times 2.5 \times 10^{-14} / 9.11 \times 10^{-31} = 6 \times 10^7\text{ S/m}$. Observed: $5.9 \times 10^7\text{ S/m}$. ✓

**Example 2 — Bloch oscillation frequency.** $E = 10^6\text{ V/m}$, $\hbar \dot{k} = e E$, $\dot{k} = e E/\hbar = 1.6 \times 10^{-19} \times 10^6 / 1.05 \times 10^{-34} = 1.5 \times 10^{21}\text{ m}^{-1}\text{s}^{-1}$. Time to reach BZ boundary ($\pi/a \approx 1.4 \times 10^{10}\text{ m}^{-1}$ for $a = 0.2\text{ nm}$): $t = \pi/(a \dot{k}) \approx 1.4 \times 10^{10}/(1.5 \times 10^{21} \times 2 \times 10^{-10}) \approx 5 \times 10^{-2}\text{ s}$. The period is $2 t \approx 0.1\text{ s}$. In real metals, scattering is much faster ($\sim 10^{-14}\text{ s}$), so Bloch oscillations are not seen.

**Example 3 — Intrinsic semiconductor.** Si, $E_g = 1.1\text{ eV}$ at $300\text{ K}$. Intrinsic carrier density $n_i \sim 10^{10}\text{ cm}^{-3}$ at $300\text{ K}$ (much less than in metals). $\sigma = n_i e (\mu_e + \mu_h) \sim 10^{-3}\text{ S/m}$ — about $10^{10}$ times less than copper. Insulators have $n_i$ even smaller (or zero at $T = 0$).

**Example 4 — Lorenz number of copper.** $\sigma = 5.9 \times 10^7\text{ S/m}$, $\kappa = 400\text{ W/(m·K)}$. $L = \kappa/(\sigma T) = 400/(5.9 \times 10^7 \times 300) = 2.3 \times 10^{-8}\text{ W}\Omega/\text{K}^2$. Close to the theoretical $2.44 \times 10^{-8}$. ✓

**Example 5 — Band gap of GaAs.** $E_g = 1.42\text{ eV}$. At $T = 300\text{ K}$: $n_i = (N_c N_v)^{1/2} e^{-E_g/(2 k_B T)}$. With $N_c \approx 4.7 \times 10^{17}\text{ cm}^{-3}$, $N_v \approx 7 \times 10^{18}\text{ cm}^{-3}$: $n_i \approx 2 \times 10^6\text{ cm}^{-3}$ (very small, but enough for device operation when doped).

## Common Misconceptions
- **"Electrons in a metal obey classical statistics."** No — they obey Fermi–Dirac (quantum) statistics.
- **"All electrons in a metal contribute to conduction."** Only those within $k_B T$ of the Fermi energy (Sommerfeld picture).
- **"The mean free path of an electron in a metal is huge."** It is $\sim 10$–$100\text{ nm}$ at room $T$, but is the *ballistic* path; the *transport* path is longer due to small-angle scattering.
- **"Insulators have no electrons in the conduction band."** At finite $T$, some electrons are thermally excited; the conductivity is small but non-zero.

## Connections
The Drude model is the classical precursor of band theory. Bloch's theorem is the foundation of the modern theory of solids (next module). The classification into metals, insulators, and semiconductors underlies all of electronics. Quantum Hall and topological insulators are the modern frontier.

## Quick Check
1. State the Drude formula for electrical conductivity.
2. State the Wiedemann–Franz law.
3. State the Bloch theorem.
4. What distinguishes a metal from an insulator?
5. Why is $C_V$ of metals linear in $T$ at low temperature?

## Takeaway
- Drude: $\sigma = n e^2 \tau / m$.
- Wiedemann–Franz: $\kappa/\sigma = L T$.
- Bloch theorem: $\psi = e^{i \vec{k} \cdot \vec{r}} u_k(\vec{r})$.
- Band structure: metals, insulators, semiconductors.
- Sommerfeld: $C_V = \gamma T$, Lorenz number $L = \pi^2 k_B^2/(3 e^2)$.
