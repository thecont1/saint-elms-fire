***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-5
semesterName: Semester 5
subjectId: mathematics
subjectName: Mathematics
courseId: integral-transforms
courseName: Integral Transforms (Mathematics Elective I)
moduleId: integral-transforms-module-3
moduleName: Transform Methods for ODEs, PDEs and Signals
lessonId: integral-transforms-m3-l3
lessonName: The Discrete Fourier Transform and the FFT in Python
lessonNumber: 9
moduleNumber: 3
semesterNumber: 5
difficulty: advanced
estimatedStudyMinutes: 60
releaseOrder: 9
prerequisites:
  - integral-transforms-m3-l2
  - calculus-using-python-m1-l2
learningObjectives:
  - Define the DFT $X_k = \sum_{n=0}^{N-1}x_ne^{-2\pi ikn/N}$ and its inverse, prove discrete orthogonality and Parseval, and relate $X_k$ to the continuous Fourier transform and to Fourier series coefficients.
  - Construct the frequency grid of a sampled record, state the sampling theorem and predict alias frequencies.
  - Explain the radix-2 Cooley–Tukey FFT and its $O(N\log_2N)$ cost.
  - Compute and interpret the amplitude spectrum of a two-tone signal with `numpy.fft`, including spectral leakage and Hann windowing.
concepts:
  - Discrete Fourier transform
  - Fast Fourier transform
  - Nyquist frequency
  - Sampling theorem
  - Aliasing
  - Spectral leakage
  - Window functions
tags:
  - mathematics
  - integral-transforms
  - discrete-fourier-transform
  - signal-processing
sourceType: authored-courseware
status: in-review
assessmentHints:
  - computational
  - problem-solving
  - conceptual
  - derivation
***

# The Discrete Fourier Transform and the FFT in Python

## Overview

Every measured spectrum, from an oscilloscope's FFT display to a radio telescope's correlator output, is computed from a finite list of samples. The continuous transforms of this course are therefore replaced by a finite sum, the discrete Fourier transform (DFT), evaluated by a fast algorithm, the FFT. This lesson defines the DFT with the sign convention of Lessons m1-l2 and m1-l3, proves inversion and Parseval from discrete orthogonality, and maps its output onto physical frequencies. Sampling brings two new effects: aliasing, when the signal contains frequencies above half the sampling rate, and leakage, when a tone does not complete a whole number of cycles in the record. We derive the Cooley–Tukey FFT, then compute the spectrum of a two-tone signal in `numpy.fft` and tame leakage with a Hann window.

## Learning Path

- **What you should already know**: complex Fourier series and Parseval (Lesson m1-l2); the rectangular-pulse transform and uncertainty relation (Lesson m1-l3); NumPy arrays and plotting (Calculus using Python, Lesson m1-l2).
- **What this lesson adds**: the DFT, the frequency grid, the sampling theorem and aliasing, the FFT algorithm, leakage, windowing and amplitude spectra.
- **What later lessons this will unlock**: this lesson completes the course; its tools recur in laboratory spectrum analysis, spectral methods in Advanced Numerical Methods and astrophysical time-series analysis.

## Core Explanation

### The DFT

Sample a signal at interval $\Delta t$, i.e. at rate $f_s = 1/\Delta t$, to obtain $x_n = x(n\Delta t)$, $n = 0, \ldots, N - 1$, a record of length $T = N\Delta t$. The **discrete Fourier transform** and its inverse are

$$X_k = \sum_{n=0}^{N-1}x_n\,e^{-2\pi ikn/N}, \qquad x_n = \frac1N\sum_{k=0}^{N-1}X_k\,e^{2\pi ikn/N}, \qquad k, n = 0, \ldots, N - 1 .$$

This is NumPy's convention: `np.fft.fft` computes $X_k$ with the minus sign and no prefactor, and `np.fft.ifft` carries the $1/N$, mirroring the $1/2\pi$ of our continuous inverse.

**Orthogonality.** For integers $k, m$ the geometric series gives

$$\sum_{n=0}^{N-1}e^{2\pi i(k - m)n/N} = \begin{cases}N & k \equiv m \pmod N,\\[2pt] \dfrac{1 - e^{2\pi i(k - m)}}{1 - e^{2\pi i(k - m)/N}} = 0 & \text{otherwise.}\end{cases}$$

Substituting the forward sum into the inverse and using this identity proves inversion and the **discrete Parseval theorem** $\sum_n|x_n|^2 = \frac1N\sum_k|X_k|^2$.

