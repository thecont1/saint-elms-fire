***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-5
semesterName: Semester 5
subjectId: physics
subjectName: Physics
courseId: microcontroller-and-embedded-systems
courseName: Microcontroller and Embedded Systems (Physics Option B)
moduleId: microcontroller-and-embedded-systems-module-2
moduleName: Digital I/O, Timing and Analogue Interfacing
lessonId: microcontroller-and-embedded-systems-m2-l3
lessonName: ADC, DAC and Sensor Interfacing
lessonNumber: 6
moduleNumber: 2
semesterNumber: 5
difficulty: advanced
estimatedStudyMinutes: 60
releaseOrder: 6
prerequisites:
  - microcontroller-and-embedded-systems-m2-l2
  - communication-electronics-m3-l3
  - basic-electronics-m1-l1
learningObjectives:
  - Compute ADC counts, resolution and quantisation noise for an n-bit converter, and set up the ATmega328P ADC registers and conversion time.
  - Apply the Nyquist criterion, identify aliased frequencies and choose an anti-aliasing filter and sampling rate.
  - Interface a thermistor, LM35, photodiode and Hall sensor, and convert counts to physical units.
  - Calibrate a sensor by two-point and least-squares fits, with the uncertainty of the fitted parameters.
concepts:
  - Successive-approximation ADC
  - Quantisation error
  - Nyquist rate and aliasing
  - Oversampling
  - R-2R and PWM DAC
  - Thermistor beta model
  - Least-squares calibration
tags:
  - physics
  - microcontroller-and-embedded-systems
  - adc
  - sensors
sourceType: authored-courseware
status: in-review
assessmentHints:
  - problem-solving
  - computational
  - derivation
  - short-answer
***

# ADC, DAC and Sensor Interfacing

## Overview

Physical quantities such as temperature, light and magnetic field are continuous, but a microcontroller handles integers. The analogue-to-digital converter (ADC) bridges this gap, and its resolution, speed and noise set the limit of every measurement the instrument makes. This lesson derives the ADC transfer function, quantisation noise and the sampling theorem as they apply to the ATmega328P, shows how oversampling buys resolution, and describes two ways to generate an analogue voltage. It then interfaces four sensors that cover most of laboratory physics: a thermistor, an LM35, a photodiode and a Hall-effect sensor, and ends with calibration, the step that converts counts into units with a stated uncertainty.

## Learning Path

- **What you should already know**: sampling, aliasing and quantisation noise for PCM (communication-electronics-m3-l3); the voltage divider (basic-electronics-m1-l1); PWM and RC filtering (Lesson m2-l2); integer scaling (Lesson m1-l2).
- **What this lesson adds**: the 10-bit ADC and its registers; aliasing in practice; oversampling; DACs; sensor conditioning; calibration with uncertainty.
- **What later lessons this will unlock**: logging of sensor streams and noise reduction (Lesson m3-l2); the photodiode front end of the project (Lesson m3-l3).

## Core Explanation

### The successive-approximation ADC

The ATmega328P ADC compares the input with a trial voltage from an internal capacitor DAC, deciding one bit per ADC clock from the most significant bit down. An $n$-bit converter with reference $V_{\text{ref}}$ maps $V_{in}$ to the count

$$N = \left\lfloor \frac{V_{in}}{V_{\text{ref}}}\,2^{n} \right\rfloor, \qquad \Delta = \frac{V_{\text{ref}}}{2^{n}}.$$

With $n = 10$ and $V_{\text{ref}} = 5.000$ V, the **least significant bit** is $\Delta = 4.883$ mV; with the internal 1.1 V reference it is $1.074$ mV. A count $N$ means $V_{in}$ lies within one step above $N\Delta$, and the quantisation error, uniform over $\pm\Delta/2$, has rms value $\Delta/\sqrt{12} = 1.41$ mV, giving the ideal signal-to-noise ratio $6.02n + 1.76 = 62$ dB for a full-scale sine wave. Real converters achieve about 9.5 effective bits because of reference noise, nonlinearity and supply pickup.

