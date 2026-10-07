***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-5
semesterName: Semester 5
subjectId: physics
subjectName: Physics
courseId: low-dimensional-materials
courseName: Low-Dimensional Materials (Physics Option C)
moduleId: low-dimensional-materials-module-2
moduleName: Two-Dimensional Materials and Nanostructures
lessonId: low-dimensional-materials-m2-l1
lessonName: Graphene – Tight-Binding Bands and Dirac Fermions
lessonNumber: 4
moduleNumber: 2
semesterNumber: 5
difficulty: advanced
estimatedStudyMinutes: 60
releaseOrder: 4
prerequisites:
  - low-dimensional-materials-m1-l3
  - solid-state-physics-m1-l1
  - solid-state-physics-m3-l2
learningObjectives:
  - Describe the honeycomb lattice of graphene as a triangular Bravais lattice with a two-atom basis and locate the $K$ and $K'$ points of its Brillouin zone.
  - Derive the nearest-neighbour tight-binding dispersion $E(\mathbf{k}) = \pm t|f(\mathbf{k})|$ and show that the bands touch at the Dirac points.
  - Expand the dispersion near $K$ to obtain $E = \pm\hbar v_F|\mathbf{q}|$ with $v_F = 3ta/2\hbar \approx 10^6$ m s$^{-1}$, and compute the linear density of states and carrier density.
  - Explain pseudospin, chirality and the Berry phase of $\pi$ and their observable consequences.
concepts:
  - Honeycomb lattice
  - Tight-binding model of graphene
  - Dirac cone
  - Massless Dirac fermion
  - Fermi velocity of graphene
  - Berry phase
  - Ambipolar field effect
tags:
  - physics
  - low-dimensional-materials
  - graphene
  - band-structure
sourceType: authored-courseware
status: in-review
assessmentHints:
  - derivation
  - problem-solving
  - computational
  - conceptual
***

# Graphene – Tight-Binding Bands and Dirac Fermions

## Overview

Graphene, a single sheet of carbon atoms in a honeycomb lattice, was isolated by mechanical exfoliation in 2004 and is the prototype two-dimensional material. Its importance for this course is that its electrons do not obey the parabolic effective-mass dispersion used in Module 1. A nearest-neighbour tight-binding calculation shows that the valence and conduction bands touch at two inequivalent corners of the Brillouin zone, $K$ and $K'$, and that near these points the energy is linear in momentum, $E = \pm\hbar v_F|\mathbf{q}|$. The charge carriers therefore behave as massless Dirac fermions moving at $v_F \approx 10^6$ m s$^{-1}$, with a density of states that vanishes linearly at the neutrality point and a Berry phase of $\pi$ that suppresses backscattering and shifts the quantum Hall plateaus. This lesson derives the band structure step by step and computes the quantities measured in gated graphene devices.

## Learning Path

- **What you should already know**: Bravais lattices and the reciprocal lattice (Solid State Physics, Lesson m1-l1); Bloch's theorem and the tight-binding idea (Solid State Physics, Lesson m3-l2); $k$-space counting of the density of states (Lesson m1-l2); Pauli matrices and spin (Introduction to Quantum Mechanics, Lesson m3-l3).
- **What this lesson adds**: the honeycomb lattice and its Brillouin zone; the Wallace dispersion; Dirac cones and $v_F$; the linear density of states; pseudospin and the Berry phase.
- **What later lessons this will unlock**: hBN and zone-folded carbon nanotubes (Lesson m2-l2); Raman characterisation of graphene (Lesson m2-l3); ballistic graphene and nanotube conductance (Lesson m3-l1); the half-integer quantum Hall effect (Lesson m3-l2); graphene electrodes and sensors (Lesson m3-l3).

## Core Explanation

### The honeycomb lattice

Each carbon atom in graphene is $sp^2$ bonded to three neighbours at $a = 0.142$ nm. The three $\sigma$ bonds give the sheet its strength; the remaining $p_z$ orbital, one electron per atom, forms the $\pi$ bands that control the electronic properties. The honeycomb is not a Bravais lattice: it is a triangular lattice with a two-atom basis, the atoms labelled **A** and **B** sublattices. With primitive vectors

