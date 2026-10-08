***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-6
semesterName: Semester 6
subjectId: mathematics
subjectName: Mathematics
courseId: mathematical-modelling
courseName: Mathematical Modelling (Math Elective II, C)
moduleId: mathematical-modelling-module-3
moduleName: Data, Uncertainty and Communication
lessonId: mathematical-modelling-m3-l1
lessonName: Parameter Estimation, Identifiability and Validation
lessonNumber: 7
moduleNumber: 3
semesterNumber: 6
difficulty: advanced
estimatedStudyMinutes: 55
releaseOrder: 7
prerequisites:
  - mathematical-modelling-m2-l1
  - mathematical-modelling-m1-l3
  - mathematics-lab-using-python-iii-m1-l1
  - mathematics-lab-using-python-iii-m1-l4
learningObjectives:
  - Fit a model to data by least squares and by maximum likelihood, and explain when the two coincide.
  - Quantify parameter uncertainty with the Jacobian, likelihood ratios or the bootstrap.
  - Diagnose structural and practical non-identifiability, as in the early phase of an epidemic.
  - Compare candidate models with AIC and validate a chosen model on held-out data and by residual analysis.
concepts:
  - Least squares
  - Maximum likelihood
  - Confidence intervals
  - Structural and practical identifiability
  - Akaike information criterion
  - Held-out validation
  - Residual diagnostics
tags:
  - mathematics
  - mathematical-modelling
  - parameter-estimation
  - validation
sourceType: authored-courseware
status: in-review
assessmentHints:
  - derivation
  - problem-solving
  - computational
  - conceptual
***

# Parameter Estimation, Identifiability and Validation

## Overview

The models of Modules 1 and 2 contain parameters such as $k$, $r$, $\beta$ and $\gamma$ that we have so far treated as given. In practice they must be estimated from noisy measurements, and the estimate has to come with a statement of how well the data determine it. This lesson develops the standard workflow: choose an error model, fit by least squares or maximum likelihood, attach uncertainty, ask whether the parameters can be separated at all (identifiability), compare competing models with the Akaike criterion, and finally test the chosen model on data it has not seen. The cooling law of Lesson m1-l1 and the early SIR epidemic of Lesson m1-l3 supply the examples, and the same steps are carried out end to end in Lesson m3-l3.

## Learning Path

- **What you should already know**: least-squares fitting and nonlinear optimisation (mathematics-lab-using-python-iii m1-l1 and m1-l4); the cooling, SIR and exponential models (Lessons m1-l1 and m1-l3); stability of equilibria (Lesson m2-l1).
- **What this lesson adds**: the likelihood viewpoint, parameter uncertainty, identifiability, AIC, and held-out validation.
- **What later lessons this will unlock**: sensitivity analysis and Monte Carlo propagation of parameter uncertainty (Lesson m3-l2); the dengue case study (Lesson m3-l3).

## Core Explanation

### Least squares and the error model

Data are pairs $(t_i, y_i)$, $i = 1, \dots, n$, and the model predicts $m(t; \boldsymbol\theta)$. The **residuals** are $r_i(\boldsymbol\theta) = y_i - m(t_i;\boldsymbol\theta)$ and least squares minimises $\mathrm{SSE}(\boldsymbol\theta) = \sum_i r_i^2$. If $m$ is linear in the parameters, setting the gradient to zero gives the normal equations $A^TA\boldsymbol\theta = A^T\mathbf y$. Otherwise Gauss–Newton or Levenberg–Marquardt iterations are used, as in scipy's `least_squares`. Some nonlinear models can be linearised: for Newton cooling, $\ln(T - T_a) = \ln(T_0 - T_a) - kt$ is a straight line. The transformation also changes the error model, giving equal weight to relative rather than absolute errors, so it is a modelling decision and not just algebra.

### Maximum likelihood

An **error model** says how data scatter around the model. The **likelihood** $L(\boldsymbol\theta) = p(\text{data}\mid\boldsymbol\theta)$ is maximised over $\boldsymbol\theta$. If $y_i = m_i + \epsilon_i$ with independent $\epsilon_i \sim N(0, \sigma^2)$,

$$\ln L = -\frac n2\ln(2\pi\sigma^2) - \frac{\mathrm{SSE}}{2\sigma^2},$$

so maximising over $\boldsymbol\theta$ is exactly least squares, and maximising over $\sigma^2$ gives $\hat\sigma^2 = \mathrm{SSE}/n$. For counts, such as weekly cases, a Poisson model $y_i \sim \mathrm{Poisson}(\mu_i)$ is more honest: $\ln L = \sum_i (y_i\ln\mu_i - \mu_i - \ln y_i!)$, which weights errors in proportion to the mean, so large counts are not allowed to dominate. Least squares is thus maximum likelihood for a particular error model, and the choice of error model is part of the model.

### Uncertainty in the estimates

Near the optimum, with $J_{ij} = \partial m_i/\partial\theta_j$, the covariance of the Gaussian estimator is approximately

$$\mathrm{Cov}(\hat{\boldsymbol\theta}) \approx \hat\sigma^2\,(J^TJ)^{-1}, \qquad \hat\sigma^2 = \frac{\mathrm{SSE}}{n - p},$$

