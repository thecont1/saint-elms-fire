***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-6
semesterName: Semester 6
subjectId: mathematics
subjectName: Mathematics
courseId: mathematical-modelling
courseName: Mathematical Modelling (Math Elective II, C)
moduleId: mathematical-modelling-module-1
moduleName: Formulation and Scaling
lessonId: mathematical-modelling-m1-l3
lessonName: Compartment Models for Populations, Epidemics and Drugs
lessonNumber: 3
moduleNumber: 1
semesterNumber: 6
difficulty: intermediate
estimatedStudyMinutes: 55
releaseOrder: 3
prerequisites:
  - mathematical-modelling-m1-l1
  - mathematical-modelling-m1-l2
  - differential-equations-m3-l3
learningObjectives:
  - Build logistic, harvested, SIR and one-compartment pharmacokinetic models from the balance law and find their equilibria and time scales.
  - Derive the basic reproduction number $R_0 = \beta/\gamma$, the epidemic peak condition, the herd-immunity threshold and the final-size relation for the SIR model.
  - Compare discrete and continuous versions of a model and explain why an Euler step of the logistic equation can oscillate or become chaotic.
  - Nondimensionalise a compartment model to reveal its controlling parameters.
concepts:
  - Logistic growth
  - Constant and proportional harvesting
  - SIR model
  - Basic reproduction number
  - Final-size relation
  - One-compartment pharmacokinetics
  - Logistic map
tags:
  - mathematics
  - mathematical-modelling
  - compartment-models
  - epidemiology
sourceType: authored-courseware
status: in-review
assessmentHints:
  - conceptual
  - derivation
  - problem-solving
  - computational
***

# Compartment Models for Populations, Epidemics and Drugs

## Overview

A compartment model divides a system into a few well-mixed pools and writes one balance law for each. The mixing tank of Lesson m1-l1 was a single compartment; this lesson links several and lets the flows depend on the contents of the pools. That one change produces logistic saturation in a population, threshold behaviour in an epidemic, and the rise and fall of a drug concentration after a pill. We derive the logistic and harvested-population models, the SIR epidemic model with its basic reproduction number $R_0$, and the pharmacokinetic model, using the scaling of Lesson m1-l2 to reduce each to its essential parameters. It ends by asking whether time should be continuous or discrete, since a numerical step can change the dynamics.

## Learning Path

- **What you should already know**: the balance-law recipe and $\tau = V/Q$ (Lesson m1-l1); characteristic scales (Lesson m1-l2); the logistic equation (differential-equations m3-l3).
- **What this lesson adds**: harvesting, the SIR model with $R_0$, peak and final size, pharmacokinetics with repeated dosing, and difference equations versus ODEs.
- **What later lessons this will unlock**: equilibria, linear stability and phase planes for these models (Lesson m2-l1); the saddle-node collapse of a harvested population (Lesson m2-l2); fitting SIR to outbreak data (Lessons m3-l1 and m3-l3).

## Core Explanation

### Logistic growth and harvesting

Let $N(t)$ be a population. With per-capita birth minus death rate $r$, the balance law gives $\dot N = rN$, exponential growth. Crowding reduces the per-capita rate linearly to zero at the carrying capacity $K$:

$$\frac{dN}{dt} = rN\left(1 - \frac{N}{K}\right).$$

Scale $u = N/K$, $\tau = rt$. No parameters remain: $du/d\tau = u(1-u)$, with solution $u = u_0/(u_0 + (1-u_0)e^{-\tau})$, an S-shaped curve whatever $r$ and $K$ are. The equilibria are $u = 0$ and $u = 1$.

Now remove individuals at a rate $h(N)$. **Constant-quota** harvesting, $h = H$ (fixed tonnes of fish per year), gives

$$\frac{dN}{dt} = rN\left(1 - \frac{N}{K}\right) - H.$$

