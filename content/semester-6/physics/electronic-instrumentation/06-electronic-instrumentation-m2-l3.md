***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-6
semesterName: Semester 6
subjectId: physics
subjectName: Physics
courseId: electronic-instrumentation
courseName: Electronic Instrumentation (Physics Option B)
moduleId: electronic-instrumentation-module-2
moduleName: Signal Conditioning and Amplification
lessonId: electronic-instrumentation-m2-l3
lessonName: Lock-in Amplification, Grounding and Shielding
lessonNumber: 6
moduleNumber: 2
semesterNumber: 6
difficulty: advanced
estimatedStudyMinutes: 60
releaseOrder: 6
prerequisites:
  - electronic-instrumentation-m2-l2
  - communication-electronics-m2-l1
  - communication-electronics-m1-l1
learningObjectives:
  - Derive the output of a phase-sensitive detector and recover amplitude and phase from the in-phase and quadrature outputs.
  - Calculate the equivalent noise bandwidth of a lock-in amplifier from its time constant and filter order, and the resulting signal-to-noise gain.
  - Estimate capacitive and magnetic interference coupling and choose between shielding, twisting and differential measurement.
  - Apply single-point grounding and shield-termination rules to avoid ground loops.
concepts:
  - Phase-sensitive detection
  - In-phase and quadrature outputs
  - Equivalent noise bandwidth
  - Lock-in time constant
  - Capacitive and inductive coupling
  - Ground loops
  - Shield grounding
tags:
  - physics
  - electronic-instrumentation
  - lock-in-amplifier
  - shielding
sourceType: authored-courseware
status: in-review
assessmentHints:
  - conceptual
  - derivation
  - problem-solving
  - computational
***

# Lock-in Amplification, Grounding and Shielding

## Overview

A well-conditioned amplifier still cannot recover a signal that is smaller than the noise in the bandwidth that it has to admit. If the signal can be made to oscillate at a known frequency, however, the measurement can be moved away from the low-frequency drift and $1/f$ noise to a quiet frequency, and the receiver can use a bandwidth of a fraction of a hertz. That is the **lock-in amplifier**: it multiplies the input by a reference at the signal frequency and averages the product, rejecting noise at every other frequency. The lesson derives its output, shows that it acts as an extremely narrow band-pass filter, and then turns to the other half of low-noise practice. Interference from the mains, radio and neighbouring circuits couples into a measurement through stray capacitance, magnetic induction and shared ground impedance, and **shielding** and **grounding** keep it out.

## Learning Path

- **What you should already know**: instrumentation amplifier and CMRR (Lesson m2-l2); synchronous detection of DSB-SC signals (Communication Electronics, Lesson m2-l1); signal spectra and filtering (Communication Electronics, Lesson m1-l1).
- **What this lesson adds**: the phase-sensitive detector and dual-phase output; equivalent noise bandwidth; coupling mechanisms; shield and ground rules.
- **What later lessons this will unlock**: the noise analysis and averaging of Lesson m3-l2; the end-to-end error budget of Lesson m3-l3 and the Electronic Instrumentation Lab capstone.

## Core Explanation

### The phase-sensitive detector

Suppose the measurand is modulated so that the sensor output is $V_s\cos(\omega_r t + \theta)$, with $\theta$ an unknown phase delay. The lock-in multiplies the input by a reference $2\cos(\omega_r t)$ from the same source. Using $2\cos A\cos B = \cos(A - B) + \cos(A + B)$,

$$V_s\cos(\omega_r t + \theta)\cdot 2\cos\omega_r t = V_s\cos\theta + V_s\cos(2\omega_r t + \theta).$$

A low-pass filter removes the term at $2\omega_r$ and leaves the **in-phase output**

$$X = V_s\cos\theta.$$

This is the product detector of Communication Electronics (Lesson m2-l1). The result depends on the phase, so a second channel multiplies by the reference shifted by $90^\circ$, $-2\sin\omega_r t$, giving the **quadrature output** $Y = V_s\sin\theta$. Then

