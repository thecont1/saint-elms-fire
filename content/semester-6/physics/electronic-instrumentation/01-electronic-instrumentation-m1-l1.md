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
lessonId: electronic-instrumentation-m1-l1
lessonName: Measurement Characteristics, Errors and Uncertainty Propagation
lessonNumber: 1
moduleNumber: 1
semesterNumber: 6
difficulty: foundation
estimatedStudyMinutes: 55
releaseOrder: 1
prerequisites:
  - basic-electronics-m2-l3
  - electricity-and-magnetism-m2-l3
  - numerical-methods-m2-l1
learningObjectives:
  - Define and distinguish the static characteristics of a measurement system: accuracy, precision, resolution, sensitivity, linearity and hysteresis.
  - Derive the first-order response of a sensor to a step input and relate the time constant $\tau$ to the response time and bandwidth.
  - Classify errors as systematic or random and propagate uncertainties through a function $f(x_1, \ldots, x_n)$ using the quadrature formula.
  - Express a complete measurement result as value, combined uncertainty and coverage factor.
concepts:
  - Accuracy and precision
  - Resolution and sensitivity
  - Linearity and hysteresis
  - First-order dynamic response
  - Systematic and random errors
  - Uncertainty propagation
  - Combined standard uncertainty
tags:
  - physics
  - electronic-instrumentation
  - measurement-characteristics
  - uncertainty
sourceType: authored-courseware
status: in-review
assessmentHints:
  - conceptual
  - derivation
  - problem-solving
  - computational
***

# Measurement Characteristics, Errors and Uncertainty Propagation

## Overview

Every electronic instrument, from a bench multimeter to a satellite-borne magnetometer, is a chain that converts a physical quantity (the **measurand**) into a number. The quality of that number is described by a small vocabulary defined here: accuracy, precision, resolution, sensitivity, linearity, hysteresis and response time. The dynamic behaviour of a sensor is modelled as a first-order system with one time constant, which gives "response time" a quantitative meaning and links it to bandwidth. The lesson then treats systematic and random error and develops the propagation-of-uncertainty formula. These ideas underpin the course: the sensors of Module 1 are characterised by them, the circuits of Module 2 preserve them, and Module 3 extends them to calibration and noise.

## Learning Path

- **What you should already know**: the use of a multimeter and oscilloscope (Basic Electronics, Lesson m2-l3); the RC time constant (Electricity and Magnetism, Lesson m2-l3); truncation and round-off error (Numerical Methods, Lesson m2-l1).
- **What this lesson adds**: the static characteristics of an instrument; a first-order model of dynamic response; systematic versus random error; the quadrature rule for propagating uncertainties.
- **What later lessons this will unlock**: sensor specifications (Lessons m1-l2 and m1-l3); bridge sensitivity (Lesson m2-l1); ADC resolution (Lesson m3-l1); calibration and traceability (Lesson m3-l3).

## Core Explanation

### The measurement chain

An electronic measurement system has four stages. The **sensor** (or transducer) converts the measurand into an electrical quantity such as a voltage, a resistance or a charge. The **signal-conditioning** stage amplifies, filters and linearises it. The **conversion** stage digitises it with an analogue-to-digital converter (ADC). The **processing and display** stage computes, stores and presents the result. Each stage contributes its own errors and dynamics.

### Static characteristics

**Range** is the interval of measurand values the instrument can handle; **span** is the difference between its limits.

**Accuracy** is the closeness of a measured value to the true value. It is specified as a maximum error, either absolute ($\pm 0.5\,^\circ$C), as a percentage of reading, or as a percentage of full-scale (FS) output. A specification of "$\pm 0.1\%$ of reading $\pm 2$ counts" is typical of a digital multimeter; the two terms represent gain error and offset error respectively. Accuracy is a statement about systematic error.

**Precision** (or repeatability) is the closeness of repeated measurements to one another under unchanged conditions. It is a statement about random error, quantified by the standard deviation $\sigma$ of the readings. An instrument may be precise but inaccurate (a tight cluster displaced from the true value) or accurate but imprecise.

