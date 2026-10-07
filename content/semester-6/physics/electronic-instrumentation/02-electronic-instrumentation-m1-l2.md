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
lessonId: electronic-instrumentation-m1-l2
lessonName: Temperature Sensors: Thermocouples, RTDs and Thermistors
lessonNumber: 2
moduleNumber: 1
semesterNumber: 6
difficulty: intermediate
estimatedStudyMinutes: 55
releaseOrder: 2
prerequisites:
  - electronic-instrumentation-m1-l1
  - basic-electronics-m1-l2
  - thermal-physics-and-statistical-mechanics-m1-l1
learningObjectives:
  - Explain the Seebeck effect, state the laws of thermoelectric circuits and apply cold-junction compensation to a thermocouple reading.
  - Use the Callendar–Van Dusen equation to convert a platinum RTD resistance to temperature and estimate the error of the linear approximation.
  - Apply the $\beta$ model and the Steinhart–Hart equation to an NTC thermistor and compute its temperature coefficient $\alpha = -\beta/T^2$.
  - Compare the three sensor families by range, sensitivity, linearity, self-heating and lead-resistance error.
concepts:
  - Seebeck effect
  - Cold-junction compensation
  - Platinum resistance thermometer
  - Callendar–Van Dusen equation
  - NTC thermistor beta model
  - Steinhart–Hart equation
  - Self-heating error
tags:
  - physics
  - electronic-instrumentation
  - temperature-sensors
  - thermocouple
sourceType: authored-courseware
status: in-review
assessmentHints:
  - conceptual
  - derivation
  - problem-solving
  - computational
***

# Temperature Sensors: Thermocouples, RTDs and Thermistors

## Overview

Temperature is the most frequently measured physical quantity, and the three electrical sensors that measure it exercise every idea of Lesson m1-l1. The **thermocouple** generates a small voltage through the Seebeck effect, needs no excitation and survives to 1600 °C, but is non-linear, delivers only tens of microvolts per kelvin and requires a known reference junction. The platinum **resistance temperature detector** (RTD) is the most accurate and stable industrial sensor, but its excitation current heats the element it measures. The **thermistor** is a semiconductor whose resistance falls exponentially with temperature; it is ten times more sensitive than an RTD but strongly non-linear. This lesson derives each characteristic and quantifies its errors.

## Learning Path

- **What you should already know**: static and dynamic characteristics and uncertainty propagation (Lesson m1-l1); the temperature dependence of resistance (Basic Electronics, Lesson m1-l2); temperature scales (Thermal Physics and Statistical Mechanics, Lesson m1-l1).
- **What this lesson adds**: the Seebeck coefficient and thermoelectric laws; the Callendar–Van Dusen polynomial; the $\beta$ and Steinhart–Hart models; the error budget of each sensor.
- **What later lessons this will unlock**: strain gauges and other resistive sensors (Lesson m1-l3); the Wheatstone bridge (Lesson m2-l1); the instrumentation amplifier (Lesson m2-l2); linearisation and calibration (Lesson m3-l3).

## Core Explanation

### The Seebeck effect and the thermocouple

When a temperature gradient exists along a conductor, hot electrons diffuse towards the cold end faster than cold electrons diffuse back, and an electric field $\mathbf{E} = S\,\nabla T$ builds up to stop the net flow, where $S$ is the **Seebeck coefficient**, a few µV/K for metals. In a closed loop of one metal the voltage cancels, so a **thermocouple** joins two dissimilar metals A and B at a measuring junction at $T_m$ and a reference junction at $T_r$. The loop EMF is

$$V = \int_{T_r}^{T_m} \left[S_A(T) - S_B(T)\right] dT = \int_{T_r}^{T_m} S_{AB}(T)\, dT,$$

with $S_{AB}$ the **relative Seebeck coefficient**. Three laws follow. **Homogeneous circuits**: a gradient along a homogeneous wire adds no EMF, so only junction temperatures matter. **Intermediate metals**: a third metal adds nothing if both of its junctions are at the same temperature, so isothermal copper terminals are harmless. **Intermediate temperatures**: $V(T_r \to T_m) = V(T_r \to T_0) + V(T_0 \to T_m)$, so tables referenced to $T_0 = 0$ °C serve any reference temperature.

