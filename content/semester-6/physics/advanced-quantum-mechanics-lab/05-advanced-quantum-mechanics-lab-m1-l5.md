***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-6
semesterName: Semester 6
subjectId: physics
subjectName: Physics
courseId: advanced-quantum-mechanics-lab
courseName: Advanced Quantum Mechanics Lab (Option C)
moduleId: advanced-quantum-mechanics-lab-module-1
moduleName: Numerical Quantum Mechanics — Eigenvalues, Dynamics and Scattering
lessonId: advanced-quantum-mechanics-lab-m1-l5
lessonName: Scattering from a Barrier — Transmission, Reflection and Resonances
lessonNumber: 5
moduleNumber: 1
semesterNumber: 6
difficulty: intermediate
estimatedStudyMinutes: 50
releaseOrder: 5
prerequisites:
  - advanced-quantum-mechanics-lab-m1-l4
learningObjectives:
  - Compute transmission and reflection coefficients for a rectangular barrier by stationary shooting, extracting amplitudes from asymptotic matching.
  - Verify flux conservation (T + R = 1) and the closed-form barrier formulas, including above-barrier resonances.
  - Cross-check the stationary results with a time-dependent wavepacket scattering run and interpret the finite-width-packet correction.
concepts:
  - Scattering states
  - Transmission and reflection coefficients
  - Tunnelling
  - Above-barrier resonance
  - Asymptotic amplitude extraction
  - Wavepacket scattering
tags:
  - physics
  - laboratory
  - computational-physics
  - quantum-mechanics
  - scattering
sourceType: authored-courseware
assessmentHints:
  - Shoot from the transmitted side with a unit outgoing wave; extract incident and reflected amplitudes at the left matching point from ψ and ψ'.
  - Barrier (width L, height V_0): T = [1 + V_0² sinh²(κL)/(4E(V_0 − E))]^{−1} below; sinh → sin, V_0 − E → E − V_0 above. T = 1 at k'L = nπ.
  - Flux check T + R = 1 is independent of any analytic formula; a wavepacket measures the spectral average of T(E), not T(E_0).
status: in-review
***

# Scattering from a Barrier — Transmission, Reflection and Resonances

## Overview

The same rectangular potential that bound states in Lesson 2 scatters them at positive energy: bound and scattering spectra are two faces of one Hamiltonian. This lesson computes the scattering face. You will find transmission and reflection coefficients two independent ways — a stationary calculation that shoots the Schrödinger equation across the barrier and extracts amplitudes from the asymptotics, and a time-dependent run that fires a wavepacket at the barrier and weighs what gets through. Each method validates the other, and both are validated against the closed-form barrier formula. The physics rewards are the exponential sensitivity of tunnelling and the surprise of perfect transmission *above* the barrier — resonances where a barrier becomes invisible.

## Learning Path

1. **Set up scattering boundary conditions:** incident + reflected waves on the left, transmitted wave on the right.
2. **Implement stationary shooting** from the transmitted side; extract amplitudes by asymptotic matching.
3. **Verify flux conservation** T + R = 1 across the whole energy scan.
4. **Compare T(E) with the analytic formula** below and above the barrier; locate the resonances.
5. **Cross-check with Lesson 3's propagator:** fire a packet, measure transmitted/reflected probability.
6. **Interpret the packet result** as a spectral average of T(E), not its value at the centre energy.

## Core Explanation

### Theory: Stationary scattering states

For V(x) = V_0 on |x| < a, zero elsewhere, a scattering state at energy E = ħ²k²/(2m) has the asymptotic form

ψ = e^{ikx} + r e^{−ikx} (x < −a), ψ = t e^{ikx} (x > a),

with reflection and transmission coefficients R = |r|², T = |t|² (equal wavenumbers on both sides make the flux ratios simple modulus squares). The rectangular barrier has closed-form answers. With barrier width L = 2a:

- E < V_0: T = [1 + V_0² sinh²(κL)/(4E(V_0 − E))]^{−1}, κ = √(2m(V_0 − E))/ħ — tunnelling, exponentially small for κL ≳ 1.
- E > V_0: the same expression with sinh → sin and V_0 − E → E − V_0, where k' = √(2m(E − V_0))/ħ. Perfect transmission T = 1 whenever k'L = nπ — above-barrier resonances, the barrier turning transparent at discrete energies.

(For a well, −V_0, the above-barrier formula applies with E + V_0 and produces the Ramsauer–Townsend minima familiar from electron–atom scattering.)

### Theory: Amplitude extraction by shooting

