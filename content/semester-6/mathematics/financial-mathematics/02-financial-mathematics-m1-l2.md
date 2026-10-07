***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-6
semesterName: Semester 6
subjectId: mathematics
subjectName: Mathematics
courseId: financial-mathematics
courseName: Financial Mathematics (Math Elective II, B)
moduleId: financial-mathematics-module-1
moduleName: Time Value of Money, Annuities and Project Appraisal
lessonId: financial-mathematics-m1-l2
lessonName: Annuities, Perpetuities and Growing Payment Streams
lessonNumber: 2
moduleNumber: 1
semesterNumber: 6
difficulty: intermediate
estimatedStudyMinutes: 55
releaseOrder: 2
prerequisites:
  - financial-mathematics-m1-l1
  - differential-calculus-m3-l1
  - integral-calculus-m2-l1
learningObjectives:
  - Derive the present and accumulated values $a_{\overline{n}|}$, $s_{\overline{n}|}$, $\ddot{a}_{\overline{n}|}$ and $\ddot{s}_{\overline{n}|}$ of level annuities from the geometric series, and state the relations between them.
  - Value deferred annuities, perpetuities and payment streams growing at a constant rate, including the Gordon growth formula, and explain the condition $i > g$.
  - Handle payments made $m$ times a year and continuously paid annuities by choosing the correct effective rate per period or the force of interest.
  - Apply annuity formulae to Indian savings products such as recurring deposits, systematic investment plans and pension streams.
concepts:
  - Annuity-immediate
  - Annuity-due
  - Deferred annuity
  - Perpetuity
  - Growing annuity and Gordon growth model
  - Continuous annuity
tags:
  - mathematics
  - financial-mathematics
  - annuities
  - geometric-series
sourceType: authored-courseware
status: in-review
assessmentHints:
  - derivation
  - problem-solving
  - short-answer
  - computational
***

# Annuities, Perpetuities and Growing Payment Streams

## Overview

Almost every financial contract an individual signs involves equal payments at regular intervals: a recurring deposit, a systematic investment plan, a pension, rent, bond coupons, loan instalments. Such a sequence is an **annuity**, and because its present value is a finite geometric series, the whole family of formulae follows from one line of algebra. This lesson develops that family: the annuity-immediate and annuity-due, accumulated values, deferred annuities, perpetuities, streams growing at a constant rate, payments more frequent than annual, and continuous annuities as the limiting case. The actuarial notation $a_{\overline{n}|}$ and $s_{\overline{n}|}$ compresses long expressions, and relations such as $1 = i\,a_{\overline{n}|} + v^{n}$ carry financial meaning of their own. The formulae are applied to Indian savings and retirement problems.

## Learning Path

- **What you should already know**: compound accumulation $(1+i)^{n}$, the discount factor $v = (1+i)^{-1}$, the rate of discount $d$ and the force of interest $\delta$ (Lesson m1-l1); the sum of a finite geometric series; the integral $\int_0^n e^{-\delta t}\,dt$ (Integral Calculus, Lesson m2-l1).
- **What this lesson adds**: closed forms for level, deferred, perpetual, growing and continuous annuities, the identities connecting them, and matching the effective rate to the payment period.
- **What later lessons this will unlock**: the EMI formula, a rearranged annuity (Lesson m1-l3); bond prices, a coupon annuity plus discounted redemption (Lesson m2-l1); duration as a weighted average of payment times (Lesson m2-l2).

## Core Explanation

### The annuity-immediate

Consider $n$ payments of 1 at the ends of years $1, 2, \ldots, n$ at effective annual rate $i$: an **annuity-immediate** (the name is historical). Its present value at time 0 is

$$a_{\overline{n}|} = v + v^{2} + \cdots + v^{n} = v\,\frac{1 - v^{n}}{1 - v}.$$

Since $1 - v = iv$, this simplifies to the fundamental formula

$$a_{\overline{n}|} = \frac{1 - v^{n}}{i}.$$

The **accumulated value** at time $n$, just after the last payment, is $(1+i)^{n}$ times this:

$$s_{\overline{n}|} = (1+i)^{n} a_{\overline{n}|} = \frac{(1+i)^{n} - 1}{i}.$$

Directly, $s_{\overline{n}|} = 1 + (1+i) + \cdots + (1+i)^{n-1}$: the last payment earns no interest, the first $n-1$ years of it.

Rearranging gives the identity

$$1 = i\,a_{\overline{n}|} + v^{n},$$

