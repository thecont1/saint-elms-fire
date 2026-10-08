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
lessonId: calculus-of-several-variables-m2-l1
lessonName: Double Integrals, Fubini's Theorem and Polar Coordinates
lessonNumber: 4
moduleNumber: 2
semesterNumber: 5
difficulty: intermediate
estimatedStudyMinutes: 55
releaseOrder: 4
prerequisites:
  - calculus-of-several-variables-m1-l3
  - integral-calculus-m2-l1
  - integral-calculus-m2-l2
learningObjectives:
  - Define the double integral as a limit of Riemann sums and interpret it as volume, area, mass or total charge.
  - Evaluate double integrals over rectangles and over Type I and Type II regions as iterated integrals, using Fubini's theorem.
  - Reverse the order of integration by redrawing the region, and recognise when this turns an impossible integral into an elementary one.
  - Convert double integrals to polar coordinates with $dA = r\,dr\,d\theta$ and use this to evaluate the Gaussian integral $\int_{-\infty}^{\infty} e^{-x^2}dx = \sqrt{\pi}$.
concepts:
  - Double integral as a Riemann sum
  - Fubini's theorem
  - Iterated integral
  - Type I and Type II regions
  - Reversing the order of integration
  - Polar area element
  - Gaussian integral
tags:
  - mathematics
  - calculus-of-several-variables
  - double-integrals
  - polar-coordinates
sourceType: authored-courseware
status: in-review
assessmentHints:
  - conceptual
  - derivation
  - problem-solving
  - short-answer
***

# Double Integrals, Fubini's Theorem and Polar Coordinates

## Overview

Module 1 differentiated functions of several variables; Module 2 integrates them. A double integral adds up $f(x,y)\,dA$ over a region of the plane, giving the volume under a surface, the mass of a lamina with variable density, or the total charge on a plate. This lesson defines the double integral through Riemann sums, then states Fubini's theorem, which reduces it to two ordinary integrals performed one after the other. Most of the craft lies in describing the region correctly: the limits of the inner integral may depend on the outer variable, and reversing the order of integration can turn an intractable integral into an easy one. Regions with circular symmetry call for polar coordinates, where the area element becomes $r\,dr\,d\theta$; the most celebrated consequence is the evaluation of the Gaussian integral, which underlies the normal distribution and the Maxwell speed distribution.

## Learning Path

- **What you should already know**: the definite integral and the fundamental theorem of calculus (integral-calculus Lesson m2-l1); areas and physical applications of single integrals (integral-calculus Lesson m2-l2); the polar map and its Jacobian determinant $r$ (Lesson m1-l2).
- **What this lesson adds**: the double integral; Fubini's theorem; Type I and Type II regions; reversal of order; polar coordinates in double integrals.
- **What later lessons this will unlock**: general change of variables and triple integrals in cylindrical and spherical coordinates (Lesson m2-l2); mass, centroids and moments of inertia (Lesson m2-l3); Green's theorem, which converts a double integral into a line integral (Lesson m3-l2).

## Core Explanation

### The double integral as a limit of sums

Let $f$ be bounded on the rectangle $R = [a,b]\times[c,d]$. Partition $R$ into small rectangles $R_{ij}$ of area $\Delta A_{ij}$, pick a sample point $(x_{ij}^*, y_{ij}^*)$ in each, and form the **Riemann sum** $\sum_{i,j} f(x_{ij}^*, y_{ij}^*)\,\Delta A_{ij}$. If these sums approach a common limit as the largest sub-rectangle shrinks to zero, independently of the sample points, that limit is the **double integral**

$$\iint_R f(x,y)\,dA = \lim_{\max \Delta A_{ij}\to 0}\ \sum_{i,j} f(x_{ij}^*, y_{ij}^*)\,\Delta A_{ij}.$$

Every continuous function on $R$ is integrable. If $f \ge 0$ the integral is the volume of the solid between the graph and the $xy$-plane; with $f = 1$ it is the area of the region; with $f = \sigma(x,y)$, a surface density, it is the mass or charge. The integral is linear, additive over regions that overlap only on boundaries, and monotone. Dividing by the area gives the **average value** $\bar f = \frac{1}{A}\iint_R f\,dA$.

