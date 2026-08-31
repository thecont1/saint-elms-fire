***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-6
semesterName: Semester 6
subjectId: physics
subjectName: Physics
courseId: nuclear-physics
courseName: Nuclear Physics
moduleId: nuclear-physics-module-2
moduleName: Radioactivity and Reactions
lessonId: nuclear-physics-m2-l1
lessonName: Radioactive Decays — α, β, γ
lessonNumber: 4
moduleNumber: 2
semesterNumber: 6
difficulty: foundation
estimatedStudyMinutes: 50
releaseOrder: 4
prerequisites:
  - nuclear-physics-m1-l1
  - nuclear-physics-m1-l3
learningObjectives:
  - Distinguish alpha, beta-minus, beta-plus, electron capture, and gamma decay by their physics and energetics.
  - Apply the Geiger–Nuttall law to estimate alpha-decay half-lives.
  - Use conservation of energy, momentum, and lepton number to balance nuclear reactions involving neutrinos.
concepts:
  - Alpha decay
  - Beta-minus and beta-plus decay
  - Electron capture
  - Gamma decay
  - Geiger–Nuttall law
  - Q-value
tags:
  - physics
  - nuclear-physics
  - radioactivity
  - particle-physics
sourceType: authored-courseware
assessmentHints:
  - conceptual
  - derivation
  - problem-solving
  - short-answer
***

# Radioactive Decays — α, β, γ

## Overview

Some nuclei are stable; many are not. Unstable nuclei decay by emitting particles or photons, transforming themselves into other nuclei in the process. The three principal decay modes are alpha decay (emission of a $^4$He nucleus), beta decay (transformation of a neutron into a proton or vice versa, with emission of an electron or positron and a neutrino), and gamma decay (emission of a high-energy photon from a de-exciting nucleus). This lesson works through each mode, derives the energetics and the basic systematics, and introduces the conservation laws that govern them. The lesson is foundational: the half-lives and decay energies treated here are the basis of radioactive dating, nuclear medicine, and the synthesis of heavy elements in stars.

## Learning Path

- **What you should already know**: the conservation of energy and momentum; the binding-energy curve and the Q-value of a reaction (Lesson m1-l1); the magic numbers and the basic structure of nuclear levels (Lesson m1-l3); the Coulomb barrier.
- **What this lesson adds**: the specific energetics and selection rules of alpha, beta, and gamma decay; the Geiger–Nuttall law; the role of the neutrino in beta decay; the role of the multipole order in gamma decay.
- **What later lessons this will unlock**: the decay chains and secular equilibrium (Lesson m2-l2), nuclear reactions, fission, and fusion (Lesson m2-l3), and the applications in medicine, energy, and dating (Module 3).

## Core Explanation

### Alpha decay

In alpha decay, a heavy nucleus emits a $^4$He nucleus (alpha particle), reducing its mass number by 4 and its atomic number by 2:

$$^A_ZX \to ^{A-4}_{Z-2}Y + ^4_2\text{He}.$$

The decay is energetically possible when the mass of the parent exceeds the sum of the masses of the daughter and the alpha:

$$Q = [M(^A_ZX) - M(^{A-4}_{Z-2}Y) - M(^4_2\text{He})] c^2 > 0.$$

A positive $Q$ is necessary but not sufficient; the alpha particle must also penetrate the Coulomb barrier of the daughter. The Gamow factor for tunnelling through the barrier gives a transmission probability

$$T \approx \exp\left[-2\int_{R}^{R_C} \kappa(r) dr\right], \quad \kappa(r) = \sqrt{\frac{2\mu (V(r) - E)}{\hbar^2}},$$

where $V(r) = Z_d Z_\alpha e^2/(4\pi\epsilon_0 r)$ is the Coulomb potential, $E$ is the alpha energy, and $R$ is the nuclear radius. The integral is dominated by the region near the outer turning point $R_C = Z_d Z_\alpha e^2/(4\pi\epsilon_0 E)$. Approximating,