with $p$ parameters; the standard errors are the square roots of the diagonal. For a more general likelihood, a $95\%$ **profile-likelihood interval** contains the $\theta_j$ with $2\left(\ln L(\hat{\boldsymbol\theta}) - \ln L_{\text{profile}}(\theta_j)\right) \le 3.84$, where the profile maximises over the other parameters. A third option is the **parametric bootstrap**: simulate many data sets from the fitted model with the assumed noise, refit each, and take percentiles of the refitted parameters. It needs no asymptotics and is the method of Lesson m3-l3.

### Identifiability

A parameter is **structurally identifiable** if noise-free data of the proposed kind determine it uniquely; it is **practically identifiable** if the actual noisy data determine it tightly. Failure shows up as a nearly singular $J^TJ$, enormous standard errors, or a long flat valley in the likelihood. Two examples already appeared. Newton cooling depends only on $k = hA/(mc)$, so the constituents are not separately identifiable (Lesson m1-l1). In the early phase of an SIR epidemic, $I(t) \approx I_0e^{(\beta - \gamma)t}$, so data from the exponential phase determine the growth rate $r = \beta - \gamma$ but not $\beta$ and $\gamma$ individually, and therefore not $R_0 = \beta/\gamma$. Remedies include extra data (observations after the peak, where depletion of susceptibles depends on $R_0$), independent measurement of a parameter (the infectious period $1/\gamma$ from clinical studies), reparametrisation in terms of identifiable combinations, and honest reporting of ranges. Nondimensionalisation (Lesson m1-l2) helps by exposing which combinations matter.

### Model selection with AIC

A model with more parameters always fits at least as well, so SSE alone favours overfitting. The **Akaike information criterion** penalises complexity:

$$\mathrm{AIC} = 2p - 2\ln\hat L.$$

For Gaussian errors with $\hat\sigma^2 = \mathrm{SSE}/n$ this becomes $\mathrm{AIC} = n\ln(\mathrm{SSE}/n) + 2p + \text{const}$, where the constant is the same for all models fitted to the same data. Lower is better, and differences below about 2 are not meaningful. For small $n$ use the corrected $\mathrm{AIC}_c = \mathrm{AIC} + \dfrac{2p(p+1)}{n - p - 1}$.

### Validation

Fitting is not validation. A model validated only on the data used to fit it is tested for its flexibility, not for its predictive power. Good practice is to **hold out** data: fit on a training window and compare predictions with a test window. For time series the split must respect order, because predicting the future from the past is the real task; random splitting leaks information. Report a simple baseline too (a straight-line extrapolation, say) because a mechanistic model must beat it to be worth its parameters. Finally, examine the **residuals**: if the error model is right they look like noise with no trend, no growth in spread and no autocorrelation; a pattern says an assumption, not the optimiser, has failed, as the modelling cycle of Lesson m1-l1 predicts.

```python
import numpy as np
from scipy.optimize import least_squares

t = np.array([0, 5, 10, 15, 20.])
Texc = np.array([65, 45, 31, 21.5, 15.])         # T - T_a for a cooling cup
resid = lambda p: p[0]*np.exp(-p[1]*t) - Texc
fit = least_squares(resid, [60, 0.05])
J, dof = fit.jac, len(t) - len(fit.x)
cov = (fit.fun @ fit.fun/dof)*np.linalg.inv(J.T @ J)
print(fit.x, np.sqrt(np.diag(cov)))              # about (65.0, 0.0737) with standard errors
```

The standard errors show how sharply five points pin down $k$; refitting on the first three points only would widen them.

## Key Ideas

- **Least squares** minimises $\sum r_i^2$; it is maximum likelihood for independent Gaussian errors, with $\hat\sigma^2 = \mathrm{SSE}/n$.
- **Error model**: counts call for Poisson likelihoods; transforming data changes the implied error model.
- **Uncertainty**: $\mathrm{Cov} \approx \hat\sigma^2(J^TJ)^{-1}$, profile likelihood, or the parametric bootstrap.
- **Identifiability**: parameters are identifiable only through combinations the data constrain, such as $\beta - \gamma$ in the early epidemic.
- **AIC** $= 2p - 2\ln\hat L$ trades fit against complexity; lower is better.
- **Validation** needs held-out data, a baseline and residual checks.

## Worked Examples

### Example 1 — Fitting the cooling constant

A cup in a $25\,^\circ$C room is measured at $t = 0, 5, 10, 15, 20$ min with $T - T_a = 65, 45, 31, 21.5, 15$ K. Fit $k$ by linear regression of $\ln(T - T_a)$ on $t$ and give its standard error.

