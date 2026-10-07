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
lessonId: mathematical-modelling-m2-l3
lessonName: Diffusion and Fisher Travelling Waves
lessonNumber: 6
moduleNumber: 2
semesterNumber: 6
difficulty: advanced
estimatedStudyMinutes: 60
releaseOrder: 6
prerequisites:
  - mathematical-modelling-m2-l1
  - mathematical-modelling-m2-l2
  - mathematical-modelling-m1-l2
learningObjectives:
  - Derive the diffusion equation from a conservation law and Fick's law, and relate the diffusion coefficient to a random walk.
  - Nondimensionalise the Fisher–KPP reaction–diffusion equation and identify its length and time scales.
  - Reduce the travelling-wave problem to a phase-plane problem and derive the minimum wave speed $c = 2\sqrt{rD}$.
  - Apply the Fisher speed to estimate the spread of an invasive species or an epidemic front.
concepts:
  - Diffusion equation
  - Fick's law
  - Random walk and diffusion coefficient
  - Reaction–diffusion equation
  - Fisher–KPP equation
  - Travelling wave
  - Minimum wave speed
tags:
  - mathematics
  - mathematical-modelling
  - reaction-diffusion
  - travelling-waves
sourceType: authored-courseware
status: in-review
assessmentHints:
  - derivation
  - conceptual
  - problem-solving
  - computational
***

# Diffusion and Fisher Travelling Waves

## Overview

So far each model has had a single well-mixed compartment. Real populations, pollutants and infections are spread over space, and local growth combines with movement to produce travelling fronts. This lesson derives the diffusion equation from the balance law of Lesson m1-l1, connects the diffusion coefficient to the random walk of individuals, and adds logistic growth to obtain the Fisher–KPP equation, the simplest model of an advancing front. After nondimensionalising as in Lesson m1-l2, we look for waves of permanent shape. Substituting a travelling-wave ansatz reduces the PDE to an ODE whose phase plane (Lesson m2-l1) shows that fronts exist only for speeds at or above $2\sqrt{rD}$. The result gives quick estimates of invasion speeds and underlies spatial models of epidemics.

## Learning Path

- **What you should already know**: the balance law and its PDE form (Lesson m1-l1); diffusion scaling $L^2/D$ (Lesson m1-l2); the logistic equation (Lesson m1-l3); phase-plane classification by trace and determinant (Lesson m2-l1).
- **What this lesson adds**: the derivation of diffusion and reaction–diffusion equations; travelling-wave reduction; the minimum speed from a phase-plane argument and from linearisation ahead of the front.
- **What later lessons this will unlock**: spatial spread in epidemic models (Lesson m3-l3 comments on its limits); fitting spatial data and the identifiability of $r$ and $D$ separately (Lesson m3-l1).

## Core Explanation

### Diffusion from conservation and Fick's law

Let $u(x,t)$ be the concentration (amount per unit length) of a substance in a thin tube and $J(x,t)$ its flux. A balance over $[x, x+\Delta x]$ says that the rate of change of the content equals flux in minus flux out:

$$\frac{\partial u}{\partial t}\Delta x = J(x) - J(x + \Delta x) \quad\Longrightarrow\quad \frac{\partial u}{\partial t} = -\frac{\partial J}{\partial x}.$$

This is exact, the PDE version of "in minus out". The assumption lives in the constitutive law. **Fick's law** states that flux runs down the gradient, $J = -D\,\partial u/\partial x$, with diffusion coefficient $D$ in $\text{m}^2\text{s}^{-1}$. Substitution gives the diffusion equation $u_t = Du_{xx}$, the equation nondimensionalised in Lesson m1-l2, where the diffusion time was $L^2/D$.

Fick's law has a microscopic basis. Let a walker step $\pm\ell$ with equal probability every $\Delta t$. After $n = t/\Delta t$ steps the mean position is zero and the mean square displacement is $n\ell^2 = t\ell^2/\Delta t$. Defining $\langle x^2\rangle = 2Dt$,

