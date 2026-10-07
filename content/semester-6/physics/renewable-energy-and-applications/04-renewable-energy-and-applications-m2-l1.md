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
lessonId: renewable-energy-and-applications-m2-l1
lessonName: Wind Resource, Power Density and the Betz Limit
lessonNumber: 4
moduleNumber: 2
semesterNumber: 6
difficulty: intermediate
estimatedStudyMinutes: 50
releaseOrder: 4
prerequisites:
  - renewable-energy-and-applications-m1-l1
  - mechanics-m3-l1
  - thermal-physics-and-statistical-mechanics-m1-l2
learningObjectives:
  - Derive the kinetic power flux $\tfrac12\rho v^3$ of moving air and evaluate air density at altitude from the ideal gas law.
  - Extrapolate wind speed and power density to hub height with the power-law wind profile.
  - Derive the Betz limit and the thrust coefficient from actuator-disc momentum theory.
  - Distinguish the Betz limit from the real power coefficient and the electrical efficiency of a turbine.
concepts:
  - Wind power density
  - Air density
  - Wind shear exponent
  - Actuator disc
  - Axial induction factor
  - Betz limit
  - Thrust coefficient
tags:
  - physics
  - renewable-energy-and-applications
  - wind-energy
  - betz-limit
sourceType: authored-courseware
status: in-review
assessmentHints:
  - conceptual
  - derivation
  - problem-solving
  - short-answer
***

# Wind Resource, Power Density and the Betz Limit

## Overview

Module 1 treated sunlight; Module 2 turns to the resource that Lesson m1-l1 showed to be fifty times human demand: the wind, which is solar energy converted by atmospheric heating into kinetic energy. This lesson builds the physics of extracting it. We start from the kinetic energy flux of moving air, which is proportional to the cube of the speed, and show how air density at Bengaluru's altitude and the increase of wind speed with height change the answer. We then derive the Betz limit, the maximum fraction $16/27 \approx 59\%$ of that flux that any rotor can capture, from the conservation of mass, momentum and energy across an idealised actuator disc. The same analysis gives the thrust on the rotor, which sets the loads that a tower must bear. Lesson m2-l2 extends the picture to real power curves and wind statistics.

## Learning Path

- **What you should already know**: kinetic energy, work and power (Mechanics Lesson m3-l1); the ideal gas law (Thermal Physics Lesson m1-l2); the capacity factor and the scale of the wind resource (Lesson m1-l1).
- **What this lesson adds**: wind power density, air density at altitude, the wind-shear profile, actuator-disc theory, the Betz limit and the thrust coefficient.
- **What later lessons this will unlock**: power curves, tip-speed ratio and the Weibull annual yield (Lesson m2-l2); the comparison of wind with hydro, tidal and thermal conversion (Lesson m2-l3); and the wind device of the Renewable Energy Lab (Lesson m1-l5).

## Core Explanation

### Kinetic power flux of the wind

Air of density $\rho$ moving at speed $v$ through an area $A$ perpendicular to the flow carries mass at the rate $\dot m = \rho A v$. Each kilogram has kinetic energy $\tfrac12 v^2$, so the power in the stream is

$$P_{wind} = \tfrac12\dot m v^2 = \tfrac12\rho A v^3,$$

and the **wind power density** is $P_{wind}/A = \tfrac12\rho v^3$ in $\text{W m}^{-2}$. The cubic dependence is the central fact of wind engineering: doubling the speed gives eight times the power, and a $10\%$ error in speed becomes a $33\%$ error in energy. It also explains why the capacity factors of Lesson m1-l1 are modest, since most hours have speeds well below the best.

The density follows from the ideal gas law, $\rho = p/(R_sT)$ with $R_s = 287\ \text{J kg}^{-1}\text{K}^{-1}$. Pressure falls with height as $p = p_0e^{-h/H}$ with scale height $H \approx 8.4\ \text{km}$. At Bengaluru ($h = 920\ \text{m}$), $p = 101.3\,e^{-0.1095} = 90.8\ \text{kPa}$ and with $T = 298\ \text{K}$,