with a clean interpretation: a loan of 1 can be serviced by paying interest $i$ at each year-end for $n$ years and repaying the principal at time $n$; the interest is worth $i\,a_{\overline{n}|}$ and the principal $v^{n}$. This is how a bond works.

### The annuity-due

If the $n$ payments fall at the beginnings of the years, at times $0, 1, \ldots, n-1$, the stream is an **annuity-due**. Every payment arrives a period earlier, so each is worth $(1+i)$ times as much:

$$\ddot{a}_{\overline{n}|} = 1 + v + \cdots + v^{n-1} = \frac{1 - v^{n}}{1 - v} = \frac{1 - v^{n}}{d} = (1+i)\,a_{\overline{n}|},$$

$$\ddot{s}_{\overline{n}|} = (1+i)^{n}\,\ddot{a}_{\overline{n}|} = \frac{(1+i)^{n} - 1}{d} = (1+i)\,s_{\overline{n}|}.$$

The appearance of $d$ is the mnemonic: payments in advance use the rate in advance. Also useful: $\ddot{a}_{\overline{n}|} = 1 + a_{\overline{n-1}|}$ and $s_{\overline{n}|} = 1 + \ddot{s}_{\overline{n-1}|}$. Recurring deposits, SIPs and rent in advance are annuities-due; EMIs, paid at month-end, are annuities-immediate.

### Deferred annuities and perpetuities

A **deferred annuity** has its first payment postponed. If an annuity-immediate of $n$ payments begins after a deferral of $m$ years (payments at times $m+1, \ldots, m+n$), its present value is the ordinary value discounted by $m$ years:

$${}_{m|}a_{\overline{n}|} = v^{m}\,a_{\overline{n}|} = a_{\overline{m+n}|} - a_{\overline{m}|}.$$

The second form, a difference of two annuities starting now, avoids computing $v^{m}$ separately. Pension planning is the archetypal case.

Letting $n \to \infty$ gives a **perpetuity**, a stream that never ends. Since $v^{n} \to 0$,

$$a_{\overline{\infty}|} = \frac{1}{i}, \qquad \ddot{a}_{\overline{\infty}|} = \frac{1}{d}.$$

Intuitively, a capital sum $1/i$ invested at rate $i$ yields exactly 1 per year forever without touching the principal. British consols were perpetual government bonds. The annuity also follows by a different route: a level annuity for $n$ years is a perpetuity now minus a perpetuity deferred $n$ years, $a_{\overline{n}|} = 1/i - v^{n}/i$.

### Growing annuities and the Gordon formula

Suppose payments grow geometrically, $(1+g)^{k-1}$ at time $k$, as do salaries, dividends and indexed pensions. The present value is

$$PV = \sum_{k=1}^{n} (1+g)^{k-1} v^{k} = \frac{1}{1+i}\sum_{k=0}^{n-1}\left(\frac{1+g}{1+i}\right)^{k} = \frac{1}{i - g}\left[1 - \left(\frac{1+g}{1+i}\right)^{n}\right],$$

valid for $g \neq i$ (if $g = i$ every term equals $v$ and $PV = n v$). As $n \to \infty$ with $g < i$ the bracket tends to 1 and we obtain the **growing perpetuity**, known in equity valuation as the **Gordon growth model**:

$$PV = \frac{1}{i - g}, \qquad P_{0} = \frac{D_{1}}{r - g},$$

where $D_{1}$ is next year's dividend, $r$ the required return and $g$ the perpetual growth rate. The condition $g < i$ is essential: if payments grew as fast as the discount rate the series would diverge, so no valuation can assume a company outgrows the economy forever. Arithmetically increasing payments $1, 2, \ldots, n$ give the increasing annuity $(Ia)_{\overline{n}|} = (\ddot{a}_{\overline{n}|} - n v^{n})/i$, which reappears in Lesson m2-l2 inside a bond's duration.

### Payments more frequent than once a year

Indian products are overwhelmingly monthly. Work in the payment period: convert the quoted rate to the effective rate $j$ per period, count the periods $N$, and use $a_{\overline{N}|j}$. A 10-year monthly SIP at a nominal 12% convertible monthly is an annuity of 120 payments at $j = 1\%$. If instead an effective annual $i$ is given, use $j = (1+i)^{1/12} - 1$. Actuaries write an annuity of 1 per year paid in $m$ instalments as $a^{(m)}_{\overline{n}|} = (i/i^{(m)})\,a_{\overline{n}|}$, the factor above 1 reflecting the earlier average payment date.

### Continuous annuities

Let the instalments per year tend to infinity with total 1 per year. The payment becomes a continuous stream of density 1, and summing becomes integrating:

$$\bar{a}_{\overline{n}|} = \int_{0}^{n} e^{-\delta t}\,dt = \frac{1 - e^{-\delta n}}{\delta} = \frac{1 - v^{n}}{\delta} = \frac{i}{\delta}\,a_{\overline{n}|}.$$

Since $d < \delta < i$, the ordering $a_{\overline{n}|} < \bar{a}_{\overline{n}|} < \ddot{a}_{\overline{n}|}$ follows, as the payment dates require. In Module 3 a continuous dividend yield $q$ modifies the Black–Scholes formula by $e^{-qT}$.

The table summarises the family at $i = 6\%$, $n = 10$ (so $v^{10} = 0.55839$, $d = 0.056604$, $\delta = 0.058269$).

| Annuity of 1 per year | Formula | Value |
|---|---|---|
| Immediate | $(1 - v^{n})/i$ | 7.3601 |
| Continuous | $(1 - v^{n})/\delta$ | 7.5787 |
| Due | $(1 - v^{n})/d$ | 7.8017 |
| Perpetuity-immediate | $1/i$ | 16.6667 |
| Growing at $g = 3\%$, 10 years | $[1 - (1.03/1.06)^{10}]/(i - g)$ | 8.3188 |

## Key Ideas

- **Geometric series**: every annuity formula is $\sum v^{k}$ in disguise: $a_{\overline{n}|} = (1 - v^{n})/i$, $s_{\overline{n}|} = ((1+i)^{n} - 1)/i$.
- **Timing shifts**: the annuity-due is $(1+i)$ times the annuity-immediate, equivalently $(1 - v^{n})/d$; a deferral of $m$ years multiplies by $v^{m}$.
- **The split identity**: $1 = i\,a_{\overline{n}|} + v^{n}$ decomposes a unit loan into interest payments plus repayment of principal; it underlies bond pricing.
- **Perpetuities**: $1/i$ for payments in arrear, $1/d$ in advance; a level annuity is the difference of two perpetuities.
- **Growing streams**: $PV = [1 - ((1+g)/(1+i))^{n}]/(i - g)$, tending to the Gordon formula $1/(i - g)$ when $g < i$.
- **Match the period**: use the effective rate per payment period; continuous payment replaces $i$ by $\delta$.

## Worked Examples

### Example 1 — A ten-year SIP

An investor pays ₹5,000 at the start of every month for 10 years into a fund earning a nominal 12% p.a. convertible monthly. Find the accumulated value after 10 years and the total contributed.

**Solution.** The effective monthly rate is $j = 1\%$ and there are $N = 120$ payments in advance, so the value is $5{,}000\,\ddot{s}_{\overline{120}|0.01}$. First $(1.01)^{120} = e^{120 \ln 1.01} = e^{1.19404} = 3.3004$. Then

$$s_{\overline{120}|} = \frac{3.3004 - 1}{0.01} = 230.04, \qquad \ddot{s}_{\overline{120}|} = 1.01 \times 230.04 = 232.34,$$

giving an accumulated value of $5{,}000 \times 232.34 = ₹11{,}61{,}700$. The total contributed is $120 \times 5{,}000 = ₹6{,}00{,}000$, so almost half the final sum is return. Month-end payments would give $5{,}000 \times 230.04 = ₹11{,}50{,}200$; paying a month earlier adds ₹11,500.

### Example 2 — Funding a retirement income

A 40-year-old wants ₹2,00,000 per year for 20 years, the first payment at age 61. At an effective 6% annual rate, what sum must be set aside today? What would a perpetual income of the same amount from age 61 cost?

**Solution.** The payments form an annuity-immediate of 20 payments deferred 20 years. With $v^{20} = (1.06)^{-20} = 1/3.20714 = 0.31180$,

$$a_{\overline{20}|} = \frac{1 - 0.31180}{0.06} = 11.4699, \qquad {}_{20|}a_{\overline{20}|} = 0.31180 \times 11.4699 = 3.5764.$$

The required sum is $2{,}00{,}000 \times 3.5764 = ₹7{,}15{,}280$: ₹40 lakh of pension costs ₹7.15 lakh today.

A perpetuity from age 61 is worth $v^{20}/i = 5.1967$ per rupee, costing $2{,}00{,}000 \times 5.1967 = ₹10{,}39{,}340$; extending the term to forever adds only 45%, as payments beyond year 40 are so heavily discounted.

### Example 3 — An inflation-indexed pension and the Gordon formula

