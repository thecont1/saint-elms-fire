***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-6
semesterName: Semester 6
subjectId: mathematics
subjectName: Mathematics
courseId: financial-mathematics
courseName: Financial Mathematics (Math Elective II, B)
moduleId: financial-mathematics-module-2
moduleName: Bonds, Interest-Rate Risk and Portfolio Theory
lessonId: financial-mathematics-m2-l3
lessonName: Portfolio Theory, CAPM and Value at Risk
lessonNumber: 6
moduleNumber: 2
semesterNumber: 6
difficulty: advanced
estimatedStudyMinutes: 60
releaseOrder: 6
prerequisites:
  - financial-mathematics-m2-l1
  - financial-mathematics-m2-l2
  - linear-algebra-m2-l2
learningObjectives:
  - Compute the expected return, variance and covariance of a portfolio and derive the minimum-variance weights for two assets.
  - Explain diversification quantitatively, separating diversifiable from systematic risk, and describe the efficient frontier and the capital market line.
  - State the capital asset pricing model, compute a beta as a covariance ratio and use it to find a required return.
  - Compute a parametric value at risk and discuss its assumptions and weaknesses.
concepts:
  - Mean-variance analysis
  - Covariance and correlation
  - Diversification
  - Efficient frontier
  - Capital asset pricing model
  - Value at risk
tags:
  - mathematics
  - financial-mathematics
  - portfolio-theory
  - value-at-risk
sourceType: authored-courseware
status: in-review
assessmentHints:
  - derivation
  - problem-solving
  - conceptual
  - computational
***

# Portfolio Theory, CAPM and Value at Risk

## Overview

Bond mathematics treated future payments as certain. Equities and most other assets have uncertain returns, and the central question of investment is how to combine risky assets. Harry Markowitz answered it in 1952 by describing each asset by a mean and a variance of return and observing that the variance of a combination depends on how the assets move together, not only on how volatile each is. The result is a quantitative theory of diversification: risk can be reduced by holding assets that do not move in lockstep, but only down to a floor set by market-wide risk. This lesson derives the two-asset formulas, the efficient frontier and the capital asset pricing model (CAPM), and closes with value at risk, the single loss number that banks and regulators use to summarise a portfolio's exposure.

## Learning Path

- **What you should already know**: expectation, variance and covariance of random variables; the risk-free rate from the bond market (Lesson m2-l1); derivatives for optimisation (Differential Calculus, Lesson m3-l2); the quadratic form $w^{\top}\Sigma w$ and inner products (Linear Algebra, Lesson m2-l2).
- **What this lesson adds**: portfolio mean and variance, minimum variance, the efficient frontier and capital market line, beta and CAPM, and parametric VaR.
- **What later lessons this will unlock**: volatility $\sigma$ as the parameter of the random model of Module 3 (Lessons m3-l1 and m3-l2); the failures of the normal-return assumption (Lesson m3-l3).

## Core Explanation

### Return, risk and covariance

Let asset $i$ have random return $R_i$ over a period with expected return $\mu_i=E[R_i]$ and standard deviation $\sigma_i$, the **volatility**. For two assets the **covariance** and **correlation** are

$$\sigma_{12}=\mathrm{Cov}(R_1,R_2)=E[(R_1-\mu_1)(R_2-\mu_2)], \qquad \rho=\frac{\sigma_{12}}{\sigma_1\sigma_2}\in[-1,1].$$

A portfolio with weights $w_1+w_2=1$ has return $R_p=w_1R_1+w_2R_2$. Expectation is linear, but variance is not:

$$\mu_p=w_1\mu_1+w_2\mu_2, \qquad \sigma_p^{2}=w_1^{2}\sigma_1^{2}+w_2^{2}\sigma_2^{2}+2w_1w_2\,\rho\sigma_1\sigma_2.$$

For $n$ assets, with weight vector $w$ and covariance matrix $\Sigma$ (symmetric, positive semi-definite), the result is $\mu_p=w^{\top}\mu$ and $\sigma_p^{2}=w^{\top}\Sigma w$. Since $\rho\le 1$, $\sigma_p\le w_1\sigma_1+w_2\sigma_2$, with equality only when $\rho=1$: the volatility of a portfolio never exceeds the average of the volatilities, and strictly falls below it whenever the assets are not perfectly correlated.