$$\rho = \frac{90\,800}{287 \times 298} = 1.06\ \text{kg m}^{-3},$$

some $13\%$ below the sea-level $1.225\ \text{kg m}^{-3}$. Hot, high sites therefore pay a density penalty that must be included in every yield estimate.

### The wind profile and hub height

Friction with the ground slows the air near the surface, so wind speed rises with height. Over open terrain a power law describes the **wind shear**,

$$\frac{v(h)}{v(h_{ref})} = \left(\frac{h}{h_{ref}}\right)^{\alpha},$$

with exponent $\alpha \approx 0.14$ ($1/7$) for open ground, $0.2$ for suburbs and up to $0.3$ for forests or cities. Because power goes as $v^3$, the power density scales as $(h/h_{ref})^{3\alpha}$. Anemometers are usually at $10$ m while hub heights are $80$–$120$ m, so extrapolation is unavoidable. Indian resource assessments commonly take a mean power density above about $200\ \text{W m}^{-2}$ at $100$ m as the threshold for development. The best Indian sites then have annual mean speeds of $7$–$8\ \text{m s}^{-1}$ at hub height, as noted in Lesson m1-l1.

### Actuator-disc theory and the Betz limit

Idealise the rotor as a permeable disc of area $A$ which removes momentum from a steady, incompressible, frictionless airflow, bounded by a stream tube. Let $v_1$ be the speed far upstream, $v_d$ the speed through the disc and $v_2$ the speed far downstream. The tube widens as the air slows; mass conservation gives $\dot m = \rho A v_d$ at the disc.

The disc exerts a force on the air equal to the rate of momentum loss, so the thrust on the rotor is $F = \dot m(v_1 - v_2)$, and the power extracted is $P = Fv_d = \dot m(v_1-v_2)v_d$. The same power must equal the loss of kinetic energy of the flow, $P = \tfrac12\dot m(v_1^2 - v_2^2)$. Equating the two,

$$(v_1 - v_2)v_d = \tfrac12(v_1-v_2)(v_1+v_2) \quad\Longrightarrow\quad v_d = \frac{v_1+v_2}{2}.$$

Half of the deceleration occurs before the disc and half after. Define the **axial induction factor** $a$ as the fractional slowing at the disc, $v_d = v_1(1-a)$, so that $v_2 = v_1(1-2a)$. Then $\dot m = \rho Av_1(1-a)$ and

$$P = \tfrac12\rho Av_1(1-a)\,v_1^2\left[1-(1-2a)^2\right] = \tfrac12\rho Av_1^3\cdot 4a(1-a)^2.$$

The **power coefficient** is the ratio of extracted to available power,

$$C_p = \frac{P}{\tfrac12\rho Av_1^3} = 4a(1-a)^2.$$

Differentiating, $\dfrac{dC_p}{da} = 4(1-a)^2 - 8a(1-a) = 4(1-a)(1-3a)$, which vanishes at $a = 1/3$. Hence

$$C_{p,max} = 4\cdot\frac13\cdot\frac49 = \frac{16}{27} = 0.593,$$

the **Betz limit**. At this optimum the wake leaves at $v_2 = v_1/3$ and the disc sees $v_d = 2v_1/3$. The thrust coefficient, $C_T = F/(\tfrac12\rho Av_1^2) = 4a(1-a)$, equals $8/9$ at the optimum. The reason a limit exists is that extracting more energy means slowing the wake further, but a slower wake means less mass flows through the disc; the product peaks at one-third induction. Momentum theory fails beyond $a \approx 0.4$–$0.5$, when the wake would stagnate and turbulence takes over.

```python
import numpy as np, matplotlib.pyplot as plt
a = np.linspace(0, 0.5, 200)
plt.plot(a, 4*a*(1-a)**2, label=r"$C_p$"); plt.plot(a, 4*a*(1-a), label=r"$C_T$")
plt.axvline(1/3, ls="--", c="grey"); plt.xlabel("axial induction a"); plt.legend(); plt.show()
```

The plot shows $C_p$ rising to a maximum of $0.593$ at $a=1/3$ (dashed line) while $C_T$ keeps rising towards $1$ at $a = 1/2$, so more extraction always costs more thrust.

