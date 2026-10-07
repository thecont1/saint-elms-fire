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
lessonId: mathematical-modelling-m1-l1
lessonName: The Modelling Cycle, Assumptions and Conservation Laws
lessonNumber: 1
moduleNumber: 1
semesterNumber: 6
difficulty: foundation
estimatedStudyMinutes: 50
releaseOrder: 1
prerequisites:
  - differential-equations-m1-l1
  - differential-equations-m3-l3
learningObjectives:
  - Describe the stages of the modelling cycle and classify a model as deterministic or stochastic, discrete or continuous, mechanistic or empirical.
  - Translate a word problem into an explicit list of assumptions and a balance law of the form rate of change equals inflow minus outflow plus production.
  - Formulate and solve first-order compartment and cooling models, and interpret equilibria and time scales such as $\tau = V/Q$ physically.
  - Judge when a model should be refined by comparing its predictions with data or with a known limiting case.
concepts:
  - Modelling cycle
  - Model assumptions
  - Conservation law
  - Balance equation
  - Mixing tank model
  - Newton's law of cooling
  - Torricelli's law
tags:
  - mathematics
  - mathematical-modelling
  - model-formulation
  - conservation-laws
sourceType: authored-courseware
status: in-review
assessmentHints:
  - conceptual
  - derivation
  - problem-solving
  - computational
***

# The Modelling Cycle, Assumptions and Conservation Laws

## Overview

A mathematical model is a deliberate simplification of a real situation, written as equations so that it can be analysed, solved and compared with observation. The art lies in the choices that precede the equations: what to include, what to neglect, and which principle will generate them. This lesson introduces the modelling cycle as a loop of formulation, analysis, interpretation and validation, and shows that most continuous models come from one idea, the balance law: the rate of change of a quantity equals what flows in, minus what flows out, plus what is created inside. Three classical first-order models (a mixing tank, Newton's law of cooling and Torricelli's draining tank) are built from this principle, solved, and examined for equilibria, time scales and limits of validity. Throughout, we write the assumptions down explicitly, because the assumptions, not the algebra, determine what a model can tell us.

## Learning Path

- **What you should already know**: separable and linear first-order ODEs (differential-equations m1-l1, m1-l2); RC-circuit and population models (differential-equations m3-l3); SI units.
- **What this lesson adds**: the vocabulary of modelling; the balance-law recipe; extracting time scales and equilibria before solving; three worked models with Python.
- **What later lessons this will unlock**: nondimensionalisation (Lesson m1-l2); compartment models (Lesson m1-l3); stability and bifurcation analysis (Module 2); calibration and validation (Module 3).

## Core Explanation

### What a model is

A **mathematical model** is a set of mathematical objects (variables, parameters, equations, probability distributions) together with an **interpretation** linking each object to a measurable quantity. Its purpose (explanation, prediction, control or design) fixes the tolerable error. A **state variable** summarises what the model needs to know about the system at time $t$; a **parameter** is held fixed during a run; a **forcing** is an externally prescribed function of time.

Models are deterministic or stochastic, continuous or discrete in time, mechanistic (derived from laws) or empirical (fitted to data), and lumped (compartment) or distributed (field) in space.

### The modelling cycle

Modelling is iterative. Six stages are convenient:

1. **Pose the question.** "How long after discharge stops does the lake concentration fall below the drinking-water limit?" can be modelled; "how does a lake respond to pollution?" cannot.
2. **State the assumptions** as sentences that could be false: "the tank is perfectly mixed".
3. **Formulate.** Choose state variables and parameters, apply a balance law, and obtain equations with initial or boundary conditions.
4. **Analyse.** Find equilibria, time scales and dimensionless groups; then solve exactly, asymptotically or numerically.
5. **Interpret and validate** against data, limiting cases and common sense (signs, magnitudes, units).
6. **Refine or stop.** If the model fails a test, revisit the assumptions, not the algebra; if it answers the question, stop.

A model is rarely "wrong"; one of its assumptions is violated in the regime studied, and identifying which one is the most valuable outcome of a failed validation.

### Conservation laws as the generating principle

