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
lessonId: linear-algebra-m2-l2
lessonName: Inner Product, Norms and Orthogonality
lessonNumber: 5
moduleNumber: 2
semesterNumber: 2
difficulty: intermediate
estimatedStudyMinutes: 55
releaseOrder: 5
prerequisites:
  - linear-algebra-m2-l1
learningObjectives:
  - Define an inner product and verify the axioms.
  - Define the norm induced by an inner product.
  - Apply the Cauchy–Schwarz inequality.
  - Construct and use orthonormal bases (Gram–Schmidt).
concepts:
  - Inner product
  - Induced norm
  - Orthogonality
  - Orthonormal basis
  - Gram–Schmidt process
  - Cauchy–Schwarz inequality
tags:
  - mathematics
  - algebra
  - inner-product
sourceType: authored-courseware
assessmentHints:
  - derivation
  - problem-solving
  - conceptual
***

# Inner Product, Norms and Orthogonality

## Overview
An *inner product* generalises the dot product of $\mathbb{R}^n$ to arbitrary vector spaces. It introduces geometry: length (norm), angle, orthogonality, and projection. The Cauchy–Schwarz inequality bounds the inner product in terms of the norms. The Gram–Schmidt process constructs an orthonormal basis from any basis. Inner-product spaces (and their completions, Hilbert spaces) are the natural setting for quantum mechanics, Fourier analysis, and numerical linear algebra.

## Learning Path
- What you should already know: vector spaces, basis, dimension, linear maps.
- What this lesson adds: inner products, norms, orthogonality, the Gram–Schmidt process.
- What it unlocks: the spectral theorem, projections, Hilbert spaces, quantum mechanics.

## Core Explanation
**Inner product.** A function $\langle \cdot, \cdot \rangle: V \times V \to F$ (where $F = \mathbb{R}$ or $\mathbb{C}$) that is:
- Conjugate symmetric: $\langle u, v \rangle = \overline{\langle v, u \rangle}$ (overline is complex conjugate; for $\mathbb{R}$, just $\langle u, v \rangle = \langle v, u \rangle$).
- Linear in the first argument: $\langle a u_1 + b u_2, v \rangle = a \langle u_1, v \rangle + b \langle u_2, v \rangle$.
- Positive definite: $\langle v, v \rangle > 0$ for $v \ne 0$.

(Some authors take the inner product linear in the second argument; the convention matters but the theory is the same up to complex conjugation.)

**Examples of inner products.**
- $\mathbb{R}^n$: $\langle x, y \rangle = \sum_i x_i y_i$ (dot product).
- $\mathbb{C}^n$: $\langle x, y \rangle = \sum_i \bar{x}_i y_i$ (sesquilinear form).
- $C[a, b]$: $\langle f, g \rangle = \int_a^b \overline{f(x)} g(x) dx$.
- $L^2[a, b]$: same integral, with $L^2$ functions.
- $\ell^2$: $\langle x, y \rangle = \sum \bar{x}_n y_n$ (sum converges).

**Norms.** A *norm* on a vector space is a function $\|\cdot\|: V \to \mathbb{R}$ that is positive definite, homogeneous, and satisfies the triangle inequality. Every inner product induces a norm: $\|v\| = \sqrt{\langle v, v \rangle}$. The reverse is not true: there are norms that do not come from inner products (e.g. the $\ell^1$ and $L^1$ norms).

**Cauchy–Schwarz inequality.** $|\langle u, v \rangle| \le \|u\| \cdot \|v\|$, with equality iff $u$ and $v$ are linearly dependent. Proof: consider the polynomial $p(t) = \langle u + t v, u + t v \rangle = \|u\|^2 + 2 t \text{Re}\langle u, v \rangle + t^2 \|v\|^2 \ge 0$ for all real $t$. The discriminant is $\le 0$, giving the inequality. (For complex, use a different argument; the same result holds.)

**Geometric meaning.** Cauchy–Schwarz: $|\cos \theta| \le 1$, where $\theta$ is the "angle" between $u$ and $v$. Equality iff the vectors are parallel.