**Resolution** is the smallest change in the measurand that produces a detectable change in the output. For a digital instrument it is one count or one least-significant bit (LSB); a $3\tfrac12$-digit meter on its 2 V range resolves 1 mV. Resolution is not accuracy: a 6-digit display on an instrument with a 1% gain error only resolves the error.

**Sensitivity** is the slope of the input-output characteristic,

$$S = \frac{dV_{\text{out}}}{dx},$$

with units such as mV/K for a thermocouple. High sensitivity makes the signal large compared with later noise, but must be traded against range.

**Linearity** describes how closely the characteristic follows a straight line. The **non-linearity** is the maximum deviation of the actual curve from the best-fit (or end-point) straight line, expressed as a percentage of full scale:

$$\text{non-linearity} = \frac{\max |V_{\text{actual}}(x) - V_{\text{line}}(x)|}{V_{\text{FS}}} \times 100\%.$$

A linear sensor needs two calibration points; a non-linear one needs a curve or software correction (Lesson m3-l3).

**Hysteresis** is the difference in output for the same input depending on whether it was approached from below or from above; it arises from friction, magnetic domain memory and elastic after-effect.

**Drift** is a slow change in output with no change in measurand, due to temperature or ageing; zero drift shifts the curve and span drift changes its slope.

### Dynamic characteristics: the first-order model

Many sensors, notably temperature sensors, store energy in one reservoir and exchange it through one resistance. A thermometer of heat capacity $C$ coupled to its surroundings by a thermal conductance $G$ obeys

$$C \frac{dT_s}{dt} = G\,(T - T_s),$$

where $T$ is the true temperature and $T_s$ the sensor temperature. Writing $\tau = C/G$ gives the **first-order equation**

$$\tau \frac{dT_s}{dt} + T_s = T.$$

For a step from $T_0$ to $T_1$ at $t = 0$ the solution is

$$T_s(t) = T_1 - (T_1 - T_0)\,e^{-t/\tau}.$$

The sensor reaches 63.2% of the step at $t = \tau$, 95% at $3\tau$ and 99.3% at $5\tau$. Data sheets quote the **response time** as the time to reach 90% ($2.3\tau$) or 99% ($4.6\tau$), so check the definition. **Rise time**, from 10% to 90%, is $2.2\tau$.

In the frequency domain the same system has the transfer function

$$H(j\omega) = \frac{1}{1 + j\omega\tau},$$

whose magnitude falls to $1/\sqrt{2}$ at the **cut-off frequency** $f_c = 1/(2\pi\tau)$. A sinusoidal measurand of frequency $f$ is attenuated by $1/\sqrt{1 + (f/f_c)^2}$ and delayed in phase by $\arctan(f/f_c)$; a thermocouple with $\tau = 2$ s cannot follow oscillations faster than about 0.08 Hz, however good its static accuracy. Sensors with two energy stores, such as a spring-mass accelerometer, are **second-order**, with a natural frequency and damping ratio.

The program plots the step response, which passes 63% at $t = \tau$ and flattens after about $5\tau$.

```python
import numpy as np, matplotlib.pyplot as plt
tau, t = 2.0, np.linspace(0, 12, 400)
Ts = 20 + 60 * (1 - np.exp(-t / tau))      # step from 20 to 80 degC
plt.plot(t, Ts); plt.axvline(tau, ls='--'); plt.show()
```

### Systematic and random errors

An **error** is the difference between a measured value and the true value; since the true value is unknown, we work instead with **uncertainty**, an estimate of the spread within which the true value is believed to lie.

**Systematic errors** bias every reading in the same direction. Sources include calibration error, circuit loading (a voltmeter of finite resistance lowers the voltage it measures), thermal EMFs and lead resistance. Averaging does not reduce them; comparison with a better instrument finds them and correction removes them.

**Random errors** scatter readings about a mean; they arise from noise, vibration and fluctuations of the measurand. For $n$ independent readings $x_i$, the best estimate is the mean $\bar{x}$, the spread of a single reading is the sample standard deviation

$$s = \sqrt{\frac{1}{n-1}\sum_{i=1}^{n}(x_i - \bar{x})^2},$$

and the uncertainty of the mean is the **standard error** $s/\sqrt{n}$. Averaging $n$ readings reduces random uncertainty by $\sqrt{n}$ (signal averaging, Lesson m3-l2).

