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
lessonId: real-analysis-m2-l3
lessonName: Mean Value Theorems and Taylor's Theorem
lessonNumber: 6
moduleNumber: 2
semesterNumber: 3
difficulty: advanced
estimatedStudyMinutes: 60
releaseOrder: 6
prerequisites:
  - real-analysis-m2-l2
learningObjectives:
  - State and prove Rolle's theorem.
  - State and prove the Mean Value Theorem (MVT).
  - Use the MVT to bound the error of linear approximation.
  - State Taylor's theorem with Lagrange remainder and use it for error estimation.
concepts:
  - Rolle's theorem
  - Mean Value Theorem
  - Cauchy's Mean Value Theorem
  - L'Hôpital's rule
  - Taylor's theorem (with remainder)
  - Lagrange remainder
tags:
  - mathematics
  - analysis
  - mean-value-theorem
sourceType: authored-courseware
assessmentHints:
  - derivation
  - problem-solving
  - conceptual
***

# Mean Value Theorems and Taylor's Theorem

## Overview
The Mean Value Theorem (MVT) is the central result of differential calculus: for a differentiable function, the average slope over an interval equals the slope at some interior point. It is the basis of L'Hôpital's rule, error estimates for numerical methods, and Taylor's theorem with remainder. This lesson proves the MVT, derives its consequences, and states Taylor's theorem with the Lagrange form of the remainder.

## Learning Path
- What you should already know: continuity, differentiability, the $\varepsilon$–$\delta$ framework, Taylor series from *Differential Calculus*.
- What this lesson adds: rigorous proofs of the MVT and Taylor's theorem, and a working use of the remainder.
- What it unlocks: rigorous error estimates in numerical methods, advanced applications of calculus, and the foundations of differential geometry.

## Core Explanation
**Rolle's theorem.** If $f$ is continuous on $[a, b]$, differentiable on $(a, b)$, and $f(a) = f(b)$, then there exists $c \in (a, b)$ with $f'(c) = 0$. Proof: $f$ is continuous on $[a, b]$, so by EVT attains max and min. If the max and min are both at the endpoints, $f$ is constant on $[a, b]$ and any interior $c$ works. Otherwise, an extremum is in the interior, and $f'$ vanishes there (Fermat's theorem on stationary points).

**Mean Value Theorem (MVT).** If $f$ is continuous on $[a, b]$ and differentiable on $(a, b)$, then there exists $c \in (a, b)$ with

$$f'(c) = \frac{f(b) - f(a)}{b - a}.$$

Geometrically, the tangent at $c$ is parallel to the secant through $(a, f(a))$ and $(b, f(b))$.

Proof: define $g(x) = f(x) - \ell(x)$ where $\ell$ is the linear function through $(a, f(a))$ and $(b, f(b))$. Then $g(a) = g(b) = 0$, and $g$ is continuous on $[a, b]$ and differentiable on $(a, b)$ with $g'(x) = f'(x) - (f(b) - f(a))/(b - a)$. By Rolle, $g'(c) = 0$ for some $c$, which gives the MVT.

**Cauchy's Mean Value Theorem.** If $f, g$ are continuous on $[a, b]$ and differentiable on $(a, b)$ with $g'(x) \ne 0$ on $(a, b)$, then there exists $c \in (a, b)$ with

$$\frac{f(b) - f(a)}{g(b) - g(a)} = \frac{f'(c)}{g'(c)}.$$

The ordinary MVT is the case $g(x) = x$. The Cauchy's MVT is the basis of L'Hôpital's rule.

**L'Hôpital's rule (rigorous version).** If $f(a) = g(a) = 0$ (or both tend to $\pm \infty$) and $g'(x) \ne 0$ near $a$ (except at $a$), and $\lim f'(x)/g'(x)$ exists, then $\lim f(x)/g(x) = \lim f'(x)/g'(x)$. The proof uses Cauchy's MVT.

**MVT and monotonicity.** If $f'(x) > 0$ on $(a, b)$, then by the MVT, $f$ is strictly increasing on $[a, b]$. If $f'(x) < 0$, strictly decreasing. If $f'(x) = 0$, constant.

**MVT and bounds.** The MVT bounds the difference $f(b) - f(a)$ in terms of the maximum of $|f'|$: $|f(b) - f(a)| \le M |b - a|$, where $M = \max |f'|$ on $[a, b]$. This is the workhorse of error estimates.

**Taylor's theorem with Lagrange remainder.** If $f$ has $n+1$ continuous derivatives on an interval containing $a$, then for $x$ in that interval,

$$f(x) = \sum_{k=0}^{n} \frac{f^{(k)}(a)}{k!} (x - a)^k + R_n(x), \quad R_n(x) = \frac{f^{(n+1)}(c)}{(n+1)!} (x - a)^{n+1}$$

for some $c$ between $a$ and $x$. This is Taylor's theorem; the Lagrange form of the remainder is the term with $f^{(n+1)}$ evaluated at some $c$.

**Proof of Taylor's theorem.** Repeated application of the MVT to the function

$$g(t) = f(x) - \sum_{k=0}^{n} \frac{f^{(k)}(t)}{k!} (x - t)^k.$$

Note that $g(x) = 0$ (the partial sum exactly equals $f$ at $t = x$). Differentiate with respect to $t$; after some work, $g^{(n+1)}(t) = -f^{(n+1)}(t)$. By Rolle, there is $c$ where $g^{(n)}(c) = 0$, which gives the formula.

