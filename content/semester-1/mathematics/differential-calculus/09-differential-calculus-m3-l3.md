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
lessonId: differential-calculus-m3-l3
lessonName: L'Hôpital's Rule and Indeterminate Forms
lessonNumber: 9
moduleNumber: 3
semesterNumber: 1
difficulty: intermediate
estimatedStudyMinutes: 45
releaseOrder: 9
prerequisites:
  - differential-calculus-m3-l1
  - differential-calculus-m3-l2
learningObjectives:
  - State L'Hôpital's rule and its hypotheses.
  - Apply L'Hôpital's rule to $0/0$ and $\infty/\infty$ forms.
  - Convert other indeterminate forms to these and apply the rule.
  - Recognise when L'Hôpital's rule does not apply or fails to simplify.
concepts:
  - L'Hôpital's rule
  - $0/0$ form
  - $\infty/\infty$ form
  - $0 \cdot \infty$ and $\infty - \infty$ forms
  - Repeated application
tags:
  - mathematics
  - calculus
  - limits
  - lhopital
sourceType: authored-courseware
assessmentHints:
  - problem-solving
  - derivation
  - conceptual
***

# L'Hôpital's Rule and Indeterminate Forms

## Overview
Some limits resist elementary algebra. The limit of $\sin x / x$ as $x \to 0$ is $1$, but a direct substitution gives $0/0$. The limit of $\ln x / (1/x)$ as $x \to \infty$ is $0$, but a direct substitution gives $\infty/0$. L'Hôpital's rule converts these indeterminate forms into something we can compute: the limit of the ratio of derivatives, when that limit exists.

## Learning Path
- What you should already know: derivative rules, basic limit algebra.
- What this lesson adds: a powerful tool for limits of ratios and a method for handling the trickier indeterminate forms.
- What it unlocks: limit evaluations in series analysis, in physics asymptotics, and in *Real Analysis* (Sem 3).

## Core Explanation
**L'Hôpital's rule ($0/0$ form).** If $\lim_{x \to a} f(x) = 0$ and $\lim_{x \to a} g(x) = 0$, and $\lim_{x \to a} f'(x)/g'(x)$ exists, then

$$\lim_{x \to a} \frac{f(x)}{g(x)} = \lim_{x \to a} \frac{f'(x)}{g'(x)}.$$

Hypotheses: $f, g$ differentiable near $a$ (except possibly at $a$), $g'(x) \ne 0$ near $a$, and the limit of the derivatives' ratio exists. The two-sided version of the rule is also valid.

**L'Hôpital's rule ($\infty/\infty$ form).** If $\lim f = \pm \infty$ and $\lim g = \pm \infty$, the same conclusion holds. The proof is similar but uses different bounding arguments.

**Why "indeterminate forms" matter.** A form like $0/0$ does not have a value on its own; its value depends on how the numerator and denominator approach zero. $\sin x / x \to 1$, $x^2 / x \to 0$, $x / x^2 \to \infty$, and $0/0$ from $x \to 0$ of $1/x$ does not exist. The form is indeterminate; you have to do more work to get the limit.

**Other indeterminate forms.** $0 \cdot \infty$, $\infty - \infty$, $0^0$, $1^\infty$, $\infty^0$ are also indeterminate. To apply L'Hôpital, convert them to $0/0$ or $\infty/\infty$:
- $0 \cdot \infty$: rewrite as $0 / (1/\infty) = 0/0$ or $\infty / (1/0) = \infty/\infty$.
- $\infty - \infty$: combine over a common denominator.
- $0^0$, $1^\infty$, $\infty^0$: take logarithms. $\lim f^g = \exp(\lim g \ln f)$, and $g \ln f$ is often $0 \cdot 0$ or $\infty \cdot 0$.

**When L'Hôpital does not apply.** If the limit of the derivatives' ratio does not exist, the original limit may still exist (and you must find it by other means). Also, L'Hôpital's rule is for ratios. You cannot, for example, take the derivative of the numerator and denominator separately inside a sum.

**Repeated application.** Some limits require applying L'Hôpital's rule more than once. $\lim_{x \to 0} (1 - \cos x)/x^2$ is $0/0$. Differentiate: $((1 - \cos x)/x^2)' \to \sin x / (2x)$, which is $0/0$. Differentiate again: $\cos x / 2 \to 1/2$. So the original limit is $1/2$.

