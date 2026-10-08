***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-3
semesterName: Semester 3
subjectId: physics
subjectName: Physics
courseId: analog-and-digital-electronics
courseName: Analog and Digital Electronics
moduleId: analog-and-digital-electronics-module-3
moduleName: Digital Logic and Data Conversion
lessonId: analog-and-digital-electronics-m3-l3
lessonName: ADC and DAC Architectures and a Digital Thermometer Chain
lessonNumber: 9
moduleNumber: 3
semesterNumber: 3
difficulty: advanced
estimatedStudyMinutes: 60
releaseOrder: 9
prerequisites:
  - analog-and-digital-electronics-m3-l2
  - analog-and-digital-electronics-m2-l3
learningObjectives:
  - Define resolution, quantisation error and the sampling condition, and derive the output of the R-2R ladder DAC.
  - Describe the flash, successive-approximation and dual-slope ADC architectures and compare their speed, accuracy and cost.
  - Assemble and simulate a complete sensor-to-code chain, and budget its errors from sensor to converter.
concepts:
  - Resolution and LSB
  - Quantisation noise and SNR
  - Nyquist sampling and aliasing
  - R-2R ladder DAC
  - Flash ADC
  - Successive-approximation ADC
  - Dual-slope ADC
tags:
  - physics
  - analog-and-digital-electronics
  - data-conversion
  - measurement-project
sourceType: authored-courseware
status: in-review
assessmentHints:
  - problem-solving
  - computational
  - derivation
  - conceptual
***

# ADC and DAC Architectures and a Digital Thermometer Chain

## Overview

Physics measures continuous quantities, while computers handle numbers; converters connect the two. A **digital-to-analogue converter** (DAC) turns a binary word into a voltage, and an **analogue-to-digital converter** (ADC) does the reverse. Every earlier lesson appears here: the summing amplifier gave a first DAC, the comparator and integrator are the heart of two ADC types, the counters of Lesson m3-l2 sequence the conversion, and the gain, filtering and offset analysis of Module 2 sets the accuracy the converter can use. We define the figures of merit, derive the R-2R ladder, compare three ADC architectures, and finish with a project: a digital thermometer chain from sensor to decoded reading, with a Python simulation that checks the error budget.

## Learning Path

- **What you should already know**: the summing-amplifier DAC (Lesson m2-l1); the integrator and comparator (Lesson m2-l2); offset and filters (Lesson m2-l3); counters (Lesson m3-l2).
- **What this lesson adds**: resolution, quantisation noise and the Nyquist condition; the R-2R DAC; flash, successive-approximation and dual-slope ADCs; an end-to-end error budget for a digital thermometer.
- **What later lessons this will unlock**: the microcontroller laboratories, whose on-chip ADCs are successive-approximation converters; data acquisition in Communication Electronics and the Electronic Instrumentation Lab.

## Core Explanation

### Resolution, quantisation and sampling

An $n$-bit converter with full-scale voltage $V_{FS}$ divides the range into $2^n$ steps, so one **least significant bit** is

$$\text{LSB} = \frac{V_{FS}}{2^n}.$$

A 10-bit converter with $V_{FS} = 5$ V has $\text{LSB} = 5/1024 = 4.883$ mV. An ADC maps all voltages within one step onto one code, so the **quantisation error** is uniform over a width of one LSB, with rms value

$$\sigma_q = \sqrt{\frac{1}{\text{LSB}}\int_{-\text{LSB}/2}^{\text{LSB}/2} e^2\,de} = \frac{\text{LSB}}{\sqrt{12}} = 0.289\ \text{LSB}.$$

Comparing with a full-scale sine wave of rms $V_{FS}/(2\sqrt{2})$ gives the ideal signal-to-noise ratio

$$\text{SNR} = 6.02\,n + 1.76\ \text{dB},$$

which is 62.0 dB for $n = 10$: each extra bit gains 6 dB. A sampled signal must obey the **Nyquist condition** $f_s > 2f_{max}$. A component at frequency $f$ above $f_s/2$ is not lost but folded to $|f - kf_s|$ for the integer $k$ that brings it below $f_s/2$: a 10 kHz tone sampled at 12 kHz appears at 2 kHz and cannot be told from a genuine 2 kHz tone. An **anti-aliasing filter**, such as the Sallen-Key stage of Lesson m2-l3, must remove such components before the converter.