$$T \approx \exp\left[-\frac{2\pi Z_d Z_\alpha e^2}{4\pi\epsilon_0 \hbar v}\right],$$

where $v$ is the alpha velocity outside the barrier. This is the Gamow factor for alpha decay.

Combining the Gamow factor with the frequency of attempts (about $10^{21}$ per second for a typical heavy nucleus) gives the decay rate

$$\lambda = \nu T \approx 10^{21} \exp\left[-\frac{2\pi Z_d Z_\alpha e^2}{4\pi\epsilon_0 \hbar v}\right]\,\text{s}^{-1}.$$

Taking logarithms,

$$\log T_{1/2} = a + b / \sqrt{Q},$$

where $a, b$ are constants for a given isotopic chain. This is the **Geiger–Nuttall law**, the empirical relation that the half-life decreases exponentially with $1/\sqrt{Q}$ for each isotopic chain. The relation spans more than 20 orders of magnitude in half-life, from microseconds to billions of years, all captured by the same exponential.

The longest-lived alpha emitter is $^{238}$U with $T_{1/2} = 4.5 \times 10^9$ years; the shortest are the alpha decays of the heaviest superheavy elements with half-lives of microseconds or less. The Geiger–Nuttall law is a beautiful example of a quantum-mechanical tunnelling rate being measured across the entire history of the earth.

Alpha decay favours even–even nuclei because of the pairing term in the SEMF. Even–odd and odd–odd alpha emitters are rarer and have shorter half-lives, modified by a "hindrance factor" that accounts for the unpaired nucleon.

The alpha particle carries a discrete energy spectrum, determined by the levels of the daughter nucleus. The strongest alpha group corresponds to the ground-state-to-ground-state transition, with weaker alpha groups populating excited states of the daughter. The fine structure of the alpha spectrum is a direct probe of the level scheme of the daughter.

### Beta decay

In **beta-minus decay**, a neutron in the nucleus converts to a proton, emitting an electron and an electron antineutrino:

$$n \to p + e^- + \bar{\nu}_e.$$

In the nucleus, the decay is

$$^A_ZX \to ^A_{Z+1}Y + e^- + \bar{\nu}_e.$$

The decay is energetically possible when the atomic mass of the parent exceeds that of the daughter (the electron masses cancel out in the difference):

$$Q = [M(^A_ZX) - M(^A_{Z+1}Y)] c^2 > 0.$$

The Q-value is shared among the kinetic energies of the electron, the antineutrino, and the recoiling daughter. Because the masses of the electron and the antineutrino are much smaller than the Q-value, the daughter carries very little kinetic energy; the energy is shared predominantly between the electron and the antineutrino. The electron energy spectrum is therefore continuous, from zero up to a maximum $T_e^{\max} = Q$ (the end-point energy). The shape of the spectrum depends on the matrix element of the weak interaction; the simplest allowed transition (Gamow–Teller or Fermi) gives a specific shape.

In **beta-plus decay**, a proton converts to a neutron, emitting a positron and an electron neutrino:

$$p \to n + e^+ + \nu_e.$$

In the nucleus,

$$^A_ZX \to ^A_{Z-1}Y + e^+ + \nu_e.$$

The threshold is

$$Q = [M(^A_ZX) - M(^A_{Z-1}Y) - 2m_e] c^2 > 0.$$

The factor $2m_e c^2$ comes from the fact that the atomic mass of the parent includes $Z$ electrons, while the daughter needs only $Z - 1$ electrons; the extra electron mass must be supplied as positron mass plus positron kinetic energy. As a result, beta-plus decay is only possible when the parent atomic mass exceeds the daughter atomic mass by more than $2m_e c^2 = 1.022$ MeV.

In **electron capture (EC)**, a proton captures an inner-shell electron and converts to a neutron with emission of a neutrino:

$$p + e^- \to n + \nu_e.$$

In the nucleus,

$$^A_ZX + e^- \to ^A_{Z-1}Y + \nu_e.$$

This is energetically possible when the parent atomic mass exceeds the daughter atomic mass (with a small correction for the binding energy of the captured electron):

$$Q = [M(^A_ZX) - M(^A_{Z-1}Y)] c^2 - B_e > 0,$$

where $B_e$ is the binding energy of the captured electron. EC competes with beta-plus decay and dominates when beta-plus is energetically forbidden (i.e. when $0 < Q < 2m_e c^2$). EC is also signalled by the emission of the characteristic X-rays of the daughter, as the inner-shell vacancy is filled.

**Selection rules** for beta decay come from the angular momentum and parity changes. The simplest cases are:

- **Allowed transitions**: $\Delta J = 0, \pm 1$ (no parity change for Fermi, $\Delta \pi = $ no for Gamow–Teller, with both possible). The decay rate is large.
- **First-forbidden transitions**: $\Delta J = 0, \pm 1, \pm 2$ with a parity change, or $\Delta J = \pm 2$ without. The rate is reduced by a factor of about $10^{-2}$ to $10^{-6}$.
- **Second-, third-forbidden transitions**: increasingly suppressed.

The **ft value** (comparative half-life) is a way to compare beta-decay rates independent of the Q-value and the Coulomb correction. Allowed transitions have $\log ft$ between 3 and 6; forbidden transitions have $\log ft$ between 6 and 20. Superallowed Fermi transitions (between analogue states, $0^+ \to 0^+$) have $\log ft \approx 3.5$ and provide the most precise test of the conserved vector current hypothesis and the unitarity of the CKM matrix.

The **neutrino** was proposed by Pauli in 1930 to save energy conservation in beta decay and was detected directly only in 1956 by Reines and Cowan. It is now known to come in three flavours ($\nu_e, \nu_\mu, \nu_\tau$), each with a tiny mass (the mass is at least five orders of magnitude smaller than the electron mass). Neutrinos interact only via the weak force, so they can pass through light-years of lead without scattering, but their existence is forced by the kinematics of beta decay and is now seen in many other contexts.

### Gamma decay

In gamma decay, an excited nuclear state emits a high-energy photon (gamma ray) and drops to a lower state of the same nucleus:

$$^A_ZX^* \to ^A_ZX + \gamma.$$

The photon energy is approximately

$$E_\gamma = (M^* - M) c^2 - T_R,$$

where $T_R \approx E_\gamma^2/(2 M c^2)$ is the recoil kinetic energy of the daughter. For a 1 MeV gamma in a 100 amu nucleus, $T_R \approx 5$ eV, much smaller than the gamma energy.

The **selection rules** for gamma decay come from the angular momentum and parity carried by the photon. The multipole order $2^L$ (where $L$ is the angular momentum of the photon in units of $\hbar$) determines the angular distribution and the rate. The classification is:

- **Electric multipoles** $E L$: parity change $(-1)^L$.
- **Magnetic multipoles** $M L$: parity change $(-1)^{L+1}$.

The lowest allowed multipole for a transition with $\Delta J = J_i - J_f$ is $L = |\Delta J|$, with the parity change determining whether $E L$ or $M L$ is dominant. The Weisskopf estimates for the radiative widths are

$$\Gamma(E L) \propto A^{2L/3} E_\gamma^{2L+1},$$
$$\Gamma(M L) \propto A^{2(L-1)/3} E_\gamma^{2L+1}.$$

Each increase in $L$ reduces the rate by a factor of about $10^3$ to $10^5$. A 1 MeV $E2$ transition in a heavy nucleus has a width of about $10^{-3}$ eV, corresponding to a lifetime of about $10^{-12}$ s, while an $M4$ transition of the same energy might have a lifetime of hours.