$$R = \sqrt{X^2 + Y^2} = V_s,\qquad \theta = \arctan\frac{Y}{X},$$

so a dual-phase lock-in reports both the amplitude and the phase independently of the unknown delay.

### Noise rejection and equivalent noise bandwidth

Noise at frequency $f_n$ multiplied by the reference produces components at $f_n \pm f_r$. Only those with $|f_n - f_r|$ inside the pass band of the low-pass filter survive. A noise component at a different frequency becomes an AC term at the output and is averaged away. The lock-in is therefore equivalent to a band-pass filter centred on $f_r$ whose width is set by the low-pass filter, not by the input circuitry, and which can be made far narrower than any LC filter and is tracked automatically with the reference.

The width is measured by the **equivalent noise bandwidth**. For a low-pass filter $H(f)$ the baseband value is $B = \int_0^\infty |H(f)|^2 df$. For a single RC section with time constant $\tau$, $|H|^2 = 1/[1 + (2\pi f\tau)^2]$, so

$$B = \frac{1}{2\pi\tau}\int_0^\infty \frac{du}{1 + u^2} = \frac{1}{4\tau}.$$

Two identical cascaded sections (12 dB per octave, the usual setting) give $|H|^2 = 1/[1 + (2\pi f\tau)^2]^2$ and $B = 1/(8\tau)$. For white input noise of one-sided density $e_n$ (V/$\sqrt{\text{Hz}}$), both sidebands about $f_r$ fold onto the baseband, doubling the noise power, but only the in-phase half reaches $X$. The noise is therefore $e_n\sqrt{B}$, to be compared with the rms signal: the lock-in behaves as a band-pass filter of noise bandwidth $B$ centred on $f_r$. Lengthening $\tau$ narrows the bandwidth and raises the signal-to-noise ratio as $\sqrt{\tau}$ at the price of a slower response: after a step the output must settle for about $5\tau$ (Lesson m1-l1) before a reading is valid. This is the time-bandwidth trade-off. The ratio of the largest interfering signal that the input can tolerate to the full-scale signal is the **dynamic reserve**, typically $60$ to $100$ dB.

### Choosing the reference frequency

The modulation frequency is chosen above the corner of the $1/f$ noise (Lesson m3-l2), below the bandwidth of the sensor and preamplifier, and away from the mains frequency and its harmonics, which in India means avoiding multiples of $50$ Hz; $137$ Hz or $1.1$ kHz are common. An optical chopper, a modulated laser or an AC-driven bridge (Lesson m2-l1) provides the modulation, and the reference is taken from the same source.

```python
import numpy as np
fs, fr, T = 10000.0, 137.0, 20.0
t = np.arange(0, T, 1 / fs)
x = 0.05 * np.cos(2 * np.pi * fr * t + 0.6) + 0.5 * np.random.default_rng(1).standard_normal(t.size)
X = np.mean(2 * x * np.cos(2 * np.pi * fr * t))
Y = np.mean(-2 * x * np.sin(2 * np.pi * fr * t))
print(np.hypot(X, Y), np.arctan2(Y, X))
```

This digital lock-in averages the two products over $20$ s. It recovers an amplitude of $0.050 \pm 0.002$ V and a phase of $0.60 \pm 0.03$ rad from a signal ten times smaller than the noise.

### Interference coupling

Unwanted signals reach the measurement by three routes. **Capacitive coupling** passes a displacement current $I = \omega C_s V$ through a stray capacitance $C_s$ from a source $V$ (the mains wiring) into a high-impedance node, producing a voltage $IR_s$ across the source resistance $R_s$. **Inductive coupling** induces an EMF $\omega BA$ in a signal loop of area $A$ in a magnetic field $B$ (the mains transformer), by Faraday's law. **Conductive coupling** occurs when two circuits share a return conductor: the current of one drops a voltage $IZ$ across the impedance that the other uses as a reference.

