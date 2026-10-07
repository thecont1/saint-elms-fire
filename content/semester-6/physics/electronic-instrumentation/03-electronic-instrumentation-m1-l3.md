***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-6
semesterName: Semester 6
subjectId: physics
subjectName: Physics
courseId: electronic-instrumentation
courseName: Electronic Instrumentation (Physics Option B)
moduleId: electronic-instrumentation-module-1
moduleName: Measurement Fundamentals and Sensors
lessonId: electronic-instrumentation-m1-l3
lessonName: Strain, Displacement, Optical and Magnetic Sensors
lessonNumber: 3
moduleNumber: 1
semesterNumber: 6
difficulty: intermediate
estimatedStudyMinutes: 55
releaseOrder: 3
prerequisites:
  - electronic-instrumentation-m1-l2
  - electricity-and-magnetism-m3-l3
  - solid-state-physics-m3-l3
learningObjectives:
  - Derive the gauge factor $GF = 1 + 2\nu + (\Delta\rho/\rho)/\varepsilon$ and compare metal-foil and semiconductor strain gauges.
  - Explain the operation of the LVDT and of single-ended and differential capacitive displacement sensors, including their linearity.
  - Calculate the responsivity of a photodiode, the output of a transimpedance amplifier and the gain of a photomultiplier tube.
  - Use the Hall voltage $V_H = IB/(nqt)$ to find the sensitivity of a Hall-effect magnetic sensor.
concepts:
  - Gauge factor
  - Piezoresistance
  - LVDT
  - Differential capacitive sensor
  - Photodiode responsivity
  - Photomultiplier gain
  - Hall-effect sensor
tags:
  - physics
  - electronic-instrumentation
  - strain-gauge
  - optical-sensors
sourceType: authored-courseware
status: in-review
assessmentHints:
  - conceptual
  - derivation
  - problem-solving
  - computational
***

# Strain, Displacement, Optical and Magnetic Sensors

## Overview

Lesson m1-l2 treated temperature sensors. Force, pressure, position, light and magnetic field reach the electronics through four further mechanisms. The **strain gauge** converts a fractional length change into a fractional resistance change and, on a cantilever or diaphragm, measures force and pressure. The **LVDT** and the **capacitive sensor** convert displacement into a ratio of inductances or capacitances. The **photodiode** and the **photomultiplier tube** (PMT) convert photons into current. The **Hall sensor** converts magnetic flux density into a voltage. This lesson derives the sensitivity of each. The useful signal is often only a few parts in $10^{4}$ of the quantity modulated, which is why Module 2 turns to bridges and amplifiers.

## Learning Path

- **What you should already know**: sensitivity, linearity and uncertainty (Lesson m1-l1); resistive sensing and self-heating (Lesson m1-l2); Faraday's law of induction (Electricity and Magnetism, Lesson m3-l3); carriers in semiconductors (Solid State Physics, Lesson m3-l3).
- **What this lesson adds**: the gauge factor and piezoresistance; the LVDT and capacitive sensors; photodiode responsivity, the transimpedance amplifier and PMT gain; the Hall sensor.
- **What later lessons this will unlock**: the Wheatstone bridge that reads small $\Delta R/R$ (Lesson m2-l1); the instrumentation amplifier (Lesson m2-l2); phase-sensitive detection (Lesson m2-l3); shot noise (Lesson m3-l2).

## Core Explanation

### Strain gauges and the gauge factor

A conductor of resistivity $\rho$, length $L$ and cross-section $A$ has $R = \rho L/A$. Differentiating $\ln R$,

$$\frac{dR}{R} = \frac{d\rho}{\rho} + \frac{dL}{L} - \frac{dA}{A}.$$

Under an axial **strain** $\varepsilon = dL/L$ the transverse dimensions shrink by $\nu\varepsilon$, where $\nu$ is Poisson's ratio, so $dA/A = -2\nu\varepsilon$ and

$$\frac{\Delta R}{R} = (1 + 2\nu)\,\varepsilon + \frac{\Delta\rho}{\rho}.$$

The **gauge factor** is the sensitivity per unit strain,

$$GF = \frac{\Delta R/R}{\varepsilon} = 1 + 2\nu + \frac{\Delta\rho/\rho}{\varepsilon}.$$

The first two terms are geometric and give $1.6$ for $\nu = 0.3$. In constantan foil the resistivity term adds about $0.5$, so $GF \approx 2.1$, the standard metal-foil gauge: a serpentine grid etched in foil and bonded to the specimen, with nominal resistance $120$, $350$ or $1000\,\Omega$. Strains are quoted in microstrain ($\mu\varepsilon = 10^{-6}$); typical working values are $10$ to $1000\,\mu\varepsilon$.

