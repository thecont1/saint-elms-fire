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
lessonId: real-analysis-m1-l1
lessonName: The Real Number System and ε–N
lessonNumber: 1
moduleNumber: 1
semesterNumber: 3
difficulty: foundation
estimatedStudyMinutes: 50
releaseOrder: 1
prerequisites:
  - differential-calculus-m1-l2
learningObjectives:
  - Describe the construction of the real numbers from the rationals.
  - State the least upper bound property and the Archimedean property.
  - Use the $\varepsilon$–$N$ definition of a sequence limit.
  - Distinguish convergent, divergent, bounded, and monotone sequences.
concepts:
  - Real numbers
  - Rational and irrational
  - Least upper bound
  - Archimedean property
  - Sequence
  - Convergence (ε–N)
tags:
  - mathematics
  - analysis
  - real-numbers
sourceType: authored-courseware
assessmentHints:
  - conceptual
  - derivation
  - short-answer
***

# The Real Number System and ε–N

## Overview
Real analysis is the rigorous study of the calculus concepts you met in *Differential Calculus* and *Differential Equations*. The starting point is the real number system. The reals have two crucial properties beyond the rationals: they are *complete* (every bounded set has a least upper bound) and *Archimedean* (no matter how small a number, a multiple of it exceeds any given bound). This lesson develops these properties, defines sequences and their limits in the $\varepsilon$–$N$ formalism, and begins the work of putting calculus on a solid foundation.

## Learning Path
- What you should already know: the $\varepsilon$–$\delta$ definition of a limit, rational and irrational numbers, sequences.
- What this lesson adds: the formal properties of the reals and the rigorous definition of sequence convergence.
- What it unlocks: limit theorems, series, continuity proofs, and the rigorous integral of *Real Analysis* Module 3.

## Core Explanation
**Rationals vs. reals.** The rationals ($\mathbb{Q}$) — numbers of the form $p/q$ — are dense (between any two is another) but not complete. The equation $x^2 = 2$ has no rational solution (a proof by contradiction using the Euclidean algorithm), but the reals ($\mathbb{R}$) include $\sqrt{2}$, $\pi$, $e$, and every other limit of rational sequences.

**Construction of the reals.** There are several standard constructions:
- *Dedekind cuts*: a real number is the set of all rationals less than it.
- *Cauchy sequences*: a real number is an equivalence class of Cauchy sequences of rationals.
- *Decimal expansions*: a real number is an infinite decimal, with care taken about $0.999\ldots = 1$.

All three give the same result: a complete ordered field.

**The least upper bound (LUB) property.** A set $S \subseteq \mathbb{R}$ has an *upper bound* $M$ if $s \le M$ for all $s \in S$. The *least upper bound* (or supremum) is the smallest upper bound. The LUB property says: every nonempty set of reals that is bounded above has a least upper bound in $\mathbb{R}$. This is what the rationals lack: the set $\{x \in \mathbb{Q} : x^2 < 2\}$ is bounded above (e.g. by $2$) but has no least upper bound in $\mathbb{Q}$ (the "least" is $\sqrt{2}$, irrational).

**The Archimedean property.** For any real $x$, there is a natural number $n$ with $n > x$. In other words, the naturals are not bounded above in $\mathbb{R}$. Equivalently, for any positive real $\varepsilon$, there is a natural number $n$ with $1/n < \varepsilon$. This rules out infinitesimals.

**Sequences.** A sequence is a function from $\mathbb{N}$ (or a subset) to $\mathbb{R}$, often written $(a_n)_{n \ge 1}$ or $(a_n)$. Examples: $a_n = 1/n$, $a_n = (-1)^n$, $a_n = (1 + 1/n)^n$.

**Convergence of a sequence.** A sequence $(a_n)$ *converges* to a limit $L$ if, for every $\varepsilon > 0$, there is a natural number $N$ such that for all $n \ge N$, $|a_n - L| < \varepsilon$. This is the $\varepsilon$–$N$ definition. We write $\lim_{n \to \infty} a_n = L$.

The order matters: for every $\varepsilon$ (the test) you must produce an $N$ (the witness). The condition says all but finitely many terms of the sequence are within $\varepsilon$ of $L$.

**Bounded sequences.** A sequence is *bounded* if there is some $M$ with $|a_n| \le M$ for all $n$. Not every bounded sequence converges ($a_n = (-1)^n$ is bounded but does not converge). Convergent sequences are bounded.

**Monotone sequences.** A sequence is *monotone increasing* if $a_{n+1} \ge a_n$ for all $n$; *monotone decreasing* if $a_{n+1} \le a_n$. The Monotone Convergence Theorem says: every bounded monotone sequence converges (to its LUB if increasing, GLB if decreasing). This is a corollary of the LUB property.

