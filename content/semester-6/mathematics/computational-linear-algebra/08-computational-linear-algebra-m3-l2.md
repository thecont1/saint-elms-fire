***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-6
semesterName: Semester 6
subjectId: mathematics
subjectName: Mathematics
courseId: computational-linear-algebra
courseName: Computational Linear Algebra (Math Elective II, A)
moduleId: computational-linear-algebra-module-3
moduleName: Iterative Methods and Large-Scale Computation
lessonId: computational-linear-algebra-m3-l2
lessonName: Power Iteration, Eigenvalue Algorithms and PageRank
lessonNumber: 8
moduleNumber: 3
semesterNumber: 6
difficulty: advanced
estimatedStudyMinutes: 55
releaseOrder: 8
prerequisites:
  - computational-linear-algebra-m3-l1
  - linear-algebra-m3-l1
learningObjectives:
  - Derive the convergence of power iteration to the dominant eigenvector at rate $|\lambda_2/\lambda_1|^k$ and of the Rayleigh quotient at rate $|\lambda_2/\lambda_1|^{2k}$ for symmetric matrices.
  - Explain shifted inverse iteration and why one LU factorisation serves every step, and outline the Hessenberg–QR algorithm used by `np.linalg.eig`.
  - Formulate PageRank as the dominant eigenvector of the Google matrix $G = \alpha P + (1-\alpha)\mathbf{1}\mathbf{1}^\mathsf{T}/n$ and justify the convergence rate $\alpha^k$ using Perron–Frobenius.
  - Compute PageRank on a small graph by hand and implement it at scale with sparse matrix–vector products without forming $G$.
concepts:
  - Power iteration
  - Rayleigh quotient
  - Shifted inverse iteration
  - QR algorithm for eigenvalues
  - Column-stochastic matrix and Perron–Frobenius theorem
  - PageRank and the Google matrix
tags:
  - mathematics
  - computational-linear-algebra
  - eigenvalues
  - pagerank
sourceType: authored-courseware
status: in-review
assessmentHints:
  - derivation
  - problem-solving
  - computational
  - conceptual
***

# Power Iteration, Eigenvalue Algorithms and PageRank

## Overview

The eigenvalues of a $5 \times 5$ matrix are roots of a quintic, so every eigenvalue algorithm is iterative. Power iteration repeatedly multiplies by $A$ and normalises, converging to the dominant eigenvector at a rate set by $|\lambda_2/\lambda_1|$. Needing only matrix–vector products, it scales to the largest matrices; its famous application is PageRank, the dominant eigenvector of a billion-row stochastic matrix. Small dense matrices instead use the Hessenberg–QR algorithm, which finds all eigenvalues in $O(n^3)$ flops. This lesson derives power iteration and its variants, outlines the dense algorithm, and develops PageRank from Perron–Frobenius to a sparse implementation.

## Learning Path

- **What you should already know**: eigenvalues, diagonalisation and Markov chains (Linear Algebra, Lessons m2-l3 and m3-l1); Krylov subspaces and the cost of sparse matrix–vector products (Lesson m3-l1); the SVD via eigenvalues of $A^\mathsf{T}A$ (Lesson m2-l3).
- **What this lesson adds**: power iteration and Rayleigh quotient convergence; shifted inverse iteration; Hessenberg–QR in outline; the Google matrix and its $\alpha^k$ rate; matrix-free PageRank.
- **What later lessons this will unlock**: randomised SVD as block power iteration, graph spectra, memory and parallelism (Lesson m3-l3).

## Core Explanation

### Power iteration

Let $A \in \mathbb{R}^{n \times n}$ be diagonalisable with eigenvalues ordered $|\lambda_1| > |\lambda_2| \ge \dots \ge |\lambda_n|$ and eigenvectors $v_1, \dots, v_n$. Expand a starting vector $x_0 = \sum c_iv_i$ with $c_1 \ne 0$. Then

