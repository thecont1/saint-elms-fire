***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-4
semesterName: Semester 4
subjectId: computational-methods
subjectName: Computational Methods
courseId: numerical-methods
courseName: Numerical Methods
moduleId: numerical-methods-module-3
moduleName: Linear Systems and ODEs
lessonId: numerical-methods-m3-l2
lessonName: Iterative Methods — Jacobi, Gauss–Seidel
lessonNumber: 8
moduleNumber: 3
semesterNumber: 4
difficulty: advanced
estimatedStudyMinutes: 55
releaseOrder: 8
prerequisites:
  - numerical-methods-m3-l1
  - linear-algebra-m2-l1
learningObjectives:
  - State the Jacobi and Gauss–Seidel iterations for $A x = b$.
  - Identify when these methods converge.
  - Describe the SOR (successive over-relaxation) acceleration.
  - Compare iterative methods to direct methods.
concepts:
  - Jacobi iteration
  - Gauss–Seidel iteration
  - Successive over-relaxation (SOR)
  - Spectral radius
  - Convergence criterion
  - Diagonal dominance
tags:
  - computational-methods
  - numerical-analysis
  - iterative-methods
sourceType: authored-courseware
assessmentHints:
  - derivation
  - problem-solving
  - conceptual
***

# Iterative Methods — Jacobi, Gauss–Seidel

## Overview
For large sparse linear systems (e.g. from finite-difference or finite-element discretisations of PDEs), direct methods like LU decomposition are too expensive in both time and memory. Iterative methods start with an initial guess and refine it by repeatedly applying a cheap update. The two classical methods are *Jacobi* and *Gauss–Seidel*; *successive over-relaxation* (SOR) accelerates the latter. Modern methods — conjugate gradient, GMRES, multigrid — are faster still. This lesson develops the classical methods, the convergence criterion, and the basic acceleration.

## Learning Path
- What you should already know: matrix algebra, direct methods for $A x = b$, the spectral radius.
- What this lesson adds: iterative methods, convergence conditions, and SOR.
- What it unlocks: Krylov methods, multigrid, and the numerical solution of large sparse systems.

## Core Explanation
**Why iterative methods?** For $A x = b$ with $A$ large and sparse, direct methods (LU) are $O(n^3)$ in time and $O(n^2)$ in storage, even if $A$ has only $O(n)$ nonzeros. Iterative methods use $A$ only as a matrix-vector product ($O(\text{nnz}(A))$ per iteration) and need only a few vectors in memory. For $n = 10^6$ and few-iterations, the difference is dramatic.

**Splitting.** Write $A = M - N$, where $M$ is easily invertible. Then $A x = b$ becomes $M x = N x + b$, or $x = M^{-1} (N x + b) =: G x + c$. Iterate $x^{(k+1)} = G x^{(k)} + c$.

**Convergence.** Iterates converge to $x^*$ from any initial $x^{(0)}$ iff the spectral radius $\rho(G) < 1$ (all eigenvalues of $G$ have magnitude $< 1$).

**Jacobi iteration.** Split $A = D - (L + U)$, where $D$ is the diagonal of $A$, $L$ is the strictly lower-triangular part, $U$ is the strictly upper-triangular part. The iteration is

$$x^{(k+1)} = D^{-1} (b - (L + U) x^{(k)}) = D^{-1} (b - (A - D) x^{(k)}).$$

Component-wise: $x_i^{(k+1)} = (b_i - \sum_{j \ne i} a_{ij} x_j^{(k)})/a_{ii}$. Each component uses only the previous iterate's values.

**Convergence of Jacobi.** Converges if $A$ is strictly diagonally dominant ($|a_{ii}| > \sum_{j \ne i} |a_{ij}|$) or symmetric positive-definite with the spectral radius of $D^{-1} (L + U)$ less than $1$. The convergence is linear (geometric).

**Gauss–Seidel iteration.** Use the *updated* values of $x$ as soon as they are available:

$$x_i^{(k+1)} = \frac{1}{a_{ii}} \left(b_i - \sum_{j < i} a_{ij} x_j^{(k+1)} - \sum_{j > i} a_{ij} x_j^{(k)}\right).$$

The lower-triangular components are updated, the upper-triangular use the old values. This is a forward sweep.

