***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-4
semesterName: Semester 4
subjectId: physics
subjectName: Physics
courseId: communication-electronics
courseName: Communication Electronics
moduleId: communication-electronics-module-1
moduleName: Signals, Filters and Oscillators
lessonId: communication-electronics-m1-l2
lessonName: Passive and Active Filters
lessonNumber: 2
moduleNumber: 1
semesterNumber: 4
difficulty: intermediate
estimatedStudyMinutes: 55
releaseOrder: 2
prerequisites:
  - communication-electronics-m1-l1
  - basic-electronics-m1-l2
  - electricity-and-magnetism-m2-l3
learningObjectives:
  - Derive the transfer function $H(j\omega)$ of first-order RC and second-order RLC filters and sketch their Bode magnitude and phase plots.
  - Relate the quality factor $Q$ of a resonant circuit to its centre frequency and 3 dB bandwidth through $B = f_0/Q$.
  - Compare Butterworth and Chebyshev responses and calculate the filter order needed to meet a stopband specification.
  - Design a first-order active filter and a unity-gain or equal-component Sallen–Key second-order section.
concepts:
  - Transfer function and frequency response
  - Bode plot
  - Quality factor and 3 dB bandwidth
  - Butterworth response
  - Chebyshev response
  - Sallen–Key active filter
tags:
  - physics
  - communication-electronics
  - filters
  - frequency-response
sourceType: authored-courseware
status: in-review
assessmentHints:
  - derivation
  - problem-solving
  - conceptual
  - computational
***

# Passive and Active Filters

## Overview

Every signal occupies a band of frequencies (Lesson m1-l1), and a **filter** decides which bands survive: it removes out-of-band noise, separates multiplexed channels, rejects the unwanted sideband in an SSB transmitter and sets a receiver's selectivity. This lesson treats a filter as a linear system with a **transfer function** $H(j\omega)$. We derive the response of first-order RC sections and second-order RLC resonators, read Bode plots, and connect the quality factor $Q$ to bandwidth. We then compare the two standard approximations to the ideal "brick-wall" response, the maximally flat Butterworth and the equiripple Chebyshev, and finish with op-amp active filters, which provide gain and high $Q$ without inductors.

## Learning Path

- **What you should already know**: the impedances $R$, $1/(j\omega C)$ and $j\omega L$ (Basic Electronics, Lesson m1-l2); the RC time constant (Electricity and Magnetism, Lesson m2-l3); spectra, bandwidth and decibels (Lesson m1-l1).
- **What this lesson adds**: transfer functions and Bode plots; $Q$ and bandwidth of resonant circuits; Butterworth and Chebyshev shapes and order selection; active filter sections.
- **What later lessons this will unlock**: oscillator feedback networks (Lesson m1-l3); sideband filters and envelope detectors (Lesson m2-l1); receiver selectivity (Lesson m2-l2); noise-equivalent bandwidth (Lesson m3-l2).

## Core Explanation

### The transfer function

For a linear circuit driven by a sinusoid of angular frequency $\omega$, the ratio of output phasor to input phasor is the **transfer function**

$$H(j\omega) = \frac{V_{\text{out}}}{V_{\text{in}}} = |H(j\omega)|\,e^{j\phi(\omega)}.$$

$|H|$ is the **magnitude response** (gain) and $\phi$ the **phase response**. Because any input can be written as a superposition of sinusoids (Lesson m1-l1), the output spectrum is simply $Y(f) = H(f)X(f)$: a filter multiplies the spectrum. Filters are classified by which band they pass: **low-pass**, **high-pass**, **band-pass** and **band-stop** (notch).

The **ideal filter** has $|H| = 1$ in the passband, $|H| = 0$ in the stopband and linear phase. It cannot be built: its impulse response is a sinc extending to $t \to -\infty$, so it would respond before the input arrives. Practical filters have a finite **transition band**.

### First-order RC filters

A series resistor followed by a shunt capacitor forms a voltage divider:

$$H(j\omega) = \frac{1/(j\omega C)}{R + 1/(j\omega C)} = \frac{1}{1 + j\omega RC} = \frac{1}{1 + j\omega/\omega_c}, \qquad \omega_c = \frac{1}{RC}.$$

The magnitude and phase are

$$|H| = \frac{1}{\sqrt{1 + (\omega/\omega_c)^2}}, \qquad \phi = -\arctan(\omega/\omega_c).$$

At the **cut-off frequency** $f_c = 1/(2\pi RC)$, $|H| = 1/\sqrt{2}$, the output power has halved and the gain is $-3.01$ dB; the phase is $-45^\circ$. Interchanging $R$ and $C$ gives the high-pass filter $H = (j\omega/\omega_c)/(1 + j\omega/\omega_c)$, with the same $f_c$ and a phase that falls from $+90^\circ$ to $0$.

