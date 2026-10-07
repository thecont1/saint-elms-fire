***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-6
semesterName: Semester 6
subjectId: mathematics
subjectName: Mathematics
courseId: complex-analysis
courseName: Complex Analysis
moduleId: complex-analysis-module-1
moduleName: Complex Numbers and Analytic Functions
lessonId: complex-analysis-m1-l1
lessonName: Complex Numbers, the Complex Plane and Limits
lessonNumber: 1
moduleNumber: 1
semesterNumber: 6
difficulty: foundation
estimatedStudyMinutes: 50
releaseOrder: 1
prerequisites:
  - integral-calculus-m3-l3
  - real-analysis-m1-l2
learningObjectives:
  - Manipulate complex numbers in Cartesian, polar and exponential form, and prove the triangle inequality $|z_1 + z_2| \le |z_1| + |z_2|$.
  - Use de Moivre's theorem to compute integer powers and all $n$-th roots of a complex number, and locate them geometrically.
  - Describe open, closed, connected and bounded sets in the complex plane and state what a domain is.
  - Evaluate limits of complex functions via real and imaginary parts, and decide when a limit fails to exist.
concepts:
  - Complex plane
  - Polar and exponential form
  - De Moivre's theorem
  - Roots of unity
  - Domains and regions in the complex plane
  - Limits of complex functions
  - Point at infinity
tags:
  - mathematics
  - complex-analysis
  - complex-numbers
  - limits
sourceType: authored-courseware
status: in-review
assessmentHints:
  - conceptual
  - problem-solving
  - short-answer
  - derivation
***

# Complex Numbers, the Complex Plane and Limits

## Overview

Complex analysis begins with a single algebraic decision: to admit a number $i$ with $i^2 = -1$. The consequences are out of proportion to that step: every polynomial acquires a full set of roots, the exponential and trigonometric functions fuse into one, and functions differentiable in the complex sense turn out to be infinitely differentiable. This lesson reviews the algebra and geometry of complex numbers, establishes the polar and exponential forms that make multiplication and roots transparent, and introduces the open sets, connected sets and domains on which every later theorem relies. It closes with limits and continuity, noting that a limit must agree along every path of approach, which hints at how restrictive complex differentiability will be.

## Learning Path

- **What you should already know**: the $\varepsilon$–$N$ language of convergence (Real Analysis Lesson m1-l2); partial fractions and improper integrals (Integral Calculus Lesson m3-l3); trigonometric addition formulae.
- **What this lesson adds**: complex arithmetic, conjugation and modulus; polar and exponential forms; de Moivre's theorem and roots of unity; the topology of the plane; limits, continuity and the point at infinity.
- **What later lessons this will unlock**: the Cauchy–Riemann equations (Lesson m1-l2); elementary functions and branches (Lesson m1-l3); contour integration over the domains defined here (Lesson m2-l1).

## Core Explanation

### Algebra of complex numbers

A **complex number** is $z = x + iy$ with real part $x = \operatorname{Re} z$ and imaginary part $y = \operatorname{Im} z$. Addition is componentwise and multiplication follows from $i^2 = -1$:

$$(x_1 + iy_1)(x_2 + iy_2) = (x_1 x_2 - y_1 y_2) + i(x_1 y_2 + x_2 y_1).$$

With these operations $\mathbb{C}$ is a field. The **complex conjugate** $\bar z = x - iy$ makes the reciprocal explicit, since $z\bar z = x^2 + y^2$ is real and positive:

$$\frac{1}{z} = \frac{\bar z}{z\bar z} = \frac{x - iy}{x^2 + y^2}.$$

Conjugation respects sums and products, with $\operatorname{Re} z = (z + \bar z)/2$ and $\operatorname{Im} z = (z - \bar z)/(2i)$.

The **modulus** $|z| = \sqrt{x^2 + y^2} = \sqrt{z\bar z}$ is the distance from the origin. It is multiplicative, $|z_1 z_2| = |z_1||z_2|$, and satisfies the **triangle inequality**

$$|z_1 + z_2| \le |z_1| + |z_2|.$$

