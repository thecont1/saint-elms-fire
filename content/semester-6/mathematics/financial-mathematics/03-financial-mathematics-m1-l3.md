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
lessonId: financial-mathematics-m1-l3
lessonName: Loan Amortisation, EMIs, NPV and IRR
lessonNumber: 3
moduleNumber: 1
semesterNumber: 6
difficulty: intermediate
estimatedStudyMinutes: 55
releaseOrder: 3
prerequisites:
  - financial-mathematics-m1-l1
  - financial-mathematics-m1-l2
  - differential-calculus-m3-l1
learningObjectives:
  - Derive the EMI formula from the equation of value and construct an amortisation schedule splitting each instalment into interest and principal.
  - Compute the outstanding balance by the prospective and retrospective methods and analyse the effect of a part-prepayment.
  - Define net present value and the internal rate of return, and compute both for a stream of dated cash flows.
  - Explain why IRR can mislead for mutually exclusive projects and non-conventional cash flows, and compare projects using NPV and the crossover rate.
concepts:
  - Equated monthly instalment (EMI)
  - Amortisation schedule
  - Outstanding balance
  - Net present value
  - Internal rate of return
  - Crossover rate
tags:
  - mathematics
  - financial-mathematics
  - loan-amortisation
  - npv-irr
sourceType: authored-courseware
status: in-review
assessmentHints:
  - derivation
  - problem-solving
  - computational
  - short-answer
***

# Loan Amortisation, EMIs, NPV and IRR

## Overview

A home loan is the largest financial contract most households sign, and its structure is exactly the annuity of Lesson m1-l2 read backwards: the bank hands over a lump sum today and receives a level stream of instalments. This lesson turns the annuity formula into the EMI formula, shows how each instalment divides into interest and principal, and tracks the outstanding balance, which determines what a part-prepayment is worth. We then widen the viewpoint from loans to investments. A project is a stream of dated cash flows, and the equation of value gives two measures of its merit: the net present value at a chosen discount rate, and the internal rate of return, the rate at which the project just breaks even. Both are computed with a short Python program, and we examine when they agree and when they disagree.

## Learning Path

- **What you should already know**: the annuity-immediate $a_{\overline{n}|}=(1-v^{n})/i$, the effective rate per payment period and the equation of value (Lessons m1-l1 and m1-l2); root finding by bisection; the Maclaurin series.
- **What this lesson adds**: the EMI formula and amortisation schedule; the prospective and retrospective balance; prepayment; NPV, IRR, the NPV profile and the crossover rate.
- **What later lessons this will unlock**: the yield to maturity of a bond, an IRR computation (Lesson m2-l1); duration as the sensitivity of present value to the rate (Lesson m2-l2); risk-neutral valuation as a present value under special probabilities (Lessons m3-l1 and m3-l2).

## Core Explanation

### The EMI formula

A borrower receives a loan $L$ and repays it by $N$ equal instalments $R$ at the end of each month. With monthly effective rate $j$ (the quoted annual rate divided by 12 for a rate "convertible monthly"), the equation of value at time 0 is $L = R\,a_{\overline{N}|j}$, so

$$R = \frac{L}{a_{\overline{N}|j}} = L\,\frac{j}{1-(1+j)^{-N}} = L\,\frac{j(1+j)^{N}}{(1+j)^{N}-1}.$$

This is the **equated monthly instalment** (EMI). The third form is the one printed in bank brochures. Two limiting cases check it. As $j\to 0$, expanding $(1+j)^{N}\approx 1+Nj$ gives $R\to L/N$, the interest-free instalment. As $N\to\infty$, $R\to Lj$, the interest-only payment on a perpetual loan.

### Splitting interest and principal

At the end of month $k$ the borrower owes $B_{k-1}$ from the previous month, so the interest due is $I_k = jB_{k-1}$ and the remainder of the instalment repays principal, $P_k = R - I_k$, giving $B_k = B_{k-1}-P_k$. Because $B_{k-1}$ falls, interest falls and principal rises. The principal repayments form a geometric progression:

$$P_{k+1} = R - jB_k = R - j(B_{k-1}-P_k) = P_k(1+j), \qquad P_k = P_1(1+j)^{k-1},$$

