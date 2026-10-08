***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-6
semesterName: Semester 6
subjectId: physics
subjectName: Physics
courseId: renewable-energy-and-applications
courseName: Renewable Energy and Applications (Physics Option A)
moduleId: renewable-energy-and-applications-module-2
moduleName: Wind Power and Other Renewable Sources
lessonId: renewable-energy-and-applications-m2-l2
lessonName: Power Curves, Tip-Speed Ratio and Weibull Annual Yield
lessonNumber: 5
moduleNumber: 2
semesterNumber: 6
difficulty: advanced
estimatedStudyMinutes: 55
releaseOrder: 5
prerequisites:
  - renewable-energy-and-applications-m2-l1
  - thermal-physics-and-statistical-mechanics-m3-l1
  - integral-calculus-m3-l3
learningObjectives:
  - Define the tip-speed ratio, relate it to the power coefficient and derive the cubic law for rotor power under variable-speed control.
  - Describe the regions of a turbine power curve and the role of pitch control.
  - Use the Weibull distribution to obtain the mean speed, the mean power density and the energy pattern factor of a site.
  - Compute the annual energy yield and capacity factor by the method of bins.
concepts:
  - Tip-speed ratio
  - Power coefficient curve
  - Power curve
  - Cut-in, rated and cut-out speed
  - Weibull distribution
  - Energy pattern factor
  - Annual energy yield
tags:
  - physics
  - renewable-energy-and-applications
  - wind-energy
  - weibull-statistics
sourceType: authored-courseware
status: in-review
assessmentHints:
  - derivation
  - problem-solving
  - computational
  - short-answer
***

# Power Curves, Tip-Speed Ratio and Weibull Annual Yield

## Overview

Lesson m2-l1 gave the power a rotor can extract at one wind speed. A turbine, however, spends its life in a distribution of speeds, and its owner is paid for the energy summed over all of them. This lesson links the two. We first describe how the rotor's power coefficient depends on the tip-speed ratio, why variable-speed turbines hold that ratio near its optimum, and how the resulting power curve divides into operating regions. We then describe the wind statistically with the two-parameter Weibull distribution, derive its mean speed and mean power density, and combine the distribution with the power curve to obtain annual energy yield and capacity factor, the number that Lesson m1-l1 introduced and that decides the levelised cost of Lesson m3-l2.

## Learning Path

- **What you should already know**: the power density $\tfrac12\rho v^3$ and the Betz limit (Lesson m2-l1); probability distributions and expectation values (Thermal Physics Lesson m3-l1); improper integrals and the gamma function (Integral Calculus Lesson m3-l3).
- **What this lesson adds**: the $C_p(\lambda)$ curve, variable-speed control, cut-in/rated/cut-out regions, the Weibull distribution, the energy pattern factor and the annual-yield calculation.
- **What later lessons this will unlock**: the comparison of wind with hydro, tidal and thermal sources (Lesson m2-l3), variability and grid integration (Lesson m3-l2) and the capacity-factor inputs of the lifecycle analysis (Lesson m3-l3).

## Core Explanation

### Tip-speed ratio and the power coefficient

For a rotor of radius $R$ turning at angular speed $\omega$ in wind speed $v$, the **tip-speed ratio** is

$$\lambda = \frac{\omega R}{v}.$$

The blade sees an angle of attack set by the ratio of its own speed to the wind speed, so the power coefficient $C_p$ of Lesson m2-l1 is a function of $\lambda$ (and of the blade pitch $\beta$). At small $\lambda$ the blades are stalled and the rotor lets wind pass between them; at large $\lambda$ the blades act as a solid disc and the flow is deflected around it. Between the two lies a maximum. A widely used parametric fit for a three-bladed rotor is

$$C_p(\lambda,\beta) = 0.5176\left(\frac{116}{\lambda_i} - 0.4\beta - 5\right)e^{-21/\lambda_i} + 0.0068\,\lambda, \qquad \frac1{\lambda_i} = \frac{1}{\lambda+0.08\beta} - \frac{0.035}{\beta^3+1}.$$

```python
import numpy as np, matplotlib.pyplot as plt
lam = np.linspace(2, 14, 200); beta = 0.0
li = 1/(1/(lam + 0.08*beta) - 0.035/(beta**3 + 1))
Cp = 0.5176*(116/li - 0.4*beta - 5)*np.exp(-21/li) + 0.0068*lam
plt.plot(lam, Cp); plt.axhline(16/27, ls="--", c="grey")
plt.xlabel(r"tip-speed ratio $\lambda$"); plt.ylabel(r"$C_p$"); plt.show()
```