### From Betz to the electrical output

Real rotors reach $C_p = 0.45$–$0.50$ at the design point, i.e. roughly $75$–$85\%$ of the Betz limit; wake rotation, finite blade number, tip losses and profile drag account for the gap. Gearbox, generator and converter efficiencies of $0.90$–$0.95$ in total reduce the electrical output further, so $C_p\eta_{el} \approx 0.40$–$0.45$ is typical of modern machines. The Betz limit is thus not an efficiency in the sense of Carnot's: it is a fraction of the *kinetic flux through the swept area*, not of the energy of the whole atmosphere, and the air that passes the rotor keeps two thirds of its speed.

## Key Ideas

- **Power density**: $P/A = \tfrac12\rho v^3$; doubling speed multiplies power by eight.
- **Air density**: $\rho = p/(R_sT)$ falls with altitude and temperature; $1.06\ \text{kg m}^{-3}$ at Bengaluru against $1.225$ at sea level.
- **Wind shear**: $v \propto h^{\alpha}$ with $\alpha \approx 0.14$–$0.3$; power density scales as $h^{3\alpha}$.
- **Actuator disc**: $v_d = (v_1+v_2)/2$, $C_p = 4a(1-a)^2$, $C_T = 4a(1-a)$.
- **Betz limit**: $C_{p,max} = 16/27 = 0.593$ at $a=1/3$; practical rotors reach $0.45$–$0.50$.
- **Thrust**: $F = \tfrac12\rho Av_1^2C_T$ is the load on the rotor and tower.

## Worked Examples

### Example 1 — Power from a large rotor

A turbine has a rotor diameter of $100$ m. At Bengaluru ($\rho = 1.06\ \text{kg m}^{-3}$) the wind at hub height is $10\ \text{m s}^{-1}$. Find the power in the wind, the Betz-limit power, and the electrical output for $C_p = 0.45$ and $\eta_{el} = 0.93$.

**Solution.** The swept area is $A = \pi(50)^2 = 7854\ \text{m}^2$. The power in the wind is

$$P_{wind} = \tfrac12(1.06)(7854)(10)^3 = 4.16\ \text{MW}.$$

The Betz limit gives $P_{Betz} = (16/27)\times4.16 = 2.47\ \text{MW}$. A real rotor with $C_p = 0.45$ captures $0.45\times4.16 = 1.87\ \text{MW}$ of shaft power, and the electrical output is $0.93\times1.87 = 1.74\ \text{MW}$. At sea level the same rotor would see $15\%$ more air mass ($1.225/1.06 = 1.16$) and give about $2.0\ \text{MW}$.

### Example 2 — Partial extraction and thrust

For the rotor of Example 1, compare a disc operated at $a=0.30$ with the optimum $a=1/3$: find $v_d$, $v_2$, $C_p$ and the thrust.

**Solution.** At $a=0.30$ and $v_1 = 10\ \text{m s}^{-1}$: $v_d = 7.0$, $v_2 = 4.0\ \text{m s}^{-1}$, and

$$C_p = 4(0.30)(0.70)^2 = 0.588, \qquad C_T = 4(0.30)(0.70) = 0.84.$$

The dynamic force scale is $\tfrac12\rho Av_1^2 = \tfrac12(1.06)(7854)(100) = 416\ \text{kN}$, so the thrust is $0.84\times416 = 350\ \text{kN}$. At the optimum, $C_p = 0.593$ and $C_T = 8/9$ give a thrust of $370\ \text{kN}$. A drop in induction of only $0.033$ costs $0.8\%$ of the power ($0.588$ against $0.593$) but saves about $5\%$ of the thrust, which shows why $C_p$ is flat near its maximum and why turbines are often operated slightly below it.

### Example 3 — Extrapolating to hub height

A mast measures a mean $5.2\ \text{m s}^{-1}$ at $10$ m on a plateau site with $\alpha = 0.18$. Find the mean speed and power density at $100$ m for $\rho = 1.06\ \text{kg m}^{-3}$, and compare with the $10$ m values.

