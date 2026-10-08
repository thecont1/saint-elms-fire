***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-4
semesterName: Semester 4
subjectId: physics
subjectName: Physics
courseId: communication-electronics
courseName: Communication Electronics
moduleId: communication-electronics-module-2
moduleName: Analogue Modulation and Reception
lessonId: communication-electronics-m2-l2
lessonName: The Superheterodyne Receiver
lessonNumber: 5
moduleNumber: 2
semesterNumber: 4
difficulty: intermediate
estimatedStudyMinutes: 55
releaseOrder: 5
prerequisites:
  - communication-electronics-m2-l1
  - basic-electronics-m2-l2
learningObjectives:
  - Draw the block diagram of a superheterodyne receiver and explain the function of each stage.
  - Show how a mixer translates a signal to the intermediate frequency and calculate the local-oscillator and image frequencies.
  - Calculate the image rejection ratio $\alpha = \sqrt{1 + Q^2\rho^2}$ of tuned RF stages and explain the choice of IF and the use of double conversion.
  - Define sensitivity, selectivity and fidelity, and explain simple and delayed automatic gain control.
concepts:
  - Superheterodyne principle
  - Frequency mixer
  - Intermediate frequency
  - Image frequency and image rejection ratio
  - Receiver sensitivity and selectivity
  - Automatic gain control
tags:
  - physics
  - communication-electronics
  - radio-receivers
  - superheterodyne
sourceType: authored-courseware
status: in-review
assessmentHints:
  - conceptual
  - problem-solving
  - derivation
  - short-answer
***

# The Superheterodyne Receiver

## Overview

A receiver must pick one station out of hundreds, amplify a signal of a few microvolts by a factor of a million, and demodulate it without distortion, over a tuning range of several octaves. The **superheterodyne** receiver, devised by Armstrong in 1918, does this by first translating every incoming signal to one fixed **intermediate frequency** (IF), where all the selectivity and most of the gain can be provided by fixed-tuned stages. It rests on two earlier results: multiplying sinusoids produces sum and difference frequencies (Lesson m1-l1), and a tuned circuit's bandwidth $f_0/Q$ changes with tuning (Lesson m1-l2). This lesson develops the block diagram, the mixer, the image-frequency problem and its cure, receiver figures of merit and automatic gain control.

## Learning Path

- **What you should already know**: the frequency-shift property (Lesson m1-l1); $Q$ and bandwidth of tuned circuits (Lesson m1-l2); oscillators (Lesson m1-l3); AM and its detection (Lesson m2-l1); transistor amplifiers (Basic Electronics, Lesson m2-l2).
- **What this lesson adds**: the superheterodyne architecture, frequency mixing, image frequency and image rejection, receiver sensitivity and selectivity, AGC.
- **What later lessons this will unlock**: the FM receiver with limiter and discriminator (Lesson m2-l3); receiver noise figure and sensitivity in dBm (Lesson m3-l2); the RF front ends of mobile and satellite links (Lesson m3-l3).

## Core Explanation

### Why not a tuned radio-frequency receiver?

The obvious receiver, the **tuned radio-frequency (TRF)** design, uses a chain of RF amplifiers all tuned together to the wanted station. Its weakness is that the bandwidth of a tuned circuit of fixed $Q$ is $B = f_0/Q$. Across the Indian medium-wave band, 531 to 1602 kHz, the bandwidth of a single circuit with $Q = 100$ would vary from 5.3 kHz (too narrow, cutting the sidebands of a 9 kHz channel) to 16 kHz (too wide, admitting the neighbours). Several stages tuned in step are also hard to align, and high gain at one frequency invites instability.

### The superheterodyne principle

The superheterodyne receiver converts the selected signal at $f_s$ to the fixed frequency $f_{\text{IF}}$ by mixing it with a **local oscillator** (LO) at $f_o$. If the signal is $\cos 2\pi f_s t$ and the oscillator $\cos 2\pi f_o t$, their product is

