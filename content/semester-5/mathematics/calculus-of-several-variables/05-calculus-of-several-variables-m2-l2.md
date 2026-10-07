***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-5
semesterName: Semester 5
subjectId: mathematics
subjectName: Mathematics
courseId: calculus-of-several-variables
courseName: Calculus of Several Variables (Mathematics Elective II)
moduleId: calculus-of-several-variables-module-2
moduleName: Multiple Integrals
lessonId: calculus-of-several-variables-m2-l2
lessonName: Change of Variables, the Jacobian and Triple Integrals
lessonNumber: 5
moduleNumber: 2
semesterNumber: 5
difficulty: intermediate
estimatedStudyMinutes: 60
releaseOrder: 5
prerequisites:
  - calculus-of-several-variables-m2-l1
  - integral-calculus-m1-l3
learningObjectives:
  - Derive the change-of-variables formula $dA = \left|\partial(x,y)/\partial(u,v)\right|du\,dv$ from the area of the image parallelogram and apply it to non-rectangular regions.
  - Set up and evaluate triple integrals as iterated integrals over regions bounded by surfaces.
  - Compute the Jacobians of cylindrical and spherical coordinates, obtaining $dV = r\,dr\,d\theta\,dz$ and $dV = r^2\sin\theta\,dr\,d\theta\,d\phi$.
  - Choose the coordinate system adapted to the symmetry of a region and evaluate volumes and integrals over cones, spheres and paraboloids.
concepts:
  - Change of variables in multiple integrals
  - Jacobian determinant
  - Triple integral
  - Cylindrical coordinates
  - Spherical polar coordinates
  - Volume element
tags:
  - mathematics
  - calculus-of-several-variables
  - jacobian
  - triple-integrals
sourceType: authored-courseware
status: in-review
assessmentHints:
  - derivation
  - problem-solving
  - computational
  - short-answer
***

# Change of Variables, the Jacobian and Triple Integrals

## Overview

The polar area element $r\,dr\,d\theta$ of Lesson m2-l1 is one instance of a general rule: when an integral is rewritten in new variables, the area or volume element acquires a factor equal to the absolute value of the Jacobian determinant of the transformation. This lesson derives that rule from the geometry of a small parallelogram, uses it to straighten out awkward regions, and extends integration to three dimensions. Triple integrals are evaluated as iterated integrals exactly as double integrals are, but the payoff of choosing good coordinates is greater still: cylindrical coordinates suit pipes, wires and paraboloids, and spherical coordinates suit stars, planets, atoms and point charges. We compute both volume elements by hand, so that the factors $r$ and $r^2\sin\theta$ are understood rather than memorised.

## Learning Path

- **What you should already know**: double integrals, Fubini's theorem and polar coordinates (Lesson m2-l1); the Jacobian matrix and the chain rule (Lesson m1-l2); substitution in single integrals (integral-calculus Lesson m1-l3); $2\times2$ and $3\times3$ determinants.
- **What this lesson adds**: the change-of-variables theorem; triple integrals; cylindrical and spherical coordinates and their volume elements.
- **What later lessons this will unlock**: mass, centroids, moments of inertia and gravitational potential of solids (Lesson m2-l3); surface integrals over parametrised surfaces (Lesson m3-l2); the divergence theorem (Lesson m3-l3).

## Core Explanation

### From substitution to the Jacobian

In one variable, $x = x(u)$ gives $\int f(x)\,dx = \int f(x(u))\,|x'(u)|\,du$ when the limits are written in increasing order: the derivative measures how the map stretches length. In two variables let $T(u,v) = (x(u,v), y(u,v))$ map a region $S$ of the $uv$-plane one-to-one onto a region $R$ of the $xy$-plane. A small rectangle with corner $(u,v)$ and sides $\Delta u$, $\Delta v$ is carried to a small curvilinear quadrilateral which, by the linear approximation of Lesson m1-l2, is nearly the parallelogram spanned by

$$\mathbf{a} = \frac{\partial\mathbf{r}}{\partial u}\Delta u = (x_u, y_u)\,\Delta u, \qquad \mathbf{b} = \frac{\partial\mathbf{r}}{\partial v}\Delta v = (x_v, y_v)\,\Delta v.$$

Its area is the absolute value of the $2\times 2$ determinant formed from these vectors:

$$\Delta A \approx \left|\det\begin{pmatrix} x_u & x_v \\ y_u & y_v\end{pmatrix}\right|\Delta u\,\Delta v = \left|\frac{\partial(x,y)}{\partial(u,v)}\right|\Delta u\,\Delta v.$$

