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
lessonId: renewable-energy-and-applications-m1-l3
lessonName: Photovoltaic Conversion, the Shockley–Queisser Limit and Arrays
lessonNumber: 3
moduleNumber: 1
semesterNumber: 6
difficulty: advanced
estimatedStudyMinutes: 55
releaseOrder: 3
prerequisites:
  - renewable-energy-and-applications-m1-l2
  - solid-state-physics-m3-l3
  - basic-electronics-m2-l1
  - introduction-to-quantum-mechanics-m1-l2
learningObjectives:
  - Derive the illuminated diode equation and obtain the short-circuit current, open-circuit voltage, maximum power point and fill factor of a solar cell.
  - Explain the three fundamental loss mechanisms behind the Shockley–Queisser limit and compute the ultimate efficiency of a single-junction cell.
  - Derive the temperature coefficient of the open-circuit voltage and estimate module power at a realistic operating temperature.
  - Design a series–parallel array and explain how maximum power point tracking matches the array to its load.
concepts:
  - Illuminated p-n junction
  - Short-circuit current and open-circuit voltage
  - Fill factor
  - Shockley–Queisser limit
  - Temperature coefficient of power
  - Series and parallel arrays
  - Maximum power point tracking
tags:
  - physics
  - renewable-energy-and-applications
  - photovoltaics
  - solar-cells
sourceType: authored-courseware
status: in-review
assessmentHints:
  - derivation
  - problem-solving
  - short-answer
  - computational
***

# Photovoltaic Conversion, the Shockley–Queisser Limit and Arrays

## Overview

Lesson m1-l2 delivered sunlight to a surface; this lesson converts it directly into electricity. A photon above the band gap lifts an electron across it, and the built-in field of a p-n junction sweeps the carriers apart before they recombine. We express this as the illuminated diode law and derive the short-circuit current, open-circuit voltage, maximum power point and fill factor that the Renewable Energy Lab measures. We then show that three unavoidable losses cap any single-junction cell near 33% (the Shockley–Queisser limit). Finally we move from cell to field: temperature dependence, series–parallel arrays, and the electronic tracking of the maximum power point.

## Learning Path

- **What you should already know**: band structure, doping and the p-n junction (Solid State Physics Lesson m3-l3); the diode law (Basic Electronics Lesson m2-l1); photons and the photoelectric effect (Introduction to Quantum Mechanics Lesson m1-l2); the AM1.5G spectrum and peak sun hours (Lesson m1-l2).
- **What this lesson adds**: the illuminated diode equation, $V_{oc}$, fill factor, the detailed-balance limit, temperature coefficients, array wiring and maximum power point tracking (MPPT).
- **What later lessons this will unlock**: inverters and grid connection (Lesson m3-l2), the energy payback of modules (Lesson m3-l3) and the rooftop design case, which uses the module parameters developed here.

## Core Explanation

### The illuminated p-n junction

Absorbed photons with $h\nu \ge E_g$ create electron–hole pairs; those generated within a diffusion length of the junction are separated by the built-in field and give a **photocurrent** $I_L$ flowing in the reverse direction. It is proportional to irradiance and to the external quantum efficiency (the spectral response treated in the Renewable Energy Lab),

$$I_L = qA\int \text{EQE}(\lambda)\,\Phi(\lambda)\,d\lambda.$$

To a good approximation the junction also behaves as an ordinary diode, which carries a forward **dark current** $I_0\left(e^{V/nV_T}-1\right)$ with $V_T = k_BT/q = 25.85\ \text{mV}$ at $300\ \text{K}$ and ideality factor $n$ between 1 and 2. The two superpose (the superposition approximation), giving the **illuminated diode equation**

$$I = I_L - I_0\left(e^{V/nV_T}-1\right),$$

with current taken positive in the direction of the photocurrent. Two points on the curve matter. At $V=0$ the dark term vanishes, so $I_{sc} = I_L$. At $I = 0$,

$$V_{oc} = nV_T\ln\!\left(\frac{I_L}{I_0}+1\right).$$

Raising $I_L$ tenfold adds only $nV_T\ln 10 = 59.5\ \text{mV}$ for $n=1$, so $I_{sc}$ is proportional to irradiance but $V_{oc}$ barely moves.

### Maximum power point and fill factor

The output power is $P = IV$. Setting $dP/dV = I + V\,dI/dV = 0$ and writing $v = V/nV_T$ gives

$$I_L + I_0 - I_0 e^{v}(1+v) = 0 \quad\Longrightarrow\quad e^{v_m}(1+v_m) = \frac{I_L}{I_0}+1,$$

which is solved numerically for the maximum-power voltage $V_m = nV_T v_m$; it lies below $V_{oc}$. The current there is $I_m = I_L - I_0(e^{v_m}-1)$. The **fill factor** measures how rectangular the curve is,