### Fubini's theorem

Computing a limit of double sums directly is impractical. Instead, add the sum column by column: for fixed $x$, the inner sum over $y$ approximates $\int_c^d f(x,y)\,dy$, and the outer sum over $x$ then approximates an integral of that result.

**Fubini's theorem.** If $f$ is continuous on $R = [a,b]\times[c,d]$, then

$$\iint_R f\,dA = \int_a^b\left(\int_c^d f(x,y)\,dy\right)dx = \int_c^d\left(\int_a^b f(x,y)\,dx\right)dy.$$

Geometrically, the volume is the integral of cross-sectional areas, exactly as in the slicing method of single-variable calculus. In the inner integral the outer variable is held constant, which is why partial-derivative thinking from Module 1 transfers directly. For a product $f(x,y) = g(x)h(y)$ on a rectangle the integral factorises: $\iint_R g(x)h(y)\,dA = \left(\int_a^b g\,dx\right)\left(\int_c^d h\,dy\right)$.

The hypothesis matters. For $f = (x^2 - y^2)/(x^2 + y^2)^2$ on $[0,1]^2$, which is unbounded near the origin, the inner integral $\int_0^1 f\,dy = 1/(1+x^2)$ gives $\int_0^1 \frac{dx}{1+x^2} = \frac{\pi}{4}$, while the opposite order gives $-\frac{\pi}{4}$. Fubini's theorem extends to discontinuous or unbounded integrands only when $\iint |f|\,dA$ is finite, which fails here.

### General regions

Most regions are not rectangles. A **Type I region** lies between two graphs over an interval in $x$,

$$D = \{(x,y) : a \le x \le b,\ g_1(x) \le y \le g_2(x)\}, \qquad \iint_D f\,dA = \int_a^b\int_{g_1(x)}^{g_2(x)} f(x,y)\,dy\,dx,$$

and a **Type II region** lies between two graphs over an interval in $y$,

$$D = \{(x,y) : c \le y \le d,\ h_1(y) \le x \le h_2(y)\}, \qquad \iint_D f\,dA = \int_c^d\int_{h_1(y)}^{h_2(y)} f(x,y)\,dx\,dy.$$

The rule for setting limits is: the outer limits must be constants; the inner limits may depend on the outer variable. A reliable method is to sketch the region, draw a representative line in the direction of the inner integration, and read off where it enters and leaves the region.

**Reversing the order.** Many regions are of both types. Converting from one description to the other requires redrawing the region, never merely swapping the limits. If the inner integral has no elementary antiderivative, as with $\int e^{y^2}dy$ or $\int \frac{\sin y}{y}dy$, reversing the order often makes the integral elementary (Example 2).

### Polar coordinates

Regions bounded by circles, and integrands involving $x^2 + y^2$, are awkward in Cartesian form. In polar coordinates $x = r\cos\theta$, $y = r\sin\theta$, a **polar rectangle** $r_1 \le r \le r_2$, $\theta_1 \le \theta \le \theta_2$ is an annular sector. Its area is

$$\tfrac12(r_2^2 - r_1^2)\,\Delta\theta = \bar r\,\Delta r\,\Delta\theta, \qquad \bar r = \tfrac12(r_1 + r_2),\ \Delta r = r_2 - r_1.$$

The small cell is nearly a rectangle of sides $\Delta r$ and $r\,\Delta\theta$, so the area element is

$$dA = r\,dr\,d\theta,$$

the same factor $r$ found as the Jacobian determinant of the polar map in Lesson m1-l2. Thus

$$\iint_D f(x,y)\,dA = \int_{\alpha}^{\beta}\int_{h_1(\theta)}^{h_2(\theta)} f(r\cos\theta, r\sin\theta)\,r\,dr\,d\theta.$$

Forgetting the $r$ is the most common error in the subject; it is the reason a thin ring at large radius contributes more area than one near the centre.

### The Gaussian integral

