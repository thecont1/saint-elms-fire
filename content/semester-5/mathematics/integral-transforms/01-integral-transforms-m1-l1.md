***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-5
semesterName: Semester 5
subjectId: mathematics
subjectName: Mathematics
courseId: integral-transforms
courseName: Integral Transforms (Mathematics Elective I)
moduleId: integral-transforms-module-1
moduleName: Fourier Series and Fourier Transforms
lessonId: integral-transforms-m1-l1
lessonName: Periodic Functions, Fourier Series and the Dirichlet Conditions
lessonNumber: 1
moduleNumber: 1
semesterNumber: 5
difficulty: foundation
estimatedStudyMinutes: 55
releaseOrder: 1
prerequisites:
  - differential-equations-m2-l2
  - calculus-using-python-m1-l2
learningObjectives:
  - Derive the Euler–Fourier formulas for the coefficients $a_n$ and $b_n$ from the orthogonality of the trigonometric system on $[-L, L]$.
  - State the Dirichlet conditions and predict the value to which a Fourier series converges at a point of continuity and at a jump.
  - Compute the Fourier series of standard periodic waveforms (square, sawtooth, parabolic, half-wave rectified) and interpret the harmonics physically.
  - Relate the rate of decay of the Fourier coefficients to the smoothness of the function.
concepts:
  - Periodic function
  - Orthogonality of trigonometric functions
  - Euler–Fourier coefficient formulas
  - Dirichlet conditions
  - Convergence at a jump discontinuity
  - Even and odd function series
  - Harmonic spectrum
tags:
  - mathematics
  - integral-transforms
  - fourier-series
  - periodic-functions
sourceType: authored-courseware
status: in-review
assessmentHints:
  - conceptual
  - derivation
  - problem-solving
  - short-answer
***

# Periodic Functions, Fourier Series and the Dirichlet Conditions

## Overview

A Fourier series writes a periodic function as a sum of sines and cosines whose frequencies are integer multiples of a fundamental. Introduced by Joseph Fourier in 1807 to solve the heat equation, it is now the common language of acoustics, electrical engineering, optics, quantum mechanics and signal processing: any repeating signal, however jagged, is a superposition of pure tones. This lesson develops periodicity, the orthogonality of the trigonometric system, the Euler–Fourier formulas for the coefficients, and the central question of when the series converges to the function. The Dirichlet conditions answer it, including the result that at a jump the series converges to the midpoint. We compute the series of the square wave, sawtooth, parabola and half-wave rectified sine, and see how smoothness controls the decay of the coefficients.

## Learning Path

- **What you should already know**: integration of products of trigonometric functions, the product-to-sum identities, the harmonic oscillator equation $y'' + \omega^2 y = 0$ (Differential Equations, Lesson m2-l2), and numerical integration in Python (Calculus using Python, Lesson m1-l2).
- **What this lesson adds**: orthogonality, the Euler–Fourier formulas, Dirichlet's convergence theorem, parity simplifications and a catalogue of standard series.
- **What later lessons this will unlock**: half-range expansions, Parseval's identity and the Gibbs phenomenon (Lesson m1-l2); the Fourier integral and transform (Lesson m1-l3); the heat and wave equations (Lesson m3-l2); and the discrete Fourier transform in `numpy.fft` (Lesson m3-l3).

## Core Explanation

### Periodic functions

A function $f:\mathbb{R}\to\mathbb{R}$ is **periodic with period** $T>0$ if $f(x+T)=f(x)$ for every $x$; the smallest such $T$ is the **fundamental period**. The functions $\sin(n\pi x/L)$ and $\cos(n\pi x/L)$ have fundamental period $2L/n$, so all share the period $2L$ and any sum of them with integer $n$ is $2L$-periodic. The **fundamental angular frequency** is $\omega_0 = 2\pi/T = \pi/L$, and the $n$-th term oscillates at the **$n$-th harmonic** $n\omega_0$.

The integral over one period, $\int_a^{a+T} f\,dx$, is independent of $a$; we usually integrate over $[-L, L]$ or $[0, 2\pi]$.

