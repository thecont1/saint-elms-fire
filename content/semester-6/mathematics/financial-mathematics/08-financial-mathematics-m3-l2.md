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
lessonId: financial-mathematics-m3-l2
lessonName: Brownian Motion, Itô's Lemma and the Black–Scholes Formula
lessonNumber: 8
moduleNumber: 3
semesterNumber: 6
difficulty: advanced
estimatedStudyMinutes: 60
releaseOrder: 8
prerequisites:
  - financial-mathematics-m3-l1
  - differential-calculus-m3-l1
  - differential-equations-m1-l2
learningObjectives:
  - Define Brownian motion, state its key properties and explain why $(dW)^{2}=dt$ makes stochastic calculus differ from ordinary calculus.
  - Write the geometric Brownian motion model for an asset price, solve it with Itô's lemma and compute the mean, median and probabilities of the lognormal price.
  - State the Black–Scholes assumptions and formula, check it numerically and explain its link to risk-neutral valuation.
  - Define and compute the Greeks delta, gamma, vega, theta and rho, and use them to hedge and to estimate price changes.
concepts:
  - Brownian motion
  - Geometric Brownian motion
  - Itô's lemma
  - Black–Scholes formula
  - Delta and gamma
  - Vega and theta
tags:
  - mathematics
  - financial-mathematics
  - black-scholes
  - brownian-motion
sourceType: authored-courseware
status: in-review
assessmentHints:
  - derivation
  - problem-solving
  - computational
  - conceptual
***

# Brownian Motion, Itô's Lemma and the Black–Scholes Formula

## Overview

The binomial tree of Lesson m3-l1 becomes a continuous model when the time step shrinks to zero. The random walk converges to Brownian motion, the asset price to a lognormal geometric Brownian motion, and the option price to the Black–Scholes formula, the most famous result in financial mathematics. Because Brownian paths are continuous but nowhere differentiable, ordinary calculus fails and must be replaced by Itô calculus, in which a small random increment has size $\sqrt{dt}$ rather than $dt$. We state Itô's lemma, apply it to solve the asset-price model, outline the hedging argument that leads to the Black–Scholes equation and formula, and close with the Greeks, the partial derivatives that tell a trader how an option's value responds to its inputs.

## Learning Path

- **What you should already know**: the binomial model, replication and risk-neutral pricing (Lesson m3-l1); Taylor expansion in two variables (Differential Calculus, Lesson m3-l1); linear first-order ODEs (Differential Equations, Lesson m1-l2); the normal distribution.
- **What this lesson adds**: Brownian motion, Itô's lemma, geometric Brownian motion, the Black–Scholes equation and formula, and the Greeks.
- **What later lessons this will unlock**: Monte Carlo simulation of price paths and the study of where the model fails (Lesson m3-l3).

## Core Explanation

### Brownian motion

A **standard Brownian motion** (Wiener process) $W_t$ satisfies: $W_0=0$; its paths are continuous; increments over disjoint intervals are independent; and $W_t-W_s\sim N(0,t-s)$ for $t>s$. It is the limit of the symmetric random walk with steps $\pm\sqrt{\Delta t}$ taken every $\Delta t$: after $T/\Delta t$ steps the variance is $T$, and by the central limit theorem the sum is normal. Three consequences matter. Variance grows linearly, so the standard deviation grows as $\sqrt t$. Paths have infinite length and no tangent anywhere. And the increment $dW$ over a tiny interval $dt$ has size $\sqrt{dt}$, so its square has mean $dt$ and negligible variance; one writes

$$(dW)^{2}=dt, \qquad dW\,dt=0, \qquad (dt)^{2}=0.$$

The first rule is the one that changes calculus: the second-order term in a Taylor expansion cannot be dropped.

### Itô's lemma

Let $X$ satisfy $dX=a\,dt+b\,dW$ and let $f(t,X)$ be smooth. Expanding to second order,

$$df=f_t\,dt+f_X\,dX+\tfrac12 f_{XX}(dX)^{2}+\cdots,$$

where $(dX)^{2}=b^{2}(dW)^{2}=b^{2}dt$ and all other products are negligible. Substituting $dX$ gives **Itô's lemma**:

$$df=\Big(f_t+a f_X+\tfrac12 b^{2}f_{XX}\Big)dt+b\,f_X\,dW.$$

The extra term $\tfrac12 b^{2}f_{XX}$ has no analogue in ordinary calculus; it is the price of the roughness of Brownian paths. This lemma is stated here with a heuristic derivation; a rigorous proof requires the stochastic integral.

### Geometric Brownian motion

The standard model for a stock price assumes that the proportional change in price in time $dt$ has a deterministic drift and a random part:

$$dS=\mu S\,dt+\sigma S\,dW,$$

with drift $\mu$ and volatility $\sigma$. Apply Itô's lemma to $f=\ln S$, with $a=\mu S$, $b=\sigma S$, $f_S=1/S$, $f_{SS}=-1/S^{2}$:

$$d\ln S=\Big(\mu-\tfrac12\sigma^{2}\Big)dt+\sigma\,dW.$$

The right side has constant coefficients, so integrating gives

$$S_T=S_0\exp\!\Big[\big(\mu-\tfrac12\sigma^{2}\big)T+\sigma W_T\Big],$$

and $\ln S_T$ is normal with mean $\ln S_0+(\mu-\tfrac12\sigma^{2})T$ and variance $\sigma^{2}T$: $S_T$ is **lognormal**, never negative. Its mean is $E[S_T]=S_0e^{\mu T}$, since $E[e^{\sigma W_T}]=e^{\sigma^{2}T/2}$, while its median is $S_0e^{(\mu-\sigma^{2}/2)T}$, lower. The probability that $S_T>K$ is $N\!\big[(\ln(S_0/K)+(\mu-\tfrac12\sigma^{2})T)/(\sigma\sqrt T)\big]$ where $N$ is the standard normal distribution function.

### The Black–Scholes equation

Suppose the option value is $V(t,S)$. Form a portfolio short one option and long $\Delta=V_S$ shares. By Itô, $dV=(V_t+\mu SV_S+\tfrac12\sigma^{2}S^{2}V_{SS})dt+\sigma SV_S\,dW$, so the portfolio $\Pi=-V+V_SS$ has change

$$d\Pi=-\Big(V_t+\tfrac12\sigma^{2}S^{2}V_{SS}\Big)dt,$$

in which both the random term and the drift $\mu$ have cancelled. A riskless portfolio must earn the risk-free rate, $d\Pi=r\Pi\,dt=r(-V+SV_S)\,dt$, and equating the two expressions gives the **Black–Scholes equation**

$$V_t+\tfrac12\sigma^{2}S^{2}V_{SS}+rSV_S-rV=0.$$

The assumptions behind it are: GBM with constant $\sigma$ and $r$; continuous, frictionless trading with no transaction costs; no arbitrage; short selling allowed; no dividends. With the terminal condition $V(T,S)=(S-K)^{+}$, the solution for the **European call** is

$$C=S\,N(d_1)-Ke^{-rT}N(d_2), \qquad d_1=\frac{\ln(S/K)+(r+\tfrac12\sigma^{2})T}{\sigma\sqrt T}, \quad d_2=d_1-\sigma\sqrt T,$$

and for the put, $P=Ke^{-rT}N(-d_2)-S\,N(-d_1)$, consistent with put-call parity. The drift $\mu$ has disappeared, just as $p$ did in the tree. Equivalently, $C=e^{-rT}E_{q}[(S_T-K)^{+}]$, where under the risk-neutral measure the drift of $S$ is $r$ instead of $\mu$; $N(d_2)$ is the risk-neutral probability of exercise.

### The Greeks

The **Greeks** are the sensitivities of the option value $V$. For a call:

| Greek | Definition | Formula | Meaning |
|---|---|---|---|
| Delta | $\partial V/\partial S$ | $N(d_1)$ | shares needed to hedge |
| Gamma | $\partial^{2}V/\partial S^{2}$ | $\varphi(d_1)/(S\sigma\sqrt T)$ | how fast delta changes |
| Vega | $\partial V/\partial\sigma$ | $S\varphi(d_1)\sqrt T$ | sensitivity to volatility |
| Theta | $\partial V/\partial t$ | $-S\varphi(d_1)\sigma/(2\sqrt T)-rKe^{-rT}N(d_2)$ | time decay |
| Rho | $\partial V/\partial r$ | $KTe^{-rT}N(d_2)$ | sensitivity to rates |

