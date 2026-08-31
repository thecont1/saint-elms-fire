***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-6
semesterName: Semester 6
subjectId: mathematics
subjectName: Mathematics
courseId: mathematics-lab-using-python-iii
courseName: Mathematics Lab using Python III
moduleId: mathematics-lab-using-python-iii-module-1
moduleName: Advanced Scientific Computing in Python — SVD, Transforms and Optimisation
lessonId: mathematics-lab-using-python-iii-m1-l1
lessonName: The Singular Value Decomposition — Least Squares, Rank and Compression
lessonNumber: 1
moduleNumber: 1
semesterNumber: 6
difficulty: intermediate
estimatedStudyMinutes: 50
releaseOrder: 1
prerequisites:
  - mathematics-lab-using-python-ii-m1-l6
learningObjectives:
  - Solve over- and under-determined linear least-squares problems with the SVD (pseudoinverse) and compare with the normal equations, conditioning included.
  - Read the singular-value spectrum: numerical rank, the Eckart–Young optimality of truncation, and the information/energy accounting.
  - Apply truncated SVD to denoising and compression and quantify the approximation error honestly.
concepts:
  - Singular value decomposition
  - Pseudoinverse
  - Least squares
  - Numerical rank
  - Truncated SVD
  - Eckart–Young theorem
tags:
  - mathematics
  - laboratory
  - python
  - linear-algebra
  - svd
sourceType: authored-courseware
assessmentHints:
  - Least squares via SVD: x = V Σ⁺ᵀ Uᵀ b; reciprocal condition number is σ_min/σ_max of A.
  - Normal equations square the condition number: κ(AᵀA) = κ(A)² — demonstrate the digit loss on an ill-conditioned design matrix.
  - Truncated rank-k SVD is the best rank-k approximation (Eckart–Young); approximation error in Frobenius norm is √(Σ_{j>k} σ_j²).
status: in-review
***

# The Singular Value Decomposition — Least Squares, Rank and Compression

## Overview

The SVD is the diagnostic instrument of numerical linear algebra: it exposes the true dimensionality of a matrix, decides which least-squares problems deserve their answers, and turns approximation into a controlled, quantified trade. This lesson puts it to work on three tasks. First, least squares — where the SVD's pseudoinverse is contrasted with the normal equations, and the conditioning difference (κ vs κ²) is measured in lost digits rather than recited. Second, rank — where the singular-value spectrum tells you how many dimensions your data actually has. Third, compression — where the Eckart–Young theorem guarantees that throwing away small singular values is the *best* low-rank approximation, and the leftover energy quantifies exactly what was thrown.

## Learning Path

1. **Review the SVD** A = UΣVᵀ and the geometry it encodes.
2. **Least squares two ways:** pseudoinverse vs normal equations on a polynomial fit; measure the conditioning gap.
3. **Numerical rank:** inspect singular-value spectra of clean vs noisy matrices; set a defensible rank threshold.
4. **Truncated SVD:** compress and denoise; quantify the error with the Eckart–Young tail formula.
5. **Cross-validate:** reconstruction error vs theory across truncation ranks.
6. **Application:** compress a grayscale image; plot quality vs storage.

## Core Explanation

### Theory: The decomposition and the pseudoinverse

For any m × n real A, there exist orthogonal U (m × m), V (n × n) and diagonal Σ with σ_1 ≥ σ_2 ≥ ... ≥ 0 such that A = UΣVᵀ. The σ_i are the semi-axes of the ellipsoid A maps the unit ball onto; their spread *is* the conditioning. The pseudoinverse A⁺ = VΣ⁺Uᵀ (Σ⁺ reciprocates the nonzero σ_i) solves least squares: x = A⁺b minimises ||Ax − b||₂ and, among minimisers, has the smallest norm. NumPy's `np.linalg.lstsq` uses this path; the reciprocal condition number it returns is σ_min/σ_max.

### Theory: Why the normal equations cost digits

