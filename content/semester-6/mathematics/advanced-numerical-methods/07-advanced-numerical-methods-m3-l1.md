***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-6
semesterName: Semester 6
subjectId: mathematics
subjectName: Mathematics
courseId: advanced-numerical-methods
courseName: Advanced Numerical Methods (Math Elective I, A)
moduleId: advanced-numerical-methods-module-3
moduleName: Partial Differential Equations and Optimisation
lessonId: advanced-numerical-methods-m3-l1
lessonName: Finite Differences for the Heat, Wave and Laplace Equations with von Neumann Stability Analysis
lessonNumber: 7
moduleNumber: 3
semesterNumber: 6
difficulty: advanced
estimatedStudyMinutes: 60
releaseOrder: 7
prerequisites:
  - advanced-numerical-methods-m2-l3
  - mathematics-lab-using-python-ii-m1-l4
  - waves-and-optics-m1-l2
learningObjectives:
  - Derive the FTCS, BTCS and Crank–Nicolson schemes for $u_t = \alpha u_{xx}$ and obtain their von Neumann amplification factors.
  - Prove the stability condition $r = \alpha\Delta t/\Delta x^2 \le 1/2$ for FTCS and the unconditional stability of BTCS and Crank–Nicolson.
  - Derive the CFL condition $c\Delta t/\Delta x \le 1$ for the leapfrog wave scheme and explain numerical dispersion.
  - Set up the five-point discretisation of the Laplace equation as a sparse linear system and state the discrete maximum principle.
concepts:
  - FTCS scheme
  - Von Neumann stability analysis
  - Amplification factor
  - Crank–Nicolson scheme
  - CFL condition
  - Numerical dispersion
  - Five-point Laplacian
tags:
  - mathematics
  - advanced-numerical-methods
  - finite-differences
  - pde-stability
sourceType: authored-courseware
status: in-review
assessmentHints:
  - derivation
  - problem-solving
  - computational
  - conceptual
***

# Finite Differences for the Heat, Wave and Laplace Equations with von Neumann Stability Analysis

## Overview

The heat, wave and Laplace equations are the parabolic, hyperbolic and elliptic prototypes. Differencing them is easy; deciding stability is the real content here. Von Neumann's method computes one Fourier mode's amplification factor per step, turning stability into an inequality on the mesh ratio: $\alpha\Delta t/\Delta x^2 \le 1/2$ for explicit heat schemes, stiffness in disguise, and the Courant–Friedrichs–Lewy condition for waves. Laplace's equation gives a large sparse system for the next lesson's iterative solvers, and the Lax equivalence theorem ties the strands together.

## Learning Path

- **What you should already know**: FTCS for the heat equation and its blow-up for large steps (Mathematics Lab using Python II, Lesson m1-l4); stiffness, A-stability and the trapezoidal rule (Lesson m1-l3); the wave equation and d'Alembert's solution (Waves and Optics, Lesson m1-l2).
- **What this lesson adds**: von Neumann analysis; FTCS, BTCS and Crank–Nicolson; the method of lines; leapfrog, CFL and dispersion; the five-point Laplacian; Lax equivalence.
- **What later lessons this will unlock**: iterative solvers for these sparse systems, including conjugate gradients as energy minimisation (Lesson m3-l2), and the optimisation methods of Lesson m3-l3.

## Core Explanation

### The heat equation and the FTCS scheme

For $u_t = \alpha u_{xx}$ on a grid $x_j = j\Delta x$, $t_n = n\Delta t$, write $u_j^n \approx u(x_j, t_n)$. Forward differencing in time and central in space gives the **FTCS scheme**

$$u_j^{n+1} = u_j^n + r\,(u_{j+1}^n - 2u_j^n + u_{j-1}^n), \qquad r = \frac{\alpha\Delta t}{\Delta x^2}.$$

Its truncation error is $O(\Delta t) + O(\Delta x^2)$, so it is **consistent**; consistency alone does not guarantee convergence.

### Von Neumann stability analysis

A linear constant-coefficient scheme multiplies each Fourier mode $u_j^n = g^n e^{ikj\Delta x}$ by an **amplification factor** $g(k)$. Substituting into FTCS with $\theta = k\Delta x$,

$$g = 1 + r\,(e^{i\theta} - 2 + e^{-i\theta}) = 1 - 2r(1 - \cos\theta) = 1 - 4r\sin^2(\theta/2).$$

Stability needs $|g| \le 1$ for all $\theta \in [0, \pi]$. As $g \le 1$ always, the condition is $1 - 4r \ge -1$ at $\theta = \pi$:

$$r = \frac{\alpha\Delta t}{\Delta x^2} \le \frac{1}{2}.$$

For $r > 1/2$ the sawtooth $(-1)^j$ grows by $|1 - 4r| > 1$ per step: the checkerboard explosion. The exact factor $e^{-r\theta^2}$ matches $g$ to $O(\theta^4)$, so short waves are the danger.

This is stiffness seen from the PDE. Discretising in space only (the **method of lines**) gives $u' = (\alpha/\Delta x^2)D_2u$ with $D_2 = \operatorname{tridiag}(1, -2, 1)$, whose eigenvalues $-4\sin^2(j\pi/2(N+1))$ fill $(-4, 0)$. FTCS is explicit Euler on this system, stable when $\Delta t \cdot 4\alpha/\Delta x^2 \le 2$: exactly $r \le 1/2$. Halving $\Delta x$ quarters $\Delta t$, so explicit cost scales as $\Delta x^{-3}$ in one dimension.

### Implicit schemes: BTCS and Crank–Nicolson

Evaluating the spatial difference at the new level gives **BTCS** (implicit Euler):

$$u_j^{n+1} - r\,(u_{j+1}^{n+1} - 2u_j^{n+1} + u_{j-1}^{n+1}) = u_j^n, \qquad g = \frac{1}{1 + 4r\sin^2(\theta/2)},$$

with $0 < g \le 1$ for every $r$: **unconditionally stable**, damping short waves, first order in time. Averaging both levels, the trapezoidal rule of Lesson m1-l3, gives **Crank–Nicolson**:

$$u_j^{n+1} - \tfrac{r}{2}\delta^2u_j^{n+1} = u_j^n + \tfrac{r}{2}\delta^2u_j^n, \qquad g = \frac{1 - 2r\sin^2(\theta/2)}{1 + 2r\sin^2(\theta/2)},$$

where $\delta^2u_j = u_{j+1} - 2u_j + u_{j-1}$. Here $|g| < 1$ for all $r$, with second order in $\Delta t$ and $\Delta x$, and each step is an $O(N)$ tridiagonal (Thomas) solve, so $\Delta t$ is set by accuracy alone. The caveat: as $r\sin^2(\theta/2) \to \infty$, $g \to -1$, so for large $r$ the sawtooth part of discontinuous data flips sign each step instead of decaying; a few initial BTCS steps remove it.

### The wave equation and the CFL condition

For $u_{tt} = c^2u_{xx}$, central differences in both variables give the **leapfrog scheme**

$$u_j^{n+1} = 2u_j^n - u_j^{n-1} + s^2(u_{j+1}^n - 2u_j^n + u_{j-1}^n), \qquad s = \frac{c\Delta t}{\Delta x},$$

with **Courant number** $s$. It is second order, with the second starting level from a Taylor step using the initial velocity. Von Neumann analysis gives

$$g^2 - 2\beta g + 1 = 0, \qquad \beta = 1 - 2s^2\sin^2(\theta/2).$$

The roots multiply to 1. If $|\beta| \le 1$ they are conjugates with $|g| = 1$: no growth or damping. If $|\beta| > 1$ they are real and one exceeds 1 in modulus. As $\beta$ is most negative at $\theta = \pi$, stability requires $s^2 \le 1$:

$$c\Delta t \le \Delta x.$$

This is the **Courant–Friedrichs–Lewy (CFL) condition**: information moves one cell per step, so the numerical domain of dependence must contain the physical one. The limit scales as $\Delta x$, so explicit schemes suit waves. At $s = 1$ the scheme becomes $u_j^{n+1} = u_{j+1}^n + u_{j-1}^n - u_j^{n-1}$, reproducing d'Alembert's solution exactly on the grid.

For $s < 1$ the roots are $g = e^{\mp i\omega\Delta t}$ with $\cos\omega\Delta t = 1 - 2s^2\sin^2(k\Delta x/2)$ rather than $\omega = ck$. Short waves lag: this **numerical dispersion** trails a wake behind sharp pulses; about ten points per wavelength keep phase errors below $1\%$ (Example 2).

### Laplace's equation and the five-point scheme

For $u_{xx} + u_{yy} = 0$ on a square grid of spacing $h$, central differences give the **five-point scheme**

$$u_{i+1,j} + u_{i-1,j} + u_{i,j+1} + u_{i,j-1} - 4u_{i,j} = 0,$$

