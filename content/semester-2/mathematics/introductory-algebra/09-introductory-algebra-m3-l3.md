***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-2
semesterName: Semester 2
subjectId: mathematics
subjectName: Mathematics
courseId: introductory-algebra
courseName: Introductory Algebra
moduleId: introductory-algebra-module-3
moduleName: Elementary Group Theory and Algebraic Problem Solving
lessonId: introductory-algebra-m3-l3
lessonName: Algebraic Problem Solving — Strategies and Applications
lessonNumber: 9
moduleNumber: 3
semesterNumber: 2
difficulty: intermediate
estimatedStudyMinutes: 40
releaseOrder: 9
prerequisites:
  - introductory-algebra-m3-l2
learningObjectives:
  - Apply systematic strategies to algebraic problem solving.
  - Recognise the structure of common problems (systems, polynomials, identities).
  - Connect algebraic techniques to physics applications.
concepts:
  - Algebraic manipulation
  - Symmetry and invariants
  - Polynomial identities
  - Problem decomposition
  - Dimension analysis
  - Limiting cases
tags:
  - mathematics
  - algebra
  - problem-solving
  - applications
sourceType: authored-courseware
assessmentHints:
  - conceptual
  - short-answer
  - problem-solving
***

# Algebraic Problem Solving — Strategies and Applications

## Overview

The lesson consolidates the algebraic techniques of the course into a problem-solving framework. The lesson develops the standard strategies: identify the structure, use symmetry and invariants, exploit special cases and limits, work with dimensionless variables, and check the answer. The lesson applies the framework to a range of problems drawn from physics, illustrating the breadth of algebraic thinking in the programme. The lesson closes with a discussion of algebraic identity and the role of the computer algebra system in modern mathematical practice. The lesson is a bridge from the specific techniques of the course to the broader art of mathematical problem solving that the rest of the programme will require.

## Learning Path

- **What you should already know**: all previous lessons in this course (sets, numbers, complex numbers, matrices, determinants, linear systems, groups, permutations).
- **What this lesson adds**: a problem-solving framework; the standard strategies; worked examples from physics; the role of computer algebra.
- **What later lessons this will unlock**: a foundation for the abstract algebra and differential equations courses; a habit of mind that supports all subsequent mathematical work.

## Core Explanation

### A problem-solving framework

Most algebraic problems can be approached with a standard framework:

1. **Understand the problem**: read the statement, identify the unknowns, the given data, and the goal.
2. **Identify the structure**: recognise the type of problem (linear system, polynomial equation, identity, etc.) and the relevant tools.
3. **Plan the solution**: choose the technique; outline the steps.
4. **Execute the solution**: carry out the algebra carefully, checking each step.
5. **Check the answer**: verify the solution against special cases, limits, dimensions, and intuition.

The framework is a habit of mind, not a recipe. Each problem is different, and the right technique depends on the structure.

### Strategy 1: Use symmetry and invariants

Many problems have a hidden symmetry that simplifies the solution. Examples:

- A sphere has rotational symmetry; the field of a uniformly charged sphere depends only on the distance from the centre.
- The eigenvalues of a symmetric matrix are real; the matrix is diagonalisable by an orthogonal transformation.
- The angular momentum of a particle in a central potential is conserved; the radial motion is one-dimensional.

Invariants are quantities that do not change under the dynamics. The conservation laws of physics (energy, momentum, angular momentum, charge) are the most important invariants; the algebraic invariants of polynomials and matrices (discriminant, resultant, trace, determinant) are the analogues in algebra.

### Strategy 2: Use special cases and limits

Special cases often reveal the structure of a problem. A polynomial equation that reduces to $x^2 = 4$ in a special case has $x = \pm 2$ as candidate solutions in general. A function that becomes linear for small $x$ and constant for large $x$ is often a rational function or a logarithm.

Limiting cases are equally useful. The behaviour of a function as $x \to 0$, $x \to \infty$, or $x \to x_0$ often determines the form of the function. Dimensional analysis is a special case of limiting-case analysis: the dependence of a quantity on its variables is constrained by units.

### Strategy 3: Work with dimensionless variables

A quantity with physical units is a product of a numerical value and a unit. By choosing a natural scale, the numerical value can be made dimensionless. For example, in the pendulum problem, the dimensionless time $\tau = t \sqrt{g / L}$ removes the explicit dependence on $g$ and $L$. The dimensionless form of the equation is often simpler and reveals the universal behaviour.

In mathematics, a similar technique is to scale variables to remove constants. For example, the equation $x^2 + 2 x - 3 = 0$ becomes $y^2 - 1 = 0$ under the substitution $x = y - 1$ (completing the square). The reduced equation is easier to solve.

