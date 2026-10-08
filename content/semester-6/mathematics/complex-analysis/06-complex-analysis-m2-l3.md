***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-6
semesterName: Semester 6
subjectId: mathematics
subjectName: Mathematics
courseId: complex-analysis
courseName: Complex Analysis
moduleId: complex-analysis-module-2
moduleName: Complex Integration and Series
lessonId: complex-analysis-m2-l3
lessonName: Taylor and Laurent Series and the Classification of Singularities
lessonNumber: 6
moduleNumber: 2
semesterNumber: 6
difficulty: advanced
estimatedStudyMinutes: 60
releaseOrder: 6
prerequisites:
  - complex-analysis-m2-l2
  - real-analysis-m1-l3
  - differential-equations-m3-l1
learningObjectives:
  - Prove Taylor's theorem for analytic functions and determine the radius of convergence from the nearest singularity.
  - Derive the Laurent series in an annulus and compute Laurent expansions of rational functions in each annulus.
  - Classify isolated singularities as removable, poles of order $m$, or essential, using Laurent series and limits.
  - Identify the residue as the coefficient $a_{-1}$ and relate it to $\oint_C f\,dz$.
concepts:
  - Radius of convergence
  - Taylor series
  - Zeros of analytic functions
  - Identity principle
  - Laurent series
  - Isolated singularity
  - Pole and essential singularity
tags:
  - mathematics
  - complex-analysis
  - laurent-series
  - singularities
sourceType: authored-courseware
status: in-review
assessmentHints:
  - derivation
  - problem-solving
  - conceptual
  - computational
***

# Taylor and Laurent Series and the Classification of Singularities

## Overview

Cauchy's integral formula converts analyticity into power series. An analytic function equals its Taylor series in every disc inside its domain, so analytic functions are, locally, convergent power series. Near an isolated singularity, where Taylor's theorem fails, the correct tool is the Laurent series, which includes negative powers and is valid in an annulus. The negative powers carry the singular behaviour, and their pattern classifies singularities into removable, poles and essential singularities. The coefficient of $(z-z_0)^{-1}$, the residue, is what contour integrals pick out. This lesson derives both expansions from the Cauchy formula, links the radius of convergence to the singularities in the complex plane, which explains puzzles of real power series, and builds the classification used by the residue calculus in Module 3.

## Learning Path

- **What you should already know**: the integral formula and Cauchy's inequalities, with the identity principle quoted in Lesson m2-l2; convergence tests for series (Real Analysis Lesson m1-l3); power-series solutions of ODEs (Differential Equations Lesson m3-l1).
- **What this lesson adds**: power series and radius of convergence; Taylor's theorem; zeros and the identity principle; Laurent series in annuli; removable singularities, poles and essential singularities.
- **What later lessons this will unlock**: residues and the residue theorem (Lesson m3-l1); behaviour of mappings near poles and zeros (Lesson m3-l2); analytic structure of response functions in the Kramers–Kronig relations (Lesson m3-l3).

## Core Explanation

### Power series and convergence

A series $\sum a_n(z-z_0)^n$ has a **radius of convergence** $R \in [0,\infty]$: it converges absolutely for $|z - z_0| < R$ and diverges for $|z-z_0| > R$, where

$$\frac{1}{R} = \limsup_{n\to\infty}|a_n|^{1/n} = \lim_{n\to\infty}\left|\frac{a_{n+1}}{a_n}\right| \ (\text{if the limit exists}).$$

Within the disc the convergence is uniform on smaller closed discs, so the sum is analytic and may be differentiated and integrated term by term. Hence $e^z$, $\sin z$ and $\cos z$ have the real series with $R = \infty$.

### Taylor's theorem

**Theorem.** If $f$ is analytic in the disc $|z - z_0| < R_0$, then in that disc

$$f(z) = \sum_{n=0}^\infty a_n(z-z_0)^n, \qquad a_n = \frac{f^{(n)}(z_0)}{n!} = \frac{1}{2\pi i}\oint_{C}\frac{f(w)}{(w-z_0)^{n+1}}\,dw.$$

*Proof.* Fix $z$ with $|z-z_0| < r < R_0$ and let $C$ be the circle $|w - z_0| = r$. The integral formula gives $f(z) = \frac{1}{2\pi i}\oint_C\frac{f(w)}{w - z}\,dw$. Expand the kernel as a geometric series, valid because $|z-z_0|/|w-z_0| < 1$ on $C$:

$$\frac{1}{w-z} = \frac{1}{(w-z_0) - (z-z_0)} = \sum_{n=0}^\infty\frac{(z-z_0)^n}{(w-z_0)^{n+1}}.$$

The series converges uniformly in $w \in C$, so we may integrate term by term and recognise the derivative formulae of Lesson m2-l2. $\blacksquare$

Consequently the Taylor series of $f$ about $z_0$ converges in the **largest disc about $z_0$ in which $f$ is analytic**: the radius equals the distance from $z_0$ to the nearest singularity. This explains a classic puzzle: $1/(1+x^2)$ is smooth for all real $x$, yet its Maclaurin series $\sum(-1)^nx^{2n}$ has radius $1$, because of the poles at $z = \pm i$. Similarly $\operatorname{Log}(1+z) = \sum_{n\ge1}(-1)^{n+1}z^n/n$ has $R = 1$ because of the branch point at $z=-1$.

### Zeros and the identity principle

If $f(z_0) = 0$ and $f$ is not identically zero near $z_0$, the Taylor series begins at some $n = m$: $f(z) = (z-z_0)^m g(z)$ with $g$ analytic and $g(z_0)\ne0$. The integer $m$ is the **order of the zero**. Since $g$ is continuous and non-zero at $z_0$, it remains non-zero nearby, so **zeros of a non-constant analytic function are isolated**. The **identity principle** follows: if two functions analytic on a domain agree on a set with a limit point in the domain (a sequence, or a segment), they agree throughout. This is why $\sin^2 z + \cos^2 z = 1$, proved for real $z$, holds for all complex $z$, and why a function cannot be extended in two different analytic ways. It also completes the maximum modulus proof of Lesson m2-l2.

### Laurent series

**Theorem.** If $f$ is analytic in the annulus $A: r < |z - z_0| < R$, then in $A$

$$f(z) = \sum_{n=-\infty}^\infty a_n(z-z_0)^n, \qquad a_n = \frac{1}{2\pi i}\oint_C\frac{f(w)}{(w-z_0)^{n+1}}\,dw,$$

where $C$ is any positively oriented simple closed contour in $A$ encircling $z_0$.

*Proof sketch.* Take circles $C_2: |w - z_0| = r_2$ and $C_1: |w-z_0| = r_1$ with $r < r_1 < |z-z_0| < r_2 < R$. Applying the integral formula to the region between them,
$$f(z) = \frac{1}{2\pi i}\oint_{C_2}\frac{f(w)}{w-z}\,dw - \frac{1}{2\pi i}\oint_{C_1}\frac{f(w)}{w-z}\,dw.$$
On $C_2$, $|w-z_0| > |z-z_0|$ and the expansion above gives the non-negative powers. On $C_1$, $|w-z_0| < |z-z_0|$, so $-\frac{1}{w-z} = \sum_{n\ge1}\frac{(w-z_0)^{n-1}}{(z-z_0)^n}$, which produces the negative powers. $\blacksquare$

The series splits into the **analytic part** $\sum_{n\ge0}$ and the **principal part** $\sum_{n<0}$. The expansion is unique in its annulus, so any method that produces a valid expansion, such as a geometric series or substitution into a known series, yields *the* Laurent series. A different annulus gives a different series for the same function. The coefficient $a_{-1}$ is the **residue** of $f$ at $z_0$, written $\operatorname{Res}_{z=z_0}f$. For $C$ in $A$, integrating the series term by term with the key example of Lesson m2-l1,

$$\oint_C f(z)\,dz = 2\pi i\,a_{-1}.$$

### Classification of isolated singularities

A point $z_0$ is an **isolated singularity** of $f$ if $f$ is analytic in a deleted neighbourhood $0 < |z-z_0| < R$ but not at $z_0$. The Laurent series about $z_0$ there determines its type.

| Type | Principal part | Behaviour as $z\to z_0$ | Example at $z = 0$ |
|---|---|---|---|
| Removable | none | $f$ tends to a finite limit | $\sin z/z$ |
| Pole of order $m$ | $a_{-m}\ne0$, $a_n = 0$ for $n<-m$ | $\lvert f\rvert\to\infty$ | $\cos z/z^2$ |
| Essential | infinitely many terms | no limit, finite or infinite | $e^{1/z}$ |

