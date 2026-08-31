***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-3
semesterName: Semester 3
subjectId: mathematics
subjectName: Mathematics
courseId: real-analysis
courseName: Real Analysis
moduleId: real-analysis-module-3
moduleName: Riemann Integration
lessonId: real-analysis-m3-l3
lessonName: Fundamental Theorem of Calculus
lessonNumber: 9
moduleNumber: 3
semesterNumber: 3
difficulty: advanced
estimatedStudyMinutes: 55
releaseOrder: 9
prerequisites:
  - real-analysis-m3-l2
learningObjectives:
  - State the two parts of the Fundamental Theorem of Calculus (FTC).
  - Prove the FTC rigorously.
  - Use the FTC to evaluate definite integrals.
  - Recognise the relationship between differentiation and integration.
concepts:
  - Antiderivative
  - Fundamental Theorem of Calculus
  - Differentiation under the integral sign
  - Average value of a function
  - Change of variables
  - Integration by parts
tags:
  - mathematics
  - analysis
  - fundamental-theorem
sourceType: authored-courseware
assessmentHints:
  - derivation
  - problem-solving
  - conceptual
***

# Fundamental Theorem of Calculus

## Overview
The Fundamental Theorem of Calculus (FTC) ties together differentiation and integration — the two central operations of calculus. Part 1 says that the integral of a continuous function (as a function of its upper limit) is differentiable, with derivative equal to the integrand. Part 2 says that the definite integral of a continuous function can be evaluated using any antiderivative. The FTC is the workhorse of every applied calculation: area, work, energy, probability, all become a matter of finding antiderivatives.

## Learning Path
- What you should already know: the definition of the Riemann integral, the derivative, the MVT.
- What this lesson adds: a rigorous statement and proof of the FTC, plus the techniques of integration it makes possible.
- What it unlocks: every application of calculus in physics and engineering, and the basis of measure theory and the Lebesgue integral.

## Core Explanation
**The two parts of the FTC.**

*FTC Part 1.* If $f$ is continuous on $[a, b]$, then the function $F(x) = \int_a^x f(t)\, dt$ is differentiable on $(a, b)$ and $F'(x) = f(x)$ for all $x \in (a, b)$. At the endpoints, $F$ is right-differentiable at $a$ and left-differentiable at $b$.

