***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-6
semesterName: Semester 6
subjectId: mathematics
subjectName: Mathematics
courseId: complex-analysis
courseName: Complex Analysis
moduleId: complex-analysis-module-3
moduleName: Residues, Mappings and Applications
lessonId: complex-analysis-m3-l2
lessonName: Conformal Mappings and Möbius Transformations
lessonNumber: 8
moduleNumber: 3
semesterNumber: 6
difficulty: advanced
estimatedStudyMinutes: 60
releaseOrder: 8
prerequisites:
  - complex-analysis-m3-l1
  - linear-algebra-m1-l3
  - waves-and-optics-m2-l2
learningObjectives:
  - Prove that an analytic map with $f'(z_0)\ne0$ preserves angles and orientation, and interpret $|f'|$ and $\arg f'$ as local scaling and rotation.
  - Find images of lines, circles, strips and sectors under $z^2$, $1/z$, $e^z$ and the Joukowski map.
  - Describe Möbius transformations as matrices, show that they map circles to circles, and construct them from three point correspondences using the cross-ratio.
  - Use conformal invariance of Laplace's equation to transform boundary-value problems.
concepts:
  - Conformal mapping
  - Local scaling and rotation by f'(z)
  - Critical points
  - Möbius transformation
  - Cross-ratio
  - Circle-preserving property
  - Joukowski map
tags:
  - mathematics
  - complex-analysis
  - conformal-mapping
  - mobius-transformations
sourceType: authored-courseware
status: in-review
assessmentHints:
  - problem-solving
  - derivation
  - conceptual
  - computational
***

# Conformal Mappings and Möbius Transformations

## Overview

A complex function is visualised as a mapping of one plane to another, and an analytic function with non-vanishing derivative is a mapping of a special kind: it preserves angles. Infinitesimally it acts as a rotation combined with a scaling, so small shapes are distorted only in size, not in form. This property, conformality, is the geometric content of the Cauchy–Riemann equations (Lesson m1-l2), and it makes mappings a powerful tool for transforming a hard boundary-value problem for Laplace's equation into an easy one. This lesson proves the angle-preservation theorem, catalogues the images of standard regions under $z^n$, $1/z$, $e^z$ and the Joukowski map, develops the Möbius (linear fractional) transformations, which map circles and lines to circles and lines, and shows how harmonic functions behave under conformal maps, preparing the physical applications of Lesson m3-l3.

## Learning Path

- **What you should already know**: analyticity, the Cauchy–Riemann equations and orthogonality of level curves (Lesson m1-l2); $e^z$, $\log z$, $\sqrt z$ and branches (Lesson m1-l3); the Riemann sphere (Lesson m1-l1); linear maps and matrices (Linear Algebra Lesson m1-l3); the thin-lens formula (Waves and Optics Lesson m2-l2).
- **What this lesson adds**: the angle-preservation theorem and critical points; images under standard maps; Möbius transformations, cross-ratio and symmetry; conformal invariance of harmonic functions.
- **What later lessons this will unlock**: complex potentials for two-dimensional electrostatics and fluid flow, and the Kramers–Kronig and Bromwich applications on the upper half-plane (Lesson m3-l3).

## Core Explanation

### Conformality

Let $f$ be analytic at $z_0$ with $f'(z_0)\ne0$, and let $z(t)$ be a smooth curve through $z_0 = z(0)$ with tangent $z'(0)\ne0$. Its image $w(t) = f(z(t))$ has tangent

$$w'(0) = f'(z_0)\,z'(0).$$

Taking moduli and arguments, $|w'(0)| = |f'(z_0)||z'(0)|$ and $\arg w'(0) = \arg f'(z_0) + \arg z'(0)$. Every tangent at $z_0$ is rotated by the same angle $\arg f'(z_0)$ and magnified by the same factor $|f'(z_0)|$, so the angle between any two curves through $z_0$ is preserved in both size and sense. A map with this property is **conformal**. Locally, $w - w_0\approx f'(z_0)(z - z_0)$: lengths scale by $|f'|$ and areas by $|f'|^2$ (the Jacobian of the map is $|f'|^2 = u_x^2 + v_x^2$ by Cauchy–Riemann). The orthogonality of the level curves of $u$ and $v$ in Lesson m1-l2 is a special case: the lines $\operatorname{Re}w = c_1$ and $\operatorname{Im}w = c_2$ meet at right angles and $f^{-1}$ carries them to those curves.

