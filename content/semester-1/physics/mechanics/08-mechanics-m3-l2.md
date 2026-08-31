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
lessonId: mechanics-m3-l2
lessonName: Conservation of Energy and Conservative Forces
lessonNumber: 8
moduleNumber: 3
semesterNumber: 1
difficulty: intermediate
estimatedStudyMinutes: 50
releaseOrder: 8
prerequisites:
  - mechanics-m3-l1
learningObjectives:
  - Define a conservative force and recognise examples.
  - Define potential energy as the negative line integral of a conservative force.
  - State the law of conservation of mechanical energy and apply it.
  - Use energy diagrams to predict qualitative motion.
concepts:
  - Conservative force
  - Path independence
  - Potential energy
  - Conservation of mechanical energy
  - Energy diagram
  - Stable and unstable equilibrium
tags:
  - physics
  - mechanics
  - energy-conservation
  - potential
sourceType: authored-courseware
assessmentHints:
  - conceptual
  - derivation
  - problem-solving
***

# Conservation of Energy and Conservative Forces

## Overview
Some forces — gravity, the spring force, the Coulomb force — store the work they do as potential energy, which can later be recovered as kinetic energy. These are the *conservative* forces. Other forces — friction, air resistance — dissipate energy as heat and are *non-conservative*. This lesson distinguishes the two, defines potential energy precisely, and shows how to use conservation of mechanical energy to bypass the most intricate force calculations.

## Learning Path
- What you should already know: the work–energy theorem, the line integral of a force, basic integration.
- What this lesson adds: the conditions for energy conservation, the potential energy function, and a qualitative graphical method for analysing motion.
- What it unlocks: gravitational orbits, escape velocity, harmonic oscillators, atomic structure, and thermodynamics.

## Core Explanation
**Conservative forces.** A force $\vec{F}$ is conservative if the work it does on a body moving between two points $A$ and $B$ is independent of the path taken. Equivalently, the work around any closed loop is zero:

$$\oint \vec{F} \cdot d\vec{r} = 0.$$

For conservative forces, the line integral $\int_A^B \vec{F} \cdot d\vec{r}$ depends only on the endpoints, not on the path between them. This is what allows us to define a potential energy.

**Potential energy.** For a conservative force, define the potential energy $U$ such that

$$\Delta U = -W_{\text{by force}} = -\int_A^B \vec{F} \cdot d\vec{r}.$$

In differential form, $\vec{F} = -\nabla U$. This single equation carries a lot: given $U(x, y, z)$, the force is determined by taking the gradient; given $\vec{F}$, $U$ is determined up to an additive constant.

Examples:
- Gravity near Earth's surface: $U = m g h$, with $h$ the height above some reference.
- Spring: $U = \tfrac{1}{2} k x^2$ for displacement $x$ from natural length.
- Universal gravitation: $U = -G M m / r$.
- Electrostatic: $U = k q_1 q_2 / r$.

**Conservation of mechanical energy.** When only conservative forces act, the total mechanical energy $E = K + U$ is constant:

$$\tfrac{1}{2} m v^2 + U(x) = E = \text{constant}.$$

This is the work–energy theorem, rewritten using the definition of $U$: $W = -\Delta U$, so $\Delta K + \Delta U = 0$.

**Energy diagrams.** A plot of $U(x)$ versus position is a powerful diagnostic. A particle with total energy $E$ moves only in regions where $K = E - U \ge 0$, i.e. where $U \le E$. The turning points are where $U(x) = E$. Minima of $U$ are stable equilibria; maxima are unstable; inflection points (or flat regions) are neutrally stable.

