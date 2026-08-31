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
lessonId: advanced-quantum-mechanics-lab-m1-l4
lessonName: Driven Two-Level Systems — Rabi Oscillations and Resonance
lessonNumber: 4
moduleNumber: 1
semesterNumber: 6
difficulty: intermediate
estimatedStudyMinutes: 50
releaseOrder: 4
prerequisites:
  - advanced-quantum-mechanics-lab-m1-l3
learningObjectives:
  - Integrate the full time-dependent Schrödinger equation for a sinusoidally driven two-level system and extract the excited-state population.
  - Verify the rotating-wave-approximation predictions: on-resonance Rabi flopping, the Lorentzian response envelope, and the π-pulse.
  - Identify the limits of the RWA by driving strongly and locating the Bloch–Siegert shift of the resonance.
concepts:
  - Time-dependent perturbation
  - Two-level system
  - Rabi oscillations
  - Rotating wave approximation
  - Resonance linewidth
  - Bloch–Siegert shift
tags:
  - physics
  - laboratory
  - computational-physics
  - quantum-mechanics
  - driven-dynamics
sourceType: authored-courseware
assessmentHints:
  - Drive H with V_12(t) = −γ cos(ωt); define Ω = γ/ħ and detuning Δ = ω_0 − ω.
  - RWA result: P_2(t) = Ω²/(Ω² + Δ²) · sin²(√(Ω² + Δ²) t/2); on resonance, full inversion at the π-pulse t = π/Ω.
  - Checks: norm conserved; on-resonance flops and the scan envelope match the RWA; strong drive reveals the Bloch–Siegert shift ~ Ω²/(4ω_0).
status: in-review
***

# Driven Two-Level Systems — Rabi Oscillations and Resonance

## Overview

Nothing in quantum mechanics is more used — in lasers, atomic clocks, NMR, and qubits — than a two-level system shaken by an oscillating field. The theory course treated it perturbatively, for weak drives and short times; the numerics let you drop both crutches. You will integrate the driven two-level Schrödinger equation exactly, then check it against the rotating-wave approximation (RWA): the on-resonance Rabi flopping, the Lorentzian response as you detune, and the π-pulse that inverts the population. Finally you will push the drive strong enough to see where the RWA breaks — the resonance drifts by the Bloch–Siegert amount, and your simulation measures it directly.

## Learning Path

1. **Set up the driven two-level Hamiltonian** and the parameter language (ω_0, γ, Ω, Δ).
2. **Integrate the full TDSE** for the probability amplitudes with a high-order ODE solver.
3. **On resonance:** verify Rabi flopping P_2(t) = sin²(Ωt/2) and the π-pulse.
4. **Frequency scan:** record max P_2 versus ω; fit the Lorentzian envelope and its width.
5. **Strong drive:** repeat the scan at large Ω; locate the Bloch–Siegert shift.
6. **Cross-check the perturbative limit:** short-time, weak-drive growth matches time-dependent perturbation theory.

## Core Explanation

### Theory: The driven two-level model

Take levels |1⟩, |2⟩ with E_2 − E_1 = ħω_0 and a dipole coupling to a sinusoidal field, so the Hamiltonian in the {|1⟩, |2⟩} basis is

H(t) = [[0, −γ cos(ωt)], [−γ cos(ωt), ħω_0]]

(ground-state energy set to zero). Writing ψ = c_1 e^{−iE_1t/ħ}|1⟩ + c_2 e^{−iE_2t/ħ}|2⟩ and keeping only the slowly rotating terms (the RWA — dropping the counter-rotating e^{±i(ω_0+ω)t} pieces) gives the standard result with Ω = γ/ħ and detuning Δ = ω_0 − ω:

P_2(t) = Ω²/(Ω² + Δ²) · sin²(√(Ω² + Δ²) t/2), starting from |1⟩.

Its consequences, all testable numerically: on resonance P_2 flops as sin²(Ωt/2) with full inversion at the π-pulse t_π = π/Ω; a frequency scan of max P_2 has a Lorentzian envelope of half-width Ω (resolving Ω²/(Ω² + Δ²) = 1/2 gives Δ = ±Ω, so full width 2Ω); and at short times P_2 ≈ (Ωt/2)², the quadratic growth that perturbation theory (and Fermi's golden rule's onset) predicts.

