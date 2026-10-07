***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-5
semesterName: Semester 5
subjectId: physics
subjectName: Physics
courseId: astronomy-and-astrophysics
courseName: Astronomy and Astrophysics (Physics Option A)
moduleId: astronomy-and-astrophysics-module-3
moduleName: Galactic Structure and Observational Methods
lessonId: astronomy-and-astrophysics-m3-l3
lessonName: Data Analysis in Python for Blackbody Fits, Periodograms and Error Propagation
lessonNumber: 9
moduleNumber: 3
semesterNumber: 5
difficulty: advanced
estimatedStudyMinutes: 60
releaseOrder: 9
prerequisites:
  - astronomy-and-astrophysics-m3-l2
  - numerical-methods-m1-l1
  - calculus-using-python-m2-l2
learningObjectives:
  - Fit a blackbody to multi-band AB photometry by minimising $\chi^2$, solving analytically for the linear scale and profiling over temperature.
  - Implement the Lomb–Scargle periodogram in numpy and interpret peak width, aliases and false-alarm probability for unevenly sampled light curves.
  - Propagate uncertainties analytically through $\sigma_f^2 = \sum_i(\partial f/\partial x_i)^2\sigma_i^2$ and numerically by Monte Carlo sampling.
concepts:
  - Chi-squared fitting
  - Blackbody fit to photometry
  - Profile likelihood confidence interval
  - Lomb–Scargle periodogram
  - Aliasing in unevenly sampled data
  - Error propagation
  - Monte Carlo uncertainty propagation
tags:
  - physics
  - astronomy-and-astrophysics
  - data-analysis
  - python
sourceType: authored-courseware
status: in-review
assessmentHints:
  - computational
  - problem-solving
  - derivation
  - conceptual
***

# Data Analysis in Python for Blackbody Fits, Periodograms and Error Propagation

## Overview

The course closes by turning measurements into physical parameters with honest uncertainties, using only numpy so that every step is visible. Three tasks recur throughout observational astronomy. First, fitting a model to photometry: a star's AB magnitudes in several bands, converted to flux densities, are fitted with a Planck function scaled by the angular radius squared, which yields both temperature and angular size. Because the scale enters linearly, it can be solved for analytically at each trial temperature, leaving a one-dimensional search whose $\Delta\chi^2 = 1$ interval gives the uncertainty. Second, period finding: variable-star light curves are unevenly sampled, so the fast Fourier transform does not apply, and the Lomb–Scargle periodogram, a least-squares sinusoid fit at each trial frequency, replaces it. Third, error propagation: linearised formulas suffice for small errors, and Monte Carlo sampling handles non-linear or asymmetric cases. Library packages such as astropy implement all three; writing them once teaches what those packages do.

## Learning Path

- **What you should already know**: AB magnitudes, colours and the CCD signal-to-noise equation (Lesson m3-l2); the Planck function (Lesson m1-l1); extinction corrections (Lesson m2-l3); bisection and Newton–Raphson (numerical-methods-m1-l1); root finding in Python (calculus-using-python-m2-l2).
- **What this lesson adds**: weighted least squares with a linear scale parameter; profile $\chi^2$ intervals; the Lomb–Scargle periodogram and its frequency grid; aliasing and false alarms; linear and Monte Carlo error propagation.
- **What later lessons this will unlock**: the mini research project and report of the astronomy-and-astrophysics-lab; the light-curve and spectral analysis of later work in astrophysics and data science.

## Core Explanation

### Weighted least squares and $\chi^2$

Given data $y_i$ with independent Gaussian uncertainties $\sigma_i$ and a model $M(x_i;\mathbf{p})$, the best parameters minimise

$$\chi^2(\mathbf{p}) = \sum_i\frac{\left[y_i - M(x_i;\mathbf{p})\right]^2}{\sigma_i^2}.$$

