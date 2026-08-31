***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-5
semesterName: Semester 5
subjectId: mathematics
subjectName: Mathematics
courseId: linear-algebra
courseName: Linear Algebra
moduleId: linear-algebra-module-2
moduleName: Linear Maps and Matrices
lessonId: linear-algebra-m2-l3
lessonName: Eigenvalues, Eigenvectors and Diagonalisation
lessonNumber: 6
moduleNumber: 2
semesterNumber: 3
difficulty: advanced
estimatedStudyMinutes: 55
releaseOrder: 6
prerequisites:
  - linear-algebra-m2-l1
  - linear-algebra-m2-l2
learningObjectives:
  - Define eigenvalues and eigenvectors of a linear operator.
  - Compute the characteristic polynomial and find eigenvalues.
  - State and apply the spectral theorem for symmetric matrices.
  - Diagonalise a matrix and use the diagonal form to compute powers and exponentials.
concepts:
  - Eigenvalue
  - Eigenvector
  - Characteristic polynomial
  - Diagonalisation
  - Spectral theorem
  - Matrix exponential
tags:
  - mathematics
  - algebra
  - eigenvalues
sourceType: authored-courseware
assessmentHints:
  - derivation
  - problem-solving
  - conceptual
***

# Eigenvalues, Eigenvectors and Diagonalisation

## Overview
Eigenvalues and eigenvectors are the most important concepts in linear algebra. They reveal the natural axes of a linear transformation, the frequencies of a vibrating system, the energy levels of a Hamiltonian, the principal moments of inertia, and the principal components of data. This lesson develops the theory, the characteristic polynomial, the spectral theorem for symmetric matrices, and applications including matrix powers and exponentials.

## Learning Path
- What you should already know: linear maps, matrices, change of basis, inner products, Gram–Schmidt.
- What this lesson adds: eigenvalues, eigenvectors, the characteristic polynomial, diagonalisation, the spectral theorem.
- What it unlocks: the structure theory of linear operators, the Jordan form, and the physical applications throughout.

## Core Explanation
**Eigenvalue and eigenvector.** For a linear operator $T$ on $V$ (or an $n \times n$ matrix $A$), $\lambda \in F$ is an *eigenvalue* and $v \in V$, $v \ne 0$, is a corresponding *eigenvector* if $T(v) = \lambda v$ (or $A v = \lambda v$).

**Characteristic polynomial.** $p(\lambda) = \det(A - \lambda I)$ (or $\det(T - \lambda I)$). The eigenvalues are the roots of $p$. The degree of $p$ is $n$, so there are $n$ eigenvalues, counted with multiplicity, in the algebraic closure of $F$.

**Algebraic and geometric multiplicity.** The *algebraic multiplicity* of $\lambda$ is its multiplicity as a root of the characteristic polynomial. The *geometric multiplicity* is $\dim \ker(A - \lambda I)$ — the dimension of the eigenspace. Always: geometric $\le$ algebraic.

**Diagonalisation.** $A$ is *diagonalisable* if there is a basis of eigenvectors. In this basis, the matrix is diagonal (the eigenvalues on the diagonal). The matrix of the change of basis has the eigenvectors as columns.

**Condition for diagonalisability.** $A$ is diagonalisable over $F$ iff the minimal polynomial of $A$ has distinct roots in $F$ (i.e., splits into distinct linear factors). Equivalently, the geometric and algebraic multiplicities agree for every eigenvalue.

**Diagonalisability of symmetric matrices.** Every real symmetric matrix is orthogonally diagonalisable: there is an orthonormal basis of eigenvectors. The eigenvalues are real.

**Spectral theorem.** A self-adjoint operator (Hermitian matrix) on a finite-dimensional inner-product space has an orthonormal basis of eigenvectors. The eigenvalues are real. (For complex, every normal matrix is unitarily diagonalisable; eigenvalues are real for self-adjoint, on the unit circle for unitary.)

**Characteristic polynomial examples.**
- $A = \begin{pmatrix} 1 & 2 \\ 2 & 1 \end{pmatrix}$: $p(\lambda) = (1 - \lambda)^2 - 4 = \lambda^2 - 2 \lambda - 3 = (\lambda - 3)(\lambda + 1)$. Eigenvalues $3, -1$. Eigenvectors $(1, 1)^T$ and $(1, -1)^T$.
- $A = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$ (rotation by $90°$): $p(\lambda) = \lambda^2 + 1$. Eigenvalues $\pm i$ (over $\mathbb{C}$). No real eigenvalues.
- $A = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$: $p(\lambda) = (1 - \lambda)^2$. Eigenvalue $1$ with algebraic multiplicity $2$, geometric multiplicity $1$. Not diagonalisable (only one eigenvector $(1, 0)^T$).

