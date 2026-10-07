***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-5
semesterName: Semester 5
subjectId: physics
subjectName: Physics
courseId: microcontroller-and-embedded-systems
courseName: Microcontroller and Embedded Systems (Physics Option B)
moduleId: microcontroller-and-embedded-systems-module-3
moduleName: Serial Buses, Data Logging and the Instrumentation Project
lessonId: microcontroller-and-embedded-systems-m3-l3
lessonName: Project: A Photogate Pendulum Timer
lessonNumber: 9
moduleNumber: 3
semesterNumber: 5
difficulty: advanced
estimatedStudyMinutes: 60
releaseOrder: 9
prerequisites:
  - microcontroller-and-embedded-systems-m3-l2
  - microcontroller-and-embedded-systems-m2-l2
  - microcontroller-and-embedded-systems-m2-l3
learningObjectives:
  - Specify an instrument from the physics (pendulum period, amplitude correction) and a target uncertainty, and build a timing and uncertainty budget.
  - Write interrupt-driven Arduino-style C that timestamps photogate edges with Timer1 input capture and an overflow extension.
  - Calibrate the microcontroller clock against a reference and propagate the correction to the measured value of g.
  - Analyse the logged data in Python by a least-squares fit of the squared period against length, and report g with a stated uncertainty.
concepts:
  - Photogate and edge timing
  - Input-capture timestamping
  - Same-direction period measurement
  - Clock calibration
  - Uncertainty budget
  - Amplitude correction of the pendulum period
  - Host-side least-squares analysis
tags:
  - physics
  - microcontroller-and-embedded-systems
  - instrumentation
  - pendulum
sourceType: authored-courseware
status: in-review
assessmentHints:
  - computational
  - problem-solving
  - derivation
  - short-answer
***

# Project: A Photogate Pendulum Timer

## Overview

This lesson combines everything in the course in one instrument: a photogate pendulum timer that measures the local acceleration of gravity $g$. A bob with a small flag swings through an infrared beam; the microcontroller timestamps each interruption to half a microsecond with the input-capture hardware of Lesson m2-l2, a Python program on the host turns the timestamps into periods, and a least-squares fit of $T^{2}$ against length yields $g$. The interest lies less in the answer than in the budget: which errors matter, which are cancelled by the method, and what must be calibrated. The same skeleton, a sensor, a timer, a logger and a host analysis, serves a PID-controlled temperature bath (lab course lesson 4), which is the alternative project.

## Learning Path

- **What you should already know**: Timer1 input capture and prescalers (Lesson m2-l2); photodiode conditioning and least-squares calibration (Lesson m2-l3); timestamps, buffers and clock drift (Lesson m3-l2); serial output (Lesson m3-l1).
- **What this lesson adds**: the pendulum model and its amplitude correction, the photogate, interrupt-driven timestamping, clock calibration, an uncertainty budget, and a complete host analysis.
- **What later lessons this will unlock**: this is the final lesson; it prepares the capstone project and viva of the lab course.

## Core Explanation

### The physics and the target

For a simple pendulum of length $L$ (to the centre of mass) and amplitude $\theta_0$, the exact period is a series,

$$T = 2\pi\sqrt{\frac{L}{g}}\left(1 + \frac{\theta_0^{2}}{16} + \frac{11\,\theta_0^{4}}{3072} + \cdots\right),$$

so that

$$g = \frac{4\pi^{2}L}{T^{2}}\left(1 + \frac{\theta_0^{2}}{16}\right)^{2}.$$

At $\theta_0 = 0.1$ rad (5.7°) the correction factor is $(1.000625)^{2} = 1.00125$, +0.125%, which cannot be neglected for a 0.1% instrument. For $L = 1.000$ m and $g = 9.780$ m/s² (about the local value at Bengaluru) $T_0 = 2\pi\sqrt{1/9.78} = 2.0091$ s and $T = 2.0104$ s. A target of 0.1% in $g$ means 0.05% in $T$, i.e. 1 ms on 2 s, which sets the clock and edge-timing requirements.

### The photogate and the signal chain

An infrared LED (940 nm) faces a photodiode or phototransistor across a gap of a few centimetres; the flag on the bob interrupts the beam at the lowest point of the swing. The photocurrent is converted to a voltage as in Lesson m2-l3 and squared by a Schmitt trigger (Lesson m2-l1) so the pin sees a clean edge, high with the beam clear and low when blocked. The output drives ICP1 (PB0, pin 8), and a pull-up is set. No debouncing is needed because the optical path has no moving contact.

The bob passes the gate twice per period, once in each direction. Timing the *blocked* edge on each pass would measure half-periods that differ by the flag width over the speed, since in one direction that edge is the flag's leading edge and in the other its trailing edge. Instead the period is computed from edges **two apart**, $T = t_{k+2} - t_k$, which are the same edge of the flag moving in the same direction. Any fixed threshold offset or beam geometry then cancels. The residual is the change of speed between the two passes: at the bottom $v = \theta_0\sqrt{gL} = 0.313$ m/s, so a threshold offset of 0.1 mm is a delay of 0.32 ms, and if friction lowers the speed by 0.2% per period the change in the delay is 0.6 µs, negligible.

