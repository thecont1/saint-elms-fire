***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-5
semesterName: Semester 5
subjectId: physics
subjectName: Physics
courseId: low-dimensional-materials
courseName: Low-Dimensional Materials (Physics Option C)
moduleId: low-dimensional-materials-module-1
moduleName: Quantum Confinement
lessonId: low-dimensional-materials-m1-l3
lessonName: Quantum Wells, Wires and Dots – Envelope Functions, Excitons and the Brus Equation
lessonNumber: 3
moduleNumber: 1
semesterNumber: 5
difficulty: intermediate
estimatedStudyMinutes: 55
releaseOrder: 3
prerequisites:
  - low-dimensional-materials-m1-l2
  - introduction-to-quantum-mechanics-m2-l2
  - introduction-to-quantum-mechanics-m3-l2
learningObjectives:
  - State the envelope-function approximation and write the effective-mass Schrödinger equation for a heterostructure with band offsets.
  - Solve the finite square well graphically for a GaAs/AlGaAs quantum well and compare the bound levels with the infinite-well estimate.
  - Explain how reduced dimensionality enhances exciton binding, including the factor of four for an ideal two-dimensional exciton.
  - Derive and apply the Brus equation $E(R) = E_g + \frac{\hbar^2\pi^2}{2R^2}\left(\frac{1}{m_e^*} + \frac{1}{m_h^*}\right) - \frac{1.786\,e^2}{4\pi\varepsilon_0\varepsilon_r R}$ to predict quantum-dot emission colours.
concepts:
  - Envelope-function approximation
  - Band offset
  - Finite quantum well
  - Spherical quantum dot levels
  - Two-dimensional exciton
  - Brus equation
tags:
  - physics
  - low-dimensional-materials
  - quantum-dots
  - excitons
sourceType: authored-courseware
status: in-review
assessmentHints:
  - derivation
  - problem-solving
  - computational
  - conceptual
***

# Quantum Wells, Wires and Dots – Envelope Functions, Excitons and the Brus Equation

## Overview

Lessons m1-l1 and m1-l2 treated confined carriers as free particles of mass $m^*$ in infinitely deep boxes. Real nanostructures differ in three ways: the barriers are finite, set by band offsets; the geometry is often cylindrical or spherical; and the electron and hole attract, forming an exciton whose binding grows as dimensionality falls. This lesson justifies the effective-mass picture through the envelope-function approximation, solves the finite well for GaAs/AlGaAs, extends the method to wires and spherical dots, analyses excitons in two and zero dimensions, and closes with the Brus equation, the standard first estimate of a colloidal quantum dot's gap as a function of radius, tested against measured CdSe colours.

## Learning Path

- **What you should already know**: the infinite-well energy $E_n = n^2\pi^2\hbar^2/(2m^*L^2)$, the exciton Bohr radius and the weak/strong confinement criterion (Lesson m1-l1); the subband densities of states (Lesson m1-l2); the finite square well (Introduction to Quantum Mechanics, Lesson m2-l2) and the hydrogen atom (Introduction to Quantum Mechanics, Lesson m3-l2).
- **What this lesson adds**: the envelope-function equation; finite-well levels; wire and spherical-dot levels; 2D and 0D excitons; the Brus equation and its limits.
- **What later lessons this will unlock**: excitons in monolayer transition-metal dichalcogenides (Lesson m2-l2); sizing colloidal dots by photoluminescence (Lesson m2-l3); quantum-dot absorption, Stokes shift and displays (Lesson m3-l3).

## Core Explanation

### The envelope-function approximation

In a crystal the electron wavefunction near the conduction-band minimum is a Bloch function $u_c(\mathbf{r})e^{i\mathbf{k}\cdot\mathbf{r}}$, where $u_c$ has the lattice periodicity (Solid State Physics, Lesson m3-l2). If an additional potential $V(\mathbf{r})$ varies slowly on the scale of the lattice constant $a$, the wavefunction can be written as