$$A^kx_0 = \sum_i c_i\lambda_i^kv_i = c_1\lambda_1^k\Big(v_1 + \sum_{i \ge 2}\frac{c_i}{c_1}\Big(\frac{\lambda_i}{\lambda_1}\Big)^kv_i\Big),$$

so the direction of $A^kx_0$ approaches $v_1$ with error $O(|\lambda_2/\lambda_1|^k)$. **Power iteration** computes this while avoiding overflow:

$$y_k = Ax_{k-1}, \qquad x_k = y_k/\|y_k\|_2, \qquad \mu_k = x_k^\mathsf{T}Ax_k .$$

The **Rayleigh quotient** $\mu_k$ estimates $\lambda_1$. For symmetric $A$ it is stationary at eigenvectors, so an eigenvector error $\varepsilon$ gives eigenvalue error $O(\varepsilon^2)$ and $\mu_k \to \lambda_1$ at the squared rate $|\lambda_2/\lambda_1|^{2k}$. Each step costs $2\,\mathrm{nnz}$ flops and two vectors. Weaknesses: one eigenvalue only, slow when $|\lambda_2| \approx |\lambda_1|$, and failure when the dominant eigenvalue is not unique in modulus (a complex conjugate pair). Applied to $A^\mathsf{T}A$ it yields $\sigma_1^2$ and $v_1$.

### Inverse iteration and shifts

The eigenvalues of $(A - \mu I)^{-1}$ are $1/(\lambda_i - \mu)$, so power iteration on this matrix converges to the eigenvector whose eigenvalue is **nearest the shift** $\mu$, at rate $|\lambda_{\text{near}} - \mu|/|\lambda_{\text{next}} - \mu|$, tiny when $\mu$ is close to a target. Each step solves $(A - \mu I)y_k = x_{k-1}$ with one reused LU factorisation (Lesson m1-l2), $2n^2$ flops per step. This **shifted inverse iteration** finds eigenvectors once eigenvalues are known. Setting the shift to the current Rayleigh quotient gives **Rayleigh quotient iteration**, cubically convergent for symmetric matrices but needing a new factorisation each step.

### Dense eigenvalue algorithms in outline

The **QR algorithm** iterates $A_k = Q_kR_k$, $A_{k+1} = R_kQ_k = Q_k^\mathsf{T}A_kQ_k$, an orthogonal similarity; it is simultaneous power iteration on all columns, and $A_k$ converges to triangular (Schur) form with the eigenvalues on the diagonal. Two ingredients make it practical: reduction to **Hessenberg form** by Householder reflectors ($\tfrac{10}{3}n^3$ flops, after which each QR step costs $O(n^2)$ by Givens rotations), and Wilkinson **shifts** that make the last diagonal entry converge quadratically or cubically before deflation. The total is about $10n^3$ flops for all eigenvalues, $25n^3$ with eigenvectors; for symmetric $A$ the Hessenberg form is tridiagonal and eigenvalues cost about $\tfrac{4}{3}n^3$. This is `np.linalg.eig` and `eigh`. It is backward stable, and for symmetric matrices Weyl's theorem gives $|\delta\lambda_i| \le \|\delta A\|_2$. For large sparse symmetric matrices **Lanczos**, the symmetric form of Arnoldi (Lesson m3-l1), finds extreme eigenvalues in $O(k\,\mathrm{nnz})$ flops (`scipy.sparse.linalg.eigsh`).

### Markov chains and the Perron–Frobenius theorem

A **column-stochastic** matrix $P$ has nonnegative entries and columns summing to 1; $p_{ij}$ is the probability of moving from state $j$ to state $i$, and the distribution evolves by $\pi_{k+1} = P\pi_k$. Since $\mathbf{1}^\mathsf{T}P = \mathbf{1}^\mathsf{T}$, $\lambda = 1$ is an eigenvalue, and every eigenvalue satisfies $|\lambda| \le \|P\|_1 = 1$. The **Perron–Frobenius theorem** states that if $P$ is irreducible and aperiodic (in particular if all entries are positive), then $\lambda_1 = 1$ is simple, $|\lambda_i| < 1$ for $i \ge 2$, and the eigenvector can be chosen with positive entries summing to 1: the unique **stationary distribution**. Power iteration is then exactly the evolution of the chain, and it converges from any starting distribution at the rate $|\lambda_2|^k$.