**Connection to Taylor series.** A useful trick: when L'Hôpital cycles without resolving, expand both $f$ and $g$ in Taylor series. The limit is the ratio of the leading terms. For $\lim_{x \to 0} (\sin x - x)/x^3$, expand $\sin x = x - x^3/6 + \cdots$, so $\sin x - x \approx -x^3/6$, and the limit is $-1/6$. This often beats repeated differentiation.

## Key Ideas
- L'Hôpital's rule: for $0/0$ or $\infty/\infty$ forms, $\lim f/g = \lim f'/g'$.
- The hypotheses are differentiability, non-vanishing $g'$, and existence of the new limit.
- Other indeterminate forms can be converted to $0/0$ or $\infty/\infty$.
- For $1^\infty$, $0^0$, $\infty^0$: take the logarithm.
- If L'Hôpital cycles, try Taylor expansion; the limit is the ratio of leading terms.

## Worked Examples
**Example 1 — Classic.** $\lim_{x \to 0} \sin x / x$. Apply L'Hôpital: $\cos x / 1 \to 1$.

**Example 2 — Exponential vs. polynomial.** $\lim_{x \to \infty} x^n / e^x$ for any fixed $n$. This is $\infty/\infty$. Apply L'Hôpital $n$ times: each application reduces the polynomial degree by one and leaves the exponential. After $n$ applications, you get a constant over $e^x \to 0$.

**Example 3 — $1^\infty$ form.** $\lim_{x \to 0} (1 + x)^{1/x}$. Take the logarithm: $\ln(1 + x)^{1/x} = (1/x) \ln(1 + x) = \ln(1 + x) / x \to 1$ (using the series $\ln(1 + x) = x - x^2/2 + \cdots$). So the original limit is $e^1 = e$.

**Example 4 — Product form.** $\lim_{x \to 0^+} x \ln x$. This is $0 \cdot (-\infty)$. Rewrite as $\ln x / (1/x)$, which is $(-\infty)/\infty$. L'Hôpital: $(1/x) / (-1/x^2) = -x \to 0$.

## Common Misconceptions
- **"L'Hôpital's rule always works."** Only for the specific indeterminate forms, and only when the new limit exists. Otherwise you must try a different method.
- **"You can apply L'Hôpital to any limit involving $0$ or $\infty$."** No. The rule needs a ratio $f/g$ with both tending to $0$ or both tending to $\pm\infty$.
- **"Differentiating the numerator and denominator of a sum gives the limit of the sum."** No. L'Hôpital's rule applies to a single ratio, not a sum. $(f + h)/g$ is not $(f' + h')/g'$ in general.
- **"L'Hôpital is a free pass — you don't need to think."** It is a tool, not a substitute for understanding. Some limits that look like L'Hôpital are not (e.g. $\lim_{x \to 0} (1/x) \sin(1/x)$, which does not exist) and a misapplied L'Hôpital can mislead.

## Connections
L'Hôpital's rule is the most useful limit tool after the standard limit algebra. It appears in *Real Analysis* (Sem 3) as a special case of a more general theorem. Its cousin, the Taylor-expansion method, becomes essential in *Astrophysics* for asymptotic series and in *Differential Equations* for regular perturbation expansions.

## Quick Check
1. Compute $\lim_{x \to 0} (e^x - 1)/x$ using L'Hôpital's rule.
2. Compute $\lim_{x \to \infty} \ln x / x$.
3. Compute $\lim_{x \to 0} (1 - \cos x)/x^2$.
4. Compute $\lim_{x \to 0} (1 + x)^{1/x}$.
5. Compute $\lim_{x \to 0} (x - \sin x)/x^3$. Compare L'Hôpital with the Taylor method.

## Takeaway
- L'Hôpital's rule: $\lim f/g = \lim f'/g'$ for $0/0$ or $\infty/\infty$ forms, when the new limit exists.
- Other indeterminate forms reduce to $0/0$ or $\infty/\infty$ by algebraic manipulation.
- For $1^\infty$, $0^0$, $\infty^0$: take logarithms first.
- If L'Hôpital cycles without resolving, expand both sides as Taylor series.
- L'Hôpital is a tool — check hypotheses, and do not apply it to non-ratio expressions.