with truncation error $\tfrac{h^2}{12}(u_{xxxx} + u_{yyyy})$. Each interior value is the mean of its neighbours, so extremes occur on the boundary: the **discrete maximum principle**, which also bounds errors from boundary data. The $N^2$ unknowns satisfy $Au = b$ with five nonzeros per row. The matrix of $-\Delta_h$ is symmetric positive definite with eigenvalues $4\sin^2(p\pi/2(N+1)) + 4\sin^2(q\pi/2(N+1))$, so $\kappa \approx (2N/\pi)^2$; $N = 1000$ gives a million unknowns with $\kappa \approx 4 \times 10^5$, far beyond dense LU, hence Lesson m3-l2. Example 3 is a tiny instance.

### The Lax equivalence theorem

For a well-posed linear initial-value problem and a consistent scheme, the **Lax equivalence theorem** states that stability is necessary and sufficient for convergence. Consistency comes from Taylor expansion; bound the amplification factor and convergence at the truncation order follows. The script integrates $u_t = u_{xx}$ with $u(x, 0) = \sin\pi x$ on $[0, 1]$ by FTCS at $r = 0.4$ and $r = 0.6$ and by Crank–Nicolson at $r = 2$, against the exact $e^{-\pi^2t}\sin\pi x$. Expect the $r = 0.6$ run to show a growing checkerboard and the other two to agree with the exact solution to a few times $10^{-4}$.

```python
import numpy as np

N, alpha, t_end = 40, 1.0, 0.1
dx = 1.0 / N; x = np.linspace(0.0, 1.0, N + 1)
exact = np.exp(-np.pi**2 * t_end) * np.sin(np.pi * x)
D2 = (np.eye(N - 1, k=1) - 2 * np.eye(N - 1) + np.eye(N - 1, k=-1))   # interior points only

def ftcs(r):
    dt = r * dx**2 / alpha; steps = int(round(t_end / dt))
    u = np.sin(np.pi * x[1:-1])
    for _ in range(steps):
        u = u + r * D2 @ u            # amplification 1 - 4 r sin^2(theta/2)
    return u

def crank_nicolson(r):
    dt = r * dx**2 / alpha; steps = int(round(t_end / dt))
    I = np.eye(N - 1); A = I - 0.5 * r * D2; B = I + 0.5 * r * D2
    u = np.sin(np.pi * x[1:-1])
    for _ in range(steps):
        u = np.linalg.solve(A, B @ u)  # tridiagonal solve; use scipy.linalg.solve_banded for speed
    return u

for name, u in [("FTCS r=0.4", ftcs(0.4)), ("FTCS r=0.6", ftcs(0.6)), ("CN   r=2.0", crank_nicolson(2.0))]:
    print(name, "max error", f"{np.max(np.abs(u - exact[1:-1])):.3e}")
```

## Key Ideas

- **Von Neumann analysis**: stability means $|g(\theta)| \le 1$ on $[0, \pi]$.
- **Heat equation**: FTCS needs $r \le 1/2$; BTCS and Crank–Nicolson are unconditionally stable.
- **Method of lines**: $r \le 1/2$ is explicit Euler's stiffness limit.
- **Wave equation**: leapfrog has $|g| = 1$ iff $s = c\Delta t/\Delta x \le 1$ (CFL); $s = 1$ is exact, $s < 1$ dispersive.
- **Laplace equation**: a sparse SPD system with $\kappa \sim (2N/\pi)^2$.
- **Lax equivalence**: consistency plus stability equals convergence.

## Worked Examples

### Example 1 — Choosing a scheme for the heat equation

With $\alpha = 1$, $\Delta x = 0.05$, find the largest FTCS step, and compare the damping of the mode $k = \pi$ by FTCS at its limit and Crank–Nicolson with $\Delta t = 0.05$.

**Solution.** FTCS needs $\Delta t \le \Delta x^2/2\alpha = 1.25 \times 10^{-3}$: $800$ steps. For $k = \pi$, $\theta = \pi\Delta x = 0.1571$ and $\sin^2(\theta/2) = 6.156 \times 10^{-3}$. At $r = 1/2$, $g = \cos\theta = 0.98769$ against the exact $e^{-0.01234} = 0.98774$, an $O(\theta^4)$ error. Crank–Nicolson with $\Delta t = 0.05$ has $r = 20$ and needs $20$ steps, with

$$g = \frac{1 - 2 \times 20 \times 6.156 \times 10^{-3}}{1 + 0.2462} = \frac{0.7538}{1.2462} = 0.6048,$$

against $e^{-\pi^2 \times 0.05} = 0.6105$: about $1\%$ per step, quartered by halving $\Delta t$. For the sawtooth, Crank–Nicolson gives $g = -39/41 = -0.951$, ringing for a hundred steps, whereas BTCS gives $g = 1/81$.

### Example 2 — CFL violation and numerical dispersion

