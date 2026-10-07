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
lessonId: mathematical-modelling-m2-l1
lessonName: Equilibria, Linear Stability and Phase Planes
lessonNumber: 4
moduleNumber: 2
semesterNumber: 6
difficulty: intermediate
estimatedStudyMinutes: 55
releaseOrder: 4
prerequisites:
  - mathematical-modelling-m1-l3
  - differential-equations-m2-l1
  - linear-algebra-m2-l3
learningObjectives:
  - Find equilibria of one- and two-variable models and classify their stability by linearisation, using the Jacobian, its trace and determinant.
  - Sketch phase portraits using nullclines and the eigenstructure of the Jacobian.
  - Analyse predator–prey and competition models and state conditions for coexistence or exclusion.
  - Use a conserved quantity to explain the neutral oscillations of the Lotka–Volterra model and the amplitude dependence of the pendulum period.
concepts:
  - Equilibrium and stability
  - Linearisation and the Jacobian
  - Trace–determinant classification
  - Nullclines and phase portraits
  - Lotka–Volterra predator–prey model
  - Competitive exclusion
  - Conserved quantity
tags:
  - mathematics
  - mathematical-modelling
  - stability
  - phase-plane
sourceType: authored-courseware
status: in-review
assessmentHints:
  - conceptual
  - derivation
  - problem-solving
  - computational
***

# Equilibria, Linear Stability and Phase Planes

## Overview

Most nonlinear models cannot be solved in closed form, yet we can still say where the system will settle and whether it returns after a disturbance. This lesson develops that qualitative theory. We find the equilibria, linearise, and read stability from the sign of a derivative or the eigenvalues of a Jacobian matrix. For two variables the trace and determinant classify every case, and the phase plane displays the motion geometrically. We apply the tools to a harvested population, the Lotka–Volterra predator–prey model, two competing species, and the pendulum, whose amplitude-dependent period was deferred from Lesson m1-l2.

## Learning Path

- **What you should already know**: equilibria and time scales of first-order models (Lesson m1-l1); the SIR and harvested-population models (Lesson m1-l3); eigenvalues of a $2\times 2$ matrix (linear-algebra m2-l3, differential-equations m2-l1).
- **What this lesson adds**: linear stability in one and two dimensions, the trace–determinant plane, nullclines, and conserved quantities.
- **What later lessons this will unlock**: bifurcations, where an equilibrium changes stability as a parameter varies (Lesson m2-l2); travelling-wave phase planes (Lesson m2-l3); the stability of fitted epidemic models (Lessons m3-l1 and m3-l3).

## Core Explanation

### Equilibria and stability in one variable

For $\dot x = f(x)$ an **equilibrium** $x^*$ satisfies $f(x^*) = 0$. Write $x = x^* + u$ with $u$ small. Taylor's theorem gives $f(x^* + u) = f'(x^*)u + O(u^2)$, so to leading order $\dot u = f'(x^*)u$,. The equilibrium is **stable** if $f'(x^*) < 0$, with relaxation time $1/|f'(x^*)|$ (the generalisation of $\tau = V/Q$), and **unstable** if $f'(x^*) > 0$. If $f'(x^*) = 0$ the linearisation is silent and higher-order terms decide. In one dimension trajectories are monotone, so the sign pattern of $f$ gives the whole picture. For logistic growth $f' = r(1 - 2N/K)$, so $f'(0) = r > 0$ is unstable and $f'(K) = -r < 0$ is stable with relaxation time $1/r$.

### Linearisation in two variables

For $\dot x = f(x, y)$, $\dot y = g(x, y)$ with equilibrium $(x^*, y^*)$, put $(x, y) = (x^*, y^*) + (u, v)$. Then $\dot{\mathbf u} = J\mathbf u$ with the **Jacobian**

$$J = \begin{pmatrix} f_x & f_y \\ g_x & g_y \end{pmatrix}_{(x^*,y^*)}.$$

The solutions combine $e^{\lambda t}$, with $\lambda_{1,2} = \tfrac12\left(\mathrm{tr}J \pm \sqrt{(\mathrm{tr}J)^2 - 4\det J}\right)$. The equilibrium is **asymptotically stable** if both eigenvalues have negative real part, which for a $2\times 2$ matrix holds exactly when $\mathrm{tr}J < 0$ and $\det J > 0$. The classification is:

| Condition | Type | Behaviour |
|---|---|---|
| $\det J < 0$ | saddle | unstable; one stable and one unstable direction |
| $\det J > 0$, $\mathrm{tr}J < 0$, $(\mathrm{tr}J)^2 > 4\det J$ | stable node | monotone approach |
| $\det J > 0$, $\mathrm{tr}J < 0$, $(\mathrm{tr}J)^2 < 4\det J$ | stable spiral | damped oscillation |
| $\det J > 0$, $\mathrm{tr}J > 0$ | unstable node or spiral | growth |
| $\det J > 0$, $\mathrm{tr}J = 0$ | linear centre | linearisation inconclusive |

For a **hyperbolic** equilibrium (no eigenvalue on the imaginary axis) the Hartman–Grobman theorem guarantees that the nonlinear portrait nearby resembles the linear one. For a linear centre it need not: nonlinear terms may turn closed orbits into slow spirals.

### Nullclines and the phase plane

The **nullclines** $f = 0$ (where $\dot x = 0$, so motion is vertical) and $g = 0$ (where motion is horizontal) divide the plane into regions with a fixed sign pattern of $(\dot x, \dot y)$. Equilibria lie where nullclines cross. The working method is to sketch nullclines, then arrows, then the local type at each crossing.

### Predator–prey: the Lotka–Volterra model

Let $x$ be prey and $y$ predators. Assume prey grow exponentially at rate $a$ without predators, predation removes prey at rate $bxy$ (mass-action encounters), and predators die at rate $c$ and breed at rate $dxy$:

$$\dot x = x(a - by), \qquad \dot y = y(-c + dx).$$

The equilibria are $(0,0)$ and $(c/d, a/b)$. At the origin $J = \mathrm{diag}(a, -c)$, a saddle. At the interior point $J = \begin{pmatrix} 0 & -bc/d \\ da/b & 0 \end{pmatrix}$ has $\mathrm{tr}J = 0$, $\det J = ac > 0$, a linear centre with $\lambda = \pm i\sqrt{ac}$. Linearisation is inconclusive, but the model has a **conserved quantity**

$$H(x, y) = dx - c\ln x + by - a\ln y.$$

To verify, $\dot H = (d - c/x)\,x(a - by) + (b - a/y)\,y(-c + dx) = (dx - c)(a - by) + (by - a)(dx - c) = 0$. Orbits are level curves of $H$, closed around its minimum at the interior equilibrium, so the populations cycle forever with amplitude fixed by the initial data. This neutral stability is a symptom of idealisation: add prey self-limitation, $\dot x = x(a - ex - by)$, and the equilibrium becomes $x^* = c/d$, $y^* = (a - ec/d)/b$ with
$$J = \begin{pmatrix} -ex^* & -bx^* \\ dy^* & 0 \end{pmatrix}, \qquad \mathrm{tr}J = -ex^* < 0,\quad \det J = bdx^*y^* > 0,$$
a stable node or spiral whenever $y^* > 0$. The conserved quantity was an accident of the idealisation.

### Competition

For two species competing for the same resource, scale each population by its carrying capacity and time by its growth rate:

$$\dot x = x(1 - x - \alpha y), \qquad \dot y = y(1 - y - \beta x),$$

where $\alpha, \beta > 0$ measure each species' effect on the other. The coexistence equilibrium is $x^* = \dfrac{1 - \alpha}{1 - \alpha\beta}$, $y^* = \dfrac{1 - \beta}{1 - \alpha\beta}$, and there are single-species equilibria $(1, 0)$ and $(0, 1)$. At the coexistence point $J = \begin{pmatrix} -x^* & -\alpha x^* \\ -\beta y^* & -y^* \end{pmatrix}$, so $\mathrm{tr}J = -(x^* + y^*)$ and $\det J = x^*y^*(1 - \alpha\beta)$. If $\alpha, \beta < 1$ (competition within a species exceeds that between), the equilibrium is positive and stable. If $\alpha, \beta > 1$ then $\det J < 0$: a saddle, and the outcome is **competitive exclusion** depending on initial conditions (bistability). If $\alpha < 1 < \beta$, one species always wins.