The determinant $\partial(x,y)/\partial(u,v)$ is the **Jacobian** of the transformation. Summing and taking the limit gives the **change-of-variables theorem**:

$$\iint_R f(x,y)\,dx\,dy = \iint_S f\big(x(u,v), y(u,v)\big)\left|\frac{\partial(x,y)}{\partial(u,v)}\right|du\,dv,$$

valid when $T$ is one-to-one with continuous partials and non-zero Jacobian (except possibly on a set of zero area). Because the Jacobian matrices of a map and its inverse are inverse matrices (chain rule), their determinants are reciprocal:

$$\frac{\partial(u,v)}{\partial(x,y)} = \left(\frac{\partial(x,y)}{\partial(u,v)}\right)^{-1},$$

which is useful when the new variables are given as functions of the old.

**Polar check.** For $x = r\cos\theta$, $y = r\sin\theta$, $\partial(x,y)/\partial(r,\theta) = \cos\theta\cdot r\cos\theta - (-r\sin\theta)\sin\theta = r$, recovering $dA = r\,dr\,d\theta$.

**Ellipse.** With $x = a\rho\cos\theta$, $y = b\rho\sin\theta$ the Jacobian is $ab\rho$, and the ellipse $x^2/a^2 + y^2/b^2 \le 1$ becomes $\rho \le 1$, so its area is $\int_0^{2\pi}\int_0^1 ab\rho\,d\rho\,d\theta = \pi ab$.

### Triple integrals

For $f$ continuous on a bounded solid $E$, the **triple integral** $\iiint_E f\,dV$ is defined by Riemann sums over small boxes and, by Fubini's theorem, evaluated as an iterated integral. If $E$ lies between two surfaces over a plane region $D$,

$$E = \{(x,y,z) : (x,y)\in D,\ u_1(x,y) \le z \le u_2(x,y)\}, \qquad \iiint_E f\,dV = \iint_D\left(\int_{u_1(x,y)}^{u_2(x,y)} f\,dz\right)dA.$$

With $f = 1$ the integral is the volume; with $f = \rho$ it is the mass. For the tetrahedron bounded by the coordinate planes and $x + y + z = 1$, the limits are $0 \le z \le 1 - x - y$, $0 \le y \le 1 - x$, $0 \le x \le 1$, and the volume is $\int_0^1\int_0^{1-x}(1 - x - y)\,dy\,dx = \int_0^1 \tfrac12(1-x)^2dx = \tfrac16$.

The three-variable Jacobian is the $3\times3$ determinant $\partial(x,y,z)/\partial(u,v,w)$: the volume of the small parallelepiped spanned by $\mathbf{r}_u\Delta u$, $\mathbf{r}_v\Delta v$, $\mathbf{r}_w\Delta w$ is the absolute value of their scalar triple product.

### Cylindrical coordinates

Cylindrical coordinates $(r, \theta, z)$ are polar coordinates in the plane plus the height: $x = r\cos\theta$, $y = r\sin\theta$, $z = z$. The Jacobian matrix is block-diagonal, so the determinant is the polar factor times 1:

$$dV = r\,dr\,d\theta\,dz.$$

They suit solids with an axis of symmetry: cylinders $r \le a$, cones $z = kr$, paraboloids $z = r^2$.

### Spherical coordinates

We use the physics convention: $r \ge 0$ is the distance from the origin, $\theta \in [0,\pi]$ the polar angle from the positive $z$-axis, and $\phi \in [0, 2\pi)$ the azimuth:

$$x = r\sin\theta\cos\phi, \qquad y = r\sin\theta\sin\phi, \qquad z = r\cos\theta.$$

(Many mathematics texts swap the names, writing $\rho$ for the distance and $\phi$ for the polar angle; always check which convention a source uses.) The Jacobian is

$$\frac{\partial(x,y,z)}{\partial(r,\theta,\phi)} = \det\begin{pmatrix} \sin\theta\cos\phi & r\cos\theta\cos\phi & -r\sin\theta\sin\phi \\ \sin\theta\sin\phi & r\cos\theta\sin\phi & r\sin\theta\cos\phi \\ \cos\theta & -r\sin\theta & 0\end{pmatrix}.$$

Expanding along the third row,

$$= \cos\theta\,\big(r^2\sin\theta\cos\theta\cos^2\phi + r^2\sin\theta\cos\theta\sin^2\phi\big) + r\sin\theta\,\big(r\sin^2\theta\cos^2\phi + r\sin^2\theta\sin^2\phi\big)$$

$$= r^2\sin\theta\cos^2\theta + r^2\sin^3\theta = r^2\sin\theta.$$

Hence

