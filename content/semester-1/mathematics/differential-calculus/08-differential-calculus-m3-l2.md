***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-1
semesterName: Semester 1
subjectId: mathematics
subjectName: Mathematics
courseId: differential-calculus
courseName: Differential Calculus
moduleId: differential-calculus-module-3
moduleName: Applications and Series
lessonId: differential-calculus-m3-l2
lessonName: Maxima, Minima and Curve Sketching
lessonNumber: 8
moduleNumber: 3
semesterNumber: 1
difficulty: intermediate
estimatedStudyMinutes: 50
releaseOrder: 8
prerequisites:
  - differential-calculus-m2-l3
  - differential-calculus-m3-l1
learningObjectives:
  - Find critical points and classify them with the First and Second Derivative Tests.
  - Identify absolute maxima and minima on a closed interval.
  - Sketch the graph of a function using derivatives and limits.
  - Solve optimisation problems in physics and geometry.
concepts:
  - Critical point
  - First Derivative Test
  - Second Derivative Test
  - Absolute maximum and minimum
  - Inflection point
  - Curve sketching
tags:
  - mathematics
  - calculus
  - optimisation
sourceType: authored-courseware
assessmentHints:
  - problem-solving
  - conceptual
  - short-answer
***

# Maxima, Minima and Curve Sketching

## Overview
A common task in applied mathematics is to find the largest or smallest value of a function — the maximum height of a projectile, the minimum surface area for a given volume, the equilibrium point of a system. The derivative is the tool: where $f$ is at a local extremum, $f'$ vanishes (or $f$ is not differentiable). This lesson teaches the systematic procedure: find critical points, classify them, and read off the extrema. Curve sketching is the visual counterpart — using calculus to draw the picture before plotting.

## Learning Path
- What you should already know: differentiation rules, the second derivative, limits at infinity.
- What this lesson adds: a method for finding and classifying extrema, and a way to sketch graphs from calculus.
- What it unlocks: optimisation in physics and engineering, energy minimisation in *Solid State Physics*, and the variational methods that underlay quantum mechanics.

## Core Explanation
**Critical points.** A critical point of $f$ is a point in the domain where $f'(c) = 0$ or $f'$ is undefined. Local extrema can only occur at critical points. The converse is not true: a critical point can be a local max, local min, or neither (an inflection with horizontal tangent).

**First Derivative Test.** Suppose $c$ is a critical point and $f$ is differentiable near $c$.
- If $f'$ changes from positive to negative at $c$, $f$ has a local maximum at $c$.
- If $f'$ changes from negative to positive, $f$ has a local minimum.
- If $f'$ does not change sign, $c$ is neither.

**Second Derivative Test.** If $f'(c) = 0$ and $f''(c) > 0$, then $f$ has a local minimum at $c$. If $f''(c) < 0$, a local maximum. If $f''(c) = 0$, the test is inconclusive — fall back on the First Derivative Test.

**Absolute extrema on a closed interval.** The Extreme Value Theorem (recall from *Continuity and Discontinuities*) says a continuous function on a closed, bounded interval $[a, b]$ attains an absolute maximum and an absolute minimum. The candidates are:
1. The endpoints $a$ and $b$.
2. The critical points in $(a, b)$.

Evaluate $f$ at each candidate and pick the largest and smallest. This is a finite check.

**Asymptotes and end behaviour.** For curve sketching, also catalogue:
- Vertical asymptotes where $f(x) \to \pm \infty$.
- Horizontal asymptotes $\lim_{x \to \infty} f(x) = L$.
- Slant asymptotes where $f(x) - (mx + b) \to 0$ as $x \to \pm\infty$.

**Inflection points.** A point where the concavity of $f$ changes is an inflection point. A necessary condition (assuming $f''$ exists) is $f''(c) = 0$ or $f''$ undefined, with the sign of $f''$ changing across $c$. The graph passes through a straight tangent there (or the tangent is not defined).

**Curve sketching recipe.** A standard sequence:
1. Find the domain.
2. Find intercepts and symmetry (even, odd, periodic).
3. Find asymptotes and end behaviour.
4. Find $f'$ and critical points.
5. Find $f''$ and inflection points.
6. Use the First or Second Derivative Test to classify critical points.
7. Sketch, marking intercepts, extrema, asymptotes, and inflection points.