The converter is controlled by three registers. `ADMUX` selects the reference (`REFS1:0 = 01` for AVcc, 11 for 1.1 V) and the input channel (`MUX3:0`); `ADCSRA` enables the ADC (`ADEN`), starts a conversion (`ADSC`) and sets the clock prescaler `ADPS2:0`; the 10-bit result appears in `ADC`. The ADC clock should be 50–200 kHz for full accuracy, so at 16 MHz the prescaler is 128, giving 125 kHz. A conversion takes 13 ADC clocks, which is $13/125\ \text{kHz} = 104\ \mu$s, so the maximum rate is about 9.6 kS/s.

```c
uint16_t adc_read(uint8_t ch) {
    ADMUX  = (1 << REFS0) | (ch & 0x0F);          /* AVcc reference */
    ADCSRA = (1 << ADEN) | (1 << ADSC) | 0x07;    /* enable, start, /128 */
    while (ADCSRA & (1 << ADSC)) ;                /* 104 us */
    return ADC;
}
```

The sample-and-hold capacitor is about 14 pF and must charge through the source resistance, so the source impedance should be below 10 kΩ; a higher impedance gives readings that depend on the previous channel.

### Sampling, Nyquist and aliasing

Sampling at $f_s$ preserves a signal only if it contains no frequencies above $f_s/2$ (the Nyquist criterion of communication-electronics-m3-l3). A component at $f$ above this limit reappears at the **alias** frequency $|f - n f_s|$, with integer $n$ chosen to land in $0$ to $f_s/2$, and no later processing can remove it. An **anti-aliasing filter**, usually an RC low-pass with corner well below $f_s/2$, must precede the converter. For slow physics signals the usual fault is mains pickup at 50 Hz: sampled at a few samples per second it appears as a spurious slow oscillation.

### Oversampling and averaging

If the noise is random with rms $\sigma$ counts, the mean of $M$ readings has noise $\sigma/\sqrt{M}$. Averaging $4^{k}$ readings and dividing the sum by $2^{k}$ gains $k$ bits of resolution, provided the noise is at least about one least significant bit so that the readings dither between adjacent codes. The price is $4^{k}$ times the conversion time and a bandwidth reduced by the same factor. Averaging does nothing for systematic errors, such as an inaccurate reference.

### Digital-to-analogue conversion

An $n$-bit DAC produces $V = V_{\text{ref}}D/2^{n}$ from the code $D$. The Uno has none, but offers two substitutes. **Filtered PWM** (Lesson m2-l2) is cheap but slow and rippled. An **R-2R ladder** of resistors, with only two values, switched by $n$ digital pins, gives one step per code at once, a step of $5/256 = 19.5$ mV for 8 bits, limited by resistor matching; ready-made chips such as the I2C MCP4725 provide 12 bits, a $1.22$ mV step at 5 V.

### Sensors and signal conditioning

A sensor must deliver a voltage spanning most of the ADC range. **Conditioning** matches the sensor to the converter by dividers, level shifts, gain and filtering. Four common cases follow.

**NTC thermistor.** The resistance of a negative-temperature-coefficient thermistor follows the beta model $R = R_0\exp[B(1/T - 1/T_0)]$, with $T$ in kelvin, so

$$T = \left[\frac{1}{T_0} + \frac{1}{B}\ln\frac{R}{R_0}\right]^{-1}.$$

For a 10 kΩ thermistor ($R_0$ at $T_0 = 298.15$ K, $B = 3950$ K) in a divider with a fixed 10 kΩ resistor to $V_{CC}$, the count is $N = 1024R/(R+10\ \text{k}\Omega)$ and $R = 10\ \text{k}\Omega\times N/(1024-N)$. The sensitivity at 25 °C is $dR/dT = -BR/T^{2} = -444$ Ω/K, which the divider turns into $-55.6$ mV/K.

**LM35.** The output is $10\ \text{mV}/{}^{\circ}\text{C}$, linear and calibrated. With 5 V reference one count is 0.49 °C, with the 1.1 V reference 0.107 °C over a 0 to 110 °C range.

