***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-6
semesterName: Semester 6
subjectId: mathematics
subjectName: Mathematics
courseId: mathematics-lab-using-python-iii
courseName: Mathematics Lab using Python III
moduleId: mathematics-lab-using-python-iii-module-1
moduleName: Advanced Scientific Computing in Python — SVD, Transforms and Optimisation
lessonId: mathematics-lab-using-python-iii-m1-l3
lessonName: Fourier Transforms — Spectra, Parseval and Filtering with the FFT
lessonNumber: 3
moduleNumber: 1
semesterNumber: 6
difficulty: intermediate
estimatedStudyMinutes: 50
releaseOrder: 3
prerequisites:
  - mathematics-lab-using-python-iii-m1-l2
learningObjectives:
  - Compute discrete Fourier transforms with the FFT, place spectral peaks at the correct physical frequencies, and honour the Nyquist limit.
  - Verify the DFT numerically: known-signal spectra, Parseval's energy identity, and the convolution theorem.
  - Design and apply simple frequency-domain filters (notch, low-pass) and quantify what they remove and what they distort.
concepts:
  - Discrete Fourier transform
  - Fast Fourier transform
  - Sampling and Nyquist limit
  - Parseval's theorem
  - Convolution theorem
  - Frequency-domain filtering
tags:
  - mathematics
  - laboratory
  - python
  - fourier-analysis
  - signal-processing
sourceType: authored-courseware
assessmentHints:
  - Sampling at rate f_s places frequencies up to f_s/2 (Nyquist); a sinusoid at f_0 puts DFT peaks at bins k = N f_0/f_s and N − k.
  - Parseval: Σ|x_n|² = (1/N) Σ|X_k|² — check it to machine precision before trusting any spectrum.
  - Filtering multiplies the spectrum; report both what is removed and the ringing/distortion the sharp cutoff introduces.
status: in-review
***

# Fourier Transforms — Spectra, Parseval and Filtering with the FFT

## Overview

The Fourier transform is the change of basis that turns "what happens in time" into "what frequencies are present" — and the FFT computes it in O(N log N) instead of O(N²), which is why spectral analysis is a daily tool rather than a research project. This lesson builds the working discipline of the DFT: where the bins land in physical units, what Nyquist forbids, and how to check that the transform you computed is the transform you think it is — via Parseval's energy identity, known-signal spectra, and the convolution theorem. The application is filtering: removing a mains-frequency hum and smoothing a noisy signal, with honest accounting of what the filter takes out along with the noise.

## Learning Path

1. **Set up sampling:** rate f_s, duration T, N samples; map bin index k to physical frequency.
2. **Compute spectra with np.fft.fft;** locate peaks for known sinusoids; confirm Nyquist behaviour.
3. **Validate:** Parseval's identity to machine precision; linearity and shift properties by direct check.
4. **Convolution theorem:** time-domain convolution vs spectral multiplication; compare to rounding.
5. **Filtering:** notch out a contaminating tone; low-pass a noisy signal; quantify signal distortion.
6. **Diagnose leakage:** windowing effects when a tone does not land exactly on a bin.

## Core Explanation

### Theory: Sampling, bins, and Nyquist

Sampling x(t) at rate f_s for duration T gives N = f_s T samples. The DFT bin k corresponds to frequency f_k = k f_s/N = k/T; the spectrum is symmetric about k = N/2 (real signals), so only f ∈ [0, f_s/2] carries information. Nyquist: content above f_s/2 does not vanish — it *aliases*, folding back into the observable band (a tone at f_s/2 + δ appears at f_s/2 − δ). Resolution is 1/T: two closer tones cannot be separated, whatever N is. These three facts — bin mapping, Nyquist, resolution — are the entire geometry of every spectrum you will plot.

### Theory: The checks that certify a spectrum

- **Known signals:** a pure cosine at f_0 places equal peaks at bins k = Nf_0/f_s and N − k, each with amplitude N·A/2 for amplitude A; everything else is rounding level.
- **Parseval:** Σ_n |x_n|² = (1/N) Σ_k |X_k|² — energy conservation across domains, valid to machine precision; a violation means misnormalisation, and no spectral claim deserves trust until it passes.
- **Convolution theorem:** x ∗ y in time ↔ X·Y in frequency (with the appropriate circular-convolution caveat); verifying the two routes agree certifies both your transform and your indexing conventions at once.

### Theory: Filtering as spectral multiplication