In a semiconductor, strain changes the band structure and the carrier mobility, so $\Delta\rho/\rho = \pi_l E\,\varepsilon$ is large and dominates the geometry. This is **piezoresistance**, with $\pi_l$ the longitudinal piezoresistive coefficient and $E$ Young's modulus. For p-type silicon $\pi_l \approx 7 \times 10^{-10}\,\text{Pa}^{-1}$ and $E \approx 170$ GPa, so $\pi_l E \approx 120$ and $GF \approx 120$, about sixty times the metal gauge. The price is strong temperature dependence, non-linearity and brittleness; silicon gauges are diffused into micromachined diaphragms for pressure sensors.

The gauge responds to temperature as well as strain. A temperature coefficient of resistance of $10\,\text{ppm/K}$ gives $\Delta R/R = 10^{-5}$ per kelvin, an **apparent strain** of $10^{-5}/2.1 = 4.8\,\mu\varepsilon$ per kelvin, comparable with the signal. The remedy, a dummy gauge in the adjacent arm of the bridge, is the subject of Lesson m2-l1.

To measure force, the gauge is bonded to a flexure. For a cantilever of width $b$ and thickness $h$ loaded by a force $F$ at distance $L$ from the gauge, the bending stress $\sigma = Mc/I$ with $M = FL$, $c = h/2$ and $I = bh^3/12$ gives a surface strain

$$\varepsilon = \frac{6FL}{E\,b\,h^{2}}.$$

### The LVDT

The **linear variable differential transformer** has a primary coil driven at an audio frequency (typically $1$ to $10$ kHz) and two identical secondary coils wound in series opposition on either side of it. A ferromagnetic core attached to the moving part changes the coupling. With the core centred, the two secondary EMFs cancel. If the core moves by $x$, the mutual inductances become $M_A = M_0 + k'x$ and $M_B = M_0 - k'x$. By Faraday's law, a primary current of amplitude $I_0$ at angular frequency $\omega$ induces

$$V_A - V_B = \omega\,(M_A - M_B)\,I_0 = 2\omega k' I_0\,x,$$

proportional to displacement and changing phase by $180^\circ$ as $x$ changes sign. The sign is recovered by the phase-sensitive detector of Lesson m2-l3. Because the core never touches the coils, an LVDT has essentially unlimited life and sub-micrometre resolution; a typical sensitivity is $80\,\text{mV/V/mm}$, millivolts of output per volt of excitation per millimetre, linear over most of its range.

### Capacitive displacement sensors

Two parallel plates of area $A$ separated by a gap $d$ have capacitance $C = \varepsilon_0 \varepsilon_r A/d$. As a gap sensor the response is non-linear: $dC/dd = -C/d$. The nonlinearity is removed by the **differential** arrangement, where a moving centre plate lies between two fixed plates, at gaps $d_0 - x$ and $d_0 + x$:

$$C_1 = \frac{\varepsilon_0 A}{d_0 - x},\qquad C_2 = \frac{\varepsilon_0 A}{d_0 + x},\qquad \frac{C_1 - C_2}{C_1 + C_2} = \frac{(d_0 + x) - (d_0 - x)}{(d_0 + x) + (d_0 - x)} = \frac{x}{d_0}.$$

The ratio is *exactly* linear in $x$. The capacitances are compared in a bridge or an AC divider (Lesson m2-l1), and the ratiometric form cancels changes of $\varepsilon_0\varepsilon_r$ and $A$ with humidity or temperature. Capacitive sensors give picometre resolution, but their picofarad signals are vulnerable to cable capacitance and need shielding (Lesson m2-l3).

### Photodiodes, transimpedance amplifiers and the PMT

A reverse-biased **photodiode** absorbs a photon of energy $hc/\lambda$ and, with quantum efficiency $\eta$, produces one electron-hole pair. The photocurrent is $I = \eta q\,\Phi$ for a photon rate $\Phi = P\lambda/(hc)$, so the **responsivity** is

$$\mathcal{R}_\lambda = \frac{I}{P} = \frac{\eta q \lambda}{hc} = \eta\,\frac{\lambda\,[\mu\text{m}]}{1.2398}\ \text{A/W}.$$

The current is linear in power over many decades. It is read by a **transimpedance amplifier**, an op-amp with feedback resistor $R_f$ from output to inverting input and the diode between the inputs, with output $V_{\text{out}} = -I R_f$. The inverting input is a virtual ground, so the diode operates at fixed bias.