### Minimum variance

Substitute $w_2=1-w_1$ and write $w=w_1$. The variance is a quadratic in $w$, and setting the derivative to zero,

$$\frac{d\sigma_p^{2}}{dw}=2w\sigma_1^{2}-2(1-w)\sigma_2^{2}+2(1-2w)\sigma_{12}=0 \;\Longrightarrow\; w^{*}=\frac{\sigma_2^{2}-\sigma_{12}}{\sigma_1^{2}+\sigma_2^{2}-2\sigma_{12}}.$$

The second derivative $2(\sigma_1^{2}+\sigma_2^{2}-2\sigma_{12})=2\,\mathrm{Var}(R_1-R_2)\ge0$ confirms a minimum. The minimum-variance portfolio can have a lower volatility than either asset alone.

### Diversification and its limit

Take $n$ assets, each with volatility $\sigma$ and pairwise correlation $\rho$, held in equal weights $1/n$. The variance is

$$\sigma_p^{2}=n\cdot\frac{\sigma^{2}}{n^{2}}+n(n-1)\cdot\frac{\rho\sigma^{2}}{n^{2}}=\sigma^{2}\left[\frac{1}{n}+\left(1-\frac{1}{n}\right)\rho\right]\;\longrightarrow\;\rho\sigma^{2}\quad(n\to\infty).$$

The first term, the **idiosyncratic** or diversifiable risk, vanishes as $n$ grows. The floor $\rho\sigma^{2}$ is the **systematic** (market) risk, which no amount of diversification removes. This explains why the market rewards bearing systematic risk but not idiosyncratic risk, which an investor can eliminate for free.

### The efficient frontier

Plot each portfolio as a point $(\sigma_p,\mu_p)$. For a given $\mu_p$ the investor prefers the smaller $\sigma_p$, and for a given $\sigma_p$ the larger $\mu_p$. The upper-left boundary of attainable portfolios, starting at the minimum-variance portfolio, is the **efficient frontier**, and it is found by minimising $w^{\top}\Sigma w$ subject to $w^{\top}\mu=m$ and $w^{\top}\mathbf 1=1$, a quadratic programme solved by Lagrange multipliers. Portfolios below the minimum-variance point are inefficient because a higher return is available at the same risk.

```python
mu = (0.12, 0.07); sd = (0.20, 0.10); rho = 0.3
cov = rho * sd[0] * sd[1]
for w in (0, 0.25, 0.5, 0.75, 1):
    m = w * mu[0] + (1 - w) * mu[1]
    v = (w * sd[0]) ** 2 + ((1 - w) * sd[1]) ** 2 + 2 * w * (1 - w) * cov
    print(f"{w:4.2f} {m:6.4f} {v ** 0.5:6.4f}")
```

Plotting $\sigma_p$ against $\mu_p$ for $w$ from 0 to 1 traces a curve bending to the left of the straight line joining the two assets, and its leftmost point lies at about $w=0.105$.

### The risk-free asset, the CML and CAPM

Add a risk-free asset with return $r_f$. Mixing it with a risky portfolio of volatility $\sigma$ and mean $\mu$ gives a straight line in the $(\sigma,\mu)$ plane with slope $(\mu-r_f)/\sigma$, the **Sharpe ratio**. The steepest such line touches the frontier at the **tangency portfolio**. If every investor uses the same expectations, the tangency portfolio is the market portfolio, and the line is the **capital market line** (CML),

$$\mu_p=r_f+\frac{\mu_m-r_f}{\sigma_m}\,\sigma_p.$$

For an individual asset, only its contribution to market risk is rewarded. Define its **beta**

$$\beta_i=\frac{\mathrm{Cov}(R_i,R_m)}{\mathrm{Var}(R_m)}=\frac{\rho_{im}\sigma_i}{\sigma_m}.$$

The **CAPM** states that the expected return is

$$E[R_i]=r_f+\beta_i\,(E[R_m]-r_f).$$