**Triangle inequality.** $\|u + v\| \le \|u\| + \|v\|$. Follows from Cauchy–Schwarz: $\|u + v\|^2 = \|u\|^2 + 2 \text{Re}\langle u, v \rangle + \|v\|^2 \le (\|u\| + \|v\|)^2$.

**Polarisation identity.** $\langle u, v \rangle = (1/4) (\|u + v\|^2 - \|u - v\|^2)$ (over $\mathbb{R}$); over $\mathbb{C}$, $\langle u, v \rangle = (1/4) (\|u + v\|^2 - \|u - v\|^2 + i \|u + i v\|^2 - i \|u - i v\|^2)$. Recovers the inner product from the norm.

**Parallelogram law.** $\|u + v\|^2 + \|u - v\|^2 = 2 \|u\|^2 + 2 \|v\|^2$. A norm satisfies this iff it comes from an inner product (in characteristic $\ne 2$).

**Orthogonality.** $u \perp v$ iff $\langle u, v \rangle = 0$. For non-zero vectors, this is equivalent to the angle being $90°$ (using $\cos\theta = \langle u, v \rangle/(\|u\|\|v\|)$).

**Orthogonal set.** A set $\{v_1, \ldots, v_n\}$ is orthogonal if $\langle v_i, v_j \rangle = 0$ for $i \ne j$. If in addition each $\|v_i\| = 1$, the set is *orthonormal*.

**Orthonormal basis.** A basis that is orthonormal: $\langle e_i, e_j \rangle = \delta_{ij}$. Every finite-dimensional inner-product space has an orthonormal basis (constructed by Gram–Schmidt from any basis).

**Coordinates in an orthonormal basis.** For an orthonormal basis $\{e_i\}$, the coordinates of $v$ are simply $\langle e_i, v \rangle$: $v = \sum_i \langle e_i, v \rangle e_i$. No matrix multiplication needed; the inner product does the work.

**Fourier expansion.** For an orthonormal basis of $L^2$ (e.g. sines and cosines, or the Fourier basis), the expansion of a function in the basis is $f = \sum \langle e_n, f \rangle e_n$. The coefficients are the Fourier coefficients.

**Parseval's identity.** $\|v\|^2 = \sum_i |\langle e_i, v \rangle|^2$ for an orthonormal basis. Expresses conservation of "length" (or energy) in the basis.

**Gram–Schmidt process.** Given a basis $v_1, \ldots, v_n$, construct an orthonormal basis:
$u_1 = v_1 / \|v_1\|$.
$u_2 = (v_2 - \langle u_1, v_2 \rangle u_1) / \|v_2 - \langle u_1, v_2 \rangle u_1\|$.
$\ldots$
$u_k = (v_k - \sum_{i < k} \langle u_i, v_k \rangle u_i) / \|v_k - \sum_{i < k} \langle u_i, v_k \rangle u_i\|$.

Each $u_k$ is the component of $v_k$ orthogonal to the previous $u_i$'s, normalised. The result is an orthonormal basis of $\text{span}(v_1, \ldots, v_n)$.

**QR decomposition.** Apply Gram–Schmidt to the columns of a matrix $A$. The result is $A = Q R$, where $Q$ has orthonormal columns and $R$ is upper triangular. Used in solving least-squares problems and in eigenvalue algorithms.

**Projection.** The projection of $v$ onto a subspace $W$ is the unique $w \in W$ such that $v - w \perp W$. Given an orthonormal basis $\{u_i\}$ of $W$, $w = \sum_i \langle u_i, v \rangle u_i$.

**Projection operator.** $P_W: V \to W$ defined by $P_W(v) = w$. $P_W^2 = P_W$ (idempotent) and $P_W^* = P_W$ (self-adjoint). The eigenvalues of $P_W$ are $0$ and $1$.

**Best approximation.** $w = P_W(v)$ is the closest vector in $W$ to $v$ (in the norm). Used in least-squares fitting, Fourier approximation, and the construction of orthogonal polynomials.

**Orthogonal complement.** $W^\perp = \{v : \langle v, w \rangle = 0 \text{ for all } w \in W\}$. A subspace. $V = W \oplus W^\perp$ for finite-dimensional $V$.

**Dimension formula.** $\dim W + \dim W^\perp = \dim V$.

