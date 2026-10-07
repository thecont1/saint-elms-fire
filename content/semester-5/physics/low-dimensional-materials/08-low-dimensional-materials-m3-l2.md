***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-5
semesterName: Semester 5
subjectId: physics
subjectName: Physics
courseId: low-dimensional-materials
courseName: Low-Dimensional Materials (Physics Option C)
moduleId: low-dimensional-materials-module-3
moduleName: Transport, Optics and Applications
lessonId: low-dimensional-materials-m3-l2
lessonName: Coulomb Blockade and the Integer Quantum Hall Effect
lessonNumber: 8
moduleNumber: 3
semesterNumber: 5
difficulty: advanced
estimatedStudyMinutes: 60
releaseOrder: 8
prerequisites:
  - low-dimensional-materials-m3-l1
  - electricity-and-magnetism-m1-l3
  - introduction-to-quantum-mechanics-m2-l3
learningObjectives:
  - State the conditions $e^2/2C_\Sigma \gg k_BT$ and $R_t \gg h/e^2$ for Coulomb blockade and compute charging energies of nanoscale islands.
  - Analyse a single-electron transistor using electrochemical potentials, deriving the gate period $e/C_g$ and the Coulomb-diamond half-height $e/C_\Sigma$.
  - Derive the Landau levels $E_n = \hbar\omega_c(n + \tfrac12)$ of a 2DEG, their degeneracy $eB/h$ per unit area per spin, and the filling factor $\nu = n_sh/eB$.
  - Explain the quantised Hall resistance $R_{xy} = h/\nu e^2$ with vanishing $R_{xx}$ using localised states and edge channels, and state the role of the von Klitzing constant.
concepts:
  - Charging energy
  - Coulomb blockade
  - Single-electron transistor
  - Coulomb diamond
  - Landau levels
  - Integer quantum Hall effect
  - von Klitzing constant
tags:
  - physics
  - low-dimensional-materials
  - coulomb-blockade
  - quantum-hall-effect
sourceType: authored-courseware
status: in-review
assessmentHints:
  - derivation
  - problem-solving
  - conceptual
  - short-answer
***

# Coulomb Blockade and the Integer Quantum Hall Effect

## Overview

Lesson m3-l1 treated electrons as non-interacting waves. Two further quantum transport effects arise when this picture is extended. In the first, the electrostatic energy needed to add a single electron to a small island becomes larger than the thermal energy, so charge flows one electron at a time: **Coulomb blockade**, exploited in the single-electron transistor (SET). In the second, a strong perpendicular magnetic field quantises the orbital motion of a two-dimensional electron gas into Landau levels, and the Hall resistance locks onto values $h/\nu e^2$ that are reproducible to parts in $10^{10}$: the **integer quantum Hall effect**. Both effects depend only on fundamental constants at their core, and both now underpin electrical metrology. This lesson develops each from the energetics of charge and the quantum mechanics of a charged particle in a field.

## Learning Path

- **What you should already know**: capacitance and electrostatic energy $Q^2/2C$ (Electricity and Magnetism, Lesson m1-l3); the Lorentz force and cyclotron motion (Electricity and Magnetism, Lesson m3-l1); the harmonic oscillator (Introduction to Quantum Mechanics, Lesson m2-l3); the 2D density of states (Lesson m1-l2); the Landauer formula (Lesson m3-l1); graphene's Berry phase (Lesson m2-l1).
- **What this lesson adds**: charging energy and blockade conditions; SET operation and Coulomb diamonds; Landau levels, filling factor and quantised Hall plateaus; edge channels; graphene's half-integer quantum Hall effect.
- **What later lessons this will unlock**: single-electron and quantum-dot devices among the applications of Lesson m3-l3; the Hall-effect measurements of the Low-Dimensional Materials Lab (Lesson m1-l3).

## Core Explanation

### Charging energy and the blockade conditions

An isolated metallic or semiconducting island with total capacitance $C_\Sigma$ to its surroundings stores energy $Q^2/2C_\Sigma$. Adding one electron to a neutral island costs the **charging energy**

$$E_C = \frac{e^2}{2C_\Sigma}.$$

For a sphere of radius $r$ in a medium of permittivity $\varepsilon_r$, $C = 4\pi\varepsilon_0\varepsilon_r r$, about 1.1 aF for $r = 10$ nm in vacuum, giving $E_C = 72$ meV. If the island is connected to leads by tunnel junctions, electron transfer is suppressed unless enough energy is supplied. Two conditions must hold:

1. $E_C \gg k_BT$, so thermal fluctuations cannot supply the charging energy;
2. $R_t \gg h/e^2 = 25.8$ k$\Omega$ for each tunnel junction. The charge on the island lives for a time $\tau \sim R_tC_\Sigma$, giving an energy uncertainty $\hbar/R_tC_\Sigma$; this must be smaller than $e^2/C_\Sigma$, so $R_t \gg \hbar/e^2$ up to a numerical factor. Only then is the electron number on the island a good quantum number.

The second condition means that a Coulomb-blockade island is necessarily weakly coupled, unlike the open ballistic channels of Lesson m3-l1 whose resistance is at most $h/2e^2$.

### The single-electron transistor

A **single-electron transistor** is an island connected to a source and drain through tunnel junctions, with a gate electrode coupled through capacitance $C_g$; $C_\Sigma = C_S + C_D + C_g$. The gate induces a continuous polarisation charge $Q_0 = C_gV_g$, and the electrostatic energy with $N$ excess electrons is

$$E(N) = \frac{(Ne - C_gV_g)^2}{2C_\Sigma}.$$

The **electrochemical potential** of the island, the energy needed to add the $N$th electron, is

$$\mu(N) = E(N) - E(N - 1) = \left(N - \tfrac12\right)\frac{e^2}{C_\Sigma} - e\frac{C_g}{C_\Sigma}V_g.$$

Successive levels are separated by the **addition energy** $\mu(N + 1) - \mu(N) = e^2/C_\Sigma = 2E_C$. At small source–drain bias current flows only when some $\mu(N)$ lies between the source and drain potentials; otherwise the electron number is frozen and the current is blocked. Sweeping $V_g$ moves the ladder of $\mu(N)$ down at the rate $e(C_g/C_\Sigma)$ per volt, so a level crosses the Fermi energy every time $V_g$ changes by

$$\Delta V_g = \frac{e}{C_g}.$$

The conductance is a series of sharp, periodic **Coulomb oscillations**, each peak marking a change of island charge by one electron. Increasing the bias $V_{sd}$ opens a window of width $eV_{sd}$; in the $(V_g, V_{sd})$ plane the blockaded regions form **Coulomb diamonds** whose maximum half-height is $|V_{sd}| = e/C_\Sigma$. Measuring the period and the diamond height gives $C_g$ and $C_\Sigma$, and their ratio $C_g/C_\Sigma$, the **lever arm**, converts gate voltage into energy. In a semiconductor quantum dot the addition energy also contains the level spacing, $E_{\text{add}} = e^2/C_\Sigma + \Delta E$, so diamond sizes reveal shell structure, as in atoms.

Because one extra electron's worth of charge near the island shifts the oscillations by a full period, an SET is an extremely sensitive **electrometer** (about $10^{-5}e/\sqrt{\text{Hz}}$). Driving the gates of a multi-junction device at frequency $f$ transfers one electron per cycle, producing a current $I = ef$, about 160 pA at 1 GHz, a candidate quantum current standard.

### Landau levels

Place a 2DEG in a perpendicular field $B$. Classically electrons orbit at the **cyclotron frequency** $\omega_c = eB/m^*$. Quantum mechanically, in the Landau gauge $\mathbf{A} = (0, Bx, 0)$ the Hamiltonian $(\mathbf{p} + e\mathbf{A})^2/2m^*$ separates: with $\psi = e^{ik_yy}\phi(x)$, $\phi$ obeys a harmonic-oscillator equation of frequency $\omega_c$ centred at $x_0 = -\hbar k_y/eB$. The energies are

$$E_n = \hbar\omega_c\left(n + \tfrac12\right), \qquad n = 0, 1, 2, \ldots$$

independent of $k_y$: each **Landau level** is massively degenerate. Its degeneracy follows from the 2D density of states of Lesson m1-l2: the states in an energy window $\hbar\omega_c$ collapse into one level, giving $(m^*/\pi\hbar^2)\hbar\omega_c = 2eB/h$ per unit area including spin, or

$$n_B = \frac{eB}{h} = \frac{B}{\Phi_0} \quad \text{per spin}, \qquad \Phi_0 = \frac{h}{e} = 4.14 \times 10^{-15}\ \text{Wb}.$$

There is one state per flux quantum threading the sample. The **filling factor**

$$\nu = \frac{n_s}{n_B} = \frac{n_sh}{eB}$$

