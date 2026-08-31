***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-6
semesterName: Semester 6
subjectId: physics
subjectName: Physics
courseId: atomic-and-molecular-physics
courseName: Atomic and Molecular Physics
moduleId: atomic-and-molecular-physics-module-1
moduleName: Hydrogen and Multi-Electron Atoms
lessonId: atomic-and-molecular-physics-m1-l2
lessonName: Spin, Fine Structure and the Zeeman Effect
lessonNumber: 2
moduleNumber: 1
semesterNumber: 6
difficulty: intermediate
estimatedStudyMinutes: 55
releaseOrder: 2
prerequisites:
  - atomic-and-molecular-physics-m1-l1
  - introduction-to-quantum-mechanics-m3-l3
learningObjectives:
  - Describe electron spin and the spin–orbit coupling.
  - Compute the fine-structure splitting in hydrogen.
  - State the selection rules including fine structure.
  - Describe the normal and anomalous Zeeman effects.
concepts:
  - Spin–orbit coupling
  - Fine structure
  - Total angular momentum $J$
  - Landé g-factor
  - Normal Zeeman effect
  - Anomalous Zeeman effect
tags:
  - physics
  - atomic
  - spin
sourceType: authored-mechanics
sourceType: authored-courseware
assessmentHints:
  - problem-solving
  - derivation
  - conceptual
***

# Spin, Fine Structure and the Zeeman Effect

## Overview
Hydrogen's energy levels are not degenerate in detail. The electron's spin couples to its orbital motion (spin–orbit interaction), splitting each level $n, \ell$ into two levels with $j = \ell \pm 1/2$. External magnetic fields (Zeeman effect) and electric fields (Stark effect) split the levels further. This lesson develops the spin–orbit interaction, the fine structure of hydrogen, the selection rules with fine structure, and the Zeeman effects.

## Learning Path
- What you should already know: hydrogen orbitals and quantum numbers, spin, angular momentum.
- What this lesson adds: the fine structure (spin–orbit, relativistic corrections, Darwin), the Zeeman effect (normal and anomalous), and the corresponding selection rules.
- What it unlocks: atomic spectroscopy, the physics of the periodic table, the behaviour of atoms in magnetic fields, and the basis of atomic clocks.

## Core Explanation
**Spin–orbit interaction.** The electron has a magnetic moment $\vec{\mu} = -g_s (e/(2m)) \vec{S}$ with $g_s \approx 2$. In the rest frame of the electron, the orbiting nucleus produces a magnetic field $\vec{B} = -(1/(m_e c^2 r)) dV/dr \vec{L}$. The interaction is $H_{SO} = -\vec{\mu} \cdot \vec{B} = (g_s/(2 m_e^2 c^2 r)) (1/r) dV/dr \vec{L} \cdot \vec{S}$.

**For hydrogen.** $V(r) = -e^2/(4 \pi \varepsilon_0 r)$, so $dV/dr = e^2/(4 \pi \varepsilon_0 r^2)$. Then $H_{SO} = (g_s e^2)/(8 \pi \varepsilon_0 m_e^2 c^2) (1/r^3) \vec{L} \cdot \vec{S}$.

**Total angular momentum.** $\vec{J} = \vec{L} + \vec{S}$. Eigenvalues: $J^2$ has eigenvalue $\hbar^2 j(j+1)$ with $j = \ell \pm 1/2$ (for $\ell \ge 1$; for $\ell = 0$, only $j = 1/2$). $\vec{L} \cdot \vec{S} = (J^2 - L^2 - S^2)/2 = \hbar^2 [j(j+1) - \ell(\ell+1) - 3/4]/2$.

**Fine structure of hydrogen.** The spin–orbit splitting plus the relativistic kinetic energy correction plus the Darwin term give the fine structure of hydrogen:

$$E_{n, j} = -\frac{13.6\text{ eV}}{n^2} \left[1 + \frac{\alpha^2}{n} \left(\frac{1}{j + 1/2} - \frac{3}{4n}\right)\right],$$

where $\alpha = e^2/(4 \pi \varepsilon_0 \hbar c) \approx 1/137$ is the fine structure constant. The correction is $\sim \alpha^2 \sim 10^{-4}$, splitting each $n$ level into $n$ sub-levels (for $\ell \ge 1$).

**Level degeneracies (fine structure).** $E_{n,j}$ depends on $j$. The number of states with given $j$ is $2j + 1$ (for the $m$ values). Total: $\sum_{j=1/2}^{n-1/2} (2j + 1) = n^2$ (sum of $1 + 3 + 5 + \ldots$). The original $n^2$-fold degeneracy is split but not removed (because spin is now included).

