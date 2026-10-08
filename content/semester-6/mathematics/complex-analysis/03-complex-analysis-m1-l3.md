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
lessonId: complex-analysis-m1-l3
lessonName: Elementary Functions, Multivalued Functions and Branch Cuts
lessonNumber: 3
moduleNumber: 1
semesterNumber: 6
difficulty: intermediate
estimatedStudyMinutes: 55
releaseOrder: 3
prerequisites:
  - complex-analysis-m1-l2
  - real-analysis-m1-l3
  - differential-equations-m2-l1
learningObjectives:
  - Define $e^z$, $\sin z$, $\cos z$, $\sinh z$ and $\cosh z$, and derive their periodicity, derivatives and standard identities.
  - Derive $\log z = \ln|z| + i(\operatorname{Arg} z + 2\pi k)$ and show that the principal logarithm is analytic off the negative real axis.
  - Evaluate complex powers $z^c = e^{c\log z}$ and roots, listing all values and the principal value.
  - Locate branch points and choose branch cuts for functions such as $\sqrt{z^2-1}$ so that they are analytic on a stated domain.
concepts:
  - Complex exponential
  - Complex trigonometric and hyperbolic functions
  - Complex logarithm
  - Principal value
  - Branch point and branch cut
  - Complex powers
  - Inverse trigonometric functions
tags:
  - mathematics
  - complex-analysis
  - elementary-functions
  - branch-cuts
sourceType: authored-courseware
status: in-review
assessmentHints:
  - derivation
  - problem-solving
  - conceptual
  - computational
***

# Elementary Functions, Multivalued Functions and Branch Cuts

## Overview

The exponential, trigonometric, hyperbolic and logarithmic functions of real analysis extend to the complex plane in exactly one analytic way, and the extension reveals their unity: $\sin$ and $\cos$ are combinations of a single exponential, and $\cosh$ is $\cos$ evaluated on the imaginary axis. It also exposes something new. The complex exponential is periodic in the imaginary direction, so its inverse, the logarithm, assigns infinitely many values to each non-zero $z$, and powers and roots inherit this multivaluedness. This lesson defines the elementary functions using the Cauchy–Riemann machinery of Lesson m1-l2, then develops branches, branch points and branch cuts, the apparatus that makes a multivalued function analytic on a chosen domain and is indispensable for the contour integrals of Modules 2 and 3.

## Learning Path

- **What you should already know**: the Cauchy–Riemann equations in Cartesian and polar form (Lesson m1-l2); polar form and roots (Lesson m1-l1); power series of $e^x$, $\sin x$, $\cos x$ (Real Analysis Lesson m1-l3); characteristic equations with complex roots (Differential Equations Lesson m2-l1).
- **What this lesson adds**: the complex exponential, trigonometric and hyperbolic functions; the logarithm and its branches; complex powers; branch points and cuts; inverse trigonometric functions.
- **What later lessons this will unlock**: contour integrals of $1/z$ (Lesson m2-l1); Laurent expansions and singularities (Lesson m2-l3); real integrals with branch cuts and conformal maps such as $z^2$ and $\sqrt z$ (Lessons m3-l1 and m3-l2).

## Core Explanation

### The exponential function

Define $e^z = e^x(\cos y + i\sin y)$ for $z = x + iy$. Lesson m1-l2, Example 2 showed that this is entire with $\frac{d}{dz}e^z = e^z$, and it reduces to the real exponential when $y = 0$. Setting $z = i\theta$ gives Euler's formula $e^{i\theta} = \cos\theta + i\sin\theta$, which justifies the exponential form of Lesson m1-l1. The key properties are:

- $e^{z_1 + z_2} = e^{z_1}e^{z_2}$, proved by multiplying the polar forms; $|e^z| = e^x$ and $\arg e^z = y + 2\pi k$.
- $e^z \ne 0$ for every $z$, since $|e^z| = e^x > 0$.
- $e^{z + 2\pi i} = e^z$: the function is **periodic** with period $2\pi i$. Consequently $e^{z_1} = e^{z_2}$ iff $z_1 - z_2 = 2\pi i k$.

Hence $e^z$ is not one-to-one on $\mathbb{C}$, but it maps each strip $-\pi < y \le \pi$ one-to-one onto $\mathbb{C}\setminus\{0\}$: vertical lines go to rays and horizontal lines to circles.

### Trigonometric and hyperbolic functions

Euler's formula motivates the definitions

$$\sin z = \frac{e^{iz} - e^{-iz}}{2i}, \qquad \cos z = \frac{e^{iz} + e^{-iz}}{2}, \qquad \sinh z = \frac{e^z - e^{-z}}{2}, \qquad \cosh z = \frac{e^z + e^{-z}}{2}.$$