counts the number of filled spin-resolved Landau levels. For GaAs, $\hbar\omega_c = 1.73$ meV per tesla, well above $k_BT = 0.36$ meV at 4.2 K at fields of a few tesla.

### The integer quantum Hall effect

Classically the Hall resistance $R_{xy} = B/n_se$ rises linearly with $B$. In 1980 von Klitzing found that in a silicon inversion layer at low temperature $R_{xy}$ instead shows flat **plateaus** at

$$R_{xy} = \frac{h}{\nu e^2} = \frac{R_K}{\nu}, \qquad \nu = 1, 2, 3, \ldots,$$

while the longitudinal resistance $R_{xx}$ vanishes on each plateau. The **von Klitzing constant** $R_K = h/e^2 = 25\,812.807\ldots\ \Omega$ is exact in the SI since 2019, when $h$ and $e$ were fixed, and quantum Hall devices are the primary standard of resistance.

Two ingredients explain the plateaus. First, disorder broadens each Landau level; states in the tails are **localised** and carry no current, while only states near the level centre are extended. As $B$ varies, the Fermi level moves through localised states between levels, the number of filled extended levels stays at $\nu$, and $R_{xy}$ stays fixed. Second, the confining potential at the sample boundary bends the Landau levels upwards, so each filled level crosses $E_F$ at the edge and forms a one-dimensional **edge channel**. Electrons in an edge channel move in one direction only (they are chiral), with opposite directions on opposite edges, so backscattering is impossible. By the Landauer formula each spin-resolved channel transmits perfectly and carries conductance $e^2/h$; $\nu$ channels give $R_{xy} = h/\nu e^2$ with no dissipation along the edge, hence $R_{xx} = 0$.

In graphene the Dirac spectrum gives Landau levels $E_n = \mathrm{sgn}(n)\,v_F\sqrt{2e\hbar B|n|}$, not equally spaced, with a level at exactly zero energy shared by electrons and holes: a consequence of the Berry phase of $\pi$. With fourfold spin–valley degeneracy the Hall conductivity is $\sigma_{xy} = \pm 4(N + \tfrac12)e^2/h$, the **half-integer quantum Hall effect**. The large $n = 1$ gap (115 meV at 10 T) lets graphene show the effect even at room temperature.

## Key Ideas

- **Charging energy**: $E_C = e^2/2C_\Sigma$; blockade needs $E_C \gg k_BT$ and $R_t \gg h/e^2$.
- **SET**: addition energy $e^2/C_\Sigma$, gate period $e/C_g$, diamond half-height $e/C_\Sigma$, lever arm $C_g/C_\Sigma$.
- **Applications**: electrometers, single-electron pumps ($I = ef$) and quantum-dot spectroscopy.
- **Landau levels**: $E_n = \hbar\omega_c(n + \tfrac12)$, $\omega_c = eB/m^*$, degeneracy $eB/h$ per spin per unit area.
- **Filling factor**: $\nu = n_sh/eB$.
- **Quantum Hall plateaus**: $R_{xy} = h/\nu e^2$ and $R_{xx} = 0$, from localisation and chiral edge channels.
- **Graphene**: $E_n \propto \sqrt{|n|B}$ with a zero-energy level, giving $\sigma_{xy} = \pm 4(N + \tfrac12)e^2/h$.

## Worked Examples

### Example 1 — Can a nanoparticle blockade at room temperature?

Compute $E_C$ for a sphere of radius 10 nm in vacuum and embedded in SiO$_2$ ($\varepsilon_r = 3.9$), and compare with $k_BT$ at 300 K.

**Solution.** In vacuum $C = 4\pi \times 8.854 \times 10^{-12} \times 10^{-8} = 1.11$ aF and

$$E_C = \frac{e^2}{2C} = \frac{(1.602 \times 10^{-19})^2}{2 \times 1.11 \times 10^{-18}} = 1.15 \times 10^{-20}\ \text{J} = 72\ \text{meV}.$$

In SiO$_2$, $C = 4.34$ aF and $E_C = 18.5$ meV, less than $k_BT = 25.9$ meV. Since a ratio $E_C/k_BT$ of order 10 is needed, room-temperature operation demands islands only a few nanometres across.

### Example 2 — Reading a Coulomb-diamond measurement

An SET has $C_g = 2.0$ aF and $C_\Sigma = 10$ aF. Find the gate period, the diamond half-height, the charging energy and the temperature scale.