### Strategy 4: Decompose the problem

A complex problem can often be decomposed into simpler sub-problems. Examples:

- Solve a system of two equations in two unknowns by eliminating one variable (substitution or linear combinations).
- Decompose a polynomial into a product of linear factors (over the complex numbers).
- Decompose a rational function into a polynomial part plus partial fractions.
- Decompose a matrix into simpler blocks (block diagonalisation).

Decomposition is a general strategy for managing complexity.

### Strategy 5: Exploit algebraic identities

Many identities are useful: the binomial theorem, the geometric series, the Pythagorean identity, the addition formulas, Euler's formula, De Moivre's theorem. Recognising when an identity applies is a key skill.

For example, the sum of a geometric series $1 + r + r^2 + \ldots + r^n = (1 - r^{n+1}) / (1 - r)$ (for $r \ne 1$) appears in many contexts: compound interest, the sum of a series, the partial sums of a power series, the analysis of recursive algorithms.

### Strategy 6: Use the computer algebra system

Modern mathematical practice relies heavily on computer algebra systems (CAS): Mathematica, Maple, sympy (Python), Maxima, Sage. These systems can perform algebraic manipulations, solve equations, compute derivatives and integrals, and verify identities.

The CAS is a tool, not a replacement for understanding. The user must know what the system is computing, must be able to verify the output, and must be able to set up the problem in a form the system can handle. The CAS is most useful for problems with a lot of routine algebra; the creative part of problem solving (recognising the structure, choosing the approach) is still the human's job.

### Worked examples from physics

**Example 1 — Range of a projectile.**

A projectile is launched with speed $v$ at angle $\theta$ from the ground. Find the range $R$ as a function of $v$, $\theta$, and $g$.

**Solution.** The trajectory is $x(t) = v \cos\theta \cdot t$, $y(t) = v \sin\theta \cdot t - (1/2) g t^2$. The projectile lands when $y = 0$ (other than $t = 0$): $t = 2 v \sin\theta / g$. The range is $R = x(t_\text{land}) = v \cos\theta \cdot 2 v \sin\theta / g = v^2 \sin(2 \theta) / g$.

This is a standard result. The maximum range at fixed $v$ is $v^2 / g$ (at $\theta = 45°$). The dimensionless combination $R g / v^2$ depends only on $\theta$.

**Example 2 — Two-body problem.**

Two masses $m_1, m_2$ interact via a central potential $U(r)$ where $r = |\vec r_1 - \vec r_2|$. Reduce to a one-body problem.

**Solution.** Change to centre-of-mass and relative coordinates: $\vec R = (m_1 \vec r_1 + m_2 \vec r_2) / (m_1 + m_2)$ and $\vec r = \vec r_1 - \vec r_2$. The kinetic energy is

$$T = \frac{1}{2} m_1 \dot{\vec r}_1^2 + \frac{1}{2} m_2 \dot{\vec r}_2^2 = \frac{1}{2} M \dot{\vec R}^2 + \frac{1}{2} \mu \dot{\vec r}^2,$$

where $M = m_1 + m_2$ is the total mass and $\mu = m_1 m_2 / M$ is the reduced mass. The potential depends only on $\vec r$, so the Lagrangian decouples: the centre of mass moves with constant velocity (free particle), and the relative motion is a one-body problem with mass $\mu$ in the potential $U(r)$. The angular momentum about the centre of mass is conserved, reducing the relative motion to a one-dimensional problem in $r$.

This is a standard reduction, the basis of the theory of two-body orbits (Kepler problem, Rutherford scattering, hydrogen atom).

**Example 3 — Combining resistors.**

Two resistors $R_1$ and $R_2$ in series have equivalent resistance $R_s = R_1 + R_2$; in parallel, $1 / R_p = 1 / R_1 + 1 / R_2$, so $R_p = R_1 R_2 / (R_1 + R_2)$. Show that $R_s R_p = R_1 R_2$ (the geometric mean of the product and the sum).

**Solution.** $R_s R_p = (R_1 + R_2) \cdot R_1 R_2 / (R_1 + R_2) = R_1 R_2$. The identity follows from the algebra. ✓

The identity is a useful check: if you measure the series and parallel combinations of two resistors, their geometric mean is the product of the individual resistances.

**Example 4 — Capacitor charging.**

A capacitor $C$ is charged through a resistor $R$ from a battery of EMF $\mathcal{E}$. Find the charge on the capacitor as a function of time.

**Solution.** Kirchhoff's voltage law: $\mathcal{E} = I R + Q / C$, with $I = d Q / d t$. So $R d Q / d t = \mathcal{E} - Q / C$, a first-order linear ODE. The solution is $Q(t) = C \mathcal{E} (1 - e^{-t / R C})$, approaching the asymptotic charge $Q_\infty = C \mathcal{E}$ with time constant $\tau = R C$.