$$\mathbf{a}_1 = \frac{a}{2}(3, \sqrt3), \qquad \mathbf{a}_2 = \frac{a}{2}(3, -\sqrt3),$$

the lattice constant is $|\mathbf{a}_1| = \sqrt3\,a = 0.246$ nm. Each A atom has B neighbours at $\boldsymbol\delta_1 = \frac{a}{2}(1, \sqrt3)$, $\boldsymbol\delta_2 = \frac{a}{2}(1, -\sqrt3)$, $\boldsymbol\delta_3 = -a(1, 0)$. The reciprocal vectors $\mathbf{b}_{1,2} = \frac{2\pi}{3a}(1, \pm\sqrt3)$ generate a hexagonal Brillouin zone whose inequivalent corners are

$$K = \left(\frac{2\pi}{3a}, \frac{2\pi}{3\sqrt3\,a}\right), \qquad K' = \left(\frac{2\pi}{3a}, -\frac{2\pi}{3\sqrt3\,a}\right),$$

with $M = (2\pi/3a, 0)$ at the midpoint of an edge.

### Tight-binding dispersion

Write a Bloch state as a combination of $p_z$ orbitals on the two sublattices with amplitudes $c_A$ and $c_B$. With the on-site energy set to zero and a hopping integral $-t$ between nearest neighbours ($t \approx 2.8$ eV), an A orbital couples only to its three B neighbours, giving the $2 \times 2$ Bloch Hamiltonian

$$H(\mathbf{k}) = \begin{pmatrix} 0 & -t f(\mathbf{k}) \\ -t f^*(\mathbf{k}) & 0 \end{pmatrix}, \qquad f(\mathbf{k}) = \sum_{j=1}^{3} e^{i\mathbf{k}\cdot\boldsymbol\delta_j}.$$

Its eigenvalues are $E = \pm t|f(\mathbf{k})|$, and summing the three phases gives the **Wallace dispersion** (1947):

$$E_\pm(\mathbf{k}) = \pm t\sqrt{3 + 2\cos\!\left(\sqrt3 k_y a\right) + 4\cos\!\left(\frac{3k_x a}{2}\right)\cos\!\left(\frac{\sqrt3 k_y a}{2}\right)}.$$

At $\Gamma$ the square root is 3, so the bands span $\pm 3t$; at $M$ it is 1, giving saddle points at $\pm t$ with logarithmic van Hove singularities. At $K$, $\cos(\sqrt3 k_y a) = -\tfrac12$, $\cos(3k_x a/2) = -1$ and $\cos(\sqrt3 k_y a/2) = \tfrac12$, so the argument is $3 - 1 - 2 = 0$: **the bands touch**. With two $\pi$ electrons per unit cell the lower band is exactly full, and the Fermi level of neutral graphene lies at these touching points. Graphene is a **zero-gap semiconductor**, or semimetal, with a Fermi "surface" of two points.

The script below evaluates $E_\pm$ over the Brillouin zone and along $\Gamma$–$K$–$M$–$\Gamma$; expect six cones meeting the zero-energy plane at the zone corners, and a cut that is linear near $K$, flat at $M$ ($\pm t$) and reaches $\pm 3t$ at $\Gamma$.

