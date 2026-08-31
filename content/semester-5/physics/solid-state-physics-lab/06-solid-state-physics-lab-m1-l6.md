***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-5
semesterName: Semester 5
subjectId: physics
subjectName: Physics
courseId: solid-state-physics-lab
courseName: Solid State Physics Lab
moduleId: solid-state-physics-lab-module-1
moduleName: Crystal Structure, Conductivity, and Semiconductors
lessonId: solid-state-physics-lab-m1-l6
lessonName: Data Analysis, Report Writing, and the Viva
lessonNumber: 6
moduleNumber: 1
semesterNumber: 5
difficulty: advanced
estimatedStudyMinutes: 55
releaseOrder: 6
prerequisites:
  - solid-state-physics-lab-m1-l5
learningObjectives:
  - Apply statistical methods (least-squares fitting, error propagation, hypothesis testing) to the analysis of solid-state physics data.
  - Use the Levenberg-Marquardt algorithm for non-linear least-squares fitting (e.g. Curie-Weiss law).
  - Write a complete lab report for a solid-state physics experiment using the canonical structure.
  - Anticipate and answer viva-style questions about the five solid-state physics experiments.
concepts:
  - Least-squares fitting
  - Levenberg-Marquardt algorithm
  - Error propagation
  - Hypothesis testing
  - Goodness of fit
  - Lab report structure
  - Viva preparation
tags:
  - physics
  - laboratory
  - solid-state
  - data-analysis
  - report-writing
  - viva
sourceType: authored-courseware
assessmentHints:
  - The reduced chi-squared (χ² / ndf) is a measure of the goodness of fit; values close to 1 indicate a good fit.
  - The Levenberg-Marquardt algorithm is the standard for non-linear least-squares fitting; it is implemented in scipy.optimize.curve_fit.
  - Viva questions test the student's understanding of the underlying physics, not just the formulas.
status: in-review
***

# Data Analysis, Report Writing, and the Viva

## Overview

The five solid-state physics experiments you have done — X-ray diffraction, four-probe resistivity, Hall effect, magnetic susceptibility, and specific heat — produce data sets that must be analysed with statistical methods. A linear fit (e.g. Bragg's law, Matthiessen's rule, Curie-Weiss law) is straightforward; a non-linear fit (e.g. Curie law, Debye model) requires more sophisticated algorithms. The Levenberg-Marquardt algorithm is the standard for non-linear least-squares fitting; it is implemented in scipy.optimize.curve_fit and in many other libraries.

This lesson covers the principles of least-squares fitting, the Levenberg-Marquardt algorithm, the propagation of uncertainties through derived quantities, the assessment of the goodness of fit, a worked example of a complete lab report, and the viva questions an examiner is likely to ask.

## Learning Path

1. **Set up the data** — load the experimental data (e.g. the X-ray diffraction pattern, the Hall voltage vs field, the magnetisation vs temperature).
2. **Apply the model** — identify the appropriate model (linear, Curie law, Curie-Weiss law, Debye model).
3. **Fit the model** — use scipy.optimize.curve_fit (Levenberg-Marquardt) for non-linear fits; use numpy.polyfit for linear fits.
4. **Assess the goodness of fit** — compute the reduced chi-squared (χ² / ndf) and the residuals.
5. **Extract the parameters** with their uncertainties from the fit.
6. **Write a complete report** — for one of the solid-state physics experiments (e.g. the Hall effect), produce a full lab report.
7. **Viva rehearsal** — work through the viva questions with a partner.

## Core Explanation

### Least-Squares Fitting

Given a set of N data points (x_i, y_i) with uncertainties σ_i, and a model y = f(x; θ_1, θ_2, ..., θ_p), the best-fit parameters θ_j are those that minimise the chi-squared:

χ² = Σ_{i=1}^N (y_i − f(x_i; θ))² / σ_i².

The minimum is found by setting the derivatives ∂χ² / ∂θ_j = 0. For linear models (e.g. y = a x + b), the solution is the linear least-squares problem; for non-linear models, an iterative algorithm is needed.

The Levenberg-Marquardt algorithm is the standard for non-linear least-squares fitting. It combines the gradient descent (good far from the minimum) and the Gauss-Newton method (good near the minimum) to find the minimum efficiently. The algorithm is implemented in scipy.optimize.curve_fit.

### Uncertainty on the Parameters

The covariance matrix of the best-fit parameters is

C = (J^T W J)^{-1},

where J is the Jacobian matrix (∂f / ∂θ_j) and W is the weight matrix (W_{ij} = δ_{ij} / σ_i²). The diagonal elements of C are the variances of the parameters: σ_{θ_j}² = C_{jj}.

For a well-determined parameter, σ_{θ_j} is small. For an ill-determined parameter, σ_{θ_j} is large (or the parameter is correlated with other parameters).

### Goodness of Fit

The reduced chi-squared is

χ²_{red} = χ² / (N − p),

