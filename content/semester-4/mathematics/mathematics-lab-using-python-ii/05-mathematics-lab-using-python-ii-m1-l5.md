***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-4
semesterName: Semester 4
subjectId: mathematics
subjectName: Mathematics
courseId: mathematics-lab-using-python-ii
courseName: Mathematics Lab using Python II
moduleId: mathematics-lab-using-python-ii-module-1
moduleName: Scientific Computing in Python — Linear Algebra, ODEs and Integration
lessonId: mathematics-lab-using-python-ii-m1-l5
lessonName: Numerical Integration — Orders, Extrapolation and Improper Integrals
lessonNumber: 5
moduleNumber: 1
semesterNumber: 4
difficulty: intermediate
estimatedStudyMinutes: 50
releaseOrder: 5
prerequisites:
  - mathematics-lab-using-python-ii-m1-l4
learningObjectives:
  - Implement the composite trapezoidal and Simpson rules and measure their orders (2 and 4) by interval halving against known integrals.
  - Use Gauss–Legendre quadrature and demonstrate its exactness for polynomials up to degree 2n − 1 and its rapid convergence for analytic integrands.
  - Handle improper integrals honestly: truncation with a tail bound, and a change of variables where truncation fails.
concepts:
  - Composite quadrature
  - Order of accuracy
  - Simpson's rule
  - Gauss–Legendre quadrature
  - Polynomial exactness
  - Improper integrals
tags:
  - mathematics
  - laboratory
  - python
  - numerical-integration
  - numerical-methods
sourceType: authored-courseware
assessmentHints:
  - Halve h: trapezoidal error drops by 4×, Simpson by 16× — measure it, don't assume it.
  - n-point Gauss–Legendre is exact for polynomials of degree ≤ 2n − 1; verify with x^{2n−1} before trusting it on real integrands.
  - For ∫_0^∞, truncate at R with a proven tail bound (e.g. e^{−R²}/(2R) for the Gaussian) or substitute x = t/(1 − t).
status: in-review
***

# Numerical Integration — Orders, Extrapolation and Improper Integrals

## Overview

Every area under a curve in this programme — probabilities, energies, cross-sections — eventually becomes a quadrature sum, and the question is always the same: how many digits does this sum deserve? The answer comes from the method's order, measured against integrals you can do by hand. This lesson builds the composite trapezoidal and Simpson rules, measures their 2nd- and 4th-order convergence by interval halving, and then introduces Gauss–Legendre quadrature — which is not about small h at all, but about placing evaluation points where polynomials of astonishing degree integrate exactly. The final frontier is the improper integral, where the numerical question ("how far do I integrate?") must be answered analytically (with a tail bound) before any summing begins.

## Learning Path

1. **Implement composite trapezoidal and Simpson rules** with clean vectorised weights.
2. **Measure orders:** halve the panel width repeatedly on integrals with known values; extract p from the error ratios.
3. **Gauss–Legendre:** verify polynomial exactness up to degree 2n − 1, then converge the Gaussian integral with n = 2, 3, 5, 8.
4. **Compare cost honestly:** error vs function evaluations across the three families.
5. **Improper integrals:** truncate the Gaussian tail with a bound; alternatively map [0, ∞) → [0, 1).
6. **Pathology check:** an integrand with a sharp feature (narrow peak) that defeats naive fixed-order rules.

## Core Explanation

### Theory: Composite rules and their orders

The composite trapezoidal rule on N panels of width h: ∫ ≈ (h/2)[f_0 + 2Σf_j + f_N]; error −(b−a)h²f''(ξ)/12 — second order. Composite Simpson (N even): panels grouped in pairs with the 1-4-2-4-...-1 weights; error −(b−a)h⁴f⁗(ξ)/180 — fourth order, and exact for cubics despite using only parabolas (one extra digit of exactness from symmetry). Order is verified empirically: halving h must divide the error by 2^p, for the p you claim, on an integral whose exact value is known independently.

### Theory: Gaussian quadrature

The n-point Gauss–Legendre rule chooses both nodes (roots of the Legendre polynomial P_n) and weights to be exact for polynomials up to degree 2n − 1 — twice the degree a fixed-node rule of n points can achieve. For analytic integrands the convergence is geometric in n rather than algebraic in h: a handful of points routinely reaches machine precision. The price: the nodes are not nested (refinement means recomputation), and endpoint singularities are outside its remit.

### Theory: Improper integrals

