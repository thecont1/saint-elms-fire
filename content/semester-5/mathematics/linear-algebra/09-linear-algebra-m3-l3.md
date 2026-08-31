***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-5
semesterName: Semester 5
subjectId: mathematics
subjectName: Mathematics
courseId: linear-algebra
courseName: Linear Algebra
moduleId: linear-algebra-module-3
moduleName: Decomposition and Factorisation
lessonId: linear-algebra-m3-l3
lessonName: Applications to Physics and Geometry
lessonNumber: 9
moduleNumber: 3
semesterNumber: 5
difficulty: advanced
estimatedStudyMinutes: 55
releaseOrder: 9
prerequisites:
  - linear-algebra-m2-l2
  - linear-algebra-m3-l1
learningObjectives:
  - Apply linear algebra to moment of inertia and rigid body rotation.
  - Use eigenvalues to analyse normal modes of coupled oscillators.
  - Describe the linear algebra of special relativity.
  - Use the principal axis theorem for symmetric tensors.
concepts:
  - Moment of inertia tensor
  - Principal axes
  - Coupled oscillators
  - Normal modes
  - Lorentz transformations
  - Special relativity
tags:
  - mathematics
  - algebra
  - physics-applications
sourceType: authored-courseware
assessmentHints:
  - application
  - problem-solving
  - conceptual
***

# Applications to Physics and Geometry

## Overview
Linear algebra is the natural language of much of modern physics. This lesson collects the most important applications: the moment of inertia tensor and rigid body rotation, the eigenvalue analysis of coupled oscillators, the Lorentz transformations of special relativity, the principal axis theorem for symmetric tensors, and the geometric interpretation of the determinant. The connections illustrate how the abstract theory becomes concrete and physical.

## Learning Path
- What you should already know: matrices, eigenvalues, inner products, change of basis, the spectral theorem.
- What this lesson adds: physical applications of these tools.
- What it unlocks: a unified view of classical and modern physics through linear algebra.

## Core Explanation
**Moment of inertia tensor.** For a rigid body, the moment of inertia about an axis $\hat{n}$ is $I_{\hat{n}} = \int \rho(\vec{r}) (\vec{r} \cdot \vec{r} - (\vec{r} \cdot \hat{n})^2) dV$. This can be written as $I_{\hat{n}} = \hat{n}^T \mathcal{I} \hat{n}$, where $\mathcal{I}$ is the (symmetric) moment of inertia *tensor*.

**Components.** In coordinates, $\mathcal{I}_{ij} = \int \rho(\vec{r}) (r^2 \delta_{ij} - r_i r_j) dV$. The diagonal components are the moments about the coordinate axes; the off-diagonal are the products of inertia.

**Angular momentum and rotational kinetic energy.** The angular momentum is $\vec{L} = \mathcal{I} \vec{\omega}$ (matrix product). The kinetic energy is $T = (1/2) \vec{\omega}^T \mathcal{I} \vec{\omega} = (1/2) \sum_{ij} \mathcal{I}_{ij} \omega_i \omega_j$.

**Principal axes.** By the spectral theorem, there is an orthogonal basis in which $\mathcal{I}$ is diagonal. These are the *principal axes*; the diagonal entries are the *principal moments of inertia* $I_1, I_2, I_3$. About a principal axis, $\vec{L}$ is parallel to $\vec{\omega}$.

