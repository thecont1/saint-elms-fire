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
lessonId: integral-transforms-m1-l2
lessonName: Half-Range Expansions, Parseval's Identity and the Gibbs Phenomenon
lessonNumber: 2
moduleNumber: 1
semesterNumber: 5
difficulty: intermediate
estimatedStudyMinutes: 55
releaseOrder: 2
prerequisites:
  - integral-transforms-m1-l1
  - calculus-using-python-m1-l2
learningObjectives:
  - Construct half-range sine and cosine expansions of a function given on $[0, L]$ and choose between them from the boundary behaviour.
  - Convert between the real and complex forms of a Fourier series using $c_n = \tfrac12(a_n - i b_n)$.
  - Derive Bessel's inequality and apply Parseval's identity to evaluate series such as $\sum 1/n^4$ and to compute the power in each harmonic.
  - Quantify the Gibbs overshoot of $\tfrac{2}{\pi}\mathrm{Si}(\pi) \approx 1.179$ at a unit jump and explain why it does not vanish as $N \to \infty$.
concepts:
  - Half-range sine expansion
  - Half-range cosine expansion
  - Complex exponential Fourier series
  - Bessel's inequality
  - Parseval's identity
  - Gibbs phenomenon
tags:
  - mathematics
  - integral-transforms
  - parseval-identity
  - gibbs-phenomenon
sourceType: authored-courseware
status: in-review
assessmentHints:
  - derivation
  - problem-solving
  - conceptual
  - computational
***

# Half-Range Expansions, Parseval's Identity and the Gibbs Phenomenon

## Overview

Physical problems rarely hand us a periodic function: a clamped string or a rod has data on a finite interval $[0, L]$, which must be extended before Fourier's machinery applies. An odd extension gives a pure sine series and an even extension a pure cosine series, and the boundary conditions decide between them. We then rewrite Fourier series in complex exponential form, the bridge to the Fourier transform of Lesson m1-l3, and prove that partial sums are the best mean-square approximations. Bessel's inequality and Parseval's identity follow: the mean square of a function equals the sum of the squares of its coefficients, energy conservation between the $x$-domain and the harmonic domain. Finally we compute the Gibbs overshoot exactly and see why convergence near a jump is never uniform.

## Learning Path

- **What you should already know**: the Euler–Fourier formulas, parity simplifications and Dirichlet's theorem (Lesson m1-l1); integration by parts; plotting partial sums with numerical arrays (Calculus using Python, Lesson m1-l2).
- **What this lesson adds**: half-range expansions, the complex form $\sum c_n e^{in\pi x/L}$, the least-squares property, Bessel's inequality, Parseval's identity and the quantitative Gibbs phenomenon.
- **What later lessons this will unlock**: the passage from series to the Fourier integral (Lesson m1-l3); sine and cosine series as eigenfunction expansions for the heat and wave equations (Lesson m3-l2); discrete Parseval and spectral leakage in the FFT (Lesson m3-l3).

## Core Explanation

### Half-range expansions

Let $f$ be given only on $0 < x < L$. Any extension to $(-L, 0)$, repeated with period $2L$, gives a Fourier series that agrees with $f$ on $(0, L)$; two extensions are special.

The **odd extension**, $f(-x) = -f(x)$, kills every $a_n$ and gives the **half-range sine series**

$$f(x) \sim \sum_{n=1}^{\infty} b_n \sin\frac{n\pi x}{L}, \qquad b_n = \frac{2}{L}\int_0^L f(x)\sin\frac{n\pi x}{L}\,dx .$$

The **even extension**, $f(-x) = f(x)$, gives the **half-range cosine series**

$$f(x) \sim \frac{a_0}{2} + \sum_{n=1}^{\infty} a_n \cos\frac{n\pi x}{L}, \qquad a_n = \frac{2}{L}\int_0^L f(x)\cos\frac{n\pi x}{L}\,dx .$$