### PageRank

Model the web as a directed graph of $n$ pages with random-surfer matrix $p_{ij} = 1/d_j$ if page $j$ links to page $i$ ($d_j$ the out-degree of $j$), else $0$. Dangling pages ($d_j = 0$) give zero columns, and disconnected or periodic components violate irreducibility. Brin and Page's remedy is the **Google matrix**

$$G = \alpha P + (1 - \alpha)\frac{1}{n}\mathbf{1}\mathbf{1}^\mathsf{T}, \qquad \alpha = 0.85,$$

with dangling columns of $P$ first replaced by $\mathbf{1}/n$: the surfer follows a random link with probability $\alpha$, else jumps to a random page. $G$ is positive and column-stochastic, so by Perron–Frobenius the **PageRank vector** $\pi = G\pi$, $\mathbf{1}^\mathsf{T}\pi = 1$, is unique and positive. The other eigenvalues of $G$ are $\alpha$ times those of $P$, so $|\lambda_2(G)| \le \alpha$ and power iteration converges as $\alpha^k$ for any graph: $0.85^k < 10^{-8}$ needs $k \approx 113$. $G$ is dense and must never be formed; using $\mathbf{1}^\mathsf{T}\pi = 1$,

$$G\pi = \alpha P\pi + \frac{1 - \alpha}{n}\mathbf{1},$$

one sparse product plus a constant, $2\,\mathrm{nnz}$ flops per iteration with $\mathrm{nnz}$ the number of links: a rank-one correction applied implicitly, the matrix-free philosophy of Lesson m3-l1. The same construction ranks nodes in citation or protein-interaction networks.

```python
import numpy as np
import scipy.sparse as sp

def pagerank(links, n, alpha=0.85, tol=1e-10):
    src = np.array([s for s, t in links]); dst = np.array([t for s, t in links])
    out = np.bincount(src, minlength=n).astype(float)          # out-degrees (none zero here)
    P = sp.csr_matrix((1.0 / out[src], (dst, src)), shape=(n, n))   # column-stochastic
    pi = np.full(n, 1.0 / n); k = 0
    while True:
        new = alpha * (P @ pi) + (1 - alpha) / n               # G @ pi without forming G
        k += 1
        if np.abs(new - pi).sum() < tol:
            return new, k
        pi = new

links = [(0, 1), (0, 2), (1, 2), (2, 0), (3, 2)]                # page s links to page t
pi, k = pagerank(links, 4)
print(pi.round(4), k)        # [0.3725 0.1958 0.3942 0.0375]  about 130 iterations (0.85^k)
```

## Key Ideas

- **Power iteration**: $x_k \propto A^kx_0 \to v_1$ with error $|\lambda_2/\lambda_1|^k$; the Rayleigh quotient converges at the squared rate for symmetric $A$; one product per step.
- **Shifts**: inverse iteration on $(A - \mu I)^{-1}$ finds the eigenvalue nearest $\mu$ with one factorisation reused; Rayleigh quotient iteration converges cubically.
- **QR algorithm**: Hessenberg reduction plus shifted QR steps gives all eigenvalues in about $10n^3$ flops, backward stably; Lanczos does the sparse symmetric case.
- **Perron–Frobenius**: a positive column-stochastic matrix has a simple eigenvalue 1 with a positive stationary vector, and all other eigenvalues inside the unit circle.
- **Google matrix**: $G = \alpha P + (1-\alpha)\mathbf{1}\mathbf{1}^\mathsf{T}/n$ fixes dangling and disconnected pages; $|\lambda_2| \le \alpha$ so power iteration converges as $0.85^k$.
- **Never form $G$**: $G\pi = \alpha P\pi + (1-\alpha)/n$ costs $2\,\mathrm{nnz}$ flops, which is what makes a billion-page computation feasible.