**Hilbert space.** A complete inner-product space. $\mathbb{R}^n$, $\mathbb{C}^n$, $L^2$, $\ell^2$ are Hilbert spaces. The natural setting for quantum mechanics, Fourier analysis, and many numerical methods.

**Orthogonal polynomials.** Polynomials orthogonal with respect to a weight function on an interval. Legendre ($w = 1$ on $[-1, 1]$), Chebyshev ($w = 1/\sqrt{1 - x^2}$), Hermite ($w = e^{-x^2}$ on $\mathbb{R}$), Laguerre ($w = e^{-x}$ on $[0, \infty)$). Used in Gaussian quadrature, special functions, and the solution of differential equations.

**Legendre polynomials.** $P_n(x)$ orthogonal on $[-1, 1]$ with weight $1$. $P_0 = 1, P_1 = x, P_2 = (3 x^2 - 1)/2, P_3 = (5 x^3 - 3 x)/2, \ldots$. Used in electrostatics, quantum mechanics (angular part of hydrogen), and Gaussian quadrature.

**Chebyshev polynomials.** $T_n(\cos\theta) = \cos(n\theta)$. Orthogonal on $[-1, 1]$ with weight $1/\sqrt{1 - x^2}$. The polynomials that minimise the maximum of $|T_n(x)|$ on $[-1, 1]$. Used in Chebyshev interpolation, Chebyshev filters, and spectral methods.

**Hermite polynomials.** $H_n(x) = (-1)^n e^{x^2} d^n/dx^n (e^{-x^2})$. Orthogonal on $\mathbb{R}$ with weight $e^{-x^2}$. Eigenfunctions of the quantum harmonic oscillator. Used in Gaussian quadrature and in the physics of the harmonic oscillator.

**Laguerre polynomials.** $L_n(x) = (e^x/n!) d^n/dx^n (x^n e^{-x})$. Orthogonal on $[0, \infty)$ with weight $e^{-x}$. Used for the radial part of the hydrogen wavefunctions, and in Gaussian quadrature on $[0, \infty)$.

**Bessel's inequality.** For an orthonormal set $\{e_i\}$ (not necessarily a basis), $\sum_i |\langle e_i, v \rangle|^2 \le \|v\|^2$. Equality iff the set is a basis.

**Complete orthonormal set.** An orthonormal set that is a basis (every vector can be expanded). In a Hilbert space, this is equivalent to Parseval's identity holding for all $v$.

**Operator adjoint.** For a linear map $T: V \to W$ between inner-product spaces, the adjoint $T^*: W \to V$ is defined by $\langle T v, w \rangle_W = \langle v, T^* w \rangle_V$. The matrix of $T^*$ is the conjugate transpose of the matrix of $T$.

**Self-adjoint.** $T = T^*$. The eigenvalues are real; eigenvectors for distinct eigenvalues are orthogonal.

**Unitary.** $T T^* = T^* T = I$. Preserves inner products. The matrix is a unitary matrix.

**Normal.** $T T^* = T^* T$. The spectral theorem applies: a normal matrix is diagonalisable by a unitary.

**Spectral theorem (operator version).** A normal operator on a finite-dimensional inner-product space has an orthonormal basis of eigenvectors. The eigenvalues are real (for self-adjoint) or lie on the unit circle (for unitary).

**Positive definite.** $\langle T v, v \rangle > 0$ for all $v \ne 0$. The eigenvalues are positive.

**Positive operators.** $T$ is positive if $\langle T v, v \rangle \ge 0$ for all $v$. Equivalently, $T = T^*$ and all eigenvalues are $\ge 0$. Positive operators have unique positive square roots.

**Polar decomposition of operators.** $T = U P$ with $U$ unitary and $P$ positive. Always exists and is unique for invertible $T$. Analogous to the polar form of a complex number.

**Singular value decomposition (operator version).** $T = U \Sigma V^*$ with $U, V$ unitary and $\Sigma$ diagonal with non-negative entries. The SVD is the workhorse of numerical linear algebra.

**Adjoint of a composition.** $(T S)^* = S^* T^*$. So $(T^{-1})^* = (T^*)^{-1}$ for invertible $T$.