with $P_1 = R - jL$. The progression explains the well-known feature of long loans: in the early years nearly all of each EMI is interest, and the principal accelerates only later.

### The outstanding balance

The **prospective** balance after $k$ payments is the present value of the remaining payments,

$$B_k = R\,a_{\overline{N-k}|j}.$$

The **retrospective** balance is the loan accumulated minus the accumulated payments,

$$B_k = L(1+j)^{k} - R\,s_{\overline{k}|j}.$$

The two agree because $L=R\,a_{\overline{N}|}$ and $(1+j)^{k}a_{\overline{N}|}-s_{\overline{k}|}=a_{\overline{N-k}|}$. The prospective form is convenient when $R$ is known; the retrospective when the schedule history is known. The balance is what a borrower must pay to close the loan, and a part-prepayment of $X$ simply replaces $B_k$ by $B_k - X$. If the EMI is left unchanged the term shortens, and the new number of remaining payments $n$ solves $B_k - X = R\,a_{\overline{n}|}$, that is

$$n = -\frac{\ln\!\left(1-(B_k-X)\,j/R\right)}{\ln(1+j)}.$$

### An amortisation table in Python

The recursion of the previous section is a loop. The program below prints a schedule and also solves for the EMI.

```python
def emi(L, annual_rate, months):
    j = annual_rate / 12
    return L * j / (1 - (1 + j) ** -months)

def schedule(L, annual_rate, months):
    j, R, bal = annual_rate / 12, emi(L, annual_rate, months), L
    for k in range(1, months + 1):
        interest = j * bal
        principal = R - interest
        bal -= principal
        print(f"{k:3d} {interest:10.2f} {principal:10.2f} {bal:12.2f}")

schedule(100000, 0.12, 6)
```

The output for ₹1,00,000 at 12% over 6 months shows interest falling from 1,000.00 to 170.84 while principal rises from 16,254.84 to 17,084.00 and the final balance is zero, confirming that the loop reproduces the closed forms.

### Net present value

For a project with cash flows $C_0, C_1, \ldots, C_n$ at times $0,1,\ldots,n$ (outflows negative), the **net present value** at discount rate $i$ is

$$\mathrm{NPV}(i) = \sum_{t=0}^{n} \frac{C_t}{(1+i)^{t}} = \sum_{t=0}^{n} C_t v^{t}.$$

The decision rule is to accept a project when $\mathrm{NPV}>0$ at the investor's **cost of capital**, the return forgone on the best alternative use of the money. NPV is additive, so the value of a combination of independent projects is the sum of their NPVs, and it measures the gain in today's rupees.

### Internal rate of return

The **internal rate of return** (IRR) is the rate $i^{*}$ at which $\mathrm{NPV}(i^{*})=0$. It is the yield of the project in exactly the sense of the equation of value in Lesson m1-l1. For a conventional project, one outflow followed by inflows, $\mathrm{NPV}(i)$ is strictly decreasing in $i$ (each term $C_t v^{t}$ with $C_t>0$ falls as $i$ rises), so there is at most one root and the rule "accept if $i^{*}>$ cost of capital" agrees with the NPV rule. The root is found numerically; the bisection loop below needs only the sign change of NPV.

```python
def npv(rate, flows):
    return sum(c / (1 + rate) ** t for t, c in enumerate(flows))

def irr(flows, lo=0.0, hi=1.0):
    for _ in range(60):
        mid = (lo + hi) / 2
        lo, hi = (mid, hi) if npv(mid, flows) > 0 else (lo, mid)
    return mid

flows = [-1_000_000, 300_000, 400_000, 450_000, 350_000]
print(round(npv(0.12, flows)), round(irr(flows), 4))
```

Plotting $\mathrm{NPV}(i)$ against $i$ gives the **NPV profile**, a convex decreasing curve that cuts the horizontal axis at the IRR.

### When IRR misleads