**Relation to the continuous transforms.** A Riemann sum of $F(\omega) = \int f(t)e^{-i\omega t}dt$ over the record, at $\omega_k = 2\pi k/T$, gives $F(\omega_k) \approx \Delta t\,X_k$, because $\omega_kn\Delta t = 2\pi kn/N$. Equally, $X_k/N$ approximates the coefficient $c_k$ of the Fourier series of the record repeated with period $T$ (Lesson m1-l2): the DFT silently treats the record as one period of a periodic signal.

### The frequency grid

Bin $k$ is the frequency $f_k = k f_s/N = k/T$, so the **frequency resolution** is $\Delta f = 1/T$, the uncertainty relation of Lesson m1-l3 in discrete form. Since $e^{-2\pi i(N - k)n/N} = e^{+2\pi ikn/N}$, bins $k > N/2$ represent the negative frequencies $(k - N)f_s/N$; `np.fft.fftfreq(N, d=dt)` returns them in that order. For real input $X_{N-k} = \overline{X_k}$, so only bins $0$ to $N/2$ carry information, which is what `np.fft.rfft` and `np.fft.rfftfreq` return. A real sinusoid $A\sin(2\pi f_kt)$ that falls exactly on bin $k$ gives $|X_k| = AN/2$, so the **single-sided amplitude** is $2|X_k|/N$, except at $k = 0$ and $k = N/2$, where the factor is $1/N$.

### The sampling theorem and aliasing

Because $n$ is an integer, $e^{2\pi i(f + mf_s)n\Delta t} = e^{2\pi ifn\Delta t}$ for every integer $m$: frequencies differing by a multiple of $f_s$ produce identical samples. Only $|f| \leq f_N = f_s/2$, the **Nyquist frequency**, is represented uniquely. A component at $f > f_N$ appears at the **alias** frequency $|f - mf_s|$, with $m$ the integer nearest to $f/f_s$. The **sampling theorem** (Nyquist–Shannon) states the converse: if $x(t)$ contains no frequencies at or above $f_s/2$, it is recovered exactly from its samples by

$$x(t) = \sum_{n=-\infty}^{\infty}x(n\Delta t)\,\frac{\sin[\pi(t - n\Delta t)/\Delta t]}{\pi(t - n\Delta t)/\Delta t}.$$

An analogue low-pass **anti-aliasing filter** must remove content above $f_N$ before digitisation; no software can undo aliasing afterwards.

### The fast Fourier transform

Computed directly, the DFT costs $N^2$ complex multiplications. Write $W_N = e^{-2\pi i/N}$ and, for even $N$, split the sum into even and odd samples. Since $W_N^2 = W_{N/2}$,

$$X_k = \underbrace{\sum_{m=0}^{N/2-1}x_{2m}W_{N/2}^{mk}}_{E_k} + W_N^k\underbrace{\sum_{m=0}^{N/2-1}x_{2m+1}W_{N/2}^{mk}}_{O_k}.$$

$E_k$ and $O_k$ are DFTs of length $N/2$, periodic in $k$ with period $N/2$, and $W_N^{k + N/2} = -W_N^k$, so

$$X_k = E_k + W_N^kO_k, \qquad X_{k + N/2} = E_k - W_N^kO_k, \qquad 0 \leq k < N/2 .$$

This **butterfly** builds a length-$N$ transform from two of length $N/2$ with $N/2$ extra multiplications. Recursing to length $1$ for $N = 2^p$ takes $\log_2N$ stages of $O(N)$ work: the **Cooley–Tukey FFT** (1965) costs $O(N\log_2N)$. For $N = 2^{20}$, $N^2 \approx 1.1 \times 10^{12}$ against $N\log_2N \approx 2.1 \times 10^7$, a speed-up of about $50\,000$. NumPy handles any $N$, fastest when $N$ has small prime factors.

### Leakage and windowing

A finite record is the signal multiplied by a rectangular window of length $T$, so by the product rule of Lesson m1-l3 its spectrum is the true spectrum convolved with a periodic version of $2\sin(ka)/k$. If a tone completes a whole number of cycles in $T$, the DFT samples this kernel at its peak and its zeros, and the tone occupies one bin. Otherwise the tone's power **leaks** into every bin, and the peak drops by up to $36$ per cent (to $2/\pi$ of its true value at a half-bin offset, the **scalloping loss**). Multiplying the record by a smooth **window** $w_n$ that tapers to zero at both ends reduces the sidelobes. The **Hann window**, $w_n = \tfrac12[1 - \cos(2\pi n/(N - 1))]$ (`np.hanning`), lowers the highest sidelobe from $-13$ dB to $-31$ dB and makes the sidelobes fall much faster, at the price of a main lobe twice as wide. The amplitude must then be normalised by $\sum w_n$ rather than $N$. This is the trade-off of Fejér smoothing in Lesson m1-l2: less ringing, more blur. Zero-padding interpolates the spectrum but does not improve resolution, which remains $1/T$.

