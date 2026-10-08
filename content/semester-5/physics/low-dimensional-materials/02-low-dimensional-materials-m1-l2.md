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
lessonId: low-dimensional-materials-m1-l2
lessonName: Density of States in 3D, 2D, 1D and 0D
lessonNumber: 2
moduleNumber: 1
semesterNumber: 5
difficulty: intermediate
estimatedStudyMinutes: 55
releaseOrder: 2
prerequisites:
  - low-dimensional-materials-m1-l1
  - solid-state-physics-m3-l1
  - thermal-physics-and-statistical-mechanics-m3-l1
learningObjectives:
  - Derive the density of states per unit volume, area or length for free carriers with effective mass $m^*$ in three, two and one dimensions, and state the zero-dimensional result.
  - Explain the subband staircase of a quantum well and the inverse-square-root van Hove singularities of a quantum wire.
  - Compute the Fermi energy, Fermi wavevector and Fermi wavelength of a two-dimensional electron gas from its sheet density.
  - Use the density of states to predict how carrier density, heat capacity and optical absorption edges change with dimensionality.
concepts:
  - Density of states
  - k-space counting
  - Two-dimensional electron gas
  - Subband staircase
  - van Hove singularity
  - Sheet carrier density
  - Fermi wavelength in 2D
tags:
  - physics
  - low-dimensional-materials
  - density-of-states
  - two-dimensional-electron-gas
sourceType: authored-courseware
status: in-review
assessmentHints:
  - derivation
  - problem-solving
  - computational
  - short-answer
***

# Density of States in 3D, 2D, 1D and 0D

## Overview

Almost every measurable property of an electron system — carrier density, heat capacity, optical absorption, conductance — is an energy integral weighted by the density of states $g(E)$, the number of states per unit energy per unit size. In bulk $g(E) \propto \sqrt{E}$. Confinement changes its shape qualitatively: in a quantum well it becomes a staircase, in a wire it develops inverse-square-root spikes at every subband edge, and in a dot it collapses into delta functions. This lesson derives all four results by one $k$-space counting argument, introduces the sheet density and Fermi wavelength of a two-dimensional electron gas (2DEG), and shows why the sharpened density of states narrows quantum-dot emission and lowers quantum-well laser thresholds.

## Learning Path

- **What you should already know**: the confinement energies and subband picture of Lesson m1-l1; periodic boundary conditions and $k$-space counting for the free-electron gas and the Fermi sphere (Solid State Physics, Lesson m3-l1); the Fermi–Dirac distribution and the idea of counting microstates (Thermal Physics and Statistical Mechanics, Lesson m3-l1).
- **What this lesson adds**: $g(E)$ in each dimensionality; the subband staircase and van Hove singularities; $n_s$, $k_F$, $E_F$ and $\lambda_F$ in 2D.
- **What later lessons this will unlock**: the exciton and quantum-dot spectra of Lesson m1-l3; the linear density of states of graphene (Lesson m2-l1) and the van Hove singularities of carbon nanotubes (Lesson m2-l2); the Landauer formula, whose cancellation of velocity against the 1D density of states gives quantised conductance (Lesson m3-l1); the Landau-level degeneracy of the quantum Hall effect (Lesson m3-l2).

## Core Explanation

### Counting states in k-space

With periodic boundary conditions on a box of side $L$, allowed wavevectors have spacing $2\pi/L$, so each state occupies $(2\pi/L)^d$ in $d$ free dimensions and holds two spins. The **density of states** $g(E)\,dE$ is the number of states between $E$ and $E + dE$ per unit length, area or volume. For $E = \hbar^2 k^2/2m^*$ the procedure is always: count states with wavevector below $k$, convert $k$ to $E$, and differentiate.

### Three dimensions

The states with $|{\bf k}| < k$ fill a sphere of volume $4\pi k^3/3$. Including spin and dividing by the system volume $L^3$,

$$N(k) = 2 \times \frac{4\pi k^3/3}{(2\pi)^3} = \frac{k^3}{3\pi^2}.$$

With $k = \sqrt{2m^*E}/\hbar$ this gives $N(E) = (2m^*E)^{3/2}/(3\pi^2\hbar^3)$ and

$$g_{3D}(E) = \frac{dN}{dE} = \frac{1}{2\pi^2}\left(\frac{2m^*}{\hbar^2}\right)^{3/2}\sqrt{E}.$$

It vanishes at the band edge and rises as $\sqrt{E}$; at zero temperature $n = k_F^3/3\pi^2$, equivalently $g_{3D}(E_F) = 3n/2E_F$.

### Two dimensions: the subband staircase

In a quantum well only $k_x$ and $k_y$ are free. States with $|{\bf k}_\parallel| < k$ fill a disc of area $\pi k^2$, so per unit area and including spin