All four are entire, with $(\sin z)' = \cos z$, $(\cos z)' = -\sin z$, $(\sinh z)' = \cosh z$, $(\cosh z)' = \sinh z$, and all the real identities survive because they are algebraic consequences of the exponential law: $\sin^2 z + \cos^2 z = 1$, $\sin(z_1 + z_2) = \sin z_1\cos z_2 + \cos z_1\sin z_2$, and so on. Also $\cos(iz) = \cosh z$ and $\sin(iz) = i\sinh z$. Separating real and imaginary parts,

$$\sin(x + iy) = \sin x\cosh y + i\cos x\sinh y, \qquad \cos(x+iy) = \cos x\cosh y - i\sin x\sinh y.$$

From these, $|\sin z|^2 = \sin^2 x + \sinh^2 y$, so $\sin z$ vanishes only at the real zeros $z = n\pi$, but is **unbounded**: $|\sin(iy)| = \sinh y \to \infty$. Liouville's theorem (Lesson m2-l2) shows that no non-constant entire function can be bounded.

### The logarithm

We seek $w$ with $e^w = z \ne 0$. Writing $w = u + iv$, $e^u = |z|$ and $v = \arg z$, so

$$\log z = \ln|z| + i\arg z = \ln|z| + i(\operatorname{Arg} z + 2\pi k), \qquad k \in \mathbb{Z}.$$

The logarithm is **multivalued**: each $z \ne 0$ has infinitely many logarithms differing by $2\pi i$. The **principal value** $\operatorname{Log} z = \ln|z| + i\operatorname{Arg} z$, with $\operatorname{Arg} z \in (-\pi, \pi]$, is single-valued. For example $\operatorname{Log}(-1) = i\pi$ and $\log(-1) = i\pi(2k+1)$.

To differentiate, work in polar form with $\theta \in (-\pi, \pi)$: $u = \ln r$, $v = \theta$ satisfy $ru_r = 1 = v_\theta$ and $u_\theta = 0 = -rv_r$, with continuous partials. So $\operatorname{Log} z$ is analytic on $\mathbb{C}\setminus(-\infty, 0]$ and, by the polar formula of Lesson m1-l2,

$$\frac{d}{dz}\operatorname{Log} z = e^{-i\theta}\left(\frac{1}{r}\right) = \frac{1}{z}.$$

$\operatorname{Log}$ is discontinuous across the negative real axis: the imaginary part is $+\pi$ just above it and $-\pi$ just below. The identity $\log(z_1z_2) = \log z_1 + \log z_2$ holds as an equality of sets of values, but fails for principal values: $\operatorname{Log}(-1\cdot -1) = 0 \ne 2i\pi = \operatorname{Log}(-1) + \operatorname{Log}(-1)$.

### Branches, branch points and branch cuts

A **branch** of a multivalued function $F$ is a single-valued analytic function $f$ on a domain $D$ with $f(z)$ always one of the values of $F(z)$. A **branch cut** is a curve removed from the plane so that a branch exists on what remains, and a **branch point** is a point common to every branch cut, around which the function changes value when $z$ traverses a small closed loop. For $\log z$, the origin is a branch point: as $z$ circles $0$ once anticlockwise, $\arg z$ increases by $2\pi$ and $\log z$ gains $2\pi i$. The point at infinity is also a branch point. Any curve from $0$ to $\infty$ is a legitimate cut; the **principal branch** uses the negative real axis, while contour integration often uses the positive real axis ($0 < \theta < 2\pi$). The **Riemann surface** of $\log z$ is a spiral staircase of infinitely many sheets glued along the cuts, on which $\log$ is single-valued.

This plot of $\operatorname{Im}\log z$ around the unit circle shows the principal value jumping by $2\pi$ at $\theta = \pi$, while the continued value rises steadily.

```python
import numpy as np, matplotlib.pyplot as plt
t = np.linspace(-np.pi, 3*np.pi, 800)           # angle travelled on |z| = 1
z = np.exp(1j*t)
plt.plot(t, np.angle(z), label="principal Arg z (jumps)")
plt.plot(t, t, "--", label="continued arg z (a branch of log)")
plt.xlabel("angle"); plt.ylabel("Im log z"); plt.legend(); plt.show()
```

### Complex powers and roots

For $c \in \mathbb{C}$ and $z \ne 0$ define

$$z^c = e^{c\log z} = \exp\big[c(\ln|z| + i\operatorname{Arg} z + 2\pi ik)\big].$$

