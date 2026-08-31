***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-1
semesterName: Semester 1
subjectId: mathematics
subjectName: Mathematics
courseId: differential-calculus
courseName: Differential Calculus
moduleId: differential-calculus-module-1
moduleName: Limits and Continuity
lessonId: differential-calculus-m1-l2
lessonName: Formal Definition of a Limit
lessonNumber: 2
moduleNumber: 1
semesterNumber: 1
difficulty: foundation
estimatedStudyMinutes: 50
releaseOrder: 2
prerequisites:
  - differential-calculus-m1-l1
learningObjectives:
  - State the $\varepsilon$–$\delta$ definition of a limit.
  - Use the $\varepsilon$–$\delta$ definition to prove a simple limit.
  - Distinguish between the formal definition and the informal intuition.
  - Recognise when a limit does not exist by finding a counter-$\varepsilon$.
concepts:
  - $\varepsilon$–$\delta$ definition
  - Limit
  - Rigorous proof
  - Archimedean property
tags:
  - mathematics
  - calculus
  - limits
  - epsilon-delta
sourceType: authored-courseware
assessmentHints:
  - conceptual
  - derivation
  - short-answer
***

# Formal Definition of a Limit

## Overview
The informal idea of a limit is "the function gets close". The formal definition makes that phrase precise: for every tolerance $\varepsilon > 0$ you name, there must exist a distance $\delta > 0$ such that whenever $0 < |x - a| < \delta$, the function's value is within $\varepsilon$ of the limit. This is the $\varepsilon$–$\delta$ definition, due to Cauchy and Weierstrass, and it is the gold standard for limit arguments in real analysis.

## Learning Path
- What you should already know: absolute value, the informal limit concept.
- What this lesson adds: a precise definition that lets you *prove* limits rather than just feel them.
- What it unlocks: the proof of the squeeze theorem, the Intermediate Value Theorem, derivative rules, and all of real analysis.

## Core Explanation
**The $\varepsilon$–$\delta$ definition.** Let $f$ be a function defined on an open interval around $a$ (possibly with $f(a)$ undefined). We say

$$\lim_{x \to a} f(x) = L$$

if for every real number $\varepsilon > 0$, there exists a real number $\delta > 0$ such that for all $x$ satisfying

$$0 < |x - a| < \delta,$$

we have

$$|f(x) - L| < \varepsilon.$$

Read this in English: "no matter how small a tolerance $\varepsilon$ you choose, we can find a window of width $\delta$ around $a$ such that the function's value stays within $\varepsilon$ of $L$ throughout that window (except possibly at $a$ itself)".

**Why the inequality is strict on $|x - a|$.** The condition $0 < |x - a|$ excludes $x = a$, because the limit does not depend on $f(a)$.

**One-sided limits.** For a left-hand limit, the condition becomes $0 < a - x < \delta$, and for the right-hand limit, $0 < x - a < \delta$. The two-sided limit exists iff both one-sided limits exist and are equal.

**How to use the definition.** To *prove* $\lim_{x \to a} f(x) = L$:

1. Start by assuming $|f(x) - L| < \varepsilon$ and try to bound $|x - a|$.
2. Manipulate the expression to write $|x - a|$ in terms of $|f(x) - L|$.
3. Choose $\delta$ as a function of $\varepsilon$, usually as a small multiple of $\varepsilon$ or $\min(1, \varepsilon / C)$ for some constant $C$.

**An example proof.** Prove $\lim_{x \to 3} (2x + 1) = 7$.
We have $|(2x + 1) - 7| = |2x - 6| = 2|x - 3|$. Given $\varepsilon > 0$, choose $\delta = \varepsilon / 2$. Then if $0 < |x - 3| < \delta$, we have $|(2x + 1) - 7| = 2|x - 3| < 2 \delta = \varepsilon$. Done.

**Proving non-existence.** To show a limit does *not* exist, exhibit a specific $\varepsilon$ for which no $\delta$ works, or show the one-sided limits differ. For $\lim_{x \to 0} \sin(1/x)$, the function oscillates between $-1$ and $1$ arbitrarily close to $0$, so no single value $L$ can be approached.

**Limits and inequalities.** A useful consequence: if $f(x) \to L$ and $L > 0$, then eventually $f(x) > L/2 > 0$. If $f$ and $g$ both have limits and $f(x) \le g(x)$ near $a$, then $\lim f \le \lim g$.