**Lamb shift.** A small additional shift (not in the Dirac equation): the $2s_{1/2}$ and $2p_{1/2}$ levels (degenerate in the Dirac theory) are split by $\sim 1058$ MHz in hydrogen. Caused by QED vacuum fluctuations (the self-energy of the electron in the field of the nucleus). Confirmed by Lamb and Retherford in 1947.

**Hyperfine structure.** The interaction of the electron's magnetic moment with the proton's magnetic moment. The Hamiltonian is $H_\text{hf} = A \vec{I} \cdot \vec{S}$ (Fermi contact interaction, for $s$ states). The $1s$ ground state of hydrogen is split: $F = 0$ (singlet) and $F = 1$ (triplet), with $\Delta E \approx 5.9 \times 10^{-6}$ eV. The $1s$ hyperfine transition is the famous $21$ cm line ($1420$ MHz).

**Selection rules (with spin).** Electric dipole: $\Delta \ell = \pm 1$, $\Delta j = 0, \pm 1$ (not $0 \to 0$), $\Delta m_j = 0, \pm 1$. The spin-selection rule $\Delta s = 0$ is automatic for electric dipole (the dipole operator does not act on spin).

**Strength of fine structure.** $\Delta E_\text{fs} \sim \alpha^2 E_n \sim 10^{-4} \times 13.6\text{ eV}/n^3 \sim 10^{-4}\text{ eV}/n^3$. For $n = 2$, $\Delta E \sim 10^{-4}\text{ eV} \sim 0.1\text{ meV}$. Comparable to the natural linewidth ($h/\tau \sim 10^{-7}\text{ eV}$ for the $2p$ state). Resolvable with high-resolution spectroscopy.

**Magnetic moment of the electron.** $\vec{\mu} = -g_s \mu_B \vec{S}/\hbar$, where $\mu_B = e \hbar/(2 m_e)$ is the Bohr magneton. The $g$-factor of the electron is $g_s \approx 2.002$. The anomalous $g-2$ is a famous QED prediction.

**Zeeman effect.** A uniform external magnetic field $B$ along $z$ adds $H_Z = -\vec{\mu} \cdot \vec{B} = \mu_B B (L_z + g_s S_z)/\hbar$. The energy is $-\mu_B B (m + g_s m_s)$.

**Normal Zeeman effect.** For spin-zero atoms (e.g. even isotopes with $I = 0$), the spin contribution is absent. The energy is $-\mu_B B m$. Each level splits into $2 \ell + 1$ equally spaced sublevels, separated by $\mu_B B$. Selection rule $\Delta m = 0, \pm 1$ gives three groups of lines (the normal Zeeman triplet).

**Anomalous Zeeman effect.** When spin is included, the splitting is more complex. The Landé $g$-factor gives the magnetic moment of a state with total $J$:

$$g_J = 1 + \frac{J(J+1) + S(S+1) - L(L+1)}{2 J(J+1)}.$$

The energy is $E = \mu_B B g_J m_J$. The pattern depends on $J, L, S$ and the selection rules.

**Weak-field Zeeman effect.** When the Zeeman splitting is smaller than the fine structure. The good quantum numbers are $J$ and $m_J$. The energy is the fine-structure energy plus $\mu_B B g_J m_J$.

**Strong-field Zeeman effect (Paschen–Back).** When the Zeeman splitting is larger than the fine structure. The good quantum numbers are $m_L$ and $m_S$ (the spin–orbit coupling is broken by the field). The energy is the unperturbed energy plus $\mu_B B (m_L + g_s m_S)$.

**Intermediate-field Zeeman effect.** Complex pattern; the spin–orbit and Zeeman couplings compete.

**Selection rules for the Zeeman effect.** $\Delta m_J = 0$ ($\pi$ polarisation, light parallel to $B$) or $\pm 1$ ($\sigma^\pm$ polarisation, light perpendicular to $B$). The polarisation depends on the direction of observation.

**Stark effect.** A uniform external electric field $F$ couples to the electric dipole moment: $H_S = e \vec{F} \cdot \vec{r}$. For hydrogen (linear Stark effect), the degenerate $n$ levels split linearly in $F$ (because of the accidental degeneracy of opposite-$m$ states). For non-degenerate states, the effect is quadratic in $F$.

