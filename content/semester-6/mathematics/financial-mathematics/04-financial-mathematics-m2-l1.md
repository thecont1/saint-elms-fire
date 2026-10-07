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
lessonId: financial-mathematics-m2-l1
lessonName: Bond Pricing, Yield to Maturity and the Term Structure
lessonNumber: 4
moduleNumber: 2
semesterNumber: 6
difficulty: intermediate
estimatedStudyMinutes: 55
releaseOrder: 4
prerequisites:
  - financial-mathematics-m1-l2
  - financial-mathematics-m1-l3
  - integral-calculus-m1-l2
learningObjectives:
  - Price a coupon bond as the present value of its coupons and redemption, and explain premium, discount and pull to par.
  - Compute the yield to maturity as the IRR of the bond and apply the semi-annual convention used for Indian government securities.
  - Build a spot-rate curve by bootstrapping and use it to price bonds without a single yield.
  - Derive forward rates from spot rates by no-arbitrage and interpret the shape of the term structure.
concepts:
  - Coupon bond price
  - Yield to maturity
  - Premium and discount bonds
  - Spot rates and discount factors
  - Bootstrapping
  - Forward rates
tags:
  - mathematics
  - financial-mathematics
  - bond-pricing
  - term-structure
sourceType: authored-courseware
status: in-review
assessmentHints:
  - derivation
  - problem-solving
  - computational
  - conceptual
***

# Bond Pricing, Yield to Maturity and the Term Structure

## Overview

A bond is a loan turned into a tradable security. The issuer, a government or company, borrows money and promises a stream of coupons and a final redemption; investors buy and sell that stream, so its price moves with interest rates every day. This lesson prices a bond as a present value, interprets the yield to maturity as an internal rate of return, and then shows the weakness of using a single yield for cash flows at different dates. The remedy is the term structure: a separate discount rate for each maturity, the spot rates, from which forward rates, the market's implied future borrowing rates, follow by an arbitrage argument. This is the first lesson in which prices are determined by the absence of free lunches, an idea on which Module 3 depends completely.

## Learning Path

- **What you should already know**: the annuity factor $a_{\overline{n}|}$ and the split identity $1=i\,a_{\overline{n}|}+v^{n}$ (Lesson m1-l2); IRR and its numerical solution (Lesson m1-l3); the nominal-to-effective rate conversion (Lesson m1-l1).
- **What this lesson adds**: bond prices and yields; premium, discount and clean prices; spot rates, bootstrapping and forward rates.
- **What later lessons this will unlock**: duration and convexity, the sensitivity of price to yield (Lesson m2-l2); the risk-free rate in the CAPM (Lesson m2-l3); the discount factor $e^{-rT}$ in option pricing (Lessons m3-l1 and m3-l2).

## Core Explanation

### The price of a coupon bond

A bond has face value $F$, coupon rate $c$ per period and $n$ periods to maturity; it pays the coupon $cF$ at the end of each period and redeems $F$ at time $n$. If the market discounts at an effective rate $y$ per period, the price is the present value

$$P = cF\,a_{\overline{n}|y} + F\,v^{n} = cF\,\frac{1-v^{n}}{y} + F\,v^{n}, \qquad v=\frac{1}{1+y}.$$

Using the split identity $F v^{n} = F - yF\,a_{\overline{n}|y}$, this becomes

$$P = F + F\,(c-y)\,a_{\overline{n}|y}.$$

The form is informative. If $c=y$ the price equals face value (a **par** bond). If $c>y$ the bond pays more than the market demands, so $P>F$ and it trades at a **premium**; if $c<y$ it trades at a **discount**. As time passes, $n$ falls, $a_{\overline{n}|}\to 0$ and the price is drawn back to $F$ at maturity: this is **pull to par**. A **zero-coupon bond** has $c=0$ and price $P=Fv^{n}$.

### Yield to maturity

Given a market price $P$, the **yield to maturity** (YTM) is the rate $y$ solving the equation above, that is, the IRR of the cash flows $(-P, cF,\ldots,cF+F)$. It is the single discount rate that makes the bond's price equal to the present value of its promises. Price is a strictly decreasing, convex function of $y$ (every term $C_t(1+y)^{-t}$ is), so there is exactly one positive solution, found by bisection or Newton. A quick estimate is the approximation $y\approx \dfrac{cF+(F-P)/n}{(F+P)/2}$, annual coupon plus the annualised capital gain over the average investment. Indian government securities pay coupons half-yearly, so a quoted yield is a nominal rate convertible twice a year and one works with $y/2$ per half-year and $2n$ periods.

