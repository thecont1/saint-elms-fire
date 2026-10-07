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
lessonId: integral-transforms-m1-l3
lessonName: The Fourier Transform, the Dirac Delta and the Uncertainty Relation
lessonNumber: 3
moduleNumber: 1
semesterNumber: 5
difficulty: intermediate
estimatedStudyMinutes: 60
releaseOrder: 3
prerequisites:
  - integral-transforms-m1-l2
  - calculus-using-python-m2-l1
learningObjectives:
  - Derive the Fourier integral theorem as the $L \to \infty$ limit of the complex Fourier series and state the transform pair $\hat f(k) = \int f(x)e^{-ikx}dx$, $f(x) = \frac{1}{2\pi}\int \hat f(k)e^{ikx}dk$.
  - Apply the shift, modulation, scaling, derivative and convolution properties to compute transforms of pulses, exponentials, Gaussians and Lorentzians.
  - Use the Dirac delta and its integral representation to transform constants and sinusoids.
  - Prove the uncertainty relation $\Delta x\,\Delta k \geq \tfrac12$ and identify the Gaussian as the minimum-uncertainty function.
concepts:
  - Fourier integral theorem
  - Fourier transform
  - Fourier transform properties
  - Convolution theorem for Fourier transforms
  - Dirac delta function
  - Plancherel theorem
  - Uncertainty relation
tags:
  - mathematics
  - integral-transforms
  - fourier-transform
  - dirac-delta
sourceType: authored-courseware
status: in-review
assessmentHints:
  - derivation
  - problem-solving
  - conceptual
  - short-answer
***

# The Fourier Transform, the Dirac Delta and the Uncertainty Relation

## Overview

A Fourier series analyses a periodic signal into a discrete set of harmonics. A single pulse, a wave packet or a decaying oscillation is not periodic, and its spectrum is continuous. Letting the period tend to infinity turns the series of Lesson m1-l2 into the Fourier integral, and the coefficients $c_n$ into a function $\hat f(k)$, the Fourier transform. This lesson fixes the convention used for the rest of the course, derives the operational properties that make the transform useful (shifts become phases, derivatives become multiplication by $ik$, convolution becomes multiplication), builds a table of standard pairs, and introduces the Dirac delta as the transform of a constant. It closes with the uncertainty relation $\Delta x\,\Delta k \geq \tfrac12$: a function and its transform cannot both be narrow.

## Learning Path

- **What you should already know**: the complex Fourier series and Parseval's identity (Lesson m1-l2); the Dirichlet conditions (Lesson m1-l1); improper integrals and symbolic integration in SymPy (Calculus using Python, Lesson m2-l1).
- **What this lesson adds**: the Fourier integral theorem, the transform pair and its properties, standard transforms, the Dirac delta, Plancherel's theorem and the uncertainty relation.
- **What later lessons this will unlock**: the Laplace transform as a damped Fourier transform (Lesson m2-l1); the Bromwich inversion integral (Lesson m2-l2); frequency response of oscillators and circuits (Lesson m3-l1); the heat kernel and d'Alembert's solution (Lesson m3-l2); the DFT (Lesson m3-l3).

## Core Explanation

### From series to integral

Expand $f$ on $[-L, L]$ in the complex series with wavenumbers $k_n = n\pi/L$, spaced by $\Delta k = \pi/L$:

$$f(x) = \sum_{n} c_n e^{ik_n x}, \qquad c_n = \frac{1}{2L}\int_{-L}^{L} f(y)e^{-ik_n y}dy = \frac{\Delta k}{2\pi}\int_{-L}^{L} f(y)e^{-ik_n y}dy .$$

Substituting, $f(x) = \frac{1}{2\pi}\sum_n \Delta k \left[\int_{-L}^{L} f(y)e^{-ik_n y}dy\right]e^{ik_n x}$. As $L \to \infty$ the sum becomes a Riemann integral over $k$, giving the **Fourier integral theorem**: if $f$ is absolutely integrable, $\int_{-\infty}^{\infty}|f|\,dx < \infty$, and piecewise smooth, then