For a good model, $\chi^2_{\min}$ is close to the number of degrees of freedom $N - n_p$. If $\chi^2_{\min}$ is much larger, the model is wrong or the errors are underestimated. When one parameter is of interest, the others can be minimised over at each of its values, giving the **profile** $\chi^2$; the $1\sigma$ interval is the range where it lies within $\Delta\chi^2 = 1$ of the minimum.

### Fitting a blackbody to photometry

An unresolved star of radius $R$ at distance $d$ has flux density $f_\nu = \pi(R/d)^2 B_\nu(T) = \pi\theta^2 B_\nu(T)$, where $\theta$ is the angular radius (Lesson m1-l1). AB magnitudes convert to flux densities as $f_\nu = 3631\,{\rm Jy}\times10^{-0.4m}$, with uncertainties $\sigma_f = 0.4\ln 10\,f\,\sigma_m = 0.921\,f\sigma_m$; the magnitudes must first be dereddened, $m_0 = m - A_\lambda$. At fixed $T$ the model is $s\,g_i$ with $g_i = \pi B_\nu(\nu_i, T)$ and $s = \theta^2$, which is linear in $s$. Setting $\partial\chi^2/\partial s = 0$ gives

$$s(T) = \frac{\sum_i w_i f_i g_i}{\sum_i w_i g_i^2}, \qquad w_i = \frac{1}{\sigma_i^2},$$

so only $T$ needs a numerical search. The code below builds synthetic SDSS photometry of a 6,000 K star with a solar radius at 10 pc, adds 0.02 mag noise, and recovers the parameters. Expect a best-fitting temperature within a few tens of kelvin of 6,000 K, a $1\sigma$ interval about $\pm35$ K wide, and $\chi^2_{\min}$ of order 3 for $5 - 2 = 3$ degrees of freedom.

```python
import numpy as np

h, c, k = 6.626e-34, 2.998e8, 1.381e-23
lam = np.array([355, 469, 617, 748, 893]) * 1e-9      # SDSS u g r i z (m)
nu = c / lam

def planck_nu(nu, T):
    return 2*h*nu**3 / c**2 / np.expm1(h*nu / (k*T))

rng = np.random.default_rng(42)
theta_true = 6.957e8 / 3.086e17                        # R_sun at 10 pc (rad)
sig_m = np.full(5, 0.02)
m_ab = -2.5*np.log10(np.pi*theta_true**2*planck_nu(nu, 6000.0) / 3631e-26)
m_ab = m_ab + rng.normal(0.0, sig_m)                   # simulated observations

f = 3631e-26 * 10**(-0.4*m_ab)                         # W m^-2 Hz^-1
w = 1 / (0.4*np.log(10)*f*sig_m)**2

T_grid = np.arange(3000.0, 15000.0, 5.0)
chi2, scale = np.empty_like(T_grid), np.empty_like(T_grid)
for i, T in enumerate(T_grid):
    g = np.pi * planck_nu(nu, T)                       # model for theta = 1
    scale[i] = np.sum(w*f*g) / np.sum(w*g*g)           # analytic best theta^2
    chi2[i] = np.sum(w*(f - scale[i]*g)**2)

j = np.argmin(chi2)
ok = T_grid[chi2 <= chi2[j] + 1.0]                     # profile 1-sigma interval
print(f"T = {T_grid[j]:.0f} K, interval {ok.min():.0f}-{ok.max():.0f} K")
print(f"theta = {np.sqrt(scale[j]):.3e} rad, chi2_min = {chi2[j]:.2f}")
```

With a parallax distance, $\theta$ gives the radius $R = \theta d$. Real stars depart from a blackbody in the $u$ band, where the Balmer jump and line blanketing (Lesson m1-l2) suppress the flux, so such fits are often restricted to redder bands or replaced by model-atmosphere grids.

### The Lomb–Scargle periodogram

Ground-based light curves have gaps from daylight, weather and the Moon, so the discrete Fourier transform does not apply. Instead, at each trial angular frequency $\omega = 2\pi f$ fit $y(t) = a\cos\omega t + b\sin\omega t$ by least squares to the mean-subtracted data. Shifting the time origin by $\tau$, defined by

