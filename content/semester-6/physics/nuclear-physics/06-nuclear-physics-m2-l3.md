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
lessonId: nuclear-physics-m2-l3
lessonName: Nuclear Reactions, Fission and Fusion
lessonNumber: 6
moduleNumber: 2
semesterNumber: 6
difficulty: advanced
estimatedStudyMinutes: 60
releaseOrder: 6
prerequisites:
  - nuclear-physics-m1-l2
  - nuclear-physics-m2-l1
learningObjectives:
  - Define the Q-value of a nuclear reaction and use it to determine the threshold energy for endothermic reactions.
  - Describe the compound-nucleus and direct-reaction mechanisms and their experimental signatures.
  - Explain the physics of nuclear fission and fusion, including the energy release and the role of the Coulomb barrier.
concepts:
  - Q-value
  - Threshold energy
  - Compound nucleus
  - Direct reaction
  - Nuclear fission
  - Nuclear fusion
tags:
  - physics
  - nuclear-physics
  - nuclear-reactions
  - fission
  - fusion
sourceType: authored-courseware
assessmentHints:
  - conceptual
  - derivation
  - problem-solving
  - short-answer
***

# Nuclear Reactions, Fission and Fusion

## Overview

A nuclear reaction transforms one set of nuclei into another, releasing or absorbing energy in the process. The Q-value of the reaction is the energy released, computed from the mass difference between reactants and products. Reaction mechanisms fall into two broad classes: **compound-nucleus reactions**, in which the projectile fuses with the target to form an excited intermediate that lives long enough to forget how it was formed before evaporating particles, and **direct reactions**, in which the projectile interacts with a small number of nucleons in a brief, peripheral collision. The lesson then applies these concepts to the two energy-releasing processes that power stars and reactors: **fission** of heavy nuclei into medium-mass fragments, and **fusion** of light nuclei into heavier ones. Both are explained by the same binding-energy curve introduced in Lesson m1-l1: they move the system toward the maximum near iron.

## Learning Path

- **What you should already know**: the binding-energy curve and the Q-value (Lesson m1-l1); the Coulomb barrier (Lesson m1-l2); the Geiger–Nuttall law for alpha decay (Lesson m2-l1); the kinematics of two-body collisions.
- **What this lesson adds**: the formal treatment of nuclear reactions, the Q-value and threshold energy, the two reaction mechanisms; the physics of fission and fusion; the role of these processes in stellar nucleosynthesis and energy production.
- **What later lessons this will unlock**: the application to nuclear reactors and nuclear weapons (Module 3); the diagnostic use of nuclear reactions in astrophysics; the production of transuranium elements.

## Core Explanation

### Reaction notation

A nuclear reaction is written as

$$a + X \to Y + b,$$

or in the compact notation $X(a, b)Y$. Here $a$ is the projectile, $X$ is the target, $Y$ is the residual nucleus, and $b$ is the emitted particle. Energy and momentum are conserved; nucleon number, charge, lepton number, and baryon number are also conserved. An example is

$$^{14}\text{N} + \alpha \to ^{17}\text{O} + p, \quad \text{or} \quad ^{14}\text{N}(\alpha, p)^{17}\text{O},$$

the famous reaction by which Rutherford first produced artificial nuclear disintegrations in 1919.

### Q-value and threshold energy

The Q-value is the energy released in the reaction:

$$Q = (m_a + m_X - m_Y - m_b) c^2.$$

A positive $Q$ means energy is released (exothermic); a negative $Q$ means energy must be supplied (endothermic). For an exothermic reaction, the products carry the kinetic energy

$$T_Y + T_b = Q + T_a + T_X - T_{\text{recoil}}.$$

For an endothermic reaction, the projectile must have enough kinetic energy to overcome the threshold. The threshold kinetic energy in the lab frame (target at rest) is

$$T_{\text{thr}} = -Q \times \frac{m_a + m_X}{m_X}.$$

The factor $(m_a + m_X)/m_X = 1 + m_a/m_X$ accounts for the recoil of the products; without it, the threshold would be just $-Q$.

For reactions producing more than two products, the Q-value is shared among all products, and the energy spectrum of any one of them is continuous up to a maximum (the end-point).

### Compound-nucleus reactions

In a compound-nucleus reaction, the projectile and target fuse to form a highly excited intermediate nucleus, which then decays by emitting particles or gamma rays. The compound nucleus lives long enough (typically $10^{-19}$ to $10^{-15}$ s) that the decay is independent of the mode of formation: the cross-section factorises as

$$\sigma(ab) = \sigma_{\text{formation}}(a) \times \frac{\Gamma_b / \Gamma}{\sum_i \Gamma_i},$$

