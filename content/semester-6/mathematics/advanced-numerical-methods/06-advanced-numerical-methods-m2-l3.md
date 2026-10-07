***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-6
semesterName: Semester 6
subjectId: mathematics
subjectName: Mathematics
courseId: advanced-numerical-methods
courseName: Advanced Numerical Methods (Math Elective I, A)
moduleId: advanced-numerical-methods-module-2
moduleName: Eigenvalue Methods
lessonId: advanced-numerical-methods-m2-l3
lessonName: Krylov Subspaces, Lanczos and Arnoldi with Applications to Normal Modes and the Schrödinger Equation
lessonNumber: 6
moduleNumber: 2
semesterNumber: 6
difficulty: advanced
estimatedStudyMinutes: 60
releaseOrder: 6
prerequisites:
  - advanced-numerical-methods-m2-l2
  - mathematics-lab-using-python-ii-m1-l2
  - introduction-to-quantum-mechanics-m2-l3
learningObjectives:
  - Define the Krylov subspace $\mathcal{K}_m(A, b)$ and derive the Arnoldi relation $AQ_m = Q_mH_m + h_{m+1,m}q_{m+1}e_m^\mathsf{T}$.
  - Specialise Arnoldi to the Lanczos three-term recurrence for symmetric matrices and compute Ritz values from the tridiagonal $T_m$.
  - Bound the residual of a Ritz pair by $|\beta_m||y_m|$ and explain why extreme eigenvalues converge first and faster than in power iteration.
  - Set up the stiffness matrix of a coupled chain and the finite-difference Hamiltonian of a 1D Schrödinger problem and find their lowest eigenpairs by Lanczos.
concepts:
  - Krylov subspace
  - Arnoldi iteration
  - Lanczos recurrence
  - Ritz values
  - Loss of orthogonality
  - Normal modes of a coupled chain
  - Finite-difference Hamiltonian
tags:
  - mathematics
  - advanced-numerical-methods
  - krylov-methods
  - sparse-eigenproblems
sourceType: authored-courseware
status: in-review
assessmentHints:
  - derivation
  - problem-solving
  - computational
  - conceptual
***

# Krylov Subspaces, Lanczos and Arnoldi with Applications to Normal Modes and the Schrödinger Equation

## Overview

The QR algorithm costs $O(n^3)$ operations and $O(n^2)$ storage, hopeless for a differential operator discretised on a fine grid: a Hamiltonian on a $300 \times 300$ grid is $90{,}000 \times 90{,}000$, yet has five nonzeros per row, and one wants only its lowest few eigenvalues. Power iteration touches the matrix only through products $Av$ but discards every intermediate vector; Krylov methods keep them. Orthonormalising $b, Ab, A^2b, \ldots$ produces a small Hessenberg matrix (Arnoldi) or tridiagonal matrix (Lanczos, for symmetric $A$) whose eigenvalues, the Ritz values, approximate the extreme eigenvalues of $A$ far faster than power iteration. This lesson develops the recurrences, the residual bound, the loss of orthogonality in floating point, and two applications: normal modes of a coupled chain and the harmonic oscillator on a grid.

## Learning Path

- **What you should already know**: power iteration and the Rayleigh quotient (Lesson m2-l1); the QR algorithm (Lesson m2-l2); normal modes of a chain (Mathematics Lab using Python II, Lesson m1-l2); the oscillator spectrum $E_n = (n + \tfrac{1}{2})\hbar\omega$ (Introduction to Quantum Mechanics, Lesson m2-l3).
- **What this lesson adds**: Krylov subspaces; the Arnoldi and Lanczos recurrences; Ritz values and the residual bound; the Kaniel–Paige estimate; loss of orthogonality and restarting; two applications.
- **What later lessons this will unlock**: conjugate gradients (Lesson m3-l2) is the Lanczos recurrence applied to $Ax = b$, with the same Chebyshev convergence bound.

## Core Explanation

### Krylov subspaces

Power iteration computes $b, Ab, A^2b, \ldots$ and keeps only the last vector. The **Krylov subspace**

