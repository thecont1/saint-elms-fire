***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-2
semesterName: Semester 2
subjectId: mathematics
subjectName: Mathematics
courseId: introductory-algebra
courseName: Introductory Algebra
moduleId: introductory-algebra-module-1
moduleName: Sets, Mappings, and Elementary Number Systems
lessonId: introductory-algebra-m1-l3
lessonName: Complex Numbers — Algebraic and Geometric Aspects
lessonNumber: 3
moduleNumber: 1
semesterNumber: 2
difficulty: intermediate
estimatedStudyMinutes: 45
releaseOrder: 3
prerequisites:
  - introductory-algebra-m1-l2
learningObjectives:
  - Perform addition, subtraction, multiplication, and division of complex numbers.
  - Convert between Cartesian, polar, and exponential forms of a complex number.
  - Apply Euler's formula and De Moivre's theorem to compute powers and roots.
concepts:
  - Complex number
  - Real and imaginary parts
  - Modulus and argument
  - Euler's formula
  - De Moivre's theorem
  - Complex conjugate
tags:
  - mathematics
  - algebra
  - complex-numbers
  - trigonometry
sourceType: authored-courseware
assessmentHints:
  - conceptual
  - derivation
  - problem-solving
  - short-answer
***

# Complex Numbers — Algebraic and Geometric Aspects

## Overview

The complex numbers are the natural extension of the reals that allows every polynomial equation to have a solution. The lesson develops the algebraic structure of the complex numbers: addition, multiplication, division, the conjugate, and the modulus. The lesson then introduces the geometric representation as points in the plane and the polar/exponential form, and derives Euler's formula $e^{i \theta} = \cos \theta + i \sin \theta$ and De Moivre's theorem for computing powers and roots. The lesson closes with applications: the fundamental theorem of algebra, the phasor representation of AC circuits, and the complex representation of waves. The lesson is the foundation of complex analysis, signal processing, and quantum mechanics.

## Learning Path

- **What you should already know**: the real number system (Lesson m1-l2); the basics of trigonometry (sine, cosine, the unit circle); the exponential function.
- **What this lesson adds**: the algebraic and geometric structure of the complex numbers; the polar and exponential forms; Euler's formula and De Moivre's theorem; the fundamental theorem of algebra; applications in physics.
- **What later lessons this will unlock**: matrices with complex entries in Module 2; complex analysis in later courses; the phasor method in electronics and the wavefunction in quantum mechanics.

## Core Explanation

### Definition of the complex numbers

The **complex numbers** $\mathbb{C}$ are the set of expressions of the form $a + b i$ with $a, b \in \mathbb{R}$ and $i^2 = -1$. The number $a$ is the **real part** and $b$ is the **imaginary part**; we write $a = \text{Re}(z)$, $b = \text{Im}(z)$.

The set $\mathbb{C}$ is a **field**: addition, subtraction, multiplication, and division (by a non-zero complex number) are defined, and the usual algebraic identities hold (associativity, commutativity, distributivity). The real numbers are the subset $\{a + 0 i : a \in \mathbb{R}\}$; the pure imaginary numbers are $\{0 + b i : b \in \mathbb{R}\}$.

The complex numbers are closed under the four basic operations and have the property that every polynomial equation with complex coefficients has a complex solution. This is the **fundamental theorem of algebra** (Gauss, 1799): every non-constant polynomial with complex coefficients has a complex root.

### Addition and multiplication

Addition is component-wise: $(a + b i) + (c + d i) = (a + c) + (b + d) i$.

Multiplication uses the distributive law and $i^2 = -1$:
$$(a + b i)(c + d i) = a c + a d i + b c i + b d i^2 = (a c - b d) + (a d + b c) i.$$

So the real part of the product is $a c - b d$ and the imaginary part is $a d + b c$.

### The complex conjugate

The **complex conjugate** of $z = a + b i$ is $\bar z = a - b i$. Conjugation reflects $z$ across the real axis. Properties:

- $\overline{z + w} = \bar z + \bar w$.
- $\overline{z w} = \bar z \bar w$.
- $\overline{\bar z} = z$ (involution).
- $z \bar z = a^2 + b^2 = |z|^2 \ge 0$, with equality iff $z = 0$.

The conjugate is the basis of the formula for the inverse:

$$z^{-1} = \frac{\bar z}{|z|^2}, \quad z \ne 0.$$

The real and imaginary parts of a complex number can be recovered from the number and its conjugate:

$$a = \frac{z + \bar z}{2}, \quad b = \frac{z - \bar z}{2 i}.$$

### The modulus

