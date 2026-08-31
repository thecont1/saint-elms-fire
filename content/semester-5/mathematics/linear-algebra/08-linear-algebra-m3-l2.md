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
lessonId: linear-algebra-m3-l2
lessonName: Singular Value Decomposition and Applications
lessonNumber: 8
moduleNumber: 3
semesterNumber: 3
difficulty: advanced
estimatedStudyMinutes: 55
releaseOrder: 8
prerequisites:
  - linear-algebra-m2-l2
  - linear-algebra-m3-l1
learningObjectives:
  - State the singular value decomposition (SVD) theorem.
  - Use SVD to solve least-squares problems.
  - Apply SVD to image compression and dimensionality reduction.
  - Compute the pseudoinverse and condition number.
concepts:
  - SVD
  - Singular values
  - Pseudoinverse
  - Low-rank approximation
  - Principal component analysis
  - Condition number
tags:
  - mathematics
  - algebra
  - svd
sourceType: authored-courseware
assessmentHints:
  - derivation
  - problem-solving
  - conceptual
***

# Singular Value Decomposition and Applications

## Overview
The *singular value decomposition* (SVD) is the most important matrix decomposition in numerical linear algebra. It generalises the eigendecomposition to non-square matrices and has a remarkable variety of applications: least squares, low-rank approximation, image compression, principal component analysis, pseudoinverse, and condition number. This lesson develops the SVD theorem, its computation, and its major applications.

## Learning Path
- What you should already know: eigenvalues, eigenvectors, orthogonal matrices, projections.
- What this lesson adds: the SVD and its many uses.
- What it unlocks: numerical linear algebra, statistics, signal processing, and the mathematics of data.

## Core Explanation
**SVD theorem.** Any $m \times n$ matrix $A$ (with $m \ge n$) can be written as $A = U \Sigma V^T$, where $U$ is an $m \times m$ orthogonal matrix, $V$ is an $n \times n$ orthogonal matrix, and $\Sigma$ is an $m \times n$ "diagonal" matrix with non-negative entries $\sigma_1 \ge \sigma_2 \ge \ldots \ge \sigma_n \ge 0$ on the diagonal (the *singular values*). The columns of $U$ are the *left singular vectors*; the columns of $V$ are the *right singular vectors*.

**Existence of SVD.** Proof sketch: $A^T A$ is symmetric positive semi-definite, so it has an orthonormal eigenbasis $V = (v_1, \ldots, v_n)$ with eigenvalues $\sigma_i^2$. The left singular vectors are $u_i = A v_i / \sigma_i$ (when $\sigma_i \ne 0$); extend to an orthonormal basis of $\mathbb{R}^m$. Then $A = U \Sigma V^T$.

**Reduced SVD.** If $A$ has rank $r$, only the first $r$ singular values are non-zero. The reduced SVD is $A = U_r \Sigma_r V_r^T$ with $U_r$ ($m \times r$), $\Sigma_r$ ($r \times r$, diagonal with $\sigma_1, \ldots, \sigma_r$), and $V_r$ ($n \times r$).

**Properties of singular values.** $\sigma_i \ge 0$. The number of non-zero $\sigma_i$ is the rank of $A$. $\sigma_{\max}$ is the operator norm of $A$ (the largest singular value). $\sigma_{\min}$ (the smallest non-zero) relates to the pseudoinverse.

**Relation to eigenvalues.** The $\sigma_i^2$ are the eigenvalues of $A^T A$ (and of $A A^T$). The columns of $V$ are the eigenvectors of $A^T A$; the columns of $U$ are the eigenvectors of $A A^T$. The SVD packages the eigendecompositions of both.

**Geometric meaning.** $A$ maps the unit sphere in $\mathbb{R}^n$ to an ellipsoid in $\mathbb{R}^m$. The right singular vectors are the principal axes of the pre-image; the singular values are the semi-axis lengths; the left singular vectors are the directions of the image.

**Pseudoinverse.** The *Moore–Penrose pseudoinverse* of $A$ is $A^+ = V \Sigma^+ U^T$, where $\Sigma^+$ is the diagonal matrix with $1/\sigma_i$ in the non-zero positions and $0$ elsewhere. The pseudoinverse gives the minimum-norm least-squares solution of $A x = b$: $x = A^+ b$.