## Key Ideas

- **DFT pair**: $X_k = \sum x_ne^{-2\pi ikn/N}$, $x_n = \frac1N\sum X_ke^{2\pi ikn/N}$; NumPy uses exactly this convention.
- **Frequency grid**: $f_k = kf_s/N$, resolution $\Delta f = 1/T$; bins above $N/2$ are negative frequencies; use `rfft` for real data.
- **Amplitude scaling**: a sinusoid on bin $k$ has $|X_k| = AN/2$; plot $2|X_k|/N$, or $2|X_k|/\sum w_n$ with a window.
- **Aliasing**: components above $f_N = f_s/2$ fold to $|f - mf_s|$; filter before sampling.
- **FFT**: even–odd splitting gives $O(N\log_2N)$ cost instead of $O(N^2)$.
- **Leakage and windows**: non-integer cycles spread power across bins; a Hann window trades resolution for lower sidelobes.

## Worked Examples

### Example 1 — Frequency grid and aliases

A signal is sampled at $f_s = 1000$ Hz with $N = 500$ samples. Find $T$, $\Delta f$ and $f_N$, the apparent frequencies of tones at $620$ Hz and $1130$ Hz, and the record length needed to separate two tones $0.5$ Hz apart.

**Solution.** $T = N/f_s = 0.50$ s, $\Delta f = 1/T = 2.0$ Hz and $f_N = 500$ Hz. For $620$ Hz the nearest multiple of $f_s$ is $1000$, so the alias is $|620 - 1000| = 380$ Hz, appearing in `rfft` bin $190$. For $1130$ Hz the nearest multiple is $1000$, giving $130$ Hz. Separating tones $0.5$ Hz apart needs $\Delta f \lesssim 0.5$ Hz, so $T \gtrsim 2$ s, i.e. $N \gtrsim 2000$; a Hann window, with its doubled main lobe, needs roughly twice that.

### Example 2 — A four-point DFT by hand and by FFT butterfly

Compute the DFT of $x = (1, 2, 0, -1)$ directly and with one butterfly stage, and check Parseval.

**Solution.** For $N = 4$, $W_4 = e^{-i\pi/2} = -i$, so $X_k = \sum_nx_n(-i)^{kn}$. Then $X_0 = 1 + 2 + 0 - 1 = 2$. With $(-i)^n = 1, -i, -1, i$ for $n = 0, 1, 2, 3$, $X_1 = 1 + 2(-i) + 0 + (-1)(i) = 1 - 3i$; $X_2 = 1 - 2 + 0 + 1 = 0$; and $X_3 = \overline{X_1} = 1 + 3i$ by conjugate symmetry. *Butterfly*: the even samples $(1, 0)$ give $E = (1, 1)$; the odd samples $(2, -1)$ give $O = (1, 3)$. Then $X_0 = E_0 + O_0 = 2$, $X_1 = E_1 + W_4O_1 = 1 - 3i$, $X_2 = E_0 - O_0 = 0$, $X_3 = E_1 - W_4O_1 = 1 + 3i$, as before. Parseval: $\sum|x_n|^2 = 6$ and $\frac14(4 + 10 + 0 + 10) = 6$. The code prints the same vector twice.

```python
import numpy as np

def dft(x):
    n = np.arange(len(x))
    W = np.exp(-2j * np.pi * np.outer(n, n) / len(x))   # W[k, n] = e^{-2 pi i k n / N}
    return W @ x

x = np.array([1.0, 2.0, 0.0, -1.0])
print(dft(x))          # [2, 1-3j, 0, 1+3j]
print(np.fft.fft(x))   # identical: same sign convention
```

### Example 3 — Spectrum of a two-tone signal, with leakage and a Hann window

Sample $x(t) = \sin(2\pi\cdot50t) + 0.5\sin(2\pi\cdot120t)$ at $f_s = 1000$ Hz for $T = 1$ s and find its amplitude spectrum. Then move the second tone to $120.5$ Hz and compare rectangular and Hann windows.

