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
lessonId: advanced-quantum-mechanics-lab-m1-l3
lessonName: Wavepacket Propagation — Time Evolution with Crank–Nicolson
lessonNumber: 3
moduleNumber: 1
semesterNumber: 6
difficulty: intermediate
estimatedStudyMinutes: 50
releaseOrder: 3
prerequisites:
  - advanced-quantum-mechanics-lab-m1-l2
learningObjectives:
  - Implement the Crank–Nicolson scheme for the time-dependent Schrödinger equation and verify that it conserves norm to machine precision.
  - Propagate a free Gaussian wavepacket and check group velocity and dispersive spreading against the analytic formulas.
  - Diagnose and control grid effects: domain size, grid dispersion, and boundary reflections.
concepts:
  - Time-dependent Schrödinger equation
  - Crank–Nicolson scheme
  - Unitary time evolution
  - Gaussian wavepacket
  - Dispersion and spreading
  - Absorbing boundaries
tags:
  - physics
  - laboratory
  - computational-physics
  - quantum-mechanics
  - time-evolution
sourceType: authored-courseware
assessmentHints:
  - Crank–Nicolson: (1 + iHΔt/2ħ) ψ^{n+1} = (1 − iHΔt/2ħ) ψ^n; one tridiagonal solve per step.
  - Free packet: ⟨x⟩(t) = x_0 + (ħk_0/m) t; σ²(t) = σ₀² [1 + (ħt/(2mσ₀²))²].
  - Checks: norm drift < 10⁻⁸ over the full run; ⟨x⟩ and σ(t) match the analytic forms.
status: in-review
***

# Wavepacket Propagation — Time Evolution with Crank–Nicolson

## Overview

The eigenvalue lessons answered "what energies are allowed?"; this one answers "what happens next?". The time-dependent Schrödinger equation (TDSE) is an initial-value problem, and its numerical solution is a statement about trust: the scheme you choose must preserve what the physics guarantees — total probability stays one, always. Crank–Nicolson does exactly that: it is implicit, unconditionally stable, and unitary to within the linear-algebra tolerance of the solve. You will propagate a free Gaussian packet, whose exact analytic motion is known, and hold the simulation to three checks: norm conservation, correct group velocity, correct dispersive spreading. A simulation that passes all three is a calibrated instrument; everything later in the course builds on it.

## Learning Path

1. **Review the TDSE** and why naive explicit schemes fail (stability limit, norm drift).
2. **Derive the Crank–Nicolson step** and its tridiagonal matrix form.
3. **Set up the Gaussian packet:** normalisation, carrier wavenumber k_0, width σ_0.
4. **Propagate** the free packet; record ψ(x, t) at saved frames.
5. **Validate:** norm drift, ⟨x⟩(t) vs x_0 + v_g t, σ(t) vs the spreading formula.
6. **Diagnose failure modes:** wall reflections, grid dispersion, time-step error.

## Core Explanation

### Theory: From TDSE to a linear system

The TDSE, iħ ∂ψ/∂t = H ψ with H = −(ħ²/2m)∂²/∂x² + V(x), is formally solved by ψ(t) = e^{−iHt/ħ} ψ(0) — a unitary rotation that preserves ⟨ψ|ψ⟩. Discretising on the same grid as Lesson 1 (spacing h, second-order central difference for ∂²/∂x²) turns H into the familiar tridiagonal matrix. The explicit Euler step ψ^{n+1} = (1 − iHΔt/ħ)ψ^n is useless: the amplification factor 1 − iEΔt/ħ has modulus √(1 + (EΔt/ħ)²) > 1 for every eigenmode, so the scheme is unconditionally unstable — every mode grows, the fast ones catastrophically. Tiny Δt only delays the blow-up and destroys norm along the way.

Crank–Nicolson replaces the exponential by a symmetric (Padé) approximation:

(1 + iHΔt/(2ħ)) ψ^{n+1} = (1 − iHΔt/(2ħ)) ψ^n.

Each step is one tridiagonal complex linear solve (O(N) with the Thomas algorithm). The approximation is unitary exactly — the eigenvalues of the update matrix have modulus one — so norm drift comes only from the solver tolerance, not the scheme. The local time error is O(Δt³), global O(Δt²).

### Theory: The analytic target

A free Gaussian packet ψ(x,0) ∝ exp(−(x − x_0)²/(4σ₀²)) e^{ik_0 x} evolves exactly into another Gaussian:

- Centre: ⟨x⟩(t) = x_0 + v_g t, with group velocity v_g = ħk_0/m.
- Width: σ²(t) = σ₀² [1 + (ħt/(2mσ₀²))²] — spreading from the superposition of different-k components travelling at different phase velocities.
- Momentum space is untouched: free evolution multiplies each k-component by a phase.

These three facts are your calibration curves. In units ħ = m = 1: v_g = k_0, and σ(t) = σ₀√(1 + t²/(4σ₀⁴)).

### Numerical Setup (Apparatus)

- Python with numpy/scipy: scipy.linalg.solve_banded or a hand-rolled Thomas algorithm for the tridiagonal complex system.
- Units ħ = m = 1. Grid: x ∈ [−40, 40], h = 0.1 (N = 800 points), Dirichlet ends (ψ = 0 at the walls).
- Packet: x_0 = −15, σ_0 = 1, k_0 = 2 → v_g = 2, initial kinetic energy E = k_0²/2 = 2.
- Time step: Δt = 0.02 (check Δt = 0.01 for convergence); save frames every 50 steps; run to t = 20.
- Record all parameters alongside outputs (reproducibility).

### Procedure

1. **Build the grid Hamiltonian** (tridiagonal kinetic term; V = 0 for free propagation) and verify against Lesson 1's code.
2. **Initialise the packet** and normalise numerically (∫|ψ|² dx = 1 via the trapezoid rule); record ⟨x⟩, σ, ⟨k⟩ from ψ̃(k).
3. **Implement the Crank–Nicolson step**; run 10 steps and check |⟨ψ|ψ⟩ − 1| after each.
4. **Full run to t = 20.** Save frames; compute ⟨x⟩(t) and σ(t) at each saved frame.
5. **Overlay the analytic curves** x_0 + v_g t and σ₀√(1 + t²/(4σ₀⁴)); quantify the deviation.
6. **Boundary check:** plot |ψ| near the right wall at late times; estimate the reflected probability.
7. **Convergence:** rerun with Δt/2 and h/2; confirm observables are unchanged to the claimed digits.

### Analysis

#### Norm conservation

For a well-posed Crank–Nicolson run the norm drift is at the level of the linear solver: |Δ⟨ψ|ψ⟩| < 10⁻¹⁰ per step with a direct banded solve, accumulating to < 10⁻⁸ over 1000 steps. If you see drift at 10⁻⁴ or worse, the culprit is almost never the scheme — it is a bug in the tridiagonal assembly (off-by-one in the diagonal, wrong sign on the kinetic term) or an iterative solve stopped too early.

#### Motion and spreading

With x_0 = −15, k_0 = 2: ⟨x⟩(t) = −15 + 2t, so the centre reaches +15 at t = 15. The width doubles (σ = 2σ₀) at t = 2√3 σ₀² ≈ 3.46 in these units — spreading is visible early and fast for narrow packets. Agreement of the measured σ(t) with the analytic curve to a fraction of a percent, across the full run, is the strongest single check: it is sensitive to both the kinetic prefactor and the time discretisation.

#### Boundary reflections

The packet's leading edge arrives at the right wall around t ≈ (40 − 15 − 5σ₀)/2 ≈ 10. Dirichlet walls reflect like a hard mirror: a free-packet run to t = 20 shows several percent of the probability reflected back. Two controls: (i) stop the run before the packet arrives; (ii) mask the edges each step — multiply ψ by a smooth function that tapers to zero over the outer ~10% of the grid (a cosine or tanh mask). Masking is not unitary and costs a small, measurable amount of norm each step — log it; for scattering work in Lesson 5, a complex absorbing potential (−iW(x) added to H near the walls) absorbs outgoing flux more cleanly.

### Sources of Error

- **Grid dispersion:** the discrete kinetic energy E(k) = (2/h²)(1 − cos kh) deviates from k²/2 when kh is not small; with k_0h = 0.2 the error is ~ 0.7% in E. Halve h and the spreading curve should move by less than your claimed tolerance.
- **Time-step error:** O(Δt²) global; compare Δt and Δt/2 runs on ⟨x⟩ and σ at the final time.
- **Wall reflections:** quantify as P_refl = 1 − P_in-domain at the end of the physical run; either report it or mask it away — never ignore it.
- **Normalisation drift in diagnostics:** computing ⟨x⟩, σ with the same quadrature rule every frame; a changing quadrature mimics physics.
- **Initial-state slip:** the discretised Gaussian must be normalised *numerically*, not by the continuum formula; the difference is O(h²) but systematic.