**Self-adjoint differential operators.** $L = -d^2/dx^2 + V(x)$ on $L^2(\mathbb{R})$ (or with boundary conditions) is self-adjoint (with appropriate domain). Its eigenfunctions are the quantum-mechanical energy eigenstates.

**The Laplacian.** $\nabla^2$ is a self-adjoint operator (with appropriate domain and boundary conditions). The eigenfunctions are the sines and cosines (in a box) or spherical harmonics (on a sphere).

**The Hamiltonian.** A self-adjoint operator in quantum mechanics. Its eigenvalues are the energy levels; its eigenfunctions are the stationary states.

**Spectral theory.** The study of operators via their spectra (eigenvalues, generalised eigenfunctions, continuous spectrum). The most refined part of operator theory.

**Why inner products matter.** Inner products give geometry: length, angle, orthogonality. They allow approximation, projection, and the spectral theorem. Quantum mechanics lives in inner-product spaces (Hilbert spaces).

**Best approximation theorem.** Let $W$ be a finite-dimensional subspace of an inner-product space. For any $v$, there is a unique $w \in W$ closest to $v$, given by the projection $P_W(v) = \sum \langle u_i, v \rangle u_i$ for any orthonormal basis of $W$.

**Fourier series as best approximation.** The Fourier series is the projection of $f$ onto the span of $\{1, \cos x, \sin x, \cos 2x, \sin 2x, \ldots\}$. The Fourier partial sums are the best approximations in the $L^2$ norm.

**Orthogonal projection.** The projection onto a subspace along its orthogonal complement. $P_W$ is self-adjoint and idempotent.

**Oblique projection.** A projection onto a subspace but not necessarily along the orthogonal complement. $P^2 = P$ but $P^* \ne P$ in general.

**The sign function.** A matrix function defined by the spectral theorem: $\text{sgn}(A) = U \text{sgn}(D) U^*$ for $A = U D U^*$. Used in signal processing.

**Polar coordinates on a vector space.** Not always possible (e.g. on infinite-dimensional spaces), but useful on subspaces.

**Cauchy–Schwarz in physics.** Uncertainty relations: $\Delta A \Delta B \ge \tfrac{1}{2} |\langle [A, B] \rangle|$. The same mathematical form as Cauchy–Schwarz, with the commutator in the role of the inner product.

**Quantum states as unit vectors.** A pure state is a unit vector in a Hilbert space. Observables are self-adjoint operators. Probabilities are given by $|\langle \psi | \phi \rangle|^2$.

**Born's rule.** The probability of measuring a system in state $|\psi\rangle$ to be in state $|\phi\rangle$ is $|\langle \psi | \phi \rangle|^2$. This is the inner product of the corresponding Hilbert space vectors.

**Time evolution in QM.** $|\psi(t)\rangle = U(t) |\psi(0)\rangle$ with $U(t) = e^{-i H t/\hbar}$ (unitary). The inner product is preserved in time (probability conservation).

**The Stern–Gerlach experiment.** A physical realisation of a quantum measurement. The spin states $|+\rangle, |-\rangle$ are orthogonal unit vectors; the apparatus projects the spin onto the chosen axis.

**Inner products in numerical analysis.** Least squares: minimise $\|A x - b\|^2$. The normal equations $A^T A x = A^T b$. The solution is $x = (A^T A)^{-1} A^T b$ (if $A$ has full column rank).

**Conditioning of the normal equations.** $A^T A$ is more ill-conditioned than $A$ ($\kappa(A^T A) = \kappa(A)^2$). Use QR or SVD for better stability.

**QR algorithm for eigenvalues.** Apply QR decomposition iteratively: $A_0 = A$, $A_k = Q_k R_k$ (QR), $A_{k+1} = R_k Q_k$. Under suitable conditions, $A_k$ converges to upper triangular (Schur form) with eigenvalues on the diagonal.

**Implicit $Q$ theorem.** The QR algorithm with shifts converges rapidly to the Schur form. The workhorse of numerical eigenvalue computation.

**Divide and conquer.** A faster eigenvalue algorithm for large matrices. Used in LAPACK.

**Lanczos algorithm.** For symmetric matrices, tridiagonalises by multiplying by vectors. Three-term recurrence. Gives the eigenvalues of the tridiagonal matrix (which are the same as the original).