**Solution.** Here $N = 1000$ and $\Delta f = 1$ Hz, so both tones lie on bins $50$ and $120$; the amplitudes $2|X_k|/N$ are exactly $1.000$ and $0.500$, and every other bin is zero to rounding. At $120.5$ Hz the tone sits half-way between bins: with the rectangular window the peak reads about $0.5 \times 2/\pi = 0.32$ in bins $120$ and $121$, with a slowly decaying skirt. With the Hann window the half-bin scalloping loss is only $15$ per cent, so the peak reads about $0.5 \times 0.85 = 0.42$, and the skirt falls far more steeply. The plot shows both spectra on a logarithmic scale: expect peaks at $50$ and $120.5$ Hz, with the rectangular curve well above the Hann curve away from the peaks.

```python
import numpy as np
import matplotlib.pyplot as plt

fs, N = 1000.0, 1000
t = np.arange(N) / fs                       # 1 s record, df = 1 Hz
f = np.fft.rfftfreq(N, d=1/fs)              # 0, 1, ..., 500 Hz

def amp(x, w):
    return 2 * np.abs(np.fft.rfft(x * w)) / w.sum()

rect, hann = np.ones(N), np.hanning(N)
x1 = np.sin(2*np.pi*50*t) + 0.5*np.sin(2*np.pi*120*t)
A = amp(x1, rect)
print(f[A > 0.1], A[A > 0.1].round(3))      # [ 50. 120.] [1.  0.5]

x2 = np.sin(2*np.pi*50*t) + 0.5*np.sin(2*np.pi*120.5*t)
for name, w in (("rect", rect), ("hann", hann)):
    B = amp(x2, w)
    k = 100 + np.argmax(B[100:])            # strongest bin above 100 Hz
    print(name, f[k], B[k].round(3))        # rect ~0.32, hann ~0.42

plt.semilogy(f, amp(x2, rect), label="rectangular")
plt.semilogy(f, amp(x2, hann), label="Hann")
plt.xlim(0, 200); plt.xlabel("frequency (Hz)"); plt.ylabel("amplitude")
plt.legend(); plt.show()
```

## Common Misconceptions

- **"The FFT is a different transform from the DFT."** The FFT is an algorithm that computes the DFT exactly, only faster.
- **"The DFT's highest bin is the highest frequency in the signal."** Frequencies above $f_s/2$ fold down as aliases, indistinguishable from genuine low-frequency content.
- **"Zero-padding increases frequency resolution."** It interpolates between bins; the ability to separate two tones is fixed by the record length, $\Delta f = 1/T$.
- **"The height of an FFT peak is the amplitude of the tone."** Only after scaling by $2/N$ (or $2/\sum w_n$) and only for an on-bin tone; otherwise scalloping lowers it by up to $36$ per cent.
- **"Windowing removes leakage."** It reduces distant leakage at the cost of a wider main lobe; by the uncertainty relation no window gives both.

## Connections

- The FFT display of a digital oscilloscope in the Communication Electronics Lab (Lesson m1-l4) is the windowed `rfft` computed here.
- Spectral differentiation in Numerical Methods (Lesson m2-l1) multiplies the DFT by $ik$; FFT solvers integrate the heat equation of Lesson m3-l2 on periodic grids.
- Pulsar searches in Astrophysics IV (Lesson m3-l7) look for periodicities as peaks in FFT power spectra of long time series.
- Digital audio is sampled at $44.1$ kHz, just above twice the $20$ kHz limit of hearing, to avoid aliasing.

## Quick Check

1. A record of $N = 4096$ samples is taken at $f_s = 8192$ Hz. Find $\Delta f$, $f_N$ and the frequency of `rfft` bin $300$.
2. A $9$ kHz tone is sampled at $f_s = 8$ kHz. At what frequency does it appear?
3. Show that for real $x_n$, $X_{N-k} = \overline{X_k}$.
4. Estimate how many times faster an FFT is than a direct DFT for $N = 4096$.
5. Why does a tone at exactly $50.0$ Hz show no leakage in a $1$ s record, while one at $50.5$ Hz does?

## Takeaway

- The DFT is the sampled Fourier transform, with the course sign convention and $1/N$ on the inverse.
- Bin $k$ is frequency $kf_s/N$; resolution is $1/T$, and only frequencies below $f_s/2$ are represented uniquely.
- Aliasing must be prevented before sampling; leakage is managed afterwards by windowing.
- The Cooley–Tukey FFT reduces $O(N^2)$ work to $O(N\log_2N)$ by recursive even–odd splitting.
- With `numpy.fft`, scale `rfft` magnitudes by $2/\sum w_n$ to read amplitudes; choose record length and window for the resolution needed.
