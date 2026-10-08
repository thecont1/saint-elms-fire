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
lessonId: computational-linear-algebra-m3-l3
lessonName: Randomised SVD, Memory Hierarchy and Large-Scale Applications
lessonNumber: 9
moduleNumber: 3
semesterNumber: 6
difficulty: advanced
estimatedStudyMinutes: 60
releaseOrder: 9
prerequisites:
  - computational-linear-algebra-m3-l2
  - computational-linear-algebra-m2-l3
learningObjectives:
  - Implement a randomised SVD with oversampling and power iterations and compare its cost with a dense SVD.
  - Explain the range-finder error bounds and why $p \approx 10$ and one or two power iterations suffice.
  - Use arithmetic intensity, the roofline model and BLAS levels to explain why blocked algorithms reach peak speed and sparse products do not.
  - Apply these techniques to image compression, tall regression and spectral clustering.
concepts:
  - Randomised range finder
  - Oversampling and power iterations
  - Matrix-free linear operators
  - Arithmetic intensity and the roofline model
  - BLAS levels and blocked algorithms
  - Amdahl's law and communication cost
  - Graph Laplacian and spectral clustering
tags:
  - mathematics
  - computational-linear-algebra
  - randomised-svd
  - high-performance-computing
sourceType: authored-courseware
status: in-review
assessmentHints:
  - derivation
  - computational
  - problem-solving
  - conceptual
***

# Randomised SVD, Memory Hierarchy and Large-Scale Applications

## Overview

A dense SVD of a $10^5 \times 10^4$ matrix costs tens of teraflops, yet applications usually need only the leading $k \approx 50$ singular triplets. Randomised methods multiply $A$ by a thin random matrix, capture its dominant range in a few passes, and finish with a small SVD, using matrix–matrix products that run near peak speed, unlike the bandwidth-limited vector methods of Lessons m3-l1 and m3-l2. This lesson develops the randomised SVD and its error bound, the hardware model behind performance, and three applications.

## Learning Path

- **What you should already know**: the SVD and Eckart–Young (Lesson m2-l3); Householder QR (Lesson m2-l1); CSR storage (Lesson m1-l3); power iteration and Lanczos (Lesson m3-l2).
- **What this lesson adds**: the randomised range finder with oversampling and power iterations; matrix-free operators; roofline, BLAS levels, blocking and parallel scaling; spectral clustering.
- **What later lessons this will unlock**: large-data work in Mathematics Lab using Python III and Mathematical Modelling; this lesson completes the course.

## Core Explanation

### The randomised range finder

If orthonormal $Q \in \mathbb{R}^{m \times \ell}$ nearly spans the top $k$ left singular vectors of $A \in \mathbb{R}^{m \times n}$, then $A \approx QQ^\mathsf{T}A$. To find $Q$, draw a Gaussian $\Omega \in \mathbb{R}^{n \times \ell}$, $\ell = k + p$ with small **oversampling** $p$; the columns of $Y = A\Omega$ are dominated by the leading singular directions. The **randomised SVD** (Halko, Martinsson and Tropp) is:

1. $Y = A\Omega$; thin QR $Y = QR$.
2. $B = Q^\mathsf{T}A \in \mathbb{R}^{\ell \times n}$.
3. Dense SVD $B = \tilde U\Sigma V^\mathsf{T}$.
4. $U = Q\tilde U$; keep the first $k$ triplets.

Since $QQ^\mathsf{T}A = U\Sigma V^\mathsf{T}$ exactly, the only error is $\|A - QQ^\mathsf{T}A\|$. The cost is two products with $A$ ($2mn\ell$ flops each), a QR ($2m\ell^2$) and a small SVD ($O(n\ell^2)$): $O(mn\ell)$, against $O(mn\min(m,n))$ for a dense SVD. $A$ enters only through products.

### Why oversampling works: the error bound

Partition $A = U\operatorname{diag}(\Sigma_1, \Sigma_2)[V_1\ V_2]^\mathsf{T}$ with $\Sigma_1$ holding $\sigma_1, \dots, \sigma_k$, and set $\Omega_1 = V_1^\mathsf{T}\Omega$ ($k \times \ell$), $\Omega_2 = V_2^\mathsf{T}\Omega$. If $\Omega_1$ has full row rank, the **deterministic bound** is

$$\|A - QQ^\mathsf{T}A\|^2 \le \|\Sigma_2\|^2 + \|\Sigma_2\Omega_2\Omega_1^{+}\|^2$$

in the 2- and Frobenius norms. The first term is the Eckart–Young optimum; the second is large only if $\Omega_1$ is nearly rank-deficient. By rotational invariance $\Omega_1, \Omega_2$ are independent Gaussians with $\mathbb{E}\|\Omega_1^{+}\|_F^2 = k/(p-1)$ for $p \ge 2$; a square $\Omega_1$ ($p = 0$) is often nearly singular. Taking expectations,

