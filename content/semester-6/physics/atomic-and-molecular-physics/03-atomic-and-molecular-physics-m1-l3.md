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
moduleName: Atomic Structure and Spectra
lessonId: atomic-and-molecular-physics-m1-l3
lessonName: Atomic Spectra and Selection Rules
lessonNumber: 3
moduleNumber: 1
semesterNumber: 6
difficulty: intermediate
estimatedStudyMinutes: 55
releaseOrder: 3
prerequisites:
  - atomic-and-molecular-physics-m1-l1
  - atomic-and-molecular-physics-m1-l2
learningObjectives:
  - Explain the origin of discrete atomic emission and absorption lines using stationary states and photon energy conservation.
  - State and apply the electric-dipole selection rules for hydrogen-like atoms.
  - Read a Grotrian diagram and predict allowed transitions among quantum states.
concepts:
  - Bohr frequency condition
  - Spontaneous and stimulated emission
  - Einstein A and B coefficients
  - Selection rules
  - Grotrian diagram
  - Fine structure
tags:
  - physics
  - atomic-physics
  - spectroscopy
  - quantum
sourceType: authored-courseware
assessmentHints:
  - conceptual
  - derivation
  - problem-solving
  - short-answer
***

# Atomic Spectra and Selection Rules

## Overview

The two previous lessons built the quantum description of one-electron and many-electron atoms. This lesson connects that description to the experimental reality of spectroscopy: every line you see in a discharge tube, every absorption feature in a stellar atmosphere, and every laser photon corresponds to a transition between two stationary states of an atom obeying definite quantum-mechanical rules. We derive the Bohr frequency condition from energy conservation, sketch Einstein's A and B coefficients as a way of describing how atoms exchange photons with a radiation field, and then specialise to hydrogen and the electric-dipole selection rules that govern which transitions are bright and which are forbidden. The lesson closes with a guided reading of a Grotrian diagram, the canonical pictographic tool for organising atomic levels and transitions.

## Learning Path

- **What you should already know**: the quantisation of angular momentum and energy in hydrogen (Lesson m1-l1), the aufbau and Hund's rules that organise many-electron atoms (Lesson m1-l2), and the basic structure of the Schrödinger equation.
- **What this lesson adds**: a quantitative bridge between stationary states and observed spectra, the language of Einstein coefficients, and the rules that select which transitions can actually occur.
- **What later lessons this will unlock**: laser action and population inversion in Lesson m2-l2, X-ray spectra in Lesson m2-l3, and the molecular analogue (rotational/vibrational selection rules) in Lesson m3-l2.

## Core Explanation

A **stationary state** of an atom is an energy eigenstate of the full atomic Hamiltonian. Although the wavefunction oscillates in time as $\psi(\mathbf{r},t) = \psi(\mathbf{r})\,e^{-iE t/\hbar}$, all probability densities and expectation values are time-independent. The atom does not radiate while in a stationary state; radiation is associated only with transitions between such states.

The energy of the photon emitted or absorbed in a transition between states with energies $E_i$ and $E_f$ is set by the **Bohr frequency condition**:

$$h\nu = E_i - E_f = \Delta E.$$

This is just conservation of energy, with the photon carrying away (for emission) or supplying (for absorption) the difference. For hydrogen, using $E_n = -13.6\,\text{eV}/n^2$ gives the Lyman, Balmer, Paschen and other series depending on which lower level the electron ends up in.

A more general framework was given by Einstein in 1916. He considered an ensemble of two-level atoms interacting with a radiation field of spectral energy density $u(\nu)$ and wrote three processes:

- **Absorption**: rate $B_{12}\,u(\nu)$ for the upward transition $1 \to 2$.
- **Stimulated emission**: rate $B_{21}\,u(\nu)$ for the downward transition $2 \to 1$ induced by an incoming photon of the right frequency.
- **Spontaneous emission**: rate $A_{21}$ for the downward transition occurring without external stimulation, driven by vacuum fluctuations.

Detailed balance between these processes in thermal equilibrium fixes the relations

$$g_1 B_{12} = g_2 B_{21}, \qquad A_{21} = \frac{8\pi h \nu^3}{c^3} B_{21},$$

where $g_1, g_2$ are the degeneracies of the two levels. The $\nu^3$ factor in $A_{21}$ explains why ultraviolet and X-ray transitions have very short lifetimes while radio-frequency transitions can be extraordinarily long-lived.

Whether a given pair of states is actually connected by a transition is determined by the **matrix element** of the dipole operator $\mathbf{d} = -e\mathbf{r}$ between the two states:

$$\langle f | \mathbf{d} | i \rangle = \int \psi_f^*(\mathbf{r})\,(-e\mathbf{r})\,\psi_i(\mathbf{r})\, d^3 r.$$

The transition rate is proportional to the squared magnitude of this matrix element. The selection rules are the conditions under which this integral is non-zero.

For hydrogen, the relevant quantum numbers are $n, \ell, m_\ell, m_s$. The electric-dipole selection rules are:

- $\Delta \ell = \pm 1$ (parity must change because the dipole operator is odd).
- $\Delta m_\ell = 0, \pm 1$ depending on the polarisation of the photon.
- $\Delta m_s = 0$ (spin does not flip in electric-dipole transitions).
- $\Delta n$ is unrestricted; in practice only $\Delta n \ge 1$ is consistent with $\Delta \ell = \pm 1$.

The $\Delta \ell = \pm 1$ rule has a simple geometric reason: a photon carries one unit of angular momentum, so the atom's orbital angular momentum must change by one unit to compensate. The rule immediately forbids, for example, the $2s \to 1s$ transition in hydrogen — a famous puzzle, because if that transition were allowed hydrogen would emit a 10.2 eV Lyman-α photon instantly. The puzzle is resolved because the $2s$ state is metastable: it can only decay via two-photon emission with a lifetime of about 0.12 s, more than $10^7$ times longer than an allowed transition.

A **Grotrian diagram** is a level-and-arrow chart that organises all the terms of an atom (or ion) vertically by energy, with horizontal lines drawn at the energy of each term and arrows showing allowed transitions. Reading such a diagram is a foundational skill for any spectroscopist; you should be able to look at a Grotrian diagram for sodium, for instance, and immediately identify the famous sodium D lines at 588.995 nm and 589.592 nm as the $3p\,^2P_{3/2} \to 3s\,^2S_{1/2}$ and $3p\,^2P_{1/2} \to 3s\,^2S_{1/2}$ transitions of the one-electron outer shell, both allowed because $\ell$ changes by 1.

So far we have ignored the fine structure of hydrogen. Including relativistic corrections and spin-orbit coupling splits the degenerate $n$ levels into multiplets labelled by total angular momentum $j = \ell \pm 1/2$ and term symbols $n\,^{2S+1}L_J$. Transitions between these levels give the fine-structure splittings observed at high resolution, with the additional selection rule $\Delta J = 0, \pm 1$ (but $J = 0 \to J = 0$ is forbidden). The same rule, combined with parity, governs the rich spectra of alkali atoms and the famous Fraunhofer lines of the solar spectrum.

## Key Ideas

- **Stationary state**: an energy eigenstate of the atomic Hamiltonian; no radiation occurs while the atom is in such a state.
- **Bohr frequency condition**: $h\nu = E_i - E_f$; the photon energy equals the level difference.
- **Einstein A and B coefficients**: $A_{21}$ is the spontaneous emission rate, $B_{12}$ and $B_{21}$ are the stimulated absorption and emission rates; they obey $A_{21} \propto \nu^3 B_{21}$.
- **Electric-dipole selection rules** for hydrogen: $\Delta \ell = \pm 1$, $\Delta m_\ell = 0, \pm 1$, $\Delta m_s = 0$.
- **Metastable state**: a state that cannot decay by electric-dipole radiation; the $2s$ state of hydrogen is the canonical example.
- **Grotrian diagram**: a vertical level diagram showing all terms and the allowed transitions among them.
- **Fine-structure selection rules**: add $\Delta J = 0, \pm 1$ (with $J=0 \to J=0$ forbidden) to the basic dipole rules.

## Worked Examples

### Example 1 — A Balmer line of hydrogen

A hydrogen atom in the $n = 4$ state decays to the $n = 2$ state. Find the wavelength of the emitted photon and identify the spectral series.

**Solution.** The energy levels are $E_n = -13.6\,\text{eV}/n^2$. The photon energy is

$$h\nu = E_4 - E_2 = -13.6\left(\frac{1}{16} - \frac{1}{4}\right)\text{eV} = 13.6 \times \frac{3}{16}\,\text{eV} = 2.55\,\text{eV}.$$

The wavelength is

$$\lambda = \frac{hc}{h\nu} = \frac{1240\,\text{eV·nm}}{2.55\,\text{eV}} \approx 486\,\text{nm}.$$

This is the blue-green H$\beta$ line of the Balmer series. The selection rule $\Delta \ell = \pm 1$ permits the transition if the upper level has $\ell = 0$ or $2$ (the lower $n=2$ state has $\ell = 1$ in one of its $m_\ell$ components, or $\ell = 0$ in the other — but $\ell = 0 \to \ell = 0$ is forbidden, so only the $\ell = 1$ component of $n=2$ receives the photon, in the $4d \to 2p$ decay).

### Example 2 — Estimating spontaneous emission rate

The $2p \to 1s$ transition in hydrogen has $A_{21} \approx 6.27 \times 10^8\,\text{s}^{-1}$. Estimate $A_{21}$ for the analogous $3p \to 2s$ transition in hydrogen and comment on the comparison.

**Solution.** We use $A_{21} \propto \nu^3 |\langle f | \mathbf{r} | i \rangle|^2$. The transition frequency scales as $\nu \propto \Delta E / h$, and $\Delta E$ for $3p \to 2s$ is

$$\Delta E = 13.6\left(\frac{1}{4} - \frac{1}{9}\right)\,\text{eV} = 13.6 \times \frac{5}{36}\,\text{eV} \approx 1.89\,\text{eV}.$$