$$FF = \frac{V_mI_m}{V_{oc}I_{sc}},$$

and the efficiency is $\eta = V_mI_m/(G A) = FF\,V_{oc}I_{sc}/(GA)$. For an ideal diode an accurate empirical expression is $FF_0 = [v_{oc}-\ln(v_{oc}+0.72)]/(v_{oc}+1)$ with $v_{oc} = V_{oc}/nV_T$. Series resistance reduces it by roughly the factor $(1 - R_sI_{sc}/V_{oc})$, and low shunt resistance bleeds current at low voltage.

```python
import numpy as np, matplotlib.pyplot as plt
VT, IL, I0 = 0.02585, 9.31, 4.9e-11     # V, A, A (245 cm^2 cell)
V = np.linspace(0, 0.69, 400)
I = np.clip(IL - I0*(np.exp(V/VT) - 1), 0, None)
P = V*I; k = P.argmax()
fig, ax = plt.subplots(); ax.plot(V, I, label="I (A)")
ax.plot(V, P/V.max(), label="P (scaled)"); ax.plot(V[k], I[k], "ko")
ax.set_xlabel("V (V)"); ax.legend(); plt.show()
```

The plot shows a nearly flat current plateau at $I_{sc}$ that collapses sharply near $V_{oc}$, with the black dot marking the maximum power point on the knee.

### The Shockley–Queisser limit

Three losses are unavoidable for a single junction under unconcentrated sunlight.

1. **Sub-gap transmission.** Photons with $h\nu < E_g$ are not absorbed. For silicon ($1.12\ \text{eV}$) this wastes the infrared beyond $1107\ \text{nm}$.
2. **Thermalisation.** A photon with $h\nu > E_g$ creates a pair whose excess energy $h\nu - E_g$ is lost as heat within picoseconds as carriers relax to the band edges.
3. **Radiative recombination.** By detailed balance a cell that absorbs light must also emit it. At the operating voltage the emitted flux subtracts from the photocurrent, so the voltage is bounded below $E_g/q$: for silicon the limiting $V_{oc}$ is about $0.88\ \text{V}$, against $1.12\ \text{V}$ for the gap.

If every photon above the gap delivered exactly $E_g$ of energy, the **ultimate efficiency** would be

$$\eta_u(E_g) = \frac{E_g\int_{E_g}^{\infty}\phi_{ph}(E)\,dE}{\int_0^{\infty}E\,\phi_{ph}(E)\,dE},$$

with $\phi_{ph}$ the photon flux per unit energy. For a $5772\ \text{K}$ blackbody, $\eta_u$ is $0.44$ at $1.12\ \text{eV}$ and falls to $0.29$ at $2\ \text{eV}$; a small gap collects many photons but wastes each, a large gap the reverse. The full detailed-balance calculation multiplies $\eta_u$ by the voltage factor $qV_{oc}/E_g$ ($\approx 0.8$) and by the fill factor ($\approx 0.9$) and, with the AM1.5G spectrum, peaks at $33.7\%$ for $E_g = 1.34\ \text{eV}$, with silicon at about $33\%$. Laboratory silicon cells reach $26.8\%$ (Auger recombination and contacts remain); commercial modules are $20$–$23\%$. Exceeding the limit needs tandem junctions or concentration.

### Temperature dependence

Modules run hot (NOCT about $45\ ^\circ\text{C}$ in the Renewable Energy Lab). Writing the dark saturation current as $I_0 = BT^{\gamma}e^{-E_{g0}/(k_BT)}$ with $\gamma \approx 3$, and taking $n=1$, the open-circuit voltage is $V_{oc} = E_{g0}/q - (k_BT/q)\ln(BT^\gamma/J_{sc})$. Differentiating, with $J_{sc}$ nearly constant,

$$\frac{dV_{oc}}{dT} = -\frac{E_{g0}/q - V_{oc} + \gamma k_BT/q}{T}.$$

With $E_{g0}/q = 1.2\ \text{V}$, $V_{oc} = 0.671\ \text{V}$ and $T = 300\ \text{K}$ this is $-2.0\ \text{mV K}^{-1}$, or $-0.30\%\ \text{K}^{-1}$ relative. Current rises only slightly ($+0.05\%\ \text{K}^{-1}$), so the power coefficient is $\gamma_P \approx -0.35\%\ \text{K}^{-1}$ for modern silicon modules: a cell $30\ \text{K}$ above STC loses about $10\%$ of its power. The cell temperature follows from the NOCT definition, $T_c = T_a + \dfrac{\text{NOCT}-20}{800}\,G$ with $G$ in $\text{W m}^{-2}$.

### Arrays, bypass diodes and MPPT