$$\mathcal{K}_m(A, b) = \operatorname{span}\{b, Ab, A^2b, \ldots, A^{m-1}b\}$$

contains them all, and the **Rayleigh–Ritz** idea is to seek approximate eigenvectors inside it: $x \in \mathcal{K}_m$ and $\theta$ with $Ax - \theta x$ orthogonal to $\mathcal{K}_m$. With $Q_m$ an orthonormal basis and $x = Q_my$ this is the small eigenproblem $(Q_m^\mathsf{T}AQ_m)y = \theta y$; its eigenvalues are the **Ritz values** and $Q_my$ the **Ritz vectors**. The monomial basis $A^kb$ is useless numerically, since its vectors all align with $v_1$; Arnoldi builds an orthonormal basis by Gram–Schmidt.

### The Arnoldi iteration

With $q_1 = b/\|b\|$, step $j$ forms $w = Aq_j$, orthogonalises against $q_1, \ldots, q_j$ and normalises:

$$h_{ij} = q_i^\mathsf{T}w, \qquad w \leftarrow w - \sum_{i=1}^{j}h_{ij}q_i, \qquad h_{j+1,j} = \|w\|, \qquad q_{j+1} = w/h_{j+1,j}.$$

Rearranged and collected over columns, this is the **Arnoldi relation**

$$AQ_m = Q_mH_m + h_{m+1,m}\,q_{m+1}e_m^\mathsf{T},$$

where $H_m = Q_m^\mathsf{T}AQ_m$ is $m \times m$ upper Hessenberg; its eigenvalues are the Ritz values, found by the QR algorithm at negligible cost since $m \ll n$. The single extra term gives an exact residual: if $H_my = \theta y$ with $\|y\| = 1$ and $x = Q_my$, then

$$Ax - \theta x = AQ_my - Q_mH_my = h_{m+1,m}\,y_m\,q_{m+1}, \qquad \|Ax - \theta x\| = |h_{m+1,m}|\,|y_m|.$$

For symmetric $A$ the residual bounds the eigenvalue error: $\min_i|\theta - \lambda_i| \le \|Ax - \theta x\|$. If $h_{m+1,m} = 0$ the subspace is invariant and every Ritz value is exact (Example 2).

### The Lanczos recurrence

For symmetric $A$ the matrix $H_m = Q_m^\mathsf{T}AQ_m$ is symmetric and Hessenberg, hence **tridiagonal**, $T_m = \operatorname{tridiag}(\beta_{j-1}, \alpha_j, \beta_j)$, and Gram–Schmidt collapses to the **three-term Lanczos recurrence**

$$\alpha_j = q_j^\mathsf{T}Aq_j, \qquad r_j = Aq_j - \alpha_jq_j - \beta_{j-1}q_{j-1}, \qquad \beta_j = \|r_j\|, \qquad q_{j+1} = r_j/\beta_j,$$

because $Aq_j$ is automatically orthogonal to $q_1, \ldots, q_{j-2}$ in exact arithmetic. Each step costs one matrix–vector product plus $O(n)$, and only three vectors need be stored for eigenvalues alone.

**Which eigenvalues converge first?** The Kaniel–Paige theorem answers with Chebyshev polynomials: for the largest eigenvalue,

$$0 \le \lambda_1 - \theta_1 \le (\lambda_1 - \lambda_n)\left[\frac{\tan\angle(q_1, v_1)}{T_{m-1}(1 + 2\gamma)}\right]^2, \qquad \gamma = \frac{\lambda_1 - \lambda_2}{\lambda_2 - \lambda_n},$$

and symmetrically for the smallest. Since $T_{m-1}(1 + 2\gamma) \approx \tfrac{1}{2}(1 + 2\sqrt{\gamma})^{m-1}$ for small $\gamma$, the error decays like $e^{-4\sqrt{\gamma}\,m}$, whereas power iteration's eigenvalue error decays like $e^{-2\gamma m}$. Replacing $\gamma$ by $\sqrt{\gamma}$ is the Krylov acceleration. Extreme eigenvalues converge first; interior ones need Lanczos on $(A - \mu I)^{-1}$, the **shift-invert** mode.