**Convergence of Gauss–Seidel.** Converges under weaker conditions than Jacobi. In particular, converges for symmetric positive-definite $A$ (and for diagonally dominant $A$). Convergence is linear, but often faster than Jacobi (typically by a factor of 2).

**Matrix form.** Jacobi: $x^{(k+1)} = D^{-1} (b - (L + U) x^{(k)})$. Gauss–Seidel: $x^{(k+1)} = (D - L)^{-1} (b + U x^{(k)})$. The iteration matrices are $G_J = -D^{-1} (L + U)$ and $G_{GS} = -(D - L)^{-1} U$. Their spectral radii determine convergence.

**Successive over-relaxation (SOR).** Accelerate Gauss–Seidel with a relaxation parameter $\omega$:

$$x_i^{(k+1)} = (1 - \omega) x_i^{(k)} + \omega \tilde{x}_i^{(k+1)},$$

where $\tilde{x}_i^{(k+1)}$ is the Gauss–Seidel update. The parameter $\omega$ is between $0$ and $2$ (for convergence of many problems). $\omega = 1$ recovers Gauss–Seidel. $\omega > 1$ is "over-relaxation" (push the update further). The optimal $\omega$ is problem-dependent; for Poisson's equation on a square, $\omega_\text{opt} = 2/(1 + \sin(\pi h))$ where $h$ is the grid spacing.

**Convergence of SOR.** The spectral radius of the iteration matrix is $\rho(G_\omega) = 1 - \omega (2 - \omega) \rho(G_{GS})$ (under some conditions). Optimal $\omega$ minimises $\rho$. The convergence can be much faster than Gauss–Seidel.

**Matrix form of SOR.** $x^{(k+1)} = (D - \omega L)^{-1} [(\omega U + (1 - \omega) D) x^{(k)} + \omega b]$.

**Stopping criterion.** Iterate until the residual $r^{(k)} = b - A x^{(k)}$ is small: $\|r^{(k)}\| / \|b\| < \varepsilon$. Or the change $\|x^{(k+1)} - x^{(k)}\| / \|x^{(k)}\| < \varepsilon$. The latter can be misleading for slow convergence.

**Preconditioning.** A *preconditioner* $M$ is an approximation to $A$ that is easy to invert. Solve $M^{-1} A x = M^{-1} b$ iteratively. $M = D$ gives Jacobi; $M = D - L$ gives Gauss–Seidel. Better preconditioners (incomplete LU, multigrid) accelerate convergence.

**Symmetric positive-definite case.** For SPD $A$, the conjugate gradient method is the iterative method of choice: it converges in at most $n$ steps (in exact arithmetic) and has a rate depending on the condition number.

**Conjugate gradient.** Minimise $\phi(x) = (1/2) x^T A x - b^T x$ over the Krylov subspace $\text{span}(b, A b, A^2 b, \ldots, A^{k-1} b)$. Converges in at most $n$ steps. Cost per step: one matrix-vector product and a few vector operations. For SPD $A$, convergence rate is $\sim (\sqrt{\kappa} - 1)/(\sqrt{\kappa} + 1)^{2k}$.

**GMRES.** For non-symmetric $A$, the *generalised minimal residual* method is the standard iterative solver. Builds an orthogonal basis for the Krylov subspace and minimises the residual. Cost grows with iterations unless restarted.

**BiCGSTAB.** For non-symmetric systems, an alternative with bounded cost per iteration. Often more robust than GMRES for difficult problems.

**Multigrid.** For elliptic PDEs, multigrid is the fastest iterative method. It uses a hierarchy of grids to damp both low- and high-frequency errors. Often the only practical solver for very large elliptic problems.

**Convergence acceleration by Chebyshev.** Choose iterates to damp the worst eigenvalues first, using knowledge of the spectrum. Chebyshev acceleration gives convergence in $O(\sqrt{\kappa})$ iterations for SPD problems.

**Sparse matrices.** For the sparse systems arising from PDE discretisation, the iteration is cheap ($O(\text{nnz})$ per step), and the cost is dominated by the matrix-vector product. Iterative methods are essential.