Two cautions apply. First, with **non-conventional** flows (several sign changes, for instance a mine that needs a closing-down cost) Descartes' rule allows several positive roots, and the IRR is then not unique or may not exist. Second, for **mutually exclusive** projects the ranking by IRR can differ from the ranking by NPV, because IRR ignores scale and timing. The rates at which the two NPV profiles cross, the **crossover rate**, is the root of the NPV of the difference of the two cash-flow streams. Below it one project is better, above it the other; the correct choice at a given cost of capital is the larger NPV. IRR also implicitly assumes intermediate inflows are reinvested at the IRR itself, which is optimistic for high-IRR projects.

## Key Ideas

- **EMI**: $R=L\,j/(1-(1+j)^{-N})$, the loan divided by the annuity factor at the monthly rate.
- **Schedule**: $I_k=jB_{k-1}$, $P_k=R-I_k$, and $P_{k+1}=(1+j)P_k$; interest dominates early.
- **Balance**: $B_k=R\,a_{\overline{N-k}|}=L(1+j)^{k}-R\,s_{\overline{k}|}$; prepayment reduces $B_k$ and, at constant EMI, the term.
- **NPV**: $\sum C_t v^{t}$; accept if positive at the cost of capital.
- **IRR**: the rate making NPV zero; unique for conventional flows, ambiguous otherwise, and unreliable for ranking exclusive projects.

## Worked Examples

### Example 1 — A home loan and a prepayment

A bank lends ₹30,00,000 at 8.5% p.a. convertible monthly for 20 years. Find the EMI, the total interest, the balance after 5 years, and the effect of a prepayment of ₹1,00,000 at that point at an unchanged EMI.

**Solution.** Here $j=0.085/12=0.0070833$, $N=240$. Then $(1+j)^{240}=e^{240\ln 1.0070833}=e^{240\times 0.0070583}=e^{1.69401}=5.4412$, and $a_{\overline{240}|}=(1-1/5.4412)/j=0.81617/0.0070833=115.23$. The EMI is

$$R = \frac{30{,}00{,}000}{115.23}\approx ₹26{,}035.$$

Total repaid is $240\times 26{,}035\approx ₹62{,}48{,}400$, so interest is about ₹32.48 lakh, slightly more than the loan itself. The first instalment contains interest $0.0070833\times 30{,}00{,}000=₹21{,}250$ and only ₹4,785 of principal.

After 60 payments, $B_{60}=R\,a_{\overline{180}|}$. With $(1+j)^{180}=e^{1.27050}=3.5627$, $a_{\overline{180}|}=(1-0.28068)/0.0070833=101.55$ and $B_{60}\approx 26{,}035\times 101.55=₹26{,}43{,}800$. Five years of payments have reduced the principal by only about ₹3.56 lakh.

After prepaying ₹1,00,000 the balance is ₹25,43,800 and $1-(B-X)j/R=1-25{,}43{,}800\times 0.0070833/26{,}035=0.30790$, so $n=-\ln 0.30790/\ln 1.0070833=1.1777/0.0070583=166.9$ months. The loan ends about 13 months early, at a saving of roughly $13\times 26{,}035\approx ₹3.4$ lakh of instalments for a ₹1 lakh payment.

### Example 2 — Reading the schedule of a small loan

For the ₹1,00,000 six-month loan at 12% p.a. convertible monthly, find the EMI and verify that the balance reaches zero.

**Solution.** With $j=0.01$, $(1.01)^{-6}=0.942045$ and $a_{\overline{6}|}=0.057955/0.01=5.7955$, so $R=1{,}00{,}000/5.7955=₹17{,}254.84$. Month 1: interest ₹1,000.00, principal ₹16,254.84, balance ₹83,745.16. Month 2: interest ₹837.45, principal ₹16,417.39 (which equals $16{,}254.84\times 1.01$, as the geometric rule predicts). Continuing, the balance is ₹67,327.78, ₹50,746.22, ₹33,998.84 and ₹17,084.00 after months 2 to 5, and the last instalment of ₹17,254.84 clears ₹17,084.00 plus ₹170.84 of interest. The total interest paid is $6\times 17{,}254.84-1{,}00{,}000=₹3{,}529.0$.

### Example 3 — Appraising a project and comparing two options

