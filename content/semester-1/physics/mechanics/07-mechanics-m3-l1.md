***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-1
semesterName: Semester 1
subjectId: physics
subjectName: Physics
courseId: mechanics
courseName: Mechanics
moduleId: mechanics-module-3
moduleName: Work, Energy and Rotation
lessonId: mechanics-m3-l1
lessonName: Work, Energy and Power
lessonNumber: 7
moduleNumber: 3
semesterNumber: 1
difficulty: foundation
estimatedStudyMinutes: 50
releaseOrder: 7
prerequisites:
  - mechanics-m2-l1
  - differential-calculus-m2-l1
learningObjectives:
  - Define work as a scalar product and compute it for constant and variable forces.
  - Define kinetic energy and state the work–energy theorem.
  - Compute power as the rate of doing work.
  - Distinguish average and instantaneous power.
concepts:
  - Work
  - Scalar product
  - Kinetic energy
  - Work–energy theorem
  - Power
  - Variable force
tags:
  - physics
  - mechanics
  - work
  - energy
sourceType: authored-courseware
assessmentHints:
  - conceptual
  - problem-solving
  - derivation
***

# Work, Energy and Power

## Overview
The second half of Mechanics trades the equation $\vec{F} = m\vec{a}$ for scalar quantities — work and energy. The advantage is that energy is conserved in many situations where forces are complicated, so we can solve problems that would be impossible by direct force analysis. This lesson introduces work, kinetic energy, and power, and shows the work–energy theorem that links them.

## Learning Path
- What you should already know: the scalar product of vectors, integration of polynomials, $\vec{F} = m\vec{a}$ for constant force.
- What this lesson adds: a scalar language for change in motion, and a way to handle variable forces.
- What it unlocks: conservative forces, potential energy, conservation of energy, orbital mechanics, and thermodynamics.

## Core Explanation
**Work done by a constant force.** When a constant force $\vec{F}$ acts on a body that undergoes a displacement $\vec{d}$, the work done is the scalar product

$$W = \vec{F} \cdot \vec{d} = F d \cos\theta,$$

where $\theta$ is the angle between $\vec{F}$ and $\vec{d}$. Work is a scalar, measured in joules (J) where $1\text{ J} = 1\text{ N·m}$. Work is positive if the force has a component along the displacement, negative if it opposes the motion, and zero if the force is perpendicular.

**Work done by a variable force.** When the force varies along the path, work is the line integral

$$W = \int_{\text{path}} \vec{F} \cdot d\vec{r}.$$

For motion along the $x$-axis with a force that depends on $x$ only, $W = \int_{x_i}^{x_f} F(x)\, dx$. This is a Riemann sum in the limit, exactly the integral of *Differential Calculus* Module 3. Geometrically, work is the signed area under the $F$-vs-$x$ curve.

**Kinetic energy and the work–energy theorem.** Define the kinetic energy of a body of mass $m$ moving with speed $v$ as

$$K = \tfrac{1}{2} m v^2.$$

The work–energy theorem states that the net work done on a body by all forces equals the change in its kinetic energy:

$$W_{\text{net}} = \Delta K = \tfrac{1}{2} m v_f^2 - \tfrac{1}{2} m v_i^2.$$

For a single net force $\vec{F}$ on a particle of mass $m$ moving from $x_i$ to $x_f$, this follows from $\int F(x) dx = \int m a dx = \int m v\, dv = \tfrac{1}{2} m v^2 \big|_{v_i}^{v_f}$.

**Power.** Power is the rate of doing work. Average power is $\bar{P} = W / \Delta t$. Instantaneous power is

$$P = \frac{dW}{dt} = \vec{F} \cdot \vec{v},$$

the scalar product of force and velocity. Power is measured in watts (W), where $1\text{ W} = 1\text{ J/s}$.

**Worked-out algebra matters.** Many textbook problems with constant forces end up reducing to "use the work–energy theorem": compute $W$ from the force and the displacement, set it equal to $\Delta K$, and solve for the unknown speed. This is often far easier than solving for acceleration and then integrating.

## Key Ideas
- Work is $W = \vec{F} \cdot \vec{d}$ for a constant force, or $W = \int \vec{F} \cdot d\vec{r}$ for a variable force.
- Kinetic energy $K = \tfrac{1}{2} m v^2$ is a scalar measured in joules.
- Work–energy theorem: net work = change in kinetic energy.
- Power is the rate of doing work; $P = dW/dt = \vec{F} \cdot \vec{v}$.
- Work can be negative when the force opposes the displacement (e.g. friction).

