***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-1
semesterName: Semester 1
subjectId: mathematics
subjectName: Mathematics
courseId: integral-calculus
courseName: Integral Calculus
moduleId: integral-calculus-module-3
moduleName: Advanced Techniques and Improper Integrals
lessonId: integral-calculus-m3-l2
lessonName: Trigonometric Integrals and Substitutions
lessonNumber: 8
moduleNumber: 3
semesterNumber: 1
difficulty: advanced
estimatedStudyMinutes: 50
releaseOrder: 8
prerequisites:
  - integral-calculus-m3-l1
learningObjectives:
  - Integrate products of powers of $\sin$ and $\cos$ using the half-angle and Pythagorean identities.
  - Apply trigonometric substitutions to convert square-root integrands into rational ones.
  - Combine substitutions, identities, and partial fractions for mixed integrands.
concepts:
  - Half-angle identity
  - Pythagorean identity
  - Trigonometric substitution
  - Reduction of square roots
  - Weierstrass substitution
tags:
  - mathematics
  - calculus
  - integration
  - trigonometric
sourceType: authored-courseware
assessmentHints:
  - conceptual
  - derivation
  - problem-solving
  - short-answer
***

# Trigonometric Integrals and Substitutions

## Overview

Integrals involving $\sin$ and $\cos$ (and their relatives) are common in physics — oscillations, waves, AC circuits, and rotational dynamics all produce trigonometric integrands. Two complementary techniques handle the most common cases: (1) the half-angle and Pythagorean identities reduce products of $\sin$ and $\cos$ to sums; (2) trigonometric substitutions turn square-root integrands into rational functions that can be integrated algebraically. The lesson develops both techniques, with worked examples from physics (period of a pendulum approximated by trigonometric integrals, the arc length of a circle, the energy of a particle in a sinusoidal potential).

## Learning Path

- **What you should already know**: the antiderivative rules for elementary functions; $u$-substitution (Module 1 Lesson 3); integration by parts (Lesson m3-l1).
- **What this lesson adds**: the systematic integration of products of $\sin$ and $\cos$; the trigonometric substitutions $u = \sin\theta$, $u = \tan(\theta/2)$, and $u = \tan\theta$ for square-root integrands; the Weierstrass substitution.
- **What later lessons this will unlock**: improper integrals in Lesson m3-l3, and the trigonometric and hyperbolic integrals that appear in advanced physics (special relativity, quantum mechanics, electromagnetism).

## Core Explanation

### Integrals of products of sines and cosines

The systematic approach to $\int \sin^m x \cos^n x\, dx$ depends on the parities of $m$ and $n$.

**Case 1: $m$ odd.** Factor out one $\sin x$ and use $u = \cos x$, $du = -\sin x\, dx$ to convert the remaining $\sin$ powers:

$$\int \sin^{2k+1} x \cos^n x\, dx = -\int (1 - u^2)^k u^n\, du, \quad u = \cos x.$$

**Case 2: $n$ odd.** Factor out one $\cos x$ and use $u = \sin x$:

$$\int \sin^m x \cos^{2k+1} x\, dx = \int (1 - u^2)^{(m/2)} u^{2k+1} du \cdot \frac{1}{\cos x} \to \text{cleaner with } u = \sin x.$$

Specifically, $\int \sin^m x \cos^{2k+1} x\, dx = \int u^m (1 - u^2)^k\, du$, $u = \sin x$.

**Case 3: both $m$ and $n$ even.** Use the half-angle identities

$$\sin^2 x = \frac{1 - \cos 2x}{2}, \quad \cos^2 x = \frac{1 + \cos 2x}{2}, \quad \sin x \cos x = \frac{\sin 2x}{2}$$

to reduce the integrand to a sum of cosines of multiples of $x$. Each term integrates by the standard rules.

**Example 1.** $\int \sin^3 x\, dx = \int (1 - \cos^2 x) \sin x\, dx = -\cos x + \cos^3 x/3 + C$.

**Example 2.** $\int \sin^2 x \cos^2 x\, dx = \int (1/4) \sin^2 2x\, dx = (1/8) \int (1 - \cos 4x)\, dx = x/8 - \sin 4x/32 + C$.

**Example 3.** $\int \sin x \cos^4 x\, dx = -\int u^4\, du = -u^5/5 + C = -\cos^5 x/5 + C$, with $u = \cos x$.

### Powers of $\tan$ and $\sec$

