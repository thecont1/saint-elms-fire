***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-5
semesterName: Semester 5
subjectId: mathematics
subjectName: Mathematics
courseId: integral-transforms
courseName: Integral Transforms (Mathematics Elective I)
moduleId: integral-transforms-module-3
moduleName: Transform Methods for ODEs, PDEs and Signals
lessonId: integral-transforms-m3-l2
lessonName: Heat and Wave Equations by Fourier and Laplace Methods
lessonNumber: 8
moduleNumber: 3
semesterNumber: 5
difficulty: advanced
estimatedStudyMinutes: 60
releaseOrder: 8
prerequisites:
  - integral-transforms-m3-l1
  - differential-equations-m2-l1
learningObjectives:
  - Solve the heat and wave equations on a finite interval by separation of variables, expanding initial data in half-range Fourier series.
  - Solve the heat equation on the whole line by the Fourier transform and express the solution as a convolution with the heat kernel $G(x,t) = (4\pi\kappa t)^{-1/2}e^{-x^2/4\kappa t}$.
  - Derive d'Alembert's solution of the infinite string from the Fourier transform.
  - Solve a semi-infinite heat-conduction problem by the Laplace transform in time and interpret the complementary error function solution.
concepts:
  - Heat equation
  - Wave equation
  - Separation of variables
  - Heat kernel
  - d'Alembert's solution
  - Complementary error function
  - Normal modes of a string
tags:
  - mathematics
  - integral-transforms
  - heat-equation
  - wave-equation
sourceType: authored-courseware
status: in-review
assessmentHints:
  - derivation
  - problem-solving
  - conceptual
  - computational
***

# Heat and Wave Equations by Fourier and Laplace Methods

## Overview

Fourier invented his series to solve the heat equation, and this lesson closes the circle. A partial differential equation in $x$ and $t$ is reduced to ordinary differential equations by a transform in one variable, and the choice of transform follows the geometry. On a finite interval with fixed or insulated ends, separation of variables produces a Fourier sine or cosine series whose coefficients are the half-range coefficients of Lesson m1-l2, and each mode decays or oscillates independently. On the whole line, the Fourier transform in $x$ turns the heat equation into $\hat u_t = -\kappa k^2\hat u$, whose solution is a Gaussian filter; inverting it gives the heat kernel and the $\sqrt{t}$ spreading of diffusion. The same method applied to the wave equation yields d'Alembert's travelling waves. On a half-line with data switched on at $t = 0$, the Laplace transform in time is natural, and the answer is the complementary error function.

## Learning Path

- **What you should already know**: half-range sine and cosine series (Lesson m1-l2); Fourier transform properties and the Gaussian pair (Lesson m1-l3); the Laplace derivative rule and step inputs (Lessons m2-l1 and m2-l3); solving $X'' + \lambda X = 0$ (Differential Equations, Lesson m2-l1).
- **What this lesson adds**: separation of variables with Dirichlet and Neumann ends, normal modes of a string, the heat kernel, d'Alembert's formula from Fourier analysis, and Laplace-transform solution of a half-line problem.
- **What later lessons this will unlock**: the numerical, FFT-based treatment of the same equations on a periodic grid (Lesson m3-l3); spectral methods in Advanced Numerical Methods; wave propagation in later physics courses.

## Core Explanation

### The heat equation on a finite rod

The temperature $u(x, t)$ in a uniform rod of length $L$ obeys the **heat equation**

$$\frac{\partial u}{\partial t} = \kappa\frac{\partial^2u}{\partial x^2},$$

where $\kappa$ (m$^2$ s$^{-1}$) is the thermal diffusivity. Take ends held at zero, $u(0, t) = u(L, t) = 0$, and initial temperature $u(x, 0) = f(x)$. Seek separated solutions $u = X(x)T(t)$. Dividing by $\kappa XT$,

