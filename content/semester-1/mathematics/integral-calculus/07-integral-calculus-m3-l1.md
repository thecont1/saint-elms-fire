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
lessonId: integral-calculus-m3-l1
lessonName: Integration by Parts
lessonNumber: 7
moduleNumber: 3
semesterNumber: 1
difficulty: advanced
estimatedStudyMinutes: 50
releaseOrder: 7
prerequisites:
  - integral-calculus-m1-l3
learningObjectives:
  - Apply the integration-by-parts formula to integrate products of unlike functions.
  - Choose $u$ and $dv$ strategically (LIATE rule).
  - Use repeated integration by parts and the tabular method.
concepts:
  - Integration by parts
  - LIATE rule
  - Tabular method
  - Cyclic integrals
  - Reduction formulas
tags:
  - mathematics
  - calculus
  - integration
  - integration-by-parts
sourceType: authored-courseware
assessmentHints:
  - conceptual
  - derivation
  - problem-solving
  - short-answer
***

# Integration by Parts

## Overview

Integration by parts is the integration analogue of the product rule for differentiation. It converts the integral of a product $\int u\, dv$ into a different integral $\int v\, du$, chosen to be simpler. The technique is essential for products of unlike functions (e.g. $x e^x$, $x \sin x$, $\ln x$, $\arcsin x$). The lesson develops the formula, the strategic choice of $u$ and $dv$ (formalised by the LIATE rule), and two generalisations: repeated integration by parts and the tabular method. The lesson closes with examples from physics, including the integrals that appear in the derivation of Planck's blackbody spectrum and the Larmor formula for radiation.

## Learning Path

- **What you should already know**: the antiderivative rules from Module 1; the definite integral and the fundamental theorem from Module 2.
- **What this lesson adds**: the integration-by-parts formula; the strategic choice of $u$ and $dv$; the LIATE mnemonic; repeated integration by parts; the tabular method.
- **What later lessons this will unlock**: trigonometric integrals in Lesson m3-l2, improper integrals in Lesson m3-l3, and the derivation of physical laws from first principles (e.g. the energy of a harmonic oscillator from $\int x \sin^2(\omega t)\, dt$).

## Core Explanation

### The formula

The integration-by-parts formula is the product rule for differentiation, integrated:

$$\int u\, dv = u v - \int v\, du.$$

The derivation: $d(uv) = u\, dv + v\, du$, so $\int d(uv) = \int u\, dv + \int v\, du$, hence $\int u\, dv = uv - \int v\, du$.

In practice, the formula is used to convert a difficult integral on the left into a different (hopefully easier) integral on the right. The art is in choosing $u$ and $dv$ to make the new integral simpler than the original.

### The LIATE rule

A useful mnemonic for the choice of $u$ is the **LIATE rule** (logarithmic, inverse-trigonometric, algebraic, trigonometric, exponential). The first function in the LIATE order is the best choice for $u$; the second function becomes $dv$. The rationale is that the $u$ you choose is differentiated (which simplifies logarithmic, inverse-trig, and algebraic functions) and the $dv$ you choose is integrated (which is easy for trigonometric and exponential functions).

**Examples of LIATE choices:**

| Integrand | $u$ | $dv$ |
|---|---|---|
| $x e^x\, dx$ | $x$ (A) | $e^x\, dx$ (E) |
| $x \sin x\, dx$ | $x$ (A) | $\sin x\, dx$ (T) |
| $\ln x\, dx$ | $\ln x$ (L) | $dx$ (A) |
| $x^2 \ln x\, dx$ | $\ln x$ (L) | $x^2\, dx$ (A) |
| $\arcsin x\, dx$ | $\arcsin x$ (I) | $dx$ (A) |
| $e^x \sin x\, dx$ | $e^x$ (E) or $\sin x$ (T) | other $dx$ |

The LIATE rule is a heuristic, not a theorem. Sometimes a non-LIATE choice works better, especially when the original integral has a special structure.

### Worked examples

**Example A.** $\int x e^x\, dx$.

Choose $u = x$ (A), $dv = e^x\, dx$ (E). Then $du = dx$, $v = e^x$. By integration by parts:

$$\int x e^x\, dx = x e^x - \int e^x\, dx = x e^x - e^x + C = (x - 1) e^x + C.$$

Check by differentiation: $\frac{d}{dx}[(x - 1) e^x] = e^x + (x - 1) e^x = x e^x$. ✓

**Example B.** $\int x^2 \ln x\, dx$.

Choose $u = \ln x$ (L), $dv = x^2\, dx$ (A). Then $du = dx/x$, $v = x^3/3$. By integration by parts:

$$\int x^2 \ln x\, dx = \frac{x^3}{3} \ln x - \int \frac{x^3}{3} \cdot \frac{1}{x}\, dx = \frac{x^3}{3} \ln x - \frac{1}{3} \int x^2\, dx = \frac{x^3}{3} \ln x - \frac{x^3}{9} + C.$$

Check: $\frac{d}{dx}\left[\frac{x^3}{3} \ln x - \frac{x^3}{9}\right] = x^2 \ln x + \frac{x^2}{3} - \frac{x^2}{3} = x^2 \ln x$. ✓

**Example C.** $\int \ln x\, dx$.

Choose $u = \ln x$ (L), $dv = dx$ (A). Then $du = dx/x$, $v = x$. By integration by parts:

$$\int \ln x\, dx = x \ln x - \int x \cdot \frac{1}{x}\, dx = x \ln x - \int 1\, dx = x \ln x - x + C.$$

Check: $\frac{d}{dx}[x \ln x - x] = \ln x + 1 - 1 = \ln x$. ✓

**Example D.** $\int \arcsin x\, dx$.

Choose $u = \arcsin x$ (I), $dv = dx$ (A). Then $du = dx/\sqrt{1 - x^2}$, $v = x$. By integration by parts:

$$\int \arcsin x\, dx = x \arcsin x - \int \frac{x}{\sqrt{1 - x^2}}\, dx = x \arcsin x + \sqrt{1 - x^2} + C,$$

where the second integral is done by $u = 1 - x^2$, $du = -2 x\, dx$.

### Repeated integration by parts

When integration by parts produces another integration-by-parts integral (and the second produces a third, and so on), the technique is called **repeated integration by parts**. The process terminates when the integral on the right is recognisable or matches a known form.

**Example.** $\int x^2 e^x\, dx$.

Apply integration by parts with $u = x^2$, $dv = e^x\, dx$:

$$\int x^2 e^x\, dx = x^2 e^x - \int 2 x e^x\, dx.$$

The remaining integral is $\int 2 x e^x\, dx = 2 (x - 1) e^x + C$ (from Example A). So

$$\int x^2 e^x\, dx = x^2 e^x - 2 (x - 1) e^x + C = (x^2 - 2 x + 2) e^x + C.$$

In general, $\int x^n e^x\, dx = (x^n - n x^{n-1} + n (n-1) x^{n-2} - \ldots + (-1)^n n!) e^x + C$, an alternating sum of falling factorials times $e^x$.

### The tabular method

For repeated integration by parts, the **tabular method** (also called the DI method) is a systematic way to organise the calculation. Write a column for $u$ and a column for $dv$, alternating with the signs $+, -, +, -, \ldots$. Differentiate $u$ down the column; integrate $dv$ down the column. Multiply pairs and sum with alternating signs.

For $\int x^2 e^x\, dx$:

| Sign | $u$ and derivatives | $v$ and antiderivatives |
|---|---|---|
| $+$ | $x^2$ | $e^x$ |
| $-$ | $2 x$ | $e^x$ |
| $+$ | $2$ | $e^x$ |
| $-$ | $0$ | $e^x$ |

Sum: $x^2 e^x - 2 x e^x + 2 e^x = (x^2 - 2 x + 2) e^x$. ✓ (Same answer as above.)

The tabular method works whenever repeated differentiation of $u$ eventually gives zero (e.g. for polynomials times elementary functions). It is a clean way to avoid the bookkeeping of repeated integration by parts.

### Cyclic integrals