$$\tan 2\omega\tau = \frac{\sum_i\sin 2\omega t_i}{\sum_i\cos 2\omega t_i},$$

makes the sine and cosine terms orthogonal over the sampling, and the reduction in $\chi^2$ becomes the **Lomb–Scargle power**

$$P(\omega) = \frac{1}{2\sigma^2}\left\{\frac{\left[\sum_i y_i\cos\omega(t_i - \tau)\right]^2}{\sum_i\cos^2\omega(t_i - \tau)} + \frac{\left[\sum_i y_i\sin\omega(t_i - \tau)\right]^2}{\sum_i\sin^2\omega(t_i - \tau)}\right\},$$

where $\sigma^2$ is the data variance. The frequency grid should start near $1/T$ for a baseline $T$, step by $1/(n_0T)$ with oversampling $n_0 \approx 5$–$10$ (peaks have width $\sim1/T$), and extend to the highest frequency of interest. Nightly sampling creates **aliases** at $f \pm k$ cycles per day, which can rival the true peak. For pure Gaussian noise, the power at one frequency is exponentially distributed, ${\rm Prob}(P > z) = e^{-z}$, so for $M \approx (f_{\max} - f_{\min})T$ independent frequencies the **false-alarm probability** is ${\rm FAP} \approx 1 - (1 - e^{-z})^M$. The frequency of a sinusoid of amplitude $A$ is determined to $\sigma_f = \sqrt{6/N}\,\sigma_{\rm noise}/(\pi TA)$ for $N$ points.

The function below implements the formula directly, and the test simulates a 0.40 d pulsator observed 120 times on 40 nights, always in the first 0.3 d of each night. Expect the highest peak at 2.5 cycles per day (period 0.40 d) with alias peaks at 1.5 and 3.5 cycles per day.

```python
import numpy as np

def lomb_scargle(t, y, freqs):
    y = y - y.mean()
    var = y.var()
    power = np.empty_like(freqs)
    for i, f in enumerate(freqs):
        w = 2*np.pi*f
        tau = np.arctan2(np.sum(np.sin(2*w*t)), np.sum(np.cos(2*w*t))) / (2*w)
        c, s = np.cos(w*(t - tau)), np.sin(w*(t - tau))
        power[i] = ((y @ c)**2/(c @ c) + (y @ s)**2/(s @ s)) / (2*var)
    return power

rng = np.random.default_rng(1)
t = np.sort(rng.choice(40, size=120) + rng.uniform(0.0, 0.3, 120))   # days
y = 0.30*np.sin(2*np.pi*t/0.40) + rng.normal(0.0, 0.05, t.size)      # mag
T = t.max() - t.min()
freqs = np.arange(1/T, 5.0, 1/(10*T))                                # cycles/day
P = lomb_scargle(t, y, freqs)
print("best period:", 1/freqs[np.argmax(P)], "d")
```

### Error propagation

For a derived quantity $f(x_1,\dots,x_n)$ with small, independent errors, a first-order Taylor expansion gives

$$\sigma_f^2 = \sum_i\left(\frac{\partial f}{\partial x_i}\right)^2\sigma_i^2,$$

and with a covariance matrix $\mathbf{C}$ this generalises to $\sigma_f^2 = \mathbf{J}\mathbf{C}\mathbf{J}^{\rm T}$, where $\mathbf{J}$ is the row of partial derivatives. For power laws $f = \prod x_i^{a_i}$, fractional errors add in quadrature weighted by the exponents: $(\sigma_f/f)^2 = \sum a_i^2(\sigma_i/x_i)^2$. Useful special cases are $\sigma_m = 1.0857\,\sigma_F/F$ and, from $d = 10^{(\mu+5)/5}$ pc, $\sigma_d/d = (\ln 10/5)\sigma_\mu = 0.461\,\sigma_\mu$. Fitted parameters are often correlated — in the blackbody fit a hotter temperature can be traded against a smaller $\theta$ — and the covariance matrix is $\mathbf{C} = 2\mathbf{H}^{-1}$, with $\mathbf{H}$ the Hessian of $\chi^2$ at the minimum.