The **modulus** $|z| = \sqrt{a^2 + b^2}$ is the distance from $z$ to the origin in the complex plane. Properties:

- $|z w| = |z| |w|$.
- $|z / w| = |z| / |w|$ (for $w \ne 0$).
- $|z + w| \le |z| + |w|$ (triangle inequality).
- $||z| - |w|| \le |z - w|$.

The modulus is non-negative and zero only at the origin. The triangle inequality is fundamental in analysis and in bounding errors in numerical computations.

### The argument

The **argument** $\arg(z)$ is the angle from the positive real axis to the line from the origin to $z$, measured counter-clockwise. For $z = a + b i$ with $z \ne 0$:

$$\tan(\arg z) = b / a, \quad \arg z \in (-\pi, \pi] \text{ (principal value)}.$$

For $a > 0$: $\arg z = \arctan(b / a)$. For $a < 0$, $b \ge 0$: $\arg z = \pi + \arctan(b / a)$. For $a < 0$, $b < 0$: $\arg z = -\pi + \arctan(b / a)$. For $z = 0$, the argument is undefined.

The argument is defined modulo $2\pi$: $z$ and $z e^{2 \pi i}$ have the same magnitude and the same point in the plane.

### Polar form

A non-zero complex number can be written in **polar form**:

$$z = r (\cos \theta + i \sin \theta), \quad r = |z|, \quad \theta = \arg z.$$

The polar form makes multiplication and division especially simple:

$$z_1 z_2 = r_1 r_2 (\cos(\theta_1 + \theta_2) + i \sin(\theta_1 + \theta_2)),$$

$$z_1 / z_2 = (r_1 / r_2) (\cos(\theta_1 - \theta_2) + i \sin(\theta_1 - \theta_2)).$$

The modulus multiplies (or divides) and the argument adds (or subtracts). The polar form is the basis of the phasor method in electrical engineering.

### Exponential form and Euler's formula

**Euler's formula** states:

$$e^{i \theta} = \cos \theta + i \sin \theta.$$

The proof is via the Taylor series: $e^{i \theta} = \sum_{n=0}^\infty (i \theta)^n / n!$. Splitting into real and imaginary parts gives the cosine and sine series, respectively.

The exponential form of a complex number is

$$z = r e^{i \theta}, \quad r = |z|, \quad \theta = \arg z.$$

The form is more compact than the polar form and makes the operations even cleaner:

$$z_1 z_2 = r_1 r_2 e^{i (\theta_1 + \theta_2)}, \quad z_1 / z_2 = (r_1 / r_2) e^{i (\theta_1 - \theta_2)}.$$

A special case: $e^{i \pi} = -1$, the famous Euler identity. A more general identity: $e^{i \pi} + 1 = 0$, connecting the five most important constants in mathematics.

### De Moivre's theorem

**De Moivre's theorem** states that for any complex number $z = r e^{i \theta}$ and any integer $n$:

$$z^n = r^n e^{i n \theta} = r^n (\cos n \theta + i \sin n \theta).$$

The proof is by induction or by the exponential form. De Moivre's theorem is the basis of the formula for the $n$-th roots of a complex number:

$$\sqrt[n]{r e^{i \theta}} = r^{1/n} e^{i (\theta + 2 \pi k) / n}, \quad k = 0, 1, \ldots, n - 1.$$

There are $n$ distinct $n$-th roots, evenly spaced on the circle of radius $r^{1/n}$ in the complex plane.

### Roots of unity

The **$n$-th roots of unity** are the solutions of $z^n = 1$:

$$z_k = e^{2 \pi i k / n}, \quad k = 0, 1, \ldots, n - 1.$$

The roots are the vertices of a regular $n$-gon inscribed in the unit circle. They are the eigenvalues of any cyclic operator of order $n$ (e.g. rotations by $2 \pi / n$). The sum of the $n$-th roots of unity is $0$ (for $n > 1$), and the product is $(-1)^{n-1}$.

Roots of unity appear in number theory (cyclotomic polynomials), in Fourier analysis (the discrete Fourier transform), and in the representation theory of finite cyclic groups.

### Geometric interpretation

Geometrically, multiplication by a complex number $z = r e^{i \theta}$ acts on the complex plane as a composition of a scaling by $r$ and a rotation by $\theta$. The transformation preserves angles (it is conformal) and maps circles to circles.

The complex numbers can be visualised as the plane, with the real axis horizontal and the imaginary axis vertical. The unit circle $|z| = 1$ is the set of complex numbers of modulus 1 (the "phase"); the upper half-plane is the set with positive imaginary part.