### Orthogonality of the trigonometric system

The whole theory rests on three integrals. For non-negative integers $m, n$,

$$\int_{-L}^{L} \cos\frac{m\pi x}{L}\cos\frac{n\pi x}{L}\,dx =
\begin{cases} 0 & m\neq n,\\ L & m=n\neq 0,\\ 2L & m=n=0, \end{cases}$$

$$\int_{-L}^{L} \sin\frac{m\pi x}{L}\sin\frac{n\pi x}{L}\,dx =
\begin{cases} 0 & m\neq n,\\ L & m=n\neq 0, \end{cases}$$

$$\int_{-L}^{L} \sin\frac{m\pi x}{L}\cos\frac{n\pi x}{L}\,dx = 0 \quad \text{for all } m, n.$$

For the proof, with $m\neq n$, $\cos\frac{m\pi x}{L}\cos\frac{n\pi x}{L} = \tfrac12\left[\cos\frac{(m-n)\pi x}{L} + \cos\frac{(m+n)\pi x}{L}\right]$, and each cosine on the right integrates to zero over a whole number of its periods. When $m=n\neq 0$ the first term becomes $\tfrac12$, which integrates to $L$. The third relation holds because the integrand is odd on the symmetric interval.

In Linear Algebra terms, $1, \cos(n\pi x/L), \sin(n\pi x/L)$ form an **orthogonal set** for the inner product $\langle f, g\rangle = \int_{-L}^{L} f g\,dx$; expanding a function means finding its components along orthogonal axes.

### The Euler–Fourier formulas

Suppose a $2L$-periodic function $f$ can be written as

$$f(x) = \frac{a_0}{2} + \sum_{n=1}^{\infty}\left(a_n\cos\frac{n\pi x}{L} + b_n\sin\frac{n\pi x}{L}\right),$$

and that it may be integrated term by term. Multiplying by $\cos(m\pi x/L)$ and integrating over $[-L, L]$, orthogonality kills every term except $n = m$:

$$\int_{-L}^{L} f(x)\cos\frac{m\pi x}{L}\,dx = a_m L .$$

The same argument with $\sin(m\pi x/L)$ gives $b_m L$, and integrating the series directly gives $a_0 L$. Hence the **Euler–Fourier formulas**

$$a_n = \frac{1}{L}\int_{-L}^{L} f(x)\cos\frac{n\pi x}{L}\,dx \quad (n\geq 0), \qquad
b_n = \frac{1}{L}\int_{-L}^{L} f(x)\sin\frac{n\pi x}{L}\,dx \quad (n\geq 1).$$

The constant term is written $a_0/2$ so that one formula covers $n=0$; it is the **mean value** of $f$ over a period, the "DC component". For $L=\pi$ the formulas reduce to $a_n = \frac{1}{\pi}\int_{-\pi}^{\pi} f\cos nx\,dx$ and $b_n = \frac{1}{\pi}\int_{-\pi}^{\pi} f\sin nx\,dx$.

The derivation assumed the series exists and may be integrated term by term. Neither is automatic: for any integrable $f$ the formulas *define* $a_n, b_n$, and the resulting series is *called* the Fourier series of $f$, written $f(x)\sim\ldots$. Whether it converges, and to what, is a separate theorem.

### The Dirichlet conditions

**Dirichlet's theorem (1829).** Let $f$ be $2L$-periodic and, on one period, **piecewise continuous** (continuous except at finitely many points with finite one-sided limits) with **finitely many maxima and minima**. Then the Fourier series of $f$ converges for every $x$ to

$$\frac{a_0}{2} + \sum_{n=1}^{\infty}\left(a_n\cos\frac{n\pi x}{L} + b_n\sin\frac{n\pi x}{L}\right) = \frac{f(x^+) + f(x^-)}{2}.$$

At a point of continuity the right-hand side is $f(x)$; at a jump it is the **average of the one-sided limits**. The conditions are sufficient, not necessary, and cover every waveform met in physics, excluding only pathologies such as $\sin(1/x)$ near the origin.