At a **critical point**, $f'(z_0) = 0$, conformality fails. If $f(z)-f(z_0)\approx c(z-z_0)^m$, angles at $z_0$ are multiplied by $m$. The map $w = z^2$ has $f'(0)=0$ and doubles angles at the origin: the first quadrant $0<\arg z<\pi/2$ becomes the upper half-plane. The inverse of a conformal map, where $f'\ne0$, is again analytic, with $(f^{-1})' = 1/f'$. The **Riemann mapping theorem** states that every simply connected domain other than $\mathbb{C}$ itself can be mapped conformally and one-to-one onto the unit disc; $\mathbb{C}$ is excluded because a map to the disc would be a bounded entire function, constant by Liouville's theorem.

### Standard mappings

| Map | Action | Image of a standard region |
|---|---|---|
| $w = z + c$, $w = az$ | translation; rotation by $\arg a$ and scaling by $\lvert a\rvert$ | congruent or similar copies |
| $w = z^2$ | squares moduli, doubles arguments | sector $0<\arg z<\alpha$ to $0<\arg w<2\alpha$ |
| $w = \sqrt z$ (branch) | inverse of $z^2$ | upper half-plane to first quadrant |
| $w = e^z$ | $e^x e^{iy}$ | strip $0<y<\pi$ to upper half-plane |
| $w = \operatorname{Log}z$ | inverse of $e^z$ | upper half-plane to strip $0<v<\pi$ |
| $w = \sin z$ | $\sin x\cosh y + i\cos x\sinh y$ | half-strip $\lvert x\rvert<\pi/2$, $y>0$ to upper half-plane |
| $w = \tfrac12(z + 1/z)$ | Joukowski | exterior of $\lvert z\rvert=1$ to $\mathbb{C}\setminus[-1,1]$ |

For $w=z^2$, with $z = x+iy$: the lines $x = c$ map to the parabolas $u = c^2 - v^2/(4c^2)$ and the lines $y = c$ to $u = v^2/(4c^2) - c^2$, two confocal families that meet orthogonally. For the **Joukowski map** $J(z) = \tfrac12(z+1/z)$, a circle $|z|=r$ maps to the ellipse $u = \tfrac12(r+1/r)\cos\theta$, $v = \tfrac12(r-1/r)\sin\theta$ with foci at $\pm1$, collapsing to the segment $[-1,1]$ at $r=1$. Since $J'(z) = \tfrac12(1-z^{-2})$ vanishes at $z=\pm1$, a circle through $z=1$ displaced from the origin maps to an aerofoil with a cusp at the trailing edge.

The following code draws the images of three circles under $J$; expect nested ellipses for centred circles and an aerofoil-like shape with a cusp at $w=1$ for the displaced circle through $z=1$.

```python
import numpy as np, matplotlib.pyplot as plt
J = lambda z: 0.5*(z + 1/z)
t = np.linspace(0, 2*np.pi, 400)
for c, r in [(0, 1.5), (0, 2.5), (-0.1 + 0.1j, abs(1 - (-0.1 + 0.1j)))]:
    w = J(c + r*np.exp(1j*t)); plt.plot(w.real, w.imag)
plt.axis("equal"); plt.show()
```

### Möbius transformations

A **Möbius (linear fractional) transformation** is

$$T(z) = \frac{az+b}{cz+d}, \qquad ad-bc\ne0,$$