```python
import numpy as np
import matplotlib.pyplot as plt

t, a = 2.8, 0.142                                  # eV, nm
def E(kx, ky):
    return t * np.sqrt(np.abs(3 + 2*np.cos(np.sqrt(3)*ky*a)
                              + 4*np.cos(1.5*kx*a)*np.cos(np.sqrt(3)/2*ky*a)))

kx, ky = np.meshgrid(np.linspace(-20, 20, 400), np.linspace(-20, 20, 400))
G, K, M = np.array([0, 0]), np.array([2*np.pi/(3*a), 2*np.pi/(3*np.sqrt(3)*a)]), np.array([2*np.pi/(3*a), 0])
path = np.vstack([np.linspace(P, Q, 100) for P, Q in [(G, K), (K, M), (M, G)]])
Ek = E(path[:, 0], path[:, 1])

fig, ax = plt.subplots(1, 2, figsize=(10, 4))
ax[0].contourf(kx, ky, E(kx, ky), 30); ax[0].set_aspect('equal'); ax[0].set_title('E+ (eV)')
ax[1].plot(Ek); ax[1].plot(-Ek); ax[1].set_xticks([0, 100, 200, 300], ['Γ', 'K', 'M', 'Γ'])
ax[1].set_ylabel('E (eV)'); plt.tight_layout(); plt.show()
```

### Dirac cones and the Fermi velocity

Expanding $f$ to first order in $\mathbf{q} = \mathbf{k} - K$ gives $|f(K + \mathbf{q})| = \frac{3a}{2}|\mathbf{q}|$, hence

$$E_\pm(\mathbf{q}) = \pm\hbar v_F|\mathbf{q}|, \qquad v_F = \frac{3ta}{2\hbar}.$$

With $t = 2.8$ eV and $a = 0.142$ nm, $\hbar v_F = 0.596$ eV nm and $v_F = 9.1 \times 10^5$ m s$^{-1}$, close to the measured $1.0 \times 10^6$ m s$^{-1}$, or $c/300$. The dispersion is a double cone, the **Dirac cone**, at both $K$ and $K'$. Near $K$, after a choice of phases, the Hamiltonian takes the form

$$H_K = \hbar v_F\left(\sigma_x q_x + \sigma_y q_y\right) = \hbar v_F\,\boldsymbol\sigma\cdot\mathbf{q},$$

where the Pauli matrices act on the sublattice index. This is the two-dimensional Dirac equation for a particle of zero mass with $v_F$ in place of $c$; carriers in graphene are **massless Dirac fermions**. The velocity is independent of energy, unlike the $v = \hbar k/m^*$ of a parabolic band.

### Pseudospin, chirality and the Berry phase

The eigenstates of $H_K$ are

$$\psi_\pm(\mathbf{q}) = \frac{1}{\sqrt2}\begin{pmatrix} e^{-i\theta_q/2} \\ \pm e^{i\theta_q/2} \end{pmatrix}, \qquad \theta_q = \arctan\frac{q_y}{q_x}.$$

The sublattice degree of freedom behaves as a **pseudospin** that points parallel (conduction band) or antiparallel (valence band) to $\mathbf{q}$: the carriers are **chiral**. If $\mathbf{q}$ is carried once around the Dirac point, $\theta_q \to \theta_q + 2\pi$ and the spinor changes sign. This geometric phase of $\pi$ is the **Berry phase** of graphene. Two consequences are measurable. First, a state at $\mathbf{q}$ and its time-reversed partner at $-\mathbf{q}$ in the same band have overlap $|\langle\psi(\theta)|\psi(\theta + \pi)\rangle|^2 = \cos^2(\pi/2) = 0$, so smooth potentials cannot backscatter carriers, which contributes to graphene's high mobility. Second, the Berry phase produces a Landau level exactly at zero energy and the half-integer quantum Hall effect (Lesson m3-l2).

### Density of states and gating

Graphene has spin degeneracy $g_s = 2$ and valley degeneracy $g_v = 2$. Counting states inside a circle of radius $q$ around each Dirac point, $N = g_s g_v\,\pi q^2/(2\pi)^2 = q^2/\pi$ per unit area, and with $E = \hbar v_F q$,

$$n = \frac{k_F^2}{\pi} = \frac{E_F^2}{\pi\hbar^2 v_F^2}, \qquad g(E) = \frac{2|E|}{\pi\hbar^2 v_F^2}.$$

