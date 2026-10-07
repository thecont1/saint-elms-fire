***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-6
semesterName: Semester 6
subjectId: physics
subjectName: Physics
courseId: advanced-quantum-mechanics
courseName: Advanced Quantum Mechanics (Physics Option C)
moduleId: advanced-quantum-mechanics-module-1
moduleName: Dirac Formalism and Quantum Dynamics
lessonId: advanced-quantum-mechanics-m1-l1
lessonName: Hilbert Space, Bra-Ket Notation and Operators
lessonNumber: 1
moduleNumber: 1
semesterNumber: 6
difficulty: intermediate
estimatedStudyMinutes: 55
releaseOrder: 1
prerequisites:
  - introduction-to-quantum-mechanics-m3-l1
  - linear-algebra-m2-l3
learningObjectives:
  - Define a Hilbert space and translate between wavefunctions, abstract kets $|\psi\rangle$ and column vectors in a chosen basis.
  - Manipulate bras, kets, inner products, projectors and the completeness relation $\sum_n |n\rangle\langle n| = \hat{1}$ in discrete and continuous bases.
  - Classify operators as Hermitian, unitary or projection operators and state the spectral properties of each.
  - Construct the matrix representation of an operator in a given basis and carry out a change of basis by a unitary transformation.
concepts:
  - Hilbert space
  - Bra-ket notation
  - Hermitian operator
  - Unitary operator
  - Completeness relation
  - Matrix representation of operators
  - Position and momentum representations
tags:
  - physics
  - advanced-quantum-mechanics
  - dirac-formalism
  - hilbert-space
sourceType: authored-courseware
status: in-review
assessmentHints:
  - conceptual
  - derivation
  - problem-solving
  - short-answer
***

# Hilbert Space, Bra-Ket Notation and Operators

## Overview

Introductory quantum mechanics uses wavefunctions $\psi(x)$ and differential operators, which suffice in one dimension but become clumsy once spin, angular-momentum coupling or perturbation theory appear. Dirac's formalism replaces the wavefunction by an abstract ket $|\psi\rangle$ in a complex inner-product (Hilbert) space. Observables become Hermitian operators, and the wavefunction is recovered as the components of the ket in the position basis. This lesson sets up the machinery: kets and bras, inner products, bases and completeness, Hermitian and unitary operators, projectors, and matrix representations, which are Heisenberg's matrix mechanics. The payoff: every quantum problem becomes linear algebra, whether the space is two-dimensional (spin-1/2) or infinite-dimensional (a particle on a line).

## Learning Path

- **What you should already know**: operators, eigenvalues and commutators in wavefunction language (introduction-to-quantum-mechanics Lesson m3-l1); eigenvectors, diagonalisation, inner products and orthogonality (linear-algebra Lessons m2-l2 and m2-l3).
- **What this lesson adds**: the abstract Hilbert space, bra-ket notation, completeness, the classification of operators, matrix representations, unitary changes of basis, and the position and momentum representations.
- **What later lessons this will unlock**: the postulates of measurement and the pictures of dynamics (Lesson m1-l2), the algebraic harmonic oscillator (Lesson m1-l3), angular momentum and spin matrices (Lesson m2-l1), and the matrix form of perturbation theory (Lesson m3-l1).

## Core Explanation

### State vectors and the Hilbert space

A **Hilbert space** $\mathcal{H}$ is a complex inner-product space that is complete in the norm the inner product defines. The elements of $\mathcal{H}$ are **kets**, written $|\psi\rangle$. Linear combinations $a|\psi\rangle + b|\phi\rangle$ with complex $a, b$ are again kets: the superposition principle. A physical state is a **ray**, the set of kets $c|\psi\rangle$ for all non-zero complex $c$; normalising to $\langle\psi|\psi\rangle = 1$ leaves only an overall phase undetermined.

To every ket corresponds a **bra** $\langle\psi|$, a linear functional mapping kets to complex numbers. The bra $\langle\phi|$ acting on $|\psi\rangle$ gives the **inner product** $\langle\phi|\psi\rangle$, with