This is smaller than the 10.2 eV of Lyman-α by a factor of about 5.4. The matrix element scales roughly as $n^2 a_0$ for hydrogen, so for $n=3$ versus $n=2$ it grows by a factor of $(3/2)^2 = 2.25$. Putting the factors together:

$$\frac{A_{3p\to 2s}}{A_{2p\to 1s}} \approx \left(\frac{1.89}{10.2}\right)^3 \times \left(\frac{3}{2}\right)^4 \approx (0.185)^3 \times 5.06 \approx 0.032.$$

So $A_{3p\to 2s} \approx 2 \times 10^7\,\text{s}^{-1}$, corresponding to a radiative lifetime of about 50 ns. The lower transition rate reflects both the smaller photon energy and the different matrix element.

### Example 3 — Reading a Grotrian diagram

A Grotrian diagram for sodium shows the ground $3s\,^2S_{1/2}$ term, the $3p\,^2P_{1/2,3/2}$ doublet about 2.1 eV above it, and higher $ns, np, nd$ Rydberg series converging to the ionisation limit at 5.14 eV. Identify the two sodium D lines and state whether the $3s \to 4s$ transition is allowed by electric-dipole selection rules.

**Solution.** The D lines connect the $3p$ doublet to the $3s$ ground: $3p\,^2P_{1/2} \to 3s\,^2S_{1/2}$ is D2 at 588.995 nm and $3p\,^2P_{3/2} \to 3s\,^2S_{1/2}$ is D1 at 589.592 nm (the older spectroscopic convention numbers them oppositely; modern atomic physics uses the order shown here). Both are allowed because $\ell$ changes from 1 to 0.

The $3s \to 4s$ transition has $\Delta \ell = 0$, so it is **forbidden** as an electric-dipole transition. It can occur only as a magnetic-dipole or electric-quadrupole transition, with a much smaller rate, which is why the sodium $4s$ state is metastable on the timescale of allowed transitions.

## Common Misconceptions

- **"Atoms radiate continuously while in an excited state."** No. A stationary state does not radiate. Radiation is associated with the transition between two stationary states, and the rate of that transition is finite and well-defined.
- **"Selection rules are about the energy difference, not the geometry of the wavefunction."** The energy difference tells you the photon frequency; the matrix element $\langle f | \mathbf{r} | i \rangle$ tells you whether the transition is allowed. A large energy gap is not enough; the geometry of the two states must be compatible with the dipole operator.
- **"Forbidden transitions never happen."** They happen, just slowly. The $2s$ hydrogen state lives 0.12 s before two-photon decay; intercombination lines in light atoms like carbon or nitrogen are weak but observable; magnetic-dipole and electric-quadrupole transitions are routine in astrophysical plasmas.
- **"Spin can flip in an electric-dipole transition."** In the non-relativistic limit, $\Delta m_s = 0$. Spin-flip transitions require magnetic-dipole coupling, electric-quadrupole coupling, or — for very heavy atoms — significant spin-orbit mixing that lets nominally spin-forbidden lines borrow intensity from allowed ones.

## Connections

- The Bohr frequency condition $h\nu = \Delta E$ is the same relation you met in the photoelectric effect, in Compton scattering, and in the photon picture of blackbody radiation; here it is applied to bound-bound atomic transitions.
- The Einstein A and B coefficients are a conceptual cousin of the absorption and stimulated emission in a laser, which is the topic of Lesson m2-l2.
- The selection rule $\Delta \ell = \pm 1$ is the angular-momentum version of the same conservation principle that requires the photon to carry one unit of spin, which you saw in the spin-1 quantisation of light in modern quantum optics.
- The fine-structure notation $n\,^{2S+1}L_J$ is the same term-symbol language used in solid-state physics to label atomic terms contributing to valence and conduction bands.
- Forbidden lines that are too slow to see in the lab are routinely observed in low-density astrophysical plasmas; coronal green lines such as [Fe XIV] 530.3 nm are textbook examples of magnetic-dipole transitions in highly ionised iron.

## Quick Check

1. State the Bohr frequency condition and explain why it follows from energy conservation.
2. The $2s \to 1s$ transition in hydrogen is electric-dipole forbidden. Estimate its lifetime and explain the dominant decay channel.
3. A Grotrian diagram for lithium shows the $2s \to 2p$ resonance line. Is this transition allowed, and what is the change in orbital angular momentum?
4. Why is the spontaneous emission rate $A_{21}$ proportional to $\nu^3$ rather than just $\nu$?
5. The Lyman limit at 91.18 nm is the series limit of the Lyman series. What transition energy does it correspond to, and why is the line itself (to $n=1$) the strongest member of the series?

## Takeaway

- Stationary states do not radiate; radiation accompanies transitions between them.
- The Bohr frequency condition $h\nu = E_i - E_f$ sets the photon energy; Einstein's A and B coefficients describe the rates of spontaneous and stimulated processes.
- Electric-dipole selection rules — chiefly $\Delta \ell = \pm 1$ — determine which transitions are bright; forbidden transitions are slow but not absent.
- A Grotrian diagram is the working spectroscopist's map of all terms and allowed transitions of an atom or ion.
- The same physics underlies lasers, stellar atmospheres, fluorescent lamps, and the famous yellow sodium D lines.