$$dV = r^2\sin\theta\,dr\,d\theta\,d\phi.$$

Geometrically, the cell has edges $dr$, $r\,d\theta$ along a meridian, and $r\sin\theta\,d\phi$ along a circle of latitude, whose product is the same. The volume of a ball of radius $R$ is then

$$V = \int_0^{2\pi}\int_0^{\pi}\int_0^R r^2\sin\theta\,dr\,d\theta\,d\phi = 2\pi\cdot 2\cdot\frac{R^3}{3} = \frac{4}{3}\pi R^3.$$

The factor $\int_0^\pi\sin\theta\,d\theta = 2$ appears constantly: the solid angle of the whole sphere is $\int_0^{2\pi}\int_0^\pi\sin\theta\,d\theta\,d\phi = 4\pi$ steradians.

| System | Coordinates | Volume element | Natural for |
|---|---|---|---|
| Cartesian | $x, y, z$ | $dx\,dy\,dz$ | boxes, planes |
| Cylindrical | $r, \theta, z$ | $r\,dr\,d\theta\,dz$ | wires, pipes, paraboloids |
| Spherical | $r, \theta, \phi$ | $r^2\sin\theta\,dr\,d\theta\,d\phi$ | balls, cones, point sources |

A symbolic check of the spherical Jacobian takes three lines of SymPy; it should print `r**2*sin(theta)`.

```python
import sympy as sp
r, th, ph = sp.symbols("r theta phi", positive=True)
X = sp.Matrix([r*sp.sin(th)*sp.cos(ph), r*sp.sin(th)*sp.sin(ph), r*sp.cos(th)])
print(sp.simplify(X.jacobian([r, th, ph]).det()))
```

## Key Ideas

- **Jacobian**: $\partial(x,y)/\partial(u,v)$ is the local area-scaling factor of a transformation; its absolute value multiplies $du\,dv$.
- **Change of variables**: choose new variables that make either the region or the integrand simple, then transform limits, integrand and area element together.
- **Inverse Jacobian**: $\partial(u,v)/\partial(x,y) = 1/[\partial(x,y)/\partial(u,v)]$.
- **Triple integrals** are iterated integrals; the innermost limits are surfaces, the middle limits curves, the outer limits constants.
- **Cylindrical**: $dV = r\,dr\,d\theta\,dz$. **Spherical**: $dV = r^2\sin\theta\,dr\,d\theta\,d\phi$, with $\theta$ measured from the $z$-axis.
- **Symmetry decides**: match the coordinate system to the shape of the region.

## Worked Examples

### Example 1 — Straightening a tilted parallelogram

Evaluate $\iint_R (x + y)\,e^{x - y}\,dA$, where $R$ is the parallelogram bounded by $x + y = 1$, $x + y = 3$, $x - y = -1$ and $x - y = 1$.

**Solution.** Let $u = x + y$, $v = x - y$, so $R$ becomes the rectangle $1 \le u \le 3$, $-1 \le v \le 1$. The inverse Jacobian is

$$\frac{\partial(u,v)}{\partial(x,y)} = \det\begin{pmatrix}1 & 1\\ 1 & -1\end{pmatrix} = -2, \qquad\text{so}\qquad \left|\frac{\partial(x,y)}{\partial(u,v)}\right| = \frac12.$$

Then

$$\iint_R (x+y)e^{x-y}\,dA = \frac12\int_1^3 u\,du\int_{-1}^{1}e^{v}\,dv = \frac12\cdot 4\cdot\left(e - e^{-1}\right) = 2\left(e - e^{-1}\right) \approx 4.70.$$

Directly in $x$ and $y$ the region would have to be split into three pieces.

### Example 2 — An ice-cream cone in spherical coordinates

Find the volume of the solid inside the sphere $r = a$ and inside the cone $\theta = \pi/3$ (that is, $z \ge \sqrt{(x^2 + y^2)/3}$).

**Solution.** The region is $0 \le r \le a$, $0 \le \theta \le \pi/3$, $0 \le \phi \le 2\pi$, a box in spherical coordinates:

$$V = \int_0^{2\pi}\int_0^{\pi/3}\int_0^a r^2\sin\theta\,dr\,d\theta\,d\phi = 2\pi\cdot\big[-\cos\theta\big]_0^{\pi/3}\cdot\frac{a^3}{3} = 2\pi\cdot\frac12\cdot\frac{a^3}{3} = \frac{\pi a^3}{3}.$$

In general a cone of half-angle $\alpha$ gives $\tfrac{2\pi a^3}{3}(1 - \cos\alpha)$, which correctly becomes $\tfrac43\pi a^3$ at $\alpha = \pi$. For $a = 5.0$ cm the volume is $131\ \text{cm}^3$.