Let $I = \int_{-\infty}^{\infty} e^{-x^2}dx$. No elementary antiderivative exists, but squaring and using two variables,

$$I^2 = \int_{-\infty}^{\infty}e^{-x^2}dx\int_{-\infty}^{\infty}e^{-y^2}dy = \iint_{\mathbb{R}^2} e^{-(x^2+y^2)}\,dA = \int_0^{2\pi}\int_0^{\infty} e^{-r^2}\,r\,dr\,d\theta.$$

The factor $r$ makes the radial integral elementary: $\int_0^\infty r e^{-r^2}dr = \tfrac12$. Hence $I^2 = 2\pi\cdot\tfrac12 = \pi$ and

$$\int_{-\infty}^{\infty} e^{-x^2}dx = \sqrt{\pi}.$$

Scaling gives $\int_{-\infty}^{\infty} e^{-ax^2}dx = \sqrt{\pi/a}$, which normalises the Gaussian distribution, the ground state of the quantum harmonic oscillator and the Maxwell–Boltzmann velocity distribution. Because the integrand is positive, Fubini's theorem justifies the manipulation on the unbounded domain.

## Key Ideas

- **Double integral**: limit of Riemann sums $\sum f\,\Delta A$; it gives volume, area, mass or charge depending on $f$.
- **Fubini's theorem**: for continuous $f$ the double integral equals either iterated integral; for unbounded integrands it requires $\iint|f|\,dA < \infty$.
- **Limits of integration**: outer limits constant, inner limits functions of the outer variable, read off from a sketch.
- **Reversing the order** requires redrawing the region and can make an impossible inner integral elementary.
- **Polar coordinates**: $dA = r\,dr\,d\theta$; the factor $r$ is the Jacobian of the polar map.
- **Gaussian integral**: $\int_{-\infty}^{\infty}e^{-x^2}dx = \sqrt\pi$, obtained by squaring and passing to polar coordinates.

## Worked Examples

### Example 1 — Volume under a paraboloid

Find the volume of the solid bounded by the paraboloid $z = 4 - x^2 - y^2$ and the plane $z = 0$.

**Solution.** The paraboloid meets $z = 0$ on the circle $x^2 + y^2 = 4$, so the region of integration is the disc $r \le 2$. In polar coordinates the height is $4 - r^2$ and

$$V = \int_0^{2\pi}\int_0^{2}(4 - r^2)\,r\,dr\,d\theta = 2\pi\left[2r^2 - \frac{r^4}{4}\right]_0^2 = 2\pi(8 - 4) = 8\pi \approx 25.1.$$

In Cartesian form the same volume is $\int_{-2}^{2}\int_{-\sqrt{4-x^2}}^{\sqrt{4-x^2}}(4 - x^2 - y^2)\,dy\,dx$, which is correct but far more laborious. This solid returns in Lessons m2-l2, m3-l2 and m3-l3.

### Example 2 — Reversing the order of integration

Evaluate $\displaystyle I = \int_0^{\pi}\int_x^{\pi}\frac{\sin y}{y}\,dy\,dx$.

**Solution.** The inner integral has no elementary antiderivative, so redraw the region. The limits say $0 \le x \le \pi$ and $x \le y \le \pi$: the triangle with vertices $(0,0)$, $(0,\pi)$, $(\pi,\pi)$, lying above the line $y = x$. As a Type II region it is $0 \le y \le \pi$, $0 \le x \le y$. Therefore

$$I = \int_0^{\pi}\int_0^{y}\frac{\sin y}{y}\,dx\,dy = \int_0^{\pi}\frac{\sin y}{y}\cdot y\,dy = \int_0^\pi \sin y\,dy = \big[-\cos y\big]_0^\pi = 2.$$

The inner integration over $x$ produced exactly the factor $y$ needed to cancel the troublesome denominator.

### Example 3 — Charge on a non-uniformly charged disc

A disc of radius $R = 0.10$ m carries surface charge density $\sigma(r) = \sigma_0\left(1 - r^2/R^2\right)$ with $\sigma_0 = 2.0\ \mu\text{C m}^{-2}$. Find the total charge and the average surface density.

