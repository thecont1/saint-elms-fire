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
lessonId: mathematical-modelling-m3-l3
lessonName: Case Study, a Dengue Outbreak in Bengaluru
lessonNumber: 9
moduleNumber: 3
semesterNumber: 6
difficulty: advanced
estimatedStudyMinutes: 60
releaseOrder: 9
prerequisites:
  - mathematical-modelling-m3-l1
  - mathematical-modelling-m3-l2
  - mathematical-modelling-m1-l3
  - calculus-using-python-m2-l3
learningObjectives:
  - Carry a modelling question from data through formulation, fitting, validation and uncertainty quantification to a communicated forecast.
  - Fit an SIR model with a reporting fraction to weekly case counts by Poisson maximum likelihood and validate it on held-out weeks.
  - Quantify parametric uncertainty by a parametric bootstrap and structural uncertainty by varying a fixed assumption.
  - Write a forecast statement that reports ranges, assumptions and a check that would show the model failing.
concepts:
  - Modelling workflow
  - Reporting fraction
  - Poisson likelihood fit
  - Parametric bootstrap
  - Structural uncertainty
  - Prediction interval
  - Forecast communication
tags:
  - mathematics
  - mathematical-modelling
  - case-study
  - epidemic-forecasting
sourceType: authored-courseware
status: in-review
assessmentHints:
  - computational
  - problem-solving
  - conceptual
  - short-answer
***

# Case Study, a Dengue Outbreak in Bengaluru

## Overview

Dengue, transmitted by Aedes mosquitoes, peaks in Bengaluru during and after the monsoon, when stagnant water multiplies breeding sites. A ward-level health team asks: given the weekly case counts so far, when will this season's outbreak peak and how big will it be? This lesson answers with the full workflow of the course: a model from Lesson m1-l3, a fit by the methods of Lesson m3-l1, uncertainty from Lesson m3-l2, and an honestly communicated forecast. **The data below are synthetic, generated for teaching from the model plus Poisson noise; they are not Bengaluru surveillance data.** Real counts would be loaded the same way.

## Learning Path

- **What you should already know**: the SIR model, $R_0$ and the epidemic peak (Lesson m1-l3); Poisson likelihoods, bootstrap, identifiability and hold-out validation (Lesson m3-l1); Monte Carlo and sensitivity (Lesson m3-l2); solving ODEs numerically (calculus-using-python m2-l3).
- **What this lesson adds**: an end-to-end pipeline with observation model, fit, validation, two kinds of uncertainty, and the wording of the forecast.
- **What later lessons this will unlock**: this is the final lesson; the same pipeline applies to any dynamic model fitted to a time series.

## Core Explanation

### Step 1: the question and the data

The decision is operational: when to schedule fogging and larval-source reduction, and how many beds to reserve. The outputs of interest are the **peak week**, the **peak weekly cases** and the **decline**. The data are weekly reported cases for 26 weeks from the first week of June, for a cluster of wards with population $N = 10^6$.

| Week | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Cases | 18 | 18 | 23 | 36 | 56 | 64 | 73 | 105 | 155 | 161 | 208 | 258 | 322 |

| Week | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Cases | 379 | 362 | 397 | 455 | 468 | 388 | 388 | 333 | 303 | 236 | 223 | 172 | 132 |

We act at the end of week 14, with the epidemic still rising, so **weeks 1 to 14 are the training data** and weeks 15 to 26 are held out to test the forecast. In a live setting those weeks do not yet exist.

### Step 2: model and assumptions

Dengue involves humans and mosquitoes, but a two-species model needs parameters that case counts cannot identify (Lesson m3-l1). We use a lumped SIR model for people, with the mosquito stage absorbed into the rates:

$$\dot S = -\frac{\beta SI}{N}, \qquad \dot I = \frac{\beta SI}{N} - \gamma I, \qquad \dot C = \frac{\beta SI}{N},$$

where $C$ accumulates new infections. Time is in weeks. Assumptions, as sentences that could be false: (i) homogeneous mixing across the cluster; (ii) a fixed effective removal rate $\gamma = 0.5\ \text{wk}^{-1}$, a two-week effective generation time that includes the mosquito latent period; (iii) a fixed fraction $\rho = 0.01$ of infections is reported, since most dengue infections are mild or asymptomatic; (iv) no seasonal change in transmission within the window; (v) lasting immunity within the season; (vi) no importation after the start.

Observed counts in week $k$ follow the **observation model** $y_k \sim \mathrm{Poisson}(\mu_k)$ with $\mu_k = \rho\,(C(k) - C(k-1))$. Unknowns: $\beta$ and the initial number infectious $I_0$. We fix $\gamma$ and $\rho$ because the rising phase constrains mainly the growth rate $\beta - \gamma$ and the product $\rho I_0$, so the data cannot separate them from $\beta$ and $I_0$.

### Step 3: fitting by Poisson maximum likelihood

We minimise $-\ln L = \sum_k(\mu_k - y_k\ln\mu_k + \ln y_k!)$ over $(\beta, \ln I_0)$, using the logarithm to keep $I_0$ positive and to put both parameters on comparable scales.