```python
def bond_price(face, coupon_rate, years, y, freq=1):
    j, n = y / freq, years * freq
    cpn = face * coupon_rate / freq
    return sum(cpn / (1 + j) ** k for k in range(1, n + 1)) + face / (1 + j) ** n

def ytm(price, face, coupon_rate, years, freq=1):
    lo, hi = 0.0, 1.0
    for _ in range(60):
        mid = (lo + hi) / 2
        lo, hi = (mid, hi) if bond_price(face, coupon_rate, years, mid, freq) > price else (lo, mid)
    return mid

print(round(ytm(95, 100, 0.06, 5), 5))
```

Because the price falls as $y$ rises, the code moves the lower bound up when the trial price exceeds the market price.

### The accrued interest convention

A bond bought between coupon dates carries part of the next coupon already earned by the seller. The quoted **clean price** excludes this **accrued interest**, $cF\times$ (days since last coupon / days in the period), and the buyer pays the **dirty price** equal to clean plus accrued. Clean prices move smoothly with yields rather than dropping at each coupon date.

### Spot rates and the weakness of one yield

The YTM treats the cash flow at year 1 and the cash flow at year 10 as earning the same rate, which is false when the market rewards longer lending differently. The **spot rate** $s_t$ is the effective annual yield on a zero-coupon bond maturing at time $t$, and the **discount factor** is $d_t=(1+s_t)^{-t}$. Any bond with cash flows $C_t$ is then priced by

$$P=\sum_t \frac{C_t}{(1+s_t)^{t}}.$$

Cash flows are priced independently, and any two bonds with identical cash flows must have the same price: otherwise one could buy the cheap one and sell the dear one for a riskless profit. This is the **law of one price**, the elementary no-arbitrage principle. The curve of $s_t$ against $t$ is the **term structure** or yield curve. It is typically upward sloping, rewarding longer lending; it is **inverted** when short rates exceed long rates, a pattern that has often preceded recessions.

### Bootstrapping the curve

Spot rates are extracted from the prices of traded bonds, shortest maturity first. A one-year zero priced at $P_1$ gives $d_1=P_1/F$. A two-year coupon bond with coupon $C$ and price $P_2$ satisfies $P_2=C\,d_1+(C+F)\,d_2$, which determines $d_2$ because $d_1$ is already known, and $s_2=d_2^{-1/2}-1$. Repeating the step bootstraps the whole curve.

### Forward rates

Suppose the one-year and two-year spot rates are $s_1$ and $s_2$. An investor can lend for two years at $s_2$, or lend for one year at $s_1$ and reinvest at the then-prevailing one-year rate. The rate $f_{1,2}$ that makes the two plans equal today is the **forward rate**:

$$(1+s_1)(1+f_{1,2}) = (1+s_2)^{2}, \qquad f_{1,2}=\frac{(1+s_2)^{2}}{1+s_1}-1.$$

More generally $(1+f_{t-1,t})=(1+s_t)^{t}/(1+s_{t-1})^{t-1}$, and in continuous time the continuously compounded spot rate $\bar s_t$ satisfies $t\,\bar s_t=\int_0^{t}f(u)\,du$, which recovers the formula $a(t)=\exp\int_0^{t}\delta(s)\,ds$ of Lesson m1-l1 with $f(u)$ the instantaneous forward rate. The forward rate is locked in by trading zeros today: buy the two-year zero and short the one-year zero in a ratio that has zero net cost. It is not a prediction, but it is the break-even for any strategy of rolling over, so a rising curve implies rising forward rates.

## Key Ideas

- **Price**: $P=cF\,a_{\overline{n}|y}+Fv^{n}=F+F(c-y)\,a_{\overline{n}|y}$; premium if $c>y$, discount if $c<y$, par if $c=y$.
- **YTM**: the IRR of the bond; price is decreasing and convex in $y$, so the yield is unique.
- **Spot rates**: $P=\sum C_t(1+s_t)^{-t}$ prices each cash flow at its own maturity; the law of one price rests on no-arbitrage.
- **Bootstrapping**: solve for $d_1,d_2,\ldots$ in turn from traded bond prices.
- **Forward rates**: $(1+f_{1,2})=(1+s_2)^{2}/(1+s_1)$, the break-even rate for rolling over.

## Worked Examples

### Example 1 — Pricing and pull to par

A 3-year bond has face ₹100 and a 7% annual coupon. Find its price at yields of 7% and 8%, and the price one year later at 8% if the yield is unchanged.

**Solution.** At $y=7\%$ the bond is at par, $P=100$. At 8%, $a_{\overline{3}|}=(1-1.08^{-3})/0.08=(1-0.79383)/0.08=2.5771$, so $P=100+100(0.07-0.08)(2.5771)=100-2.5771=₹97.42$. Directly, $7/1.08+7/1.1664+107/1.259712=6.4815+6.0014+84.9400=97.42$. One year later two payments remain: $a_{\overline{2}|}=(1-0.85734)/0.08=1.7833$ and $P=100-1.7833=₹98.22$. The discount has shrunk from 2.58 to 1.78 as the bond is pulled toward par.

### Example 2 — Yield to maturity