**Quadratic Stark effect.** The energy shift is $\Delta E \propto F^2$ (from second-order perturbation theory). Important in non-hydrogenic atoms and in molecules.

**AC Stark effect (light shift).** An oscillating electric field (e.g. a laser) shifts the energy levels by an amount proportional to the intensity. The basis of optical trapping, laser cooling, and electromagnetically induced transparency.

**Hyperfine structure in a magnetic field.** The Breit–Rabi formula gives the energy of a state with $F$ (total angular momentum including nuclear spin) in a magnetic field. Used in atomic clocks (e.g. the Cs fountain clock uses the $F = 4 \to F = 3$ hyperfine transition at $9.2$ GHz).

**Atomic clocks.** The most precise clocks use hyperfine transitions in Cs ($9.2$ GHz), Rb ($6.8$ GHz), or H ($1.42$ GHz). The SI second is defined by the Cs transition: $9,192,631,770$ periods.

**Selection rules for hyperfine transitions.** Magnetic dipole: $\Delta F = 0, \pm 1$ (not $0 \to 0$), $\Delta m_F = 0, \pm 1$. (Same as for any magnetic dipole transition.)

**Landé g-factor for hydrogen $2p$.** $2p_{1/2}$: $J = 1/2$, $L = 1$, $S = 1/2$. $g_J = 1 + (3/4 + 3/4 - 2)/(2 \cdot 3/4) = 1 + 1/3 = 4/3$. So $g = 4/3$ for $2p_{1/2}$. For $2p_{3/2}$: $J = 3/2$, $L = 1$, $S = 1/2$. $g_J = 1 + (15/4 + 3/4 - 2)/(2 \cdot 15/4) = 1 + (7/2)/(15/2) = 1 + 7/15 = 22/15 \approx 1.467$.

**Sodium D lines.** The $3p \to 3s$ transition. Spin–orbit coupling splits $3p$ into $3p_{1/2}$ and $3p_{3/2}$. The two D lines are at $589.0$ nm and $589.6$ nm. The fine-structure splitting is $\sim 17$ cm$^{-1}$.

**Hartree atomic units.** Natural units for atomic physics: $m_e = e = \hbar = 4 \pi \varepsilon_0 = 1$. In these units, $a_0 = 1$ (the Bohr radius), $E_h = 1$ (the Hartree energy $= 27.2$ eV), and the speed of light is $c = 1/\alpha \approx 137$. Convenient for atomic calculations.

**The Dirac equation.** The relativistic wave equation for spin-1/2 particles. Predicts the fine structure (including spin–orbit) automatically. The energy levels are $E_{n, j} = m c^2 \left[1 + \left(\frac{\alpha}{n - j - 1/2 + \sqrt{(j + 1/2)^2 - \alpha^2}}\right)^2\right]^{-1/2}$. For $\alpha \to 0$, this reduces to the Bohr formula plus fine structure.

**Quantum numbers in the Dirac theory.** $n, j, m_j, m_s$. No separate orbital quantum number $\ell$ (it is mixed by the spin–orbit coupling). But for small $\alpha$, the states with $j = \ell + 1/2$ and $j = \ell - 1/2$ are nearly degenerate with the corresponding non-relativistic $\ell$ states.

**Dirac hydrogen ground state.** $1s_{1/2}$: $n = 1$, $j = 1/2$, $m_j = \pm 1/2$. Energy $E = m c^2 \sqrt{1 - \alpha^2} \approx m c^2 - 13.6$ eV. Includes the relativistic mass-energy $m c^2$.

**Relativistic correction to the kinetic energy.** Expand the relativistic kinetic energy $\sqrt{p^2 c^2 + m^2 c^4} - m c^2 = p^2/(2m) - p^4/(8 m^3 c^2) + \ldots$. The next term $-p^4/(8 m^3 c^2)$ is a perturbation. Average over the hydrogen ground state: $\langle p^4 \rangle = (\hbar/a_0)^4 \cdot \text{const}$. Gives an energy shift $\sim \alpha^2 E_n$, contributing to the fine structure.

**Darwin term.** A small correction to the Dirac Hamiltonian for $s$ states (and only $s$ states). It comes from the zitterbewegung of the electron. The energy shift is $\sim \alpha^2 E_n$ for $n s$ states.

**Total fine structure.** For hydrogen:

$$\Delta E_\text{fs} = E_{n, j} - E_n^{(0)} = \frac{E_n^{(0)} \alpha^2}{n} \left(\frac{1}{j + 1/2} - \frac{3}{4n}\right).$$