(a) A pension pays ₹3,00,000 at the end of the first year and rises by 4% each year for 25 years. Value it at 7%. (b) A share is expected to pay a dividend of ₹12 next year, growing at 5% indefinitely; investors require 11%. Find its fair price.

**Solution.** (a) With $i = 0.07$, $g = 0.04$ and $n = 25$,

$$\frac{1+g}{1+i} = \frac{1.04}{1.07} = 0.971963, \qquad (0.971963)^{25} = e^{25 \ln 0.971963} = e^{-0.71094} = 0.49118,$$

$$PV = \frac{3{,}00{,}000}{0.07 - 0.04}\left(1 - 0.49118\right) = 1{,}00{,}00{,}000 \times 0.50882 = ₹50{,}88{,}200.$$

A level pension of ₹3,00,000 would cost $3{,}00{,}000 \times 11.6536 = ₹34{,}96{,}080$; indexation adds about 46%.

(b) By the Gordon formula, $P_{0} = D_{1}/(r - g) = 12/(0.11 - 0.05) = ₹200$. With 6% growth the price would be $12/0.05 = ₹240$: a one-point change in $g$ moves the valuation by 20%, so the model is very sensitive when $g$ is near $r$.

## Common Misconceptions

- **"An annuity-immediate pays immediately."** The name is historical: it pays at the end of each period; the annuity-due pays at the beginning. Confusing them mis-states every value by $(1+i)$.
- **"The accumulated value of $n$ payments of 1 is $n(1+i)^{n}$."** No. Only the first payment earns interest for $n-1$ periods; the correct sum is $s_{\overline{n}|} = ((1+i)^{n} - 1)/i$, much smaller.
- **"A perpetuity is infinitely valuable because it pays forever."** The payments are discounted geometrically and $\sum v^{k} = 1/i$ converges: a perpetuity of ₹1 lakh a year at 8% is worth ₹12.5 lakh.
- **"For a monthly SIP at 12% p.a., use $i = 12\%$ with $n$ in years."** Monthly payments need the monthly rate and $N$ in months; annual figures treat 12 instalments as one year-end payment and understate the value.
- **"The Gordon formula works for any growth rate."** It requires $g < r$. As $g \to r$ the value diverges, and for $g \geq r$ the series does not converge.

## Connections

- The convergence of $\sum v^{k}$ and its divergence when $(1+g)/(1+i) \geq 1$ are the geometric-series tests of Real Analysis (Lesson m1-l3); the Gordon condition is a convergence condition.
- The continuous annuity $\int_0^n e^{-\delta t}\,dt$ is the integral giving the charge delivered by an exponentially decaying current in Electricity and Magnetism and the mean life in Nuclear Physics (Lesson m2-l2).
- The weights $t v^{t}$ reappear in Lesson m2-l2 as the Macaulay duration of a bond, the centre of mass of its discounted cash flows, as in Mechanics.
- In Operations Research (Lesson m3-l9), multi-period investment problems are formulated as LPs whose objective coefficients are annuity factors.
- Recurring deposits and SIPs are annuities-due; the National Pension System pays an annuity bought at retirement; indexed pensions are growing annuities.

## Quick Check

1. Derive $\ddot{a}_{\overline{n}|} = (1 - v^{n})/d$ and verify numerically that $\ddot{a}_{\overline{10}|} = (1+i)\,a_{\overline{10}|}$ at $i = 6\%$.
2. A recurring deposit of ₹2,000 per month for 3 years earns 7.2% p.a. convertible monthly, payments at month start. Find the maturity value.
3. Show that ${}_{m|}a_{\overline{n}|} = a_{\overline{m+n}|} - a_{\overline{m}|}$ algebraically and explain the result in words.
4. A scholarship fund must pay ₹1,00,000 per year forever, first payment in 5 years. At 7%, how much must be endowed today?
5. Payments of ₹10,000 at the end of year 1 grow at 8% per year for 15 years; the discount rate is 8%. Find the present value and explain why the general formula cannot be used directly.

## Takeaway

- A level annuity is a geometric series; $a_{\overline{n}|}$ and $s_{\overline{n}|}$ are the two formulae from which all others follow.
- Payments in advance are worth $(1+i)$ times payments in arrear, replacing $i$ by $d$; a deferral of $m$ periods multiplies by $v^{m}$.
- A perpetuity is worth $1/i$; a growing perpetuity $1/(i - g)$ provided $g < i$, the Gordon growth model of equity valuation.
- Value in the payment period with that period's effective rate; continuous payment uses $\delta$.
- The identity $1 = i\,a_{\overline{n}|} + v^{n}$ splits a loan into interest and principal, the template for amortisation and bond pricing.