Almost every continuous mechanistic model has the form

$$\frac{d}{dt}(\text{amount of } X) = (\text{rate in}) - (\text{rate out}) + (\text{net production inside}).$$

If $X$ is mass, charge, energy or momentum the production term vanishes and this is a strict **conservation law**; if $X$ is the number of infected people or a reacting species, the production term encodes the biology or chemistry. **Constitutive relations** link the fluxes to the state. Conservation is exact; the assumptions live in the constitutive relations. For a well-mixed **compartment** the law is an ODE; applied to a small volume element it becomes a PDE, as in Lesson m2-l3.

### Model 1: the mixing tank

A tank holds volume $V$. Brine of concentration $c_{\text{in}}$ enters at volumetric rate $Q$, the tank is stirred, and liquid leaves at the same rate, so $V$ is constant. Let $S(t)$ be the mass of salt in the tank. Assumptions: (i) perfect mixing, so the outflow concentration is $S/V$; (ii) constant $Q$, $V$, $c_{\text{in}}$; (iii) salt is conserved. The balance law gives

$$\frac{dS}{dt} = Q c_{\text{in}} - Q\frac{S}{V}.$$

Setting $dS/dt = 0$ gives the **equilibrium** $S^* = c_{\text{in}} V$: the tank eventually matches the inflow. Writing $S = S^* + u$ gives $du/dt = -u/\tau$ with the **residence time** $\tau = V/Q$, so

$$S(t) = c_{\text{in}} V + \left(S_0 - c_{\text{in}} V\right) e^{-t/\tau}.$$

Every linear mixing problem relaxes exponentially on the residence-time scale; a 1000 L tank fed at 4 L/min has $\tau = 250$ min, and after $3\tau$ the deviation from equilibrium is below 5%. Both facts precede solving, which is why Stage 4 begins with equilibria and time scales.

### Model 2: Newton's law of cooling

A body at temperature $T(t)$ sits in surroundings at $T_a$. Assumptions: (i) the body is **lumped**, internally uniform in temperature, valid when internal conduction is much faster than surface loss; (ii) heat loss is proportional to the temperature difference, $\dot Q = hA(T - T_a)$; (iii) constant mass $m$ and specific heat $c$. The energy balance is

$$mc\frac{dT}{dt} = -hA(T - T_a) \quad\Longrightarrow\quad \frac{dT}{dt} = -k(T - T_a), \qquad k = \frac{hA}{mc},$$

with solution $T(t) = T_a + (T_0 - T_a)e^{-kt}$, time scale $1/k$ and equilibrium $T_a$. The model fails for radiative cooling (loss $\propto T^4 - T_a^4$) and for large bodies, where assumption (i) fails and the heat equation of Lesson m1-l2 is needed. Note that $k$ bundles four quantities: cooling data estimate $k$ but never $h$ and $A$ separately, a first example of **identifiability** (Lesson m3-l1).

### Model 3: Torricelli's draining tank

A tank of horizontal cross-section $A$ drains through a small hole of effective area $a$ at its base; $h(t)$ is the depth. Assumptions: (i) incompressible, inviscid liquid; (ii) outflow speed $v = \sqrt{2gh}$ (Torricelli's law, energy conservation for $a \ll A$); (iii) jet contraction is absorbed into $a$. Volume balance with no inflow gives

$$A\frac{dh}{dt} = -a\sqrt{2gh}.$$

For constant $A$ the equation is separable:

$$\int_{h_0}^{h}\frac{dh'}{\sqrt{h'}} = -\frac{a\sqrt{2g}}{A}\,t \quad\Longrightarrow\quad \sqrt{h(t)} = \sqrt{h_0} - \frac{a\sqrt{2g}}{2A}\,t.$$

The tank empties at the finite time $t_e = \dfrac{2A}{a}\sqrt{\dfrac{h_0}{2g}}$, and $h(t) = h_0(1 - t/t_e)^2$. Unlike the two linear models, the approach to equilibrium is not exponential: the nonlinearity $\sqrt{h}$ changes the qualitative behaviour, a theme of Module 2.

### Checking a model before trusting it