### Theory: Where the RWA fails

The dropped counter-rotating terms matter when Ω is no longer negligible against ω_0. Their leading effect is to shift the true resonance below ω_0 by the Bloch–Siegert amount Δω_BS ≈ Ω²/(4ω_0). The numerical simulation carries those terms by construction, so a scan at strong drive should show the peak displaced by exactly this amount — a clean, quantitative test of an approximation's boundary.

### Numerical Setup (Apparatus)

- Python: scipy.integrate.solve_ivp with DOP853 and rtol = 10⁻¹⁰ (four real ODEs for Re/Im of c_1, c_2).
- Units ħ = 1; ω_0 = 10; weak-drive case γ = 1 (Ω = 1, so Ω/ω_0 = 0.1).
- On-resonance run: ω = 10, t ∈ [0, 4π] (two full Rabi cycles at Ω = 1); save P_2(t) and the norm.
- Scan: ω from 8 to 12 in steps of 0.02, integrating each to t = 4π and recording max P_2.
- Strong-drive case: γ = 4 (Ω = 4, Ω/ω_0 = 0.4), same scan.
- Record all parameters alongside outputs (reproducibility).

### Procedure

1. **Implement the amplitude equations** from i ċ = H(t)c in the lab frame: i ċ_1 = −γ cos(ωt) c_2 and i ċ_2 = ω_0 c_2 − γ cos(ωt) c_1 (ħ = 1); verify norm |c_1|² + |c_2|² = 1 at every saved frame.
2. **On resonance (γ = 1, ω = 10):** integrate and plot P_2(t); overlay sin²(t/2).
3. **Measure the π-pulse time** as the first maximum of P_2; compare with π/Ω = π.
4. **Weak-drive scan:** for each ω record max_t P_2; overlay the envelope 1/(1 + (Δ/Ω)²) with Δ = 10 − ω.
5. **Extract the width** at half maximum of the scan curve; compare with 2Ω = 2.
6. **Strong-drive scan (γ = 4):** locate the peak; compare its position with ω_0 − Ω²/(4ω_0) = 10 − 0.4.
7. **Perturbative check:** at γ = 0.1, fit early-time P_2(t) to (Ωt/2)² and confirm the quadratic onset.

### Analysis

#### On-resonance flopping

For γ = 1 the simulated P_2(t) rides sin²(t/2) to better than 10⁻³ over two full cycles — inversion reaches 0.9999 at t = π, the π-pulse. The agreement is this good because Ω/ω_0 = 0.1 keeps the counter-rotating terms a percent-level correction. Norm drift stays below 10⁻⁹ with the stated tolerances; any visible drift means the tolerances or the equations are wrong, not the physics.

#### The resonance scan

max P_2(ω) traces the Lorentzian envelope: peak 1.000 at ω = 10 (weak drive), half-maximum at ω ≈ 10 ± 1 — the measured full width 2.0 matches 2Ω. The scan is also where numerics and analytic formulas part company honestly: a scan truncated at short T cannot reach the envelope's value at large detuning (the flops are slow and shallow there), so the tails of a finite-time scan sit below the curve. Either integrate longer at large |Δ| or report the truncation.

#### Bloch–Siegert shift

At γ = 4 the peak moves: the scan's maximum lands near ω ≈ 9.6, displaced from 10 by ≈ 0.4 — matching Ω²/(4ω_0) = 16/40 = 0.4 to the resolution of the scan step. The RWA envelope with a shifted centre fits the strong-drive scan well; the unshifted one does not. This is the approximation boundary made visible: Ω/ω_0 ≈ 0.4 is plenty large for the dropped terms to bite.

### Sources of Error

- **Solver tolerance:** the oscillatory drive at frequency ω_0 + ω ≈ 20 needs resolution; loosen rtol and the flopping amplitude itself becomes unreliable. Tighten until max P_2 stops moving.
- **Scan truncation:** max P_2 at detuning Δ needs a run of duration ≳ π/√(Ω² + Δ²); too-short runs underestimate the tails and fake a narrower line.
- **Frequency resolution:** a 0.02 grid limits the Bloch–Siegert measurement to ±0.01; refine locally around the peak before quoting digits.
- **Rotating-frame bookkeeping:** extracting populations from the *lab-frame* amplitudes without removing the e^{−iE_nt/ħ} phases gives fast oscillations mistaken for physics; define once which frame your c_n live in.
- **Unit slips:** Ω = γ/ħ only if γ has energy units; a factor of 2 in the drive convention (cos ωt vs e^{−iωt} amplitudes) silently doubles the Rabi frequency.