The term $E[R_m]-r_f$ is the **market risk premium**. The slope $\beta_i$ is also the regression coefficient of $R_i$ on $R_m$, and by construction beta is linear over portfolios. The CAPM is a statement of equilibrium, not an arbitrage identity, and it rests on strong assumptions: all investors are mean-variance optimisers, share identical beliefs and borrow and lend at $r_f$.

### Value at risk

Variance treats gains and losses alike; a risk manager asks instead "how much can I lose?". The **value at risk** $\mathrm{VaR}_{\alpha}$ over a horizon is the loss $\ell$ such that the probability of a larger loss is $1-\alpha$. If returns are normal with mean approximately zero and volatility $\sigma_h$ over the horizon, and the portfolio is worth $V$,

$$\mathrm{VaR}_{\alpha}=z_{\alpha}\,\sigma_h\,V, \qquad z_{0.95}=1.645,\; z_{0.99}=2.326,$$

and volatility scales with the square root of time, $\sigma_h=\sigma_{\text{annual}}\sqrt{h/252}$ for $h$ trading days. VaR is a quantile, so it says nothing about the size of losses beyond it, and it is not **subadditive** in general: the VaR of a combination can exceed the sum of VaRs, which violates the idea that diversification should reduce risk. The expected shortfall (the mean loss beyond the VaR) repairs that defect.

## Key Ideas

- **Portfolio variance**: $\sigma_p^{2}=\sum_{i,j}w_iw_j\sigma_{ij}=w^{\top}\Sigma w$; it is below the weighted average of variances unless $\rho=1$.
- **Minimum variance (two assets)**: $w^{*}=(\sigma_2^{2}-\sigma_{12})/(\sigma_1^{2}+\sigma_2^{2}-2\sigma_{12})$.
- **Diversification**: $\sigma_p^{2}=\sigma^{2}[1/n+(1-1/n)\rho]\to\rho\sigma^{2}$; systematic risk remains.
- **CAPM**: $E[R_i]=r_f+\beta_i(E[R_m]-r_f)$ with $\beta_i=\mathrm{Cov}(R_i,R_m)/\mathrm{Var}(R_m)$.
- **VaR**: $z_{\alpha}\sigma_hV$ under normality; scales with $\sqrt h$ and ignores the tail beyond the quantile.

## Worked Examples

### Example 1 — Two assets and the minimum-variance mix

Asset A has $\mu=12\%$, $\sigma=20\%$; asset B has $\mu=7\%$, $\sigma=10\%$; the correlation is $0.3$. Find the 50:50 portfolio and the minimum-variance portfolio.

**Solution.** The covariance is $\sigma_{AB}=0.3\times0.20\times0.10=0.006$. For 50:50: $\mu_p=9.5\%$ and

$$\sigma_p^{2}=0.25(0.04)+0.25(0.01)+2(0.25)(0.006)=0.0100+0.0025+0.0030=0.0155,$$

so $\sigma_p=12.45\%$, below the average volatility of 15%. For the minimum, $w_A^{*}=(0.01-0.006)/(0.04+0.01-0.012)=0.004/0.038=0.1053$. The variance is $0.1053^{2}(0.04)+0.8947^{2}(0.01)+2(0.1053)(0.8947)(0.006)=0.000443+0.008005+0.001130=0.009579$, so $\sigma_p=9.79\%$ with $\mu_p=7.53\%$. This is lower risk than B alone (10%) and only 0.5 points more return, so holding some of the riskier A reduces risk. The Sharpe ratios at $r_f=6.5\%$ are $0.275$ for A and $0.05$ for B.

### Example 2 — How many stocks are enough?

Stocks have volatility 20% each and pairwise correlation 0.3. Find the volatility of an equal-weight portfolio for $n=1,5,10,50$ and in the limit.

**Solution.** From $\sigma_p=\sigma\sqrt{1/n+(1-1/n)\rho}$: for $n=1$, 20.0%; $n=5$, $20\sqrt{0.2+0.8(0.3)}=20\sqrt{0.44}=13.27\%$; $n=10$, $20\sqrt{0.1+0.27}=12.17\%$; $n=50$, $20\sqrt{0.02+0.294}=11.21\%$; as $n\to\infty$, $20\sqrt{0.3}=10.95\%$. Most of the gain is achieved with about ten stocks, and 40 additional stocks buy only one more percentage point. Of a single stock's variance of 0.04, the systematic part is $0.3\times0.04=0.012$ (30%) and the diversifiable part is $0.7\times0.04=0.028$ (70%); only the latter disappears.

