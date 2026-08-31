***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-6
semesterName: Semester 6
subjectId: physics
subjectName: Physics
courseId: nuclear-physics
courseName: Nuclear Physics
moduleId: nuclear-physics-module-1
moduleName: Nuclear Properties and Models
lessonId: nuclear-physics-m1-l2
lessonName: Liquid Drop Model and Semi-empirical Mass Formula
lessonNumber: 2
moduleNumber: 1
semesterNumber: 6
difficulty: intermediate
estimatedStudyMinutes: 55
releaseOrder: 2
prerequisites:
  - nuclear-physics-m1-l1
learningObjectives:
  - Write down the Weizsäcker semi-empirical mass formula and explain the physical origin of each term.
  - Use the SEMF to predict the most stable isobar for a given A and to estimate the Coulomb barrier.
  - Describe the liquid drop model and the analogy between a nucleus and a charged droplet.
concepts:
  - Weizsäcker formula
  - Volume, surface, Coulomb, asymmetry, pairing terms
  - Liquid drop model
  - Coulomb barrier
  - Fission barrier
  - Most stable isobar
tags:
  - physics
  - nuclear-physics
  - binding-energy
  - nuclear-models
sourceType: authored-courseware
assessmentHints:
  - conceptual
  - derivation
  - problem-solving
  - short-answer
***

# Liquid Drop Model and Semi-empirical Mass Formula

## Overview

The liquid drop model treats the nucleus as a small, charged droplet of an incompressible quantum fluid. The analogy is not merely visual: nucleons in the interior are surrounded by other nucleons (just as molecules in a liquid are surrounded by other molecules), the surface has a surface tension, and the short-range strong force between nearest-neighbour nucleons saturates (just as the intermolecular force in a real liquid). Quantitatively, the liquid drop model leads to the **Weizsäcker semi-empirical mass formula (SEMF)**, an algebraic expression for the nuclear binding energy in terms of $A$ and $Z$ that captures the gross features of more than 3000 nuclei with only five or six adjustable parameters. The lesson derives each term of the SEMF from a physical picture, applies the formula to find the most stable isobar for a given $A$ and to estimate the Coulomb barrier for nuclear reactions, and points to its limitations, which are addressed by the shell model in the next lesson.

## Learning Path

- **What you should already know**: the binding-energy-per-nucleon curve and the basic components of the binding energy (Lesson m1-l1); the Coulomb repulsion of a uniform charge distribution.
- **What this lesson adds**: the explicit form of the SEMF; the physical origin of each term; the use of the SEMF to predict the most stable isobar; the concept of the Coulomb barrier; the analogy with a charged liquid drop.
- **What later lessons this will unlock**: the shell model and magic numbers (Lesson m1-l3), the energetics of alpha and beta decay (Module 2), the fission barrier in nuclear reactors (Lesson m2-l3), and the r-process and s-process nucleosynthesis (treated in astrophysics).

## Core Explanation

### The liquid drop analogy

A real liquid drop has several features that map onto the nucleus:

- **Incompressibility**: the density of the liquid is roughly constant, just as the nuclear density is roughly constant.
- **Short-range, saturating forces**: each molecule interacts only with its nearest neighbours, with a binding energy that does not increase indefinitely as the drop grows.
- **Surface tension**: the drop has a definite surface, and the molecules at the surface are less bound than those in the interior.
- **Cohesion**: the drop holds together against its own vapour pressure, and a small disturbance does not pull it apart.
- **Coulomb-like forces**: if the drop is charged, the Coulomb repulsion tends to deform it and can lead to fission above a critical charge.

The nucleus is not literally a liquid drop, but the analogy is quantitatively useful. In a nucleus, the strong nuclear force between nucleons has these properties, while the Coulomb repulsion between protons acts as the destabilising charge.

### The Weizsäcker formula

The standard SEMF, sometimes called the Bethe–Weizsäcker formula, expresses the binding energy as a sum of five (or six) terms:

$$B(A, Z) = a_v A - a_s A^{2/3} - a_c \frac{Z(Z-1)}{A^{1/3}} - a_a \frac{(A - 2Z)^2}{A} \pm \delta(A).$$

The coefficients are fitted to the binding energies of a few hundred nuclei; the standard values are approximately:

- $a_v \approx 15.85$ MeV (volume term).
- $a_s \approx 18.34$ MeV (surface term).
- $a_c \approx 0.71$ MeV (Coulomb term).
- $a_a \approx 23.21$ MeV (asymmetry term).
- $\delta \approx 12$ MeV$/A^{1/2}$ (pairing term).

The signs are: positive (favours binding) for $a_v$ and $\delta$ (even-even), negative (favours unbinding) for the other three.

### Term-by-term origin

**Volume term** $a_v A$. The dominant contribution to the binding energy, proportional to the number of nucleons. It comes from the short-range, saturating strong force: each nucleon interacts only with its nearest neighbours, so the total binding is proportional to $A$. The coefficient $a_v \approx 15.85$ MeV is close to the binding energy per nucleon of very large nuclei, where the surface, Coulomb, and asymmetry corrections are small.

**Surface term** $-a_s A^{2/3}$. Nucleons at the surface have fewer neighbours than those in the interior, so they contribute less binding. The number of surface nucleons is proportional to the surface area, $4\pi R^2 \propto A^{2/3}$. The minus sign reflects that the surface is less bound than the interior.

**Coulomb term** $-a_c Z(Z-1)/A^{1/3}$. The electrostatic repulsion of $Z$ protons distributed throughout the nucleus. The factor $Z(Z-1)$ (rather than $Z^2$) avoids counting a proton's self-interaction; the factor $1/A^{1/3}$ comes from the $1/R$ dependence of Coulomb energy with $R \propto A^{1/3}$. For a uniform sphere of charge $Ze$ and radius $R$,

$$E_{\text{Coulomb}} = \frac{3}{5}\frac{Z^2 e^2}{4\pi\epsilon_0 R},$$

which gives $a_c = (3/5) e^2/(4\pi\epsilon_0 R_0) \approx 0.71$ MeV with $R_0 \approx 1.2$ fm.

**Asymmetry term** $-a_a (A - 2Z)^2/A$. This is a quantum-mechanical effect arising from the Pauli exclusion principle. The lowest-energy configuration has equal numbers of protons and neutrons, so $N = Z$ is favoured. For fixed $A$, the term is minimised at $N = Z$ (i.e. $A - 2Z = 0$). The functional form is parabolic in $A - 2Z$, with a coefficient that scales as $1/A$ because the relevant energy is the Fermi energy of the nucleon gas, which scales as $A^{-2/3}$ per particle, and the symmetry energy is approximately $\epsilon_F / 3$.

**Pairing term** $\pm \delta(A)$. A small correction that accounts for the fact that even-even nuclei (even $Z$ and even $N$) are more bound than odd-$A$ nuclei, which are more bound than odd-odd nuclei. The sign is + for even-even, $-$ for odd-odd, 0 for odd-$A$. The $A$ dependence is often taken as $A^{-1/2}$ or $A^{-3/4}$.

### Most stable isobar

For a given mass number $A$, the most stable isobar is the one that maximises the binding energy, i.e. minimises the total mass. To find it, we minimise the mass with respect to $Z$ at fixed $A$. The mass is

$$M(A, Z) c^2 = Z M(^1H) c^2 + (A - Z) m_n c^2 - B(A, Z).$$

Setting $\partial M / \partial Z = 0$:

$$M(^1H) c^2 - m_n c^2 = \frac{\partial B}{\partial Z}.$$

The derivative of $B$ with respect to $Z$ (treating $A$ as constant) comes only from the Coulomb and asymmetry terms:

$$\frac{\partial B}{\partial Z} = -a_c \frac{2Z - 1}{A^{1/3}} + 4 a_a \frac{(A - 2Z)}{A}.$$

Equating and solving:

$$Z_{\text{min}} = \frac{A/2}{1 + (a_c / (4 a_a)) A^{2/3}}.$$

Substituting the standard coefficients,

$$Z_{\text{min}} \approx \frac{A}{1.98 + 0.015 A^{2/3}}.$$

For $A = 56$, $Z_{\text{min}} \approx 26$, predicting that the most stable isobar is $^{56}$Fe with $Z = 26$. For $A = 235$, $Z_{\text{min}} \approx 92$, predicting $^{235}$U is close to the most stable uranium isotope; in fact the most stable isobar at $A = 235$ is $^{235}$U, while for $A = 238$ it is $^{238}$U.

