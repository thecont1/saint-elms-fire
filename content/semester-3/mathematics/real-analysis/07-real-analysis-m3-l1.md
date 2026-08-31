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
lessonId: real-analysis-m3-l1
lessonName: Riemann Sums and the Riemann Integral
lessonNumber: 7
moduleNumber: 3
semesterNumber: 3
difficulty: intermediate
estimatedStudyMinutes: 55
releaseOrder: 7
prerequisites:
  - real-analysis-m2-l3
  - differential-calculus-m3-l1
learningObjectives:
  - Define a partition, a Riemann sum, and the Riemann integral.
  - State the conditions for Riemann integrability.
  - Compute Riemann integrals from the definition in simple cases.
  - Recognise the connection between Riemann sums and the definite integral.
concepts:
  - Partition
  - Upper and lower sums
  - Riemann sum
  - Riemann integrability
  - Refinement
  - Darboux integral
tags:
  - mathematics
  - analysis
  - integration
sourceType: authored-courseware
assessmentHints:
  - conceptual
  - problem-solving
  - derivation
***

# Riemann Sums and the Riemann Integral

## Overview
The definite integral of a continuous function over an interval can be defined as the limit of Riemann sums — sums of the form $\sum f(x_i^*) \Delta x_i$ for partitions of the interval. This is the Riemann integral, the rigorous version of the area-under-the-curve picture. This lesson develops the formal definition, shows which functions are integrable, and connects the Riemann integral to the definite integral of elementary calculus.

## Learning Path
- What you should already know: continuity, uniform continuity, partitions and Riemann sums from introductory calculus.
- What this lesson adds: a rigorous definition of the integral, criteria for integrability, and the upper/lower sum framework.
- What it unlocks: the Fundamental Theorem of Calculus (next lesson), the definition of measure, and the Lebesgue integral in advanced analysis.

## Core Explanation
**The motivation.** The definite integral $\int_a^b f(x)\, dx$ is the area under the curve $y = f(x)$ from $a$ to $b$. The "area" can be defined as the limit of rectangles approximating the region. Different choices of rectangle width and height give slightly different sums, and the limit (if it exists and is unique) is the integral.

**Partition.** A partition $P$ of $[a, b]$ is a finite set of points $a = x_0 < x_1 < \ldots < x_n = b$. The mesh size is $\|P\| = \max(x_{i+1} - x_i)$. A *tagged* partition is a partition together with a choice of tag $x_i^* \in [x_i, x_{i+1}]$ for each subinterval.

**Riemann sum.** For a tagged partition, the Riemann sum is

$$S(f, P) = \sum_{i=1}^{n} f(x_i^*) \Delta x_i, \quad \Delta x_i = x_i - x_{i-1}.$$

Each term is the area of a rectangle with width $\Delta x_i$ and height $f(x_i^*)$.

**Upper and lower sums (Darboux).** For a partition $P$, the upper sum is

$$U(f, P) = \sum_{i=1}^{n} M_i \Delta x_i, \quad M_i = \sup_{x \in [x_{i-1}, x_i]} f(x),$$

and the lower sum is

$$L(f, P) = \sum_{i=1}^{n} m_i \Delta x_i, \quad m_i = \inf_{x \in [x_{i-1}, x_i]} f(x).$$

For any tagged Riemann sum with this partition, $L(f, P) \le S(f, P) \le U(f, P)$. As the partition is refined, the upper sums decrease and the lower sums increase.

**Upper and lower integrals.** The upper integral is $\overline{\int_a^b} f = \inf_P U(f, P)$ and the lower integral is $\underline{\int_a^b} f = \sup_P L(f, P)$. Always $\underline{\int} f \le \overline{\int} f$. The function is *Riemann integrable* (or *Darboux integrable*) iff the upper and lower integrals are equal, and the common value is the Riemann integral.

**Equivalent definition (sequential).** A function $f$ is Riemann integrable on $[a, b]$ iff there is a number $I$ such that for every $\varepsilon > 0$, there is a $\delta > 0$ such that for any tagged partition with mesh $< \delta$, $|S(f, P) - I| < \varepsilon$. This is the Riemann sum version of the limit definition.

