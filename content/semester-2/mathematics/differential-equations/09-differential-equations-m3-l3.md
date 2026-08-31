***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-2
semesterName: Semester 2
subjectId: mathematics
subjectName: Mathematics
courseId: differential-equations
courseName: Differential Equations
moduleId: differential-equations-module-3
moduleName: Systems and Applications
lessonId: differential-equations-m3-l3
lessonName: Modelling with ODEs — RC, RL and Population
lessonNumber: 9
moduleNumber: 3
semesterNumber: 2
difficulty: advanced
estimatedStudyMinutes: 55
releaseOrder: 9
prerequisites:
  - differential-equations-m1-l2
  - differential-equations-m2-l2
learningObjectives:
  - Translate a physical or biological scenario into an ODE.
  - Identify the order, linearity, and key parameters.
  - Solve the ODE and interpret the result physically.
  - Recognise the limitations of simple ODE models.
concepts:
  - Mathematical modelling
  - RC circuit model
  - RL circuit model
  - Population dynamics
  - Compartmental models
  - Stiff equations
tags:
  - mathematics
  - differential-equations
  - modelling
sourceType: authored-courseware
assessmentHints:
  - problem-solving
  - derivation
  - conceptual
***

# Modelling with ODEs — RC, RL and Population

## Overview
Modelling is the art of translating a real situation into a differential equation. This lesson walks through several canonical models — the RC and RL circuits, the population growth and predator–prey systems, the spread of an epidemic, and the cooling of a body — showing how the equation arises from physical principles and how to interpret the solution. Modelling is where the abstract methods of this course meet the messy reality of the world.

## Learning Path
- What you should already know: first- and second-order linear ODEs, basic physics (charge, current, force, heat), biological intuition.
- What this lesson adds: a working method for turning a scenario into an ODE and back.
- What it unlocks: more complex models (PDEs for spatial effects, systems of ODEs for multi-species dynamics), and the habit of testing models against data.

## Core Explanation
**The modelling cycle.**
1. Identify the variables and parameters.
2. Write down conservation laws or constitutive relations.
3. Approximate the system as lumped (no spatial variation) and linear if possible.
4. Solve the resulting ODE.
5. Compare with experiment.
6. Refine.

**RC circuit.** Resistor $R$ and capacitor $C$ in series with a voltage source $V_s$. KVL: $V_s = I R + V_C$. With $I = C dV_C/dt$, the ODE is

$$RC \frac{dV_C}{dt} + V_C = V_s.$$

This is a first-order linear ODE. Solution with $V_C(0) = 0$: $V_C(t) = V_s (1 - e^{-t/RC})$. Time constant $\tau = RC$ governs the charging rate. Energy supplied is $V_s Q = V_s^2 C$; half is stored in the capacitor, half dissipated.

**RL circuit.** Resistor and inductor in series. The current $I$ satisfies $L dI/dt + IR = V_s$. Solution: $I(t) = (V_s/R) (1 - e^{-Rt/L})$. Time constant $\tau = L/R$. The current rises smoothly to the steady-state value $V_s/R$.

**LC circuit.** $L dI/dt + Q/C = 0$ with $I = dQ/dt$: $L \ddot{Q} + Q/C = 0$. This is the *electrical* harmonic oscillator with $\omega_0 = 1/\sqrt{LC}$. Solution: $Q(t) = Q_0 \cos(\omega_0 t + \phi)$. Energy oscillates between the capacitor's electric field and the inductor's magnetic field.

**RLC circuit.** $L \ddot{Q} + R \dot{Q} + Q/C = V_s$. This is the damped-driven harmonic oscillator of *Differential Equations* Module 2, with the same three cases (underdamped, critical, overdamped) and the same forced-resonance behaviour.

**Newtonian cooling.** $dT/dt = -k (T - T_s)$. Solution: $T(t) = T_s + (T_0 - T_s) e^{-k t}$. Time constant $1/k$.

**Population growth.** Malthus: $dP/dt = r P \Rightarrow P(t) = P_0 e^{r t}$. Logistic: $dP/dt = r P (1 - P/K) \Rightarrow P(t) = K/(1 + A e^{-r t})$. The logistic equation captures a finite carrying capacity $K$; the solution is an S-curve approaching $K$.

**Predator–prey (Lotka–Volterra).** $\dot{x} = a x - b x y$ (prey grows without predator, is eaten at rate $bxy$); $\dot{y} = -c y + d x y$ (predator dies without prey, grows at rate $dxy$). This is a system of two first-order ODEs. The phase plane $(x, y)$ has closed orbits around a fixed point — the populations oscillate.