The curve rises from near zero at $\lambda = 2$ to a peak $C_p = 0.48$ at $\lambda_{opt} = 8.1$ and falls again, staying below the dashed Betz line at $16/27 = 0.593$. A three-bladed machine runs at $\lambda_{opt} = 7$–$9$; its blade tips move at eight times the wind speed, which is why large rotors turn at only $10$–$20$ revolutions per minute.

### Variable-speed operation and the cubic law

A fixed-speed rotor sits at $\lambda_{opt}$ only for one wind speed. A variable-speed turbine adjusts $\omega$ with the wind, $\omega = \lambda_{opt}v/R$, so that $C_p = C_{p,max}$ persists. Substituting $v = \omega R/\lambda_{opt}$ into the power expression,

$$P = \tfrac12\rho\pi R^2\left(\frac{\omega R}{\lambda_{opt}}\right)^3C_{p,max} = k\,\omega^3, \qquad k = \frac{\rho\pi R^5C_{p,max}}{2\lambda_{opt}^3}.$$

The converter controls the generator torque as $T = P/\omega = k\omega^2$, so the machine tracks the optimum without measuring the wind, much as MPPT tracks the optimum in photovoltaics (Lesson m1-l3).

### The power curve

The **power curve** plots electrical output against hub-height wind speed and has four regions.

1. **Below cut-in** ($v < v_{ci} \approx 3\ \text{m s}^{-1}$) the available power cannot overcome losses and the turbine is idle.
2. **Between cut-in and rated speed** ($v_{ci}\le v < v_r \approx 12\ \text{m s}^{-1}$) the rotor follows $\lambda_{opt}$ and the power rises roughly as $v^3$.
3. **Between rated and cut-out** ($v_r \le v < v_{co} \approx 25\ \text{m s}^{-1}$) the blades are pitched to feather and shed power, holding the output at the rated value $P_r$, which the generator and gearbox are sized to carry.
4. **Above cut-out** the turbine brakes and feathers to protect itself.

The rated speed is a design choice. Setting it near the speed that carries most of the energy keeps the generator small and its capacity factor high; a lower rated speed raises the capacity factor but captures less of the high-speed energy.

### The Weibull distribution of wind speeds

Hourly wind speeds at a site are well described by the **Weibull distribution**,

$$f(v) = \frac{k}{c}\left(\frac{v}{c}\right)^{k-1}\exp\!\left[-\left(\frac vc\right)^k\right], \qquad F(v>v_0) = \exp\!\left[-\left(\frac{v_0}{c}\right)^k\right],$$

with scale parameter $c$ (in $\text{m s}^{-1}$, roughly $1.1\bar v$) and shape parameter $k$ (about $2$ for most sites; $k=2$ is the Rayleigh distribution). Moments follow from the substitution $u = (v/c)^k$:

$$\langle v^n\rangle = \int_0^\infty v^nf(v)\,dv = c^n\int_0^\infty u^{n/k}e^{-u}\,du = c^n\,\Gamma\!\left(1+\frac nk\right).$$

Thus $\bar v = c\,\Gamma(1+1/k)$ and the mean power density is

$$\overline{\frac PA} = \tfrac12\rho\langle v^3\rangle = \tfrac12\rho c^3\,\Gamma\!\left(1+\frac3k\right).$$

The **energy pattern factor** $\langle v^3\rangle/\bar v^3 = \Gamma(1+3/k)/\Gamma^3(1+1/k)$ measures how much the cube law amplifies the variability. For $k=2$ it is $\Gamma(2.5)/\Gamma^3(1.5) = 1.329/0.696 = 1.91$. Given a measured mean $\bar v$ and standard deviation $\sigma$, the shape parameter is estimated from $k \approx (\sigma/\bar v)^{-1.086}$ and $c = \bar v/\Gamma(1+1/k)$.

### Annual energy yield