### Loss of orthogonality and restarting

In floating point the Lanczos vectors lose orthogonality as soon as a Ritz value converges, and the recurrence rediscovers the same eigenvalue: spurious copies, **ghost eigenvalues**, appear in $T_m$. Remedies are full re-orthogonalisation against all previous vectors at $O(nm)$ per step, as in the script below, or **restarting** with small $m$ and a starting vector built from the current Ritz vectors. The implicitly restarted Arnoldi method behind `scipy.sparse.linalg.eigsh` combines restarting with the shifted QR steps of Lesson m2-l2.

### Application: normal modes of a coupled chain

For $n$ equal masses $m$ joined by springs $\kappa$ between fixed walls, $m\ddot{x} = -Kx$ with the tridiagonal **stiffness matrix** $K = \kappa\,\operatorname{tridiag}(-1, 2, -1)$ has normal modes $x = v\cos\omega t$ with $Kv = m\omega^2v$ and exact eigenvalues $\lambda_k = 4\kappa\sin^2\!\big(k\pi/(2(n+1))\big)$. Lanczos from a random start recovers the lowest modes of a chain of $10^5$ masses in a few hundred products of $3n$ flops each, where dense `eigh` would need $10^{15}$ flops and $80$ GB. Example 2 shows a symmetric start reaching only the symmetric modes: the Krylov subspace contains only what the starting vector seeds.

### Application: the Schrödinger equation on a grid

With $\hbar = m = \omega = 1$, the time-independent Schrödinger equation $-\tfrac{1}{2}\psi'' + V(x)\psi = E\psi$ on a grid $x_j = j\Delta x$ becomes, by the central difference,

$$H_{jj} = \frac{1}{\Delta x^2} + V(x_j), \qquad H_{j,j\pm 1} = -\frac{1}{2\Delta x^2},$$

a symmetric tridiagonal matrix whose lowest eigenvalues are the bound-state energies. The discretisation replaces $p^2/2$ by $(1 - \cos p\Delta x)/\Delta x^2 = p^2/2 - p^4\Delta x^2/24 + \ldots$, so energies are underestimated by about $\Delta x^2\langle p^4\rangle/24$ (Example 3). In one dimension `eigh` suffices, but in two or three dimensions the matrix has size $N^2$ or $N^3$ and Lanczos is the only option. The script runs both applications; expect the chain run to stop after two steps with Ritz values $0.382$ and $2.618$, and the oscillator run to return $0.4997, 1.498, 2.496, 3.49$, agreeing with `eigh` and lying below $0.5, 1.5, 2.5, 3.5$ by the predicted discretisation error.

```python
import numpy as np

def lanczos(A, q1, m):
    n = len(q1); Q = np.zeros((n, m)); alpha = np.zeros(m); beta = np.zeros(m)
    q, q_prev = q1 / np.linalg.norm(q1), np.zeros(n)
    for j in range(m):
        Q[:, j] = q
        r = A @ q
        alpha[j] = q @ r
        r -= alpha[j] * q + (beta[j - 1] * q_prev if j > 0 else 0.0)
        r -= Q[:, :j + 1] @ (Q[:, :j + 1].T @ r)          # full re-orthogonalisation
        beta[j] = np.linalg.norm(r)
        if beta[j] < 1e-12:                                 # invariant subspace: stop
            return alpha[:j + 1], beta[:j]
        q_prev, q = q, r / beta[j]
    return alpha, beta[:-1]

def ritz(alpha, beta):
    return np.linalg.eigvalsh(np.diag(alpha) + np.diag(beta, 1) + np.diag(beta, -1))

K = 2 * np.eye(4) - np.eye(4, k=1) - np.eye(4, k=-1)        # four-mass chain, kappa = m = 1
a, b = lanczos(K, np.ones(4), 4)
print("chain Ritz values", ritz(a, b), "exact", 4 * np.sin(np.arange(1, 5) * np.pi / 10) ** 2)

dx = 0.1; x = np.arange(-10.0, 10.0 + dx / 2, dx); n = len(x)
H = np.diag(1 / dx**2 + 0.5 * x**2) - (0.5 / dx**2) * (np.eye(n, k=1) + np.eye(n, k=-1))
a, b = lanczos(H, np.random.default_rng(0).standard_normal(n), 60)
print("Lanczos", ritz(a, b)[:4])
print("eigh   ", np.linalg.eigvalsh(H)[:4], "exact 0.5 1.5 2.5 3.5")
```

