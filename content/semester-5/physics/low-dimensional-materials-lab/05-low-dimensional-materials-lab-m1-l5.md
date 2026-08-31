***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-5
semesterName: Semester 5
subjectId: physics
subjectName: Physics
courseId: low-dimensional-materials-lab
courseName: Low-Dimensional Materials Lab (Option C)
moduleId: low-dimensional-materials-lab-module-1
moduleName: Thin Films, Nanomaterials, and Characterisation
lessonId: low-dimensional-materials-lab-m1-l5
lessonName: Data Fitting and Uncertainty in Nanomaterial Data
lessonNumber: 5
moduleNumber: 1
semesterNumber: 5
difficulty: advanced
estimatedStudyMinutes: 50
releaseOrder: 5
prerequisites:
  - low-dimensional-materials-lab-m1-l4
learningObjectives:
  - Fit the Tauc plot to extract the optical band gap and its uncertainty; assess the goodness of fit.
  - Fit the ellipsometric model to extract the thickness and the optical constants; assess the goodness of fit.
  - Propagate uncertainties through a derived quantity (e.g. the field-effect mobility) and assess the confidence interval.
concepts:
  - Tauc plot fitting
  - Ellipsometric model fitting
  - Confidence interval
  - Error propagation
  - Reduced chi-squared
  - Goodness of fit
  - p-value
  - Bootstrap
tags:
  - physics
  - laboratory
  - thin-film
  - data-fitting
  - uncertainty
  - statistics
sourceType: authored-courseware
assessmentHints:
  - Tauc plot: linear fit in the absorption edge; extrapolation to α = 0 gives E_g.
  - Ellipsometric model: non-linear fit; the uncertainty is returned by the fit.
  - Error propagation: σ_z = sqrt((∂f/∂x)^2 σ_x^2 + (∂f/∂y)^2 σ_y^2 + ...) for independent inputs.
status: in-review
***

# Data Fitting and Uncertainty in Nanomaterial Data

## Overview

The data from nanomaterial characterisation (UV-Vis, ellipsometry, Raman, AFM, SEM) must be analysed with statistical methods to extract the physical parameters and their uncertainties. The Tauc plot is a linear fit; the ellipsometric model is a non-linear fit; the field-effect mobility is a derived quantity with propagated uncertainties. This lesson covers the principles of data fitting, the assessment of the goodness of fit, and the propagation of uncertainties through derived quantities.

The lab's discipline is the same as in any quantitative science: careful data collection, proper application of the model, honest estimation of the uncertainties, and clear reporting of the results.

## Core Explanation

### Theory: Linear Fit (Tauc Plot)

The Tauc plot is a linear fit of (α h ν)^n vs h ν. The slope and the intercept are determined by the least-squares method. The extrapolation to (α h ν)^n = 0 gives the optical band gap E_g.

For a direct band gap (n = 2), the fit is

(α h ν)² = a · (h ν − E_g),

where a is a constant. The fit returns a and E_g with their uncertainties.

The goodness of fit is assessed by the reduced chi-squared:

χ²_red = (1 / (N − 2)) · Σ (y_i − y_fit)² / σ_i²,

where N is the number of data points and σ_i is the uncertainty in y_i. A value of χ²_red ≈ 1 indicates a good fit.

### Theory: Non-Linear Fit (Ellipsometric Model)

The ellipsometric model is a non-linear fit of the measured (Ψ, Δ) to the model predictions. The model parameters are the thickness and the optical constants (n, k) at each wavelength. The fit is performed by minimising the mean square error (MSE) between the measured and the predicted (Ψ, Δ).

The Levenberg-Marquardt algorithm is the standard for non-linear least-squares fitting. It returns the parameters and their uncertainties (from the covariance matrix of the fit).

The goodness of fit is assessed by the reduced chi-squared:

χ²_red = (1 / (N − p)) · Σ ((Ψ_i − Ψ_fit)² / σ_Ψ² + (Δ_i − Δ_fit)² / σ_Δ²),

where N is the number of wavelengths and p is the number of parameters. A value of χ²_red ≈ 1 indicates a good fit.

### Theory: Error Propagation

For a derived quantity z = f(x_1, x_2, ..., x_N), the uncertainty is

σ_z² = Σ_i (∂f/∂x_i)² σ_i²,

where the sum is over the N independent inputs.

For a product z = x · y, σ_z / z = √((σ_x / x)² + (σ_y / y)²).
For a sum z = x + y, σ_z = √(σ_x² + σ_y²).
For a power z = x^n, σ_z / z = |n| · σ_x / x.

For the field-effect mobility μ_FE = (L / (W · C_ox · V_DS)) · dI_D / dV_GS, the uncertainty is

σ_μ / μ = √((σ_L / L)² + (σ_W / W)² + (σ_Cox / C_ox)² + (σ_VDS / V_DS)² + (σ_slope / slope)²),

where σ_slope is the uncertainty in dI_D / dV_GS from the fit.