$$\psi(\mathbf{r}) = F(\mathbf{r})\,u_c(\mathbf{r}),$$

where the **envelope function** $F(\mathbf{r})$ satisfies an effective-mass Schrödinger equation,

$$\left[-\frac{\hbar^2}{2m^*}\nabla^2 + V(\mathbf{r})\right]F(\mathbf{r}) = (E - E_c)\,F(\mathbf{r}).$$

Atomic-scale detail is absorbed into $u_c$ and $m^*$; only the smooth envelope feels the confinement. The approximation holds when the structure is many lattice constants wide (a 10 nm GaAs well spans about 18 lattice constants of 0.565 nm) and energies stay near the band edge, where the dispersion is parabolic. Every particle-in-a-box result of Lesson m1-l1 is really a statement about $F$.

For optics, the interband matrix element factorises into a Bloch part and an envelope overlap,

$$\langle \psi_c|\hat{p}|\psi_v\rangle \approx \langle u_c|\hat{p}|u_v\rangle\,\langle F_e|F_h\rangle .$$

In a symmetric infinite well the envelopes are $\sqrt{2/L}\sin(n\pi z/L)$ for both carriers, so $\langle F_{e,n}|F_{h,n'}\rangle = \delta_{nn'}$: the **selection rule** $\Delta n = 0$ allows only the transitions $e_1$–$h_1$, $e_2$–$h_2$, and so on.

### Band offsets and the finite well

When two semiconductors are grown epitaxially, their band-gap difference is shared between the conduction and valence bands as **band offsets** $\Delta E_c$ and $\Delta E_v$. For GaAs/Al$_{x}$Ga$_{1-x}$As the gap of the alloy is $E_g(x) \approx 1.424 + 1.247x$ eV, so at $x = 0.3$, $\Delta E_g \approx 0.37$ eV, split roughly 62:38 into $\Delta E_c \approx 0.23$ eV and $\Delta E_v \approx 0.14$ eV. Both carriers are trapped in the GaAs layer, a **type I** alignment; in a **type II** alignment the electron and hole are confined in different layers.

For a well of width $L$ and depth $V_0 = \Delta E_c$, the envelope is oscillatory inside, $\cos kz$ or $\sin kz$ with $k = \sqrt{2m^*E}/\hbar$, and decays outside as $e^{-\kappa|z|}$ with $\kappa = \sqrt{2m^*(V_0 - E)}/\hbar$. The envelope boundary conditions (BenDaniel–Duke) require $F$ and $(1/m^*)\,dF/dz$ to be continuous; for equal masses in well and barrier this gives the textbook conditions

$$k\tan\frac{kL}{2} = \kappa \ (\text{even}), \qquad -k\cot\frac{kL}{2} = \kappa \ (\text{odd}).$$

With $u = kL/2$ and the **well-strength parameter** $u_0 = (L/2)\sqrt{2m^*V_0}/\hbar$, these become

$$u\tan u = \sqrt{u_0^2 - u^2}, \qquad -u\cot u = \sqrt{u_0^2 - u^2},$$

and the energies are $E = V_0 (u/u_0)^2$. A new bound state appears each time $u_0$ passes a multiple of $\pi/2$, so there are $N = \lceil 2u_0/\pi \rceil$ bound states. Because the envelope leaks into the barriers, every level lies below its infinite-well value.

### Wires and dots of circular symmetry

For an infinitely deep cylinder of radius $R$, the transverse envelope is a Bessel function $J_m(kr)$ that must vanish at $r = R$; the lowest zero, $j_{0,1} = 2.405$, gives the first subband edge

$$E_{01} = \frac{\hbar^2 (2.405)^2}{2m^* R^2}.$$

