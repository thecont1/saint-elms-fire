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
lessonId: financial-mathematics-m3-l1
lessonName: Binomial Trees, No-Arbitrage and Risk-Neutral Pricing
lessonNumber: 7
moduleNumber: 3
semesterNumber: 6
difficulty: advanced
estimatedStudyMinutes: 55
releaseOrder: 7
prerequisites:
  - financial-mathematics-m1-l1
  - financial-mathematics-m2-l1
  - financial-mathematics-m2-l3
learningObjectives:
  - Define European call and put options, draw their payoffs and derive put-call parity by a no-arbitrage argument.
  - Price a European option in a one-step binomial model by constructing a replicating portfolio and show that the price equals a discounted expectation under the risk-neutral probability.
  - Extend the method to several steps by backward induction and state why the real-world probability does not enter the price.
  - Relate the binomial parameters $u$ and $d$ to volatility and describe convergence to the Black–Scholes price.
concepts:
  - European call and put payoffs
  - Arbitrage
  - Replicating portfolio
  - Risk-neutral probability
  - Binomial tree and backward induction
  - Put-call parity
tags:
  - mathematics
  - financial-mathematics
  - binomial-model
  - risk-neutral-pricing
sourceType: authored-courseware
status: in-review
assessmentHints:
  - derivation
  - problem-solving
  - computational
  - conceptual
***

# Binomial Trees, No-Arbitrage and Risk-Neutral Pricing

## Overview

A derivative is a contract whose value depends on another asset, and the commonest is the option: the right, but not the obligation, to buy or sell an asset at a fixed price. How should such a right be priced when the future value of the asset is uncertain? The surprising answer, due to Cox, Ross and Rubinstein in its simplest form, is that for a derivative that can be replicated by trading the underlying asset and a bank account, the price is fixed by the absence of arbitrage, with no reference to the investors' beliefs about whether the asset will rise or fall. This lesson shows that in the binomial model, where the asset can move to only two values in each period, and derives the central device of modern finance: the risk-neutral probability. The same argument carries over to continuous time in the Black–Scholes model of Lesson m3-l2.

## Learning Path

- **What you should already know**: discounting and the risk-free rate (Lessons m1-l1 and m2-l1); expectation of a discrete random variable; the idea that portfolio value is linear in holdings (Lesson m2-l3).
- **What this lesson adds**: option payoffs; arbitrage; replication; risk-neutral probability; backward induction on a tree; put-call parity; convergence to a continuous limit.
- **What later lessons this will unlock**: Brownian motion, geometric Brownian motion and the Black–Scholes formula (Lesson m3-l2); Monte Carlo pricing and the limits of the models (Lesson m3-l3).

## Core Explanation

### Options and payoffs

A **European call** with strike $K$ and expiry $T$ gives the holder the right to buy one unit of the underlying at price $K$ on date $T$. If the asset price at expiry is $S_T$, the payoff is $\max(S_T-K,0)=(S_T-K)^{+}$. A **European put** gives the right to sell at $K$ and has payoff $(K-S_T)^{+}$. The payoff of the call is zero until $S_T$ passes $K$ and then rises with unit slope, a "hockey stick"; the put mirrors it. An option is a bet with limited downside: the holder cannot lose more than the premium paid at the start.

### Arbitrage and put-call parity

An **arbitrage** is a strategy that costs nothing (or yields cash) now, can never lose, and has a positive chance of profit. Markets in which participants can trade freely and quickly remove such opportunities, so pricing models assume none exists. A first consequence needs no model of the asset at all. Compare two portfolios at time 0: a call plus a bond that pays $K$ at $T$, worth $C+Kv_T$ where $v_T=(1+r)^{-T}$; and a put plus one share, worth $P+S_0$. At expiry the first is worth $(S_T-K)^{+}+K$ and the second $(K-S_T)^{+}+S_T$. Both equal $\max(S_T,K)$. Equal payoffs in every state imply equal prices:

$$C-P=S_0-K(1+r)^{-T}.$$

This is **put-call parity**; with continuous compounding the discount factor becomes $e^{-rT}$. It lets us price a put once we have priced the call.

### The one-step binomial model

Let the asset be worth $S_0$ now and, after one period, either $S_u=uS_0$ (up) or $S_d=dS_0$ (down), with $d<u$. A risk-free account grows by the factor $1+r$ per period. A derivative pays $V_u$ in the up state and $V_d$ in the down state. We **replicate** it with a portfolio of $\Delta$ shares and a bank deposit $B$ (negative for borrowing) chosen so that the portfolio matches the payoff in both states:

$$\Delta uS_0+B(1+r)=V_u, \qquad \Delta dS_0+B(1+r)=V_d.$$

Subtracting gives $\Delta=\dfrac{V_u-V_d}{(u-d)S_0}$. The derivative must cost what the replicating portfolio costs, $V_0=\Delta S_0+B$; any other price allows an arbitrage by trading one against the other. Substituting $B$ from the first equation and simplifying,