**Finite-difference Poisson solver.** $A x = b$ with $A$ a discrete Laplacian. Jacobi converges in $O(n^2)$ iterations (very slow). Gauss–Seidel is faster. SOR with optimal $\omega$ converges in $O(n)$ iterations. Multigrid converges in $O(n)$ (i.e. $O(\log n)$ per level).

**Comparison of methods.** For $n = 10^4$ and a sparse system:
- Direct LU: $O(n^2) = 10^8$ flops, $O(n^2) = 10^8$ memory.
- Jacobi: thousands of iterations, each $O(\text{nnz})$, no extra memory.
- Gauss–Seidel: hundreds of iterations, each $O(\text{nnz})$.
- Conjugate gradient: tens of iterations for moderate $\kappa$, hundreds for large $\kappa$.
- Multigrid: tens of iterations regardless of $\kappa$.

**Why preconditioning matters.** The convergence rate of CG depends on $\sqrt{\kappa}$. If $\kappa$ is $10^6$, you need $\sim 3000$ iterations. With a good preconditioner that reduces $\kappa$ to $10$, you need $\sim 20$.

**Incomplete LU (ILU) preconditioner.** Compute an LU decomposition of $A$ but drop small entries to preserve sparsity. Use as a preconditioner. The ILU(0) keeps only the original nonzero pattern.

**Sparse approximate inverse (SPAI).** Compute a sparse matrix $M$ such that $\|A M - I\|$ is small in some norm. Used as a preconditioner.

**Domain decomposition.** Split the domain into subdomains; solve on each locally; couple. Natural parallelisation. The basis of many large-scale PDE solvers (e.g. PETSc, Trilinos).

**Anderson acceleration.** A general technique to accelerate fixed-point iteration $x^{(k+1)} = G(x^{(k)})$. Combines past iterates. Often effective.

**Krylov methods.** Conjugate gradient, GMRES, BiCGSTAB are all Krylov subspace methods: they build iterates in the Krylov subspace $\text{span}(b, A b, \ldots, A^{k-1} b)$. This is a finite-dimensional space, and the iterates are optimal within it.

**Preconditioned CG.** The standard form: solve $M^{-1} A x = M^{-1} b$ using CG on the equivalent SPD problem. The matrix $M$ must be SPD.

**Multigrid V-cycle.** Smooth the error on a fine grid, restrict to a coarser grid, solve there, prolongate back, smooth again. Repeat at multiple levels. Standard for elliptic problems.

**Algebraic multigrid (AMG).** Multigrid without explicit grid hierarchies. Coarse grids are constructed from the matrix structure. Used for unstructured meshes.

**Convergence monitoring.** Plot $\|r^{(k)}\|$ vs. $k$ to see the convergence rate. If it stalls, check for bugs or try a different preconditioner.

**Iterative refinement.** For direct solves, iterative refinement improves accuracy. For iterative solves, the residual is monitored for accuracy.

**Incomplete LU threshold (ILUT).** Drop entries below a threshold, not just zero entries. Sometimes gives a better preconditioner than ILU(0).

**Symmetric successive over-relaxation (SSOR).** Apply SOR in one direction, then in the reverse. The iteration matrix is symmetric. Used as a preconditioner.

**Parallelisation.** Iterative methods are parallelisable: each iteration is a matrix-vector product (parallel) and a few vector operations. Multigrid has natural parallelism across levels.

**Application: Schrödinger equation.** The discretised Hamiltonian is sparse and often SPD (after shifting). The lowest few eigenvalues and eigenvectors are computed by Lanczos (tridiagonalisation) + iterative solves.

**Application: Heat equation.** Implicit time-stepping (backward Euler, Crank–Nicolson) requires solving a sparse linear system at each time step. Direct methods for small grids, multigrid for large.

**Application: Electromagnetics.** Discretisation of Maxwell's equations gives large sparse systems. Iterative methods (CG, GMRES) with multigrid preconditioners are the workhorses.

**Convergence of fixed-point iteration.** The Banach fixed-point theorem guarantees convergence if $G$ is a contraction: $\|G(x) - G(y)\| \le L \|x - y\|$ for some $L < 1$. In finite dimensions, the spectral radius condition is equivalent.