### Coulomb barrier and fission

The Coulomb term gives the height of the Coulomb barrier that must be overcome for a nuclear reaction between two charged nuclei. For a head-on collision of two nuclei with charges $Z_1 e$ and $Z_2 e$ at separation $R$ (the sum of their radii),

$$V_C = \frac{Z_1 Z_2 e^2}{4\pi\epsilon_0 R}.$$

For two $^{12}$C nuclei at $R = 2 \times 1.2 \times 12^{1/3} \approx 5.5$ fm, $V_C \approx 7.5$ MeV. For $^{238}$U + $^{238}$U, $V_C \approx 1.4$ GeV. The Coulomb barrier is the reason thermonuclear fusion requires high temperatures (to give the nuclei enough thermal kinetic energy) and why spontaneous fission becomes more likely for very heavy nuclei (the Coulomb energy is close to the surface energy, so the nucleus is near the limit of stability against splitting).

A nucleus is unstable against spontaneous fission when $Z^2/A$ exceeds about 50. The empirical fissility parameter is

$$x = Z^2 / (50 A),$$

with $x < 1$ for stable nuclei. For $^{238}$U, $x = 92^2/(50 \times 238) = 0.71$, near but below 1; for the superheavy synthesised isotopes, $x$ approaches or exceeds 1. The Bohr–Wheeler theory of fission treats the nucleus as a deformable charged liquid drop; the fission barrier is the difference between the energy at the saddle point of the deformation and at the ground state.

## Key Ideas

- **Liquid drop model**: the nucleus is treated as a small, charged, incompressible fluid; the analogy captures the gross features of binding energies.
- **Weizsäcker formula**: $B = a_v A - a_s A^{2/3} - a_c Z(Z-1)/A^{1/3} - a_a (A - 2Z)^2/A \pm \delta$.
- **Volume term**: from the saturating strong force; dominant contribution.
- **Surface term**: correction for the under-bound surface nucleons.
- **Coulomb term**: electrostatic repulsion of protons; favours low $Z$ for fixed $A$.
- **Asymmetry term**: from the Pauli principle; favours $N = Z$.
- **Pairing term**: small correction favouring even-even nuclei.
- **Most stable isobar**: found by minimising the mass at fixed $A$; gives the line of stability in the nuclear chart.
- **Coulomb barrier**: $V_C = Z_1 Z_2 e^2/(4\pi\epsilon_0 R)$; the electrostatic barrier to nuclear reactions.
- **Fissility parameter**: $x = Z^2/(50A)$; large $x$ means unstable against spontaneous fission.

## Worked Examples

### Example 1 — Binding energy of $^{56}$Fe

Compute the SEMF binding energy of $^{56}$Fe and compare to the experimental value of 492.3 MeV.

**Solution.** With $A = 56$ and $Z = 26$:

- Volume: $15.85 \times 56 = 887.6$ MeV.
- Surface: $-18.34 \times 56^{2/3} = -18.34 \times 14.56 = -267.0$ MeV.
- Coulomb: $-0.71 \times 26 \times 25 / 56^{1/3} = -0.71 \times 650 / 3.83 = -120.4$ MeV.
- Asymmetry: $-23.21 \times (56 - 52)^2 / 56 = -23.21 \times 16 / 56 = -6.6$ MeV.
- Pairing: $+12 / \sqrt{56} = +1.6$ MeV (even-even nucleus).

Total: $887.6 - 267.0 - 120.4 - 6.6 + 1.6 = 495.2$ MeV.

The experimental value is 492.3 MeV. The SEMF reproduces the binding energy to about 0.6%, an excellent agreement for a five-parameter formula.

### Example 2 — Most stable isobar at A = 100

Use the SEMF to predict the most stable isobar at $A = 100$.

**Solution.** The most stable isobar has

$$Z_{\text{min}} = \frac{A/2}{1 + (a_c/(4 a_a)) A^{2/3}}.$$

With $A = 100$, $A^{2/3} = 21.5$, and $a_c/(4 a_a) = 0.71/(4 \times 23.21) = 0.00765$:

$$Z_{\text{min}} = \frac{50}{1 + 0.00765 \times 21.5} = \frac{50}{1.164} \approx 42.9.$$

