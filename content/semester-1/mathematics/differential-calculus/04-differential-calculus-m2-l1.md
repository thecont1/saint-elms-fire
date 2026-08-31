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
lessonId: differential-calculus-m2-l1
lessonName: The Derivative as a Function
lessonNumber: 4
moduleNumber: 2
semesterNumber: 1
difficulty: foundation
estimatedStudyMinutes: 45
releaseOrder: 4
prerequisites:
  - differential-calculus-m1-l1
learningObjectives:
  - Define the derivative as a limit of difference quotients.
  - Interpret the derivative geometrically as the slope of a tangent line.
  - Interpret the derivative physically as an instantaneous rate of change.
  - Use the definition to compute derivatives of simple functions.
concepts:
  - Difference quotient
  - Derivative
  - Tangent line
  - Instantaneous rate of change
  - Differentiability
tags:
  - mathematics
  - calculus
  - derivative
sourceType: authored-courseware
assessmentHints:
  - conceptual
  - derivation
  - problem-solving
***

# The Derivative as a Function

## Overview
The derivative is the central object of calculus. Given a function $f$, its derivative $f'$ at a point $x$ measures the instantaneous rate at which $f$ changes with respect to $x$. Formally, the derivative is the limit of a difference quotient — the slope of a secant line that becomes a tangent line as the two points merge. This lesson establishes the definition and its two most important interpretations: slope of a graph and rate of change of a quantity.

## Learning Path
- What you should already know: limits, function notation, slope of a line.
- What this lesson adds: a precise derivative, with geometric and physical meaning.
- What it unlocks: differentiation rules, applications to mechanics (velocity, acceleration), curve sketching, and Taylor series.

## Core Explanation
**The difference quotient.** For a function $f$ and a point $x$, the slope of the line joining $(x, f(x))$ and $(x + h, f(x + h))$ is

$$\frac{f(x + h) - f(x)}{h}.$$

This is the *difference quotient*. It is an average rate of change over the interval $[x, x + h]$.

**The derivative.** The derivative of $f$ at $x$ is the limit of the difference quotient as $h \to 0$:

$$f'(x) = \lim_{h \to 0} \frac{f(x + h) - f(x)}{h},$$

provided the limit exists. An equivalent form uses $x$ approaching $a$ from either side:

$$f'(a) = \lim_{x \to a} \frac{f(x) - f(a)}{x - a}.$$

If the limit exists, we say $f$ is differentiable at $a$. The derivative $f'$ is itself a function, defined wherever $f$ is differentiable.

**Geometric meaning.** Geometrically, $f'(a)$ is the slope of the tangent line to $y = f(x)$ at the point $(a, f(a))$. The tangent line is the limit of secant lines as the second point merges into the first.

**Physical meaning.** Physically, if $y = f(t)$ represents a quantity at time $t$, then $f'(t_0)$ is the *instantaneous rate of change* at $t_0$ — for example, the velocity at $t_0$ if $f$ is position.

**Differentiability implies continuity.** If $f$ is differentiable at $a$, then $f$ is continuous at $a$. The converse fails: $f(x) = |x|$ is continuous at $0$ but not differentiable there (the left and right tangent slopes are $-1$ and $+1$).

**Notation.** Several notations for the derivative:
- Lagrange: $f'(x)$.
- Leibniz: $dy/dx$ or $df/dx$.
- Newton (mostly physics): $\dot{y}$ for time derivative.
- Euler: $D_x f$.

Each has its uses; physicists favour Leibniz and Newton; mathematicians favour Lagrange.

**Computing derivatives from the definition.** A useful exercise: $f(x) = x^2$, $f'(x) = \lim_{h \to 0} [(x + h)^2 - x^2]/h = \lim_{h \to 0} (2 x h + h^2)/h = \lim_{h \to 0} (2 x + h) = 2 x$. So $(x^2)' = 2x$. We will systematise this in the next lesson.