**The power of a matrix.** If $A = P D P^{-1}$ is diagonal, $A^n = P D^n P^{-1}$, easy to compute. If $A$ is not diagonal, use the Cayley–Hamilton theorem or the Jordan form.

**The exponential of a matrix.** $e^A = \sum_{k=0}^\infty A^k / k!$. If $A = P D P^{-1}$, $e^A = P e^D P^{-1}$ (with $e^D$ diagonal, entries $e^{\lambda_i}$). Used in linear systems $\dot{x} = A x$, with solution $x(t) = e^{A t} x(0)$.

**Systems of linear ODEs.** $\dot{x} = A x$. Solution $x(t) = e^{A t} x(0)$. If $A$ is diagonalisable, $x_i(t) = e^{\lambda_i t} x_i(0)$ in the eigenbasis. Stability requires $\text{Re}(\lambda_i) \le 0$ for all $i$, with $\text{Re}(\lambda_i) < 0$ for asymptotic stability.

**Coupled oscillators.** Two masses $m$ connected by springs: equations $m \ddot{x}_1 = -k x_1 + k(x_2 - x_1) = -2 k x_1 + k x_2$, $m \ddot{x}_2 = -2 k x_2 + k x_1$. The matrix is $\begin{pmatrix} 2 & -1 \\ -1 & 2 \end{pmatrix} k/m$. Eigenvalues $k/m, 3 k/m$. Eigenvectors $(1, 1)$ (in-phase, lower frequency) and $(1, -1)$ (out-of-phase, higher frequency). The normal modes.

**Principal axes of inertia.** The moment of inertia tensor $I$ is a symmetric matrix. By the spectral theorem, it can be diagonalised by an orthogonal change of basis — the principal axes. The diagonal entries are the principal moments of inertia.

**Stability of equilibria.** For a dynamical system $\dot{x} = f(x)$ near an equilibrium $x_0$, linearise: $\dot{\xi} = A \xi$ with $A_{ij} = \partial f_i/\partial x_j |_{x_0}$. The equilibrium is stable if all eigenvalues of $A$ have negative real parts (asymptotically stable) or zero real parts with no positive real parts (Lyapunov stable).

**Bifurcation theory.** As a parameter is varied, the eigenvalues of the linearisation can cross the imaginary axis. Each such event is a bifurcation. The classification of bifurcations (saddle-node, transcritical, pitchfork, Hopf) is the start of dynamical systems theory.

**Vibration analysis.** For a system of $n$ masses and springs, the equations of motion are $M \ddot{x} + K x = 0$. Try $x = v e^{i \omega t}$: $-\omega^2 M v + K v = 0$, so $K v = \omega^2 M v$. The eigenvalues $\omega^2$ are the squared natural frequencies. The eigenvectors are the mode shapes.

**Quantum mechanics.** The energy levels of a quantum system are the eigenvalues of the Hamiltonian. The stationary states are the eigenfunctions. Observables correspond to self-adjoint operators (Hermitian matrices in a discrete basis) with real eigenvalues.

**Angular momentum.** The orbital angular momentum operator $\vec{L}$ has eigenvalues $\hbar^2 \ell(\ell+1)$ and $m \hbar$. The spin operator $\vec{S}$ has eigenvalues $\hbar^2 s(s+1)$. Discrete spectra of a self-adjoint operator on a Hilbert space.

**Stability of molecules.** The molecular Hamiltonian has a discrete spectrum of bound states. The wavefunctions are normalisable. The continuous spectrum corresponds to ionisation (energy above the dissociation limit).

**Markov chains.** A transition matrix $M$ (rows sum to $1$, entries non-negative) has $1$ as an eigenvalue (with eigenvector the all-ones vector if columns sum to $1$, or row-ones for right eigenvectors). The stationary distribution is the corresponding eigenvector. Convergence to equilibrium is governed by the second-largest eigenvalue.

**PageRank.** A modified version of the random-walk stationary distribution. The Google matrix is $G = \alpha M + (1 - \alpha) (1/n) J$ (with $J$ the all-ones matrix), where $M$ is the link matrix. The PageRank vector is the dominant eigenvector of $G$. Computed by power iteration.

**Spectral clustering.** Given a similarity matrix $S$, compute the eigenvectors of $S$. The signs of the entries of the dominant eigenvector give a partition into two clusters. Generalises to $k$ clusters using $k$ eigenvectors.

