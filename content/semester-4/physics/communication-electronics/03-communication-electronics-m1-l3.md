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
lessonId: communication-electronics-m1-l3
lessonName: Sinusoidal Oscillators
lessonNumber: 3
moduleNumber: 1
semesterNumber: 4
difficulty: intermediate
estimatedStudyMinutes: 55
releaseOrder: 3
prerequisites:
  - communication-electronics-m1-l2
  - basic-electronics-m2-l2
  - electricity-and-magnetism-m3-l3
learningObjectives:
  - State and apply the Barkhausen criterion $A\beta = 1\angle 0^\circ$ for sustained oscillation, and explain start-up and amplitude limiting.
  - Derive the frequency and minimum gain of the RC phase-shift and Wien bridge oscillators.
  - Calculate the frequency and feedback fraction of Hartley and Colpitts LC oscillators.
  - Use the equivalent circuit of a quartz crystal to find its series and parallel resonances and explain why crystal oscillators are highly stable.
concepts:
  - Barkhausen criterion
  - RC phase-shift oscillator
  - Wien bridge oscillator
  - Colpitts and Hartley oscillators
  - Quartz crystal equivalent circuit
  - Frequency stability
tags:
  - physics
  - communication-electronics
  - oscillators
  - positive-feedback
sourceType: authored-courseware
status: in-review
assessmentHints:
  - derivation
  - problem-solving
  - conceptual
  - short-answer
***

# Sinusoidal Oscillators

## Overview

Every transmitter needs a carrier and every superheterodyne receiver a local oscillator; both come from a **sinusoidal oscillator**, an amplifier that supplies its own input through a frequency-selective feedback network. This lesson derives the **Barkhausen criterion** for a steady sine wave from the feedback equation, then analyses the audio-frequency RC oscillators (phase-shift and Wien bridge) and the radio-frequency LC oscillators (Hartley and Colpitts), whose tanks are the resonators of Lesson m1-l2. It closes with the quartz crystal, whose enormous $Q$ gives the frequency stability that broadcast and digital systems require.

## Learning Path

- **What you should already know**: BJT and op-amp amplifiers and their gain (Basic Electronics, Lesson m2-l2); mutual inductance (Electricity and Magnetism, Lesson m3-l3); transfer functions, resonance and $Q$ (Lesson m1-l2).
- **What this lesson adds**: positive feedback and the Barkhausen criterion; RC phase-shift, Wien bridge, Hartley, Colpitts and crystal oscillators; frequency stability.
- **What later lessons this will unlock**: carriers for AM generation (Lesson m2-l1); the local oscillator and mixer (Lesson m2-l2); voltage-controlled oscillators and phase-locked loops in FM (Lesson m2-l3).

## Core Explanation

### Feedback and the Barkhausen criterion

Consider an amplifier of gain $A$ whose output is fed back to its input through a network of transfer ratio $\beta$. With an external input $v_s$, the input to the amplifier is $v_s + \beta v_o$ and $v_o = A(v_s + \beta v_o)$, so

$$A_f = \frac{v_o}{v_s} = \frac{A}{1 - A\beta}.$$

The product $A\beta$ is the **loop gain**. With negative feedback ($A\beta$ negative and real) the gain is reduced and stabilised. If instead $A\beta \to 1$, the closed-loop gain diverges: a finite output exists with **no input at all**. This is the oscillator condition, the **Barkhausen criterion**:

$$|A\beta| = 1 \qquad \text{and} \qquad \angle A\beta = 0^\circ\ (\text{or } 360^\circ n).$$

The phase condition fixes the **frequency**, because the network is frequency selective and only at one frequency does the total phase shift round the loop equal zero. The magnitude condition fixes the **minimum gain**.

In practice $|A\beta|$ is made slightly greater than 1. Noise contains every frequency; the component satisfying the phase condition is regenerated with gain above unity on each trip round the loop and grows exponentially. As the amplitude rises, the amplifier saturates or a gain-control element reduces $A$ until $|A\beta| = 1$ and the amplitude settles. Too much excess gain clips the waveform; too little and oscillation fails as components age.

### The RC phase-shift oscillator

An inverting amplifier contributes $180^\circ$; a ladder of three RC sections must contribute the other $180^\circ$. For three identical sections of series $C$ and shunt $R$, nodal analysis gives

$$\beta = \frac{v_f}{v_o} = \frac{1}{1 - 5\alpha^2 - j(6\alpha - \alpha^3)}, \qquad \alpha = \frac{1}{\omega RC}.$$