$$N(k) = 2 \times \frac{\pi k^2}{(2\pi)^2} = \frac{k^2}{2\pi}, \qquad N(E) = \frac{m^* E}{\pi\hbar^2},$$

and therefore, for one subband,

$$g_{2D}(E) = \frac{m^*}{\pi\hbar^2}, \qquad E > 0.$$

The 2D density of states is a **constant**; for GaAs ($m^* = 0.067\,m_e$) it is $2.8 \times 10^{10}\ \text{cm}^{-2}\,\text{meV}^{-1}$. Each subband, with edge $E_n$, contributes its own constant, giving a staircase:

$$g_{QW}(E) = \frac{m^*}{\pi\hbar^2}\sum_n \Theta(E - E_n),$$

where $\Theta$ is the unit step function. At each step the staircase touches the bulk $\sqrt{E}$ curve of a layer of the same thickness: confinement redistributes states rather than creating them. A 2DEG in its lowest subband has sheet density $n_s = k_F^2/2\pi$, so

$$k_F = \sqrt{2\pi n_s}, \qquad E_F = \frac{\pi\hbar^2 n_s}{m^*}, \qquad \lambda_F = \sqrt{\frac{2\pi}{n_s}}.$$

Typical modulation-doped GaAs/AlGaAs heterostructures have $n_s \sim 10^{11}$–$10^{12}\ \text{cm}^{-2}$, so $\lambda_F \approx 25$–80 nm, the length that sets how many modes fit through a constriction in Lesson m3-l1.

### One dimension: van Hove singularities

In a quantum wire only $k_z$ is free. States with $|k_z| < k$ occupy a length $2k$ of the $k$-axis, so per unit length with spin

$$N(k) = 2 \times \frac{2k}{2\pi} = \frac{2k}{\pi}, \qquad N(E) = \frac{2\sqrt{2m^*E}}{\pi\hbar},$$

$$g_{1D}(E) = \frac{1}{\pi\hbar}\sqrt{\frac{2m^*}{E}}.$$

The 1D density of states **diverges** as $E^{-1/2}$ at the subband edge. Summing over the wire's transverse subbands $E_{n,m}$,

$$g_{QWR}(E) = \frac{1}{\pi\hbar}\sum_{n,m}\sqrt{\frac{2m^*}{E - E_{n,m}}}\;\Theta(E - E_{n,m}).$$

Each spike is a **van Hove singularity**, where the group velocity $dE/dk$ vanishes; in carbon nanotubes these dominate the optical absorption and identify the chirality (Lesson m2-l2). Multiplied by the group velocity $\propto \sqrt{E}$, the same $1/\sqrt{E}$ gives the energy-independent current per mode behind the Landauer formula.

### Zero dimensions

A quantum dot has no continuum; its density of states is a sum of delta functions weighted by the degeneracies $d_i$:

$$g_{0D}(E) = \sum_i d_i\,\delta(E - E_i).$$

Finite lifetime broadens each level into a Lorentzian of width $\Gamma = \hbar/\tau$, and an ensemble adds Gaussian broadening from the size distribution. Concentrating oscillator strength into a few transitions makes quantum-dot emission lines two to three times narrower than those of bulk phosphors (Lesson m3-l3).

### Comparing the four cases

| Dimensionality | $N(k)$ (with spin) | $g(E)$ | Shape |
|---|---|---|---|
| 3D (per volume) | $k^3/3\pi^2$ | $\dfrac{1}{2\pi^2}\left(\dfrac{2m^*}{\hbar^2}\right)^{3/2}\sqrt{E}$ | rises as $\sqrt{E}$ |
| 2D (per area) | $k^2/2\pi$ | $\dfrac{m^*}{\pi\hbar^2}$ per subband | staircase |
| 1D (per length) | $2k/\pi$ | $\dfrac{1}{\pi\hbar}\sqrt{\dfrac{2m^*}{E}}$ per subband | $E^{-1/2}$ spikes |
| 0D | — | $\sum_i d_i\,\delta(E - E_i)$ | delta functions |

In general $g(E) \propto E^{d/2 - 1}$ for $d$ free dimensions, with $d = 0$ the singular limit.

The script below plots the four densities of states for GaAs with a 10 nm well and a 10 nm $\times$ 10 nm wire; expect a smooth bulk curve, a staircase touching it at each step, wire spikes at $2E_1$, $5E_1$ (doubly degenerate) and $8E_1$, and narrow Lorentzians for the dot.

