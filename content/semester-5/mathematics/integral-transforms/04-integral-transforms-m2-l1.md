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
lessonId: integral-transforms-m2-l1
lessonName: Definition, Existence and Properties of the Laplace Transform
lessonNumber: 4
moduleNumber: 2
semesterNumber: 5
difficulty: intermediate
estimatedStudyMinutes: 55
releaseOrder: 4
prerequisites:
  - integral-transforms-m1-l3
  - differential-equations-m3-l2
learningObjectives:
  - Define the Laplace transform, relate it to the Fourier transform of $f(t)e^{-\sigma t}u(t)$, and state sufficient conditions for its existence.
  - Determine the abscissa of convergence of a transform and use the Gamma function to transform $t^{\nu}$.
  - Derive and apply the first shifting, scaling, derivative, integral, $t$-multiplication and division-by-$t$ properties.
  - Evaluate transforms of composite functions and use them to compute definite integrals such as $\int_0^\infty \frac{\sin t}{t}\,dt$.
concepts:
  - Laplace transform
  - Functions of exponential order
  - Abscissa of convergence
  - First shifting theorem
  - Transform of a derivative
  - Multiplication by t and division by t
tags:
  - mathematics
  - integral-transforms
  - laplace-transform
  - operational-calculus
sourceType: authored-courseware
status: in-review
assessmentHints:
  - derivation
  - problem-solving
  - conceptual
  - short-answer
***

# Definition, Existence and Properties of the Laplace Transform

## Overview

The Fourier transform of Lesson m1-l3 has two weaknesses for initial-value problems. It fails for functions that grow, or merely fail to decay, such as $e^{t}$, $t$ or the switched-on constant $u(t)$; and it treats past and future symmetrically, whereas a circuit switched on at $t = 0$ cares only about $t \geq 0$ and its initial state. Multiplying by a decaying factor $e^{-\sigma t}$ and discarding $t < 0$ cures both, and the result is the Laplace transform. This lesson builds on the first look in Differential Equations (Lesson m3-l2) by placing the transform on a rigorous footing: when it exists, where it converges, why it is unique, and how a short list of operational properties generates almost every transform needed in practice.

## Learning Path

- **What you should already know**: the Fourier transform and its derivative rule (Lesson m1-l3); improper integrals; the table of elementary Laplace transforms and their use for simple ODEs (Differential Equations, Lesson m3-l2).
- **What this lesson adds**: existence via exponential order, the abscissa of convergence, uniqueness (Lerch), the Gamma-function transform of $t^\nu$ and the full set of operational properties with proofs.
- **What later lessons this will unlock**: inversion by partial fractions and the Bromwich integral, and the convolution theorem (Lesson m2-l2); step functions, impulses, periodic functions and the limit theorems (Lesson m2-l3); transform solution of ODEs and PDEs (Module 3).

## Core Explanation

### Definition and relation to the Fourier transform

For $f$ defined on $t \geq 0$, the **Laplace transform** is

$$F(s) = \mathcal{L}\{f\}(s) = \int_0^\infty f(t)\,e^{-st}\,dt, \qquad s = \sigma + i\omega \in \mathbb{C}.$$

Writing $e^{-st} = e^{-\sigma t}e^{-i\omega t}$ shows that

$$F(\sigma + i\omega) = \int_{-\infty}^{\infty}\big[f(t)e^{-\sigma t}u(t)\big]e^{-i\omega t}\,dt,$$

the Fourier transform, in the course convention, of the damped and truncated signal $f(t)e^{-\sigma t}u(t)$. Choosing $\sigma$ large enough tames any exponential growth. This identity is the root of the Bromwich inversion formula in Lesson m2-l2.

### Existence and the abscissa of convergence

A function $f$ is of **exponential order** $c$ if there are constants $M, T$ with $|f(t)| \leq Me^{ct}$ for all $t \geq T$.

**Existence theorem.** If $f$ is piecewise continuous on every finite interval $[0, T]$ and of exponential order $c$, then $F(s)$ exists for $\operatorname{Re}s > c$, and $F(s) \to 0$ as $\operatorname{Re}s \to \infty$.

*Proof.* The integral over $[0, T]$ exists because $f$ is piecewise continuous. Beyond $T$, with $\sigma = \operatorname{Re}s > c$,

$$\left|\int_T^\infty f(t)e^{-st}dt\right| \leq M\int_T^\infty e^{-(\sigma - c)t}dt = \frac{Me^{-(\sigma - c)T}}{\sigma - c},$$

so the integral converges absolutely. Bounding both pieces shows $|F(s)| \leq K/(\sigma - c)$ for large $\sigma$, which tends to zero. $\square$