So the most stable isobar is expected to be at $Z = 43$ (technetium, Tc) or $Z = 44$ (ruthenium, Ru). In fact, the longest-lived isobar at $A = 100$ is $^{100}$Ru ($Z = 44$). The agreement is excellent.

### Example 3 — Coulomb barrier for $^3$He + $^3$He

Compute the Coulomb barrier for the $^3$He + $^3$He reaction in the solar pp-chain.

**Solution.** The radius of $^3$He is $R = 1.2 \times 3^{1/3} = 1.7$ fm. The contact distance is $2R = 3.4$ fm. With $Z_1 = Z_2 = 2$,

$$V_C = \frac{Z_1 Z_2 e^2}{4\pi\epsilon_0 R_{\text{contact}}} = \frac{4 \times 1.44\,\text{MeV·fm}}{3.4\,\text{fm}} = 1.69\,\text{MeV}.$$

The peak of the Gamow peak for this reaction in the solar core ($T = 1.5 \times 10^7$ K) is at about 21 keV, much less than the Coulomb barrier; the reaction proceeds by quantum-mechanical tunnelling, with a tiny but non-negligible probability. The factor of $10^{-10}$ between the barrier height and the thermal energy is what makes the sun shine slowly rather than explosively.

## Common Misconceptions

- **"The liquid drop model is just an analogy."** It is more than an analogy: the Weizsäcker formula is quantitatively accurate to within about 1% for most nuclei, and it captures the gross features of nuclear masses across the entire nuclear chart.
- **"The Coulomb term should be $Z^2$, not $Z(Z-1)$."** The $Z(Z-1)$ form avoids counting a proton's interaction with itself, an essential correction.
- **"The pairing term is unimportant."** It is small but essential for predicting which nuclei are beta-stable and for fitting the precise masses of light nuclei.
- **"The SEMF predicts the masses of all nuclei."** No. The SEMF misses the shell corrections that give rise to magic numbers, and it is not accurate near the drip lines. More sophisticated mass formulas (FRDM, HFB) include shell corrections and a more careful treatment of the surface and asymmetry terms.
- **"The Coulomb barrier is the energy needed to fuse two nuclei."** Not exactly. Quantum-mechanical tunnelling allows reactions to occur at energies well below the barrier, with probability decreasing exponentially with $\sqrt{V_C - E}$.

## Connections

- The liquid drop model is the basis of the Bohr–Wheeler theory of nuclear fission, which predicts the fission barrier and the mass distribution of fission fragments.
- The asymmetry term is the origin of beta decay: nuclei with $N/Z$ far from the line of stability are unstable against beta decay, which moves the nucleus toward the stable isobar.
- The pairing term is the simplest manifestation of the seniority coupling of like nucleons, which is treated more carefully in the shell model.
- The Coulomb barrier is the central quantity in thermonuclear reaction rates in stellar interiors and in inertial-confinement fusion.
- The fissility parameter $x$ is the basis of the search for superheavy elements: as $x \to 1$, the fission barrier vanishes, and the element can only exist as a resonance in the continuum.

## Quick Check

1. State the Weizsäcker formula and explain the physical origin of each term.
2. Compute the binding energy of $^{208}$Pb ($Z = 82$) using the SEMF and compare to the experimental value of 1636.4 MeV.
3. Predict the most stable isobar at $A = 200$ using the SEMF. Is it stable against beta decay?
4. Compute the Coulomb barrier for the $^{12}$C + $^{12}$C reaction, an important reaction in stellar nucleosynthesis.
5. Why does the SEMF work less well for very light nuclei like $^3$H and $^3$He?

## Takeaway

- The liquid drop model captures the gross features of nuclear binding in terms of volume, surface, Coulomb, asymmetry, and pairing contributions.
- The Weizsäcker formula reproduces measured binding energies to within about 1% across the nuclear chart with only five or six parameters.
- The most stable isobar for a given $A$ is found by minimising the mass; the result is the line of beta stability.
- The Coulomb barrier is the central quantity for nuclear reactions; fusion in stellar interiors and laboratory plasmas proceeds by tunnelling.
- The SEMF misses shell effects; the next lesson introduces the shell model and the magic numbers.