Equilibria solve $rN(1 - N/K) = H$, so $N^* = \tfrac{K}{2}\left(1 \pm \sqrt{1 - 4H/(rK)}\right)$. Real equilibria exist only if $H \le rK/4$, the maximum of the growth term (at $N = K/2$). This **maximum sustainable yield** $\mathrm{MSY} = rK/4$ is the largest constant quota the population can ever replace. In dimensionless form, with $h = H/(rK)$, $du/d\tau = u(1-u) - h$ and the critical value is $h = 1/4$. For **proportional** (constant-effort) harvesting, $h = EN$, the equation $\dot N = rN(1 - N/K) - EN$ is again logistic with reduced growth rate $r - E$ and equilibrium $N^* = K(1 - E/r)$. The yield $EN^* = EK(1 - E/r)$ is maximal at $E = r/2$, giving the same MSY $rK/4$, but the population then declines gracefully to zero if $E > r$ instead of collapsing abruptly. The two policies have the same maximum yield but different risk, made precise in Lesson m2-l2.

### The SIR epidemic model

Divide a population of fixed size $N$ into susceptibles $S$, infectives $I$ and recovered (immune) $R$. Assumptions: (i) homogeneous mixing, so the infection rate is $\beta SI/N$ with $\beta$ the transmission rate; (ii) infectives recover at rate $\gamma$, so the mean infectious period is $1/\gamma$; (iii) recovery confers lasting immunity; (iv) no births, deaths or migration. The balance laws are

$$\dot S = -\frac{\beta SI}{N}, \qquad \dot I = \frac{\beta SI}{N} - \gamma I, \qquad \dot R = \gamma I.$$

Adding gives $\dot S + \dot I + \dot R = 0$: the total is conserved, a useful check on any code. Factorising: $\dot I = \gamma I\left(\dfrac{\beta}{\gamma}\dfrac{S}{N} - 1\right)$. The **basic reproduction number**

$$R_0 = \frac{\beta}{\gamma}$$

is the expected number of secondary cases caused by one infective in a wholly susceptible population (rate $\beta$ times duration $1/\gamma$). The infection grows if and only if $R_0 S/N > 1$. At the start $S \approx N$, so an outbreak occurs only when $R_0 > 1$, and early growth is exponential, $I \approx I_0 e^{(\beta - \gamma)t}$ with doubling time $\ln 2/(\beta - \gamma)$.

Infection peaks when $\dot I = 0$, that is when $S = N/R_0$; afterwards too few susceptibles remain to sustain growth. Hence the **herd-immunity threshold**: immunising a fraction $1 - 1/R_0$ in advance prevents an outbreak. To find the peak size, eliminate time: $dI/dS = -1 + N/(R_0 S)$, which integrates to $I = I_0 + S_0 - S + \dfrac{N}{R_0}\ln\dfrac{S}{S_0}$. Setting $S = N/R_0$ and, for a small seed, $S_0 \approx N$, $I_0 \approx 0$,

$$\frac{I_{\max}}{N} = 1 - \frac{1}{R_0} - \frac{\ln R_0}{R_0}.$$

The **final size** follows from $dS/dR = -R_0 S/N$, so $S = S_0 e^{-R_0R/N}$. When the epidemic ends $I = 0$, so $R_\infty = N - S_\infty$. With $z = 1 - S_\infty/N$ the fraction ever infected and $S_0 \approx N$,

$$1 - z = e^{-R_0 z}.$$

This has the root $z = 0$ and, for $R_0 > 1$, a second root in $(0,1)$ found by iteration. The epidemic stops because $I$ declines once $S < N/R_0$, so some people always escape. The script integrates the model; the plot shows $S$ falling to about 11% of the population, a bell-shaped $I$ and rising $R$, and the printed values should be close to $0.234$ and $0.893$.

```python
import numpy as np
from scipy.integrate import solve_ivp
import matplotlib.pyplot as plt

N, beta, gamma = 1e6, 0.5, 0.2                      # per day, so R0 = 2.5
def sir(t, y):
    S, I, R = y
    inc = beta*S*I/N
    return [-inc, inc - gamma*I, gamma*I]
t = np.arange(0, 201)
sol = solve_ivp(sir, (0, 200), [N - 10, 10, 0], t_eval=t, rtol=1e-8)
for row, name in zip(sol.y, "SIR"):
    plt.plot(t, row/N, label=name)
plt.xlabel("day"); plt.legend(); plt.show()
print(sol.y[1].max()/N, 1 - sol.y[0, -1]/N)         # peak fraction, final size
```

### One-compartment pharmacokinetics