### Polynomial equations and the fundamental theorem

A complex polynomial is a sum $p(z) = a_n z^n + a_{n-1} z^{n-1} + \ldots + a_0$ with $a_i \in \mathbb{C}$. The **fundamental theorem of algebra** states: every non-constant complex polynomial has a complex root. By induction, every polynomial of degree $n$ can be factored as $a_n (z - r_1)(z - r_2) \cdots (z - r_n)$ for complex numbers $r_i$ (counted with multiplicity). The roots $r_i$ are the solutions of $p(z) = 0$.

The fundamental theorem is the basis of much of algebra and complex analysis. It is the reason why the complex numbers are the natural setting for polynomial equations: over the reals, the polynomial $x^2 + 1$ has no solutions, but over the complex numbers, it has $x = \pm i$.

### Quadratic formula over the complex numbers

The quadratic formula $z = (-b \pm \sqrt{b^2 - 4 a c}) / (2 a)$ works over the complex numbers, with the square root interpreted as one of the two complex square roots of $b^2 - 4 a c$. Even when the discriminant $b^2 - 4 a c$ is negative, the formula gives two complex conjugate roots.

For example, $x^2 + 1 = 0$ has roots $x = \pm i$ (the discriminant is $-4$, and $\sqrt{-4} = \pm 2 i$). The formula works seamlessly in the complex numbers.

### Geometric transformations

- **Translation**: $z \mapsto z + w$ shifts the plane by $w$.
- **Rotation**: $z \mapsto e^{i \theta} z$ rotates the plane by $\theta$ around the origin.
- **Scaling**: $z \mapsto r z$ scales the plane by $r$ from the origin.
- **Conjugation**: $z \mapsto \bar z$ reflects the plane across the real axis.
- **Möbius transformation**: $z \mapsto (a z + b) / (c z + d)$ is a general conformal map (preserves angles) of the extended complex plane to itself.

These transformations are the building blocks of complex dynamics, the geometry of the Riemann sphere, and conformal mapping in physics and engineering.

### Complex numbers in physics

- **AC circuits**: the impedance $Z = R + i X$ combines resistance $R$ and reactance $X$. The voltage $V = I Z$ is the complex Ohm's law. The phase of $V$ relative to $I$ is the argument of $Z$.
- **Waves and phasors**: a sinusoidal wave $A \cos(\omega t - k x + \phi)$ is represented by the complex amplitude $A e^{i \phi}$ (the "phasor"). The operations of adding waves and computing interference reduce to complex arithmetic.
- **Quantum mechanics**: the wavefunction $\psi(x, t)$ is a complex-valued function of position and time. The Schrödinger equation is a complex linear PDE; observables are computed from $|\psi|^2$.
- **Fourier transform**: the Fourier transform of a function is a complex-valued function of frequency. The inverse transform is the integral of the product with $e^{2 \pi i f t}$.
- **Relativity**: the Minkowski metric uses $i c t$ as the fourth coordinate, making the spacetime interval $|ds|^2 = dx^2 + dy^2 + dz^2 - c^2 dt^2$ a complex "length".

The complex numbers are the natural setting for oscillations, waves, and quantum mechanics. The phase (the argument of a complex number) is the central physical quantity.

### Complex numbers in applied mathematics

- **Control theory**: the poles of a transfer function determine the stability of a control system.
- **Signal processing**: the Fourier transform of a signal is a complex function of frequency.
- **Numerical analysis**: complex step differentiation gives a highly accurate estimate of the derivative of a real function.
- **Fractals**: the Mandelbrot set is defined by the iteration $z \to z^2 + c$ in the complex plane.

The complex numbers unify many areas of mathematics and applied science. The "imaginary" name is a historical artifact: the complex numbers are no more imaginary than the negative numbers or the reals.

## Key Ideas

- A complex number is $z = a + b i$ with $a, b \in \mathbb{R}$ and $i^2 = -1$.
- Operations: addition, multiplication, division, conjugate, modulus.
- Polar form: $z = r (\cos \theta + i \sin \theta)$.
- Euler's formula: $e^{i \theta} = \cos \theta + i \sin \theta$.
- De Moivre's theorem: $z^n = r^n e^{i n \theta}$.
- Fundamental theorem of algebra: every polynomial has a complex root.
- Applications: AC circuits, waves, quantum mechanics, signal processing.

## Worked Examples

### Example 1 — Complex arithmetic

Compute $(3 + 2 i)(1 - 4 i)$ and $(2 + 3 i) / (1 + i)$.