Two consequences matter. The value assigned to $f$ *at* a jump is irrelevant; the series returns the midpoint regardless. And convergence near a jump is pointwise but not uniform; the partial sums overshoot by about 9 per cent of the jump, the Gibbs phenomenon of Lesson m1-l2.

### Even and odd functions

If $f$ is **even**, $f(-x) = f(x)$, then $f(x)\sin(n\pi x/L)$ is odd and every $b_n = 0$; the series is a pure cosine series with

$$a_n = \frac{2}{L}\int_{0}^{L} f(x)\cos\frac{n\pi x}{L}\,dx .$$

If $f$ is **odd**, $f(-x) = -f(x)$, then every $a_n = 0$ and

$$b_n = \frac{2}{L}\int_{0}^{L} f(x)\sin\frac{n\pi x}{L}\,dx .$$

Parity halves the work and underlies the half-range expansions of Lesson m1-l2.

### A catalogue of standard series

Taking $L = \pi$:

| Function on $(-\pi,\pi)$ | Parity | Fourier series |
|---|---|---|
| Square wave: $-1$ on $(-\pi,0)$, $+1$ on $(0,\pi)$ | odd | $\dfrac{4}{\pi}\displaystyle\sum_{k=1}^{\infty}\frac{\sin(2k-1)x}{2k-1}$ |
| Sawtooth: $f(x)=x$ | odd | $2\displaystyle\sum_{n=1}^{\infty}\frac{(-1)^{n+1}}{n}\sin nx$ |
| Parabola: $f(x)=x^2$ | even | $\dfrac{\pi^2}{3} + 4\displaystyle\sum_{n=1}^{\infty}\frac{(-1)^n}{n^2}\cos nx$ |

### Smoothness and the decay of coefficients

The square wave and sawtooth have jumps, and their coefficients decay like $1/n$. The parabola (like the triangle wave $|x|$) is continuous with corners, and its coefficients decay like $1/n^2$. In general, if $f, \ldots, f^{(k-1)}$ are continuous and $f^{(k)}$ is piecewise continuous, then $|a_n|, |b_n| \leq C/n^{k+1}$: each integration by parts brings down a factor $1/n$, stopping at the first derivative that jumps. An infinitely differentiable periodic function has coefficients decaying faster than any power of $n$, and the **Riemann–Lebesgue lemma** guarantees $a_n, b_n\to 0$ in all cases. This link between smoothness in $x$ and decay in $n$ runs through the course: sharp features in one domain require broad content in the other.

## Key Ideas

- **Fourier series**: a $2L$-periodic function is a superposition of harmonics of the fundamental frequency $\pi/L$.
- **Orthogonality**: $\int_{-L}^{L}\cos\frac{m\pi x}{L}\cos\frac{n\pi x}{L}dx = L\delta_{mn}$ for $m,n\geq 1$, similarly for sines; cross terms vanish.
- **Euler–Fourier formulas**: $a_n = \frac{1}{L}\int_{-L}^{L} f\cos\frac{n\pi x}{L}dx$, $b_n = \frac1L\int_{-L}^{L} f\sin\frac{n\pi x}{L}dx$; the term $a_0/2$ is the mean of $f$.
- **Dirichlet conditions**: piecewise continuity and finitely many extrema per period guarantee convergence to $f(x)$ where $f$ is continuous and to $\tfrac12[f(x^+)+f(x^-)]$ at a jump.
- **Parity**: even functions have pure cosine series, odd functions pure sine series, with integrals over half the period doubled.
- **Smoothness controls decay**: a jump gives coefficients of order $1/n$; a corner gives $1/n^2$; each additional continuous derivative gains another power of $n$.

## Worked Examples

### Example 1 — Fourier series of the square wave

Find the Fourier series of the $2\pi$-periodic function $f(x) = -1$ for $-\pi < x < 0$ and $f(x) = +1$ for $0 < x < \pi$, and evaluate the series at $x = \pi/2$.

**Solution.** The function is odd, so $a_n = 0$ for all $n$ and