### The R-2R ladder DAC

The binary-weighted DAC of Lesson m2-l1 needs resistors in the ratios $1 : 2 : \dots : 2^{n-1}$, a 2048 : 1 spread for 12 bits that cannot be matched accurately. The **R-2R ladder** needs only two values. Each bit $b_k$ switches a $2R$ leg either to $V_{ref}$ or to ground; adjacent nodes are linked by resistors $R$ and the far end is terminated by $2R$ to ground.

Look to the left of any node, away from the MSB, excluding its own leg. The termination $2R$ in parallel with the LSB leg $2R$ gives $R$; adding the series $R$ gives $2R$. Repeating the argument, every node sees exactly $2R$ looking toward the LSB. With only bit $b_k$ high, node $k$ is therefore a divider of two equal resistors $2R$ driven by $V_{ref}$, giving $V_{ref}/2$, with Thevenin resistance $R$. Moving one node toward the MSB, the series $R$ plus this $R$ gives $2R$, which with the $2R$ to ground at the new node again halves the voltage. So the contribution of bit $k$ is halved at each node towards the MSB, and by superposition the output at the MSB node is

$$V_{out} = V_{ref}\sum_{k=0}^{n-1} b_k\,2^{k-n} = V_{ref}\,\frac{D}{2^n},$$

where $D$ is the integer value of the word. The output resistance is $R$, so a voltage follower buffers it. The step is $V_{ref}/2^n$ and the maximum output is $V_{ref}(1 - 2^{-n})$, always one LSB below $V_{ref}$. Accuracy depends on resistor ratios, which match well on one chip, and on the stability of $V_{ref}$ (Lesson m1-l1).

### Flash, SAR and dual-slope ADCs

The three main architectures trade speed against cost and accuracy.

**Flash ADC.** A resistor string of $2^n$ equal resistors divides $V_{ref}$ into $2^n - 1$ threshold voltages. One comparator per threshold compares the input with it, and all comparators act in parallel. Those below the input read 1 and those above read 0, giving a **thermometer code** that a priority encoder converts to binary. Conversion takes one comparator delay, so flash converters reach gigasamples per second, but the comparator count doubles with every bit: 8 bits need 255 comparators, 12 bits 4095.

**Successive-approximation (SAR) ADC.** The SAR is a binary search. A register, a DAC and a single comparator are used. Starting with the MSB, the register tries a 1; if the DAC output exceeds $V_{in}$ the bit is rejected, otherwise kept. After $n$ clock cycles the register holds the code. The hardware is modest, a conversion takes $n$ clock cycles, and typical devices reach 1 MS/s at 12 bits; microcontrollers use this type.

**Dual-slope ADC.** An integrator (Lesson m2-l2) integrates the unknown $V_{in}$ for a fixed time $T_1 = N_1/f_{clk}$, reaching $-V_{in}T_1/RC$. A reference of opposite polarity is then connected and a counter measures the time $T_2$ for the output to return to zero. Equating the charge removed to that added gives $V_{ref}T_2 = V_{in}T_1$, so

$$N_2 = N_1\,\frac{V_{in}}{V_{ref}}.$$

Neither $R$, $C$ nor the clock frequency appears: they cancel because the same integrator and counter are used in both phases. Choosing $T_1$ as a whole number of mains periods (20 ms at 50 Hz) cancels mains pickup, since a sinusoid integrated over complete cycles gives zero. The price is speed (tens of milliseconds per reading), which suits multimeters and thermometers.

### The digital thermometer chain

A complete measurement is a chain of stages whose errors add. We use an LM35 temperature sensor (output 10 mV/°C), a non-inverting amplifier (Lesson m2-l1) of gain $G = 1 + R_f/R_1 = 1 + 40/10 = 5$, a low-pass filter to reject mains pickup, and a 10-bit SAR converter with $V_{ref} = 5$ V:

| Stage | Function | Lesson |
|---|---|---|
| LM35 | $0.010$ V per °C | Basic Electronics |
| Amplifier ($G = 5$) | 50 mV/°C, spans 0 to 100 °C over 0 to 5 V | m2-l1 |
| Low-pass filter | removes mains and noise | m2-l3 |
| SAR ADC | code $D$, 10 bits | this lesson |
| Counter/decoder/display | shows the temperature | m3-l1, m3-l2 |

The code is $D = \lfloor V/\text{LSB}\rfloor$ with $\text{LSB} = 4.883$ mV, which corresponds to $4.883/50 = 0.0977$ °C per count. The simulation models noise and the converter. A single reading has rms error about 0.1 °C, falling to about 0.025 °C (a factor $\sqrt{16} = 4$) for 16-reading averages.

```python
import random
random.seed(3)
VREF, N, G, SENS = 5.0, 10, 5.0, 0.010           # LM35: 10 mV/degC
LSB = VREF / 2**N
def sar(v):
    code = 0
    for bit in range(N - 1, -1, -1):             # MSB first: binary search
        trial = code | (1 << bit)
        if v >= trial * LSB:                     # comparator: DAC output vs input
            code = trial
    return code
def read(T):
    v = G * (SENS * T + random.gauss(0, 0.001))  # 1 mV rms sensor noise
    return sar(min(max(v, 0), VREF - 1e-9))
def to_temp(code):
    return (code + 0.5) * LSB / (G * SENS)       # mid-step reconstruction
T = 36.6
one = [to_temp(read(T)) for _ in range(200)]
avg = [sum(to_temp(read(T)) for _ in range(16)) / 16 for _ in range(200)]
rms = lambda xs: (sum((x - T) ** 2 for x in xs) / len(xs)) ** 0.5
print(f"single reading rms error {rms(one):.3f} C, 16-sample average {rms(avg):.3f} C")
```

## Key Ideas

- **Resolution**: $\text{LSB} = V_{FS}/2^n$; the quantisation error has rms $\text{LSB}/\sqrt{12}$.
- **SNR**: $6.02n + 1.76$ dB for a full-scale sine wave.
- **Nyquist**: sample above $2f_{max}$, and filter beforehand; otherwise frequencies fold to $|f - kf_s|$.
- **R-2R DAC**: $V_{out} = V_{ref}D/2^n$ using only two resistor values.
- **Flash / SAR / dual-slope**: fastest and costliest; $n$ cycles, one comparator; slow but accurate.
- **Dual-slope**: $N_2 = N_1V_{in}/V_{ref}$, independent of $R$, $C$ and the clock.

## Worked Examples

### Example 1 — A 4-bit R-2R DAC

An R-2R DAC has $n = 4$ and $V_{ref} = 5$ V. Find the LSB, the output for code $1011_2$ and the full-scale output, and the SNR of a 10-bit converter.

**Solution.** The step is $\text{LSB} = 5/16 = 0.3125$ V. The code $1011_2$ equals $D = 11$, so

$$V_{out} = 5\times\frac{11}{16} = 3.4375\ \text{V}.$$

By superposition this is $5(1/2 + 1/8 + 1/16) = 2.5 + 0.625 + 0.3125 = 3.4375$ V. Full scale ($D = 15$) is $5\times15/16 = 4.6875$ V, one LSB below $V_{ref}$. For $n = 10$ the ideal SNR is $6.02\times10 + 1.76 = 61.96$ dB and the rms quantisation noise is $4.883/\sqrt{12} = 1.41$ mV.

### Example 2 — Successive approximation of 3.3 V

An 8-bit SAR with $V_{ref} = 5$ V converts $V_{in} = 3.3$ V. Show every trial.

**Solution.** The LSB is $5/256 = 19.53$ mV. Each trial sets one more bit and the DAC voltage is $\text{trial}\times\text{LSB}$:

| Bit tried | Trial code | DAC voltage (V) | $V_{in} \ge$ DAC? | Kept code |
|---|---|---|---|---|
| 7 | 128 | 2.5000 | yes | 128 |
| 6 | 192 | 3.7500 | no | 128 |
| 5 | 160 | 3.1250 | yes | 160 |
| 4 | 176 | 3.4375 | no | 160 |
| 3 | 168 | 3.2813 | yes | 168 |
| 2 | 172 | 3.3594 | no | 168 |
| 1 | 170 | 3.3203 | no | 168 |
| 0 | 169 | 3.3008 | no | 168 |