A filter multiplies X_k by a response H_k and inverse-transforms. An ideal notch zeroes the bins around the contaminant; an ideal low-pass zeroes everything above a cutoff. "Ideal" in frequency means sharp cutoffs, which in time means ringing (Gibbs phenomenon again) and slow-decaying impulse responses — the price paid in the other domain. Smooth responses (e.g. Gaussian low-pass) trade stopband sharpness for time-domain cleanliness. Every filter choice is a budget: what is removed, what leaks through, what is distorted.

### Numerical Setup (Apparatus)

- Python: numpy.fft, matplotlib; seeded randomness for noise.
- Base signal: x(t) = cos(2π·50·t) + 0.5·cos(2π·120·t) sampled at f_s = 1000 Hz for T = 2 s (N = 2000).
- Filter exercises: in the base signal treat the 50 Hz tone as a mains-hum contaminant and the 120 Hz tone as the signal; add white noise (σ = 0.2) for the low-pass exercise and a broadband noise band for the notch-ringing test.
- Parseval and convolution checks on random vectors of length 256 and 1024.
- Record all parameters alongside outputs (reproducibility).

### Procedure

1. **Bin map:** for the base signal, compute f_k = k/T and predict where the 50 Hz and 120 Hz peaks land (k = 100 and k = 240 at T = 2 s).
2. **Spectrum:** fft the base signal; plot |X_k| vs f on [0, f_s/2]; verify peak locations and relative heights (1 vs 0.5, i.e. N·A/2 = 1000 vs 500).
3. **Parseval:** compute both sides; record the relative difference.
4. **Convolution:** convolve two random sequences via np.convolve (linear) and via zero-padded FFT multiplication; compare elementwise.
5. **Notch filter:** on the contaminated signal, zero bins within ±2 Hz of 50 Hz; inverse-transform; measure the removed tone and the effect on the 120 Hz component.
6. **Low-pass:** on the noisy signal, apply a Gaussian spectral window with cutoff 60 Hz; compare filtered vs noise-free truth by RMS error; sweep the cutoff to find the optimum.
7. **Leakage demo:** shift the 120 Hz tone to 120.3 Hz (off-bin); show spectral leakage and the effect of a Hann window.

### Analysis

#### Spectra, located and scaled

The base signal's spectrum shows peaks at exactly k = 100 (50 Hz) and k = 240 (120 Hz) with magnitudes 1000 and 500 — N·A/2 for each tone — and everything else at ~10⁻¹³ relative level. The mirror peaks at N − k carry the conjugate halves; plotting the full [0, f_s) spectrum shows the symmetry, and restricting to [0, f_s/2] shows why. No peak appears near 500 Hz or beyond: Nyquist respected because the content was below f_s/2 = 500 Hz.

#### The identity checks

Parseval's two sides agree relatively to ~10⁻¹⁵ for N = 1024 — the transform is unitary up to the stated normalisation, and the convention (no 1/N on the forward pass) is confirmed. FFT convolution with padding ≥ len(x) + len(y) − 1 matches np.convolve to ~10⁻¹² elementwise; without padding the wrap-around corruption is immediate and instructive — circular, not linear, convolution.

#### Filtering budgets

Notch at 50 Hz (48–52 Hz, 9 bins): the on-bin contaminant is removed exactly — residual at rounding level (~10⁻¹²) — and the 120 Hz component is untouched to 12 digits because its bins lie outside the notch. The cost appears for broadband content: zeroing the bins subtracts a ringing kernel of width ~1/Δf ≈ 0.25 s, which a noise-band test signal shows as distortion of exactly that extent around sharp features — the sharp-cutoff price, measured rather than ignored. Gaussian low-pass at 60 Hz on the σ = 0.2 noise: RMS error vs truth minimises at cutoff ≈ 55–65 Hz; below, signal attenuation dominates; above, noise passes. The optimum is a number from the sweep, and the report shows the U-shaped error curve.

#### Leakage and windowing

At 120.3 Hz the tone no longer lands on a bin: its energy leaks into neighbouring bins with a sinc-like skirt (side lobes ~13 dB down for the rectangular window). A Hann window suppresses the skirt (side lobes ~31 dB down) at the cost of a wider main lobe — the resolution/side-lobe trade, visible in one overlaid plot.

### Sources of Error