$$\langle\phi|\psi\rangle = \langle\psi|\phi\rangle^*, \qquad \langle\phi|a\psi_1 + b\psi_2\rangle = a\langle\phi|\psi_1\rangle + b\langle\phi|\psi_2\rangle, \qquad \langle\psi|\psi\rangle \geq 0.$$

The ket–bra correspondence is antilinear: the bra of $a|\psi\rangle$ is $a^*\langle\psi|$. For a particle on a line the inner product is $\int \phi^*(x)\psi(x)\,dx$; for spin-1/2 it is $\phi^\dagger\psi$ of two-component columns. The notation is identical in both cases, which is the point.

### Orthonormal bases and completeness

An **orthonormal basis** $\{|n\rangle\}$ has $\langle m|n\rangle = \delta_{mn}$ and allows every ket to be expanded as

$$|\psi\rangle = \sum_n c_n |n\rangle, \qquad c_n = \langle n|\psi\rangle.$$

Substituting gives $|\psi\rangle = \sum_n |n\rangle\langle n|\psi\rangle$ for every $|\psi\rangle$, so

$$\sum_n |n\rangle\langle n| = \hat{1}.$$

This **completeness relation** (resolution of the identity) is the most useful identity in the formalism: inserting it between any two symbols converts an abstract expression into components. The object $|n\rangle\langle n|$ is a **projection operator** $\hat P_n$ onto the direction $|n\rangle$; it satisfies $\hat P_n^2 = \hat P_n$ and $\hat P_n^\dagger = \hat P_n$.

For a continuous basis such as the position eigenkets $|x\rangle$, the Kronecker delta becomes a Dirac delta and the sum an integral:

$$\langle x|x'\rangle = \delta(x - x'), \qquad \int_{-\infty}^{\infty} |x\rangle\langle x|\,dx = \hat 1.$$

The **wavefunction** is then the component of the state along the position basis, $\psi(x) = \langle x|\psi\rangle$, and $\langle\psi|\psi\rangle = \int |\psi(x)|^2 dx = 1$. The eigenkets $|x\rangle$ are not normalisable and strictly lie outside $\mathcal H$, a convenient idealisation like plane waves.

### Linear operators and their adjoints

A **linear operator** $\hat A$ maps kets to kets linearly. The **adjoint** $\hat A^\dagger$ is defined by

$$\langle\phi|\hat A^\dagger|\psi\rangle = \langle\psi|\hat A|\phi\rangle^*$$

for all $|\phi\rangle, |\psi\rangle$; equivalently, the bra of $\hat A|\psi\rangle$ is $\langle\psi|\hat A^\dagger$. The adjoint reverses products, $(\hat A\hat B)^\dagger = \hat B^\dagger\hat A^\dagger$, and $(c\hat A)^\dagger = c^*\hat A^\dagger$. Three classes of operator carry the physics:

- A **Hermitian** (self-adjoint) operator satisfies $\hat A^\dagger = \hat A$. Its eigenvalues are real and eigenkets belonging to distinct eigenvalues are orthogonal. Proof: if $\hat A|a\rangle = a|a\rangle$ and $\hat A|a'\rangle = a'|a'\rangle$ then $\langle a'|\hat A|a\rangle = a\langle a'|a\rangle = a'^*\langle a'|a\rangle$. Setting $a' = a$ gives $a = a^*$; with $a \neq a'$ it gives $\langle a'|a\rangle = 0$. Observables are Hermitian operators with complete eigenbases.
- A **unitary** operator satisfies $\hat U^\dagger\hat U = \hat U\hat U^\dagger = \hat 1$. It preserves inner products, so it maps orthonormal bases to orthonormal bases; its eigenvalues have unit modulus. Time evolution, rotations, translations and changes of basis are all unitary. If $\hat H$ is Hermitian then $\hat U = e^{-i\hat H t/\hbar}$ is unitary, since $\hat U^\dagger = e^{+i\hat H t/\hbar}$.
- A **projection** operator satisfies $\hat P^2 = \hat P = \hat P^\dagger$; its eigenvalues are 0 and 1, and measurement (Lesson m1-l2) is described by projectors.