The two series differ at the ends and in convergence rate. Every sine term vanishes at $x = 0$ and $x = L$, so if $f(0) \neq 0$ or $f(L) \neq 0$ the odd extension has jumps there, the sine series converges to $0$ at the ends, and $b_n = O(1/n)$. The even extension of a continuous $f$ is continuous, so its cosine coefficients typically fall as $1/n^2$. Physics decides: a string clamped at both ends ($u = 0$, a **Dirichlet condition**) needs sines; a rod with insulated ends ($u_x = 0$, a **Neumann condition**) needs cosines, whose derivatives vanish at $0$ and $L$. Lesson m3-l2 uses exactly this rule.

### Complex form of a Fourier series

Euler's formula $e^{i\theta} = \cos\theta + i\sin\theta$ turns the pair $\cos, \sin$ into the single family $e^{in\pi x/L}$, $n \in \mathbb{Z}$, which is orthogonal under the Hermitian inner product:

$$\int_{-L}^{L} e^{im\pi x/L}\, e^{-in\pi x/L}\,dx = 2L\,\delta_{mn}.$$

Projecting $f(x) = \sum_{n=-\infty}^{\infty} c_n e^{in\pi x/L}$ onto $e^{in\pi x/L}$ gives

$$c_n = \frac{1}{2L}\int_{-L}^{L} f(x)\, e^{-in\pi x/L}\,dx .$$

Comparing with Lesson m1-l1, $c_0 = a_0/2$, $c_n = \tfrac12(a_n - i b_n)$ and $c_{-n} = \tfrac12(a_n + i b_n)$ for $n \geq 1$. For real $f$, $c_{-n} = \overline{c_n}$, so negative frequencies carry no new information. Note the **sign convention**: the analysis formula carries $e^{-i\ldots}$ and the synthesis carries $e^{+i\ldots}$. The Fourier transform of Lesson m1-l3 and the DFT of Lesson m3-l3 keep the same signs.

### Best approximation and Bessel's inequality

Let $T_N$ be any trigonometric polynomial of degree $N$ with coefficients $\alpha_n, \beta_n$, and let $S_N$ be the $N$-th Fourier partial sum. Expanding the mean-square error and using orthogonality,

$$\int_{-L}^{L} (f - T_N)^2 dx = \int_{-L}^{L} f^2 dx - L\left[\frac{a_0^2}{2} + \sum_{n=1}^{N}(a_n^2 + b_n^2)\right] + L\left[\frac{(\alpha_0 - a_0)^2}{2} + \sum_{n=1}^{N}\big((\alpha_n - a_n)^2 + (\beta_n - b_n)^2\big)\right].$$

The last bracket is non-negative and vanishes only when $T_N = S_N$: **the Fourier partial sum is the best mean-square approximation of its degree**, exactly as orthogonal projection gives the nearest point in a subspace. Setting $T_N = S_N$, the error is non-negative for every $N$, which gives **Bessel's inequality**

$$\frac{a_0^2}{2} + \sum_{n=1}^{\infty}(a_n^2 + b_n^2) \leq \frac{1}{L}\int_{-L}^{L} f^2\,dx .$$

The left side converges, so $a_n, b_n \to 0$: the Riemann–Lebesgue lemma for square-integrable $f$.

### Parseval's identity

The trigonometric system is **complete**: for every square-integrable $f$ the mean-square error tends to zero, and Bessel's inequality becomes **Parseval's identity**

$$\frac{1}{L}\int_{-L}^{L} f(x)^2\,dx = \frac{a_0^2}{2} + \sum_{n=1}^{\infty}(a_n^2 + b_n^2), \qquad \frac{1}{2L}\int_{-L}^{L} |f(x)|^2\,dx = \sum_{n=-\infty}^{\infty} |c_n|^2 .$$

If $f$ is a voltage across a $1\,\Omega$ resistor, the left side of the complex form is the mean power and $|c_n|^2 + |c_{-n}|^2 = \tfrac12(a_n^2 + b_n^2)$ is the power in the $n$-th harmonic. Parseval also evaluates infinite sums in closed form.

### The Gibbs phenomenon

Take the square wave of Lesson m1-l1 (jump of $2$ at $x = 0$) and its partial sum $S_N(x) = \frac{4}{\pi}\sum_{k=1}^{N}\frac{\sin(2k-1)x}{2k-1}$. Differentiating and summing the cosines,