```python
import numpy as np
import matplotlib.pyplot as plt

alpha, beta = 1.5, 1.3                         # strong competition: bistable exclusion
x, y = np.meshgrid(np.linspace(0, 1.4, 25), np.linspace(0, 1.4, 25))
u, v = x*(1 - x - alpha*y), y*(1 - y - beta*x)
plt.streamplot(x, y, u, v, density=1.4)
xs = np.linspace(0, 1.4, 100)
plt.plot(xs, (1 - xs)/alpha, "k--"); plt.plot(xs, 1 - beta*xs, "r--")   # nullclines
plt.xlabel("species x"); plt.ylabel("species y"); plt.show()
```

The plot shows the dashed nullclines crossing at a saddle, with flow toward $(1,0)$ or $(0,1)$ depending on the side of the saddle's stable manifold on which a trajectory starts.

### The pendulum phase plane

With $\omega = \dot\theta$, the dimensionless pendulum $\ddot\theta + \sin\theta = 0$ is $\dot\theta = \omega$, $\dot\omega = -\sin\theta$, with conserved energy $E = \tfrac12\omega^2 - \cos\theta$. At $(0,0)$ the Jacobian has trace $0$ and determinant $1$, a linear centre that is a true centre because $E$ is conserved; at $(\pi, 0)$ the determinant is $-1$, a saddle (the inverted position). Closed orbits with $|\theta_0| < \pi$ are oscillations, bounded by the separatrix through the saddle; beyond it the pendulum circulates. Integrating $dt = d\theta/\omega$ over a quarter orbit gives the period $T = 4K(\sin\tfrac{\theta_0}{2})$ in units of $\sqrt{\ell/g}$, with $K$ the complete elliptic integral, and the expansion $T = 2\pi\left(1 + \theta_0^2/16 + \cdots\right)$. This is the function $\Phi(\theta_0)$ of Lesson m1-l2: for $\theta_0 = 60^\circ$ it is $1.073$ times the small-angle period.

## Key Ideas

- **Linearisation**: near an equilibrium $\dot{\mathbf u} = J\mathbf u$; stability needs all eigenvalues in the left half-plane.
- **In 2D**: stable iff $\mathrm{tr}J < 0$ and $\det J > 0$; $\det J < 0$ means a saddle; $(\mathrm{tr}J)^2 < 4\det J$ gives spirals.
- **Zero real part** needs more than linearisation: a conserved quantity or higher-order terms.
- **Nullclines** organise the phase plane; equilibria are their intersections.
- **Lotka–Volterra** cycles neutrally because $H = dx - c\ln x + by - a\ln y$ is conserved; prey self-limitation damps them.
- **Competition**: coexistence is stable iff $\alpha, \beta < 1$; $\alpha, \beta > 1$ gives exclusion that depends on initial conditions.

## Worked Examples

### Example 1 — Stability of the harvested stock

For $\dot N = 0.4N(1 - N/10\,000) - 800$ the equilibria are $7236$ and $2764$ (Lesson m1-l3). Classify them and give the relaxation times.

**Solution.** $f'(N) = r(1 - 2N/K) = 0.4(1 - 2N/10\,000)$. At $N = 7236$: $f' = 0.4(1 - 1.4472) = -0.179\ \text{yr}^{-1}$, stable with relaxation time $5.6$ yr. At $N = 2764$: $f' = 0.4(1 - 0.5528) = +0.179\ \text{yr}^{-1}$, unstable with growth time $5.6$ yr. For $N < 2764$ we have $f < 0$ (harvest exceeds growth), so the stock declines to extinction in finite time. The two eigenvalues are $\mp r\sqrt{1 - 4H/(rK)} = \mp 0.4\sqrt{0.2}$, equal and opposite and shrinking to zero as $H \to rK/4$. That vanishing signals the collapse analysed in Lesson m2-l2.

### Example 2 — Predator–prey with prey self-limitation

Take $a = 1$, $e = 0.1$, $b = 0.5$, $c = 0.6$, $d = 0.2$ in $\dot x = x(a - ex - by)$, $\dot y = y(-c + dx)$. Find the interior equilibrium, classify it and give the oscillation period.