## Worked Examples

### Example 1 — Power iteration and the Rayleigh quotient by hand

Apply three steps of power iteration to $A = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$ from $x_0 = (1, 0)^\mathsf{T}$ and compare with the exact eigenvalues $3$ and $1$.

**Solution.** Working with unnormalised vectors (normalisation does not change directions): $x_1 = Ax_0 = (2, 1)^\mathsf{T}$, $x_2 = (5, 4)^\mathsf{T}$, $x_3 = (14, 13)^\mathsf{T}$. Since $x_0 = \tfrac{1}{2}(1, 1)^\mathsf{T} + \tfrac{1}{2}(1, -1)^\mathsf{T}$, we have $x_k = \tfrac{1}{2}\big(3^k(1, 1)^\mathsf{T} + (1, -1)^\mathsf{T}\big)$, and the direction error $(x_{k,1} - x_{k,2})/(x_{k,1} + x_{k,2}) = 3^{-k}$: exactly $(\lambda_2/\lambda_1)^k$. The Rayleigh quotients are

$$\mu_1 = \frac{(2,1)A(2,1)^\mathsf{T}}{5} = \frac{14}{5} = 2.8, \qquad \mu_2 = \frac{122}{41} = 2.9756, \qquad \mu_3 = \frac{1094}{365} = 2.99726 .$$

The errors $0.2$, $0.0244$, $0.00274$ shrink by factors $0.122$ and $0.112$, approaching $(\lambda_2/\lambda_1)^2 = 1/9 = 0.111$: the eigenvalue converges at the squared rate, as the stationarity of the Rayleigh quotient predicts.

### Example 2 — PageRank of a four-page web

Pages 1 to 4 have links $1 \to 2$, $1 \to 3$, $2 \to 3$, $3 \to 1$, $4 \to 3$. Compute the PageRank vector with $\alpha = 0.85$.

**Solution.** The out-degrees are $d = (2, 1, 1, 1)$, so the column-stochastic matrix has columns $(0, \tfrac{1}{2}, \tfrac{1}{2}, 0)$, $(0, 0, 1, 0)$, $(1, 0, 0, 0)$, $(0, 0, 1, 0)$. With $\mathbf{1}^\mathsf{T}\pi = 1$ and $(1 - \alpha)/n = 0.0375$, the equation $\pi = \alpha P\pi + 0.0375\,\mathbf{1}$ reads

$$\pi_1 = 0.85\pi_3 + 0.0375, \quad \pi_2 = 0.425\pi_1 + 0.0375, \quad \pi_3 = 0.85(\tfrac{1}{2}\pi_1 + \pi_2 + \pi_4) + 0.0375, \quad \pi_4 = 0.0375 .$$

Substituting $\pi_2$ and $\pi_4$ into the third equation gives $\pi_3 = 0.78625\pi_1 + 0.10125$, and then $\pi_1 = 0.85(0.78625\pi_1 + 0.10125) + 0.0375 = 0.66831\pi_1 + 0.12356$, so $\pi_1 = 0.12356/0.33169 = 0.3725$. Hence $\pi_2 = 0.1958$, $\pi_3 = 0.3942$, $\pi_4 = 0.0375$, summing to $1$. Page 3, with three in-links, ranks first; page 1 ranks second with a single in-link because that link comes from the top page; page 4, with no in-links, receives only the teleportation mass $0.0375$. One power step from the uniform vector gives $(0.25, 0.144, 0.569, 0.0375)$, already in the right order.

### Example 3 — PageRank at web scale

Estimate the cost of computing PageRank for $n = 10^9$ pages with $10^{10}$ links to accuracy $10^{-8}$ at $10^{10}$ flop/s, and the memory needed, with and without forming $G$.