```python
import numpy as np
from scipy.integrate import solve_ivp
from scipy.optimize import minimize
from scipy.special import gammaln

N, GAMMA, RHO = 1e6, 0.5, 0.01
y = np.array([18,18,23,36,56,64,73,105,155,161,208,258,322,379,
              362,397,455,468,388,388,333,303,236,223,172,132])
n_tr, n_all = 14, len(y)

def weekly(theta, weeks):
    beta, I0 = theta[0], np.exp(theta[1])
    def rhs(t, s):
        S, I, C = s
        inc = beta*S*I/N
        return [-inc, inc - GAMMA*I, inc]
    sol = solve_ivp(rhs, (0, weeks), [N - I0, I0, 0.0],
                    t_eval=np.arange(weeks + 1), rtol=1e-8)
    return RHO*np.diff(sol.y[2])                 # expected reported cases per week

def nll(theta, data):
    if theta[0] <= GAMMA: return 1e12
    mu = weekly(theta, len(data))
    return np.sum(mu - data*np.log(mu) + gammaln(data + 1))

fit = minimize(nll, [0.7, np.log(1000.0)], args=(y[:n_tr],), method="Nelder-Mead")
print(fit.x[0], np.exp(fit.x[1]), fit.x[0]/GAMMA)     # about 0.80, 1560, 1.60

rng = np.random.default_rng(0)
mu_hat, boot, paths = weekly(fit.x, n_all), [], []
for b in range(300):                                  # parametric bootstrap
    yb = rng.poisson(mu_hat[:n_tr])
    fb = minimize(nll, fit.x, args=(yb,), method="Nelder-Mead")
    boot.append([fb.x[0]/GAMMA, np.exp(fb.x[1])])
    paths.append(rng.poisson(weekly(fb.x, n_all)))   # forecast with count noise
print(np.percentile(boot, [2.5, 97.5], axis=0))
print(np.percentile(paths, [2.5, 97.5], axis=0)[:, n_tr:])
```

The fit gives $\hat\beta = 0.80\ \text{wk}^{-1}$, $\hat I_0 \approx 1560$ and so $\hat R_0 = \hat\beta/\gamma = 1.60$, with a minimum negative log-likelihood of $48.6$. Extended to week 26, the fitted curve peaks at $438$ cases in week 17.

### Step 4: validation on the held-out weeks

Over weeks 15 to 26 the forecast has root-mean-square error $21$ cases per week against a mean of $321$ ($6.7\%$), and a mean absolute percentage error of $5.8\%$. A **baseline**, the straight-line extrapolation of $\ln y$ over weeks 1 to 14 (growth $0.25\ \text{wk}^{-1}$), forecasts continued exponential growth to $8741$ cases in week 26 and has an RMSE of about $3840$. The mechanistic model wins because susceptibles run out. Passing a test on one season does not prove the model for the next; what is validated is the **method**, not a parameter set.

### Step 5: two kinds of uncertainty

**Parametric uncertainty** comes from noise in 14 weeks of data. The bootstrap gives a 95% interval of $R_0 = 1.57$ to $1.63$ and $I_0 = 1320$ to $1820$, and a forecast peak between $409$ and $463$ cases, in week 17 in every replicate. Adding Poisson count noise gives **prediction intervals** for observed counts, for example $[386, 479]$ for week 18 and $[149, 204]$ for week 25. All twelve held-out counts fall inside their intervals.

These intervals are conditional on the fixed assumptions, and the fixed $\gamma$ is the weakest. **Structural uncertainty** is explored by refitting with other plausible values:

| $\gamma\ (\text{wk}^{-1})$ | $\hat R_0$ | $-\ln L$ | Peak cases | Peak week | Model total, weeks 1 to 26 |
|---|---|---|---|---|---|
| 0.35 | 1.83 | 48.1 | 483 | 18 | 6430 |
| 0.50 | 1.60 | 48.6 | 438 | 17 | 5780 |
| 0.70 | 1.45 | 49.7 | 396 | 16 | 5100 |

The likelihoods differ by under 2 units, so the data cannot choose among them (practical non-identifiability once more), yet the peak moves by $\pm 10\%$ and by a week. This range, wider than the bootstrap interval, is the one to report.

### Step 6: communicating the forecast

A useful statement has a central estimate, a range that includes both kinds of uncertainty, the assumptions, and a trigger for revision. For example:

> *As of week 14, the model projects that reported cases in this cluster will peak in week 17, plausibly weeks 16 to 18, at about 440 per week (range 400 to 480). Cases should fall below 200 per week around week 25. These figures assume homogeneous mixing, a one-percent reporting fraction and a two-week generation time (varied between 1.4 and 2.9 weeks). If weekly counts exceed 500 in weeks 16 to 18, or have fallen by week 19, the model should be refitted.*

A forecast is a probability statement with a trigger, not a promise. Spatial spread between wards lies outside this model; a crude Fisher estimate (Lesson m2-l3) with $r = \beta - \gamma = 0.3\ \text{wk}^{-1}$ and an assumed $D = 0.5\ \text{km}^2\text{wk}^{-1}$ gives a front speed of $2\sqrt{0.15} = 0.77\ \text{km wk}^{-1}$, so crossing a 10 km city takes about 13 weeks.