$$b_n = \frac{2}{\pi}\int_0^{\pi}\sin nx\,dx = \frac{2}{\pi}\left[-\frac{\cos nx}{n}\right]_0^\pi = \frac{2}{n\pi}\left(1 - (-1)^n\right).$$

For even $n$ this vanishes; for odd $n$ it equals $4/(n\pi)$. Therefore

$$f(x) \sim \frac{4}{\pi}\left(\sin x + \frac{\sin 3x}{3} + \frac{\sin 5x}{5} + \cdots\right).$$

Only odd harmonics appear, because of the half-wave symmetry $f(x+\pi) = -f(x)$. At $x=\pi/2$, where $f = 1$, the sines are $\sin(n\pi/2) = (-1)^{(n-1)/2}$ for odd $n$, so

$$1 = \frac{4}{\pi}\left(1 - \frac13 + \frac15 - \frac17 + \cdots\right),$$

Leibniz's formula for $\pi/4$. At $x = 0$ every term vanishes and the series gives $0$, the midpoint of the jump.

### Example 2 — The parabola and the Basel problem

Expand $f(x) = x^2$ on $(-\pi, \pi)$, extended periodically, and use the result to evaluate $\sum_{n=1}^\infty 1/n^2$.

**Solution.** The function is even, so $b_n = 0$ and

$$a_0 = \frac{2}{\pi}\int_0^\pi x^2\,dx = \frac{2\pi^2}{3}, \qquad
a_n = \frac{2}{\pi}\int_0^{\pi} x^2\cos nx\,dx .$$

Integrating by parts twice,

$$\int_0^\pi x^2\cos nx\,dx = \left[\frac{x^2\sin nx}{n}\right]_0^\pi - \frac{2}{n}\int_0^\pi x\sin nx\,dx = -\frac{2}{n}\left(-\frac{\pi\cos n\pi}{n}\right) = \frac{2\pi(-1)^n}{n^2},$$

so $a_n = 4(-1)^n/n^2$ and

$$x^2 = \frac{\pi^2}{3} + 4\sum_{n=1}^\infty\frac{(-1)^n}{n^2}\cos nx, \qquad -\pi\leq x\leq\pi .$$

The periodic extension is continuous (the values at $\pm\pi$ agree), so equality holds everywhere, including $x=\pi$ where $\cos n\pi = (-1)^n$:

$$\pi^2 = \frac{\pi^2}{3} + 4\sum_{n=1}^\infty\frac{1}{n^2} \quad\Longrightarrow\quad \sum_{n=1}^\infty\frac{1}{n^2} = \frac{\pi^2}{6}.$$

This is Euler's solution of the Basel problem. Setting $x=0$ instead gives $\sum (-1)^{n+1}/n^2 = \pi^2/12$.

### Example 3 — Half-wave rectified sine

A half-wave rectifier passes the positive half of a sinusoidal voltage and blocks the negative half, so $v(t) = V_0\sin\omega t$ for $0 < \omega t < \pi$ and $v(t) = 0$ for $\pi < \omega t < 2\pi$, with period $T = 2\pi/\omega$. Find the Fourier series and the DC component.

**Solution.** Write $\theta = \omega t$; the function has period $2\pi$ in $\theta$ and only $[0,\pi]$ contributes to the integrals. The mean value is

$$\frac{a_0}{2} = \frac{1}{2\pi}\int_0^\pi V_0\sin\theta\,d\theta = \frac{V_0}{\pi} \approx 0.318\,V_0 .$$

For the cosine coefficients, using $\sin\theta\cos n\theta = \tfrac12[\sin(n+1)\theta - \sin(n-1)\theta]$,

$$a_n = \frac{V_0}{\pi}\int_0^\pi \sin\theta\cos n\theta\,d\theta = \frac{V_0}{2\pi}\left[\frac{1-\cos(n+1)\pi}{n+1} - \frac{1-\cos(n-1)\pi}{n-1}\right] \quad (n\neq 1).$$

For odd $n\geq 3$ both cosines equal $1$ and $a_n = 0$; for even $n$ both equal $-1$, giving $a_n = -\frac{2V_0}{\pi(n^2-1)}$. Separately $a_1 = 0$. For the sines, $b_1 = \frac{V_0}{\pi}\int_0^\pi\sin^2\theta\,d\theta = V_0/2$, and for $n\geq 2$ the integral of $\sin\theta\sin n\theta$ over $[0,\pi]$ vanishes. Hence