The dimensionless time $\tau = t / (R C)$ reveals the universal behaviour: the charge is $C \mathcal{E} f(\tau)$ where $f(\tau) = 1 - e^{-\tau}$ is a universal function.

### Polynomial identities

Many useful identities involve polynomials:

- **Sum of squares**: $a^2 + b^2 = (a + b i)(a - b i)$ over the complex numbers.
- **Sum of cubes**: $a^3 + b^3 = (a + b)(a^2 - a b + b^2)$.
- **Difference of squares**: $a^2 - b^2 = (a - b)(a + b)$.
- **Binomial theorem**: $(a + b)^n = \sum_{k=0}^n \binom{n}{k} a^k b^{n - k}$.
- **Geometric series**: $\sum_{k=0}^n r^k = (1 - r^{n+1}) / (1 - r)$ for $r \ne 1$.

These identities are the building blocks of polynomial manipulation.

### Symmetric functions

A **symmetric function** of $x_1, \ldots, x_n$ is unchanged by any permutation of the variables. The elementary symmetric polynomials are:

- $e_1 = x_1 + x_2 + \ldots + x_n$.
- $e_2 = \sum_{i < j} x_i x_j$.
- $e_k = \sum_{i_1 < i_2 < \ldots < i_k} x_{i_1} x_{i_2} \cdots x_{i_k}$.

By Vieta's formulas, the elementary symmetric polynomials of the roots of a polynomial equal (up to sign) the coefficients of the polynomial. For the quadratic $x^2 + b x + c$, the roots $r_1, r_2$ satisfy $r_1 + r_2 = -b$ and $r_1 r_2 = c$. For the cubic $x^3 + b x^2 + c x + d$, the roots satisfy $r_1 + r_2 + r_3 = -b$, $r_1 r_2 + r_2 r_3 + r_3 r_1 = c$, and $r_1 r_2 r_3 = -d$.

### Generating functions

A **generating function** encodes a sequence $\{a_n\}$ as the coefficients of a power series $f(x) = \sum a_n x^n$. The ordinary generating function of $\{a_n\}$ is $f(x) = a_0 + a_1 x + a_2 x^2 + \ldots$.

Examples:
- Geometric series: $\sum_{n = 0}^\infty x^n = 1 / (1 - x)$ for $|x| < 1$.
- Fibonacci: $\sum F_n x^n = x / (1 - x - x^2)$.
- Catalan: $\sum C_n x^n = (1 - \sqrt{1 - 4 x}) / (2 x)$.
- Exponential: $\sum x^n / n! = e^x$.

Generating functions turn recurrence relations into algebraic equations and are the basis of the combinatorial enumeration of many physical and mathematical sequences.

### Problem-solving habits

The most effective problem-solving habits:

- **Sketch the problem** before computing. A diagram often reveals the structure.
- **Identify the unknowns, the data, the goal**. Write them down explicitly.
- **Estimate the order of magnitude** before solving. If the answer is wildly different, look for an error.
- **Check special cases**. If the formula doesn't reduce to a known case, look for an error.
- **Check units and dimensions**. A wrong unit is a common error.
- **Check symmetries**. If the answer is not symmetric, look for an error.
- **Read the problem twice** before starting. Many errors are misreadings.
- **Be patient**. Some problems take a long time. The first attempt is often not the best.

The habits are not inborn; they are built by practice. The best way to develop them is to do many problems, in many areas, at many levels of difficulty.

### What the CAS does and does not do

A computer algebra system (CAS) is a powerful tool, but it has limits. The CAS can:

- Perform routine algebraic manipulations.
- Solve equations, compute derivatives and integrals.
- Verify identities.
- Plot functions and visualise data.

The CAS cannot:

- Choose the right approach to a problem.
- Recognise the structure of a problem.
- Interpret the meaning of a result.
- Decide which problem is worth solving.

The CAS is a tool, not a substitute for understanding. The user must know what the system is computing, must be able to verify the output, and must be able to set up the problem in a form the system can handle. The CAS is most useful for problems with a lot of routine algebra; the creative part of problem solving is still the human's job.

### Worked Examples

**Example 1 — Diagonalising a quadratic form.**

Diagonalise the quadratic form $Q(x, y) = 2 x^2 + 2 x y + 2 y^2$.

