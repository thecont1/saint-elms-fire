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
lessonId: mathematical-modelling-m1-l2
lessonName: Dimensional Analysis, Buckingham Pi and Nondimensionalisation
lessonNumber: 2
moduleNumber: 1
semesterNumber: 6
difficulty: intermediate
estimatedStudyMinutes: 55
releaseOrder: 2
prerequisites:
  - mathematical-modelling-m1-l1
  - differential-equations-m2-l2
learningObjectives:
  - Apply the Buckingham Pi theorem to reduce $n$ variables with $k$ independent dimensions to $n-k$ dimensionless groups.
  - Nondimensionalise an ODE or PDE model and identify its controlling parameters.
  - Interpret $\varepsilon = U^2/v_t^2$ and $\kappa t/L^2$ as ratios of competing effects.
  - Use nondimensional forms to decide which terms to neglect.
concepts:
  - Dimensional homogeneity
  - Buckingham Pi theorem
  - Dimensionless group
  - Characteristic scale
  - Nondimensionalisation
  - Reynolds number
  - Fourier number
tags:
  - mathematics
  - mathematical-modelling
  - dimensional-analysis
  - scaling
sourceType: authored-courseware
status: in-review
assessmentHints:
  - derivation
  - problem-solving
  - conceptual
  - computational
***

# Dimensional Analysis, Buckingham Pi and Nondimensionalisation

## Overview

Physical laws cannot depend on the units we use, and this remark is a powerful modelling tool. Dimensional analysis predicts the form of a relationship before any equation is written, and the Buckingham Pi theorem makes it systematic: $n$ variables involving $k$ independent dimensions combine into exactly $n - k$ dimensionless groups, and every physical law relates those groups alone. For a model already written as a differential equation, the same idea is nondimensionalisation: measuring each variable in its natural unit so that only pure numbers remain. These numbers show which effects compete, which terms may be dropped, and how a laboratory experiment can stand in for a full-scale system. We apply both tools to a sphere, a projectile, the pendulum and a heated rod.

## Learning Path

- **What you should already know**: the modelling cycle and balance laws (Lesson m1-l1); the pendulum (differential-equations m2-l2); projectile motion without drag (mechanics m2-l2); heat conduction (thermal-physics-and-statistical-mechanics m1-l1).
- **What this lesson adds**: homogeneity, the Pi theorem, a recipe for nondimensionalising ODEs and PDEs, and dimensionless numbers as ratios of forces or time scales.
- **What later lessons this will unlock**: compartment models with parameters such as $R_0$ (Lesson m1-l3); perturbation expansions (Lesson m2-l2); diffusion and the Fisher wave speed (Lesson m2-l3); identifiability (Lesson m3-l1).

## Core Explanation

### Dimensional homogeneity

Every physical quantity has a **dimension**, a product of powers of the base dimensions mass $M$, length $L$, time $T$, temperature $\Theta$ and so on. Velocity is $LT^{-1}$, force $MLT^{-2}$, viscosity $\mu$ $ML^{-1}T^{-1}$, diffusivity $\kappa$ $L^2T^{-1}$. An equation is **dimensionally homogeneous** if every additive term has the same dimension; only such equations hold in every system of units. Transcendental functions need dimensionless arguments: $e^{-kt}$ requires $k$ to have dimension $T^{-1}$.

### The Buckingham Pi theorem

Suppose $q_1$ depends on $q_2,\dots,q_n$, and the $n$ quantities involve $k$ independent base dimensions. Then

$$\Phi(\Pi_1, \Pi_2, \dots, \Pi_{n-k}) = 0,$$

with each $\Pi_i$ a dimensionless product of powers of the $q$'s. Equivalently $\Pi_1 = f(\Pi_2,\dots,\Pi_{n-k})$, which can cut thousands of experimental runs to a dozen.

The recipe: (1) list the variables and dimensions; (2) count the independent dimensions $k$ (the rank of the dimension matrix); (3) choose $k$ **repeating variables** containing all the dimensions; (4) form each $\Pi$ from one remaining variable times powers of the repeating variables, solving for the exponents that make it dimensionless.

For the pendulum, the period $T_p$ depends on $\ell$, $g$, $m$ and amplitude $\theta_0$. Here $n = 5$, with dimensions $T$, $L$, $LT^{-2}$, $M$, $1$, so $k = 3$ and there are two groups. Mass appears only in $m$, so it enters no group: the period is independent of mass. The groups are $\Pi_1 = T_p\sqrt{g/\ell}$ and $\Pi_2 = \theta_0$, hence

$$T_p = \sqrt{\frac{\ell}{g}}\;\Phi(\theta_0).$$