The infimum of the $\sigma$ for which the integral converges is the **abscissa of convergence** $\sigma_c$; $F$ is analytic in the half-plane $\operatorname{Re}s > \sigma_c$. The conditions are sufficient, not necessary. $f(t) = t^{-1/2}$ is unbounded at $0$, yet its transform exists; $e^{t^2}$ is of no exponential order and has no transform. Since $F(s) \to 0$, a function such as $s/(s+1)$ cannot be the transform of an ordinary function; it will need the delta function of Lesson m2-l3.

**Uniqueness (Lerch's theorem).** If two piecewise-continuous functions of exponential order have the same transform, they agree except at isolated points. For continuous functions the inverse transform is therefore unique, which is what makes table look-up legitimate.

### Elementary transforms

Direct integration gives, for $\operatorname{Re}s > \operatorname{Re}a$,

$$\mathcal{L}\{e^{at}\} = \int_0^\infty e^{-(s - a)t}dt = \frac{1}{s - a}.$$

Taking $a = \pm i\omega$ and combining, $\frac{1}{s - i\omega} = \frac{s + i\omega}{s^2 + \omega^2}$, whose real and imaginary parts give

$$\mathcal{L}\{\cos\omega t\} = \frac{s}{s^2 + \omega^2}, \qquad \mathcal{L}\{\sin\omega t\} = \frac{\omega}{s^2 + \omega^2} \qquad (\operatorname{Re}s > 0),$$

and similarly $\mathcal{L}\{\cosh at\} = \frac{s}{s^2 - a^2}$, $\mathcal{L}\{\sinh at\} = \frac{a}{s^2 - a^2}$ for $\operatorname{Re}s > |a|$. For powers, substituting $x = st$ (first for real $s > 0$, then by analytic continuation),

$$\mathcal{L}\{t^{\nu}\} = \int_0^\infty t^{\nu}e^{-st}dt = \frac{1}{s^{\nu+1}}\int_0^\infty x^{\nu}e^{-x}dx = \frac{\Gamma(\nu + 1)}{s^{\nu + 1}}, \qquad \nu > -1 .$$

For integer $n$, $\Gamma(n+1) = n!$ gives $n!/s^{n+1}$; for $\nu = -\tfrac12$, $\Gamma(\tfrac12) = \sqrt\pi$ gives $\mathcal{L}\{t^{-1/2}\} = \sqrt{\pi/s}$.

### Operational properties

**Linearity.** $\mathcal{L}\{af + bg\} = aF + bG$.

**First shifting theorem ($s$-shift).** $\mathcal{L}\{e^{at}f(t)\} = F(s - a)$, since $e^{at}e^{-st} = e^{-(s-a)t}$. Damping by $e^{-\alpha t}$ moves the transform right by $\alpha$, giving for instance $\mathcal{L}\{e^{-\alpha t}\sin\omega t\} = \frac{\omega}{(s + \alpha)^2 + \omega^2}$.

**Second shifting theorem ($t$-shift).** For $a > 0$, $\mathcal{L}\{f(t - a)u(t - a)\} = e^{-as}F(s)$, a delay multiplying by $e^{-as}$. Its uses with switched inputs are the subject of Lesson m2-l3.

**Scaling.** For $a > 0$, substituting $\tau = at$ gives $\mathcal{L}\{f(at)\} = \frac{1}{a}F\!\left(\frac{s}{a}\right)$.

**Derivatives.** If $f$ is continuous and of exponential order and $f'$ is piecewise continuous, integrating by parts gives

$$\mathcal{L}\{f'\} = \big[f e^{-st}\big]_0^\infty + s\int_0^\infty fe^{-st}dt = sF(s) - f(0).$$

Repeating, $\mathcal{L}\{f''\} = s^2F(s) - sf(0) - f'(0)$ and in general

$$\mathcal{L}\{f^{(n)}\} = s^nF(s) - s^{n-1}f(0) - s^{n-2}f'(0) - \cdots - f^{(n-1)}(0).$$

Unlike the Fourier rule $f' \leftrightarrow ik\hat f$, the initial values appear automatically; this is why the Laplace transform is the natural tool for initial-value problems. If $f$ jumps at $t = 0$, $f(0)$ means $f(0^+)$.

**Integrals.** With $g(t) = \int_0^t f(\tau)\,d\tau$, $g(0) = 0$ and $g' = f$, so $F = sG$:

$$\mathcal{L}\left\{\int_0^t f(\tau)\,d\tau\right\} = \frac{F(s)}{s}.$$

**Multiplication by $t$.** Differentiating under the integral, $F'(s) = \int_0^\infty(-t)f(t)e^{-st}dt$, so

$$\mathcal{L}\{t f(t)\} = -F'(s), \qquad \mathcal{L}\{t^nf(t)\} = (-1)^nF^{(n)}(s).$$

**Division by $t$.** If $\lim_{t\to0^+}f(t)/t$ exists, integrating $F$ from $s$ to $\infty$ and swapping the order of integration gives

$$\mathcal{L}\left\{\frac{f(t)}{t}\right\} = \int_s^\infty F(\sigma)\,d\sigma .$$

| Property | $f(t)$ | $F(s)$ |
|---|---|---|
| $s$-shift | $e^{at}f(t)$ | $F(s - a)$ |
| $t$-shift | $f(t - a)u(t - a)$ | $e^{-as}F(s)$ |
| Scaling | $f(at)$ | $\frac1aF(s/a)$ |
| Derivative | $f'(t)$ | $sF(s) - f(0)$ |
| Integral | $\int_0^tf\,d\tau$ | $F(s)/s$ |
| $t$-multiplication | $tf(t)$ | $-F'(s)$ |
| Division by $t$ | $f(t)/t$ | $\int_s^\infty F\,d\sigma$ |

## Key Ideas

- **Laplace transform**: $F(s) = \int_0^\infty fe^{-st}dt$ is the Fourier transform of $f(t)e^{-\sigma t}u(t)$ evaluated at $\omega = \operatorname{Im}s$.
- **Existence**: piecewise continuity and exponential order $c$ guarantee convergence for $\operatorname{Re}s > c$, and then $F(s) \to 0$ as $\operatorname{Re}s \to \infty$.
- **Uniqueness**: by Lerch's theorem a continuous function is determined by its transform, so tables can be read backwards.
- **Powers**: $\mathcal{L}\{t^\nu\} = \Gamma(\nu+1)/s^{\nu+1}$ for $\nu > -1$.
- **Shifts and scaling**: $e^{at}f \leftrightarrow F(s - a)$, $f(t-a)u(t-a) \leftrightarrow e^{-as}F$, $f(at) \leftrightarrow \frac1aF(s/a)$.
- **Calculus rules**: $f' \leftrightarrow sF - f(0)$, $\int_0^tf \leftrightarrow F/s$, $tf \leftrightarrow -F'$, $f/t \leftrightarrow \int_s^\infty F$.

## Worked Examples

### Example 1 — Multiplication by $t$ combined with an $s$-shift

Find $\mathcal{L}\{t\sin\omega t\}$ and hence $\mathcal{L}\{te^{-2t}\sin 3t\}$.

**Solution.** With $F(s) = \omega/(s^2 + \omega^2)$,

$$\mathcal{L}\{t\sin\omega t\} = -\frac{d}{ds}\frac{\omega}{s^2 + \omega^2} = \frac{2\omega s}{(s^2 + \omega^2)^2}.$$

For $\omega = 3$ this is $6s/(s^2 + 9)^2$, and the first shifting theorem replaces $s$ by $s + 2$:

$$\mathcal{L}\{te^{-2t}\sin 3t\} = \frac{6(s + 2)}{\big((s + 2)^2 + 9\big)^2}, \qquad \operatorname{Re}s > -2 .$$

The double poles at $s = -2 \pm 3i$ signal the secular factor $t$; Lesson m2-l2 inverts the same structure, the resonant response of an undamped oscillator.

### Example 2 — The Dirichlet integral by division by $t$

Find $\mathcal{L}\{\sin t/t\}$ and deduce $\int_0^\infty \frac{\sin t}{t}\,dt$.

**Solution.** Since $\sin t/t \to 1$ as $t \to 0$, the division rule applies:

$$\mathcal{L}\left\{\frac{\sin t}{t}\right\} = \int_s^\infty\frac{d\sigma}{\sigma^2 + 1} = \frac{\pi}{2} - \arctan s = \arctan\frac{1}{s}, \qquad s > 0 .$$

Letting $s \to 0^+$ (justified by Abel's theorem for Laplace integrals, since the integral converges conditionally), $\int_0^\infty\frac{\sin t}{t}\,dt = \frac{\pi}{2}$. By the integral rule, the sine integral $\mathrm{Si}(t) = \int_0^t\frac{\sin\tau}{\tau}d\tau$ has $\mathcal{L}\{\mathrm{Si}\} = \frac1s\arctan\frac1s$. The same function fixed the Gibbs overshoot $\frac2\pi\mathrm{Si}(\pi)$ in Lesson m1-l2, and $\mathrm{Si}(t) \to \pi/2$ is why a square-wave partial sum settles at the correct level away from the jump.

### Example 3 — Using the derivative rule instead of integrating

Find $\mathcal{L}\{\sin^2 t\}$ from the derivative rule and check it with a trigonometric identity; then find $\mathcal{L}\{\sin^2 3t\}$ by scaling.

**Solution.** Let $f = \sin^2 t$. Then $f(0) = 0$ and $f' = 2\sin t\cos t = \sin 2t$, so

$$sF(s) - 0 = \frac{2}{s^2 + 4} \quad\Longrightarrow\quad F(s) = \frac{2}{s(s^2 + 4)}.$$

Check: $\sin^2 t = \tfrac12(1 - \cos 2t)$ gives $\frac12\left(\frac1s - \frac{s}{s^2 + 4}\right) = \frac{1}{2}\cdot\frac{s^2 + 4 - s^2}{s(s^2 + 4)} = \frac{2}{s(s^2 + 4)}$, as required.

By scaling with $a = 3$,

$$\mathcal{L}\{\sin^2 3t\} = \frac13F\!\left(\frac s3\right) = \frac13\cdot\frac{2}{(s/3)\big((s/3)^2 + 4\big)} = \frac{18}{s(s^2 + 36)},$$

which agrees with $\frac12\left(\frac1s - \frac{s}{s^2 + 36}\right) = \frac{18}{s(s^2+36)}$. The derivative rule often replaces an integration by an algebraic step.

## Common Misconceptions

- **"Every function has a Laplace transform."** $e^{t^2}$ grows faster than any exponential and has none. Exponential order is the practical criterion, though it is sufficient rather than necessary, as $t^{-1/2}$ shows.
- **"The transform is defined for all $s$."** It converges only for $\operatorname{Re}s > \sigma_c$; $1/(s - a)$ represents $e^{at}$ only for $\operatorname{Re}s > \operatorname{Re}a$, although the formula continues analytically beyond.
- **"$\mathcal{L}\{f'\} = sF(s)$."** The initial value $f(0)$ must be subtracted; omitting it discards the initial conditions, which is the whole advantage of the method.
- **"$\mathcal{L}\{fg\} = F(s)G(s)$."** The product of transforms corresponds to the convolution $\int_0^tf(\tau)g(t-\tau)d\tau$ (Lesson m2-l2), not to the product of functions.
- **"The first and second shifting theorems are the same."** Multiplying by $e^{at}$ shifts in $s$; delaying by $a$ multiplies by $e^{-as}$. They are dual statements, not one rule.

## Connections

- The transform of a derivative turns the RC and RL transient equations of Electricity and Magnetism (Lesson m2-l3) into algebra, with the initial capacitor voltage entering through $f(0)$.
- The integral $\int_0^\infty t^{\nu}e^{-st}dt = \Gamma(\nu+1)/s^{\nu+1}$ is the same integral that gives partition functions and Maxwell–Boltzmann averages in Thermal Physics and Statistical Mechanics (Lesson m3-l2).
- Analyticity of $F(s)$ in a right half-plane is the causality property behind the Kramers–Kronig relations of Complex Analysis (Lesson m3-l3).
- The Laplace transform of a probability density is its moment-generating function evaluated at $-s$, used for first-passage times in Mathematical Modelling.
- Symbolic transforms can be checked with `sympy.laplace_transform`, as in Calculus using Python (Lesson m2-l1).

## Quick Check

1. Show that $\cosh 2t$ is of exponential order and find its abscissa of convergence and transform.
2. Use the Gamma function to find $\mathcal{L}\{t^{3/2}\}$.
3. Find $\mathcal{L}\{e^{3t}\cos 4t\}$ and $\mathcal{L}\{t^2e^{-t}\}$.
4. Explain why $F(s) = s^2/(s^2 + 1)$ is not the transform of a piecewise-continuous function of exponential order.
5. Find $\mathcal{L}\{(1 - e^{-t})/t\}$ using the division rule.

## Takeaway

- The Laplace transform is a damped, one-sided Fourier transform, built for causal signals and initial-value problems.
- It exists for piecewise-continuous functions of exponential order, is analytic to the right of its abscissa of convergence, and is unique by Lerch's theorem.
- Seven properties, the two shifts, scaling, derivative, integral, $t$-multiplication and division by $t$, generate nearly every transform from a handful of elementary pairs.
- The derivative rule $\mathcal{L}\{f'\} = sF - f(0)$ builds initial conditions into the algebra.
- Transform properties also evaluate definite integrals, such as $\int_0^\infty\sin t/t\,dt = \pi/2$.