Type K (chromel–alumel, 41 µV/K, to 1260 °C) is the general-purpose choice; J, T and E are base-metal alternatives, and the platinum–rhodium types S and R (6 to 10 µV/K) reach 1600 °C. The output is non-linear: the type K EMF referred to 0 °C is $1.000$ mV at 25 °C, $4.096$ mV at 100 °C and $41.276$ mV at 1000 °C, so instruments store the IEC 60584 reference polynomial or a table.

### Cold-junction compensation

Because the EMF depends on a temperature *difference*, the reference junction must be known. Modern instruments measure $T_r$ with a thermistor at the terminal block, and **cold-junction compensation** (CJC) adds the EMF a junction at $T_r$ would produce relative to 0 °C before the table is consulted:

$$E(T_m) = V_{\text{meas}} + E(T_r).$$

Adding in *voltage* is correct; adding $T_r$ to a temperature read from the table is wrong because the characteristic is non-linear (Example 1). Errors arise if the block is not isothermal or the extension wire has the wrong alloy. The other weakness is low sensitivity: a 10 µV amplifier offset is a 0.25 K error for type K, so the instrumentation amplifier of Lesson m2-l2 is the standard front end. Its strengths are a small fast junction, no self-heating and wide range.

### Resistance temperature detectors and the Callendar–Van Dusen equation

In a pure metal the resistivity rises almost linearly with temperature as phonon scattering increases. A **resistance temperature detector** uses a platinum element. The standard **Pt100** has $R_0 = 100.00\,\Omega$ at 0 °C and a mean coefficient $\alpha = (R_{100} - R_0)/(100\,R_0) = 0.003851\,\text{K}^{-1}$ (IEC 60751). The characteristic is slightly concave and is described by the **Callendar–Van Dusen equation**: for $0 \le T \le 850$ °C,

$$R(T) = R_0\left(1 + A\,T + B\,T^2\right),$$

with an extra term $R_0\,C\,(T - 100)\,T^3$ below 0 °C, where $T$ is in °C and

$$A = 3.9083 \times 10^{-3}\,\text{K}^{-1}, \quad B = -5.775 \times 10^{-7}\,\text{K}^{-2}, \quad C = -4.183 \times 10^{-12}\,\text{K}^{-4}.$$

Thus $R(100) = 138.51\,\Omega$ and $R(200) = 175.86\,\Omega$, whereas the linear formula $R_0(1 + \alpha T)$ gives $177.00\,\Omega$ at 200 °C, an error of about 3 K. Inverting the quadratic for $T \ge 0$,

$$T = \frac{-A + \sqrt{A^2 - 4B\,(1 - R/R_0)}}{2B}.$$

Class A tolerance is $\pm(0.15 + 0.002|T|)$ K and drift is below 0.05 K per year, which is why platinum defines the ITS-90 scale between fixed points and is the calibration reference of Lesson m3-l3.

### Excitation, self-heating and lead resistance

An RTD is excited by a current $I$ and its voltage measured. The dissipation $I^2R$ raises the element above the medium by

$$\Delta T_{\text{sh}} = \frac{I^2 R}{G},$$

where $G$ is the thermal conductance to the surroundings; data sheets quote $1/G$ as the **self-heating coefficient**, about 0.4 K/mW. With 1 mA through a Pt100 at 100 °C the dissipation is $(10^{-3})^2 \times 138.5 = 0.139$ mW and the error about 0.06 K; at 10 mA it is 100 times larger. Excitation is therefore 0.1 to 1 mA, giving only $0.385$ mV/K at 1 mA.

Lead resistance adds directly to the element: in a **two-wire** connection two leads of $0.5\,\Omega$ add $1.0\,\Omega$, which is $1.0/0.385 = 2.6$ K on a Pt100. A **three-wire** connection lets a bridge subtract one lead resistance from the other, cancelling the error if the leads match. A **four-wire (Kelvin)** connection passes the excitation through one pair and senses the voltage with a second pair carrying no current, so lead resistance drops out. These connections are analysed as bridge circuits in Lesson m2-l1.

### Thermistors: the $\beta$ model and the Steinhart–Hart equation

A **thermistor** is a sintered metal-oxide semiconductor. In a **negative temperature coefficient (NTC)** device the carrier density rises exponentially with temperature, so

$$R(T) = R_0 \exp\!\left[\beta\left(\frac{1}{T} - \frac{1}{T_0}\right)\right], \qquad \beta \approx \frac{E_g}{2k_B},$$