### Example 3 — Centroid height of a paraboloidal bowl

The solid $E$ lies between the paraboloid $z = x^2 + y^2$ and the plane $z = 4$. Compute $V = \iiint_E dV$ and $\iiint_E z\,dV$, and hence the height $\bar z$ of its centroid.

**Solution.** In cylindrical coordinates $E$ is $0 \le \theta \le 2\pi$, $0 \le r \le 2$, $r^2 \le z \le 4$. The volume is

$$V = \int_0^{2\pi}\int_0^2\int_{r^2}^4 r\,dz\,dr\,d\theta = 2\pi\int_0^2(4r - r^3)\,dr = 2\pi(8 - 4) = 8\pi.$$

The moment is

$$\iiint_E z\,dV = 2\pi\int_0^2 \frac{16 - r^4}{2}\,r\,dr = \pi\left[8r^2 - \frac{r^6}{6}\right]_0^2 = \pi\left(32 - \frac{32}{3}\right) = \frac{64\pi}{3}.$$

Hence $\bar z = (64\pi/3)/(8\pi) = 8/3$. The centroid lies above the midpoint height 2 because the bowl is wider at the top.

## Common Misconceptions

- **"The Jacobian can be negative, so the integral changes sign."** The formula uses the absolute value $|\partial(x,y)/\partial(u,v)|$; a negative determinant only signals that the map reverses orientation, as in Example 1.
- **"$dV = dr\,d\theta\,d\phi$ in spherical coordinates."** The element is $r^2\sin\theta\,dr\,d\theta\,d\phi$; units confirm that $dV$ needs a factor of length squared.
- **"$\theta$ runs from $0$ to $2\pi$ in spherical coordinates."** The polar angle runs only from $0$ to $\pi$; letting it run to $2\pi$ counts every point twice and makes $\int\sin\theta\,d\theta = 0$.
- **"Only the integrand needs to be transformed."** Integrand, limits and volume element must all be converted together; the new limits come from the image of the region.
- **"Cylindrical and spherical $r$ are the same."** Cylindrical $r = \sqrt{x^2+y^2}$ is the distance from the $z$-axis; spherical $r = \sqrt{x^2+y^2+z^2}$ is the distance from the origin.

## Connections

- The Jacobian determinant as a volume-scaling factor is the determinant of a linear map from linear-algebra Lesson m1-l3; orientation reversal corresponds to a negative determinant.
- Spherical coordinates and the solid-angle element $\sin\theta\,d\theta\,d\phi$ underlie the hydrogen-atom orbitals and their normalisation in introduction-to-quantum-mechanics Lesson m3-l2.
- Celestial coordinates in astrophysics-i are spherical coordinates on the sky; declination is $90^\circ - \theta$, and the solid angle of a survey field is $\iint\sin\theta\,d\theta\,d\phi$.
- Phase-space integrals over momentum in thermal-physics-and-statistical-mechanics use $d^3p = 4\pi p^2\,dp$, the spherical volume element after the angular integration.
- Monte Carlo integration (numerical-methods) is often the practical way to compute triple integrals over irregular regions where no adapted coordinates exist.

## Quick Check

1. Compute the Jacobian of $x = u^2 - v^2$, $y = 2uv$.
2. Use $u = xy$, $v = y/x$ to find the area of the region in the first quadrant bounded by $xy = 1$, $xy = 4$, $y = x$ and $y = 4x$.
3. Set up, in all three coordinate systems, the volume of the ball $x^2 + y^2 + z^2 \le 9$, and evaluate the spherical form.
4. Evaluate $\iiint_E (x^2 + y^2)\,dV$ for the cylinder $x^2 + y^2 \le 4$, $0 \le z \le 3$.
5. Evaluate $\iiint_{\mathbb{R}^3} e^{-(x^2+y^2+z^2)}\,dV$ in spherical coordinates and check it against $(\sqrt\pi)^3$.

## Takeaway

- Changing variables multiplies the area or volume element by the absolute Jacobian determinant, the local scaling factor of the map.
- Good variables make the region a rectangle or a box, and the Jacobian is then easily computed or inverted.
- Triple integrals are iterated integrals with surface, curve and constant limits from the inside out.
- Cylindrical coordinates give $dV = r\,dr\,d\theta\,dz$ and spherical coordinates $dV = r^2\sin\theta\,dr\,d\theta\,d\phi$, both derivable by hand from a $3\times3$ determinant.
- Matching coordinates to symmetry is the single most effective technique for multiple integrals.