**Photodiode.** Under reverse bias or zero bias it delivers a photocurrent $I = SP$ proportional to optical power, with responsivity $S$ about 0.5 A/W in the near infrared. A **transimpedance amplifier**, an op-amp with feedback resistor $R_f$, converts it to $V = IR_f$ and holds the diode at nearly zero volts, keeping it linear. For $P = 10\ \mu$W and $R_f = 100\ \text{k}\Omega$, $V = 5\ \mu\text{A}\times 100\ \text{k}\Omega = 0.5$ V, which is 102 counts.

**Hall sensor.** A linear device such as the SS49E delivers $V = V_{CC}/2 + SB$, with $S$ about 1.4 mV/G (14 mV/mT). It is **ratiometric**: the output scales with the supply, so using $V_{CC}$ as the ADC reference makes the count independent of supply changes. The physics is the Hall voltage of solid-state-physics-lab-m1-l3.

### Calibration

A **calibration** relates counts $N$ to a reference quantity $x$ by a fitted model. The simplest is **two-point**, such as the ice point and the boiling point. A better approach measures $m$ points and fits a line $N = a x + b$ by least squares:

$$a = \frac{\sum (x_i - \bar x)(N_i - \bar N)}{\sum (x_i - \bar x)^2}, \qquad b = \bar N - a\bar x,$$

with parameter uncertainties from the residual scatter $s^{2} = \sum r_i^{2}/(m-2)$: $\sigma_a = s/\sqrt{\sum(x_i-\bar x)^{2}}$ and $\sigma_b = s\sqrt{1/m + \bar x^{2}/\sum(x_i - \bar x)^{2}}$. The inverse $x = (N-b)/a$ is then applied in firmware or, better, in the host program with the raw counts logged.

```python
from statistics import linear_regression
B      = [0, 20, 40, 60]              # mT, from a reference gaussmeter
counts = [513, 571, 628, 685]
a, b   = linear_regression(B, counts)  # counts/mT, counts
field  = lambda c: (c - b) / a
```

## Key Ideas

- **ADC**: $N = \lfloor V_{in}2^{n}/V_{\text{ref}}\rfloor$, step $\Delta = V_{\text{ref}}/2^{n}$, rms noise $\Delta/\sqrt{12}$.
- **ATmega328P**: 13 clocks at 125 kHz is 104 µs per conversion, at most 9.6 kS/s.
- **Aliasing**: components above $f_s/2$ appear at $|f - nf_s|$; filter before sampling.
- **Oversampling**: $4^{k}$ readings give $k$ extra bits for random noise only.
- **Sensors**: match the output to the ADC span; ratiometric sensors cancel supply drift.
- **Calibration**: least squares gives slope, offset and their uncertainties.

## Worked Examples

### Example 1 — Counts, noise and aliasing

An input of 2.000 V is read by the 10-bit ADC with $V_{\text{ref}} = 5$ V. (a) What count is returned? (b) A 4.1 kHz tone is sampled at 5 kS/s; where does it appear? (c) How long does a 16-sample average take?

**Solution.** (a) $N = \lfloor 2.000 \times 1024/5\rfloor = \lfloor 409.6\rfloor = 409$, which represents the interval $[1997.07, 2001.95)$ mV, so 2.000 V lies inside it. The rms quantisation noise is $4.883/\sqrt{12} = 1.41$ mV. (b) The Nyquist frequency is 2.5 kHz, so 4.1 kHz is aliased to $|4100 - 5000| = 900$ Hz. A 1 kHz low-pass would not have removed it after sampling. (c) $16 \times 104\ \mu\text{s} = 1.66$ ms, which gains $k = 2$ bits (12-bit result `sum >> 2`) if noise is at least 1 LSB.

### Example 2 — Thermistor temperature from a count

The divider above returns count $N = 640$. Find $R$, $T$ and the temperature resolution near 25 °C.