For faint light the **photomultiplier tube** multiplies the photoelectron by secondary emission. Each of $N$ dynodes emits $\delta$ electrons per incident electron, so the gain is

$$G = \delta^{N}.$$

Typically $\delta \approx 4$ and $N = 10$ to $12$, so $G \sim 10^6$ to $10^7$. A single photoelectron becomes a charge pulse of $Ge$ lasting a few nanoseconds, which can be counted individually. The PMT needs a supply of about $1$ kV and must never be exposed to room light while powered.

### Hall-effect sensors

A current $I$ through a plate of thickness $t$ in a field $B$ perpendicular to the plate deflects the carriers by the Lorentz force; sideways charge accumulates until the electric field balances the magnetic force, $qE_H = qvB$. With drift velocity $v = I/(nqwt)$ for carrier density $n$ and plate width $w$, the Hall voltage across the width is

$$V_H = E_H\,w = vBw = \frac{IB}{nqt}.$$

Sensitivity $1/(nqt)$ grows as carrier density and thickness fall, so Hall sensors use thin semiconductor layers, not metals. For $n = 10^{22}\,\text{m}^{-3}$, $t = 20\,\mu$m, $I = 5$ mA and $B = 0.1$ T, $V_H = 15.6$ mV, a sensitivity of $156$ mV/T. The output is linear in $B$, has the sign of $B$ and responds from DC, which coil sensors cannot. Contact-misalignment offset and its drift are the main errors.

The code plots the cantilever response of Example 1; the line shows resistance rising linearly with force.

```python
import numpy as np, matplotlib.pyplot as plt
F = np.linspace(0, 10, 50)                      # N
eps = 6 * F * 0.25 / (200e9 * 0.025 * 0.003**2)  # cantilever surface strain
plt.plot(F, 350 * (1 + 2.1 * eps)); plt.xlabel("F (N)"); plt.ylabel("R (ohm)"); plt.show()
```

## Key Ideas

- **Gauge factor**: $GF = 1 + 2\nu + (\Delta\rho/\rho)/\varepsilon$; about $2.1$ for metal foil and about $120$ for p-type silicon through piezoresistance.
- **LVDT**: $V_A - V_B \propto x$ with a $180^\circ$ phase flip; no contact between core and coils.
- **Differential capacitive sensing** gives $(C_1 - C_2)/(C_1 + C_2) = x/d_0$ exactly.
- **Photodiode responsivity** $\mathcal{R} = \eta\lambda[\mu\text{m}]/1.24$ A/W; **PMT gain** $\delta^N$.
- **Hall voltage** $V_H = IB/(nqt)$, linear in $B$ and sensitive to DC fields.

## Worked Examples

### Example 1 — Force sensing with a cantilever strain gauge

A steel cantilever ($E = 200$ GPa) of width $b = 25$ mm and thickness $h = 3$ mm carries a foil gauge ($R = 350\,\Omega$, $GF = 2.10$) at $L = 0.25$ m from the point of loading. A force $F = 5.0$ N is applied. Find the strain, $\Delta R$ and the apparent strain from a $10$ K temperature rise at $10$ ppm/K.

**Solution.** The surface strain is

$$\varepsilon = \frac{6 \times 5.0 \times 0.25}{200 \times 10^{9} \times 0.025 \times (3 \times 10^{-3})^2} = \frac{7.5}{4.5 \times 10^{4}} = 1.67 \times 10^{-4}.$$

That is $167\,\mu\varepsilon$. Then $\Delta R/R = 2.10 \times 1.667 \times 10^{-4} = 3.5 \times 10^{-4}$ and $\Delta R = 0.1225\,\Omega$. A $10$ K rise at $10$ ppm/K gives $\Delta R/R = 10^{-4}$, an apparent strain of $48\,\mu\varepsilon$, which is $29\%$ of the signal. Compensation is therefore essential.

### Example 2 — Differential capacitive gap sensor

Plates of area $1.00\ \text{cm}^2$ are mounted so that the nominal gap on each side of the centre plate is $d_0 = 0.500$ mm. Find $C_0$, and the capacitances and the ratio when the centre plate moves by $x = 20\,\mu$m.

**Solution.** The rest capacitance is

$$C_0 = \frac{8.854 \times 10^{-12} \times 10^{-4}}{5.00 \times 10^{-4}} = 1.771\ \text{pF}.$$