**Solution.** By circular symmetry,

$$Q = \int_0^{2\pi}\int_0^R \sigma_0\left(1 - \frac{r^2}{R^2}\right)r\,dr\,d\theta = 2\pi\sigma_0\left[\frac{r^2}{2} - \frac{r^4}{4R^2}\right]_0^R = 2\pi\sigma_0\cdot\frac{R^2}{4} = \frac{\pi\sigma_0 R^2}{2}.$$

Numerically,

$$Q = \frac{\pi(2.0\times 10^{-6})(0.10)^2}{2} = 3.1\times 10^{-8}\ \text{C} = 31\ \text{nC}.$$

The average density is $Q/(\pi R^2) = \sigma_0/2 = 1.0\ \mu\text{C m}^{-2}$, half the central value. Omitting the factor $r$ would have given $2\pi\sigma_0(2R/3)$, which has the wrong units: an immediate signal of error.

## Common Misconceptions

- **"To reverse the order, just swap the limits."** The limits describe a region; reversing the order means describing the same region in the other direction, which usually changes every limit. In Example 2, $\int_x^\pi$ and $\int_0^\pi$ became $\int_0^y$ and $\int_0^\pi$.
- **"The order of integration never matters."** It never matters for continuous integrands on bounded regions, but for unbounded integrands without absolute integrability the two orders can disagree ($\pi/4$ versus $-\pi/4$ above).
- **"In polar coordinates $dA = dr\,d\theta$."** The area element is $r\,dr\,d\theta$; the $r$ is the Jacobian and is checked by units, since $dA$ must have dimensions of area.
- **"The outer limits may contain the inner variable."** The result of an iterated integral is a number, so the outer limits must be constants; only inner limits may depend on outer variables.
- **"A double integral is always a volume."** It is a volume only when $f \ge 0$ represents a height; in general it is a weighted sum that may be a mass, a charge, a probability or a negative number.

## Connections

- The Riemann-sum definition generalises real-analysis Lesson m3-l1, and the integrability of continuous functions is proved by the same uniform-continuity argument (real-analysis Lesson m3-l2).
- Numerical double integration applies the trapezoidal and Simpson rules of numerical-methods Lesson m2-l2 in each variable; Fubini's theorem is what justifies nesting one-dimensional rules.
- The Gaussian integral normalises the Maxwell–Boltzmann distribution of thermal-physics-and-statistical-mechanics Lesson m2-l1 and the harmonic-oscillator ground state of introduction-to-quantum-mechanics Lesson m2-l3.
- Total charge on a surface, $Q = \iint \sigma\,dA$, is the first step in computing fields of extended charge distributions in electricity-and-magnetism Lesson m1-l1.
- The surface brightness of a face-on disc galaxy is integrated in polar coordinates to obtain its total luminosity (astrophysics-iv Lesson m1-l2).

## Quick Check

1. Evaluate $\iint_R xy^2\,dA$ over $R = [0,2]\times[1,3]$ in both orders.
2. Sketch the region and reverse the order: $\int_0^1\int_{y^2}^{\sqrt y} f(x,y)\,dx\,dy$.
3. Evaluate $\int_0^1\int_x^1 e^{y^2}\,dy\,dx$ by reversing the order.
4. Use polar coordinates to find the area inside the cardioid $r = 1 + \cos\theta$.
5. Using $\int_{-\infty}^\infty e^{-x^2}dx = \sqrt\pi$, evaluate $\int_0^\infty e^{-3x^2}dx$.

## Takeaway

- The double integral is a limit of Riemann sums and represents any quantity built by adding $f\,dA$ over a region.
- Fubini's theorem turns it into two single integrals; for continuous integrands the order is a matter of convenience.
- Setting limits correctly is a geometric task: sketch, slice, and keep the outer limits constant.
- Polar coordinates use $dA = r\,dr\,d\theta$, and the extra $r$ is both a Jacobian and an essential simplifier.
- Squaring the Gaussian integral and going to polar coordinates gives $\sqrt\pi$, one of the most useful results in physics.
