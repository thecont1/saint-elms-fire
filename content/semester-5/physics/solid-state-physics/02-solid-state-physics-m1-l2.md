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
lessonId: solid-state-physics-m1-l2
lessonName: Miller Indices and Crystal Planes
lessonNumber: 2
moduleNumber: 1
semesterNumber: 2
difficulty: foundation
estimatedStudyMinutes: 50
releaseOrder: 2
prerequisites:
  - solid-state-physics-m1-l1
learningObjectives:
  - Determine Miller indices for planes and directions.
  - Compute the interplanar spacing in cubic crystals.
  - Identify families of equivalent planes and directions.
  - Use the stereographic projection to display crystal orientations.
concepts:
  - Miller indices
  - Crystal directions
  - Interplanar spacing
  - Family of planes
  - Stereographic projection
  - Zone axis
tags:
  - physics
  - solid-state
  - miller-indices
sourceType: authored-courseware
assessmentHints:
  - problem-solving
  - short-answer
  - conceptual
***

# Miller Indices and Crystal Planes

## Overview
Miller indices are the standard notation for crystal planes and directions. A plane is denoted $(hkl)$, a direction $[hkl]$, and a family of equivalent planes or directions $\{hkl\}$. The notation is the language of X-ray diffraction, slip systems in metallurgy, and crystal orientation in materials science. This lesson develops the notation, the interplanar spacing, the symmetry-equivalent families, and the stereographic projection.

## Learning Path
- What you should already know: Bravais lattices, the unit cell, vectors.
- What this lesson adds: Miller indices, families, interplanar spacing, stereographic projection.
- What it unlocks: X-ray diffraction (next lesson), slip systems, grain-boundary geometry.

## Core Explanation
**Miller indices of a plane.** To find the Miller indices of a plane:
1. Find the intercepts on the crystallographic axes in units of the lattice parameters.
2. Take the reciprocals.
3. Clear fractions (multiply by the smallest integer to make all whole).
4. Enclose in parentheses: $(hkl)$.

Example: a plane cuts the axes at $a/2, b, 2 c$. Reciprocals: $2, 1, 1/2$. Multiply by $2$: $4, 2, 1$. Miller indices: $(421)$.

**Plane parallel to an axis.** If the plane does not intersect an axis, the intercept is $\infty$, the reciprocal is $0$. The corresponding Miller index is $0$. Example: a plane parallel to the $c$-axis cutting $a$ at $1$ and $b$ at $1$ has Miller indices $(110)$.

**Negative intercepts.** If the plane cuts an axis on the negative side, the intercept is negative. The corresponding Miller index is negative: $(\bar{h}kl)$ for negative $x$-intercept.

**Family of planes.** A family $\{hkl\}$ includes all planes equivalent to $(hkl)$ by the symmetry of the crystal. For a cubic crystal, $\{100\}$ has 6 members: $(100), (\bar{1}00), (010), (0\bar{1}0), (001), (00\bar{1})$. $\{110\}$ has 12. $\{111\}$ has 8.

**Family of directions.** $\{hkl\}$ for directions includes all directions equivalent to $[hkl]$. In cubic, $[hkl]$ is the direction perpendicular to $(hkl)$, but this is not true in non-cubic crystals.

**Interplanar spacing.** The distance between adjacent $(hkl)$ planes. For a cubic crystal of lattice parameter $a$,

$$d_{hkl} = \frac{a}{\sqrt{h^2 + k^2 + l^2}}.$$

For example, $d_{100} = a$, $d_{110} = a/\sqrt{2}$, $d_{111} = a/\sqrt{3}$.

For a hexagonal crystal, the formula is more complex (uses the metric tensor). For an hcp crystal with $a, c$,

$$\frac{1}{d_{hkl}^2} = \frac{4}{3} \frac{h^2 + hk + k^2}{a^2} + \frac{l^2}{c^2}.$$

**Intercepts and equations.** A plane $(hkl)$ in a cubic crystal has the equation

$$h x + k y + l z = d,$$

where $(x, y, z)$ are the coordinates of points on the plane and $d$ is some constant (depending on the specific plane). Different planes of the same family $(hkl)$ are at different values of $d$ (typically multiples of $d_{hkl}$).