(a) A firm invests ₹10,00,000 and receives ₹3,00,000, ₹4,00,000, ₹4,50,000 and ₹3,50,000 at the end of years 1 to 4. Find the NPV at 12% and the IRR. (b) Project A has flows $(-100,60,60,60)$ and project B $(-100,0,0,200)$, in ₹ lakh. Compare them.

**Solution.** (a) At 12%: $300000/1.12=267{,}857$; $400000/1.2544=318{,}878$; $450000/1.404928=320{,}301$; $350000/1.573519=222{,}431$. These total ₹11,29,467, so NPV $\approx ₹1{,}29{,}467$ after subtracting the outlay. Since NPV is still positive at 15% (₹59,300), the IRR is higher; bisection gives $i^{*}=17.80\%$.

(b) The IRR of A solves $60\,a_{\overline{3}|}=100$, giving 36.3%; B has $200v^{3}=100$, so $i^{*}=2^{1/3}-1=26.0\%$. By IRR, A wins. But at 10% the NPVs are $60\times 2.4869-100=49.21$ and $200\times 0.75131-100=50.26$, so B wins. The difference stream is $(0,60,60,-140)$; its NPV vanishes when $60v+60v^{2}-140v^{3}=0$, i.e. $7v^{2}-3v-3=0$, so $v=(3+\sqrt{93})/14=0.9031$ and the crossover rate is $10.73\%$. For a cost of capital below 10.73% choose B; above it choose A. IRR alone cannot see this.

## Common Misconceptions

- **"Each EMI repays the same amount of principal."** No. The EMI is level, but interest is charged on a shrinking balance, so the principal component grows by the factor $(1+j)$ each month.
- **"A flat-rate loan at 8% is cheaper than a reducing-balance loan at 8%."** Flat-rate interest is charged on the original principal throughout, even though the borrower holds less each month; the effective rate is roughly double the quoted one.
- **"Higher IRR always means the better project."** For exclusive projects of different scale or timing, only NPV at the true cost of capital ranks them correctly.
- **"An IRR always exists and is unique."** Alternating signs in the cash flows can produce several roots or none; a positive NPV test is always available.
- **"Prepayment early or late saves the same."** The interest saved by a prepayment is the interest on that rupee for all the remaining time, so early prepayments save far more.

## Connections

- The recursion $B_k=(1+j)B_{k-1}-R$ is a first-order linear difference equation, the discrete counterpart of the linear ODEs of Differential Equations (Lesson m1-l2); its solution is the retrospective balance.
- Finding $i^{*}$ with $\mathrm{NPV}(i^{*})=0$ is the root-finding problem of Calculus using Python (Lesson m2-l2), and Newton's method with $\mathrm{NPV}'(i)$ converges in a few steps.
- Selecting among capital-budgeting projects under a budget limit is the integer programme of Operations Research (Lesson m3-l7), whose objective coefficients are the NPVs computed here.
- Convexity of $\mathrm{NPV}(i)$ in $i$ is the same property as the convexity of a bond price in its yield (Lesson m2-l2).
- Indian home-loan statements, car loans and education loans are produced by exactly the schedule above.

## Quick Check

1. Derive the EMI formula and show that $R\to L/N$ as $j\to 0$.
2. Find the EMI on ₹10,00,000 at 9% p.a. convertible monthly over 10 years, and the principal in the first instalment.
3. Show that $P_{k+1}=(1+j)P_k$ and use it to find the last principal repayment of a 12-month loan with first principal ₹5,000 at $j=1\%$.
4. A project costs ₹5,00,000 and returns ₹6,00,000 after one year and ₹1,50,000 after two. Find its NPV at 10% and its IRR.
5. Why can a project with cash flows $(-100,230,-132)$ have two IRRs, and what are they?

## Takeaway

- An EMI is a loan divided by an annuity factor at the monthly rate; the schedule follows from $I_k=jB_{k-1}$.
- Principal repayments grow geometrically, so early instalments are interest-heavy and early prepayment is the most valuable.
- NPV discounts the project's cash flows at the cost of capital; the IRR is the rate at which that NPV is zero.
- IRR is reliable for a single conventional project but can be non-unique, and can rank exclusive projects wrongly.
- Crossover rates and NPV profiles show where the ranking changes; NPV at the cost of capital decides.