with $T$ in kelvin and $T_0 = 298.15$ K by convention. The **material constant** $\beta$ lies between 3000 and 5000 K. Differentiating gives the temperature coefficient

$$\alpha = \frac{1}{R}\frac{dR}{dT} = -\frac{\beta}{T^2},$$

which for $\beta = 3950$ K at 298 K is $-3950/88804 = -0.0445\,\text{K}^{-1}$, that is $-4.45\%$ per kelvin, more than ten times the $+0.385\%$ of platinum, so lead resistance is negligible. The price is non-linearity: a 10 kΩ thermistor is 3.59 kΩ at 50 °C and 33.6 kΩ at 0 °C.

The $\beta$ model holds to about $\pm 1$ K over 50 K because $\beta$ drifts slowly with temperature. The **Steinhart–Hart equation** fits the whole range to a few millikelvins,

$$\frac{1}{T} = A + B\,\ln R + C\,(\ln R)^3,$$

whose constants come from three calibration points by solving a $3 \times 3$ linear system. The function below was fitted to the $\beta = 3950$ K curve, so 3588 Ω returns 50.0 °C.

```python
import math

def steinhart_hart(R, A=1.0223e-3, B=2.5316e-4, C=0.0):
    lnR = math.log(R)
    return 1.0 / (A + B * lnR + C * lnR**3) - 273.15   # degC

for R in (33621.0, 10000.0, 3588.0):
    print(R, round(steinhart_hart(R), 2))
```

## Key Ideas

- **Seebeck effect**: a loop of two metals gives $V = \int_{T_r}^{T_m} S_{AB}\,dT$, so only junction temperatures matter.
- **Cold-junction compensation** adds $E(T_r)$ in voltage, never in temperature.
- **Pt100**: $\alpha = 0.00385\,\text{K}^{-1}$; the **Callendar–Van Dusen equation** $R = R_0(1 + AT + BT^2)$ corrects a curvature worth 3 K at 200 °C.
- **Self-heating** $\Delta T = I^2R/G$ limits RTD excitation to about 1 mA; **lead resistance** of 1 Ω is 2.6 K on a Pt100, removed by 3- or 4-wire connection.
- **NTC thermistor**: $R = R_0\exp[\beta(1/T - 1/T_0)]$, $\alpha = -\beta/T^2 \approx -4.4\%/\text{K}$; the **Steinhart–Hart equation** linearises it.
- **Selection**: range (thermocouple) against accuracy (RTD) against sensitivity (thermistor).

## Worked Examples

### Example 1 — Cold-junction compensation of a type K thermocouple

A type K thermocouple on a meter whose terminals are at 25.0 °C gives 3.500 mV. Table: $E(25) = 1.000$, $E(80) = 3.267$, $E(90) = 3.682$, $E(100) = 4.096$, $E(110) = 4.509$ mV. Find the junction temperature and the error of compensating in temperature.

**Solution.** In voltage, $E(T_m) = 3.500 + 1.000 = 4.500$ mV. Between 100 and 110 °C the slope is $41.3\,\mu$V/K, so

$$T_m = 100 + \frac{4.500 - 4.096}{0.0413} = 109.8\,^\circ\text{C}.$$

The wrong method converts 3.500 mV directly, $80 + (3.500 - 3.267)/0.0415 = 85.6$ °C, and adds 25 °C to get 110.6 °C. The error is only 0.8 K because type K is nearly linear here; for type S it costs several kelvin.

### Example 2 — Pt100 conversion and the linear-approximation error

A four-wire Pt100 reads $175.86\,\Omega$. Find the temperature from the Callendar–Van Dusen equation, compare with the linear estimate, and find the self-heating error for 2.0 mA excitation and 0.4 K/mW.

**Solution.** With $R/R_0 = 1.7586$ the discriminant is $A^2 - 4B(1 - 1.7586) = 1.3522 \times 10^{-5}$, whose root is $3.6773 \times 10^{-3}$, so

$$T = \frac{-3.9083 \times 10^{-3} + 3.6773 \times 10^{-3}}{2 \times (-5.775 \times 10^{-7})} = \frac{-2.310 \times 10^{-4}}{-1.155 \times 10^{-6}} = 200.0\,^\circ\text{C}.$$

The linear estimate $0.7586/0.003851 = 197.0$ °C is 3.0 K low. Self-heating: $P = (2.0 \times 10^{-3})^2 \times 175.86 = 0.703$ mW, so the element reads $0.703 \times 0.4 = 0.28$ K high; at 0.5 mA this falls to 0.018 K.

