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
lessonId: real-analysis-m3-l2
lessonName: Integrability of Continuous and Monotone Functions
lessonNumber: 8
moduleNumber: 3
semesterNumber: 3
difficulty: advanced
estimatedStudyMinutes: 55
releaseOrder: 8
prerequisites:
  - real-analysis-m3-l1
learningObjectives:
  - Prove that a continuous function on a closed interval is Riemann integrable.
  - Prove that a monotone function on a closed interval is Riemann integrable.
  - Identify the discontinuities of common functions and assess integrability.
  - Apply Lebesgue's criterion to determine integrability.
concepts:
  - Riemann integrability of continuous functions
  - Riemann integrability of monotone functions
  - Sets of measure zero
  - Lebesgue's criterion
  - Discontinuities
  - Step functions
tags:
  - mathematics
  - analysis
  - integrability
sourceType: authored-courseware
assessmentHints:
  - derivation
  - conceptual
  - problem-solving
***

# Integrability of Continuous and Monotone Functions

## Overview
Which functions are Riemann integrable? The two most useful positive answers are: continuous functions on closed bounded intervals, and monotone functions on closed bounded intervals. Both are proved using Riemann's criterion, and the second shows that even functions with many discontinuities (countably many) are integrable. This lesson develops the proofs and surveys the kinds of discontinuities that are allowed (measure zero) and those that are not (positive measure).

## Learning Path
- What you should already know: the definition of the Riemann integral, upper and lower sums, continuity and uniform continuity.
- What this lesson adds: precise conditions for integrability, with proofs and examples.
- What it unlocks: the recognition of integrable functions in applications, the Lebesgue integral, and measure theory.

## Core Explanation
**Continuous on a closed interval implies integrable.** Let $f$ be continuous on $[a, b]$. By the EVT, $f$ is bounded. By the Heine–Cantor theorem, $f$ is uniformly continuous: for any $\varepsilon > 0$, there is $\delta > 0$ such that $|x - y| < \delta \Rightarrow |f(x) - f(y)| < \varepsilon$. Choose a partition with mesh $< \delta$. On each subinterval $[x_{i-1}, x_i]$, $M_i - m_i < \varepsilon$ (otherwise there would be $x, y$ in the subinterval with $|f(x) - f(y)| \ge \varepsilon$, but $|x - y| \le \Delta x_i < \delta$, contradiction). So

$$U(f, P) - L(f, P) = \sum (M_i - m_i) \Delta x_i < \varepsilon \sum \Delta x_i = \varepsilon (b - a).$$

By Riemann's criterion, $f$ is Riemann integrable on $[a, b]$.

**Monotone on a closed interval implies integrable.** Let $f$ be monotone (say increasing) on $[a, b]$. Then $f$ is bounded ($f(a) \le f \le f(b)$). For any $\varepsilon > 0$, choose a uniform partition with $n > (f(b) - f(a))(b - a)/\varepsilon$ subintervals. On each subinterval $[x_{i-1}, x_i]$, $M_i - m_i = f(x_i) - f(x_{i-1}) \le (f(b) - f(a))/n$. Then

$$U - L = \sum (M_i - m_i) \Delta x_i \le \frac{f(b) - f(a)}{n} \cdot (b - a) < \varepsilon.$$

So $f$ is Riemann integrable.

**Pieces with finitely many discontinuities are integrable.** If $f$ is continuous on $[a, b]$ except at a finite set of points, $f$ is Riemann integrable. (Cut $[a, b]$ into pieces separated by the discontinuities, apply the continuous or monotone theorem on each piece, and combine.)

**Countably many discontinuities can be OK.** The monotone theorem shows that countably many discontinuities (where $f$ has a jump) are allowed, as long as the sum of the jumps is finite. This is a key insight: a function can be discontinuous on a *countable* set and still be Riemann integrable.

**Sets of measure zero.** A set $S \subseteq \mathbb{R}$ has *measure zero* if for every $\varepsilon > 0$, there is a countable collection of open intervals covering $S$ with total length less than $\varepsilon$. Examples: any finite or countable set, the Cantor set, a line in $\mathbb{R}^2$, a finite union of measure-zero sets.

**Lebesgue's criterion (rigorous statement).** A bounded function $f$ on $[a, b]$ is Riemann integrable iff the set of points where $f$ is discontinuous has measure zero.

**Examples of measure-zero sets.**
- The set of rationals in $[0, 1]$ (countable).
- The set of discontinuities of a monotone function (countable).
- The set of discontinuities of a piecewise-continuous function (finite).
- The Cantor set (uncountable, but measure zero).
- A finite set of points.

**Examples of positive-measure sets.**
- The set of irrationals in $[0, 1]$ (uncountable, full measure).
- A non-degenerate interval.
- The Cantor set complement (open and dense, full measure).
- A fat Cantor set (positive measure).

