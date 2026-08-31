***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-2
semesterName: Semester 2
subjectId: physics
subjectName: Physics
courseId: electricity-and-magnetism
courseName: Electricity and Magnetism
moduleId: electricity-and-magnetism-module-1
moduleName: Electrostatics
lessonId: electricity-and-magnetism-m1-l2
lessonName: Gauss's Law and Field Geometry
lessonNumber: 2
moduleNumber: 1
semesterNumber: 2
difficulty: intermediate
estimatedStudyMinutes: 55
releaseOrder: 2
prerequisites:
  - electricity-and-magnetism-m1-l1
learningObjectives:
  - State the definition of electric flux.
  - State Gauss's law and explain its meaning.
  - Apply Gauss's law to symmetric charge distributions (spherical, cylindrical, planar).
  - Recognise when Gauss's law is the most efficient tool and when it is not.
concepts:
  - Electric flux
  - Gauss's law
  - Solid angle
  - Spherical symmetry
  - Cylindrical symmetry
  - Planar symmetry
tags:
  - physics
  - electromagnetism
  - gauss-law
sourceType: authored-courseware
assessmentHints:
  - conceptual
  - problem-solving
  - derivation
***

# Gauss's Law and Field Geometry

## Overview
Gauss's law is one of the four Maxwell equations and the most powerful tool for computing electric fields when the charge distribution has a symmetry — spherical, cylindrical, or planar. The law relates the *flux* of the electric field through a closed surface to the *charge enclosed* by that surface. Once you understand flux, Gauss's law is almost obvious; applying it to symmetric distributions makes otherwise-hard problems trivial.

## Learning Path
- What you should already know: the electric field of a point charge, vector area, surface integrals.
- What this lesson adds: a powerful law for symmetric problems and a deep conservation statement that generalises the inverse-square law.
- What it unlocks: capacitance, dielectrics, and the parallel-plate capacitor; later, Ampère's law and Faraday's law in the third module.

## Core Explanation
**Electric flux.** The flux of a vector field $\vec{E}$ through an oriented surface is the integral of the field's normal component over the area:

$$\Phi_E = \int_S \vec{E} \cdot d\vec{A},$$

where $d\vec{A}$ is the differential area vector (magnitude $dA$, direction normal to the surface, by convention outward for a closed surface). The dot product picks out the component of $\vec{E}$ perpendicular to the surface. Units of flux: N·m²/C or V·m.

For a uniform field $\vec{E}$ through a flat area $A$ with normal $\hat{n}$, $\Phi_E = E A \cos\theta$ where $\theta$ is the angle between $\vec{E}$ and $\hat{n}$.

**Gauss's law.** The total electric flux through any closed surface equals the charge enclosed, divided by $\varepsilon_0$:

$$\oint_S \vec{E} \cdot d\vec{A} = \frac{Q_{\text{enc}}}{\varepsilon_0}.$$

The surface $S$ is *any* closed surface — a sphere, a cube, an irregular blob. The charge $Q_{\text{enc}}$ is the *total charge inside $S$*, regardless of where it is inside. Charges outside the surface contribute zero net flux (their field lines enter and leave the surface equally).

**Why Gauss's law is true.** For a single point charge $q$ at the centre of a sphere of radius $r$: $\vec{E}$ is radial, magnitude $E = q/(4\pi\varepsilon_0 r^2)$. The flux is $E \times 4\pi r^2 = q/\varepsilon_0$. For a charge outside, the field lines that enter the surface also leave it, so the net flux is zero. For a charge inside an irregular surface, the total solid angle subtended is $4\pi$, so the flux is $q/\varepsilon_0$ regardless of the surface's shape. Superposition extends the result to any charge configuration.

**Gauss's law is a conservation statement.** The fact that the field of a point charge is inverse-square is what makes the flux through any closed surface equal to $q/\varepsilon_0$. If the field fell as $1/r^3$, the flux would depend on the size of the surface. Gauss's law is therefore equivalent to "the field of a point charge is inverse-square" (in the no-monopole-magnetic-charge language).

**Applications to symmetric distributions.**

*Spherical symmetry.* A uniformly charged sphere of total charge $Q$ and radius $R$. For a Gaussian sphere of radius $r > R$, by symmetry $\vec{E}$ is radial and uniform on the surface, so $E \cdot 4\pi r^2 = Q/\varepsilon_0 \Rightarrow E = Q/(4\pi\varepsilon_0 r^2)$. Outside the sphere, the field is exactly as if all the charge were at the centre. For $r < R$, only the charge inside $r$ counts: if the charge is uniformly distributed, $Q(r) = Q (r/R)^3$, and $E = Q r/(4\pi\varepsilon_0 R^3)$. Inside the sphere, $E \propto r$; outside, $E \propto 1/r^2$.

