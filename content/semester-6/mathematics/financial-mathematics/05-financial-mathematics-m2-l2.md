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
lessonId: financial-mathematics-m2-l2
lessonName: Duration, Convexity and Interest-Rate Risk
lessonNumber: 5
moduleNumber: 2
semesterNumber: 6
difficulty: intermediate
estimatedStudyMinutes: 55
releaseOrder: 5
prerequisites:
  - financial-mathematics-m2-l1
  - differential-calculus-m2-l3
  - differential-calculus-m3-l1
learningObjectives:
  - Define Macaulay and modified duration, derive modified duration as the proportional price sensitivity $-P'(y)/P$, and compute it for coupon bonds.
  - Define convexity as $P''(y)/P$ and use the second-order Taylor expansion to estimate price changes for large yield moves.
  - Compute duration and convexity of a zero-coupon bond and of a par bond, and use DV01 as a practical risk measure.
  - Construct a duration-matched portfolio to immunise a liability against a parallel shift in yields.
concepts:
  - Macaulay duration
  - Modified duration
  - Convexity
  - Taylor approximation of price change
  - DV01
  - Immunisation
tags:
  - mathematics
  - financial-mathematics
  - duration-convexity
  - interest-rate-risk
sourceType: authored-courseware
status: in-review
assessmentHints:
  - derivation
  - problem-solving
  - computational
  - conceptual
***

# Duration, Convexity and Interest-Rate Risk

## Overview

Bond prices fall when yields rise, but by how much? A risk manager needs a single number that answers the question for every bond and portfolio. That number is duration, which measures the sensitivity of price to the yield, and its refinement convexity, which captures the curvature that duration ignores. Both are derivatives of the price function $P(y)$ from Lesson m2-l1, and the approximation they supply is exactly the second-order Taylor polynomial. Duration also has a second meaning, the average time at which a bond's value is received, which makes it the centre of mass of discounted cash flows. We use the two interpretations to construct a portfolio that is protected against a shift in interest rates, a technique called immunisation.

## Learning Path

- **What you should already know**: bond price as a present value and the YTM (Lesson m2-l1); first and second derivatives and the Taylor expansion to order two (Differential Calculus, Lessons m2-l3 and m3-l1).
- **What this lesson adds**: Macaulay and modified duration, convexity, the two-term price approximation, DV01 and immunisation.
- **What later lessons this will unlock**: the idea of a derivative (sensitivity) as a risk measure, which returns as the Greeks of options (Lesson m3-l2); the quadratic risk measure of portfolio variance (Lesson m2-l3).

## Core Explanation

### Duration as the price sensitivity

Let a bond pay cash flows $C_t$ at times $t$ and be priced at yield $y$ (effective annual):

$$P(y)=\sum_t C_t(1+y)^{-t}.$$

Differentiating term by term,

$$\frac{dP}{dy}=-\sum_t t\,C_t(1+y)^{-t-1}=-\frac{1}{1+y}\sum_t t\,PV_t, \qquad PV_t=C_t(1+y)^{-t}.$$

Dividing by $P$ defines the **Macaulay duration** and the **modified duration**:

$$D=\frac{\sum_t t\,PV_t}{P}, \qquad D_{\mathrm{mod}}=\frac{D}{1+y}=-\frac{1}{P}\frac{dP}{dy}.$$

Because the weights $w_t=PV_t/P$ are positive and sum to 1, $D=\sum t\,w_t$ is the weighted average time to receipt of the cash flows, the centre of mass of the discounted payments on the time axis. It is measured in years. $D_{\mathrm{mod}}$ is the proportional fall in price per unit rise in yield: a bond with $D_{\mathrm{mod}}=4$ loses roughly 4% of its value for a one-point rise in yield. Under continuous compounding with yield $y$ the factor $1/(1+y)$ is absent and $D=-d\ln P/dy$ exactly.

Three facts follow from the definition. A zero-coupon bond has all its weight at maturity, so $D=n$. A coupon bond has $D<n$, because early coupons pull the centre of mass forward. Duration increases with maturity, decreases with the coupon rate and decreases with the yield. For a par bond with annual coupons ($c=y$) the sum collapses to a closed form: $D=\ddot a_{\overline{n}|y}=\dfrac{1+y}{y}\left(1-v^{n}\right)$.

### Convexity

Differentiating again, $P''(y)=\sum_t t(t+1)C_t(1+y)^{-t-2}$, and the **convexity** is the proportional curvature,

$$\mathcal{C}=\frac{P''(y)}{P}=\frac{1}{P(1+y)^{2}}\sum_t t(t+1)\,PV_t.$$

Since every term is positive, $P''>0$: the price-yield curve is convex, bending upward. A zero-coupon bond has $\mathcal C=n(n+1)/(1+y)^{2}$. For the same duration, a bond whose cash flows are more spread out in time has greater convexity.

