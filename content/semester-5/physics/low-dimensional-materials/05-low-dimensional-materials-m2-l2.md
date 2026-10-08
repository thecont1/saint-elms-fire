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
lessonId: low-dimensional-materials-m2-l2
lessonName: hBN, Transition-Metal Dichalcogenides, Carbon Nanotubes and Nanowires
lessonNumber: 5
moduleNumber: 2
semesterNumber: 5
difficulty: advanced
estimatedStudyMinutes: 60
releaseOrder: 5
prerequisites:
  - low-dimensional-materials-m2-l1
  - solid-state-physics-m3-l3
  - introduction-to-quantum-mechanics-m3-l3
learningObjectives:
  - Explain how a sublattice energy difference opens a gap in the honeycomb lattice and why hexagonal boron nitride is a wide-gap insulator.
  - Describe the indirect-to-direct gap transition, spin–valley locking and circular-dichroism selection rules of monolayer MoS$_2$ and WSe$_2$.
  - Use the chiral indices $(n, m)$ of a carbon nanotube to compute its diameter and chiral angle, apply the rule that the tube is metallic when $(n - m)$ is divisible by 3, and estimate semiconducting gaps from $E_g = 2at/d$.
  - Relate the surface-to-volume ratio and confinement of semiconductor nanowires to their electronic and sensing properties.
concepts:
  - Hexagonal boron nitride
  - Transition-metal dichalcogenide monolayer
  - Indirect-to-direct band gap transition
  - Spin–valley locking
  - Carbon nanotube chirality
  - Zone folding
  - Semiconductor nanowire
tags:
  - physics
  - low-dimensional-materials
  - carbon-nanotubes
  - transition-metal-dichalcogenides
sourceType: authored-courseware
status: in-review
assessmentHints:
  - conceptual
  - problem-solving
  - derivation
  - computational
***

# hBN, Transition-Metal Dichalcogenides, Carbon Nanotubes and Nanowires

## Overview

Graphene is gapless, so it cannot switch off a transistor or emit light efficiently. This lesson surveys the materials that fill the gap. Hexagonal boron nitride (hBN) has graphene's lattice but two different atoms, which opens a 6 eV gap and makes it the standard atomically flat insulator. Monolayer transition-metal dichalcogenides (TMDs) such as MoS$_2$ and WSe$_2$ are direct-gap semiconductors whose two valleys can be addressed with circularly polarised light. Rolling graphene into a seamless cylinder produces a carbon nanotube, whose electronic character, metallic or semiconducting, is fixed entirely by two integers. Finally, semiconductor nanowires extend the quantum-wire ideas of Module 1 to real one-dimensional crystals with very large surface-to-volume ratios.

## Learning Path

- **What you should already know**: the honeycomb tight-binding model and Dirac cones (Lesson m2-l1); excitons and their enhancement in two dimensions (Lesson m1-l3); direct and indirect gaps (Solid State Physics, Lesson m3-l3); spin and spin–orbit coupling (Introduction to Quantum Mechanics, Lesson m3-l3).
- **What this lesson adds**: the gapped honeycomb; TMD bands and valleys; nanotube chirality, zone folding, metallicity and gap scaling; nanowire confinement and surfaces.
- **What later lessons this will unlock**: CVD growth, exfoliation and Raman identification of these materials (Lesson m2-l3); the $4e^2/h$ conductance of metallic nanotubes (Lesson m3-l1); 2D-semiconductor transistors and nanowire sensors (Lesson m3-l3).

## Core Explanation

### Hexagonal boron nitride: a gapped honeycomb

In hBN boron occupies the A sublattice and nitrogen the B sublattice. Their $p_z$ orbitals have different energies, which we write as $+\Delta/2$ and $-\Delta/2$. The Bloch Hamiltonian of Lesson m2-l1 acquires a diagonal term,

$$H(\mathbf{k}) = \begin{pmatrix} \Delta/2 & -t f(\mathbf{k}) \\ -t f^*(\mathbf{k}) & -\Delta/2 \end{pmatrix}, \qquad E_\pm = \pm\sqrt{\frac{\Delta^2}{4} + t^2|f(\mathbf{k})|^2}.$$

At $K$, where $f = 0$, the bands are separated by $\Delta$. Near $K$ the dispersion is $E = \pm\sqrt{\Delta^2/4 + \hbar^2v^2q^2}$: a **massive Dirac** spectrum, parabolic at small $q$ with effective mass $m^* = \Delta/2v^2$. In hBN the gap is about 6 eV, so it is an insulator. Its lattice constant (0.250 nm) is within 2% of graphene's, and being atomically flat and free of dangling bonds it is the standard substrate and encapsulant for high-mobility graphene devices.

