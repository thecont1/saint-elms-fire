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
lessonId: mathematical-modelling-m3-l2
lessonName: Sensitivity Analysis and Monte Carlo Uncertainty
lessonNumber: 8
moduleNumber: 3
semesterNumber: 6
difficulty: advanced
estimatedStudyMinutes: 55
releaseOrder: 8
prerequisites:
  - mathematical-modelling-m3-l1
  - mathematical-modelling-m1-l3
  - numerical-methods-m2-l1
learningObjectives:
  - Compute local sensitivities and elasticities analytically, from sensitivity equations and by finite differences.
  - Propagate parameter uncertainty through a model with the delta method and with Monte Carlo sampling, and choose a sample size from the target error.
  - Define first-order and total-effect Sobol indices and compute them for simple models.
  - Use sensitivity results to decide which parameters to measure better and how to report an uncertain forecast.
concepts:
  - Local sensitivity and elasticity
  - Sensitivity equations
  - Delta method
  - Monte Carlo propagation
  - Latin hypercube sampling
  - Sobol indices
  - Uncertainty communication
tags:
  - mathematics
  - mathematical-modelling
  - sensitivity-analysis
  - monte-carlo
sourceType: authored-courseware
status: in-review
assessmentHints:
  - derivation
  - problem-solving
  - computational
  - conceptual
***

# Sensitivity Analysis and Monte Carlo Uncertainty

## Overview

Lesson m3-l1 ended with parameter estimates and their uncertainties. The next question is what that uncertainty does to the answers we care about: a peak size, a final size, a time to collapse. Sensitivity analysis measures how strongly an output responds to each input and so tells us which parameters deserve better measurement and which can be fixed. Local methods differentiate the model at a nominal point; global methods vary all the inputs over their plausible ranges, either by Monte Carlo sampling that propagates the full distribution or by variance decomposition into Sobol indices that attribute the output variance to inputs and their interactions. We apply all three to the SIR quantities of Lesson m1-l3, and close with how to report an uncertain forecast.

## Learning Path

- **What you should already know**: parameter estimates, covariance and the bootstrap (Lesson m3-l1); the SIR peak and final-size formulas (Lesson m1-l3); numerical differentiation and its step-size error (numerical-methods m2-l1).
- **What this lesson adds**: normalised sensitivities, sensitivity equations, the delta method, Monte Carlo propagation, and Sobol indices.
- **What later lessons this will unlock**: the uncertainty bands of the dengue forecast in Lesson m3-l3.

## Core Explanation

### Local sensitivity and elasticity

For an output $y = F(p)$ the **local sensitivity** to a parameter $p$ is $S = \partial F/\partial p$ at the nominal value. Because it carries the units of $y/p$, it is better to use the dimensionless **elasticity** (normalised sensitivity)

$$E = \frac{p}{y}\frac{\partial y}{\partial p} \approx \frac{\Delta y/y}{\Delta p/p},$$

the percentage change in the output per percentage change in the parameter. Elasticities of $\pm1$ mean proportional response; $R_0 = \beta/\gamma$ has $E_\beta = +1$ and $E_\gamma = -1$.

When $y$ is the solution of an ODE $\dot x = f(x, p)$, differentiate with respect to $p$. The sensitivity $s = \partial x/\partial p$ obeys the **sensitivity equation**

$$\dot s = \frac{\partial f}{\partial x}s + \frac{\partial f}{\partial p}, \qquad s(0) = \frac{\partial x_0}{\partial p}.$$

For exponential decay $\dot x = -kx$ this is $\dot s = -ks - x$, with $s(0) = 0$ and solution $s = -tx_0e^{-kt}$ (check by substitution). The elasticity with respect to $k$ is $(k/x)s = -kt$: the relative effect of an error in $k$ grows linearly with time, reaching $-1$ at one time constant. The sensitivity equation is integrated alongside the model; the alternative is finite differences, $\partial y/\partial p \approx \left(F(p + h) - F(p - h)\right)/2h$, with $h$ of order $10^{-5}p$ (balancing truncation and round-off, as in numerical-methods m2-l1).

Local sensitivities are cheap and exact at a point but say nothing about nonlinearity or interactions, and they are valid only for small changes. A parameter with a small derivative but a vast plausible range may matter more than one with a large derivative and a narrow range.

### The delta method

If the parameters are uncertain with covariance $\Sigma$, a first-order Taylor expansion of $y = F(p)$ gives

$$\mathrm{Var}(y) \approx \nabla F^T\,\Sigma\,\nabla F.$$

For independent parameters this is $\sum_j (\partial F/\partial p_j)^2\sigma_j^2$. For a product or quotient such as $R_0 = \beta/\gamma$ the relative variances add: $(\sigma_{R_0}/R_0)^2 = (\sigma_\beta/\beta)^2 + (\sigma_\gamma/\gamma)^2$. The method needs only derivatives, but it is accurate only when $F$ is nearly linear over the range of uncertainty.

### Monte Carlo propagation

