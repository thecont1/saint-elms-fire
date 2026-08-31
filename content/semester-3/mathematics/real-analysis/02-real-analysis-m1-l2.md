***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-3
semesterName: Semester 3
subjectId: mathematics
subjectName: Mathematics
courseId: real-analysis
courseName: Real Analysis
moduleId: real-analysis-module-1
moduleName: Sequences and Series
lessonId: real-analysis-m1-l2
lessonName: Convergence of Sequences
lessonNumber: 2
moduleNumber: 1
semesterNumber: 2
difficulty: intermediate
estimatedStudyMinutes: 55
releaseOrder: 2
prerequisites:
  - real-analysis-m1-l1
learningObjectives:
  - State and use the limit theorems for sequences.
  - Recognise the squeeze theorem.
  - Compute limits of sequences defined recursively.
  - Distinguish convergence, divergence, and oscillation.
concepts:
  - Limit theorems
  - Squeeze theorem
  - Recursive sequence
  - Bounded and monotone
  - L'Hôpital for sequences
  - Subsequence
tags:
  - mathematics
  - analysis
  - sequences
sourceType: authored-courseware
assessmentHints:
  - problem-solving
  - derivation
  - conceptual
***

# Convergence of Sequences

## Overview
The previous lesson defined what it means for a sequence to converge. This lesson is the working toolbox: limit theorems, the squeeze theorem, recursive sequences, and the connection to L'Hôpital's rule. The skill of computing limits of sequences is the gateway to series, which converge when the sequence of partial sums does.

## Learning Path
- What you should already know: the $\varepsilon$–$N$ definition, the limit theorems, the Archimedean property.
- What this lesson adds: a working fluency with sequence limits, including recursive definitions and the squeeze theorem.
- What it unlocks: series convergence tests, the rigorous treatment of limits in calculus, and the iterative methods of *Numerical Methods*.

## Core Explanation
**Limit theorems for sequences.** If $\lim a_n = A$ and $\lim b_n = B$, then:
- $\lim (a_n + b_n) = A + B$.
- $\lim (a_n - b_n) = A - B$.
- $\lim (c a_n) = c A$ for $c \in \mathbb{R}$.
- $\lim (a_n b_n) = A B$.
- $\lim (a_n / b_n) = A/B$ (provided $B \ne 0$).
- If $a_n \le b_n$ for all sufficiently large $n$, then $A \le B$.

These are proved by $\varepsilon$–$N$ arguments and are the workhorses of sequence limits.

**The squeeze (sandwich) theorem.** If $a_n \le c_n \le b_n$ for all $n \ge N$ and $\lim a_n = \lim b_n = L$, then $\lim c_n = L$. This is the most useful tool for tricky limits, especially those involving $\sin$ or oscillating terms.

**Limits at infinity.** When a sequence is eventually monotone and bounded, it converges. When it grows without bound, it diverges to $\pm \infty$. Many practical limits are of the form $0/0$ or $\infty/\infty$ and can be evaluated with L'Hôpital's rule (treating $n$ as a continuous variable).

**Limits of $n$-th roots and exponentials.** The limit $\lim (1 + 1/n)^n = e$ defines the constant $e$. More generally, $\lim (1 + a/n)^n = e^a$. And $\lim a^{1/n} = 1$ for any $a > 0$. These are limits you will use throughout the course.

**Stirling's approximation.** $n! \sim \sqrt{2\pi n}\, (n/e)^n$ as $n \to \infty$. This is a deep result, but its leading-order form $n! \approx (n/e)^n$ is enough for many purposes (e.g. in probability and statistical mechanics).

**Limits of rational functions.** For $p(n)/q(n)$ with polynomials of the same degree, the limit is the ratio of leading coefficients. For higher degree in the denominator, the limit is $0$. For higher degree in the numerator, the limit is $\pm \infty$.

**Recursive sequences.** A sequence defined by $a_{n+1} = f(a_n)$ for some function $f$ and an initial value $a_1$. The behaviour depends on the fixed points of $f$: $x = f(x)$. If $f$ is continuous and $|f'(x^*)| < 1$ at a fixed point $x^*$, then $x^*$ is attractive and nearby initial values converge to $x^*$. If $|f'(x^*)| > 1$, it is repulsive.

**Example: Newton's method.** $a_{n+1} = a_n - f(a_n)/f'(a_n)$. Near a simple root $x^*$ of $f$, this converges quadratically: $|a_{n+1} - x^*| \approx C |a_n - x^*|^2$. The number of correct digits doubles each iteration, once you are close enough.

**Logistic map.** $a_{n+1} = r a_n (1 - a_n)$ is a simple population model that exhibits remarkable behaviour as $r$ increases: stable fixed point, then period-2 cycle, then period-4, then chaos. This is the simplest example of a route to chaos.

**Convergence to $\sqrt{a}$.** $a_{n+1} = (a_n + a/a_n)/2$ (the Babylonian method) converges to $\sqrt{a}$ from any positive initial guess. The convergence is quadratic: the number of correct digits doubles per iteration.