To prove it, expand $|z_1 + z_2|^2 = |z_1|^2 + 2\operatorname{Re}(z_1\bar z_2) + |z_2|^2$ and use $\operatorname{Re}(z_1\bar z_2) \le |z_1||z_2|$. Applying it to $z_1 = (z_1 - z_2) + z_2$ gives the reverse form $\big||z_1| - |z_2|\big| \le |z_1 - z_2|$, used to bound integrands from below in contour estimates.

### The complex plane and polar form

Identifying $z = x + iy$ with the point $(x, y)$ gives the **complex plane**: addition is vector addition, conjugation is reflection in the real axis, and $|z_1 - z_2|$ is the distance between two points. In polar coordinates,

$$z = r(\cos\theta + i\sin\theta), \qquad r = |z|, \quad \theta = \arg z.$$

The **argument** is determined only up to multiples of $2\pi$; the **principal argument** $\operatorname{Arg} z \in (-\pi, \pi]$ selects one value. Euler's formula $e^{i\theta} = \cos\theta + i\sin\theta$ (justified in Lesson m1-l3) gives the **exponential form** $z = re^{i\theta}$, in which

$$z_1 z_2 = r_1 r_2\, e^{i(\theta_1 + \theta_2)}.$$

Moduli multiply and arguments add: multiplying by $z_2$ rotates by $\theta_2$ and scales by $r_2$. Multiplication by $i$ is a quarter turn anticlockwise, so $i^2 = -1$ is geometric as well as algebraic.

### De Moivre's theorem and roots

Repeated multiplication gives **de Moivre's theorem**,

$$(\cos\theta + i\sin\theta)^n = \cos n\theta + i\sin n\theta, \qquad n \in \mathbb{Z}.$$

Expanding binomially and comparing parts gives multiple-angle formulae, for example $\cos 3\theta = 4\cos^3\theta - 3\cos\theta$.

Reversing the process gives roots. The equation $w^n = z = re^{i\theta}$ with $w = \rho e^{i\phi}$ requires $\rho^n = r$ and $n\phi = \theta + 2k\pi$, so the **$n$-th roots** are

$$w_k = r^{1/n}\exp\!\left[i\,\frac{\theta + 2k\pi}{n}\right], \qquad k = 0, 1, \dots, n-1.$$

There are exactly $n$ distinct roots, equally spaced on a circle of radius $r^{1/n}$. For $z = 1$ they are the **$n$-th roots of unity** $\omega_k = e^{2\pi ik/n}$, the vertices of a regular $n$-gon, and any root $\omega \ne 1$ satisfies $1 + \omega + \cdots + \omega^{n-1} = (\omega^n - 1)/(\omega - 1) = 0$. Multiplying one root of $z$ by the roots of unity generates the rest.

### Regions in the complex plane

The theorems of complex analysis are stated on sets with specific properties, so precise vocabulary matters.

- The **$\varepsilon$-neighbourhood** of $z_0$ is the open disc $|z - z_0| < \varepsilon$; a **deleted neighbourhood** omits $z_0$.
- $z_0 \in S$ is an **interior point** if some neighbourhood of $z_0$ lies in $S$, and a **boundary point** if every neighbourhood meets both $S$ and its complement.
- $S$ is **open** if every point is interior, **closed** if it contains its boundary points.
- An open set is **connected** if any two of its points can be joined by a polygonal path in the set. An open connected set is a **domain**; a domain with none, some or all of its boundary points is a **region**.
- $S$ is **bounded** if it lies in some disc $|z| < R$.

The disc $|z| < 1$, the annulus $1 < |z| < 2$ and the punctured plane $z \ne 0$ are domains; whether a domain has holes becomes decisive in Module 2.

### Functions of a complex variable

A **function** $w = f(z)$ assigns to each $z$ in a set $S$ a complex number. Writing $z = x + iy$ and $w = u + iv$ splits it into two real functions of $(x, y)$,

$$f(z) = u(x, y) + i\,v(x, y);$$

for $f(z) = z^2$, $u = x^2 - y^2$ and $v = 2xy$. Since domain and range are both planes, a complex function is visualised as a **mapping**, not a graph: under $w = z^2 = r^2 e^{2i\theta}$ the first quadrant opens out to the upper half-plane. Mappings are the subject of Lesson m3-l2.