### Theory: Confidence Interval

The 95 % confidence interval for a parameter θ is θ ± 1.96 σ_θ, where σ_θ is the standard uncertainty. The 68 % confidence interval (1σ) is θ ± σ_θ. The 99.7 % confidence interval (3σ) is θ ± 3 σ_θ.

For a non-Gaussian distribution, the confidence interval can be computed by the bootstrap method: resample the data with replacement; fit the model; record the parameters. The 95 % confidence interval is the 2.5 % and 97.5 % percentiles of the bootstrap distribution.

### Theory: Goodness of Fit

The goodness of fit is assessed by:
- **Reduced chi-squared (χ²_red)**: should be close to 1. A value significantly greater than 1 indicates a poor fit (or underestimated uncertainties). A value significantly less than 1 indicates over-fitting (or overestimated uncertainties).
- **p-value**: the probability of obtaining a chi-squared at least as large as the observed value, assuming the model is correct. A small p-value (< 0.05) suggests the model is not correct.
- **Residuals**: the difference between the data and the model. A plot of the residuals vs the independent variable should show no systematic pattern.

### Apparatus

- Computer with Python and SciPy.
- Data from previous lessons (UV-Vis spectrum, ellipsometric parameters, FET transfer characteristic).
- Data visualisation software (Matplotlib, Origin, etc.).

### Procedure

1. **Load the UV-Vis data.** Compute α from the transmittance: α = − (1 / t) · ln(T). Compute (α h ν)² (for a direct band gap) or (α h ν)^(1/2) (for an indirect band gap). Plot vs h ν.
2. **Fit the Tauc plot.** Use scipy.optimize.curve_fit to fit the linear model. Extract the slope, the intercept, and the band gap with their uncertainties. Compute the reduced chi-squared.
3. **Load the ellipsometric data.** Fit the model (e.g. Cauchy) to the data. Extract the thickness and the optical constants with their uncertainties. Compute the reduced chi-squared.
4. **Load the FET data.** Fit the linear model to the transfer characteristic in the linear regime. Extract the slope with its uncertainty. Compute the field-effect mobility with its propagated uncertainty.

### Analysis

#### Tauc Plot for TiO₂

For a TiO₂ film (anatase, direct band gap), the Tauc plot is linear in (α h ν)² vs h ν. The fit returns E_g = 3.2 ± 0.05 eV and a slope a = 1.5 × 10⁶ (eV)⁻¹ cm⁻¹. The reduced chi-squared is 1.2, indicating a good fit.

#### Ellipsometry of SiO₂

For a SiO₂ film on Si, the Cauchy fit returns a thickness of 105 ± 1 nm and a refractive index n = 1.460 ± 0.005 at 632 nm. The reduced chi-squared is 0.9, indicating a good fit.

#### FET Field-Effect Mobility

For a MoS₂ FET with W = 10 μm, L = 5 μm, C_ox = 1.15 × 10⁻⁸ F/cm², V_DS = 0.1 V, and slope = 1.75 μA/V with σ_slope = 0.05 μA/V:

μ_FE = (L / (W · C_ox · V_DS)) · slope = (5 × 10⁻⁴ / (10⁻³ · 1.15 × 10⁻⁸ · 0.1)) · 1.75 × 10⁻⁶
     = 4.35 × 10⁸ · 1.75 × 10⁻⁶
     = 760 cm²/(V·s).

σ_μ / μ = √((σ_L / L)² + (σ_W / W)² + (σ_Cox / C_ox)² + (σ_VDS / V_DS)² + (σ_slope / slope)²)
        = √((0.01)² + (0.01)² + (0.05)² + (0.01)² + (0.05 / 1.75)²)
        = √(0.0001 + 0.0001 + 0.0025 + 0.0001 + 0.000816)
        = √0.003616
        = 0.060.

σ_μ = 0.060 · 760 = 46 cm²/(V·s).

μ_FE = 760 ± 46 cm²/(V·s).

### Sources of Error

- **Fit uncertainty.** The fit returns the uncertainty in the parameters from the covariance matrix. This is the statistical uncertainty.
- **Model uncertainty.** The model is an approximation. A wrong model gives incorrect parameters. The model uncertainty is estimated by trying different models.
- **Systematic uncertainty.** The systematic uncertainty (calibration, alignment, sample geometry) is not captured by the fit. The total uncertainty is the quadrature sum of the fit uncertainty and the systematic uncertainty.
- **Outliers.** Outliers in the data can bias the fit. Use robust fitting methods (e.g. least absolute deviation) for data with outliers.
- **Correlated data.** The error propagation formula assumes independent inputs. Correlated inputs require a more sophisticated analysis (e.g. Monte Carlo or bootstrap).

## Key Ideas