The *Guide to the Expression of Uncertainty in Measurement* (GUM) calls uncertainties evaluated statistically **Type A** and those taken from data sheets or certificates **Type B**; a Type B limit $\pm a$ with a rectangular distribution has standard uncertainty $a/\sqrt{3}$.

### Propagation of uncertainty

Suppose $y = f(x_1, \ldots, x_n)$ is computed from measured quantities with independent standard uncertainties $u(x_i)$. Expanding $f$ to first order, $\delta y = \sum_i (\partial f/\partial x_i)\,\delta x_i$; squaring and averaging, the cross-terms vanish for independent fluctuations, giving the **law of propagation of uncertainty**:

$$u^2(y) = \sum_{i=1}^{n} \left(\frac{\partial f}{\partial x_i}\right)^2 u^2(x_i).$$

Two special cases cover most work. For a sum or difference $y = a x_1 \pm b x_2$, absolute uncertainties add in quadrature: $u(y) = \sqrt{a^2 u^2(x_1) + b^2 u^2(x_2)}$. For a product or quotient of powers $y = k\,x_1^{p} x_2^{q}$, relative uncertainties add in quadrature:

$$\frac{u(y)}{|y|} = \sqrt{p^2\left(\frac{u(x_1)}{x_1}\right)^2 + q^2\left(\frac{u(x_2)}{x_2}\right)^2}.$$

The **combined standard uncertainty** $u_c(y)$ is multiplied by a **coverage factor** $k$ (usually $k = 2$ for approximately 95% confidence) to give the **expanded uncertainty** $U = k\,u_c$, and the result is reported as $y \pm U$ with $k$ stated, rounded to one or two significant figures.

## Key Ideas

- **Accuracy versus precision**: accuracy is closeness to the truth (systematic error); precision is closeness of repeated readings to one another (random error).
- **Resolution is not accuracy**: extra display digits do not improve a measurement whose gain or offset is in error.
- **Sensitivity** $S = dV_{\text{out}}/dx$ is the slope of the characteristic; **non-linearity** and **hysteresis** are departures from a single straight line, quoted as percentages of full scale.
- **First-order response**: exponential approach with 63.2% at $\tau$, 90% at $2.3\tau$, 99% at $4.6\tau$, and bandwidth $f_c = 1/(2\pi\tau)$.
- **Random errors shrink as $1/\sqrt{n}$** on averaging; **systematic errors do not**.
- **Propagation law**: $u^2(y) = \sum (\partial f/\partial x_i)^2 u^2(x_i)$; relative uncertainties add in quadrature for products and quotients.
- **Reporting**: value $\pm$ expanded uncertainty $U = k\,u_c$, with $k$ stated.

## Worked Examples

### Example 1 — Interpreting a multimeter specification

A digital multimeter on its 20 V range has a resolution of 10 mV and an accuracy of $\pm(0.5\%$ of reading $+ 3$ counts). It reads 12.46 V. Find the maximum error, the standard uncertainty and the relative uncertainty.

**Solution.** The gain term is $0.005 \times 12.46 = 0.0623$ V. The offset term is $3 \times 10$ mV $= 0.030$ V. The maximum error is therefore

$$a = 0.0623 + 0.030 = 0.092\,\text{V}.$$

Treating this limit as a rectangular distribution, $u = a/\sqrt{3} = 0.053$ V, so the result is $12.46 \pm 0.05$ V (standard uncertainty), a relative uncertainty of $0.43\%$, five times the resolution.

### Example 2 — Response time of a thermometer

A sheathed thermocouple with $\tau = 4.0$ s is moved suddenly from a bath at $25.0\,^\circ$C into one at $85.0\,^\circ$C. What does it read after 6.0 s, and when is the reading within $0.5\,^\circ$C of the true value?

**Solution.** From the step response,

$$T_s(6.0) = 85.0 - 60.0\,e^{-6.0/4.0} = 85.0 - 60.0 \times 0.2231 = 71.6\,^\circ\text{C}.$$

The reading is within $0.5\,^\circ$C when $60.0\,e^{-t/\tau} = 0.5$, that is

