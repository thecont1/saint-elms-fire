***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-1
semesterName: Semester 1
subjectId: mathematics
subjectName: Mathematics
courseId: integral-calculus
courseName: Integral Calculus
moduleId: integral-calculus-module-1
moduleName: Antiderivatives and Indefinite Integrals
lessonId: integral-calculus-m1-l3
lessonName: Substitution (u-Substitution)
lessonNumber: 3
moduleNumber: 1
semesterNumber: 1
difficulty: intermediate
estimatedStudyMinutes: 55
releaseOrder: 3
prerequisites:
  - integral-calculus-m1-l2
learningObjectives:
  - Apply $u$-substitution to integrate composite functions.
  - Adjust the differential $dx$ and the limits when changing variables.
  - Choose substitutions that simplify the integrand.
concepts:
  - u-substitution
  - Change of variable
  - Differential du
  - Composite functions
  - Inverse substitution
tags:
  - mathematics
  - calculus
  - integration
sourceType: authored-courseware
assessmentHints:
  - conceptual
  - derivation
  - problem-solving
  - short-answer
***

# Substitution (u-Substitution)

## Overview

$u$-substitution is the integration analogue of the chain rule for differentiation. When the integrand is a composite function $f(g(x)) \cdot g'(x)$, the substitution $u = g(x)$, $du = g'(x)\, dx$ reduces the integral to $\int f(u)\, du$, which is usually simpler. The lesson develops the technique, identifies the situations in which it applies, and works through examples that connect to physics (decay processes, energy from force, simple harmonic motion). The lesson closes with the inverse problem: a definite integral can often be evaluated more easily by a change of variable, provided the limits are converted correctly.

## Learning Path

- **What you should already know**: the chain rule of differentiation; the antiderivatives of the elementary functions from Lesson m1-l2.
- **What this lesson adds**: $u$-substitution as a systematic technique; the change of $dx$ to $du$; the conversion of definite-integral limits.
- **What later lessons this will unlock**: definite-integral applications in Module 2, advanced integration techniques in Module 3 (trigonometric substitution, integration by parts), and the applications in physics (RC discharge, work done by a variable force, energy of a stretched spring).

## Core Explanation

### The chain rule in reverse

The chain rule states that $\frac{d}{dx} F(g(x)) = F'(g(x)) g'(x)$. In integral form, if $u = g(x)$ and $du = g'(x)\, dx$, then

$$\int F'(g(x)) g'(x)\, dx = F(g(x)) + C = F(u) + C = \int F'(u)\, du.$$

So an integrand that has the form $F'(g(x)) g'(x)$ can be integrated by recognising the outer function $F'$ and the inner function $g$, then changing variable to $u = g(x)$.

In practice the procedure is:

1. Identify a candidate $u = g(x)$ inside the integrand. The standard clues are:
   - A composite function with a derivative factor present.
   - An expression whose derivative also appears as a factor in the integrand.
2. Compute $du = g'(x)\, dx$.
3. Replace $g(x)$ with $u$ and $g'(x)\, dx$ with $du$ in the integrand.
4. Integrate the resulting simpler integral in $u$.
5. Substitute back $u = g(x)$ in the final answer.
6. For definite integrals, also convert the limits: when $x = a$, $u = g(a)$; when $x = b$, $u = g(b)$.

### Worked examples

**Example A.** Compute $\int 2 x \cos(x^2) dx$.

Identify $u = x^2$, so $du = 2 x\, dx$. The integrand becomes $\int \cos(u)\, du = \sin u + C = \sin(x^2) + C$.

Check: $\frac{d}{dx} \sin(x^2) = \cos(x^2) \cdot 2 x = 2 x \cos(x^2)$. ✓

**Example B.** Compute $\int \frac{x}{x^2 + 1} dx$.

Identify $u = x^2 + 1$, so $du = 2 x\, dx$, or $x\, dx = du/2$. The integrand becomes $\int \frac{1}{u} \cdot \frac{du}{2} = \frac{1}{2} \int \frac{du}{u} = \frac{1}{2} \ln|u| + C = \frac{1}{2} \ln(x^2 + 1) + C$.

Check: $\frac{d}{dx}\left[\frac{1}{2} \ln(x^2 + 1)\right] = \frac{1}{2} \cdot \frac{2 x}{x^2 + 1} = \frac{x}{x^2 + 1}$. ✓

**Example C.** Compute $\int e^{\sin x} \cos x\, dx$.

Identify $u = \sin x$, so $du = \cos x\, dx$. The integrand becomes $\int e^u\, du = e^u + C = e^{\sin x} + C$.