**Solution.** The height ratio is $10$, so $v(100) = 5.2\times10^{0.18} = 5.2\times1.514 = 7.87\ \text{m s}^{-1}$. The power densities are

$$\tfrac12(1.06)(5.2)^3 = 74.5\ \text{W m}^{-2}, \qquad \tfrac12(1.06)(7.87)^3 = 258\ \text{W m}^{-2},$$

a ratio of $10^{3\times0.18} = 3.47$. The site passes the $200\ \text{W m}^{-2}$ screening threshold at hub height although it looks poor at mast height. (Using the mean speed in $\tfrac12\rho v^3$ underestimates the true mean power density, because $\langle v^3\rangle > \langle v\rangle^3$; Lesson m2-l2 corrects this with the Weibull distribution.)

## Common Misconceptions

- **"The Betz limit is an engineering inefficiency that better blades could remove."** It is a consequence of mass and momentum conservation for any rotor extracting energy from a free stream; only a duct or diffuser, which changes the stream tube, can beat it (referred to the rotor area).
- **"A turbine could capture all of the wind's energy by stopping the air."** Stopping the air would stop the flow through the rotor; $C_p$ peaks at $a=1/3$ because the mass flow falls as the wake slows.
- **"Wind power depends on speed, not density."** It is proportional to $\rho$, so a hot plateau site gives $13\%$ less than sea level at the same speed.
- **"The mean wind speed gives the mean power."** Because of the cube, $\langle v^3\rangle$ exceeds $\langle v\rangle^3$ by a factor $1.5$–$2$.
- **"Taller towers only matter for clearing obstacles."** The shear profile means power density grows as $h^{3\alpha}$; doubling hub height gives $2^{0.54} = 1.45$ times the power for $\alpha = 0.18$.

## Connections

- The kinetic power flux and the work–energy theorem come from Mechanics (Lesson m3-l1); the stream-tube momentum balance is Newton's second law applied to a flow, as in Mechanics Lessons m1-l1 and m3-l2.
- The density calculation and the exponential atmosphere use the ideal gas law and hydrostatic equilibrium of Thermal Physics and Statistical Mechanics (Lessons m1-l2 and m3-l1).
- The exponential pressure profile $p_0e^{-h/H}$ is the isothermal atmosphere that reappears for planetary and stellar atmospheres in the Astrophysics minor.
- The wind turbine and the Betz limit are measured in the Renewable Energy Lab (renewable-energy-lab, Lesson m1-l5), where $C_p$ is found from a small rotor in a wind tunnel.
- The cubic law and the density dependence reappear in the lifecycle and cost analysis of Lesson m3-l3, where capacity factor decides the levelised cost.

## Quick Check

1. Derive the wind power density at $12\ \text{m s}^{-1}$ for $\rho = 1.06\ \text{kg m}^{-3}$ and compare it with the value at $6\ \text{m s}^{-1}$.
2. Estimate the air density at a site at $1500$ m altitude and $20\ ^\circ\text{C}$ using $H = 8.4\ \text{km}$.
3. Starting from $v_d = (v_1+v_2)/2$, show that $C_p = 4a(1-a)^2$ and locate its maximum.
4. A $80$ m diameter rotor operates at $a = 0.25$ in $9\ \text{m s}^{-1}$ wind at $\rho = 1.1\ \text{kg m}^{-3}$. Find $C_p$ and the power extracted.
5. Explain why $C_T$ rather than $C_p$ determines the design of the tower.

## Takeaway

- The wind carries $\tfrac12\rho v^3$ per unit area; speed dominates, density and height matter next.
- Bengaluru's altitude reduces air density by about $13\%$ relative to sea level; hub-height extrapolation with the shear exponent can triple the power density from mast to hub.
- Actuator-disc theory gives $C_p = 4a(1-a)^2$ and the Betz limit $16/27 = 0.593$ at $a = 1/3$, with thrust coefficient $8/9$.
- Real turbines achieve $C_p \approx 0.45$–$0.50$ and overall electrical efficiency of $0.40$–$0.45$ of the wind power through the swept area.
- Annual energy needs the statistics of the wind, which is the subject of Lesson m2-l2.