The most general approach is simulation. Draw $N$ parameter sets from their joint distribution, run the model for each, and summarise the outputs by mean, standard deviation and percentiles. The standard error of a Monte Carlo mean is $\sigma_y/\sqrt N$, independent of the number of parameters, so to halve the error one needs four times as many runs. **Latin hypercube sampling** stratifies each parameter's range so that fewer runs cover the space evenly. The parameter distributions come from the fit (the bootstrap or the covariance of Lesson m3-l1), or from expert ranges, and correlations matter: if $\beta$ and $\gamma$ are estimated together, their strong correlation must be preserved or the spread in $R_0$ is wrong. The script propagates $10\%$ lognormal uncertainty in $\beta$ and $\gamma$ to the epidemic peak and final size.

```python
import numpy as np

rng = np.random.default_rng(1)
n = 5000
beta  = rng.lognormal(np.log(0.5), 0.1, n)         # about 10% uncertainty
gamma = rng.lognormal(np.log(0.2), 0.1, n)
R0 = beta/gamma
peak = 1 - 1/R0 - np.log(R0)/R0
z = np.full(n, 0.9)
for _ in range(200):                                # fixed point of z = 1 - exp(-R0 z)
    z = 1 - np.exp(-R0*z)
print(np.percentile(peak, [2.5, 50, 97.5]))         # about 0.135, 0.233, 0.335
print(np.percentile(z, [2.5, 50, 97.5]))            # about 0.766, 0.893, 0.957
```

The peak spreads by a factor of $2.5$ from the lower to the upper limit while the final size varies by only $0.19$ in absolute terms, because it saturates near 1.

### Sobol variance-based indices

For independent inputs $X_1, \dots, X_k$ and output $Y = f(X)$, the **first-order index**

$$S_i = \frac{\mathrm{Var}\left(\mathbb E[Y\mid X_i]\right)}{\mathrm{Var}(Y)}$$

is the fraction of the output variance explained by $X_i$ alone, and the **total-effect index**

$$S_{Ti} = 1 - \frac{\mathrm{Var}\left(\mathbb E[Y\mid X_{\sim i}]\right)}{\mathrm{Var}(Y)}$$

includes all interactions in which $X_i$ takes part ($X_{\sim i}$ means all inputs except $X_i$). Always $S_i \le S_{Ti}$; $\sum S_i \le 1$ with equality exactly for additive models, and a gap between $S_i$ and $S_{Ti}$ signals interaction. A parameter with small $S_{Ti}$ can be fixed at a nominal value. Sobol indices are estimated by "pick-and-freeze" sampling: draw two independent sample matrices $A$ and $B$, form $AB_i$ by replacing column $i$ of $A$ with column $i$ of $B$, and use $S_i \approx \frac1N\sum f(B)\left(f(AB_i) - f(A)\right)/\mathrm{Var}(Y)$, which costs $N(k+2)$ model runs. Sobol indices describe variance and can be misleading for skewed outputs, so they complement, but do not replace, plots of the output distribution.

## Key Ideas

- **Elasticity** $E = (p/y)\,\partial y/\partial p$ is dimensionless: the percentage change in output per percentage change in parameter.
- **Sensitivity equations** $\dot s = f_x s + f_p$ give the time-dependent sensitivity of an ODE solution.
- **Delta method**: $\mathrm{Var}(y) \approx \nabla F^T\Sigma\nabla F$; relative variances add for products and quotients.
- **Monte Carlo** error scales as $\sigma/\sqrt N$ regardless of dimension; preserve parameter correlations.
- **Sobol indices** split the variance: $S_i$ for main effects, $S_{Ti}$ including interactions.
- **Communicate** uncertainty as ranges and probabilities, not single numbers.

## Worked Examples

### Example 1 — Uncertainty in $R_0$ and the sample size

With $\beta = 0.50 \pm 0.05$ and $\gamma = 0.20 \pm 0.02$ (independent), find $R_0$ by the delta method and the number of Monte Carlo runs needed for a standard error of $0.01$ in its mean.

**Solution.** $R_0 = 2.5$. The relative variances are $(0.05/0.5)^2 = 0.01$ and $(0.02/0.2)^2 = 0.01$, so $(\sigma_{R_0}/R_0)^2 = 0.02$, giving $\sigma_{R_0}/R_0 = 0.141$ and $\sigma_{R_0} = 0.354$. Thus $R_0 = 2.5 \pm 0.35$, and roughly $2.5 \pm 0.7$ at two standard deviations. For a standard error of $0.01$: $N = (\sigma/0.01)^2 = (35.4)^2 \approx 1250$ runs. Because the quotient is skewed, a Monte Carlo 95% interval is asymmetric about the median, about $1.9$ to $3.3$ for lognormal inputs, as in the script.

### Example 2 — Which output is most sensitive to $R_0$?

Compare the elasticities of the peak prevalence $P = 1 - 1/R_0 - \ln R_0/R_0$ and the final size $z$ (the root of $z = 1 - e^{-R_0z}$) with respect to $R_0$ at $R_0 = 2.5$.