**Miller indices of a direction.** A direction is denoted $[uvw]$ where $(u, v, w)$ are the components of the direction vector in the basis of the primitive vectors. The family $\{uvw\}$ includes all symmetry-equivalent directions.

**Cubic only: direction perpendicular to plane.** In a cubic crystal, the direction $[hkl]$ is perpendicular to the plane $(hkl)$. In other crystal systems, this is not generally true.

**Angle between planes.** The angle $\phi$ between two planes $(h_1 k_1 l_1)$ and $(h_2 k_2 l_2)$ in a cubic crystal is given by

$$\cos \phi = \frac{h_1 h_2 + k_1 k_2 + l_1 l_2}{\sqrt{h_1^2 + k_1^2 + l_1^2} \sqrt{h_2^2 + k_2^2 + l_2^2}}.$$

In non-cubic crystals, the formula uses the metric tensor.

**Density of lattice points on a plane.** The packing of lattice points is densest on low-index planes. For fcc, the close-packed planes are $\{111\}$. For bcc, the most densely packed planes are $\{110\}$. Slip and cleavage tend to occur on these planes.

**Stereographic projection.** A way to represent the orientations of crystal planes in 2D. Each plane normal is represented by a point on the unit sphere; this point is then projected onto a 2D plane (e.g. the equatorial plane) by connecting it to the south pole. The standard projection is for the poles of low-index planes in a cubic crystal.

**Standard stereographic projection of cubic crystals.** The projection shows the poles of the $\{100\}, \{110\}, \{111\}$ families. The orientation of a crystal can be described by which poles lie in which directions.

**Pole figure.** A stereographic projection showing the distribution of crystallographic orientations in a polycrystalline sample. Used in texture analysis of metals, rocks, and other materials.

**Inverse pole figure.** The stereographic projection of a sample direction relative to the crystal axes. Complementary to the pole figure.

**Zone axis and zone law.** A *zone* is a set of planes that are all parallel to a common direction (the *zone axis*). If a direction $[uvw]$ is in the zone of planes $(hkl)$, then $hu + kv + lw = 0$ (the *zone law*).

**Examples of zones.** The $[001]$ zone in a cubic crystal contains all planes $(hk0)$ (planes parallel to the $c$-axis). The $[111]$ zone contains all planes with $h + k + l = 0$.

**Crystal systems and Miller indices.** All seven crystal systems use Miller indices, but the relation between indices and geometry varies. The cubic system is the simplest because all axes are equivalent.

**Miller–Bravais indices (hexagonal).** For hexagonal crystals, four indices $(hkil)$ are used, with the constraint $h + k = -i$. The extra index is redundant but useful for showing symmetry. Convert to three-index by dropping the third.

**Examples of Miller indices.**
- $(100)$: plane perpendicular to the $a$-axis at $a$.
- $(110)$: plane cutting $a$ at $a$, $b$ at $b$, parallel to $c$.
- $(111)$: plane cutting all three axes at unit length.
- $(h00)$: planes perpendicular to the $a$-axis.
- $(0k0)$: planes perpendicular to the $b$-axis.

**Slip systems in metals.** Plastic deformation occurs by slip on close-packed planes in close-packed directions. For fcc, the slip system is $\{111\}\langle 110\rangle$ (12 systems). For bcc, the slip systems are $\{110\}\langle 111\rangle$ and $\{112\}\langle 111\rangle$ (more numerous). For hcp, the basal slip system is $(0001)\langle 11\bar{2}0\rangle$.

**Cleavage planes.** Materials tend to fracture along low-index, high-density planes. Mica cleaves along $(001)$; graphite along $(0001)$; rock salt along $(100)$.

**Miller indices and growth.** Crystals grow fastest along directions with the highest density of unsatisfied bonds. The resulting shape is bounded by the slowest-growing faces, which are the high-index ones (after the growth rates equilibrate). The morphology of natural crystals is related to their Miller indices.

**Miller indices and X-ray diffraction.** X-rays reflect off crystal planes, with constructive interference at the Bragg condition $2 d \sin \theta = n \lambda$. The diffraction pattern directly gives the $d_{hkl}$ spacings and hence the Miller indices of the diffracting planes. (Covered in detail in the next lesson.)