For a sphere, the radial equation with angular momentum $l$ has spherical Bessel solutions $j_l(kr)$, and the levels are $E_{nl} = \hbar^2 \beta_{nl}^2/(2m^*R^2)$ with $\beta_{nl}$ the $n$th zero of $j_l$. For $l = 0$, $j_0(x) = \sin x/x$ vanishes at $x = n\pi$, giving

$$E_{1S} = \frac{\pi^2\hbar^2}{2m^*R^2},$$

while $\beta_{11} = 4.493$ ($1P$) and $\beta_{21} = 5.763$ ($1D$). Dot levels are therefore labelled $1S$, $1P$, $1D$ like atomic orbitals, with degeneracies $2(2l+1)$ including spin; the ratio $E_{1P}/E_{1S} = (4.493/\pi)^2 = 2.05$.

### Excitons in reduced dimensions

The bulk exciton of Lesson m1-l1 is a scaled hydrogen atom with Rydberg $R_y^* = (\mu/m_e)(13.6\ \text{eV})/\varepsilon_r^2$ and radius $a_B^*$. Confinement squeezes the pair together and strengthens their attraction. For an ideal two-dimensional hydrogen problem the bound levels are

$$E_n^{2D} = -\frac{R_y^*}{(n - \tfrac12)^2}, \qquad n = 1, 2, \ldots$$

so the ground-state binding is $4R_y^*$ and the 2D Bohr radius $a_B^*/2$. Real 5–10 nm GaAs wells give a factor of two to three, because the envelope has finite extent along $z$. This is why excitonic absorption peaks survive to room temperature in quantum wells but not in bulk GaAs; in atomically thin semiconductors, with weak screening, the effect is far stronger (Lesson m2-l2).

In a quantum dot the exciton is part of the confined electron–hole problem. For $R \ll a_B^*$ the kinetic energy scales as $1/R^2$ and the Coulomb energy as $1/R$, so confinement dominates and the attraction is a correction: the basis of the Brus equation.

### The Brus equation

Treat the electron and hole as independent particles in an infinite spherical well, each in its $1S$ state, and add the Coulomb attraction in first-order perturbation theory. The confinement energy is

$$E_{\text{conf}} = \frac{\hbar^2\pi^2}{2R^2}\left(\frac{1}{m_e^*} + \frac{1}{m_h^*}\right) = \frac{\hbar^2\pi^2}{2\mu R^2}.$$

The Coulomb term is the expectation value of $-e^2/(4\pi\varepsilon_0\varepsilon_r|\mathbf{r}_e - \mathbf{r}_h|)$ in the product state $\phi_{1S}(r_e)\phi_{1S}(r_h)$, $\phi_{1S} \propto \sin(\pi r/R)/r$. The double integral evaluates to $-1.786\,e^2/(4\pi\varepsilon_0\varepsilon_r R)$. The result, due to L. E. Brus (1984), is

$$E(R) = E_g + \frac{\hbar^2\pi^2}{2R^2}\left(\frac{1}{m_e^*} + \frac{1}{m_h^*}\right) - \frac{1.786\,e^2}{4\pi\varepsilon_0\varepsilon_r R} - 0.248\,R_y^*.$$

The last term, a correlation correction under 5 meV, is usually dropped. In practical units, with $e^2/4\pi\varepsilon_0 = 1.440$ eV nm and $\hbar^2\pi^2/2m_e = 0.376$ eV nm$^2$,

$$E(R) \approx E_g + \frac{0.376}{R^2}\left(\frac{1}{m_{e,r}} + \frac{1}{m_{h,r}}\right) - \frac{2.572}{\varepsilon_r R}\quad (\text{eV}, R\ \text{in nm}).$$

For CdSe ($E_g = 1.74$ eV, $m_e^* = 0.13$, $m_h^* = 0.45$, $\varepsilon_r = 9.5$) this is $E = 1.74 + 3.728/R^2 - 0.271/R$ eV. The script below plots the Brus energy and wavelength for $R = 1$–6 nm; expect a steep rise below 2 nm, flattening towards the bulk gap (713 nm), with radii of about 1.5–4 nm spanning the visible.

