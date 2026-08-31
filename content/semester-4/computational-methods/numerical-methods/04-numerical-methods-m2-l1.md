***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-4
semesterName: Semester 4
subjectId: computational-methods
subjectName: Computational Methods
courseId: numerical-methods
courseName: Numerical Methods
moduleId: numerical-methods-module-2
moduleName: Numerical Calculus
lessonId: numerical-methods-m2-l1
lessonName: Numerical Differentiation and Errors
lessonNumber: 4
moduleNumber: 2
semesterNumber: 4
difficulty: intermediate
estimatedStudyMinutes: 50
releaseOrder: 4
prerequisites:
  - numerical-methods-m1-l2
  - real-analysis-m2-l3
learningObjectives:
  - Derive finite-difference formulas for $f'$ and $f''$.
  - State the truncation error order for each formula.
  - Recognise the trade-off between truncation and round-off error.
  - Use Richardson extrapolation to improve accuracy.
concepts:
  - Finite difference
  - Forward, backward, central differences
  - Truncation error
  - Round-off error
  - Richardson extrapolation
  - Step-size selection
tags:
  - computational-methods
  - numerical-analysis
  - differentiation
sourceType: authored-courseware
assessmentHints:
  - derivation
  - problem-solving
  - conceptual
***

# Numerical Differentiation and Errors

## Overview
The derivative of a function can be approximated by finite differences — the slope of a secant line. The most common formulas are forward, backward, and central differences, with truncation errors of order $h$, $h$, and $h^2$ respectively. Choosing the step size $h$ is a delicate trade-off between truncation error (decreasing as $h \to 0$) and round-off error (increasing as $h \to 0$ because of finite-precision arithmetic). Richardson extrapolation pushes the accuracy further. This lesson derives the formulas, analyses the errors, and provides guidance on step-size selection.

## Learning Path
- What you should already know: Taylor's theorem, the limit definition of the derivative, basic floating-point arithmetic.
- What this lesson adds: finite-difference formulas, their error analysis, and step-size selection.
- What it unlocks: numerical solution of ODEs (next lesson), finite-difference methods for PDEs, and gradient computations in optimisation.

## Core Explanation
**Taylor expansion.** Around $x$, $f(x + h) = f(x) + h f'(x) + h^2 f''(x)/2 + h^3 f'''(x)/6 + \ldots$. Solving for $f'(x)$ gives various finite-difference formulas.

**Forward difference.** $f'(x) \approx (f(x + h) - f(x))/h$. The error is $h f''(x)/2 + O(h^2)$ — first order in $h$.

**Backward difference.** $f'(x) \approx (f(x) - f(x - h))/h$. Same first-order error, but with the opposite sign.

**Central difference.** Subtract the two Taylor expansions: $f(x + h) - f(x - h) = 2 h f'(x) + O(h^3)$. So $f'(x) \approx (f(x + h) - f(x - h))/(2 h)$, with error $O(h^2)$. Twice as accurate as forward/backward, with the same cost.

**Second derivative.** $f''(x) \approx (f(x + h) - 2 f(x) + f(x - h))/h^2$. Error $O(h^2)$. The standard finite-difference formula for the Laplacian, used in PDE solvers.