$$\mathbb{E}\|A - QQ^\mathsf{T}A\|_F \le \Big(1 + \frac{k}{p-1}\Big)^{1/2}\Big(\sum_{j>k}\sigma_j^2\Big)^{1/2},$$

$$\mathbb{E}\|A - QQ^\mathsf{T}A\|_2 \le \Big(1 + \frac{4\sqrt{k+p}}{p-1}\sqrt{\min(m,n)}\Big)\sigma_{k+1}.$$

Large deviations above such bounds have probability decaying like $p^{-p}$; $p = 5$ to $10$ suffices.

### Power iterations

When singular values decay slowly, sample $(AA^\mathsf{T})^qA$ instead, with singular values $\sigma_j^{2q+1}$ and the same singular vectors. This block power iteration (Lesson m3-l2) gives

$$\mathbb{E}\|A - QQ^\mathsf{T}A\|_2 \le \Big(1 + \frac{4\sqrt{k+p}}{p-1}\sqrt{\min(m,n)}\Big)^{1/(2q+1)}\sigma_{k+1}.$$

For $k = 50$, $p = 10$, $\min(m,n) = 10^4$ the factor is $345$ at $q = 0$, $7.0$ at $q = 1$ and $3.2$ at $q = 2$. Small singular directions drop below $u$ after a few products, so $Q$ is re-orthonormalised after every application of $A$ or $A^\mathsf{T}$; each iteration costs two passes.

```python
import numpy as np

def randomized_svd(A, k, p=10, q=2, seed=0):
    rng = np.random.default_rng(seed)
    Omega = rng.standard_normal((A.shape[1], k + p))
    Q, _ = np.linalg.qr(A @ Omega)              # range finder, m x (k+p)
    for _ in range(q):                           # power iterations, re-orthonormalised
        Q, _ = np.linalg.qr(A.T @ Q)
        Q, _ = np.linalg.qr(A @ Q)
    B = Q.T @ A                                  # (k+p) x n
    Ub, s, Vt = np.linalg.svd(B, full_matrices=False)
    return (Q @ Ub)[:, :k], s[:k], Vt[:k]

m, n = 2000, 1000                                # test matrix with sigma_j = 0.8^(j-1)
rng = np.random.default_rng(1)
U0, _ = np.linalg.qr(rng.standard_normal((m, n)))
V0, _ = np.linalg.qr(rng.standard_normal((n, n)))
sigma = 0.8 ** np.arange(n)
A = (U0 * sigma) @ V0.T
U, s, Vt = randomized_svd(A, k=20)
print(np.linalg.norm(A - (U * s) @ Vt, 2), sigma[20])   # both close to 0.8^20 = 0.0115
```

The function uses only `A @ X` and `A.T @ X`, so it runs unchanged on sparse matrices; plotting `s` against `sigma[:20]` on a log scale shows the curves coinciding.

### Sparse and matrix-free computation

CSR (Lesson m1-l3) serves $y = Ax$ by rows; its twin **CSC** stores columns and serves $A^\mathsf{T}y$. **Matrix-free** methods never assemble $A$, only routines for $x \mapsto Ax$ and $y \mapsto A^\mathsf{T}y$ (`scipy.sparse.linalg.LinearOperator`), as in PageRank and CG. The price is speed per flop: CSR performs 2 flops per nonzero while reading an 8-byte value and a 4-byte index, at most $1/6$ flop per byte.

### Memory hierarchy and the roofline

Data travel through registers, L1 cache (tens of kB, about 1 ns), L2 and L3 (up to tens of MB), then main memory (about 100 ns, of order $10^{11}$ bytes/s). The **arithmetic intensity** $I$ is flops per byte moved from memory, and the **roofline model** bounds speed:

$$\text{attainable flop/s} = \min\big(\text{peak flop/s},\ I \times \text{bandwidth}\big).$$

With peak $10^{12}$ flop/s and $10^{11}$ bytes/s the ridge is $I = 10$; kernels below it are **memory-bound**.

### BLAS levels and blocking

| Level | Example | Flops | Data (words) | Intensity (flop/byte, double) |
|---|---|---|---|---|
| 1 | $y \leftarrow \alpha x + y$ | $2n$ | $3n$ | $1/12$ |
| 2 | $y \leftarrow Ax + y$ | $2n^2$ | $n^2$ | $1/4$ |
| 3 | $C \leftarrow AB + C$ | $2n^3$ | $4n^2$ | up to $n/16$ |

