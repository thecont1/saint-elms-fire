***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-6
semesterName: Semester 6
subjectId: physics
subjectName: Physics
courseId: electronic-instrumentation
courseName: Electronic Instrumentation (Physics Option B)
moduleId: electronic-instrumentation-module-3
moduleName: Digitisation, Noise and Calibration
lessonId: electronic-instrumentation-m3-l3
lessonName: Calibration, Traceability, Uncertainty Budgets and Python Data Acquisition
lessonNumber: 9
moduleNumber: 3
semesterNumber: 6
difficulty: intermediate
estimatedStudyMinutes: 60
releaseOrder: 9
prerequisites:
  - electronic-instrumentation-m3-l2
  - electronic-instrumentation-m1-l1
  - numerical-methods-m3-l1
learningObjectives:
  - Derive the least-squares straight-line fit and the uncertainties of its slope, intercept and predicted values.
  - Explain traceability to the SI and the role of accredited calibration in an uncertainty statement.
  - Build an uncertainty budget following the GUM, combining Type A and Type B components into an expanded uncertainty.
  - Write a Python acquisition script that reads a serial instrument, averages, converts counts to engineering units and applies a calibration.
concepts:
  - Calibration curve
  - Least-squares fit
  - Traceability
  - Type A and Type B uncertainty
  - Uncertainty budget
  - Expanded uncertainty
  - Serial data acquisition
tags:
  - physics
  - electronic-instrumentation
  - calibration
  - uncertainty-budget
sourceType: authored-courseware
status: in-review
assessmentHints:
  - conceptual
  - derivation
  - problem-solving
  - computational
***

# Calibration, Traceability, Uncertainty Budgets and Python Data Acquisition

## Overview

A sensor chain delivers a number in volts or counts. Calibration is the process that turns it into a measurement: known inputs are applied, the outputs recorded and a mathematical relation fitted, so that a later reading can be converted to the measurand with a stated uncertainty. This lesson completes the course by assembling the pieces. It derives the least-squares line, the standard tool of every calibration, and the uncertainties of its parameters. It explains **traceability**, the unbroken chain of comparisons that connects a reading to the SI units, and it organises all the contributions of Lessons m1-l1 to m3-l2, sensor, amplifier, converter, noise and temperature, into an **uncertainty budget** that ends in a statement such as $250.0 \pm 0.2$ kPa ($k = 2$). Finally it shows the short Python programme that acquires the data from a serial instrument, averages it and applies the calibration.

## Learning Path

- **What you should already know**: uncertainty propagation, Type A and Type B evaluation and coverage factors (Lesson m1-l1); averaging and the noise of the chain (Lesson m3-l2); solution of linear systems (Numerical Methods, Lesson m3-l1).
- **What this lesson adds**: the normal equations and fit uncertainties; traceability and reference standards; the budget table; serial data acquisition in Python.
- **What later lessons this will unlock**: the Electronic Instrumentation Lab lessons "Sensor Calibration and the Error Budget" and the capstone "Complete Measurement Chain with Integrated Error Budget".

## Core Explanation

### Calibration and the least-squares line

A **static calibration** applies a set of known values $x_i$ of the measurand, spanning the working range and approached both upward and downward to expose hysteresis, and records the outputs $y_i$. For a linear sensor, $y = a + bx$ with offset $a$ and sensitivity $b$. Minimising the sum of squared residuals

$$S = \sum_{i=1}^{n}(y_i - a - bx_i)^2$$

by setting $\partial S/\partial a = 0$ and $\partial S/\partial b = 0$ gives the **normal equations**

$$na + b\sum x_i = \sum y_i,\qquad a\sum x_i + b\sum x_i^2 = \sum x_iy_i.$$

Solving them, with $\bar{x}$ and $\bar{y}$ the means, $S_{xx} = \sum(x_i - \bar{x})^2$ and $S_{xy} = \sum(x_i - \bar{x})(y_i - \bar{y})$,

$$b = \frac{S_{xy}}{S_{xx}},\qquad a = \bar{y} - b\bar{x}.$$