### Bode plots

A **Bode plot** displays $20\log_{10}|H|$ in dB and $\phi$ in degrees against $\log f$. For the low-pass section, when $\omega \ll \omega_c$, $|H|_{\text{dB}} \approx 0$; when $\omega \gg \omega_c$, $|H|_{\text{dB}} \approx -20\log_{10}(\omega/\omega_c)$, a straight line falling at **20 dB per decade** (6 dB per octave). The two asymptotes meet at the **corner frequency** $\omega_c$, where the true curve lies 3 dB below them. The phase asymptote runs from $0^\circ$ a decade below $\omega_c$ to $-90^\circ$ a decade above. Logarithmic axes turn products of factors into sums of straight lines, so an $n$th-order filter ultimately falls at $20n$ dB/decade.

### Second-order RLC filters, Q and bandwidth

A series RLC circuit with the output taken across $R$ is a band-pass filter:

$$H(j\omega) = \frac{R}{R + j(\omega L - 1/\omega C)} = \frac{1}{1 + jQ\left(\dfrac{\omega}{\omega_0} - \dfrac{\omega_0}{\omega}\right)},$$

where the **resonant frequency** and **quality factor** are

$$\omega_0 = \frac{1}{\sqrt{LC}}, \qquad Q = \frac{\omega_0 L}{R} = \frac{1}{R}\sqrt{\frac{L}{C}}.$$

At resonance the reactances cancel and $|H| = 1$. The half-power points occur where $Q(\omega/\omega_0 - \omega_0/\omega) = \pm 1$. Writing $\omega_{1,2}$ for the two roots, subtracting the two equations gives $\omega_2 - \omega_1 = \omega_0/Q$, so the **3 dB bandwidth** is

$$B = f_2 - f_1 = \frac{f_0}{Q},$$

and the geometric mean of the edges is $f_0 = \sqrt{f_1 f_2}$. A high $Q$ means a sharp, narrow resonance. Physically $Q = 2\pi \times$ (energy stored)/(energy dissipated per cycle), the same definition used for a damped mechanical oscillator. For a **parallel tank** ($L$ with series loss resistance $r$, in parallel with $C$), the impedance at resonance is a pure **dynamic resistance** $R_D = L/(Cr) = Q\omega_0 L$, which is why tanks are used as tuned loads in RF amplifiers. Taking the output across $C$ in the series circuit instead gives a second-order low-pass response with a $Q$-dependent peak near $\omega_0$ and an ultimate roll-off of 40 dB/decade.

### Approximating the ideal response: Butterworth and Chebyshev

All-pole low-pass filters are designed from a magnitude-squared function normalised to a cut-off $\omega_c$.

The **Butterworth** response is

$$|H(j\omega)|^2 = \frac{1}{1 + (\omega/\omega_c)^{2n}}.$$

Its first $2n - 1$ derivatives vanish at $\omega = 0$, so it is **maximally flat** in the passband; it is $-3$ dB at $\omega_c$ for every order and rolls off monotonically at $20n$ dB/decade. Its poles lie equally spaced on a circle of radius $\omega_c$ in the left half of the $s$-plane. To achieve an attenuation of at least $A_s$ dB at $\omega_s$, the order must satisfy

$$n \ge \frac{\log_{10}\left(10^{A_s/10} - 1\right)}{2\log_{10}(\omega_s/\omega_c)}.$$

The **Chebyshev (type I)** response is

$$|H(j\omega)|^2 = \frac{1}{1 + \varepsilon^2 T_n^2(\omega/\omega_p)},$$

where $T_n(x) = \cos(n\cos^{-1}x)$ for $|x| \le 1$ and $\cosh(n\cosh^{-1}x)$ for $|x| > 1$ is the Chebyshev polynomial ($T_1 = x$, $T_2 = 2x^2 - 1$). Since $T_n$ oscillates between $\pm 1$ in the passband, the gain ripples between $1$ and $1/(1+\varepsilon^2)$, a **passband ripple** of $10\log_{10}(1 + \varepsilon^2)$ dB; $\omega_p$ is the ripple-band edge. Outside the passband $T_n$ grows rapidly, giving a much steeper transition than a Butterworth filter of the same order. The required order is

$$n \ge \frac{\cosh^{-1}\sqrt{(10^{A_s/10} - 1)/\varepsilon^2}}{\cosh^{-1}(\omega_s/\omega_p)}.$$