A removable singularity is repaired by defining $f(z_0) = a_0$. A pole of order $m$ can be written $f(z) = g(z)/(z-z_0)^m$ with $g$ analytic and $g(z_0)\ne0$; a pole of order one is **simple**. Equivalently, $f$ has a pole of order $m$ at $z_0$ iff $1/f$ has a zero of order $m$ there. Near an essential singularity the **Casorati–Weierstrass theorem** states that $f$ comes arbitrarily close to every complex number in every deleted neighbourhood (Picard's theorem sharpens this to attaining every value except at most one). A function analytic except for poles is **meromorphic**, such as a rational function or $\tan z$. The behaviour at $\infty$ is classified by that of $f(1/w)$ at $w=0$: a polynomial of degree $n$ has a pole of order $n$ at infinity, and a transcendental entire function an essential singularity there.

## Key Ideas

- **Taylor's theorem**: an analytic function equals its Taylor series in any disc of analyticity, with radius equal to the distance to the nearest singularity.
- **Isolated zeros**: a non-constant analytic function has zeros of finite order $m$, $f = (z-z_0)^mg$, that cannot accumulate in the domain; this gives the identity principle.
- **Laurent series**: in an annulus, $f = \sum_{-\infty}^\infty a_n(z-z_0)^n$ with a unique expansion for each annulus; the principal part encodes the singular behaviour.
- **Residue**: $a_{-1}$ is the residue, and $\oint_C f\,dz = 2\pi i\,a_{-1}$ for a circuit inside the annulus.
- **Classification**: removable (no principal part), pole of order $m$ (finite principal part, $|f|\to\infty$), essential (infinite principal part, Casorati–Weierstrass).

## Worked Examples

### Example 1 — Taylor series and radius of convergence

Find the first three non-zero terms of the Maclaurin series of $f(z) = 1/(z^2 - 4z + 5)$ and its radius of convergence, and state the radius about $z_0 = 1$.

**Solution.** The denominator vanishes at $z = 2\pm i$, both at distance $\sqrt5$ from $0$, so $R = \sqrt5$ about the origin. Write $f = \frac15\left[1 - \frac{4z - z^2}{5}\right]^{-1} = \frac15\left[1 + \frac{4z - z^2}{5} + \frac{(4z-z^2)^2}{25} + \cdots\right]$. Collecting powers,

$$f(z) = \frac15 + \frac{4}{25}z + \frac{11}{125}z^2 + \cdots.$$

Check: $f'(0) = -q'(0)/q(0)^2 = 4/25$ and $f''(0)/2 = \tfrac12[-q''/q^2 + 2q'^2/q^3] = \tfrac12\left[-\tfrac{2}{25} + \tfrac{32}{125}\right] = \tfrac{11}{125}$. About $z_0 = 1$, the distance to $2\pm i$ is $\sqrt{1+1} = \sqrt2$, so $R = \sqrt2$.

### Example 2 — Laurent series in different annuli

Expand $f(z) = \dfrac{1}{(z-1)(z-2)}$ in (a) $|z|<1$, (b) $1<|z|<2$, (c) $|z|>2$.

**Solution.** Partial fractions: $f = \dfrac{1}{z-2} - \dfrac{1}{z-1}$.

(a) For $|z|<1$, use $\frac{1}{z-2} = -\frac12\sum\left(\frac z2\right)^n$ and $-\frac{1}{z-1} = \sum z^n$:
$$f = \sum_{n\ge0}\left(1 - 2^{-(n+1)}\right)z^n = \tfrac12 + \tfrac34z + \cdots.$$
(b) For $1<|z|<2$, expand $-\frac{1}{z-1} = -\frac1z\sum z^{-n}$ in negative powers and $\frac{1}{z-2}$ as before:
$$f = -\sum_{n\ge0}\frac{z^n}{2^{n+1}} - \sum_{n\ge1}z^{-n}.$$
(c) For $|z|>2$, $\frac{1}{z-2} = \sum 2^nz^{-n-1}$, giving $f = \sum_{n\ge1}(2^n-1)z^{-n-1} = z^{-2} + 3z^{-3} + \cdots$.

In (b), $a_{-1} = -1$, so $\oint_{|z|=3/2}f\,dz = -2\pi i$: only the pole at $z=1$ is inside, with residue $-1$. In (c) $a_{-1}=0$, so the integral around any large circle is $0$, matching the sum of the residues $-1+1$.

### Example 3 — Classifying singularities

Classify the singularities at $z=0$ of (a) $\dfrac{e^z - 1 - z}{z^2}$, (b) $\dfrac{\cos z - 1}{z^3}$, (c) $e^{1/z}$.

**Solution.** (a) $e^z - 1 - z = \frac{z^2}{2} + \frac{z^3}{6} + \cdots$, so $f = \frac12 + \frac z6 + \cdots$: **removable**, repaired by $f(0) = \tfrac12$. (b) $\cos z - 1 = -\frac{z^2}{2} + \frac{z^4}{24} - \cdots$, so $f = -\frac{1}{2z} + \frac{z}{24} - \cdots$: a **simple pole** with residue $-\frac12$. (c) $e^{1/z} = \sum_{n\ge0}\frac{1}{n!\,z^n}$ has infinitely many negative powers: an **essential singularity**. Along $z = x\to0^+$ it tends to $\infty$, along $x\to0^-$ to $0$, and along $z=iy$ it oscillates with modulus $1$. For any $c\ne0$, $e^{1/z}=c$ at $z_k = 1/(\ln c + 2\pi ik)$, a sequence tending to $0$, illustrating Casorati–Weierstrass.

## Common Misconceptions

- **"A function smooth on the real line has a Taylor series converging on the whole real line."** The radius is set by singularities in the complex plane, as $1/(1+x^2)$ shows.
- **"A function has one Laurent series about a point."** The series is unique in each annulus but changes across circles through the other singularities, as Example 2 shows.
- **"A removable singularity is a real singularity."** The function is analytic after redefining one value; $\sin z/z$ is entire once $f(0)=1$.
- **"A pole and an essential singularity are the same since both blow up."** Near a pole $|f|\to\infty$ uniformly, whereas near an essential singularity $f$ takes values arbitrarily close to every complex number.
- **"The residue is $f$ evaluated at the singularity."** The residue is the coefficient of $(z-z_0)^{-1}$ in the Laurent series, which for a simple pole is $\lim (z-z_0)f(z)$.

## Connections

- The real Taylor series of Real Analysis Lesson m2-l3 needs a remainder estimate to converge; complex analyticity replaces this and predicts the interval of convergence from complex singularities.
- Power-series solutions of ODEs (Differential Equations Lesson m3-l1) converge at least up to the nearest singularity of the coefficient functions in the complex plane, and regular singular points are the poles of Frobenius theory.
- Resonance in forced oscillations (Differential Equations Lesson m2-l3) is a pole of the response function $1/(\omega_0^2 - \omega^2 - i\gamma\omega)$ at complex frequency $\omega = \pm\sqrt{\omega_0^2 - \gamma^2/4} - i\gamma/2$, whose real part sets the resonant frequency and imaginary part the width.
- In Introduction to Quantum Mechanics, bound states and scattering resonances appear as poles of the Green's function or scattering amplitude in the complex energy plane, and the Laurent coefficients give their strengths.

## Quick Check

1. Find the radius of convergence of the Maclaurin series of $\tan z$ and justify your answer without computing coefficients.
2. Expand $\dfrac{1}{z(1-z)}$ in a Laurent series valid for $0<|z|<1$ and for $|z|>1$, and state the residue at $0$.
3. Find the order of the zero of $z - \sin z$ at $0$ and the order of the pole of $1/(z-\sin z)$.
4. Classify the singularity of $\dfrac{\sin z}{z^4}$ at $z=0$ and of $z\sin(1/z)$ at $z=0$.
5. Use the identity principle to show that if $f$ is entire and $f(1/n)=1/n^2$ for $n=1,2,\dots$, then $f(z) = z^2$.

## Takeaway

- Analytic functions are locally convergent power series; the Taylor series converges up to the nearest singularity in the complex plane.
- Zeros of non-constant analytic functions are isolated with finite order, which yields the identity principle.
- The Laurent series in an annulus has a unique expansion with a principal part that characterises singular behaviour.
- Isolated singularities are removable, poles of order $m$, or essential, distinguished by the principal part and by limiting behaviour.
- The residue $a_{-1}$ gives $\oint_C f\,dz = 2\pi i\,a_{-1}$, the key to the residue theorem.
