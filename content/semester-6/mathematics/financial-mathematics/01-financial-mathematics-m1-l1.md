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
lessonId: financial-mathematics-m1-l1
lessonName: Interest, Discounting and the Time Value of Money
lessonNumber: 1
moduleNumber: 1
semesterNumber: 6
difficulty: foundation
estimatedStudyMinutes: 50
releaseOrder: 1
prerequisites:
  - differential-calculus-m3-l1
  - integral-calculus-m1-l2
learningObjectives:
  - Compute accumulated and present values under simple interest, compound interest and continuous compounding, and convert between nominal, effective and continuously compounded rates.
  - Derive the limit $\lim_{m\to\infty}(1 + r/m)^{m} = e^{r}$ and interpret the force of interest $\delta = \ln(1+i)$ as the instantaneous growth rate of an accumulation function.
  - Set up and solve an equation of value to replace a set of dated cash flows by a single equivalent payment.
  - Distinguish the effective rate of interest from the effective rate of discount and relate both to the discount factor $v = (1+i)^{-1}$.
concepts:
  - Simple interest
  - Compound interest
  - Nominal and effective rates
  - Continuous compounding and force of interest
  - Present value and discount factor
  - Equation of value
tags:
  - mathematics
  - financial-mathematics
  - time-value-of-money
  - compound-interest
sourceType: authored-courseware
status: in-review
assessmentHints:
  - conceptual
  - derivation
  - problem-solving
  - computational
***

# Interest, Discounting and the Time Value of Money

## Overview

A rupee today is worth more than a rupee a year from now, because the rupee in hand can be lent out and will have grown by then. This time value of money underlies every valuation in finance: fixed deposits, home loans, bonds, pensions and, in Module 3, option prices all reduce to comparing cash flows at different dates. We begin with simple and compound interest, show how compounding frequency changes the effective rate, and pass to continuous compounding, where the exponential function and the force of interest appear naturally. We then reverse the process, discounting future amounts to present values, and introduce the equation of value, which turns any pattern of dated payments into one algebraic equation. The notation, especially the discount factor $v$ and the force of interest $\delta$, is used in every later lesson.

## Learning Path

- **What you should already know**: the exponential and logarithmic functions and their derivatives, the Taylor series of $e^{x}$ and $\ln(1+x)$ (Differential Calculus, Lesson m3-l1); integration of $e^{kt}$ (Integral Calculus, Lesson m1-l2); geometric progressions.
- **What this lesson adds**: accumulation functions for simple, compound and continuous interest; nominal and effective rates; the force of interest; present value, $v$ and $d$; the equation of value.
- **What later lessons this will unlock**: annuities (Lesson m1-l2); amortisation, EMIs and NPV (Lesson m1-l3); bond pricing (Lesson m2-l1); and the discount factor $e^{-rT}$ used in option pricing (Lessons m3-l1 and m3-l2).

## Core Explanation

### Accumulation functions

Suppose 1 rupee is invested at time 0. The **accumulation function** $a(t)$ is the amount it has grown to by time $t$ (in years). A principal $P$ grows to $P\,a(t)$, and the **interest** earned over $[0,t]$ is $P\,(a(t)-1)$.

Under **simple interest** at annual rate $r$, interest is earned only on the original principal:

$$a(t) = 1 + rt, \qquad A = P(1 + rt).$$

Simple interest suits short-term instruments such as treasury bills and late-payment penalties; interest earns no interest, so growth is linear in $t$.

Under **compound interest** at effective annual rate $i$, each year's interest is added to the principal and itself earns interest. After one year the amount is $1+i$; after two, $(1+i)^2$; after $n$ whole years

$$a(n) = (1+i)^n, \qquad A = P(1+i)^n.$$

For fractional $t$ the same formula is adopted by convention, $a(t) = (1+i)^t$. **Effective** means $i$ is the actual proportional increase over one year, however interest is credited within it.

