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
lessonId: real-analysis-m1-l3
lessonName: Series, Convergence Tests
lessonNumber: 3
moduleNumber: 1
semesterNumber: 3
difficulty: intermediate
estimatedStudyMinutes: 55
releaseOrder: 3
prerequisites:
  - real-analysis-m1-l2
learningObjectives:
  - Define the partial sums of a series and state when a series converges.
  - Apply the integral, comparison, ratio, and root tests.
  - Distinguish absolute and conditional convergence.
  - Use the alternating series test.
concepts:
  - Partial sum
  - Geometric series
  - $p$-series
  - Convergence test
  - Absolute convergence
  - Conditional convergence
tags:
  - mathematics
  - analysis
  - series
sourceType: authored-courseware
assessmentHints:
  - problem-solving
  - derivation
  - conceptual
***

# Series, Convergence Tests

## Overview
A *series* is the sum of a sequence of terms. Convergence of a series is a more subtle question than convergence of a sequence, because the sum of infinitely many positive terms is often infinite. This lesson introduces the partial sums of a series, gives the canonical convergent and divergent examples (geometric and $p$-series), and develops the main convergence tests. The lesson closes with the distinction between absolute and conditional convergence.

## Learning Path
- What you should already know: sequence convergence, the limit theorems, the integral test from *Differential Calculus*.
- What this lesson adds: when does an infinite sum converge, and how to test it.
- What it unlocks: power series (in *Differential Equations* Module 3), Taylor series (in *Differential Calculus* Module 3), and Fourier series (in *Waves and Optics*).

## Core Explanation
**Partial sums.** Given a sequence $(a_n)$, the series $\sum_{n=1}^{\infty} a_n$ has partial sums $S_N = \sum_{n=1}^{N} a_n$. The series *converges* if $(S_N)$ converges to a finite limit; the limit is the sum of the series. Otherwise, the series *diverges*.

**Geometric series.** $\sum_{n=0}^{\infty} r^n$ converges iff $|r| < 1$, in which case the sum is $1/(1 - r)$. The partial sums are $S_N = (1 - r^{N+1})/(1 - r) \to 1/(1 - r)$ for $|r| < 1$. For $|r| \ge 1$, the terms do not go to zero and the series diverges.

**$p$-series.** $\sum_{n=1}^{\infty} 1/n^p$ converges iff $p > 1$. For $p = 1$, the harmonic series diverges (the partial sums grow like $\ln N$). For $p > 1$, the sum is finite; the value is $\zeta(p)$, the Riemann zeta function.

**The $n$-th term test.** If $\sum a_n$ converges, then $a_n \to 0$. The contrapositive is more useful: if $a_n \not\to 0$, the series diverges. (This catches many easy cases: $\sum \sin n$, $\sum (-1)^n$, $\sum n/(n+1)$, all diverge.)

**The comparison test.** If $0 \le a_n \le b_n$ for all $n$ and $\sum b_n$ converges, then $\sum a_n$ converges (with smaller sum). If $0 \le b_n \le a_n$ and $\sum b_n$ diverges, then $\sum a_n$ diverges.

**The integral test.** If $f$ is positive, continuous, and decreasing on $[1, \infty)$, then $\sum f(n)$ and $\int_1^\infty f(x) dx$ either both converge or both diverge. This connects series to improper integrals and is the workhorse for the $p$-series.

**The ratio test.** For a series with positive terms, let $L = \lim a_{n+1}/a_n$. If $L < 1$, the series converges (absolutely). If $L > 1$, the series diverges. If $L = 1$, the test is inconclusive. Useful for series with factorials or exponentials.

**The root test.** For a series with positive terms, let $L = \lim \sqrt[n]{a_n}$. Same conclusion as the ratio test. Useful for series of the form $a_n = (f(n))^n$.

**Absolute convergence.** A series $\sum a_n$ is *absolutely convergent* if $\sum |a_n|$ converges. Absolute convergence implies ordinary convergence. The series $\sum (-1)^n/n^2$ is absolutely convergent; $\sum (-1)^n/n$ is not.

**Conditional convergence.** A series $\sum a_n$ is *conditionally convergent* if it converges but not absolutely. The alternating harmonic series $\sum (-1)^{n+1}/n = \ln 2$ is the classic example.

**The alternating series test (Leibniz).** If $a_n$ is positive, decreasing, and $a_n \to 0$, then $\sum (-1)^{n+1} a_n$ converges. The error after $N$ terms is at most $a_{N+1}$.