If $c = n$ is an integer, $e^{2\pi i nk} = 1$ and there is one value. If $c = p/q$ in lowest terms there are exactly $q$ values, reproducing the roots of Lesson m1-l1: $z^{1/2} = \pm\sqrt{|z|}\,e^{i\operatorname{Arg}z/2}$. Otherwise there are infinitely many. For a chosen branch of $\log$, $z^c$ is analytic wherever that branch is, with $\frac{d}{dz}z^c = e^{c\log z}\cdot c/z = cz^{c-1}$ using the same branch. For $\sqrt z$, circling the origin once swaps the two values and circling twice restores them.

When several branch points occur, the cut can sometimes be shortened. The function $\sqrt{z^2 - 1} = \sqrt{z-1}\sqrt{z+1}$ has branch points at $\pm1$. A loop around $+1$ alone flips the sign, as does a loop around $-1$ alone, but a large loop enclosing both flips it twice, leaving the function unchanged. A cut joining $-1$ to $1$ therefore suffices, and a single-valued branch exists on $\mathbb{C}\setminus[-1,1]$. 

### Inverse trigonometric functions

Because $\sin z$ is a rational function of $e^{iz}$, its inverse is a logarithm. If $w = \sin z$ and $t = e^{iz}$, then $t - 1/t = 2iw$, i.e. $t^2 - 2iwt - 1 = 0$, so $t = iw + (1 - w^2)^{1/2}$ and

$$\arcsin w = -i\log\!\big[iw + (1 - w^2)^{1/2}\big].$$

Both factors contribute multivaluedness, with branch points at $w = \pm1$. Similarly $\arctan w = \frac{1}{2i}\log\frac{1 + iw}{1 - iw}$, with branch points at $\pm i$.

## Key Ideas

- **Complex exponential**: $e^z = e^x(\cos y + i\sin y)$ is entire, equals its own derivative, never vanishes, and has period $2\pi i$.
- **Trigonometric functions**: $\sin z$ and $\cos z$ are entire and unbounded; $\cos(iz) = \cosh z$ unifies trigonometric and hyperbolic functions.
- **Logarithm**: $\log z = \ln|z| + i(\operatorname{Arg} z + 2\pi k)$ is infinitely valued; the principal $\operatorname{Log}$ is analytic off $(-\infty, 0]$ with derivative $1/z$.
- **Branch point versus branch cut**: a branch point is intrinsic (the function changes value around it); a cut is a choice that makes a branch single-valued.
- **Complex powers**: $z^c = e^{c\log z}$ has $q$ values when $c = p/q$ and infinitely many when $c$ is irrational or non-real.
- **Inverse functions**: $\arcsin$ and $\arctan$ are logarithms of algebraic expressions and inherit their branch structure.

## Worked Examples

### Example 1 — Solving $\sin z = 2$

Find all complex $z$ with $\sin z = 2$.

**Solution.** Put $t = e^{iz}$: $t - 1/t = 4i$, so $t^2 - 4it - 1 = 0$ and

$$t = \frac{4i \pm\sqrt{-16 + 4}}{2} = i(2 \pm\sqrt 3).$$

Both roots have argument $\pi/2$ and modulus $2\pm\sqrt3$. Then $iz = \ln(2\pm\sqrt3) + i(\pi/2 + 2\pi k)$, so $z = \pi/2 + 2\pi k - i\ln(2\pm\sqrt3)$. Since $(2+\sqrt3)(2-\sqrt3) = 1$,

$$z = \frac{\pi}{2} + 2\pi k \pm i\ln(2+\sqrt3), \qquad \ln(2+\sqrt3) \approx 1.3170.$$

Check: $\sin(\pi/2 + iy) = \cosh y$, and $\cosh\ln(2+\sqrt3) = \tfrac12[(2+\sqrt3) + (2-\sqrt3)] = 2$.

### Example 2 — Values of complex powers

Find all values of $i^i$ and the principal value of $(1+i)^{1+i}$.

**Solution.** With $i = e^{i\pi/2}$, $\log i = i(\pi/2 + 2\pi k)$, so $i^i = \exp[i\cdot i(\pi/2 + 2\pi k)] = e^{-\pi/2 - 2\pi k}$. All values are real; the principal value is $e^{-\pi/2} \approx 0.2079$.

For the second, $\operatorname{Log}(1+i) = \tfrac12\ln2 + i\pi/4$, so

$$(1+i)^{1+i} = \exp\!\big[(1+i)(\tfrac12\ln2 + i\tfrac\pi4)\big] = \exp\!\big[(\tfrac12\ln2 - \tfrac\pi4) + i(\tfrac12\ln2 + \tfrac\pi4)\big].$$