For leapfrog, compute the growth per step at $s = 1.2$ and the phase-speed error at $s = 0.8$ for eight grid points per wavelength.

**Solution.** At $s = 1.2$ and $\theta = \pi$, $\beta = 1 - 2(1.44) = -1.88$, so $g = -1.88 \pm \sqrt{1.88^2 - 1} = -1.88 \pm 1.592$: $g = -3.472$ or $-0.288$. The sawtooth grows by $3.47^{20} \approx 6 \times 10^{10}$ in twenty steps. At $s = 0.8$ the worst case is $\beta = 1 - 1.28 = -0.28 \in [-1, 1]$, so every mode has $|g| = 1$. For eight points per wavelength, $\theta = \pi/4$ and

$$\cos(\omega\Delta t) = 1 - 2(0.64)\sin^2(\pi/8) = 1 - 1.28 \times 0.1464 = 0.8125, \qquad \omega\Delta t = 0.6223,$$

while the exact value is $s\theta = 0.8 \times 0.7854 = 0.6283$. The phase speed is $0.6223/0.6283 = 0.9904c$: after $100$ wavelengths the wave is almost one wavelength behind.

### Example 3 — Five-point Laplacian on a $2 \times 2$ interior grid

Solve Laplace's equation on the unit square with $u = 100$ on the top edge and $u = 0$ on the others, using $h = 1/3$.

**Solution.** Number the interior points $u_1, u_2$ (upper row) and $u_3, u_4$ (lower row). The equations are $4u_1 - u_2 - u_3 = 100$, $4u_2 - u_1 - u_4 = 100$, $4u_3 - u_1 - u_4 = 0$, $4u_4 - u_2 - u_3 = 0$. Symmetry gives $u_1 = u_2 = a$, $u_3 = u_4 = b$, so $3a - b = 100$ and $3b = a$: $b = 12.5$, $a = 37.5$, both between $0$ and $100$ as the maximum principle requires. Jacobi from zero gives $(25, 25, 0, 0)$, then $(31.25, 31.25, 6.25, 6.25)$, the error halving each sweep, a rate the next lesson explains.

## Common Misconceptions

- **"A consistent scheme converges as the mesh is refined."** Only if stable: FTCS at $r = 0.6$ is consistent and diverges on every mesh.
- **"Implicit schemes are always better."** For waves the CFL limit $\Delta t \propto \Delta x$ is what accuracy demands anyway, and explicit leapfrog is cheaper and non-dissipative.
- **"Unconditionally stable means any $\Delta t$ is fine."** Stable is not accurate: large $r$ leaves Crank–Nicolson with $g \approx -1$ for short waves and persistent sawtooth oscillations.
- **"The CFL condition is a numerical accident."** It encodes causality: otherwise the scheme computes values from data that cannot yet have reached them.

## Connections

- Heat conduction (Thermal Physics) and reactor neutron diffusion (Nuclear Physics) codes are implicit because of $\Delta t \propto \Delta x^2$.
- Leapfrog with $s < 1$ is the finite-difference time-domain method for Maxwell's equations in Electricity and Magnetism, with CFL condition $c\Delta t \le \Delta x/\sqrt{d}$ in $d$ dimensions.
- Laplace's equation with Dirichlet data is conductor electrostatics; the five-point scheme computes potential maps for electrodes and ion traps.
- Stellar hydrodynamics and cosmological simulations in Astrophysics take CFL-limited time steps set by the fastest signal.

## Quick Check

1. Derive the FTCS amplification factor for $u_t = \alpha u_{xx}$ and state the stability condition.
2. Show that the BTCS factor satisfies $0 < g \le 1$ for every $r > 0$.
3. Why is the Courant number relevant for waves, but $\alpha\Delta t/\Delta x^2$ for heat?
4. A wave simulation has $c = 3 \times 10^8\ \text{m/s}$ and $\Delta x = 1\ \text{mm}$. What is the largest stable leapfrog $\Delta t$ in one dimension?
5. State the discrete maximum principle and explain why it bounds the error from perturbed boundary data.

## Takeaway

- Von Neumann analysis reduces stability to $|g(\theta)| \le 1$, usually decided by the sawtooth mode.
- FTCS needs $\alpha\Delta t/\Delta x^2 \le 1/2$; BTCS and Crank–Nicolson are unconditionally stable, Crank–Nicolson second order but prone to ringing.
- Leapfrog is neutrally stable iff $c\Delta t \le \Delta x$, exact at $s = 1$ and dispersive below.
- The five-point Laplacian is a sparse SPD system with $\kappa \sim N^2$ and a discrete maximum principle.
- Lax: consistency and stability together are equivalent to convergence.