### Firmware: timestamps by input capture

Timer1 runs with $N = 8$ (0.5 µs per tick; Lesson m2-l2). The hardware latches `TCNT1` into `ICR1` at the falling edge; the capture ISR extends it with an overflow count (period 32.768 ms) and queues the 32-bit result, and the main loop sends it by serial.

```c
volatile uint16_t ovf;
volatile uint32_t stamp[16]; volatile uint8_t head, tail;
ISR(TIMER1_OVF_vect) { ovf++; }
ISR(TIMER1_CAPT_vect) {
    uint16_t lo = ICR1, hi = ovf;
    if ((TIFR1 & (1 << TOV1)) && lo < 0x8000) hi++;    /* overflow pending */
    stamp[head] = ((uint32_t)hi << 16) | lo;
    head = (head + 1) & 15;
}
void setup(void) {
    Serial.begin(115200);
    PORTB |= (1 << PB0);                               /* pull-up on ICP1 */
    TCCR1B = (1 << CS11);                              /* N = 8, falling edge */
    TIMSK1 = (1 << ICIE1) | (1 << TOIE1);
    sei();
}
void loop(void) {
    if (tail != head) { Serial.println(stamp[tail]); tail = (tail + 1) & 15; }
}
```

The test of `TOV1` handles the case where the overflow occurred just before the capture and its ISR is still waiting because interrupts are disabled inside the capture ISR. A 32-bit counter of 0.5 µs ticks lasts $2^{32} \times 0.5\ \mu\text{s} = 2147$ s. The overflow ISR runs 30.5 times per second, which is negligible load. Each stamp prints as at most 10 digits and a newline, about 1 ms at 115,200 baud, far shorter than the 1 s between edges.

### Clock calibration and the uncertainty budget

The Uno's ceramic resonator is specified to $\pm0.5\%$, which would put $\pm1\%$ on $g$ because $g \propto T^{-2}$. The clock is therefore calibrated: the 1 Hz output of a DS3231 RTC (Lesson m3-l2) is applied to ICP1 for 100 s, and the tick count gives the true timer frequency. The budget for a 2.01 s period then reads:

| Source | $\delta T/T$ | $\delta g/g$ |
|---|---|---|
| Timer quantisation, $\pm0.5\ \mu$s | $2.5\times10^{-7}$ | $5\times10^{-7}$ |
| Resonator, uncalibrated | $5\times10^{-3}$ | $1\times10^{-2}$ |
| Clock after DS3231 calibration, 2 ppm | $2\times10^{-6}$ | $4\times10^{-6}$ |
| Length $\pm1$ mm in 1 m | | $1\times10^{-3}$ |
| Amplitude $\pm0.01$ rad at $\theta_0 = 0.1$ | | $2.5\times10^{-4}$ |

After calibration the uncertainty is the length and amplitude terms in quadrature, $\sqrt{(10^{-3})^{2} + (2.5\times10^{-4})^{2}} = 1.03\times10^{-3}$: 0.10%, so a tenfold finer timer would not improve the result; a better length measurement would.

### Host analysis

On the host, a few lines convert stamps to periods and fit $T^{2}$ against $L$ (Lesson m2-l3):

```python
from statistics import linear_regression
from math import pi
F = 1_998_800                                   # calibrated timer clock, Hz
periods = [(b - a) / F for a, b in zip(ticks, ticks[2:])]   # same-direction edges
L = [0.400, 0.600, 0.800, 1.000]                # m
T = [1.2714, 1.5572, 1.7982, 2.0103]            # s, mean period at each length
slope, icpt = linear_regression(L, [t * t for t in T])
g = 4 * pi**2 / slope * (1 + 0.1**2 / 16)**2    # with amplitude correction
```

A fit of $T^{2} = (4\pi^{2}/g)L + b$ with free intercept $b$ checks the method: $b$ should vanish within error, since a nonzero intercept signals an error in the length origin (for example, the distance to the pivot rather than to the centre of the bob).

## Key Ideas

- **Pendulum**: $g = (4\pi^{2}L/T^{2})(1+\theta_0^{2}/16)^{2}$; the amplitude correction is +0.125% at 0.1 rad.
- **Edges two apart** give a period free of flag width and threshold offset.
- **Input capture** gives 0.5 µs stamps independent of interrupt latency; an overflow count extends the range.
- **Calibrate the clock**: a 0.5% resonator gives 1% in $g$; a 2 ppm RTC removes it.
- **Budget first**: length and amplitude dominate, not the timer.

## Worked Examples

### Example 1 — Why 0.5 µs resolution is enough

How much timing resolution does a 0.1% measurement of $g$ need, and how does the achieved resolution compare?