| Property | Butterworth | Chebyshev I |
|---|---|---|
| Passband | Maximally flat | Equiripple, ripple set by $\varepsilon$ |
| Transition band | Moderate | Steeper for the same order |
| Phase and group delay | Fairly smooth | More non-linear, more ringing |
| Typical use | Audio, anti-aliasing, general purpose | Channel and IF filters where sharp skirts matter |

(The Bessel filter sacrifices sharpness for the most linear phase.)

The snippet below plots the Butterworth magnitude response for orders 1 to 5; expect all curves to pass through $-3$ dB at $f/f_c = 1$ and to fall at $20n$ dB/decade beyond it.

```python
import numpy as np
import matplotlib.pyplot as plt

x = np.logspace(-1, 1, 400)                 # f / f_c from 0.1 to 10
for n in range(1, 6):
    H2 = 1.0 / (1.0 + x**(2*n))             # Butterworth |H|^2
    plt.semilogx(x, 10*np.log10(H2), label=f"n = {n}")
plt.axhline(-3, ls=":", c="k")
plt.xlabel("f / f_c"); plt.ylabel("|H| (dB)"); plt.ylim(-80, 5)
plt.legend(); plt.grid(True, which="both"); plt.show()
```

### Active filters

Audio-frequency inductors are bulky, lossy and pick up hum. An **active filter** uses an op-amp with resistors and capacitors to realise any pole pair, with gain and a low output impedance, so sections cascade without loading.

The simplest is the **first-order active low-pass**: an inverting amplifier whose feedback resistor $R_f$ is shunted by $C_f$, giving $H = -(R_f/R_1)/(1 + j\omega R_f C_f)$, a gain $R_f/R_1$ with cut-off $1/(2\pi R_f C_f)$.

The workhorse second-order section is the **Sallen–Key** low-pass: two resistors in series to the non-inverting input, one capacitor from their junction back to the output and one from the input to ground, with the op-amp set to a non-inverting gain $K = 1 + R_b/R_a$. Its transfer function has the standard second-order form

$$H(s) = \frac{K\omega_0^2}{s^2 + (\omega_0/Q)s + \omega_0^2}.$$

For the **equal-component** design ($R_1 = R_2 = R$, $C_1 = C_2 = C$), $\omega_0 = 1/RC$ and $Q = 1/(3 - K)$, so $Q$ is set by the gain alone and the circuit oscillates if $K \ge 3$. A second-order Butterworth section requires $Q = 1/\sqrt{2}$, i.e. $K = 3 - \sqrt{2} = 1.586$. Higher orders are built by cascading sections whose $Q$ values come from the pole positions: a fourth-order Butterworth uses $Q = 0.541$ and $Q = 1.307$. Swapping $R$ and $C$ gives the high-pass version.

## Key Ideas

- **Transfer function**: $H(j\omega) = V_{\text{out}}/V_{\text{in}}$; a filter multiplies the input spectrum by $H(f)$.
- **First-order RC**: $f_c = 1/(2\pi RC)$, $-3$ dB and $-45^\circ$ at cut-off, roll-off 20 dB/decade.
- **Bode plot**: dB against $\log f$; asymptotes meet at the corner frequency; an $n$th-order filter falls at $20n$ dB/decade.
- **Resonance**: $\omega_0 = 1/\sqrt{LC}$, $Q = \omega_0 L/R$, bandwidth $B = f_0/Q$.
- **Butterworth** is maximally flat; **Chebyshev** trades passband ripple for a steeper transition and lower order.
- **Active filters** realise pole pairs with op-amps, RC networks and gain; the equal-component Sallen–Key section has $Q = 1/(3-K)$.

## Worked Examples

### Example 1 — An anti-aliasing RC filter for telephone speech

Choose $C$ for an RC low-pass filter with $R = 10$ kΩ and $f_c = 3.4$ kHz. Find the gain and phase at 10 kHz.

**Solution.** From $f_c = 1/(2\pi RC)$,

$$C = \frac{1}{2\pi \times 10^4 \times 3400} = 4.68\ \text{nF}$$

(4.7 nF is the nearest standard value). At 10 kHz, $f/f_c = 2.94$:

$$|H| = \frac{1}{\sqrt{1 + 2.94^2}} = 0.322 \;\Rightarrow\; 20\log_{10}0.322 = -9.8\ \text{dB}, \qquad \phi = -\arctan 2.94 = -71.2^\circ.$$

One pole gives under 10 dB of rejection 1.5 octaves above cut-off, so practical anti-aliasing filters are of higher order.

### Example 2 — A tuned circuit for medium-wave reception