**Solution.** The logarithms are $4.1744, 3.8067, 3.4340, 3.0681, 2.7081$, with mean $3.4383$; the mean time is $10$ and $S_{tt} = 250$. The cross-sum is $S_{ty} = (-10)(0.7361) + (-5)(0.3684) + 0 + 5(-0.3702) + 10(-0.7302) = -18.356$, so the slope is $-18.356/250 = -0.07342$ and $k = 0.0734\ \text{min}^{-1}$. The intercept is $3.4383 + 0.7342 = 4.1725$, so $T_0 - T_a = e^{4.1725} = 64.8$ K. The residuals in the log are $0.0019, 0.0013, -0.0043, -0.0030, 0.0041$, with sum of squares $5.0 \times 10^{-5}$. Then $s^2 = 5.0\times 10^{-5}/3 = 1.66 \times 10^{-5}$ and $\mathrm{SE}(k) = s/\sqrt{S_{tt}} = 0.0041/15.8 = 2.6 \times 10^{-4}$. So $k = 0.0734 \pm 0.0003\ \text{min}^{-1}$ (one standard error), a $0.4\%$ uncertainty. The nonlinear fit in the script, which weights errors in absolute temperature, gives $k = 0.0737$, about one standard error away.

### Example 2 — Does the extra parameter earn its place?

Two models are fitted to $n = 20$ observations. Model A has $p = 2$ and $\mathrm{SSE} = 4.0$; model B has $p = 4$ and $\mathrm{SSE} = 3.6$. Which does AIC prefer?

**Solution.** Using $\mathrm{AIC} = n\ln(\mathrm{SSE}/n) + 2p$: for A, $20\ln 0.2 + 4 = -32.19 + 4 = -28.19$; for B, $20\ln 0.18 + 8 = -34.30 + 8 = -26.30$. Model A is lower by $1.9$, so AIC prefers the simpler model: a $10\%$ reduction in SSE does not justify two more parameters. The corrected AIC adds $2p(p+1)/(n-p-1) = 12/17 = 0.71$ for A and $40/15 = 2.67$ for B, which widens the gap to $3.9$.

### Example 3 — Two epidemics, one early curve

Early case counts grow at $r = 0.3\ \text{day}^{-1}$. Explain why $(\beta, \gamma) = (0.5, 0.2)$ and $(0.4, 0.1)$ are indistinguishable, and what the difference means for forecasting.

**Solution.** Both pairs have $\beta - \gamma = 0.3$, so $I \approx I_0e^{0.3t}$ in both cases and the early data cannot separate them. But $R_0 = 2.5$ for the first and $4$ for the second. The peak prevalence is $1 - 1/R_0 - \ln R_0/R_0 = 0.2335$ for the first and $1 - 0.25 - 0.3466 = 0.4034$ for the second, a $1.7$-fold difference, and the herd-immunity thresholds are $60\%$ and $75\%$. Forecasts from the early phase alone would therefore be wildly uncertain. An independent estimate of the infectious period $1/\gamma$, or data beyond the peak, resolves the ambiguity.

## Common Misconceptions

- **"A good fit proves the model."** Many models fit the same data; a fit shows consistency, not mechanism. Only prediction on unseen data, or on new conditions, is a test.
- **"Best-fit parameters are the true parameters."** They are estimates with uncertainty, and if the parameters are not identifiable the best fit may be arbitrary.
- **"Least squares is always the right method."** It is optimal for homoscedastic Gaussian errors; counts and proportional errors need other likelihoods.
- **"More parameters, better model."** Training error always falls; held-out error and AIC rise once the model starts fitting noise.
- **"Random cross-validation is fine for time series."** Shuffling places future points in the training set, which flatters the model.

## Connections

- The least-squares machinery is that of mathematics-lab-using-python-iii m1-l1 (the normal equations and the singular value decomposition) and m1-l4 (Gauss–Newton and Levenberg–Marquardt); the near-singular $J^TJ$ of an unidentifiable fit is a rank-deficiency problem there.
- Likelihood and the Poisson model connect to the counting statistics of nuclear-physics m2-l2, where $\sqrt N$ fluctuations set the uncertainty of a measured activity.
- The identifiability of $hA/(mc)$ is the lumping noted in Lesson m1-l1; the epidemic ambiguity is the structure of the SIR model in Lesson m1-l3.
- In astrophysics, fitting light curves and mass models uses the same likelihoods, and AIC-type criteria choose between models of stellar populations.
- Held-out validation closes the loop of the modelling cycle in Lesson m1-l1.

## Quick Check

1. Show that for Gaussian errors the maximum-likelihood estimate of $\boldsymbol\theta$ minimises SSE and that $\hat\sigma^2 = \mathrm{SSE}/n$.
2. Why does taking logarithms of exponential-decay data change the weights of the fit?
3. In $\dot x = -ab\,x$, can $a$ and $b$ be identified separately from measurements of $x(t)$?
4. Models A and B have AIC values of $102.1$ and $105.6$. Which is preferred, and is the difference meaningful?
5. Why is a random split inappropriate for validating a forecast of weekly cases?

## Takeaway

- Fitting a model is maximum likelihood under an error model; least squares is the Gaussian case.
- Every estimate needs an uncertainty: the Jacobian formula, profile likelihood or the bootstrap.
- Parameters enter data only through identifiable combinations; the early SIR phase fixes $\beta - \gamma$, not $R_0$.
- AIC balances fit and complexity, and validation on held-out future data, against a baseline, is the real test.
- A failed validation sends us back to the assumptions of the modelling cycle.
