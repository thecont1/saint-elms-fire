***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-6
semesterName: Semester 6
subjectId: mathematics
subjectName: Mathematics
courseId: financial-mathematics
courseName: Financial Mathematics (Math Elective II, B)
moduleId: financial-mathematics-module-3
moduleName: Derivatives, Stochastic Models and Model Limitations
lessonId: financial-mathematics-m3-l3
lessonName: Monte Carlo Simulation and the Limits of Financial Models
lessonNumber: 9
moduleNumber: 3
semesterNumber: 6
difficulty: advanced
estimatedStudyMinutes: 55
releaseOrder: 9
prerequisites:
  - financial-mathematics-m2-l3
  - financial-mathematics-m3-l1
  - financial-mathematics-m3-l2
learningObjectives:
  - Price a European option by Monte Carlo simulation of geometric Brownian motion under the risk-neutral measure and quantify the standard error.
  - Explain the sampling error law $1/\sqrt{M}$ and estimate the number of paths needed for a target accuracy.
  - Identify the empirical failures of the lognormal model, namely fat tails, volatility clustering, jumps and the volatility smile.
  - Discuss model risk and the lessons of the 1987 crash, the 1998 collapse of LTCM and the 2008 financial crisis for the use of VaR and Gaussian models.
concepts:
  - Monte Carlo simulation
  - Standard error
  - Fat tails and kurtosis
  - Volatility clustering
  - Volatility smile
  - Model risk
tags:
  - mathematics
  - financial-mathematics
  - monte-carlo
  - model-risk
sourceType: authored-courseware
status: in-review
assessmentHints:
  - computational
  - conceptual
  - problem-solving
  - short-answer
***

# Monte Carlo Simulation and the Limits of Financial Models

## Overview

The Black–Scholes formula of Lesson m3-l2 is elegant and fast, but it covers only simple payoffs under a model with constant volatility. When a payoff depends on the whole price path, or the model has several random factors, closed forms disappear and the standard tool is Monte Carlo simulation: generate many random price paths, compute the payoff on each, average and discount. This lesson builds that method for a European call, where the exact answer is known, so that the error can be seen directly. We then turn from the machinery to its limits. Every model in this course makes assumptions, and the history of finance includes episodes in which they failed badly. Understanding the empirical facts that contradict geometric Brownian motion, and the meaning of model risk, is part of using the mathematics responsibly.

## Learning Path

- **What you should already know**: geometric Brownian motion and the Black–Scholes price (Lesson m3-l2); risk-neutral valuation (Lesson m3-l1); volatility, the normal distribution and value at risk (Lesson m2-l3).
- **What this lesson adds**: Monte Carlo pricing and its standard error; the main empirical departures from the lognormal model; the smile; the notion of model risk and case studies.
- **What later lessons this will unlock**: this is the final lesson of the course; it prepares the reader for stochastic-volatility and jump models, numerical methods for PDEs and risk management in later study.

## Core Explanation

### Monte Carlo pricing

By risk-neutral valuation, the price of a payoff $\Phi(S_T)$ is $e^{-rT}E_{q}[\Phi(S_T)]$, where under $q$ the asset follows GBM with drift $r$. Its exact solution (Lesson m3-l2) lets us sample the terminal price directly:

$$S_T=S_0\exp\!\Big[\big(r-\tfrac12\sigma^{2}\big)T+\sigma\sqrt{T}\,Z\Big], \qquad Z\sim N(0,1).$$

Draw $M$ independent values $Z_1,\ldots,Z_M$, compute payoffs $\Phi_m$, and estimate

$$\hat V=e^{-rT}\,\bar\Phi, \qquad \bar\Phi=\frac1M\sum_{m=1}^{M}\Phi_m.$$

By the law of large numbers $\hat V\to V$, and by the central limit theorem the error is approximately normal with **standard error** $e^{-rT}s/\sqrt M$, where $s$ is the sample standard deviation of the payoffs. A 95% confidence interval is $\hat V\pm1.96\,\mathrm{SE}$. The error falls only like $M^{-1/2}$: to gain one more decimal place of accuracy requires 100 times as many paths. This is slow, but it does not depend on the number of random factors, which is why Monte Carlo is preferred for high-dimensional problems such as baskets of assets.

```python
import random
from math import exp, sqrt

def mc_call(S0, K, r, sigma, T, paths, seed=42):
    rng = random.Random(seed)
    drift = (r - 0.5 * sigma**2) * T
    vol = sigma * sqrt(T)
    payoffs = []
    for _ in range(paths):
        ST = S0 * exp(drift + vol * rng.gauss(0, 1))
        payoffs.append(max(ST - K, 0.0))
    disc = exp(-r * T)
    mean = sum(payoffs) / paths
    var = sum((p - mean) ** 2 for p in payoffs) / (paths - 1)
    return disc * mean, disc * sqrt(var / paths)

for n in (1_000, 10_000, 100_000):
    print(n, mc_call(100, 105, 0.05, 0.20, 1.0, n))
```