$$\cos 2\pi f_s t \cos 2\pi f_o t = \tfrac{1}{2}\cos 2\pi(f_o - f_s)t + \tfrac{1}{2}\cos 2\pi(f_o + f_s)t.$$

The IF amplifier is tuned to the difference, $f_{\text{IF}} = f_o - f_s$; the sum is rejected. If the RF signal is modulated, its sidebands are translated intact, so the IF carries exactly the same modulation as the antenna signal, simply moved to a new centre frequency. The LO is tuned together with the RF stage so that $f_o - f_s$ stays equal to $f_{\text{IF}}$ for every station; with the LO above the signal (**high-side injection**), $f_o = f_s + f_{\text{IF}}$.

The **mixer** (or frequency converter) may be a true multiplier (a Gilbert cell, or a diode ring), or a transistor or diode biased into its non-linear region: with $i = a_1 v + a_2 v^2$ and $v = V_s\cos\omega_s t + V_o\cos\omega_o t$, the $v^2$ term contains $a_2 V_s V_o\cos(\omega_o - \omega_s)t$. The mixer output is proportional to $V_s$, so the conversion is linear in the signal.

| Stage | Function | Typical AM broadcast values |
|---|---|---|
| Antenna and RF amplifier | Tuned to $f_s$; provides some gain, improves noise figure and rejects the image | 531 – 1602 kHz, $Q \approx 50$–$100$ |
| Local oscillator | Tuned with the RF stage to $f_o = f_s + f_{\text{IF}}$ | 986 – 2057 kHz |
| Mixer | Multiplies $f_s$ and $f_o$; outputs $f_o \pm f_s$ | Diode, transistor or Gilbert cell |
| IF amplifier and filter | Fixed-tuned; provides most of the gain and sets the selectivity | 455 kHz, bandwidth about 10 kHz |
| Detector | Recovers the message (envelope detector for AM, discriminator for FM) | Diode envelope detector |
| AGC | Derives a DC level from the detector and controls RF and IF gain | Time constant 0.1 – 0.5 s |
| AF amplifier | Raises the audio to drive the loudspeaker | 100 Hz – 4.5 kHz audio |

Standard IFs are 455 kHz (often 465 kHz in older Indian sets) for AM broadcast and 10.7 MHz for FM broadcast. Because the IF stages never retune, they can use double-tuned transformers, ceramic or crystal filters with a flat passband and steep skirts, exactly the Butterworth or Chebyshev shapes of Lesson m1-l2.

### Tracking

The RF and LO tuning capacitors are usually ganged on one shaft. For high-side injection the LO must cover 986 – 2057 kHz while the RF circuit covers 531 – 1602 kHz. Because $f \propto 1/\sqrt{C}$, the capacitance ratio required is the square of the frequency ratio: $(1602/531)^2 = 9.1$ for the RF section but only $(2057/986)^2 = 4.35$ for the LO section. A series **padder** capacitor in the LO circuit and a parallel **trimmer** make the two sections track exactly at three points across the band and closely in between. Low-side injection ($f_o = f_s - f_{\text{IF}}$, 76 – 1147 kHz) would demand a ratio of 228, which no variable capacitor provides; this is why AM receivers place the LO above the signal.

### The image frequency

The mixer responds to the magnitude of the difference frequency. A second signal at

$$f_{si} = f_o + f_{\text{IF}} = f_s + 2f_{\text{IF}}$$

also produces $f_{si} - f_o = f_{\text{IF}}$ and passes straight through the IF amplifier. This **image frequency** lies $2f_{\text{IF}}$ above the wanted signal (for high-side injection) and cannot be removed by any later stage; it must be rejected *before* the mixer by the tuned RF circuits. For a single tuned circuit of quality factor $Q$ tuned to $f_s$, the ratio of its gain at $f_s$ to its gain at $f_{si}$, the **image rejection ratio**, follows from the band-pass response of Lesson m1-l2:

$$\alpha = \sqrt{1 + Q^2\rho^2}, \qquad \rho = \frac{f_{si}}{f_s} - \frac{f_s}{f_{si}}.$$

For $n$ independent tuned stages, the individual ratios multiply (their dB values add). Because $\rho$ shrinks as $f_s$ grows with $f_{\text{IF}}$ fixed, image rejection worsens at higher signal frequencies.

The short calculation below tabulates $\alpha$ across the medium-wave band for one tuned circuit with $Q = 100$ and a 455 kHz IF; expect rejection falling from about 47 dB at the bottom of the band to about 39 dB at the top.

```python
import math

f_if, Q = 455.0, 100.0
for fs in (531, 1000, 1602):                     # kHz
    fsi = fs + 2*f_if
    rho = fsi/fs - fs/fsi
    alpha = math.sqrt(1 + (Q*rho)**2)
    print(f"fs={fs:5d} kHz  image={fsi:6.0f} kHz  alpha={20*math.log10(alpha):5.1f} dB")
```

### Choosing the IF; double conversion

The IF is a compromise. A **high IF** puts the image far from the signal and so improves image rejection, and keeps the LO well away from the signal so that it is not "pulled". A **low IF** makes narrow, stable filters and high gain easier, giving better **adjacent-channel selectivity**. Receivers for the HF bands and above therefore use **double conversion**: a high first IF (for example 10.7 MHz or higher) to reject images, followed by a second mixer and a low second IF (for example 455 kHz) for selectivity.

### Figures of merit

**Sensitivity** is the smallest input signal that gives a specified output, usually a specified signal-to-noise ratio, quoted in microvolts across 50 Ω or in dBm; 1 µV across 50 Ω is $10^{-12}/50 = 2\times10^{-14}$ W, or $-107$ dBm. It depends on gain and, ultimately, on noise (Lesson m3-l2). **Selectivity** is the ability to reject signals in adjacent channels, set mainly by the IF filter shape. **Fidelity** is the ability to reproduce the full modulating band without distortion, which requires an IF bandwidth at least equal to the signal bandwidth; selectivity and fidelity therefore pull in opposite directions. **Image rejection** and freedom from other spurious responses complete the specification.

### Automatic gain control

Received signal strengths range over 100 dB between distant and local stations and fluctuate as sky waves fade. **Automatic gain control** (AGC) keeps the detector input roughly constant. The DC component of the envelope-detector output is proportional to the carrier amplitude; filtered by a time constant long compared with the lowest audio period, it is fed back to bias the RF and IF transistors and reduce their gain on strong signals. **Simple AGC** reduces gain even for weak signals, sacrificing sensitivity; **delayed AGC** acts only once the carrier exceeds a threshold, so weak stations receive full gain and strong ones are levelled.

## Key Ideas

- **Superheterodyne principle**: convert every station to a fixed IF and do the selectivity and gain there.
- **Mixer**: multiplying $f_s$ and $f_o$ gives $f_o \pm f_s$; the IF filter keeps $f_{\text{IF}} = f_o - f_s$ with the modulation intact.
- **Image frequency**: $f_{si} = f_s + 2f_{\text{IF}}$; it must be rejected before the mixer, with $\alpha = \sqrt{1 + Q^2\rho^2}$ per tuned stage.
- **IF choice**: high IF for image rejection, low IF for selectivity; double conversion gets both.
- **Figures of merit**: sensitivity, selectivity, fidelity and image rejection.
- **AGC** levels the detector input; delayed AGC preserves full sensitivity for weak signals.

## Worked Examples

### Example 1 — Image rejection on medium wave

A receiver with a 455 kHz IF and high-side injection is tuned to 1000 kHz; its single RF tuned circuit has $Q = 100$. Find the LO frequency, the image frequency and the image rejection ratio.

**Solution.** $f_o = 1000 + 455 = 1455$ kHz and $f_{si} = 1000 + 2 \times 455 = 1910$ kHz. Then

