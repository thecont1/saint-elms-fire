***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-6
semesterName: Semester 6
subjectId: physics
subjectName: Physics
courseId: renewable-energy-and-applications
courseName: Renewable Energy and Applications (Physics Option A)
moduleId: renewable-energy-and-applications-module-1
moduleName: Energy Fundamentals and Solar Energy
lessonId: renewable-energy-and-applications-m1-l2
lessonName: Solar Radiation, Insolation and Solar Thermal Collectors
lessonNumber: 2
moduleNumber: 1
semesterNumber: 6
difficulty: intermediate
estimatedStudyMinutes: 55
releaseOrder: 2
prerequisites:
  - renewable-energy-and-applications-m1-l1
  - introduction-to-quantum-mechanics-m1-l1
  - thermal-physics-and-statistical-mechanics-m1-l1
learningObjectives:
  - Describe the solar spectrum, the solar constant and the air-mass convention, and compute the zenith angle and air mass for a given latitude, date and hour.
  - Distinguish irradiance from insolation and estimate daily extraterrestrial and ground-level insolation for Bengaluru-like latitudes using the clearness index.
  - Derive the Hottel–Whillier efficiency equation for a flat-plate collector and compute its efficiency and stagnation temperature.
  - Explain how concentration raises the achievable receiver temperature and the Carnot ceiling of a solar thermal power cycle.
concepts:
  - Solar constant
  - Air mass (AM)
  - Solar declination and zenith angle
  - Irradiance and insolation
  - Clearness index
  - Flat-plate collector efficiency
  - Concentration ratio
tags:
  - physics
  - renewable-energy-and-applications
  - solar-radiation
  - solar-thermal
sourceType: authored-courseware
status: in-review
assessmentHints:
  - conceptual
  - derivation
  - problem-solving
  - computational
***

# Solar Radiation, Insolation and Solar Thermal Collectors

## Overview

Every solar technology begins with the same input: a nearly blackbody spectrum at $5772\ \text{K}$, attenuated by the atmosphere and arriving at a moving geometry. This lesson describes that input quantitatively (solar constant, reference spectra, solar geometry, irradiance versus insolation) for Bengaluru ($12.97^\circ$N), then applies it to solar thermal collectors: the flat-plate energy balance gives the Hottel–Whillier equation, and concentration raises the receiver temperature and the Carnot ceiling.

## Learning Path

- **What you should already know**: Planck's and Wien's laws (Introduction to Quantum Mechanics Lesson m1-l1); Newton's law of cooling (Thermal Physics Lesson m1-l1); capacity factor (Lesson m1-l1).
- **What this lesson adds**: reference spectra, air mass, solar geometry, insolation, the flat-plate efficiency curve and concentrating collectors.
- **What later lessons this will unlock**: the Shockley–Queisser limit (Lesson m1-l3); the Carnot comparison of heat engines (Lesson m2-l3); the insolation table of the design case (Lesson m3-l3).

## Core Explanation

### The solar constant and the solar spectrum

At $1\ \text{AU} = 1.496 \times 10^{11}\ \text{m}$ the Sun's output $L_\odot = 3.83 \times 10^{26}\ \text{W}$ gives the **solar constant**

$$G_{sc} = \frac{L_\odot}{4\pi d^2} = \frac{3.83 \times 10^{26}}{4\pi (1.496 \times 10^{11})^2} = 1361\ \text{W m}^{-2}.$$

The orbit is elliptical, so $G_{on} = G_{sc}\,[1 + 0.033\cos(360 n/365)]$ varies by $\pm 3.3\%$ with day number $n$, largest in early January.

The spectrum is close to a $5772\ \text{K}$ blackbody; Wien's law puts the peak at

$$\lambda_{\max} = \frac{2.898 \times 10^{-3}\ \text{m K}}{5772\ \text{K}} = 502\ \text{nm},$$

in the green. About 7% of the energy is ultraviolet, 47% visible ($400$–$700\ \text{nm}$) and 46% infrared. The spectrum outside the atmosphere is **AM0**. AM1.5 carries about $4.3 \times 10^{21}$ photons $\text{m}^{-2}\ \text{s}^{-1}$, of which $2.7 \times 10^{21}$ exceed the silicon band gap of $1.12\ \text{eV}$.