$$S_N'(x) = \frac{4}{\pi}\sum_{k=1}^{N}\cos(2k-1)x = \frac{2}{\pi}\,\frac{\sin 2Nx}{\sin x},$$

so the first maximum to the right of the jump is at $x_N = \pi/(2N)$. There, with $t_k = (2k-1)\pi/(2N)$ and spacing $\Delta t = \pi/N$,

$$S_N(x_N) = \frac{4}{\pi}\sum_{k=1}^{N}\frac{\sin t_k}{2k-1} = \frac{2}{\pi}\sum_{k=1}^{N}\frac{\sin t_k}{t_k}\,\Delta t \;\longrightarrow\; \frac{2}{\pi}\int_0^{\pi}\frac{\sin t}{t}\,dt = \frac{2}{\pi}\,\mathrm{Si}(\pi) \approx 1.179 .$$

The peak overshoots $1$ by $0.179$, which is $8.9$ per cent of the jump of $2$, and this excess **does not shrink** as $N$ grows; the peak merely moves towards the discontinuity, since $x_N \to 0$. This is the **Gibbs phenomenon**: convergence near a jump is pointwise but not uniform, although the mean-square error still tends to zero. Fejér (Cesàro) averaging or Lanczos $\sigma$-factors suppress the overshoot at the cost of a smeared edge, the trade-off of windowing in Lesson m3-l3. If $f$ is continuous and piecewise smooth, $\sum(|a_n| + |b_n|) < \infty$ and convergence is uniform.

The plot below shows $S_N$ for $N = 5, 20, 80$ near the jump; expect the ripples to crowd towards $x = 0$ while the first peak stays near $1.18$.

```python
import numpy as np
import matplotlib.pyplot as plt

x = np.linspace(-0.5, 1.0, 3000)
for N in (5, 20, 80):
    k = np.arange(1, N + 1)
    S = (4 / np.pi) * np.sin(np.outer(x, 2*k - 1)) @ (1 / (2*k - 1))
    plt.plot(x, S, label=f"N = {N}")
plt.axhline(1.179, ls="--", c="k", lw=0.8)
plt.xlabel("x"); plt.ylabel("S_N(x)"); plt.legend(); plt.show()
```

## Key Ideas

- **Half-range expansions**: a function on $[0, L]$ may be extended oddly (sine series, $b_n = \frac2L\int_0^L f\sin\frac{n\pi x}{L}dx$) or evenly (cosine series); boundary conditions choose.
- **End behaviour**: the sine series converges to $0$ at $x = 0, L$; if $f$ does not vanish there its coefficients decay only as $1/n$.
- **Complex form**: $c_n = \frac{1}{2L}\int_{-L}^{L} f e^{-in\pi x/L}dx$, with $c_n = \tfrac12(a_n - ib_n)$ and $c_{-n} = \overline{c_n}$ for real $f$.
- **Least squares**: $S_N$ minimises the mean-square error among all trigonometric polynomials of degree $N$.
- **Parseval's identity**: $\frac1L\int_{-L}^{L} f^2 dx = \frac{a_0^2}{2} + \sum(a_n^2 + b_n^2)$; mean power is the sum of harmonic powers.
- **Gibbs phenomenon**: partial sums overshoot a jump by about $9$ per cent of its size for every $N$; the overshoot narrows but never decreases in height.

## Worked Examples

### Example 1 — Sine and cosine expansions of $f(x) = x$ on $(0, \pi)$

Find both half-range series and compare them at $x = 0$ and $x = \pi$.

**Solution.** *Sine series.* Integrating by parts, $\int_0^\pi x\sin nx\,dx = -\pi\cos n\pi/n$, so $b_n = \frac{2}{\pi}\cdot\frac{\pi(-1)^{n+1}}{n} = \frac{2(-1)^{n+1}}{n}$ and

$$x = 2\left(\sin x - \frac{\sin 2x}{2} + \frac{\sin 3x}{3} - \cdots\right), \qquad 0 < x < \pi,$$