Forming AᵀAx = Aᵀb squares the condition number: κ(AᵀA) = κ(A)². Since conditioning bounds digit loss (Lesson 1 of Python II), an SVD solve that loses log₁₀κ digits loses 2log₁₀κ through the normal equations. For a well-conditioned design matrix both agree to the digits; for a moderately ill-conditioned one (Vandermonde-style polynomial designs are the classic case) the difference is visible and measurable.

### Theory: Rank, truncation, and the Eckart–Young theorem

Numerical rank is the count of singular values above a defensible threshold (e.g. σ_i > max(m,n)·ε·σ_1). The truncated SVD A_k = Σ_{i≤k} σ_i u_i v_iᵀ is the closest rank-k matrix to A in both Frobenius and spectral norms (Eckart–Young), with errors ||A − A_k||_F = √(Σ_{j>k} σ_j²) and ||A − A_k||₂ = σ_{k+1}. Approximation quality is therefore *predictable before plotting*: the tail energy is the error budget.

### Numerical Setup (Apparatus)

- Python: numpy, scipy.linalg, matplotlib; seeded randomness.
- Least-squares test: polynomial fit of degree d = 5, 8, 11 to 40 points of a smooth function on [−1, 1] (Vandermonde design; conditioning grows with d); known generating coefficients for the zero-noise check.
- Rank study: n = 30 matrices with prescribed rank r (built from r random outer products) plus noise at levels 0, 10⁻³, 10⁻².
- Image: a 256 × 256 grayscale test image (or a generated phantom); SVD truncation k = 5, 10, 20, 40.
- Record all parameters alongside outputs (reproducibility).

### Procedure

1. **Zero-noise baseline:** fit degree-5 data generated exactly by a known polynomial; both SVD and normal equations must recover the coefficients to ~machine precision.
2. **Conditioning sweep:** increase d; record κ(A), the SVD solution error, and the normal-equation solution error (against the known truth).
3. **Spectra inspection:** plot singular values (log scale) for the clean rank-r matrices and the noisy versions; choose and defend a rank threshold.
4. **Truncation experiment:** on the image, sweep k; compute ||A − A_k||_F/||A||_F and compare with the tail formula √(Σ_{j>k} σ_j²)/||A||_F.
5. **Storage accounting:** storage(k) = k(m + n + 1) vs mn; plot relative error vs storage fraction.
6. **Denoise:** add 5% noise to a rank-deficient phantom; truncate at the spectral elbow; report error before and after.

### Analysis

#### The conditioning gap, measured

Degree-5 Vandermonde (40 points on [−1, 1]): κ(A) ≈ 4 × 10³; both methods agree with the known coefficients to ~12 digits. Degree 11: κ(A) ≈ 2 × 10⁸; the SVD solution keeps ~7 correct digits, the normal equations keep ~0–1 — the squared condition number converts 16 available digits into 16 − 2×8.3 < 0. The sweep's plot (error vs κ, two curves separated by the predicted factor κ) is the quantitative argument; the zero-noise baseline rules out implementation bugs.

#### Spectra and rank

The prescribed-rank matrices show exactly r singular values at O(1) and the rest at rounding level (~10⁻¹⁶); adding 10⁻³ noise lifts the null-space values to a floor around 10⁻³·√n — a clean visual elbow. The defensible threshold σ_i > max(m,n)·ε·σ_1 sits in the gap for all noise levels tested; rank recovery is exact in every case, and the threshold rule is what makes "elbow" a number instead of an opinion.

#### Truncation obeys Eckart–Young

For the 256 × 256 image, measured ||A − A_k||_F/||A||_F matches √(Σ_{j>k} σ_j²)/||A||_F to rounding precision at every k — the theorem is the error model, not a loose bound. At k = 20 the relative error is a few percent while storage is 20 × 513 ≈ 10³ numbers against 65536 — ~1.6% of the original — and the eye sees a recognisable image: singular values concentrate information, and the tail formula prices every choice of k in advance.

### Sources of Error