With $S_0=100$, $K=105$, $r=5\%$, $\sigma=20\%$, $T=1$, the output is a price of 8.015 with standard error 0.433 for 1,000 paths, 7.905 with 0.131 for 10,000, and 8.073 with 0.042 for 100,000, against the exact 8.0214. Plotting the estimate against $\log_{10}M$ would show a cloud that narrows as a funnel around the exact value. For path-dependent options the loop simulates $S$ at many dates, using the exact step $S_{t+\Delta t}=S_t\exp[(r-\sigma^{2}/2)\Delta t+\sigma\sqrt{\Delta t}\,Z]$.

### What the data say: fat tails

GBM implies that daily log returns are normal with a constant variance. Real return series differ in several robust ways. First, **fat tails**: extreme moves occur far more often than the normal predicts. The **excess kurtosis** $E[(R-\mu)^{4}]/\sigma^{4}-3$ is zero for a normal and typically strongly positive for equity returns. The table gives the normal probability of a daily fall of at least $k$ standard deviations and the implied waiting time on 252 trading days a year.

| $k$ | Probability | Expected wait |
|---|---|---|
| 3 | $1.35\times10^{-3}$ | 2.9 years |
| 4 | $3.2\times10^{-5}$ | 125 years |
| 5 | $2.9\times10^{-7}$ | about 13,800 years |
| 6 | $9.9\times10^{-10}$ | about 4 million years |

Markets deliver such days within a working lifetime. On 19 October 1987 the Dow Jones Industrial Average fell about 22.6% in one day, more than 20 standard deviations if the daily volatility was around 1%, an event of probability below $10^{-100}$ under normality.

### Volatility clustering and the smile

Second, **volatility clustering**: large moves tend to follow large moves, calm periods follow calm ones. Returns are nearly uncorrelated, but squared returns are positively autocorrelated, contradicting a constant $\sigma$. Models such as ARCH and GARCH let the variance depend on the past, for instance $\sigma_t^{2}=\omega+\alpha\epsilon_{t-1}^{2}+\beta\sigma_{t-1}^{2}$, and produce fat-tailed returns even though each day's shock is normal. For $\alpha=0.1$, $\beta=0.88$ the kurtosis is $3(1-0.98^{2})/(1-0.98^{2}-2\cdot0.1^{2})=6.1$.

Third, **jumps**: prices sometimes move discontinuously on news, which Brownian paths forbid. Fourth, volatility, the one unobservable input, is not constant, which shows up as the **volatility smile**. If the Black–Scholes formula is inverted for $\sigma$ using market prices (the implied volatility), the result depends on the strike, typically higher for low strikes, the "skew". A single flat $\sigma$ cannot price all strikes. Extensions include local volatility, stochastic volatility (the Heston model) and jump-diffusions (Merton), each adding parameters and complexity.

### Model risk and the crises

**Model risk** is the loss that arises because a model is wrong, misapplied or misunderstood. It has several sources: misspecification of the dynamics; estimation error in parameters such as $\sigma$ and correlations, which are estimated from limited data; numerical error; and the feedback of many traders using the same model, which changes the market it describes. Three episodes illustrate it. After 1987 the volatility smile appeared in index options, showing that traders no longer believed the lognormal tails. In 1998 the hedge fund Long-Term Capital Management, run by experts in derivatives pricing, lost most of its capital when positions that its models treated as nearly riskless converged the wrong way in a liquidity crisis; its risk models assumed normal market conditions, not a stressed market in which hedges failed. In 2008 the pricing of mortgage-backed securities relied heavily on the Gaussian copula, a model of default correlation that gave tranches high ratings, as if house prices would never fall together across the country; when they did, correlations jumped towards 1 and losses far exceeded the VaR figures. The failures were not mathematical errors but failures of assumption: constant correlation, no liquidity risk, tails that are too thin.

Practical responses include **stress testing** (computing losses in specified extreme scenarios), **expected shortfall** in place of VaR, using several models and comparing, **model validation** by an independent team, limits on leverage, and humility about numbers produced to four decimal places.

## Key Ideas

- **Monte Carlo**: $\hat V=e^{-rT}\bar\Phi$ with $S_T$ sampled under drift $r$; standard error $\propto1/\sqrt M$, independent of dimension.
- **Fat tails**: real returns have positive excess kurtosis; events of $5\sigma$ or more occur far more often than the normal predicts.
- **Volatility clustering**: variance changes over time; squared returns are autocorrelated.
- **Smile**: implied volatility depends on strike, so one flat $\sigma$ cannot fit the market.
- **Model risk**: errors come from the model's assumptions and its use, not only from the calculation.

## Worked Examples

### Example 1 — How many paths?

For the call above, 100,000 paths give a standard error of 0.042. How many paths are needed for a standard error of 0.01? How many for a 95% interval of half-width 0.01?

