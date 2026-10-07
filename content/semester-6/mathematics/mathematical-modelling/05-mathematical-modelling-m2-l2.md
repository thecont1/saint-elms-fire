***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-6
semesterName: Semester 6
subjectId: mathematics
subjectName: Mathematics
courseId: mathematical-modelling
courseName: Mathematical Modelling (Math Elective II, C)
moduleId: mathematical-modelling-module-2
moduleName: Stability, Bifurcation and Spatial Spread
lessonId: mathematical-modelling-m2-l2
lessonName: Bifurcations and Perturbation Methods
lessonNumber: 5
moduleNumber: 2
semesterNumber: 6
difficulty: advanced
estimatedStudyMinutes: 55
releaseOrder: 5
prerequisites:
  - mathematical-modelling-m2-l1
  - mathematical-modelling-m1-l2
  - real-analysis-m2-l3
learningObjectives:
  - Identify and analyse saddle-node, transcritical and Hopf bifurcations from the normal forms and from the linearisation of a model.
  - Explain the collapse of a harvested population as a saddle-node bifurcation and the role of critical slowing down.
  - Construct a regular perturbation expansion in a small dimensionless parameter and compare it with the exact solution.
  - Recognise a singular perturbation problem and build an outer solution, a boundary-layer solution and a composite approximation.
concepts:
  - Bifurcation
  - Saddle-node bifurcation
  - Transcritical bifurcation
  - Hopf bifurcation and limit cycle
  - Critical slowing down
  - Regular perturbation expansion
  - Boundary layer
tags:
  - mathematics
  - mathematical-modelling
  - bifurcation
  - perturbation-methods
sourceType: authored-courseware
status: in-review
assessmentHints:
  - derivation
  - conceptual
  - problem-solving
  - computational
***

# Bifurcations and Perturbation Methods

## Overview

Model behaviour can change abruptly when a parameter crosses a critical value: an equilibrium vanishes, two exchange stability, or a steady state starts to oscillate. Such a change is a **bifurcation**, and locating bifurcations tells us where a system is fragile. This lesson classifies the three bifurcations that matter most in applications, applying them to a harvested fishery and to epidemic onset, and then asks what happens when a parameter is small. Regular perturbation expands the solution in powers of the small parameter; singular perturbation handles the harder case in which the small parameter multiplies the highest derivative and a thin boundary layer appears. Both rest on the dimensionless parameters of Lesson m1-l2.

## Learning Path

- **What you should already know**: equilibria, linear stability and the trace–determinant classification (Lesson m2-l1); dimensionless parameters such as $\varepsilon = U^2/v_t^2$ (Lesson m1-l2); Taylor expansions (real-analysis m2-l3).
- **What this lesson adds**: normal forms for saddle-node, transcritical and Hopf bifurcations; critical slowing down; regular perturbation series; boundary layers and matched composite solutions.
- **What later lessons this will unlock**: the existence and minimum speed of travelling waves (Lesson m2-l3); the idea that a fitted model may sit near a bifurcation, affecting sensitivity (Lesson m3-l2).

## Core Explanation

### Saddle-node bifurcation

The prototype is $\dot x = r - x^2$. For $r > 0$ there are two equilibria $x = \pm\sqrt{r}$, with $f'(x) = -2x$, so $+\sqrt r$ is stable and $-\sqrt r$ unstable. At $r = 0$ they merge and for $r < 0$ none remain: every trajectory runs off to $-\infty$. The harvested fishery of Lesson m1-l3 is this normal form in disguise. In the dimensionless equation $\dot u = u(1-u) - h$ the equilibria are $u^* = \tfrac12\left(1 \pm \sqrt{1 - 4h}\right)$, which collide at $u = 1/2$ when $h = 1/4$. The linearised rates are $\mp\sqrt{1-4h}$, vanishing at $h = 1/4$, so a stock near the threshold recovers from perturbations more and more slowly, a phenomenon called **critical slowing down**. Slow recovery is therefore an early warning of collapse. Because the collapsed state is far from the sustainable one, the change is abrupt and hard to reverse: restoring the stock requires cutting the harvest well below the level at which collapse occurred, a case of **hysteresis**.