where N is the number of data points and p is the number of parameters. A value of χ²_{red} ≈ 1 indicates a good fit. A value significantly greater than 1 indicates that the model does not describe the data well, or the uncertainties are underestimated. A value significantly less than 1 indicates that the uncertainties are overestimated, or the model is over-fitting.

The p-value is the probability of obtaining a chi-squared at least as large as the observed value, assuming the model is correct. A small p-value (e.g. < 0.05) suggests that the model is not correct.

### Residuals

The residuals are r_i = y_i − f(x_i; θ). A plot of the residuals vs x (or vs the predicted y) should show no systematic pattern if the model is correct. A pattern (e.g. a trend, a curvature) indicates that the model is incomplete.

### Error Propagation

For a derived quantity z = f(θ_1, ..., θ_p), the uncertainty is

σ_z² = Σ_j (∂f / ∂θ_j)² σ_{θ_j}² + 2 Σ_{j<k} (∂f / ∂θ_j)(∂f / ∂θ_k) C_{jk},

where C_{jk} is the covariance of θ_j and θ_k. For uncorrelated parameters, the second term vanishes.

For simple cases, the formula reduces to the standard error propagation:

σ_z² = Σ_j (∂f / ∂θ_j)² σ_{θ_j}².

### Worked Example: Hall Effect Fit

For the Hall effect data, the model is

V_H = R_H · I · B / t.

For a series of measurements of V_H at different B (with I and t fixed), the fit is linear:

V_H = (R_H · I / t) · B.

The slope m = R_H I / t. The Hall coefficient is

R_H = m · t / I.

The uncertainty is

σ_{R_H} / R_H = √((σ_m / m)² + (σ_t / t)² + (σ_I / I)²).

For σ_m / m = 1 % (from the fit), σ_t / t = 1 % (from the micrometer), σ_I / I = 0.5 % (from the current source), σ_{R_H} / R_H = √(1 + 1 + 0.25) % = 1.5 %.

The carrier density is

n = 1 / (|R_H| · e).

The uncertainty is

σ_n / n = σ_{R_H} / R_H = 1.5 %.

### Worked Example: Curie-Weiss Fit

For a ferromagnetic sample above T_C, the model is

χ = C / (T − θ).

This is a non-linear fit. The parameters are C and θ. The fit is done with scipy.optimize.curve_fit.

```python
from scipy.optimize import curve_fit
import numpy as np

def curie_weiss(T, C, theta):
    return C / (T - theta)

T = np.array([400, 450, 500, 550, 600, 620, 650])
chi = np.array([0.005, 0.008, 0.015, 0.030, 0.080, 0.200, 1.0])
sigma_chi = np.array([0.0001, 0.0002, 0.0003, 0.001, 0.003, 0.01, 0.05])

popt, pcov = curve_fit(curie_weiss, T, chi, sigma=sigma_chi, p0=[1.0, 600])
C_fit, theta_fit = popt
sigma_C, sigma_theta = np.sqrt(np.diag(pcov))

print(f"C = {C_fit:.3f} ± {sigma_C:.3f}")
print(f"theta = {theta_fit:.1f} ± {sigma_theta:.1f} K")
```

The fit returns C and θ with their uncertainties. The goodness of fit is assessed by the reduced chi-squared.

### Worked Example: Lab Report for the Hall Effect

**Title:** Measurement of the carrier density and mobility in an n-type silicon sample using the Hall effect.

**Abstract:** An n-type silicon Hall bar (t = 0.5 mm) was measured at room temperature in a magnetic field up to 0.5 T and a current of 1 mA. The Hall voltage was linear in B with slope (2.0 ± 0.05) × 10⁻³ V/T, giving a Hall coefficient R_H = (1.0 ± 0.05) × 10⁻³ m³/C. The carrier density is n = (6.25 ± 0.31) × 10²¹ m⁻³, corresponding to a doping level of ~ 0.13 ppm. The resistivity (from a four-probe measurement) is ρ = (0.010 ± 0.0005) Ω·m, giving a mobility μ = (0.10 ± 0.005) m²/(V·s) = 1000 cm²/(V·s).

**Theory:** [Lorentz force on a moving charge: F = q v × B. Hall field: E_y = v B. Hall voltage: V_H = R_H I B / t. Hall coefficient: R_H = 1 / (n q). Mobility: μ = σ / (n q) = R_H / ρ.]

**Apparatus:** Hall bar sample (n-type silicon, t = 0.5 mm, contacts: Ti/Au); electromagnet (field up to 0.8 T, with a Hall probe for field measurement); constant current source (0–10 mA); nanovoltmeter (10 nV resolution); Hall effect switch box (for reversing current and field).

**Procedure:** [As in the lab manual. The current was set to 1 mA. The field was swept from − 0.5 T to + 0.5 T in 0.05 T steps. The Hall voltage was measured with the current and field in four combinations to eliminate offsets. The average of the four measurements is the true Hall voltage.]

**Data:** [Table of B and V_H for the four combinations. The averaged V_H vs B is the primary data.]

