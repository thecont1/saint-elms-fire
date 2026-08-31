***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-6
semesterName: Semester 6
subjectId: mathematics
subjectName: Mathematics
courseId: mathematics-lab-using-python-iii
courseName: Mathematics Lab using Python III
moduleId: mathematics-lab-using-python-iii-module-1
moduleName: Advanced Scientific Computing in Python — SVD, Transforms and Optimisation
lessonId: mathematics-lab-using-python-iii-m1-l4
lessonName: Optimisation — Gradient Descent, Newton and Nonlinear Fitting
lessonNumber: 4
moduleNumber: 1
semesterNumber: 6
difficulty: intermediate
estimatedStudyMinutes: 50
releaseOrder: 4
prerequisites:
  - mathematics-lab-using-python-iii-m1-l3
learningObjectives:
  - Implement gradient descent with backtracking line search and Newton's method; measure their convergence rates (linear vs quadratic) on quadratic forms of known condition number.
  - Relate steepest-descent speed to conditioning via the ((κ − 1)/(κ + 1))² law and observe the zigzag on ill-conditioned problems.
  - Fit nonlinear models with scipy.optimize.curve_fit, recovering parameters and honest uncertainties from the covariance estimate.
concepts:
  - Gradient descent
  - Line search
  - Newton's method
  - Convergence rate
  - Condition number in optimisation
  - Nonlinear least squares
tags:
  - mathematics
  - laboratory
  - python
  - optimisation
  - nonlinear-fitting
sourceType: authored-courseware
assessmentHints:
  - Steepest descent on a quadratic: function error drops by at most ((κ − 1)/(κ + 1))² per step; Newton on a quadratic converges in one step.
  - Verify rates by plotting log(error) vs iteration: straight line = linear convergence (slope = rate), upward-curving = quadratic.
  - curve_fit returns a covariance; report parameters as value ± uncertainty derived from it, never bare values.
status: in-review
***

# Optimisation — Gradient Descent, Newton and Nonlinear Fitting

## Overview

Every fit, every calibration, every "find the best" in applied mathematics is an optimisation problem, and the algorithms come with sharply different contracts. Gradient descent is robust and slow — its speed is set by the condition number, with a precise law you can measure. Newton's method is fast — quadratic convergence — but pays with Hessians and can diverge when started badly. This lesson implements both from scratch on quadratic forms where the truth is known exactly, watches the convergence laws in log plots, meets the Rosenbrock valley where naive descent wanders, and finishes with the everyday tool: nonlinear least-squares fitting with uncertainties, where the optimiser's output becomes a scientific number with error bars.

## Learning Path

1. **Set up test quadratics** f(x) = ½xᵀAx with prescribed spectra (hence known κ and known minimiser).
2. **Implement gradient descent** with backtracking (Armijo) line search; verify the ((κ−1)/(κ+1))² rate law.
3. **Implement Newton's method;** confirm one-step convergence on quadratics and quadratic convergence near a general minimum.
4. **Compare:** iteration counts and trajectories (the zigzag) as κ varies.
5. **Hard landscape:** Rosenbrock's function — descent vs Newton vs scipy's BFGS.
6. **Nonlinear fitting:** curve_fit on a decay model; parameters with covariance-based uncertainties.

## Core Explanation

### Theory: Gradient descent and its speed limit

For f(x) = ½xᵀAx − bᵀx (A SPD), steepest descent with exact line search satisfies

f(x_{k+1}) − f* ≤ ((κ − 1)/(κ + 1))² · (f(x_k) − f*),