A combination of spin–orbit, relativistic, and Darwin terms.

**Selection rules including fine structure.** $\Delta \ell = \pm 1$ (orbital), $\Delta j = 0, \pm 1$ (not $0 \to 0$), $\Delta m_j = 0, \pm 1$. (No change in $n$ for the principal quantum number unless we are talking about transitions between $n$ levels.) The spin-selection rule $\Delta s = 0$ is automatic.

**The $21$ cm line of hydrogen.** The hyperfine transition $1s, F = 1 \to F = 0$ at $1420.405$ MHz. A magnetic dipole transition. Important in radio astronomy for mapping the Galaxy's neutral hydrogen.

**Hyperfine splitting constant.** $A$ defined by $H_\text{hf} = A \vec{I} \cdot \vec{S}/(\hbar^2)$ (with $\vec{F} = \vec{I} + \vec{S}$). For hydrogen, $A \approx 1420$ MHz $\times h$. For deuterium, $A$ is smaller (different nuclear magnetic moment). For heavier atoms, $A$ varies widely.

**Coupling of $\vec{L}$ and $\vec{S}$.** $LS$ coupling (Russell–Saunders): for light atoms, $\vec{L}$ and $\vec{S}$ couple separately before $\vec{L} + \vec{S} = \vec{J}$. $jj$ coupling: for heavy atoms, the spin–orbit coupling is so strong that each electron's $\ell$ and $s$ couple first, then the $j$'s combine. The two limits are connected by the *intermediate coupling* regime.