When integration by parts produces a multiple of the original integral, the technique is called **cyclic integration by parts**. The trick is to add the result to the original, solve for the integral, and obtain the antiderivative.

**Example.** $\int e^x \sin x\, dx$.

Apply integration by parts with $u = e^x$, $dv = \sin x\, dx$:

$$\int e^x \sin x\, dx = -e^x \cos x + \int e^x \cos x\, dx.$$

Apply integration by parts again with $u = e^x$, $dv = \cos x\, dx$:

$$\int e^x \cos x\, dx = e^x \sin x - \int e^x \sin x\, dx.$$

Substitute back:

$$\int e^x \sin x\, dx = -e^x \cos x + e^x \sin x - \int e^x \sin x\, dx.$$

Add $\int e^x \sin x\, dx$ to both sides:

$$2 \int e^x \sin x\, dx = -e^x \cos x + e^x \sin x + C,$$

$$\int e^x \sin x\, dx = \frac{e^x (\sin x - \cos x)}{2} + C.$$

Cyclic integration by parts is a standard technique; it appears in many physics problems (e.g. driven oscillations, AC analysis).

### Reduction formulas

A **reduction formula** expresses an integral involving a high power in terms of an integral involving a lower power. The formula is obtained by integration by parts and can be applied repeatedly until the power reaches a base case.

**Example.** The reduction formula for $\int \sin^n x\, dx$:

$$I_n = \int \sin^n x\, dx, \quad I_n = -\frac{\sin^{n-1} x \cos x}{n} + \frac{n - 1}{n} I_{n-2}.$$

Derivation: write $\sin^n x = \sin^{n-1} x \cdot \sin x$ and integrate by parts with $u = \sin^{n-1} x$, $dv = \sin x\, dx$. The result is the formula. The base case is $I_0 = x$ or $I_1 = -\cos x$. Repeated application reduces any $n$ to one of these.

Reduction formulas are powerful for integrals that cannot be evaluated in closed form by a single technique.

### Integration by parts in physics

- **Work done by a force with a position-dependent magnitude**: $W = \int F(x)\, dx$. When $F$ is itself a product, integration by parts may help (e.g. $F = x e^{-x^2}$, the work is an antiderivative obtained by parts).
- **Energy stored in a capacitor with a non-linear dielectric**: $U = \int V(q)\, dq$. The integral may require parts.
- **Larmor formula derivation**: $\int r^2 \sin^2(\omega t)\, dt$ uses parts with $u = r^2$, $dv = \sin^2(\omega t)\, dt$.
- **Blackbody spectrum derivation (Planck)**: the integral $\int_0^\infty \nu^3 / (e^{h \nu / k T} - 1)\, d\nu$ ultimately reduces to $\int_0^\infty x^3 / (e^x - 1)\, dx$, which is the Riemann zeta function times factorials.

### Verifying integration-by-parts results

The standard check is differentiation. For the example $\int x e^x\, dx = (x - 1) e^x + C$:

$$\frac{d}{dx}[(x - 1) e^x] = e^x + (x - 1) e^x = x e^x. \checkmark$$

For cyclic integrals, the result is more complex; the check is to differentiate and confirm the integrand.

## Key Ideas

- Integration by parts: $\int u\, dv = uv - \int v\, du$.
- LIATE: choose $u$ as L, I, A, T, E in that priority order.
- Repeated integration by parts: apply the formula more than once, often with the tabular method.
- Cyclic integration by parts: when the new integral is a multiple of the original, add and solve.
- Reduction formulas: express $I_n$ in terms of $I_{n-1}$ or $I_{n-2}$ and apply repeatedly.
- Always verify by differentiation.

## Worked Examples

### Example 1 — $x \cos x$

Compute $\int x \cos x\, dx$.

**Solution.** LIATE: $u = x$ (A), $dv = \cos x\, dx$ (T). Then $du = dx$, $v = \sin x$. By integration by parts:

$$\int x \cos x\, dx = x \sin x - \int \sin x\, dx = x \sin x + \cos x + C.$$

Check: $\frac{d}{dx}[x \sin x + \cos x] = \sin x + x \cos x - \sin x = x \cos x$. ✓

