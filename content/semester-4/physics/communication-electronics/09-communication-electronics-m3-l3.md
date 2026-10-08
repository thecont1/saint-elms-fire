***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-4
semesterName: Semester 4
subjectId: physics
subjectName: Physics
courseId: communication-electronics
courseName: Communication Electronics
moduleId: communication-electronics-module-3
moduleName: Channels, Noise and Digital Communication
lessonId: communication-electronics-m3-l3
lessonName: Digital Communication and System Overview
lessonNumber: 9
moduleNumber: 3
semesterNumber: 4
difficulty: advanced
estimatedStudyMinutes: 60
releaseOrder: 9
prerequisites:
  - communication-electronics-m3-l2
  - basic-electronics-m2-l3
  - waves-and-optics-m2-l1
learningObjectives:
  - State and justify the sampling theorem $f_s \ge 2W$ and explain aliasing.
  - Derive the quantisation signal-to-noise ratio of PCM, $\text{SQNR} = 6.02n + 1.76$ dB, and compute PCM bit rates.
  - Describe ASK, FSK, PSK and QAM by their constellations and compare their bit-error rates using $P_b = Q(\sqrt{2E_b/N_0})$ for BPSK.
  - Apply the Shannon capacity $C = B\log_2(1 + S/N)$ and describe FDM, TDM and the block structure of mobile, satellite and optical-fibre links.
concepts:
  - Sampling theorem and aliasing
  - Pulse code modulation and quantisation noise
  - Digital modulation constellations
  - Bit error rate
  - Shannon channel capacity
  - Frequency- and time-division multiplexing
  - Satellite and optical-fibre links
tags:
  - physics
  - communication-electronics
  - digital-communication
  - pcm
sourceType: authored-courseware
status: in-review
assessmentHints:
  - derivation
  - problem-solving
  - computational
  - conceptual
***

# Digital Communication and System Overview

## Overview

Almost every modern link is digital. A digital signal can be **regenerated** at every repeater, so noise does not accumulate, and it can be compressed, encrypted, error-corrected and multiplexed by software. This lesson builds the digital chain step by step. The **sampling theorem** shows when a continuous signal is fully described by samples; **pulse code modulation** turns the samples into bits at the cost of quantisation noise; **digital modulation** (ASK, FSK, PSK, QAM) puts the bits on a carrier; and the **bit error rate** and **Shannon capacity** tell us how well and how fast this can be done in noise. The lesson closes the course with **multiplexing** and an overview of three complete systems: mobile, satellite and optical fibre.

## Learning Path

- **What you should already know**: spectra and the frequency-shift property (Lesson m1-l1); filters (Lesson m1-l2); AM and FM (Lessons m2-l1, m2-l3); noise and link budgets (Lessons m3-l1, m3-l2); the digital oscilloscope (Basic Electronics, Lesson m2-l3); total internal reflection (Waves and Optics, Lesson m2-l1).
- **What this lesson adds**: sampling and aliasing; PCM and quantisation noise; digital modulation and constellations; bit error rate; Shannon capacity; FDM and TDM; system-level views of mobile, satellite and fibre links.
- **What later lessons this will unlock**: ADCs, serial links and data logging in the Microcontroller and Embedded Systems Lab (Lessons m1-l2, m1-l3) and the Electronic Instrumentation Lab (Lesson m1-l5).

## Core Explanation

### The sampling theorem

Sample a signal $x(t)$ every $T_s = 1/f_s$ seconds. Ideal sampling multiplies $x(t)$ by an impulse train, whose spectrum is itself an impulse train at multiples of $f_s$; by the modulation property the sampled spectrum is

$$X_s(f) = f_s\sum_{n=-\infty}^{\infty}X(f - nf_s),$$

copies of $X(f)$ repeated every $f_s$. If $x(t)$ is band-limited to $W$, the copies do not overlap provided

$$f_s \ge 2W,$$

and an ideal low-pass filter of cut-off $W$ recovers $x(t)$ exactly. This is the **sampling theorem**; $2W$ is the **Nyquist rate**. If $f_s < 2W$, the copies overlap and a component at $f$ reappears at $|f - nf_s|$, a false frequency called an **alias**, which no later processing can remove. An **anti-aliasing filter** (Lesson m1-l2) therefore precedes every sampler. Telephone speech, limited to 3.4 kHz, is sampled at 8 kHz, leaving a 1.2 kHz guard band for the filter's transition.