### The second-order price approximation

By Taylor's theorem about the current yield,

$$P(y+\Delta y)\approx P+P'\Delta y+\tfrac12 P''(\Delta y)^{2},$$

and dividing by $P$ gives

$$\frac{\Delta P}{P}\approx -D_{\mathrm{mod}}\,\Delta y+\tfrac12\,\mathcal C\,(\Delta y)^{2}.$$

The first term is linear and always lowers the price when yields rise; the second is always positive. Hence the linear approximation overstates the fall when yields rise and understates the gain when they fall: convexity is valuable, and an investor will accept a lower yield for a more convex bond. The practical measure **DV01** (dollar value of a basis point; here "rupee value") is $D_{\mathrm{mod}}\,P\times 0.0001$, the rupee change in price for a one-basis-point (0.01%) rise in yield.

```python
def bond_stats(cashflows, y):
    pv = [c / (1 + y) ** t for t, c in cashflows]
    P = sum(pv)
    D = sum(t * p for (t, _), p in zip(cashflows, pv)) / P
    C = sum(t * (t + 1) * p for (t, _), p in zip(cashflows, pv)) / (P * (1 + y) ** 2)
    return P, D, D / (1 + y), C

cf = [(1, 7), (2, 7), (3, 107)]
print(bond_stats(cf, 0.08))
```

Plotting the exact price $P(y)$ with its tangent line at the current yield shows the curve lying above the tangent everywhere, with the gap widening away from the tangency point; that gap is the convexity term.

### Portfolios and immunisation

Duration is linear over portfolios: the duration of a portfolio is the average of the durations of its components, weighted by market value. This allows hedging. An institution (an insurer or pension fund) owes a liability $L$ at date $T$. If it holds assets with present value equal to that of $L$ and duration $T$, then to first order a small parallel shift in yields changes assets and liability by the same amount, since each has the same $P\cdot D_{\mathrm{mod}}$. This is **immunisation**. To protect against the second-order term as well, the asset portfolio should have convexity at least that of the liability, so that for any shift the assets do at least as well. The matching holds only for parallel shifts and must be rebalanced as time passes, because duration changes with the passage of time and with the yield.

## Key Ideas

- **Macaulay duration**: $D=\sum t\,w_t$, the PV-weighted mean time of receipt; $D=n$ for a zero-coupon bond and $D<n$ for coupon bonds.
- **Modified duration**: $D_{\mathrm{mod}}=D/(1+y)=-P'/P$, the proportional price change per unit yield change.
- **Convexity**: $\mathcal C=P''/P=\sum t(t+1)PV_t/[P(1+y)^{2}]>0$.
- **Approximation**: $\Delta P/P\approx -D_{\mathrm{mod}}\Delta y+\tfrac12\mathcal C(\Delta y)^{2}$.
- **Immunisation**: match present value and duration of assets to a liability, and keep asset convexity at least as large.

## Worked Examples

### Example 1 — Duration and convexity of a 3-year bond

Compute $D$, $D_{\mathrm{mod}}$ and $\mathcal C$ for the 3-year 7% annual-coupon bond of Lesson m2-l1 at $y=8\%$.

**Solution.** The present values are $PV_1=7/1.08=6.4815$, $PV_2=7/1.1664=6.0014$ and $PV_3=107/1.259712=84.9400$, so $P=97.4229$. Then $\sum t\,PV_t=6.4815+12.0027+254.8200=273.3042$ and

$$D=\frac{273.3042}{97.4229}=2.8053\ \text{years}, \qquad D_{\mathrm{mod}}=\frac{2.8053}{1.08}=2.5975.$$

For convexity, $\sum t(t+1)PV_t=2(6.4815)+6(6.0014)+12(84.9400)=12.9630+36.0083+1019.2800=1068.2513$, and $\mathcal C=1068.2513/(97.4229\times 1.1664)=1068.2513/113.6359=9.4008$. The DV01 is $2.5975\times 97.4229\times 0.0001=₹0.0253$ per ₹100 face. The duration of 2.81 years is below the maturity of 3, as expected for a coupon bond.

### Example 2 — How good is the approximation?

For the same bond find the price change when the yield rises by 1%, falls by 1%, and rises by 2%, exactly and by the one- and two-term approximations.