**Solution.** Iterations: $0.85^k \le 10^{-8}$ gives $k \ge 18.42/0.1625 = 113$. Each costs $2\,\mathrm{nnz} = 2 \times 10^{10}$ flops for $P\pi$ plus $O(n)$ for the shift and the convergence test, about $2.2 \times 10^{10}$ flops, so $113$ iterations take $2.5 \times 10^{12}$ flops, roughly four minutes. Memory: the entries of $P$ are all $1/d_j$, so only the links are stored, $10^{10}$ four-byte column indices ($40$ GB) plus row pointers and out-degrees ($8$ GB), and two $8$ GB vectors; about $65$ GB across a cluster. Forming $G$ would need $n^2 = 10^{18}$ entries, $8$ exabytes, and $2 \times 10^{18}$ flops per iteration, over six years each. The rank-one trick separates possible from impossible.

## Common Misconceptions

- **"Eigenvalues are computed from the characteristic polynomial."** Polynomial roots are far more sensitive to coefficients than eigenvalues are to matrix entries; practical methods are iterative similarity transformations.
- **"Power iteration converges to the largest eigenvalue."** To the largest in *modulus*, and only if unique; for $\operatorname{diag}(3, -3)$ it never converges.
- **"PageRank counts in-links."** One link from an important page can outweigh several from unimportant ones (page 1 in Example 2).
- **"The damping factor $\alpha$ is a technicality."** It guarantees uniqueness via Perron–Frobenius and sets the rate $\alpha^k$; $\alpha \to 1$ restores the raw chain's ambiguities.
- **"The Google matrix must be stored to iterate with it."** $G\pi$ is a sparse product plus a constant; storing $G$ is impossible and unnecessary.

## Connections

- The Markov chains of Linear Algebra (Lesson m3-l1) are here solved at scale; PageRank is their stationary distribution computed by power iteration.
- The Rayleigh quotient is the variational principle of Introduction to Quantum Mechanics: the ground-state energy is the minimum of $\langle\psi|H|\psi\rangle/\langle\psi|\psi\rangle$, and imaginary-time evolution is power iteration on $e^{-\tau H}$.
- Normal modes in Mechanics and the band structure of Solid State Physics are symmetric eigenproblems solved by the tridiagonal QR algorithm for small systems and by Lanczos for large ones.
- Stability analysis of stellar models (Astrophysics) and numerical schemes (Differential Equations) needs the eigenvalue of largest modulus, which shifted power iteration delivers.

## Quick Check

1. Show that the Rayleigh quotient of a symmetric matrix is stationary at an eigenvector, and deduce the squared convergence rate.
2. For $A = \operatorname{diag}(5, 4.9, 1)$, how many power iterations reduce the eigenvector error by $10^{-6}$? What shift would make inverse iteration converge in a handful of steps to the eigenvalue $4.9$?
3. Explain why $\lambda = 1$ is always an eigenvalue of a column-stochastic matrix and why no eigenvalue exceeds 1 in modulus.
4. Prove that the eigenvalues of $G$ other than 1 are $\alpha$ times eigenvalues of $P$ (hint: consider vectors $v$ with $\mathbf{1}^\mathsf{T}v = 0$).
5. A web of $10^7$ pages has $10^8$ links. Estimate the flops and memory for one PageRank iteration and the number of iterations for $10^{-6}$ accuracy.

## Takeaway

- Power iteration converges as $|\lambda_2/\lambda_1|^k$ with one product per step; the symmetric Rayleigh quotient converges twice as fast.
- Shifted inverse iteration targets any eigenvalue with one reusable factorisation; Hessenberg–QR finds all dense eigenvalues in $O(n^3)$.
- Perron–Frobenius gives a positive stochastic matrix a unique positive stationary distribution.
- PageRank is the Perron eigenvector of $G = \alpha P + (1-\alpha)\mathbf{1}\mathbf{1}^\mathsf{T}/n$; damping fixes the graph and bounds $|\lambda_2| \le \alpha$.
- $G\pi = \alpha P\pi + (1-\alpha)/n$ costs $2\,\mathrm{nnz}$ per iteration: minutes, not millennia, for a billion pages.