**Least squares.** Solve $A x \approx b$ in the least-squares sense (minimise $\|A x - b\|^2$). If $A$ has full column rank, $x = (A^T A)^{-1} A^T b = A^+ b$. The pseudoinverse generalises this to rank-deficient $A$.

**Total least squares.** When both $A$ and $b$ have errors, the total least squares problem minimises $\|[\Delta A | \Delta b]\|_F$ subject to $(A + \Delta A) x = b + \Delta b$. The solution is the right singular vector of $[A | b]$ for the smallest singular value.

**Condition number.** $\kappa(A) = \sigma_\text{max} / \sigma_\text{min}$ (ratio of largest to smallest non-zero singular value). Measures the sensitivity of $A x = b$ to perturbations. A system is *ill-conditioned* if $\kappa$ is large; the solution is sensitive to round-off error.

**Residual and solution error.** For $A x = b$ with perturbation $\delta b$, the solution changes by $\|\delta x\| / \|x\| \le \kappa \cdot \|\delta b\| / \|b\|$ (relative error). The condition number bounds the amplification.

**Best low-rank approximation.** The SVD gives the best rank-$k$ approximation to $A$ (in the Frobenius and spectral norms): $A_k = U_k \Sigma_k V_k^T$, where $U_k, V_k$ are the first $k$ columns of $U, V$ and $\Sigma_k$ is the top-left $k \times k$ block. The error $\|A - A_k\|_F^2 = \sum_{i > k} \sigma_i^2$ is the smallest possible.

**Image compression.** Treat an image as an $m \times n$ matrix. Compute the SVD. The first $k$ singular values and vectors give a rank-$k$ approximation. Storage: $k(m + n + 1)$ vs. $mn$ for the full image. Significant compression for natural images (where the singular values decay rapidly).

**Image compression example.** A $512 \times 512$ image ($2^{18}$ bytes uncompressed) with rank $k = 30$ approximation: $30 (512 + 512 + 1) \approx 30,000$ bytes, a $9\times$ compression. The error (residual Frobenius norm) is small for natural images.

**Principal component analysis (PCA).** Given data points $x_1, \ldots, x_n \in \mathbb{R}^p$, form the centred data matrix $X$ ($n \times p$) and compute the SVD: $X = U \Sigma V^T$. The columns of $V$ are the *principal components* (the eigenvectors of the covariance matrix $X^T X$). The projection onto the first $k$ columns gives the best $k$-dimensional approximation to the data.

**PCA for dimensionality reduction.** The first $k$ principal components capture most of the variance. Used in statistics, machine learning, and data visualisation.

**SVD and the pseudoinverse in physics.** The SVD is the workhorse for solving ill-conditioned systems (e.g. the inverse problem in optics, tomography, source localisation). The pseudoinverse gives the minimum-norm solution.

**Tomography.** The inverse Radon transform (CT scan reconstruction) is computed via filtered back-projection. The SVD gives a way to analyse the ill-conditioning of the discretised problem.

**Signal processing.** The SVD separates a signal into orthogonal components, ordered by importance (the singular values). Used in noise reduction, feature extraction, and source separation.

**Independent component analysis (ICA).** Separates a multivariate signal into additive components, assuming non-Gaussianity and statistical independence. A generalisation of PCA.

**Recommender systems.** Matrix factorisation: given a user-item matrix (ratings), find low-rank factors that approximate it. The SVD gives one such factorisation.

**Collaborative filtering.** Predict user-item ratings from the observed ones. The SVD is the basis of many algorithms.

**Latent semantic analysis (LSA).** Document-term matrix: each document is a row, each term is a column. SVD factorises into topic, document, and term matrices. Used in information retrieval and text analysis.

**SVD for image recognition.** The "eigenfaces" of a face dataset. Each face is a vector; the principal components (eigenvectors of the covariance) are the eigenfaces. Faces are represented by their projections.

**Truncated SVD.** $A_k = U_k \Sigma_k V_k^T$ for $k < \text{rank}(A)$. The best rank-$k$ approximation. Used in compression, denoising, and dimensionality reduction.

