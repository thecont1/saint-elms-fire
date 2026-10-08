***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-5
semesterName: Semester 5
subjectId: mathematics
subjectName: Mathematics
courseId: integral-transforms
courseName: Integral Transforms (Mathematics Elective I)
moduleId: integral-transforms-module-2
moduleName: The Laplace Transform
lessonId: integral-transforms-m2-l2
lessonName: Inverse Laplace Transforms and the Convolution Theorem
lessonNumber: 5
moduleNumber: 2
semesterNumber: 5
difficulty: intermediate
estimatedStudyMinutes: 60
releaseOrder: 5
prerequisites:
  - integral-transforms-m2-l1
  - differential-equations-m3-l2
learningObjectives:
  - Invert rational transforms by partial fractions, including repeated linear factors and irreducible quadratics, and state the Heaviside expansion theorem.
  - Derive the Bromwich integral $f(t) = \frac{1}{2\pi i}\int_{c-i\infty}^{c+i\infty}F(s)e^{st}ds$ from Fourier inversion and evaluate it as a sum of residues.
  - Prove the convolution theorem $\mathcal{L}\{f * g\} = F(s)G(s)$ and use it to invert products of transforms.
  - Solve Volterra integral equations of convolution type.
concepts:
  - Inverse Laplace transform
  - Partial fraction decomposition
  - Heaviside expansion theorem
  - Bromwich inversion integral
  - Laplace convolution
  - Convolution theorem for Laplace transforms
  - Volterra integral equation
tags:
  - mathematics
  - integral-transforms
  - inverse-laplace-transform
  - convolution
sourceType: authored-courseware
status: in-review
assessmentHints:
  - problem-solving
  - derivation
  - computational
  - conceptual
***

# Inverse Laplace Transforms and the Convolution Theorem

## Overview

Transforming a problem is only half the method; the answer must be brought back to the time domain. For the rational functions produced by linear ODEs with constant coefficients, partial fractions reduce every inversion to a handful of table entries, and the Heaviside expansion theorem packages the result as a sum of exponentials. Behind the tables stands an exact formula, the Bromwich integral, which follows in two lines from Fourier inversion and is evaluated by the residue theorem; its contour-closing argument is developed in Complex Analysis (Lesson m3-l3) and is cited rather than repeated here. The second half of the lesson proves the convolution theorem, which says that the product of two transforms is the transform of a memory integral. It inverts products directly, solves integral equations, and becomes the impulse-response picture of linear systems in Module 3.

## Learning Path

- **What you should already know**: the transform properties, especially the $s$-shift and $t$-multiplication (Lesson m2-l1); Fourier inversion (Lesson m1-l3); partial fractions as used in Differential Equations (Lesson m3-l2).
- **What this lesson adds**: systematic partial-fraction inversion, the Heaviside expansion theorem, the Bromwich integral and its residue evaluation, the convolution theorem and Volterra integral equations.
- **What later lessons this will unlock**: inverting delayed and periodic transforms (Lesson m2-l3); impulse responses and Duhamel's integral for oscillators and circuits (Lesson m3-l1); the inversion of $e^{-x\sqrt{s/\kappa}}/s$ in the heat equation (Lesson m3-l2).

## Core Explanation

### The inverse transform

We write $f = \mathcal{L}^{-1}\{F\}$ when $\mathcal{L}\{f\} = F$. By Lerch's theorem the inverse is unique among continuous functions, and it is linear. Every property of Lesson m2-l1 can be read backwards; for example, the $s$-shift gives $\mathcal{L}^{-1}\{F(s - a)\} = e^{at}f(t)$, so

$$\mathcal{L}^{-1}\left\{\frac{s + 3}{(s + 3)^2 + 16}\right\} = e^{-3t}\cos 4t .$$

### Partial fractions

Let $F(s) = P(s)/Q(s)$ with $\deg P < \deg Q$. Factorise $Q$ over the reals and decompose.

**Distinct linear factors.** If $Q$ has simple roots $a_1, \ldots, a_n$, then $F = \sum A_k/(s - a_k)$ with $A_k = \lim_{s\to a_k}(s - a_k)F(s) = P(a_k)/Q'(a_k)$, the cover-up rule. This gives the **Heaviside expansion theorem**

