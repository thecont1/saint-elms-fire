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
lessonId: solid-state-physics-m2-l1
lessonName: Lattice Vibrations and Phonons
lessonNumber: 4
moduleNumber: 2
semesterNumber: 5
difficulty: intermediate
estimatedStudyMinutes: 55
releaseOrder: 4
prerequisites:
  - solid-state-physics-m1-l1
  - differential-equations-m3-l1
learningObjectives:
  - Set up and solve the equations of motion for a 1D monatomic lattice.
  - Derive the dispersion relation $\omega(q)$ and identify the Brillouin zone.
  - Extend to diatomic lattices and identify acoustic and optical branches.
  - Quantise the lattice vibrations as phonons.
concepts:
  - Lattice vibrations
  - Dispersion relation
  - Acoustic phonon
  - Optical phonon
  - Phonon quantisation
  - Brillouin zone
tags:
  - physics
  - solid-state
  - phonons
sourceType: authored-courseware
assessmentHints:
  - derivation
  - problem-solving
  - conceptual
***

# Lattice Vibrations and Phonons

## Overview
Atoms in a crystal are not at rest; they vibrate about their equilibrium positions. The collective vibrations are quantised as *phonons* — quasiparticles with energy $\hbar \omega$ and crystal momentum $\hbar \vec{q}$. Phonons determine the heat capacity, thermal conductivity, and the electron–phonon interaction in solids. This lesson develops the theory of lattice vibrations for 1D monatomic and diatomic lattices, and introduces the quantisation.

## Learning Path
- What you should already know: the harmonic oscillator, the wave equation, complex exponentials.
- What this lesson adds: lattice dynamics, dispersion relations, phonons.
- What it unlocks: heat capacity (next lesson), thermal conductivity, and electron–phonon coupling.

## Core Explanation
**Lattice vibrations.** A crystal with $N$ atoms has $3 N$ vibrational modes (in 3D). At low frequencies, these are sound waves; at high frequencies, they are optical. The dispersion relation $\omega(\vec{q})$ gives the frequency of each mode as a function of wavevector $\vec{q}$.

**1D monatomic lattice.** $N$ identical atoms of mass $m$ on a line, with spacing $a$, connected by springs of constant $K$. The equation of motion for atom $n$ is

$$m \ddot{u}_n = K (u_{n+1} - 2 u_n + u_{n-1}),$$

where $u_n$ is the displacement of atom $n$ from equilibrium.

**Solution: travelling wave.** Try $u_n = A e^{i (q n a - \omega t)}$. Substitute:

$$-m \omega^2 = K (e^{i q a} - 2 + e^{-i q a}) = 2 K (\cos(q a) - 1).$$

$$\omega^2 = \frac{2 K}{m} (1 - \cos(q a)) = \frac{4 K}{m} \sin^2(q a / 2).$$

$$\omega(q) = 2 \sqrt{\frac{K}{m}} \left| \sin\left(\frac{q a}{2}\right) \right|.$$

**Brillouin zone.** The wavevector $q$ is restricted to the *first Brillouin zone* $-\pi/a < q \le \pi/a$. (For $q$ outside, $\omega(q)$ repeats; equivalent modes.) The first BZ is the Wigner–Seitz cell of the reciprocal lattice in 1D.

**Acoustic branch.** At small $q$ (long wavelength), $\omega \approx a \sqrt{K/m} \cdot |q|$, linear in $q$. The slope $a \sqrt{K/m}$ is the speed of sound. These are *acoustic* phonons — the lattice vibrates as a whole, sound waves.

**At the BZ boundary.** At $q = \pi/a$, $\omega = 2 \sqrt{K/m}$ is the maximum frequency. The wavelength is $2 a$ — atoms move in opposition. The group velocity $d\omega/dq$ vanishes at the BZ boundary (standing wave).