```python
import numpy as np
import matplotlib.pyplot as plt

hbar, me, eV = 1.0546e-34, 9.109e-31, 1.602e-19
m = 0.067 * me
L = 10e-9
E1 = np.pi**2 * hbar**2 / (2 * m * L**2)          # J
E = np.linspace(1e-4, 12, 4000) * E1                # energy axis in units of E1

g3 = (1 / (2 * np.pi**2)) * (2 * m / hbar**2)**1.5 * np.sqrt(E)          # per m^3 per J
g2 = sum((m / (np.pi * hbar**2)) * (E > n**2 * E1) for n in range(1, 4)) / L   # per m^3 per J
sub1d = [(n**2 + k**2) * E1 for n in range(1, 4) for k in range(1, 4)]
g1 = sum(np.where(E > Es, np.sqrt(2 * m / np.maximum(E - Es, 1e-30)) / (np.pi * hbar), 0)
         for Es in sub1d) / L**2
gamma = 0.02 * E1
g0 = sum((gamma / np.pi) / ((E - Es)**2 + gamma**2) for Es in [3 * E1, 6 * E1, 9 * E1, 11 * E1]) / L**3

fig, ax = plt.subplots(1, 4, figsize=(14, 3.2), sharex=True)
for a, g, t in zip(ax, [g3, g2, g1, g0], ['3D bulk', '2D well', '1D wire', '0D dot']):
    a.plot(E / E1, g * eV / 1e27)                     # states per nm^3 per eV
    a.set_title(t); a.set_xlabel('E / E$_1$')
ax[0].set_ylabel('g(E) (nm$^{-3}$ eV$^{-1}$)')
plt.tight_layout(); plt.show()
```

### Consequences of the shape

The carrier density $n = \int g(E) f(E)\,dE$ and the **electronic heat capacity** $C_V = (\pi^2/3) k_B^2 T\, g(E_F)$ (Solid State Physics, Lesson m3-l1) both depend on $g(E)$. In 2D $g(E_F)$ is independent of $n_s$, so the heat capacity and Pauli susceptibility of a 2DEG do not change as it is gated. For optics, the joint density of states inherits the same shape: the absorption edge of a well is a step, of a wire a spike, of a dot a line. A gain medium with a step- or spike-shaped density of states reaches inversion with fewer injected carriers, which is why quantum-well and quantum-dot lasers have lower thresholds and better temperature stability than bulk devices.

## Key Ideas

- **Method**: count states in $k$-space with spacing $2\pi/L$ per free direction, include spin, convert to energy and differentiate.
- **3D**: $g(E) = (1/2\pi^2)(2m^*/\hbar^2)^{3/2}\sqrt{E}$, vanishing at the band edge.
- **2D**: $g(E) = m^*/\pi\hbar^2$ per subband, a constant; the well gives a staircase that touches the bulk curve at each step.
- **1D**: $g(E) = (1/\pi\hbar)\sqrt{2m^*/E}$ per subband, with van Hove singularities at the subband edges.
- **0D**: a set of delta functions broadened by lifetime and size dispersion.
- **2DEG tools**: $n_s = k_F^2/2\pi$, $E_F = \pi\hbar^2 n_s/m^*$, $\lambda_F = \sqrt{2\pi/n_s}$.
- **Consequence**: the sharper $g(E)$ of lower dimensions concentrates oscillator strength, narrowing emission lines and lowering laser thresholds.

## Worked Examples

### Example 1 — Fermi energy of a GaAs 2DEG

A modulation-doped GaAs/AlGaAs heterostructure has sheet density $n_s = 4 \times 10^{11}\ \text{cm}^{-2}$. Find $E_F$, $k_F$ and $\lambda_F$, taking $m^* = 0.067\,m_e$.

**Solution.** Convert to SI: $n_s = 4 \times 10^{15}\ \text{m}^{-2}$. The Fermi wavevector is

$$k_F = \sqrt{2\pi n_s} = \sqrt{2\pi \times 4 \times 10^{15}} = 1.59 \times 10^8\ \text{m}^{-1},$$

so $\lambda_F = 2\pi/k_F = 39.6$ nm. The Fermi energy, using $\hbar^2/2m_e = 0.0381$ eV nm$^2$ and $k_F = 0.159$ nm$^{-1}$,

$$E_F = \frac{0.0381}{0.067}\times(0.159)^2 = 0.569 \times 0.0253 = 0.0144\ \text{eV} = 14.4\ \text{meV}.$$

As a check, $E_F = n_s/g_{2D} = 4 \times 10^{11}/(2.8 \times 10^{10}) = 14.3$ meV, well below the 56 meV subband spacing of a 10 nm well: a true 2DEG.

### Example 2 — Subband edges of a square quantum wire

A GaAs quantum wire has a $10\ \text{nm} \times 10\ \text{nm}$ cross-section with infinite barriers. List the first four subband edges and their degeneracies.