Dimensional analysis cannot supply $\Phi$, which the small-angle ODE solution gives as $2\pi$ and the exact solution as $4K(\sin(\theta_0/2))$, with $K$ the complete elliptic integral. Yet the $\sqrt{\ell/g}$ scaling and mass-independence came with no equation at all.

### Nondimensionalising an ODE: the projectile with drag

When the governing equations are known, **nondimensionalisation** is stronger: replace each variable by a dimensionless multiple of a **characteristic scale** built from the problem's parameters, then divide through so that as many coefficients as possible equal one.

A projectile of mass $m$ launched at speed $U$ feels gravity and quadratic drag $-c|\mathbf v|\mathbf v$, with $c = \tfrac12\rho C_D A$ for air density $\rho$, drag coefficient $C_D$ and cross-section $A$:

$$m\frac{d\mathbf v}{dt} = -mg\,\hat{\mathbf j} - c|\mathbf v|\mathbf v.$$

Natural scales are $U$ for velocity and $U/g$ for time (gravity changes the speed by $U$ in that time). Set $\mathbf v = U\mathbf v'$, $t = (U/g)t'$:

$$\frac{mgU}{U}\frac{d\mathbf v'}{dt'} = -mg\,\hat{\mathbf j} - cU^2|\mathbf v'|\mathbf v' \quad\Longrightarrow\quad \frac{d\mathbf v'}{dt'} = -\hat{\mathbf j} - \varepsilon\,|\mathbf v'|\mathbf v', \qquad \varepsilon = \frac{cU^2}{mg} = \frac{U^2}{v_t^2},$$

where $v_t = \sqrt{mg/c}$ is the **terminal velocity**. The parameters $m, g, c, U$ have collapsed to $\varepsilon$ plus the launch angle $\alpha$. Drag is negligible when $\varepsilon \ll 1$, that is, when the launch speed is far below terminal velocity, and dominates when $\varepsilon \gg 1$. Every projectile with the same $(\varepsilon,\alpha)$ shares one trajectory shape.

With linear drag $-k\mathbf v$ the same scaling gives $\varepsilon = kU/(mg)$, the ratio of initial drag to weight, the small parameter of the perturbation expansion in Lesson m2-l2.

### The pendulum, revisited

The pendulum equation $\ddot\theta + (g/\ell)\sin\theta = 0$ has natural time scale $\sqrt{\ell/g}$. With $\tau = t\sqrt{g/\ell}$,

$$\frac{d^2\theta}{d\tau^2} + \sin\theta = 0.$$

No parameter remains: every pendulum, of any length on any planet, follows the same dimensionless dynamics, differing only in initial conditions. This restates $T_p = \sqrt{\ell/g}\,\Phi(\theta_0)$. Such a **parameter-free** model need be solved only once.

### Nondimensionalising a PDE: heat conduction in a rod