the sawtooth of Lesson m1-l1. *Cosine series.* $a_0 = \frac{2}{\pi}\int_0^\pi x\,dx = \pi$ and $\int_0^\pi x\cos nx\,dx = \frac{(-1)^n - 1}{n^2}$, so $a_n = -\frac{4}{\pi n^2}$ for odd $n$ and $0$ for even $n$:

$$x = \frac{\pi}{2} - \frac{4}{\pi}\left(\cos x + \frac{\cos 3x}{9} + \frac{\cos 5x}{25} + \cdots\right), \qquad 0 \leq x \leq \pi .$$

At $x = \pi$ the sine series gives $0$, the midpoint of the jump from $\pi$ to $-\pi$ in the odd extension; the cosine series gives $\pi$, because the even extension is the continuous triangle wave $|x|$. Setting $x = 0$ in the cosine series gives $0 = \frac{\pi}{2} - \frac{4}{\pi}\sum_{k\geq1}\frac{1}{(2k-1)^2}$, so $\sum_{k=1}^{\infty} \frac{1}{(2k-1)^2} = \frac{\pi^2}{8}$. The cosine coefficients fall as $1/n^2$, the sine ones as $1/n$.

### Example 2 — Parseval for the parabola and the square wave

(a) Use the series $x^2 = \frac{\pi^2}{3} + 4\sum \frac{(-1)^n}{n^2}\cos nx$ to evaluate $\sum 1/n^4$. (b) What fraction of the power of a square wave lies in its fundamental, and in its first three non-zero harmonics?

**Solution.** (a) Here $a_0 = 2\pi^2/3$, $a_n = 4(-1)^n/n^2$, $L = \pi$. The left side of Parseval is $\frac{1}{\pi}\int_{-\pi}^{\pi} x^4 dx = \frac{2\pi^4}{5}$. Therefore

$$\frac{2\pi^4}{5} = \frac{1}{2}\left(\frac{2\pi^2}{3}\right)^2 + 16\sum_{n=1}^{\infty}\frac{1}{n^4} = \frac{2\pi^4}{9} + 16\sum_{n=1}^{\infty}\frac{1}{n^4},$$

so $16\sum n^{-4} = 2\pi^4\left(\frac15 - \frac19\right) = \frac{8\pi^4}{45}$, giving $\sum_{n=1}^{\infty} \frac{1}{n^4} = \frac{\pi^4}{90} \approx 1.0823$.

(b) For the unit square wave the mean power is $\frac{1}{2\pi}\int_{-\pi}^{\pi} 1\,dx = 1$. The $n$-th harmonic has power $\tfrac12 b_n^2 = \frac{8}{\pi^2 n^2}$ for odd $n$. The fundamental carries $8/\pi^2 = 0.811$, i.e. $81.1$ per cent. Harmonics $1, 3, 5$ carry $\frac{8}{\pi^2}\left(1 + \frac19 + \frac{1}{25}\right) = 0.8106 \times 1.1511 = 0.933$, i.e. $93.3$ per cent. Summing all odd $n$ with $\sum (2k-1)^{-2} = \pi^2/8$ (Example 1) gives exactly $1$.

### Example 3 — Complex series of $e^x$ and the sum $\sum 1/(1+n^2)$

Find the complex Fourier series of $f(x) = e^x$ on $(-\pi, \pi)$ and use Parseval to evaluate $\sum_{n=-\infty}^{\infty} \frac{1}{1+n^2}$.

**Solution.** With $L = \pi$,

$$c_n = \frac{1}{2\pi}\int_{-\pi}^{\pi} e^{(1-in)x}dx = \frac{1}{2\pi}\cdot\frac{e^{\pi}e^{-in\pi} - e^{-\pi}e^{in\pi}}{1 - in} = \frac{(-1)^n\sinh\pi}{\pi(1 - in)},$$

using $e^{\pm in\pi} = (-1)^n$. So $e^x = \frac{\sinh\pi}{\pi}\sum_{n} \frac{(-1)^n}{1 - in}e^{inx}$ on $(-\pi, \pi)$; at $x = \pm\pi$ the series returns $\cosh\pi$, the midpoint of $e^{\pi}$ and $e^{-\pi}$. Now $|c_n|^2 = \frac{\sinh^2\pi}{\pi^2(1 + n^2)}$ and the left side of Parseval is $\frac{1}{2\pi}\int_{-\pi}^{\pi}e^{2x}dx = \frac{\sinh 2\pi}{2\pi}$. Hence