**Arnoldi iteration.** For non-symmetric matrices, the analogue of Lanczos. Hessenberg form.

**The mathematics of quantum mechanics.** The framework is entirely inner-product spaces (Hilbert spaces), self-adjoint operators, and the spectral theorem. The time-evolution is unitary. The observables are self-adjoint.

## Key Ideas
- Inner product: sesquilinear, positive definite.
- Norm: $\|v\| = \sqrt{\langle v, v \rangle}$.
- Cauchy–Schwarz: $|\langle u, v \rangle| \le \|u\| \cdot \|v\|$.
- Gram–Schmidt: orthonormal basis from any basis.
- Spectral theorem: normal = diagonalisable by a unitary.

## Worked Examples
**Example 1 — Standard inner product on $\mathbb{R}^3$.** $\langle (1, 2, 3), (4, 5, 6) \rangle = 4 + 10 + 18 = 32$. Norms: $\|(1, 2, 3)\| = \sqrt{1 + 4 + 9} = \sqrt{14}$. $\|(4, 5, 6)\| = \sqrt{16 + 25 + 36} = \sqrt{77}$. Cauchy–Schwarz: $|32| \le \sqrt{14} \cdot \sqrt{77} = \sqrt{1078} \approx 32.8$. ✓

**Example 2 — Gram–Schmidt.** $v_1 = (1, 1, 0)$, $v_2 = (1, 0, 1)$, $v_3 = (0, 1, 1)$. $u_1 = (1, 1, 0)/\sqrt{2}$. $u_2 = (v_2 - \langle u_1, v_2 \rangle u_1)/\|v_2 - \langle u_1, v_2 \rangle u_1\|$. $\langle u_1, v_2 \rangle = 1/\sqrt{2}$. $v_2 - (1/\sqrt{2}) u_1 = (1, 0, 1) - (1/2)(1, 1, 0) = (1/2, -1/2, 1)$. Norm: $\sqrt{1/4 + 1/4 + 1} = \sqrt{3/2}$. $u_2 = (1/2, -1/2, 1)/\sqrt{3/2} = (1, -1, 2)/\sqrt{6}$. And $u_3$ involves the third vector; the calculation continues.

**Example 3 — Projection.** $V = \mathbb{R}^3$, $W = \text{span}\{(1, 1, 0), (1, 0, 1)\}$. Find the projection of $v = (1, 2, 3)$ onto $W$. Orthogonalise: $u_1 = (1, 1, 0)/\sqrt{2}$. $u_2 = (1, -1, 2)/\sqrt{6}$. $P_W(v) = \langle u_1, v \rangle u_1 + \langle u_2, v \rangle u_2 = (3/\sqrt{2}) u_1 + (-1/\sqrt{6}) u_2 = (3/2, 3/2, 0) - (1/6, -1/6, 2/6) = (3/2 - 1/6, 3/2 + 1/6, -1/3) = (8/6, 10/6, -2/6) = (4/3, 5/3, -1/3)$. Check: $v - P_W(v) = (1 - 4/3, 2 - 5/3, 3 - (-1/3)) = (-1/3, 1/3, 10/3)$. Is this orthogonal to $W$? $\langle (1, 1, 0), (-1/3, 1/3, 10/3) \rangle = -1/3 + 1/3 + 0 = 0$ ✓. $\langle (1, 0, 1), (-1/3, 1/3, 10/3) \rangle = -1/3 + 0 + 10/3 = 9/3 = 3 \ne 0$ — hmm, something wrong. Let me recompute.

Let me redo $u_2$: $v_2 = (1, 0, 1)$, $u_1 = (1, 1, 0)/\sqrt{2}$. $\langle u_1, v_2 \rangle = 1/\sqrt{2}$. $v_2 - (1/\sqrt{2}) u_1 = (1, 0, 1) - (1/2)(1, 1, 0) = (1/2, -1/2, 1)$. $\|(1/2, -1/2, 1)\| = \sqrt{1/4 + 1/4 + 1} = \sqrt{3/2}$. $u_2 = (1/2, -1/2, 1)/\sqrt{3/2} = (1, -1, 2)/\sqrt{6}$. ✓