Three cheap checks catch most formulation errors. **Units**: $Qc_{\text{in}}$ has units (L/min)(kg/L) = kg/min, matching $dS/dt$. **Signs and limits**: if $S > c_{\text{in}}V$ then $dS/dt < 0$; if $a \to 0$ then $t_e \to \infty$. **Special cases**: with $c_{\text{in}} = 0$ the mixing model reduces to washout $S = S_0 e^{-t/\tau}$, the law of radioactive decay.

The script integrates the mixing-tank model and overlays the exact solution; the curves coincide, rising from 20 kg to the 100 kg plateau with time constant 250 min.

```python
import numpy as np
from scipy.integrate import solve_ivp
import matplotlib.pyplot as plt

Q, V, c_in, S0 = 4.0, 1000.0, 0.1, 20.0          # L/min, L, kg/L, kg
rhs = lambda t, S: [Q*c_in - Q*S[0]/V]
t = np.linspace(0, 1200, 400)
sol = solve_ivp(rhs, (0, 1200), [S0], t_eval=t, rtol=1e-8)
exact = c_in*V + (S0 - c_in*V)*np.exp(-Q*t/V)
plt.plot(t, sol.y[0], label="numerical"); plt.plot(t, exact, "--", label="exact")
plt.axhline(c_in*V, color="grey", lw=0.8); plt.xlabel("t (min)"); plt.ylabel("salt (kg)")
plt.legend(); plt.show()
```

## Key Ideas

- **Model = equations + interpretation**; its purpose fixes the tolerable error.
- **The modelling cycle** runs question, assumptions, formulation, analysis, interpretation and validation, and closes by revising assumptions, never by patching algebra.
- **Balance law**: rate of change equals in minus out plus production; the assumptions sit in the constitutive relations.
- **Equilibria and time scales first**: $S^* = c_{\text{in}}V$ and $\tau = V/Q$ for a mixing tank, $T_a$ and $1/k$ for cooling, precede any solution.
- **Linear laws give exponential relaxation**; nonlinear ones such as Torricelli's $\sqrt{h}$ behave differently, here emptying in finite time.
- **Lumped parameters bundle physics**: $k = hA/(mc)$ is estimable, but its constituents are not separately identifiable.

## Worked Examples

### Example 1 — Reaching a target salinity

A 1000 L tank initially contains 20 kg of dissolved salt. Brine at 0.1 kg/L flows in at 4 L/min and the well-mixed solution leaves at the same rate. When does the tank contain 60 kg of salt?

**Solution.** The balance law is $dS/dt = 0.4 - 0.004S$ kg/min, with equilibrium $S^* = 100$ kg and residence time $\tau = 250$ min. The solution is $S(t) = 100 - 80e^{-t/250}$. Setting $S = 60$:

$$80e^{-t/250} = 40 \quad\Longrightarrow\quad t = 250\ln 2 = 173.3\ \text{min}.$$

Since 60 kg is halfway between the initial and equilibrium values, the answer is one "half-life" $\tau\ln 2$.

### Example 2 — Estimating a cooling constant and predicting a drinking time

Coffee at $90\ ^\circ$C is placed in a $25\ ^\circ$C room. After 5 min it is at $70\ ^\circ$C. When will it reach $40\ ^\circ$C?

**Solution.** From $T - T_a = (T_0 - T_a)e^{-kt}$ with $T_0 - T_a = 65$ K and $T(5) - T_a = 45$ K,

$$k = -\frac{1}{5}\ln\frac{45}{65} = \frac{0.3677}{5} = 0.0735\ \text{min}^{-1},$$

so the time scale is $1/k = 13.6$ min. For $T = 40\ ^\circ$C, $(T - T_a)/(T_0 - T_a) = 15/65 = 0.2308$, and

$$t = -\frac{\ln 0.2308}{0.0735} = \frac{1.466}{0.0735} = 19.9\ \text{min}.$$

A linear extrapolation of the first five minutes (4 K/min) would predict 12.5 min, an error of over a third, because cooling slows as the temperature difference shrinks. The assumptions that the room stays at $25\ ^\circ$C and that evaporation is negligible should be stated.