With the gaps $0.480$ mm and $0.520$ mm, $C_1 = 1.771 \times 0.500/0.480 = 1.845$ pF and $C_2 = 1.771 \times 0.500/0.520 = 1.703$ pF. The difference is $0.1419$ pF and the sum $3.547$ pF, so the ratio is $0.0400 = x/d_0 = 20/500$. A single-ended sensor would change by only $0.074$ pF; cable capacitance, typically $100$ pF per metre, would swamp either signal unless shielded.

### Example 3 — Photodiode with transimpedance amplifier

A silicon photodiode with $\eta = 0.80$ receives $P = 10.0\,\mu$W at $\lambda = 650$ nm. Find the responsivity, the photocurrent and the output of a transimpedance amplifier with $R_f = 470\,\text{k}\Omega$. Then find the gain and anode pulse of a ten-dynode PMT ($\delta = 4$).

**Solution.** The responsivity is $0.80 \times 0.650/1.2398 = 0.419$ A/W. The photocurrent is $0.419 \times 10.0\,\mu\text{W} = 4.19\,\mu$A, so $V_{\text{out}} = -4.19 \times 10^{-6} \times 4.7 \times 10^{5} = -1.97$ V, comfortably inside a $\pm 5$ V supply. For the PMT, $G = 4^{10} = 1.05 \times 10^{6}$. One photoelectron produces $Ge = 1.05 \times 10^{6} \times 1.602 \times 10^{-19} = 1.68 \times 10^{-13}$ C; over $5$ ns this is $34\,\mu$A, a $1.7$ mV pulse across $50\,\Omega$, large enough to count.

## Common Misconceptions

- **"Gauge factor measures how much the gauge stretches."** $GF$ relates the fractional change of resistance to strain. The gauge itself stretches by exactly the strain of the specimen, and nothing more.
- **"Semiconductor gauges are strictly better because $GF$ is sixty times higher."** The gain is offset by temperature dependence, non-linearity and fragility.
- **"A capacitive sensor measures the plate distance linearly."** Only the differential ratio is linear; $C$ alone varies as $1/d$.
- **"A PMT is always better than a photodiode."** The PMT wins for faint light; in bright light the photodiode is linear, compact and needs no high voltage.
- **"The Hall voltage is largest in a metal because it has the most carriers."** $V_H \propto 1/n$, so the large carrier density of a metal gives a tiny voltage; semiconductors are used.

## Connections

- The piezoresistive coefficient is a band-structure effect (Solid State Physics, Lessons m3-l2 and m3-l3); the same silicon technology underlies MEMS accelerometers.
- The Hall effect is the Lorentz force of Electricity and Magnetism (Lesson m3-l1) applied to a conductor, and the Solid State Physics Lab (Hall Effect, Carrier Density, and Mobility) uses the measured $V_H$ to extract $n$ and the mobility.
- The LVDT uses Faraday's law (Electricity and Magnetism, Lesson m3-l3) and its demodulation uses the synchronous detector of Communication Electronics (Lesson m2-l1).
- PMTs and photodiodes are the front end of astronomical photometers; the Electronic Instrumentation Lab (Wheatstone Bridge and Strain Gauge Measurement) builds on the strain gauge introduced here.

## Quick Check

1. Derive $GF = 1 + 2\nu + (\Delta\rho/\rho)/\varepsilon$ and explain why a metal gauge has $GF \approx 2$ but a silicon one about $120$.
2. A $120\,\Omega$ gauge with $GF = 2.0$ is strained by $800\,\mu\varepsilon$. Find $\Delta R$.
3. Show that for a differential capacitive sensor $(C_1 - C_2)/(C_1 + C_2) = x/d_0$.
4. Find the responsivity of a photodiode with $\eta = 0.65$ at $850$ nm, and the transimpedance needed for $2.0$ V output from $5.0\,\mu$W.
5. A Hall plate has $n = 5 \times 10^{21}\,\text{m}^{-3}$ and $t = 10\,\mu$m. Find $V_H$ for $I = 2$ mA and $B = 50$ mT.

## Takeaway

- A strain gauge converts strain to a fractional resistance change $GF\,\varepsilon$, with $GF \approx 2$ (foil) or $\approx 120$ (silicon).
- Temperature produces an apparent strain comparable to the signal and must be compensated.
- The LVDT and differential capacitive sensor turn displacement into a ratio, which is linear and robust.
- Photodiodes give a current $\mathcal{R}P$, and a PMT multiplies a single photoelectron by $\delta^N$.
- A Hall sensor gives $V_H = IB/(nqt)$, a signal linear in $B$ down to DC.