## Key Ideas

- **Krylov subspace** $\mathcal{K}_m(A, b)$ keeps every power-iteration vector; Rayleigh–Ritz on it gives many eigenvalue estimates.
- **Arnoldi relation** $AQ_m = Q_mH_m + h_{m+1,m}q_{m+1}e_m^\mathsf{T}$ with Hessenberg $H_m$; Lanczos is the symmetric case with tridiagonal $T_m$.
- **Residual of a Ritz pair** is exactly $|h_{m+1,m}||y_m|$; for symmetric $A$ it bounds the eigenvalue error.
- **Convergence**: extreme eigenvalues first, with error $\sim e^{-4\sqrt{\gamma}m}$ versus $e^{-2\gamma m}$ for power iteration (Kaniel–Paige).
- **Loss of orthogonality** produces ghost eigenvalues; re-orthogonalise or restart.

## Worked Examples

### Example 1 — Two Lanczos steps and the residual bound

Run Lanczos on the $3 \times 3$ matrix $A = \operatorname{tridiag}(1, 2, 1)$ from $q_1 = e_1$ and bound the Ritz errors after two steps.

**Solution.** $Aq_1 = (2, 1, 0)$, so $\alpha_1 = 2$, $r_1 = (0, 1, 0)$, $\beta_1 = 1$, $q_2 = e_2$. Then $Aq_2 = (1, 2, 1)$, $\alpha_2 = 2$, $r_2 = (1, 2, 1) - 2e_2 - e_1 = e_3$, $\beta_2 = 1$. Thus $T_2 = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$ with Ritz values $3$ and $1$ and eigenvectors $(1, \pm 1)/\sqrt{2}$. The exact eigenvalues are $2 \pm \sqrt{2} = 3.414, 0.586$ and $2$. Each Ritz pair has residual $|\beta_2||y_2| = 0.707$, bounding the actual errors $0.414$. The interior eigenvalue $2$ has no approximation yet; the third step gives $T_3 = A$ exactly.

### Example 2 — Symmetric modes of a four-mass chain

Run Lanczos on the $4 \times 4$ matrix $K = \operatorname{tridiag}(-1, 2, -1)$ from $q_1 = (1, 1, 1, 1)/2$.

**Solution.** $Kq_1 = (1, 0, 0, 1)/2$, so $\alpha_1 = \tfrac{1}{2}$ and $r_1 = (1, 0, 0, 1)/2 - (1, 1, 1, 1)/4 = (1, -1, -1, 1)/4$, giving $\beta_1 = \tfrac{1}{2}$ and $q_2 = (1, -1, -1, 1)/2$. Next $Kq_2 = (3, -2, -2, 3)/2$, so $\alpha_2 = \tfrac{5}{2}$ and

$$r_2 = \tfrac{1}{2}(3, -2, -2, 3) - \tfrac{5}{4}(1, -1, -1, 1) - \tfrac{1}{4}(1, 1, 1, 1) = (0, 0, 0, 0).$$

The recurrence terminates with $\beta_2 = 0$: $\operatorname{span}\{q_1, q_2\}$ is invariant. The Ritz values of $T_2 = \begin{pmatrix} 1/2 & 1/2 \\ 1/2 & 5/2 \end{pmatrix}$ are $(3 \pm \sqrt{5})/2 = 2.618, 0.382$, exactly $4\sin^2 54°$ and $4\sin^2 18°$, the modes $k = 3, 1$. Both are reflection-symmetric, like $q_1$; the antisymmetric modes $k = 2, 4$ are invisible from this start, and a random start seeds all four.

### Example 3 — Harmonic oscillator on a grid

Estimate the discretisation error of the ground-state energy for $\Delta x = 0.1$ and compare the products needed by Lanczos and power iteration.