$$\boxed{\hat f(k) = \int_{-\infty}^{\infty} f(x)\,e^{-ikx}\,dx, \qquad f(x) = \frac{1}{2\pi}\int_{-\infty}^{\infty}\hat f(k)\,e^{ikx}\,dk,}$$

where at a jump the inverse integral returns $\tfrac12[f(x^+) + f(x^-)]$, exactly as in Dirichlet's theorem. **Convention for this course**: the forward transform carries $e^{-ikx}$ and no prefactor; the inverse carries $e^{+ikx}$ and $1/2\pi$. For signals in time we write $F(\omega) = \int f(t)e^{-i\omega t}dt$. This is the convention of Complex Analysis (Lesson m3-l1); other texts split the $2\pi$ symmetrically or use $e^{-2\pi i\nu t}$, so always check before borrowing a table.

For even $f$, $\hat f(k) = 2\int_0^\infty f(x)\cos kx\,dx$ is real and even. For a function on $x > 0$ the **Fourier sine transform** $F_s(k) = \int_0^\infty f(x)\sin kx\,dx$, with inverse $f(x) = \frac{2}{\pi}\int_0^\infty F_s(k)\sin kx\,dk$, comes from the odd extension, just as half-range sine series did.

### Properties

Each entry follows from a substitution or an integration by parts in the defining integral.

| Operation on $f(x)$ | Effect on $\hat f(k)$ |
|---|---|
| Shift $f(x - a)$ | $e^{-ika}\hat f(k)$ |
| Modulation $e^{ik_0x}f(x)$ | $\hat f(k - k_0)$ |
| Scaling $f(ax)$, $a \neq 0$ | $\frac{1}{\lvert a\rvert}\hat f(k/a)$ |
| Derivative $f^{(n)}(x)$ | $(ik)^n\hat f(k)$ |
| Moment $x f(x)$ | $i\,\dfrac{d\hat f}{dk}$ |
| Convolution $(f * g)(x) = \int f(y)g(x - y)dy$ | $\hat f(k)\,\hat g(k)$ |
| Product $f(x)g(x)$ | $\frac{1}{2\pi}(\hat f * \hat g)(k)$ |
| Duality: $\hat f(x)$ as a function of $x$ | $2\pi f(-k)$ |
| Real $f$ | $\hat f(-k) = \overline{\hat f(k)}$ |

The derivative rule needs $f \to 0$ at $\pm\infty$ so that the boundary term vanishes: $\int f'e^{-ikx}dx = [fe^{-ikx}] + ik\int fe^{-ikx}dx$. The convolution rule follows by writing $\int\!\!\int f(y)g(x-y)e^{-ikx}dy\,dx$, substituting $x = y + z$, and factorising into $\hat f(k)\hat g(k)$. These two rules turn linear constant-coefficient differential equations into algebra, the programme of Module 3.

Applying Parseval's argument to the integral gives **Plancherel's theorem**

$$\int_{-\infty}^{\infty}|f(x)|^2dx = \frac{1}{2\pi}\int_{-\infty}^{\infty}|\hat f(k)|^2dk ,$$

so $|\hat f(k)|^2/2\pi$ is the energy per unit wavenumber, the **energy spectral density**.

### Standard transforms

| $f(x)$ | $\hat f(k)$ |
|---|---|
| $1$ for $\lvert x\rvert < a$, $0$ otherwise | $\dfrac{2\sin ka}{k}$ |
| $e^{-a\lvert x\rvert}$, $a > 0$ | $\dfrac{2a}{a^2 + k^2}$ |
| $e^{-at}u(t)$, $a > 0$ | $\dfrac{1}{a + i\omega}$ |
| $\dfrac{1}{a^2 + x^2}$ | $\dfrac{\pi}{a}e^{-a\lvert k\rvert}$ |
| $e^{-x^2/2\sigma^2}$ | $\sigma\sqrt{2\pi}\,e^{-\sigma^2k^2/2}$ |
| $\delta(x - a)$ | $e^{-ika}$ |
| $1$ | $2\pi\delta(k)$ |
| $\cos k_0x$ | $\pi[\delta(k - k_0) + \delta(k + k_0)]$ |