**Solution.** $x^* = c/d = 3$ and $y^* = (1 - 0.1\times 3)/0.5 = 1.4$. Then
$$J = \begin{pmatrix} -0.3 & -1.5 \\ 0.28 & 0 \end{pmatrix}, \qquad \mathrm{tr}J = -0.3,\quad \det J = 0.42.$$
Since $(\mathrm{tr}J)^2 = 0.09 < 4\det J = 1.68$, the equilibrium is a stable spiral with $\lambda = -0.15 \pm i\sqrt{0.42 - 0.0225} = -0.15 \pm 0.631\,i$. Oscillations have period $2\pi/0.631 = 9.97$ time units, and the amplitude decays by $e$ every $1/0.15 = 6.7$ units. With $e = 0$ the damping vanishes and the cycles are neutral.

### Example 3 — Competing species

Take $\alpha = 0.5$ and $\beta = 0.6$. Find the coexistence equilibrium and its eigenvalues.

**Solution.** $1 - \alpha\beta = 0.7$, so $x^* = 0.5/0.7 = 0.714$ and $y^* = 0.4/0.7 = 0.571$. The Jacobian is
$$J = \begin{pmatrix} -0.714 & -0.357 \\ -0.343 & -0.571 \end{pmatrix},$$
with $\mathrm{tr}J = -1.286$ and $\det J = 0.4082 - 0.1224 = 0.2857$ (equal to $x^*y^*(1 - \alpha\beta) = 0.4082 \times 0.7$). The discriminant is $1.653 - 1.143 = 0.510 > 0$, so $\lambda = \tfrac12(-1.286 \pm 0.714) = -0.286$ and $-1.000$: a stable node. The slow eigenvalue sets an approach time $1/0.286 = 3.5$ growth times. If instead $\alpha = 1.5$, $\beta = 1.3$, then $\det J \propto 1 - \alpha\beta = -0.95 < 0$ and coexistence is a saddle.

## Common Misconceptions

- **"A stable equilibrium attracts every trajectory."** Linear stability is local. The harvested stock has a stable equilibrium at 7236 t and still collapses if started below 2764 t.
- **"A linear centre is a centre."** Only when something else, such as a conserved quantity, confirms it. Otherwise nonlinear terms decide.
- **"Observed predator–prey cycles prove Lotka–Volterra."** Its cycles are neutral and depend on initial conditions; sustained cycles in realistic models are limit cycles (Lesson m2-l2).
- **"Complex eigenvalues mean the system oscillates forever."** The real part decides growth or decay; the imaginary part only sets the frequency.
- **"Competing species can always coexist if resources suffice."** Strong interspecific competition ($\alpha, \beta > 1$) produces exclusion.

## Connections

- The trace–determinant classification is the eigenvalue theory of linear-algebra m2-l3 applied to $J$, and the solutions $e^{\lambda t}$ are the constant-coefficient solutions of differential-equations m2-l1.
- The pendulum's conserved energy is the Hamiltonian structure of mechanics, the separatrix separates libration from rotation, and the small-angle limit is the harmonic oscillator of differential-equations m2-l2.
- Stability of a map's fixed point, $|F'(x^*)| < 1$ (Lesson m1-l3), and the convergence of Jacobi iteration in numerical-methods m3-l2 are likewise eigenvalue conditions.
- The same equations model competing or reacting species in ecology, chemistry and astrophysical gas.
- The nullcline-and-flow method is the basis of the travelling-wave analysis in Lesson m2-l3.

## Quick Check

1. Classify the equilibria of $\dot x = x(2 - x)(x - 1)$ and give $f'$ at each.
2. A $2\times 2$ Jacobian has $\mathrm{tr}J = -3$ and $\det J = 2$. Find the eigenvalues and classify the equilibrium.
3. Verify that $H = dx - c\ln x + by - a\ln y$ is constant along Lotka–Volterra orbits.
4. In the competition model with $\alpha = 2$, $\beta = 0.5$, which species wins and why?
5. Explain why a linear centre needs further analysis, and give an example where it is genuine.

## Takeaway

- Equilibria are found by setting the right-hand side to zero; linearisation gives stability from $f'(x^*)$ or the Jacobian.
- In two dimensions, $\mathrm{tr}J < 0$ and $\det J > 0$ means stable; the sign of the discriminant separates nodes from spirals.
- Nullclines and eigen-directions give the phase portrait without solving.
- Conserved quantities explain neutral cycles in the Lotka–Volterra model and the pendulum, and show why they are structurally fragile.
- Stability is local: a stable equilibrium has a basin, and leaving it can mean collapse.