**Number of modes.** $N$ atoms give $N$ modes in 1D, $3 N$ in 3D. (In 1D, the modes correspond to $N$ allowed $q$ values in the first BZ: $q_n = 2 \pi n/(N a)$ for $n = -N/2 + 1, \ldots, N/2$.)

**Phase and group velocity.** Phase velocity $v_p = \omega/q$, group velocity $v_g = d\omega/dq$. For acoustic phonons at long wavelength, $v_p = v_g = a \sqrt{K/m}$. At the BZ boundary, $v_g = 0$.

**1D diatomic lattice.** Two atoms per unit cell, masses $m_1$ and $m_2$, separation $a/2$. Two equations of motion:

$$m_1 \ddot{u}_n = K (v_n - 2 u_n + v_{n-1}),$$
$$m_2 \ddot{v}_n = K (u_{n+1} - 2 v_n + u_n),$$

where $u_n$ and $v_n$ are the displacements of the $m_1$ and $m_2$ atoms in the $n$-th cell.

**Two branches.** Try $u_n = A e^{i(q n a - \omega t)}$, $v_n = B e^{i(q n a - \omega t)}$. Substitute:

$$-m_1 \omega^2 A = K (B (1 + e^{-i q a}) - 2 A),$$
$$-m_2 \omega^2 B = K (A (e^{i q a} + 1) - 2 B).$$

The dispersion relation comes from the determinant:

$$m_1 m_2 \omega^4 - 2 K (m_1 + m_2) \omega^2 + 2 K^2 (1 - \cos(q a)) = 0.$$

Solve the quadratic in $\omega^2$:

$$\omega^2 = K \left(\frac{1}{m_1} + \frac{1}{m_2}\right) \pm K \sqrt{\left(\frac{1}{m_1} + \frac{1}{m_2}\right)^2 - \frac{4 \sin^2(q a/2)}{m_1 m_2}}.$$

**Acoustic and optical branches.** The minus sign gives the *acoustic* branch (low frequency, $\omega \to 0$ as $q \to 0$). The plus sign gives the *optical* branch (high frequency, $\omega \to \sqrt{2 K (1/m_1 + 1/m_2)}$ as $q \to 0$). The two branches are separated by a *band gap*.

**Acoustic phonons.** At long wavelength, both atoms in the unit cell move together. The dispersion is linear in $q$. The speed of sound is $a \sqrt{2 K/(m_1 + m_2)}$ (in the long-wavelength limit).

**Optical phonons.** At long wavelength, the two atoms move in opposite phase. The frequency is finite even at $q = 0$ because the two atoms oscillate against each other. If the atoms have opposite charges, the optical phonons couple to electromagnetic radiation (infrared absorption), hence the name.

**3D lattice.** The generalisation: in 3D, there are 3 acoustic branches (one longitudinal, two transverse) and $3 (p - 1)$ optical branches (for $p$ atoms per unit cell). For monatomic ($p = 1$): 3 acoustic branches. For diatomic ($p = 2$): 3 acoustic + 3 optical.

**Long-wavelength limit.** Acoustic phonons at long wavelength are just sound waves, with velocity determined by the elastic constants. The dispersion is linear in $q$, with different velocities for longitudinal and transverse modes. The three acoustic branches are the basis of classical acoustics.

**Phonon quantisation.** The lattice vibrations are normal modes of a coupled-oscillator system, so they are quantised like the harmonic oscillator: $E_n = \hbar \omega (n + 1/2)$ for each mode. The quanta are *phonons*. A phonon is a quasiparticle with energy $\hbar \omega$ and crystal momentum $\hbar \vec{q}$.

**Zero-point energy.** Each mode has zero-point energy $\hbar \omega/2$, even at $T = 0$. The total zero-point energy is large (significant for light atoms, e.g. helium) and contributes to the stability of the crystal.

**Phonon creation and annihilation.** A phonon can be created (e.g. by neutron scattering) or destroyed (e.g. by absorption). The number of phonons in a mode at temperature $T$ is given by the Bose–Einstein distribution:

$$n(\omega, T) = \frac{1}{e^{\hbar \omega/(k_B T)} - 1}.$$

**3D Bravais lattice with basis.** The full description: for $N$ unit cells with $p$ atoms per cell, there are $3 N p$ modes. The $3$ acoustic modes correspond to uniform translation of the whole crystal. The $3 (p - 1)$ optical modes are the internal vibrations of the basis.

**Lattice with two atoms.** Example: NaCl, with $m_\text{Na}$ and $m_\text{Cl}$. The optical phonon frequency at $q = 0$ is $\omega_0 = \sqrt{2 K (1/m_\text{Na} + 1/m_\text{Cl})}$. For typical $K$ from the elastic constants, $\omega_0$ is in the infrared. This is why NaCl absorbs IR radiation.

**Dispersion in 3D.** $\omega(\vec{q})$ is a function of the 3D wavevector. The dispersion surfaces are 3D in $\vec{q}$-space. Acoustic branches emerge from $\omega = 0$ at $\vec{q} = 0$; optical branches have $\omega > 0$ everywhere (in the absence of soft modes).

**Acoustic branches: longitudinal and transverse.** The three acoustic branches are the longitudinal acoustic (LA) and two transverse acoustic (TA) modes. Different velocities: $v_L > v_T$. The LA mode is the compressional sound wave; the TA modes are shear waves.

**Optical branches in ionic crystals.** For NaCl, the optical modes at $q = 0$ have a finite frequency and a dipole moment (since the two atoms have opposite charges). Coupling to EM radiation gives strong IR absorption.

**Phonons and heat.** Phonons carry thermal energy. The heat capacity of a solid is the energy stored in the phonons; the thermal conductivity is the transport of phonons. Both are determined by the dispersion $\omega(\vec{q})$.

**Density of states.** The number of phonon modes per unit frequency, $g(\omega) = \sum_{\vec{q}} \delta(\omega - \omega(\vec{q}))$. In 3D, for a linear dispersion, $g(\omega) \propto \omega^2$ (Debye model). The density of states is the key to the heat capacity.

**Inelastic neutron scattering.** The standard tool for measuring phonon dispersion. The neutron exchanges energy and momentum with a phonon; measuring both gives $\omega(\vec{q})$ directly. Triple-axis spectrometers are the classical instruments.

**Phonons in graphene and 2D materials.** 2D materials have out-of-plane acoustic (ZA, "flexural") modes with $\omega \propto q^2$ (not $\omega \propto q$). This is unique to 2D and gives graphene its negative thermal expansion coefficient.

**Acoustic and optical branches in semiconductors.** For silicon ($p = 2$), there are 3 acoustic + 3 optical branches. The optical phonons at the BZ centre are at $\sim 64$ meV (TO) and $\sim 52$ meV (LO) — important for electron–phonon coupling.

**Phonon–phonon interaction.** Phonons interact via the anharmonic parts of the interatomic potential. This gives finite phonon lifetimes, thermal expansion, and finite thermal conductivity. The Grüneisen parameter characterises the anharmonicity.

**Umklapp processes.** Phonon–phonon scattering events where crystal momentum is conserved modulo a reciprocal lattice vector. Umklapp processes are essential for finite thermal conductivity (otherwise heat would flow without resistance).

**Optical spectroscopy of phonons.** Infrared absorption and Raman scattering probe optical phonons. At the BZ centre, the LO–TO splitting is observed (the Lyddane–Sachs–Teller relation).

**Lyddane–Sachs–Teller (LST) relation.** $\omega_\text{LO}^2 / \omega_\text{TO}^2 = \epsilon_0 / \epsilon_\infty$ — the ratio of LO to TO phonon frequencies equals the square root of the ratio of static to high-frequency dielectric constants. A fundamental relation in ionic crystals.

**Phonon polaritons.** Coupled phonon–photon modes in polar crystals. The dispersion has an upper and lower branch, separated by a gap. Detected by Raman scattering.