The expected power is $\bar P = \int_0^\infty P(v)f(v)\,dv$, and the annual energy is $E = 8760\,\bar P$. In practice we use the **method of bins**: divide the speed range into $1\ \text{m s}^{-1}$ bins, compute the hours per year in each bin $h_i = 8760\,[F(v_i-\tfrac12)-F(v_i+\tfrac12)]$ with $F$ the exceedance probability, multiply by the power from the curve and sum. The capacity factor is $CF = E/(P_r\times 8760)$. A good Indian site with $\bar v \approx 6.5\text{–}7.5\ \text{m s}^{-1}$ gives $CF = 0.25$–$0.35$ for modern low-specific-power rotors.

## Key Ideas

- **Tip-speed ratio**: $\lambda = \omega R/v$; $C_p(\lambda)$ peaks near $\lambda = 8$ at about $0.48$ for three blades.
- **Variable speed**: holding $\lambda_{opt}$ gives $P = k\omega^3$ with $k = \rho\pi R^5C_{p,max}/(2\lambda_{opt}^3)$.
- **Power curve**: idle below cut-in, $\propto v^3$ to rated speed, flat at $P_r$ by pitch control, shut down above cut-out.
- **Weibull**: $\bar v = c\Gamma(1+1/k)$, $\langle v^3\rangle = c^3\Gamma(1+3/k)$; $k=2$ gives $\langle v^3\rangle = 1.91\bar v^3$.
- **Annual yield**: $E = 8760\sum_i f_iP(v_i)$ with the bin method; $CF = E/(8760P_r)$.

## Worked Examples

### Example 1 — Rotor speed and the cubic law

A turbine has $R = 45\ \text{m}$, $\lambda_{opt} = 8.1$ and $C_{p,max} = 0.48$ at $\rho = 1.06\ \text{kg m}^{-3}$. Find the rotor speed at $10\ \text{m s}^{-1}$ and the shaft power, both directly and from $k\omega^3$.

**Solution.** The angular speed is $\omega = \lambda_{opt}v/R = 8.1\times10/45 = 1.80\ \text{rad s}^{-1}$, i.e. $17.2$ revolutions per minute, and the tip speed is $81\ \text{m s}^{-1}$. Directly,

$$P = \tfrac12(1.06)\pi(45)^2(10)^3(0.48) = 1.62\ \text{MW}.$$

With $k = \rho\pi R^5C_{p,max}/(2\lambda_{opt}^3) = (1.06)(\pi)(1.845\times10^8)(0.48)/(2\times531.4) = 2.78\times10^5\ \text{kg m}^2$, the cubic law gives $k\omega^3 = 2.78\times10^5\times5.83 = 1.62\ \text{MW}$, in agreement. A gearbox ratio of about $1500/17.2 = 87$ is needed to reach the speed of a four-pole generator.

### Example 2 — Annual yield of a 2 MW turbine

A $2\ \text{MW}$ turbine with $D = 90\ \text{m}$ has an idealised power curve $P = P_r(v^3 - 27)/(1728 - 27)$ for $3\le v<12$, $P = 2000\ \text{kW}$ for $12\le v\le25$. The site has a Rayleigh distribution ($k=2$) with $\bar v = 6\ \text{m s}^{-1}$. Find the annual energy and capacity factor.

**Solution.** The scale parameter is $c = 6/\Gamma(1.5) = 6/0.8862 = 6.77\ \text{m s}^{-1}$. The bins give the following (hours from the Weibull exceedance, energy $= h\times P$):

| $v$ (m/s) | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | $\ge 12$ |
|---|---|---|---|---|---|---|---|---|---|
| hours/yr | 1074 | 1104 | 1043 | 917 | 757 | 588 | 432 | 301 | 489 |
| $P$ (kW) | 44 | 115 | 222 | 372 | 570 | 825 | 1144 | 1533 | 2000 |
| $E$ (MWh) | 47 | 127 | 232 | 341 | 431 | 485 | 495 | 462 | 978 |

The sum is $3598\ \text{MWh}$ (bins below $4\ \text{m s}^{-1}$ contribute nothing), giving $CF = 3598/(2\times8760) = 0.205$. Direct integration of $\int Pf\,dv$ gives $3582\ \text{MWh}$, a $0.5\%$ difference. Only $489$ hours (5.6% of the year) are spent at rated power, which is why a good $CF$ needs a rotor large relative to the generator.

### Example 3 — Fitting a Weibull distribution