The density of states vanishes linearly at the **Dirac point**, in contrast to the constant $m^*/\pi\hbar^2$ of a parabolic 2DEG (Lesson m1-l2). Because $E_F$ sits at a point of zero density of states, a gate electrode moves it easily into either band: with graphene on 300 nm SiO$_2$ over a doped Si gate, $n = C_g V_g/e$ with $C_g = \varepsilon_0\varepsilon_r/d = 11.5$ nF cm$^{-2}$, so each volt induces $7.2 \times 10^{10}$ cm$^{-2}$ carriers. Positive $V_g$ gives electrons, negative gives holes, and the resistance peaks at the neutrality point: the **ambipolar field effect** measured in the Low-Dimensional Materials Lab field-effect transistor experiment. The effective cyclotron mass $m_c = \hbar k_F/v_F = E_F/v_F^2$ grows as $\sqrt n$, a direct signature of the linear dispersion.

Two further properties follow from the Dirac spectrum: a single layer absorbs a fraction $\pi\alpha = 2.3\%$ of visible light, independent of wavelength, and the absence of a gap means graphene transistors cannot be switched fully off, which motivates the gapped materials of Lesson m2-l2.

## Key Ideas

- **Lattice**: triangular Bravais lattice, lattice constant 0.246 nm, two-atom (A, B) basis with C–C distance $a = 0.142$ nm.
- **Wallace dispersion**: $E = \pm t|f(\mathbf{k})|$, spanning $\pm 3t$ with saddle points at $M$ ($\pm t$) and band touching at $K$, $K'$.
- **Dirac cones**: $E = \pm\hbar v_F|\mathbf{q}|$ with $v_F = 3ta/2\hbar \approx 10^6$ m s$^{-1}$; carriers are massless Dirac fermions.
- **Pseudospin and Berry phase**: sublattice pseudospin locked to momentum; a $2\pi$ loop gives phase $\pi$, suppressing backscattering.
- **Linear density of states**: $g(E) = 2|E|/\pi\hbar^2 v_F^2$ and $n = E_F^2/\pi\hbar^2 v_F^2$, including spin and valley.
- **Ambipolar gating**: $n = C_g V_g/e$ tunes carriers continuously from holes through the Dirac point to electrons.

## Worked Examples

### Example 1 — Fermi velocity and bandwidth

Taking $t = 2.8$ eV, find $v_F$ and the band energies at $\Gamma$, $M$ and $K$.

**Solution.** $\hbar v_F = 3ta/2 = 1.5 \times 2.8 \times 0.142 = 0.596$ eV nm, so

$$v_F = \frac{0.596 \times 10^{-9}\ \text{eV m}}{6.582 \times 10^{-16}\ \text{eV s}} = 9.06 \times 10^5\ \text{m s}^{-1}.$$

At $\Gamma$, $|f| = 3$ and $E = \pm 8.4$ eV; at $M$, $|f| = 1$ and $E = \pm 2.8$ eV; at $K$, $E = 0$. The total $\pi$ bandwidth is $6t = 16.8$ eV. The $M$-point transition at $2t = 5.6$ eV appears in absorption near 4.6 eV, shifted down by excitonic effects.

### Example 2 — Gated graphene at $n = 10^{12}$ cm$^{-2}$

Find $k_F$, $\lambda_F$, $E_F$ and $m_c$, and the gate voltage needed on 300 nm SiO$_2$. Take $v_F = 1.0 \times 10^6$ m s$^{-1}$.

**Solution.** With $n = 10^{16}$ m$^{-2}$, $k_F = \sqrt{\pi n} = 1.77 \times 10^8$ m$^{-1}$ and $\lambda_F = 2\pi/k_F = 35$ nm. Then

$$E_F = \hbar v_F k_F = 6.582 \times 10^{-16} \times 10^6 \times 1.77 \times 10^8 = 0.117\ \text{eV}.$$

The cyclotron mass is $m_c = E_F/v_F^2 = (0.117 \times 1.602 \times 10^{-19})/10^{12} = 1.87 \times 10^{-32}$ kg $= 0.021\,m_e$. The gate voltage is