- Linear fit: Tauc plot, slope, intercept, band gap with uncertainty.
- Non-linear fit: ellipsometric model, Levenberg-Marquardt algorithm, parameters with uncertainty.
- Error propagation: σ_z² = Σ (∂f/∂x)² σ_x² for independent inputs.
- Confidence interval: 95 % CI = θ ± 1.96 σ_θ.
- Goodness of fit: reduced chi-squared, p-value, residuals.

## Worked Examples

#### Example 1: Tauc Plot Fit

A UV-Vis spectrum of a TiO₂ film (thickness 100 nm) is measured. The Tauc plot is computed and fit to a linear model. The fit returns E_g = 3.20 ± 0.05 eV and a slope a = 1.5 ± 0.1 × 10⁶ (eV)⁻¹ cm⁻¹. The reduced chi-squared is 1.2.

The 95 % confidence interval for E_g is 3.20 ± 0.10 eV.

#### Example 2: Ellipsometric Fit

An ellipsometric measurement of a SiO₂ film is fit to a Cauchy model. The fit returns a thickness of 105.2 ± 0.5 nm and a refractive index n = 1.460 ± 0.002 at 632 nm. The reduced chi-squared is 0.95.

The 95 % confidence interval for the thickness is 105.2 ± 1.0 nm.

#### Example 3: FET Mobility Propagation

A MoS₂ FET has the following parameters and uncertainties:
- W = 10 ± 0.1 μm
- L = 5 ± 0.1 μm
- C_ox = 1.15 × 10⁻⁸ ± 0.05 × 10⁻⁸ F/cm²
- V_DS = 0.10 ± 0.01 V
- dI_D / dV_GS = 1.75 ± 0.05 μA/V

μ_FE = 760 cm²/(V·s).

σ_μ / μ = √((0.1/10)² + (0.1/5)² + (0.05/1.15)² + (0.01/0.1)² + (0.05/1.75)²)
        = √(0.0001 + 0.0004 + 0.00189 + 0.01 + 0.000816)
        = √0.01321
        = 0.115.

σ_μ = 0.115 · 760 = 87 cm²/(V·s).

μ_FE = 760 ± 90 cm²/(V·s) (rounded to 1 sig fig).

## Common Misconceptions

- **"The fit uncertainty is the only uncertainty."** The total uncertainty is the quadrature sum of the fit uncertainty and the systematic uncertainty (calibration, alignment, sample geometry).
- **"The 95 % confidence interval is the same as the 1σ interval."** No. The 95 % CI is 1.96 σ (for a Gaussian distribution). The 1σ interval is 68 % CI.
- **"A low reduced chi-squared is a good fit."** A low reduced chi-squared (e.g. < 0.5) indicates over-fitting (or overestimated uncertainties). A good fit has χ²_red ≈ 1.
- **"The error propagation formula applies to all cases."** It applies to independent inputs. Correlated inputs require a more sophisticated analysis.
- **"The bootstrap gives the same result as the standard error propagation."** The bootstrap is a non-parametric method that does not assume a Gaussian distribution. The results can differ for non-Gaussian errors.

## Connections

- **Low-Dimensional Materials (Sem 5 theory).** The data fitting and uncertainty analysis are the final step in any characterisation experiment. The same methods are used in every quantitative science.
- **Statistics.** The least-squares method, the error propagation, the confidence interval, and the goodness of fit are standard tools in statistics. The same methods are used in regression, hypothesis testing, and Bayesian inference.
- **Data science.** The data fitting is at the heart of data science. The Levenberg-Marquardt algorithm, the cross-validation, and the bootstrap are standard tools.
- **Metrology.** The accurate determination of physical parameters (e.g. the lattice constant of silicon, the Rydberg constant, the gravitational constant) requires the same statistical methods. The differences are in the apparatus, not the analysis.
- **Machine learning.** The same statistical methods (least-squares, gradient descent, cross-validation) are used in machine learning. The differences are in the model (linear vs neural network) and the data size (small vs large).

## Quick Check

1. What is the reduced chi-squared? What does a value of 1.5 indicate?
2. What is the 95 % confidence interval for a parameter θ with uncertainty σ_θ?
3. For a product z = x · y, what is σ_z / z?
4. For a sum z = x + y, what is σ_z?
5. What is the Levenberg-Marquardt algorithm used for?
6. What is the Tauc plot? How is the band gap extracted?
7. What is the p-value? What does a small p-value indicate?
8. The fit returns a slope a = 2.0 ± 0.1 and an intercept b = 1.0 ± 0.2. What is the uncertainty in y = a x + b at x = 3?

## Takeaway

Data fitting and uncertainty analysis are the lab's introduction to quantitative science. The linear fit, the non-linear fit, the error propagation, the confidence interval, and the goodness of fit are the central concepts. The lab's discipline — careful data collection, proper application of the model, honest estimation of the uncertainties, clear reporting of the results — is the same discipline that runs through every quantitative experiment. The same statistical methods apply to all data, from the laboratory measurement to the industrial process. The analysis you do today is the foundation of the conclusions you draw tomorrow.