**Solution.** The finite-difference kinetic energy is $p^2/2 - p^4\Delta x^2/24 + \ldots$, so to first order the ground-state energy shifts by $-\Delta x^2\langle p^4\rangle/24$. For the Gaussian ground state $\langle p^4\rangle = 3\langle p^2\rangle^2 = \tfrac{3}{4}$, giving

$$E_0^{\text{FD}} \approx 0.5 - \frac{0.01 \times 0.75}{24} = 0.5 - 3.1 \times 10^{-4} = 0.49969,$$

On $[-10, 10]$ the largest eigenvalue of $H$ is about $2/\Delta x^2 + V_{\max} = 250$, so for the lowest eigenvalue $\gamma = (1.5 - 0.5)/(250 - 1.5) = 4.0 \times 10^{-3}$ and $4\sqrt{\gamma} = 0.25$: the Lanczos error falls by $e^{-0.25}$ per step, reaching $10^{-9}$ in about $80$ steps. Power iteration on $250I - H$ has ratio $248.5/249.5 = 0.996$ and error $0.996^{2k}$, needing $k \approx 2600$ products.

## Common Misconceptions

- **"Lanczos computes all the eigenvalues of a large matrix."** It approximates the extreme ones quickly; interior eigenvalues need shift-invert or very many steps.
- **"The Ritz values after $m$ steps are the $m$ largest eigenvalues."** They spread over the spectrum and several may be unconverged; only the residual $|\beta_m||y_m|$ tells which to trust.
- **"Breakdown ($\beta_j = 0$) is a failure."** An invariant subspace has been found and the Ritz values are exact; restart with an orthogonal vector if more eigenvalues are needed.
- **"The three-term recurrence keeps the vectors orthogonal."** Only in exact arithmetic; in floating point orthogonality is lost as Ritz values converge, producing ghosts unless one re-orthogonalises or restarts.

## Connections

- The chain frequencies $\omega_k = 2\sqrt{\kappa/m}\sin(k\pi/2(n+1))$ are the dispersion relation of a lattice (Solid State Physics) and discrete standing waves on a string (Waves and Optics, Lesson m1-l3).
- Finite-difference and basis-set calculations of atomic levels (Introduction to Quantum Mechanics) rely on Lanczos and Davidson methods; Rayleigh–Ritz is the variational principle in a Krylov basis.
- Stellar oscillation modes and accretion-disc stability in Astrophysics give large sparse nonsymmetric eigenproblems solved by Arnoldi.
- Conjugate gradients (Lesson m3-l2) is the Lanczos recurrence used to solve $Ax = b$; its rate $\big((\sqrt{\kappa} - 1)/(\sqrt{\kappa} + 1)\big)^k$ comes from the same Chebyshev argument.

## Quick Check

1. Show that $\mathcal{K}_m(A, b)$ is invariant under $A$ exactly when $h_{m+1,m} = 0$.
2. Why is $Aq_j$ orthogonal to $q_1, \ldots, q_{j-2}$ when $A$ is symmetric?
3. A Lanczos run has $\beta_m = 0.3$ and a Ritz vector with $y_m = 0.05$. How close is the Ritz value to an eigenvalue?
4. For a spectrum in $[0, 1]$ with $\lambda_1 - \lambda_2 = 0.01$, compare the steps for a $10^{-6}$ reduction by power iteration and by Lanczos.
5. Write the finite-difference Hamiltonian for a particle in a box with $N$ interior points and give its exact eigenvalues.

## Takeaway

- Krylov methods keep every power-iteration vector and extract eigenvalues by Rayleigh–Ritz on a small Hessenberg or tridiagonal matrix.
- The residual of a Ritz pair, $|h_{m+1,m}||y_m|$, certifies convergence without touching $A$.
- Extreme eigenvalues converge at rate $\sqrt{\gamma}$ rather than $\gamma$, the decisive advantage over power iteration.
- Loss of orthogonality demands re-orthogonalisation or restarting; `eigsh` is the production tool.
- The stiffness matrix of a chain and the finite-difference Hamiltonian are the model sparse symmetric eigenproblems of this programme.