**Soft modes and phase transitions.** Some phonons have $\omega \to 0$ at certain temperatures (soft modes). This is the signature of a structural phase transition (the lattice becomes unstable to a distortion). Examples: ferroelectric transitions in BaTiO$_3$, structural transitions in perovskites.

**Phonon contribution to thermal expansion.** The anharmonicity of the interatomic potential makes the average atomic displacement depend on temperature. The Grüneisen parameter $\gamma = -d \ln \omega / d \ln V$ characterises the effect.

**Dispersive vs. non-dispersive phonons.** A non-dispersive mode has $\omega = v q$ (constant velocity, e.g. sound at low $q$). A dispersive mode has $\omega(q)$ non-linear, e.g. near the BZ boundary. Optical modes are usually more dispersive than acoustic.

**Acoustic phonons and sound.** Low-frequency acoustic phonons are just sound. The speed of sound (transverse and longitudinal) is determined by the elastic constants. The attenuation of sound by phonon–phonon scattering gives the thermal conductivity at low temperatures.

**Phonons and superconductivity.** In conventional superconductors, electrons form Cooper pairs via the exchange of phonons. The electron–phonon coupling is the basis of BCS theory. The isotope effect (dependence of $T_c$ on isotope mass) was the first evidence.

**Phonons in nanostructures.** In a small structure, the phonon spectrum is discrete (the wavelength is bounded by the size). The heat capacity, thermal conductivity, and other properties differ from the bulk. Important for thermoelectric materials, microelectronics, and quantum devices.

**Optical tweezers and phonons.** Laser-cooled atoms in optical lattices simulate phonon physics, with tunable dispersion and interaction. A modern playground for lattice dynamics.

**Phonons and the Casimir effect.** The Casimir force between two closely spaced plates can be understood as the difference in zero-point phonon (and photon) modes inside and outside the gap. Phonons and photons together give the Casimir effect.

**Quantum fluids and zero-point phonons.** In helium-4, the zero-point motion is so large that the liquid does not solidify at ambient pressure — a manifestation of large phonon zero-point energy.

**Phonons in glasses.** Disordered solids have phonons too, but with much shorter mean free paths. The thermal conductivity of glasses is much lower than that of crystals. The "boson peak" is a feature of the vibrational density of states of glasses.

**Phonons in biological molecules.** Protein vibrations are in the THz range; their role in function is an active research area. Phonons may play a role in enzyme catalysis.

**Acoustic phonons at surfaces.** Surface acoustic waves (SAWs) are 2D phonons localised at the surface. Used in electronic filters and sensors.

**Magnons.** Magnons are spin waves, the magnetic analogue of phonons. They can hybridise with phonons in magnetically ordered materials.

**Plasmons.** Plasmons are collective oscillations of electrons. The phonon–plasmon coupling is important in polar semiconductors.

**Inelastic X-ray scattering.** Modern technique using synchrotron radiation, with meV energy resolution. Complementary to neutron scattering (better for small samples, high-energy phonons).

**Phonon–photon coupling.** In a polar crystal, optical phonons couple to infrared photons. The result is the phonon polariton, with a characteristic dispersion.

**Heat capacity of phonons (preview).** The Debye model: $C_V = 9 N k_B (T/\theta_D)^3 \int_0^{\theta_D/T} \frac{x^2 e^x}{(e^x - 1)^2} dx$, with $\theta_D$ the Debye temperature. $C_V \propto T^3$ at low $T$, $C_V = 3 N k_B$ (Dulong–Petit) at high $T$. Covered in detail in the next lesson.

## Key Ideas
- 1D monatomic: $\omega(q) = 2 \sqrt{K/m} |\sin(q a/2)|$.
- Acoustic branch: $\omega \to 0$ as $q \to 0$.
- Optical branch: finite $\omega$ at $q = 0$ (diatomic lattice).
- Phonons: $\hbar \omega$, $\hbar \vec{q}$, Bose–Einstein statistics.
- 3 acoustic + $3(p-1)$ optical branches for $p$ atoms per cell.