**When is a force conservative?** Three equivalent tests: (1) the work around a closed loop is zero; (2) the work between two points is path-independent; (3) in simply connected regions, the curl of $\vec{F}$ is zero, $\nabla \times \vec{F} = 0$. Gravity, the spring force, and the electrostatic force are conservative. Friction, air resistance, and magnetic forces (in the sense of doing work on a moving charge — they don't!) need careful statements.

**A note on magnetic forces.** The magnetic force on a moving charge is $\vec{F} = q \vec{v} \times \vec{B}$. It is always perpendicular to $\vec{v}$, so the magnetic force does no work on a charge. The magnetic force is conservative in a subtle sense — its line integral around a closed loop enclosing a current is not zero — but it does not transfer energy to a particle. Energy can still be conserved because the changing magnetic field that produces $\vec{B}$ also produces an electric field that does work.

## Key Ideas
- A force is conservative if the work between two points is path-independent.
- Potential energy $U$ is defined by $\Delta U = -W_{\text{by force}}$, or $\vec{F} = -\nabla U$.
- Total mechanical energy $E = K + U$ is conserved when only conservative forces act.
- Energy diagrams reveal turning points and equilibrium stability.
- Friction and air resistance are non-conservative: they remove mechanical energy.

## Worked Examples
**Example 1 — Sliding down a smooth hemisphere.** A small block starts from rest at the top of a smooth hemisphere of radius $R$ and slides down. At what angle (from the vertical) does it leave the surface?
Energy conservation: at angle $\theta$ from the top, the height lost is $R(1 - \cos\theta)$, so $v^2 = 2 g R (1 - \cos\theta)$. The block leaves when the required centripetal force exceeds gravity's radial component: $m v^2 / R = m g \cos\theta$. Substituting $v^2$: $2 g (1 - \cos\theta) = g \cos\theta$, giving $\cos\theta = 2/3$, so $\theta \approx 48.2°$.

**Example 2 — Spring launcher.** A $0.4\text{ kg}$ block is pressed against a spring of constant $k = 800\text{ N/m}$, compressing it by $0.15\text{ m}$. The spring is on a horizontal frictionless surface. Find the speed of the block when the spring reaches its natural length.
Energy conservation: the initial spring energy $\tfrac{1}{2} k x^2 = \tfrac{1}{2} \times 800 \times 0.0225 = 9\text{ J}$ becomes kinetic energy. $v = \sqrt{2 K / m} = \sqrt{2 \times 9 / 0.4} = \sqrt{45} \approx 6.7\text{ m/s}$.

## Common Misconceptions
- **"Energy is always conserved."** Mechanical energy is conserved only when forces are conservative. With friction, mechanical energy decreases; the missing energy becomes thermal energy. *Total* energy (mechanical + thermal + ... + mass) is always conserved.
- **"Potential energy is a real kind of energy stored in space."** It is energy, but it is energy of the *configuration* of a system, not a property of a single point. Saying "the potential energy of this block" is shorthand for "the potential energy of the block-Earth system".
- **"If $U$ is high, the force is large."** The force magnitude is the *gradient* of $U$, not $U$ itself. A high plateau in $U$ can have a small force; a steep slope has a large force.
- **"A force that does no work is conservative."** Not necessarily. Magnetic forces on a moving charge do no work, but the field is not conservative in the usual sense (line integrals around loops containing current are non-zero). The full story is more careful than this lesson allows.

## Connections
The integral form $\Delta U = -W$ reappears in *Electricity and Magnetism* as $V(B) - V(A) = -\int_A^B \vec{E} \cdot d\vec{r}$, defining electric potential. The energy diagram is the prototype for understanding *quantum* bound states in *Introduction to Quantum Mechanics*. Gravitational potential energy $U = -G M m / r$ reappears in *Astrophysics II* for orbital energy and escape velocity.

## Quick Check
1. State two equivalent definitions of a conservative force.
2. A $2\text{ kg}$ object is thrown upward with initial speed $15\text{ m/s}$. Using energy methods, find its maximum height.
3. A particle moves in a potential $U(x) = x^3 - 3x$. Identify the equilibrium points and classify them as stable or unstable.
4. A block slides down a rough incline from height $h$. Its speed at the bottom is less than $\sqrt{2 g h}$. Where did the missing mechanical energy go?
5. The work done by gravity on a closed path is zero. Is gravity conservative? Justify.

## Takeaway
- Conservative forces have path-independent work and admit a potential energy function.
- $\vec{F} = -\nabla U$ ties the potential energy to the force.
- Total mechanical energy is conserved when only conservative forces act.
- Energy diagrams convert the dynamics of a 1D system into a picture of regions and turning points.
- The same potential-energy concept is the foundation of electric potential, gravitational potential, and quantum bound states.