The body is one well-mixed volume $V$ (the volume of distribution) from which the drug is cleared at a rate proportional to concentration, $\dot A = -kA$ for the amount $A$. For an intravenous bolus of dose $D$, $C(t) = (D/V)e^{-kt}$, with half-life $t_{1/2} = \ln 2/k$. For an oral dose, add a gut compartment with amount $A_g$, absorbed at rate $k_a$:

$$\dot A_g = -k_a A_g, \qquad \dot A = k_a A_g - kA, \qquad A_g(0) = FD,$$

where $F$ is the fraction absorbed. Solving as in the parent–daughter chain of nuclear-physics m2-l2 gives

$$C(t) = \frac{FDk_a}{V(k_a - k)}\left(e^{-kt} - e^{-k_a t}\right),$$

which peaks at $t_{\max} = \dfrac{\ln(k_a/k)}{k_a - k}$ and then decays with the slower rate. Repeated dosing every $\tau$ superposes decaying profiles. After the $n$-th bolus the peak is $C_0\left(1 + e^{-k\tau} + \dots + e^{-(n-1)k\tau}\right)$, which tends to $C_0/(1 - e^{-k\tau})$: the **accumulation factor** is $R_{\mathrm{acc}} = 1/(1 - e^{-k\tau})$. The model fails for drugs that distribute slowly into tissue or whose clearance saturates.

### Discrete versus continuous time

Seasonal breeders suit a difference equation $N_{n+1} = F(N_n)$; continuously changing populations suit ODEs. The choice matters. Apply one Euler step of size $h$ to the dimensionless logistic equation: $u_{n+1} = u_n + a\,u_n(1 - u_n)$ with $a = hr$. The substitution $x_n = \dfrac{a}{1+a}u_n$ turns this into the **logistic map**

$$x_{n+1} = (1 + a)\,x_n(1 - x_n).$$

The fixed point $x^* = a/(1+a)$ (that is, $u^* = 1$) has multiplier $F'(x^*) = 1 - a$, stable only while $|1 - a| < 1$. For $a > 2$ the numerical solution oscillates about $u = 1$, and for larger $a$ it passes through period doubling to chaos. The one-dimensional ODE cannot oscillate. So oscillation in a discrete model may be a property of the system or an artefact of the step, the stability limit of Euler's method in numerical-methods m3-l3.

## Key Ideas

- **Compartment models** write one balance law per pool, with flows that depend on the pools' contents.
- **Logistic growth** scales to $du/d\tau = u(1-u)$; harvesting adds $-h$ and the maximum sustainable yield is $rK/4$.
- **SIR**: $R_0 = \beta/\gamma$; an outbreak needs $R_0 > 1$; the peak occurs at $S = N/R_0$; the herd-immunity threshold is $1 - 1/R_0$.
- **Final size** $1 - z = e^{-R_0 z}$: epidemics end with susceptibles left over.
- **Pharmacokinetics** is the mixing tank for the body: $t_{1/2} = \ln 2/k$, and repeated dosing accumulates by $1/(1 - e^{-k\tau})$.
- **Discrete and continuous models differ**: the Euler step of the logistic equation is a logistic map that becomes unstable for $hr > 2$.

## Worked Examples

### Example 1 — Harvesting a fishery

A fish stock has $r = 0.4\ \text{yr}^{-1}$ and $K = 10\,000$ t. Find the maximum sustainable yield and the equilibria for a quota of 800 t/yr.

**Solution.** $\mathrm{MSY} = rK/4 = 0.4 \times 10\,000/4 = 1000$ t/yr, so a quota of 800 t/yr is feasible. Then $4H/(rK) = 3200/4000 = 0.8$ and

$$N^* = 5000\left(1 \pm \sqrt{0.2}\right) = 5000(1 \pm 0.4472) = 7236\ \text{or}\ 2764\ \text{t}.$$

The upper equilibrium is the sustainable stock; Lesson m2-l1 shows that a stock pushed below the lower one collapses to zero. For proportional harvesting the same yield of 1000 t/yr needs $E = r/2 = 0.2\ \text{yr}^{-1}$, with a stock of 5000 t.

### Example 2 — An outbreak with $R_0 = 2.5$

An infection has $\beta = 0.5$ and $\gamma = 0.2$ per day. Find $R_0$, the doubling time, the herd-immunity threshold, the peak prevalence and the final size.