### Limits and continuity

The statement $\lim_{z\to z_0} f(z) = w_0$ means that for every $\varepsilon > 0$ there exists $\delta > 0$ such that $0 < |z - z_0| < \delta$ implies $|f(z) - w_0| < \varepsilon$. Because the deleted disc is two-dimensional, $z$ may approach $z_0$ along any path and the limit must be the same along all of them; the real line has only two directions.

Limits may be computed componentwise: with $f = u + iv$ and $w_0 = u_0 + iv_0$,

$$\lim_{z\to z_0} f(z) = w_0 \iff u \to u_0 \ \text{and}\ v \to v_0 \ \text{as}\ (x, y) \to (x_0, y_0),$$

because $|u - u_0|, |v - v_0| \le |f - w_0| \le |u - u_0| + |v - v_0|$. Limits of sums, products and quotients obey the real-variable laws.

$f$ is **continuous** at $z_0$ if $\lim_{z\to z_0} f(z) = f(z_0)$. Polynomials and compositions of continuous functions are continuous. A continuous function on a closed bounded region attains a maximum modulus, mirroring the extreme value theorem of Real Analysis Lesson m2-l2; this is needed for the maximum modulus principle in Lesson m2-l2.

### The point at infinity

Adjoining a single **point at infinity** gives the **extended complex plane** $\hat{\mathbb{C}} = \mathbb{C} \cup \{\infty\}$, whose neighbourhoods of $\infty$ are the exteriors of large discs. The **Riemann sphere** realises this concretely: stereographic projection from the north pole of a sphere resting on the plane matches points of the plane to points of the sphere, with the north pole corresponding to $\infty$. Limits involving infinity reduce to finite ones via $z \mapsto 1/z$:

$$\lim_{z\to z_0} f(z) = \infty \iff \lim_{z\to z_0} \frac{1}{f(z)} = 0, \qquad \lim_{z\to\infty} f(z) = w_0 \iff \lim_{z\to 0} f(1/z) = w_0.$$

Möbius transformations (Lesson m3-l2) are naturally bijections of the Riemann sphere.

## Key Ideas

- **Field structure**: $\mathbb{C}$ is a field; division uses the conjugate, $1/z = \bar z/|z|^2$.
- **Modulus**: $|z_1 z_2| = |z_1||z_2|$, $|z_1 + z_2| \le |z_1| + |z_2|$, $\big||z_1| - |z_2|\big| \le |z_1 - z_2|$.
- **Exponential form**: $z = re^{i\theta}$ turns multiplication into adding arguments and scaling moduli.
- **De Moivre and roots**: $(\cos\theta + i\sin\theta)^n = \cos n\theta + i\sin n\theta$; a non-zero number has exactly $n$ equally spaced $n$-th roots.
- **Domains**: open connected sets, the natural setting for analytic functions and the Cauchy theorems.
- **Path-independent limits**: a complex limit must agree along every path; componentwise evaluation reduces it to two real limits.

## Worked Examples

### Example 1 — A high power via polar form

Compute $(1 + i)^{10}$.

**Solution.** Since $|1 + i| = \sqrt 2$ and $\operatorname{Arg}(1 + i) = \pi/4$, $1 + i = \sqrt 2\,e^{i\pi/4}$. By de Moivre,

$$(1 + i)^{10} = (\sqrt 2)^{10} e^{i\,10\pi/4} = 32\,e^{i\,5\pi/2} = 32\,e^{i\pi/2} = 32i.$$

Check: $(1 + i)^{10} = (2i)^5 = 32i$.

### Example 2 — Cube roots of a complex number

Find all solutions of $w^3 = -8i$.

**Solution.** Write $-8i = 8e^{-i\pi/2}$, so $r = 8$, $\theta = -\pi/2$ and

$$w_k = 2\exp\!\left[i\left(-\frac{\pi}{6} + \frac{2k\pi}{3}\right)\right], \qquad k = 0, 1, 2.$$

giving $w_0 = \sqrt 3 - i$, $w_1 = 2i$ and $w_2 = -\sqrt 3 - i$ at arguments $-\pi/6$, $\pi/2$ and $7\pi/6$.