**Analysis:** [Linear fit of V_H (y) against B (x). The slope is (2.0 ± 0.05) × 10⁻³ V/T. R_H = slope · t / I = 2.0 × 10⁻³ · 5 × 10⁻⁴ / 10⁻³ = 1.0 × 10⁻³ m³/C. n = 1 / (R_H e) = 1 / (1.0 × 10⁻³ · 1.6 × 10⁻¹⁹) = 6.25 × 10²¹ m⁻³.]

**Discussion:** The measured carrier density (6.25 × 10²¹ m⁻³) corresponds to a phosphorus doping level of ~ 0.13 ppm in silicon. The mobility (1000 cm²/(V·s)) is consistent with the literature value for n-type silicon of this doping level (~ 1350 cm²/(V·s) for pure silicon, decreasing with doping). The dominant uncertainty is the slope of the V_H vs B fit, which is determined by the spread of the data and the calibration of the field probe.

**Conclusion:** The Hall effect was used to measure the carrier density and the mobility of an n-type silicon sample. The results are consistent with the expected values for a lightly-doped n-type semiconductor.

**References:** [Lab manual; any textbook chapters on the Hall effect; any external sources.]

## Key Ideas

- Least-squares fitting: minimise χ² = Σ (y_i − f(x_i))² / σ_i².
- Levenberg-Marquardt algorithm: standard for non-linear least-squares fitting.
- Uncertainty on parameters: from the covariance matrix of the fit.
- Goodness of fit: reduced chi-squared, p-value, residuals.
- Error propagation: standard formula for derived quantities.
- Lab report: title, abstract, theory, apparatus, procedure, data, analysis, discussion, conclusion, references.

## Common Misconceptions

- **"A good fit means the model is correct."** A good fit means the model is consistent with the data. A wrong model can sometimes fit the data within the uncertainties. The reduced chi-squared and the residuals are more sensitive tests.
- **"The Levenberg-Marquardt algorithm always converges."** It converges for most reasonable initial guesses, but it can get stuck in local minima for highly non-linear models. Try several initial guesses; verify with a different method.
- **"The uncertainties from the fit are the only uncertainties."** There are also systematic uncertainties (calibration, alignment, sample geometry) that are not captured by the fit. The total uncertainty is the quadrature sum of the fit uncertainty and the systematic uncertainty.
- **"The reduced chi-squared should be 1 for a perfect fit."** It should be close to 1, but the exact value depends on the data. A value of 1.5 may still be acceptable; a value of 5 indicates a problem.
- **"The p-value is the probability that the model is correct."** The p-value is the probability of obtaining a chi-squared at least as large as the observed value, assuming the model is correct. A small p-value suggests the model is not correct; a large p-value is consistent with the model but does not prove it.

## Connections

- **Solid State Physics (Sem 5 theory).** The data analysis methods are the same as those used in any quantitative science. The statistical methods (least-squares, error propagation, goodness of fit) are the tools that turn raw data into physical parameters.
- **Statistics.** The chi-squared test, the Levenberg-Marquardt algorithm, and the error propagation formulas are standard tools in statistics. The same methods are used in regression, hypothesis testing, and Bayesian inference.
- **Computational physics.** The numerical implementation of the fitting algorithms is in scipy.optimize.curve_fit and in many other libraries. The same algorithms are used in machine learning (gradient descent, stochastic gradient descent).
- **Data science.** The principles of data analysis (exploration, cleaning, fitting, validation) are the same across disciplines. The specific tools (Python, R, MATLAB) differ, but the principles are universal.
- **Metrology.** The accurate determination of physical parameters (e.g. the lattice constant of silicon, the Rydberg constant, the gravitational constant) requires the same statistical methods. The differences are in the apparatus, not the analysis.

## Quick Check

1. What is the chi-squared? How is it minimised?
2. What is the Levenberg-Marquardt algorithm? When is it used?
3. What is the reduced chi-squared? What does a value of 1.5 indicate?
4. What is a residual? What does a pattern in the residuals indicate?
5. How is the uncertainty on a fit parameter computed?
6. How is the uncertainty on a derived quantity computed?
7. A linear fit returns slope = 2.0 ± 0.05 and intercept = 0.1 ± 0.02. What is the predicted y at x = 1.5, with uncertainty?
8. A student fits a model with reduced chi-squared = 5. What does this mean?

## Takeaway

Data analysis is the lab's introduction to quantitative science. The least-squares method, the Levenberg-Marquardt algorithm, the goodness of fit, and the error propagation are the central concepts. The lab's discipline — careful data collection, proper application of the model, correct assessment of the goodness of fit, honest reporting of the uncertainties — is the same discipline that runs through every quantitative experiment in physics, chemistry, and engineering. The lab report is the formal record; the viva is the test of understanding. The same statistical methods are used in every modern physics experiment, from the measurement of the Higgs boson to the determination of the gravitational constant. The tools are universal; the data are specific to the experiment.