$$v(t) = \frac{V_0}{\pi} + \frac{V_0}{2}\sin\omega t - \frac{2V_0}{\pi}\sum_{k=1}^\infty\frac{\cos 2k\omega t}{4k^2 - 1}.$$

The DC component $V_0/\pi$ is what a moving-coil meter reads; the fundamental has half the original amplitude; and the even harmonics $2\omega, 4\omega, \ldots$ are the ripple a smoothing capacitor must remove.

## Common Misconceptions

- **"A Fourier series always converges to the function."** At a jump it converges to the midpoint $\tfrac12[f(x^+)+f(x^-)]$ whatever $f$ is there; without the Dirichlet conditions convergence may fail altogether.
- **"The constant term is $a_0$."** It is $a_0/2$, the mean of $f$ over a period; the factor $\tfrac12$ lets the formula for $a_n$ also give $a_0$, and forgetting it is the commonest error.
- **"If $f(x) = x$, its Fourier series is just $x$."** The series represents the *periodic extension*: for $x$ on $(-\pi,\pi)$ it is a sawtooth wave, equal to $x$ only inside that interval.
- **"More terms always give a uniformly better approximation."** Near a jump the maximum error does not shrink; the 9 per cent overshoot merely moves closer to the discontinuity. The improvement is in mean square.
- **"Orthogonality means the graphs cross at right angles."** It means $\int f g\,dx = 0$ over a period, the function-space analogue of a zero dot product.

## Connections

- The Fourier series of a vibrating string is its decomposition into the normal modes of Waves and Optics (Lesson m1-l3); the $b_n$ are the harmonic amplitudes that give an instrument its timbre.
- The half-wave rectified sine of Example 3 is the output of the diode rectifier of Basic Electronics (Lesson m2-l1); its ripple harmonics explain why a smoothing capacitor is sized against $2\omega$.
- Orthogonality of $\sin(n\pi x/L)$ makes the particle-in-a-box eigenfunctions of Introduction to Quantum Mechanics (Lesson m2-l2) a basis; expanding a wavefunction in them is a Fourier sine series.
- The Euler–Fourier formulas as projections onto an orthogonal basis are developed in Linear Algebra (Lesson m2-l2).
- Fourier's original problem, the heat equation on a rod, returns in Lesson m3-l2, where the coefficients computed here become the initial amplitudes of decaying temperature modes.

## Quick Check

1. State the orthogonality relations on $[-L, L]$ and explain why the constant term of a Fourier series is written as $a_0/2$.
2. A $2\pi$-periodic function jumps at $x=1$ from $f(1^-) = 3$ to $f(1^+) = -1$. To what value does its Fourier series converge at $x=1$?
3. Without integrating, explain why the Fourier series of $x^3$ on $(-\pi,\pi)$ contains only sine terms, and estimate how fast its coefficients decay.
4. Use the series for $x^2$ at $x = 0$ to evaluate $1 - \tfrac14 + \tfrac19 - \tfrac1{16} + \cdots$.
5. A $5$ V, $50$ Hz square wave drives a loudspeaker. List the frequencies and amplitudes of the first three non-zero harmonics.

## Takeaway

- A $2L$-periodic function expands in the orthogonal system $\{1, \cos(n\pi x/L), \sin(n\pi x/L)\}$, with Euler–Fourier coefficients.
- The Dirichlet conditions, met by every physical waveform, guarantee convergence to $f(x)$ at points of continuity and to the midpoint at jumps.
- Even functions give cosine series and odd functions give sine series; symmetry should always be checked before integrating.
- The square wave, sawtooth, parabola and rectified sine are standard results; their series evaluate sums such as $\pi^2/6$ and $\pi/4$.
- Coefficients decay like $1/n^{k+1}$ when the $k$-th derivative is the first to jump: smoothness in $x$ means rapid convergence in $n$.