$\beta$ is real (phase $180^\circ$) when the imaginary part of the denominator vanishes: $\alpha^2 = 6$, so

$$f_0 = \frac{1}{2\pi\sqrt{6}\,RC}, \qquad \beta = \frac{1}{1 - 30} = -\frac{1}{29}.$$

The network attenuates by 29 at $f_0$, so the amplifier needs $|A| \ge 29$. Three sections are the minimum, because each shifts less than $90^\circ$ except where its output vanishes. The circuit suits fixed audio frequencies; tuning means changing three components at once.

The snippet below computes the ladder's transfer ratio over frequency using complex arithmetic only; expect the phase to pass through $180^\circ$ at $f_0 \approx 650$ Hz for $R = 10$ kΩ, $C = 10$ nF, where $|\beta| = 1/29$.

```python
import cmath, math

R, C = 10e3, 10e-9
def beta(f):
    a = 1 / (2*math.pi*f*R*C)
    return 1 / (1 - 5*a**2 - 1j*(6*a - a**3))

f0 = 1 / (2*math.pi*math.sqrt(6)*R*C)
for f in (0.5*f0, f0, 2*f0):
    b = beta(f)
    print(f"{f:7.1f} Hz  |beta| = {abs(b):.4f}  phase = {math.degrees(cmath.phase(b)):7.1f} deg")
# at f0: |beta| = 0.0345 = 1/29, phase = 180 deg
```

### The Wien bridge oscillator

The Wien network is a series RC arm feeding a parallel RC arm. With $Z_s = R + 1/(j\omega C)$ and $Z_p = R/(1 + j\omega RC)$,

$$\beta = \frac{Z_p}{Z_s + Z_p} = \frac{1}{3 + j\left(\omega RC - \dfrac{1}{\omega RC}\right)}.$$

At $\omega_0 = 1/RC$ the phase is zero and $\beta = 1/3$, so a **non-inverting** amplifier of gain $1 + R_f/R_1 \ge 3$ sustains oscillation:

$$f_0 = \frac{1}{2\pi RC}, \qquad R_f \ge 2R_1.$$

$R_f$ and $R_1$ form the other half of the bridge. **Amplitude stabilisation** is obtained by making $R_f/R_1$ amplitude dependent: a small filament lamp as $R_1$ (its resistance rises as it warms), a thermistor as $R_f$, or back-to-back diodes across part of $R_f$. Low distortion and easy tuning with ganged capacitors make it the standard audio signal-generator oscillator.

### LC oscillators: Colpitts and Hartley

Above about 1 MHz, RC networks need impractically small components and op-amps lack bandwidth, so the frequency-selective element becomes an LC **tank**. In the general three-reactance oscillator, reactances $X_1$ (across the output), $X_2$ (across the input) and $X_3$ (between them) form a loop with an inverting transistor stage; the phase condition requires $X_1 + X_2 + X_3 = 0$ (resonance), with $X_1$ and $X_2$ of the same type.

In the **Colpitts** oscillator $X_1$ and $X_2$ are capacitors $C_1$ and $C_2$ and $X_3$ is an inductor $L$. The tank sees $C_1$ and $C_2$ in series:

$$f_0 = \frac{1}{2\pi\sqrt{L C_{\text{eq}}}}, \qquad C_{\text{eq}} = \frac{C_1 C_2}{C_1 + C_2}.$$

The same circulating current flows through both capacitors, so the voltages across them are in the ratio of their reactances. With the output across $C_1$ and the feedback taken across $C_2$,

$$\beta = \frac{X_{C_2}}{X_{C_1}} = \frac{C_1}{C_2}, \qquad A_{\min} = \frac{C_2}{C_1}.$$

In the **Hartley** oscillator the roles are exchanged: a tapped inductor ($L_1$ across the output, $L_2$ across the input, mutual inductance $M$) with a single tuning capacitor $C$:

$$f_0 = \frac{1}{2\pi\sqrt{(L_1 + L_2 + 2M)C}}, \qquad \beta \approx \frac{L_2}{L_1}, \qquad A_{\min} \approx \frac{L_1}{L_2}.$$

The Hartley tunes easily with one variable capacitor; the Colpitts avoids a tapped coil and its capacitors shunt harmonics, giving a purer output. The **Clapp** variant adds a small capacitor in series with $L$ so that $f_0$ depends mainly on that capacitor and less on transistor capacitances.