Each route has its remedy. An electrostatic **shield**, a grounded conductor surrounding the signal wire or circuit, diverts the displacement current to ground instead of the node. Shielding is ineffective against low-frequency magnetic fields; instead the loop area is minimised by running signal and return **twisted** together, since the EMFs in adjacent half-turns have opposite sign and cancel. **Differential** measurement, with the instrumentation amplifier, rejects the remaining interference that couples equally to both wires.

### Grounding

A **ground loop** forms when the signal ground is connected to earth at two places: the earth potential difference, often tens of millivolts at 50 Hz, drives a current round the loop and appears in series with the signal. The rules are as follows.

- Use **single-point (star) grounding**: each circuit returns separately to a single reference point, so that no return current of one stage flows through the reference of another.
- Keep **analogue and digital grounds** separate, joined at one point, so the fast digital return currents do not pass through the analogue reference.
- Connect the **cable shield at one end only** at low frequency, normally at the signal-reference end, so that the shield does not carry a loop current. At radio frequency, shields are grounded at both ends.
- Do not use the shield as the signal return; use a shielded *twisted pair* with a differential input, and supply a DC return for the amplifier bias currents.
- Where a sensor and the electronics are at different ground potentials, use an isolation amplifier (Lesson m2-l2).

## Key Ideas

- **Phase-sensitive detection**: multiplying by the reference and low-pass filtering gives $X = V_s\cos\theta$ and $Y = V_s\sin\theta$, so $R = V_s$ and $\theta = \arctan(Y/X)$.
- **Equivalent noise bandwidth**: $B = 1/(4\tau)$ for one pole and $1/(8\tau)$ for two, the effective noise bandwidth of the lock-in about $f_r$.
- **Time-bandwidth trade-off**: noise falls as $1/\sqrt{\tau}$ but settling takes about $5\tau$.
- **Reference frequency**: above the $1/f$ corner, away from mains harmonics.
- **Interference** couples capacitively ($\omega C_sV$), magnetically ($\omega BA$) and conductively; shield, twist and use differential inputs respectively.
- **Grounding**: single point, separate analogue and digital grounds, shield grounded at one end at low frequency.

## Worked Examples

### Example 1 — Signal-to-noise gain of a lock-in

A signal of $50$ nV rms is measured in a white noise of $20\ \text{nV}/\sqrt{\text{Hz}}$. Compare a broadband measurement of bandwidth $10$ kHz with a lock-in using $\tau = 1.0$ s and a two-section low-pass filter.

**Solution.** The broadband noise is $20\ \text{nV} \times \sqrt{10^{4}} = 2.0\,\mu$V, so the voltage signal-to-noise ratio is $50/2000 = 0.025$ and the signal is invisible. The lock-in has an effective noise bandwidth $B = 1/(8\tau) = 0.125$ Hz, so the noise is $20\ \text{nV} \times \sqrt{0.125} = 7.1$ nV and the ratio is $50/7.1 = 7.1$. The improvement is $7.07/0.025 = 283 = \sqrt{10^{4}/0.125}$. A wait of $5\tau = 5$ s is required after changing a parameter, and halving the noise again would require $\tau = 4$ s.

### Example 2 — Amplitude and phase from X and Y

A dual-phase lock-in outputs $X = 1.20\,\mu$V and $Y = 1.60\,\mu$V. Find the amplitude and phase, and the outputs after the reference phase is advanced by the measured angle.

**Solution.** $R = \sqrt{1.20^2 + 1.60^2} = 2.00\,\mu$V and $\theta = \arctan(1.60/1.20) = 53.1^\circ$. Shifting the reference by $\varphi$ replaces $\theta$ by $\theta - \varphi$, so with $\varphi = 53.1^\circ$ the outputs become $X' = R\cos 0 = 2.00\,\mu$V and $Y' = 0$. This is how the phase control is "auto-phased"; the quadrature output then reports only the component of the signal that is $90^\circ$ out of phase, such as the loss of a sample.