The numerical trick is to avoid fitting three regions at once. Start on the *right* with the pure outgoing wave of unit amplitude: ψ(x_R) = e^{ikx_R}, ψ'(x_R) = ik e^{ikx_R}, and integrate the stationary Schrödinger equation leftward across the barrier to x_L. There the solution must equal A e^{ikx} + B e^{−ikx}; solving for A (incident) and B (reflected) relative to the unit transmitted wave:

A = e^{−ikx_L} (ψ + ψ'/(ik))/2, B = e^{ikx_L} (ψ − ψ'/(ik))/2,

so T = 1/|A|² and R = |B/A|². The beauty is the internal check: T + R = 1 follows from flux conservation alone and tests the whole numerical chain — integration accuracy, matching algebra, units — without quoting any analytic formula.

### Theory: The time-dependent picture

A packet ψ_0 with central wavenumber k_0 (Lesson 3's Gaussian) approaches, splits at the barrier, and separates into reflected and transmitted pieces. Integrating |ψ|² on each side after separation gives P_R and P_T. For a narrow packet P_T ≈ T(E_0); in general the packet measures the spectral average ⟨T⟩ = ∫ T(E) |ψ̃(k)|² dk — comparing against that average, not T(E_0), is the correct finite-width target.

### Numerical Setup (Apparatus)

- Python: scipy.integrate.solve_ivp (DOP853, rtol = 10⁻¹⁰) for the complex stationary equation written as a real system; Lesson 3's Crank–Nicolson propagator for the packet run.
- Units ħ = m = 1; barrier V_0 = 5, half-width a = 1 (L = 2).
- Matching points x_L = −4, x_R = +4 (several decay lengths / wavelengths from the barrier edges).
- Stationary scan: E from 0.5 to 10 in steps of 0.05; record R, T, and T + R.
- Packet run: E_0 = 8 (k_0 = 4), σ_0 = 4, starting at x_0 = −20, masked boundaries; integrate probability on each side once the pieces have separated.
- Record all parameters alongside outputs (reproducibility).

### Procedure

1. **Implement the leftward shoot** for one energy; verify T + R = 1 to ~10⁻¹⁰ before scanning.
2. **Scan E** and tabulate R(E), T(E); flag any point where |T + R − 1| > 10⁻⁸ (a diagnostic, not a rounding footnote).
3. **Overlay the analytic formula** on T(E), below and above the barrier; quantify agreement.
4. **Locate the first resonance:** find E where T peaks at 1 above the barrier; compare with k'L = π.
5. **Tunnelling sensitivity:** fit ln T vs L (or vs κ) in the deep-tunnelling regime and confirm the slope −2κ.
6. **Packet cross-check:** run the time-dependent scattering at E_0 = 8; measure P_T after separation; compare with ⟨T⟩ computed by weighting the stationary T(E) with the packet's |ψ̃(k)|².

### Analysis

#### Flux conservation

Across the full scan, T + R − 1 stays at the solver-tolerance level (< 10⁻⁹ with the stated settings). Points that violate it mark where the integration failed — usually a too-close matching point at low energy (long wavelengths need room) or a loose tolerance inside the barrier where the evanescent components span many orders of magnitude.

#### T(E) against the closed form

Below the barrier, T falls exponentially: at E = 1, κ = √8 ≈ 2.83, and the formula gives T ≈ 3 × 10⁻⁵; the numerics agree to the quoted digits. Above the barrier, T(E) oscillates around a rising trend, hitting exactly 1 at the resonances. The first has k'L = π, i.e. k' = π/L, so E = V_0 + ħ²π²/(2mL²) = 5 + π²/8 ≈ 6.234, and the scan's peak sits there with T = 1 to 10⁻⁶.

#### Packet cross-check

The E_0 = 8 packet splits cleanly; after separation, P_T ≈ 0.81. The point value T(8) = 0.80 undershoots the measurement, while the spectral average ⟨T⟩ ≈ 0.81 (T(E) weighted by the packet's momentum distribution, σ_E ≈ k_0/(2σ_0) = 0.5) matches to ~10⁻². The two methods agree once the finite width is accounted for — the discrepancy against T(E_0) is physics, not error.

### Sources of Error

- **Matching points too close:** x_L, x_R must sit several wavelengths (or decay lengths) from the barrier; otherwise the extracted amplitudes still contain near-barrier distortion.
- **Evanescent dynamic range:** deep tunnelling mixes e^{±κx} components differing by orders of magnitude; integrate in double precision and check that tightening rtol does not move T.
- **Resonance undersampling:** a 0.05 energy grid can straddle a narrow resonance and miss T = 1; refine locally around peaks before claiming their height or position.
- **Packet overlap:** weighing the sides too early (pieces not separated) or with a boundary mask that has already eaten flux biases P_T; wait for a plateau in P_T(t).
- **Spectral-width neglect:** comparing a wide packet's P_T with T(E_0) instead of ⟨T⟩ produces systematic disagreement that shrinks as 1/σ_0 — diagnose before doubting the code.

## Key Ideas

- Scattering boundary conditions are one-sided: unit incident amplitude, outgoing waves only at infinity; r and t fall out of asymptotic matching.
- Shooting from the transmitted side makes T = 1/|A|² and gives the formula-free check T + R = 1 at machine precision.
- Tunnelling is exponential: ln T ~ −2κL for κL ≳ 1; above-barrier transmission oscillates and hits T = 1 at k'L = nπ.
- A wavepacket measures ⟨T⟩ over its spectrum; the stationary and time-dependent methods cross-validate once that averaging is included.
- Bound states (Lesson 2) and scattering resonances are the same potential seen at negative and positive energy.

## Worked Examples

#### Example 1: Deep tunnelling

E = 1 against V_0 = 5, L = 2: κ = √(2(5 − 1)) = 2.83, κL = 5.66, sinh(κL) ≈ 143. The formula gives T = [1 + 25 × 143²/(4 × 1 × 4)]^{−1} ≈ 3.1 × 10⁻⁵, and the shooting run agrees. Doubling the barrier width multiplies κL by 2 and T by roughly e^{−2κL} ≈ 3.5 × 10⁻³ — transmission drops to ~10⁻⁷. That exponential lever is why tunnelling is a sharp microscope (and a leak) in real devices.

#### Example 2: The first above-barrier resonance

k'L = π requires k' = π/2 for L = 2, i.e. E − V_0 = k'²/2 = π²/8 ≈ 1.234, so E ≈ 6.234. The scan refined to ΔE = 10⁻³ around the peak returns T = 1.000000 ± 10⁻⁶ at E = 6.2337 ± 10⁻³ — barrier transparency at a discrete energy, exactly as the sin(k'L) factor predicts.

#### Example 3: What the packet actually measures

Packet E_0 = 8, σ_0 = 4: measured P_T ≈ 0.81. Point value T(8) = 0.80; spectral average ⟨T⟩ ≈ 0.81, computed by weighting the stationary curve with the packet's Gaussian momentum profile. The measurement tracks the average, and the gap against T(E_0) shrinks as the packet is widened — confirming that the disagreement was finite-width physics all along.

## Common Misconceptions

- **"Above the barrier, everything transmits."** Classically yes; quantum-mechanically T oscillates below 1, with perfect transmission only at the resonances.
- **"Tunnelling probability is small because the particle 'loses energy' in the barrier."** Energy is conserved; the evanescent decay is a matching condition, not dissipation.
- **"T + R = 1 is automatic in a simulation."** Only if the numerics conserve flux; it is a test that can and does fail when the setup is wrong.
- **"The packet's transmitted fraction equals T at its central energy."** Only in the narrow-packet limit; finite width means spectral averaging.
- **"Resonances are numerical artifacts of the grid."** They survive refinement and match the analytic condition k'L = nπ; they are the physics.

## Connections

- **Lesson 2:** the same well/barrier geometry; bound-state quantisation and scattering resonances both come from matching conditions at the edges.
- **Lesson 3:** the packet machinery — Crank–Nicolson, masks, probability bookkeeping — is reused verbatim.
- **Advanced Quantum Mechanics theory:** the transfer-matrix derivation of the barrier formula; Ramsauer–Townsend scattering; Gamow's tunnelling model of α-decay.
- **Technology:** tunnel junctions, scanning tunnelling microscopy, and resonant-tunnelling diodes all run on the formulas validated here.

## Quick Check

1. State the scattering boundary conditions and how R and T follow from r and t when the wavenumbers match.
2. How does right-to-left shooting extract T and R, and what internal check comes free?
3. Write the barrier transmission formula below the barrier and identify the exponential factor.
4. At what energies is above-barrier transmission perfect?
5. Why does a wavepacket's transmitted fraction differ from T(E_0), and what is the correct comparison?

## Takeaway

Scattering turns boundary conditions into observables: shoot across the potential, read the amplitudes off the asymptotics, and let flux conservation audit every step. The stationary and time-dependent routes arrive at the same physics — exponential tunnelling, resonant transparency — from opposite directions, and their agreement, including the honest finite-width correction, is the template for every simulation that claims to describe a real device.
