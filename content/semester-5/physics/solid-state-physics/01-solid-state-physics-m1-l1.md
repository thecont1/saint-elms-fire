***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-5
semesterName: Semester 5
subjectId: physics
subjectName: Physics
courseId: solid-state-physics
courseName: Solid State Physics
moduleId: solid-state-physics-module-1
moduleName: Crystal Structure
lessonId: solid-state-physics-m1-l1
lessonName: Bravais Lattices and the Unit Cell
lessonNumber: 1
moduleNumber: 1
semesterNumber: 5
difficulty: foundation
estimatedStudyMinutes: 50
releaseOrder: 1
prerequisites:
  - waves-and-optics-m3-l2
learningObjectives:
  - Describe the fourteen Bravais lattices in three dimensions.
  - Identify the seven crystal systems.
  - Define the unit cell, primitive cell, and conventional cell.
  - Recognise common crystal structures: simple cubic, bcc, fcc, hcp, diamond.
concepts:
  - Bravais lattice
  - Unit cell
  - Primitive cell
  - Conventional cell
  - Crystal systems
  - Coordination number
tags:
  - physics
  - solid-state
  - crystallography
sourceType: authored-courseware
assessmentHints:
  - conceptual
  - short-answer
  - problem-solving
***

# Bravais Lattices and the Unit Cell

## Overview
A crystal is a periodic arrangement of atoms. The mathematical description of this periodicity is a *Bravais lattice*: a set of points $\vec{R} = n_1 \vec{a}_1 + n_2 \vec{a}_2 + n_3 \vec{a}_3$ for integers $n_i$ and primitive vectors $\vec{a}_i$. In three dimensions, there are only fourteen distinct Bravais lattices, grouped into seven crystal systems. The most common are the cubic (simple, body-centred, face-centred) and the hexagonal close-packed. This lesson develops the vocabulary of crystallography and surveys the standard structures.

## Learning Path
- What you should already know: vectors, basic solid geometry.
- What this lesson adds: the mathematical description of crystal periodicity, the seven crystal systems, and the standard structures.
- What it unlocks: reciprocal lattice, X-ray diffraction, band theory, and the structure of solids.

## Core Explanation
**Bravais lattice.** A set of points $\vec{R} = n_1 \vec{a}_1 + n_2 \vec{a}_2 + n_3 \vec{a}_3$ for integer $n_i$, where $\vec{a}_i$ are linearly independent primitive vectors. The lattice is invariant under translations by any $\vec{R}$. A crystal structure consists of a Bravais lattice plus a *basis* of atoms at each lattice point.

**Unit cell.** A region of space that, when translated by lattice vectors, fills all space without overlap. Many choices; some more useful than others.

**Primitive cell.** A unit cell containing exactly one lattice point. The Wigner–Seitz cell (the region closer to a given lattice point than to any other) is the canonical primitive cell.

**Conventional cell.** A unit cell chosen for convenience (e.g. a cube for cubic lattices), not necessarily containing only one lattice point. The simple cubic conventional cell contains one lattice point; the fcc contains four.

**Seven crystal systems.** Triclinic, monoclinic, orthorhombic, tetragonal, cubic, trigonal (rhombohedral), hexagonal. Each is defined by the relations between the lattice parameters $a, b, c, \alpha, \beta, \gamma$.

**Fourteen Bravais lattices.** Within the seven systems, some have additional lattice points in the conventional cell: body-centred (I) and face-centred (F), plus the base-centred (C) variants. The 14 Bravais lattices are: triclinic P; monoclinic P, C; orthorhombic P, I, F, C; tetragonal P, I; cubic P, I, F; trigonal R; hexagonal P.

**Coordination number.** The number of nearest neighbours of an atom. For simple cubic: 6. For bcc: 8. For fcc: 12. For hcp: 12. For diamond: 4.

**Simple cubic (SC).** Each atom at the corner of a cube, shared by 8 cells. Coordination number 6. Packing fraction $\pi/6 \approx 0.52$. Rare in nature (only polonium is SC).

**Body-centred cubic (bcc).** Atoms at the corners and one in the centre. Coordination number 8. Packing fraction $\sqrt{3} \pi/8 \approx 0.68$. Common: alkali metals, iron at room temperature, chromium, tungsten.

**Face-centred cubic (fcc).** Atoms at the corners and at the centres of the faces. Coordination number 12. Packing fraction $\sqrt{2} \pi/6 \approx 0.74$. Common: aluminium, copper, gold, silver, lead, nickel, $\gamma$-iron.

**Hexagonal close-packed (hcp).** Layers of close-packed spheres in ABAB stacking. Coordination 12. Packing fraction $0.74$ (same as fcc). Common: magnesium, titanium, zinc, cobalt.