$$V_0=\frac{1}{1+r}\Big[qV_u+(1-q)V_d\Big], \qquad q=\frac{(1+r)-d}{u-d}.$$

For the model itself to be free of arbitrage we need $d<1+r<u$. If $u\le 1+r$ the stock can never beat the bank, so selling it short and depositing the proceeds is an arbitrage; if $d\ge 1+r$, borrowing to buy the stock is one. Under the condition, $0<q<1$, so $q$ behaves as a probability. It is the **risk-neutral probability**.

### The risk-neutral world

The formula $V_0=\frac{1}{1+r}E_{q}[V_1]$ says: the price is the discounted expected payoff when the up-move has probability $q$ rather than its real-world probability $p$. The same $q$ prices the stock itself:

$$E_q[S_1]=qS_u+(1-q)S_d=S_0(1+r),$$

so under $q$ the asset earns the risk-free rate on average, as if every investor were indifferent to risk, hence the name. The real probability $p$ never appears: investors who disagree about $p$, or about how risk-averse they should be, agree on the price, because the price is the cost of the replication. The risk-neutral world is a computational device, not a claim about how people behave.

### Many periods and backward induction

For $N$ periods, build the tree of asset prices $S_0u^{j}d^{k-j}$ after $k$ steps. Start at the expiry nodes, where the value is the payoff, and apply the one-step formula repeatedly backwards to obtain the value at each earlier node and finally at time 0. Because $q$ is the same at every node, the whole calculation condenses to a binomial sum

$$V_0=(1+r)^{-N}\sum_{j=0}^{N}\binom{N}{j}q^{j}(1-q)^{N-j}\,\Phi\!\left(S_0u^{j}d^{N-j}\right),$$

where $\Phi$ is the payoff function. The replicating ratio $\Delta$ changes from node to node: holding the option means continuously adjusting the hedge, a **dynamic hedge**.

### Matching volatility and the continuous limit

To use the tree as a model of a real asset over time $T$ with $N$ steps of length $\Delta t=T/N$, choose, following Cox–Ross–Rubinstein,

$$u=e^{\sigma\sqrt{\Delta t}}, \qquad d=\frac{1}{u}, \qquad q=\frac{e^{r\Delta t}-d}{u-d},$$

so that the variance of the log return per step is approximately $\sigma^{2}\Delta t$. As $N\to\infty$ the distribution of $\ln S_T$ tends to a normal by the central limit theorem, and the tree price converges to the Black–Scholes price of Lesson m3-l2.

```python
from math import exp, sqrt

def crr_call(S, K, r, sigma, T, n):
    dt = T / n
    u = exp(sigma * sqrt(dt)); d = 1 / u
    q = (exp(r * dt) - d) / (u - d); disc = exp(-r * dt)
    v = [max(S * u**j * d**(n - j) - K, 0) for j in range(n + 1)]
    for _ in range(n):
        v = [disc * (q * v[j + 1] + (1 - q) * v[j]) for j in range(len(v) - 1)]
    return v[0]

for n in (1, 2, 10, 50, 200, 1000):
    print(n, round(crr_call(100, 105, 0.05, 0.20, 1.0, n), 4))
```

For $S_0=100$, $K=105$, $r=5\%$, $\sigma=20\%$ and $T=1$ the prices oscillate and settle: 9.4156 for $n=1$, 8.0812 for 2, 8.1763 for 10, 8.0143 for 50 and 8.0211 for 1000, approaching 8.0214.

## Key Ideas

- **Arbitrage-free pricing**: a derivative's price is the cost of the portfolio that replicates its payoff.
- **Risk-neutral probability**: $q=(1+r-d)/(u-d)$, valid when $d<1+r<u$; price $=$ discounted $q$-expectation of the payoff.
- **Probability independence**: the real-world probability $p$ does not enter the price.
- **Put-call parity**: $C-P=S_0-K(1+r)^{-T}$, model-free.
- **Binomial limit**: with $u=e^{\sigma\sqrt{\Delta t}}$, $d=1/u$, tree prices converge to Black–Scholes.

## Worked Examples

### Example 1 — A one-step call and its hedge

A stock is ₹100 now and in one year will be ₹120 or ₹90. The risk-free rate is 5%. Price a call with strike ₹100 and construct the replicating portfolio. What if the call trades at ₹10.50?

**Solution.** The payoffs are $V_u=20$ and $V_d=0$. The risk-neutral probability is $q=(1.05-0.90)/(1.20-0.90)=0.5$, so

$$V_0=\frac{0.5(20)+0.5(0)}{1.05}=\frac{10}{1.05}=₹9.5238.$$

By replication, $\Delta=(20-0)/(120-90)=2/3$ share, and $B$ solves $\tfrac23(90)+1.05B=0$, so $B=-60/1.05=-₹57.14$: buy two-thirds of a share for ₹66.67 and borrow ₹57.14, a net cost of ₹9.52. The portfolio pays $80+(-60)=20$ in the up state and $60-60=0$ in the down state, matching the call. If the call trades at ₹10.50, sell it and buy the replicating portfolio: this brings in $10.50-9.5238=₹0.9762$ now and is perfectly hedged, so it is an arbitrage.