Integrals of $\int \tan^m x \sec^n x\, dx$ are similarly classified by parity:

- $\int \sec^2 x \tan^m x\, dx = \int (1 + u^2) u^{m/2}\, du$ with $u = \tan x$, $du = \sec^2 x\, dx$.
- $\int \sec x \tan^n x\, dx = \int u^{n-1} du$ with $u = \sec x$, $du = \sec x \tan x\, dx$.
- $\int \tan^m x\, dx$ with $m$ odd: factor out $\sec^2 x$ and use $u = \tan x$.
- $\int \sec^n x\, dx$ with $n$ even: factor out $\sec^2 x$ and use $u = \tan x$.

The reduction formula $\int \sec x\, dx = \ln|\sec x + \tan x| + C$ is a classical result, derived by integration by parts.

### Trigonometric substitution

Trigonometric substitution turns square-root integrands into rational functions. The standard substitutions are:

- $\sqrt{a^2 - x^2}$: substitute $x = a \sin\theta$, $dx = a \cos\theta\, d\theta$, $\sqrt{a^2 - x^2} = a \cos\theta$.
- $\sqrt{a^2 + x^2}$: substitute $x = a \tan\theta$, $dx = a \sec^2\theta\, d\theta$, $\sqrt{a^2 + x^2} = a \sec\theta$.
- $\sqrt{x^2 - a^2}$: substitute $x = a \sec\theta$, $dx = a \sec\theta \tan\theta\, d\theta$, $\sqrt{x^2 - a^2} = a \tan\theta$.

After substitution, the integrand becomes a rational function of $\sin\theta$ and $\cos\theta$, which can be integrated using the techniques above.

**Example 1.** $\int \sqrt{a^2 - x^2}\, dx$.

Let $x = a \sin\theta$, $dx = a \cos\theta\, d\theta$:

$$\int \sqrt{a^2 - a^2 \sin^2\theta} \cdot a \cos\theta\, d\theta = a^2 \int \cos^2\theta\, d\theta = \frac{a^2}{2} \int (1 + \cos 2\theta)\, d\theta = \frac{a^2}{2}\left(\theta + \frac{\sin 2\theta}{2}\right) + C.$$

Substitute back: $\theta = \arcsin(x/a)$, $\sin 2\theta = 2 \sin\theta \cos\theta = 2 (x/a) \sqrt{1 - (x/a)^2} = (2 x/a^2) \sqrt{a^2 - x^2}$. So

$$\int \sqrt{a^2 - x^2}\, dx = \frac{a^2}{2} \arcsin(x/a) + \frac{x \sqrt{a^2 - x^2}}{2} + C.$$

This is the formula for the area of a circular segment; it is also a standard result used in deriving the area and arc length of a circle.

**Example 2.** $\int \frac{dx}{\sqrt{a^2 + x^2}}$.

Let $x = a \tan\theta$, $dx = a \sec^2\theta\, d\theta$:

$$\int \frac{a \sec^2\theta\, d\theta}{a \sec\theta} = \int \sec\theta\, d\theta = \ln|\sec\theta + \tan\theta| + C.$$

Substitute back: $\tan\theta = x/a$, $\sec\theta = \sqrt{1 + \tan^2\theta} = \sqrt{1 + x^2/a^2} = \sqrt{a^2 + x^2}/a$. So

$$\int \frac{dx}{\sqrt{a^2 + x^2}} = \ln\left|\frac{\sqrt{a^2 + x^2}}{a} + \frac{x}{a}\right| + C = \sinh^{-1}(x/a) + C,$$

where the second form uses the inverse hyperbolic sine.

### The Weierstrass substitution

The **Weierstrass substitution** $t = \tan(x/2)$ converts any rational function of $\sin x$ and $\cos x$ into a rational function of $t$, which can be integrated by partial fractions. The substitution uses the identities

$$\sin x = \frac{2 t}{1 + t^2}, \quad \cos x = \frac{1 - t^2}{1 + t^2}, \quad dx = \frac{2\, dt}{1 + t^2}.$$

The substitution is universal — it works for any trigonometric rational integrand — but it is sometimes more laborious than a tailored identity. It is most useful when the integrand is a complicated rational expression.

**Example.** $\int \frac{dx}{1 + \cos x}$.