Cells in **series** share a current and add voltages; in **parallel** they share a voltage and add currents. A module of $72$ series cells has $V_{oc} \approx 72 \times 0.69 = 49.6\ \text{V}$ and $V_{mp} \approx 41.7\ \text{V}$, and strings of modules are paralleled for current. The weakest cell limits a series string, so a shaded cell would dissipate the power of all its neighbours; **bypass diodes** across each sub-string of $18$–$24$ cells carry the current around it, at the cost of several local power maxima.

The maximum power point moves with irradiance (mainly in current) and temperature (mainly in voltage), so a fixed load seldom sits on it. A DC–DC converter between array and load fixes this. For an ideal buck converter with duty cycle $D$, $V_{out} = DV_{in}$ and $I_{in} = DI_{out}$, so the array sees the resistance

$$R_{in} = \frac{V_{in}}{I_{in}} = \frac{R_L}{D^2}.$$

The **MPPT** controller varies $D$ so that $R_{in} = V_m/I_m$. The common perturb-and-observe algorithm steps the voltage, measures whether power rose, and keeps stepping in the same direction if it did; it oscillates by one step around the peak. MPPT gains $10$–$30\%$ over a fixed connection and is built into the inverters of Lesson m3-l2.

## Key Ideas

- **Illuminated diode**: $I = I_L - I_0(e^{V/nV_T}-1)$, with $I_{sc} = I_L \propto G$ and $V_{oc} = nV_T\ln(I_L/I_0+1)$ rising logarithmically with $G$.
- **Maximum power**: $e^{v_m}(1+v_m) = I_L/I_0+1$; $FF = V_mI_m/(V_{oc}I_{sc})$, about $0.84$ for an ideal silicon cell and lower with $R_s$ or leaky shunts.
- **Shockley–Queisser**: sub-gap transmission, thermalisation and radiative recombination limit a single junction to $33.7\%$ at $1.34\ \text{eV}$; silicon is near $33\%$.
- **Temperature**: $dV_{oc}/dT \approx -2\ \text{mV K}^{-1}$ per cell; modules lose about $0.35\%$ of power per kelvin above $25\ ^\circ\text{C}$.
- **Arrays**: series adds voltage, parallel adds current; bypass diodes limit shading loss.
- **MPPT**: a converter sets $R_{in} = R_L/D^2$ and perturb-and-observe steers it to the peak.

## Worked Examples

### Example 1 — I–V parameters of a silicon cell

A $245\ \text{cm}^2$ cell has photocurrent density $38\ \text{mA cm}^{-2}$ and dark saturation current density $2\times10^{-13}\ \text{A cm}^{-2}$ at $300\ \text{K}$ ($n=1$). Find $I_{sc}$, $V_{oc}$, the maximum power point, $FF$ and the efficiency at $1000\ \text{W m}^{-2}$.

**Solution.** $I_{sc} = 0.038 \times 245 = 9.31\ \text{A}$ and $I_0 = 4.9\times10^{-11}\ \text{A}$, so $I_L/I_0 = 1.90\times10^{11}$ and

$$V_{oc} = 0.02585\ln(1.90\times10^{11}) = 0.02585 \times 25.97 = 0.671\ \text{V}.$$

Solving $e^{v}(1+v) = 1.90\times10^{11}$ by Newton iteration gives $v_m = 22.80$, so $V_m = 0.589\ \text{V}$ and $I_m = 9.31 - 4.9\times10^{-11}(e^{22.80}-1) = 8.92\ \text{A}$. Then $P_m = 5.26\ \text{W}$ and

$$FF = \frac{5.26}{0.671 \times 9.31} = 0.84, \qquad \eta = \frac{5.26}{1000 \times 0.0245} = 21.5\%.$$

This agrees with the empirical formula ($0.841$). A real cell with $R_s = 5\ \text{m}\Omega$ loses a factor $(1 - 0.005\times9.31/0.671) = 0.93$, giving $\eta \approx 20\%$.

### Example 2 — Module power at operating temperature

A $400\ \text{W}_p$ module with $\gamma_P = -0.35\%\ \text{K}^{-1}$ and NOCT $45\ ^\circ\text{C}$ operates at $G = 900\ \text{W m}^{-2}$ on a $30\ ^\circ\text{C}$ afternoon in Bengaluru. Estimate its output.

**Solution.** The cell temperature is $T_c = 30 + \tfrac{45-20}{800}\times900 = 58.1\ ^\circ\text{C}$, which is $33.1\ \text{K}$ above STC. The temperature factor is $1 - 0.0035 \times 33.1 = 0.884$. Power scales with irradiance to first order, so

$$P = 400 \times 0.884 \times \frac{900}{1000} = 318\ \text{W}.$$

The module delivers only $80\%$ of its label rating, one reason performance ratios are $0.75$–$0.8$.

### Example 3 — Sizing a string