**Subsequences.** A *subsequence* $(a_{n_k})$ is obtained by selecting a subset of indices $n_1 < n_2 < n_3 < \ldots$. A convergent sequence has all its subsequences converging to the same limit. The Bolzano–Weierstrass theorem: every bounded sequence has a convergent subsequence.

**Cauchy sequences.** A sequence $(a_n)$ is *Cauchy* if, for every $\varepsilon > 0$, there is $N$ such that for all $m, n \ge N$, $|a_m - a_n| < \varepsilon$. The completeness of $\mathbb{R}$ says: every Cauchy sequence of reals converges. This is the same as the LUB property (in a technical sense).

**Limit theorems.** If $\lim a_n = A$ and $\lim b_n = B$, then:
- $\lim (a_n + b_n) = A + B$.
- $\lim (c a_n) = c A$ for any real $c$.
- $\lim (a_n b_n) = A B$ (provided the limits exist).
- $\lim (a_n / b_n) = A/B$ (provided $B \ne 0$).
- If $a_n \le b_n$ for all $n \ge N$, then $A \le B$.

**Examples of convergence.**
- $a_n = 1/n \to 0$ (Archimedean).
- $a_n = (1 + 1/n)^n \to e$ (definition of $e$).
- $a_n = r^n$ for $|r| < 1$: converges to $0$.
- $a_n = n/(n+1) \to 1$ (limit of ratios of polynomials of equal degree).
- $a_n = (-1)^n$: does not converge.

**Divergence.** A sequence that does not converge is divergent. It may diverge to $+\infty$ (or $-\infty$) — formally, $\lim a_n = \infty$ if for every $M$, there is $N$ with $a_n > M$ for all $n \ge N$ — or it may oscillate, or have no limit at all.

## Key Ideas
- Reals are a complete ordered field; LUB property is the key axiom.
- Archimedean property: no positive infinitesimal; $1/n \to 0$.
- Sequence convergence: $\forall \varepsilon > 0, \exists N: n \ge N \Rightarrow |a_n - L| < \varepsilon$.
- Monotone bounded sequences converge (Monotone Convergence Theorem).
- Cauchy sequences converge (completeness).

## Worked Examples
**Example 1 — $\varepsilon$–$N$ proof.** Show that $\lim (1/n) = 0$. Given $\varepsilon > 0$, choose $N > 1/\varepsilon$ (Archimedean). For $n \ge N$, $|1/n - 0| = 1/n \le 1/N < \varepsilon$. ✓

**Example 2 — Convergence using the limit theorems.** $\lim (3n + 5)/(2n - 1) = 3/2$. Divide numerator and denominator by $n$: $(3 + 5/n)/(2 - 1/n) \to (3 + 0)/(2 - 0) = 3/2$.

**Example 3 — Monotone Convergence Theorem.** $a_n = (1 + 1/n)^n$ is increasing and bounded above (by $3$). So it converges; the limit is $e \approx 2.71828$.

**Example 4 — Bolzano–Weierstrass.** $a_n = (-1)^n$ is bounded. Subsequence of even terms: $1, 1, 1, \ldots \to 1$. Subsequence of odd terms: $-1, -1, -1, \ldots \to -1$. Two different limit points.

## Common Misconceptions
- **"The reals are 'all the numbers'."** The reals are a specific complete ordered field. The complex numbers extend them; the quaternions extend further.
- **"An infinite decimal is just a number."** It is, by construction — a real number is a (Dedekind-cut or Cauchy) equivalence class of rational sequences.
- **"Convergence means the sequence becomes constant."** No — it means the terms get arbitrarily close to the limit, not that they equal it.
- **"Bounded sequences converge."** Not in general; only with additional structure (monotone, Cauchy, etc.) do bounded sequences converge.

## Connections
The $\varepsilon$–$N$ formalism is the same as the $\varepsilon$–$\delta$ of *Differential Calculus* Module 1, extended from continuous to discrete. The completeness of the reals is what makes calculus work — it is the reason derivatives and integrals exist for a wide class of functions. The Monotone Convergence Theorem is the prototype of every convergence theorem in real analysis and in *Numerical Methods* (convergence of iterative schemes).

## Quick Check
1. State the LUB property.
2. State the Archimedean property.
3. Write the $\varepsilon$–$N$ definition of $\lim a_n = L$.
4. Show that $a_n = 1/(n+1)$ converges to $0$.
5. Does the sequence $(-1)^n$ have a convergent subsequence? If so, to what?

## Takeaway
- Reals are a complete ordered field; LUB property is the axiom.
- Archimedean: $1/n \to 0$; no positive infinitesimals.
- Sequence convergence: $\varepsilon$–$N$ definition.
- Monotone bounded sequences converge (Monotone Convergence Theorem).
- Cauchy sequences converge (completeness).