```python
import numpy as np
import matplotlib.pyplot as plt

Eg, me, mh, er = 1.74, 0.13, 0.45, 9.5           # CdSe
R = np.linspace(1.0, 6.0, 300)                     # radius in nm
E_conf = 0.376 * (1/me + 1/mh) / R**2              # eV
E_coul = 1.786 * 1.440 / (er * R)                  # eV
E = Eg + E_conf - E_coul
lam = 1239.84 / E                                  # nm

fig, ax = plt.subplots(1, 2, figsize=(10, 3.5))
ax[0].plot(R, E); ax[0].axhline(Eg, ls='--')
ax[0].set_xlabel('R (nm)'); ax[0].set_ylabel('E (eV)')
ax[1].plot(R, lam); ax[1].set_xlabel('R (nm)'); ax[1].set_ylabel('emission wavelength (nm)')
plt.tight_layout(); plt.show()
```

The equation captures the trend but overestimates the gap of the smallest dots: the ligand barrier is finite, the bands are non-parabolic at high energy, and the continuum picture fails for dots of a few hundred atoms. In practice, sizing curves calibrated by transmission electron microscopy are used (Lesson m2-l3).

## Key Ideas

- **Envelope function**: $\psi = F u_c$, with $F$ obeying the effective-mass equation; valid for structures many lattice constants wide.
- **Selection rule**: optical strength is proportional to the envelope overlap, giving $\Delta n = 0$ transitions in symmetric wells.
- **Finite well**: $u\tan u = \sqrt{u_0^2 - u^2}$ (even) and $-u\cot u = \sqrt{u_0^2 - u^2}$ (odd); $N = \lceil 2u_0/\pi \rceil$ bound states, all below the infinite-well values.
- **Spherical dots**: $E_{nl} = \hbar^2\beta_{nl}^2/(2m^*R^2)$, with $\beta = \pi$ ($1S$), 4.493 ($1P$), 5.763 ($1D$).
- **2D exciton**: binding energy $4R_y^*$ in the ideal limit, which keeps excitons stable at room temperature in wells.
- **Brus equation**: confinement $\propto 1/R^2$ minus Coulomb $1.786\,e^2/(4\pi\varepsilon_0\varepsilon_r R)$; a strong-confinement estimate that overestimates small-dot gaps.

## Worked Examples

### Example 1 — Bound levels of a GaAs/Al$_{0.3}$Ga$_{0.7}$As well

A 10 nm GaAs well has $\Delta E_c = 0.23$ eV and $m^* = 0.067\,m_e$ in both layers. Find the electron levels.

**Solution.** The well-strength parameter is

$$u_0^2 = \left(\frac{L}{2}\right)^2\frac{m_r V_0}{\hbar^2/2m_e} = \frac{25 \times 0.067 \times 0.23}{0.0381} = 10.11, \qquad u_0 = 3.18.$$

Since $2u_0/\pi = 2.02$, there are three bound states. Solving $u\tan u = \sqrt{10.11 - u^2}$ numerically gives $u_1 = 1.188$, so $E_1 = 0.23 \times 1.188^2/10.11 = 32$ meV. The odd equation gives $u_2 = 2.323$ and $E_2 = 123$ meV. The third root, $u_3 = 3.177$, gives $E_3 = 229.7$ meV, only 0.3 meV below the barrier top and of no practical use. The infinite-well values were 56, 224 and 505 meV: barrier penetration lowers $E_1$ by about 40%.

### Example 2 — Colour of a CdSe quantum dot

Use the Brus equation for CdSe to find the emission wavelength of dots of radius 2.0 nm and 3.0 nm.