**Solution.** The payoff standard deviation, discounted, is $s'=0.042\sqrt{100{,}000}=13.28$. For SE $=0.01$ we need $M=(13.28/0.01)^{2}=1.76\times10^{6}$ paths, about 1.8 million. For a 95% half-width of 0.01 we need $1.96\,s'/\sqrt M=0.01$, so $M=(1.96\times13.28/0.01)^{2}=6.8\times10^{6}$. Going from 0.042 to 0.01 reduces the error by a factor 4.2 at the cost of $17.6$ times as many paths. The estimate 8.073 from 100,000 paths lies $(8.073-8.0214)/0.042=1.2$ standard errors from the exact value, as expected from sampling error alone.

### Example 2 — Reading the tail table

Under a normal model with daily volatility 1%, how likely is a fall of 5% or more in a day? Suppose over a 20-year period an index had four such days. What does this say about the model?

**Solution.** A 5% fall is $k=5$ standard deviations, with normal probability $N(-5)=2.87\times10^{-7}$ per day. Over 20 years there are $20\times252=5{,}040$ days, so the expected number of such days is $5{,}040\times2.87\times10^{-7}=0.0014$, about 1 chance in 700 of seeing even one. Observing four makes the normal model with constant 1% volatility untenable at essentially any confidence level. The data would be explained by a tail heavier than the normal, by volatility that is higher in turbulent periods, or both.

### Example 3 — Flat volatility and crash protection

An investor values a one-year put with $S=100$, $K=80$, $r=5\%$ using a flat $\sigma=20\%$. The market price corresponds to an implied volatility of 28%. Compare the prices.

**Solution.** For $\sigma=20\%$: $d_1=[\ln(1.25)+(0.05+0.02)]/0.2=(0.22314+0.07)/0.2=1.4657$, $d_2=1.2657$, and the put price is $80e^{-0.05}N(-1.2657)-100N(-1.4657)=76.098(0.10280)-100(0.07135)=0.687$. At $\sigma=28\%$ the same formula gives 2.119. The flat-volatility model prices this out-of-the-money put at about a third of the market price. The market is charging for the fat left tail that the lognormal model assigns very little probability to; a trader who sold such puts at the model price would be badly under-compensated for crash risk.

## Common Misconceptions

- **"Monte Carlo converges quickly."** The error falls as $1/\sqrt M$, slower than quadrature in low dimension; its strength is dimension independence.
- **"A model that fits the average day is a safe model."** Risk lives in the tails, which averages hide; a model can fit 99% of days and fail on the day that matters.
- **"A normal-based VaR bounds the loss."** VaR is a quantile and relies on the tail shape; fat tails and correlation jumps can make losses several times the VaR.
- **"The 2008 crisis showed that mathematics does not work in finance."** It showed that assumptions about correlation, liquidity and independence were wrong and went unexamined; the correct response is better models and more scepticism, not none.
- **"Implied volatility is the market's forecast of future volatility."** It also contains risk premia and supply-demand effects, and it differs across strikes.

## Connections

- The $1/\sqrt M$ law of Monte Carlo is the same statistical law as the $1/\sqrt N$ counting uncertainty in Nuclear Physics (Lesson m2-l2): to reduce the fractional error to 1% requires 10,000 events.
- Generating pseudo-random numbers and propagating errors is the numerical practice of Mathematics Lab using Python II (Lesson m1-l6), whose reproducibility standards apply to simulation experiments.
- The kurtosis and higher moments of a distribution are the integrals $\int x^{4}f(x)\,dx$ of Integral Calculus (Lessons m3-l1 and m3-l3), and the tails of the normal density are improper integrals.
- The fat-tailed, clustered fluctuations of markets are studied in the statistical physics of complex systems, where scale-free distributions appear as in Thermal Physics and Statistical Mechanics (Lesson m3-l3).
- Indian regulators and the Reserve Bank of India require banks to stress-test portfolios, an institutional recognition of the model-risk lessons here.

## Quick Check

1. Explain why the standard error of a Monte Carlo estimate falls as $1/\sqrt M$ and how many more paths are needed to halve it.
2. Define excess kurtosis and state its value for a normal distribution.
3. Under the risk-neutral measure, what drift is used to simulate $S_T$, and why?
4. Why can a GARCH model with normal shocks still produce fat-tailed returns?
5. Name three assumptions of the Black–Scholes model that fail in practice and the market feature that shows each failure.

## Takeaway

- Monte Carlo prices a derivative by simulating risk-neutral paths, averaging payoffs and discounting; its error shrinks as $1/\sqrt M$.
- Real returns have fat tails, clustered volatility and jumps, and implied volatility varies with strike (the smile).
- Models are simplifications, and the dangerous errors are those in the assumptions, not the arithmetic.
- The crises of 1987, 1998 and 2008 show the cost of trusting thin-tailed models and constant correlation.
- The sensible use of financial mathematics combines precise calculation, awareness of its limits, and stress testing against what the model excludes.