**Solution.** For the peak, $dP/dR_0 = 1/R_0^2 - (1 - \ln R_0)/R_0^2 = \ln R_0/R_0^2 = 0.9163/6.25 = 0.1466$, so $E_P = (2.5/0.2335)(0.1466) = 1.57$. For the final size differentiate $z = 1 - e^{-Rz}$ implicitly: $z' = e^{-Rz}(z + Rz')$, so $z' = \dfrac{ze^{-Rz}}{1 - Re^{-Rz}}$. With $z = 0.8926$ and $e^{-Rz} = 1 - z = 0.1074$, $z' = 0.0959/0.7316 = 0.131$ and $E_z = (2.5/0.8926)(0.131) = 0.37$. A $10\%$ error in $R_0$ therefore changes the peak by about $15\%$ and the final size by $3\%$ (exact recomputation at $R_0 = 2.75$ gives $+15.0\%$ and $+3.1\%$). Reporting the peak requires $R_0$ to be known much better than reporting the final size.

### Example 3 — Sobol indices by hand

(a) Let $Y = X_1 + 2X_2$ with $X_1, X_2$ independent and uniform on $[0,1]$. (b) Let $Y = X_1X_2$ with $X_1, X_2$ uniform on $[-1,1]$. Find $S_i$ and $S_{Ti}$.

**Solution.** (a) $\mathrm{Var}(X) = 1/12$, so $\mathrm{Var}(Y) = (1 + 4)/12 = 5/12$. The model is additive, so $\mathbb E[Y\mid X_1] = X_1 + 1$ and $\mathrm{Var} = 1/12$, giving $S_1 = (1/12)/(5/12) = 0.2$ and $S_2 = 4/5 = 0.8$, which sum to one; so $S_{Ti} = S_i$. (b) $\mathrm{Var}(X) = 1/3$ and $\mathbb E[X] = 0$; $\mathrm{Var}(Y) = \mathbb E[X_1^2]\mathbb E[X_2^2] = 1/9$. Now $\mathbb E[Y\mid X_1] = X_1\mathbb E[X_2] = 0$, so $S_1 = S_2 = 0$ and the first-order indices sum to $0$. Yet neither input can be fixed: $S_{T1} = S_{T2} = 1$, because all the variance comes from the interaction. A local sensitivity at the origin, where both partial derivatives vanish, would also call both inputs unimportant.

## Common Misconceptions

- **"A small derivative means an unimportant parameter."** Importance depends on the parameter's uncertainty range as well as the derivative; scale by the plausible range.
- **"First-order indices tell the whole story."** Interactions can carry all the variance, as in Example 3(b); compare $S_i$ with $S_{Ti}$.
- **"More Monte Carlo samples reduce the model uncertainty."** They reduce sampling error only; if the distribution of the inputs or the model structure is wrong, the answer converges to a wrong number.
- **"Sensitivity at the best-fit value describes the whole range."** Local sensitivities are tangent-line statements; the final size saturates, so its sensitivity falls as $R_0$ grows.
- **"Ignoring parameter correlation is harmless."** Strongly correlated $\beta$ and $\gamma$ (Lesson m3-l1) keep $R_0$ in a narrow range; independent sampling inflates the spread.

## Connections

- Finite-difference sensitivities inherit the truncation and round-off trade-off of numerical-methods m2-l1; central differences with a step near $10^{-5}$ of the parameter are typical.
- Sensitivity of an LP solution to costs and right-hand sides, with shadow prices, is the operations-research version in operations-research m3-l8.
- Monte Carlo propagation is a Riemann-sum-like integral of the output over the parameter distribution; its $1/\sqrt N$ error contrasts with the faster quadrature convergence of numerical-methods m2-l2 in low dimension.
- The delta method uses the Taylor expansion of real-analysis m2-l3 and the covariance matrix from Lesson m3-l1.
- In astrophysics, uncertainty propagation underlies cosmological parameter forecasts and the error bars on stellar masses and ages.

## Quick Check

1. Compute the elasticity of $T(t) = T_a + (T_0 - T_a)e^{-kt}$ with respect to $k$ at time $t$.
2. If $f(x, p) = px(1 - x)$, write the sensitivity equation for $s = \partial x/\partial p$.
3. Parameters $a = 4 \pm 0.2$ and $b = 2 \pm 0.2$; find the uncertainty of $a/b$ by the delta method.
4. How many Monte Carlo runs reduce the standard error of the mean by a factor of 10?
5. Why can the first-order Sobol indices all be zero while the output varies?

## Takeaway

- Elasticities tell how many percent the output moves per percent change in a parameter; sensitivity equations deliver them along an ODE solution.
- The delta method is the quick estimate and Monte Carlo the general one, with error $\sigma/\sqrt N$ regardless of dimension.
- Sobol indices attribute variance to inputs and interactions and show which parameters can be fixed.
- Outputs differ in their sensitivity: the SIR peak responds about four times as strongly to $R_0$ as the final size does.
- Report forecasts with ranges that include parameter uncertainty and state what has been left out.