- **Bin-mapping slips:** reading the index k as a frequency, or forgetting the mirror symmetry of real spectra; write the expected frequency f_k = k·f_s/N = k/T before plotting and check the peak lands there.
- **Normalisation drift:** forgetting where the 1/N lives breaks Parseval and amplitude readings; fix the convention once (forward unnormalised, inverse carries 1/N) and verify with the identity.
- **Circular-convolution trap:** FFT convolution without zero-padding wraps the tail into the head; pad to at least the linear length.
- **Aliasing ignored:** content above f_s/2 folds into the band invisibly; if the physical signal may contain it, anti-alias before sampling — no post-processing recovers it.
- **Filter side effects unreported:** notch ringing and passband attenuation are consequences, not bugs; quantify both whenever a filter touches data.

## Key Ideas

- The DFT's geometry is three facts: bin frequency k/T, Nyquist at f_s/2, resolution 1/T.
- Parseval to machine precision is the pre-flight check for every spectrum; known-signal peaks calibrate amplitude and location together.
- Convolution theorem verified with padding certifies indexing conventions — a cheap, decisive test.
- Filtering is spectral multiplication with a budget: removal, leakage-through, and time-domain distortion, all quantified.
- Off-bin tones leak; windows trade side lobes for resolution — choose by the question, show the trade.

## Worked Examples

#### Example 1: Predicting the peaks

f_s = 1000, T = 2 → N = 2000, bin width 0.5 Hz. A tone at 120 Hz: k = 120/0.5 = 240, peak magnitude N·A/2 = 2000 × 0.5/2 = 500. The plotted spectrum shows exactly that; any shift means a sampling-rate or indexing bug, located before any physics is discussed.

#### Example 2: Parseval as a tripwire

Random x of length 1024: Σ|x_n|² = 1031.72641; (1/N)Σ|X_k|² = 1031.72641 to 13 digits. Later, a re-used routine with a double-applied 1/N fails the identity at the 10⁻³ level — caught immediately, before corrupting a week of spectra. The identity is the tripwire.

#### Example 3: The notch budget

The 50 Hz contaminant lands exactly on bin 100 (T = 2 s): zeroing bins 96–104 (48–52 Hz) removes it to rounding level (~10⁻¹²) — all its energy lived in those bins. The 120 Hz component is unchanged to 12 digits; a broadband noise-band test shows the notch's ringing kernel distorting sharp features over ~0.25 s ≈ 1/Δf. The budget line in the report: "removed the 50 Hz contaminant to rounding level at the cost of 9 zeroed bins and a 0.25 s ringing kernel" — defensible, reproducible, honest.

## Common Misconceptions

- **"Zero-padding improves frequency resolution."** It interpolates the spectrum (finer plotting grid); resolution is set by T alone.
- **"Aliased content is just lost."** Worse: it appears at the wrong frequency, confidently. Only pre-sampling filtering fixes it.
- **"A filter removes only what it targets."** Sharp spectral cuts ring in time; every stopband decision has a time-domain invoice.
- **"The FFT changes what the transform is."** It computes the same DFT faster; the mathematics, conventions, and pitfalls are the DFT's.
- **"Higher f_s is always safer."** Oversampling buys Nyquist margin but costs N (and hence T at fixed resolution); the sampling plan follows from the highest frequency and the resolution needed, jointly.

## Connections

- **Python II Lesson 5:** the quadrature discipline (known answers, orders, budgets) transfers unchanged to spectral measurement.
- **Semester 6 Numerical Analysis:** spectral methods differentiate and solve PDEs by exactly these transforms, with aliasing controlled by the 2/3 rule.
- **Physics:** spectra are the native language of waves, optics, NMR, and quantum transitions; every measured line shape is a DFT away.
- **Lesson 4:** optimisation will fit models in the time domain that this lesson diagnoses in the frequency domain.

## Quick Check

1. For f_s = 1000 and T = 2, what bin carries 120 Hz and what is its expected magnitude for amplitude A?
2. State Parseval's identity for the unnormalised forward DFT and explain its use as a diagnostic.
3. What does Nyquist forbid, and what actually happens to forbidden content?
4. Why must FFT-based convolution zero-pad, and to what length?
5. What are the three terms in a filter's honest budget?

## Takeaway

A spectrum is a measurement with geometry: bins at k/T, a wall at f_s/2, resolution 1/T. Certified by Parseval, calibrated on known tones, and budgeted when it filters, the FFT becomes an instrument whose every peak, notch, and side lobe carries a number — and that is the difference between reading a signal and merely looking at one.