## Worked Examples
**Example 1 — 1D monatomic dispersion.** $m = 12 \times 1.66 \times 10^{-27}\text{ kg}$ (carbon), $K = 50\text{ N/m}$, $a = 0.25\text{ nm}$. $\omega_\text{max} = 2 \sqrt{50/(2 \times 10^{-26})} \approx 4.5 \times 10^{13}\text{ rad/s}$. Speed of sound: $a \sqrt{K/m} = 0.25 \times 10^{-9} \times \sqrt{50/(2 \times 10^{-26})} \approx 5.6 \times 10^3\text{ m/s}$. Reasonable for a stiff solid.

**Example 2 — NaCl optical phonon.** $m_\text{Na} = 23\text{ u}$, $m_\text{Cl} = 35.5\text{ u}$. $K \sim 20\text{ N/m}$. $\omega_0 = \sqrt{2 K (1/m_\text{Na} + 1/m_\text{Cl})} = \sqrt{2 \times 20 \times (1/(23 \times 1.66 \times 10^{-27}) + 1/(35.5 \times 1.66 \times 10^{-27}))} \approx 4.7 \times 10^{13}\text{ rad/s}$. Frequency: $\nu = \omega/(2 \pi) \approx 7.5\text{ THz}$. Wavenumber: $\nu/c \approx 250\text{ cm}^{-1}$. In the far infrared.

**Example 3 — Number of phonons at room temperature.** For $\omega = 10^{13}\text{ rad/s}$ at $T = 300\text{ K}$: $\hbar \omega/(k_B T) = (1.05 \times 10^{-34} \times 10^{13})/(1.38 \times 10^{-23} \times 300) \approx 2.5$. $n = 1/(e^{2.5} - 1) \approx 0.082$. So at room temperature, low-frequency modes are sparsely populated.

**Example 4 — Number of modes in 1D and 3D.** 1D monatomic, $N$ atoms: $N$ modes. 3D monatomic, $N$ atoms: $3 N$ modes. 1D diatomic, $N$ cells: $2 N$ modes. 3D diatomic, $N$ cells: $6 N$ modes. General: $3 N p$ for $N$ cells with $p$ atoms per cell.

## Common Misconceptions
- **"Atoms vibrate at the frequency of the phonon."** A single atom is part of many modes; its motion is a superposition of normal modes.
- **"Phonons are particles in the usual sense."** They are quasiparticles — quantised excitations of a collective mode.
- **"All phonons have the same velocity."** Only acoustic phonons at long wavelength; the dispersion is non-linear in general.
- **"Optical phonons are visible."** The name is historical; many optical phonons are in the infrared.

## Connections
Phonons are the foundation of solid-state thermal physics (next lesson on specific heats), transport (thermal conductivity, electrical resistance), and electron–phonon coupling (BCS superconductivity, Raman scattering, hot-electron relaxation). They are also the basis of sound and acoustics. In *Astrophysics I*, phonons do not arise (no crystal lattice), but the analogous concept — collective modes of a plasma — appears.

## Quick Check
1. State the dispersion relation for a 1D monatomic lattice.
2. What is the Brillouin zone in 1D?
3. What is the difference between acoustic and optical phonons?
4. State the Bose–Einstein distribution for phonons.
5. How many phonon branches does a 3D monatomic lattice have?

## Takeaway
- 1D monatomic: $\omega(q) = 2 \sqrt{K/m} |\sin(q a/2)|$, $\omega \to 0$ as $q \to 0$.
- Diatomic: acoustic + optical branches.
- Phonons: $\hbar \omega$, $\hbar \vec{q}$, Bose–Einstein statistics.
- 3D: 3 acoustic + $3 (p-1)$ optical for $p$ atoms/cell.
- Quantisation of lattice vibrations.
