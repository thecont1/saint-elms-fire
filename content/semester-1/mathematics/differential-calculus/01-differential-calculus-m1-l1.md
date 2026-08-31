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
lessonId: differential-calculus-m1-l1
lessonName: Intuition for Limits
lessonNumber: 1
moduleNumber: 1
semesterNumber: 1
difficulty: foundation
estimatedStudyMinutes: 45
releaseOrder: 1
prerequisites:
  - bridge-course-physics
learningObjectives:
  - Explain the informal idea of a limit.
  - Compute simple limits by inspection or algebra.
  - Identify one-sided limits.
  - Recognise when a function has no limit at a point.
concepts:
  - Limit
  - One-sided limit
  - Indeterminate form
  - Limit at infinity
tags:
  - mathematics
  - calculus
  - limits
sourceType: authored-courseware
assessmentHints:
  - conceptual
  - short-answer
  - problem-solving
***

# Intuition for Limits

## Overview
A limit is a question about the destination of a function: as the input $x$ approaches some value $a$, what value does the function approach? Limits are the foundation of calculus because they let us talk rigorously about quantities that depend on something *getting arbitrarily close* to a value without ever reaching it. This lesson develops the intuition for limits with examples from physics, before we put a formal $\varepsilon$–$\delta$ coat on the idea in the next lesson.

## Learning Path
- What you should already know: function notation $f(x)$, graphs, basic algebra.
- What this lesson adds: a working concept of limit; the ability to compute simple limits; the idea of one-sided limits.
- What it unlocks: the formal $\varepsilon$–$\delta$ definition; continuity; the derivative; and most of physics, where derivatives express rates.

## Core Explanation
**The intuition.** A function $f$ has a limit $L$ as $x$ approaches $a$ if the values of $f(x)$ get arbitrarily close to $L$ when $x$ is taken close to (but not equal to) $a$. The value of $f$ *at* $a$ does not matter. We write this as

$$\lim_{x \to a} f(x) = L.$$

A good first example: $f(x) = (x^2 - 1)/(x - 1)$. As $x \to 1$, both numerator and denominator go to zero, but the ratio simplifies: $f(x) = x + 1$ for $x \ne 1$, so $f(x) \to 2$ as $x \to 1$. The function has a hole at $x = 1$ but the limit exists and equals $2$.

**One-sided limits.** Sometimes a function approaches one value from the left and a different value from the right. Define the left-hand limit

$$\lim_{x \to a^-} f(x) = L^-$$

and the right-hand limit

$$\lim_{x \to a^+} f(x) = L^+.$$

For the two-sided limit to exist, we need $L^- = L^+$. If they differ, the two-sided limit does not exist. A jump discontinuity produces different one-sided limits; a removable discontinuity (a hole) does not.

**Indeterminate forms.** Expressions like $0/0$, $\infty/\infty$, $0 \cdot \infty$, $\infty - \infty$ are "indeterminate" because their value depends on the specific functions involved. The arithmetic gives no answer; we must do more work (factor, rationalise, use known limits, or apply L'Hôpital's rule later).

**Limits at infinity.** When we ask what happens to $f(x)$ as $x$ grows without bound, we write $\lim_{x \to \infty} f(x)$. For rational functions, the dominant term is the one with the highest power in the numerator and denominator. For $f(x) = (3 x^2 + 5) / (x^2 - 1)$, the limit as $x \to \infty$ is $3$ because the leading coefficients ratio is $3/1$.

**Continuity (informal).** A function is continuous at $a$ if $\lim_{x \to a} f(x) = f(a)$ — that is, the limit exists, equals the function's value, and the function is defined there. Continuous functions do not "jump". Most functions in calculus classes are continuous wherever they are defined; the trouble spots are points where the formula breaks down (division by zero, log of a negative, etc.).

## Key Ideas
- $\lim_{x \to a} f(x) = L$ means $f(x)$ can be made arbitrarily close to $L$ by taking $x$ sufficiently close to $a$.
- The value of $f$ at $a$ is irrelevant to the limit.
- One-sided limits must agree for a two-sided limit to exist.
- Indeterminate forms like $0/0$ require simplification before evaluation.
- Limits at infinity describe the long-term behaviour of a function.

## Worked Examples
**Example 1.** Compute $\lim_{x \to 3} \dfrac{x^2 - 9}{x - 3}$.
Factor the numerator: $x^2 - 9 = (x - 3)(x + 3)$. For $x \ne 3$, the function equals $x + 3$. As $x \to 3$, the limit is $3 + 3 = 6$.

**Example 2.** Compute $\lim_{x \to 0} \dfrac{\sqrt{1 + x} - 1}{x}$.
Rationalise: multiply by $(\sqrt{1+x} + 1)/(\sqrt{1+x} + 1)$. The numerator becomes $(1 + x) - 1 = x$. Cancel with the denominator: $\lim = \lim_{x \to 0} 1/(\sqrt{1+x} + 1) = 1/2$.

**Example 3.** Does $\lim_{x \to 0} |x| / x$ exist?
From the right ($x > 0$), $|x|/x = 1$. From the left ($x < 0$), $|x|/x = -1$. The one-sided limits differ, so the two-sided limit does not exist.

## Common Misconceptions
- **"If $f(a)$ is undefined, the limit cannot exist."** The limit is about the *behaviour near* $a$, not at $a$. Holes in graphs often have well-defined limits.
- **"If the left and right limits are different, the function is undefined."** The function can still be defined at $a$; the two-sided limit is what fails to exist.
- **"$0/0$ is zero."** No — $0/0$ is an indeterminate form. $\lim_{x \to 0} x/x = 1$ even though both numerator and denominator are zero at $x = 0$.
- **"Limit at infinity means the function reaches the value."** The function gets arbitrarily close but usually never equals the asymptotic value.

## Connections
Limits are the foundation of derivatives, which are the foundation of velocity and acceleration in mechanics. The $\sqrt{1+x} - 1$ style limit appears throughout physics, from relativistic approximations to small-amplitude pendulums. Limits at infinity are the language of asymptotics used in *Numerical Methods* for error analysis.

## Quick Check
1. Compute $\lim_{x \to 2} (x^2 - 4)/(x - 2)$.
2. Does $\lim_{x \to 0} \sin x / x$ exist? (Try the small-angle approximation $\sin x \approx x$.)
3. Compute $\lim_{x \to \infty} (5 x + 3)/(2 x - 1)$.
4. Find $\lim_{x \to 0^-} 1/x$ and $\lim_{x \to 0^+} 1/x$. Does the two-sided limit exist?
5. State whether $f(x) = (x^2 - 1)/(x - 1)$ is continuous at $x = 1$ and explain why or why not.

## Takeaway
- A limit describes the value a function approaches near a point, regardless of what happens at the point itself.
- One-sided limits must agree for a two-sided limit to exist.
- Indeterminate forms need algebra or extra theory, not just arithmetic.
- Limits at infinity capture long-term behaviour.
- Continuity is the alignment of the limit and the function's value at a point.