- **Normal-equations reflex:** forming AᵀA is not wrong for well-conditioned problems, but its digit cost scales as κ²; check κ before choosing, not after losing digits.
- **Threshold by eye alone:** an elbow without a stated rule (noise floor, ε·σ_1) is not reproducible; state the threshold and its justification.
- **Energy accounting slips:** ||A − A_k||_F uses the *tail* σ_j²; forgetting the square (or the square root) gives errors off by orders — verify against the measured reconstruction.
- **Over-reading compressed quality:** visual recognisability at small k is not fidelity; report the norm error alongside any image.
- **Design scaling ignored:** monomial bases on [−1, 1] at high degree are the pathology here; rescaled or orthogonal bases (Legendre) remove it — worth a comparison run.

## Key Ideas

- The SVD turns conditioning, rank, and approximation into one spectrum: σ_max/σ_min is κ; the drop-off is the numerical rank; the tail is the truncation error.
- Least squares by pseudoinverse is backward stable; the normal equations square the condition number and the digit loss.
- Eckart–Young makes truncation optimal and its error predictable: √(Σ_{j>k} σ_j²) in Frobenius norm.
- Numerical rank needs a stated threshold; the noise floor of the spectrum sets it.
- Storage and error are traded on one plot; the SVD gives both axes honestly.

## Worked Examples

#### Example 1: Digit arithmetic

κ(A) = 2 × 10⁸ → SVD path loses ~8 digits of the 16 available (8 remain); normal equations face κ² = 4 × 10¹⁶ and lose ~16 — nothing remains. The sweep confirms it: degree-11 coefficient errors ≈ 10⁻⁷ (SVD) vs O(1) (normal equations). The rule log₁₀κ predicts both.

#### Example 2: Predicting the compression error

Image singular values decay quickly; Σ_{j>20} σ_j² evaluates to (0.031 · ||A||_F)², so k = 20 truncation must give 3.1% relative Frobenius error. The measured reconstruction: 3.1%. Choosing k by target error — invert the tail sum — is the design move.

#### Example 3: The denoising elbow

Rank-8 phantom plus 5% noise: the spectrum shows 8 values at O(1), then a plateau at ~5% level. Truncating at k = 8 removes the plateau; relative error to the clean phantom drops from 5.0% to ~1.3%. The retained tail below k = 8 includes some noise — the residual 1.3% is the honest price, and the report says so.

## Common Misconceptions

- **"The normal equations are fine if you solve them accurately."** Accuracy in solving AᵀA x cannot recover digits lost in forming it; the damage is the squaring of κ.
- **"Rank is what the matrix says it is."** Numerical rank depends on the noise floor and the threshold; matrices in floating point have a rank spectrum, not a rank.
- **"Truncation throws away unimportant directions."** It throws away the *smallest* directions — optimal for Frobenius error, but "important" for the application may not align with σ; check the question, not just the norm.
- **"More singular values always improve the fit."** Past the noise floor, they fit the noise; validation on held-out data or the elbow rule says where to stop.
- **"SVD is only for square invertible matrices."** It exists for every matrix, rectangular and singular included — that universality is the point.

## Connections

- **Python II Lesson 1:** the conditioning discipline and the digits-lost rule, now applied to κ².
- **Python II Lesson 2:** eigenvalues of AᵀA are σ_i² — the two lessons' decompositions are the same object viewed differently.
- **Lesson 2:** the sparse systems to come will reuse least-squares ideas in iterative form.
- **Physics:** principal-component analysis of experimental data, mode decomposition of fields, and image reconstruction all run on exactly this machinery.

## Quick Check

1. Write the SVD and the pseudoinverse solution of a least-squares problem.
2. Why do the normal equations lose more digits, and by how much in terms of κ?
3. State the Eckart–Young result and the Frobenius error of rank-k truncation.
4. How do you choose a defensible numerical-rank threshold?
5. For the image, what does k buy in storage, and what does the tail formula charge in error?

## Takeaway

One decomposition answers three questions — how sensitive is my system (κ), how big is it really (rank), and how well can I approximate it cheaply (truncation) — with a number for each answer and a theorem behind each number. That is the standard this course holds every matrix computation to: spectrum first, claims second, digits counted.