**Zone axis notation.** A direction $[uvw]$ perpendicular to a family of planes. In a crystal, the poles of planes in a zone lie on a great circle of the stereographic projection.

**Identifying crystal structures by Miller indices.** X-ray diffraction gives a series of $d_{hkl}$ values; from these, the lattice parameters and the structure are determined. The systematic absences (missing peaks) are determined by the lattice type and the basis.

**Why the notation matters.** Miller indices provide a compact, unambiguous way to describe crystal planes and directions. They are essential in X-ray diffraction, in transmission electron microscopy, in describing slip systems, and in any discussion of crystal anisotropy.

**Crystallographic databases.** The International Tables for Crystallography list the symmetry, Miller indices, and structure factors for all known crystal structures. The standard reference for crystallographers.

**Reciprocal lattice and Miller indices.** A plane $(hkl)$ corresponds to a reciprocal lattice vector $\vec{G} = h \vec{b}_1 + k \vec{b}_2 + l \vec{b}_3$. The vector $\vec{G}$ is perpendicular to the plane and has magnitude $2 \pi / d_{hkl}$. This is the basis of X-ray diffraction and the Ewald construction.

## Key Ideas
- Miller indices $(hkl)$: reciprocals of axis intercepts.
- Family $\{hkl\}$: all equivalent planes by symmetry.
- Interplanar spacing: $d_{hkl} = a / \sqrt{h^2 + k^2 + l^2}$ (cubic).
- Direction $[hkl]$ in cubic: perpendicular to plane $(hkl)$.
- Stereographic projection: 2D representation of crystal orientations.

## Worked Examples
**Example 1 — Miller indices.** Plane cuts $x = 2a, y = b, z = c$. Intercepts: $2, 1, 1$. Reciprocals: $1/2, 1, 1$. Multiply by 2: $(122)$.

**Example 2 — Interplanar spacing.** Cubic, $a = 4$ Å. $d_{220} = 4/\sqrt{4 + 4} = 4/\sqrt{8} \approx 1.41$ Å. $d_{111} = 4/\sqrt{3} \approx 2.31$ Å.

**Example 3 — Angle between planes.** $(100)$ and $(110)$: $\cos\phi = (1 \cdot 1 + 0 \cdot 1 + 0 \cdot 0)/(\sqrt{1} \sqrt{2}) = 1/\sqrt{2}$, so $\phi = 45°$. ✓

**Example 4 — Zone law.** The plane $(112)$: is it in the zone $[1\bar{1}0]$? $1 \cdot 1 + 1 \cdot (-1) + 2 \cdot 0 = 0$. Yes! So $(112)$ is in the zone of $[1\bar{1}0]$.

**Example 5 — Number of $\{111\}$ planes in cubic.** The family $\{111\}$ has 8 members: $(111), (\bar{1}11), (1\bar{1}1), (11\bar{1}), (\bar{1}\bar{1}1), (\bar{1}1\bar{1}), (1\bar{1}\bar{1}), (\bar{1}\bar{1}\bar{1})$.

## Common Misconceptions
- **"Miller indices are coordinates."** They are integers that index planes and directions, not coordinates of points.
- **"All crystals have $(100)$ planes."** Only crystals with a 100-direction. The convention is the lattice vectors, not absolute directions.
- **"Direction $[hkl]$ is always perpendicular to plane $(hkl)$."** Only in cubic crystals.
- **"High Miller indices mean unimportant."** High-index planes are the fast-growing ones, important in crystal morphology.

## Connections
Miller indices are the language of X-ray diffraction (next lesson), the basis of the reciprocal lattice, and the description of slip and cleavage. They are essential in materials science, mineralogy, and structural chemistry.

## Quick Check
1. Find the Miller indices of a plane with intercepts $a, 2b, \infty$.
2. State the interplanar spacing for a cubic crystal.
3. List the planes in the $\{110\}$ family of a cubic crystal.
4. What is the angle between $(100)$ and $(010)$ in a cubic crystal?
5. State the zone law.

## Takeaway
- Miller indices: reciprocals of axis intercepts.
- $\{hkl\}$: family of equivalent planes.
- $d_{hkl} = a / \sqrt{h^2 + k^2 + l^2}$ for cubic.
- $[hkl] \perp (hkl)$ in cubic only.
- Stereographic projection displays crystal orientations.