Check $k = 1$: $(2i)^3 = -8i$. Check $k = 0$: $(\sqrt 3 - i)^2 = 2 - 2\sqrt 3\,i$, and $(2 - 2\sqrt 3\,i)(\sqrt 3 - i) = -8i$. The roots form an equilateral triangle on $|w| = 2$.

### Example 3 — A limit that exists and one that does not

Determine whether $\lim_{z\to 0}\bar z/z$ and $\lim_{z\to 0}|z|^2/z$ exist.

**Solution.** For $f(z) = \bar z/z$, along the real axis $z = x$ gives $f = 1$, while along the imaginary axis $z = iy$ gives $f = -iy/(iy) = -1$. The paths disagree, so the limit does not exist; in polar form $\bar z/z = e^{-2i\theta}$ depends only on direction.

For $g(z) = |z|^2/z = \bar z$ (for $z \ne 0$), $|g(z) - 0| = |z|$, so $\delta = \varepsilon$ works in the definition and $\lim_{z\to 0} g(z) = 0$. The two functions differ only by a factor of $|z|$, yet one has a limit and the other not: the vanishing factor damps the direction-dependence, which is exactly what the Cauchy–Riemann equations of Lesson m1-l2 detect.

## Common Misconceptions

- **"$\sqrt{-1}$ is a single well-defined number, so $\sqrt z$ is a function."** Every non-zero complex number has two square roots and there is no continuous choice on the whole plane. Manipulations such as $\sqrt{-1}\sqrt{-1} = \sqrt 1 = 1$ are invalid because $\sqrt a\sqrt b = \sqrt{ab}$ fails for negative arguments.
- **"Complex numbers can be ordered like real numbers."** No ordering of $\mathbb{C}$ is compatible with the field operations: if $i > 0$ then $i^2 = -1 > 0$, and if $i < 0$ then $-i > 0$ and $(-i)^2 = -1 > 0$. Inequalities are always between moduli or other real quantities.
- **"$\arg z$ is a function of $z$."** The argument is defined only modulo $2\pi$; the principal argument is single-valued but jumps from $\pi$ to $-\pi$ across the negative real axis, the root of most errors with logarithms and roots.
- **"If the limit agrees along the real and imaginary axes, it exists."** Agreement along two paths is necessary, not sufficient: $xy/(x^2 + y^2)$ vanishes along both axes yet equals $1/2$ along $y = x$.

## Connections

- Phasors in Electricity and Magnetism and Waves and Optics are complex numbers in exponential form: an alternating current $I_0\cos(\omega t + \phi)$ is the real part of $I_0 e^{i\phi}e^{i\omega t}$, and impedances combine as complex numbers.
- The roots of unity underlie the discrete Fourier transform of Numerical Methods; the identity $\sum_k \omega^k = 0$ is the orthogonality relation that makes the transform invertible.
- The wavefunction of Introduction to Quantum Mechanics is complex-valued: $|\psi|^2 = \psi\bar\psi$ is the probability density and the phase $\arg\psi$ carries interference information.
- Path-independence of limits anticipates the rigidity of analytic functions: a function differentiable on a domain is determined everywhere by its values on any small disc.

## Quick Check

1. Write $z = -1 + i\sqrt 3$ in exponential form and compute $z^6$.
2. Prove that $|z_1 - z_2| \ge \big||z_1| - |z_2|\big|$ and explain where such a bound is used.
3. Find the four fourth roots of $-16$ and state their sum.
4. Is the set $\{z : 0 < |z - 1| \le 2\}$ open, closed, neither, or both? Is it a domain?
5. Does $\lim_{z\to 0}(\operatorname{Re} z)^2/|z|^2$ exist? Justify by considering two paths.

## Takeaway

- Complex numbers form a field whose geometry is the plane: conjugation is reflection, modulus is distance, multiplication is rotation with scaling.
- The exponential form and de Moivre's theorem make powers and roots mechanical; every non-zero number has exactly $n$ distinct $n$-th roots.
- Domains (open connected sets) are the stage for the theorems of this course; simple connectivity matters from Module 2.
- A complex limit must be independent of the path of approach, a far stronger requirement than in one real variable.
- The Riemann sphere makes infinity an ordinary point for limits and mappings.