### Transcritical bifurcation

The prototype is $\dot x = rx - x^2$. The equilibria $x = 0$ and $x = r$ cross at $r = 0$ and exchange stability: for $r < 0$ the origin is stable, for $r > 0$ it is unstable and the equilibrium $x = r$ is stable. This is logistic growth with the growth rate as parameter, and it also describes epidemic onset. In the SIR model with births and deaths, the disease-free state is stable if $R_0 < 1$ and unstable if $R_0 > 1$, where a stable endemic state appears. The equilibrium $x = 0$ persists for every $r$ because there can be no infection without infectives. (With the reflection symmetry $x \to -x$ the analogue is the **pitchfork** $\dot x = rx - x^3$.)

### Hopf bifurcation

A **Hopf bifurcation** occurs in two or more dimensions when a pair of complex-conjugate eigenvalues crosses the imaginary axis at $\pm i\omega$, that is, when $\mathrm{tr}J$ changes sign while $\det J > 0$. The normal form, in polar coordinates, is

$$\dot r = \mu r - r^3, \qquad \dot\theta = 1.$$

For $\mu < 0$ the origin is a stable spiral. For $\mu > 0$ it is unstable, but the cubic term stops the growth at $r = \sqrt{\mu}$, so trajectories approach a stable **limit cycle** of that radius and period $2\pi$. The amplitude grows as $\sqrt{\mu}$, so for $\mu = 0.04$ the cycle has radius $0.2$. Limit cycles underlie self-sustained oscillation in chemical reactions, heartbeats and some predator–prey systems; a saturating predator response with large carrying capacity can destabilise the equilibrium of Lesson m2-l1 into one (the "paradox of enrichment"). Unlike the neutral cycles of Lotka–Volterra, a limit cycle has a fixed amplitude independent of the initial conditions.

### Regular perturbation

Suppose a model contains a small dimensionless parameter $\varepsilon$ and reduces to a solvable problem at $\varepsilon = 0$. Seek the solution as a series $x(t;\varepsilon) = x_0(t) + \varepsilon x_1(t) + \varepsilon^2 x_2(t) + \cdots$, substitute into the equation and boundary conditions, and equate coefficients of each power of $\varepsilon$. Each order gives a linear problem driven by the lower orders.

Take a ball thrown vertically with linear drag. In the scaling of Lesson m1-l2 (velocity scale $U$, time scale $U/g$, with $\varepsilon = kU/(mg)$),

$$\ddot y = -1 - \varepsilon\dot y, \qquad y(0) = 0,\ \dot y(0) = 1.$$

At $O(1)$: $\ddot y_0 = -1$, so $y_0 = t - t^2/2$. At $O(\varepsilon)$: $\ddot y_1 = -\dot y_0 = -(1 - t)$, with $y_1(0) = \dot y_1(0) = 0$, so $\dot y_1 = -t + t^2/2$ and $y_1 = -t^2/2 + t^3/6$. The maximum height occurs when $\dot y = 0$. Write $t_a = 1 + \varepsilon t_1$ (the vacuum apex time is $1$): then $\dot y = (1 - t_a) + \varepsilon\dot y_1(1) + \cdots = -\varepsilon t_1 - \varepsilon/2 + O(\varepsilon^2) = 0$ gives $t_1 = -\tfrac12$. Since $\dot y_0(1) = 0$, the shift in $t_a$ does not change the height at this order, so

$$y_{\max} = y_0(1) + \varepsilon y_1(1) = \tfrac12 - \tfrac{\varepsilon}{3}.$$

This problem has the exact solution $y_{\max} = \left(\varepsilon - \ln(1+\varepsilon)\right)/\varepsilon^2 = \tfrac12 - \tfrac{\varepsilon}{3} + \tfrac{\varepsilon^2}{4} - \cdots$, which confirms the first two terms. Drag lowers the height by $\varepsilon/3$, in proportion to $\varepsilon$.