Let $t = \tan(x/2)$, $1 + \cos x = 1 + (1 - t^2)/(1 + t^2) = (2 + 2 t^2 - 1 + t^2) / (1 + t^2) = (1 + 3 t^2)/(1 + t^2)$... wait, let me redo: $1 + \cos x = 1 + (1 - t^2)/(1 + t^2) = (1 + t^2 + 1 - t^2)/(1 + t^2) = 2/(1 + t^2)$. And $dx = 2\, dt/(1 + t^2)$. So

$$\int \frac{dx}{1 + \cos x} = \int \frac{2/(1 + t^2)}{2/(1 + t^2)}\, dt = \int 1\, dt = t + C = \tan(x/2) + C.$$

The result matches the standard identity $\int dx / (1 + \cos x) = \tan(x/2) + C$.

### Mixed substitutions and partial fractions

For integrands that combine trigonometric and algebraic parts, a sequence of substitutions is often needed. For example, $\int \frac{\sqrt{x}}{1 + \sqrt[3]{x}}\, dx$ can be tackled by the substitution $x = u^6$ (the LCD of the radical denominators), followed by a partial-fraction decomposition.

The integration of rational functions by partial fractions is covered in Lesson m3-l3.

### Trigonometric integrals in physics

- **Arc length of a curve**: $L = \int \sqrt{1 + (dy/dx)^2}\, dx$. For a circle of radius $R$, $y = \sqrt{R^2 - x^2}$ and the integrand simplifies; the arc length is $2 \pi R$ for a full circle.
- **Period of a pendulum**: $T = 4 \int_0^{A} dx / \sqrt{2 g (\cos x - \cos A)}$, which is an elliptic integral of the first kind. Approximate evaluation uses trigonometric substitutions.
- **Energy of a particle in a sinusoidal potential**: $V(x) = V_0 \sin^2(k x)$. The work done by a force $F = -dV/dx = -2 V_0 k \sin(k x) \cos(k x) = -V_0 k \sin(2 k x)$ is the integral of this force, an example of a trigonometric integral.
- **Radiation from an accelerated charge (Larmor)**: the power involves the integral of $|\vec{a}|^2$ over a period, which reduces to integrals of $\sin^2$ and $\cos^2$ of the orbital frequency.

### Choosing a technique

The first decision is whether the integrand is a rational function (use partial fractions), a polynomial-exponential-trigonometric product (use integration by parts or tabular method), or contains a square root (use trigonometric substitution).

For a trigonometric integrand, the standard order is:

1. Try a direct antiderivative rule.
2. Apply an identity (half-angle, Pythagorean, sum-to-product) to simplify.
3. Use $u$-substitution on the simplified integrand.
4. Use integration by parts for products with unlike functions.
5. Use the Weierstrass substitution as a last resort.

The art of integration is knowing which technique to try first; practice builds the intuition.

## Key Ideas

- Products of $\sin$ and $\cos$: classify by parity of the powers; use the half-angle identities for both even.
- Trigonometric substitutions: $\sqrt{a^2 - x^2}$ via $x = a \sin\theta$, $\sqrt{a^2 + x^2}$ via $x = a \tan\theta$, $\sqrt{x^2 - a^2}$ via $x = a \sec\theta$.
- Weierstrass substitution: $t = \tan(x/2)$, the universal method for rational trigonometric integrands.
- Order of attack: direct rule → identity → $u$-substitution → integration by parts → Weierstrass.
- Physics applications: arc length, period of a pendulum, radiation from an accelerated charge.

## Worked Examples

### Example 1 — $\int \sin^4 x\, dx$

Compute $\int \sin^4 x\, dx$.

**Solution.** Both powers even. Use the half-angle identity $\sin^2 x = (1 - \cos 2x)/2$:

$$\int \sin^4 x\, dx = \int \left(\frac{1 - \cos 2x}{2}\right)^2 dx = \int \frac{1 - 2 \cos 2x + \cos^2 2x}{4}\, dx.$$

Apply the half-angle identity again to $\cos^2 2x = (1 + \cos 4x)/2$:

$$\int \sin^4 x\, dx = \int \frac{1 - 2 \cos 2x + (1 + \cos 4x)/2}{4}\, dx = \int \frac{3/2 - 2 \cos 2x + \cos 4x/2}{4}\, dx$$

$$= \int \left(\frac{3}{8} - \frac{\cos 2x}{2} + \frac{\cos 4x}{8}\right) dx = \frac{3 x}{8} - \frac{\sin 2x}{4} + \frac{\sin 4x}{32} + C.$$

### Example 2 — $\int \frac{dx}{x^2 \sqrt{x^2 + 9}}$