The line passes through $(\bar{x}, \bar{y})$. The scatter of the points about the line is estimated by the **residual standard deviation**, with $n - 2$ degrees of freedom because two parameters were fitted:

$$s = \sqrt{\frac{\sum(y_i - a - bx_i)^2}{n - 2}}.$$

Propagating this scatter through the formulas gives the standard uncertainties

$$u(b) = \frac{s}{\sqrt{S_{xx}}},\qquad u(a) = s\sqrt{\frac{1}{n} + \frac{\bar{x}^2}{S_{xx}}},\qquad u(\hat{y}_0) = s\sqrt{\frac{1}{n} + \frac{(x_0 - \bar{x})^2}{S_{xx}}}.$$

The last is the uncertainty of the line itself at $x_0$; it is smallest at the centre of the data and grows towards the ends, so a calibration should span the whole working range and never be extrapolated. To use the fit, one inverts it: a new reading $y_0$ corresponds to $\hat{x}_0 = (y_0 - a)/b$. If the residuals show a pattern, such as a curve or a sign change in the middle, the straight line is wrong and a polynomial or the sensor-specific form (Steinhart-Hart, Callendar-Van Dusen) should be used.

### Traceability

A calibration is only as good as the reference. **Traceability** is the property of a result that it can be related to a stated reference, ultimately the SI unit, through an unbroken chain of comparisons, each with a stated uncertainty. For a pressure gauge in an Indian laboratory the chain runs from the national standard maintained at CSIR-National Physical Laboratory, New Delhi, through an accredited calibration laboratory (accredited by NABL under ISO/IEC 17025) to the working standard, and finally to the instrument in use. Each step adds uncertainty, so the uncertainty grows down the chain. A common rule is that the reference should be at least four times better than the device under test (a **test uncertainty ratio** of $4{:}1$), so that its contribution is small. A calibration certificate gives the reference, the conditions, the date and the expanded uncertainty; instruments must be recalibrated at an interval consistent with their observed drift.

### The uncertainty budget

The Guide to the Expression of Uncertainty in Measurement (GUM, Lesson m1-l1) turns the measurement into a model $y = f(x_1, \ldots, x_n)$. The steps are as follows.

1. Write the model and list every input that affects the result.
2. Assign each a standard uncertainty $u_i$, either by statistics (**Type A**, as $s/\sqrt{n}$) or from other information (**Type B**). A limit $\pm a$ of a rectangular distribution gives $u = a/\sqrt{3}$, a triangular one $a/\sqrt{6}$, and a certificate value quoted with $k = 2$ gives $U/2$.
3. Convert each to the units of the result with its sensitivity coefficient $c_i = \partial f/\partial x_i$.
4. Combine the independent components in quadrature, $u_c = \sqrt{\sum c_i^2u_i^2}$.
5. Multiply by the coverage factor, $U = ku_c$ with $k = 2$ for about 95% confidence.

The budget table shows which component dominates, where effort should go, and what the assumption was for each. A component a third the size of the largest adds only about 11% to its variance and can often be neglected.

### Data acquisition with Python

An acquisition programme repeats three operations: read raw counts, average, convert. The following script reads integer counts sent line by line by a microcontroller ADC, then finds the mean, the standard error and the voltage.

```python
import serial, numpy as np
VREF, NBITS = 5.000, 12

def read_counts(port, n=100, max_lines=2000):
    vals = []
    with serial.Serial(port, 115200, timeout=1) as s:
        s.reset_input_buffer()
        for _ in range(max_lines):                  # never loop forever on a silent port
            line = s.readline().decode(errors="ignore").strip()
            if line.isdigit():
                vals.append(int(line))
            if len(vals) == n:
                break
    return np.array(vals, dtype=float)

c = read_counts("/dev/ttyUSB0")
mean, sem = c.mean(), c.std(ddof=1) / np.sqrt(c.size)   # standard error = s / sqrt(n)
volts, u_volts = mean * VREF / 2**NBITS, sem * VREF / 2**NBITS

p_ref = np.array([0, 100, 200, 300, 400.0])             # reference pressures, kPa
v_ref = np.array([0.5062, 1.5041, 2.5017, 3.5036, 4.5012])   # averaged voltages
b, a = np.polyfit(p_ref, v_ref, 1)                      # v = a + b p (slope first)
pressure = (volts - a) / b
```