```python
import numpy as np
import matplotlib.pyplot as plt

eps = np.linspace(0.01, 1.0, 100)
exact = (eps - np.log1p(eps))/eps**2
first = 0.5 - eps/3
second = first + eps**2/4
plt.plot(eps, exact, label="exact"); plt.plot(eps, first, "--", label="O(eps)")
plt.plot(eps, second, ":", label="O(eps^2)")
plt.xlabel("eps"); plt.ylabel("max height (U^2/g)"); plt.legend(); plt.show()
```

The curves agree for $\varepsilon \lesssim 0.3$ and separate as $\varepsilon$ approaches 1.

### Singular perturbation and boundary layers

Regular perturbation fails when setting $\varepsilon = 0$ lowers the order of the equation, because then the solution cannot satisfy all the boundary conditions. Consider

$$\varepsilon y'' + y' + y = 0, \qquad y(0) = 0,\ y(1) = 1.$$

Away from $x = 0$, drop the $\varepsilon y''$ term: the **outer** equation $y' + y = 0$ gives $y_o = Ae^{-x}$. Imposing the condition at $x = 1$ gives $A = e$, so $y_o = e^{1-x}$. This cannot satisfy $y(0) = 0$; since $y_o(0) = e$, there must be a thin **boundary layer** near $x = 0$. Stretch the variable, $x = \varepsilon X$, so that the two highest terms balance: $Y'' + Y' + \varepsilon Y = 0$, which at leading order has solution $Y = B + Ce^{-X}$. The condition $Y(0) = 0$ gives $C = -B$. **Matching** the inner solution as $X \to \infty$ to the outer solution as $x \to 0$ requires $B = y_o(0) = e$. The **composite** approximation, uniformly valid on $[0,1]$, is

$$y \approx e^{1-x} - e\,e^{-x/\varepsilon}.$$

The layer has thickness of order $\varepsilon$. Examples include viscous boundary layers at high Reynolds number (Lesson m1-l2) and quasi-steady-state reductions in enzyme kinetics, where a fast variable equilibrates within a short initial layer.

## Key Ideas

- **Bifurcation**: a qualitative change in the equilibria or stability as a parameter varies.
- **Saddle-node** ($\dot x = r - x^2$): two equilibria collide and vanish; the harvested stock collapses at $H = rK/4$, with critical slowing down as warning.
- **Transcritical** ($\dot x = rx - x^2$): two equilibria exchange stability; epidemic onset at $R_0 = 1$ is an example.
- **Hopf**: a complex pair of eigenvalues crosses the imaginary axis; a limit cycle of radius $\sqrt\mu$ is born.
- **Regular perturbation**: expand in $\varepsilon$, solve order by order; a solvable $\varepsilon = 0$ problem is needed.
- **Singular perturbation**: when $\varepsilon$ multiplies the highest derivative, combine outer and boundary-layer solutions by matching.

## Worked Examples

### Example 1 — Distance to collapse

For $r = 0.4\ \text{yr}^{-1}$ and $K = 10\,000$ t, the stock recovers from a small disturbance at rate $0.4\sqrt{1 - 4H/(rK)}$. Compare the recovery times for $H = 800$ and $H = 900$ t/yr, and find the critical quota.

**Solution.** The critical quota is $rK/4 = 1000$ t/yr. At $H = 800$: $4H/(rK) = 0.8$, rate $= 0.4\sqrt{0.2} = 0.179\ \text{yr}^{-1}$, recovery time $5.6$ yr. At $H = 900$: $4H/(rK) = 0.9$, rate $= 0.4\sqrt{0.1} = 0.126\ \text{yr}^{-1}$, recovery time $7.9$ yr. A 12.5% rise in the quota increased the recovery time by 41%, and at $H = 990$ the time would be $1/(0.4 \times 0.1) = 25$ yr. Monitoring how slowly the stock rebounds gives an early warning without knowing $r$ or $K$.

### Example 2 — The perturbation expansion for a thrown ball

A ball is thrown upward with $\varepsilon = 0.3$. Compare the maximum height from the exact result, the first-order and the second-order expansion.