**Principal component analysis.** The principal components are the eigenvectors of the covariance matrix. The projection onto the top $k$ gives the best $k$-dimensional representation of the data.

**Kernel PCA.** The principal components of the kernel matrix (rather than the covariance matrix). Used for nonlinear dimensionality reduction.

**Singular spectrum analysis.** Decompose a time series using the SVD of a trajectory matrix. The leading components give the dominant trends.

**The Laplacian matrix.** For a graph, the matrix $L = D - A$ (degree minus adjacency). Eigenvalues are non-negative; the second-smallest eigenvalue is the *algebraic connectivity*; the Fiedler eigenvector gives a bipartition.

**Vibration of a string.** The Laplacian on $[0, L]$ with boundary conditions $u(0) = u(L) = 0$ has eigenvalues $\lambda_n = (n \pi/L)^2$ and eigenfunctions $\sin(n \pi x/L)$. The frequencies are $\omega_n = n \pi c/L$ for wave speed $c$.

**Schrödinger equation in a box.** The same Laplacian, but with $V = 0$ inside. Eigenvalues $E_n = \hbar^2 (n \pi/L)^2/(2m)$. The energy levels of a particle in a box.

**Hydrogen atom.** The Coulomb potential in 3D. Eigenvalues $E_n = -13.6\text{ eV}/n^2$. Eigenfunctions are products of radial functions and spherical harmonics.

**Variational principle.** For a self-adjoint operator $H$ with lowest eigenvalue $E_0$, the Rayleigh quotient gives $E_0 = \min_{\psi} \langle \psi | H | \psi \rangle / \langle \psi | \psi \rangle$. Used in density functional theory and in many numerical methods.

**Rayleigh quotient.** $R(A, x) = (x^* A x)/(x^* x)$. For a self-adjoint $A$, $R$ takes values between the smallest and largest eigenvalues. The minimiser is the eigenvector for the smallest eigenvalue.

**Lanczos algorithm.** For a symmetric matrix, the Lanczos iteration produces a tridiagonal matrix $T$ similar to $A$. The eigenvalues of $T$ (cheap to compute) approximate those of $A$. Used in large-scale problems.

**Inverse iteration.** To find the eigenvector of $A$ for the eigenvalue nearest $\mu$, apply $(A - \mu I)^{-1}$ repeatedly to a random vector. The dominant eigenvector of $(A - \mu I)^{-1}$ is the desired eigenvector. Used in practice for accuracy.

**Shift-invert mode.** Compute the eigenvalues of $(A - \mu I)^{-1}$ to find the eigenvalues of $A$ nearest $\mu$.

**Rayleigh quotient iteration.** Each step: compute the Rayleigh quotient $R = R(A, x)$, then apply $(A - R I)^{-1}$ to $x$. Cubic convergence.

**Sturm sequences.** For symmetric tridiagonal matrices, the number of eigenvalues less than a given $\mu$ can be computed from the signs of the leading principal minors. Used in bisection algorithms for eigenvalues.

**Lanczos with reorthogonalisation.** For higher accuracy, reorthogonalise the Lanczos vectors against each other. Recovers the full set of eigenvalues.

**Davidson algorithm.** For large sparse matrices (e.g. from quantum chemistry), the Davidson algorithm builds a subspace of correction vectors and diagonalises the projected matrix. Converges to the lowest few eigenvalues.

**Filter diagonalisation.** Apply a polynomial in $A$ that emphasises a region of the spectrum, then diagonalise. Used in quantum chemistry to find eigenvalues in a specific energy range.

**Why diagonalisation matters.** Once a matrix is diagonal, all the standard operations (powers, exponentials, functions) become trivial. The eigenvalues and eigenvectors are the natural language for linear operators.

**The geometry of eigenvectors.** Eigenvectors are the "characteristic directions" of an operator — the directions in which the operator acts by simple scaling. In these directions, the operator's action is simple; in others, it is more complex.

**Eigenspaces and invariant subspaces.** Each eigenspace $\ker(A - \lambda I)$ is an invariant subspace ($A$ maps it to itself). Decomposing $V$ into eigenspaces is the simplest decomposition of an operator.

**The Cayley–Hamilton trick.** To compute $f(A)$ for any function $f$ (analytic), reduce $f$ modulo the minimal polynomial of $A$. Then $f(A) = c_0 I + c_1 A + \cdots + c_{n-1} A^{n-1}$, a polynomial in $A$ of degree $< n$. Efficient for large $n$.

**Diagonalisability and minimal polynomial.** $A$ is diagonalisable iff the minimal polynomial has no repeated roots: $m(\lambda) = \prod (x - \lambda_i)$ with the $\lambda_i$ distinct. Equivalently, $A$ has a basis of eigenvectors.

