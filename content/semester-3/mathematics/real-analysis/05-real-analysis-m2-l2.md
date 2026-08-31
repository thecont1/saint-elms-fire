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
lessonId: real-analysis-m2-l2
lessonName: Uniform Continuity and the Extreme Value Theorem
lessonNumber: 5
moduleNumber: 2
semesterNumber: 2
difficulty: intermediate
estimatedStudyMinutes: 55
releaseOrder: 5
prerequisites:
  - real-analysis-m2-l1
learningObjectives:
  - Distinguish pointwise from uniform continuity.
  - State and apply the Extreme Value Theorem rigorously.
  - Prove that continuous on a closed bounded interval implies uniformly continuous.
  - Recognise the role of compactness.
concepts:
  - Pointwise continuity
  - Uniform continuity
  - Heine–Cantor theorem
  - Compactness in R
  - Extreme Value Theorem (rigorous proof)
  - Open cover
tags:
  - mathematics
  - analysis
  - uniform-continuity
sourceType: authored-courseware
assessmentHints:
  - derivation
  - conceptual
  - problem-solving
***

# Uniform Continuity and the Extreme Value Theorem

## Overview
Uniform continuity is a stronger form of continuity: the $\delta$ that works for $\varepsilon$ is the same for all points, not depending on where you are. On a closed bounded interval, continuity implies uniform continuity — a key theorem. The Extreme Value Theorem (EVT) is the other foundational result: a continuous function on a closed bounded interval attains its maximum and minimum. Together, these are the workhorses of the rest of real analysis.

## Learning Path
- What you should already know: the $\varepsilon$–$\delta$ definition of continuity, the Bolzano–Weierstrass theorem, the LUB property.
- What this lesson adds: a stronger continuity (uniform) and the proof that on compact sets, the two notions agree.
- What it unlocks: the rigorous Riemann integral (next module), the Weierstrass approximation theorem, and the foundations of numerical analysis.

## Core Explanation
**Pointwise vs. uniform continuity.** A function is *pointwise continuous* on a set $S$ if for every $\varepsilon > 0$ and every $a \in S$, there is a $\delta$ (which can depend on $a$) such that $|x - a| < \delta \Rightarrow |f(x) - f(a)| < \varepsilon$. The function is *uniformly continuous* on $S$ if the $\delta$ can be chosen to be the same for all $a \in S$. Uniform continuity implies pointwise continuity; the converse is not true in general but is true on compact sets.

**Example: $f(x) = x^2$ on $\mathbb{R}$.** $f$ is pointwise continuous everywhere. Is it uniformly continuous on $\mathbb{R}$? No: as $a \to \infty$, the slope $|f'(a)| = 2|a|$ grows, and the $\delta$ that works for $\varepsilon$ must shrink. For $\varepsilon = 1$, you need $\delta = 1/(2|a| + 1)$, which tends to $0$. So no single $\delta$ works for all $a$. $f$ is uniformly continuous on $[-M, M]$ for any $M$, since the slope is bounded.

**Heine–Cantor theorem.** A continuous function on a closed bounded interval $[a, b]$ is uniformly continuous. Proof idea: suppose $f$ is continuous but not uniformly continuous. Then there is an $\varepsilon > 0$ and sequences $x_n, y_n$ with $|x_n - y_n| \to 0$ but $|f(x_n) - f(y_n)| \ge \varepsilon$. By Bolzano–Weierstrass, $(x_n)$ has a convergent subsequence $x_{n_k} \to c$. The corresponding $y_{n_k} \to c$ (since $|x_n - y_n| \to 0$). By continuity, $|f(x_{n_k}) - f(y_{n_k})| \to 0$, contradicting the $\varepsilon$ bound.

**Extreme Value Theorem (rigorous statement).** If $f$ is continuous on a closed bounded interval $[a, b]$, then there exist $c, d \in [a, b]$ such that $f(c) = \max f$ and $f(d) = \min f$. Proof sketch:
- By a previous lesson, $f$ is bounded. So $M = \sup f$ exists (LUB).
- Suppose $f$ does not attain $M$. For each $n$, pick $x_n$ with $f(x_n) > M - 1/n$. The sequence $(x_n)$ is in $[a, b]$, so by Bolzano–Weierstrass has a convergent subsequence $x_{n_k} \to c \in [a, b]$. By continuity, $f(x_{n_k}) \to f(c)$. But $f(x_{n_k}) \to M$. So $f(c) = M$, contradiction.

**Compactness.** A subset $K$ of $\mathbb{R}$ is *compact* if it is closed and bounded (Heine–Borel theorem for $\mathbb{R}$). Equivalently, every open cover of $K$ has a finite subcover. The closed bounded interval $[a, b]$ is the prototype compact set.

**Why compactness matters.** Continuous functions preserve compactness: the image of a compact set under a continuous function is compact (and hence bounded and closed). The extreme values of the image are attained. This is the reason closed bounded intervals are so nice.

**Open covers and the Heine–Borel theorem.** A collection of open sets covers $K$ if their union contains $K$. A finite subcover is a finite subcollection that still covers $K$. The Heine–Borel theorem for $\mathbb{R}$: a set is compact iff every open cover has a finite subcover iff the set is closed and bounded. This is a deep result that ties together many equivalent notions of compactness.