Compute $\int \frac{dx}{x^2 \sqrt{x^2 + 9}}$.

**Solution.** Let $x = 3 \tan\theta$, $dx = 3 \sec^2\theta\, d\theta$, $\sqrt{x^2 + 9} = 3 \sec\theta$:

$$\int \frac{3 \sec^2\theta\, d\theta}{9 \tan^2\theta \cdot 3 \sec\theta} = \frac{1}{9} \int \frac{\sec\theta}{\tan^2\theta}\, d\theta = \frac{1}{9} \int \frac{\cos\theta}{\sin^2\theta}\, d\theta = -\frac{1}{9 \sin\theta} + C.$$

Substitute back: $\sin\theta = x / \sqrt{x^2 + 9}$, so $-\frac{1}{9 \sin\theta} = -\frac{\sqrt{x^2 + 9}}{9 x}$. Hence

$$\int \frac{dx}{x^2 \sqrt{x^2 + 9}} = -\frac{\sqrt{x^2 + 9}}{9 x} + C.$$

### Example 3 — Weierstrass: $\int \frac{dx}{2 + \sin x}$

Compute $\int \frac{dx}{2 + \sin x}$.

**Solution.** Let $t = \tan(x/2)$, $\sin x = 2 t / (1 + t^2)$, $dx = 2 dt / (1 + t^2)$:

$$2 + \sin x = 2 + \frac{2 t}{1 + t^2} = \frac{2 (1 + t^2) + 2 t}{1 + t^2} = \frac{2 + 2 t + 2 t^2}{1 + t^2} = \frac{2 (1 + t + t^2)}{1 + t^2}.$$

So the integral becomes

$$\int \frac{2 / (1 + t^2)}{2 (1 + t + t^2) / (1 + t^2)}\, dt = \int \frac{dt}{1 + t + t^2}.$$

Complete the square: $1 + t + t^2 = (t + 1/2)^2 + 3/4$. The integral is

$$\int \frac{dt}{(t + 1/2)^2 + 3/4} = \frac{2}{\sqrt{3}} \arctan\left(\frac{2 t + 1}{\sqrt{3}}\right) + C = \frac{2}{\sqrt{3}} \arctan\left(\frac{2 \tan(x/2) + 1}{\sqrt{3}}\right) + C.$$

## Common Misconceptions

- **"Trigonometric substitution is always needed for square roots."** Sometimes direct $u$-substitution works (e.g. $\int x \sqrt{1 + x^2}\, dx$ via $u = 1 + x^2$).
- **"The Weierstrass substitution is the universal method."** It is universal but sometimes laborious. Tailored identities are often faster.
- **"$\int \sec x\, dx$ is a fundamental result."** It is derived, not fundamental; the derivation uses integration by parts.
- **"Both $\sin^m x \cos^n x$ with $m$ even and $n$ even need half-angle reduction."** Yes — that is the only systematic way; the half-angle identity is the standard tool.
- **"The choice of substitution affects the final answer."** The antiderivative is unique up to a constant; different substitutions give equivalent results (modulo constants).

## Connections

- Trigonometric integrals are the workhorse of wave physics (Fourier series, normal modes, wave equations).
- The arc length and surface area formulas use $\sqrt{1 + (dy/dx)^2}$ and similar integrands, which are evaluated by trigonometric substitution.
- Special functions (elliptic integrals, Bessel functions) arise when standard techniques fail; they are themselves defined by integrals.
- Trigonometric substitutions are the basis of the integrals of inverse trig functions: $\int dx / \sqrt{1 - x^2} = \arcsin x$, etc.
- The Weierstrass substitution connects trigonometric integrals to the calculus of rational functions; the partial-fraction decomposition is the next step.

## Quick Check

1. Compute $\int \cos^3 x\, dx$.
2. Compute $\int \sin^2 x \cos^4 x\, dx$.
3. Compute $\int \frac{dx}{\sqrt{4 - x^2}}$.
4. Compute $\int \frac{dx}{x^2 + 4}$ by completing the square (no trig sub needed).
5. State the Weierstrass substitution and the identities it produces.

## Takeaway

- Classify by parity; use the half-angle identity for both-even powers of $\sin$ and $\cos$.
- Trigonometric substitutions handle square-root integrands systematically.
- The Weierstrass substitution is the universal method for trigonometric rational integrands.
- Choose the technique by the structure of the integrand; practice builds the intuition.
- Physics applications include arc length, period of a pendulum, and radiation from an accelerated charge.