$$V_g = \frac{ne}{C_g} = \frac{10^{16} \times 1.602 \times 10^{-19}}{1.151 \times 10^{-4}} = 13.9\ \text{V}.$$

### Example 3 — Density of states compared with GaAs

Evaluate $g(E)$ for graphene at $E = 0.1$ eV and compare with the GaAs 2DEG value.

**Solution.** With $\hbar v_F = 0.658$ eV nm, $(\hbar v_F)^2 = 0.433$ eV$^2$ nm$^2$ and

$$g = \frac{2 \times 0.1}{\pi \times 0.433} = 0.147\ \text{nm}^{-2}\,\text{eV}^{-1} = 1.47 \times 10^{10}\ \text{cm}^{-2}\,\text{meV}^{-1}.$$

This is about half the GaAs value of $2.8 \times 10^{10}$ cm$^{-2}$ meV$^{-1}$ (Lesson m1-l2), and unlike GaAs it rises in proportion to $|E|$ and vanishes at the Dirac point.

## Common Misconceptions

- **"Graphene is a metal because it conducts well."** Neutral graphene has zero density of states at $E_F$; it is a zero-gap semimetal whose carriers are induced by gating or doping.
- **"Massless carriers move at the speed of light."** They move at $v_F \approx c/300$; "massless" means the dispersion is linear and the velocity energy-independent.
- **"The honeycomb is a Bravais lattice."** It is a triangular lattice with a two-atom basis; the two sublattices produce the two bands and the pseudospin.
- **"Pseudospin is the electron spin."** It is the sublattice degree of freedom; real spin adds a separate factor of two.
- **"$K$ and $K'$ are the same point."** They are inequivalent zone corners, not connected by a reciprocal-lattice vector, and give the valley degeneracy $g_v = 2$.

## Connections

- The tight-binding Hamiltonian is a direct application of Bloch's theorem (Solid State Physics, Lesson m3-l2), and its $2 \times 2$ diagonalisation is an eigenvalue problem from Linear Algebra.
- The Dirac Hamiltonian $\hbar v_F\boldsymbol\sigma\cdot\mathbf{q}$ mirrors the spin-$\tfrac12$ algebra of Introduction to Quantum Mechanics (Lesson m3-l3); the Berry phase is the same geometric phase acquired by a spin rotated through $2\pi$.
- The reciprocal lattice and Brillouin zone use the construction behind X-ray diffraction (Solid State Physics, Lesson m1-l3).
- The 2.3% absorption per layer and the G and 2D Raman bands are measured in the Low-Dimensional Materials Lab (Lessons m1-l2 and m1-l4).
- Graphene's transparency and conductivity make it a candidate transparent electrode for touch screens and solar cells (Lesson m3-l3).

## Quick Check

1. Show that $|f(\mathbf{k})| = 0$ at the $K$ point.
2. Derive $g(E) = 2|E|/\pi\hbar^2 v_F^2$, stating where the factor of four for spin and valley enters.
3. A graphene sheet has $E_F = 0.2$ eV. Find $n$, taking $v_F = 10^6$ m s$^{-1}$.
4. Why does the cyclotron mass of graphene depend on carrier density while that of GaAs does not?
5. State the Berry phase of graphene and one experimental consequence.

## Takeaway

- Graphene's honeycomb lattice has two sublattices, giving two $\pi$ bands that touch at $K$ and $K'$.
- Near the Dirac points $E = \pm\hbar v_F|\mathbf{q}|$ with $v_F = 3ta/2\hbar \approx 10^6$ m s$^{-1}$: carriers are massless Dirac fermions.
- The density of states vanishes linearly at the Dirac point, so gating sweeps the carriers from holes to electrons.
- Pseudospin–momentum locking gives a Berry phase of $\pi$, suppressed backscattering and an anomalous quantum Hall effect.
- The absence of a gap is graphene's main limitation for logic, motivating hBN, transition-metal dichalcogenides and nanotubes.