**SVD for noisy data.** A noisy matrix has many small singular values; the signal is in the large ones. Truncating small singular values denoises the matrix.

**Numerical computation of SVD.** Standard algorithms: Golub–Kahan bidiagonalisation + QR, or divide-and-conquer. Implemented in LAPACK (dgesdd, dgesvd). Numerical stability is excellent.

**SVD and the normal equations.** Solving $A x = b$ in the least-squares sense via the normal equations $A^T A x = A^T b$ is $\kappa^2$ times more ill-conditioned than solving via SVD. Always use SVD for ill-conditioned problems.

**SVD and the pseudoinverse of a product.** $(A B)^+ \ne B^+ A^+$ in general. But $(A B)^{+} = B^+ (A B B^+)^{+}$ (the Greville formula).

**Condition number in numerical analysis.** $\kappa(A) = \sigma_\text{max}/\sigma_\text{min}$. The reciprocal condition number $1/\kappa$ is what LAPACK reports. Ill-conditioned systems have $\kappa \gg 1$.

**SVD and integral equations.** The Fredholm integral equation $K f = g$ can be discretised and solved by SVD. The singular values reveal the conditioning.

**Image deblurring.** A blurred image is the convolution of the original with a point spread function. Deconvolution (in Fourier or by SVD) recovers the original.

**Compressed sensing.** A signal $x$ with $k$ nonzero entries is recovered from $m < n$ linear measurements by $l_1$ minimisation. The SVD (or a similar isometry) is used in the analysis.

**Total variation denoising.** Adds a smoothness penalty to least squares. Equivalent to a regularised least squares, solvable by SVD.

**SVD and the cross-product matrix.** $A^T A = V \Sigma^2 V^T$. The right singular vectors are the eigenvectors of $A^T A$. The singular values squared are the eigenvalues of $A^T A$.

**Pseudo-inverse in machine learning.** Many ML algorithms (linear regression, logistic regression, neural networks) involve solving (or approximately solving) linear systems. SVD gives a stable foundation.

**SVD in quantum mechanics.** The Schmidt decomposition of a bipartite state $|\psi\rangle \in H_A \otimes H_B$ is the SVD of the coefficient matrix. The number of non-zero singular values is the Schmidt rank; it measures the entanglement.

**Entanglement entropy.** $S = -\sum_i \sigma_i^2 \log \sigma_i^2$ (where $\sigma_i$ are the Schmidt coefficients, normalised). The von Neumann entropy of the reduced density matrix. A measure of bipartite entanglement.

**Schmidt decomposition.** Any pure state of a bipartite system can be written $|\psi\rangle = \sum_i \sigma_i |a_i\rangle |b_i\rangle$ with $\sigma_i > 0$, where $\{|a_i\rangle\}, \{|b_i\rangle\}$ are orthonormal. The SVD of the coefficient matrix.

**Quantum state tomography.** Reconstruct the density matrix from measurements. The SVD is used for the maximum-likelihood estimate and for rank-deficient cases.

**SVD in genomics.** The singular values of a gene expression matrix reveal the principal modes of variation. Used in differential expression analysis and in clustering.

**SVD in recommender systems.** Netflix Prize was won by a team using SVD-based collaborative filtering. The recommendations are based on a low-rank approximation of the user-movie rating matrix.

**SVD in natural language processing.** Latent semantic analysis uses SVD of the document-term matrix. Word embeddings (word2vec, GloVe) can be analysed by SVD.

**Why SVD is the workhorse.** It exists for every matrix (not just square or symmetric). It is numerically stable. It gives the best low-rank approximation. It is the basis of PCA, pseudoinverse, least squares, and many other algorithms. Every numerical library has a high-quality SVD routine.

**Computing the SVD.** The standard approach: reduce $A$ to bidiagonal form by Householder reflections, then compute the SVD of the bidiagonal matrix by QR iteration. Divide-and-conquer is faster for large matrices.

**Golub–Kahan bidiagonalisation.** Apply $U^T A V = B$ (bidiagonal) by Householder reflections. The SVD of $B$ is computed by QR iteration; the SVD of $A$ is recovered.