### Pulse code modulation and quantisation noise

**Pulse code modulation** (PCM) converts each sample into an $n$-bit binary word in three steps: sample, **quantise** to the nearest of $L = 2^n$ levels, and **encode**. For a signal spanning $\pm V$, the step size is $\Delta = 2V/L$. Rounding introduces an error $e$ that, for a busy signal, is uniformly distributed between $-\Delta/2$ and $+\Delta/2$, with mean-square value

$$\overline{e^2} = \frac{1}{\Delta}\int_{-\Delta/2}^{\Delta/2}e^2\,de = \frac{\Delta^2}{12}.$$

This is the **quantisation noise**. For a full-scale sine wave of power $V^2/2$,

$$\text{SQNR} = \frac{V^2/2}{\Delta^2/12} = \frac{6V^2}{(2V/L)^2} = \frac{3}{2}L^2 = \frac{3}{2}\,2^{2n},$$

$$\text{SQNR}_{\text{dB}} = 1.76 + 6.02n.$$

Each extra bit buys 6 dB. The **bit rate** is $R_b = nf_s$, and transmitting it needs a bandwidth of at least $R_b/2$. Telephone PCM uses **companding**, compressing large amplitudes before quantisation and expanding them after: A-law (India, Europe) and μ-law ($\mu = 255$, North America) give 8-bit words roughly the small-signal quality of 12-bit uniform PCM.

### Digital modulation and constellations

To send bits over a band-pass channel, a symbol is impressed on a carrier by switching its amplitude, frequency or phase. Any such signal can be written $s(t) = I\cos\omega_c t - Q\sin\omega_c t$, and plotting the allowed $(I, Q)$ pairs gives the **constellation diagram**.

| Scheme | Bits per symbol | Constellation | $E_b/N_0$ for $P_b = 10^{-5}$ |
|---|---|---|---|
| ASK (on–off keying) | 1 | Two points on the $I$ axis, at 0 and $A$ | 12.6 dB (coherent) |
| BFSK | 1 | Two orthogonal tones | 12.6 dB (coherent) |
| BPSK | 1 | Two antipodal points, $\pm A$ | 9.6 dB |
| QPSK | 2 | Four points at $45^\circ, 135^\circ, \ldots$ | 9.6 dB |
| 16-QAM | 4 | $4 \times 4$ square grid | 13.4 dB |

**ASK** is AM keyed by data, **FSK** is digital FM and **PSK** shifts the carrier phase. **QPSK** puts two BPSK signals on quadrature carriers, doubling the bit rate in the same bandwidth at the same bit error rate. $M$-**QAM** varies both $I$ and $Q$ to carry $\log_2 M$ bits per symbol; 16-QAM sends four times as many bits as BPSK in the same bandwidth, but its closer points need more power for the same error rate. A symbol rate $R_s$ needs a bandwidth of about $(1 + \alpha)R_s$, where $\alpha$ (0 to 1) is the roll-off of the pulse-shaping filter.

### Bit error rate

The receiver decides which symbol was sent by comparing the noisy received point with decision thresholds. With Gaussian noise of standard deviation $\sigma$ and constellation points separated by $d$, an error occurs when noise pushes the point past the midway threshold, with probability $Q(d/2\sigma)$, where $Q(x) = \tfrac{1}{2}\operatorname{erfc}(x/\sqrt{2})$ is the Gaussian tail probability. For BPSK with an optimum (matched-filter) receiver this gives

$$P_b = Q\left(\sqrt{\frac{2E_b}{N_0}}\right),$$

where $E_b$ is the energy per bit and $N_0$ the noise spectral density of Lesson m3-l2. Coherent BFSK and OOK have $P_b = Q(\sqrt{E_b/N_0})$ and so need 3 dB more. The snippet below tabulates both; expect BPSK to reach $10^{-5}$ near 9.6 dB.

```python
import math

def Q(x):
    return 0.5 * math.erfc(x / math.sqrt(2))

for ebn0_db in (0, 4, 8, 9.6, 12):
    g = 10**(ebn0_db / 10)
    print(f"{ebn0_db:5.1f} dB  BPSK {Q(math.sqrt(2*g)):.2e}  BFSK {Q(math.sqrt(g)):.2e}")
# 9.6 dB: BPSK 9.7e-06, BFSK 1.3e-03
```