$$\sum_{n=-\infty}^{\infty}\frac{1}{1+n^2} = \frac{\pi^2}{\sinh^2\pi}\cdot\frac{\sinh 2\pi}{2\pi} = \frac{\pi\cdot 2\sinh\pi\cosh\pi}{2\sinh^2\pi} = \pi\coth\pi \approx 3.1533 .$$

## Common Misconceptions

- **"A function on $[0, L]$ has a unique Fourier series."** It has infinitely many, one per extension. The sine and cosine series are both correct on $(0, L)$ and differ at the ends and in convergence rate.
- **"The sine series of $f$ converges to $f(0)$ at $x = 0$."** Every sine term vanishes there, so the series gives $0$ whatever $f(0)$ is; the odd extension has a jump at the origin unless $f(0) = 0$.
- **"Negative frequencies in the complex series are unphysical extras."** For real $f$ they are the complex conjugates of the positive ones; the pair $c_n e^{inx} + c_{-n}e^{-inx}$ is one real harmonic.
- **"Parseval's identity requires pointwise convergence."** It holds for every square-integrable $f$, including the square wave whose series fails to converge uniformly; it is a statement about mean-square convergence.
- **"The Gibbs overshoot disappears with enough terms."** For a jump of $2$ its height tends to $\frac{2}{\pi}\mathrm{Si}(\pi) - 1 \approx 0.179$, not to zero; only its width shrinks.

## Connections

- Half-range sine series are the normal modes of a string fixed at both ends (Waves and Optics, Lesson m1-l3); the pluck position decides which harmonics are absent (Lesson m3-l2).
- The least-squares property is orthogonal projection onto a subspace, the inner-product geometry of Linear Algebra (Lesson m2-l2); Bessel and Parseval are the infinite-dimensional Pythagoras theorem.
- Parseval's identity underlies the power spectrum used on oscilloscopes and spectrum analysers in the Communication Electronics Lab (Lesson m1-l4); total power is the sum of the powers read at each harmonic.
- Gibbs ringing appears at sharp edges in band-limited images, MRI reconstructions and the step response of ideal low-pass filters.
- The sum $\sum 1/n^4 = \pi^4/90$ gives the blackbody integral $\int_0^\infty x^3/(e^x - 1)\,dx = \pi^4/15$ behind the Stefan–Boltzmann law (Introduction to Quantum Mechanics, Lesson m1-l1).

## Quick Check

1. Explain why the half-range cosine series of a continuous function on $[0, L]$ usually converges faster than its sine series.
2. Express $c_n$ and $c_{-n}$ in terms of $a_n, b_n$, and show that $c_{-n} = \overline{c_n}$ when $f$ is real.
3. A $2\pi$-periodic real signal has $c_0 = 1$, $c_{\pm 1} = \tfrac12$, $c_{\pm 3} = \pm\tfrac{i}{4}$ and no other terms. Write it in real form and find its mean power.
4. Use Parseval on the sawtooth $x = 2\sum (-1)^{n+1}\sin(nx)/n$ to show $\sum 1/n^2 = \pi^2/6$.
5. A square wave of amplitude $5$ V is synthesised from $200$ harmonics. Estimate the peak voltage near each jump.

## Takeaway

- On a finite interval, first choose an extension: odd gives sines, even gives cosines; boundary conditions decide.
- The complex form $c_n = \frac{1}{2L}\int f e^{-in\pi x/L}dx$ fixes the sign convention used for the Fourier transform and the DFT later in the course.
- Partial sums are best mean-square approximations; completeness turns Bessel's inequality into Parseval's identity.
- Parseval equates mean power with the sum of harmonic powers and evaluates sums such as $\pi^2/8$, $\pi^4/90$ and $\pi\coth\pi$.
- Near a jump the partial sums overshoot by about $9$ per cent of the jump for every $N$: mean-square convergence does not imply uniform convergence.