**Solution.** $R = 10\ \text{k}\Omega \times 640/(1024-640) = 16.667$ kΩ. Then $\ln(R/R_0) = \ln 1.6667 = 0.5108$, so $1/T = 1/298.15 + 0.5108/3950 = 3.3540\times10^{-3} + 1.2932\times10^{-4} = 3.4833\times10^{-3}$ K$^{-1}$, and $T = 287.07$ K $= 13.9\ ^\circ$C (a higher count means a higher resistance, hence colder). Near 25 °C the divider gives $-55.6$ mV/K, which is $55.6/4.883 = 11.4$ counts/K, so one count is 0.088 K. The conversion needs a logarithm, which is done in the host program rather than in 8-bit firmware.

### Example 3 — Least-squares calibration of a Hall sensor

Counts 513, 571, 628, 685 were recorded at 0, 20, 40 and 60 mT. Find the line, its uncertainties and the field for a count of 650.

**Solution.** The means are $\bar x = 30$ mT and $\bar N = 2397/4 = 599.25$. Then $\sum(x - \bar x)^{2} = 900 + 100 + 100 + 900 = 2000$ and $\sum(x-\bar x)(N-\bar N) = 2587.5 + 282.5 + 287.5 + 2572.5 = 5730$, so $a = 2.865$ counts/mT and $b = 599.25 - 2.865\times30 = 513.3$. This is $2.865\times4.883 = 13.99$ mV/mT, matching the 14 mV/mT of the data sheet. The residuals are $-0.3, +0.4, +0.1, -0.2$ counts, so $s^{2} = 0.30/2 = 0.15$, $s = 0.39$ counts, $\sigma_a = 0.39/\sqrt{2000} = 0.009$ counts/mT and $\sigma_b = 0.39\sqrt{0.25 + 900/2000} = 0.32$ counts. A count of 650 gives $B = (650 - 513.3)/2.865 = 47.7$ mT.

## Common Misconceptions

- **"A 10-bit ADC measures to 0.1%."** One step is 0.1% of full scale only; noise and reference error add, and a small signal using a fraction of the range has far worse relative resolution.
- **"Averaging always improves accuracy."** It reduces random noise by $\sqrt{M}$ but leaves reference error, gain error and drift untouched.
- **"Faster sampling removes aliasing."** Only a filter before the converter or a rate above twice the highest component does; sampling at a multiple of an interfering frequency makes it look constant.
- **"The thermistor is linear over a few degrees, so the beta model is unnecessary."** The sensitivity $dR/dT$ falls by about 60% between 25 °C and 45 °C, so linear scaling distorts the result.

## Connections

- Quantisation noise and the Nyquist theorem were derived for PCM in communication-electronics-m3-l3; here they limit a measurement rather than a link.
- Johnson noise of resistors (communication-electronics-m3-l2) sets the floor for the transimpedance amplifier, as Lesson m3-l2 quantifies.
- The Hall voltage and the thermistor's semiconductor conductivity are discussed in solid-state-physics-lab-m1-l3 and solid-state-physics-m3-l3.
- microcontroller-and-embedded-systems-lab-m1-l2 builds the same ADC measurements at the bench; this lesson supplies the formulae.
- The beta model is an Arrhenius law from thermal-physics-and-statistical-mechanics-m3-l1, with $B$ an activation energy over $k$.

## Quick Check

1. A 12-bit ADC with a 3.3 V reference returns 2048. What voltage does this represent, and what is the LSB?
2. A 1.5 kHz signal is sampled at 2 kS/s. What alias frequency appears?
3. How many readings must be averaged to gain 3 bits, and what is the time at 104 µs each?
4. An LM35 is read with the 1.1 V reference. What is the count at 37 °C?
5. A Hall sensor reads count 513 at zero field and 656 at 50 mT. What is the sensitivity in counts/mT and mV/mT with 5 V reference?

## Takeaway

- The ADC maps voltage to integers with a step $V_{\text{ref}}/2^{n}$ and noise $\Delta/\sqrt{12}$; the Uno's takes 104 µs per conversion.
- Sample at more than twice the highest frequency after filtering, or aliases are unremovable.
- Oversampling gains one bit per four-fold averaging for random noise only.
- Thermistor, LM35, photodiode and Hall sensors need conditioning to the ADC range.
- Least-squares calibration gives the conversion and its uncertainty.