**Solution.** The matrix of $Q$ is $A = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$. Eigenvalues: $\det(A - \lambda I) = (2 - \lambda)^2 - 1 = \lambda^2 - 4 \lambda + 3 = (\lambda - 1)(\lambda - 3)$. So $\lambda_1 = 1, \lambda_2 = 3$. Eigenvectors: for $\lambda = 1$, $(A - I) v = 0$, so $v = (1, -1) / \sqrt{2}$. For $\lambda = 3$, $v = (1, 1) / \sqrt{2}$. Change of basis: $u = (x + y) / \sqrt{2}$, $v = (x - y) / \sqrt{2}$. In the new basis, $Q = u^2 + 3 v^2$. The quadratic form is the sum of two independent squares.

**Example 2 — Sum of a series.**

Compute $\sum_{n=1}^\infty n r^n$ for $|r| < 1$.

**Solution.** $\sum_{n=0}^\infty r^n = 1 / (1 - r)$. Differentiating both sides with respect to $r$: $\sum_{n=1}^\infty n r^{n-1} = 1 / (1 - r)^2$, so $\sum_{n=1}^\infty n r^n = r / (1 - r)^2$.

At $r = 1/2$: $\sum n / 2^n = (1/2) / (1/4) = 2$. The series $1/2 + 2/4 + 3/8 + 4/16 + \ldots = 1/2 + 1/2 + 3/8 + 1/4 + \ldots = 2$. ✓

**Example 3 — Power dissipated in a resistor network.**

Three equal resistors $R$ are connected in a triangle (each side has a resistor). Find the equivalent resistance between two vertices.

**Solution.** Label the vertices $A, B, C$. The resistor between $A$ and $C$ is in series with the parallel combination of the resistor between $A$ and $B$ and the resistor between $B$ and $C$. So $R_{AC, \text{via } B} = R + R \cdot R / (R + R) = R + R / 2 = 3R / 2$.

Alternatively, the triangle has a symmetry: by the delta-wye transformation, the triangle of three equal resistors is equivalent to a star of three equal resistors $R / 3$ (each leg), and the resistance between two vertices of the star is $R/3 + R/3 = 2R/3$.

Wait, let me recompute. The two paths from $A$ to $C$ are: direct (one resistor $R$) and via $B$ (two resistors in series, $R + R = 2R$). The direct path and the via-$B$ path are in parallel: $1/R_{AC} = 1/R + 1/(2R) = 3/(2R)$, so $R_{AC} = 2R/3$. ✓

## Key Ideas

- A problem-solving framework: understand, identify structure, plan, execute, check.
- Strategies: symmetry and invariants, special cases and limits, dimensionless variables, decomposition, identities, computer algebra.
- The CAS is a tool, not a substitute for understanding.
- The habit of mind (check units, check limits, check special cases) is the foundation of reliable problem solving.
- Algebraic techniques are the language of physics.

## Common Misconceptions

- **"The CAS can solve any problem."** It can perform routine manipulations, but it cannot recognise the structure of a problem or choose the right approach.
- **"Working longer always leads to the answer."** Sometimes the right approach is to step back, sketch the problem, and think about the structure.
- **"An answer that is not symmetric is wrong."** Sometimes the right answer is asymmetric. Symmetry is a check, not a theorem.
- **"Algebraic manipulation is mechanical."** It is partly mechanical, but the choice of what to manipulate is creative.
- **"If a formula works for one case, it works for all cases."** A formula derived for a special case may not generalise. Always check the limits and the special cases.

## Connections

- Algebraic problem solving is the workhorse of physics, chemistry, and engineering.
- The strategies are universal: they apply to differential equations, numerical analysis, and abstract algebra.
- The CAS is increasingly used in research and teaching; familiarity with at least one is a professional skill.
- The habit of checking units, limits, and special cases is the foundation of experimental and theoretical work.
- The connections to physics (projectile range, two-body problem, resistor networks, capacitor charging) show the breadth of the techniques.

## Quick Check

1. Sketch a problem before solving it. Identify the unknowns, the data, and the goal.
2. Check the units of a result. What are the units of the period of a pendulum $T = 2 \pi \sqrt{L / g}$?
3. Use a CAS to verify an identity. For example, verify that $(1 + x)^5 - (1 - x)^5 = 2 (5 x + 10 x^3 + x^5)$.
4. Find a special case of a problem that is easy to check, and check the general formula against it.
5. State three problem-solving strategies and give an example of each.

## Takeaway

- A problem-solving framework: understand, identify structure, plan, execute, check.
- Strategies: symmetry, special cases, dimensionless variables, decomposition, identities, CAS.
- The CAS is a tool, not a substitute for understanding.
- The habit of mind (check units, check limits, check special cases) is the foundation of reliable problem solving.
- Algebraic techniques are the language of physics; the examples in the lesson illustrate the breadth.
- Problem solving is a skill built by practice, not by reading.