| Oscillator | Selective network | Frequency | Minimum gain | Typical range |
|---|---|---|---|---|
| RC phase-shift | Three RC sections | $1/(2\pi\sqrt{6}RC)$ | 29 (inverting) | Audio, fixed |
| Wien bridge | Series and parallel RC | $1/(2\pi RC)$ | 3 (non-inverting) | 10 Hz – 1 MHz, tunable |
| Colpitts | $L$ with $C_1$, $C_2$ | $1/(2\pi\sqrt{LC_{\text{eq}}})$ | $C_2/C_1$ | 1 – 500 MHz |
| Hartley | $L_1$, $L_2$ with $C$ | $1/(2\pi\sqrt{(L_1+L_2+2M)C})$ | $L_1/L_2$ | 0.1 – 30 MHz |
| Crystal | Quartz resonator | Set by crystal cut | Circuit dependent | 10 kHz – 200 MHz |

### Crystal oscillators

Quartz is **piezoelectric**: an applied voltage strains it and a strain produces a voltage. A thin plate between electrodes therefore behaves as a mechanical resonator coupled to the circuit. Its electrical equivalent is a series branch of motional inductance $L$, capacitance $C$ and resistance $R$ (representing mass, compliance and friction), shunted by the electrode capacitance $C_0 \gg C$. The crystal has two resonances:

$$f_s = \frac{1}{2\pi\sqrt{LC}}\ \ (\text{series}), \qquad f_p = \frac{1}{2\pi}\sqrt{\frac{C + C_0}{L C C_0}} = f_s\sqrt{1 + \frac{C}{C_0}} \approx f_s\left(1 + \frac{C}{2C_0}\right)\ \ (\text{parallel}).$$

At $f_s$ the crystal is a small resistance $R$; between $f_s$ and $f_p$ it is inductive; above $f_p$ it is capacitive. Because $C/C_0$ is tiny, $f_p$ lies only a fraction of a percent above $f_s$. A **Pierce** oscillator, essentially a Colpitts circuit with the crystal replacing $L$, operates in this narrow inductive region; series-mode circuits operate at $f_s$.

### Frequency stability

The **frequency stability** of an oscillator is the fractional drift $\Delta f/f$, usually quoted in parts per million (ppm), caused by temperature, supply voltage, loading and ageing. A useful measure is how steeply the network phase changes with frequency, $d\phi/d\omega$: if a disturbance adds a small phase error $\delta\phi$ somewhere in the loop, the frequency must shift by $\delta\omega = \delta\phi/(d\phi/d\omega)$ to restore the Barkhausen phase condition. For a resonator near $\omega_0$, $d\phi/d\omega = 2Q/\omega_0$, so

$$\frac{\delta f}{f_0} = \frac{\delta\phi}{2Q}.$$

An LC tank has $Q \sim 100$; a quartz crystal has $Q \sim 10^4$ to $10^6$, so its frequency is hundreds to thousands of times less sensitive to the rest of the circuit. An AT-cut crystal holds about 10 – 50 ppm over its temperature range, a temperature-compensated oscillator (TCXO) about 1 ppm and an oven-controlled one (OCXO) better than 0.01 ppm.

## Key Ideas

- **Feedback equation**: $A_f = A/(1 - A\beta)$; oscillation occurs when the loop gain $A\beta \to 1$.
- **Barkhausen criterion**: $|A\beta| = 1$ fixes the gain, $\angle A\beta = 0^\circ$ fixes the frequency; start-up needs $|A\beta| > 1$ and non-linearity limits the amplitude.
- **RC phase-shift**: $f_0 = 1/(2\pi\sqrt{6}RC)$, $|\beta| = 1/29$, gain at least 29.
- **Wien bridge**: $f_0 = 1/(2\pi RC)$, $\beta = 1/3$, gain at least 3, amplitude stabilised by a lamp, thermistor or diodes.
- **Colpitts and Hartley**: capacitive or inductive dividers across an LC tank, $A_{\min} = C_2/C_1$ or $L_1/L_2$.
- **Crystal**: series $f_s$ and parallel $f_p \approx f_s(1 + C/2C_0)$; very high $Q$ gives ppm-level stability.

## Worked Examples

### Example 1 — Designing an RC phase-shift oscillator

An op-amp phase-shift oscillator uses $R = 10$ kΩ and $C = 10$ nF in each section, the last $R$ also serving as the input resistor of the inverting amplifier. Find $f_0$ and the minimum feedback resistor.

**Solution.**

$$f_0 = \frac{1}{2\pi\sqrt{6} \times 10^4 \times 10^{-8}} = \frac{1}{2\pi \times 2.449 \times 10^{-4}} = 650\ \text{Hz}.$$