**Rate of convergence.** The convergence rate of an iterative method is $\rho = \rho(G)$, the spectral radius of the iteration matrix. The error decreases by a factor of $\rho$ per iteration. For SOR with optimal $\omega$, $\rho$ can be much smaller than for plain Gauss–Seidel.

**Stopping criterion for relative residual.** Stop when $\|b - A x^{(k)}\| / \|b\| < \varepsilon$. Typical $\varepsilon$ for double precision: $10^{-8}$ to $10^{-12}$ depending on the problem.

**Practical implementation.** Use a library (SciPy, PETSc, Trilinos). Do not write your own iterative solver unless you have a specialised problem.

## Key Ideas
- Jacobi: $x^{(k+1)} = D^{-1} (b - (A - D) x^{(k)})$.
- Gauss–Seidel: $x^{(k+1)} = (D - L)^{-1} (b + U x^{(k)})$.
- SOR: relaxation parameter $\omega$ for acceleration.
- Convergence iff spectral radius of iteration matrix $< 1$.
- Preconditioning is essential for large systems.

## Worked Examples
**Example 1 — Jacobi.** $A = \begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix}$, $b = (1, 2)$. Diagonal $D = \text{diag}(4, 3)$. $D^{-1} (b - (A - D) x) = ((1 - x_2)/4, (2 - 2 x_1)/3)$. Start $x = (0, 0)$: $x^{(1)} = (1/4, 2/3) = (0.25, 0.667)$. $x^{(2)} = ((1 - 0.667)/4, (2 - 0.5)/3) = (0.083, 0.5)$. $x^{(3)} = ((1 - 0.5)/4, (2 - 0.167)/3) = (0.125, 0.611)$. The iteration oscillates and slowly converges to the true $x = (0.1, 0.6)$ (since $4(0.1) + 0.6 = 1$ and $2(0.1) + 3(0.6) = 2$).

**Example 2 — Gauss–Seidel.** Same system. $x_1^{(k+1)} = (1 - x_2^{(k)})/4$, $x_2^{(k+1)} = (2 - 2 x_1^{(k+1)})/3$. Start $(0, 0)$: $x^{(1)} = (0.25, 0.5)$. $x^{(2)} = ((1 - 0.5)/4, (2 - 2 \cdot 0.125)/3) = (0.125, 0.583)$. $x^{(3)} = ((1 - 0.583)/4, (2 - 2 \cdot 0.104)/3) = (0.104, 0.597)$. Converging to $(0.1, 0.6)$, the true solution. ✓

**Example 3 — Spectral radius.** $A = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$. Jacobi: $G_J = -D^{-1} (L + U) = \begin{pmatrix} 0 & -1/2 \\ -1/2 & 0 \end{pmatrix}$. Eigenvalues $\pm 1/2$. $\rho = 1/2 < 1$, so Jacobi converges.

**Example 4 — Diagonal dominance.** $A = \begin{pmatrix} 3 & 1 \\ 1 & 3 \end{pmatrix}$: $|3| > |1|$, $|3| > |1|$. Diagonally dominant. Jacobi converges.

## Common Misconceptions
- **"Iterative methods always converge."** Only if the spectral radius of the iteration matrix is less than $1$.
- **"Jacobi and Gauss–Seidel are the same."** Gauss–Seidel uses updated components and usually converges faster.
- **"SOR with $\omega > 1$ always accelerates."** Only if $\omega$ is in the right range. Too large causes divergence.
- **"Iterative methods are always slower than direct."** For small dense systems, direct is faster. For large sparse systems, iterative is much faster.

## Connections
Iterative methods are the workhorse of large-scale scientific computing. The preconditioned CG and GMRES algorithms are the most widely used. Multigrid is the fastest method for elliptic PDEs. The same ideas underlie many optimisation algorithms (gradient descent, conjugate direction).

## Quick Check
1. State the Jacobi iteration.
2. State the Gauss–Seidel iteration.
3. What is SOR?
4. State the convergence condition for the iteration matrix.
5. What does $\rho$ measure?

## Takeaway
- Jacobi: use previous iterate for all components.
- Gauss–Seidel: use updated components as they are computed.
- SOR: relaxation parameter $\omega$ for acceleration.
- Convergence iff $\rho(G) < 1$.
- Preconditioning accelerates convergence dramatically.