### Air mass and the AM1.5 standard

Sunlight is attenuated by Rayleigh scattering ($\propto \lambda^{-4}$), absorption by ozone, water vapour and $\text{CO}_2$, and aerosols. The relative path length is the **air mass**,

$$AM = \frac{1}{\cos\theta_z}$$

for a plane-parallel atmosphere. An empirical form finite at the horizon is $AM = [\cos\theta_z + 0.50572\,(96.08^\circ - \theta_z)^{-1.6364}]^{-1}$ ($AM \approx 38$ at $90^\circ$).

Modules are rated under **AM1.5G** (global, including diffuse light; $\theta_z = 48.2^\circ$) at $1000\ \text{W m}^{-2}$ and $25\ ^\circ\text{C}$: the **standard test conditions (STC)** of the Renewable Energy Lab. At Bengaluru the noon air mass is near 1, so the real spectrum is bluer and clear-day beam irradiance reaches $1000$–$1050\ \text{W m}^{-2}$.

### Solar geometry

The **declination** $\delta$ varies between $\pm 23.45^\circ$ (Cooper's formula):

$$\delta = 23.45^\circ \sin\!\left[\frac{360^\circ (284 + n)}{365}\right].$$

The **hour angle** $\omega$ is $15^\circ$ per hour, negative before noon. At latitude $\phi$:

$$\cos\theta_z = \sin\phi\sin\delta + \cos\phi\cos\delta\cos\omega.$$

At solar noon $\theta_z = |\phi - \delta|$. Sunrise and sunset occur at

$$\cos\omega_s = -\tan\phi\tan\delta,$$

and the day length is $2\omega_s/15^\circ$ hours.

At Bengaluru ($\phi = 12.97^\circ$N) the March equinox noon Sun is at $\theta_z = 13.0^\circ$ ($AM = 1.03$) and the day is 12 h. At the December solstice the noon zenith angle is $36.4^\circ$ ($AM = 1.24$) and the day lasts $11.2$ h; at the June solstice the noon Sun is $10.5^\circ$ north of the zenith and the day lasts $12.8$ h. So a fixed south-facing tilt near the latitude ($12$–$15^\circ$) captures most of the annual energy.

On a south-facing surface tilted at $\beta$, replace $\phi$ with $(\phi - \beta)$ to get the **angle of incidence**:

$$\cos\theta = \sin(\phi - \beta)\sin\delta + \cos(\phi - \beta)\cos\delta\cos\omega.$$

With $\beta = \phi$ the equinox noon beam is exactly normal.

### Irradiance, insolation and the clearness index

**Irradiance** $G$ is instantaneous power per unit area ($\text{W m}^{-2}$); **insolation** $H$ is its integral over a day ($\text{kWh m}^{-2}\ \text{day}^{-1}$). The components are **direct normal irradiance** (DNI), **diffuse horizontal irradiance** (DHI) and **global horizontal irradiance**, $\text{GHI} = \text{DNI}\cos\theta_z + \text{DHI}$. At a clear Bengaluru noon DNI is $850$–$950\ \text{W m}^{-2}$ and DHI about $100$; in monsoon overcast diffuse light dominates.

Integrating $G_{on}\cos\theta_z$ from sunrise to sunset gives the extraterrestrial daily insolation:

$$H_0 = \frac{24}{\pi}\, G_{on}\left[\cos\phi\cos\delta\sin\omega_s + \frac{\pi\omega_s}{180^\circ}\sin\phi\sin\delta\right],$$

with $\omega_s$ in degrees in the second term. For Bengaluru $H_0 \approx 10.2$ at the March equinox and $8.1\ \text{kWh m}^{-2}\ \text{day}^{-1}$ at the December solstice. The **clearness index** is

$$K_T = \frac{H}{H_0},$$

typically $0.55$–$0.65$ dry and $0.35$–$0.45$ monsoon. Monthly mean GHI for Bengaluru ($\text{kWh m}^{-2}\ \text{day}^{-1}$):

| Jan | Feb | Mar | Apr | May | Jun | Jul | Aug | Sep | Oct | Nov | Dec | Year |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 5.2 | 6.0 | 6.5 | 6.4 | 5.8 | 4.6 | 4.2 | 4.4 | 4.9 | 4.7 | 4.6 | 4.8 | 5.2 |

Tilted at the latitude, the annual mean rises to about $5.5$. Dividing insolation by $1\ \text{kW m}^{-2}$ gives **peak sun hours** (PSH): $5.5\ \text{kWh m}^{-2}\ \text{day}^{-1}$ is 5.5 PSH, the quantity used to size PV in Lesson m3-l3.

### Flat-plate solar thermal collectors

A **flat-plate collector** is a selective absorber bonded to water tubes, insulated and glazed. A fraction $(\tau\alpha)$ of the irradiance ($0.80$–$0.85$) is absorbed, and the plate at $T_p$ loses heat to ambient at $T_a$ through an **overall loss coefficient** $U_L$ ($3$–$6\ \text{W m}^{-2}\ \text{K}^{-1}$). The useful heat per unit area is

$$q_u = (\tau\alpha)\,G - U_L\,(T_p - T_a).$$

Using the fluid inlet temperature $T_i$ and the **heat removal factor** $F_R$ ($0.8$–$0.95$) gives the **Hottel–Whillier–Bliss equation**,

$$Q_u = A_c F_R\left[(\tau\alpha)G - U_L (T_i - T_a)\right],$$

and the efficiency

$$\eta = \frac{Q_u}{A_c G} = F_R(\tau\alpha) - F_R U_L\,\frac{T_i - T_a}{G}.$$

Against the reduced temperature $(T_i - T_a)/G$ this is a line with intercept $F_R(\tau\alpha)$ (the optical efficiency) and slope $-F_R U_L$. The unglazed collector starts highest but falls fastest; the evacuated tube is flattest.

```python
import numpy as np, matplotlib.pyplot as plt
x = np.linspace(0, 0.14, 100)          # (T_i - T_a)/G in K m^2/W
collectors = {"Unglazed (pool)": (0.90, 20.0),
              "Flat plate, selective": (0.75, 5.0),
              "Evacuated tube": (0.65, 1.5)}
for name, (eta0, FRUL) in collectors.items():
    eta = np.clip(eta0 - FRUL * x, 0, None)
    plt.plot(x, eta, label=name)
plt.xlabel(r"$(T_i - T_a)/G$  [K m$^2$ W$^{-1}$]"); plt.ylabel("Collector efficiency")
plt.legend(); plt.grid(alpha=0.3); plt.show()
```

Setting $\eta = 0$ gives the **stagnation temperature**:

$$T_{\text{stag}} - T_a = \frac{(\tau\alpha)G}{U_L},$$

about $120\ \text{K}$ above ambient for a selective flat plate at $800\ \text{W m}^{-2}$ and over $200\ \text{K}$ for an evacuated tube. Hence a flat plate cannot usefully deliver heat much above $100\ ^\circ\text{C}$. Bengaluru homes use about $2\ \text{m}^2$ per $100$ litres of daily hot water.

### Concentrating collectors and the Carnot ceiling

A concentrator focuses the beam from an aperture $A_a$ onto a receiver $A_r$, with **concentration ratio** $C = A_a/A_r$. The receiver absorbs $(\tau\alpha)\,C\,G_b$ per unit receiver area (only the beam $G_b$ is concentrated) and loses mainly by radiation, $\epsilon\sigma(T_r^4 - T_a^4)$. The receiver efficiency is

$$\eta_r = \alpha - \frac{\epsilon\sigma (T_r^4 - T_a^4)}{C\,G_b},$$

so the loss term shrinks as $1/C$. Troughs ($C = 30$–$80$) operate at $300$–$400\ ^\circ\text{C}$, towers ($C = 300$–$1000$) at $500$–$600\ ^\circ\text{C}$ and dishes ($C \sim 2000$) at $700$–$800\ ^\circ\text{C}$. The second-law maximum, from the Sun's angular radius $0.267^\circ$, is $C_{\max} = 1/\sin^2(0.267^\circ) \approx 46{,}000$.

The heat drives a Rankine or Brayton cycle capped by Carnot, $\eta_C = 1 - T_c/T_h$. The solar-to-electric efficiency $\eta_{\text{opt}}\,\eta_r\,\eta_{\text{cycle}}$ has an optimum $T_r$, since raising it improves the cycle but increases $T_r^4$ losses. Tower plants achieve $15$–$20\%$ annually; molten-salt storage makes them dispatchable (Lesson m3-l2).

## Key Ideas

- **Solar constant** $G_{sc} = 1361\ \text{W m}^{-2}$; spectrum close to a $5772\ \text{K}$ blackbody peaking at $502\ \text{nm}$.
- **Air mass** $AM = 1/\cos\theta_z$; AM1.5G defines STC.
- **Geometry**: $\cos\theta_z = \sin\phi\sin\delta + \cos\phi\cos\delta\cos\omega$; Bengaluru's noon zenith angle stays within $36^\circ$.
- **Insolation**: Bengaluru receives 5.2 GHI and 5.5 on a latitude-tilted plane (5.5 PSH).
- **Clearness index** $K_T = H/H_0$: $0.6$ dry, $0.4$ monsoon.
- **Hottel–Whillier**: $\eta = F_R(\tau\alpha) - F_R U_L (T_i - T_a)/G$; zero efficiency is stagnation.
- **Concentration** cuts loss per unit of collected power as $1/C$; $C_{\max} \approx 46{,}000$.

## Worked Examples

### Example 1 — Zenith angle and air mass in Bengaluru

Find the zenith angle, air mass and day length at Bengaluru on 21 December at 3 pm solar time.

**Solution.** For $n = 355$, $\delta = 23.45^\circ\sin[360(284+355)/365] = -23.45^\circ$. At 3 pm $\omega = +45^\circ$, so

$$\cos\theta_z = \sin 12.97^\circ \sin(-23.45^\circ) + \cos 12.97^\circ \cos 23.45^\circ \cos 45^\circ = -0.0893 + 0.6321 = 0.5428,$$

giving $\theta_z = 57.1^\circ$, $AM = 1.84$. Sunset: $\cos\omega_s = -\tan 12.97^\circ \tan(-23.45^\circ) = +0.0999$, $\omega_s = 84.3^\circ$, so the day is $2 \times 84.3/15 = 11.2\ \text{h}$ (sunset 5:37 pm). At noon, $\theta_z = 36.4^\circ$ and $AM = 1.24$.

### Example 2 — Clearness index and peak sun hours

The March mean GHI at Bengaluru is $6.5\ \text{kWh m}^{-2}\ \text{day}^{-1}$. Find $H_0$ on 21 March, the clearness index and the peak sun hours.

**Solution.** For $n = 80$, $\delta \approx 0$, so $\omega_s = 90^\circ$. The orbital factor is $1 + 0.033\cos(360 \times 80/365) = 1.006$, so $G_{on} = 1369\ \text{W m}^{-2}$ and

$$H_0 = \frac{24}{\pi} \times 1369 \times \left[\cos 12.97^\circ \times 1 \times 1 + \frac{\pi}{2}\sin 12.97^\circ \times 0\right] = 7.64 \times 1369 \times 0.9745 = 10{,}190\ \text{Wh m}^{-2},$$

i.e. $10.2\ \text{kWh m}^{-2}\ \text{day}^{-1}$. Then $K_T = 6.5/10.2 = 0.64$, a clear month. The ground-level insolation is $6.5$ PSH, or $23.4\ \text{MJ m}^{-2}\ \text{day}^{-1}$. A $1\ \text{kW}_p$ array with performance ratio $0.78$ generates about $5.1\ \text{kWh}$ per day.

### Example 3 — Flat-plate collector performance

A collector has $F_R(\tau\alpha) = 0.75$ and $F_R U_L = 5.0\ \text{W m}^{-2}\ \text{K}^{-1}$. With $G = 800\ \text{W m}^{-2}$, $T_a = 25\ ^\circ\text{C}$ and inlet water at $65\ ^\circ\text{C}$, find the efficiency, the heat from $4\ \text{m}^2$, the outlet temperature at $0.04\ \text{kg s}^{-1}$ and the stagnation temperature ($F_R \approx 1$).

**Solution.** The reduced temperature is $(65 - 25)/800 = 0.050\ \text{K m}^2\ \text{W}^{-1}$, so $\eta = 0.75 - 5.0 \times 0.050 = 0.50$. The useful heat is $Q_u = 0.50 \times 4 \times 800 = 1600\ \text{W}$. With $c_p = 4186\ \text{J kg}^{-1}\ \text{K}^{-1}$,

$$\Delta T = \frac{Q_u}{\dot m c_p} = \frac{1600}{0.04 \times 4186} = 9.6\ \text{K},$$

so the outlet is at $74.6\ ^\circ\text{C}$. At stagnation, $T_{\text{stag}} - T_a = 0.75 \times 800/5.0 = 120\ \text{K}$, i.e. $145\ ^\circ\text{C}$. Over a $5.5$ PSH day at mean efficiency $0.45$ it delivers $9.9\ \text{kWh}$, heating $200$ litres by $43\ \text{K}$.

## Common Misconceptions

- **"Irradiance and insolation are the same."** One is power density, the other energy per area; $5.5\ \text{kWh m}^{-2}\ \text{day}^{-1}$ means 5.5 hours at $1000\ \text{W m}^{-2}$.
- **"The Sun is overhead at noon everywhere in the tropics."** Only when $\delta = \phi$, at Bengaluru around 23 April and 20 August.
- **"Cloudy days give no solar energy."** Monsoon insolation at Bengaluru is still $4.2$–$4.6$, about 65% of March. Flat plates and PV use diffuse light; concentrators do not.
- **"A hotter collector is better."** Efficiency falls linearly with operating temperature; run as cool as the application allows.
- **"Concentration increases the energy collected."** It reduces receiver loss, allowing higher temperature; under haze a concentrator collects less than a flat plate of the same aperture.

## Connections

- The $5772\ \text{K}$ spectrum and Wien's law come from Introduction to Quantum Mechanics (Lesson m1-l1); the Planck function above the band gap sets the limit of Lesson m1-l3.
- Declination, hour angle and zenith angle are the coordinate transformations of Astrophysics I (Lessons m1-l3 and m2-l1).
- The collector balance is Newton's law of cooling, the receiver loss is Stefan–Boltzmann radiation (Thermal Physics Lesson m1-l1), and the Carnot ceiling is from Lesson m2-l2 of that course.
- The AM1.5G, STC and NOCT vocabulary is that of the Renewable Energy Lab (Lessons m1-l1 and m1-l3).
- Rayleigh scattering connects to Waves and Optics and to atmospheric windows in astronomy (Astrophysics I, Lesson m3-l3).

## Quick Check

1. State the solar constant and explain the $\pm 3.3\%$ annual variation.
2. For Bengaluru on 21 June ($\delta = +23.45^\circ$), find the noon zenith angle, day length and air mass at 9 am.
3. Define the clearness index. If July GHI is $4.2\ \text{kWh m}^{-2}\ \text{day}^{-1}$ and $H_0 = 10.4$, what is $K_T$ and what does it say about the sky?
4. A collector has $F_R(\tau\alpha) = 0.70$ and $F_R U_L = 4.0\ \text{W m}^{-2}\ \text{K}^{-1}$. Find the reduced temperature at zero efficiency and the stagnation rise at $G = 900\ \text{W m}^{-2}$.
5. Explain why a trough can deliver $400\ ^\circ\text{C}$ heat while a flat plate cannot exceed about $150\ ^\circ\text{C}$ even at stagnation.

## Takeaway

- Sunlight is a $5772\ \text{K}$ blackbody spectrum at $1361\ \text{W m}^{-2}$; AM1.5G at $1000\ \text{W m}^{-2}$ is the rating standard.
- At Bengaluru the noon Sun is within $36^\circ$ of the zenith and days last 11.2–12.8 hours.
- Bengaluru receives about $5.5\ \text{kWh m}^{-2}\ \text{day}^{-1}$ on a latitude-tilted plane, with a monsoon dip to about 4.2.
- A flat-plate collector obeys $\eta = F_R(\tau\alpha) - F_R U_L (T_i - T_a)/G$ and reaches zero efficiency at the stagnation temperature.
- Concentration cuts receiver loss, enabling higher temperatures, but needs clear-sky beam.