**Refinement.** A partition $P'$ is a *refinement* of $P$ if $P \subseteq P'$ (every point of $P$ is also in $P'$). Refining a partition can only decrease the upper sum and increase the lower sum, narrowing the gap. Adding points brings $L$ and $U$ closer together.

**Riemann's criterion.** A bounded function on $[a, b]$ is Riemann integrable iff for every $\varepsilon > 0$, there is a partition $P$ with $U(f, P) - L(f, P) < \varepsilon$. This is the standard way to prove integrability.

**Lebesgue's criterion.** A bounded function on $[a, b]$ is Riemann integrable iff its set of discontinuities has *measure zero* (i.e. can be covered by a countable collection of intervals of total length less than any given $\varepsilon$). This justifies the practical rule: "continuous almost everywhere implies Riemann integrable".

**Examples.**
- Continuous on $[a, b]$: integrable (by uniform continuity and Riemann's criterion).
- Monotone on $[a, b]$: integrable (monotone functions have at most countably many discontinuities).
- Dirichlet function ($1$ on rationals, $0$ on irrationals): not integrable (any interval has both $M_i = 1$ and $m_i = 0$, so $U - L = b - a > 0$).
- Thomae's function ($1/q$ at $p/q$ in lowest terms, $0$ at irrationals): integrable with integral $0$ (continuous at every irrational, discontinuous at every rational — but the rationals are countable, hence measure zero).

**Properties of the integral.** If $f, g$ are Riemann integrable on $[a, b]$ and $c \in \mathbb{R}$:
- $\int_a^b (f + g) = \int_a^b f + \int_a^b g$ (linearity).
- $\int_a^b c f = c \int_a^b f$ (linearity).
- $\int_a^b f \le \int_a^b g$ if $f \le g$ (monotonicity).
- $\int_a^c f + \int_c^b f = \int_a^b f$ (additivity) for $a \le c \le b$.

**The integral as a function of the upper limit.** Define $F(x) = \int_a^x f(t)\, dt$ for $x \in [a, b]$. If $f$ is Riemann integrable, $F$ is continuous on $[a, b]$. If $f$ is continuous at $x_0$, then $F$ is differentiable at $x_0$ and $F'(x_0) = f(x_0)$. This is the first half of the Fundamental Theorem (next lesson).

**When the integral is improper.** If $f$ is unbounded or the interval is infinite, the Riemann integral may not exist; we use the *improper integral* as a limit: $\int_a^\infty f = \lim_{b \to \infty} \int_a^b f$, and $\int_a^b f$ for unbounded $f$ as a limit of integrals on bounded subintervals.

**Numerical Riemann sums.** The midpoint rule, the trapezoidal rule, and Simpson's rule are specific choices of tagged partitions for approximating the integral. They are analysed in *Numerical Methods* (Sem 4).

## Key Ideas
- Partition: subdivision of $[a, b]$; Riemann sum: sum of rectangle areas.
- Upper and lower sums bound all Riemann sums for a given partition.
- Riemann integrable iff upper and lower integrals agree.
- Riemann's criterion: $U - L < \varepsilon$ for some partition.
- Lebesgue's criterion: integrable iff continuous almost everywhere.

## Worked Examples
**Example 1 — Constant function.** $f(x) = c$ on $[a, b]$. For any partition, $M_i = m_i = c$, so $U = L = c(b - a)$. Integral: $c(b - a)$.

**Example 2 — Identity function.** $f(x) = x$ on $[0, b]$. Uniform partition $x_i = i b/n$, $\Delta x = b/n$, tag $x_i^* = i b/n$ (or midpoint $(i - 1/2) b/n$). Riemann sum: $\sum i (b/n)^2 = (b^2/n^2) \sum i = (b^2/n^2) \cdot n(n+1)/2 \to b^2/2$. Integral: $b^2/2$.

**Example 3 — Dirichlet's function.** $f(x) = 1$ if $x$ rational, $0$ otherwise. On any subinterval, $\sup = 1$, $\inf = 0$, so $U = b - a$, $L = 0$. Upper and lower integrals differ; not Riemann integrable.

**Example 4 — Integrability via Riemann's criterion.** Show $f(x) = x^2$ is integrable on $[0, 1]$. The function is continuous (hence uniformly continuous on $[0, 1]$), so for any $\varepsilon > 0$, there is $\delta$ such that $|x - y| < \delta$ implies $|f(x) - f(y)| < \varepsilon$. On a uniform partition of mesh $\delta$, the difference $M_i - m_i \le \varepsilon$ on each subinterval, so $U - L \le \varepsilon \cdot 1 = \varepsilon$. ✓

## Common Misconceptions
- **"Every bounded function is integrable."** No — the Dirichlet function is bounded but not integrable. You need continuity (or a controlled set of discontinuities).
- **"The integral is just the area."** For positive functions, yes. For functions that take negative values, the integral is a signed area, and the geometric "area" is the integral of $|f|$.
- **"Riemann sums converge for any function."** Only for integrable functions. For non-integrable functions, different sequences of partitions give different limits.
- **"The choice of tag does not matter in the limit."** It does not (for integrable functions), but it can in finite computations (this is the basis of midpoint, trapezoidal, Simpson's rules).

## Connections
The Riemann integral is the foundation of integration in elementary calculus. The conditions for integrability (Lebesgue's criterion) are the bridge to the more general Lebesgue integral in advanced analysis. The numerical Riemann sums are the basis of the *Numerical Methods* (Sem 4) quadrature rules. The integral of $1/x$ on $[0, 1]$ is improper, and the second half of the Fundamental Theorem of Calculus (next lesson) uses the integral to define antiderivatives.

## Quick Check
1. Define a partition and a Riemann sum.
2. State the condition for Riemann integrability (Darboux version).
3. State Riemann's criterion.
4. Is the Dirichlet function integrable? Why or why not?
5. Compute $\int_0^1 x^2\, dx$ as a limit of Riemann sums.

## Takeaway
- Riemann sum: $\sum f(x_i^*) \Delta x_i$.
- Upper and lower sums bracket all Riemann sums for a partition.
- Integrable iff upper and lower integrals agree.
- Riemann's criterion: $U - L < \varepsilon$.
- Lebesgue's criterion: integrable iff continuous almost everywhere.
