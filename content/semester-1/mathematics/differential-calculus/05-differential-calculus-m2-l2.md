***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-1
semesterName: Semester 1
subjectId: mathematics
subjectName: Mathematics
courseId: differential-calculus
courseName: Differential Calculus
moduleId: differential-calculus-module-2
moduleName: Differentiation
lessonId: differential-calculus-m2-l2
lessonName: Rules of Differentiation
lessonNumber: 5
moduleNumber: 2
semesterNumber: 1
difficulty: foundation
estimatedStudyMinutes: 50
releaseOrder: 5
prerequisites:
  - differential-calculus-m2-l1
learningObjectives:
  - State and apply the constant, sum, product, quotient, and chain rules.
  - Differentiate polynomials, exponentials, logarithms, and trigonometric functions.
  - Use the chain rule to differentiate compositions.
  - Combine rules to differentiate complex expressions.
concepts:
  - Constant multiple rule
  - Sum rule
  - Product rule
  - Quotient rule
  - Chain rule
  - Power rule
tags:
  - mathematics
  - calculus
  - differentiation
  - chain-rule
sourceType: authored-courseware
assessmentHints:
  - derivation
  - problem-solving
  - conceptual
***

# Rules of Differentiation

## Overview
Computing derivatives from the limit definition works for the first few functions, then becomes too slow. The differentiation rules — constant multiple, sum, product, quotient, chain — turn differentiation into a mechanical operation, and combined with a small table of standard derivatives they cover most of the functions you will meet in physics and the other sciences.

## Learning Path
- What you should already know: the limit definition of derivative, basic algebra.
- What this lesson adds: a toolkit of rules and a small table of derivatives to differentiate fluently.
- What it unlocks: implicit differentiation, Taylor series, related rates, and most of applied calculus.

## Core Explanation
**Constant multiple rule.** If $c$ is a constant, $(c f)' = c f'$. Constants slide through the derivative.

**Sum and difference rules.** $(f \pm g)' = f' \pm g'$. Differentiation is linear.

**Power rule.** For $n \in \mathbb{R}$, $(x^n)' = n x^{n-1}$. This is the most-used single rule. It works for integer, rational, and even real exponents (where the function is defined). For example, $(x^5)' = 5 x^4$, $(\sqrt{x})' = (x^{1/2})' = \tfrac{1}{2} x^{-1/2} = 1/(2 \sqrt{x})$, and $(1/x)' = -1/x^2$.

**Product rule.** $(f g)' = f' g + f g'$. The derivative of a product is not the product of the derivatives; you get a sum of two terms.

**Quotient rule.** $(f/g)' = (f' g - f g')/g^2$ wherever $g \ne 0$. A useful mnemonic: "lo d-hi minus hi d-lo over the square of the bottom".

**Chain rule.** If $y = f(u)$ and $u = g(x)$, then $y' = f'(u) \cdot g'(x)$, or in Leibniz form,

$$\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx}.$$

The chain rule is the workhorse of composition. It says: differentiate the outer function, evaluated at the inner function, then multiply by the derivative of the inner.

**Table of standard derivatives.**

| $f(x)$ | $f'(x)$ |
|--------|---------|
| $c$ (constant) | $0$ |
| $x^n$ | $n x^{n-1}$ |
| $e^x$ | $e^x$ |
| $a^x$ | $a^x \ln a$ |
| $\ln x$ | $1/x$ |
| $\log_a x$ | $1/(x \ln a)$ |
| $\sin x$ | $\cos x$ |
| $\cos x$ | $-\sin x$ |
| $\tan x$ | $\sec^2 x$ |
| $\arcsin x$ | $1/\sqrt{1 - x^2}$ |
| $\arctan x$ | $1/(1 + x^2)$ |

**Combining rules.** Most interesting derivatives combine two or more rules. Example: $y = e^{\sin x}$. Chain rule with $u = \sin x$: $y' = e^{\sin x} \cdot \cos x$. Example: $y = x^2 \ln x$. Product rule: $y' = 2 x \ln x + x^2 \cdot (1/x) = 2 x \ln x + x$.

**Why the product rule is not obvious.** A common student error is $(f g)' = f' g'$. This is wrong in general. Take $f = g = x$: then $(f g) = x^2$, $(f g)' = 2 x$, but $f' g' = 1 \cdot 1 = 1$. The error is to treat derivatives as if they were factors.

## Key Ideas
- Linearity: $(c f \pm g)' = c f' \pm g'$.
- Power rule: $(x^n)' = n x^{n-1}$.
- Product rule: $(f g)' = f' g + f g'$.
- Quotient rule: $(f/g)' = (f' g - f g')/g^2$.
- Chain rule: $(f \circ g)'(x) = f'(g(x)) \cdot g'(x)$.

## Worked Examples
**Example 1 — Chain rule on a power.** $y = (3 x^2 + 1)^5$. Let $u = 3 x^2 + 1$. Then $y' = 5 u^4 \cdot 6 x = 30 x (3 x^2 + 1)^4$.

**Example 2 — Quotient rule.** $y = \sin x / x$. $y' = (\cos x \cdot x - \sin x \cdot 1)/x^2 = (x \cos x - \sin x)/x^2$. This is needed to find the limit of $\sin x / x$ as $x \to 0$ via L'Hôpital's rule.

**Example 3 — Combined product and chain.** $y = e^{x^2} \sin(3 x)$. Use the product rule: $y' = (e^{x^2})' \sin(3 x) + e^{x^2} (\sin 3 x)' = e^{x^2} \cdot 2 x \cdot \sin 3 x + e^{x^2} \cdot 3 \cos 3 x = e^{x^2} (2 x \sin 3 x + 3 \cos 3 x)$.

## Common Misconceptions
- **"$(f g)' = f' g'$. "** Wrong. The product rule is $(f g)' = f' g + f g'$. This is a common and persistent error.
- **"Chain rule needs me to substitute back."** You can write the answer either in terms of the original $x$ or in terms of the inner function $u$. Both are acceptable; the substituted-back form is usually what you want.
- **"$\log$ and $\ln$ are different things."** $\ln$ is the natural logarithm (base $e$); $\log$ without a subscript is often $\ln$ in calculus courses and $\log_{10}$ in engineering. State the base if it matters.
- **"The power rule only works for integer $n$."** It works for any real $n$ on the appropriate domain. The proof uses the chain rule and the logarithmic derivative for non-integer exponents.

## Connections
The chain rule is the calculus analogue of function composition in algebra. The product rule is a special case of the Leibniz rule for higher derivatives. In *Mechanics*, the chain rule appears when computing the radial component of acceleration in polar coordinates. In *Astrophysics*, the chain rule is implicit in the differentiation of gravitational potential.

## Quick Check
1. Differentiate $y = x^4 - 3 x^2 + 5$.
2. Differentiate $y = (x^2 + 1)^{10}$.
3. Differentiate $y = x e^x$.
4. Differentiate $y = \tan x$ using $\sin$ and $\cos$ and the quotient rule.
5. Differentiate $y = \sin(2 x^3)$.

## Takeaway
- Differentiation is linear: $(c f + g)' = c f' + g'$.
- The power rule $(x^n)' = n x^{n-1}$ is the workhorse for polynomials.
- The product and quotient rules handle combinations; the chain rule handles compositions.
- A small standard-derivatives table, plus the rules, covers most real-world differentiation.
- Almost every derivative you meet combines at least two of these rules.