### Monolayer transition-metal dichalcogenides

A TMD has formula MX$_2$ (M = Mo, W; X = S, Se, Te). Each layer is a sandwich X–M–X about 0.65 nm thick, with the metal in trigonal prismatic coordination (the 2H phase), and layers stack by van der Waals forces. Viewed from above, a monolayer is again a honeycomb with M and X$_2$ on the two sublattices, so it has $K$ and $K'$ valleys and no inversion symmetry.

Bulk MoS$_2$ is an **indirect** semiconductor with a gap of about 1.3 eV between the valence-band maximum at $\Gamma$ and a conduction-band minimum partway along $\Gamma$–$K$. The states near $\Gamma$ contain sulphur $p_z$ and metal $d_{z^2}$ character that extends between layers, so interlayer coupling pushes them strongly. The states at $K$ are mostly metal $d_{xy}$ and $d_{x^2-y^2}$ orbitals confined to the middle of each sandwich and barely affected by neighbours. As the crystal is thinned the $\Gamma$-derived gap widens much faster, and in the monolayer the smallest gap becomes **direct** at $K$, about 1.9 eV for MoS$_2$. PL efficiency rises by orders of magnitude, and a bright peak near 660 nm identifies a monolayer.

Monolayer TMD excitons are bound by 0.3–0.5 eV, against tens of meV in bulk: the 2D enhancement of Lesson m1-l3 amplified by weak screening from the surroundings. Excitons therefore dominate the optics even at room temperature.

### Spin–valley locking