## Worked Examples
**Example 1 — Pulling a crate.** A $20\text{ kg}$ crate is pulled $5\text{ m}$ across a horizontal floor by a constant $80\text{ N}$ force at $30°$ above horizontal. The coefficient of kinetic friction is $0.2$. Find the work done by each force and the change in kinetic energy.
Force components: $F_x = 80 \cos 30° \approx 69.3\text{ N}$, $F_y = 80 \sin 30° = 40\text{ N}$. Normal force: $N = m g - F_y = 196 - 40 = 156\text{ N}$. Friction: $f_k = 0.2 \times 156 = 31.2\text{ N}$.
Work by applied force: $W_F = \vec{F} \cdot \vec{d} = 69.3 \times 5 = 346.4\text{ J}$ (only horizontal component does work).
Work by friction: $W_f = -31.2 \times 5 = -156\text{ J}$.
Work by gravity and normal: $0$ (perpendicular to motion).
Net work: $346.4 - 156 = 190.4\text{ J}$. This equals $\Delta K$. If the crate started at rest, the final speed is $v = \sqrt{2 \Delta K / m} = \sqrt{2 \times 190.4 / 20} \approx 4.36\text{ m/s}$.

**Example 2 — Spring force.** A spring with $k = 200\text{ N/m}$ is compressed from its natural length to $0.1\text{ m}$ short. How much work is done on the spring? And how much kinetic energy is gained by a $0.5\text{ kg}$ ball pushed by this spring, if the ball is released from rest and the surface is frictionless?
Work to compress the spring: $W = \int_0^{0.1} k x\, dx = \tfrac{1}{2} k x^2 = \tfrac{1}{2} \times 200 \times 0.01 = 1\text{ J}$. By the work–energy theorem, the ball's kinetic energy at the natural length is $1\text{ J}$, so its speed is $v = \sqrt{2 \times 1 / 0.5} = 2\text{ m/s}$.

## Common Misconceptions
- **"If a force acts on a body, work is done."** Not necessarily. If the body does not move, $W = 0$. If the force is perpendicular to the displacement, $W = 0$.
- **"A force perpendicular to motion does no work."** Correct in a straight line; but in curved motion, "perpendicular to displacement at each instant" is the right condition. Gravity does no work on a satellite in circular orbit because gravity is always perpendicular to the velocity.
- **"Work and energy are different things."** They have the same units, and energy is "the ability to do work". The work–energy theorem makes this precise: net work is the change in kinetic energy.
- **"Power is work."** Power is the *rate* of doing work, not work itself. A small force and a small speed can give the same power as a large force and a large speed if the products match.

## Connections
The line integral $W = \int \vec{F} \cdot d\vec{r}$ is the same object you will see in *Electricity and Magnetism* as the potential difference $V = - \int \vec{E} \cdot d\vec{r}$ and in *Differential Equations* when you solve conservative vector fields. The work–energy theorem reappears in *Waves and Optics* as the basis for the energy of an oscillating system, and in *Astrophysics II* for orbital energy and escape velocity.

## Quick Check
1. A $5\text{ kg}$ object is lifted vertically $2\text{ m}$ at constant speed. How much work is done by the lifting force? By gravity?
2. A $1000\text{ kg}$ car accelerates from $10$ to $20\text{ m/s}$. What is the change in its kinetic energy?
3. A force $F(x) = 6 x^2$ (in newtons, $x$ in metres) acts on a particle moving from $x = 0$ to $x = 2\text{ m}$. Find the work done.
4. A pump lifts $100\text{ kg}$ of water $10\text{ m}$ in $20\text{ s}$. What is its average power output?
5. A $0.3\text{ kg}$ ball is thrown upward with initial speed $15\text{ m/s}$. Using energy methods, find its maximum height.

## Takeaway
- Work is the integral of force along displacement: $W = \int \vec{F} \cdot d\vec{r}$.
- Kinetic energy $K = \tfrac{1}{2} m v^2$; net work equals $\Delta K$.
- Power is the time-derivative of work, $P = \vec{F} \cdot \vec{v}$.
- Energy methods replace force-by-force analysis with a single scalar equation.
- The same integral form $W = \int \vec{F} \cdot d\vec{r}$ defines electric potential difference in *Electricity and Magnetism*.
