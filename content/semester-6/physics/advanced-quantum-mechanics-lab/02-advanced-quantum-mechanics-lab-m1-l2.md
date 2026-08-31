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
lessonId: advanced-quantum-mechanics-lab-m1-l2
lessonName: Bound States of the Finite Well — the Shooting Method
lessonNumber: 2
moduleNumber: 1
semesterNumber: 6
difficulty: intermediate
estimatedStudyMinutes: 50
releaseOrder: 2
prerequisites:
  - advanced-quantum-mechanics-lab-m1-l1
learningObjectives:
  - Implement the shooting method for the one-dimensional Schrödinger equation to find bound-state energies of a finite square well.
  - Apply the correct asymptotic matching condition (exponential decay) and normalise the resulting wavefunctions.
  - Compare numerical bound-state energies with the transcendental quantisation conditions and study how the number of bound states depends on well depth.
concepts:
  - Shooting method
  - Bound-state boundary conditions
  - Finite square well
  - Transcendental quantisation conditions
  - Wavefunction normalisation
  - Root finding
tags:
  - physics
  - laboratory
  - computational-physics
  - quantum-mechanics
  - shooting-method
sourceType: authored-courseware
assessmentHints:
  - Inside the well: oscillatory (k = √(2m(E−V))/ħ); outside: exponential decay (κ = √(2m(V−E))/ħ).
  - Even states: k tan(ka) = κ; odd states: k cot(ka) = −κ (for well −V_0 on |x| < a).
  - Number of bound states grows with well strength z_0 = a√(2mV_0)/ħ: one new level each time z_0 crosses a multiple of π/2.
status: in-review
***

# Bound States of the Finite Well — the Shooting Method

## Overview

The infinite well was kind: hard walls gave simple boundary conditions and a spectrum in closed form. The finite well is the first honest problem — wavefunctions leak into classically forbidden regions, energies are set by transcendental equations with no closed-form roots, and the number of bound states itself depends on the well's depth. This lesson solves it two ways that cross-check each other: the shooting method (integrate the equation outward for a trial energy and reject energies that blow up) and the analytic quantisation conditions, whose roots you find numerically. Agreement between the two, to the digits you claim, is the validation.

## Learning Path

1. **Set up the finite well problem:** potential, energy range for bound states (−V_0 < E < 0), even/odd parity.
2. **Review the analytic quantisation conditions** (k tan(ka) = κ for even, −k cot(ka) = κ for odd) and their graphical structure.
3. **Implement the shooting method:** propagate ψ outward from the origin with a trial E; define the mismatch function.
4. **Find the roots** of the mismatch with a bracketing root-finder (bisection/Brent).
5. **Validate** against the transcendental equations solved independently.
6. **Explore:** count bound states as V_0 varies; plot the penetration depth versus binding energy.

## Core Explanation

### Theory: The finite square well

Take V(x) = −V_0 for |x| < a and 0 outside; bound states have −V_0 < E < 0. Inside, the solution oscillates with wavenumber k = √(2m(E + V_0))/ħ; outside it decays with κ = √(2m(−E))/ħ. Continuity of ψ and ψ' at x = a yields the quantisation conditions (in terms of ξ = ka, η = κa, with ξ² + η² = z_0² = 2mV_0a²/ħ²):

- Even parity: η = ξ tan ξ
- Odd parity: η = −ξ cot ξ

These have no algebraic solutions — but their structure is transparent: every time z_0 crosses nπ/2, a new bound state appears. There is always at least one (the ground state, even) in 1D, however shallow the well.

### Theory: The shooting method

Integrate the Schrödinger equation as two coupled first-order equations:

ψ' = φ, φ' = (2m/ħ²)(V(x) − E) ψ

starting from symmetry at the origin: even states ψ(0) = 1, φ(0) = 0; odd states ψ(0) = 0, φ(0) = 1. For a trial E, propagate to a matching point x_m beyond the well. A bound state must decay: any admixture of the growing exponential e^{+κx} eventually dominates. Define the mismatch

F(E) = ψ'(x_m)/ψ(x_m) + κ (bound state ⇒ F = 0, since ψ'/ψ → −κ for a pure decay)