**Solution.** $\Delta V_g = e/C_g = 1.602 \times 10^{-19}/2.0 \times 10^{-18} = 80$ mV. The diamond half-height is $e/C_\Sigma = 16$ mV. The charging energy is $E_C = e^2/2C_\Sigma = 8.0$ meV, corresponding to $E_C/k_B = 93$ K, so clear oscillations need $T \lesssim 10$ K. The lever arm is $C_g/C_\Sigma = 0.2$: a gate change of 80 mV moves the island levels by $0.2 \times 80 = 16$ meV $= e^2/C_\Sigma$, one addition energy.

### Example 3 — Quantum Hall plateaus in GaAs and graphene

A GaAs 2DEG has $n_s = 4 \times 10^{11}$ cm$^{-2}$. At what field is $\nu = 2$, what is $R_{xy}$, and is the Landau gap resolved at 4.2 K? Compare the $n = 1$ level of graphene at 10 T.

**Solution.** $B = n_sh/(\nu e) = 4 \times 10^{15} \times 6.626 \times 10^{-34}/(2 \times 1.602 \times 10^{-19}) = 8.27$ T. Then $R_{xy} = R_K/2 = 12\,906$ $\Omega$. The cyclotron gap is $1.73 \times 8.27 = 14.3$ meV, forty times $k_BT$ at 4.2 K, so $R_{xx}$ vanishes. In graphene at 10 T,

$$E_1 = v_F\sqrt{2e\hbar B} = 10^6\sqrt{2 \times 1.602 \times 10^{-19} \times 1.055 \times 10^{-34} \times 10} = 1.84 \times 10^{-20}\ \text{J} = 115\ \text{meV},$$

over four times $k_BT$ at room temperature.

## Common Misconceptions

- **"Coulomb blockade happens in any small conductor."** It needs both $E_C \gg k_BT$ and opaque tunnel barriers, $R_t \gg h/e^2$; an open ballistic constriction does not blockade.
- **"The gate period of an SET equals $e/C_\Sigma$."** The period is $e/C_g$; $e/C_\Sigma$ sets the bias height of the diamonds.
- **"The Hall plateaus require a perfectly clean sample."** Disorder is essential: localised states pin the Fermi level between Landau levels and give the plateaus their width.
- **"Zero longitudinal resistance means superconductivity."** In the quantum Hall state $R_{xx} = 0$ because edge channels cannot backscatter, but $R_{xy}$ is finite and the 2DEG is not superconducting.
- **"Landau levels in graphene are equally spaced."** They scale as $\sqrt{|n|}$, with a zero-energy level.

## Connections

- The charging energy is the $Q^2/2C$ of a capacitor from Electricity and Magnetism (Lesson m1-l3), applied to a single electron.
- Landau levels are the harmonic oscillator of Introduction to Quantum Mechanics (Lesson m2-l3), with the cyclotron motion of the Lorentz force (Electricity and Magnetism, Lesson m3-l1).
- The classical Hall effect used to find carrier density in the Solid State Physics Lab and the Low-Dimensional Materials Lab (Lesson m1-l3) becomes the quantum Hall effect at low temperature and high field.
- With the Josephson effect ($V = hf/2e$) and single-electron pumps ($I = ef$), the quantum Hall effect forms the "quantum metrology triangle" of the revised SI.
- Electrons in the atmospheres of magnetised neutron stars (Astrophysics IV), with fields near $10^8$ T, occupy Landau levels too.

## Quick Check

1. State the two conditions for Coulomb blockade and justify the resistance condition.
2. Derive $\mu(N)$ for an SET and show that the gate period is $e/C_g$.
3. Show that the Landau-level degeneracy per spin per unit area is $eB/h$.
4. At what field does a 2DEG with $n_s = 2 \times 10^{11}$ cm$^{-2}$ reach $\nu = 1$?
5. Explain why edge channels give $R_{xx} = 0$ on a quantum Hall plateau.

## Takeaway

- Coulomb blockade arises when adding one electron costs $e^2/2C_\Sigma \gg k_BT$ and tunnel resistances exceed $h/e^2$.
- The SET shows conductance peaks with period $e/C_g$ and diamonds of half-height $e/C_\Sigma$, making it an ultrasensitive electrometer.
- In a magnetic field a 2DEG forms Landau levels $\hbar\omega_c(n + \tfrac12)$, each holding $eB/h$ states per spin per unit area.
- Localisation and chiral edge channels lock the Hall resistance to $h/\nu e^2$, with $R_K = h/e^2$ now an exact SI value.
- Graphene's Berry phase produces a zero-energy Landau level and the half-integer quantum Hall effect, observable at room temperature.