### Example 3 — Mains pickup and lock-in rejection

A signal wire has a stray capacitance of $1.0$ pF to the $230$ V rms, $50$ Hz mains and a source resistance of $10$ k$\Omega$. Estimate the interference voltage. Then estimate the EMF in a $100\ \text{cm}^2$ loop in a $1.0\,\mu$T rms field, and the lock-in rejection of $50$ Hz at $f_r = 137$ Hz with $\tau = 1$ s and two sections.

**Solution.** The capacitive current is $I = 2\pi \times 50 \times 1.0 \times 10^{-12} \times 230 = 72$ nA, and across $10$ k$\Omega$ the voltage is $0.72$ mV (valid because $1/\omega C_s = 3.2$ G$\Omega \gg R_s$). The magnetic EMF is $2\pi \times 50 \times 1.0 \times 10^{-6} \times 10^{-2} = 3.1\,\mu$V. A grounded shield removes the first, and twisting the second. A mains component at offset $\delta$ from $f_r$ is attenuated in amplitude by $1/[1 + (2\pi\delta\tau)^2]$ for two sections. The fundamental, $\delta = 87$ Hz, is reduced by $1/(2.99 \times 10^{5})$, that is $109$ dB; the nearest harmonic, $150$ Hz at $\delta = 13$ Hz, by $1/6673$, that is $76$ dB. A reference at exactly $150$ Hz would have no rejection of that harmonic at all.

## Common Misconceptions

- **"A lock-in amplifier amplifies a signal."** Its job is selective measurement, not gain: it narrows the noise bandwidth, so that the signal stands out.
- **"A longer time constant always gives a better measurement."** Noise falls only as $1/\sqrt{\tau}$, drift builds up over long times, and the response slows; beyond a point there is no gain.
- **"A shield should be grounded at both ends for safety and noise."** At low frequency this makes a ground loop; the shield is grounded at one end, normally the signal reference.
- **"A shield stops magnetic pickup."** A thin non-magnetic shield does little at 50 Hz; reduce the loop area and twist the pair.
- **"Any ground is as good as another."** Separate grounds are at different potentials when current flows; the connection topology determines the result, not the number of earth points.

## Connections

- The product detector is the synchronous demodulator of Communication Electronics (Lesson m2-l1); a lock-in is a synchronous detector with a very narrow output filter.
- Faraday's law (Electricity and Magnetism, Lesson m3-l3) governs inductive pickup, and the displacement current of Maxwell's equations governs capacitive coupling.
- The Electronic Instrumentation Lab (Capstone) requires shielding and a single-point ground in the measurement chain.
- Chopper-stabilised amplifiers and modulated photometry move astronomical signals away from $1/f$ noise in exactly the same way.

## Quick Check

1. Show that the output of a phase-sensitive detector with the reference $2\cos\omega_r t$ is $V_s\cos\theta$ after low-pass filtering.
2. A lock-in has a single-pole filter with $\tau = 100$ ms. Find its equivalent noise bandwidth.
3. A signal has $X = 3.0$ V and $Y = -4.0$ V. Find the amplitude and the phase.
4. Find the capacitive pickup current for $0.5$ pF coupling to $230$ V at $50$ Hz.
5. Why should a cable shield be grounded at only one end for low-frequency signals?

## Takeaway

- A lock-in measures amplitude and phase by multiplying with a reference and low-pass filtering.
- Its noise bandwidth is set by the time constant: $B = 1/(4\tau)$ for one pole, $1/(8\tau)$ for two.
- Choosing a reference away from mains harmonics and $1/f$ noise gives tens of decibels of rejection.
- Interference arrives by capacitive, magnetic and conductive routes, each with a distinct remedy.
- Good grounding is topology: one reference point, one shield end, separate analogue and digital returns.
