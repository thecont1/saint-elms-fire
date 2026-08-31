***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-1
semesterName: Semester 1
subjectId: physics
subjectName: Physics
courseId: mechanics
courseName: Mechanics
moduleId: mechanics-module-2
moduleName: Kinematics and Dynamics
lessonId: mechanics-m2-l1
lessonName: Motion in One and Two Dimensions
lessonNumber: 4
moduleNumber: 2
semesterNumber: 1
difficulty: foundation
estimatedStudyMinutes: 50
releaseOrder: 4
prerequisites:
  - mechanics-m1-l1
  - differential-calculus-m2-l1
learningObjectives:
  - Write and interpret position, velocity, and acceleration as vector functions of time.
  - Use the kinematic equations for constant acceleration in 1D.
  - Extend kinematics to motion in a plane using independent components.
  - Read a position-time or velocity-time graph and extract key quantities.
concepts:
  - Position vector
  - Velocity vector
  - Acceleration vector
  - Constant-acceleration kinematics
  - Vector independence
  - Projectile motion (setup)
tags:
  - physics
  - mechanics
  - kinematics
sourceType: authored-courseware
assessmentHints:
  - problem-solving
  - short-answer
  - conceptual
***

# Motion in One and Two Dimensions

## Overview
Kinematics is the geometry of motion — what position, velocity, and acceleration look like as functions of time, *before* you ask what forces cause them. Dynamics, by contrast, asks *why* the motion happens. This lesson makes the kinematic vocabulary rigorous in one and two dimensions and lays out the constant-acceleration equations you will use all semester.

## Learning Path
- What you should already know: vectors, components, derivatives, basic graphs.
- What this lesson adds: a clean operational language for motion, plus the constant-acceleration formulas.
- What it unlocks: projectile motion, circular motion, work–energy, and the bridge to differential equations in Semester 2.

## Core Explanation
**Position, velocity, acceleration.** The position of a particle is a vector function of time, $\vec{r}(t)$. In three dimensions,

$$\vec{r}(t) = x(t)\,\hat{i} + y(t)\,\hat{j} + z(t)\,\hat{k}.$$

The **velocity** is the time-derivative of position:

$$\vec{v}(t) = \frac{d\vec{r}}{dt} = \dot{x}\,\hat{i} + \dot{y}\,\hat{j} + \dot{z}\,\hat{k}.$$

The **acceleration** is the time-derivative of velocity (or the second derivative of position):

$$\vec{a}(t) = \frac{d\vec{v}}{dt} = \frac{d^2 \vec{r}}{dt^2}.$$

These are the operational definitions. Every kinematics problem is some combination of differentiating or integrating these relationships, given one or more of $\vec{r}, \vec{v}, \vec{a}, \vec{F}$.

**Constant acceleration in 1D.** When $\vec{a}$ is constant, the kinematics integrate cleanly. Take $\vec{a} = a\,\hat{x}$ with $a$ constant. Initial conditions at $t = 0$ are $x_0$ and $v_0$. Then

$$v(t) = v_0 + a t, \qquad x(t) = x_0 + v_0 t + \tfrac{1}{2} a t^2.$$

Two derived forms that don't need $t$ explicitly:

$$v^2 = v_0^2 + 2 a (x - x_0), \qquad x - x_0 = \tfrac{1}{2}(v_0 + v) t.$$

**2D motion with constant acceleration.** When the components of acceleration are constant, you simply apply the 1D equations to each component independently. The classic example is projectile motion with $\vec{a} = -g\,\hat{j}$: horizontal and vertical motions decouple. The horizontal motion has $a_x = 0$ (so $v_x$ is constant), while the vertical motion has $a_y = -g$.

**Reading graphs.** On a position-time graph, the slope is the velocity. On a velocity-time graph, the slope is the acceleration and the area under the curve is the displacement. On an acceleration-time graph, the area is the change in velocity. This three-graph discipline catches many careless errors.

**Displacement vs. distance.** Displacement is $\Delta \vec{r} = \vec{r}(t_f) - \vec{r}(t_i)$, a vector. Distance is the integral of speed $|d\vec{r}/dt|$, a scalar. For motion along a straight line without reversal they coincide; otherwise, displacement is smaller.