**Higher derivatives.** $f'''(x) \approx (f(x + 2h) - 2 f(x + h) + 2 f(x - h) - f(x - 2h))/(2 h^3)$ — central, $O(h^2)$. And so on for higher derivatives.

**General finite-difference formulas.** Use $n + 1$ Taylor expansions to derive a formula for $f^{(k)}(x)$ using $k + 1$ function values, with error $O(h^{n - k + 1})$. For example, with 5 points, you can get $O(h^4)$ formulas for $f'$ and $f''$.

**Error sources.** Two kinds of error in numerical differentiation:
- *Truncation error*: the error from replacing the derivative with a finite-difference formula. Decreases as $h \to 0$ (for an $O(h^p)$ formula, it goes like $h^p$).
- *Round-off error*: the error from floating-point arithmetic, which is at best $\epsilon$ per arithmetic operation. Increases as $h \to 0$ (because $f(x + h)$ and $f(x)$ become close, and their difference has fewer significant digits).

**Optimal step size.** The total error is $E(h) \approx C_1 h^p + C_2 \epsilon/h$, where $\epsilon$ is machine epsilon. Minimising: $dE/dh = p C_1 h^{p-1} - C_2 \epsilon/h^2 = 0$, giving $h_\text{opt} = (p C_2 \epsilon / (C_1))^{1/(p+1)}$. For double precision ($\epsilon \approx 2 \times 10^{-16}$) and $p = 2$, $h_\text{opt} \approx 10^{-5}$ for the central-difference formula.

**Choosing $h$.** In practice, $h \approx \sqrt{\epsilon} \approx 10^{-8}$ for double precision. Too small $h$ leads to round-off dominating; too large to truncation dominating.

**Richardson extrapolation.** Suppose $D(h) = f'(x) + a_1 h^2 + a_2 h^4 + \ldots$ is the central-difference formula. Then $D(h/2) = f'(x) + a_1 h^2/4 + a_2 h^4/16 + \ldots$. The combination $D^*(h) = (4 D(h/2) - D(h))/3 = f'(x) + O(h^4)$ has eliminated the $h^2$ term. Repeat: $D^{**}(h) = (16 D^*(h/2) - D^*(h))/15 = f'(x) + O(h^6)$. The Romberg table of extrapolations gives $f'$ to any desired accuracy.

**Numerical second derivative.** Apply the first-derivative formula twice. For $f''$ on a uniform grid: $f''(x_i) \approx (f_{i+1} - 2 f_i + f_{i-1})/h^2$, with error $O(h^2)$. Higher-order formulas exist.

**Numerical partial derivatives.** For $f(x, y)$ on a grid, $f_x \approx (f_{i+1, j} - f_{i-1, j})/(2 h)$, etc. The Laplacian $\nabla^2 f \approx (f_{i+1, j} + f_{i-1, j} + f_{i, j+1} + f_{i, j-1} - 4 f_{i, j})/h^2$ — the standard 5-point stencil. The foundation of finite-difference methods for PDEs.

**Automatic differentiation.** A technique that computes derivatives exactly (up to round-off) by applying the chain rule to elementary operations. Two modes: forward (compute derivatives alongside values) and reverse (efficient for functions with many inputs). Used in machine learning for backpropagation.

**Symbolic differentiation.** Compute derivatives algebraically. The result is exact but can be very complicated (expression swell). Not practical for large expressions.

**Numerical Jacobian.** For a vector function $F: \mathbb{R}^n \to \mathbb{R}^m$, the Jacobian $J_{ij} = \partial F_i / \partial x_j$ is approximated by central differences in each component: $J_{ij} \approx (F_i(x + h e_j) - F_i(x - h e_j))/(2h)$. Cost: $2n$ evaluations of $F$ per row of $J$.

**Numerical Hessian.** Second derivatives, important in optimisation. The Hessian $H_{ij} = \partial^2 f/\partial x_i \partial x_j$ can be approximated by finite differences. Cost: $O(n^2)$ function evaluations.

**Spectral differentiation.** Differentiate in the Fourier domain. For a smooth periodic function, the derivative $\hat{f}'(k) = i k \hat{f}(k)$ is exact in the Fourier basis. Truncating the Fourier series and differentiating gives spectral accuracy. Used in numerical PDEs (spectral methods) and in spectral methods for boundary-value problems.

**Applications in physics.**
- Velocity from position data: $v(t_i) \approx (x_{i+1} - x_{i-1})/(2h)$.
- Acceleration from velocity: $a(t_i) \approx (v_{i+1} - 2 v_i + v_{i-1})/h^2$.
- Force from potential: $F = -\nabla V$, computed by finite differences.
- Wave equation solutions: discretise space and use finite differences in time (FDTD — finite-difference time-domain).

**Smoothing data before differentiation.** If the data are noisy, smoothing (e.g. by a Savitzky–Golay filter) before differentiation gives much better results. Direct differentiation amplifies noise.

**Savitzky–Golay filter.** A local polynomial fit (least-squares) to a moving window of data. The polynomial's derivative gives a smoothed derivative of the data. Widely used in spectroscopy and signal processing.

**Cross-validation for smoothing.** Choose the smoothing parameter (window size, polynomial order, $\lambda$) by cross-validation: minimise the prediction error on held-out data.

**Complex step differentiation.** A trick to avoid the round-off catastrophe: $f'(x) \approx \text{Im}(f(x + i h))/h$. The truncation error is $O(h^2)$ and there is no subtraction, so no round-off amplification. Useful when the function is analytic.

**Automatic differentiation in physics.** Modern physics simulations use AD to compute gradients of complex loss functions, sensitivities of observables to parameters, and adjoint-based optimisations. It is becoming standard in computational physics.

## Key Ideas
- Forward/backward difference: $f'(x) \approx \pm (f(x \pm h) - f(x))/h$, $O(h)$.
- Central difference: $f'(x) \approx (f(x + h) - f(x - h))/(2h)$, $O(h^2)$.
- Second derivative: $f''(x) \approx (f(x + h) - 2 f(x) + f(x - h))/h^2$, $O(h^2)$.
- Optimal $h \approx \sqrt{\epsilon}$ for double precision.
- Richardson extrapolation pushes the accuracy further.

## Worked Examples
**Example 1 — Forward difference.** $f(x) = \sin x$, $x = 1$, $h = 0.01$. $f'(1) = \cos 1 \approx 0.540302$. Forward: $(f(1.01) - f(1))/0.01 = (0.846832 - 0.841471)/0.01 = 0.536100$. Error $\approx 0.004202$, $O(h) = O(0.01)$. ✓

**Example 2 — Central difference.** Same setup: $(f(1.01) - f(0.99))/0.02 = (0.846832 - 0.836026)/0.02 = 0.540293$. Error $\approx 9.0 \times 10^{-6}$, $O(h^2) = O(0.0001)$. ✓

**Example 3 — Optimal $h$.** $\epsilon \approx 10^{-16}$, $p = 2$, $h_\text{opt} \approx \epsilon^{1/3} \approx 10^{-5}$. For double precision central difference of a smooth function, $h \sim 10^{-5}$ to $10^{-8}$ is the sweet spot.

**Example 4 — Second derivative of $\sin x$ at $x = 1$.** $f''(1) = -\sin 1 \approx -0.841471$. Using the central second difference with $h = 0.01$: $\sin(1.01) = 0.846832$, $\sin(1) = 0.841471$, $\sin(0.99) = 0.836026$. $(f(1.01) - 2 f(1) + f(0.99))/h^2 = (0.846832 - 1.682942 + 0.836026)/0.0001 = -0.0000841/0.0001 = -0.841464$. The error is $|{-0.841464} - ({-0.841471})| \approx 7 \times 10^{-6}$, consistent with the $O(h^2)$ truncation error $h^2 f^{(4)}(\xi)/12 \approx 10^{-4} \times 0.84/12 \approx 7 \times 10^{-6}$. (Use full double-precision values for the intermediate sines; rounding to 4–5 decimals inflates the apparent error, which is the trap to avoid.)

**Example 5 — Richardson extrapolation.** Estimate $f'(1) = \cos 1 \approx 0.54030231$ for $f(x) = \sin x$ using the central difference $D(h) = (f(1+h) - f(1-h))/(2h)$. With $h = 0.01$: $D(h) = (\sin 1.01 - \sin 0.99)/0.02 = (0.84683184 - 0.83602598)/0.02 = 0.54029330$, error $\approx 9.0 \times 10^{-6}$. With $h/2 = 0.005$: $D(h/2) = (\sin 1.005 - \sin 0.995)/0.01 = (0.84416197 - 0.83875897)/0.01 = 0.54030005$, error $\approx 2.25 \times 10^{-6}$ (one quarter of the $h$ error, as expected for $O(h^2)$). Richardson extrapolation: $D^* = (4 D(h/2) - D(h))/3 = (4 \times 0.54030005 - 0.54029330)/3 = 0.54030231$, matching $\cos 1$ to $\sim 10^{-11}$. The extrapolation cancels the leading $h^2$ error term and leaves an $O(h^4)$ remainder.

## Common Misconceptions
- **"Smaller $h$ is always better."** No — round-off error grows as $h \to 0$. There is an optimal $h$.
- **"Forward and central differences are the same."** Central is twice as accurate ($O(h^2)$ vs. $O(h)$).
- **"Differentiating data requires the same data as integration."** Integration is much more forgiving (errors average out); differentiation amplifies noise.
- **"Numerical differentiation is exact for polynomials."** It is exact for polynomials of degree $\le n$ (with the appropriate formula) but not in general.

## Connections
Numerical differentiation is the workhorse of finite-difference methods for ODEs and PDEs. The Laplacian, the gradient, and the Jacobian are all computed by finite differences. The same formulas (with imaginary $h$) become the spectral derivative in the Fourier basis. Automatic differentiation is the modern alternative for exact (up to round-off) derivatives.

## Quick Check
1. State the central-difference formula for $f'(x)$.
2. State the central-difference formula for $f''(x)$.
3. Why is there an optimal step size $h$?
4. What is Richardson extrapolation?
5. Apply the central-difference formula to $f(x) = x^3$ at $x = 1$ with $h = 0.1$.

## Takeaway
- Forward/backward difference: $O(h)$ error.
- Central difference for $f'$: $O(h^2)$.
- Central difference for $f''$: $(f(x+h) - 2 f(x) + f(x-h))/h^2$, $O(h^2)$.
- Optimal $h \sim \sqrt{\epsilon}$ for double precision.
- Richardson extrapolation: combine to eliminate lower-order error terms.