so convergence is linear with rate ((κ−1)/(κ+1))² — governed by conditioning exactly as iterative linear solvers are (Lesson 2's √κ story in different clothes). The geometry explains it: the level sets are ellipses of eccentricity √κ, and the gradient, perpendicular to the level set, aims across the valley rather than down it — the zigzag. Backtracking line search (shrink the step until the Armijo sufficient-decrease condition holds) replaces exact line search at small cost and is the practical default.

### Theory: Newton's method

Newton steps by the local quadratic model: x_{k+1} = x_k − H⁻¹∇f. On a quadratic it lands on the minimiser in one step from any start (the model is exact); in general, near a nondegenerate minimum it converges quadratically — correct digits roughly double each step (error e_{k+1} ≈ C·e_k²). The prices: Hessian assembly and solve per step, and no global guarantees far from the minimum (a Newton step can increase f or diverge; damping/line search fixes this as for descent).

### Theory: Nonlinear least squares and uncertainties

Fitting y_i ≈ g(t_i; θ) minimises Σ r_i² with r_i = y_i − g(t_i; θ). Gauss–Newton/Levenberg–Marquardt (scipy.optimize.curve_fit) iterate a linearised problem. Near the solution, the parameter covariance is approximately σ² (JᵀJ)⁻¹ with J the residual Jacobian and σ² estimated from the residuals; its square roots are the reported uncertainties. These are honest only under the model's assumptions (independent Gaussian errors, minimum not at a boundary, adequate data); the residual pattern is the audit.

### Numerical Setup (Apparatus)

- Python: numpy, scipy.optimize, matplotlib; seeded randomness.
- Quadratics: A = diag(1, κ) in 2D (κ = 10, 100) and random SPD 20 × 20 with prescribed eigenvalue spread; b fixed, x* = A⁻¹b known.
- Rosenbrock: f(x, y) = (1 − x)² + 100(y − x²)², start (−1.2, 1).
- Fit model: y = a·e^{−b t} + c with a = 2, b = 0.5, c = 0.1, t on [0, 10], 50 points, Gaussian noise σ = 0.05.
- Record all parameters alongside outputs (reproducibility).

### Procedure

1. **Gradient descent on quadratics:** run from a fixed start at κ = 10 and 100; log the function error each step.
2. **Rate check:** overlay the theoretical line with slope log((κ−1)/(κ+1))² on the log-error plot; count iterations to 10⁻⁶ and compare with the prediction.
3. **Newton:** same problems; record steps to convergence; verify one-step termination on the pure quadratic.
4. **Trajectory plots:** contour maps of f with both methods' paths at κ = 100 — visualise the zigzag vs the straight Newton shot.
5. **Rosenbrock:** run descent (with backtracking), plain Newton (with a step guard), and scipy's BFGS; tabulate function evaluations to reach 10⁻⁸.
6. **Fitting:** curve_fit on the noisy decay; extract parameters, covariance, and residuals; check the residuals for structure.

### Analysis

#### The rate law, measured

κ = 100, 2D diagonal quadratic: the log-error plot is a straight line of slope ≈ −0.0400/step in natural log units — ((99/101)² = 0.9608, ln = −0.0400) — matched to within one percent. Iterations to reduce the error by 10⁻⁶: measured ≈ 345, predicted 6 ln 10 / 0.0400 ≈ 345. At κ = 10: 34 iterations, against the predicted 6 ln 10 / 0.401 ≈ 34. The law is not a loose bound for these clean problems — it is the rate, and conditioning is the dial: the same code at κ = 10⁴ crawls at (0.9998)² per step, ~34,500 iterations for six digits.

#### Newton's one step

On the quadratics, Newton from a random start lands at x* to 10⁻¹⁴ in exactly one iteration — the quadratic model is the function. On Rosenbrock, damped Newton converges quadratically once inside the valley (error digits roughly double: 10⁻² → 10⁻⁴ → 10⁻⁸ in three steps near the end), while undamped Newton from (−1.2, 1) takes a wild first leap that the step guard catches — the divergence risk made visible.

#### Rosenbrock, three ways

Function evaluations to reach f < 10⁻⁸ (start (−1.2, 1)): gradient descent with backtracking ~40,000+ (still wandering the valley floor at moderate tolerance); BFGS ≈ 200–400 evaluations; damped Newton ≈ 60–120. The banana valley flattens gradients along its floor — descent's conditioning problem in nonlinear disguise — while curvature-using methods cross it. The trajectory plot (descent's oscillations hugging the valley walls) is the single most instructive figure in the course.

#### The fit, with error bars

curve_fit recovers a = 2.00 ± 0.02, b = 0.500 ± 0.004, c = 0.100 ± 0.009 (uncertainties from the covariance; noise σ = 0.05, 50 points). The recovered values sit within one sigma of truth, and the residuals scatter structureless within ±2σ — the model's assumptions pass their audit. A refit with the wrong model (single exponential, no offset) leaves a clear curved residual pattern: the diagnostic catches the misspecification before the parameters are trusted.