A rod of length $L$ obeys the heat equation (energy balance with Fourier's law)

$$\rho c\frac{\partial T}{\partial t} = k\frac{\partial^2 T}{\partial x^2}, \qquad \kappa = \frac{k}{\rho c},$$

with ends held at $T_0$ and $T_1$. Scale $x = Lx'$, $\theta = (T - T_0)/(T_1 - T_0)$, $t = t_c t'$ with $t_c$ to be chosen:

$$\frac{1}{t_c}\frac{\partial\theta}{\partial t'} = \frac{\kappa}{L^2}\frac{\partial^2\theta}{\partial x'^2}.$$

Choosing $t_c = L^2/\kappa$, the **diffusion time**, gives the parameter-free equation $\partial\theta/\partial t' = \partial^2\theta/\partial x'^2$ with $\theta(0) = 0$, $\theta(1) = 1$. The dimensionless time $t' = \kappa t/L^2$ is the **Fourier number** $\mathrm{Fo}$: for $\mathrm{Fo} \ll 1$ the interior has not felt the boundaries, and for $\mathrm{Fo} \gtrsim 1$ the rod is near its linear steady profile. Doubling an object's thickness quadruples its cooling time.

If the rod also loses heat to its surroundings by Newton's law, a term $-hP(T - T_0)/(\rho c A)$ appears and the dimensionless equation gains one parameter, $\mathrm{Bi} = hPL^2/(kA)$, a form of the **Biot number**. Small $\mathrm{Bi}$ means conduction keeps the body uniform, the lumped assumption behind Lesson m1-l1's cooling law, so scaling quantifies when that simpler model holds.

### Why dimensionless groups matter

Three consequences deserve emphasis.

1. **Reduction of parameters.** The projectile went from four parameters to one, the heat equation from four to none, so fewer experiments and estimates are needed.
2. **Similarity.** Systems with equal groups behave identically in dimensionless variables, the basis of wind-tunnel and ship-tank testing (matching Reynolds and Froude numbers).
3. **Approximation.** A small or large group flags a negligible term; Lesson m2-l2 makes this systematic.

The script integrates the dimensionless projectile equations at $\alpha = 45^\circ$; the plot shows a parabola for $\varepsilon = 0$ and shorter, steeper-descending trajectories as $\varepsilon$ grows.

```python
import numpy as np
from scipy.integrate import solve_ivp
import matplotlib.pyplot as plt

def rhs(t, s, eps):
    x, y, vx, vy = s
    v = np.hypot(vx, vy)
    return [vx, vy, -eps*v*vx, -1.0 - eps*v*vy]

hit = lambda t, s, eps: s[1]; hit.terminal, hit.direction = True, -1
alpha = np.radians(45)
for eps in [0.0, 0.3, 1.0, 3.0]:
    sol = solve_ivp(rhs, (0, 10), [0, 0, np.cos(alpha), np.sin(alpha)],
                    args=(eps,), events=hit, max_step=0.01)
    plt.plot(sol.y[0], sol.y[1], label=f"eps = {eps}")
plt.xlabel("x g / U^2"); plt.ylabel("y g / U^2"); plt.legend(); plt.show()
```

## Key Ideas

- **Dimensional homogeneity**: every additive term has the same dimension; transcendental functions take dimensionless arguments.
- **Buckingham Pi theorem**: $n$ variables with $k$ dimensions form $n - k$ dimensionless groups, and the law relates those groups alone.
- **Characteristic scales** ($U/g$, $\sqrt{\ell/g}$, $L^2/\kappa$) come from the problem's parameters and make coefficients equal to one.
- **Dimensionless numbers are ratios**: $\varepsilon = U^2/v_t^2$ (drag to weight), $\mathrm{Fo} = \kappa t/L^2$ (elapsed to diffusion time), $\mathrm{Re} = \rho UD/\mu$ (inertia to viscosity).
- **Parameter-free models** are solved once and rescaled.
- **Small or large groups** justify simpler models, such as lumped cooling.

## Worked Examples

### Example 1 — Drag on a sphere by the Pi theorem

The drag force $F$ on a sphere of diameter $D$ moving at speed $U$ through a fluid of density $\rho$ and viscosity $\mu$ is to be measured. How many dimensionless groups are needed, and what are they? Estimate $\mathrm{Re}$ for a 1 cm sphere at 1 m/s in water ($\rho = 1000\ \text{kg m}^{-3}$, $\mu = 1.0\times 10^{-3}\ \text{Pa s}$).

**Solution.** The variables are $F\,[MLT^{-2}]$, $D\,[L]$, $U\,[LT^{-1}]$, $\rho\,[ML^{-3}]$, $\mu\,[ML^{-1}T^{-1}]$: $n = 5$, $k = 3$, so two groups. Take $\rho, U, D$ as repeating. For $\Pi_1 = F\rho^aU^bD^c$ the dimensions give $M$: $1 + a = 0$; $T$: $-2 - b = 0$; $L$: $1 - 3a + b + c = 0$, so $a = -1$, $b = -2$, $c = -2$ and

$$\Pi_1 = \frac{F}{\rho U^2 D^2}.$$

For $\Pi_2 = \mu\rho^aU^bD^c$: $M$: $1 + a = 0$; $T$: $-1 - b = 0$; $L$: $-1 - 3a + b + c = 0$, so $a = b = c = -1$ and $\Pi_2 = \mu/(\rho UD)$, the reciprocal of the **Reynolds number** $\mathrm{Re} = \rho UD/\mu$. Hence $F = \rho U^2D^2\,f(\mathrm{Re})$, written as a drag coefficient $C_D = F/(\tfrac12\rho U^2 \cdot \tfrac{\pi}{4}D^2) = \Phi(\mathrm{Re})$; one curve covers every sphere in every Newtonian fluid. For the given sphere,

$$\mathrm{Re} = \frac{1000 \times 1.0 \times 0.01}{1.0\times 10^{-3}} = 1.0\times 10^4,$$

where $C_D \approx 0.4$ and drag is quadratic in $U$, justifying the projectile's quadratic law.

### Example 2 — Is drag negligible for a thrown ball?

A cricket ball ($m = 0.16$ kg, radius 3.6 cm) and a table-tennis ball ($m = 2.7$ g, radius 2.0 cm) are thrown at 20 m/s. Take $\rho = 1.2\ \text{kg m}^{-3}$, $C_D = 0.5$. Find $v_t$ and $\varepsilon$.

**Solution.** For the cricket ball, $A = \pi(0.036)^2 = 4.07\times 10^{-3}\ \text{m}^2$ and $c = \tfrac12\rho C_D A = 1.22\times 10^{-3}\ \text{kg m}^{-1}$. Then

$$v_t = \sqrt{\frac{mg}{c}} = \sqrt{\frac{0.16\times 9.81}{1.22\times 10^{-3}}} = \sqrt{1286} = 35.9\ \text{m s}^{-1}, \qquad \varepsilon = \left(\frac{20}{35.9}\right)^2 = 0.31.$$

For the table-tennis ball, $A = \pi(0.020)^2 = 1.26\times 10^{-3}\ \text{m}^2$, $c = 3.77\times 10^{-4}\ \text{kg m}^{-1}$,

$$v_t = \sqrt{\frac{2.7\times 10^{-3}\times 9.81}{3.77\times 10^{-4}}} = \sqrt{70.3} = 8.4\ \text{m s}^{-1}, \qquad \varepsilon = \left(\frac{20}{8.4}\right)^2 = 5.7.$$

For the cricket ball drag is a 30% effect, significant but perturbative; for the table-tennis ball it dominates from the outset and the vacuum parabola is useless. The dimensionless parameter, not the speed alone, decides the model.

### Example 3 — Diffusion time scales for a rod

A steel rod ($\kappa = 1.2\times 10^{-5}\ \text{m}^2\text{s}^{-1}$) of length $L = 0.5$ m has one end suddenly heated. Estimate the time for the far end to respond appreciably ($\mathrm{Fo} = 0.1$) and to approach steady state ($\mathrm{Fo} = 1$). Repeat for copper ($\kappa = 1.1\times 10^{-4}\ \text{m}^2\text{s}^{-1}$).

**Solution.** For steel, $t_c = L^2/\kappa = 0.25/(1.2\times 10^{-5}) = 2.08\times 10^4$ s $= 5.8$ h. The far end responds appreciably after $0.1\,t_c \approx 2.1\times 10^3$ s $\approx 35$ min, and steady state takes about 5.8 h. For copper, $t_c = 0.25/(1.1\times 10^{-4}) = 2.27\times 10^3$ s $= 38$ min, so the far end responds within about 4 min and steady state takes 38 min. Halving the length quarters every time. No PDE solution was needed: scaling converts a material property into an engineering estimate.

## Common Misconceptions

- **"Dimensional analysis gives the full answer."** It gives the form up to an unknown function (such as $\Phi(\theta_0)$ or $C_D(\mathrm{Re})$) and constants such as $2\pi$; experiment or the solved equations supply the rest.
- **"The choice of repeating variables changes the physics."** Different choices give equivalent sets of groups.
- **"Any parameter combination is a valid scale."** A scale needs the right dimension and must make the scaled variable of order one.
- **"Small $\varepsilon$ means drag can be dropped."** Small effects accumulate over long times; smallness justifies an expansion, not necessarily neglect.
- **"Dimensionless numbers are engineering conveniences."** They are the true control parameters of a model.

## Connections

- The pendulum period $2\pi\sqrt{\ell/g}$ of differential-equations m2-l2 is the small-amplitude limit of this scaling; $\Phi(\theta_0)$ appears in Lesson m2-l1.
- Projectile motion in mechanics m2-l2 is the case $\varepsilon = 0$; the drag parameter quantifies when it fails and feeds Lesson m2-l2.
- The Fourier and Biot numbers organise the heat-transfer problems of thermal-physics-and-statistical-mechanics m1-l1 and thermal-physics-lab m1-l4; the scaling $L^2/D$ governs spreading populations in Lesson m2-l3.
- The Reynolds number controls flow regimes in astrophysics and damping in waves-and-optics m1-l2.
- Scaled equations make step sizes and tolerances easier to choose in numerical-methods m3-l3.

## Quick Check

1. State the Buckingham Pi theorem and explain why mass cannot appear in a pendulum's period.
2. Shallow-water waves have speed $v$ depending only on depth $h$ and gravity $g$. Find $v$ up to a constant.
3. Nondimensionalise $m\ddot x + b\dot x + kx = 0$ with time scale $\sqrt{m/k}$ and identify the one parameter that remains.
4. A pollutant diffuses with $D = 10^{-2}\ \text{m}^2\text{s}^{-1}$. How long does it take to spread 100 m, and how does that change for 200 m?
5. Two spheres of different diameter and fluid have equal Reynolds numbers. What can be said of their drag coefficients and drag forces?

## Takeaway

- The Pi theorem turns dimensional homogeneity into $n - k$ dimensionless groups.
- Well-chosen scales reduce a model to a few dimensionless numbers that expose competing effects.
- $\varepsilon = U^2/v_t^2$ decides whether drag matters; $\mathrm{Fo}$ whether a body has reached steady state; $\mathrm{Re}$ the flow regime.
- Parameter-free models are solved once and rescaled.
- Small or large parameters justify approximations, developed in Module 2.
