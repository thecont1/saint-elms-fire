***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-2
semesterName: Semester 2
subjectId: mathematics
subjectName: Mathematics
courseId: differential-equations
courseName: Differential Equations
moduleId: differential-equations-module-1
moduleName: First-Order ODEs
lessonId: differential-equations-m1-l2
lessonName: Separable and Linear First-Order ODEs
lessonNumber: 2
moduleNumber: 1
semesterNumber: 2
difficulty: foundation
estimatedStudyMinutes: 50
releaseOrder: 2
prerequisites:
  - differential-equations-m1-l1
learningObjectives:
  - Solve separable first-order ODEs by integration.
  - Recognise and solve linear first-order ODEs using an integrating factor.
  - State the integrating factor formula and apply it.
  - Recognise the natural exponential growth and decay form.
concepts:
  - Separable ODE
  - Linear first-order ODE
  - Integrating factor
  - Exponential growth and decay
  - Newton's law of cooling
  - Initial value problem
tags:
  - mathematics
  - differential-equations
  - separable
sourceType: authored-courseware
assessmentHints:
  - derivation
  - problem-solving
  - conceptual
***

# Separable and Linear First-Order ODEs

## Overview
Two first-order ODE forms are the workhorses of applied mathematics. *Separable* equations can be split into an $x$ part and a $y$ part, each integrable on its own. *Linear* first-order equations can be reduced to a separable equation by multiplying through by an *integrating factor*. Together, they cover most of the models in population dynamics, radioactive decay, RC circuits, and chemical kinetics.

## Learning Path
- What you should already know: integration techniques, exponentials, logarithms.
- What this lesson adds: two systematic solution methods and a stock of standard applications.
- What it unlocks: exact equations, integrating factors, and the second-order methods of the next module.

## Core Explanation
**Separable ODEs.** A first-order ODE of the form

$$y' = f(x) g(y)$$

is *separable*: you can divide by $g(y)$ and integrate both sides:

$$\frac{dy}{g(y)} = f(x)\, dx \quad \Rightarrow \quad \int \frac{dy}{g(y)} = \int f(x)\, dx + C.$$

The constant of integration $C$ encodes the family of solutions. Apply an initial condition to pin it down. Implicit solutions (an equation in $x$ and $y$ rather than $y$ as a function of $x$) are often fine; you don't need to solve for $y$ explicitly.

**Linear first-order ODEs.** A first-order ODE of the form

$$y' + p(x) y = q(x)$$

is *linear*. The right-hand side $q(x)$ is called the *forcing* or *source* term; if $q = 0$ the equation is homogeneous.

The integrating factor is

$$\mu(x) = \exp\left(\int p(x)\, dx\right).$$

Multiply both sides by $\mu$:

$$\mu y' + \mu p y = \mu q \quad \Rightarrow \quad (\mu y)' = \mu q.$$

The left-hand side becomes a total derivative. Integrate:

$$y(x) = \frac{1}{\mu(x)} \int \mu(x) q(x)\, dx + \frac{C}{\mu(x)}.$$

**Why the integrating factor works.** $(\mu y)' = \mu y' + \mu' y$. We want $\mu' = \mu p$, so $\mu = \exp(\int p\, dx)$. With this choice, $\mu y' + \mu p y = \mu y' + \mu' y = (\mu y)'$. The ODE becomes a total derivative.

**Exponential growth and decay.** The simplest linear first-order ODE is $y' = k y$ (homogeneous). Solution: $y(t) = y_0 e^{k t}$. $k > 0$ gives exponential growth; $k < 0$ gives exponential decay; $k = 0$ gives $y = y_0$ (equilibrium). With forcing $y' = k y + c$, the solution is $y = (y_0 + c/k) e^{k t} - c/k$.

**Radioactive decay.** A sample of $N(t)$ atoms decays at a rate proportional to $N$: $dN/dt = -\lambda N$. Solution: $N(t) = N_0 e^{-\lambda t}$. The *half-life* $T_{1/2} = \ln 2 / \lambda$ is the time for half the atoms to decay. Different isotopes have wildly different half-lives: $T_{1/2} \approx 4.5 \times 10^9$ years for $^{238}\text{U}$, $5730$ years for $^{14}\text{C}$, $8$ days for $^{131}\text{I}$, microseconds for many short-lived nuclear isomers.

**Newton's law of cooling.** The rate of cooling of an object is proportional to the temperature difference with the surroundings: $dT/dt = -k (T - T_s)$. Solution: $T(t) = T_s + (T_0 - T_s) e^{-k t}$. A hot cup of coffee cools exponentially toward room temperature.