The steep fall of the BER curve, a factor of about 20 between 8 and 9.6 dB, is why digital links either work very well or fail abruptly.

### Shannon capacity

Shannon (1948) showed that a channel of bandwidth $B$ and signal-to-noise ratio $S/N$ (white Gaussian noise) supports error-free transmission at any rate below

$$C = B\log_2\left(1 + \frac{S}{N}\right)\ \text{bit/s},$$

and at no rate above it. Bandwidth and SNR can be traded: capacity grows linearly with $B$ but only logarithmically with power. Letting $B \to \infty$ shows that reliable communication requires $E_b/N_0 \ge \ln 2$, i.e. $-1.6$ dB, the **Shannon limit**; modern turbo and LDPC codes operate within 1 dB of it.

### Multiplexing

**Frequency-division multiplexing** (FDM) gives each user a separate band, separated by guard bands, as in broadcast radio and analogue telephone trunks (12 voice channels in a 48 kHz group). **Time-division multiplexing** (TDM) gives each user the whole band for a repeating time slot. The E1 system used in India and Europe interleaves 32 slots of 8 bits each in a 125 µs frame (one 8 kHz sampling period): $32 \times 8 \times 8000 = 2.048$ Mbit/s. The North American T1 frame carries 24 slots plus one framing bit, $193 \times 8000 = 1.544$ Mbit/s. Modern systems also use **OFDM**, many orthogonal subcarriers each carrying QAM.

| Feature | FDM | TDM |
|---|---|---|
| Resource divided | Frequency | Time |
| Separation by | Band-pass filters and guard bands | Synchronised switching and guard times |
| Natural for | Analogue signals | Digital (PCM) signals |
| Main impairment | Crosstalk from non-linearity and filter skirts | Timing and synchronisation errors |

### System overview

| System | Channel | Key stages | Typical figures |
|---|---|---|---|
| Mobile cellular | Space wave in cells, with multipath | Speech codec, error coding, OFDM with QPSK to 256-QAM, RF front end; base station, handover between cells | 700 MHz – 3.5 GHz (mmWave above 24 GHz); frequency reuse across cells |
| Satellite | Line-of-sight uplink and downlink | Earth-station transmitter, satellite **transponder** (receive, frequency-translate, amplify, retransmit), LNA receiver | GEO at 35 786 km, one-hop delay about 0.24 s; C band 6/4 GHz, Ku band 14/12 GHz |
| Optical fibre | Glass waveguide by total internal reflection | Laser or LED source with intensity modulation, single-mode fibre, optical amplifiers (EDFA), photodiode receiver | 0.2 dB/km at 1550 nm; WDM carries many wavelengths, Tbit/s per fibre |

A fibre guides light by total internal reflection at the core–cladding boundary; rays enter only within the acceptance cone set by the **numerical aperture**, $\text{NA} = \sin\theta_a = \sqrt{n_1^2 - n_2^2}$.

## Key Ideas

- **Sampling theorem**: $f_s \ge 2W$; under-sampling causes irreversible aliasing.
- **PCM**: $L = 2^n$ levels, quantisation noise $\Delta^2/12$, $\text{SQNR} = 6.02n + 1.76$ dB, bit rate $nf_s$.
- **Digital modulation**: ASK, FSK, PSK and QAM are points in the $I$–$Q$ constellation; more points carry more bits but need more power.
- **BER**: BPSK $P_b = Q(\sqrt{2E_b/N_0})$, $10^{-5}$ at 9.6 dB; FSK and OOK need 3 dB more.
- **Shannon capacity** $C = B\log_2(1 + S/N)$ bounds every system; the limit is $E_b/N_0 = -1.6$ dB.
- **Multiplexing and systems**: FDM divides frequency, TDM divides time (E1 = 2.048 Mbit/s); mobile, satellite and fibre links combine all the course's stages.

## Worked Examples

### Example 1 — Telephone PCM

Speech band-limited to 3.4 kHz is sampled at 8 kHz with 8-bit uniform PCM. Find the bit rate and the SQNR for a full-scale sine wave, the bits needed for 60 dB, and how many such channels fit in an E1 frame.