The result is $168 = 1010\,1000_2$ after eight clock cycles, representing $168\times19.53\ \text{mV} = 3.281$ V; the 19 mV error is below one LSB (the exact quotient is $168.96$).

### Example 3 — Reading 36.6 °C

For the thermometer chain with a body temperature of 36.6 °C, find the ADC code, the reconstructed temperature and the effect of a 2 mV amplifier offset.

**Solution.** The LM35 gives 0.366 V and the amplifier gives $5\times0.366 = 1.830$ V. The code is $\lfloor1.830/4.883\ \text{mV}\rfloor = \lfloor374.78\rfloor = 374$, binary $01\,0111\,0110$. Truncation gives $374\times0.09766 = 36.52$ °C, an error of $-0.08$ °C; adding half an LSB gives $374.5\times0.09766 = 36.57$ °C, an error of $-0.03$ °C, inside $\pm\tfrac12\text{LSB} = \pm0.049$ °C. An input offset of $V_{os} = 2$ mV in the amplifier is amplified by the noise gain 5 to 10 mV at the converter, an error of $10/50 = 0.2$ °C, four times the quantisation error, so the offset (Lesson m2-l3) is the dominant electronic error. Calibrating at the ice point (0 °C) removes it. The LM35 itself is specified to about $\pm0.5$ °C, which dominates the budget: more bits make the thermometer more precise, not more accurate.

## Common Misconceptions

- **"More bits always means more accuracy."** Offset, gain error, reference drift and sensor error can exceed the LSB, as in the thermometer.
- **"Sampling at twice the signal frequency is enough."** The condition covers *all* components, including noise; out-of-band content folds into the band and cannot be removed afterwards.
- **"A flash ADC is best because it is fastest."** Its cost and power grow as $2^n$, limiting it to about 8 bits.
- **"The dual-slope result depends on the capacitor value."** $R$ and $C$ cancel between the two phases.
- **"An R-2R DAC reaches $V_{ref}$."** Its maximum is one LSB lower.

## Connections

- Aliasing is the discrete Fourier idea of Waves and Optics, the same as the stroboscopic effect on a rotating wheel.
- The $\text{LSB}/\sqrt{12}$ noise is the standard deviation of a uniform distribution, met in Statistical Mechanics.
- CCD cameras in Astrophysics digitise charge with a slow, low-noise converter; the bit depth sets the dynamic range between faint and bright stars.
- Averaging $M$ readings reduces random error as $1/\sqrt{M}$, the same law as counting statistics in Nuclear Physics, and the simulation reproduces it.
- The SAR converter inside a microcontroller faces the same error budget in the embedded laboratories.

## Quick Check

1. A 12-bit ADC has $V_{ref} = 3.3$ V. Find the LSB and the ideal SNR.
2. Find $V_{out}$ of an 8-bit R-2R DAC with $V_{ref} = 2.56$ V for the code $0100\,1101_2$.
3. How many clock cycles does a 12-bit SAR conversion take, and how many comparators does a 12-bit flash converter need?
4. A dual-slope converter has $N_1 = 2000$ and $V_{ref} = 2.000$ V. What is $N_2$ for $V_{in} = 0.730$ V?
5. A 9 kHz signal is sampled at 12 kHz. At what frequency does it appear, and how should it be avoided?

## Takeaway

- A converter of $n$ bits has $\text{LSB} = V_{FS}/2^n$, quantisation error $\text{LSB}/\sqrt{12}$ rms and ideal SNR $6.02n + 1.76$ dB.
- Sampling must exceed twice the highest frequency present, after anti-aliasing filtering.
- The R-2R ladder gives $V_{out} = V_{ref}D/2^n$ with two resistor values.
- Flash ADCs are fastest, SAR ADCs need $n$ cycles, dual-slope ADCs are slow but accurate and reject mains.
- In a measurement chain the largest error, not the converter resolution, sets the accuracy; offset and sensor errors usually dominate.