### Example 2 — $\arcsin x$ via parts

Compute $\int \arcsin x\, dx$.

**Solution.** LIATE: $u = \arcsin x$ (I), $dv = dx$ (A). Then $du = dx/\sqrt{1 - x^2}$, $v = x$. By integration by parts:

$$\int \arcsin x\, dx = x \arcsin x - \int \frac{x}{\sqrt{1 - x^2}}\, dx.$$

The remaining integral: let $w = 1 - x^2$, $dw = -2 x\, dx$, so $x\, dx = -dw/2$. Then

$$\int \frac{x}{\sqrt{1 - x^2}}\, dx = -\frac{1}{2} \int w^{-1/2}\, dw = -\sqrt{w} + C = -\sqrt{1 - x^2} + C.$$

So $\int \arcsin x\, dx = x \arcsin x + \sqrt{1 - x^2} + C$.

### Example 3 — Cyclic: $e^x \cos x$

Compute $\int e^x \cos x\, dx$.

**Solution.** First application of parts: $u = e^x$, $dv = \cos x\, dx$, $du = e^x\, dx$, $v = \sin x$:

$$\int e^x \cos x\, dx = e^x \sin x - \int e^x \sin x\, dx.$$

Second application: $u = e^x$, $dv = \sin x\, dx$, $du = e^x\, dx$, $v = -\cos x$:

$$\int e^x \sin x\, dx = -e^x \cos x + \int e^x \cos x\, dx.$$

Substitute back:

$$\int e^x \cos x\, dx = e^x \sin x - (-e^x \cos x + \int e^x \cos x\, dx) = e^x \sin x + e^x \cos x - \int e^x \cos x\, dx.$$

So $2 \int e^x \cos x\, dx = e^x (\sin x + \cos x) + C$, hence $\int e^x \cos x\, dx = \frac{e^x (\sin x + \cos x)}{2} + C$.

## Common Misconceptions

- **"Integration by parts always works."** No. Some integrals cannot be evaluated in closed form by any sequence of standard techniques. The error function $\int e^{-x^2} dx$ has no elementary antiderivative.
- **"The LIATE rule is always correct."** It is a heuristic. Some non-LIATE choices are better in specific cases (e.g. when the original integrand has a special structure).
- **"Cyclic integration by parts always terminates."** It does when the cycle closes. Some products (e.g. $e^x \cdot \sec x$) produce integrals that grow more complex with each application; the technique does not converge.
- **"The constant of integration appears in cyclic integrals."** It can be added at the end; the algebraic manipulation may obscure the constant until the final step.
- **"The tabular method only works for polynomials."** It works whenever repeated differentiation of $u$ eventually gives zero, including products of polynomials and elementary functions.

## Connections

- Integration by parts is the inverse of the product rule, just as $u$-substitution is the inverse of the chain rule.
- Cyclic integration by parts is the basis of the integral $\int e^{a x} \sin(b x)\, dx$ and its relatives, which appear in the analysis of driven oscillators and AC circuits.
- Reduction formulas are the workhorse for integrals of high powers, such as $\int \sin^n x\, dx$ used in the Fourier series of powers of sines.
- The integration-by-parts derivation of the energy of the blackbody spectrum is a classic result of statistical mechanics.
- In probability, integration by parts is the basis of the expectation-variance formula $E[X^2] = \text{Var}(X) + (E[X])^2$.

## Quick Check

1. Compute $\int x \sin x\, dx$.
2. Compute $\int x \ln x\, dx$.
3. Compute $\int e^{2 x} \sin x\, dx$ by cyclic integration by parts.
4. State the LIATE rule in your own words.
5. Apply the tabular method to $\int x^3 e^x\, dx$.

## Takeaway

- Integration by parts is the inverse of the product rule.
- LIATE guides the choice of $u$; the choice of $dv$ is determined.
- Repeated applications handle products of polynomials and elementary functions.
- Cyclic integration by parts handles integrals that return a multiple of themselves.
- Reduction formulas reduce high powers to a base case.
- Always verify by differentiation.