A mast records a mean speed of $6.5\ \text{m s}^{-1}$ with standard deviation $3.1\ \text{m s}^{-1}$ at hub height. Estimate $k$ and $c$, the mean power density at $\rho = 1.06\ \text{kg m}^{-3}$, and the fraction of time below cut-in ($3\ \text{m s}^{-1}$) and above rated ($12\ \text{m s}^{-1}$).

**Solution.** $\sigma/\bar v = 0.477$, so $k = 0.477^{-1.086} = 2.23$ and $c = 6.5/\Gamma(1.448) = 6.5/0.886 = 7.34\ \text{m s}^{-1}$. Then $\langle v^3\rangle = c^3\Gamma(1+3/k) = 395.3\times1.197 = 473\ \text{m}^3\text{s}^{-3}$ and

$$\overline{P/A} = \tfrac12(1.06)(473) = 251\ \text{W m}^{-2},$$

compared with $\tfrac12\rho\bar v^3 = 146\ \text{W m}^{-2}$ if one cubed the mean: an energy pattern factor of $1.72$. The fraction below cut-in is $1 - e^{-(3/7.34)^{2.23}} = 12.7\%$ ($1110$ hours) and the fraction above rated is $e^{-(12/7.34)^{2.23}} = 5.0\%$ ($436$ hours).

## Common Misconceptions

- **"Higher tip-speed ratio always means more power."** $C_p$ peaks near $\lambda = 8$ and falls on both sides; faster blades also make more noise.
- **"A turbine produces its rated power whenever the wind blows."** It reaches rated power only above $v_r$, for a few hundred to a thousand hours per year; the capacity factor reflects the whole distribution.
- **"Use the mean speed in the power law to estimate yield."** The cube law means $\langle v^3\rangle$ is $1.7$–$1.9$ times $\bar v^3$, so the mean speed underestimates the resource, and the power curve then truncates the high end.
- **"A site with a higher mean speed always yields more."** A lower shape parameter $k$ (more gusty) puts more energy in the tails, which the rated power and cut-out clip.
- **"The Weibull distribution describes the wind second by second."** It is a fit to hourly or ten-minute means and ignores correlation in time, so it cannot predict ramps or lulls.

## Connections

- The expectation values here are those of the probability distributions in Thermal Physics and Statistical Mechanics (Lesson m3-l1), and the gamma-function integrals are the improper integrals of Integral Calculus (Lesson m3-l3).
- Torque tracking with $T = k\omega^2$ is a control loop of the kind in Differential Equations (Lesson m3-l3), where first-order response is modelled.
- The $C_p(\lambda)$ measurement is the wind experiment of the Renewable Energy Lab (renewable-energy-lab, Lesson m1-l5); the parametric fit above can be compared with the measured curve.
- The cube-law amplification of fluctuations is the reason Lesson m3-l2 treats variability and aggregation, and the capacity factor enters the levelised cost of energy in Lesson m3-l2.
- The bin summation in Example 2 is a midpoint-rule quadrature of the kind studied in Numerical Methods.

## Quick Check

1. A rotor with $R = 60\ \text{m}$ must run at $\lambda = 8$ in a $9\ \text{m s}^{-1}$ wind. What are $\omega$ and the rotational speed in revolutions per minute?
2. Show that $P = k\omega^3$ and identify what $k$ depends on.
3. For $k=2$ and $c = 8\ \text{m s}^{-1}$, find the mean speed and the probability that $v>10\ \text{m s}^{-1}$.
4. Why is the energy pattern factor $1.91$ for Rayleigh winds, and what does it say about a site's resource?
5. A $3\ \text{MW}$ turbine delivers $8.4\ \text{GWh}$ in a year. Find its capacity factor and the equivalent hours at rated power.

## Takeaway

- The power coefficient depends on tip-speed ratio and peaks near $\lambda = 8$, so rotors turn slowly and variable-speed control keeps them at the optimum, giving $P = k\omega^3$.
- A power curve has cut-in, cubic, rated and cut-out regions; rated speed and generator size are a trade-off between capacity factor and captured energy.
- Wind speeds follow a Weibull distribution with $\bar v = c\Gamma(1+1/k)$ and $\langle v^3\rangle = c^3\Gamma(1+3/k)$; the mean power density exceeds $\tfrac12\rho\bar v^3$ by the pattern factor.
- Annual yield and capacity factor follow from summing power-curve values weighted by hours per bin, typically $0.2$–$0.35$ at Indian sites.