A pure E0 transition (between two $0^+$ states) is forbidden for a single photon because a photon cannot carry away zero angular momentum and even parity. Such transitions proceed by **internal conversion**, in which the nuclear energy is transferred directly to an inner-shell electron, ejecting it from the atom. The internal conversion coefficient is the ratio of conversion electrons to gamma rays; it is large for low-energy, high-$Z$ transitions.

## Key Ideas

- **Alpha decay**: emission of a $^4$He nucleus; requires $Q > 0$ and tunnelling through the Coulomb barrier; half-life follows the Geiger–Nuttall law.
- **Beta-minus decay**: $n \to p + e^- + \bar{\nu}_e$; continuous electron spectrum with end-point energy $Q$.
- **Beta-plus decay**: $p \to n + e^+ + \nu_e$; threshold $Q > 2m_e c^2$.
- **Electron capture**: $p + e^- \to n + \nu_e$; dominant when beta-plus is energetically forbidden.
- **Selection rules** for beta decay are based on $\Delta J$ and parity; allowed transitions are fast, forbidden transitions are slow.
- **Gamma decay**: emission of a high-energy photon; multipole order $2^L$ determines the rate; $E L$ for parity change $(-1)^L$, $M L$ for $(-1)^{L+1}$.
- **Internal conversion**: alternative to gamma decay for $0^+ \to 0^+$ transitions; ejects an inner-shell electron.

## Worked Examples

### Example 1 — Geiger–Nuttall law for $^{238}$U

$^{238}$U has $Q_\alpha = 4.27$ MeV and $T_{1/2} = 4.5 \times 10^9$ years. $^{234}$U has $Q_\alpha = 4.86$ MeV and $T_{1/2} = 2.5 \times 10^5$ years. Verify that these two nuclei fall on the same Geiger–Nuttall line.

**Solution.** For each isotope, compute $\log T_{1/2}$ and $1/\sqrt{Q}$:

- $^{238}$U: $\log T_{1/2} = \log(4.5 \times 10^9 \times 3.15 \times 10^7) = \log(1.42 \times 10^{17}) = 17.15$. $1/\sqrt{Q} = 1/\sqrt{4.27} = 0.484$.
- $^{234}$U: $\log T_{1/2} = \log(2.5 \times 10^5 \times 3.15 \times 10^7) = \log(7.88 \times 10^{12}) = 12.90$. $1/\sqrt{Q} = 1/\sqrt{4.86} = 0.454$.

The slope is $(17.15 - 12.90) / (0.484 - 0.454) = 4.25 / 0.030 = 142$. The intercept is $17.15 - 142 \times 0.484 = 17.15 - 68.7 = -51.5$. For other uranium isotopes (e.g. $^{235}$U, $^{233}$U, $^{232}$U) the values fall on the same line to good approximation, with the Geiger–Nuttall relation holding across 12 orders of magnitude in half-life.

### Example 2 — Beta decay of $^{14}$C

$^{14}$C decays to $^{14}$N by beta-minus emission with $Q = 156$ keV and $T_{1/2} = 5730$ years. Calculate the maximum electron kinetic energy and the recoil energy of the $^{14}$N daughter.

**Solution.** The end-point energy is $T_e^{\max} = Q = 156$ keV. The daughter recoil energy is the kinetic energy of the $^{14}$N nucleus when the electron and antineutrino are emitted in the same direction (maximum recoil) or opposite directions (zero recoil). The maximum recoil is

$$T_R^{\max} = \frac{Q^2}{2 M_N c^2} = \frac{(0.156)^2}{2 \times 14 \times 931.5} \approx 9.3 \times 10^{-7}\,\text{MeV} = 0.93\,\text{eV}.$$

This is much less than the typical chemical binding energy, which is why the daughter $^{14}$N atom is left in a chemically active state (often as NO$_2$ or some other reactive species).

### Example 3 — Internal conversion coefficient for $^{137}$Ba