*Cylindrical symmetry.* An infinite line of charge with linear charge density $\lambda$. Use a coaxial cylinder of radius $r$ and length $L$ as the Gaussian surface. The flux through the side is $E \cdot 2\pi r L$; the end caps contribute zero. So $E \cdot 2\pi r L = \lambda L/\varepsilon_0$, giving $E = \lambda/(2\pi\varepsilon_0 r)$.

*Planar symmetry.* An infinite sheet of charge with surface charge density $\sigma$. Use a "pillbox" Gaussian surface that straddles the sheet. The flux through the two faces is $2 E A$ (side walls contribute zero). $2 E A = \sigma A/\varepsilon_0$, so $E = \sigma/(2\varepsilon_0)$. Note that the field is *independent of distance* from an infinite sheet — a counter-intuitive result that comes from the infinite extent.

**Gauss's law does not give the field directly for arbitrary distributions.** For an arbitrary shape, the surface integral is hard to evaluate because $\vec{E}$ varies over the surface. Gauss's law is most useful when symmetry allows you to factor $\vec{E}$ out of the integral.

## Key Ideas
- Flux: $\Phi_E = \int_S \vec{E} \cdot d\vec{A}$.
- Gauss's law: $\oint \vec{E} \cdot d\vec{A} = Q_{\text{enc}}/\varepsilon_0$.
- The law holds for any closed surface; the field is what varies, not the surface.
- For spherical, cylindrical, or planar symmetry, Gauss's law directly gives $E$.
- Outside a spherically symmetric charge distribution, the field is the same as if all the charge were at the centre.

## Worked Examples
**Example 1 — Uniformly charged sphere.** A sphere of radius $R = 0.1\text{ m}$ has total charge $Q = 1\ \mu\text{C}$ uniformly distributed. Find $E$ at $r = 0.05\text{ m}$ (inside) and at $r = 0.5\text{ m}$ (outside).
Inside: $E = Q r/(4\pi\varepsilon_0 R^3) = 10^{-6} \times 0.05 / (4\pi \times 8.85 \times 10^{-12} \times 10^{-3}) \approx 4.5 \times 10^5\text{ N/C}$.
Outside: $E = Q/(4\pi\varepsilon_0 r^2) = 10^{-6} / (4\pi \times 8.85 \times 10^{-12} \times 0.25) \approx 3.6 \times 10^4\text{ N/C}$.

**Example 2 — Charged spherical shell.** A thin shell of radius $R$ carries total charge $Q$. Find $E$ everywhere.
Inside the shell ($r < R$): $Q_{\text{enc}} = 0$, so $E = 0$. Outside: $E = Q/(4\pi\varepsilon_0 r^2)$. The field is *zero* inside a uniformly charged shell — a famous result that the inside of a uniformly charged sphere is field-free. This is the basis of the Faraday cage.

**Example 3 — Infinite sheet.** A sheet has $\sigma = 5\ \mu\text{C/m}^2$. Find $E$ on each side.
$E = \sigma/(2\varepsilon_0) = 5 \times 10^{-6} / (2 \times 8.85 \times 10^{-12}) \approx 2.8 \times 10^5\text{ N/C}$, directed away from the sheet.

## Common Misconceptions
- **"Gauss's law replaces Coulomb's law."** It does not — it is a consequence of Coulomb's law (in static situations). The two are equivalent for static charges; Gauss's law is more powerful for symmetric problems.
- **"The choice of Gaussian surface is critical."** Any closed surface works; symmetry is what makes the integral tractable.
- **"Flux is a property of the field alone."** Flux is a property of the field *and* the chosen surface. Change the surface, change the flux (but not for the total through a closed surface enclosing a given charge).
- **"The field inside a conductor is always zero."** Only in electrostatic equilibrium. When currents flow, the field inside is non-zero and drives the current.

## Connections
Gauss's law is one of Maxwell's four equations, the foundation of classical electromagnetism. The same mathematical structure — flux through a closed surface equals enclosed source — appears in the magnetic case (Gauss's law for magnetism: zero net flux, no magnetic monopoles) and in fluid dynamics (continuity equation). The spherical-shell result is the basis of the Faraday cage, used in shielding electronics from external fields.

## Quick Check
1. State Gauss's law and define each symbol.
2. A point charge $+q$ is at the centre of a spherical Gaussian surface of radius $r$. What is the flux through the surface if the charge is moved off-centre but kept inside?
3. A point charge $q$ is outside a closed surface. What is the net flux through the surface?
4. Use Gauss's law to find the field inside and outside a uniformly charged solid sphere.
5. Why is the field inside a charged conducting shell zero in electrostatic equilibrium?

## Takeaway
- Flux: $\Phi_E = \int \vec{E} \cdot d\vec{A}$; units N·m²/C.
- Gauss's law: $\oint \vec{E} \cdot d\vec{A} = Q_{\text{enc}}/\varepsilon_0$.
- Useful for spherical, cylindrical, and planar symmetry.
- Outside a spherically symmetric distribution, the field is as if all the charge were at the centre.
- Inside a uniformly charged shell, the field is zero (Faraday cage).