The two-sided exponential follows from $\int_0^\infty e^{-(a+ik)x}dx = \frac{1}{a+ik}$ plus its mirror image, and the Lorentzian follows from it by duality. The **Gaussian** shows the properties at work. Let $g = e^{-x^2/2\sigma^2}$, so $g' = -xg/\sigma^2$. Transforming with the derivative and moment rules, $ik\hat g = -\frac{i}{\sigma^2}\hat g'$, i.e. $\hat g' = -\sigma^2k\hat g$, whence $\hat g(k) = \hat g(0)e^{-\sigma^2k^2/2}$ with $\hat g(0) = \int e^{-x^2/2\sigma^2}dx = \sigma\sqrt{2\pi}$. A Gaussian transforms into a Gaussian, with widths $\sigma$ and $1/\sigma$.

### The Dirac delta

Transforming a constant requires a new object. The **Dirac delta** $\delta(x)$ is defined by its action under an integral: for every continuous $\varphi$,

$$\int_{-\infty}^{\infty}\delta(x - a)\varphi(x)\,dx = \varphi(a).$$

It is the limit of ever narrower unit-area pulses, such as rectangles of height $1/\varepsilon$ and width $\varepsilon$ or Gaussians $e^{-x^2/2\varepsilon^2}/(\varepsilon\sqrt{2\pi})$ as $\varepsilon \to 0$, and is properly a *distribution*, not a function. Its properties are $\delta(ax) = \delta(x)/\lvert a\rvert$, $x\delta(x) = 0$, $\int\delta'(x)\varphi\,dx = -\varphi'(0)$ and $u'(x) = \delta(x)$, where $u$ is the Heaviside step. The sifting property gives $\hat\delta = 1$; inverting, $\delta(x) = \frac{1}{2\pi}\int e^{ikx}dk$, which is the **orthogonality of plane waves**, $\int e^{i(k - k')x}dx = 2\pi\delta(k - k')$, the continuous analogue of $2L\delta_{mn}$. Duality then gives $\hat 1 = 2\pi\delta(k)$ and, by modulation, the line spectrum of $\cos k_0x$: a pure tone has all its energy at $\pm k_0$.

### The uncertainty relation

For a square-integrable $f$ centred at $x = 0$ with transform centred at $k = 0$, define the r.m.s. widths

$$(\Delta x)^2 = \frac{\int x^2|f|^2dx}{\int|f|^2dx}, \qquad (\Delta k)^2 = \frac{\int k^2|\hat f|^2dk}{\int|\hat f|^2dk}.$$

Take $f$ real for brevity. Integrating by parts, $\int xff'\,dx = \tfrac12\int x\,(f^2)'\,dx = -\tfrac12\int f^2dx$. The Cauchy–Schwarz inequality gives

$$\frac14\left(\int f^2dx\right)^2 = \left(\int xf\,f'\,dx\right)^2 \leq \int x^2f^2dx\int f'^2dx .$$

By Plancherel and the derivative rule, $\int f'^2dx = \frac{1}{2\pi}\int k^2|\hat f|^2dk$ and $\int f^2dx = \frac{1}{2\pi}\int|\hat f|^2dk$, so $\int f'^2dx/\int f^2dx = (\Delta k)^2$. Dividing by $(\int f^2dx)^2$,

$$\Delta x\,\Delta k \geq \frac12 .$$

Equality in Cauchy–Schwarz requires $f' \propto xf$, i.e. a **Gaussian**, the minimum-uncertainty function. With de Broglie's $p = \hbar k$ this is Heisenberg's $\Delta x\,\Delta p \geq \hbar/2$; in time and frequency it is the bandwidth theorem $\Delta t\,\Delta\omega \geq \tfrac12$: a short pulse needs a broad spectrum.

## Key Ideas

- **Transform pair**: $\hat f(k) = \int f e^{-ikx}dx$, $f = \frac{1}{2\pi}\int\hat f e^{ikx}dk$; the inverse returns the midpoint at a jump.
- **Operational rules**: a shift multiplies by $e^{-ika}$, differentiation multiplies by $ik$, scaling by $a$ stretches $\hat f$ by $1/a$.
- **Convolution theorem**: $\widehat{f * g} = \hat f\hat g$; filtering is multiplication in the frequency domain.
- **Plancherel**: $\int|f|^2dx = \frac{1}{2\pi}\int|\hat f|^2dk$.
- **Dirac delta**: defined by sifting; $\hat\delta = 1$, $\hat 1 = 2\pi\delta(k)$, and $\int e^{i(k-k')x}dx = 2\pi\delta(k - k')$.
- **Uncertainty relation**: $\Delta x\,\Delta k \geq \tfrac12$, with equality only for Gaussians.

## Worked Examples

### Example 1 — The rectangular pulse and single-slit diffraction

Find the transform of $f(x) = 1$ for $\lvert x\rvert < a$ (zero elsewhere), locate its zeros, and deduce the transform of a pulse on $0 < x < 2a$.

**Solution.** Directly,

$$\hat f(k) = \int_{-a}^{a}e^{-ikx}dx = \frac{e^{ika} - e^{-ika}}{ik} = \frac{2\sin ka}{k} = 2a\,\frac{\sin ka}{ka}.$$

Its peak value is $\hat f(0) = 2a$, the area of the pulse, and its zeros are at $k = n\pi/a$, $n = \pm1, \pm2, \ldots$, so the central lobe has half-width $\pi/a$: halving the pulse doubles the spectral width. The pulse on $(0, 2a)$ is $f(x - a)$, so by the shift rule its transform is $e^{-ika}\,2\sin(ka)/k$, with the same magnitude. In Fraunhofer diffraction by a slit of width $b = 2a$, the far-field amplitude is the transform of the aperture with $k = (2\pi/\lambda)\sin\theta$; the first zero, $ka = \pi$, gives $b\sin\theta = \lambda$, the single-slit minimum of Waves and Optics (Lesson m3-l2).

### Example 2 — A decaying oscillation and natural linewidth

An excited atom radiates $f(t) = e^{-\gamma t}\cos(\omega_0 t)\,u(t)$ with $\gamma \ll \omega_0$. Find $F(\omega)$, the width of $|F|^2$, and the linewidth for an energy lifetime of $10$ ns.

**Solution.** Write $\cos\omega_0t = \tfrac12(e^{i\omega_0t} + e^{-i\omega_0t})$ and use $e^{-\gamma t}u(t) \leftrightarrow 1/(\gamma + i\omega)$ with the modulation rule:

$$F(\omega) = \frac12\left[\frac{1}{\gamma + i(\omega - \omega_0)} + \frac{1}{\gamma + i(\omega + \omega_0)}\right].$$

Near $\omega = \omega_0$ the second term is negligible, so

$$|F(\omega)|^2 \approx \frac{1}{4}\,\frac{1}{\gamma^2 + (\omega - \omega_0)^2},$$

a **Lorentzian** that falls to half its peak at $\omega - \omega_0 = \pm\gamma$: the full width at half maximum is $\Delta\omega = 2\gamma$. The energy $\propto f^2$ decays as $e^{-2\gamma t}$, so the energy lifetime is $\tau = 1/(2\gamma)$ and $\Delta\omega\,\tau = 1$. For $\tau = 10$ ns, $\Delta\omega = 1.0 \times 10^8\ \text{s}^{-1}$ and $\Delta\nu = \Delta\omega/2\pi = 15.9$ MHz, the natural linewidth.

### Example 3 — Minimum uncertainty for a Gaussian wave packet

Verify $\Delta x\,\Delta k = \tfrac12$ for $f = e^{-x^2/2\sigma^2}$, then find the minimum velocity spread of an electron localised to $\Delta x = 0.10$ nm.

**Solution.** $|f|^2 = e^{-x^2/\sigma^2}$ is a normal distribution of variance $\sigma^2/2$, so $\Delta x = \sigma/\sqrt2$. From the table, $|\hat f|^2 \propto e^{-\sigma^2k^2}$, of variance $1/(2\sigma^2)$, so $\Delta k = 1/(\sigma\sqrt2)$ and $\Delta x\,\Delta k = \tfrac12$ exactly. For the electron, $\Delta p \geq \hbar/(2\Delta x) = 1.055 \times 10^{-34}/(2.0 \times 10^{-10}) = 5.27 \times 10^{-25}$ kg m s$^{-1}$, and $\Delta v = \Delta p/m_e = 5.27 \times 10^{-25}/9.11 \times 10^{-31} = 5.8 \times 10^5$ m s$^{-1}$, about $0.2$ per cent of the speed of light. Atomic confinement forces large electron speeds.

## Common Misconceptions

- **"There is one Fourier transform."** The placement of $2\pi$ and the sign of the exponent vary between texts. This course uses $\hat f = \int fe^{-ikx}dx$ and $\frac{1}{2\pi}$ on the inverse; mixing conventions produces stray factors of $2\pi$ and conjugated spectra.
- **"$\delta(x)$ is a function that is infinite at $0$ and zero elsewhere."** It is a distribution, defined only through $\int\delta\varphi\,dx = \varphi(0)$; manipulations must be justified under an integral sign.
- **"Every function has a Fourier transform."** The integral converges absolutely only for integrable $f$. Constants, sinusoids and the step need distributions, and $e^{t}$ has no Fourier transform at all, which motivates the Laplace transform of Lesson m2-l1.
- **"The uncertainty principle is a statement about measurement disturbance."** As derived here it is a theorem about any function and its transform; quantum mechanics inherits it because momentum states are plane waves.
- **"The convolution theorem says $\widehat{fg} = \hat f\hat g$."** The transform of a product is $\frac{1}{2\pi}\hat f * \hat g$; it is the convolution whose transform is the product.

## Connections

- Fraunhofer diffraction patterns are Fourier transforms of apertures (Waves and Optics, Lesson m3-l2); a grating's sharp orders are the delta-function spectrum of a periodic aperture.
- In Introduction to Quantum Mechanics (Lesson m1-l3) the momentum-space wavefunction is the transform of $\psi(x)$, and $\Delta x\,\Delta p \geq \hbar/2$ is the inequality proved here.
- The Lorentzian of Example 2 is the natural line profile of spectral lines in Astrophysics III (Lesson m1-l2); convolved with the Gaussian Doppler profile it gives the Voigt profile.
- Spectral differentiation in Numerical Methods (Lesson m2-l1) uses the rule $f' \leftrightarrow ik\hat f$ directly.
- The Fourier integral of a rational function is evaluated by Jordan's lemma and residues in Complex Analysis (Lesson m3-l1), which reproduces the Lorentzian pair in the table.

## Quick Check

1. Use the shift and scaling rules to find the transform of $e^{-(x-3)^2/8}$.
2. Show that $\delta(2x - 4) = \tfrac12\delta(x - 2)$ by testing both sides against $\varphi(x)$.
3. Compute $\int_{-\infty}^{\infty}\frac{\sin^2 ka}{k^2}\,dk$ using Plancherel and the rectangular pulse.
4. A radar pulse lasts $1\ \mu$s. Estimate the minimum angular-frequency bandwidth it occupies.
5. Find the transform of $f(x) = xe^{-x^2/2}$ using the moment rule.

## Takeaway

- Letting the period tend to infinity turns a Fourier series into the transform pair $\hat f(k) = \int fe^{-ikx}dx$, $f = \frac{1}{2\pi}\int\hat fe^{ikx}dk$, the convention of the whole course.
- Shifts become phases, derivatives become factors of $ik$ and convolutions become products; these rules make transforms a solution method.
- Pulses, exponentials, Gaussians and Lorentzians are the core table; duality and modulation generate the rest.
- The Dirac delta is the transform of a constant and expresses the orthogonality of plane waves.
- A function and its transform cannot both be narrow: $\Delta x\,\Delta k \geq \tfrac12$, with the Gaussian as the extremal case.