F(E) flips sign as E passes each eigenvalue, so a bracketing root-finder finds the levels one at a time. Two practical notes: (i) integrate in double precision and stop the propagation where |ψ| is still O(1) — the growing exponential saturates floating point quickly for deep trials; (ii) scan E first on a coarse mesh to locate sign changes of F, then refine with Brent's method.

### Numerical Setup (Apparatus)

- Python: scipy.integrate.solve_ivp (RK45 or DOP853, tight tolerances rtol = 10⁻¹⁰) and scipy.optimize.brentq.
- Units ħ = m = 1; well a = 1, V_0 starting at 20 (several bound states).
- Matching point x_m = 10 for the deep states; push x_m out until κ(x_m − a) ≳ 5 for the shallowest state expected (near threshold κ ≈ 0.23, so x_m ≈ 25).
- Record all parameters alongside outputs (reproducibility).

### Procedure

1. **Analytic roots.** For V_0 = 20, a = 1: z_0 = a√(2mV_0)/ħ = √40 ≈ 6.32. New levels appear each time z_0 crosses a multiple of π/2; since 2π ≈ 6.28 < 6.32, expect five bound states — three even, two odd, with the fifth (even) sitting just below threshold. Solve η = ξ tan ξ and η = −ξ cot ξ under ξ² + η² = z_0² by root finding to get the numbers.
2. **Implement shooting.** Propagate even states from x = 0; compute F(E) on a scan E ∈ (−V_0 + ε, −ε) with ΔE = 0.1.
3. **Refine each root** with brentq on the bracketing intervals; collect even energies.
4. **Repeat for odd states** (ψ(0) = 0, φ(0) = 1).
5. **Normalise** each found state: integrate |ψ|² over the full domain (extend into the classically forbidden region analytically or numerically to where ψ < 10⁻⁸), rescale.
6. **Compare tables:** shooting energies vs transcendental roots; record the digit-level agreement.
7. **Depth study:** repeat for V_0 = 2, 5, 10, 20, 50; tabulate the number of bound states and verify the π/2 spacing rule.

### Analysis

#### Energy comparison (V_0 = 20, a = 1)

| Level | Parity | Transcendental root | Shooting result | ΔE |
|-------|--------|---------------------|-----------------|-----|
| 1 | even | −19.082 | −19.082 | < 10⁻⁵ |
| 2 | odd | −16.354 | −16.354 | < 10⁻⁵ |
| 3 | even | −11.908 | −11.908 | < 10⁻⁴ |
| 4 | odd | −5.998 | −5.998 | < 10⁻⁴ |
| 5 | even | −0.027 | −0.027 | < 10⁻³ (dense scan near E = 0 needed) |

(These digits are for V_0 = 20, a = 1 in units ħ = m = 1; your independent roots should reproduce them to the listed ΔE.) Levels alternate even/odd from the bottom, approaching E = 0 as the well fills — the fifth state sits exponentially close to threshold.

#### Bound-state counting

z_0 = a√(2mV_0)/ħ measured against the π/2 ladder: V_0 = 2 (z_0 ≈ 2.0): 2 states; V_0 = 5 (z_0 ≈ 3.16): 3; V_0 = 20 (z_0 ≈ 6.32): 5; V_0 = 50 (z_0 = 10): 7. The count increments whenever z_0 crosses a multiple of π/2 — data and theory agree within one state at the boundary cases, where the shallowest level sits exponentially close to E = 0.

#### Penetration depth

The decay length outside the well is 1/κ = ħ/√(2m(−E)). For level 1 (E ≈ −19.1): 1/κ ≈ 0.16; for level 4 (E ≈ −6.0): 1/κ ≈ 0.29 — deeply bound states hug the well. The near-threshold level 5 (E ≈ −0.027) has 1/κ ≈ 4.3, more than four times the half-width; integrating |ψ|² shows roughly 80% of its probability lives outside the well. The numerical wavefunctions show both regimes, and the normalisation integral quantifies the growing forbidden-region share.

### Sources of Error