**Monotone sequences.** A sequence is monotone increasing if $a_{n+1} \ge a_n$ for all $n$. It is bounded above if there is $M$ with $a_n \le M$ for all $n$. The Monotone Convergence Theorem says that a bounded monotone sequence converges.

**Squeeze examples.**
- $a_n = \sin(n)/n$: since $-1/n \le \sin(n)/n \le 1/n$ and $\pm 1/n \to 0$, $a_n \to 0$.
- $a_n = n!/n^n$: since $0 < n!/n^n < 1/n$ (a simple bound), $a_n \to 0$.
- $a_n = (1 + 1/n)^n - e$: approaches $0$ from below; the convergence is not monotone.

**Comparison test (preview).** For a series $\sum a_n$ with $a_n \ge 0$, if $a_n \le b_n$ and $\sum b_n$ converges, then $\sum a_n$ converges. If $a_n \ge b_n$ and $\sum b_n$ diverges, then $\sum a_n$ diverges. (Next lesson.)

**Limit superior and limit inferior.** For a bounded sequence, the limit superior is the largest limit point; the limit inferior is the smallest. A sequence converges iff $\limsup = \liminf$. These are useful in dealing with oscillating sequences (e.g. $a_n = (-1)^n$ has $\limsup = 1$, $\liminf = -1$).

## Key Ideas
- Limit theorems: sum, product, quotient, etc.
- Squeeze theorem: if $a_n \le c_n \le b_n$ and $a_n, b_n \to L$, then $c_n \to L$.
- Recursive sequences: behaviour determined by fixed points and their stability.
- $\lim (1 + 1/n)^n = e$.
- Monotone bounded sequences converge.

## Worked Examples
**Example 1 — Squeeze.** $\lim (\sin n)/n = 0$ by squeeze.

**Example 2 — Recursive.** $a_1 = 1$, $a_{n+1} = \sqrt{2 + a_n}$. Show $a_n$ converges. Monotone: $a_2 = \sqrt{3} > 1 = a_1$, $a_3 = \sqrt{2 + \sqrt{3}} \approx 1.93 > \sqrt{3}$, etc. Bounded above by $2$ (the fixed point $L = \sqrt{2 + L}$ gives $L = 2$). Monotone bounded → convergent to $2$.

**Example 3 — Newton's method.** Find $\sqrt{2}$ with $f(x) = x^2 - 2$. $a_{n+1} = (a_n + 2/a_n)/2$. Start $a_1 = 1$: $a_2 = 1.5$, $a_3 = 1.4167$, $a_4 = 1.4142$, $a_5 = 1.41421$. The correct value $1.41421356\ldots$ is reached in $5$ iterations to $5$ decimal places.

**Example 4 — L'Hôpital sequence limit.** $\lim n \sin(1/n)$. Treating $n$ as continuous: $\sin(1/n) \approx 1/n - 1/(6 n^3)$, so $n \sin(1/n) \approx 1 - 1/(6 n^2) \to 1$. Verified by squeeze: $0 < 1/n < \sin(1/n)/(1/n) \cdot (1/n) < $ ... actually a cleaner squeeze: $1 - x^2/6 < \sin x / x < 1$ for $x$ small, so $1 - 1/(6 n^2) < n \sin(1/n) < 1$, and the limit is $1$.

## Common Misconceptions
- **"Every bounded sequence converges."** No — $(-1)^n$ is bounded but oscillates.
- **"The limit of a sequence is the last term."** Sequences are infinite; the limit is what the terms approach.
- **"L'Hôpital works for all limits."** It works for the indeterminate forms $0/0$ and $\infty/\infty$ (and their algebraic relatives), and only when the new limit exists.
- **"Newton's method always converges."** No — bad initial guesses can lead to divergence or to a different root.

## Connections
Sequence limits are the discrete counterpart of function limits. The squeeze theorem is the prototype of the $\varepsilon$–$\delta$ argument and appears throughout analysis. Recursive sequences are the basis of every iterative algorithm in *Numerical Methods* — Newton's method, fixed-point iteration, the secant method, the bisection method. Newton's method for $\sqrt{a}$ is a specific case used in many engineering applications.

## Quick Check
1. State the squeeze theorem.
2. Use the squeeze theorem to show $\lim (\sin n)/n = 0$.
3. Find $\lim (1 + 1/n)^n$.
4. Show that $a_{n+1} = a_n/2 + 1/a_n$ converges for $a_1 > 0$. (Hint: try $a_n > 0$ and find a fixed point.)
5. State the Monotone Convergence Theorem.

## Takeaway
- Limit theorems: sum, product, quotient of limits.
- Squeeze theorem: if $a_n \le c_n \le b_n$ and $a_n, b_n \to L$, then $c_n \to L$.
- Recursive sequences: behaviour at fixed points determined by $|f'|$ vs. $1$.
- $\lim (1 + 1/n)^n = e$.
- Monotone bounded sequences converge.