**Rearrangement theorem.** Absolutely convergent series can be rearranged in any order without changing the sum. Conditionally convergent series can be rearranged to give any sum (Riemann rearrangement theorem) — a surprising and important result.

**Power series.** A series of the form $\sum c_n (x - a)^n$. There is a radius of convergence $R$ such that the series converges absolutely for $|x - a| < R$ and diverges for $|x - a| > R$. The radius can be found by the ratio test: $1/R = \lim |c_{n+1}/c_n|$. The endpoints need separate testing.

**Taylor series revisited.** A power series representation of a function near a point, with $c_n = f^{(n)}(a)/n!$. The Taylor series converges to $f$ on its interval of convergence if $f$ is analytic. Many elementary functions have Taylor series with infinite radius (e.g. $e^x$, $\sin x$, $\cos x$); some have finite radius (e.g. $\ln(1 + x)$ converges on $(-1, 1]$).

**Cauchy product.** The product of two series: $(\sum a_n)(\sum b_n) = \sum c_n$ where $c_n = \sum_{k=0}^{n} a_k b_{n-k}$. The product converges to the product of the sums if both converge absolutely.

**Abel's theorem.** If $\sum a_n$ converges to $L$ and $\sum a_n x^n$ has radius of convergence $1$, then $\lim_{x \to 1^-} \sum a_n x^n = L$. Connects series and functions at the boundary of convergence.

## Key Ideas
- A series converges iff its partial sums converge.
- Geometric: $\sum r^n = 1/(1-r)$ for $|r| < 1$.
- $p$-series: $\sum 1/n^p$ converges iff $p > 1$.
- Tests: $n$-th term, comparison, integral, ratio, root, alternating.
- Absolute convergence is stronger than conditional convergence; rearrangement is safe only for the former.

## Worked Examples
**Example 1 — Ratio test on factorial series.** $\sum n!/n^n$. $a_{n+1}/a_n = (n+1)!/(n+1)^{n+1} \cdot n^n/n! = n^n/(n+1)^n = (1 - 1/(n+1))^n \to 1/e < 1$. Converges.

**Example 2 — Alternating series.** $\sum (-1)^n / \sqrt{n}$. $1/\sqrt{n}$ is positive, decreasing, tends to $0$. By the alternating series test, converges. Not absolutely: $\sum 1/\sqrt{n}$ is a $p$-series with $p = 1/2 < 1$, diverges.

**Example 3 — Integral test for $p$-series.** $\int_1^\infty dx/x^p$ converges iff $p > 1$. By the integral test, so does the series.

**Example 4 — Power series radius.** $\sum x^n/n$. Ratio test: $|x| (n/(n+1)) \to |x|$. Converges for $|x| < 1$, diverges for $|x| > 1$. At $x = 1$: harmonic series, diverges. At $x = -1$: alternating harmonic series, converges. So $R = 1$, converges on $[-1, 1)$.

## Common Misconceptions
- **"The sum of an infinite series is the value of the last term."** There is no last term; the sum is the limit of partial sums.
- **"The terms going to zero is enough for convergence."** No — the harmonic series has terms going to zero but diverges.
- **"Conditional convergence is just slower absolute convergence."** No — conditionally convergent series can be rearranged to give any sum, while absolutely convergent ones cannot.
- **"Taylor series equal their function everywhere."** Only inside the radius of convergence.

## Connections
Series are the workhorse of *Differential Equations* (power-series solutions), *Numerical Methods* (Taylor's theorem with remainder), and *Waves and Optics* (Fourier series). The ratio test and root test are the standard tools in every application. The Riemann rearrangement theorem is a beautiful and surprising result that every serious student of analysis should know.

## Quick Check
1. State the $n$-th term test for divergence.
2. Does $\sum 1/n^2$ converge? What is the value?
3. State the alternating series test.
4. Apply the ratio test to $\sum n^2/2^n$.
5. Find the radius of convergence of $\sum x^n/n!$.

## Takeaway
- A series converges iff its partial sums converge.
- Geometric: $\sum r^n = 1/(1-r)$ for $|r| < 1$; $p$-series converges iff $p > 1$.
- Tests: $n$-th term, comparison, integral, ratio, root, alternating.
- Absolute convergence is stronger than conditional.
- Power series have a radius of convergence; Taylor series are special power series.