$^{137}$Cs decays by beta-minus to $^{137}$Ba, with a 662 keV gamma from the 11/2$^-$ isomeric state at 662 keV. The K-shell internal conversion coefficient is $\alpha_K \approx 0.092$. Estimate the K-shell binding energy of barium and the branching ratio of the decay to K-conversion electrons.

**Solution.** Internal conversion is most efficient for low-energy gamma transitions in high-$Z$ nuclei, where the electron wavefunction has significant overlap with the nucleus. For barium ($Z = 56$), the K-shell binding energy is about 37.4 keV. The K-conversion coefficient is

$$\alpha_K = \frac{\Gamma_K}{\Gamma_\gamma} = 0.092,$$

so about 8.4% of the decays of the 662 keV state proceed by K-conversion rather than gamma emission. The K-conversion electron has kinetic energy $E_K^{ce} = E_\gamma - B_K = 662 - 37.4 = 624.6$ keV, an easily measured peak in a beta or gamma spectrum.

## Common Misconceptions

- **"Alpha particles are emitted with a single energy."** No. Alpha decay can populate different excited states of the daughter, giving a discrete set of alpha groups, each with a definite energy.
- **"Beta decay produces a continuous spectrum because energy is not conserved."** Energy is conserved. The spectrum is continuous because the energy is shared with the (undetected, at the time) neutrino.
- **"Gamma rays come from electron transitions."** No. Gamma rays come from transitions between excited states of the nucleus, with energies typically 10 keV to 10 MeV. X-rays come from inner-shell electron transitions.
- **"Neutrinos are hypothetical."** They were hypothetical in 1930, but were detected in 1956 and are now observed in many experiments. They have mass, mix between flavours, and play a key role in stellar nucleosynthesis and cosmology.
- **"Internal conversion is the same as photoelectric absorption."** No. In photoelectric absorption, a photon comes in and ejects an electron. In internal conversion, a nuclear transition transfers energy directly to an electron without an intermediate photon. The two are distinct processes with different selection rules.

## Connections

- The Geiger–Nuttall law is one of the earliest successes of quantum-mechanical tunnelling theory; it connects the half-life of an alpha emitter to its decay energy across many orders of magnitude.
- The continuous beta spectrum was the original motivation for the neutrino hypothesis; the subsequent discovery of the neutrino is one of the great stories of twentieth-century physics.
- The CKM matrix and the unitarity test from superallowed Fermi transitions connect nuclear physics to particle physics.
- The multipole order of gamma transitions determines the angular correlation in gamma–gamma coincidence experiments, providing a powerful tool for nuclear spectroscopy.
- The radioactive decay chains of uranium, thorium, and potassium are the basis of radioactive dating of rocks, of the earth's heat budget, and of the discovery of the age of the earth.

## Quick Check

1. State the Geiger–Nuttall law and explain its physical origin in terms of the Coulomb barrier.
2. Write the nuclear reaction for the beta-minus decay of $^{14}$C and compute the recoil energy of the daughter.
3. Why is electron capture dominant over beta-plus decay for nuclei with $Q < 2m_e c^2$?
4. Classify a $3^- \to 0^+$ gamma transition: what is the dominant multipole, and what is the parity change?
5. $^{137}$Cs emits a 662 keV gamma with internal conversion coefficient $\alpha_K = 0.092$. Estimate the branching ratio to the 662 keV gamma.

## Takeaway

- Alpha, beta, and gamma decay are the three principal modes of radioactive transformation, distinguished by the particle emitted.
- Alpha decay requires tunnelling through the Coulomb barrier; the half-life follows the Geiger–Nuttall law.
- Beta decay involves the weak interaction and includes three modes: beta-minus, beta-plus, and electron capture.
- Gamma decay is electromagnetic, with selection rules determined by the angular momentum and parity change.
- The energetics and rates of these decays underpin radioactive dating, nuclear medicine, and the nucleosynthesis of heavy elements.