where $\sigma_{\text{formation}}$ is the cross-section for forming the compound nucleus, $\Gamma_b$ is the width for decay into the channel $b$, and the denominator is the sum over all open channels.

The formation cross-section peaks at energies corresponding to resonances in the compound nucleus. At low energies, the resonances are well separated; the cross-section shows a Breit–Wigner lineshape:

$$\sigma(E) = \pi \lambda^2 \frac{(2J+1)}{(2j_a+1)(2j_X+1)} \frac{\Gamma_a \Gamma_b}{(E - E_R)^2 + (\Gamma/2)^2},$$

where $E_R$ is the resonance energy, $\Gamma$ is the total width, and $\lambda$ is the de Broglie wavelength of the projectile. The Breit–Wigner formula is the same resonance formula as in any quantum system.

Compound-nucleus reactions dominate at low energies (near the Coulomb barrier) and for projectiles that interact strongly with the target. The Hauser–Feshbach statistical model gives the average cross-section in the regime of overlapping resonances.

### Direct reactions

In a direct reaction, the projectile interacts with one or a few nucleons at the surface of the target, transferring energy and nucleons in a brief, peripheral collision. The compound nucleus is not formed; the reaction time is of order $10^{-22}$ s, comparable to the time for the projectile to traverse the nucleus.

Common direct reactions include:

- **Elastic scattering**: $X(a, a)X$; the projectile bounces off the target with no change in internal state. The angular distribution shows diffraction minima, characteristic of a wave interacting with a partially absorbing sphere.
- **Inelastic scattering**: $X(a, a')X^*$; the target is excited to a low-lying state. The angular distribution is peaked at small angles.
- **Nucleon transfer**: $(d, p)$ or $(d, n)$ reactions, in which a neutron is transferred to or from the target. The angular distribution peaks at angles characteristic of the orbital angular momentum of the transferred nucleon; this is the basis of the spectroscopic factors mentioned in the shell-model lesson.
- **Knockout**: $(p, 2p)$ or $(e, e'p)$ reactions, in which a proton is knocked out of the target. The missing-energy and missing-momentum spectra give the binding energy and momentum distribution of the struck nucleon, a direct probe of the shell structure.
- **Charge exchange**: $(p, n)$ or $\left(^{3}\text{He}, t\right)$ reactions, in which a unit of charge is exchanged between projectile and target. Used to study the Gamow–Teller and Fermi resonances, important for beta-decay matrix elements.

Direct reactions are the primary tool for studying the single-particle structure of nuclei; their analysis is the experimental basis of the shell model.

### Nuclear fission

In nuclear fission, a heavy nucleus splits into two (or, rarely, three or more) medium-mass fragments, releasing about 200 MeV per fission. The classic example is the thermal-neutron-induced fission of $^{235}$U:

$$n + ^{235}\text{U} \to ^{236}\text{U}^* \to ^{141}\text{Ba} + ^{92}\text{Kr} + 3n + Q,$$

with $Q \approx 200$ MeV. The intermediate $^{236}$U compound nucleus is excited by the neutron binding energy (6.5 MeV), well above the fission barrier, so it fissions with high probability.

The physics of the fission barrier is described by the **Bohr–Wheeler theory**: the nucleus is treated as a charged liquid drop that deforms from a sphere through a saddle-point shape to a scission configuration. The barrier height is the energy at the saddle point, typically 5–6 MeV for actinides. The double-humped barrier of some nuclei reflects the shell structure of the deformed nucleus.

The fission fragments are neutron-rich, because the $N/Z$ ratio of a heavy nucleus is larger than that of a medium-mass nucleus. The excess neutrons are emitted promptly (within $10^{-14}$ s) and as beta decays from the fragments. The average number of neutrons per fission is about 2.4 for $^{235}$U; some of these neutrons can induce further fissions, giving a chain reaction.

For a self-sustaining chain reaction, the neutron multiplication factor $k$ must exceed 1. In an infinite medium, the four-factor formula is

$$k_\infty = \eta f p \epsilon,$$

where $\eta$ is the number of neutrons produced per neutron absorbed in the fuel, $f$ is the thermal utilisation factor, $p$ is the resonance escape probability, and $\epsilon$ is the fast-fission factor. A critical reactor has $k = 1$; a subcritical reactor has $k < 1$; a supercritical reactor has $k > 1$ and the power grows exponentially.

The energy released per fission is distributed roughly as:

- Kinetic energy of fission fragments: 165 MeV.
- Kinetic energy of prompt neutrons: 5 MeV.
- Prompt gamma rays: 7 MeV.
- Beta and gamma decay of fragments: 23 MeV.

The kinetic energy of the fragments is deposited as heat within about 10 µm of the fission site, providing the source of thermal energy in a reactor. The beta-decay heating continues after the chain reaction is shut down, providing the "decay heat" that requires continued cooling of a reactor after shutdown.

Spontaneous fission is the dominant decay mode for very heavy nuclei (above about $A = 250$). It is the limiting factor in the synthesis of superheavy elements: the longer-lived superheavies are those in "islands of stability" predicted by the shell model.

### Nuclear fusion

In nuclear fusion, two light nuclei combine to form a heavier nucleus, releasing energy because the binding energy per nucleon increases. The classic example is the deuterium–tritium (D–T) reaction:

$$^2\text{H} + ^3\text{H} \to ^4\text{He} + n + 17.6\,\text{MeV}.$$

The D–T reaction is the basis of terrestrial fusion research and of thermonuclear weapons. It has a relatively low Coulomb barrier (because $Z_1 = Z_2 = 1$) and a large positive Q-value.

The Coulomb barrier for two nuclei of charges $Z_1, Z_2$ at contact is

$$V_C = \frac{Z_1 Z_2 e^2}{4\pi\epsilon_0 R},$$

where $R$ is the sum of the radii. For D–T at $R \approx 4$ fm, $V_C \approx 0.4$ MeV. The thermal energy at typical fusion temperatures (10 keV to 100 keV, i.e. $10^8$ to $10^9$ K) is much less than the barrier, so the reaction proceeds by quantum-mechanical tunnelling. The reaction rate is

$$\langle \sigma v \rangle = \left(\frac{8}{\pi \mu}\right)^{1/2} \frac{1}{(kT)^{3/2}} \int_0^\infty S(E) \exp\left(-\frac{E}{kT} - \frac{b}{\sqrt{E}}\right) dE,$$

where $b = (2\mu)^{1/2} \pi Z_1 Z_2 e^2 / (4\pi\epsilon_0 \hbar)$ is the Gamow constant and $S(E)$ is the astrophysical S-factor. The exponential has a peak at the **Gamow peak energy** $E_0 = (b kT/2)^{2/3}$, where the integrand is largest.

For D–T at $kT = 10$ keV, $E_0 \approx 20$ keV, and $\langle \sigma v \rangle \approx 10^{-22}\,\text{m}^3/\text{s}$. Achieving a self-sustaining fusion reaction requires a triple product $n T \tau$ (density × temperature × confinement time) greater than about $3 \times 10^{21}$ keV·s/m$^3$ (the Lawson criterion), a target that has been met only in inertial-confinement fusion experiments (National Ignition Facility, 2022) and in magnetic-confinement tokamaks (JET, 2021, in pulses).

Stellar fusion proceeds by the pp-chain (in low-mass stars like the sun), the CNO cycle (in more massive stars), and the triple-alpha process (in red giants and later stages). The pp-chain starts with the weak interaction

$$p + p \to d + e^+ + \nu_e,$$

which is extraordinarily slow because it requires the conversion of a proton to a neutron via the weak force. The sun's central temperature of $1.5 \times 10^7$ K is high enough that this reaction proceeds at a useful rate; cooler stars cannot ignite hydrogen and become brown dwarfs.

## Key Ideas

- **Q-value**: $Q = (m_a + m_X - m_Y - m_b) c^2$; positive for exothermic, negative for endothermic.
- **Threshold energy**: $T_{\text{thr}} = -Q (m_a + m_X)/m_X$.
- **Compound-nucleus reaction**: an excited intermediate is formed and then decays; cross-section factorises into formation × branching ratio.
- **Direct reaction**: a brief, peripheral interaction; sensitive to single-particle structure.
- **Nuclear fission**: splitting of a heavy nucleus; 200 MeV per fission; chain reaction with neutron multiplication.
- **Nuclear fusion**: combining two light nuclei; Coulomb barrier must be overcome by tunnelling; Lawson criterion for ignition.
- **Gamow peak**: the energy of maximum contribution to the fusion reaction rate at temperature $T$.

## Worked Examples

### Example 1 — Q-value of the D–T reaction

Compute the Q-value of $^2$H + $^3$H $\to$ $^4$He + $n$. The relevant masses are $m_d = 2.014102$ u, $m_t = 3.016049$ u, $m_\alpha = 4.002603$ u, $m_n = 1.008665$ u.

**Solution.** $Q = (m_d + m_t - m_\alpha - m_n) c^2 = (2.014102 + 3.016049 - 4.002603 - 1.008665)\,\text{u} \times 931.494\,\text{MeV/u} = 0.018883 \times 931.5 = 17.59\,\text{MeV}$. The energy is released mostly as kinetic energy of the helium and the neutron.

### Example 2 — Threshold of $^{14}$N($\alpha, p$)$^{17}$O

The reaction $^{14}$N + $\alpha \to ^{17}$O + p has $Q = -1.193$ MeV. Compute the threshold energy in the lab frame.

**Solution.** $T_{\text{thr}} = -Q (m_\alpha + m_N)/m_N = 1.193 \times (4.002603 + 14.003074)/14.003074 = 1.193 \times 1.286 = 1.534$ MeV. The factor 1.286 is the recoil correction.

### Example 3 — Energy release from $^{235}$U fission

Verify that the energy release from $^{235}$U fission is about 200 MeV, by computing the mass difference between the initial and final states.

**Solution.** The initial state is $n + ^{235}$U with mass $1.008665 + 235.043930 = 236.052595$ u. A typical final state is $^{141}$Ba + $^{92}$Kr + 3n with mass $140.914411 + 91.926156 + 3 \times 1.008665 = 235.866562$ u. The mass difference is $0.186033$ u, corresponding to $0.186033 \times 931.5 = 173$ MeV. The full energy release of about 200 MeV includes the kinetic energy of the prompt neutrons, the gamma rays, and the subsequent beta decays of the fragments.

## Common Misconceptions

- **"Nuclear reactions are described by a single mechanism."** No. Different reaction mechanisms (compound nucleus, direct, breakup, transfer) operate in different energy and angular-momentum regimes; each has its own theoretical framework and experimental signature.
- **"Fission and fusion are opposites."** In a sense they are: fission splits a heavy nucleus into two lighter ones, fusion combines two light nuclei into a heavier one. But both release energy, and both are explained by the same binding-energy curve.
- **"Fusion reactors are clean."** The fusion reaction itself produces only helium and a neutron, but the neutrons activate the structural materials of the reactor, producing long-lived radioactive waste. The waste is much less than from fission, but not zero.
- **"Fusion is the energy source of the future and always will be."** Fusion research has been making steady progress; the National Ignition Facility achieved scientific break-even in 2022. Commercial fusion power is probably decades away, but the timeline is shortening.
- **"The Lawson criterion is the only requirement for fusion ignition."** The Lawson criterion is a necessary condition, not a sufficient one. Instabilities, energy losses, and material limits are equally important.

## Connections

- The Q-value and threshold-energy relations are the same as in any other inelastic process; the same kinematics apply to chemical reactions, particle-physics collisions, and astrophysical nuclear burning.
- The compound-nucleus and direct-reaction mechanisms are the nuclear analogue of the formation of an intermediate complex in chemistry and of the impulse approximation in atomic collisions.
- Fission and fusion are both explained by the binding-energy curve; the same diagram explains why iron is the most stable nucleus and the endpoint of stellar nucleosynthesis.
- The pp-chain and CNO cycle in stars are the same nuclear reactions as in the laboratory, but at much lower energies, made possible by the long times available in stellar interiors.
- The chain reaction in a fission reactor is the basis of all nuclear power; the controlled release of fusion energy is the central goal of the international fusion research programme.

## Quick Check

1. Define the Q-value of a nuclear reaction and explain why endothermic reactions have a threshold energy greater than $-Q$.
2. Distinguish the compound-nucleus mechanism from the direct-reaction mechanism. Give an experimental signature of each.
3. Estimate the Coulomb barrier for the D–T reaction at contact separation.
4. Why is the first step of the pp-chain ($p + p \to d + e^+ + \nu_e$) the slowest reaction in the chain?
5. The Lawson criterion for D–T fusion is $n T \tau \gtrsim 3 \times 10^{21}$ keV·s/m$^3$. Estimate the confinement time required at $T = 10$ keV and $n = 10^{20}$ m$^{-3}$.

## Takeaway

- The Q-value of a nuclear reaction is the energy released, computed from the mass difference; endothermic reactions have a threshold energy that includes a recoil correction.
- Compound-nucleus reactions proceed through an excited intermediate; direct reactions are brief, peripheral, and probe single-particle structure.
- Fission of heavy nuclei and fusion of light nuclei both release energy by moving the system toward the maximum of the binding-energy curve.
- The Coulomb barrier must be overcome by tunnelling for fusion; the Lawson criterion sets the conditions for ignition.
- The same nuclear reactions power the sun, drive stellar nucleosynthesis, and form the basis of terrestrial energy production.