Check: $\frac{d}{dx} e^{\sin x} = e^{\sin x} \cdot \cos x$. ✓

### When to substitute

The standard clues for $u$-substitution are:

- The integrand contains a composite function $f(g(x))$ and an explicit factor $g'(x)$.
- A simple algebraic manipulation can produce such a structure (e.g. writing $x\, dx$ as $du/2$ when $u = x^2$).
- A trigonometric identity reveals a structure amenable to substitution.

The substitution is sometimes not obvious. The first try is usually the inner function of a composite; if that fails, try a more creative substitution (e.g. the integrand $x/(x+1)$ invites the substitution $u = x + 1$).

### Definite integrals and limits

For a definite integral, the change of variable also affects the limits. If $u = g(x)$, then

$$\int_{x = a}^{x = b} f(g(x)) g'(x)\, dx = \int_{u = g(a)}^{u = g(b)} f(u)\, du.$$

The substitution eliminates the need to convert back to $x$ in the final answer, but the limits must be converted correctly. A common error is to forget to convert the limits, leading to wrong answers even when the integrand is correctly integrated in $u$.

### Multiple substitutions

Some integrands require more than one substitution, applied sequentially. For example, $\int \sin(\sqrt{x})\, dx$ suggests the substitution $u = \sqrt{x}$, then $x = u^2$, $dx = 2 u\, du$, giving $\int 2 u \sin u\, du$, which then requires integration by parts. The chain of substitutions is no different from the chain rule: each substitution reduces the integrand to a simpler form.

### Integration of composite trig functions

Trigonometric integrals often require the identity $\sin^2 x + \cos^2 x = 1$ or the half-angle formulas. With substitution, they can be tackled systematically:

- $\int \sin^n x \cos x\, dx$: substitute $u = \sin x$, $du = \cos x\, dx$. The result is $\int u^n\, du = u^{n+1}/(n+1) + C = \sin^{n+1} x/(n+1) + C$.
- $\int \cos^n x \sin x\, dx$: substitute $u = \cos x$, $du = -\sin x\, dx$. The result is $-\int u^n\, du = -u^{n+1}/(n+1) + C = -\cos^{n+1} x/(n+1) + C$.
- $\int \tan x \sec^2 x\, dx$: substitute $u = \tan x$, $du = \sec^2 x\, dx$. The result is $\int u\, du = u^2/2 + C = \tan^2 x/2 + C$.

These patterns are widely useful in the integration of trig-based physics integrands (e.g. the energy of a simple harmonic oscillator averaged over a cycle).

### Substitution in physics

The substitution technique appears repeatedly in physics:

- **Decay processes**: $\int e^{-k t} dt$ is immediate by inspection. But $\int t e^{-k t}\, dt$ requires $u = -k t$ and the integration-by-parts technique (next module).
- **Energy from force**: $W = \int F(x)\, dx$ for a position-dependent force. The substitution $u = x^2$ simplifies the work done by a spring $F = -k x$: $W = \int_0^{x_0} k x\, dx = k x_0^2/2$.
- **Centripetal acceleration**: $a_c = v^2/r$. With $u = v^2$, $du = 2 v\, dv$, the integral of $a_c\, dt$ reduces to a tractable form.
- **Variable mass problems**: integrals of the form $\int m(v) v\, dv$ are common in rocket propulsion; the substitution $u = m$ (or $u = v$) simplifies them.

### Inverse substitution

Sometimes the substitution $u = g(x)$ is more naturally inverted: $x = g^{-1}(u)$. This is useful when $g^{-1}$ is simpler than $g$. For example, $u = e^x$ gives $x = \ln u$, and $dx = du/u$. The integral $\int e^x \sqrt{1 + e^{2x}}\, dx$ becomes $\int u \sqrt{1 + u^2} \cdot \frac{du}{u} = \int \sqrt{1 + u^2}\, du$, which is a standard form.

### Common pitfalls

- **Forgetting $du$**: the substitution requires changing both $g(x) \to u$ and $g'(x) dx \to du$. Replacing only the first leaves a leftover factor.
- **Wrong sign**: if $u = g(x)$ and the integrand has $-g'(x)$ instead of $+g'(x)$, then $du = -g'(x) dx$, and the sign flips. Be careful.
- **Not converting limits in definite integrals**: a common error in definite integrals.
- **Inappropriate substitution**: not every integrand has a useful substitution. Trying substitutions that do not simplify the integrand is wasted effort.
- **Overcomplicating**: many integrands that look complex become simple after a single $u$-substitution; do not over-engineer.

## Key Ideas