$$D = \frac{\ell^2}{2\Delta t}.$$

The root-mean-square displacement grows as $\sqrt{2Dt}$, not linearly in $t$: diffusion is efficient over short distances and hopeless over long ones. A point release of mass $M$ spreads as the Gaussian $u = \dfrac{M}{\sqrt{4\pi Dt}}\,e^{-x^2/4Dt}$, which satisfies $u_t = Du_{xx}$ (it is the fundamental solution; its variance is $2Dt$, matching the random walk).

### The Fisher–KPP equation

Add a reaction term, local logistic growth, to the balance: $u_t = -J_x + ru(1 - u/K)$. With Fick's law,

$$\frac{\partial u}{\partial t} = D\frac{\partial^2 u}{\partial x^2} + ru\left(1 - \frac{u}{K}\right).$$

This is the **Fisher–KPP equation** (Fisher 1937; Kolmogorov, Petrovsky and Piskunov), introduced to model the spread of an advantageous gene. Choose scales $u = Ku'$, $t = t'/r$, $x = \sqrt{D/r}\,x'$:

$$u'_{t'} = u'_{x'x'} + u'(1 - u'),$$

with no parameters left. The reaction time scale is $1/r$ and the length scale $\sqrt{D/r}$ is the typical distance a walker covers in one growth time. The two uniform states are $u = 0$ (unstable: any small population grows) and $u = 1$ (stable). A front connecting them should therefore move so that the stable state invades the unstable one.

### Travelling waves

Look for a wave of fixed shape moving to the right at speed $c > 0$: $u'(x',t') = U(z)$ with $z = x' - ct'$ (primes dropped from here). Then $u_t = -cU'$ and $u_{xx} = U''$, so

$$U'' + cU' + U(1 - U) = 0, \qquad U(-\infty) = 1,\quad U(+\infty) = 0.$$

Biologically $U$ is a density, so it must stay in $[0,1]$. Write $V = U'$ to obtain the system

$$U' = V, \qquad V' = -cV - U(1 - U).$$

The equilibria are $(0,0)$ and $(1,0)$. The Jacobian at $(1,0)$ is $\begin{pmatrix} 0 & 1 \\ 1 & -c\end{pmatrix}$ with determinant $-1 < 0$, so it is a saddle for every $c$; the wave leaves this point along its unstable manifold. At $(0,0)$ the Jacobian is $\begin{pmatrix} 0 & 1 \\ -1 & -c\end{pmatrix}$, with trace $-c$ and determinant $1$, so

$$\lambda = \frac{-c \pm \sqrt{c^2 - 4}}{2}.$$

If $c \ge 2$ both eigenvalues are real and negative: a stable node, and the trajectory can enter the origin monotonically with $U \ge 0$. If $0 < c < 2$ the eigenvalues are complex with negative real part, a stable spiral, and the trajectory winds around the origin so that $U$ becomes negative, which is not a density. Hence a physically admissible front exists if and only if

$$c \ge c_{\min} = 2, \qquad\text{or in dimensional form}\qquad c_{\min} = 2\sqrt{rD}.$$

A shooting argument with a triangular trapping region in the $(U,V)$ plane shows that a wave exists for every $c \ge 2$; the eigenvalues carry the main idea. A closed-form wave is known for the single speed $c = 5/\sqrt6 \approx 2.04$: $U(z) = \left(1 + e^{z/\sqrt6}\right)^{-2}$.

### Why the minimum speed is selected

Ahead of the front $u$ is tiny, so the nonlinear term is negligible and $u_t = u_{xx} + u$. Try $u = e^{-\lambda(x - ct)}$: this requires $c\lambda = \lambda^2 + 1$, that is, $c(\lambda) = \lambda + 1/\lambda$. This is minimal at $\lambda = 1$ with $c = 2$, and $c(\lambda) = 2$ gives a double root, the border between monotone and oscillating tails. For initial data that vanish outside a bounded region (a local introduction), the solution converges to the wave with the minimum speed $c = 2$, because the leading edge is "pulled" by the linear growth ahead of it; the speed is set by the linearised dynamics, independent of the nonlinearity. Convergence is slow, with $c(t) \approx 2 - 3/(2t)$ in the dimensionless variables. The script below solves the dimensionless equation by explicit finite differences (stable because $\Delta t/\Delta x^2 = 0.4 \le 1/2$, the condition of mathematics-lab-using-python-ii m1-l4) and measures the speed of the $u = 0.5$ contour.

```python
import numpy as np

dx, dt, L, T = 0.5, 0.1, 200.0, 60.0
x = np.arange(0, L + dx, dx)
u = np.where(x < 5, 1.0, 0.0)               # localised initial population
t_list, pos = [], []
for n in range(int(T/dt)):
    lap = np.zeros_like(u)
    lap[1:-1] = (u[2:] - 2*u[1:-1] + u[:-2])/dx**2
    lap[0] = 2*(u[1] - u[0])/dx**2          # no-flux boundary at x = 0
    u = u + dt*(lap + u*(1 - u))
    if n % 50 == 0:
        t_list.append(n*dt); pos.append(x[np.argmax(u < 0.5)])
print(np.polyfit(t_list[-6:], pos[-6:], 1)[0])    # about 1.8, approaching 2 from below
```

The plotted profiles would show a front of constant shape sweeping across the domain, with the front position a straight line in time apart from small transients.

## Key Ideas

- **Diffusion** follows from conservation $u_t = -J_x$ and Fick's law $J = -Du_x$, giving $u_t = Du_{xx}$.
- **Random walk**: $D = \ell^2/(2\Delta t)$ and the typical displacement is $\sqrt{2Dt}$.
- **Fisher–KPP**: $u_t = Du_{xx} + ru(1 - u/K)$ scales to $u_t = u_{xx} + u(1-u)$; length scale $\sqrt{D/r}$, time scale $1/r$.
- **Travelling wave**: $U'' + cU' + U(1-U) = 0$; $(1,0)$ is a saddle and $(0,0)$ is a node only for $c \ge 2$.
- **Minimum speed** $c = 2\sqrt{rD}$, equal to $\min_\lambda (\lambda + 1/\lambda)$ in dimensionless form, is set by the linear growth ahead of the front.
- **Pulled fronts** are determined by the leading edge; localised initial data select the minimum speed.

## Worked Examples

### Example 1 — Diffusion coefficient from a random walk

A bacterium takes a step of $\ell = 1$ mm every $\Delta t = 0.5$ s in a random direction along a line. Find $D$ and the typical distance moved in one hour.

**Solution.** $D = \ell^2/(2\Delta t) = (10^{-3})^2/(2 \times 0.5) = 10^{-6}\ \text{m}^2\text{s}^{-1}$. In $t = 3600$ s,

$$\sqrt{2Dt} = \sqrt{2 \times 10^{-6} \times 3600} = \sqrt{7.2 \times 10^{-3}} = 0.085\ \text{m}.$$

So the bacterium moves 8.5 cm in an hour while having travelled $7200$ steps $\times$ 1 mm $= 7.2$ m. Doubling the time raises the typical displacement only by $\sqrt2$.

### Example 2 — Invasion speed of a plant

An invasive plant has growth rate $r = 0.8\ \text{yr}^{-1}$ and seed-dispersal diffusivity $D = 0.5\ \text{km}^2\text{yr}^{-1}$. Estimate the front speed, the front length scale and the time to cross 100 km.

**Solution.** $c = 2\sqrt{rD} = 2\sqrt{0.4} = 2 \times 0.6325 = 1.265\ \text{km yr}^{-1}$. The length scale is $\sqrt{D/r} = \sqrt{0.625} = 0.79$ km, so the front is a few kilometres wide. The crossing time is $100/1.265 = 79$ years. Doubling the dispersal coefficient raises the speed only by $\sqrt2$; doubling the growth rate does the same. The estimate also shows the limits of the model: real fronts depend on long-distance dispersal, which this model excludes, and measured spread rates are often faster.

### Example 3 — Which speeds are admissible?

For the dimensionless wave equation, find the eigenvalues at $(0,0)$ for $c = 1.5$ and for $c = 2.5$ and decide whether each gives a physical front.

**Solution.** For $c = 1.5$: $c^2 - 4 = -1.75$, so $\lambda = \frac12(-1.5 \pm i\sqrt{1.75}) = -0.75 \pm 0.661\,i$, a stable spiral. The trajectory spirals into the origin, so $U$ crosses zero repeatedly and takes negative values: unphysical. For $c = 2.5$: $c^2 - 4 = 2.25$, $\lambda = \frac12(-2.5 \pm 1.5) = -0.5$ and $-2.0$, a stable node, and $U$ approaches $0$ monotonically from above. The two real decay rates correspond to the two exponentials $e^{-\lambda z}$ with $\lambda = 0.5, 2$, which satisfy $\lambda + 1/\lambda = 2.5$. At $c = 2$ the two roots coincide at $\lambda = 1$.

## Common Misconceptions

- **"Diffusion moves things at constant speed."** The typical displacement grows as $\sqrt t$, so the time to spread a distance $L$ grows as $L^2$. It is the combination of growth and diffusion that gives a constant front speed.
- **"The front speed depends on the initial condition."** For localised starts it converges to the minimum speed; only initial data with heavy exponential tails, slower than $e^{-x}$, select faster waves.
- **"Faster waves are impossible."** Waves with $c > 2$ exist as solutions; they are simply not selected from compact initial data.
- **"Fisher's equation applies to any invasion."** It assumes random local dispersal, a constant growth rate and no Allee effect. With an Allee effect, long-distance jumps or heterogeneity, speeds differ.
- **"The speed depends on $K$."** In the Fisher model it does not: $K$ drops out when $u$ is scaled, so only $r$ and $D$ matter.

## Connections

- The spreading Gaussian and the diffusion time $L^2/D$ extend the heat-conduction scaling of Lesson m1-l2 and thermal-physics-and-statistical-mechanics m1-l1.
- The phase-plane analysis of the wave is the trace–determinant classification of Lesson m2-l1, applied to the ODE $U'' + cU' + U(1-U) = 0$.
- The explicit scheme in the script is the FTCS method analysed in mathematics-lab-using-python-ii m1-l4, with its stability limit $\Delta t \le \Delta x^2/2$.
- Travelling fronts appear in flame propagation, chemical waves, nerve impulses and, in astrophysics, in the propagation of star formation through galaxies.
- Spatial epidemic models replace the logistic term by SIR kinetics (Lesson m1-l3) and obtain a speed $2\sqrt{rD}$ with $r = \beta - \gamma$, the early growth rate.

## Quick Check

1. Derive $u_t = Du_{xx}$ from conservation of mass and Fick's law, stating where each assumption enters.
2. Nondimensionalise $u_t = Du_{xx} + ru(1 - u/K)$ and give the length and time scales.
3. For $r = 0.5\ \text{day}^{-1}$ and $D = 2\ \text{km}^2\text{day}^{-1}$, find the minimum front speed.
4. Show that $c\lambda = \lambda^2 + 1$ has real roots only if $c \ge 2$.
5. Why does the origin of the $(U,V)$ phase plane have to be a node for a physical wave?

## Takeaway

- Diffusion comes from a conservation law plus Fick's law, and $D = \ell^2/(2\Delta t)$ links it to individual random walks.
- Adding logistic growth produces Fisher–KPP, whose scales are $\sqrt{D/r}$ and $1/r$.
- Travelling waves reduce the PDE to a phase-plane problem; real, non-oscillating decay at the origin requires $c \ge 2\sqrt{rD}$.
- Localised initial data select the minimum speed because the front is pulled by its leading edge.
- Quick scaling estimates give invasion and epidemic speeds, provided the assumptions of random dispersal and logistic growth are honest.