with $T(-d/c) = \infty$ and $T(\infty) = a/c$, making $T$ a one-to-one conformal map of the Riemann sphere $\hat{\mathbb{C}}$ onto itself ($T'(z) = (ad-bc)/(cz+d)^2\ne0$). Associating $T$ with the matrix $\begin{pmatrix}a&b\\c&d\end{pmatrix}$, composition corresponds to matrix multiplication, and the inverse corresponds to the inverse matrix, $T^{-1}(w) = (dw-b)/(-cw+a)$. Scalar multiples of the matrix give the same map, so the group of Möbius transformations is $PGL(2,\mathbb{C})$, with three independent complex parameters.

For $c\ne0$, $T$ decomposes as $T(z) = \dfrac ac - \dfrac{ad-bc}{c}\cdot\dfrac{1}{cz+d}$: a linear map, an inversion $z\mapsto1/z$ and a linear map. Linear maps send circles to circles and lines to lines. For inversion, the generalised circle $A(x^2+y^2) + Bx + Cy + D = 0$ (a line when $A=0$) becomes, with $z=1/w$,

$$D(u^2+v^2) + Bu - Cv + A = 0,$$

again a circle or line. Hence **a Möbius transformation maps circles and lines to circles and lines**, treating lines as circles through $\infty$. It does not map centres to centres.

### Cross-ratio and determination of a Möbius map

The **cross-ratio** of four distinct points,

$$(z,z_1,z_2,z_3) = \frac{(z-z_1)(z_2-z_3)}{(z-z_3)(z_2-z_1)},$$

is invariant under every Möbius transformation (it is the image of $z$ under the unique Möbius map sending $z_1,z_2,z_3$ to $0,1,\infty$, and compositions preserve this). Thus the unique $T$ with $T(z_k) = w_k$, $k=1,2,3$, is obtained by solving $(w,w_1,w_2,w_3) = (z,z_1,z_2,z_3)$ for $w$. The four points are concyclic iff the cross-ratio is real.

Two points are **symmetric** with respect to a circle if they are inverse points (on the same ray from the centre with product of distances $R^2$), or mirror images in a line. A Möbius map preserves symmetry. If $T$ maps a circle to the real axis, it sends symmetric points, such as the centre and $\infty$, to complex conjugates, so the interior goes to the upper or lower half-plane according to where the centre's image lies.

### Conformal invariance of harmonic functions

If $f$ is conformal and $\phi(u,v)$ is harmonic in the $w$-plane, then $\Phi(x,y) = \phi(f(z))$ is harmonic in the $z$-plane. Indeed, locally $\phi = \operatorname{Re}g$ with $g$ analytic and $\Phi = \operatorname{Re}(g\circ f)$; equivalently, the chain rule gives $\nabla^2\Phi = |f'(z)|^2\,\nabla^2\phi = 0$. Moreover boundary values carry over: if $\phi=\phi_0$ on a boundary arc in the $w$-plane, then $\Phi=\phi_0$ on the preimage. A Dirichlet problem on a complicated region can thus be mapped to the half-plane or disc, solved there, and pulled back. This is the engine of Lesson m3-l3.

## Key Ideas

- **Conformality**: $w'(0) = f'(z_0)z'(0)$ rotates all tangents by $\arg f'(z_0)$ and scales by $|f'(z_0)|$, so angles are preserved wherever $f'\ne0$.
- **Critical points**: where $f'=0$ with $f-f_0\sim(z-z_0)^m$, angles are multiplied by $m$, as at the origin for $z^2$.
- **Standard maps**: $z^2$ doubles angles, $e^z$ maps a strip of height $\pi$ to a half-plane, and the Joukowski map sends circles to ellipses and aerofoils.
- **Möbius transformations**: $T(z) = (az+b)/(cz+d)$ composes like $2\times2$ matrices and maps generalised circles to generalised circles.
- **Cross-ratio**: it is Möbius-invariant and determines the unique map sending three points to three prescribed images.
- **Harmonic invariance**: composing a harmonic function with a conformal map yields a harmonic function with transformed boundary data.

## Worked Examples

### Example 1 — Orthogonal images under $z^2$

Show that the images of the lines $x=1$ and $y=1$ under $w=z^2$ intersect orthogonally at $w=2i$.

**Solution.** For $z = 1+iy$, $w = (1-y^2) + 2iy$, so $u = 1 - v^2/4$. For $z = x+i$, $w = (x^2-1)+2ix$, so $u = v^2/4 - 1$. Both pass through $v=2$, $u=0$ (at $z=1+i$). Their slopes $du/dv$ at $v=2$ are $-v/2 = -1$ and $v/2 = +1$, so the tangent directions $(du,dv)\propto(-1,1)$ and $(1,1)$ are perpendicular. This agrees with conformality: the original lines are perpendicular, and $f'(1+i) = 2+2i\ne0$ rotates both by $45^\circ$ and magnifies by $2\sqrt2$.

### Example 2 — A Möbius map from three points

Find the Möbius transformation sending $z_1=1$, $z_2=i$, $z_3=-1$ to $w_1=0$, $w_2=1$, $w_3=\infty$, and the image of $|z|<1$.

**Solution.** With $w_3=\infty$ the cross-ratio condition reduces to $(w-w_1)/(w_2-w_1) = (z-z_1)(z_2-z_3)/[(z-z_3)(z_2-z_1)]$, i.e.

$$w = \frac{(z-1)(i+1)}{(z+1)(i-1)}.$$

Since $\frac{1+i}{i-1} = -i$, $w = -i\,\dfrac{z-1}{z+1} = i\,\dfrac{1-z}{1+z}$. The matrix is $\begin{pmatrix}-i&i\\1&1\end{pmatrix}$ with determinant $-2i\ne0$. Check: $T(i) = i(1-i)/(1+i) = i\cdot(-i) = 1$. The three given points lie on the unit circle and map to $0,1,\infty$ on the real axis. The centre maps to $T(0) = i$, in the upper half-plane, so the disc is mapped onto the upper half-plane. The centre of the disc does not map to the centre of a circle, since a half-plane has none.

### Example 3 — The Joukowski image of a circle

Describe the image of $|z|=2$ under $J(z)=\tfrac12(z+1/z)$ and show that $J$ maps $|z|>1$ one-to-one onto $\mathbb{C}\setminus[-1,1]$.

**Solution.** For $z=2e^{i\theta}$, $J = \tfrac12(2e^{i\theta}+\tfrac12e^{-i\theta}) = \tfrac54\cos\theta + \tfrac34 i\sin\theta$, an ellipse with semi-axes $5/4$ and $3/4$ and foci at $\pm\sqrt{25/16-9/16}=\pm1$. For one-to-one: $J(z_1)=J(z_2)$ implies $(z_1-z_2)(1-1/(z_1z_2))=0$, so $z_1z_2=1$ for $z_1\ne z_2$. Both points then cannot lie in $|z|>1$, so $J$ is injective there. Solving $z^2-2wz+1=0$ gives $z = w\pm\sqrt{w^2-1}$, the branch of Lesson m1-l3, Example 3, with the sign choice that gives $|z|>1$, which shows that every $w\notin[-1,1]$ is attained.

## Common Misconceptions

- **"Conformal maps preserve lengths and areas."** Only angles are preserved. The local scale factor $|f'(z)|$ varies from point to point, and for $e^z$ or $1/z$ it varies strongly.
- **"A conformal map is conformal at every point."** Conformality fails where $f'=0$; $z^2$ is conformal for $z\ne0$ but doubles angles at the origin, and the Joukowski cusp comes from $z=\pm1$.
- **"A Möbius transformation maps the centre of a circle to the centre of the image circle."** It maps circles to circles but not centres to centres; the centre is sent to the point symmetric to the image of $\infty$.
- **"Any simply connected domain can be mapped onto the whole plane."** The Riemann mapping theorem excludes $\mathbb{C}$ (Liouville's theorem); the target is the disc.
- **"A locally conformal map is globally one-to-one."** $e^z$ and $z^2$ are conformal where $f'\ne0$ but not injective on $\mathbb{C}$; one must restrict to a domain.

## Connections

- The thin-lens relation $s' = fs/(s-f)$ in Waves and Optics Lesson m2-l2 is a Möbius transformation of the object distance, and the composition of lenses and free-space propagation multiplies the $2\times2$ ray-transfer matrices, exactly as Möbius composition corresponds to matrix products (Linear Algebra Lesson m1-l3).
- Equipotentials and field lines in Electricity and Magnetism Lesson m1-l3 are orthogonal families, the real and imaginary parts of one analytic function; conformal maps deform the geometry while preserving the orthogonality, which is the technique of Lesson m3-l3.
- Lorentz transformations act on directions of incoming light as Möbius transformations of the celestial sphere, which explains relativistic aberration in astrophysics: a boost distorts the star field but preserves angles between small objects.
- The Joukowski map was the first analytic tool for the lift on an aerofoil in aerodynamics; Lesson m3-l3 develops the underlying potential flow.

## Quick Check

1. Find the image of the strip $0<\operatorname{Im}z<\pi/2$ under $w=e^z$ and the factor by which areas scale at $z=\ln2$.
2. Show that $w=1/z$ maps the line $x=1$ to the circle $|w-\tfrac12|=\tfrac12$.
3. Find the Möbius map sending $0,1,\infty$ to $-1,0,1$ respectively, and give its matrix.
4. Prove that the cross-ratio of four points is invariant under $z\mapsto az+b$ and under $z\mapsto1/z$.
5. At what points is $w=z^3-3z$ not conformal, and by what factor are angles multiplied there?

## Takeaway

- An analytic map with $f'(z_0)\ne0$ is conformal: it rotates tangents by $\arg f'$ and scales lengths by $|f'|$, preserving angles and orientation.
- Critical points, where $f'=0$, multiply angles by the order of the zero.
- Standard maps ($z^2$, $e^z$, $\sin z$, Joukowski) transform sectors, strips and circles into half-planes, ellipses and aerofoils.
- Möbius transformations compose as $2\times2$ matrices, map generalised circles to generalised circles, and are fixed by the images of three points through the cross-ratio.
- Harmonic functions remain harmonic under conformal maps, so boundary-value problems can be moved to simple regions.