**Hund's rules (multi-electron atoms).** For a given electron configuration:
1. Maximise $S$ (Hund's first rule, the multiplicity rule).
2. Maximise $L$ (Hund's second rule).
3. $J = |L - S|$ if the subshell is less than half-full, $J = L + S$ if more than half-full (Hund's third rule).

These rules predict the ground-state term of a multi-electron atom.

**Term symbols.** $^{2S+1} L_J$, where $2S + 1$ is the spin multiplicity (singlet, doublet, triplet, etc.) and $L$ is the total orbital angular momentum ($S, P, D, F, \ldots$). Examples: $^1 S_0, ^2 P_{1/2}, ^3 P_2$.

**Landé interval rule.** For a multiplet, the energy spacing between adjacent $J$ levels is proportional to $J$ (the larger $J$). I.e., $E(J) - E(J-1) = A J$ for some constant $A$. (Holds for $LS$ coupling with $L$-$S$ interaction.)

**Landé g-factor (general).** For $LS$ coupling:

$$g_J = 1 + \frac{J(J+1) + S(S+1) - L(L+1)}{2 J(J+1)}.$$

Used in the anomalous Zeeman effect to compute the magnetic moment of a state with total $J$, $L$, $S$.

**Anomalous Zeeman effect for sodium $3p_{1/2}$.** $L = 1, S = 1/2, J = 1/2$. $g_J = 1 + (3/4 + 3/4 - 2)/(2 \cdot 3/4) = 1 + 1/3 = 4/3$. Energy shift in field $B$: $\Delta E = \mu_B B g_J m_J = (4/3) \mu_B B m_J$ for $m_J = \pm 1/2$. The line splits into two components (a doublet), each polarised.

**Anomalous Zeeman effect for sodium $3p_{3/2}$.** $L = 1, S = 1/2, J = 3/2$. $g_J = 1 + (15/4 + 3/4 - 2)/(15/2) = 1 + (7/2)/(15/2) = 22/15 \approx 1.467$. Energy shift: $\Delta E = (22/15) \mu_B B m_J$ for $m_J = -3/2, -1/2, 1/2, 3/2$. The line splits into four components.

**Selection rules for polarisation.** $\Delta m_J = 0$: $\pi$ transitions, observed parallel to $B$. $\Delta m_J = \pm 1$: $\sigma^\pm$ transitions, observed perpendicular to $B$. (For unpolarised light, the polarisations add up.)

**The Zeeman effect in astronomy.** The Zeeman splitting of spectral lines in the Sun's photosphere and in sunspots is used to measure magnetic fields on the Sun. Magnetic field strengths of thousands of Gauss are common in sunspots.

**Magnetic resonance imaging (MRI).** Based on the NMR (nuclear magnetic resonance) of protons (hydrogen nuclei) in a strong magnetic field. The resonance frequency is $\omega = \gamma B$, where $\gamma$ is the gyromagnetic ratio of the proton. Spatial resolution is achieved by gradients in $B$.

**Electron spin resonance (ESR).** Also called electron paramagnetic resonance (EPR). Resonant absorption of microwaves by unpaired electrons in a magnetic field. Used to study free radicals, defects, and transition metal ions.

**Nuclear magnetic resonance (NMR).** Resonant absorption of radio waves by nuclei in a magnetic field. The basis of NMR spectroscopy and MRI.

**Hyperfine interaction in astronomy.** The $21$ cm line of hydrogen is used to map the distribution of neutral hydrogen in the Galaxy and in other galaxies. The Doppler shift gives the velocity; the intensity gives the column density.

**Stark effect in white dwarfs.** The high electric fields in white dwarfs ($10^{10}$ V/m) shift the hydrogen energy levels significantly. The Stark effect must be included in the model atmospheres of white dwarfs.

**Mössbauer spectroscopy.** Recoilless nuclear resonance absorption. Hyperfine interactions in the nucleus are probed. Used in solid-state physics, chemistry, and biology.

**Muon spin rotation ($\mu$SR).** Polarised muons are stopped in a material; the precession of their spin in the local magnetic field is measured. Probes magnetic structure and dynamics.

**Trapped ions for atomic clocks.** Single ions (e.g. Yb$^+$, Al$^+$) are laser-cooled and trapped. Their electronic or hyperfine transitions are used as frequency references. The most precise clocks have fractional uncertainty $< 10^{-18}$.

**Optical clocks.** Use optical transitions (e.g. in Sr, Yb) with frequencies $\sim 10^{15}$ Hz. Combined with optical frequency combs, achieve fractional uncertainties $< 10^{-18}$. Redefinition of the SI second based on optical clocks is anticipated.

**Magnetic resonance force microscopy.** Detects the tiny magnetic forces from a single electron or nucleus. Imaging at the atomic scale.

**Anomalous magnetic moment of the electron.** $g_e/2 = 1.00115965218073(28)$. The QED prediction matches experiment to 12 significant figures — the most precisely verified prediction in physics.

**Connection to quantum field theory.** The anomalous magnetic moment is calculated using Feynman diagrams in QED. The electron interacts with the quantised electromagnetic field (virtual photons), giving a small correction to the Dirac value $g = 2$.

**Lamb–Retherford experiment (1947).** Measured the $2s_{1/2} - 2p_{1/2}$ splitting in hydrogen. Found $\sim 1058$ MHz, in agreement with QED (within the experimental uncertainty of the time). The birth of modern precision QED.

**Quantum beats.** When an atom is excited to a coherent superposition of close levels, the time-dependent fluorescence shows beats at the level separation frequency. A direct measurement of fine structure.

**Hanle effect.** Depolarisation of resonance radiation by a magnetic field. Used to measure weak magnetic fields (e.g. in the solar corona, in atomic vapours).

**Level crossing spectroscopy.** When two atomic levels cross as a function of magnetic field, the resonance radiation shows a change. A high-resolution technique for measuring fine and hyperfine structure.

**Quantum electrodynamics (QED) tests.** The hydrogen fine structure, the Lamb shift, the anomalous magnetic moment, and the hyperfine structure are the most precise tests of QED. All agree to many significant figures.

**Connection to other hydrogen-like systems.** The same analysis applies to positronium, muonium ($\mu^+ e^-$), and antimatter hydrogen. The frequencies are slightly different (due to different masses) but the structure is the same.

**Why this matters.** Spin, fine structure, and the Zeeman effect are the workhorses of atomic spectroscopy. They reveal the details of atomic structure (term symbols, selection rules) and allow precise measurements (atomic clocks, magnetometers, MRI).

## Key Ideas
- Spin–orbit coupling: $H_{SO} = \xi(r) \vec{L} \cdot \vec{S}$, fine structure $\sim \alpha^2 E_n$.
- Total angular momentum $J = L \pm S$, Landé g-factor.
- Zeeman effect: normal (singlet) vs anomalous (multiplet).
- Selection rules: $\Delta \ell = \pm 1$, $\Delta j = 0, \pm 1$ (not $0 \to 0$).
- Hyperfine structure: coupling to nuclear spin, basis of atomic clocks.

## Worked Examples
**Example 1 — Fine structure of hydrogen $n = 2$.** $E_2 = -3.4$ eV. Fine-structure correction: $\Delta E = E_2 \alpha^2/2 \cdot (1/(j + 1/2) - 3/16) = -3.4 \times (1/137)^2/2 \times (\ldots) = -3.4 \times 5.3 \times 10^{-5}/2 \times \ldots \sim 10^{-4}$ eV. For $2s_{1/2}$: $j = 1/2$, $1/(j + 1/2) = 1$, correction $= 1 - 3/16 = 13/16$. For $2p_{1/2}$: $j = 1/2$, $1/(j + 1/2) = 1$, correction $= 13/16$. Degenerate (Lamb shift removes this). For $2p_{3/2}$: $j = 3/2$, $1/(j + 1/2) = 1/2$, correction $= 1/2 - 3/16 = 5/16$. Difference: $13/16 - 5/16 = 8/16 = 1/2$. So $2p_{1/2} - 2p_{3/2} = (1/2) \times E_2 \alpha^2/2 = E_2 \alpha^2/4 = 3.4 \times 5.3 \times 10^{-5}/4 \approx 4.5 \times 10^{-5}$ eV. (The $2p$ fine structure.)

**Example 2 — Landé g-factor for $^2 P_{1/2}$.** $L = 1, S = 1/2, J = 1/2$. $g_J = 1 + (J(J+1) + S(S+1) - L(L+1))/(2 J(J+1)) = 1 + (3/4 + 3/4 - 2)/(3/2) = 1 + 1/3 = 4/3$. ✓

**Example 3 — Sodium D line Zeeman.** $3p_{3/2} \to 3s_{1/2}$ transition. $3s_{1/2}$: $L = 0, S = 1/2, J = 1/2$, $g = 2$. $3p_{3/2}$: $L = 1, S = 1/2, J = 3/2$, $g = 22/15$. In a field $B$, the energy shifts are $\mu_B B g m_J$. The transitions obey $\Delta m_J = 0, \pm 1$. The pattern has 6 components (4 in the lower level, 6 in the upper, but selection rules reduce it).

**Example 4 — $21$ cm line frequency.** $1420.405$ MHz. Wavelength: $\lambda = c/f = 3 \times 10^8 / 1.42 \times 10^9 = 0.21$ m = $21$ cm. ✓

**Example 5 — Hyperfine structure of $1s$ hydrogen.** $A \vec{I} \cdot \vec{S}$ with $I = S = 1/2$. $F = 0$ (singlet) and $F = 1$ (triplet). Splitting $\Delta E = A[(F(F+1) - I(I+1) - S(S+1))/2]$ evaluated for $F = 1$ minus for $F = 0$: $\Delta E = A[2 - 0 - 0 - 0] = A$. So $\Delta E = A$. For hydrogen, $A = 5.9 \times 10^{-6}$ eV $= 1420$ MHz $\times h$. ✓

## Common Misconceptions
- **"Spin–orbit coupling is a magnetic effect."** It arises from the magnetic field in the electron's rest frame, but it's an electromagnetic effect that comes from relativity and the spin magnetic moment.
- **"The Zeeman effect is always a triplet."** Only for singlet states (no spin). With spin, the pattern is more complex (anomalous Zeeman).
- **"The $21$ cm line is forbidden."** It is, in the sense of being a magnetic dipole transition (slower than electric dipole by a factor of $\alpha^2$). But hydrogen is so abundant that the line is easily seen.
- **"Selection rules are absolute."** They are for the leading multipole. Higher multipoles and forbidden transitions are weaker but present.

## Connections
Spin, fine structure, and the Zeeman effect are the foundation of atomic spectroscopy. The same concepts apply to multi-electron atoms, molecules, and solids. The atomic clock is the most precise measurement in physics. MRI and NMR are based on the same physics. The anomalous magnetic moment is the most precise test of QED.

## Quick Check
1. State the spin–orbit interaction.
2. What is the fine structure of hydrogen?
3. What is the Landé g-factor?
4. Distinguish normal and anomalous Zeeman effects.
5. What is the $21$ cm line?

## Takeaway
- Spin–orbit: $H_{SO} = \xi(r) \vec{L} \cdot \vec{S}$, fine structure $\sim \alpha^2 E_n$.
- Zeeman: normal (singlet) vs anomalous (multiplet), Landé g-factor.
- Hyperfine: $H_\text{hf} = A \vec{I} \cdot \vec{S}$, basis of atomic clocks.
- Selection rules: $\Delta \ell = \pm 1$, $\Delta j = 0, \pm 1$ (not $0 \to 0$).
- QED tests: fine structure, Lamb shift, anomalous magnetic moment.