**Solution.** Exact: $\left(0.3 - \ln 1.3\right)/0.09 = (0.3 - 0.26236)/0.09 = 0.4182$ in units of $U^2/g$. First order: $0.5 - 0.3/3 = 0.4000$, an error of $4.3\%$. Second order: $0.4000 + 0.09/4 = 0.4225$, an error of $1.0\%$. The vacuum value $0.5$ is $20\%$ too high. A single correction term removes most of the discrepancy; the series cannot be trusted at $\varepsilon \sim 1$, since its terms $\varepsilon^n/(n+2)$ diverge for $\varepsilon > 1$.

### Example 3 — A boundary layer

Evaluate the composite solution of $\varepsilon y'' + y' + y = 0$, $y(0) = 0$, $y(1) = 1$ for $\varepsilon = 0.05$ at $x = 0.05$ and $x = 0.5$.

**Solution.** At $x = 0.05$: $y \approx e^{0.95} - e\,e^{-1} = 2.586 - 1.000 = 1.586$. The layer term is large there, while the outer solution alone would give $2.586$. At $x = 0.5$: $y \approx e^{0.5} - e\,e^{-10} = 1.6487 - 0.0001 = 1.6486$, so the layer term has vanished and the outer solution is accurate. The solution rises from $0$ to about $2.7$ over a distance of a few times $\varepsilon = 0.05$, then decays gently to $1$. A uniform grid with spacing larger than $\varepsilon$ would miss the layer, so the mesh must be refined near $x = 0$.

## Common Misconceptions

- **"A bifurcation is a failure of the model."** It is a feature: the model correctly predicts that the real system can change behaviour qualitatively.
- **"Recovery after harvest reduction retraces the path of collapse."** Hysteresis means the recovery threshold differs from the collapse threshold.
- **"A small parameter can always be set to zero."** Setting $\varepsilon = 0$ in $\varepsilon y'' + y' + y = 0$ loses a boundary condition and gives a wrong answer near $x = 0$.
- **"Adding more perturbation terms always helps."** Many series are only asymptotic; beyond an optimal number of terms the approximation worsens.
- **"A limit cycle is the same as a Lotka–Volterra cycle."** The limit cycle attracts nearby orbits and has a fixed amplitude; the Lotka–Volterra orbits are neutral and set by initial data.

## Connections

- Collapse at the maximum sustainable yield is a central lesson of fisheries management; the same saddle-node structure describes tipping points and runaway ignition in astrophysics.
- The Poincaré–Lindstedt extension of regular perturbation yields the pendulum correction $T = 2\pi(1 + \theta_0^2/16)$ of Lesson m2-l1, and perturbation theory corrects solvable Hamiltonians in quantum mechanics.
- Boundary layers are the viscous layers of fluid dynamics; their difficulty for uniform meshes parallels the stiffness problem of numerical-methods m3-l3, where fast scales force small steps.
- The Hopf normal form is a nonlinear oscillator whose damping $\mu - r^2$ changes sign, extending differential-equations m2-l2.
- Dimensionless parameters from Lesson m1-l2 tell you which $\varepsilon$ to expand in.

## Quick Check

1. Show that $\dot x = r + x^2$ has a saddle-node bifurcation at $r = 0$ and say for which $r$ equilibria exist.
2. Find the equilibria of $\dot x = rx - x^2$ and state their stability for $r < 0$ and $r > 0$.
3. For $\dot r = \mu r - r^3$ with $\mu = 0.09$, what is the amplitude of the limit cycle?
4. Find the first-order correction $x_1$ to the root of $x^2 + \varepsilon x - 1 = 0$ near $x = 1$, and compare with the exact root for $\varepsilon = 0.1$.
5. Explain why $\varepsilon y'' + y' + y = 0$ is singular and where the boundary layer lies.

## Takeaway

- Bifurcations mark parameter values where behaviour changes qualitatively; the saddle-node, transcritical and Hopf cases are the main building blocks.
- Critical slowing down is a measurable warning that a saddle-node is near.
- Regular perturbation gives corrections order by order, and its first terms often suffice for small $\varepsilon$.
- When the small parameter multiplies the highest derivative, the solution has a boundary layer, and outer and inner solutions must be matched.
- Both bifurcation analysis and perturbation theory depend on identifying the right dimensionless parameter first.