**Epidemic (SIR).** $dS/dt = -\beta S I$, $dI/dt = \beta S I - \gamma I$, $dR/dt = \gamma I$. $S$ is susceptible, $I$ infectious, $R$ removed. The basic reproduction number $R_0 = \beta S_0 / \gamma$ determines whether an epidemic occurs ($R_0 > 1$).

**Glucose-insulin regulation.** A two-compartment model: glucose $G$ and insulin $I$. $dG/dt = -k_1 G I + J(t)$, $dI/dt = -k_2 I + f(G)$. The nonlinear term $f(G)$ (insulin secretion triggered by glucose) gives realistic dynamics. The linearised system is a damped oscillator.

**Stiff equations.** Some ODEs have solutions with very different timescales (e.g. a fast transient and a slow decay). Standard explicit methods require tiny time steps; implicit methods (*Numerical Methods* Sem 4) handle stiffness efficiently.

**Dimensionless variables.** Almost always a good idea: scale all variables by characteristic values, reducing the number of parameters and revealing the structure. The logistic equation has two parameters ($r, K$); in dimensionless form it has one.

**When ODE modelling fails.** If the system has important spatial variation, you need a PDE (heat equation, wave equation). If the dynamics are fundamentally stochastic, you need a stochastic model. If the parameters vary in time or space, you need an extended framework.

## Key Ideas
- Modelling = identify variables + conservation laws + approximations + solve.
- RC: $RC V_C' + V_C = V_s$. RL: $L I' + IR = V_s$. RLC: $L \ddot{Q} + R \dot{Q} + Q/C = V_s$.
- Logistic: $P' = r P (1 - P/K)$ with carrying capacity $K$.
- Lotka–Volterra predator–prey: coupled first-order system with closed orbits.
- SIR epidemic: $R_0 = \beta S_0/\gamma$ determines outbreak.

## Worked Examples
**Example 1 — Time constant of a real circuit.** An RC circuit with $R = 4.7\text{ k}\Omega$ and $C = 100\ \mu\text{F}$: $\tau = 4.7 \times 10^3 \times 100 \times 10^{-6} = 0.47\text{ s}$. After $5 \tau \approx 2.35\text{ s}$, the transient is essentially over.

**Example 2 — Logistic fit.** Yeast culture grows logistically with $r = 0.5\text{ h}^{-1}$ and $K = 10^7$ cells/mL. Starting from $10^3$ cells/mL, the solution is $P(t) = 10^7/(1 + 9999 e^{-0.5 t})$. At $t = 6\text{ h}$: $P \approx 10^7/(1 + 9999 e^{-3}) \approx 4.97 \times 10^6$ cells/mL — about half the carrying capacity.

**Example 3 — Basic reproduction number.** A flu-like disease with $\beta = 0.3$ per day per infectious person, $\gamma = 0.1$ per day (infectious period $10$ days), and $S_0 = 10^5$ susceptibles: $R_0 = 0.3 \times 10^5 / 0.1 = 3 \times 10^5$. This is a runaway epidemic.

## Common Misconceptions
- **"The model is the truth."** No — a model is a useful approximation. Test it against data and refine.
- **"Linear models are wrong."** They are right *within their domain of validity*. Many physical systems are linear to a good approximation over a wide range.
- **"A higher-order ODE is always more accurate."** No — extra parameters can fit noise. Choose the simplest model that captures the phenomenon.
- **"ODE models ignore space."** Yes — that is their limitation. For spatial effects, use PDEs.

## Connections
Modelling is the practical side of all the analytical methods in this course. The same ODEs reappear in *Electricity and Magnetism* (RLC circuits), *Mechanics* (oscillators), *Waves and Optics* (coupled oscillators as wave models), and *Introduction to Quantum Mechanics* (Schrödinger equation as an ODE in time). The Lotka–Volterra model is a simple example of a dynamical system, studied more generally in *Linear Algebra* (Sem 5) using the language of matrices.

## Quick Check
1. Write the ODE for an RC circuit with a step voltage. What is the time constant?
2. State the logistic equation and identify the two parameters.
3. What is the basic reproduction number $R_0$ in the SIR model, and what does it mean?
4. Why are dimensionless variables useful in modelling?
5. Give one example where a simple ODE model is inadequate.

## Takeaway
- RC: $RC V_C' + V_C = V_s$; RL: $L I' + IR = V_s$; RLC: $L \ddot{Q} + R \dot{Q} + Q/C = V_s$.
- Logistic: $P' = r P (1 - P/K)$; solution is an S-curve.
- Lotka–Volterra: predator–prey coupled system; closed orbits in phase space.
- SIR: $R_0 = \beta S_0/\gamma$ determines whether an epidemic occurs.
- Always check the model's domain of validity; refine if it fails.