### Sources of Error

- **Rate misreading:** averaging over the pre-asymptotic phase biases the measured slope; fit the rate on the straight tail and state the window.
- **Line-search absent or broken:** fixed steps diverge past the stability limit for the quadratic (2/λ_max); backtracking must actually decrease f — assert it.
- **Newton without guard:** far from the minimum the Hessian model misleads; always pair Newton with damping or trust regions, and log when the guard fires.
- **Uncertainty theatre:** quoting curve_fit sigmas without checking residual structure, parameter correlations (off-diagonal covariance), or boundary effects; the covariance is a conditional statement.
- **Stopping on step size alone:** a tiny step can mean convergence or a flat plateau; combine step size, gradient norm, and (where known) distance to truth.

## Key Ideas

- Steepest descent's rate ((κ−1)/(κ+1))² makes conditioning the speed limit; the zigzag is its geometry.
- Newton buys quadratic convergence with Hessian work and a divergence risk that damping controls.
- Log-error plots read the order: straight = linear (slope = rate), doubling-of-digits = quadratic.
- Rosenbrock teaches that curvature information, not effort, is what hard landscapes demand.
- Fitted parameters are numbers with uncertainties from the covariance — and residuals are the assumptions' audit.

## Worked Examples

#### Example 1: Budgeting iterations

Target error reduction 10⁻⁶ at κ = 10⁴: per-step factor ((κ−1)/(κ+1))² ≈ 0.9996, ln ≈ −4 × 10⁻⁴ → ~34,500 iterations. Newton: a handful. The arithmetic alone decides the method before any code runs — for κ ≥ 10³, plain descent is a budget item, not a plan.

#### Example 2: Quadratic convergence, digit by digit

Damped Newton on Rosenbrock near the minimum: ||x_k − x*|| runs 3 × 10⁻² → 4 × 10⁻⁴ → 2 × 10⁻⁷ → 6 × 10⁻¹⁴ — roughly two new digits per step after squaring effects settle. The log-log signature (slope 2 on error-vs-step) confirms the order; that is what "quadratic" must mean in the report.

#### Example 3: A covariance that matters

The decay fit's covariance shows corr(a, c) ≈ −0.8: amplitude and offset trade off against each other. Reporting a and c with only their marginal errors would overstate independent knowledge; the honest statement includes the correlation, and adding two more late-time points (where the exponential has died) cuts it to −0.3 — experiment design guided by the covariance.

## Common Misconceptions

- **"Gradient descent converges because it always decreases."** Decrease is not convergence: the steps can shrink toward a plateau or zigzag forever at meaningful progress rates; the rate law is what guarantees arrival.
- **"Newton is always faster."** Per step, yes; per unit work the Hessian costs matter, and without damping it may not converge at all.
- **"More iterations fix bad conditioning."** They do, at ((κ−1)/(κ+1))² per step — eventually longer than any budget; preconditioning or curvature methods change the problem instead.
- **"A good fit means a correct model."** Parameters can be precise and wrong; the residual audit, not χ² alone, tests the model.
- **"Error bars are output formatting."** They are the statement of what the data can support; a number without them is a number without a claim.

## Connections

- **Lesson 1:** conditioning again — now governing iteration count through ((κ−1)/(κ+1))², the optimisation twin of the √κ law for CG.
- **Lesson 2:** CG itself is an optimisation method on a quadratic; the two lessons are one theory.
- **Python II Lesson 6:** the capstone's convergence tables and error budgets; here they acquire optimisation-specific content.
- **Physics:** every calibration curve, every potential-energy minimum, every variational estimate is this lesson with units.

## Quick Check

1. State the steepest-descent rate law for a quadratic and explain the zigzag geometrically.
2. Why does Newton converge in one step on a quadratic, and what does "quadratic convergence" mean measurably?
3. How do you read a convergence order from a log-error plot?
4. What does backtracking line search guarantee, and what condition does it test?
5. What accompanies every fitted parameter, and what audits the covariance's assumptions?

## Takeaway

Optimisation algorithms are contracts written in convergence rates: descent promises linear progress throttled by κ, Newton promises digit-doubling in exchange for curvature and caution, and least squares promises parameters only as good as the model their residuals endorse. Measure the rate, plot the path, audit the residuals — and every "best" you report is a claim you can defend.