## Key Ideas
- $\varepsilon$ is the tolerance for the output; $\delta$ is the corresponding tolerance for the input.
- The order matters: the proof must work for *any* $\varepsilon$ you are handed.
- The condition $0 < |x - a|$ excludes $x = a$ itself.
- For one-sided limits, restrict the sign of $x - a$.
- A limit fails to exist when no single value $L$ survives every $\varepsilon$ test.

## Worked Examples
**Example 1 — $\varepsilon$–$\delta$ proof.** Prove $\lim_{x \to 2} (3x - 4) = 2$.
$|(3x - 4) - 2| = |3x - 6| = 3|x - 2|$. Choose $\delta = \varepsilon / 3$. If $0 < |x - 2| < \delta$, then $|(3x - 4) - 2| < 3 \cdot \varepsilon / 3 = \varepsilon$.

**Example 2 — Limit of a square root.** Prove $\lim_{x \to 4} \sqrt{x} = 2$.
$|\sqrt{x} - 2| = |x - 4| / (\sqrt{x} + 2)$. For $x$ near $4$, $\sqrt{x} + 2 > 4$, so $|\sqrt{x} - 2| < |x - 4| / 4$. Choose $\delta = \min(1, 4 \varepsilon)$. The factor $\min(1, \ldots)$ is a common trick to keep auxiliary inequalities valid (here it ensures $\sqrt{x} + 2 > 4$).

**Example 3 — Failure of a limit.** Show that $\lim_{x \to 0} \sin(1/x)$ does not exist.
For any $\delta > 0$, choose $x = 1/(\pi/2 + 2 \pi n)$ for large $n$, which is within $\delta$ of $0$ for $n$ large. Then $\sin(1/x) = 1$. For a different $x' = 1/(3 \pi/2 + 2 \pi n)$, $\sin(1/x') = -1$. The function takes both values $\pm 1$ arbitrarily close to $0$, so no single $L$ works.

## Common Misconceptions
- **"The definition requires $f$ to be defined at $a$."** It does not. The condition $0 < |x - a|$ explicitly excludes $a$.
- **"Bigger $\delta$ is always better."** No. The definition requires that *for every* $\varepsilon$ there is *some* $\delta$ — usually a small one. A large $\delta$ trivially works for large $\varepsilon$ but the test is the small-$\varepsilon$ regime.
- **"The $\varepsilon$–$\delta$ definition is too pedantic for physics."** It is pedantic, but the cases where the intuition fails (oscillations, blow-ups, sequences that look the same to low order) are exactly the cases that matter in real analysis and in modelling.
- **"If a function has a limit from the left and from the right, they must be equal."** Only if a *two-sided* limit exists. A jump function has two one-sided limits that differ.

## Connections
The $\varepsilon$–$\delta$ definition is the basis of *Real Analysis* (Sem 3), where you will use it to prove the Intermediate Value Theorem and the Extreme Value Theorem. The same kind of "for every $\varepsilon$, there exists $\delta$" appears in *Numerical Methods* (Sem 4) when defining convergence of iterative schemes, and in *Linear Algebra* (Sem 5) when defining continuity of linear operators on infinite-dimensional spaces.

## Quick Check
1. State the $\varepsilon$–$\delta$ definition of $\lim_{x \to a} f(x) = L$ in your own words.
2. Prove $\lim_{x \to 5} (2x - 1) = 9$ using $\varepsilon$–$\delta$.
3. Give an example of a function that has a right-hand limit at $0$ but no left-hand limit.
4. Why is the condition $0 < |x - a|$ part of the definition?
5. Show that $\lim_{x \to 0} \sin(1/x)$ does not exist.

## Takeaway
- The $\varepsilon$–$\delta$ definition is a precision tool: any tolerance for the output can be matched by a window for the input.
- The condition $0 < |x - a|$ excludes $a$ itself.
- A proof picks $\delta$ as a function of $\varepsilon$ — usually a small multiple of $\varepsilon$ or a $\min(1, \cdot)$ of it.
- One-sided limits must agree for the two-sided limit to exist.
- The same logical structure (for all $\varepsilon$ there exists $\delta$) defines convergence across analysis and numerical methods.