Level 3 needs cache reuse. Partition into $b \times b$ blocks with three fitting in a cache of $M$ bytes, $24b^2 \le M$. Each of the $(n/b)^3$ block products does $2b^3$ flops and loads two blocks ($16b^2$ bytes), so

$$I_{\text{blocked}} = \frac{2n^3}{16n^3/b} = \frac{b}{8}.$$

A 256 kB cache gives $b \approx \sqrt{262144/24} \approx 104$ and $I \approx 13$, above the ridge. LAPACK's blocked LU, Cholesky and QR cast most work as Level 3 updates, which is how `dgetrf` (Lesson m1-l2) nears peak. Likewise $A\Omega$ is Level 3, whereas Lanczos performs $k$ sequential Level 2 products.

### Parallelism

With serial fraction $f$, **Amdahl's law** limits the speed-up on $P$ processors to

$$S(P) = \frac{1}{f + (1 - f)/P} < \frac{1}{f};$$

$f = 0.05$, $P = 64$ gives $S = 1/(0.05 + 0.0148) = 15.4$, never above $20$. **Strong scaling** fixes the problem size, **weak scaling** grows it with $P$. On distributed memory communication dominates: every inner product needs a global reduction with latency growing like $\log P$, so CG's two per iteration bottleneck at scale, while the randomised SVD's block products do not.

### Applications

**Image compression.** A $2000 \times 3000$ image at rank $k$ needs $k(m + n + 1)$ numbers; at $k = 100$, $500{,}100$ against $6 \times 10^6$, a factor of 12, with relative 2-norm error $\sigma_{101}/\sigma_1$ by Eckart–Young.

**Regression at scale.** With $m = 10^8$ rows and $n = 50$ columns, $A$ occupies $40$ GB. **TSQR** QRs each processor's block of rows, then QRs the stacked $n \times n$ factors $R_i$: one pass, $n^2$ numbers communicated per processor, as stable as Householder QR. **Sketch-and-precondition** takes $R$ from the QR of $SA$, with random $S \in \mathbb{R}^{s \times m}$, $s$ a small multiple of $n$, and runs LSQR on $AR^{-1}$, whose condition number is at most $(1 + \varepsilon)/(1 - \varepsilon)$ if $S$ preserves column-space norms within $\varepsilon$.

**Spectral clustering.** For symmetric weights $W$ and degrees $D$, the **graph Laplacian** $L = D - W$ satisfies

$$x^\mathsf{T}Lx = \sum_{(i,j) \in E} w_{ij}(x_i - x_j)^2 \ge 0,$$

so $L$ is positive semidefinite, $L\mathbf{1} = 0$, and eigenvalue 0 has multiplicity equal to the number of connected components. The **Fiedler vector**, for the second-smallest eigenvalue $\lambda_2$, minimises $x^\mathsf{T}Lx$ over unit $x \perp \mathbf{1}$, relaxing the problem of cutting fewest edges between balanced groups; its signs give a partition. For $c$ clusters, $k$-means runs on the rows of the first $c$ eigenvectors, computed by Lanczos (`eigsh`).

## Key Ideas

- **Range finder**: $Y = A\Omega$, $Q = \operatorname{qr}(Y)$, $B = Q^\mathsf{T}A$, SVD of $B$; $O(mn\ell)$ flops.
- **Oversampling**: $p \approx 10$ keeps $\Omega_1$ well conditioned; error near $\sigma_{k+1}$.
- **Power iterations**: the prefactor shrinks to its $(2q+1)$-th root; re-orthonormalise each pass.
- **Roofline**: speed is $\min(\text{peak}, I \times \text{bandwidth})$; CSR has $I \le 1/6$, blocked Level 3 $b/8$.
- **Parallelism**: Amdahl caps speed-up at $1/f$; reductions limit Krylov methods.

## Worked Examples

### Example 1 — Cost of a randomised SVD at scale

A dense $A$ has $m = 10^5$, $n = 10^4$. Estimate the flops and working memory of a rank-50 randomised SVD with $p = 10$, $q = 1$, against a dense SVD.

**Solution.** With $\ell = 60$, there are $2 + 2q = 4$ products with $A$ or $A^\mathsf{T}$, each $2mn\ell = 1.2 \times 10^{11}$ flops: $4.8 \times 10^{11}$. Three QRs cost $3 \times 2m\ell^2 = 2.2 \times 10^9$; the SVD of $B$ and $Q\tilde U$ ($2m\ell k = 6 \times 10^8$) add about $10^9$. Total: about $4.8 \times 10^{11}$. A dense SVD's initial reduction alone costs at least $2mn^2 - \tfrac{2}{3}n^3 = 1.9 \times 10^{13}$, so the randomised method is at least about 40 times cheaper. Extra memory is $10^5 \times 60 \times 8 = 48$ MB beside the $8$ GB of $A$.