The heavy metal atoms give strong spin–orbit coupling, which splits the valence band at $K$ by $2\lambda \approx 150$ meV in MoS$_2$ and about 450 meV in WSe$_2$. Time-reversal symmetry requires $E_\uparrow(K) = E_\downarrow(K')$, so the ordering is reversed in the other valley: spin and valley are **locked**. The two spin-split transitions appear as the A and B excitons (1.88 and 2.03 eV in MoS$_2$). Because inversion symmetry is broken, the optical selection rules are valley-selective: $\sigma^+$ light excites the $K$ valley and $\sigma^-$ the $K'$ valley. Circularly polarised pumping creates a valley polarisation, read out in the PL helicity: the basis of **valleytronics**.

| Material | Monolayer gap | Type (1L / bulk) | Typical mobility (cm$^2$ V$^{-1}$ s$^{-1}$) |
|---|---|---|---|
| Graphene | 0 | semimetal | $10^4$–$10^5$ |
| hBN | ≈ 6 eV | insulator | — |
| MoS$_2$ | ≈ 1.9 eV | direct / indirect | 10–100 |
| WSe$_2$ | ≈ 1.65 eV | direct / indirect | 50–200 (holes) |

### Carbon nanotubes: chirality and zone folding

A single-walled carbon nanotube (SWCNT) is a graphene strip rolled so that the **chiral vector** $\mathbf{C}_h = n\mathbf{a}_1 + m\mathbf{a}_2$ becomes the circumference. Using the 60° primitive vectors of Lesson m2-l1 with $|\mathbf{a}_i| = 0.246$ nm,

$$d = \frac{|\mathbf{C}_h|}{\pi} = \frac{0.246\ \text{nm}}{\pi}\sqrt{n^2 + nm + m^2}, \qquad \theta = \arctan\frac{\sqrt3\,m}{2n + m}.$$

Tubes $(n, 0)$ with $\theta = 0$ are **zigzag**, tubes $(n, n)$ with $\theta = 30°$ are **armchair**, and all others are **chiral**.

Going once around the circumference must return the wavefunction to itself, so $\mathbf{k}\cdot\mathbf{C}_h = 2\pi q$ with integer $q$. The continuous 2D Brillouin zone is replaced by parallel lines of allowed $\mathbf{k}$, spaced $2\pi/|\mathbf{C}_h| = 2/d$ apart, each a 1D subband. This is **zone folding**. The tube is metallic if one of these lines passes through a Dirac point. Writing $K = (2\mathbf{b}_1 + \mathbf{b}_2)/3$ and using $\mathbf{a}_i\cdot\mathbf{b}_j = 2\pi\delta_{ij}$,

$$K\cdot\mathbf{C}_h = \frac{2\pi}{3}(2n + m).$$

This is an integer multiple of $2\pi$ when $2n + m$ is divisible by 3, equivalently when $n - m = (2n + m) - 3n$ is divisible by 3. Hence the **metallicity rule**:

$$(n - m) \bmod 3 = 0 \ \Rightarrow\ \text{metallic}; \qquad \text{otherwise semiconducting}.$$

All armchair tubes are metallic, and for random chirality one tube in three is metallic. (Curvature opens a gap of order 10 meV in non-armchair "metallic" tubes; armchair tubes remain truly metallic.)

For a semiconducting tube the nearest allowed line misses $K$ by one third of the spacing, $\Delta k = 2/3d$. On the Dirac cone this gives a gap

$$E_g = 2\hbar v_F\Delta k = 2\cdot\frac{3ta}{2}\cdot\frac{2}{3d} = \frac{2at}{d} \approx \frac{0.8\ \text{eV nm}}{d},$$

with $a = 0.142$ nm and $t \approx 2.7$–2.9 eV. Gaps scale inversely with diameter: a 1 nm tube has $E_g \approx 0.8$ eV. Each 1D subband has van Hove singularities (Lesson m1-l2), giving optical transitions $S_{11} \approx 2at/d$, $S_{22} \approx 4at/d$ and, for metallic tubes, $M_{11} \approx 6at/d$; plotting these against $d$ (the Kataura plot) identifies chirality from resonance Raman or absorption spectra. The short script below classifies a few tubes.

```python
import math
a_lat, acc, t = 0.246, 0.142, 2.7                 # nm, nm, eV
for n, m in [(5, 5), (9, 0), (10, 0), (6, 5), (12, 8)]:
    d = a_lat * math.sqrt(n*n + n*m + m*m) / math.pi
    theta = math.degrees(math.atan(math.sqrt(3)*m / (2*n + m)))
    kind = 'metallic' if (n - m) % 3 == 0 else f'semiconducting, Eg = {2*acc*t/d:.2f} eV'
    print(f'({n},{m}): d = {d:.3f} nm, theta = {theta:.1f} deg, {kind}')
```

### Semiconductor nanowires

Nanowires of Si, Ge, GaAs, InAs, GaN and ZnO, with diameters from a few to a hundred nanometres and lengths of microns, are crystalline quantum wires. When the diameter approaches the exciton Bohr radius (4.9 nm for Si), the cylindrical subbands of Lesson m1-l3 raise the gap: Si wires narrower than about 3 nm show gaps well above the bulk 1.12 eV. Thicker wires are not confined, but their surface-to-volume ratio is $4/d$ for a cylinder, so adsorbed molecules and surface charges strongly affect conduction, the basis of nanowire sensors. Lateral strain relaxation lets lattice-mismatched axial and core–shell heterostructures grow without dislocations, and a wire's end facets can form a laser cavity. Vapour–liquid–solid growth is described in Lesson m2-l3.

## Key Ideas

- **Gapped honeycomb**: a sublattice energy difference $\Delta$ gives $E_\pm = \pm\sqrt{\Delta^2/4 + t^2|f|^2}$; hBN has $\Delta \approx 6$ eV.
- **TMD monolayers**: interlayer coupling shifts $\Gamma$ states, so the gap turns direct at $K$ in a monolayer (≈ 1.9 eV for MoS$_2$), with bright PL.
- **Spin–valley locking**: spin–orbit splitting opposite in $K$ and $K'$; $\sigma^\pm$ light selects a valley.
- **Chirality**: $\mathbf{C}_h = n\mathbf{a}_1 + m\mathbf{a}_2$, $d = 0.246\sqrt{n^2 + nm + m^2}/\pi$ nm.
- **Metallicity rule**: metallic if $(n - m)$ is divisible by 3; armchair tubes always metallic; one third of random tubes.
- **Gap scaling**: $E_g = 2at/d \approx 0.8\ \text{eV nm}/d$ for semiconducting tubes.
- **Nanowires**: confinement below the Bohr radius, surface-to-volume ratio $4/d$, strain-relaxed heterostructures.

## Worked Examples

### Example 1 — Classifying three nanotubes

Classify the $(10, 0)$, $(5, 5)$ and $(6, 5)$ tubes and compute their diameters, chiral angles and, where relevant, gaps ($t = 2.7$ eV).

**Solution.** For $(10, 0)$: $n - m = 10$, remainder 1, semiconducting; $d = 0.246 \times 10/\pi = 0.783$ nm, $\theta = 0$ (zigzag), $E_g = 2 \times 0.142 \times 2.7/0.783 = 0.98$ eV. For $(5, 5)$: $n - m = 0$, metallic armchair; $d = 0.246\sqrt{75}/\pi = 0.678$ nm, $\theta = 30°$. For $(6, 5)$: $n - m = 1$, semiconducting; $d = 0.246\sqrt{91}/\pi = 0.747$ nm, $\theta = \arctan(5\sqrt3/17) = 27.0°$, $E_g = 1.03$ eV. The measured $S_{11}$ of $(6, 5)$ is 1.27 eV (976 nm): the simple zone-folding estimate captures the scale, while excitonic and many-body corrections shift the measured value.

### Example 2 — Identifying a MoS$_2$ monolayer optically

A flake shows PL peaks at 660 nm and 612 nm, and Raman $E^1_{2g}$ and $A_{1g}$ peaks at 385 and 404 cm$^{-1}$. Interpret these.

**Solution.** The photon energies are $1239.84/660 = 1.88$ eV and $1239.84/612 = 2.03$ eV: the A and B excitons, split by 150 meV, the valence-band spin–orbit splitting at $K$. Bright PL at 1.88 eV signals the direct gap; bulk MoS$_2$ would show only weak indirect emission near $1239.84/1.3 \approx 950$ nm. The Raman separation $404 - 385 = 19$ cm$^{-1}$ is the monolayer value used in the Low-Dimensional Materials Lab (bilayer ≈ 22, bulk ≈ 25 cm$^{-1}$). Both measurements agree: the flake is a monolayer.

### Example 3 — Surface atoms in nanowires

Estimate the fraction of atoms within $\delta = 0.3$ nm of the surface for cylindrical wires of diameter 10 nm and 100 nm.

**Solution.** The fraction of cross-sectional area within $\delta$ of the surface is $1 - (1 - 2\delta/d)^2$. For $d = 10$ nm, $1 - 0.94^2 = 0.116$, about 12%. For $d = 100$ nm, $1 - 0.994^2 = 0.012$, about 1.2%. The surface-to-volume ratio $4/d$ is 0.4 nm$^{-1}$ and 0.04 nm$^{-1}$. Adsorbed charges therefore affect a 10 nm wire far more, which is why sensing wires are thin.

## Common Misconceptions

- **"hBN is graphene doped with boron and nitrogen."** It is a distinct compound with alternating B and N on the two sublattices; the inequivalence opens the 6 eV gap.
- **"Thinner MoS$_2$ always has a direct gap."** Only the monolayer is direct; bilayer and thicker MoS$_2$ remain indirect.
- **"A nanotube's properties depend mainly on its length."** Electronic character is set by $(n, m)$; length matters only for very short tubes or for transport through defects.
- **"All zigzag tubes are semiconducting."** $(n, 0)$ is metallic whenever $n$ is a multiple of 3, as for $(9, 0)$.
- **"Any wire below 100 nm is a quantum wire."** Confinement requires a diameter comparable to the Bohr radius or Fermi wavelength; most 50 nm wires are bulk-like inside but surface-dominated.

## Connections

- The gapped $2 \times 2$ Hamiltonian is a Linear Algebra eigenvalue problem whose massive Dirac spectrum mirrors the relativistic $E^2 = p^2c^2 + m^2c^4$, with $\Delta/2$ as $mc^2$.
- Direct and indirect gaps from Solid State Physics (Lesson m3-l3) decide whether a material emits light; the monolayer TMD crossover is a striking example.
- Spin–orbit coupling and time-reversal symmetry from Introduction to Quantum Mechanics (Lesson m3-l3) underlie spin–valley locking.
- PL and Raman identification of monolayers (Low-Dimensional Materials Lab, Lessons m1-l2 and m1-l4) use exactly the numbers of Example 2.
- Nanotube and nanowire transistors and sensors return in Lesson m3-l3.

## Quick Check

1. Show that adding on-site energies $\pm\Delta/2$ to the graphene Hamiltonian opens a gap $\Delta$ at $K$.
2. Why does the MoS$_2$ gap become direct in the monolayer?
3. Classify the $(12, 0)$, $(7, 4)$ and $(8, 8)$ nanotubes as metallic or semiconducting.
4. Estimate the gap of a semiconducting nanotube of diameter 1.4 nm.
5. What is meant by spin–valley locking, and how is a valley addressed optically?

## Takeaway

- Breaking sublattice symmetry gaps the honeycomb: hBN is a 6 eV insulator with a near-perfect lattice match to graphene.
- Monolayer TMDs are direct-gap semiconductors with strongly bound excitons and spin–valley-locked $K$ and $K'$ valleys.
- A nanotube's chiral indices fix everything: diameter, chiral angle, and metallic character through $(n - m) \bmod 3$.
- Semiconducting nanotube gaps scale as $E_g = 2at/d \approx 0.8\ \text{eV nm}/d$.
- Nanowires combine 1D confinement at small diameters with surface-dominated physics at all diameters.