**QR iteration for SVD.** Apply QR to $B^T B$; the eigenvalues of $B^T B$ give the $\sigma_i^2$, and the eigenvectors give $V$. $U$ from $U = A V \Sigma^{-1}$.

**Divide-and-conquer for SVD.** Faster for large matrices. Used in LAPACK's dgesdd.

**Randomised SVD.** For very large matrices, compute an approximate SVD by sampling. Faster than exact methods, with controllable error.

**Truncated randomised SVD.** Sample $k$ columns of $A$, compute the SVD of the $m \times k$ matrix, project $A$ onto the column space, and compute the SVD of the $k \times n$ matrix. Used for matrices that don't fit in memory.

**SVD and condition number.** $\kappa(A) = \sigma_\text{max}/\sigma_\text{min}$. For $A x = b$, the error in the computed solution is bounded by $\kappa$ times machine epsilon. Large $\kappa$ means the solution is unreliable.

**Pseudoinverse for underdetermined systems.** For $A x = b$ with $m < n$ (more unknowns than equations), the pseudoinverse gives the minimum-norm solution $x = A^+ b$.

**Pseudoinverse for overdetermined systems.** For $A x = b$ with $m > n$, the pseudoinverse gives the least-squares solution (if $A$ has full rank).

**Rank-deficient case.** When $\text{rank}(A) < \min(m, n)$, the pseudoinverse is the minimum-norm least-squares solution. The solution is not unique, but the minimum-norm one is given by $A^+ b$.

**Total least squares.** Minimise the perturbation to $(A, b)$ that makes the system consistent. The TLS solution is the right singular vector of $[A | b]$ for the smallest singular value.

**SVD for deconvolution.** The blurred image is $b = A x$ where $A$ is the convolution matrix. The deconvolved image is $x = A^+ b$ (with regularisation to handle noise).

**Backus–Gilbert inversion.** A method in geophysics for inverting integral equations using SVD. Determines the resolution and the variance of the solution.

**SVD in machine learning.** Recommender systems, dimensionality reduction (PCA), image classification (eigenfaces), natural language processing (LSA, word embeddings). Foundational to data science.

**SVD in statistics.** Principal component analysis, factor analysis, correspondence analysis, multi-dimensional scaling. The basis of much of multivariate statistics.

**SVD in physics.** The Schmidt decomposition in quantum mechanics, the partial wave expansion in scattering, the singular value decomposition of operator matrices, and the analysis of ill-posed inverse problems (e.g. inverse scattering).

**Connection to the SVD in differential equations.** Boundary value problems can be discretised as $A x = b$; the SVD gives the singular functions (the continuum limit of the singular vectors).

**Why SVD is the natural language for data.** Almost any data set can be represented as a matrix. The SVD gives the principal components, the rank, the best low-rank approximation, and the pseudoinverse. It is the universal tool for matrix-based data analysis.

## Key Ideas
- SVD: $A = U \Sigma V^T$, any matrix.
- Singular values: eigenvalues of $\sqrt{A^T A}$.
- Pseudoinverse: $A^+ = V \Sigma^+ U^T$; minimum-norm least-squares solution.
- Condition number: $\kappa(A) = \sigma_\text{max}/\sigma_\text{min}$.
- Best rank-$k$ approximation: $A_k = U_k \Sigma_k V_k^T$.

## Worked Examples
**Example 1 — SVD of a $2 \times 2$.** $A = \begin{pmatrix} 3 & 0 \\ 0 & -2 \end{pmatrix}$ (already diagonal). $U = V = I$, $\Sigma = A$. Singular values $3, 2$. (Or sort: $\sigma_1 = 3, \sigma_2 = 2$.)

**Example 2 — SVD of a non-square.** $A = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$ (column vector). $A^T A = (1\ 1) \begin{pmatrix} 1 \\ 1 \end{pmatrix} = 2$. Eigenvalue $2$, eigenvector $(1, 1)^T / \sqrt{2}$. So $V = (1, 1)^T / \sqrt{2}$, $\sigma_1 = \sqrt{2}$, $U = A V / \sigma_1 = (1/\sqrt{2}, 1/\sqrt{2})^T$, $\Sigma = (\sqrt{2}, 0)$. SVD: $A = U \Sigma V^T = (1/\sqrt{2}, 1/\sqrt{2})^T (\sqrt{2}, 0) (1, 1)/\sqrt{2} = (1, 1)^T \cdot (1, 1)/2 = (1, 1)^T = A$. ✓