**Population growth.** The simplest population model is $dP/dt = r P$ (Malthus), giving exponential growth. The logistic model adds a carrying capacity: $dP/dt = r P (1 - P/K)$, which is a separable but nonlinear equation. Solution: $P(t) = K / (1 + A e^{-r t})$ where $A = (K/P_0) - 1$. The population approaches $K$ asymptotically.

**Mixing problems.** A tank with $V$ litres of brine containing $Q$ kg of salt. Fresh water flows in at rate $r$, mixed brine flows out at rate $r$. Then $dQ/dt = -r Q/V$, giving $Q(t) = Q_0 e^{-rt/V}$. Mixing problems are linear first-order with $q = 0$.

**RC circuit revisited.** From *Electricity and Magnetism* Module 2: the voltage $V_C$ on a charging capacitor satisfies $RC \, dV_C/dt + V_C = V_s$, a linear first-order ODE. The integrating factor is $e^{t/RC}$, and the solution is $V_C(t) = V_s + A e^{-t/RC}$, where $A$ is fixed by the initial condition.

## Key Ideas
- Separable: $y' = f(x) g(y)$. Divide by $g(y)$, integrate both sides.
- Linear: $y' + p(x) y = q(x)$. Integrating factor $\mu = \exp(\int p\, dx)$.
- After multiplying by $\mu$, the left side becomes a total derivative.
- Exponential decay/growth: $y' = k y \Rightarrow y = y_0 e^{k t}$.
- Half-life: $T_{1/2} = \ln 2 / \lambda$.

## Worked Examples
**Example 1 — Radioactive decay.** A sample has $10^{12}$ atoms of an isotope with half-life $10$ years. How many remain after $30$ years?
After $n$ half-lives, $N = N_0 / 2^n = 10^{12}/8 = 1.25 \times 10^{11}$. Alternatively, $\lambda = \ln 2 / 10 = 0.0693\text{ yr}^{-1}$, $N(30) = 10^{12} e^{-0.0693 \times 30} = 10^{12} e^{-2.079} = 1.25 \times 10^{11}$.

**Example 2 — Mixing.** A $100\text{ L}$ tank initially contains $10\text{ kg}$ of salt. Fresh water flows in at $5\text{ L/min}$, and the well-mixed solution flows out at $5\text{ L/min}$. How much salt is left after $20$ min?
$Q(t) = 10 e^{-5 t/100} = 10 e^{-t/20}$. At $t = 20$: $Q = 10 e^{-1} \approx 3.68\text{ kg}$.

**Example 3 — Linear ODE.** Solve $y' + 2 x y = x$.
$p(x) = 2x$, $\mu = e^{x^2}$. Multiply: $e^{x^2} y' + 2 x e^{x^2} y = (e^{x^2} y)' = x e^{x^2}$. Integrate: $e^{x^2} y = \tfrac{1}{2} e^{x^2} + C \Rightarrow y = \tfrac{1}{2} + C e^{-x^2}$.

## Common Misconceptions
- **"Any ODE can be made separable."** Only those of the form $y' = f(x) g(y)$ or equivalent. Linear ODEs become separable *after* multiplying by the integrating factor.
- **"You can divide by $y$ to make $y' = k$ separable."** Only if $y \ne 0$. The case $y = 0$ is a possible solution (an equilibrium) that may be lost.
- **"The integrating factor always works."** It works for linear first-order equations. Nonlinear equations need other methods.
- **"Exponential growth is realistic for populations."** It is the Malthusian ideal. Real populations have carrying capacities, predators, and other limits, and the logistic model is closer to reality for bounded populations.

## Connections
Linear first-order ODEs govern RC circuits (*Electricity and Magnetism* Module 2), radioactive decay (*Nuclear Physics*), Newton's law of cooling (heat transfer), and exponential population growth (ecology). Separable ODEs include the logistic model and many chemical-kinetic equations. The logistic ODE is solved in *Numerical Methods* (Sem 4) for comparison with numerical schemes.

## Quick Check
1. Solve $y' = x y$ with $y(0) = 1$.
2. Solve $y' + 3 y = e^x$ with $y(0) = 0$.
3. A sample of $^{14}\text{C}$ has a half-life of $5730$ years. What fraction remains after $11{,}460$ years?
4. State the integrating factor for $y' + p(x) y = q(x)$.
5. A cup of coffee at $90°\text{C}$ cools in a $20°\text{C}$ room with $k = 0.1\text{ min}^{-1}$. What is its temperature after $10$ min?

## Takeaway
- Separable ODE: divide by $g(y)$, integrate both sides.
- Linear first-order: integrating factor $\mu = \exp(\int p\, dx)$ reduces it to a total derivative.
- Exponential decay $y = y_0 e^{-\lambda t}$ governs radioactive decay, cooling, and discharging capacitors.
- Half-life: $T_{1/2} = \ln 2 / \lambda$.
- Initial conditions pick the integration constant.