### Nominal rates and the compounding frequency

Indian fixed deposits are quoted as, say, "7.1% p.a. compounded quarterly". The quoted figure is a **nominal rate** $i^{(m)}$ convertible $m$ times a year: each period of $1/m$ years earns $i^{(m)}/m$. After one year the accumulation is $(1 + i^{(m)}/m)^m$, so the equivalent effective annual rate is

$$1 + i = \left(1 + \frac{i^{(m)}}{m}\right)^{m}, \qquad i = \left(1 + \frac{i^{(m)}}{m}\right)^{m} - 1.$$

Conversely, $i^{(m)} = m\left[(1+i)^{1/m} - 1\right]$. The effective rate exceeds the nominal rate when $m > 1$, because interest credited mid-year itself earns interest, with diminishing returns as $m$ grows, as the table for a nominal 12% shows.

| Compounding frequency $m$ | Rate per period | Effective annual rate |
|---|---|---|
| 1 (annual) | 12% | 12.000% |
| 2 (half-yearly) | 6% | 12.360% |
| 4 (quarterly) | 3% | 12.551% |
| 12 (monthly) | 1% | 12.683% |
| $\infty$ (continuous) | — | 12.750% |

### Continuous compounding and the force of interest

The limiting row of the table is obtained from the fundamental limit

$$\lim_{m \to \infty} \left(1 + \frac{r}{m}\right)^{m} = e^{r}.$$

Taking logarithms, $m \ln(1 + r/m) = m\left(r/m - r^2/(2m^2) + \cdots\right) = r - r^2/(2m) + \cdots \to r$ by the Maclaurin series of $\ln(1+x)$. Under **continuous compounding** at rate $\delta$ the accumulation function is therefore

$$a(t) = e^{\delta t},$$

and the effective annual rate is $i = e^{\delta} - 1$, or equivalently $\delta = \ln(1+i)$.

The constant $\delta$ is the **force of interest**; differentiating any accumulation function reveals its meaning:

$$\delta(t) = \frac{a'(t)}{a(t)} = \frac{d}{dt}\ln a(t).$$

For compound interest this gives the constant $\delta = \ln(1+i)$; for simple interest, $\delta(t) = r/(1+rt)$, which decreases with time. If the force of interest varies with time, integrating the defining relation gives

$$a(t) = \exp\!\left(\int_0^t \delta(s)\,ds\right),$$

a formula that reappears in Module 2 when the rate depends on maturity.

The **doubling time** follows: a sum doubles when $(1+i)^n = 2$, so $n = \ln 2/\ln(1+i) \approx 0.693/i$ for small $i$. Bankers quote the "rule of 72" because 72 has many divisors and compensates for the second-order term $-i^2/2$ at typical rates.

### Present value and discounting

Valuation runs accumulation backwards. The **present value** (PV) of $A$ due at time $t$ is the sum that must be invested now to grow to $A$:

$$PV = \frac{A}{a(t)} = A(1+i)^{-t} = A\,v^{t}, \qquad v = \frac{1}{1+i}.$$

The quantity $v$ is the **discount factor**, the present value of 1 due in one year; under continuous compounding $v^{t} = e^{-\delta t}$. Moving a cash flow from time $s$ to time $t$ multiplies it by $(1+i)^{t-s}$, in either direction.

Closely related is the **effective rate of discount** $d$, the interest paid in advance on a one-year loan: the lender deducts $d$ at the outset and receives 1 at the end. Equating this to the standard arrangement,

$$1 - d = v, \qquad d = 1 - v = \frac{i}{1+i}, \qquad i = \frac{d}{1-d}.$$

Treasury bills are quoted on a discount basis for this reason. The relations $v = 1 - d = (1+i)^{-1} = e^{-\delta}$ convert instantly among $i$, $d$, $v$ and $\delta$.

### The equation of value

Payments can be compared only at a common **valuation date**. The statement that one set of cash flows has the same value as another at that date is the **equation of value**. If a borrower receives $L$ at time 0 and repays amounts $R_k$ at times $t_k$, the equation of value at time 0 reads

$$L = \sum_k R_k v^{t_k}.$$

The valuation date is immaterial: multiplying both sides by $(1+i)^{T}$ gives the equation at time $T$, so choose the date that shortens the algebra. The unknown may be a payment, a date or the rate itself; the last case, solving a polynomial in $v$, is the computation of yield, treated in Lesson m1-l3.

### Inflation and real rates

Rates measure growth in rupees, not purchasing power. If prices rise at rate $\pi$ per year, the **real rate** $r$ satisfies the Fisher relation $(1 + i) = (1 + r)(1 + \pi)$, so $r = (i - \pi)/(1 + \pi) \approx i - \pi$. A 7% fixed deposit with 5.5% inflation delivers a real return of only $0.015/1.055 = 1.42\%$.

Plotted against time, $1 + rt$ is a straight line while $(1+i)^t$ bends upwards and eventually dwarfs it; at 8% over 30 years the compound curve reaches 10.06 against 3.4 for simple interest.

## Key Ideas

- **Accumulation function**: $a(t)$ is the value at time $t$ of 1 invested at time 0: $1 + rt$, $(1+i)^t$ or $e^{\delta t}$.
- **Nominal versus effective**: a nominal rate $i^{(m)}$ is equivalent to the effective rate $(1 + i^{(m)}/m)^m - 1$, which increases with $m$ towards $e^{i^{(m)}} - 1$.
- **Force of interest**: $\delta = a'(t)/a(t) = \ln(1+i)$ is the instantaneous proportional growth rate; a time-varying force gives $a(t) = \exp\int_0^t \delta(s)\,ds$.
- **Discount factor**: $v = (1+i)^{-1} = 1 - d = e^{-\delta}$; the present value of $A$ due at time $t$ is $A v^{t}$.
- **Equation of value**: equate the values of two cash-flow streams at a common date; the choice of date does not affect the solution.

## Worked Examples

### Example 1 — A fixed deposit with quarterly compounding

A bank offers a 5-year fixed deposit at 7.1% p.a. compounded quarterly. Find the effective annual rate and the maturity value of ₹1,00,000. Compare with simple interest at the same rate.

**Solution.** The rate per quarter is $0.071/4 = 0.01775$. The effective annual rate is

$$i = (1.01775)^4 - 1 = e^{4 \ln 1.01775} - 1 = e^{4 \times 0.017594} - 1 = e^{0.070377} - 1 = 0.07291,$$

that is 7.29%. Over 5 years there are 20 quarters, so

$$A = 1{,}00{,}000 \times (1.01775)^{20} = 1{,}00{,}000 \times e^{0.35189} = 1{,}00{,}000 \times 1.42175 = ₹1{,}42{,}175.$$

Simple interest would give $1{,}00{,}000(1 + 0.071 \times 5) = ₹1{,}35{,}500$; compounding adds ₹6,675 of interest on interest.

### Example 2 — Converting between rate conventions

A personal loan is quoted at 12% p.a. "compounded monthly". Find (a) the effective annual rate, (b) the equivalent force of interest, and (c) the equivalent nominal rate convertible quarterly.

**Solution.** (a) The monthly rate is 1%, so $i = (1.01)^{12} - 1$. Using $\ln 1.01 = 0.0099503$, $12 \ln 1.01 = 0.119404$ and $i = e^{0.119404} - 1 = 0.12683$, or 12.68%.

(b) The force of interest is $\delta = \ln(1+i) = 12 \ln 1.01 = 0.11940$, or 11.94%. Note $\delta < i^{(12)} < i$.

(c) A quarter contains three months, so the effective quarterly rate is $(1.01)^3 - 1 = 0.030301$ and the nominal rate convertible quarterly is $i^{(4)} = 4 \times 0.030301 = 0.121204$, or 12.12%.

### Example 3 — Replacing two debts by one payment

A borrower owes ₹50,000 due in 2 years and ₹80,000 due in 5 years. At an effective annual rate of 8%, what single payment at the end of year 3 settles both debts?

**Solution.** Choose $t = 3$, so the first debt is accumulated one year and the second discounted two years:

$$X = 50{,}000 (1.08) + 80{,}000 (1.08)^{-2} = 54{,}000 + \frac{80{,}000}{1.1664} = 54{,}000 + 68{,}587 = ₹1{,}22{,}587.$$

The equation of value at $t = 0$, $X v^3 = 50{,}000 v^2 + 80{,}000 v^5$, is the same equation multiplied by $v^3$ and gives the same $X$.

## Common Misconceptions

- **"A 12% rate compounded monthly means 12% interest per year."** No. It means 1% per month, which accumulates to 12.68% over the year; the effective rate is what you pay.
- **"Continuous compounding earns dramatically more than monthly compounding."** At 12% the difference is 0.067 percentage points. Continuous compounding is used for analytical convenience, not because it is a materially different product.
- **"The answer depends on which valuation date you choose."** It does not: moving the date multiplies every term by the same factor $(1+i)^{T}$.
- **"The rate of discount $d$ and the rate of interest $i$ are the same thing."** They differ: $d = i/(1+i) < i$. A treasury bill at a 6% discount yields $0.06/0.94 = 6.38\%$ as interest.
- **"Doubling at 7% takes $100/7 \approx 14$ years."** That is simple-interest reasoning. Compounding gives $n = \ln 2/\ln 1.07 = 10.24$ years, close to $72/7 \approx 10.3$.

## Connections

- The force of interest $\delta = a'/a$ is the growth constant of the ODE $a' = \delta a$ of Differential Equations (Lesson m1-l2); compound interest is the discrete version of population growth and, with the sign reversed, radioactive decay.
- The limit $(1 + r/m)^m \to e^{r}$ and the expansion $\ln(1+i) = i - i^2/2 + \cdots$ apply the Taylor series of Differential Calculus (Lesson m3-l1); the rule of 72 is a second-order correction.
- Interest-rate conversions precede any project appraisal in Operations Research (Lesson m3-l9), where dated cash flows must be made comparable before optimisation.
- Indian retail products (fixed deposits, recurring deposits, EMIs, the Public Provident Fund) are specified by a nominal rate and a compounding convention; reading a term sheet is an exercise in this lesson's conversions.

## Quick Check

1. A deposit grows from ₹1,00,000 to ₹1,50,000 in 6 years. Find the effective annual rate and the equivalent force of interest.
2. Show that the nominal rate $i^{(m)}$ is a decreasing function of $m$ for a fixed effective rate $i$, and find its limit as $m \to \infty$.
3. A treasury bill of face value ₹100 is sold for ₹97.50 with 182 days to maturity. Find the simple rate of discount and the simple rate of interest, both annualised on a 365-day basis.
4. If the force of interest is $\delta(t) = 0.05 + 0.002t$, find the accumulation of ₹1 over 10 years.
5. Explain why the equation of value gives the same answer whatever valuation date is chosen.

## Takeaway

- Cash flows at different dates are compared through the accumulation function $a(t)$ and its reciprocal, the discount factor.
- Compound interest is exponential growth; the force of interest $\delta = \ln(1+i)$ is its continuous-time growth rate and $e^{\delta t}$ is the natural notation for it.
- Convert a nominal rate to an effective rate before comparing products; the effective rate rises with compounding frequency towards $e^{i^{(m)}} - 1$.
- The equation of value is the universal tool: bring all cash flows to one date, equate, and solve for the unknown.
- Real returns, after inflation, are what savers actually receive; the Fisher relation makes the correction.