**Solution.** With $E_1 = \pi^2\hbar^2/(2m^*L^2) = 56$ meV (Lesson m1-l1, Example 1), the transverse levels are $E_{n,m} = E_1(n^2 + m^2)$:

| $(n,m)$ | $n^2 + m^2$ | $E_{n,m}$ (meV) | degeneracy |
|---|---|---|---|
| (1,1) | 2 | 112 | 1 |
| (1,2), (2,1) | 5 | 280 | 2 |
| (2,2) | 8 | 449 | 1 |
| (1,3), (3,1) | 10 | 561 | 2 |

Each energy carries an $E^{-1/2}$ spike, the doubly degenerate ones twice as tall.

### Example 3 — Density of states at the Fermi level of copper

Copper has $n = 8.47 \times 10^{28}\ \text{m}^{-3}$ and $E_F = 7.0$ eV. Find $g_{3D}(E_F)$ per atom and compare with the 2D GaAs value.

**Solution.** Using $g_{3D}(E_F) = 3n/2E_F$,

$$g_{3D}(E_F) = \frac{3 \times 8.47 \times 10^{28}}{2 \times 7.0} = 1.82 \times 10^{28}\ \text{eV}^{-1}\,\text{m}^{-3}.$$

Dividing by the atomic density (one conduction electron per atom) gives 0.21 states per eV per atom. The GaAs 2DEG value, $2.8 \times 10^{17}\ \text{m}^{-2}\,\text{eV}^{-1}$, spread over a 10 nm well gives $2.8 \times 10^{25}\ \text{eV}^{-1}\,\text{m}^{-3}$, a thousand times smaller, reflecting the light mass of the semiconductor.

## Common Misconceptions

- **"Confinement removes states."** The number of states is fixed by the number of atoms; confinement redistributes them, and the staircase touches the bulk curve at every step.
- **"The 2D density of states depends on the well width."** Per unit area and per subband it does not; $m^*/\pi\hbar^2$ contains no $L$. The width enters only through the positions $E_n$ of the steps.
- **"The $1/\sqrt{E}$ divergence in 1D means infinite carrier density."** The divergence is integrable; only the density per unit energy is singular.
- **"A quantum dot has a continuous spectrum like a small piece of bulk."** It is discrete; lifetime and ensemble size dispersion only make it look continuous.
- **"Spin degeneracy doubles $g(E)$ only in 3D."** The factor of two for spin appears in every dimensionality; the formulas here all include it.

## Connections

- The $k$-space counting is identical to that of the free-electron metal in Solid State Physics (Lesson m3-l1), and the Debye phonon density of states of Lesson m2-l2 is the same counting applied to a linear dispersion.
- The electronic heat capacity and Pauli susceptibility are $g(E_F)$ multiplied by thermodynamic factors (Thermal Physics and Statistical Mechanics, Lesson m3-l2; Solid State Physics, Lesson m2-l3).
- Blackbody radiation (Introduction to Quantum Mechanics, Lesson m1-l1) uses the 3D photon density of states $\propto \omega^2$.
- Van Hove singularities of carbon nanotubes are identified with resonance Raman and absorption spectroscopy in the Low-Dimensional Materials Lab, and the UV-Vis absorption edge measured there is the joint density of states.
- The reduced threshold of quantum-well lasers is why almost every fibre-optic and Blu-ray laser uses a quantum-well active region.

## Quick Check

1. Starting from periodic boundary conditions, derive $g_{2D}(E) = m^*/\pi\hbar^2$ and state its numerical value for GaAs.
2. Why does the quantum-well staircase touch the bulk $\sqrt{E}$ curve at each step?
3. A 2DEG has $n_s = 10^{12}\ \text{cm}^{-2}$. Compute $\lambda_F$.
4. Sketch $g(E)$ for a quantum wire with subband edges at 112, 280 and 449 meV, indicating degeneracies.
5. Explain in terms of the density of states why a quantum-dot laser should have a lower threshold current than a bulk laser.

## Takeaway

- The density of states follows from counting $k$-states in the free directions; $g(E) \propto E^{d/2-1}$ for $d$ free dimensions.
- Bulk: $\sqrt{E}$; quantum well: constant $m^*/\pi\hbar^2$ per subband, forming a staircase; wire: $E^{-1/2}$ van Hove spikes; dot: delta functions.
- For a 2DEG, $n_s = k_F^2/2\pi$ and $E_F = \pi\hbar^2 n_s/m^*$; GaAs has $g_{2D} = 2.8 \times 10^{10}\ \text{cm}^{-2}\,\text{meV}^{-1}$.
- Confinement redistributes rather than removes states; the staircase always touches the bulk curve.
- The sharper density of states in lower dimensions sharpens absorption edges, narrows emission lines and lowers laser thresholds.