### Example 2 — Two steps, put-call parity

With the same $u=1.2$, $d=0.9$ and $r=5\%$ per step, price a two-step call and a two-step put, each with strike ₹100.

**Solution.** Again $q=0.5$. The terminal prices are $144$, $108$ and $81$, with call payoffs $44$, $8$, $0$ and put payoffs $0$, $0$, $19$. The path probabilities are $0.25$, $0.5$ and $0.25$, so

$$C_0=\frac{0.25(44)+0.5(8)+0.25(0)}{1.05^{2}}=\frac{15}{1.1025}=₹13.605, \qquad P_0=\frac{0.25(19)}{1.1025}=₹4.308.$$

Backward induction agrees: the up node is worth $(0.5\cdot44+0.5\cdot8)/1.05=24.76$, the down node $(0.5\cdot8)/1.05=3.81$, and $C_0=(0.5\cdot24.76+0.5\cdot3.81)/1.05=13.605$. The hedge ratio at time 0 is $(24.76-3.81)/30=0.698$. Parity check: $C-P=13.605-4.308=9.297$ and $S_0-K/1.05^{2}=100-90.703=9.297$.

### Example 3 — Why the real probability is irrelevant

In Example 1 suppose investors believe the stock rises with probability $p=0.7$. What is the expected discounted payoff, and why is it not the price?

**Solution.** Using $p$, the expected payoff is $0.7\times20=14$ and its discount at 5% is $14/1.05=₹13.33$, far above the arbitrage-free price of ₹9.52. It is not the price because 5% is not the right discount rate for a risky payoff: the option is riskier than a bond and an investor would demand a higher return, so the correct "risk-adjusted" rate is unknown and varies with $p$. The replication argument removes the need for it. Indeed under $p$ the stock's expected value is $0.7(120)+0.3(90)=111$, a growth of 11%, whereas under $q$ it is $105$, growth of 5%. For use in a monthly tree with $\sigma=20\%$ the parameters are $u=e^{0.2\sqrt{1/12}}=1.0594$, $d=0.9439$ and $q=(1.004175-0.9439)/(1.0594-0.9439)=0.5217$.

## Common Misconceptions

- **"The risk-neutral probability is the chance the stock rises."** It is a pricing weight chosen so that the stock earns the risk-free rate; the real probability is different.
- **"An option's price depends on the expected return of the stock."** Not at all: the expected return enters neither the binomial nor the Black–Scholes price, only the volatility does.
- **"A call is worth the discounted expected payoff under real-world probabilities."** This uses the wrong discount rate; only the $q$-expectation discounted at $r$ is correct.
- **"Arbitrage pricing assumes investors are risk-neutral."** It assumes only that arbitrage is impossible; risk-neutrality is a computational convenience.
- **"The hedge is set once."** The hedge ratio $\Delta$ changes with the asset price and the time, so the replicating portfolio must be rebalanced continually, which in reality costs money.

## Connections

- The risk-neutral expectation $\sum\binom{N}{j}q^{j}(1-q)^{N-j}(\cdot)$ is the binomial distribution; its limit is the normal distribution of the central limit theorem, which also governs counting statistics in Nuclear Physics (Lesson m2-l2).
- Replication is a linear-algebra statement: two equations in two unknowns $(\Delta,B)$, solvable when the payoff vectors of stock and bond are independent, as in Linear Algebra (Lesson m1-l2).
- The discount factor $e^{-rT}$ is the same factor as in Lesson m1-l1, and the backward recursion is analogous to the balance recursion of an amortising loan in Lesson m1-l3.
- Backward induction on a tree is dynamic programming, as in shortest-path calculations in Operations Research (Lesson m2-l5).
- Indian exchange-traded options on the Nifty 50 index are European, and their premiums are quoted by the Black–Scholes model, which is the limit of this one.

## Quick Check

1. Derive put-call parity for a non-dividend-paying stock and use it to find $P$ when $C=8$, $S_0=100$, $K=100$ and $r=5\%$ for $T=1$.
2. State the no-arbitrage condition on $u$, $d$ and $r$ and explain what arbitrage exists if $u=1.04$ and $r=5\%$.
3. A stock moves from ₹50 to ₹55 or ₹45 and $r=4\%$. Price a call with strike ₹50.
4. Why does the price not depend on the real-world probability of an up move?
5. Compute $u$, $d$ and $q$ for $\sigma=30\%$, $r=6\%$, $\Delta t=0.25$.

## Takeaway

- A derivative that can be replicated has a unique price: the cost of the replicating portfolio.
- That price equals the discounted expectation of the payoff under the risk-neutral probability $q$.
- The real-world probability and the stock's expected return do not matter; volatility does.
- A multi-step tree is solved by backward induction, and with $u=e^{\sigma\sqrt{\Delta t}}$ it converges to Black–Scholes.
- Put-call parity ties calls and puts together without any model.