**Simultaneous diagonalisation.** Two commuting diagonalisable operators can be simultaneously diagonalised (in a common eigenbasis). Important in physics: commuting observables share eigenstates (the Heisenberg picture).

**Degeneracy.** Multiple eigenvectors with the same eigenvalue. The eigenspace can be any orthonormal basis (for the eigenvalue). The degeneracy is the dimension of the eigenspace.

**Lifting degeneracy.** A perturbation $A + \epsilon B$ generally splits a degenerate eigenvalue (by $\epsilon$ to first order in degenerate perturbation theory). The new eigenstates are determined by diagonalising $B$ within the degenerate subspace.

**Examples of diagonalisation.**
- $A = \begin{pmatrix} 1 & 2 \\ 2 & 1 \end{pmatrix}$. Eigenvalues $3, -1$. $P = (1/\sqrt{2}) \begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}$ (orthonormal columns). $D = P^T A P = \begin{pmatrix} 3 & 0 \\ 0 & -1 \end{pmatrix}$.
- $A = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$ (over $\mathbb{C}$). Eigenvalues $\pm i$. $P = (1/\sqrt{2}) \begin{pmatrix} 1 & 1 \\ -i & i \end{pmatrix}$. $D = \begin{pmatrix} i & 0 \\ 0 & -i \end{pmatrix}$.

**Computing $A^{10}$.** For $A = P D P^{-1}$, $A^{10} = P D^{10} P^{-1}$, with $D^{10} = \text{diag}(3^{10}, (-1)^{10}) = \text{diag}(59049, 1)$. $A^{10} = (1/2) \begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix} \begin{pmatrix} 59049 & 0 \\ 0 & 1 \end{pmatrix} \begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix} = (1/2) \begin{pmatrix} 59050 & 59048 \\ 59048 & 59050 \end{pmatrix}$.

**Powers of a defective matrix.** If $A$ is not diagonalisable but has a Jordan form $A = P J P^{-1}$, then $A^n = P J^n P^{-1}$, and the Jordan blocks are $J_k(\lambda)^n$, computed using binomial expansion.

**Functional calculus.** For a function $f$ defined on the spectrum of $A$ and a diagonalisable $A = P D P^{-1}$, $f(A) = P f(D) P^{-1}$, where $f(D) = \text{diag}(f(\lambda_i))$. For non-diagonalisable, use the holomorphic functional calculus (contour integral): $f(A) = (1/2\pi i) \oint f(z) (z I - A)^{-1} dz$.