The `ddof=1` gives the sample standard deviation of Lesson m1-l1, and the `max_lines` guard stops the loop if the instrument is silent. `np.polyfit` solves the same normal equations as above and returns the slope first. The calibration data `p_ref` and `v_ref` are acquired in the same way at the reference points, with the identical averaging.

## Key Ideas

- **Least squares**: $b = S_{xy}/S_{xx}$, $a = \bar{y} - b\bar{x}$, $s^2 = \sum\text{res}^2/(n-2)$, and $u(b) = s/\sqrt{S_{xx}}$.
- The line is most certain at $\bar{x}$; **never extrapolate** beyond the calibrated range.
- **Traceability** is an unbroken chain of comparisons to the SI, each with an uncertainty; use a reference at least $4\times$ better.
- **Budget**: standard uncertainties (Type A or B), sensitivity coefficients, quadrature sum, expanded uncertainty $U = 2u_c$.
- A rectangular limit $\pm a$ has $u = a/\sqrt{3}$.
- **Acquisition**: average the counts, convert with $V_{\text{ref}}/2^N$, then apply the fitted calibration, carrying uncertainty at each step.

## Worked Examples

### Example 1 — Fitting a pressure-sensor calibration

A transducer is calibrated at $x = 0, 100, 200, 300, 400$ kPa, giving $y = 0.5062, 1.5041, 2.5017, 3.5036, 4.5012$ V. Find the line, the residual standard deviation and the uncertainties of slope and intercept.

**Solution.** $\bar{x} = 200$ kPa, $\bar{y} = 2.5034$ V (exactly $2.50336$), $S_{xx} = 4 \times 10^4 + 10^4 + 0 + 10^4 + 4 \times 10^4 = 10^5$ and $S_{xy} = (-200)(-1.99716) + (-100)(-0.99926) + 0 + (100)(1.00024) + (200)(1.99784) = 998.95$. Then

$$b = \frac{998.95}{10^5} = 9.9895\ \text{mV/kPa},\qquad a = 2.50336 - 9.9895 \times 10^{-3} \times 200 = 0.5055\ \text{V}.$$

The residuals are $+0.74, -0.31, -1.66, +1.29, -0.06$ mV, with $\sum \text{res}^2 = 5.07 \times 10^{-6}\ \text{V}^2$, so $s = \sqrt{5.07 \times 10^{-6}/3} = 1.30$ mV. Hence $u(b) = 1.30\ \text{mV}/\sqrt{10^5} = 4.11 \times 10^{-3}\ \text{mV/kPa}$, a relative $0.041\%$, and $u(a) = 1.30\sqrt{0.2 + 0.4} = 1.01$ mV. The residuals have no pattern, so the linear model is adequate.

### Example 2 — Uncertainty budget at 250 kPa

With the calibration of Example 1, build the budget for a pressure of $250$ kPa. The inputs are: reference gauge certificate $U = 0.10$ kPa ($k = 2$); calibration line at $250$ kPa; repeatability of $10$ readings with $s = 0.19$ kPa; DMM resolution $1$ mV; ambient temperature within $\pm 3$ K of the calibration, with a coefficient $0.01$ kPa/K.

**Solution.** The standard uncertainties, in kPa, are:

| Component | Type | Evaluation | $u$ (kPa) |
|---|---|---|---|
| Reference gauge | B | $0.10/2$ | 0.050 |
| Calibration line | A | $s\sqrt{0.2 + 0.025}/b = 0.616\,\text{mV}/9.99\,\text{mV/kPa}$ | 0.062 |
| Repeatability | A | $0.19/\sqrt{10}$ | 0.060 |
| DMM resolution | B | $(0.5\ \text{mV}/9.99)/\sqrt{3}$ | 0.029 |
| Temperature | B | $(3 \times 0.01)/\sqrt{3}$ | 0.017 |