A series RLC circuit has $L = 100$ µH, $C = 253$ pF and $R = 10$ Ω. Find $f_0$, $Q$ and the 3 dB bandwidth. Is it selective enough for AM channels spaced 9 kHz apart?

**Solution.**

$$f_0 = \frac{1}{2\pi\sqrt{100\times10^{-6} \times 253\times10^{-12}}} = 1.00\ \text{MHz}.$$

$$Q = \frac{2\pi f_0 L}{R} = \frac{2\pi \times 10^6 \times 10^{-4}}{10} = 62.8, \qquad B = \frac{f_0}{Q} = \frac{10^6}{62.8} = 15.9\ \text{kHz}.$$

The bandwidth exceeds the 9 kHz channel spacing, so neighbours are only partly rejected, and $B = f_0/Q$ changes as the circuit is retuned. Both defects motivate the superheterodyne receiver (Lesson m2-l2).

### Example 3 — Butterworth versus Chebyshev order

A low-pass filter must pass 0 to 3.4 kHz and attenuate by at least 40 dB at 8 kHz. Find the minimum order for (a) a Butterworth filter with its 3 dB point at 3.4 kHz and (b) a Chebyshev filter with 1 dB ripple up to 3.4 kHz.

**Solution.** The frequency ratio is $\omega_s/\omega_c = 8/3.4 = 2.353$ and $10^{A_s/10} - 1 = 9999$.

(a) $n \ge \log_{10}(9999)/(2\log_{10}2.353) = 4.000/(2 \times 0.3716) = 5.38$, so $n = 6$. Check: $10\log_{10}(1 + 2.353^{12}) = 44.6$ dB at 8 kHz.

(b) For 1 dB ripple, $\varepsilon^2 = 10^{0.1} - 1 = 0.259$. Then $\sqrt{9999/0.259} = 196.5$, $\cosh^{-1}196.5 = 5.97$ and $\cosh^{-1}2.353 = 1.50$, so $n \ge 3.98$, i.e. $n = 4$, giving 40.2 dB at 8 kHz.

The Chebyshev design saves two poles (one Sallen–Key section) at the price of 1 dB ripple and poorer phase linearity.

## Common Misconceptions

- **"The cut-off frequency is where the filter stops passing signals."** At cut-off the output is only 3 dB down; higher frequencies are attenuated progressively at $20n$ dB/decade, not removed.
- **"Higher Q is always better."** High $Q$ improves selectivity, but a tuned circuit with $B$ narrower than the signal cuts off sidebands and distorts the message.
- **"A Chebyshev filter is simply a sharper Butterworth."** It is sharper because it accepts ripple and a more non-linear phase; for pulses or audio fidelity a Butterworth or Bessel may be better.
- **"Active filters work at any frequency."** Op-amp gain–bandwidth limits them to roughly audio to low-MHz; RF and IF filters use LC, ceramic, crystal or SAW resonators.

## Connections

- The RLC band-pass response is the driven damped oscillator of Differential Equations (Lesson m2-l3); $Q$ and bandwidth are measured in the RLC Resonance experiment of the Electricity and Magnetism Lab (Lesson m1-l5).
- Communication Electronics Lab, Lesson m1-l3, measures the RC and RLC responses derived here and plots their Bode diagrams.
- The form $H(s)$ and its poles come from the Laplace transform of Differential Equations, Lesson m3-l2.
- FFT filtering in Mathematics Lab using Python III (Lesson m1-l3) implements $Y = HX$ numerically; radio telescopes use the same band-pass ideas to isolate spectral lines.
- A mobile handset contains dozens of filters, from Butterworth anti-aliasing stages to steep SAW and BAW filters at RF.

## Quick Check

1. Derive the cut-off frequency of an RC high-pass filter and state its phase at cut-off.
2. A tank circuit resonates at 455 kHz with a bandwidth of 10 kHz. What is its $Q$?
3. Why does the asymptotic Bode magnitude plot differ from the exact curve by 3 dB at the corner frequency?
4. What gain $K$ makes an equal-component Sallen–Key section a Butterworth section, and what happens if $K = 3$?
5. State one advantage and one disadvantage of the Chebyshev response relative to the Butterworth response.

## Takeaway

- A filter multiplies the spectrum by $H(j\omega)$; Bode plots make its behaviour readable at a glance.
- First-order sections give $-3$ dB at $f_c = 1/(2\pi RC)$ and 20 dB/decade roll-off; resonant circuits give $B = f_0/Q$.
- Butterworth filters are maximally flat; Chebyshev filters are steeper for the same order at the cost of ripple.
- Op-amp active filters such as the Sallen–Key section realise pole pairs without inductors.