**Free rotation.** For a body rotating freely (no torques), $\vec{L}$ is conserved. In the body frame, $\vec{\omega}$ precesses around the conserved $\vec{L}$ (Euler's equations). The principal axis with the largest or smallest moment is the stable rotation axis; the middle is unstable.

**Euler's equations.** $\tau_i = I_i \dot{\omega}_i + (I_j - I_k) \omega_j \omega_k$ (cyclic). The free rotation ($\tau = 0$) has $\dot{\omega}_i = (I_j - I_k) \omega_j \omega_k / I_i$. For $I_1 \ne I_2 \ne I_3$, the motion is chaotic.

**Steady precession.** For an axially symmetric top ($I_1 = I_2 \ne I_3$), the free rotation is a steady precession: the symmetry axis traces a cone around the fixed $\vec{L}$. Stable for $I_3 > I_1$ (prolate), unstable for $I_3 < I_1$ (oblate). The intermediate axis is unstable (tennis racket theorem).

**Tennis racket theorem.** A rigid body rotating about the axis with the intermediate moment of inertia is unstable: small perturbations grow. The body flips. (You can demonstrate this with a tennis racket or a book — try spinning it about each of the three principal axes.)

**Rotational kinetic energy in principal axes.** $T = (1/2)(I_1 \omega_1^2 + I_2 \omega_2^2 + I_3 \omega_3^2)$.

**Angular velocity in body frame vs. space frame.** The two frames are related by a rotation $R(t)$: $\vec{\omega}_\text{space} = R(t) \vec{\omega}_\text{body}$. The angular velocity is not the time-derivative of the rotation angle (it is the generator of the rotation).

**Euler angles.** Three angles $(\phi, \theta, \psi)$ parameterise the orientation of a rigid body. Used in the Euler equations of motion.

**Coupled oscillators.** Two masses on springs: equations of motion $M \ddot{\vec{x}} + K \vec{x} = 0$. Look for $\vec{x} = \vec{v} e^{i \omega t}$: $(K - \omega^2 M) \vec{v} = 0$. The non-trivial $\vec{v}$ exist for $K - \omega^2 M$ singular, i.e., $\det(K - \omega^2 M) = 0$. The roots are the *normal-mode frequencies*; the corresponding $\vec{v}$ are the *mode shapes*.

**Two equal masses on three springs.** Masses $m_1 = m_2 = m$ between walls with three identical springs of constant $k$. Equations: $m \ddot{x}_1 = -k x_1 + k(x_2 - x_1) = -2 k x_1 + k x_2$, $m \ddot{x}_2 = -k x_2 + k(x_1 - x_2) = k x_1 - 2 k x_2$. Matrix $K = k \begin{pmatrix} 2 & -1 \\ -1 & 2 \end{pmatrix}$, $M = m I$. Eigenvalues of $K/M = (k/m) \begin{pmatrix} 2 & -1 \\ -1 & 2 \end{pmatrix}$: $(k/m) \cdot 1 = k/m$ and $(k/m) \cdot 3 = 3 k/m$. Eigenvectors: $(1, 1)^T$ (in-phase, lower frequency) and $(1, -1)^T$ (out-of-phase, higher frequency).

**Normal-mode decomposition.** Any motion of the system is a linear combination of the normal modes. The energy oscillates between the two modes (beats). The normal modes are the basis in which the dynamics is simple.

**General N-oscillator system.** $N$ masses on springs: $N$ normal modes with frequencies $\omega_i$ and shapes $v^{(i)}$. The matrix $K M^{-1}$ (or $M^{-1/2} K M^{-1/2}$) is symmetric positive definite; the eigenvalues are $\omega_i^2$.

**Special relativity: the Lorentz transformation.** A Lorentz boost along $x$ with velocity $v$:

$$\begin{pmatrix} t' \\ x' \end{pmatrix} = \begin{pmatrix} \gamma & -\beta \gamma \\ -\beta \gamma & \gamma \end{pmatrix} \begin{pmatrix} t \\ x \end{pmatrix},$$

where $\beta = v/c$ and $\gamma = 1/\sqrt{1 - \beta^2}$. The matrix is a *Lorentz boost*.

**The Lorentz group.** Boosts and rotations in 4D spacetime form the Poincaré group (Lorentz + translations). The Lorentz matrices satisfy $\Lambda^T \eta \Lambda = \eta$, where $\eta = \text{diag}(-1, 1, 1, 1)$ is the Minkowski metric. This is the orthogonal group of the metric $\eta$.

**Four-vectors.** $x^\mu = (c t, x, y, z)$. Contravariant: $x^\mu$ with index up. Covariant: $x_\mu = \eta_{\mu\nu} x^\nu = (-c t, x, y, z)$. The inner product $x \cdot y = x^\mu y_\mu = -c^2 t_1 t_2 + \vec{r}_1 \cdot \vec{r}_2$ is invariant under Lorentz transformations.

**Energy-momentum four-vector.** $p^\mu = (E/c, \vec{p})$. Mass shell: $p \cdot p = -m^2 c^2$, so $E^2 = \vec{p}^2 c^2 + m^2 c^4$.

**The Dirac equation.** A relativistic wave equation for spin-1/2 particles. The Hamiltonian is $H = \vec{\alpha} \cdot \vec{p} c + \beta m c^2$, where $\vec{\alpha}, \beta$ are $4 \times 4$ matrices satisfying the Clifford algebra $\{\gamma^\mu, \gamma^\nu\} = 2 \eta^{\mu\nu}$. The Dirac equation is the foundation of relativistic quantum mechanics.

**Pauli matrices.** $2 \times 2$ matrices representing the Clifford algebra in 3D: $\sigma_x, \sigma_y, \sigma_z$. They satisfy $\{\sigma_i, \sigma_j\} = 2 \delta_{ij}$, $[\sigma_i, \sigma_j] = 2 i \epsilon_{ijk} \sigma_k$. Used in non-relativistic spin, NMR, and the foundations of the Dirac equation.

**Generators of rotations.** $J_i = -i \hbar \epsilon_{ijk} x_j \partial_k$ (orbital) or $S_i = \hbar \sigma_i / 2$ (spin). The commutation relations $[J_i, J_j] = i \hbar \epsilon_{ijk} J_k$ are the algebra of $\mathfrak{so}(3)$. Cover Lie groups and Lie algebras.

**Noether's theorem.** For every continuous symmetry, there is a conserved quantity. Translation: $P$; rotation: $L$; time translation: $H$; gauge symmetry: charge. The mathematical proof uses the action and Noether's current.

**Stress tensor.** $T_{ij}$ is the $i$-th component of force per unit area across a surface with normal in the $j$-th direction. A symmetric tensor (for non-polar fluids) in equilibrium.

**Electromagnetic field tensor.** $F_{\mu\nu} = \partial_\mu A_\nu - \partial_\nu A_\mu$. Antisymmetric. $F_{0i} = E_i$, $F_{ij} = -\epsilon_{ijk} B_k$. Maxwell's equations in covariant form: $\partial_\mu F^{\mu\nu} = \mu_0 J^\nu$ and $\partial_{[\mu} F_{\nu\rho]} = 0$.

**Metric tensor and curvature.** General relativity: spacetime is a 4D pseudo-Riemannian manifold with metric $g_{\mu\nu}$. Curvature is measured by the Riemann tensor $R^\rho_{\ \sigma\mu\nu}$, which involves the Christoffel symbols and their derivatives. The Einstein field equations $G_{\mu\nu} = (8\pi G/c^4) T_{\mu\nu}$ relate curvature to energy-momentum.

**Quaternions and rotations.** A rotation by angle $\theta$ about axis $\hat{n}$ is represented by the quaternion $q = \cos(\theta/2) + \sin(\theta/2) (n_x i + n_y j + n_z k)$, where $i, j, k$ satisfy $i^2 = j^2 = k^2 = ijk = -1$. Quaternions avoid the gimbal lock of Euler angles and interpolate smoothly. Used in computer graphics, robotics, and aerospace.

**Group representation theory.** A representation of a group is a homomorphism to a group of matrices. The representation theory of the rotation group SO(3) gives the angular momentum eigenstates (spherical harmonics). The representation theory of the Lorentz group gives the particle types (scalar, vector, spinor, etc.).

**The Poincaré group.** The symmetry group of special relativity. Its unitary representations classify elementary particles by mass and spin.

**The Standard Model group.** $\text{SU}(3) \times \text{SU}(2) \times \text{U}(1)$. The gauge group of the strong, weak, and electromagnetic interactions. Representation theory of this group classifies the quarks, leptons, and gauge bosons.

**Spontaneous symmetry breaking.** The Higgs mechanism: the SU(2) × U(1) gauge symmetry is spontaneously broken to U(1)$_\text{em}$, giving mass to the $W$ and $Z$ bosons while leaving the photon massless. The Higgs field is a scalar that acquires a vacuum expectation value.

**Crystallography and space groups.** The symmetry of a crystal is a *space group*: a discrete subgroup of the Euclidean group (translations + rotations + reflections). There are 230 space groups in 3D. The representation theory of the space group gives the band structure of electrons in the crystal.

**Young tableaux and representation theory.** Symmetric groups $S_n$ are the permutation groups. Their irreducible representations are indexed by partitions of $n$ and realised by Young tableaux. The basis of much of representation theory and combinatorics.

**Tensor methods in continuum mechanics.** The stress tensor $T_{ij}$, the strain tensor $\epsilon_{ij}$, the elastic tensor $C_{ijkl}$ (4th rank). All are tensors; they transform under rotations as $T'_{ij} = R_{ik} R_{jl} T_{kl}$.

**Permutation tensor.** $\epsilon_{ijk}$ in 3D, $\epsilon_{ijkl}$ in 4D. Antisymmetric. Used in cross products, curl, and the definition of the determinant.

**Determinant as volume.** The absolute value of the determinant of a matrix is the volume scaling factor. $|\det A|$ is the factor by which $A$ scales volumes. For an orthogonal matrix, $|\det| = 1$ (volume-preserving). For a rotation, $\det = 1$ (orientation-preserving). For a reflection, $\det = -1$.

**Determinant and change of variables.** The change-of-variables formula for integrals is $\int_{A(\Omega)} f = \int_\Omega f \circ A \cdot |\det A|$ (for $A$ linear). The general formula uses the Jacobian.

**Differential forms.** A $k$-form is a totally antisymmetric $(0, k)$-tensor. Used in differential geometry and electromagnetism: $F = dA$ is a 2-form. The integral of a $k$-form over a $k$-dimensional manifold is well-defined (and orientation-independent).

**Lie derivatives.** The derivative of a tensor field along a vector field. Used in the definition of the stress-energy tensor in general relativity.

**Connection and curvature in differential geometry.** A connection $\nabla$ on a manifold defines parallel transport. The Riemann tensor $R(X, Y) Z = \nabla_X \nabla_Y Z - \nabla_Y \nabla_X Z - \nabla_{[X, Y]} Z$ measures the failure of parallel transport around a loop to be the identity. The basis of general relativity.

**Differential forms and Stokes' theorem.** $\int_\Omega d\omega = \int_{\partial \Omega} \omega$. Unifies the fundamental theorems of calculus (Gauss, Green, Stokes).

**Curvilinear coordinates and the Jacobian.** In spherical coordinates, $dV = r^2 \sin\theta dr d\theta d\phi$ (the Jacobian of the transformation). In general, $dV = |J| dx^1 dx^2 \ldots dx^n$, where $|J|$ is the absolute value of the Jacobian determinant.

**Why these applications matter.** The mathematical tools of linear algebra are the natural language of physics. The eigenvalues of a Hamiltonian are the energy levels. The principal axes of a tensor are the natural directions. The SVD of an operator gives its most informative decomposition. Master these tools, and the language of modern physics opens up.

## Key Ideas
- Moment of inertia tensor: $\mathcal{I}_{ij} = \int \rho (r^2 \delta_{ij} - r_i r_j) dV$, principal axes via the spectral theorem.
- Normal modes: eigenvalues of $K M^{-1}$ (or $M^{-1/2} K M^{-1/2}$).
- Lorentz transformation: 4D rotation preserving the Minkowski metric.
- Stress, electromagnetic field, and metric tensors: second-rank tensors, transform as $T'_{ij} = R_{ik} R_{jl} T_{kl}$.
- The determinant is the volume scaling factor; $|\det A|$ scales volumes.

## Worked Examples
**Example 1 — Principal axes of a thin rod.** A thin rod of mass $m$ and length $L$ along the $x$-axis. $\mathcal{I}_{xx} = 0$ (about the long axis, by symmetry). $\mathcal{I}_{yy} = \mathcal{I}_{zz} = (1/12) m L^2$ (about transverse axes through the centre). Principal axes: $x, y, z$. Principal moments: $0, (1/12) m L^2, (1/12) m L^2$. About an axis through the centre at angle $\theta$ to the rod, $I = (1/12) m L^2 \sin^2 \theta$.

**Example 2 — Coupled oscillators.** $M = m I$, $K = k \begin{pmatrix} 2 & -1 \\ -1 & 2 \end{pmatrix}$. Eigenvalues of $M^{-1} K = (k/m) \begin{pmatrix} 2 & -1 \\ -1 & 2 \end{pmatrix}$: $k/m$ and $3 k/m$. Frequencies $\omega_1 = \sqrt{k/m}$, $\omega_2 = \sqrt{3 k/m}$. Mode shapes: $(1, 1)^T$ (in-phase) and $(1, -1)^T$ (out-of-phase).

**Example 3 — Lorentz boost.** $v = 0.6 c$. $\beta = 0.6$, $\gamma = 1/\sqrt{1 - 0.36} = 1.25$. Boost matrix: $\begin{pmatrix} 1.25 & -0.75 \\ -0.75 & 1.25 \end{pmatrix}$ (with $c = 1$). For $(t, x) = (10\text{ s}, 0)$: $(t', x') = (12.5\text{ s}, -7.5\text{ s/c})$. The interval: $t^2 - x^2/c^2 = 100$, $t'^2 - x'^2/c^2 = 156.25 - 56.25 = 100$. ✓

**Example 4 — Stress tensor in a fluid at rest.** $T_{ij} = -p \delta_{ij}$ (pressure). The trace is $-3p$ (the sum of normal stresses). In a more general fluid, $T_{ij} = -p \delta_{ij} + \sigma_{ij}$ where $\sigma_{ij}$ is the viscous stress tensor (symmetric, traceless for incompressible flow).

**Example 5 — Quaternion rotation.** Rotation by $90°$ about $\hat{z}$: $q = \cos(45°) + \sin(45°) k = (1/\sqrt{2})(1 + k)$. Acting on the vector $\vec{v} = (1, 0, 0)$: $q v q^{-1} = (1/\sqrt{2})(1 + k) i (1/\sqrt{2})(1 - k) = (1/2)(1 + k) i (1 - k) = (1/2)(i - k i + k i - k^2 i) = (1/2)(i + i) = i$. So $v$ rotates to $(0, 1, 0)$ — a $90°$ rotation around $z$. ✓

## Common Misconceptions
- **"All rigid bodies rotate stably."** No — only around the largest and smallest moment axes; the middle is unstable.
- **"Time and space are separate."** In special relativity, they mix under Lorentz boosts. The spacetime interval is invariant.
- **"Tensors are complicated arrays."** They are geometric objects that transform naturally under coordinate changes. The representation of a tensor depends on the basis; the tensor itself does not.
- **"Quantum numbers are arbitrary."** They are eigenvalues of commuting operators, and they classify the irreducible representations of the symmetry group.

## Connections
Linear algebra is the connective tissue of physics: classical mechanics (tensors), quantum mechanics (operators and Hilbert spaces), special and general relativity (Lorentz and Poincaré groups), and the Standard Model (gauge groups). Mastery of linear algebra opens all of these.

## Quick Check
1. What is the moment of inertia tensor?
2. What is a normal mode of a coupled oscillator system?
3. What does a Lorentz boost preserve?
4. What is the principal axis theorem?
5. What is the geometric meaning of the determinant?

## Takeaway
- Moment of inertia tensor: $\mathcal{I}_{ij} = \int \rho (r^2 \delta_{ij} - r_i r_j) dV$.
- Normal modes: eigenvalues of $K M^{-1}$.
- Lorentz boost: preserves $t^2 - x^2/c^2$.
- Principal axis theorem: symmetric tensor diagonal in some basis.
- Determinant: volume scaling factor.