*FTC Part 2.* If $f$ is continuous on $[a, b]$ and $G$ is any antiderivative of $f$ (i.e. $G' = f$), then

$$\int_a^b f(x)\, dx = G(b) - G(a).$$

This is the part used to evaluate definite integrals.

**Proof of FTC Part 1.** Let $F(x) = \int_a^x f(t)\, dt$ and $x_0 \in (a, b)$. For $h$ small,

$$F(x_0 + h) - F(x_0) = \int_{x_0}^{x_0 + h} f(t)\, dt.$$

By the mean value theorem for integrals, this is $f(c_h) h$ for some $c_h$ between $x_0$ and $x_0 + h$. As $h \to 0$, $c_h \to x_0$ and (by continuity of $f$) $f(c_h) \to f(x_0)$. So

$$\lim_{h \to 0} \frac{F(x_0 + h) - F(x_0)}{h} = \lim_{h \to 0} f(c_h) = f(x_0).$$

The case $h < 0$ is similar.

**Proof of FTC Part 2.** Let $F(x) = \int_a^x f(t)\, dt$. By Part 1, $F' = f$, so $F$ is an antiderivative of $f$. If $G$ is any other antiderivative, then $(G - F)' = 0$, so $G - F$ is constant on $(a, b)$, say $G - F = C$. Then $G(b) - G(a) = (F(b) + C) - (F(a) + C) = F(b) - F(a) = \int_a^b f(t)\, dt$.

**Average value of a function.** The average value of $f$ on $[a, b]$ is

$$\bar{f} = \frac{1}{b - a} \int_a^b f(x)\, dx.$$

By the MVT for integrals, this equals $f(c)$ for some $c \in (a, b)$ — there is always a point where the function equals its average.

**Antiderivatives.** An antiderivative of $f$ is a function $F$ with $F' = f$. The set of all antiderivatives is $\{F + C : C \in \mathbb{R}\}$. The integral $\int f(x)\, dx$ without limits is the *indefinite integral*, an antiderivative plus an arbitrary constant.

**Techniques of integration.** The FTC reduces the definite integral to finding an antiderivative. The main techniques are:
- *Substitution* ($u$-substitution): the chain rule in reverse.
- *Integration by parts*: the product rule in reverse.
- *Partial fractions*: decomposing rational functions.
- *Trigonometric substitutions*: for $\sqrt{a^2 - x^2}$, $\sqrt{a^2 + x^2}$, $\sqrt{x^2 - a^2}$.

**Substitution.** If $u = g(x)$ with $g$ continuously differentiable and $f$ continuous, then

$$\int f(g(x)) g'(x)\, dx = \int f(u)\, du.$$

This is the chain rule in reverse. Definite integral: $\int_a^b f(g(x)) g'(x)\, dx = \int_{g(a)}^{g(b)} f(u)\, du$.

**Integration by parts.** $\int u\, dv = u v - \int v\, du$. Comes from the product rule. Useful for $\int x e^x dx$ (let $u = x$, $dv = e^x dx$), $\int \ln x\, dx$ (let $u = \ln x$, $dv = dx$), $\int x \sin x\, dx$ (let $u = x$, $dv = \sin x\, dx$).

**Integration of standard functions.**
- $\int x^n\, dx = x^{n+1}/(n+1) + C$ for $n \ne -1$.
- $\int 1/x\, dx = \ln|x| + C$.
- $\int e^x\, dx = e^x + C$.
- $\int a^x\, dx = a^x/\ln a + C$.
- $\int \sin x\, dx = -\cos x + C$.
- $\int \cos x\, dx = \sin x + C$.
- $\int \sec^2 x\, dx = \tan x + C$.
- $\int \sinh x\, dx = \cosh x + C$, etc.

**Definite integrals of elementary functions.**
- $\int_0^1 x^n\, dx = 1/(n+1)$.
- $\int_0^{\pi/2} \sin x\, dx = 1$.
- $\int_0^{\infty} e^{-x}\, dx = 1$.
- $\int_0^{\pi} \sin^2 x\, dx = \pi/2$.

**Improper integrals.** The FTC extends to improper integrals via limits. $\int_0^\infty e^{-x}\, dx = \lim_{b \to \infty} \int_0^b e^{-x}\, dx = \lim_{b \to \infty} (1 - e^{-b}) = 1$. $\int_0^1 dx/\sqrt{x} = \lim_{a \to 0^+} \int_a^1 dx/\sqrt{x} = \lim_{a \to 0^+} (2 - 2\sqrt{a}) = 2$.

**Differentiation under the integral sign.** A powerful technique (Leibniz's rule):

$$\frac{d}{dx} \int_{a(x)}^{b(x)} f(x, t)\, dt = f(x, b(x)) b'(x) - f(x, a(x)) a'(x) + \int_{a(x)}^{b(x)} \frac{\partial f}{\partial x}\, dt,$$

provided $f$ and $\partial f/\partial x$ are continuous. Used to evaluate integrals by introducing a parameter and differentiating.

**Change of variables.** Substitution is the change-of-variables theorem. In several variables, the Jacobian appears. In one variable, it's just $u = g(x)$.

**Integration in physics.** The work done by a force $F(x)$ from $a$ to $b$ is $W = \int_a^b F(x)\, dx$. The kinetic energy gained is the work done: $\tfrac{1}{2} m v^2 - \tfrac{1}{2} m v_0^2 = \int F\, dx$. The potential energy $U(x) = -\int F\, dx$ (up to a constant). The same integral structure governs electric potential, magnetic vector potential, and probability densities.

**Error control in quadrature.** The error in the trapezoidal rule for a function with bounded second derivative is $|E| \le (b - a)^3 M/(12 n^2)$, where $M = \max |f''|$. The Simpson rule error is $\sim 1/n^4$. These come from Taylor's theorem with remainder and are the workhorses of *Numerical Methods*.

## Key Ideas
- FTC Part 1: $F(x) = \int_a^x f(t)\, dt$ is differentiable with $F' = f$.
- FTC Part 2: $\int_a^b f = G(b) - G(a)$ for any antiderivative $G$.
- Average value: $\bar{f} = (1/(b-a)) \int_a^b f$.
- Indefinite integral: antiderivative + constant.
- Techniques: substitution, integration by parts, partial fractions, trig substitution.

## Worked Examples
**Example 1 — FTC Part 2.** $\int_0^{\pi/2} \cos x\, dx = \sin x \big|_0^{\pi/2} = 1 - 0 = 1$.

**Example 2 — Substitution.** $\int_0^1 2 x e^{x^2}\, dx$. Let $u = x^2$, $du = 2 x\, dx$. Then $\int_0^1 2 x e^{x^2}\, dx = \int_0^1 e^u\, du = e - 1$.

**Example 3 — Integration by parts.** $\int_0^1 x e^x\, dx$. Let $u = x$, $dv = e^x dx$. Then $du = dx$, $v = e^x$. $\int x e^x\, dx = x e^x - \int e^x\, dx = x e^x - e^x + C$. Definite: $x e^x - e^x \big|_0^1 = (e - e) - (0 - 1) = 1$.

**Example 4 — Improper integral.** $\int_0^{\infty} x e^{-x}\, dx$. Let $u = x$, $dv = e^{-x} dx$, $du = dx$, $v = -e^{-x}$. $\int x e^{-x}\, dx = -x e^{-x} + \int e^{-x}\, dx = -x e^{-x} - e^{-x} + C$. Definite from $0$ to $\infty$: $\lim_{b \to \infty} (-(b+1) e^{-b}) - (-1) = 0 + 1 = 1$.

## Common Misconceptions
- **"The integral is the antiderivative."** No — the integral is the limit of Riemann sums; the antiderivative is a function whose derivative is the integrand. The FTC connects them.
- **"$\int f(x)\, dx$ is one function."** It is a family of functions, all differing by a constant. The constant is fixed by initial conditions.
- **"Integration by parts is a formula to memorise."** It is — but understanding the derivation (product rule in reverse) helps in tricky cases.
- **"All integrals have closed-form antiderivatives."** Most do not. The error function $\int e^{-x^2} dx$ has no elementary antiderivative; it is its own special function.

## Connections
The FTC is the bridge between the Riemann integral (an analytic object) and the antiderivative (an algebraic object). It underlies every application of integration in physics and engineering. The error bounds from Taylor's theorem with remainder give the convergence of numerical integration schemes. Differentiation under the integral sign reappears in *Electricity and Magnetism* (Green's functions) and in *Quantum Mechanics* (the path integral).

## Quick Check
1. State FTC Part 1 and FTC Part 2.
2. Compute $\int_0^1 (1 + x^2)\, dx$ using the FTC.
3. Use integration by parts to evaluate $\int_0^{\pi} x \sin x\, dx$.
4. State the average value of a function on $[a, b]$.
5. What is the improper integral $\int_0^\infty e^{-x^2}\, dx$? (It is $\sqrt{\pi}/2$.)

## Takeaway
- FTC Part 1: $F(x) = \int_a^x f(t)\, dt$, $F' = f$.
- FTC Part 2: $\int_a^b f = G(b) - G(a)$ for any antiderivative $G$.
- Average value: $\bar{f} = (1/(b-a)) \int_a^b f$.
- Techniques: substitution, integration by parts, partial fractions, trig substitution.
- Many functions have no closed-form antiderivative (e.g. $e^{-x^2}$).