**Solution.** $R_b = 8 \times 8000 = 64$ kbit/s and $\text{SQNR} = 1.76 + 6.02 \times 8 = 49.9$ dB. For 60 dB, $n \ge (60 - 1.76)/6.02 = 9.67$, so $n = 10$ and $R_b = 80$ kbit/s. E1 carries 32 slots of 64 kbit/s; two are used for framing and signalling, leaving 30 voice channels in 2.048 Mbit/s.

### Example 2 — Capacity versus modulation

A channel has $B = 1$ MHz and $S/N = 20$ dB. Find its Shannon capacity and decide which of 16-, 64- and 256-QAM at 1 Msymbol/s could in principle be received error-free.

**Solution.** $S/N = 100$, so

$$C = 10^6\log_2 101 = 10^6 \times 6.658 = 6.66\ \text{Mbit/s}.$$

At 1 Msymbol/s, 16-QAM carries 4 Mbit/s and 64-QAM 6 Mbit/s, both below $C$; 256-QAM would carry 8 Mbit/s, above capacity, so no coding scheme can make it reliable at this SNR. In practice 64-QAM, so close to the limit, needs strong coding and extra SNR.

### Example 3 — An optical-fibre link

A step-index fibre has $n_1 = 1.48$ and $n_2 = 1.46$. Find its numerical aperture and acceptance half-angle. An 80 km span has 0.2 dB/km loss and 2 dB of connector loss; the laser launches 0 dBm and the receiver needs $-28$ dBm. Find the margin.

**Solution.**

$$\text{NA} = \sqrt{1.48^2 - 1.46^2} = \sqrt{2.1904 - 2.1316} = 0.243, \qquad \theta_a = \sin^{-1}0.243 = 14.0^\circ.$$

The total loss is $80 \times 0.2 + 2 = 18$ dB, so the received power is $-18$ dBm and the margin $-18 - (-28) = 10$ dB, enough for ageing and repairs.

## Common Misconceptions

- **"Sampling loses information between the samples."** A band-limited signal sampled above the Nyquist rate is recovered exactly; information is lost only by aliasing or quantisation.
- **"More bits per symbol always means a faster link."** Denser constellations need more SNR; above the Shannon capacity no constellation or code can work reliably.
- **"Digital signals are immune to noise."** Noise causes bit errors with probability set by $E_b/N_0$; digital systems differ in that regeneration stops noise accumulating.
- **"Satellite delay comes from slow electronics."** It is geometric: 72 000 km up and down at the speed of light takes about 0.24 s.

## Connections

- Sampling and aliasing are the same phenomenon as the stroboscopic effect and govern the FFT display of Communication Electronics Lab, Lesson m1-l4, and the ADCs of the Microcontroller and Embedded Systems Lab (Lesson m1-l2).
- Shannon's capacity uses the same logarithmic measure of information as Boltzmann's entropy (Thermal Physics and Statistical Mechanics, Lesson m2-l3).
- Fibre guidance is total internal reflection (Waves and Optics, Lesson m2-l1); the diode lasers used as fibre sources appear in the Atomic and Molecular Physics Lab (Lesson m1-l3).
- Deep-space probes use error-correcting codes that work within a fraction of a decibel of the Shannon limit.

## Quick Check

1. A signal contains components up to 20 kHz. What is the Nyquist rate, and where does a 30 kHz component appear if it is sampled at 44.1 kHz without filtering?
2. How many bits are needed for an SQNR of at least 90 dB?
3. Sketch the constellations of BPSK, QPSK and 16-QAM and state the bits per symbol of each.
4. A telephone channel has $B = 3.1$ kHz and $S/N = 30$ dB. Find its Shannon capacity.
5. Calculate the bit rate of a T1 frame and explain the extra framing bit.

## Takeaway

- Sampling at $f_s \ge 2W$ preserves a band-limited signal; PCM adds quantisation noise of $\Delta^2/12$, giving 6 dB per bit.
- Digital modulation places symbols in an $I$–$Q$ constellation; the bit error rate depends on $E_b/N_0$ and the spacing of points.
- Shannon's $C = B\log_2(1 + S/N)$ sets the ultimate rate for any bandwidth and SNR.
- FDM and TDM share channels; mobile, satellite and fibre links assemble every block of this course.
