***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-1
semesterName: Semester 1
subjectId: mathematics
subjectName: Mathematics
courseId: integral-calculus
courseName: Integral Calculus
moduleId: integral-calculus-module-1
moduleName: Antiderivatives and Indefinite Integrals
lessonId: integral-calculus-m1-l2
lessonName: Integration Rules for Power, Exponential and Trigonometric Functions
lessonNumber: 2
moduleNumber: 1
semesterNumber: 1
difficulty: foundation
estimatedStudyMinutes: 50
releaseOrder: 2
prerequisites:
  - integral-calculus-m1-l1
learningObjectives:
  - Apply the power rule, exponential rule, and trigonometric rules for integration.
  - Combine rules to integrate sums, differences, and constant multiples.
  - Recognise when a function must be rearranged before integration.
concepts:
  - Power rule
  - Exponential integration
  - Trigonometric integration
  - Linearity of integration
  - Half-angle substitution
tags:
  - mathematics
  - calculus
  - integration
sourceType: authored-courseware
assessmentHints:
  - conceptual
  - derivation
  - problem-solving
  - short-answer
***

# Integration Rules for Power, Exponential and Trigonometric Functions

## Overview

This lesson catalogues the basic integration rules that follow directly from the corresponding differentiation rules. The power rule, the exponential rule, and the trigonometric rules are the everyday tools of integration: together with the linearity of the integral, they cover the vast majority of integrands you will meet in the first-year physics and mathematics curriculum. The lesson emphasises the algebraic rearrangements that are often needed before a rule can be applied (e.g. rewriting a fractional power as $x^{p}$, splitting a constant from the variable, expressing a function in terms of $\sin$ and $\cos$). The lesson closes with a catalogue of common errors and the geometric interpretation of the result.

## Learning Path

- **What you should already know**: the power rule of differentiation; the derivatives of $e^x$, $\sin x$, $\cos x$, $\tan x$, $\sec x$, $\ln x$.
- **What this lesson adds**: the corresponding rules of integration; the linearity of the integral; common algebraic rearrangements before integration.
- **What later lessons this will unlock**: the substitution rule in Lesson m1-l3, definite integrals and applications in Module 2, advanced techniques in Module 3.

## Core Explanation

### Linearity of integration

The integral is **linear**:

$$\int [a f(x) + b g(x)]\, dx = a \int f(x)\, dx + b \int g(x)\, dx,$$

where $a$ and $b$ are constants. Linearity means that integrals of sums are sums of integrals, and constant factors can be pulled out. Linearity is the workhorse of integration: most integrands are sums of elementary functions, and each term can be integrated separately.

### The power rule

The power rule for integration is the inverse of the power rule for differentiation:

$$\int x^n\, dx = \frac{x^{n+1}}{n+1} + C, \quad n \ne -1.$$

For $n = -1$ the rule fails because the denominator $n + 1$ vanishes; the special case is

$$\int \frac{1}{x}\, dx = \ln |x| + C.$$

The absolute value is needed because the logarithm is defined only for positive arguments, but the antiderivative $1/x$ is defined for both positive and negative $x$.

**Worked examples.**

- $\int x^5\, dx = x^6/6 + C$.
- $\int \sqrt{x}\, dx = \int x^{1/2}\, dx = \frac{x^{3/2}}{3/2} + C = \frac{2}{3} x^{3/2} + C$.
- $\int \frac{1}{x^3}\, dx = \int x^{-3}\, dx = \frac{x^{-2}}{-2} + C = -\frac{1}{2 x^2} + C$.

### The exponential rule

The exponential function $e^x$ is its own derivative, so it is also its own antiderivative:

$$\int e^x\, dx = e^x + C.$$

More generally, $\int e^{k x}\, dx = \frac{1}{k} e^{k x} + C$ (the $1/k$ appears because the chain rule gives the derivative of $e^{kx}$ as $k e^{kx}$).

For $a^x$ with $a > 0, a \ne 1$:

$$\int a^x\, dx = \frac{a^x}{\ln a} + C.$$

This is the natural generalisation of $e^x = a^x$ for $a = e$ (in which case $\ln a = 1$ and the formula reduces to $\int e^x\, dx = e^x + C$).

### The logarithmic rule

The integral of $1/x$ is $\ln|x|$. More generally, the integral of a derivative of the form $f'(x)/f(x)$ is $\ln|f(x)|$:

$$\int \frac{f'(x)}{f(x)}\, dx = \ln |f(x)| + C.$$

This is the basis of the integration of $\int \tan x\, dx$ (since $\tan x = \sin x / \cos x$ and the derivative of $\cos x$ is $-\sin x$) and of many rational-function integrals.

### The trigonometric rules

The trigonometric antiderivatives follow directly from the corresponding derivatives:

| Function | Antiderivative |
|---|---|
| $\sin x$ | $-\cos x + C$ |
| $\cos x$ | $\sin x + C$ |
| $\sec^2 x$ | $\tan x + C$ |
| $\sec x \tan x$ | $\sec x + C$ |
| $\csc^2 x$ | $-\cot x + C$ |
| $\csc x \cot x$ | $-\csc x + C$ |

The most-used pair is $\int \sin x\, dx = -\cos x + C$ and $\int \cos x\, dx = \sin x + C$. The other rules are less common in the first year but appear in advanced topics (e.g. in the integrands of elliptic integrals and in the differential equations of oscillations).

### Combinations and rearrangements

The trick to most integration problems is to rearrange the integrand into a form to which a rule applies. Common rearrangements:

- **Factor out constants**: $\int 3 \sin x\, dx = 3 \int \sin x\, dx = -3 \cos x + C$.
- **Combine like terms**: $\int (e^x + 2 e^x)\, dx = \int 3 e^x\, dx = 3 e^x + C$.
- **Rewrite as a power**: $\int \frac{1}{\sqrt{x}}\, dx = \int x^{-1/2}\, dx = 2 \sqrt{x} + C$.
- **Rewrite using a trig identity**: $\int \sin^2 x\, dx = \int \frac{1 - \cos(2 x)}{2}\, dx = \frac{x}{2} - \frac{\sin(2 x)}{4} + C$.
- **Split a sum**: $\int (a + b)\, dx$ where $a$ and $b$ are constants, or $\int (f + g)\, dx = \int f\, dx + \int g\, dx$.

### Common patterns

The following patterns appear repeatedly in physics:

- **Position from velocity**: $x(t) = \int v(t)\, dt + x_0$.
- **Velocity from acceleration**: $v(t) = \int a(t)\, dt + v_0$.
- **Charge from current**: $Q(t) = \int I(t)\, dt + Q_0$.
- **Energy from power**: $E(t) = \int P(t)\, dt + E_0$.

In each case the integrand is a function of time, and the antiderivative is the time-integrated quantity, with the constant of integration being the initial value.

### Verification

The most reliable check on an antiderivative is differentiation. Given a candidate $F(x)$ for an antiderivative of $f(x)$, compute $F'(x)$ and confirm it equals $f(x)$. This is especially useful in physics, where the physical units and limits often reveal errors that pure algebraic manipulation would not.

### Geometric meaning

The graph of an antiderivative $F(x)$ is determined by the integrand $f(x) = F'(x)$: at every point, the slope of the graph of $F$ equals the value of $f$ at that point. Drawing the graph of $F$ from the graph of $f$ is a useful sanity check, especially for integrals that appear in physics (e.g. position from velocity, energy from power).

### Algebraic and trigonometric identities

Many integrals require a trigonometric or algebraic identity before a rule applies. The most common:

- Pythagorean: $\sin^2 x + \cos^2 x = 1$.
- Half-angle: $\sin^2 x = (1 - \cos 2x)/2$, $\cos^2 x = (1 + \cos 2x)/2$.
- Double-angle: $\sin 2x = 2 \sin x \cos x$, $\cos 2x = \cos^2 x - \sin^2 x$.
- Sum-to-product: $\sin A + \sin B = 2 \sin\frac{A+B}{2} \cos\frac{A-B}{2}$.

A working knowledge of these identities is part of the integration toolkit.

## Key Ideas

- The integral is linear: sum and constant multiple come outside.
- Power rule: $\int x^n\, dx = x^{n+1}/(n+1) + C$ for $n \ne -1$.
- $\int 1/x\, dx = \ln|x| + C$.
- $\int e^x\, dx = e^x + C$; $\int e^{kx}\, dx = e^{kx}/k + C$.
- The trigonometric antiderivatives follow the corresponding derivatives with a sign change.
- Rearrangement (factoring, combining, identity substitution) is often the key to applying a rule.

## Worked Examples

### Example 1 — Polynomial integral

Compute $\int (2 x^3 - 5 x^2 + 7 x - 3) dx$.

**Solution.** Use linearity and the power rule term by term:

$$\int 2 x^3\, dx = 2 \cdot \frac{x^4}{4} = \frac{x^4}{2},$$
$$\int -5 x^2\, dx = -5 \cdot \frac{x^3}{3} = -\frac{5 x^3}{3},$$
$$\int 7 x\, dx = 7 \cdot \frac{x^2}{2} = \frac{7 x^2}{2},$$
$$\int -3\, dx = -3 x.$$

Total: $\frac{x^4}{2} - \frac{5 x^3}{3} + \frac{7 x^2}{2} - 3 x + C$. Check by differentiation: $\frac{d}{dx}\left[\frac{x^4}{2} - \frac{5 x^3}{3} + \frac{7 x^2}{2} - 3 x\right] = 2 x^3 - 5 x^2 + 7 x - 3$. ✓

### Example 2 — Exponential integral with linear argument

Compute $\int 3 e^{2 x} dx$.

**Solution.** Use $\int e^{k x}\, dx = e^{k x}/k + C$ with $k = 2$:

$$\int 3 e^{2 x}\, dx = 3 \cdot \frac{e^{2 x}}{2} + C = \frac{3}{2} e^{2 x} + C.$$

Check: $\frac{d}{dx}\left[\frac{3}{2} e^{2 x}\right] = \frac{3}{2} \cdot 2 e^{2 x} = 3 e^{2 x}$. ✓

### Example 3 — Trigonometric integral with identity

Compute $\int \sin^2 x\, dx$.

**Solution.** Use the half-angle identity $\sin^2 x = (1 - \cos 2x)/2$:

$$\int \sin^2 x\, dx = \int \frac{1 - \cos 2x}{2}\, dx = \frac{1}{2} \int (1 - \cos 2x)\, dx.$$

The first term integrates to $x/2$; the second term integrates to $-\sin 2x / 4$ (using $\int \cos 2x\, dx = \sin 2x/2$ and the sign change). Total:

$$\int \sin^2 x\, dx = \frac{x}{2} - \frac{\sin 2 x}{4} + C.$$

Check by differentiation: $\frac{d}{dx}\left[\frac{x}{2} - \frac{\sin 2 x}{4}\right] = \frac{1}{2} - \frac{1}{4} \cdot 2 \cos 2x = \frac{1 - \cos 2x}{2} = \sin^2 x$. ✓

## Common Misconceptions

- **"$\int 1/x\, dx = x/1$."** No. $\int 1/x\, dx = \ln|x| + C$. The exponent $-1$ is the only one to which the power rule does not apply.
- **"$\int e^{x^2}\, dx = e^{x^2}/(2 x) + C$."** No. $e^{x^2}$ has no elementary antiderivative; the integral is defined as a special function (the error function, after a change of variables).
- **"Trig integrals always need trig identities."** Sometimes; sometimes the integrand is already in a form that integrates directly. Try the rule first; reach for the identity only if the rule does not apply.
- **"You can ignore the absolute value in $\ln|x|$."** The absolute value is required if the integration domain crosses $x = 0$. In definite integrals you must use the logarithm's branch cut carefully.
- **"$\sin^2 x$ integrates to $-\cos^2 x/2$."** Almost. $\int \sin^2 x\, dx = (x - \sin 2x/2)/2 + C = x/2 - \sin 2x/4 + C$. The half-angle identity is the right tool; the simple chain rule does not apply because the argument is the same.

## Connections

- The rules of this lesson are the inverse of the rules of differentiation from the Differential Calculus course.
- The linearity of integration is the workhorse that lets you split a complicated integrand into manageable pieces.
- The power rule, exponential rule, and trigonometric rules cover the integrands in most first-year physics: position from velocity, charge from current, energy from power, work from force.
- Half-angle and double-angle identities are the basis of the integration of $\sin^2$ and $\cos^2$, which appear in the average of a sinusoidal signal (e.g. AC power).
- The next lesson introduces substitution, which is the workhorse technique for integrands that are composites of elementary functions.

## Quick Check

1. Compute $\int (4 x^3 - 6 x + 5) dx$.
2. Compute $\int \frac{1}{x^2}\, dx$.
3. Compute $\int 5 e^{-x}\, dx$.
4. Compute $\int \cos(3 x)\, dx$.
5. Compute $\int \cos^2 x\, dx$ using a half-angle identity.

## Takeaway

- The power rule, exponential rule, and trigonometric rules cover the elementary antiderivatives.
- Linearity splits sums and pulls out constants.
- The integrand often needs rearrangement (factoring, identities) before a rule applies.
- Verification by differentiation is the most reliable check.
- These rules are the foundation of the substitution technique in the next lesson.