where $\varphi(x)=e^{-x^{2}/2}/\sqrt{2\pi}$. The Black–Scholes equation itself links them: $\Theta+\tfrac12\sigma^{2}S^{2}\Gamma+rS\Delta=rV$. Delta plays the role of duration and gamma that of convexity in Lesson m2-l2: for a small move, $\Delta V\approx\Delta\,\delta S+\tfrac12\Gamma(\delta S)^{2}$. A **delta-neutral** position holds $-\Delta$ shares per option; gamma measures how often it must be rebalanced.

```python
from math import log, sqrt, exp, erf, pi

N   = lambda x: 0.5 * (1 + erf(x / sqrt(2)))
phi = lambda x: exp(-x * x / 2) / sqrt(2 * pi)

def black_scholes_call(S, K, r, sigma, T):
    d1 = (log(S / K) + (r + 0.5 * sigma**2) * T) / (sigma * sqrt(T))
    d2 = d1 - sigma * sqrt(T)
    price = S * N(d1) - K * exp(-r * T) * N(d2)
    return price, N(d1), phi(d1) / (S * sigma * sqrt(T)), S * phi(d1) * sqrt(T)

print(black_scholes_call(100, 105, 0.05, 0.20, 1.0))
```

The program returns the price 8.0214, delta 0.5422, gamma 0.01984 and vega 39.67. Plotting the call price against $S$ for several maturities shows a smooth curve above the hockey-stick payoff, converging to the payoff as $T\to0$; the gap between them is the time value. Inverting the price for $\sigma$ by bisection, as in Lesson m1-l3, gives the **implied volatility**.

## Key Ideas

- **Brownian motion**: independent normal increments with variance $t-s$; $(dW)^{2}=dt$.
- **Itô's lemma**: $df=(f_t+af_X+\tfrac12b^{2}f_{XX})dt+bf_X\,dW$; the second-order term survives.
- **GBM**: $dS=\mu S\,dt+\sigma S\,dW$ gives lognormal $S_T=S_0\exp[(\mu-\sigma^{2}/2)T+\sigma W_T]$.
- **Black–Scholes**: $C=SN(d_1)-Ke^{-rT}N(d_2)$; drift $\mu$ is absent, price is the risk-neutral discounted expectation.
- **Greeks**: delta, gamma, vega, theta and rho are partial derivatives that quantify risk and hedging.

## Worked Examples

### Example 1 — Lognormal statistics

A stock has $S_0=₹100$, $\mu=12\%$, $\sigma=20\%$ and $T=1$ year under GBM. Find the mean, median and the probability that the price exceeds ₹100.

**Solution.** The mean is $E[S_1]=100e^{0.12}=₹112.75$. The median is $100e^{0.12-0.02}=100e^{0.10}=₹110.52$, below the mean because the lognormal distribution is skewed right. The probability that $S_1>100$ is $N\big[(0.10)/0.20\big]=N(0.5)=0.6915$. The standard deviation of $S_1$ is $100\sqrt{e^{0.24}(e^{0.04}-1)}=₹22.78$.

### Example 2 — Pricing a call and a put

Price a one-year European call and put with $S=100$, $K=105$, $r=5\%$ and $\sigma=20\%$.

**Solution.** $d_1=[\ln(100/105)+(0.05+0.02)(1)]/0.20=[-0.04879+0.07]/0.20=0.10605$, and $d_2=0.10605-0.20=-0.09395$. From the normal table $N(d_1)=0.54223$ and $N(d_2)=0.46257$. The discounted strike is $105e^{-0.05}=99.879$. Then

$$C=100(0.54223)-99.879(0.46257)=54.223-46.201=₹8.02.$$

By parity $P=C-S+Ke^{-rT}=8.0214-100+99.8791=₹7.90$. Direct computation gives the same: $99.879\times0.53743-100\times0.45777=53.678-45.777=7.90$. The risk-neutral probability that the call finishes in the money is $N(d_2)=46.3\%$. Compare the binomial prices of Lesson m3-l1, which converge to 8.0214.

### Example 3 — Greeks and hedging