$$\rho = \frac{1910}{1000} - \frac{1000}{1910} = 1.910 - 0.5236 = 1.386,$$

$$\alpha = \sqrt{1 + (100 \times 1.386)^2} = 138.6 \;\Rightarrow\; 20\log_{10}138.6 = 42.8\ \text{dB}.$$

An equally strong station at 1910 kHz would be heard 42.8 dB below the wanted one.

### Example 2 — The image problem at short wave

The same receiver is tuned to 25 MHz. Find $\alpha$ with one tuned stage, with two identical tuned stages, and with one stage but a 10.7 MHz IF.

**Solution.** With a 455 kHz IF, $f_{si} = 25.91$ MHz and $\rho = 1.0364 - 0.9649 = 0.0715$, so

$$\alpha = \sqrt{1 + 7.15^2} = 7.22 \;(17.2\ \text{dB}).$$

Two stages give $7.22^2 = 52.2$ (34.3 dB). With a 10.7 MHz IF, $f_{si} = 46.4$ MHz and $\rho = 1.856 - 0.539 = 1.317$, so $\alpha = 131.7$ (42.4 dB) with a single stage. Raising the IF is far more effective than adding RF stages, which is the case for double conversion.

### Example 3 — Selectivity of the IF stage

Compare the $Q$ required for a 10 kHz bandwidth at the 455 kHz IF with that required at 1602 kHz in a TRF receiver.

**Solution.** From $B = f_0/Q$: at 455 kHz, $Q = 455/10 = 45.5$, easily achieved and fixed; at 1602 kHz, $Q = 160$, which must also be maintained while tuning and would give only 3.3 kHz at 531 kHz. The fixed IF delivers the same, correct bandwidth for every station.

## Common Misconceptions

- **"The IF filter removes the image."** The image is converted to exactly the IF and is indistinguishable from the wanted signal once past the mixer; only the RF stages before the mixer can reject it.
- **"The mixer is a linear adder of the two signals."** Adding sinusoids creates no new frequencies; a mixer must multiply, through a non-linear device or a true multiplier.
- **"The LO frequency equals the station frequency."** It is offset from the station by the IF, usually above it.
- **"AGC is a volume control."** AGC compensates for changing signal strength before detection; the volume control acts on the audio.

## Connections

- Mixing is the beat phenomenon of Waves and Optics, Lesson m1-l3, carried out with a deliberately non-linear device; the difference frequency is the beat frequency.
- The IF filter shapes and $Q$ calculations are those of Lesson m1-l2 and Communication Electronics Lab, Lesson m1-l3; signal tracing through a superheterodyne trainer is the fault-diagnosis exercise of Lab Lesson m1-l6.
- Radio astronomy receivers are superheterodynes: the 21 cm hydrogen line at 1420 MHz is mixed down to an IF for spectral analysis (Astrophysics I, Lesson m3-l2).
- Modern software-defined radios digitise the IF, or use a zero-IF (direct-conversion) mixer with I/Q outputs (Lesson m3-l3).

## Quick Check

1. List the stages of a superheterodyne receiver in signal order and state which sets the selectivity.
2. An FM receiver with a 10.7 MHz IF and high-side injection is tuned to 98.3 MHz. Find the LO and image frequencies.
3. Why is the image frequency $2f_{\text{IF}}$ away from the signal frequency?
4. Explain why AM broadcast receivers use high-side injection.
5. What is the advantage of delayed AGC over simple AGC?

## Takeaway

- The superheterodyne receiver translates every station to one fixed IF, where selectivity and gain are easy to provide.
- A mixer multiplies the signal by the LO output; sum and difference frequencies appear and the IF filter keeps the difference.
- The image frequency, $2f_{\text{IF}}$ from the signal, must be rejected by RF tuning; a high IF or double conversion makes this easier.
- Sensitivity, selectivity, fidelity and image rejection specify a receiver; AGC keeps its output steady as signals fade.