**Solution.** The target $\delta g/g = 10^{-3}$ means $\delta T/T = 5\times10^{-4}$, which is $5\times10^{-4} \times 2.01\ \text{s} = 1.0$ ms. The timer's quantisation is $\pm0.5\ \mu$s, the difference of two stamps having rms $\sqrt{2}\times0.5/\sqrt{12} = 0.20\ \mu$s. This is 5000 times finer than required. The latency of the capture ISR does not enter because the stamp was latched by hardware, and the 17-cycle latency of an `INT0` ISR (1.06 µs; Lesson m2-l1) would not have mattered either. The real limits are the clock accuracy and the length, as the budget shows.

### Example 2 — Calibrating the timer clock

The DS3231 square wave is timed over 100 s, and 199,880,000 ticks are counted at $N = 8$. Find the timer clock and the effect on $g$ if it were ignored.

**Solution.** The nominal tick rate is $16\ \text{MHz}/8 = 2.000$ MHz, so 100 s should give $2.000\times10^{8}$ ticks. The measured rate is $199{,}880{,}000/100\ \text{s} = 1{,}998{,}800$ Hz, $-600$ ppm from nominal, well inside the $\pm0.5\%$ specification of the resonator. A period of $C$ ticks is truly $C/1{,}998{,}800$ s, but the nominal assumption gives $C/2.000\times10^{6}$ s, lower by the factor $1.9988/2.0000 = 0.9994$. Since $g \propto T^{-2}$, an uncorrected calculation would give $g$ too high by $1/0.9994^{2} = 1.0012$: 9.780 would appear as 9.792 m/s². The calibration count has quantisation error of 1 tick in $2\times10^{8}$, 5 ppb, so the limit is the 2 ppm of the DS3231.

### Example 3 — The fit for $g$

Mean periods at four lengths are in the code above. Find $g$ and its statistical uncertainty.

**Solution.** The squares are $T^{2} = 1.61646, 2.42487, 3.23352, 4.04131$ s² at $L = 0.4, 0.6, 0.8, 1.0$ m. The means are $\bar L = 0.700$ and $\overline{T^{2}} = 2.82904$; $\sum(L - \bar L)^{2} = 0.2$ and $\sum(L-\bar L)(T^{2} - \overline{T^{2}}) = 0.80832$, so the slope is $4.0416$ s²/m and the intercept is $-0.0001$ s², consistent with zero. Then

$$g_{\text{raw}} = \frac{4\pi^{2}}{4.0416} = 9.768\ \text{m/s}^{2}, \qquad g = 9.768 \times 1.00125 = 9.780\ \text{m/s}^{2}.$$

The residuals of the fit are $-1.0, -0.1, +3.2, -2.1$ in units of $10^{-4}$ s², so $s = \sqrt{1.60\times10^{-7}/2} = 2.8\times10^{-4}$ s² and $\sigma_{\text{slope}} = s/\sqrt{0.2} = 6.3\times10^{-4}$ s²/m, a statistical 0.016%, or $\pm0.0015$ m/s². Including the 0.10% systematic uncertainty from the budget, $g = 9.780 \pm 0.010$ m/s², consistent with the local value.

## Common Misconceptions

- **"A finer timer gives a better $g$."** The budget shows that resolution is already 5000 times finer than needed; length and clock accuracy limit the result.
- **"The Uno's 16 MHz is exactly 16 MHz."** A ceramic resonator is good to 0.5%, which here would put 1% on $g$.
- **"Timing every interruption of the beam gives the period."** Successive interruptions are half-periods of different flag edges; use edges two apart.
- **"The amplitude correction is negligible for small swings."** At 5.7° it is 0.125%, larger than the 0.1% target.

## Connections

- The pendulum is the simple harmonic motion of waves-and-optics-m1-l1; the amplitude series is the first anharmonic correction.
- The calibrated clock uses the crystal-oscillator stability of communication-electronics-m1-l3 and the timer arithmetic of Lesson m2-l2.
- The photodiode is a semiconductor junction (solid-state-physics-m3-l3), read with the transimpedance stage of Lesson m2-l3.
- microcontroller-and-embedded-systems-lab-m1-l6 describes the capstone report and viva for which this project is a model; microcontroller-and-embedded-systems-lab-m1-l4 supplies the PID loop for the temperature-bath variant.
- The least-squares fit and its uncertainty are those of Lesson m2-l3, applied to $T^{2}$ against $L$.

## Quick Check

1. Calculate the period of a 0.500 m pendulum at $g = 9.78$ m/s² and amplitude 0.10 rad.
2. A 100 s calibration gives 200,060,000 ticks at $N = 8$. What is the timer clock and the sign of the error in $g$ if ignored?
3. What would happen to the measured period if the timer used both beam edges alternately?
4. How many ticks are in a 2.01 s period at $N = 8$, and how many overflows?
5. For $\delta L = 2$ mm on $L = 0.500$ m, find $\delta g/g$.

## Takeaway

- A photogate with input capture times a pendulum to 0.5 µs, far beyond what 0.1% in $g$ requires.
- Use same-direction edges, calibrate the clock against a 2 ppm RTC and apply the amplitude correction.
- Length and amplitude dominate the uncertainty; the budget tells you where to spend effort.
- The workflow of sensor, timer, logger, serial link and Python fit carries over to any instrument, including a PID temperature bath.
