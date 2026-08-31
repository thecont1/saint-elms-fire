***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-3
semesterName: Semester 3
subjectId: mathematics
subjectName: Mathematics
courseId: real-analysis
courseName: Real Analysis
moduleId: real-analysis-module-2
moduleName: Continuity and Differentiation
lessonId: real-analysis-m2-l1
lessonName: Continuous Functions on Intervals
lessonNumber: 4
moduleNumber: 2
semesterNumber: 3
difficulty: intermediate
estimatedStudyMinutes: 55
releaseOrder: 4
prerequisites:
  - real-analysis-m1-l3
  - differential-calculus-m1-l3
learningObjectives:
  - State the $\varepsilon$–$\delta$ definition of continuity rigorously.
  - Prove continuity of sums, products, and compositions.
  - State and apply the Intermediate Value Theorem.
  - Recognise the connection between continuity and limit properties.
concepts:
  - $\varepsilon$–$\delta$ continuity
  - Continuity of algebraic combinations
  - Continuity of compositions
  - Intermediate Value Theorem (rigorous)
  - Continuous on a closed interval
  - Topological continuity
tags:
  - mathematics
  - analysis
  - continuity
sourceType: authored-courseware
assessmentHints:
  - derivation
  - conceptual
  - problem-solving
***

# Continuous Functions on Intervals

## Overview
The $\varepsilon$–$\delta$ definition of continuity is the rigorous version of "no jumps". This lesson puts the definition on a solid foundation, proves the basic algebraic rules for continuity, and develops the Intermediate Value Theorem from scratch. The aim is to make continuity a precise, useful tool, not just a vague intuition.

## Learning Path
- What you should already know: the $\varepsilon$–$\delta$ limit definition, the limit theorems, the IVT (informal version from *Differential Calculus*).
- What this lesson adds: a rigorous treatment of continuity, with proofs of the main theorems.
- What it unlocks: the Extreme Value Theorem, the Mean Value Theorem, and the rigorous Riemann integral of Module 3.

## Core Explanation
**$\varepsilon$–$\delta$ continuity at a point.** A function $f$ is continuous at $a$ if for every $\varepsilon > 0$ there exists $\delta > 0$ such that for all $x$, $|x - a| < \delta$ implies $|f(x) - f(a)| < \varepsilon$. Equivalent to $\lim_{x \to a} f(x) = f(a)$.

**Continuity at a point requires three things.**
1. $f(a)$ is defined.
2. $\lim_{x \to a} f(x)$ exists.
3. The limit equals $f(a)$.

**Continuity on a set.** A function is continuous on a set $S$ if it is continuous at every point of $S$. Continuous on a closed interval $[a, b]$ means continuous at every point of $[a, b]$, including the endpoints (where the appropriate one-sided definition is used).

**Sequential continuity.** A function $f$ is continuous at $a$ if and only if, for every sequence $(x_n) \to a$ with $x_n \ne a$, $f(x_n) \to f(a)$. This is equivalent to the $\varepsilon$–$\delta$ definition. The sequential version is often easier to use in proofs.

**Algebraic combinations.** If $f, g$ are continuous at $a$, then $f + g$, $f - g$, $f g$, and (if $g(a) \ne 0$) $f/g$ are continuous at $a$. Proofs use the $\varepsilon$–$\delta$ definitions and the limit theorems for sequences.

**Composition.** If $f$ is continuous at $a$ and $g$ is continuous at $f(a)$, then $g \circ f$ is continuous at $a$. This is the chain rule for continuity.

**Continuity of standard functions.** Polynomials are continuous everywhere (sums and products of continuous functions). Rational functions are continuous wherever the denominator is nonzero. $\sin x$ and $\cos x$ are continuous everywhere (proved from the sequential definition using $|\sin x - \sin a| \le |x - a|$). $\exp x$ is continuous; $\ln x$ is continuous on $(0, \infty)$.

**Boundedness on a closed interval.** A continuous function on a closed bounded interval $[a, b]$ is bounded. Proof: suppose $f$ is unbounded. For each $n$, pick $x_n$ with $|f(x_n)| > n$. By Bolzano–Weierstrass, $(x_n)$ has a convergent subsequence $x_{n_k} \to c \in [a, b]$. By continuity, $|f(x_{n_k})| \to |f(c)|$, contradicting $|f(x_{n_k})| > n_k \to \infty$.

**Extreme Value Theorem.** A continuous function on a closed bounded interval $[a, b]$ attains its maximum and minimum. (The boundedness is one half; the attainment requires a separate argument using the LUB property.)

**Intermediate Value Theorem (rigorous).** If $f$ is continuous on $[a, b]$ and $y$ is between $f(a)$ and $f(b)$, then there exists $c \in [a, b]$ with $f(c) = y$. Proof sketch: WLOG $f(a) < y < f(b)$. Let $S = \{x \in [a, b] : f(x) < y\}$. $S$ is nonempty ($a \in S$) and bounded above by $b$. Let $c = \sup S$. Show $c \in [a, b]$ and $f(c) = y$ using continuity.