**Diamond structure.** Two interpenetrating fcc lattices, displaced by $(1/4, 1/4, 1/4)$. Coordination 4 (tetrahedral). Packing fraction $\sqrt{3} \pi/16 \approx 0.34$. Examples: carbon (diamond), silicon, germanium.

**Lattice parameters.** The lengths $a, b, c$ of the primitive vectors and the angles $\alpha, \beta, \gamma$ between them. For cubic: $a = b = c$, $\alpha = \beta = \gamma = 90°$. For hcp: $a = b \ne c$, $\alpha = \beta = 90°$, $\gamma = 120°$. The ideal $c/a$ ratio for close-packed spheres is $\sqrt{8/3} \approx 1.633$.

**Wigner–Seitz cell.** The region closer to a lattice point than to any other. Constructed by drawing perpendicular bisector planes to the nearest neighbours and intersecting. For a bcc lattice, the WS cell is a truncated octahedron.

**Primitive vectors for common lattices.**
- SC: $\vec{a}_1 = a \hat{x}, \vec{a}_2 = a \hat{y}, \vec{a}_3 = a \hat{z}$.
- bcc: $\vec{a}_1 = (a/2)(\hat{y} + \hat{z} - \hat{x}), \vec{a}_2 = (a/2)(\hat{z} + \hat{x} - \hat{y}), \vec{a}_3 = (a/2)(\hat{x} + \hat{y} - \hat{z})$.
- fcc: $\vec{a}_1 = (a/2)(\hat{y} + \hat{z}), \vec{a}_2 = (a/2)(\hat{z} + \hat{x}), \vec{a}_3 = (a/2)(\hat{x} + \hat{y})$.

**Volume of unit cell.** $V = |\vec{a}_1 \cdot (\vec{a}_2 \times \vec{a}_3)|$. For cubic: $V = a^3$. For hexagonal: $V = a^2 c \sin(120°) = (\sqrt{3}/2) a^2 c$.

**Number of atoms per unit cell.** $n = (\text{atoms at corners})/8 + (\text{atoms at edges})/4 + (\text{atoms at faces})/2 + (\text{atoms inside})/1$. For SC: 1. For bcc: 2. For fcc: 4. For hcp: 2 (in the conventional cell). For diamond: 8.