$$t = \tau \ln\frac{60.0}{0.5} = 4.0 \times \ln 120 = 4.0 \times 4.79 = 19.2\,\text{s}.$$

Roughly five time constants are needed.

### Example 3 — Propagating uncertainty in a resistance measurement

A resistance is found from $R = V/I$, with $V = 4.820 \pm 0.012$ V and $I = 23.6 \pm 0.3$ mA (standard uncertainties). Find $R$ and its combined standard and expanded uncertainties.

**Solution.** The value is $R = 4.820/0.0236 = 204.2\,\Omega$. For a quotient, relative uncertainties add in quadrature:

$$\frac{u(R)}{R} = \sqrt{\left(\frac{0.012}{4.820}\right)^2 + \left(\frac{0.3}{23.6}\right)^2} = \sqrt{(2.49 \times 10^{-3})^2 + (1.27 \times 10^{-2})^2} = 1.30 \times 10^{-2}.$$

Hence $u(R) = 0.0130 \times 204.2 = 2.7\,\Omega$ and, with $k = 2$, $U = 5.3\,\Omega$. The result is $R = 204 \pm 5\,\Omega$ ($k = 2$). The current dominates: halving its uncertainty would nearly halve $u(R)$.

## Common Misconceptions

- **"An instrument with more digits is more accurate."** A $6\tfrac12$-digit meter with an expired calibration may be less accurate than a freshly calibrated $4\tfrac12$-digit one.
- **"Taking more readings always improves the result."** Averaging reduces random uncertainty as $1/\sqrt{n}$ but leaves systematic error untouched; once the standard error falls below the systematic uncertainty, further readings are wasted.
- **"The response time is the time constant."** Data sheets quote the time to reach 90%, 95% or 99% of the final value, which is $2.3\tau$, $3\tau$ or $4.6\tau$ respectively.
- **"Uncertainties simply add."** For independent inputs they add in quadrature, which is always smaller than the linear sum. Linear addition bounds perfectly correlated errors.
- **"Hysteresis is just non-linearity."** Non-linearity can be corrected from one curve; hysteresis depends on the direction of approach.

## Connections

- The first-order thermal model is identical in form to the RC circuit of Electricity and Magnetism (Lesson m2-l3), with $\tau = C/G$; the same mathematics describes radioactive decay in Nuclear Physics and Newtonian cooling in Thermal Physics.
- The standard error $s/\sqrt{n}$ is the central-limit theorem in action (Thermal Physics and Statistical Mechanics, Lesson m3-l1).
- Truncation and round-off error in Numerical Methods (Lesson m2-l1) are the computational analogue of systematic and quantisation error.
- In Astrophysics, photometric uncertainty is propagated through the distance modulus in this way, and detector response time limits pulsar timing.
- Every report in the Electronic Instrumentation Lab, beginning with "Sensor Calibration and the Error Budget", applies the vocabulary and propagation law of this lesson.

## Quick Check

1. Distinguish accuracy, precision and resolution, with an example of an instrument that is precise but inaccurate.
2. A pressure sensor has sensitivity 4.0 mV/kPa and non-linearity 0.25% FS on a 0 to 500 kPa range. What is the largest voltage error due to non-linearity?
3. A first-order sensor has $f_c = 0.5$ Hz. Find its time constant and the attenuation of a 2 Hz measurand.
4. Find the area and its standard uncertainty for a rectangle with sides $20.0 \pm 0.1$ cm and $5.00 \pm 0.05$ cm.
5. Why does averaging 100 readings reduce random uncertainty tenfold but leave a calibration offset unchanged?

## Takeaway

- A measurement system is a chain of sensor, conditioning, conversion and processing; its specification combines the characteristics of every stage.
- Static characteristics describe behaviour for a steady measurand; dynamic characteristics describe behaviour for a changing one.
- A first-order sensor responds exponentially with time constant $\tau$ and has bandwidth $f_c = 1/(2\pi\tau)$.
- Systematic errors are removed by calibration; random errors are reduced by averaging as $1/\sqrt{n}$.
- The propagation law converts the uncertainties of measured inputs into the uncertainty of the result and reveals which input dominates.