**Bolzano's theorem.** Special case: if $f$ is continuous on $[a, b]$ and $f(a), f(b)$ have opposite signs, then $f$ has a zero in $(a, b)$. This is the basis of the bisection method in *Numerical Methods*.

**Inverse function continuity.** If $f$ is continuous and strictly monotone on $[a, b]$, then $f$ has a continuous inverse on $f([a, b])$. This is the theorem that justifies the continuity of $f^{-1}$ for elementary functions like $x^n$ and $\sin x$ on restricted domains.

**Uniform continuity.** $f$ is uniformly continuous on a set $S$ if for every $\varepsilon > 0$ there is a $\delta > 0$ (independent of the point) such that $|x - y| < \delta$ implies $|f(x) - f(y)| < \varepsilon$ for all $x, y \in S$. Continuous on a compact set implies uniformly continuous.

**Compact sets in $\mathbb{R}$.** A subset of $\mathbb{R}$ is *compact* iff it is closed and bounded. Continuous functions on compact sets have nice properties: bounded, attain their extrema, uniformly continuous.

**Nowhere continuous functions.** There exist functions that are continuous at no point (e.g. the Dirichlet function: $1$ on rationals, $0$ on irrationals). The continuous functions are a small, well-behaved subset of all functions.

## Key Ideas
- Continuity at $a$: $\varepsilon$–$\delta$ definition; equivalently, sequential continuity.
- Sums, products, compositions of continuous functions are continuous.
- IVT: a continuous function on $[a, b]$ takes every value between $f(a)$ and $f(b)$.
- EVT: a continuous function on a closed bounded interval attains max and min.
- Continuous on a closed bounded interval implies bounded, EVT, uniformly continuous.

## Worked Examples
**Example 1 — Prove $f(x) = x^2$ is continuous at any $a$.** Given $\varepsilon > 0$, find $\delta$. $|x^2 - a^2| = |x - a||x + a|$. For $|x - a| < 1$, $|x + a| < 2|a| + 1$. So $|x^2 - a^2| < (2|a| + 1) |x - a|$. Choose $\delta = \min(1, \varepsilon/(2|a| + 1))$.

**Example 2 — Apply the IVT.** Show that $x^3 - 6x + 2 = 0$ has a root in $(1, 2)$. $f(1) = -3 < 0$, $f(2) = -2 < 0$ — both negative, IVT does not apply. Try $(0, 1)$: $f(0) = 2 > 0$, $f(1) = -3 < 0$, so $f$ has a zero in $(0, 1)$. (Or in $(2, 3)$: $f(3) = 11 > 0$, so zero in $(2, 3)$.)

**Example 3 — Bisection.** Find a root of $f(x) = x^3 - 6x + 2$ in $(0, 1)$ to 3 decimal places. $f(0) = 2$, $f(1) = -3$. Midpoint $0.5$: $f(0.5) = 0.125 - 3 + 2 = -0.875 < 0$. Zero in $(0, 0.5)$. Midpoint $0.25$: $f(0.25) = 0.0156 - 1.5 + 2 = 0.5156 > 0$. Zero in $(0.25, 0.5)$. Continue halving; after $10$ steps, the zero is in an interval of width $< 10^{-3}$, so $c \approx 0.337$.

## Common Misconceptions
- **"Continuity means no corners."** Not quite — $|x|$ is continuous but not differentiable at $0$. Continuity is about the function's value, not its slope.
- **"The IVT gives the root."** It only guarantees existence. To find the root, use bisection or Newton's method.
- **"EVT requires the function to be differentiable."** No — only continuous. Differentiability is for MVT.
- **"A function is continuous iff its graph has no gaps."** The "gaps" intuition is the IVT (for surjectivity onto the range). True continuity is the local $\varepsilon$–$\delta$ condition.

## Connections
Continuity is the gateway to *Differential Calculus* (the derivative is a limit of difference quotients) and to integration. The IVT is the basis of the bisection method in *Numerical Methods* (Sem 4). The EVT and the MVT are the workhorses of single-variable calculus. Uniform continuity is the basis of the rigorous Riemann integral of Module 3.

## Quick Check
1. State the $\varepsilon$–$\delta$ definition of continuity.
2. State the IVT.
3. State the EVT.
4. Is $f(x) = 1/x$ continuous on $(0, 1)$? On $[0, 1]$? On $[-1, 1]$?
5. Is $f(x) = \sin(1/x)$ continuous on $(0, 1)$? On $(0, \infty)$?

## Takeaway
- $\varepsilon$–$\delta$ continuity: for every $\varepsilon$, a $\delta$ that controls $|f(x) - f(a)|$.
- Continuous functions are closed under sums, products, and compositions.
- IVT: a continuous function on $[a, b]$ takes every value between $f(a)$ and $f(b)$.
- EVT: a continuous function on a closed bounded interval attains max and min.
- Continuous on a closed bounded set implies uniformly continuous.