## Key Ideas
- Velocity is $d\vec{r}/dt$, acceleration is $d\vec{v}/dt$.
- For constant acceleration: $v = v_0 + a t$, $x = x_0 + v_0 t + \tfrac{1}{2} a t^2$.
- In 2D with constant acceleration, components evolve independently.
- Slope of position-time is velocity; slope of velocity-time is acceleration; area under velocity-time is displacement.
- Displacement is a vector; distance is a scalar; they differ when the path reverses.

## Worked Examples
**Example 1 — Braking car.** A car moving at $20\text{ m/s}$ brakes with constant deceleration of $4\text{ m/s}^2$. How far does it travel before stopping, and how long does it take?
$v = 0$ at stop. From $v^2 = v_0^2 + 2 a (x - x_0)$: $0 = 400 - 8 (x - x_0)$, so $x - x_0 = 50\text{ m}$. From $v = v_0 + a t$: $0 = 20 - 4 t$, so $t = 5\text{ s}$. Check: average speed is $10\text{ m/s}$, time is $5\text{ s}$, distance is $50\text{ m}$. ✓

**Example 2 — River crossing.** A boat moves at $4\text{ m/s}$ relative to still water and aims straight across a river $100\text{ m}$ wide flowing at $3\text{ m/s}$. Where does it land on the far bank?
The boat's velocity relative to ground is the vector sum: $\vec{v}_{b/g} = \vec{v}_{b/w} + \vec{v}_{w/g}$. Take $x$ across the river, $y$ along the flow: $v_x = 4$, $v_y = 3$, so ground speed is $5\text{ m/s}$ at angle $\arctan(3/4)$ downstream. Time to cross: $t = 100 / 4 = 25\text{ s}$. Downstream drift: $y = 3 \times 25 = 75\text{ m}$.

## Common Misconceptions
- **"Velocity and speed are the same."** They are not. Velocity is a vector (magnitude + direction); speed is the magnitude of velocity. A car going around a track at constant speed has a constantly changing velocity vector.
- **"If velocity is zero, acceleration must be zero."** Only momentarily. At the top of a vertical throw, $v = 0$ but $a = -g$.
- **"The horizontal and vertical motions of a projectile are linked."** They are not. A common beginner error is to assume $v_x$ changes because $v_y$ does. With gravity only, $v_x$ stays constant.
- **"Average velocity is the average of $v_0$ and $v$."** For *constant acceleration only*, average velocity is $(v_0 + v)/2$. For variable acceleration, average velocity is total displacement divided by total time.

## Connections
The derivatives used here — $d\vec{r}/dt$ and $d^2\vec{r}/dt^2$ — are exactly the tools built in *Differential Calculus* Module 2. In Semester 2, *Differential Equations* will invert this lesson: given $a$ as a function of $x$ or $v$, you solve for $v(t)$ and $x(t)$. Projectile motion is the gateway to orbital motion in *Astrophysics II*.

## Quick Check
1. A particle has $\vec{r}(t) = (3 t^2)\,\hat{i} + (4 t)\,\hat{j}$ (in metres, $t$ in seconds). Find $\vec{v}(t)$ and $\vec{a}(t)$.
2. A stone is dropped from rest. After $2\text{ s}$, what is its speed and how far has it fallen? (Use $g = 9.8\text{ m/s}^2$.)
3. A car accelerates uniformly from $0$ to $30\text{ m/s}$ in $6\text{ s}$. Find the displacement during this interval.
4. On a velocity-time graph, the area under the curve from $t = 0$ to $t = 5\text{ s}$ is $40\text{ m}$. What is the displacement?
5. Why does the magnitude of velocity in circular motion change even when $|\vec{v}|$ is constant?

## Takeaway
- Position, velocity, acceleration are vector functions of time related by differentiation.
- Constant-acceleration formulas cover most introductory 1D and 2D problems.
- 2D motion with constant acceleration: components evolve independently.
- Reading graphs by slope-and-area is a fast diagnostic for many mistakes.
- Displacement is a vector; distance is a scalar path-length.