### Example 3 — Thermistor sensitivity and resolution

An NTC thermistor has $R_0 = 10.00$ kΩ at 25.0 °C and $\beta = 3950$ K, and is read by a meter with $1\,\Omega$ resolution. Find its resistance and $dR/dT$ at 50.0 °C and the temperature resolution at 25 and 50 °C.

**Solution.** With $T = 323.15$ K and $T_0 = 298.15$ K,

$$\frac{1}{T} - \frac{1}{T_0} = 3.0945 \times 10^{-3} - 3.3540 \times 10^{-3} = -2.595 \times 10^{-4}\,\text{K}^{-1},$$

so $R(50\,^\circ\text{C}) = 10.00\,\text{k}\Omega \times e^{-1.025} = 3.588$ kΩ. At 50 °C, $\alpha = -3950/323.15^2 = -0.0378\,\text{K}^{-1}$ and $dR/dT = -0.0378 \times 3588 = -136\,\Omega/\text{K}$; at 25 °C, $dR/dT = -444\,\Omega/\text{K}$. A $1\,\Omega$ resolution is therefore 2.3 mK at 25 °C but 7.4 mK at 50 °C: resolution falls as the thermistor warms.

## Common Misconceptions

- **"The thermocouple EMF is generated at the hot junction."** It is generated along the wires wherever a gradient exists; a corroded wire in a gradient gives a spurious EMF even with perfect junctions.
- **"Copper terminals ruin a thermocouple."** A third metal adds nothing if its two junctions are isothermal; keep the terminal block at the CJC temperature.
- **"A Pt100 is linear, so $T = (R - 100)/0.385$."** This errs by 3 K at 200 °C and 30 K at 500 °C; the quadratic is needed outside 0 to 100 °C.
- **"More excitation current gives a better RTD signal."** Signal rises as $I$ but self-heating as $I^2$; above about 1 mA the heating error dominates.
- **"A thermistor is less accurate than an RTD."** Interchangeable thermistors reach $\pm 0.1$ K between 0 and 70 °C; the RTD wins on range, stability and traceability.

## Connections

- The Seebeck coefficient is a transport property derived in Solid State Physics (Lesson m2-l3); the same physics drives thermoelectric generators and Peltier coolers.
- The linear rise of metallic resistance and the exponential fall of a semiconductor's are the phonon-scattering and intrinsic-carrier results of Solid State Physics (Lessons m2-l3 and m3-l3); $\beta \approx E_g/2k_B$ is a Boltzmann factor.
- The self-heating balance $I^2R = G\,\Delta T$ is the steady state of the first-order thermal model of Lesson m1-l1, with the same conductance $G$ in $\tau = C/G$.
- The Electronic Instrumentation Lab lesson "Sensor Calibration and the Error Budget" calibrates a thermistor and a thermocouple against a Pt100 reference.
- The bolometers of far-infrared and CMB telescopes are thermistors operated near 0.3 K, and RTD chains monitor every cryostat stage.

## Quick Check

1. State the law of intermediate temperatures and explain how it lets 0 °C tables serve a terminal block at 30 °C.
2. A type J thermocouple ($52\,\mu$V/K) is read by an amplifier with $20\,\mu$V of offset. What temperature error results, and what for type S ($8\,\mu$V/K)?
3. A Pt1000 is connected with two leads of $0.8\,\Omega$ each. Find the two-wire temperature error and compare with a Pt100.
4. Compute the resistance of a $\beta = 3435$ K, 10 kΩ thermistor at 0 °C and at 100 °C.
5. Why can RTD excitation be reduced but not eliminated, whereas a thermocouple needs none?

## Takeaway

- A thermocouple converts a temperature difference into an EMF of tens of µV/K; only junction temperatures matter, and cold-junction compensation is done in voltage.
- The platinum RTD follows the Callendar–Van Dusen equation with $\alpha = 0.00385\,\text{K}^{-1}$; it is the most accurate sensor and the calibration reference.
- RTD excitation balances signal against self-heating $I^2R/G$; lead resistance demands three- or four-wire connection.
- The NTC thermistor gives $-4.4\%/\text{K}$ sensitivity but needs the Steinhart–Hart equation beyond a few tens of kelvin.
- Each sensor dictates its own conditioning circuit, the subject of Module 2.