∫₀^∞ f must be split into "integrate numerically to R" plus "bound the tail analytically". For the Gaussian, ∫_R^∞ e^{−x²} dx ≤ e^{−R²}/(2R) — at R = 4 the tail is ≤ 1.4 × 10⁻⁸, smaller than the in-interval quadrature error, so truncation is honest. Where tails decay slowly or features hide at infinity, substitute (x = t/(1 − t) maps [0, ∞) to [0, 1)) and let the transformed integrand be integrated on a finite interval.

### Numerical Setup (Apparatus)

- Python: numpy, scipy.special (roots/weights via scipy.special.roots_legendre), matplotlib.
- Test integrals with known values: I_1 = ∫₀¹ e^{−x²} dx = (√π/2) erf(1) = 0.74682413; I_2 = ∫₀¹ dx/(1 + x²) = π/4 = 0.78539816.
- Panel counts N = 10, 20, 40, 80, 160 for the composite rules; n = 2–10 for Gauss.
- Polynomial exactness checks on x^m, m = 0...11, on [−1, 1].
- Record all parameters alongside outputs (reproducibility).

### Procedure

1. **Implement the two composite rules;** verify weights sum to (b − a) (constant-integration test).
2. **Order measurement:** compute |I_num − I_1| at the five N values for each rule; plot log error vs log h; fit the slope.
3. **Gauss exactness:** for each n, integrate x^m (m = 0...2n) with roots_legendre nodes; record the highest exact degree.
4. **Gauss convergence:** n = 2, 3, 5, 8 on I_1; tabulate errors.
5. **Cost comparison:** plot error vs number of function evaluations for all three families.
6. **Improper:** ∫₀^∞ e^{−x²} dx by truncation at R = 4 (with the tail bound stated) and by the substitution x = t/(1 − t); compare with √π/2 = 0.88622693.
7. **Pathology:** a narrow Lorentzian peak, f(x) = (ε/π)/(x² + ε²) with ε = 0.01 on [−1, 1] (integral 2·arctan(1/ε)/π ≈ 0.99367): test each rule's N needed for 4 digits.

### Analysis

#### Orders measured

Trapezoidal on I_1: errors 6.13 × 10⁻⁴ (N = 10), 1.53 × 10⁻⁴ (N = 20), 3.83 × 10⁻⁵ (N = 40) — ratios 4.01, 3.99; the N = 10 value matches the Euler–Maclaurin estimate (h²/12)|f'(1) − f'(0)| = 6.13 × 10⁻⁴, connecting the measured order to theory's constant, not just its slope. Simpson: 8.2 × 10⁻⁷ (N = 10), 5.1 × 10⁻⁸ (N = 20) — ratio 16.1, order 4.0. Cubic-exactness spot check: Simpson integrates x³ on [0, 2] to 4.000000 exactly while the trapezoidal rule errs at the percent level.

#### Gaussian quadrature

Exactness holds through degree 2n − 1 for every n tested: the 5-point rule integrates x⁹ to machine precision and first fails on x¹⁰, exactly as theory says. On I_1: n = 2 gives 0.74658 (error 2.4 × 10⁻⁴), n = 3 ≈ 2 × 10⁻⁶, n = 5 ≈ 10⁻⁹, n = 8 at machine precision — geometric convergence from five to eight evaluations, where Simpson needs ~50 panels for 10⁻⁹. The cost plot makes the point visually: Gauss's error curve dives vertically against the shallow algebraic slopes.

#### Improper integrals

Truncation at R = 4 plus Simpson on [0, 4] returns 0.88622693 − 0.88622694 — inside the stated tail bound 1.4 × 10⁻⁸; the report says "tail ≤ 1.4 × 10⁻⁸ by bound", making the honesty auditable. The substitution route maps the infinite interval to [0, 1) and gets the same digits with Gauss n = 12 — slower here because the transformed integrand has flat-but-infinite derivatives at t = 1; for this integrand, truncation with a bound is the better tool.

#### The narrow peak

The ε = 0.01 Lorentzian (integral 2 arctan(100)/π = 0.9936339): uniform trapezoidal needs N ≈ 4000 for four digits (panel width must resolve ε), Simpson ≈ 1000, but a Gauss rule on each half-interval split at the peak — or a substitution x = ε tan θ — reaches eight digits with tens of points. Adaptivity or transformation beats brute force when the integrand has a scale; detecting that scale is the analyst's job.

### Sources of Error