## Key Ideas

- Crank–Nicolson is implicit and unitary: one tridiagonal solve per step, norm conserved to solver tolerance, no h² stability limit.
- The free Gaussian packet is the calibration standard: ⟨x⟩ moves at v_g = ħk_0/m; σ(t) spreads as σ₀√(1 + (ħt/2mσ₀²)²).
- Norm conservation is a diagnostic, not a formality: drift beyond solver tolerance means an assembly or solver bug.
- Grid dispersion (E(k) ≠ k²/2 near kh ~ 1) and wall reflections are the two physical-looking artifacts to rule out before trusting any dynamics.
- Convergence practice: halve h and Δt and demand unchanged observables to the digits you claim.

## Worked Examples

#### Example 1: Predicting the motion

For x_0 = −15, k_0 = 2, σ_0 = 1 (ħ = m = 1): v_g = 2, so ⟨x⟩(10) = −15 + 20 = +5. The width at t = 10: σ = √(1 + (10/2)²) = √26 ≈ 5.10 — the packet has spread to five times its initial width, its peak amplitude down by the same factor. A simulation that shows ⟨x⟩(10) ≈ 5.0 ± 0.1 and σ(10) ≈ 5.1 ± 0.05 passes the dynamics checks.

#### Example 2: Time-step budget

At t = 10 the measured width is σ = 5.0984 (Δt = 0.02), 5.0987 (Δt = 0.01), 5.0987 (Δt = 0.005). The Δt² error has saturated by Δt = 0.01: honest digits are σ(10) = 5.099 ± 0.001, and Δt = 0.01 is the economical choice.

#### Example 3: Masking cost

A tanh mask over the outer 8 grid points removes the reflected component below the 10⁻⁴ level but costs ΔP ≈ 2 × 10⁻⁴ in norm per pass of the packet tail. Log both numbers: the report says "reflections suppressed below 10⁻⁴ at a norm cost of 2 × 10⁻⁴", which is honest; claiming perfect unitarity with a mask on is not.

## Common Misconceptions

- **"Small enough Δt makes explicit schemes fine."** They still violate unitarity at first order; norm drift accumulates linearly in time. Crank–Nicolson (or split-step) is the standard for a reason.
- **"Norm conservation proves the simulation is right."** It proves the scheme is unitary; a wrong kinetic prefactor conserves norm perfectly while evolving the wrong physics. That is why ⟨x⟩ and σ(t) must also match.
- **"The packet stops spreading once it's free."** Free packets spread forever; σ(t) grows linearly at late time.
- **"Boundary reflections are a corner case."** Any packet with nonzero momentum eventually reaches the wall; every finite-grid dynamics run needs a boundary strategy.
- **"A finer grid is always better."** Finer h forces smaller Δt for fixed cost and exposes the same physics; convergence means *unchanged answers*, not maximal resolution.

## Connections

- **Lesson 1:** the same tridiagonal Hamiltonian; here it generates dynamics instead of yielding eigenvalues.
- **Lesson 2:** bound states were stationary; packets are their superpositions in motion — σ(t) follows from the same dispersion relation.
- **Lesson 5:** scattering simulations are packet propagation with a barrier in the middle and absorbing boundaries at the edges.
- **Advanced Quantum Mechanics theory:** Ehrenfest's theorem predicts ⟨x⟩(t); the spreading formula comes from Gaussian integral mechanics.

## Quick Check

1. Write the Crank–Nicolson update as a linear system and state why it conserves norm.
2. What is the group velocity of the packet, and where is its centre at t = 10 for x_0 = −15, k_0 = 2?
3. When does the packet width double?
4. How do you detect and quantify wall reflections?
5. What does halving h test, and what does halving Δt test?

## Takeaway

Diagnostics before drama: a time-evolution code earns trust through norm conservation, then through agreement with the exactly solvable free packet — its motion, its spreading, its momentum content. Only a calibrated propagator deserves to meet a potential. That discipline, established here on the simplest possible dynamics, is what makes the driven and scattering simulations of the next lessons meaningful rather than decorative.