**Stability of $e^{A t}$.** $e^{A t}$ is bounded as $t \to \infty$ iff all eigenvalues of $A$ have non-positive real part, with those having zero real part being non-defective. (Lyapunov's theorem.)

**Time-evolution operator.** $U(t) = e^{-i H t/\hbar}$ for a Hamiltonian $H$. The evolution of a state is $|\psi(t)\rangle = U(t) |\psi(0)\rangle$. Unitarity preserves probability.

**Adiabatic theorem.** If $H(t)$ varies slowly, a state that starts in the $n$-th eigenstate of $H(0)$ stays in the $n$-th eigenstate of $H(t)$ (no transitions). Important for the quantum adiabatic theorem, Berry phase, and quantum annealing.

**Berry phase.** For a cyclic adiabatic evolution, the state acquires a geometric phase $\gamma = i \oint \langle \psi | d \psi \rangle$. Independent of the time; depends only on the path in parameter space. Topological consequences.

**Algebraic and geometric multiplicities.** Algebraic: multiplicity of $\lambda$ as a root of the characteristic polynomial. Geometric: $\dim \ker(A - \lambda I)$. Geometric $\le$ algebraic. If geometric = algebraic for all $\lambda$, $A$ is diagonalisable.

**The Hamiltonian in classical mechanics.** The Hamiltonian $H(q, p) = p^2/(2m) + V(q)$ is a function, not an operator. In the Schrödinger picture, it becomes an operator (multiplication by $V(q)$ plus the kinetic operator).

**The transfer matrix.** For a 1D quantum system, the transfer matrix $M$ propagates the wavefunction from one side to the other. The transmission probability is $|t|^2 = 1/|M_{22}|^2$. Used for tunnelling, resonant tunnelling, and the Kronig–Penney model.

**Why all this matters.** Eigenvalues and eigenvectors are the most important concept in linear algebra and its applications. The spectral theorem for symmetric matrices is the foundation of quantum mechanics, of principal component analysis, of vibration analysis, and of many other areas.

## Key Ideas
- Eigenvalue equation: $A v = \lambda v$.
- Characteristic polynomial: $p(\lambda) = \det(A - \lambda I)$.
- Diagonalisation: $A = P D P^{-1}$ iff geometric multiplicities = algebraic for all eigenvalues.
- Spectral theorem: symmetric = orthogonally diagonalisable; normal = unitarily diagonalisable.
- Matrix functions: $A = P D P^{-1} \Rightarrow f(A) = P f(D) P^{-1}$.

## Worked Examples
**Example 1 — Eigenvalues of a $2 \times 2$.** $A = \begin{pmatrix} 1 & 2 \\ 2 & 1 \end{pmatrix}$. $p(\lambda) = (1 - \lambda)^2 - 4 = \lambda^2 - 2 \lambda - 3 = (\lambda - 3)(\lambda + 1)$. Eigenvalues $3, -1$. Eigenvectors: $(1, 1)^T$ and $(1, -1)^T$. ✓

**Example 2 — Diagonalisation of a $3 \times 3$.** $A = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 2 & 1 \\ 0 & 1 & 2 \end{pmatrix}$. Lower block has eigenvalues $1, 3$, eigenvectors $(1, 0)^T, (0, 1)^T$. So eigenvalues $1, 1, 3$. $A$ is diagonalisable? The $1$-eigenspace is 2D (spanned by $(1, 0, 0)$ and $(0, 1, -1)$). $A = \text{diag}(1, 1, 3)$ with $P$ having these as columns.

**Example 3 — Powers of a matrix.** $A = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$ (Jordan block, defective). $A^n = \begin{pmatrix} 1 & n \\ 0 & 1 \end{pmatrix}$. So $A^{100} = \begin{pmatrix} 1 & 100 \\ 0 & 1 \end{pmatrix}$. Notice that the off-diagonal grows linearly — not a typical power.

**Example 4 — Matrix exponential.** $A = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$ (rotation by $90°$). Eigenvalues $\pm i$. $A^2 = -I$, $A^3 = -A$, $A^4 = I$. $e^{A t} = I + A t + A^2 t^2/2 + \ldots = (1 - t^2/2 + t^4/24 - \ldots) I + (t - t^3/6 + \ldots) A = \cos(t) I + \sin(t) A = \begin{pmatrix} \cos t & -\sin t \\ \sin t & \cos t \end{pmatrix}$. ✓ (Rotation by $t$.)

**Example 5 — Coupled oscillators.** $A = \begin{pmatrix} 2 & -1 \\ -1 & 2 \end{pmatrix} k/m$. Eigenvalues $k/m, 3 k/m$. Eigenvectors $(1, 1)$ (in-phase mode, frequency $\omega_1 = \sqrt{k/m}$) and $(1, -1)$ (out-of-phase mode, frequency $\omega_2 = \sqrt{3 k/m}$).

**Example 6 — Hydrogen atom eigenvalues.** $E_n = -13.6\text{ eV}/n^2$. $E_1 = -13.6\text{ eV}$ (ground), $E_2 = -3.4\text{ eV}$, $E_3 = -1.51\text{ eV}$, ... Converging to $0$ (the ionisation threshold) as $n \to \infty$. Degeneracy $n^2$.

## Common Misconceptions
- **"Every matrix has real eigenvalues."** Only symmetric (and more generally, normal) ones do.
- **"Every matrix is diagonalisable."** No — defective matrices (like the Jordan block) are not.
- **"Eigenvectors are unique."** No — for a degenerate eigenvalue, any basis of the eigenspace is an eigenvector set.
- **"The spectral theorem applies to all matrices."** Only to self-adjoint (or normal) ones. General matrices have the Jordan form, not a spectral decomposition.

## Connections
Eigenvalues are everywhere. They determine the natural frequencies of vibration, the energy levels of quantum systems, the principal moments of inertia, the growth rates of populations, the convergence of Markov chains, and the principal components of data. The spectral theorem is the cornerstone of operator theory.

## Quick Check
1. Define eigenvalue and eigenvector.
2. State the characteristic polynomial.
3. When is a matrix diagonalisable?
4. State the spectral theorem.
5. What is the Jordan form?

## Takeaway
- $A v = \lambda v$: eigenvalue, eigenvector.
- $p(\lambda) = \det(A - \lambda I)$: characteristic polynomial.
- Diagonalisable iff minimal polynomial has distinct roots.
- Spectral theorem: self-adjoint = orthogonally diagonalisable.
- $A = P D P^{-1} \Rightarrow f(A) = P f(D) P^{-1}$ for analytic $f$.