$$\mathcal{L}^{-1}\left\{\frac{P(s)}{Q(s)}\right\} = \sum_{k=1}^{n}\frac{P(a_k)}{Q'(a_k)}\,e^{a_kt}.$$

**Repeated linear factors.** A factor $(s - a)^m$ contributes $\sum_{j=1}^{m}A_j/(s - a)^j$. By the $s$-shift and $\mathcal{L}\{t^{j-1}\} = (j-1)!/s^j$,

$$\mathcal{L}^{-1}\left\{\frac{1}{(s - a)^j}\right\} = \frac{t^{j-1}e^{at}}{(j - 1)!}.$$

The coefficients are $A_j = \frac{1}{(m-j)!}\frac{d^{m-j}}{ds^{m-j}}\big[(s - a)^mF(s)\big]_{s=a}$, or are found more quickly by rewriting the numerator in powers of $s - a$.

**Irreducible quadratics.** Complete the square, $s^2 + bs + c = (s + \alpha)^2 + \beta^2$, and split the numerator as $A(s + \alpha) + B\beta$:

$$\mathcal{L}^{-1}\left\{\frac{A(s + \alpha) + B\beta}{(s + \alpha)^2 + \beta^2}\right\} = e^{-\alpha t}\big(A\cos\beta t + B\sin\beta t\big).$$

Pole locations therefore dictate time behaviour: a real pole $a$ gives $e^{at}$, a complex pair $-\alpha \pm i\beta$ gives a damped oscillation, and a pole of order $m$ adds the factor $t^{m-1}$. Poles in the left half-plane produce decaying terms; this is the basis of the stability criterion of Lesson m3-l1.

SymPy (Calculus using Python, Lesson m2-l1) performs both steps; the code prints the partial fractions of Example 1 and then $f(t)$.

```python
import sympy as sp
s, t = sp.symbols('s t', positive=True)
F = (s + 5) / ((s + 1) * (s**2 + 4))
print(sp.apart(F, s))                       # 4/(5(s+1)) - (4s - 9)/(5(s^2+4))
print(sp.inverse_laplace_transform(F, s, t))
```

### The Bromwich integral

From Lesson m2-l1, $F(c + i\omega)$ is the Fourier transform of $g(t) = f(t)e^{-ct}u(t)$ whenever $c$ exceeds the abscissa of convergence. Fourier inversion (Lesson m1-l3) gives

$$f(t)e^{-ct} = \frac{1}{2\pi}\int_{-\infty}^{\infty}F(c + i\omega)e^{i\omega t}\,d\omega, \qquad t > 0 .$$

Multiplying by $e^{ct}$ and substituting $s = c + i\omega$, $ds = i\,d\omega$, yields the **Bromwich inversion integral**

$$f(t) = \frac{1}{2\pi i}\int_{c - i\infty}^{c + i\infty}F(s)\,e^{st}\,ds,$$

taken along a vertical line to the right of every singularity of $F$. For $t < 0$ it returns $0$, as causality requires. For $t > 0$, Complex Analysis (Lesson m3-l3) closes the line with a large semicircle in the left half-plane, shows by Jordan's lemma that the arc contributes nothing when $F(s) \to 0$, and obtains

$$f(t) = \sum_{\text{poles } s_k \text{ of } F}\operatorname{Res}_{s = s_k}\big[F(s)e^{st}\big], \qquad t > 0 .$$

At a simple pole of $P/Q$ the residue is $P(s_k)e^{s_kt}/Q'(s_k)$, which is the Heaviside expansion theorem again; at a pole of order $m$ the derivative formula for residues reproduces the factor $t^{m-1}$. The integral reaches beyond partial fractions: for transforms with branch points, such as $e^{-a\sqrt s}/s$ in Lesson m3-l2, the contour wraps around a branch cut and the answer is a non-elementary function.

### The convolution theorem

For causal functions the **Laplace convolution** is

$$(f * g)(t) = \int_0^t f(\tau)\,g(t - \tau)\,d\tau .$$

It is the Fourier convolution of Lesson m1-l3 with both functions set to zero for negative arguments, which cuts the integral to $[0, t]$.

**Theorem.** $\mathcal{L}\{f * g\} = F(s)\,G(s)$.

*Proof.* Write the double integral over the wedge $0 \leq \tau \leq t < \infty$ and reverse the order:

$$\int_0^\infty e^{-st}\int_0^t f(\tau)g(t - \tau)\,d\tau\,dt = \int_0^\infty f(\tau)\int_\tau^\infty g(t - \tau)e^{-st}\,dt\,d\tau .$$

With $u = t - \tau$ the inner integral is $e^{-s\tau}G(s)$, leaving $G(s)\int_0^\infty f(\tau)e^{-s\tau}d\tau = F(s)G(s)$. Absolute convergence for $\operatorname{Re}s$ large justifies the swap. $\square$

Convolution is commutative, associative and distributive. Taking $g = 1$ recovers the integral rule, $f * 1 = \int_0^tf\,d\tau \leftrightarrow F/s$. Physically, $f * g$ is a weighted memory: the output at time $t$ sums the input at every earlier time $\tau$, weighted by the response $g(t - \tau)$ to a unit input applied $t - \tau$ earlier.

**Volterra integral equations.** An equation $y(t) = f(t) + \int_0^tk(t - \tau)y(\tau)\,d\tau$ transforms to $Y = F + KY$, so $Y = F/(1 - K)$. Such equations describe renewal processes, viscoelastic materials and circuits specified by their responses.

## Key Ideas

- **Inversion by tables**: every transform property can be read backwards; uniqueness makes this legitimate.
- **Partial fractions**: simple poles give $e^{at}$, poles of order $m$ add $t^{m-1}$, complex pairs give $e^{-\alpha t}\cos\beta t$ and $e^{-\alpha t}\sin\beta t$.
- **Heaviside expansion**: $\mathcal{L}^{-1}\{P/Q\} = \sum P(a_k)e^{a_kt}/Q'(a_k)$ for simple roots $a_k$.
- **Bromwich integral**: $f(t) = \frac{1}{2\pi i}\int_{c-i\infty}^{c+i\infty}Fe^{st}ds$, Fourier inversion along a shifted line, equal to the sum of residues of $Fe^{st}$ for $t > 0$.
- **Convolution theorem**: $\mathcal{L}\{\int_0^tf(\tau)g(t-\tau)d\tau\} = FG$.
- **Integral equations**: convolution-type Volterra equations become algebraic, $Y = F/(1 - K)$.

## Worked Examples

### Example 1 — Partial fractions with a quadratic and with a repeated root

Invert (a) $F(s) = \dfrac{s + 5}{(s + 1)(s^2 + 4)}$ and (b) $G(s) = \dfrac{2s + 3}{(s + 1)^3}$.

**Solution.** (a) Write $F = \frac{A}{s+1} + \frac{Bs + C}{s^2 + 4}$. Cover-up gives $A = \frac{-1 + 5}{1 + 4} = \frac45$. Comparing coefficients in $s + 5 = A(s^2 + 4) + (Bs + C)(s + 1)$: the $s^2$ terms give $0 = A + B$, so $B = -\frac45$; the constants give $5 = 4A + C$, so $C = \frac95$; the $s$ terms check, $B + C = 1$. Hence

$$f(t) = \frac45e^{-t} - \frac45\cos 2t + \frac{9}{10}\sin 2t .$$

As a check, $f(0) = 0$, consistent with $sF(s) \to 0$ as $s \to \infty$ (the initial value theorem of Lesson m2-l3).

(b) Rewrite the numerator in powers of $s + 1$: $2s + 3 = 2(s + 1) + 1$. Then

$$G(s) = \frac{2}{(s + 1)^2} + \frac{1}{(s + 1)^3} \quad\Longrightarrow\quad g(t) = \left(2t + \frac{t^2}{2}\right)e^{-t}.$$

### Example 2 — A double pole by Bromwich, checked by convolution

Invert $F(s) = \dfrac{s}{(s^2 + \omega^2)^2}$ by residues and confirm with the convolution theorem.

**Solution.** $F$ has double poles at $s = \pm i\omega$. At $s = i\omega$,

$$\operatorname{Res} = \frac{d}{ds}\left[\frac{se^{st}}{(s + i\omega)^2}\right]_{s=i\omega} = \left[\frac{e^{st} + ste^{st}}{(s + i\omega)^2} - \frac{2se^{st}}{(s + i\omega)^3}\right]_{s=i\omega}.$$

With $(2i\omega)^2 = -4\omega^2$ and $(2i\omega)^3 = -8i\omega^3$, the three terms are $-\frac{e^{i\omega t}}{4\omega^2}$, $-\frac{ite^{i\omega t}}{4\omega}$ and $+\frac{e^{i\omega t}}{4\omega^2}$; the first and last cancel. The residue at $-i\omega$ is the complex conjugate, so

$$f(t) = -\frac{it}{4\omega}\left(e^{i\omega t} - e^{-i\omega t}\right) = \frac{t\sin\omega t}{2\omega}.$$

Check: $F = \frac{s}{s^2 + \omega^2}\cdot\frac{1}{s^2 + \omega^2}$, so $f = \cos\omega t * \frac{\sin\omega t}{\omega}$. Using $\cos\omega\tau\sin\omega(t - \tau) = \tfrac12[\sin\omega t + \sin\omega(t - 2\tau)]$, and noting that the second term integrates to zero over $[0, t]$ because it is odd about $\tau = t/2$,

$$f(t) = \frac{1}{\omega}\cdot\frac12\,t\sin\omega t = \frac{t\sin\omega t}{2\omega},$$

in agreement with $\mathcal{L}\{t\sin\omega t\} = 2\omega s/(s^2 + \omega^2)^2$ from Lesson m2-l1.

### Example 3 — A Volterra integral equation

Solve $y(t) = t + \displaystyle\int_0^t\sin(t - \tau)\,y(\tau)\,d\tau$.

**Solution.** The integral is $\sin * y$, so transforming gives

$$Y = \frac{1}{s^2} + \frac{Y}{s^2 + 1} \quad\Longrightarrow\quad Y\,\frac{s^2}{s^2 + 1} = \frac{1}{s^2} \quad\Longrightarrow\quad Y = \frac{s^2 + 1}{s^4} = \frac{1}{s^2} + \frac{1}{s^4}.$$

Therefore $y(t) = t + \dfrac{t^3}{6}$. To verify, the convolution term must equal $t^3/6$; its transform is $Y/(s^2 + 1) = 1/s^4$, which is indeed $\mathcal{L}\{t^3/6\}$. Direct integration by parts confirms it.

## Common Misconceptions

- **"$\mathcal{L}^{-1}\{FG\} = f(t)g(t)$."** The inverse of a product is the convolution $\int_0^tf(\tau)g(t-\tau)d\tau$, as Example 2 shows: $\cos\omega t\cdot\sin\omega t/\omega$ is not $t\sin\omega t/2\omega$.
- **"Partial fractions work for any rational function."** They require $\deg P < \deg Q$. Otherwise divide first; the polynomial part corresponds to delta functions and their derivatives (Lesson m2-l3).
- **"The Bromwich line can pass between the poles."** It must lie to the right of all singularities; a line between poles inverts to a function that is non-zero for $t < 0$.
- **"Complex poles give complex time functions."** For real $F$ the poles come in conjugate pairs whose residues are conjugate, so the sum is real.
- **"Convolution is just a technical device."** It is the input–output law of every linear time-invariant system, the subject of Lesson m3-l1.

## Connections

- The Heaviside expansion theorem is the transient analysis of networks in Electricity and Magnetism (Lesson m2-l3); each pole of the circuit's transform is a natural mode of the network.
- Bromwich inversion by residues is the application developed in Complex Analysis (Lesson m3-l3), where causality and analyticity in the right half-plane are linked.
- Radioactive decay chains (Nuclear Physics, Lesson m2-l2) are solved by transforming the coupled rate equations; the Bateman solution is the Heaviside expansion of a product of simple poles.
- Convolution describes a telescope's point-spread function blurring a sky image in Astrophysics I (Lesson m3-l1) and the instrumental broadening of spectral lines.
- Volterra equations model hereditary effects such as viscoelastic creep and population renewal in Mathematical Modelling.

## Quick Check

1. Invert $\dfrac{3s + 7}{s^2 + 2s + 5}$.
2. Use the Heaviside expansion theorem to invert $\dfrac{s^2 + 1}{s(s - 1)(s + 2)}$.
3. Find $1 * e^{-t}$ and $t * t$ directly and check each with the convolution theorem.
4. Explain why the Bromwich line must lie to the right of every pole, using the case $F = 1/(s - 2)$.
5. Solve $y(t) = 1 - \displaystyle\int_0^t y(\tau)\,d\tau$.

## Takeaway

- Partial fractions invert every rational transform; pole positions determine whether terms grow, decay or oscillate.
- The Heaviside expansion theorem and residue evaluation of the Bromwich integral are the same calculation.
- The Bromwich integral is Fourier inversion along the line $\operatorname{Re}s = c$; its contour evaluation is cited from Complex Analysis (Lesson m3-l3).
- The convolution theorem $\mathcal{L}\{f * g\} = FG$ inverts products and expresses linear-system memory.
- Convolution-type integral equations reduce to algebra in the $s$-domain.