## Key Ideas

- The driven two-level system is the workhorse of quantum control; its exact dynamics are a four-real-variable ODE.
- RWA prediction: P_2(t) = Ω²/(Ω² + Δ²) sin²(√(Ω² + Δ²) t/2); π-pulse at t = π/Ω; scan half-width Ω.
- Numerics validate the approximation where it should hold (weak drive) and expose its boundary where it should not (Bloch–Siegert shift Ω²/(4ω_0)).
- Short-time, weak-drive growth P_2 ≈ (Ωt/2)² is the perturbative limit the simulation must also reproduce.
- Norm conservation and frame bookkeeping are the two silent failure modes of amplitude integration.

## Worked Examples

#### Example 1: The π-pulse

With γ = 1, ħ = 1: Ω = 1, t_π = π ≈ 3.142. The simulation's first maximum at t = 3.142 ± 10⁻³ with P_2 = 0.9999 confirms both the Rabi frequency convention and the integration accuracy in one plot.

#### Example 2: Half-height width from the envelope

The envelope 1/(1 + (Δ/Ω)²) equals 1/2 when Δ² = Ω². For Ω = 1: half-maxima at ω = 9 and 11, full width 2 — the scan data agree to within one frequency bin (0.02). Doubling γ to 2 doubles the width to 4: power broadening, straight from the formula.

#### Example 3: Perturbative onset

At γ = 0.1 (Ω = 0.1), for t ≲ 1: P_2(t) fits (0.05 t)² to within 1% — the quadratic onset. This is the regime where the theory course's first-order perturbation result applies; the simulation shows both its correctness and its eventual failure as sin² behaviour takes over.

## Common Misconceptions

- **"Rabi oscillations are a perturbative effect."** They are the *non-perturbative* resummation; first-order perturbation theory gives only the quadratic onset and fails by t ~ 1/Ω.
- **"The resonance sits exactly at ω_0."** Only in the RWA; the counter-rotating terms shift it by Ω²/(4ω_0), measurable at strong drive.
- **"Stronger drive just speeds things up."** It also broadens the line (half-width Ω) and moves its centre — control has a price in selectivity.
- **"Any ODE solver will do."** The drive oscillates at ~ 2ω_0; a solver that under-resolves it corrupts the envelope. Tolerance studies are mandatory.
- **"Population transfer needs exact resonance."** Off-resonant driving still transfers, up to the ceiling Ω²/(Ω² + Δ²); detuning trades speed for fidelity, not success for failure.

## Connections

- **Advanced Quantum Mechanics theory:** time-dependent perturbation theory and Fermi's golden rule describe exactly the weak-drive, short-time corner validated here.
- **Lesson 3:** this lesson replaced the grid TDSE with a two-dimensional amplitude ODE — the discretisation is in the basis, not space; the diagnostic discipline (norm, analytic comparison) carries over unchanged.
- **Lesson 6 (capstone):** driven population transfer in a multi-level or spatially extended system is one of the approved project directions.
- **Technology:** the π-pulse is the single-qubit gate; the linewidth is the clock's selectivity; NMR, laser cooling, and qubit control all run on this physics.

## Quick Check

1. Write the driven two-level Hamiltonian and define Ω and Δ.
2. What does the RWA predict for P_2(t) on resonance, and when is the first full inversion?
3. What is the full width at half maximum of the frequency-scan curve, in terms of Ω?
4. In which direction, and by how much, does strong drive shift the resonance?
5. What short-time behaviour must any correct simulation reproduce in the weak-drive limit?

## Takeaway

A two-level system under a sinusoidal drive is small enough to simulate exactly and rich enough to teach the whole methodology: solve the full equations, verify the approximation where it claims to hold, and then push past that claim until the deviation — here, the Bloch–Siegert shift — appears at the predicted size. That pattern, exact numerics auditing analytic approximation, is the course's recurring experiment.