The modulus is $\sqrt2\,e^{-\pi/4} \approx 0.6448$ and the argument is $1.1320$ rad, giving $\approx 0.274 + 0.584i$. The $k$-th value is the principal value times $e^{-2\pi k}$, since $\exp[(1+i)2\pi ik] = e^{-2\pi k}$.

### Example 3 — A branch of $\sqrt{z^2-1}$

Define $f(z) = z\sqrt{1 - 1/z^2}$ with the principal square root. Show that $f$ is a branch of $\sqrt{z^2-1}$ analytic on $\mathbb{C}\setminus[-1,1]$, and find $f(2i)$ and $f(-2)$.

**Solution.** Clearly $f(z)^2 = z^2(1 - 1/z^2) = z^2 - 1$. The principal root is analytic unless its argument lies in $(-\infty, 0]$, i.e. unless $1 - 1/z^2 \le 0$, i.e. $1/z^2 \ge 1$, i.e. $z^2 \in (0, 1]$, i.e. $z \in [-1,1]\setminus\{0\}$; the point $z=0$ is excluded by the factor $1/z^2$. So $f$ is analytic exactly on $\mathbb{C}\setminus[-1,1]$, and $f(z)\sim z$ at infinity.

At $z = 2i$: $1/z^2 = -1/4$, so $f(2i) = 2i\sqrt{5/4} = i\sqrt5$; check $(i\sqrt5)^2 = -5 = (2i)^2 - 1$. At $z = -2$: $f(-2) = -2\sqrt{3/4} = -\sqrt3$, whereas $f(2) = +\sqrt3$: this branch is odd, $f(-z) = -f(z)$. The other branch is $-f$.

## Common Misconceptions

- **"$\log z$ is a function, and $\operatorname{Log}(z_1z_2) = \operatorname{Log}z_1 + \operatorname{Log}z_2$."** The logarithm is infinitely valued; the sum rule holds only modulo $2\pi i$. For principal values it fails whenever the arguments add outside $(-\pi,\pi]$.
- **"$e^z$ is one-to-one, so it has a unique inverse."** Its period $2\pi i$ means $e^{z_1} = e^{z_2}$ whenever $z_1 - z_2 \in 2\pi i\mathbb{Z}$; inverses need a choice of branch.
- **"$|\sin z| \le 1$ and $|\cos z| \le 1$ for all $z$."** On the imaginary axis $\cos(iy) = \cosh y$ grows without bound.
- **"The branch cut is a feature of the function."** Only the branch point is intrinsic; moving the cut changes which branch is described, not the underlying function.

## Connections

- Plane waves $e^{i(kx - \omega t)}$ in Waves and Optics are complex exponentials; a complex wavenumber $k = k_r + i\kappa$ produces the damping $|e^{ikx}| = e^{-\kappa x}$ seen in absorbing media.
- Solutions $e^{(\alpha\pm i\beta)t}$ of constant-coefficient ODEs (Differential Equations Lesson m2-l1) are decaying sinusoids via Euler's formula.
- In Introduction to Quantum Mechanics the tunnelling wavefunction $e^{i\kappa x}$ with imaginary $\kappa$ becomes the evanescent $e^{-|\kappa|x}$, and $\cosh$/$\sinh$ describe the barrier region; the same continuation links oscillatory and exponential solutions.
- Square-root branch points appear in the dispersion relations of waves in plasmas and waveguides; the branch is chosen so the solution decays, as in Lesson m3-l1.

## Quick Check

1. Show that $e^{\bar z} = \overline{e^z}$ and find all $z$ with $e^z = -2$.
2. Find $\operatorname{Log}(-1 - i)$ and all values of $\log(-1-i)$.
3. Prove that $\cos(x + iy) = \cos x\cosh y - i\sin x\sinh y$ and find all zeros of $\cos z$.
4. Compute all values of $(-8)^{1/3}$ and the principal value of $(-8)^{1/3}$.
5. Where is $\operatorname{Log}(z^2+1)$ analytic if the principal branch of $\operatorname{Log}$ is used?

## Takeaway

- The complex exponential is entire, $2\pi i$-periodic and never zero; trigonometric and hyperbolic functions are its combinations, and they are unbounded off the real axis.
- The logarithm is infinitely valued; $\operatorname{Log}$ is analytic on the plane minus the negative real axis, with $\operatorname{Log}'(z) = 1/z$.
- Complex powers are defined by $z^c = e^{c\log z}$ and have $q$, or infinitely many, values depending on $c$.
- A branch point is intrinsic and a branch cut is a choice; a cut between two branch points can sometimes replace one through infinity.
- Inverse trigonometric functions are logarithms of algebraic expressions, with branch points where the expression degenerates.