A module has $V_{oc} = 49.6\ \text{V}$ and $V_{mp} = 41.7\ \text{V}$ at STC, $\beta_{V_{oc}} = -0.27\%\ \text{K}^{-1}$ and $\beta_{V_{mp}} = -0.30\%\ \text{K}^{-1}$. The inverter accepts at most $600\ \text{V}$ and tracks the maximum power point between $150$ and $550\ \text{V}$. Bengaluru's coldest cell temperature is $12\ ^\circ\text{C}$ and the hottest $65\ ^\circ\text{C}$. Find the allowed number of modules per string.

**Solution.** Cold cells raise the voltage: $V_{oc}(12\ ^\circ\text{C}) = 49.6\,[1 + 0.0027\times13] = 51.3\ \text{V}$, so $N \le 600/51.3 = 11.7$, i.e. $N_{max} = 11$ ($565\ \text{V}$). Hot cells lower it: $V_{mp}(65\ ^\circ\text{C}) = 41.7\,[1 - 0.0030\times40] = 36.7\ \text{V}$, so $N \ge 150/36.7 = 4.09$, i.e. $N_{min} = 5$. Any string of $5$ to $11$ modules is acceptable; at STC $11 \times 41.7 = 459\ \text{V} < 550\ \text{V}$. A string of $8$ gives $334\ \text{V}$ and $3.2\ \text{kW}_p$.

## Common Misconceptions

- **"A higher irradiance gives proportionally more voltage."** The current is proportional to irradiance; the voltage rises only logarithmically (about $60\ \text{mV}$ per tenfold increase).
- **"Better engineering will remove the Shockley–Queisser limit."** It follows from thermodynamics and a single band gap; only multijunction or concentrating designs can exceed it.
- **"Hot, bright days are best for PV."** Efficiency falls with temperature; at equal irradiance a cool cell yields more.
- **"Fill factor is a material constant."** It depends on $R_s$, $R_{sh}$ and recombination, and falls at low irradiance.
- **"A bypass diode removes shading loss."** It sacrifices only one sub-string, but that power is still lost and multiple maxima can confuse simple trackers.

## Connections

- The p-n junction, depletion field and diode law are the physics of Solid State Physics (Lesson m3-l3) and Basic Electronics (Lesson m2-l1); this lesson adds the photocurrent term.
- The photon counting used in $\eta_u$ and $I_L$ is the photoelectric picture of Introduction to Quantum Mechanics (Lesson m1-l2), and the blackbody spectrum is that of Lesson m1-l1 of the same course.
- The Renewable Energy Lab (renewable-energy-lab, Lessons m1-l1 to m1-l3) measures $V_{oc}$, $I_{sc}$, $FF$, quantum efficiency and temperature coefficients; compare with Examples 1 and 2.
- Detailed balance between absorption and emission is the equilibrium reasoning of blackbody radiation (Introduction to Quantum Mechanics, Lesson m1-l1) and of Thermal Physics and Statistical Mechanics (Lesson m3-l1); the same absorption–emission balance governs radiative equilibrium in stellar atmospheres in the Astrophysics minor.
- The module parameters here feed the system sizing, inverter selection and cost model of Lessons m3-l2 and m3-l3.

## Quick Check

1. Write the illuminated diode equation and derive $V_{oc}$ from it.
2. By how many millivolts does $V_{oc}$ change when irradiance falls from $1000$ to $200\ \text{W m}^{-2}$ for $n=1.2$ at $300\ \text{K}$?
3. Name the three Shockley–Queisser losses and say which dominates for a cell with $E_g = 0.7\ \text{eV}$.
4. A module rated $350\ \text{W}_p$ with $\gamma_P = -0.38\%\ \text{K}^{-1}$ has $T_c = 55\ ^\circ\text{C}$ at $G = 1000\ \text{W m}^{-2}$. Find its power.
5. A buck-converter MPPT feeds a $2\ \Omega$ load from an array with $V_m = 36\ \text{V}$, $I_m = 8\ \text{A}$. Find the duty cycle that matches the load to the array.

## Takeaway

- A solar cell is a diode with a photocurrent source: $I = I_L - I_0(e^{V/nV_T}-1)$, giving $I_{sc} = I_L$ and a logarithmic $V_{oc}$.
- The fill factor and efficiency follow from the maximum power point; an ideal silicon cell has $FF \approx 0.84$ and $\eta \approx 21\%$.
- Sub-gap loss, thermalisation and radiative recombination cap a single junction near $33\%$; silicon modules reach $20$–$23\%$.
- Voltage falls about $2\ \text{mV K}^{-1}$ per cell, so hot modules lose roughly $0.35\%$ of power per kelvin.
- Arrays wire cells in series and parallel with bypass diodes, and MPPT keeps the operating point at the knee of the curve.