### Example 2 — The roofline for a sparse product and a matrix product

With peak $10^{12}$ flop/s and bandwidth $10^{11}$ bytes/s, estimate the time of (a) a CSR product with $n = 10^7$, $\mathrm{nnz} = 5 \times 10^7$; (b) a $4000 \times 4000$ matrix product, naive and blocked with $b = 104$.

**Solution.** (a) Traffic is $12$ bytes per nonzero plus about $20$ per row: $8 \times 10^8$ bytes, $8$ ms, though the $10^8$ flops need $0.1$ ms at peak. Intensity $0.125$ gives $1.25\%$ of peak. (b) $2n^3 = 1.28 \times 10^{11}$ flops. A naive loop streaming $B$ for each row has $I \approx 0.25$: $2.5 \times 10^{10}$ flop/s, $5.1$ s. Blocked, $I = 13 > 10$, so the product is compute-bound: $0.128$ s, forty times faster with identical arithmetic.

### Example 3 — Spectral partition of two triangles

Vertices $1,2,3$ and $4,5,6$ form two triangles joined by edge $3$–$4$ (unit weights). Find $\lambda_2$ and the Fiedler vector.

**Solution.** Degrees are $(2, 2, 3, 3, 2, 2)$. By the reflection $1 \leftrightarrow 6$, $2 \leftrightarrow 5$, $3 \leftrightarrow 4$, try $x = (a, a, b, -b, -a, -a)$. Row 1 of $Lx = \lambda x$: $2a - a - b = \lambda a$, so $b = (1 - \lambda)a$. Row 3: $3b - 2a + b = \lambda b$. Substituting,

$$4(1 - \lambda) - 2 = \lambda(1 - \lambda) \quad\Longrightarrow\quad \lambda^2 - 5\lambda + 2 = 0, \quad \lambda = \frac{5 \pm \sqrt{17}}{2} = 0.438,\ 4.562.$$

Symmetric vectors $(a, a, b, b, a, a)$ give $\lambda = 0, 3$, and $(1, -1, 0, 0, 0, 0)$, $(0, 0, 0, 0, 1, -1)$ give $3$. The spectrum $0, 0.438, 3, 3, 3, 4.562$ sums to $14 = \operatorname{tr}L$. So $\lambda_2 = 0.438$ with Fiedler vector $(1, 1, 0.562, -0.562, -1, -1)$, whose signs separate the triangles.

## Common Misconceptions

- **"Randomised answers are unreliable."** Failure at $p = 10$ is negligible, and the error can be estimated a posteriori.
- **"Fewer flops always means faster."** Memory-bound kernels can run at 1% of peak; blocked code doing more flops can finish first.
- **"Sparse formats make everything cheap."** Sparse products are bandwidth-bound, and sparse factorisations suffer fill-in (Lesson m1-l3).
- **"Doubling processors halves the time."** Serial fractions and global reductions cap the speed-up.
- **"Spectral clustering needs the full eigendecomposition."** A few Lanczos eigenpairs of sparse $L$ suffice.

## Connections

- PCA (Lesson m2-l3) of survey spectra in Astrophysics IV — Galaxies, Cosmology and Compact Objects uses randomised SVD at million-object scale.
- Mathematics Lab using Python III practises `scipy.sparse`, `LinearOperator` and roofline timing.
- The graph Laplacian is the discrete $-\nabla^2$ of Electricity and Magnetism; its eigenvectors are the normal modes of a spring network in Mechanics.
- Calibration in Mathematical Modelling (Math Elective II, C) yields tall least-squares problems for TSQR.

## Quick Check

1. Give the four steps of the randomised SVD and the flops of each for $A \in \mathbb{R}^{m \times n}$, $\ell = k + p$.
2. Why does $p = 0$ often fail while $p = 10$ almost never does? Refer to $\Omega_1 = V_1^\mathsf{T}\Omega$.
3. With $k = 20$, $p = 10$, $\min(m,n) = 10^6$, evaluate the spectral prefactor for $q = 0, 1, 2$.
4. Derive $I = b/8$ and the block size for a $1$ MB cache.
5. Show that $L = D - W$ is positive semidefinite and that the multiplicity of $\lambda = 0$ counts connected components.

## Takeaway

- The randomised SVD gives a rank-$k$ SVD from $A\Omega$ in $O(mn\ell)$ flops and a few passes.
- Oversampling makes the error near-optimal; power iterations shrink the prefactor.
- Data movement governs speed: blocked Level 3 kernels reach peak, sparse and Level 2 kernels are bandwidth-bound.
- Serial work and communication limit parallel speed-up.
- Truncated SVD, TSQR, sketching and Laplacian eigenvectors carry these ideas to images, regression and networks.