**Example 3 — Pseudoinverse.** $A = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}$ (rank 1). SVD: $U = V = I$, $\Sigma = \text{diag}(1, 0)$. $A^+ = V \Sigma^+ U^T = \text{diag}(1, 0) = A$. So $A^+ = A$ for this projection. The least-squares solution of $A x = b$ is $x = A^T = (x_1, 0)$ where $b = (b_1, 0)$; for other $b$, no exact solution; best is the minimum-norm one, with only $x_1$ nonzero.

**Example 4 — Best rank-1 approximation.** $A = \begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix}$. Singular value: $\sigma_1 = 2$ (eigenvalue of $A^T A = \begin{pmatrix} 2 & 2 \\ 2 & 2 \end{pmatrix}$ is $4$). Best rank-1: $A_1 = \sigma_1 u_1 v_1^T = 2 \cdot (1/\sqrt{2}, 1/\sqrt{2})^T (1, 1)/\sqrt{2} = \begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix} = A$. Trivially, since $A$ is already rank 1.

**Example 5 — Condition number.** $A = \begin{pmatrix} 1 & 1 \\ 0 & \epsilon \end{pmatrix}$. Singular values: $\sigma_1 \approx 1 + 1/\sqrt{2} \cdot \sqrt{1 + \epsilon^2}$? Let me compute $A^T A = \begin{pmatrix} 1 & 1 \\ 1 & 1 + \epsilon^2 \end{pmatrix}$. Eigenvalues: $\text{tr} = 2 + \epsilon^2$, $\det = \epsilon^2$. $\lambda^2 - (2 + \epsilon^2) \lambda + \epsilon^2 = 0$. $\lambda = ((2 + \epsilon^2) \pm \sqrt{(2 + \epsilon^2)^2 - 4 \epsilon^2})/2 = ((2 + \epsilon^2) \pm \sqrt{4 + 4 \epsilon^2 + \epsilon^4 - 4 \epsilon^2})/2 = ((2 + \epsilon^2) \pm \sqrt{4 + \epsilon^4})/2 \approx ((2 + \epsilon^2) \pm 2)/2$. So $\sigma_1^2 \approx 2 + \epsilon^2/2 \approx 2$, $\sigma_2^2 \approx \epsilon^2/2 \approx 0$. $\kappa \approx \sqrt{2}/\epsilon \to \infty$ as $\epsilon \to 0$. Highly ill-conditioned.

## Common Misconceptions
- **"SVD is for square matrices."** No — it works for any matrix, including non-square.
- **"The SVD is unique."** The singular values are unique (up to sign, but the SVD convention takes them positive). The singular vectors are unique up to sign (and simultaneous sign change for non-distinct $\sigma_i$).
- **"Pseudoinverse = inverse."** Only for square invertible matrices. The pseudoinverse $A^+$ is the generalisation that works for any matrix.
- **"Truncating small singular values is always safe."** It depends. For noisy data, it denoises. For exact data, it loses information.

## Connections
The SVD is the universal tool for matrix-based analysis. It underlies principal component analysis in statistics, the pseudoinverse in numerical analysis, low-rank approximation in machine learning, the Schmidt decomposition in quantum mechanics, and many other applications. Every numerical library has a high-quality SVD routine.

## Quick Check
1. State the SVD theorem.
2. What is the pseudoinverse?
3. What is the condition number?
4. What is the best rank-$k$ approximation?
5. Name three applications of the SVD.

## Takeaway
- SVD: $A = U \Sigma V^T$, any matrix.
- Singular values: $\sigma_i = \sqrt{\lambda_i(A^T A)}$.
- Pseudoinverse: $A^+ = V \Sigma^+ U^T$.
- Condition number: $\kappa(A) = \sigma_\text{max}/\sigma_\text{min}$.
- Best rank-$k$ approximation: $A_k = U_k \Sigma_k V_k^T$.