**Error estimation.** The Lagrange remainder $|R_n(x)| \le M |x - a|^{n+1}/(n+1)!$ where $M = \max |f^{(n+1)}|$. This gives a rigorous bound on the error of a Taylor polynomial approximation.

**Lagrange vs. Cauchy vs. integral remainders.** Taylor's theorem has several forms of the remainder. The Lagrange remainder $f^{(n+1)}(c)(x-a)^{n+1}/(n+1)!$ is the simplest. The Cauchy remainder $f^{(n+1)}(c)(x-c)^n(x-a)/n!$ is sometimes better when $f^{(n+1)}$ is unbounded. The integral remainder $R_n = \int_a^x f^{(n+1)}(t)(x-t)^n/n!\, dt$ is the most flexible.

**Application: numerical error.** Approximating $\sin(0.1)$ by $0.1$ (zeroth order Taylor at $0$). The error is bounded by $M \cdot 0.1^2/2 = (1) \cdot 0.005 = 0.005$. The actual error is about $0.00017$ — well within the bound.

**Application: Newton's method convergence.** If $f$ is twice continuously differentiable and $f'(x^*) \ne 0$ at a root $x^*$, then Newton's method converges quadratically near $x^*$. Proof uses Taylor's theorem with the Lagrange remainder.

**Application: arc length.** The length of a curve $y = f(x)$ from $a$ to $b$ is $\int_a^b \sqrt{1 + (f'(x))^2}\, dx$. The MVT can be used to estimate the integrand for monotonic $f'$.

**Counterexample to the MVT.** The MVT requires differentiability on $(a, b)$. $f(x) = |x|$ on $[-1, 1]$ is not differentiable at $0$, and the MVT does not apply (the secant slope is $0$, but the only interior point with $f'(c) = 0$ would be $c = 0$, where $f'$ does not exist).

## Key Ideas
- Rolle's theorem: continuous + differentiable + equal endpoints → $f'(c) = 0$.
- MVT: $f(b) - f(a) = f'(c)(b - a)$ for some $c$.
- Taylor with Lagrange remainder: $R_n = f^{(n+1)}(c)(x - a)^{n+1}/(n+1)!$.
- MVT bounds differences by max of $|f'|$.
- L'Hôpital's rule uses Cauchy's MVT.

## Worked Examples
**Example 1 — MVT.** $f(x) = x^3$ on $[0, 2]$. $f(2) - f(0) = 8$. By MVT, $3 c^2 \cdot 2 = 8$, so $c^2 = 4/3$, $c = 2/\sqrt{3} \approx 1.155$.

**Example 2 — Bounded difference.** $f(x) = \sin x$, $f'(x) = \cos x$ with $|f'| \le 1$. By MVT, $|\sin b - \sin a| \le |b - a|$. Verify: $|\sin(0.1) - \sin(0)| = 0.0998 \le 0.1$. ✓

**Example 3 — Taylor error.** Approximate $e^{0.1}$ by $1 + 0.1 = 1.1$ (linear Taylor). $R_1 = e^c \cdot 0.1^2/2$ for some $c \in (0, 0.1)$. $e^c \le e^{0.1} \approx 1.105$, so $R_1 \le 0.00553$. True value: $1.10517$. Error: $0.00517$, within the bound.

**Example 4 — L'Hôpital.** $\lim_{x \to 0} (\sin x)/x$. Both numerator and denominator $\to 0$. By L'Hôpital: $\lim \cos x / 1 = 1$.

## Common Misconceptions
- **"MVT is just Rolle with a trick."** True in proof, but the MVT is far more useful. It is the working tool.
- **"Taylor series with remainder is just an inequality."** The remainder is exact — there is a $c$ at which the formula is exact. The bound is what makes it useful.
- **"L'Hôpital works for all limits."** Only for the indeterminate forms, and only when the derivative ratio limit exists.
- **"Higher-order Taylor is always better."** Locally, yes. Globally, it can overshoot wildly (e.g. $\sin x$ Taylor at $x = 0$ is bad beyond $\pi$).

## Connections
The MVT is the central theorem of single-variable calculus. Taylor's theorem with remainder is the foundation of numerical error analysis. Cauchy's MVT is the basis of L'Hôpital's rule. The same Taylor expansion appears in *Differential Equations* (power-series solutions) and *Numerical Methods* (the basis of finite-difference schemes). The MVT generalises to the fundamental theorem of calculus in higher dimensions (Stokes' theorem).

## Quick Check
1. State Rolle's theorem.
2. State the MVT.
3. State Taylor's theorem with the Lagrange remainder.
4. Apply the MVT to $f(x) = \sqrt{x}$ on $[1, 4]$.
5. Show that $|\sin x| \le |x|$ for all $x$.

## Takeaway
- Rolle's theorem: continuous + differentiable + $f(a) = f(b)$ → $f'(c) = 0$.
- MVT: $f(b) - f(a) = f'(c)(b - a)$.
- Taylor with Lagrange remainder: $R_n = f^{(n+1)}(c)(x-a)^{n+1}/(n+1)!$.
- Cauchy's MVT yields L'Hôpital's rule.
- MVT bounds differences by max of $|f'|$.