The **commutator** $[\hat A, \hat B] = \hat A\hat B - \hat B\hat A$ measures incompatibility: two Hermitian operators share a complete set of eigenkets if and only if they commute. The fundamental commutator of a single particle is $[\hat x, \hat p] = i\hbar$.

### Matrix representation and matrix mechanics

Insert the completeness relation on both sides of an operator:

$$\hat A = \hat 1\,\hat A\,\hat 1 = \sum_{m,n} |m\rangle\langle m|\hat A|n\rangle\langle n| = \sum_{m,n} A_{mn}|m\rangle\langle n|.$$

The complex numbers $A_{mn} = \langle m|\hat A|n\rangle$ are the **matrix elements** of $\hat A$ in the basis $\{|n\rangle\}$. The ket $\hat A|\psi\rangle$ has components $\sum_n A_{mn}c_n$; the product $\hat A\hat B$ has matrix $\sum_k A_{mk}B_{kn}$ and the adjoint $(A^\dagger)_{mn} = A_{nm}^*$, so Hermitian operators are Hermitian matrices. Eigenvalue problems become $\det(A - a\,\mathbb 1) = 0$. This is Heisenberg's **matrix mechanics** of 1925; Schrödinger's wave mechanics is the same theory written in the continuous position basis, where $\langle x|\hat A|x'\rangle$ is a kernel and matrix multiplication becomes integration.

In its eigenbasis a Hermitian operator is diagonal, $\hat A = \sum_a a|a\rangle\langle a|$ (the **spectral decomposition**), and functions of it are defined by $f(\hat A) = \sum_a f(a)|a\rangle\langle a|$.

### Change of basis

Let $\{|n\rangle\}$ and $\{|\alpha\rangle\}$ be two orthonormal bases. The components of a ket transform as

$$c_\alpha = \langle\alpha|\psi\rangle = \sum_n \langle\alpha|n\rangle\langle n|\psi\rangle = \sum_n U_{\alpha n}c_n, \qquad U_{\alpha n} = \langle\alpha|n\rangle.$$

The matrix $U$ is unitary, since $\sum_n U_{\alpha n}U^*_{\beta n} = \langle\alpha|\beta\rangle = \delta_{\alpha\beta}$. The matrix of an operator transforms as $A' = UAU^\dagger$, a unitary similarity transformation, which leaves the trace $\operatorname{Tr}\hat A = \sum_n\langle n|\hat A|n\rangle$, determinant and eigenvalues unchanged, since these belong to $\hat A$, not to the basis.

### The position and momentum representations

The momentum eigenkets $|p\rangle$ satisfy $\hat p|p\rangle = p|p\rangle$ and $\langle p|p'\rangle = \delta(p - p')$. Their position-space wavefunction solves $-i\hbar\,\partial_x\langle x|p\rangle = p\langle x|p\rangle$, giving the plane wave

$$\langle x|p\rangle = \frac{1}{\sqrt{2\pi\hbar}}\,e^{ipx/\hbar}.$$