**Solution.** $R_0 = 0.5/0.2 = 2.5$, the infectious period is 5 days, and the initial growth rate is $\beta - \gamma = 0.3\ \text{day}^{-1}$, so doubling takes $\ln 2/0.3 = 2.31$ days. The herd-immunity threshold is $1 - 1/2.5 = 0.6$. The peak prevalence is

$$\frac{I_{\max}}{N} = 1 - 0.4 - \frac{\ln 2.5}{2.5} = 0.6 - 0.3665 = 0.2335.$$

For the final size solve $z = 1 - e^{-2.5z}$ by iteration from $z = 0.9$: $0.8946$, $0.8933$, $0.8929$, $0.8928$. So 89.3% of the population is eventually infected, even though only 60% needs to be immune to block the outbreak.

### Example 3 — Repeated dosing

A 500 mg intravenous dose is given to a patient with $V = 40$ L and $k = 0.1\ \text{h}^{-1}$. Find the half-life, the time to fall to 2 mg/L, and the steady-state peak and trough for dosing every 12 h.

**Solution.** $C_0 = 500/40 = 12.5$ mg/L and $t_{1/2} = 0.693/0.1 = 6.93$ h. From $12.5e^{-0.1t} = 2$, $t = 10\ln 6.25 = 18.3$ h. For a 12 h interval $e^{-k\tau} = e^{-1.2} = 0.3012$, so $R_{\mathrm{acc}} = 1/(1 - 0.3012) = 1.431$. The steady-state peak is $12.5 \times 1.431 = 17.9$ mg/L and the trough just before the next dose is $17.9 \times 0.3012 = 5.39$ mg/L. A schedule keeps the peak below the toxic level and the trough above the effective level.

## Common Misconceptions

- **"$R_0$ is a property of the pathogen alone."** It also depends on contact patterns and population, so the same virus has different $R_0$ in a school and a village.
- **"The epidemic ends when everyone has been infected or recovered."** It ends when $I$ declines below $S = N/R_0$; a fraction $e^{-R_0 z}$ stays susceptible.
- **"Herd immunity means $R_0 < 1$."** It means the effective reproduction number $R_0 S/N$ is below 1; $R_0$ itself is unchanged.
- **"Maximum sustainable yield is a safe target."** At the MSY the stock sits at the edge of a saddle-node collapse; practical quotas must be well below it.
- **"If a numerical solution oscillates, the system oscillates."** Euler with $hr > 2$ makes the logistic equation oscillate, though the ODE never does.

## Connections

- Logistic kinetics extend differential-equations m3-l3; the form $du/d\tau = u(1-u)$ reappears in the Fisher wave of Lesson m2-l3.
- Drug elimination is the radioactive decay of nuclear-physics m2-l2, and the oral-dose model is its parent–daughter chain.
- The SIR system is a nonlinear analogue of the Markov-chain flows in linear-algebra m3-l1; its Jacobian at the disease-free state decides the threshold (Lesson m2-l1).
- The logistic map's stability limit is the Euler stability condition of numerical-methods m3-l3 seen from the model side.
- The same compartmental balance describes gas moving among phases of the interstellar medium and flow in operations-research m2-l5.

## Quick Check

1. Nondimensionalise $\dot N = rN(1 - N/K) - H$ and state the dimensionless parameter that controls the existence of equilibria.
2. Show that in the SIR model $S + I + R$ is constant and that $I$ increases if and only if $S > N/R_0$.
3. For $R_0 = 4$ compute the herd-immunity threshold and the peak prevalence $I_{\max}/N$.
4. A drug has $k = 0.2\ \text{h}^{-1}$ and is given every 6 h. Find the accumulation factor.
5. For which $h$ does Euler's method for $\dot u = ru(1 - u)$ oscillate about $u = 1$?

## Takeaway

- State-dependent flows in compartment models create saturation, thresholds and peaks.
- Scaling leaves one or two parameters: $h = H/(rK)$ for harvesting, $R_0$ for epidemics.
- $R_0 = \beta/\gamma$ controls the outbreak, the peak $1 - 1/R_0 - \ln R_0/R_0$ and the final size $1 - z = e^{-R_0 z}$.
- Pharmacokinetics is exponential washout with absorption and accumulation.
- Discretising time is a modelling choice: the Euler map of the logistic equation oscillates once $hr > 2$.