## Key Ideas

- **The workflow**: question, data, assumptions, model, fit, validate, quantify uncertainty, communicate; a failed validation returns you to the assumptions.
- **Observation model**: the model predicts infections, but data are reported counts, linked by a reporting fraction and Poisson noise.
- **Identifiability** forces fixing $\gamma$ and $\rho$; the fit is conditional on them.
- **Validation on held-out future weeks, against a baseline**, is the test of a forecast.
- **Two uncertainties**: parametric (bootstrap) is narrow here, structural (the choice of $\gamma$) is wider and must be reported.
- **A forecast statement** gives a central value, a range, assumptions and a trigger.

## Worked Examples

### Example 1 — A hand estimate to sanity-check the fit

From the table, estimate the growth rate and $R_0$ without any software.

**Solution.** Between weeks 4 and 12 the counts grow from 36 to 258, so $r = \ln(258/36)/8 = 1.970/8 = 0.246\ \text{wk}^{-1}$ and the doubling time is $\ln 2/0.246 = 2.8$ weeks. For SIR, $r = \beta - \gamma = \gamma(R_0 - 1)$, so $R_0 = 1 + r/\gamma = 1 + 0.246/0.5 = 1.49$. The fit gives $1.60$; the hand value is lower because the counts are noisy and depletion of susceptibles slows growth. Agreement within $7\%$ is what a check needs; a hand value of $3$ would signal a coding error.

### Example 2 — Reading the validation

Interpret an RMSE of $21$ cases per week for the forecast and $3840$ for the baseline.

**Solution.** The forecast error is $21/321 = 6.7\%$ of the mean held-out count, and it is comparable with Poisson noise itself, whose standard deviation at 400 cases is $\sqrt{400} = 20$. No model can do much better. The baseline's error is two orders of magnitude larger, so the model has real predictive value; an RMSE near the baseline's would make us doubt it.

### Example 3 — Which uncertainty to report?

From the table, find the plausible range of the peak size, and explain why the bootstrap interval alone would mislead.

**Solution.** Parametric uncertainty alone gives a peak of $409$ to $463$ ($-7\%$ to $+6\%$ around $438$). Varying $\gamma$ gives $396$ to $483$ ($-10\%$ to $+10\%$), and the peak week shifts from 16 to 18. The structural range contains the parametric one, so the bootstrap alone would overstate confidence by roughly a factor of 1.5. We report "about 440, range 400 to 480", and recommend a measurement of the infectious period as the most valuable new data; the sensitivity analysis of Lesson m3-l2 is the tool for ranking such parameters.

## Common Misconceptions

- **"A narrow confidence interval means we are certain."** It is conditional on the fixed assumptions; structural uncertainty here is larger than parametric.
- **"A good training fit means a good forecast."** Skill is shown on held-out weeks against a baseline.
- **"Dengue is just an SIR epidemic."** It is vector-borne; the lumped SIR absorbs the mosquito stage, so $R_0$ is an effective per-generation number and vector interventions cannot be tested.
- **"A forecast should give one number."** A single number conceals uncertainty and cannot be falsified; give a range and a revision trigger.
- **"Fitted parameters are facts about dengue."** They make this model match this reporting process; another reporting fraction changes $I_0$.

## Connections

- The model and its peak formula are from Lesson m1-l3; the exponential baseline is the unlimited growth that SIR saturation corrects.
- The equilibrium and threshold reasoning ($R_0 > 1$, $S = N/R_0$) is the stability theory of Lesson m2-l1; the front-speed estimate uses Lesson m2-l3.
- Poisson likelihood and the bootstrap come from Lesson m3-l1, and propagation of the $\gamma$ uncertainty is the Monte Carlo and sensitivity analysis of Lesson m3-l2.
- Integrating the ODE with `solve_ivp` uses the Runge–Kutta methods of numerical-methods m3-l3 and the workflow of calculus-using-python m2-l3.
- Deciding what to report parallels the sensitivity and capstone work of operations-research m3-l8 and m3-l9, where an answer is only as good as its assumptions.

## Quick Check

1. Why are $\gamma$ and $\rho$ fixed rather than estimated, and which fitted quantities would change if $\rho$ were 0.02?
2. Explain why the bootstrap simulates data from the fitted model and then refits.
3. Compute $R_0$ from a growth rate of $0.30\ \text{wk}^{-1}$ and $\gamma = 0.5\ \text{wk}^{-1}$.
4. Why is a random train-test split inappropriate here?
5. Rewrite a forecast "the peak will be 440" as a communicated statement with a revision trigger.

## Takeaway

- A modelling project runs from a decision-relevant question through data, assumptions, model, fit, validation and uncertainty to a communicated forecast.
- Link the model to the data by an explicit observation model (reporting fraction and Poisson noise).
- Fix what the data cannot identify, and show what that choice does to the answer.
- Validate on future weeks against a baseline; report parametric and structural uncertainty and a trigger for revision.
- The honest deliverable is a range with assumptions, not a single number.