The normalisation follows from $\int\langle p|x\rangle\langle x|p'\rangle dx = \delta(p - p')$ and using $\int e^{i(p'-p)x/\hbar}dx = 2\pi\hbar\,\delta(p - p')$. Inserting completeness gives the momentum-space wavefunction as a Fourier transform,

$$\tilde\psi(p) = \langle p|\psi\rangle = \int\langle p|x\rangle\langle x|\psi\rangle dx = \frac{1}{\sqrt{2\pi\hbar}}\int e^{-ipx/\hbar}\psi(x)\,dx,$$

so the two representations are related by a unitary (Fourier) transformation and carry identical information. In the momentum representation $\hat p$ multiplies and $\hat x$ acts as $i\hbar\,\partial_p$, with the same $[\hat x,\hat p] = i\hbar$. Discretising the line turns the kinetic-energy kernel into a tridiagonal matrix, the starting point of advanced-quantum-mechanics-lab Lesson m1-l1.

## Key Ideas

- **Kets, bras and rays**: a state is a ray in a complex Hilbert space; the wavefunction $\psi(x) = \langle x|\psi\rangle$ is one set of components among many.
- **Completeness**: $\sum_n|n\rangle\langle n| = \hat 1$ converts abstract expressions into components in any basis.
- **Hermitian operators** have real eigenvalues and orthogonal eigenkets; they represent observables and admit the spectral decomposition $\hat A = \sum_a a|a\rangle\langle a|$.
- **Unitary operators** preserve inner products; they describe time evolution, symmetries and changes of basis.
- **Matrix mechanics**: $A_{mn} = \langle m|\hat A|n\rangle$; operator products become matrix products and eigenvalue equations become secular determinants.
- **Change of basis** is a unitary similarity transformation $A' = UAU^\dagger$; traces and eigenvalues are invariant.
- **Position and momentum representations** are related by the Fourier transform, with $\langle x|p\rangle = e^{ipx/\hbar}/\sqrt{2\pi\hbar}$.

## Worked Examples

### Example 1 — Hermiticity of the momentum operator

Show that $\hat p = -i\hbar\,d/dx$ is Hermitian on the space of square-integrable functions on the line, and that $d/dx$ alone is not.

**Solution.** We need $\langle\phi|\hat p\psi\rangle = \langle\hat p\phi|\psi\rangle$. Integrating by parts,

$$\langle\phi|\hat p\psi\rangle = \int\phi^*\left(-i\hbar\frac{d\psi}{dx}\right)dx = \left[-i\hbar\,\phi^*\psi\right]_{-\infty}^{\infty} + i\hbar\int\frac{d\phi^*}{dx}\psi\,dx.$$

The boundary term vanishes because square-integrable functions decay at infinity. The remaining integral is $\int\left(-i\hbar\,d\phi/dx\right)^*\psi\,dx = \langle\hat p\phi|\psi\rangle$, so $\hat p$ is Hermitian. For $\hat D = d/dx$ the same steps give $\hat D^\dagger = -\hat D$: the derivative is anti-Hermitian, and the factor $-i$ makes it an observable.

### Example 2 — Matrix representation and eigenvalues of a two-level operator

A two-level system has basis kets $|1\rangle, |2\rangle$ and an operator $\hat A = \epsilon\left(|1\rangle\langle 1| - |2\rangle\langle 2|\right) + \Delta\left(|1\rangle\langle 2| + |2\rangle\langle 1|\right)$ with $\epsilon = 3$ eV and $\Delta = 4$ eV. Write the matrix, verify Hermiticity, and find the eigenvalues and normalised eigenkets.

**Solution.** The matrix elements $A_{mn} = \langle m|\hat A|n\rangle$ give

$$A = \begin{pmatrix}\epsilon & \Delta\\ \Delta & -\epsilon\end{pmatrix} = \begin{pmatrix}3 & 4\\ 4 & -3\end{pmatrix}\ \text{eV}.$$

It is real symmetric, hence Hermitian. The secular equation $(3-a)(-3-a) - 16 = a^2 - 25 = 0$ gives $a = \pm 5$ eV, which is $\pm\sqrt{\epsilon^2 + \Delta^2}$ in general. For $a = +5$ eV, $-2c_1 + 4c_2 = 0$ gives $|+\rangle = (2|1\rangle + |2\rangle)/\sqrt 5$; for $a = -5$ eV, $8c_1 + 4c_2 = 0$ gives $|-\rangle = (|1\rangle - 2|2\rangle)/\sqrt 5$. Check: $\langle +|-\rangle = (2 - 2)/5 = 0$ and $\operatorname{Tr}A = 0 = 5 + (-5)$.

### Example 3 — Momentum-space wavefunction of a Gaussian

A particle has the normalised position wavefunction $\psi(x) = (\pi a^2)^{-1/4}e^{-x^2/2a^2}$ with $a = 0.10$ nm. Find $\tilde\psi(p)$ and the root-mean-square momentum.

**Solution.** Using $\tilde\psi(p) = (2\pi\hbar)^{-1/2}\int e^{-ipx/\hbar}\psi(x)dx$ and the Gaussian integral $\int e^{-x^2/2a^2 - ipx/\hbar}dx = a\sqrt{2\pi}\,e^{-a^2p^2/2\hbar^2}$,

$$\tilde\psi(p) = \left(\frac{a^2}{\pi\hbar^2}\right)^{1/4}e^{-a^2p^2/2\hbar^2}.$$

This is a normalised Gaussian with $\langle p\rangle = 0$ and $\langle p^2\rangle = \hbar^2/2a^2$. Numerically, $p_{\rm rms} = \hbar/(a\sqrt2) = 1.055\times10^{-34}/(1.0\times10^{-10}\times1.414) = 7.5\times10^{-25}$ kg m s$^{-1}$. Since $\langle x^2\rangle = a^2/2$, $\Delta x\,\Delta p = \hbar/2$: the Gaussian saturates the uncertainty bound, as the oscillator ground state will in Lesson m1-l3.

## Common Misconceptions

- **"The wavefunction is the state."** The wavefunction $\psi(x)$ is one representation of the state, its position-basis components; the same state has a momentum-space wavefunction, an energy-basis column vector, and so on. Spin states have no wavefunction in $x$ at all.
- **"Any operator with real expectation values is an observable."** Real expectation values for all states imply Hermiticity, but the eigenkets must also span the space, and for unbounded operators Hermiticity can fail through the boundary term of Example 1.
- **"$\langle\phi|\psi\rangle$ and $\langle\psi|\phi\rangle$ are equal."** They are complex conjugates; only the transition probability $|\langle\phi|\psi\rangle|^2$ is symmetric.
- **"Eigenvalues change when you change basis."** A unitary change of basis is a similarity transformation; eigenvalues, trace and determinant are invariant, only components change.

## Connections

- The lesson is linear algebra in disguise: inner-product spaces, Hermitian and unitary matrices, similarity transformations and spectral decompositions are the content of linear-algebra Lessons m2-l2, m2-l3 and m3-l3; the infinite-dimensional case adds convergence issues studied in real-analysis.
- The Fourier relation between position and momentum representations is the transform of waves-and-optics diffraction (the far-field pattern transforms the aperture) and of differential-equations for linear ODEs.
- The matrix representation of operators on a discretised line underlies the numerical eigenvalue methods of advanced-quantum-mechanics-lab Lesson m1-l1 and numerical-methods, where the Hamiltonian becomes a large sparse Hermitian matrix.
- Two-level matrices such as that of Example 2 describe spin-1/2 in a magnetic field (Lesson m2-l1), the ammonia maser, neutrino oscillations and the qubit; the splitting $2\sqrt{\epsilon^2 + \Delta^2}$ is the general avoided-crossing formula.
- Unitary operators and their group properties connect to isospin symmetry in nuclear-physics and to translation symmetry and Bloch's theorem in solid-state-physics.

## Quick Check

1. State the completeness relation for a discrete orthonormal basis and for the position basis, and use it to express $\langle\phi|\psi\rangle$ as an integral over $x$.
2. Prove that the eigenvalues of a unitary operator have unit modulus.
3. If $\hat A$ and $\hat B$ are Hermitian, is $\hat A\hat B$ Hermitian? Under what condition? Show that $i[\hat A, \hat B]$ is always Hermitian.
4. A ket has components $(1, i)/\sqrt 2$ in the basis $\{|1\rangle, |2\rangle\}$. Find its components in the basis $|\pm\rangle = (|1\rangle \pm |2\rangle)/\sqrt 2$ and verify that the norm is unchanged.
5. Explain why the trace of an operator is independent of the basis in which it is computed, and evaluate $\operatorname{Tr}(|\psi\rangle\langle\phi|)$.

## Takeaway

- Quantum states are rays in a Hilbert space; bra-ket notation treats wavefunctions, spinors and energy eigenstates with one set of rules.
- The completeness relation is the bridge between abstract operators and concrete matrices or integral kernels.
- Observables are Hermitian operators; symmetries and evolution are unitary operators; measurements are projectors.
- Matrix and wave mechanics are the same theory in different bases, related by unitary transformations that leave predictions invariant.
- The position and momentum representations are Fourier transforms of one another, the formal origin of the uncertainty principle.