Now $\langle u_2, v_3 \rangle = \langle u_2, (0, 1, 1) \rangle = (0 - 1 + 2)/\sqrt{6} = 1/\sqrt{6}$. Hmm, I was computing $P_W(v)$. Let me redo. $v = (1, 2, 3)$. $\langle u_1, v \rangle = (1 + 2 + 0)/\sqrt{2} = 3/\sqrt{2}$. $\langle u_2, v \rangle = (1 - 2 + 6)/\sqrt{6} = 5/\sqrt{6}$. $P_W(v) = (3/\sqrt{2}) u_1 + (5/\sqrt{6}) u_2 = (3/2, 3/2, 0) + (5/6)(-1, 1, -2)$... wait, $u_2 = (1, -1, 2)/\sqrt{6}$, so $(5/\sqrt{6}) u_2 = (5/6, -5/6, 10/6)$. Sum: $(3/2 + 5/6, 3/2 - 5/6, 0 + 10/6) = (9/6 + 5/6, 9/6 - 5/6, 10/6) = (14/6, 4/6, 10/6) = (7/3, 2/3, 5/3)$. Check orthogonality: $v - P_W(v) = (1 - 7/3, 2 - 2/3, 3 - 5/3) = (-4/3, 4/3, 4/3)$. $\langle (1, 1, 0), (-4/3, 4/3, 4/3) \rangle = -4/3 + 4/3 + 0 = 0$ ✓. $\langle (1, 0, 1), (-4/3, 4/3, 4/3) \rangle = -4/3 + 0 + 4/3 = 0$ ✓. Good, the projection is correct.

**Example 4 — Spectral theorem.** $A = \begin{pmatrix} 0 & -i \\ i & 0 \end{pmatrix}$ (the Pauli matrix $\sigma_y$). Self-adjoint? $A^* = \begin{pmatrix} 0 & -i \\ i & 0 \end{pmatrix} = A$. Yes. Eigenvalues: $\pm 1$. Eigenvectors: $(1, i)^T$ for $1$, $(1, -i)^T$ for $-1$. Spectral theorem: $A = U D U^*$ with $U = (1/\sqrt{2}) \begin{pmatrix} 1 & 1 \\ i & -i \end{pmatrix}$, $D = \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}$. Verify: $U U^* = I$ (unitary). ✓

**Example 5 — Cauchy–Schwarz.** $L^2[0, 1]$. $f = 1$, $g = x$. $\langle f, g \rangle = \int_0^1 x dx = 1/2$. $\|f\| = 1$, $\|g\| = 1/\sqrt{3}$. $|\langle f, g \rangle| = 1/2 \le 1 \cdot 1/\sqrt{3} = 1/\sqrt{3} \approx 0.577$. ✓

## Common Misconceptions
- **"All norms come from inner products."** No — only those satisfying the parallelogram law. The $L^1$ and $\ell^1$ norms do not.
- **"The Gram–Schmidt process is stable."** Classical Gram–Schmidt is unstable for nearly-dependent vectors. Use modified Gram–Schmidt or Householder reflections.
- **"Every operator is self-adjoint."** No — only those equal to their adjoint. General operators are not.
- **"Inner products are always positive."** The inner product is positive definite ($\langle v, v \rangle > 0$ for $v \ne 0$). It can be negative for some pairs (e.g. $\langle x, -x \rangle < 0$), but each vector's norm-squared is positive.

## Connections
Inner-product spaces are the natural setting for quantum mechanics (Hilbert spaces), for Fourier analysis (the Fourier basis is orthonormal in $L^2$), and for numerical linear algebra (least squares, SVD, eigenvalue algorithms). The spectral theorem is the most important single result in operator theory and the basis of many physical theories.

## Quick Check
1. State the inner product axioms.
2. State the Cauchy–Schwarz inequality.
3. Describe the Gram–Schmidt process.
4. State the spectral theorem.
5. What is the projection of $v$ onto a subspace $W$?

## Takeaway
- Inner product: sesquilinear, positive definite.
- Cauchy–Schwarz: $|\langle u, v \rangle| \le \|u\| \cdot \|v\|$.
- Gram–Schmidt: orthonormal basis from any basis.
- Spectral theorem: normal operators = diagonalisable by a unitary.
- QR and SVD: numerical methods that use orthogonality.