**Higher derivatives.** The derivative of $f'$ is the second derivative $f''$. The third derivative is $f'''$ or $f^{(3)}$. In physics, $\ddot{x}$ is acceleration, and the third derivative of position is *jerk*.

## Key Ideas
- $f'(x) = \lim_{h \to 0} [f(x + h) - f(x)]/h$.
- Geometrically, $f'(a)$ is the slope of the tangent at $a$.
- Physically, $f'(t)$ is the instantaneous rate of change of $f$ at $t$.
- Differentiability implies continuity; continuity does not imply differentiability.
- Common notations: $f'$, $dy/dx$, $\dot{y}$, $D_x f$.

## Worked Examples
**Example 1 — Derivative of $x^3$ from the definition.** $f'(x) = \lim_{h \to 0} [(x + h)^3 - x^3]/h$. Expand: $(x + h)^3 - x^3 = 3 x^2 h + 3 x h^2 + h^3$. Divide by $h$: $3 x^2 + 3 x h + h^2$. Limit as $h \to 0$ is $3 x^2$. So $(x^3)' = 3 x^2$.

**Example 2 — Derivative of $\sqrt{x}$ at $x = 4$.** $f(x) = \sqrt{x}$, $f'(4) = \lim_{h \to 0} [\sqrt{4 + h} - 2]/h$. Rationalise: multiply by $(\sqrt{4 + h} + 2)/(\sqrt{4 + h} + 2)$. Numerator: $4 + h - 4 = h$. Result: $1/(\sqrt{4 + h} + 2) \to 1/4$. So $f'(4) = 1/4$.

**Example 3 — Velocity from position.** The position of a particle is $x(t) = 4 t^3 - 2 t$ (metres, seconds). Find the velocity and acceleration at $t = 2\text{ s}$.
$x'(t) = 12 t^2 - 2$. At $t = 2$: $v = 12 \cdot 4 - 2 = 46\text{ m/s}$.
$x''(t) = 24 t$. At $t = 2$: $a = 48\text{ m/s}^2$.

## Common Misconceptions
- **"Differentiable means smooth."** Closer to "no corners, no vertical tangents, no jumps". $f(x) = x \sin(1/x)$ is differentiable everywhere if you set $f(0) = 0$, even though it wiggles.
- **"$f'(a) = 0$ means the function is constant."** Locally it does — a local extremum or saddle has $f'(a) = 0$. Globally, $f$ can be non-constant with $f'(a) = 0$ at isolated points.
- **"The derivative is the slope of the curve."** The derivative is the slope of the *tangent line* to the curve at the point. The slope of the curve at a point is not otherwise defined.
- **"$dy/dx$ is a fraction."** In Leibniz's notation, $dy/dx$ behaves like a fraction under the chain rule, but $dy$ and $dx$ are not independent quantities. This is a useful fiction that becomes precise in differential forms.

## Connections
The derivative is the language of velocity, acceleration, and force in *Mechanics* (this semester). The geometric meaning ties to curve sketching in the next module. The chain rule derived from the limit definition previews composition of functions used in *Electricity and Magnetism* (fields in three dimensions) and *Astrophysics* (gravitational potential as a function of position).

## Quick Check
1. Compute $f'(x)$ for $f(x) = x^2 + 3x - 5$ using the limit definition.
2. What is the slope of the tangent to $y = x^3$ at $x = -1$?
3. A particle's position is $x(t) = 5 t^2 + 1$. Find its velocity at $t = 3\text{ s}$.
4. Give an example of a continuous function that is not differentiable at some point. Explain why.
5. State two physical quantities that are derivatives of other quantities.

## Takeaway
- The derivative is the limit of a difference quotient: $f'(x) = \lim_{h \to 0} [f(x + h) - f(x)]/h$.
- Geometrically, the derivative is the slope of the tangent line.
- Physically, it is the instantaneous rate of change.
- Differentiability implies continuity; the converse does not hold.
- Notation varies by tradition; the underlying object is the same.