**Solution.** Exact prices: at 9% $P=94.9374$ (change $-2.551\%$), at 7% $P=100.0000$ ($+2.645\%$), at 10% $P=92.5394$ ($-5.013\%$). The duration-only estimates are $-2.5975\%$, $+2.5975\%$ and $-5.1951\%$. Adding $\tfrac12\mathcal C(\Delta y)^2$ with $\tfrac12(9.4008)(0.01)^2=0.0470\%$ gives $-2.5505\%$ and $+2.6445\%$, within 0.001 percentage points of the exact values; for $\Delta y=2\%$ the correction is $0.188\%$, giving $-5.0071\%$ against the exact $-5.0126\%$. The first-order estimate errs by 0.047 points for a 1% move but by 0.18 points for 2%, since the error scales as $(\Delta y)^{2}$. As predicted, the linear estimate overstates the loss for rising yields and understates the gain for falling yields.

### Example 3 — Immunising a liability

A fund owes ₹10,00,000 in five years. The current yield is 8%. It can buy 3-year and 10-year zero-coupon bonds. Build an immunised portfolio and test it with a shift to 9%.

**Solution.** The present value of the liability is $10{,}00{,}000/1.08^{5}=10{,}00{,}000/1.469328=₹6{,}80{,}583$, with $D=5$. For zeros the duration equals the maturity, so with a fraction $w$ of the value in the 3-year zero, $3w+10(1-w)=5$ gives $w=5/7$. Invest ₹4,86,131 in the 3-year zero and ₹1,94,452 in the 10-year zero. Check convexity at $y=8\%$: the assets have $\tfrac57\cdot\tfrac{12}{1.1664}+\tfrac27\cdot\tfrac{110}{1.1664}=7.349+26.945=34.29$ against the liability's $30/1.1664=25.72$, so the condition holds.

Now let the yield jump to 9%, so every value is multiplied by $(1.08/1.09)^{t}$. Assets: $4{,}86{,}131(0.990826)^{3}+1{,}94{,}452(0.990826)^{10}=4{,}72{,}873+1{,}77{,}331=₹6{,}50{,}205$. Liability: $6{,}80{,}583(0.990826)^{5}=₹6{,}49{,}931$. The fund retains a surplus of ₹274, positive as the convexity argument predicts. A shift to 7% yields ₹7,13,298 against ₹7,12,986, again a surplus.

## Common Misconceptions

- **"Duration is the maturity of the bond."** Only for a zero-coupon bond. A coupon bond returns part of its value early, so its duration is shorter than its maturity.
- **"Duration is exact."** It is a first-order approximation, accurate for small yield changes. For large moves convexity matters, as Example 2 shows.
- **"Convexity is a nuisance term."** It is valuable: for equal duration, the more convex bond gains more when yields fall and loses less when they rise, so it commands a higher price.
- **"Immunisation is permanent."** The match breaks as time passes and as yields change, so the portfolio must be rebalanced; it also protects only against parallel shifts.
- **"A longer-maturity bond always carries more price risk."** Duration, not maturity, measures price risk: a high-coupon 10-year bond can have a shorter duration than a low-coupon bond maturing sooner, so compare durations directly.

## Connections

- Duration is a logarithmic derivative, $-d\ln P/dy$, an application of the chain rule and the derivative rules of Differential Calculus (Lesson m2-l2), and the price approximation is exactly the Taylor polynomial of order two (Lesson m3-l1).
- The centre-of-mass interpretation of $D$ is the same average $\sum t\,w_t$ that defines the centre of mass in Mechanics; convexity grows with the spread of the payments about that centre, like a moment of inertia.
- Sensitivity analysis in Operations Research (Lesson m3-l8) asks the same question of an optimum as duration asks of a price: how much does the answer change when a parameter moves?
- The Greeks of an option in Lesson m3-l2, delta and gamma, are first and second derivatives of the option price, the exact analogues of duration and convexity.
- Indian banks and insurers measure interest-rate risk on their government-bond holdings by modified duration and DV01.

## Quick Check

1. Show that $D_{\mathrm{mod}}=-P'(y)/P$ and explain why $D=n$ for a zero-coupon bond.
2. A 10-year par bond with 8% annual coupon has $D=7.2469$. Find $D_{\mathrm{mod}}$ and the approximate price change for a yield rise of 0.5%.
3. Compute the convexity of a 5-year zero-coupon bond at $y=6\%$.
4. Why is the first-order approximation always an overestimate of the price fall when yields rise?
5. A liability of ₹5,00,000 falls due in 4 years at 6%. Which two zeros of maturities 2 and 6 years immunise it?

## Takeaway

- Modified duration is the proportional price sensitivity to yield, $-P'/P$; Macaulay duration is the weighted average time of payments.
- Convexity is $P''/P$, always positive for ordinary bonds, and the second-order Taylor term corrects duration for large moves.
- Duration of a portfolio is the value-weighted average of durations, making hedging by matching possible.
- Immunisation matches present value and duration, with asset convexity at least as large as the liability's; it must be rebalanced.
- Derivatives with respect to a market variable are the language of risk, and return as the Greeks.