- $u$-substitution is the chain rule in reverse: $\int F'(g(x)) g'(x)\, dx = F(g(x)) + C$.
- The substitution is $u = g(x)$, $du = g'(x) dx$.
- For definite integrals, also convert the limits: $u = g(a)$ at $x = a$, $u = g(b)$ at $x = b$.
- The right $u$ is usually the inner function of a composite or an expression whose derivative also appears.
- The technique reduces composite integrals to elementary ones.
- Physics applications include decay, energy from force, and variable-mass problems.

## Worked Examples

### Example 1 — Substitution of a polynomial argument

Compute $\int 2 x \sqrt{x^2 + 1}\, dx$.

**Solution.** Let $u = x^2 + 1$, $du = 2 x\, dx$. Then

$$\int 2 x \sqrt{x^2 + 1}\, dx = \int \sqrt{u}\, du = \int u^{1/2}\, du = \frac{u^{3/2}}{3/2} + C = \frac{2}{3} (x^2 + 1)^{3/2} + C.$$

Check by differentiation: $\frac{d}{dx}\left[\frac{2}{3} (x^2 + 1)^{3/2}\right] = \frac{2}{3} \cdot \frac{3}{2} (x^2 + 1)^{1/2} \cdot 2 x = 2 x \sqrt{x^2 + 1}$. ✓

### Example 2 — Definite integral with substitution

Compute $\int_0^2 x e^{x^2} dx$.

**Solution.** Let $u = x^2$, $du = 2 x\, dx$, so $x\, dx = du/2$. When $x = 0$, $u = 0$. When $x = 2$, $u = 4$. The integral becomes

$$\int_0^2 x e^{x^2}\, dx = \int_0^4 e^u \cdot \frac{du}{2} = \frac{1}{2} \int_0^4 e^u\, du = \frac{1}{2} (e^4 - e^0) = \frac{e^4 - 1}{2}.$$

Numerically: $(e^4 - 1)/2 \approx (54.598 - 1)/2 \approx 26.80$. The result is positive, as expected for a positive integrand over a positive interval.

### Example 3 — Substitution with a linear argument

Compute $\int (3 x + 5)^4 dx$.

**Solution.** Let $u = 3 x + 5$, $du = 3\, dx$, so $dx = du/3$. The integral becomes

$$\int u^4 \cdot \frac{du}{3} = \frac{1}{3} \cdot \frac{u^5}{5} + C = \frac{(3 x + 5)^5}{15} + C.$$

Check by differentiation: $\frac{d}{dx}\left[\frac{(3 x + 5)^5}{15}\right] = \frac{5 (3 x + 5)^4 \cdot 3}{15} = (3 x + 5)^4$. ✓

## Common Misconceptions

- **"$u$ must be the inside of a parenthesised expression."** No. $u$ can be any sub-expression whose derivative also appears in the integrand.
- **"Substitution is always the right technique."** No. Some integrands need integration by parts, partial fractions, or trigonometric substitution, all developed in later lessons. Substitution is the first tool to try, but not the only one.
- **"The constant of integration appears in definite integrals."** It does not, because the limits absorb it. A definite integral evaluates to a number (or expression), not a family of functions.
- **"The differential $du$ can be ignored."** It is essential. $du = g'(x) dx$ is the price of the substitution; without it, the variable change is incomplete.
- **"You can substitute and not convert the limits."** For definite integrals, you must convert the limits. For indefinite integrals, there are no limits to convert.

## Connections

- $u$-substitution is the chain rule applied in reverse; it is the most-used integration technique.
- The technique generalises to multiple substitutions, change of variable in definite integrals, and inverse substitutions.
- Physics applications: decay processes, work from force, energy storage, kinematic integrals.
- The next module develops the definite integral, area, and the fundamental theorem of calculus.
- Module 3 develops integration by parts, trigonometric substitution, and partial fractions — the techniques that handle integrals where simple substitution does not suffice.

## Quick Check

1. Compute $\int 3 x^2 (x^3 + 1)^4 dx$.
2. Compute $\int_1^2 \frac{\ln x}{x} dx$.
3. Compute $\int \cos(2 x + 1) dx$.
4. Compute $\int \frac{2 x + 1}{x^2 + x + 1} dx$.
5. Compute $\int e^{x^2} \cdot 2 x\, dx$.

## Takeaway

- $u$-substitution is the chain rule in reverse.
- Identify $u = g(x)$ and $du = g'(x) dx$; replace in the integrand.
- For definite integrals, also convert the limits.
- The right $u$ is usually the inner function of a composite.
- The technique is the workhorse of physics integrals.