**Counterexamples.**
- Dirichlet function: discontinuous everywhere; not integrable.
- Thomae's function: discontinuous on the rationals (countable); integrable with integral $0$.
- The indicator of the rationals is the Dirichlet function; the indicator of the irrationals is $1 - $ Dirichlet, also not integrable.
- The function $1$ on the rationals, $0$ on irrationals — not integrable.

**The "almost everywhere" language.** A statement is said to hold *almost everywhere* (a.e.) if it holds on a set of full measure (i.e. the complement has measure zero). "Continuous almost everywhere" means continuous except on a measure-zero set. By Lebesgue's criterion, this is the condition for Riemann integrability.

**Step functions.** A step function takes finitely many values, with jumps at finitely many points. Step functions are Riemann integrable; the integral is a sum of (height) × (width) over each piece. Step functions are dense in the Riemann-integrable functions in a suitable sense — every integrable function can be approximated by step functions.

**Integrability of $f \cdot g$.** If $f$ and $g$ are Riemann integrable, then $f \cdot g$ is Riemann integrable. The product of two integrable functions is integrable; the product of two bounded, measurable (a.e. continuous) functions is integrable.

**Integrability of $|f|$.** If $f$ is Riemann integrable, then $|f|$ is Riemann integrable. (A function is integrable iff it is bounded and continuous a.e.; $|f|$ is bounded when $f$ is, and the discontinuities of $|f|$ are contained in those of $f$, hence a.e. continuous.)

**The converse fails.** A function with $|f|$ integrable may not be integrable if it is not a.e. continuous. For the Riemann integral, you need boundedness + continuity a.e.

**Fubini for Riemann.** The order of integration can be swapped for Riemann integrals on rectangles when the function is Riemann integrable. The conditions are strict; the Lebesgue integral relaxes them.

## Key Ideas
- Continuous on $[a, b]$: Riemann integrable.
- Monotone on $[a, b]$: Riemann integrable.
- Bounded and continuous a.e.: Riemann integrable (Lebesgue's criterion).
- A countable set has measure zero.
- $|f|$ integrable does not imply $f$ integrable; the converse holds for Riemann.

## Worked Examples
**Example 1 — Monotone function with jumps.** $f(x) = \lfloor x \rfloor$ on $[0, 3]$. Monotone, hence integrable. Integral: $\sum_{k=0}^{2} k \cdot 1 = 0 + 1 + 2 = 3$.

**Example 2 — A function with countably many discontinuities.** $f(x) = 1/x$ on $[1, 2]$. Continuous, hence integrable. Integral: $\ln 2 \approx 0.693$.

**Example 3 — Integrability of $1/\sqrt{x}$.** $f(x) = 1/\sqrt{x}$ on $[0, 1]$ is unbounded, so the Riemann integral (as bounded function) does not exist. But the improper integral $\int_0^1 dx/\sqrt{x} = 2$ exists. Improper integrals extend the Riemann integral to unbounded functions.

**Example 4 — Thomae's function.** $T(x) = 1/q$ if $x = p/q$ in lowest terms, $0$ if $x$ irrational. Continuous at every irrational; discontinuous at every rational (countable, measure zero). Integrable; $\int_0^1 T(x)\, dx = 0$ (lower sums are $0$, upper sums $\to 0$ as the partition is refined).

## Common Misconceptions
- **"Bounded implies integrable."** No — bounded + continuous a.e. is the right condition.
- **"Discontinuous means not integrable."** Not necessarily — countably many discontinuities are fine.
- **"Thomae's function is unbounded."** No — $T(x) \le 1$. But $T$ is discontinuous on a dense set.
- **"The integral of a non-negative function is always the area."** Yes, but only for non-negative integrable functions. The integral of $|f|$ is the area even when $f$ changes sign.

## Connections
Lebesgue's criterion is the bridge from the Riemann integral to the Lebesgue integral. The notion of "measure zero" is the seed of measure theory, which underpins modern probability and analysis. The integrability conditions appear in *Numerical Methods* (which functions are "smooth enough" to integrate or differentiate numerically) and in *Probability* (expectations are integrals, and integrability is the technical condition for the existence of means).

## Quick Check
1. State the conditions for Riemann integrability of a continuous function.
2. State the conditions for Riemann integrability of a monotone function.
3. State Lebesgue's criterion.
4. Does the Dirichlet function satisfy Lebesgue's criterion?
5. Is the function $1/q$ on the rationals in $[0, 1]$ (and $0$ on irrationals) integrable? Justify.

## Takeaway
- Continuous on $[a, b]$ implies Riemann integrable.
- Monotone on $[a, b]$ implies Riemann integrable.
- Lebesgue: bounded + discontinuous on a set of measure zero.
- Countable sets have measure zero; fat Cantor sets have positive measure.
- Thomae's function: discontinuous on rationals (countable), integrable with integral $0$.