A 5-year bond with a 6% annual coupon and face ₹100 trades at ₹95. Estimate and compute its YTM, and then price the same bond with half-yearly coupons at a nominal yield of 7% convertible half-yearly.

**Solution.** The approximation gives $y\approx(6+1)/97.5=7.18\%$. For the exact value evaluate the price at trial yields. At 7%: $a_{\overline{5}|}=4.1002$, $v^{5}=0.71299$ and $P=6(4.1002)+71.299=95.90$. At 7.5%: $P=93.93$. Linear interpolation for 95 gives $y\approx 7+0.5(0.90/1.97)=7.23\%$; bisection gives 7.227%, the output of the program above.

For the half-yearly bond, $j=3.5\%$ and 10 periods, coupon ₹3. Then $a_{\overline{10}|}=8.3166$, $v^{10}=0.70892$ and $P=3(8.3166)+70.892=24.950+70.892=₹95.84$.

### Example 3 — Bootstrapping, pricing and a forward rate

A one-year zero with face ₹100 costs ₹94.00, and a two-year 8% annual-coupon bond costs ₹101.50. (a) Find $s_1$ and $s_2$. (b) Given spot rates of 6.5%, 7.0% and 7.4% for years 1 to 3, price a 3-year 7% bond and find the forward rates $f_{1,2}$ and $f_{2,3}$.

**Solution.** (a) $d_1=0.94$, so $s_1=1/0.94-1=6.383\%$. Then $101.50=8(0.94)+108\,d_2$, so $d_2=(101.50-7.52)/108=0.870185$ and $s_2=0.870185^{-1/2}-1=7.200\%$.

(b) The price is $7/1.065+7/1.07^{2}+107/1.074^{3}=6.5728+6.1141+86.3716=₹99.06$. Forward rates: $f_{1,2}=1.07^{2}/1.065-1=1.1449/1.065-1=7.502\%$ and $f_{2,3}=1.074^{3}/1.07^{2}-1=1.238833/1.1449-1=8.204\%$. The rising spot curve implies forwards above the spot rates, and the bond's YTM of 7.36% lies between the three spot rates, weighted toward the last, where most of the money is received.

## Common Misconceptions

- **"A bond's price is its face value."** Only at issue (if the coupon matches the market yield) and at maturity. In between, price varies with the yield, and rises when yields fall.
- **"The coupon rate is the return on the bond."** The return is the yield, which includes the capital gain or loss between price and redemption.
- **"The YTM is the return you will actually earn."** It holds only if every coupon is reinvested at the YTM itself and the bond is held to maturity.
- **"Forward rates are forecasts of future spot rates."** They are break-even rates derived from today's prices; actual rates may be higher or lower, and the difference is where risk lies.
- **"The yield curve is the same as the coupon-rate pattern."** The curve is built from zero-coupon rates; coupon bonds of the same maturity may have different YTMs because their cash flows are weighted differently in time.

## Connections

- The price equation is the annuity formula of Lesson m1-l2 with a redemption term, and the YTM is the IRR of Lesson m1-l3; both lessons are used together here.
- The convexity of $P(y)$ comes from the convexity of $x\mapsto (1+x)^{-t}$ in Differential Calculus (Lesson m2-l3), and is quantified by the second derivative in Lesson m2-l2.
- The relation between spot and forward rates, $a(t)=\exp\int_0^t f(u)\,du$, is the exponential growth law of Differential Equations (Lesson m1-l2) with a time-varying rate, as for radioactive decay with a varying decay constant.
- The risk-free curve is the starting point for the risk-neutral valuation of options in Lessons m3-l1 and m3-l2.
- Indian government securities, treasury bills and corporate bonds are quoted on yields, and the Reserve Bank of India's repo rate shifts the short end of the curve.

## Quick Check

1. A 4-year bond with face ₹100 and 9% annual coupon is priced to yield 7%. Find its price and say whether it trades at a premium or discount.
2. Explain why a zero-coupon bond's price rises as time passes at a constant yield.
3. A 2-year zero priced at ₹88.50 (face ₹100) has what spot rate? What is $f_{1,2}$ if $s_1=5\%$?
4. Why does the law of one price force the bond price to equal $\sum C_t d_t$?
5. A bond's price is ₹103.5 with 5% coupon and 6 years to maturity. Use the approximation to estimate the YTM, and compare it with the exact value from a calculator.

## Takeaway

- A bond price is the present value of coupons and redemption; $P=F+F(c-y)\,a_{\overline{n}|}$ reveals premium, discount and pull to par.
- The YTM is the bond's IRR, unique and found numerically; it is a convenient summary, not a guaranteed return.
- Spot rates price each cash flow at its own maturity and are bootstrapped from traded bonds.
- Forward rates follow from no-arbitrage: $(1+f_{1,2})=(1+s_2)^{2}/(1+s_1)$.
- The yield curve and its shape carry the market's view of future rates and risk.