The sum of squares is $0.0025 + 0.0038 + 0.0036 + 0.00083 + 0.0003 = 0.0110$, so $u_c = 0.105$ kPa and $U = 2u_c = 0.21$ kPa. The result is $250.0 \pm 0.2$ kPa ($k = 2$), a relative $0.08\%$. The reference, line and repeatability are of similar size and give about 90% of the variance, so improving the thermometry or the DMM would change little.

### Example 3 — Converting an acquired reading

Using the script above, $100$ counts have a mean of $1638.4$ and a standard deviation of $2.9$ counts. Find the voltage, the pressure by the calibration of Example 1, and its expanded uncertainty from the statistical contributions.

**Solution.** The standard error is $2.9/\sqrt{100} = 0.29$ counts. The LSB is $5/4096 = 1.2207$ mV, so $V = 1638.4 \times 1.2207\ \text{mV} = 2.0000$ V and $u(V) = 0.29 \times 1.2207 = 0.354$ mV. The pressure is $p = (2.0000 - 0.50546)/9.9895 \times 10^{-3} = 149.6$ kPa. The repeatability gives $0.354/9.9895 = 0.035$ kPa, and the line at $p = 149.6$ kPa gives $1.30\sqrt{0.2 + (50.4)^2/10^5}/9.9895 = 0.062$ kPa. In quadrature $u_c = \sqrt{0.035^2 + 0.062^2} = 0.071$ kPa and $U = 0.14$ kPa, so $p = 149.6 \pm 0.1$ kPa ($k = 2$), before adding the reference, resolution and temperature terms of Example 2.

## Common Misconceptions

- **"A calibration makes the instrument accurate for ever."** It determines the relation at one time; drift, temperature and ageing change it, and recalibration at set intervals is part of the system.
- **"A good fit means a good instrument."** A small $s$ shows the points lie on a line; it says nothing of the reference's error, which is a systematic offset to every point.
- **"The fit line is equally good everywhere."** Its uncertainty is smallest at $\bar{x}$ and grows towards, and beyond, the ends.
- **"Traceable means calibrated."** Calibrated against what? Traceability requires the chain of references and their uncertainties to be documented.
- **"Expanded uncertainty is the maximum error."** With $k = 2$ it is an interval containing the true value with about 95% probability, not a bound.

## Connections

- The least-squares normal equations are a linear system of the kind solved in Numerical Methods (Lesson m3-l1); the fitting of non-linear models reduces to the same equations by linearisation.
- The Steinhart-Hart fit of a thermistor in Lesson m1-l2 and the Callendar-Van Dusen equation of a Pt100 are calibration curves in exactly this sense.
- The Electronic Instrumentation Lab (Sensor Calibration and the Error Budget, and the Capstone) carries out this procedure on a thermistor, RTD and pressure sensor and reports the budget.
- Astronomical photometry calibrates the instrument by observing standard stars of known magnitude, a traceability chain of the same kind, with the zero-point and extinction as the fit parameters.

## Quick Check

1. Derive $a = \bar{y} - b\bar{x}$ from the first normal equation.
2. A calibration uses $n = 6$ points with $S_{xx} = 70$ (units$^2$) and $s = 0.02$ V. Find $u(b)$.
3. A certificate gives $U = 0.04\%$ ($k = 2$). Find the standard uncertainty. A resolution of $0.01$ V is also given; find the rectangular standard uncertainty.
4. Components with standard uncertainties $0.30, 0.20$ and $0.10$ units are combined. Find $u_c$ and $U$.
5. Why does the script limit the number of lines read, and why `ddof=1`?

## Takeaway

- Calibration fits a relation between known inputs and outputs; the least-squares line gives $b = S_{xy}/S_{xx}$ and $a = \bar{y} - b\bar{x}$ with uncertainties from the residuals.
- Traceability links each result to the SI through documented comparisons with a stated uncertainty.
- An uncertainty budget combines the standard uncertainties in quadrature and expands them with $k = 2$.
- A Python script averages the counts, converts to volts and applies the calibration while carrying the uncertainty.
- Together, the sensor, bridge, amplifier, converter, noise analysis and calibration give a measurement with a defensible error.