**Uniform continuity in numerical analysis.** Numerical algorithms for solving equations (Newton's, bisection) require a $\delta$ to detect convergence: the difference between successive iterates. Uniform continuity on a compact set guarantees that the $\delta$ is independent of the iterates, which is essential for rigorous error bounds.

**The Cantor function.** A famous example of a function that is continuous but not uniformly continuous on $(0, 1)$, even though it is continuous. (The Cantor function is constant on the complement of the Cantor set, then "jumps" on the Cantor set itself.) The Cantor function is the prototype of a singular function.

**Lipschitz continuity.** A function is *Lipschitz* with constant $L$ on $S$ if $|f(x) - f(y)| \le L |x - y|$ for all $x, y \in S$. Lipschitz continuity implies uniform continuity (take $\delta = \varepsilon/L$). The Lipschitz constant is the maximum slope in absolute value for differentiable functions.

**Holder continuity.** A function is *$\alpha$-Holder* on $S$ if $|f(x) - f(y)| \le C |x - y|^\alpha$ for some $0 < \alpha \le 1$. Lipschitz is $\alpha = 1$. $1/2$-Holder functions are more general than Lipschitz but still uniformly continuous.

**Functions not uniformly continuous.** $f(x) = 1/x$ on $(0, 1)$: as $x \to 0^+$, $f(x) \to \infty$, and small changes in $x$ produce large changes in $f$. Specifically, for $\varepsilon = 1$, any $\delta$ fails near $0$. $f(x) = x^2$ on $\mathbb{R}$: as discussed above. $f(x) = \sin(1/x)$ near $0$: oscillates infinitely fast.

**Why uniform continuity is useful.** Numerical methods and many theorems in analysis require uniform continuity. The Riemann integrability of a bounded function on $[a, b]$ is equivalent to continuity almost everywhere. Uniform continuity guarantees continuity everywhere and hence integrability.

## Key Ideas
- Pointwise continuity allows $\delta$ to depend on the point; uniform continuity does not.
- Heine–Cantor: continuous on $[a, b]$ implies uniformly continuous on $[a, b]$.
- EVT: continuous on $[a, b]$ attains max and min.
- Compact = closed and bounded (Heine–Borel for $\mathbb{R}$).
- Lipschitz and Holder conditions are stronger forms of uniform continuity.

## Worked Examples
**Example 1 — Uniform vs. pointwise.** $f(x) = 1/x$ on $(0, 1)$. For $\varepsilon = 1$, given any $\delta > 0$, choose $x = \delta/2$ and $y = x + \delta/4$. Then $|x - y| < \delta$ but $|f(x) - f(y)| = |2/\delta - 4/(3\delta)| = 2/(3\delta)$. For $\delta < 2/3$, this exceeds $1$. So no $\delta$ works — not uniformly continuous.

**Example 2 — EVT.** $f(x) = x^2 - 2x$ on $[0, 3]$. Continuous, so EVT applies. $f'(x) = 2x - 2 = 0 \Rightarrow x = 1$. $f(1) = -1$ (minimum). Endpoints: $f(0) = 0$, $f(3) = 3$. Maximum: $3$ at $x = 3$. Minimum: $-1$ at $x = 1$.

**Example 3 — Lipschitz check.** $f(x) = \sqrt{x}$ on $[0, 1]$. Is it Lipschitz? $|f(x) - f(y)| = |\sqrt{x} - \sqrt{y}| = |x - y|/(\sqrt{x} + \sqrt{y})$. As $x, y \to 0$, denominator $\to 0$, so no finite Lipschitz constant. $f$ is uniformly continuous by Heine–Cantor (continuous on compact set) but not Lipschitz.

## Common Misconceptions
- **"Continuous implies uniformly continuous."** Only on compact sets. On $\mathbb{R}$, $x^2$ is continuous but not uniformly continuous.
- **"The maximum is at a critical point."** It could be at an endpoint. Always check endpoints.
- **"Open cover" sounds complicated."** It is a simple concept: a collection of open sets whose union contains the set. The compactness condition says finitely many of them always suffice.
- **"Lipschitz is just differentiability with a bounded derivative."** Yes, for continuously differentiable functions. But Lipschitz is more general — it works for non-differentiable functions too.

## Connections
Uniform continuity is essential for the rigorous Riemann integral (next module). The Heine–Cantor theorem is the basis of the existence and uniqueness of solutions to ODEs (Picard–Lindelöf). The EVT is the prototype of every "extreme value" argument in calculus and optimisation. Compactness is the foundation of functional analysis and topology.

## Quick Check
1. State the difference between pointwise and uniform continuity.
2. State the Heine–Cantor theorem.
3. State the EVT.
4. Is $f(x) = x^2$ uniformly continuous on $\mathbb{R}$? On $[-1, 1]$?
5. Is $f(x) = \sqrt{x}$ Lipschitz on $[0, 1]$? Uniformly continuous?

## Takeaway
- Uniform continuity: $\delta$ is independent of the point.
- Heine–Cantor: continuous on $[a, b]$ implies uniformly continuous on $[a, b]$.
- EVT: continuous on $[a, b]$ attains max and min.
- Compact = closed and bounded.
- Lipschitz and Holder are stronger forms of uniform continuity.