**Atomic packing fraction (APF).** The fraction of the unit cell volume occupied by atoms (treated as hard spheres of radius $r$). $\text{APF} = n \cdot (4/3) \pi r^3 / V$. For fcc and hcp: $0.74$ (the densest possible packing of equal spheres, by Kepler's conjecture, proved in 1998). For bcc: $0.68$. For simple cubic: $0.52$.

**Crystal directions and planes.** A direction is denoted $[uvw]$; the family $\{uvw\}$ includes all symmetry-equivalent directions. A plane is denoted $(hkl)$; the family $\{hkl\}$ includes all symmetry-equivalent planes. The direction $[hkl]$ is perpendicular to the plane $(hkl)$ in cubic crystals only.

**Miller indices.** For a plane, take the intercepts on the axes, reciprocate, clear fractions. Example: the plane $x/a + y/b + z/c = 1$ has Miller indices $(111)$. A plane parallel to an axis has intercept $\infty$, Miller index $0$.

**Interplanar spacing.** The distance between adjacent $(hkl)$ planes in a cubic crystal is $d_{hkl} = a/\sqrt{h^2 + k^2 + l^2}$. For general lattices, the formula uses the metric tensor.

**Examples of common crystal structures.**
- Aluminium: fcc, $a = 4.05$ Å.
- Copper: fcc, $a = 3.61$ Å.
- Iron (α, room temp): bcc, $a = 2.87$ Å.
- Iron (γ, high temp): fcc, $a = 3.65$ Å.
- Sodium: bcc, $a = 4.23$ Å.
- Diamond: diamond cubic, $a = 3.57$ Å.
- Silicon: diamond cubic, $a = 5.43$ Å.
- Germanium: diamond cubic, $a = 5.66$ Å.
- NaCl: rocksalt (two interpenetrating fcc), $a = 5.64$ Å.
- CsCl: bcc with two species, $a = 4.12$ Å.
- ZnS: zincblende (diamond structure with two species), $a = 5.41$ Å.

**Reciprocal lattice.** A fundamental concept: the set of $\vec{G}$ such that $e^{i \vec{G} \cdot \vec{R}} = 1$ for all lattice vectors $\vec{R}$. Defined by $\vec{a}_i \cdot \vec{b}_j = 2\pi \delta_{ij}$. The reciprocal of the reciprocal is the original lattice (scaled by $(2\pi)^2$). The reciprocal of fcc is bcc and vice versa. Central to X-ray diffraction, phonons, and the band structure of electrons.

**Zone axis.** A direction $[uvw]$ common to a set of lattice planes $\{hkl\}$: $hu + kv + lw = 0$. A *zone* is a set of planes sharing a common direction.

**Lattice defects.** Real crystals are not perfect: vacancies (missing atoms), interstitials (extra atoms between lattice sites), substitutional impurities, dislocations (line defects), grain boundaries (between crystallites). Defects strongly influence mechanical, electrical, and optical properties.

**Polycrystalline materials.** Most "crystals" in everyday use are polycrystals: aggregates of small crystallites (grains) with different orientations. Grain boundaries are defects; smaller grains give stronger materials (Hall–Petch relation).

**Quasicrystals.** Aperiodic but ordered solids, with sharp diffraction peaks but no periodicity. Discovered in 1982 by Shechtman. Forbidden in the classical Bravais-lattice picture, but explained by aperiodic tilings (Penrose) and higher-dimensional projections.

**Why crystals are important.** The periodicity of crystals gives them their distinctive properties: sharp X-ray diffraction, well-defined phonon dispersions, electronic band structures. Many physical phenomena (superconductivity, ferromagnetism, topological insulators) are tied to specific crystal structures.

**Connection to physics.** The crystal structure determines the symmetry, which determines the form of the Hamiltonian and the selection rules. Without knowing the structure, you cannot predict the properties.

## Key Ideas
- A Bravais lattice is a periodic array of points in space.
- 14 Bravais lattices in 3D, grouped into 7 crystal systems.
- Common structures: SC, bcc, fcc, hcp, diamond.
- Coordination number: nearest neighbours.
- Packing fraction: $\le 0.74$ (Kepler).
- Primitive cell: one lattice point; conventional: chosen for convenience.

## Worked Examples
**Example 1 — Coordination of bcc.** Each atom at the centre of a cube has 8 corner neighbours at distance $a \sqrt{3}/2$. So coordination number is 8. Atoms touch along the body diagonal: $4 r = a \sqrt{3}$, $r = a \sqrt{3}/4$. APF $= 2 \cdot (4/3) \pi (a \sqrt{3}/4)^3 / a^3 = \sqrt{3} \pi / 8 \approx 0.68$.

**Example 2 — Coordination of fcc.** Atoms touch along the face diagonal: $4 r = a \sqrt{2}$, $r = a \sqrt{2}/4$. APF $= 4 \cdot (4/3) \pi (a \sqrt{2}/4)^3 / a^3 = \sqrt{2} \pi / 6 \approx 0.74$.

**Example 3 — Miller indices.** A plane cuts $a, b, c$ at $1/2, 1, 1$. Reciprocals: $2, 1, 1$. Miller indices: $(211)$.

**Example 4 — Number of atoms in diamond conventional cell.** 8 corners $\times 1/8 + 6$ faces $\times 1/2 + 4$ inside = $1 + 3 + 4 = 8$ atoms.

## Common Misconceptions
- **"All crystals are SC, bcc, or fcc."** No — there are 14 Bravais lattices, plus more complex structures (diamond, hcp, layered, quasicrystals).
- **"Atoms touch in real crystals."** The hard-sphere model is a simplification. In reality, atoms have fuzzy electron distributions, and "touching" is a matter of definition.
- **"APF of 0.74 is for any close packing."** It is for *equal spheres*. Different sizes give different APFs.
- **"Miller indices $(hkl)$ are coordinates."** They are integers, but they index planes and directions, not points.

## Connections
Crystal structure is the foundation of solid-state physics. The reciprocal lattice (next lesson) is the basis of X-ray diffraction, Brillouin zones, and Bloch's theorem. Defects and disorder lead to non-ideal properties: doping (semiconductors), dislocations (mechanical strength), grain boundaries (Hall–Petch). The crystal symmetry constrains the form of every physical property tensor (elastic, dielectric, magnetic, conductive).

## Quick Check
1. State the seven crystal systems.
2. What is the coordination number of fcc? bcc? hcp?
3. What is the packing fraction of fcc? bcc?
4. Define the Miller indices of a plane.
5. What is the Wigner–Seitz cell?

## Takeaway
- 14 Bravais lattices in 3D, 7 crystal systems.
- Common structures: SC, bcc, fcc, hcp, diamond.
- Coordination: 6 (SC), 8 (bcc), 12 (fcc/hcp), 4 (diamond).
- APF $\le 0.74$ (Kepler).
- Miller indices describe planes and directions.