When errors are large or $f$ is strongly non-linear, **Monte Carlo propagation** is more reliable: draw many samples of the inputs from their distributions, compute $f$ for each, and quote the median and 16th–84th percentiles.

```python
import numpy as np
rng = np.random.default_rng(0)
R = rng.normal(1.20, 0.05, 100_000)        # radius (R_sun)
T = rng.normal(6000.0, 100.0, 100_000)     # effective temperature (K)
L = R**2 * (T/5772.0)**4                   # luminosity (L_sun)
print(np.percentile(L, [16, 50, 84]), L.std())
```

## Key Ideas

- **$\chi^2$ fitting**: minimise weighted squared residuals; $\chi^2_{\min} \approx N - n_p$ for a good model.
- **Linear parameters**: an overall scale such as $\theta^2$ has an analytic best value at each trial of the non-linear parameters.
- **Profile intervals**: $\Delta\chi^2 = 1$ about the minimum gives the $1\sigma$ range for one parameter.
- **Lomb–Scargle**: least-squares sinusoid power for uneven sampling, with oversampled frequency grids.
- **Aliases and false alarms**: nightly sampling produces peaks at $f \pm k$ d$^{-1}$; ${\rm FAP} \approx 1 - (1 - e^{-z})^M$.
- **Error propagation**: $\sigma_f^2 = \sum(\partial f/\partial x_i)^2\sigma_i^2$, or $\mathbf{J}\mathbf{C}\mathbf{J}^{\rm T}$ with correlations.
- **Monte Carlo**: sample inputs and use percentiles when errors are large or functions non-linear.

## Worked Examples

### Example 1 — Colour temperature by bisection

A star has dereddened $g - r = 0.454 \pm 0.030$ (AB). Treating it as a blackbody with $\lambda_g = 469$ nm and $\lambda_r = 617$ nm, find its temperature and uncertainty.

**Solution.** For AB magnitudes $g - r = -2.5\log_{10}(f_{\nu,g}/f_{\nu,r})$, so

$$g - r = -2.5\log_{10}\left[\left(\frac{\nu_g}{\nu_r}\right)^3\frac{e^{h\nu_r/kT} - 1}{e^{h\nu_g/kT} - 1}\right], \qquad \left(\frac{\nu_g}{\nu_r}\right)^3 = \left(\frac{617}{469}\right)^3 = 2.277.$$

At 5,500 K the colour is 0.571 and at 6,500 K it is 0.357, so the root is bracketed. At the midpoint, 6,000 K, $h\nu_g/kT = 5.113$ and $h\nu_r/kT = 3.886$, giving $e^{x} - 1 = 165.2$ and $47.74$, so $g - r = -2.5\log_{10}(2.277\times47.74/165.2) = -2.5\log_{10}(0.658) = 0.454$. The root is $T = 6{,}000$ K. Repeating for $0.424$ and $0.484$ gives 6,146 K and 5,863 K, so $T = 6000^{+146}_{-137}$ K: the interval is asymmetric because the colour is a non-linear function of $T$.

### Example 2 — Resolution, aliases and significance of a period

For the simulated light curve above ($N = 120$, $T = 40$ d, $A = 0.30$ mag, $\sigma_{\rm noise} = 0.05$ mag, $f = 2.5$ d$^{-1}$), find the peak width, the alias periods, the period uncertainty, and the false-alarm probability of a peak of power $z = 15$ searched up to 5 d$^{-1}$.

**Solution.** The peak width is about $1/T = 0.025$ d$^{-1}$, and the grid step $1/(10T) = 0.0025$ d$^{-1}$ samples it well. Aliases lie at $2.5 \pm 1 = 1.5$ and $3.5$ d$^{-1}$, periods of 0.667 d and 0.286 d. The frequency uncertainty is