**Solution.** For $R = 2.0$ nm the confinement term is $3.728/4 = 0.932$ eV and the Coulomb term is $0.271/2 = 0.135$ eV, so $E = 1.74 + 0.932 - 0.135 = 2.537$ eV and $\lambda = 1239.84/2.537 = 489$ nm (blue-green). For $R = 3.0$ nm, $E = 1.74 + 0.414 - 0.090 = 2.064$ eV and $\lambda = 601$ nm (orange). Measured first-exciton peaks are near 585 nm and 625 nm respectively: the estimate is within 0.1 eV at 3 nm but too blue by about 0.4 eV at 2 nm, as expected from the infinite-barrier assumption.

### Example 3 — Designing a green emitter

What CdSe radius does the Brus equation predict for emission at 530 nm?

**Solution.** The target energy is $1239.84/530 = 2.339$ eV, so $3.728/R^2 - 0.271/R = 0.599$. Multiplying by $R^2$,

$$0.599R^2 + 0.271R - 3.728 = 0,$$

$$R = \frac{-0.271 + \sqrt{0.0733 + 4 \times 0.599 \times 3.728}}{2 \times 0.599} = \frac{-0.271 + 3.001}{1.198} = 2.28\ \text{nm}.$$

The predicted diameter is about 4.6 nm. Because the formula overestimates small-dot gaps, the real green emitter is closer to 1.4 nm in radius, which is why producers use calibrated sizing curves.

## Common Misconceptions

- **"The effective-mass equation describes the full wavefunction."** It describes only the envelope $F$; the Bloch part $u_c$ is unchanged and sets $\langle u_c|\hat p|u_v\rangle$.
- **"A shallow well may have no bound state."** In one dimension a symmetric attractive well always binds at least one state; $\lceil 2u_0/\pi \rceil \ge 1$ for any $u_0 > 0$.
- **"In a quantum dot the exciton binding energy is subtracted from the bulk gap as in bulk."** In strong confinement the exciton is not a hydrogenic state; the Coulomb term scales as $1/R$ and is computed with the confined envelopes.
- **"The Brus equation is exact for small dots."** It overestimates the gap for $R \lesssim 2$ nm because of finite barriers, band non-parabolicity and the breakdown of the continuum picture.

## Connections

- The finite well and the spherical well are direct extensions of Introduction to Quantum Mechanics (Lessons m2-l2 and m3-l2); the spherical Bessel functions are those of the hydrogen radial equation without the Coulomb term.
- Band offsets extend the band diagrams of Solid State Physics (Lesson m3-l3) and underlie quantum-well lasers and high-electron-mobility transistors; the finite-well roots are a standard Numerical Methods exercise.
- Photoluminescence peak positions measured in the Low-Dimensional Materials Lab (Lesson m1-l2) are converted into dot sizes with the Brus equation or a calibrated version of it.
- Quantum-dot colour converters in displays (Lesson m3-l3) are designed with the radius–colour mapping of Example 3.

## Quick Check

1. Write the envelope-function equation for a conduction electron in a heterostructure and state when it is valid.
2. Compute $u_0$ for a 4 nm GaAs well with $\Delta E_c = 0.23$ eV and state how many bound electron states it has.
3. Why does the $\Delta n = 0$ selection rule hold in a symmetric infinite well?
4. What is the ratio of the $1P$ to $1S$ confinement energies in a spherical dot?
5. Using the Brus equation, estimate the CdSe emission wavelength for $R = 2.5$ nm.

## Takeaway

- The envelope-function approximation turns the crystal problem into an effective-mass particle in a potential set by band offsets.
- Finite barriers lower every level below its infinite-well value and limit the number of bound states to $\lceil 2u_0/\pi \rceil$.
- Spherical dots have atom-like $1S$, $1P$, $1D$ levels with $E \propto \beta_{nl}^2/R^2$.
- Reduced dimensionality enhances exciton binding, up to $4R_y^*$ in an ideal 2D layer.
- The Brus equation maps dot radius to colour; it is accurate near $R \approx 3$ nm for CdSe and too blue for smaller dots.