For the call of Example 2 find the Greeks, and estimate the effect of a ₹2 rise in the stock, a one-point rise in volatility, and one day of time decay.

**Solution.** $\varphi(d_1)=e^{-0.00562}/2.5066=0.39671$. Delta is $0.5422$; gamma is $0.39671/(100\times0.2)=0.01984$; vega is $100\times0.39671=39.67$ per unit of $\sigma$, that is $0.397$ per volatility point; theta is $-100(0.39671)(0.2)/2-0.05(99.879)(0.46257)=-3.967-2.310=-6.277$ per year, or $-0.0172$ per day; rho is $105(0.95123)(0.46257)=46.20$ per unit of $r$. A ₹2 rise in the stock changes the value by $0.5422(2)+\tfrac12(0.01984)(4)=1.0845+0.0397=₹1.124$, against the exact change $9.1450-8.0214=1.1237$. A one-point rise in $\sigma$ adds about ₹0.40. To hedge a sale of 1,000 calls, hold $542$ shares. Check of the equation: $\Theta+\tfrac12\sigma^{2}S^{2}\Gamma+rS\Delta=-6.277+3.967+2.711=0.401=rV$.

## Common Misconceptions

- **"Black–Scholes predicts where the stock will go."** The price does not involve the drift $\mu$; it values the option relative to the stock, not the stock itself.
- **"Higher volatility lowers the value of a call."** Vega is positive: the call's payoff has limited downside, so greater uncertainty raises its value.
- **"Delta is the probability of exercise."** Delta $N(d_1)$ and the risk-neutral exercise probability $N(d_2)$ are close but different quantities.
- **"Itô's lemma is the chain rule."** There is an extra term $\tfrac12 b^{2}f_{XX}$, which is why $E[S_T]=S_0e^{\mu T}$ but the median uses $\mu-\sigma^{2}/2$.
- **"Volatility is observable."** It is not; implied volatility is the value that makes the formula match a market price, and it differs across strikes.

## Connections

- Brownian motion is the continuum limit of the random walk, the same probabilistic reasoning as the counting of microstates in Thermal Physics and Statistical Mechanics (Lesson m3-l1); its variance grows linearly in time, and the heat equation solved numerically in Mathematics Lab using Python II (Lesson m1-l4) is the Black–Scholes equation after the change of variable $x=\ln S$.
- The solution $S_T=S_0\exp[\cdots]$ is the exponential growth law of Differential Equations (Lesson m1-l2) with a random rate; setting $\sigma=0$ recovers $S_0e^{\mu T}$, the deterministic compound growth of Lesson m1-l1.
- The Greeks are partial derivatives; delta and gamma play the roles of duration and convexity from Lesson m2-l2, and the Taylor expansion in two variables is Differential Calculus (Lesson m3-l1).
- Multiplicative random growth, which produces the lognormal law, is the mirror image of the exponential decay law of Nuclear Physics (Lesson m2-l2), where $\sigma=0$ and the rate is negative.
- Indian index options on the Nifty are priced and hedged with Black–Scholes Greeks; the India VIX is the market's implied volatility.

## Quick Check

1. State Itô's lemma and apply it to $f=S^{2}$ for GBM to find $dS^{2}$.
2. Show that $E[S_T]=S_0e^{\mu T}$ for GBM, given $E[e^{\sigma W_T}]=e^{\sigma^{2}T/2}$.
3. Price a call with $S=50$, $K=50$, $r=4\%$, $\sigma=30\%$ and $T=0.5$.
4. Explain why delta of a call lies between 0 and 1 and tends to 1 deep in the money.
5. For which options is gamma largest and what does this imply for hedging?

## Takeaway

- Brownian motion has increments of size $\sqrt{dt}$, so $(dW)^{2}=dt$ and Itô's lemma includes a second-order term.
- Under GBM the price is lognormal, with mean $S_0e^{\mu T}$ and median $S_0e^{(\mu-\sigma^{2}/2)T}$.
- Black–Scholes follows from delta hedging; the drift disappears and the call price is $SN(d_1)-Ke^{-rT}N(d_2)$.
- The Greeks are derivatives of the price and are the working tools of hedging.
- The model's assumptions, constant volatility and continuous hedging among them, are tested in the final lesson.