$$\frac{T'}{\kappa T} = \frac{X''}{X} = -\lambda,$$

a constant, because the left side depends only on $t$ and the middle only on $x$. The spatial problem $X'' + \lambda X = 0$, $X(0) = X(L) = 0$ has non-trivial solutions only for $\lambda_n = (n\pi/L)^2$, with $X_n = \sin(n\pi x/L)$, and then $T_n = e^{-\kappa\lambda_nt}$. Superposing,

$$u(x, t) = \sum_{n=1}^{\infty}b_n\,e^{-\kappa n^2\pi^2t/L^2}\sin\frac{n\pi x}{L}, \qquad b_n = \frac2L\int_0^Lf(x)\sin\frac{n\pi x}{L}\,dx .$$

At $t = 0$ this is the half-range sine series of $f$, the Dirichlet-end case anticipated in Lesson m1-l2. Each mode decays at its own rate $\kappa n^2\pi^2/L^2$, so high harmonics, the sharp features, disappear first: the heat equation smooths. After a time of order $\tau_1 = L^2/(\kappa\pi^2)$ only the fundamental survives. For **insulated ends**, $u_x = 0$ at $x = 0, L$, the eigenfunctions are $\cos(n\pi x/L)$ and the solution is a half-range cosine series whose constant term $a_0/2$, the mean temperature, never decays, which is conservation of heat.

### The wave equation on a finite string

A string of length $L$ fixed at both ends obeys $u_{tt} = c^2u_{xx}$, with $c = \sqrt{T/\mu}$, and starts with displacement $f(x)$ and velocity $g(x)$. The same separation gives $X_n = \sin(n\pi x/L)$ but now $T'' + c^2\lambda_nT = 0$, so each mode oscillates:

$$u(x, t) = \sum_{n=1}^{\infty}\left[A_n\cos\frac{n\pi ct}{L} + B_n\sin\frac{n\pi ct}{L}\right]\sin\frac{n\pi x}{L},$$

$$A_n = \frac2L\int_0^Lf\sin\frac{n\pi x}{L}dx, \qquad B_n = \frac{2}{n\pi c}\int_0^Lg\sin\frac{n\pi x}{L}dx .$$

The normal-mode frequencies $\nu_n = nc/2L$ form a harmonic series, which is why stringed instruments sound musical.

### The heat equation on the whole line

For $-\infty < x < \infty$ with $u(x, 0) = f(x)$ and $u \to 0$ at infinity, take the Fourier transform in $x$ (course convention, Lesson m1-l3). The derivative rule turns $u_{xx}$ into $-k^2\hat u$:

$$\frac{\partial\hat u}{\partial t} = -\kappa k^2\hat u \quad\Longrightarrow\quad \hat u(k, t) = \hat f(k)\,e^{-\kappa k^2t}.$$

Each wavenumber decays independently, the continuous analogue of the modes above. The factor $e^{-\kappa k^2t}$ is a Gaussian in $k$; comparing with the pair $e^{-x^2/2\sigma^2} \leftrightarrow \sigma\sqrt{2\pi}e^{-\sigma^2k^2/2}$ with $\sigma^2 = 2\kappa t$, it is the transform of the **heat kernel**

$$G(x, t) = \frac{1}{\sqrt{4\pi\kappa t}}\,e^{-x^2/4\kappa t}.$$

By the convolution theorem, the product $\hat f\,\hat G$ inverts to

$$u(x, t) = \int_{-\infty}^{\infty}f(y)\,G(x - y, t)\,dy .$$

$G$ is the temperature produced by a unit point source, $f = \delta(x)$; it has unit area for all $t$ (heat is conserved) and r.m.s. width $\sqrt{2\kappa t}$, so diffusion spreads as $\sqrt t$, not $t$. A Gaussian initial profile of width $\sigma_0$ therefore stays Gaussian, with $\sigma(t)^2 = \sigma_0^2 + 2\kappa t$ and peak reduced by $\sigma_0/\sigma(t)$.

### d'Alembert's solution from the Fourier transform

For the infinite string with $u(x, 0) = f$, $u_t(x, 0) = g$, transforming in $x$ gives $\hat u_{tt} = -c^2k^2\hat u$, so

$$\hat u(k, t) = \hat f(k)\cos ckt + \hat g(k)\,\frac{\sin ckt}{ck}.$$

Write $\cos ckt = \tfrac12(e^{ickt} + e^{-ickt})$; by the shift rule $e^{\mp ikct}\hat f \leftrightarrow f(x \mp ct)$. The factor $\frac{\sin ckt}{ck}$ is $\frac{1}{2c}$ times the transform $\frac{2\sin kct}{k}$ of the rectangular pulse of half-width $ct$ (Lesson m1-l3), so the second term is a convolution with that pulse. Hence

$$u(x, t) = \frac{f(x - ct) + f(x + ct)}{2} + \frac{1}{2c}\int_{x - ct}^{x + ct}g(y)\,dy ,$$

**d'Alembert's formula**: two undistorted travelling waves, with disturbances moving at exactly speed $c$. Contrast the heat kernel, which is positive everywhere for $t > 0$: diffusion has infinite propagation speed in this model.

### A half-line problem by the Laplace transform

Let $u_t = \kappa u_{xx}$ for $x > 0$, with $u(x, 0) = 0$, the surface raised suddenly to $u(0, t) = T_0$, and $u$ bounded as $x \to \infty$. Transforming in $t$, with $U(x, s) = \mathcal{L}\{u\}$ and zero initial temperature,

$$sU = \kappa U_{xx} \quad\Longrightarrow\quad U = A(s)e^{-x\sqrt{s/\kappa}} + B(s)e^{x\sqrt{s/\kappa}} .$$

Boundedness forces $B = 0$, and $U(0, s) = T_0/s$ gives

$$U(x, s) = \frac{T_0}{s}\,e^{-x\sqrt{s/\kappa}} .$$

This has a branch point at $s = 0$, so partial fractions fail; the Bromwich integral with a contour around the branch cut (Lesson m2-l2) yields the standard pair $\mathcal{L}\{\operatorname{erfc}(a/2\sqrt t)\} = e^{-a\sqrt s}/s$. With $a = x/\sqrt\kappa$,

$$u(x, t) = T_0\,\operatorname{erfc}\!\left(\frac{x}{2\sqrt{\kappa t}}\right), \qquad \operatorname{erfc}(\eta) = \frac{2}{\sqrt\pi}\int_\eta^\infty e^{-v^2}dv .$$

The solution depends on $x$ and $t$ only through $\eta = x/2\sqrt{\kappa t}$: the heated layer has depth of order $2\sqrt{\kappa t}$.

## Key Ideas

- **Choose the transform by geometry**: finite interval, Fourier series; whole line, Fourier transform in $x$; half-line with switched data, Laplace transform in $t$.
- **Finite rod**: $u = \sum b_ne^{-\kappa n^2\pi^2t/L^2}\sin(n\pi x/L)$ with half-range coefficients; high modes decay fastest.
- **Finite string**: modes oscillate at $\nu_n = nc/2L$; the initial shape gives $A_n$, the initial velocity gives $B_n$.
- **Heat kernel**: $\hat u = \hat fe^{-\kappa k^2t}$, so $u = f * G$ with $G = (4\pi\kappa t)^{-1/2}e^{-x^2/4\kappa t}$ and width $\sqrt{2\kappa t}$.
- **d'Alembert**: the Fourier solution of the infinite string is two waves $f(x \mp ct)$ plus the integral of the initial velocity.
- **Half-line**: Laplace in time gives $T_0\operatorname{erfc}(x/2\sqrt{\kappa t})$, a similarity solution.

## Worked Examples

### Example 1 — Cooling of a copper rod

A copper rod of length $L = 0.50$ m ($\kappa = 1.1 \times 10^{-4}$ m$^2$ s$^{-1}$) is uniformly at $100\,^\circ$C, and at $t = 0$ both ends are plunged into ice at $0\,^\circ$C. Find the series solution and the temperature at the centre after $10$ minutes.

**Solution.** With $f = 100$, $b_n = \frac{2}{L}\int_0^L100\sin\frac{n\pi x}{L}dx = \frac{200}{n\pi}\big(1 - (-1)^n\big)$, which is $\frac{400}{n\pi}$ for odd $n$ and $0$ for even $n$:

$$u(x, t) = \frac{400}{\pi}\sum_{n\ \text{odd}}\frac1n\,e^{-\kappa n^2\pi^2t/L^2}\sin\frac{n\pi x}{L}.$$

At $t = 600$ s, $\kappa\pi^2t/L^2 = (1.1 \times 10^{-4})(9.870)(600)/0.25 = 2.606$. At the centre, $\sin(n\pi/2) = \pm1$, and the $n = 1$ term is $127.3 \times e^{-2.606} = 127.3 \times 0.0739 = 9.40$. The $n = 3$ term contains $e^{-9 \times 2.606} \approx 6 \times 10^{-11}$ and is negligible. So $u(L/2, 600\ \text{s}) \approx 9.4\,^\circ$C. The slowest time constant is $\tau_1 = L^2/(\kappa\pi^2) = 230$ s; after a few $\tau_1$ the profile is a single decaying sine arch.

### Example 2 — The plucked string

A string of length $L$ is pulled aside a distance $h$ at its midpoint and released from rest. Find the mode amplitudes, and the frequencies present for a string with $L = 0.65$ m and $c = 143$ m s$^{-1}$.

**Solution.** The initial shape is the triangle $f = 2hx/L$ on $[0, L/2]$ and $2h(L - x)/L$ on $[L/2, L]$, with $g = 0$, so $B_n = 0$. Integrating by parts on each half,

$$A_n = \frac2L\int_0^Lf(x)\sin\frac{n\pi x}{L}dx = \frac{8h}{n^2\pi^2}\sin\frac{n\pi}{2}.$$

For $n = 1$, for instance, $\int_0^{L/2}x\sin\frac{\pi x}{L}dx = \frac{L^2}{\pi^2}$, and the two halves give $\frac2L\cdot2\cdot\frac{2h}{L}\cdot\frac{L^2}{\pi^2} = \frac{8h}{\pi^2}$. Even harmonics vanish, because the pluck point is a node of every even mode, and the odd amplitudes fall as $1/n^2$ with alternating signs: the third harmonic has $1/9$ of the fundamental's amplitude. The fundamental is $\nu_1 = c/2L = 143/1.30 = 110$ Hz, so the sound contains $110, 330, 550, \ldots$ Hz. Plucking nearer an end restores the even harmonics and brightens the tone.

### Example 3 — Penetration of a temperature step into soil

The surface of dry soil ($\kappa = 5.0 \times 10^{-7}$ m$^2$ s$^{-1}$) is suddenly warmed by $10$ K and held there. At what depth is the temperature rise $5$ K after one day?

**Solution.** From the half-line solution, $u/T_0 = \operatorname{erfc}(\eta) = 0.5$, so $\eta = 0.4769$ (from tables, since $\operatorname{erf}(0.4769) = 0.5$). With $t = 86\,400$ s, $\kappa t = 0.0432$ m$^2$ and $\sqrt{\kappa t} = 0.2078$ m, so

$$x = 2\eta\sqrt{\kappa t} = 2(0.4769)(0.2078) = 0.198\ \text{m}.$$

The half-rise depth is about $20$ cm after a day; because depth scales as $\sqrt t$, it takes $100$ days to reach $2$ m. This is why cellars and burrows stay at nearly constant temperature through the daily cycle.

## Common Misconceptions

- **"Separation of variables assumes the solution is a product."** Each mode is a product, but the solution is a superposition of infinitely many; completeness of the eigenfunctions (Lesson m1-l2) makes the method general.
- **"Any Fourier series will do for the initial data."** The series must satisfy the boundary conditions term by term: sines for fixed ends, cosines for insulated ends.
- **"Diffusion spreads at a constant speed."** The width grows as $\sqrt{2\kappa t}$; doubling the distance takes four times as long.
- **"The heat equation and the wave equation behave alike because both have $u_{xx}$."** The first derivative in time makes modes decay and smooth; the second makes them oscillate and keeps signals sharp, travelling at finite speed $c$.
- **"Every inverse Laplace transform comes from partial fractions."** $e^{-x\sqrt{s/\kappa}}/s$ has a branch point and gives the non-elementary $\operatorname{erfc}$.

## Connections

- The finite string's normal modes and their frequencies $nc/2L$ are the standing waves of Waves and Optics (Lesson m1-l3) and of Melde's experiment in the Waves and Optics Lab (Lesson m1-l1).
- The $\sqrt t$ spreading of the heat kernel is the random-walk law of kinetic theory in Thermal Physics and Statistical Mechanics (Lesson m2-l1), where $\kappa$ plays the role of a diffusion coefficient.
- The free-particle Schrödinger equation is a heat equation with imaginary diffusivity $i\hbar/2m$; its Fourier solution gives the spreading Gaussian wave packet of Introduction to Quantum Mechanics (Lesson m1-l3).
- Radiative energy transport in stellar interiors (Astrophysics III, Lesson m2-l4) is a diffusion process governed by the same equation with variable coefficients.
- Lattice heat conduction in Solid State Physics (Lesson m2-l3) supplies the diffusivity $\kappa = k_{\text{th}}/\rho c_p$ that sets the time scales here.

## Quick Check

1. Show that the heat-equation solution with insulated ends conserves $\int_0^Lu\,dx$.
2. A rod with ends at zero starts with $u(x, 0) = 5\sin(\pi x/L) + 2\sin(3\pi x/L)$. Write $u(x, t)$ without integrating.
3. Verify by differentiation that $G(x, t)$ satisfies $G_t = \kappa G_{xx}$.
4. An infinite string starts at rest with a triangular bump of width $2$ cm. Describe the motion at a later time using d'Alembert's formula.
5. In Example 3, how long does it take for the $5$ K rise to reach $0.40$ m?

## Takeaway

- A transform in one variable reduces a linear PDE to ODEs: Fourier series on finite intervals, Fourier transforms on the line, Laplace transforms for switched data in time.
- On a finite rod the half-range coefficients become decaying mode amplitudes; on a finite string they become oscillating normal modes.
- The whole-line heat equation is solved by Gaussian filtering in $k$, i.e. convolution with the heat kernel; diffusion spreads as $\sqrt t$.
- The Fourier solution of the infinite string reproduces d'Alembert's travelling waves with finite speed $c$.
- Half-line problems lead to similarity solutions such as $T_0\operatorname{erfc}(x/2\sqrt{\kappa t})$ and need Bromwich inversion around a branch point.