- **Quoting digits from one N:** a single error value cannot establish an order; the halving sequence (three points minimum) is the claim's evidence.
- **Roundoff floor in halving sequences:** past N ~ 10⁴ the sums stop improving; the flat tail of the error curve is floating point, not a method plateau.
- **Gauss on non-smooth integrands:** its geometric convergence assumes analyticity; kinks and endpoint singularities degrade it toward algebraic rates silently.
- **Unbounded tails treated numerically:** no finite R computes ∞; truncation is only honest with a bound, and a slowly-decaying tail (1/x² and worse) may need the substitution route.
- **Scale-blindness:** rules assume the integrand varies on the panel scale; a feature narrower than h is invisible and must be found before it is integrated.

## Key Ideas

- Orders are measured by halving: 4× per halving for trapezoidal, 16× for Simpson; theory supplies the constants too.
- Simpson's extra exactness (cubics) comes from symmetry — a general phenomenon worth one spot check.
- n-point Gauss–Legendre is exact through degree 2n − 1 and converges geometrically for analytic integrands; polynomial exactness is its pre-flight check.
- Error vs function evaluations is the honest cost axis; Gauss typically wins by orders of magnitude on smooth bounded problems.
- Improper integrals: analytic tail bounds or variable substitution — never an unannotated finite R.

## Worked Examples

#### Example 1: Predicting Simpson's error

For I_1 with N = 10 (h = 0.1): the Euler–Maclaurin leading term (h⁴/180)|f'''(1) − f'''(0)| with f'''(1) = −4/e ≈ −1.4715 gives 8.2 × 10⁻⁷ — and Simpson's measured error is 8.2 × 10⁻⁷. Predicting the constant, not just the slope, is the difference between fitting and understanding.

#### Example 2: The Gaussian tail budget

R = 4: tail ≤ e^{−16}/8 = 1.4 × 10⁻⁸. Running Simpson on [0, 4] at h = 0.01 contributes ~10⁻⁹. Total error budget 1.5 × 10⁻⁸, dominated by the *analytic* truncation, not the numerics — the budget says which knob to turn for more digits (larger R, not smaller h).

#### Example 3: Degree of exactness in practice

5-point rule on [−1, 1]: ∫x⁸ dx returns 2/9 to machine precision (degree 8 ≤ 2n − 1 = 9, so exactness is mandatory), ∫x⁹ is zero on both sides, and ∫x¹⁰ returns 0.178885 against the true 2/11 = 0.181818 — an error of 2.9 × 10⁻³, the first clear failure, right at degree 2n. Running the sweep prints the boundary crisply; quote what the sweep shows.

## Common Misconceptions

- **"Simpson just fits parabolas, so it can't beat the trapezoid by much."** Two orders of h plus cubic exactness routinely mean 100× fewer evaluations for the same digits.
- **"More points always help Gauss."** Past the analytic-convergence knee it buys nothing but roundoff; the knee is found by the n-sweep, not assumed.
- **"Integrating to a large number approximates infinity."** Only with a bound; 'large' is a property of the tail's decay rate, which is analytic information.
- **"Adaptive quadrature removes the need to understand the integrand."** It finds features automatically but still trusts your tolerance settings; knowing the scales lets you audit its work.
- **"The order on smooth test functions is the order everywhere."** Orders assume differentiability; a kink silently cuts every rule's convergence rate.

## Connections

- **Calculus using Python (Sem 2):** the Riemann-sum intuition becomes measured orders and sharp error constants.
- **Numerical Methods theory:** Newton–Cotes vs Gaussian families, error functionals, and the role of symmetry.
- **Lesson 4:** the same h-refinement discipline; the same roundoff floor; the same "measure the order, then trust it" workflow.
- **Physics:** every normalisation, expectation value, and luminosity integral in the physics courses is one of these sums with physical units attached.

## Quick Check

1. State the composite Simpson weights pattern and its order of accuracy.
2. How do you verify a quadrature rule's order empirically?
3. What degree of polynomial exactness does the n-point Gauss–Legendre rule guarantee?
4. How do you make truncation of ∫₀^∞ honest, and what decides whether R is large enough?
5. Why does a narrow peak defeat uniform-panel rules, and what are the two remedies?

## Takeaway

Quadrature is a trade between smoothness and sampling, priced in function evaluations and audited in orders: the trapezoid's honest 2, Simpson's symmetric 4, Gauss's geometric plunge for the analytic few. Measure the order, predict the constant where you can, bound every tail, and every integral you report carries its own proof of digits.