### Example 3 — CAPM required return and VaR

(a) A stock has volatility 27% and correlation 0.8 with the market, whose volatility is 18%. With $r_f=6.5\%$ and $E[R_m]=12\%$, find its beta and the required return. (b) A ₹2 crore portfolio has annual volatility 18%. Find the 1-day 99% VaR and the 10-day VaR.

**Solution.** (a) $\beta=0.8\times0.27/0.18=1.2$, and $E[R]=6.5\%+1.2(12\%-6.5\%)=6.5\%+6.6\%=13.1\%$. (b) Daily volatility is $18\%/\sqrt{252}=1.1339\%$. Then $\mathrm{VaR}_{99\%}=2.326\times0.011339\times2{,}00{,}00{,}000=₹5{,}27{,}500$ (about ₹5.27 lakh), and over 10 days, multiplying by $\sqrt{10}=3.1623$, VaR $=₹16.68$ lakh. On one day in a hundred, the portfolio is expected to lose at least ₹5.27 lakh, under the model's assumptions.

## Common Misconceptions

- **"Diversification eliminates risk."** It eliminates only idiosyncratic risk; the market risk floor $\rho\sigma^{2}$ remains, and in crises correlations rise toward 1.
- **"Beta measures total volatility."** Beta measures sensitivity to the market; a very volatile stock uncorrelated with the market has beta near zero.
- **"A negative-correlation asset must have a low return."** Hedging assets can carry a modest or even negative expected return and still reduce risk enough to be worth holding.
- **"VaR is the maximum possible loss."** It is a quantile; the loss exceeds it on $1-\alpha$ of occasions, and its size is not bounded by the VaR.
- **"CAPM beta from the past predicts the future exactly."** Estimated betas are noisy and change over time; the CAPM is an equilibrium model, not a law.

## Connections

- Portfolio variance $w^{\top}\Sigma w$ is a quadratic form in the covariance matrix, which is symmetric positive semi-definite, as in Linear Algebra (Lessons m2-l3 and m3-l3); its diagonalisation gives principal components of market risk.
- Minimum variance subject to constraints is a quadratic programme, an extension of the linear programmes of Operations Research (Lesson m1-l1).
- The second-derivative test that shows $w^{*}$ is a minimum is the maxima-and-minima test of Differential Calculus (Lesson m3-l2), applied to the quadratic $\sigma_p^{2}(w)$.
- The square-root scaling of volatility with time, $\sigma\sqrt{h}$, is the same root-$N$ law as the $\sqrt N$ counting uncertainty of Nuclear Physics (Lesson m2-l2), and the Sharpe ratio is a signal-to-noise ratio like $N/\sqrt N$ there.
- Mutual-fund factsheets in India report beta, standard deviation and Sharpe ratio, exactly the quantities of this lesson.

## Quick Check

1. Show that $\sigma_p\le w_1\sigma_1+w_2\sigma_2$ and state when equality holds.
2. Two assets have equal volatility $15\%$ and $\rho=0$. Find the minimum-variance weights and the portfolio volatility.
3. For $n$ equally weighted stocks with $\sigma=25\%$ and $\rho=0.4$, find the volatility for $n=20$ and in the limit.
4. A stock has $\beta=0.7$, $r_f=6\%$ and $E[R_m]=11\%$. Find its required return.
5. A portfolio worth ₹50 lakh has daily volatility 1%. Find the 1-day 95% VaR and explain what it does not tell you.

## Takeaway

- Portfolio return is linear in the weights but portfolio variance depends on covariances, which is why diversification works.
- The efficient frontier collects the portfolios with the best return for each risk; with a risk-free asset the best mix lies on the capital market line.
- Only systematic risk is rewarded: $E[R_i]=r_f+\beta_i(E[R_m]-r_f)$.
- VaR summarises a loss quantile as $z_{\alpha}\sigma_hV$ but ignores the tail beyond it and can fail to be subadditive.
- Both volatility and the normal-return assumption return in Module 3, where they define, and later limit, option pricing models.