**Solution.** $(3 + 2 i)(1 - 4 i) = 3 \cdot 1 + 3 \cdot (-4 i) + 2 i \cdot 1 + 2 i \cdot (-4 i) = 3 - 12 i + 2 i - 8 i^2 = 3 - 10 i + 8 = 11 - 10 i$.

$(2 + 3 i) / (1 + i) = (2 + 3 i)(1 - i) / ((1 + i)(1 - i)) = (2 + 3 i)(1 - i) / 2 = (2 - 2 i + 3 i - 3 i^2) / 2 = (2 + i + 3) / 2 = (5 + i) / 2 = 2.5 + 0.5 i$.

### Example 2 — Polar form

Write $z = 1 + i$ in polar form and compute $z^5$.

**Solution.** $|z| = \sqrt{2}$. $\arg z = \pi / 4$ (since $1 + i$ is on the line $y = x$ in the first quadrant). So $z = \sqrt{2} e^{i \pi / 4}$. By De Moivre: $z^5 = (\sqrt{2})^5 e^{i 5 \pi / 4} = 4 \sqrt{2} e^{i 5 \pi / 4}$. $5 \pi / 4$ is in the third quadrant: $\cos(5 \pi / 4) = -\sqrt{2}/2$, $\sin(5 \pi / 4) = -\sqrt{2}/2$. So $z^5 = 4 \sqrt{2} \cdot (-\sqrt{2}/2 + i \cdot -\sqrt{2}/2) = 4 \cdot (-1 - i) = -4 - 4 i$.

Check: $(1 + i)^2 = 2 i$, $(1 + i)^4 = -4$, $(1 + i)^5 = -4 (1 + i) = -4 - 4 i$. ✓

### Example 3 — Roots of a complex number

Find the cube roots of $1$.

**Solution.** $1 = e^{2 \pi i k}$ for any integer $k$. The cube roots are $e^{2 \pi i k / 3}$ for $k = 0, 1, 2$:

- $k = 0$: $z_0 = 1$.
- $k = 1$: $z_1 = e^{2 \pi i / 3} = \cos(2\pi/3) + i \sin(2\pi/3) = -1/2 + i \sqrt{3}/2$.
- $k = 2$: $z_2 = e^{4 \pi i / 3} = \cos(4\pi/3) + i \sin(4\pi/3) = -1/2 - i \sqrt{3}/2$.

These three roots are the vertices of an equilateral triangle inscribed in the unit circle.

## Common Misconceptions

- **"$i$ is not a real number, so it cannot be a number at all."** $i$ is a number, just as $-1$ is. The complex numbers form a field, just as the reals do.
- **"Complex numbers are not used in physics."** They are used everywhere: AC circuits, quantum mechanics, signal processing, waves, control theory. The "imaginary" name is a historical artifact.
- **"$\sqrt{-1}$ has two values, $\pm i$."** It has two values in the complex numbers, but the principal square root of $-1$ is $i$. The two values are denoted $\pm i$.
- **"The complex numbers are a model of nothing."** They are the smallest algebraically closed field (the fundamental theorem of algebra). They are a model of "all polynomials have roots".
- **"Complex numbers and vectors are the same."** They are not. A complex number has a complex structure (multiplication) that a vector does not have. The complex plane is $\mathbb{R}^2$ with an additional multiplication.

## Connections

- The complex numbers are the natural setting for the fundamental theorem of algebra.
- Euler's formula connects the exponential, sine, and cosine functions; the connection is the basis of the phasor method.
- De Moivre's theorem is the basis of the formula for the roots of a complex number.
- The complex numbers are the foundation of complex analysis (residue theorem, contour integration, conformal mapping).
- In physics, complex numbers unify the treatment of oscillations, waves, and quantum mechanics.
- The complex numbers are the natural setting for the Fourier transform and for signal processing.

## Quick Check

1. Compute $(1 + i)(2 - 3 i)$.
2. Convert $z = -1 + i$ to polar form.
3. State De Moivre's theorem.
4. Compute the fourth roots of $i$.
5. State the fundamental theorem of algebra.

## Takeaway

- A complex number is $a + b i$ with $a, b \in \mathbb{R}$ and $i^2 = -1$.
- The complex numbers are a field and are algebraically closed (fundamental theorem of algebra).
- The polar form $r e^{i \theta}$ and Euler's formula are the keys to multiplication, powers, and roots.
- De Moivre's theorem gives the formula for $z^n$.
- The complex numbers are the natural setting for AC circuits, waves, quantum mechanics, and signal processing.
- The "imaginary" name is a historical artifact; the complex numbers are no less real than the reals.