- **Integration tolerance:** loose tolerances shift F(E) and bias roots; tighten until energies stop moving (rtol 10⁻⁸ → 10⁻¹⁰ → unchanged digits).
- **Matching point too close:** x_m inside the decay length mixes in transients; push x_m out until levels are stable.
- **Bracketing misses:** coarse scans can skip shallow near-threshold levels; scan densely near E = 0.
- **Overflow:** deep trials blow up exponentially; rescale during propagation or integrate the log-derivative ψ'/ψ instead of ψ itself for robustness.
- **Unit errors:** k and κ differ by which energy offset (E + V_0 vs −E) they use; the classic source of factor errors.

## Key Ideas

- Finite-well bound states satisfy transcendental conditions (k tan ka = κ even; −k cot ka = κ odd) with no closed-form roots.
- Shooting converts the boundary-value problem into root finding on the mismatch F(E) = ψ'/ψ + κ at a distant matching point.
- Levels alternate even/odd; a new bound state appears each time z_0 = a√(2mV_0)/ħ crosses a multiple of π/2.
- Penetration depth 1/κ grows as binding weakens; near-threshold states extend far beyond the well.
- Validation means two independent routes (shooting vs analytic roots) agreeing to the claimed digits.
- Numerical robustness tricks: log-derivative propagation, tight tolerances, dense scans near threshold.

## Worked Examples

#### Example 1: The single level of a shallow well

For z_0 = 1.2 (below π/2 ≈ 1.57) there is exactly one bound state, even. Solving ξ tan ξ = η with ξ² + η² = 1.44 gives ξ ≈ 0.819, η ≈ 0.877, hence E = −η²/2 ≈ −0.384 in these units — one level, binding over half the well depth (V_0 = z_0²/2 = 0.72). Shooting reproduces it, but only if the energy scan is fine near E = 0 (ΔE = 10⁻³): the mismatch varies slowly there and a coarse scan walks right past the root.

#### Example 2: Matching-point convergence

With V_0 = 20, take level 4, κ ≈ 3.46. At x_m = 4, κ(x_m − a) ≈ 10.4 — the boundary-condition tail scales as e^{−2κ(x_m − a)} ≈ 10⁻⁹, so F(E) is clean. Moving x_m from 4 to 8 changes the found energy by < 10⁻⁸: convergence achieved. The near-threshold level 5 (κ ≈ 0.23) is another matter — the same criterion demands x_m ≈ 25, which is why the matching point must be chosen state by state.

#### Example 3: Tolerance budget

At rtol = 10⁻⁶ the ground energy reads −19.0819; at 10⁻¹⁰, −19.08213; at 10⁻¹², −19.08213. The last stable digits are the honest ones; report E_1 = −19.0821 ± 10⁻⁴.

## Common Misconceptions

- **"The shooting method guesses randomly."** It propagates deterministically for each E and brackets roots systematically; only the search strategy is iterative.
- **"Bound-state energies can sit anywhere below zero."** Only the quantised roots satisfy decay at infinity; between them the solution blows up.
- **"Deep wells have infinitely many bound states in 1D."** Finite depth means finite z_0 and a finite count; only V_0 → ∞ gives infinitely many.
- **"The wavefunction is zero outside the well."** That is the infinite-well limit; finite wells carry exponential tails with measurable probability.
- **"Normalization is cosmetic."** Comparisons (transition rates, expectation values) are meaningless without correctly normalised states.

## Connections

- **Previous lesson:** Matrix diagonalisation solved the same class of problem; here the boundary-value viewpoint takes over, and results must agree.
- **Advanced Quantum Mechanics theory:** Parity arguments, matching conditions, and the graphical solution of transcendental equations come from the theory course.
- **Next lesson:** Time dependence enters — wavepacket propagation builds on the same discretisation.
- **Lesson 5 (scattering):** The same well, at positive energies, transmits and reflects — bound and scattering states are two faces of one potential.

## Quick Check

1. What are the quantisation conditions for even and odd finite-well bound states?
2. Define the shooting mismatch function and the condition that makes it vanish.
3. How does the number of bound states depend on well depth?
4. Why must the scan be dense near E = 0?
5. What numerical device prevents exponential overflow in shooting?

## Takeaway

The finite well teaches the central lesson of numerical quantum mechanics: quantisation emerges from a boundary condition, and eigenvalues are the energies at which the asymptotics behave. Shooting finds them as roots; the transcendental equations confirm them; and the agreement, digit by digit, is the standard every simulation in this course must meet.