**Optimisation in physics.** Many physical problems minimise a quantity: the path of light minimises travel time (Fermat's principle); a system in equilibrium minimises potential energy; a planet's orbit minimises the action integral. The calculus method is the same: write the quantity as a function, find the critical point, verify it is a minimum (often by physical reasoning).

## Key Ideas
- Critical points are where $f'(c) = 0$ or $f'$ is undefined.
- The First Derivative Test uses the sign change of $f'$.
- The Second Derivative Test uses $f''(c)$; inconclusive if $f''(c) = 0$.
- Absolute extrema on $[a, b]$ are at endpoints or interior critical points.
- Curve sketching combines domain, asymptotes, intercepts, $f'$, and $f''$.

## Worked Examples
**Example 1 — Closed-interval extrema.** Find the absolute extrema of $f(x) = x^3 - 3 x + 1$ on $[-2, 2]$.
$f'(x) = 3 x^2 - 3 = 0$ gives $x = \pm 1$. Evaluate: $f(-2) = -1$, $f(-1) = 3$, $f(1) = -1$, $f(2) = 3$. Absolute max $= 3$ at $x = -1$ and $x = 2$; absolute min $= -1$ at $x = -2$ and $x = 1$.

**Example 2 — Optimisation: box of maximum volume.** An open-top box is made from a $12\text{ cm} \times 20\text{ cm}$ sheet by cutting squares of side $x$ from each corner and folding up the sides. Find $x$ that maximises the volume.
Volume: $V(x) = x (12 - 2x)(20 - 2x) = 4 x (6 - x)(10 - x)$ for $0 < x < 6$. $V'(x) = 4 [(6 - x)(10 - x) - x(10 - x) - x(6 - x)]$. Set $V' = 0$ and simplify: $60 - 26 x + 3 x^2 = 0$, so $x = (26 \pm \sqrt{676 - 720})/6$. Since the discriminant is negative, the equation has no real root; in fact $V'(x) > 0$ on $(0, 6)$ (the volume is increasing throughout), so the maximum is at the boundary $x \to 6$ (degenerate box) or at $x \to 0$ (no box). For an interior extremum, the dimensions must be balanced.

**Example 3 — Sketch $y = (x^2 - 1)/x$.** Simplify: $y = x - 1/x$. Domain excludes $x = 0$. As $x \to 0^+$, $y \to -\infty$; as $x \to 0^-$, $y \to +\infty$. As $x \to \pm\infty$, $y \approx x$ (slant asymptote $y = x$). $y' = 1 + 1/x^2 > 0$ everywhere in the domain — strictly increasing on each piece. No local extrema. Inflection where $y'' = -2/x^3 = 0$ has no solution; the concavity changes sign at $x = 0$, but $0$ is not in the domain. So the function is concave up for $x < 0$ and concave down for $x > 0$.

## Common Misconceptions
- **"$f'(c) = 0$ implies a local extremum."** No. $f(x) = x^3$ has $f'(0) = 0$ but no extremum. The second derivative is $0$ at $0$, so the Second Derivative Test is inconclusive; the First Derivative Test shows the sign of $f'$ does not change.
- **"The absolute maximum is the largest local maximum."** No. On a closed interval, the absolute max is the largest value of $f$ across the *entire* interval, including endpoints. Endpoints can beat interior critical points.
- **"An inflection point is where $f'' = 0$."** Necessary but not sufficient. The sign of $f''$ must also change. $f(x) = x^4$ has $f''(0) = 0$ but no inflection.
- **"The method applies to any function."** The closed-interval method requires the function to be continuous on a closed, bounded interval. Otherwise you may have no absolute extremum or an extremum only in a limit.

## Connections
The energy-minimisation principle in *Mechanics* is an optimisation problem: stable equilibria are local minima of potential energy. The *Astrophysics II* orbit problem (find the orbit that minimises energy for a given angular momentum) is a calculus-of-variations problem, the infinite-dimensional cousin of this lesson's finite-dimensional optimisation.

## Quick Check
1. Find the critical points of $f(x) = x^3 - 6 x^2 + 9 x + 2$ and classify them.
2. Find the absolute extrema of $f(x) = \sin x$ on $[0, 2\pi]$.
3. Find two positive numbers whose sum is $20$ and whose product is maximised.
4. Sketch $y = x^3 - 3 x$, marking all critical points, inflection points, and asymptotes.
5. State the conditions for an inflection point.

## Takeaway
- Critical points are where $f'(c) = 0$ or $f'$ is undefined; local extrema occur only at critical points.
- The First Derivative Test uses sign changes in $f'$; the Second Derivative Test uses $f''$.
- Absolute extrema on a closed interval $[a, b]$ are at endpoints or interior critical points.
- Curve sketching combines domain, asymptotes, critical points, and inflection points.
- Optimisation in physics and engineering is often a calculus-extremum problem in disguise.