$$\sigma_f = \sqrt{\frac{6}{120}}\,\frac{0.05}{\pi\times40\times0.30} = 0.2236\times\frac{0.05}{37.70} = 2.97\times10^{-4}\ {\rm d^{-1}},$$

so $\sigma_P = \sigma_f/f^2 = 4.7\times10^{-5}$ d $= 4.1$ s. With $M \approx 5\times40 = 200$ independent frequencies, ${\rm FAP} \approx 200\,e^{-15} = 6.1\times10^{-5}$: highly significant.

### Example 3 — Luminosity and distance uncertainties

(a) A star has $R = 1.20 \pm 0.05\,R_\odot$ and $T = 6000 \pm 100$ K. Find $L$ and $\sigma_L$. (b) Another has $m_V = 12.30 \pm 0.02$, $M_V = 4.80 \pm 0.10$ and $A_V = 0.62 \pm 0.06$. Find its distance and uncertainty.

**Solution.** (a) $L = 1.20^2\times(6000/5772)^4 = 1.44\times1.168 = 1.68\,L_\odot$. With exponents 2 and 4,

$$\frac{\sigma_L}{L} = \sqrt{(2\times0.0417)^2 + (4\times0.0167)^2} = \sqrt{0.00694 + 0.00444} = 0.107,$$

so $L = 1.68 \pm 0.18\,L_\odot$; the Monte Carlo code above reproduces this. (b) $\mu_0 = 12.30 - 4.80 - 0.62 = 6.88$, with $\sigma_\mu = \sqrt{0.02^2 + 0.10^2 + 0.06^2} = 0.118$. Then $d = 10^{(6.88+5)/5} = 238$ pc and $\sigma_d = 0.461\times0.118\times238 = 13$ pc.

## Common Misconceptions

- **"A lower $\chi^2$ always means a better model."** Adding parameters always lowers $\chi^2$; compare $\chi^2_{\min}$ with the degrees of freedom and penalise complexity.
- **"The highest periodogram peak is the true period."** Aliases from regular sampling can be comparable; check the spectral window and phase-fold candidates.
- **"Errors on derived quantities are always symmetric."** Non-linear functions turn symmetric input errors into asymmetric output intervals, as in Example 1.
- **"Uncertainties of fitted parameters can be propagated independently."** Correlated parameters require the full covariance matrix.

## Connections

- Bisection and Newton–Raphson from numerical-methods-m1-l1 solve the colour-temperature equation; non-linear least squares extends to mathematics-lab-using-python-iii-m1-l4.
- The periodogram is a least-squares generalisation of the discrete Fourier transform in mathematics-lab-using-python-iii-m1-l3; aliasing is the sampling effect behind beats in waves-and-optics-m1-l3.
- Covariance matrices and the Hessian draw on linear-algebra-m2-l3; error propagation formalises the methods of mechanics-lab-m1-l2.
- These analyses underpin the photometric and catalogue projects in the astronomy-and-astrophysics-lab and the period–luminosity distances of astrophysics-iv-m3-l9.

## Quick Check

1. Derive $s(T) = \sum w_i f_i g_i/\sum w_i g_i^2$ from $\partial\chi^2/\partial s = 0$.
2. A blackbody fit to six bands with two free parameters gives $\chi^2_{\min} = 25$. What does this suggest?
3. Why does the Lomb–Scargle frequency grid need oversampling, and what sets its spacing?
4. A star is observed nightly and shows peaks at 0.75 and 1.75 d$^{-1}$. What are the two candidate periods, and how could you decide between them?
5. Find the fractional error in $L = 4\pi R^2\sigma T^4$ if $R$ is known to 3% and $T$ to 1.5%.

## Takeaway

- $\chi^2$ minimisation with analytic linear scales and profile intervals turns multi-band photometry into temperatures and angular radii.
- The Lomb–Scargle periodogram finds periods in unevenly sampled light curves; aliases and false alarms must be checked.
- Linear error propagation handles small, independent errors; covariance matrices handle correlated ones.
- Monte Carlo sampling gives reliable, possibly asymmetric, uncertainties for non-linear problems.