The gain must be at least 29, so $R_f \ge 29R = 290$ kΩ; a practical design uses 330 kΩ (gain 33) for reliable start-up.

### Example 2 — A Colpitts local oscillator

A Colpitts oscillator has $L = 10$ µH, $C_1 = 1$ nF and $C_2 = 10$ nF. Find the oscillation frequency and the minimum amplifier gain.

**Solution.** The series combination is $C_{\text{eq}} = (1 \times 10)/(1 + 10) = 0.909$ nF. Then

$$f_0 = \frac{1}{2\pi\sqrt{10\times10^{-6} \times 0.909\times10^{-9}}} = \frac{1}{2\pi \times 9.53 \times 10^{-8}} = 1.67\ \text{MHz}.$$

The feedback fraction is $\beta = C_1/C_2 = 0.1$, so the transistor stage needs $|A| \ge 10$, easily provided by a common-emitter amplifier.

### Example 3 — Resonances and stability of a quartz crystal

A crystal has $L = 0.1$ H, $C = 0.025$ pF, $R = 20$ Ω and $C_0 = 5$ pF. Find $f_s$, $Q$, $f_p - f_s$ and the drift of a 20 ppm crystal at this frequency.

**Solution.**

$$f_s = \frac{1}{2\pi\sqrt{0.1 \times 2.5\times10^{-14}}} = \frac{1}{2\pi \times 5\times10^{-8}} = 3.183\ \text{MHz},$$

$$Q = \frac{2\pi f_s L}{R} = \frac{2\pi \times 3.183\times10^6 \times 0.1}{20} = 1.0\times10^5.$$

With $C/C_0 = 0.005$, $f_p \approx f_s(1 + 0.0025)$, so $f_p - f_s = 7.96$ kHz, only 0.25% above $f_s$. A 20 ppm tolerance corresponds to $3.183\times10^6 \times 20\times10^{-6} = 64$ Hz. An LC oscillator with $Q = 100$ would be a thousand times more sensitive.

## Common Misconceptions

- **"An oscillator needs an input signal to start."** It starts from noise or the switch-on transient; with $|A\beta| > 1$ the component at the right frequency grows until non-linearity limits it.
- **"Set the loop gain exactly to 1."** A loop gain of exactly unity cannot be maintained against component tolerances; designs use excess gain plus automatic amplitude control.
- **"Positive feedback means the feedback network has zero phase shift."** It means the total loop phase is $0^\circ$ or $360^\circ$; in the phase-shift oscillator the network provides $180^\circ$ and the inverting amplifier the other $180^\circ$.
- **"A crystal oscillator is stable because quartz is hard."** Stability comes from the very high $Q$, which makes the frequency insensitive to phase disturbances, and from cuts with small temperature coefficients.

## Connections

- The Barkhausen criterion is the electronic case of self-excited oscillation, as in a bowed string or an organ pipe (Waves and Optics, Lesson m1-l1); the start-up growth and saturation correspond to a negatively damped oscillator in Differential Equations, Lesson m2-l1.
- The tank and crystal resonances use the impedance and $Q$ analysis of Lesson m1-l2 and the resonance experiment of the Electricity and Magnetism Lab (Lesson m1-l5).
- The function generators and AM/FM trainers of the Communication Electronics Lab (Lessons m1-l1 and m1-l2) are built around these oscillators.
- Quartz and atomic oscillators underpin timekeeping, GPS and pulsar timing in Astrophysics IV (Lesson m3-l7).

## Quick Check

1. State the Barkhausen criterion and explain separately what each part determines.
2. Why must the loop gain exceed unity at switch-on, and what then limits the amplitude?
3. A Wien bridge oscillator has $R = 15$ kΩ and $C = 10$ nF. Find $f_0$ and the minimum ratio $R_f/R_1$.
4. A Hartley oscillator has $L_1 = 40$ µH, $L_2 = 10$ µH, $M = 0$ and $C = 200$ pF. Find $f_0$ and $A_{\min}$.
5. Explain, using $\delta f/f_0 = \delta\phi/2Q$, why a crystal oscillator is far more stable than an LC oscillator.

## Takeaway

- Oscillation requires a loop gain of unity magnitude and zero total phase; the phase condition fixes the frequency.
- RC phase-shift and Wien bridge oscillators serve audio frequencies; Colpitts and Hartley LC oscillators serve RF.
- Quartz crystals, with $Q$ up to $10^6$, give ppm-level stability and are the reference for carriers and clocks.