### Example 3 — Emptying time of a cylindrical tank

A cylindrical tank of cross-section $A = 1.0\ \text{m}^2$ is filled to $h_0 = 2.0$ m and drains through a hole of effective area $a = 1.0\ \text{cm}^2$. How long does it take to empty, and what is the depth after one hour?

**Solution.** With $\sqrt{2g} = \sqrt{19.62} = 4.429\ \text{m}^{1/2}\text{s}^{-1}$ and $a = 10^{-4}\ \text{m}^2$,

$$t_e = \frac{2A}{a}\sqrt{\frac{h_0}{2g}} = \frac{2 \times 1.0}{10^{-4}}\times\frac{\sqrt{2.0}}{4.429} = 2\times 10^4 \times 0.3193 = 6386\ \text{s} \approx 1.77\ \text{h}.$$

After one hour, $t/t_e = 3600/6386 = 0.5637$, so

$$h(3600) = h_0\left(1 - 0.5637\right)^2 = 2.0 \times 0.1904 = 0.381\ \text{m}.$$

More than half the time has elapsed but under a fifth of the depth remains, because outflow is fastest at the start.

## Common Misconceptions

- **"A more detailed model is always better."** Extra detail adds parameters, each with its own uncertainty, and obscures the mechanism. The right level is the simplest that answers the question to the required accuracy.
- **"If the model disagrees with data, the mathematics must be wrong."** Usually an assumption is violated; return to the assumption list.
- **"Conservation laws contain the physics."** The law is exact and almost content-free; the physics is in the constitutive relations (Torricelli's $\sqrt{2gh}$, linear cooling, perfect mixing) that close it.
- **"All first-order models relax exponentially."** Only linear ones do; the draining tank reaches $h = 0$ in finite time.
- **"Parameters such as $k$ are fundamental constants."** They are lumped combinations ($hA/mc$) that depend on geometry and environment, so a value for one cup does not transfer to another.

## Connections

- The mixing-tank equation has the form of the RC-circuit equation of electricity-and-magnetism m2-l3 and the drug-elimination model of Lesson m1-l3; the shared structure $du/dt = -u/\tau$ transfers intuition between fields.
- Newton's law of cooling is the lumped limit of the heat equation of thermal-physics-and-statistical-mechanics m1-l1, nondimensionalised in Lesson m1-l2; lumping needs a small Biot number.
- Torricelli's law applies energy conservation from mechanics m3-l2; the finite emptying time is an instance of the non-uniqueness at $h = 0$ met in differential-equations m1-l1.
- The balance-law recipe also gives flow conservation at network nodes in operations-research m2-l5 and stellar structure in astrophysics.
- `solve_ivp` relies on the Runge–Kutta methods of numerical-methods m3-l3; comparing numerical and exact solutions is itself a validation step.

## Quick Check

1. List the six stages of the modelling cycle and state which stage a failed validation should return you to.
2. A pond of volume $5\times 10^4\ \text{m}^3$ is fed and drained at $200\ \text{m}^3$/day. Find its residence time and the time for a pollutant pulse to decay to 10% with clean inflow.
3. Write the balance law for a lumped body heated electrically at constant power $P$ while cooling by Newton's law, and find its equilibrium temperature.
4. Why does a draining tank empty in finite time while a cooling body never exactly reaches room temperature? Identify the feature of the constitutive law responsible.
5. Give two distinct physical assumptions in the mixing-tank model and describe an experiment that would test each.

## Takeaway

- A model is a simplification with a purpose; write the question and assumptions before any equation.
- The balance law "in minus out plus production" generates almost every continuous mechanistic model; constitutive relations carry the assumptions.
- Extract equilibria and time scales ($S^* = c_{\text{in}}V$, $\tau = V/Q$, $1/k = mc/hA$) before solving; they are often the answer needed.
- Linear laws relax exponentially; nonlinear laws such as Torricelli's behave differently, so justify the constitutive relation.
- Check units, signs, limits and special cases, then compare with data; when that fails, revise an assumption and go round the cycle again.
