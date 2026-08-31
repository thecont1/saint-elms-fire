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
lessonId: linear-algebra-m3-l1
lessonName: Eigenvalues, Markov Chains and Stability
lessonNumber: 7
moduleNumber: 3
semesterNumber: 5
difficulty: advanced
estimatedStudyMinutes: 55
releaseOrder: 7
prerequisites:
  - linear-algebra-m2-l3
learningObjectives:
  - Compute eigenvalues and eigenvectors for various matrices.
  - Use the power method to find the dominant eigenvalue.
  - State the Perron–Frobenius theorem for nonnegative matrices.
  - Analyse the stability of linear systems $\dot{x} = A x$.
concepts:
  - Power method
  - Perron–Frobenius theorem
  - Markov chain
  - Stationary distribution
  - Stability of linear systems
  - Spectral radius
tags:
  - mathematics
  - algebra
  - markov-chains
sourceType: authored-courseware
assessmentHints:
  - problem-solving
  - derivation
  - conceptual
***

# Eigenvalues, Markov Chains and Stability

## Overview
Eigenvalues are the natural tool for analysing long-time behaviour of linear systems. The *power method* iteratively computes the dominant eigenvalue; the *Perron–Frobenius theorem* guarantees that nonnegative matrices have a unique dominant real eigenvalue. *Markov chains* are the prototype — random processes on a finite state space, with transition matrix having $1$ as the dominant eigenvalue. Linear systems $\dot{x} = A x$ are stable iff all eigenvalues of $A$ have negative real part. This lesson ties these ideas together and applies them to physics, statistics, and dynamical systems.

## Learning Path
- What you should already know: eigenvalues, eigenvectors, the characteristic polynomial, the spectral theorem.
- What this lesson adds: the power method, Perron–Frobenius, Markov chains, and stability of linear systems.
- What it unlocks: random walks, PageRank, dynamical systems, control theory, and many applications in physics and statistics.

## Core Explanation
**Power method.** For a matrix $A$ with a unique dominant eigenvalue (largest in magnitude, simple), the iteration $v_{k+1} = A v_k / \|A v_k\|$ converges to the dominant eigenvector. The Rayleigh quotient $R_k = (v_k^* A v_k)/(v_k^* v_k)$ converges to the dominant eigenvalue.

**Convergence rate.** Geometric, with ratio $|\lambda_2|/|\lambda_1|$, where $\lambda_1$ is dominant and $\lambda_2$ is the next. The smaller this ratio, the faster the convergence.

**Inverse power method.** To find the eigenvalue of $A$ nearest a shift $\mu$, apply $(A - \mu I)^{-1}$ repeatedly. The dominant eigenvector of $(A - \mu I)^{-1}$ is the eigenvector of $A$ for the eigenvalue nearest $\mu$. Useful for fine-tuning.

**Rayleigh quotient iteration.** Update both the eigenvalue estimate and the vector. $v_{k+1} = (A - R_k I)^{-1} v_k$, $R_{k+1} = (v_{k+1}^* A v_{k+1})/(v_{k+1}^* v_{k+1})$. Cubic convergence.

**Shift-invert mode.** For symmetric $A$, apply a polynomial in $A$ that emphasises a region of the spectrum (e.g. Chebyshev). Diagonalise the resulting matrix. The Lanczos algorithm with this filter is efficient.

**Spectral radius.** $\rho(A) = \max |\lambda_i|$, the largest absolute eigenvalue. Determines the asymptotic behaviour of $A^n$.

**Perron–Frobenius theorem.** For a square matrix $A$ with strictly positive entries, $A$ has a unique dominant real eigenvalue $\lambda_1 > 0$ with strictly positive eigenvector $v_1$. All other eigenvalues have $|\lambda_i| < \lambda_1$.

**Generalisation to irreducible nonnegative matrices.** A nonnegative matrix is *irreducible* if its associated directed graph is strongly connected (every state reachable from every other). For an irreducible nonnegative matrix, the Perron–Frobenius theorem still holds, with one qualification: if the dominant eigenvalue has algebraic multiplicity $> 1$, the number of dominant eigenvalues equals the period of the matrix.

**Primitive matrices.** An irreducible nonnegative matrix is *primitive* if the dominant eigenvalue is the only one on the spectral circle ($|\lambda| = \rho(A)$). The power method converges for primitive matrices; it may not for imprimitive ones (which have periodic behaviour).

**Period of a state.** For a Markov chain, the period of state $i$ is the gcd of $\{n : (M^n)_{ii} > 0\}$. Aperiodic chains have period $1$.

**Aperiodic vs. periodic chains.** A chain is *aperiodic* if every state has period $1$ (equivalently, some power of $M$ has all positive entries). Periodic chains have the Markov chain oscillating forever.

**Markov chain.** A sequence of random variables $X_0, X_1, X_2, \ldots$ taking values in a finite state space $S$, with $\Pr(X_{n+1} = j | X_n = i) = M_{ij}$ independent of the past. The transition matrix $M$ has rows (or columns) summing to $1$.

**Stationary distribution.** A distribution $\pi$ such that $\pi M = \pi$ (or $M^T \pi = \pi$). An eigenvector of $M^T$ (or $M$, depending on convention) with eigenvalue $1$.

**Existence of a stationary distribution.** For an irreducible, positive recurrent Markov chain, a unique stationary distribution exists. By Perron–Frobenius, the dominant eigenvalue is $1$ (real, with positive eigenvector).

**Convergence to stationarity.** $M^n \to P$, where $P$ is the matrix with all rows equal to $\pi$ (the stationary distribution). The convergence rate is geometric, with ratio $|\lambda_2|/|\lambda_1| = |\lambda_2|$ (since $\lambda_1 = 1$). The *mixing time* is the number of steps needed to be close to stationarity.

**Reversible Markov chains.** $M$ is *reversible* if there is a probability distribution $\pi$ with $\pi_i M_{ij} = \pi_j M_{ji}$ for all $i, j$ (detailed balance). The chain run backwards looks the same as forwards. Used in MCMC (Markov chain Monte Carlo).

**Detailed balance.** $\pi_i M_{ij} = \pi_j M_{ji}$. The chain spends the right amount of time in each state to be reversible.

**Detailed balance example.** Simple random walk on a graph: $\pi_i = \deg(i)/(2 |E|)$ (proportional to degree). Then $\pi_i M_{ij} = (1/\deg(i)) (\deg(i)/(2 |E|)) = 1/(2 |E|) = \pi_j M_{ji}$. ✓

**MCMC and the Metropolis algorithm.** Sample from a probability distribution $\pi$ by constructing a Markov chain with $\pi$ as the stationary distribution. Metropolis: given state $i$, propose a move to $j$; accept with probability $\min(1, \pi_j/\pi_i)$. The chain converges to $\pi$.

**Convergence of the Metropolis algorithm.** Geometric, with rate depending on the mixing properties of the chain. Slow for distributions with multiple modes; fast for unimodal distributions.

**PageRank as a Markov chain.** The web as a Markov chain: each page is a state, with random links to other pages. The PageRank vector is the stationary distribution of a modified chain (with a small probability of teleporting to any page). Computed by power iteration.

**PageRank damping factor.** With probability $1 - \alpha$ (typically $0.15$), the random surfer "teleports" to a random page. This ensures irreducibility and aperiodicity. The modified chain has a unique stationary distribution.

**Google matrix.** $G = \alpha M + (1 - \alpha) (1/n) J$, where $M$ is the link matrix, $J$ the all-ones matrix, $\alpha$ the damping factor. $G$ is stochastic, irreducible, aperiodic. The PageRank vector is the dominant eigenvector of $G^T$.

**Convergence of PageRank.** By Perron–Frobenius, the dominant eigenvalue is $1$, and the power method converges to the corresponding eigenvector. The convergence rate depends on the second-largest eigenvalue.

**Random walks on graphs.** A random walk on a connected graph has a unique stationary distribution (proportional to the degrees). The commute time, hitting time, mixing time are studied. The basis of many algorithms (PageRank, spectral clustering).

**Mixing time.** The number of steps for a Markov chain to be within $\epsilon$ of the stationary distribution (in total variation distance). Bounded by the inverse of the spectral gap $1 - |\lambda_2|$.

**Spectral gap.** $1 - |\lambda_2|$ (where $\lambda_1 = 1$ is the dominant eigenvalue). Determines the mixing time. A large spectral gap means fast mixing; a small one means slow mixing (and the chain may be hard to sample from).

**Convergence of $\dot{x} = A x$.** The solution is $x(t) = e^{A t} x(0)$. As $t \to \infty$:
- All eigenvalues have $\text{Re}(\lambda) < 0$: $x(t) \to 0$ (asymptotically stable).
- Some eigenvalues have $\text{Re}(\lambda) > 0$: $x(t)$ blows up.
- $\text{Re}(\lambda) = 0$ for some: marginal stability; depends on Jordan form.

**Lyapunov stability.** The equilibrium $x = 0$ is *stable* (Lyapunov) if nearby initial conditions stay nearby. Strictly stable if they converge to $0$. The condition: all eigenvalues have $\text{Re}(\lambda) \le 0$ (with no positive real parts), and those with zero real part are non-defective.

**Stability of the damped harmonic oscillator.** $\ddot{x} + 2 \gamma \dot{x} + \omega_0^2 x = 0$. As a system $\dot{y} = A y$ with $y = (x, \dot{x})^T$: $A = \begin{pmatrix} 0 & 1 \\ -\omega_0^2 & -2 \gamma \end{pmatrix}$. Eigenvalues $\lambda = -\gamma \pm \sqrt{\gamma^2 - \omega_0^2}$. Asymptotically stable for $\gamma > 0$ (both eigenvalues have negative real part).

**Pendulum (linearised).** $\ddot{\theta} + (g/L) \theta = 0$. $A = \begin{pmatrix} 0 & 1 \\ -g/L & 0 \end{pmatrix}$. Eigenvalues $\pm i \sqrt{g/L}$. Pure imaginary — Lyapunov stable (but not asymptotically stable). Small perturbations oscillate forever.

**Inverted pendulum (linearised).** $\ddot{\theta} - (g/L) \theta = 0$. $A = \begin{pmatrix} 0 & 1 \\ g/L & 0 \end{pmatrix}$. Eigenvalues $\pm \sqrt{g/L}$. Real with opposite signs — unstable. Small perturbations grow exponentially.

**Stability of numerical ODEs.** The same analysis applies to discrete dynamical systems $x_{n+1} = M x_n$, with stability iff all eigenvalues of $M$ have $|\lambda| \le 1$. This is the condition for a numerical method to be stable.

**Spectral radius and stability.** For $x_{n+1} = M x_n$, $x_n = M^n x_0$. Bounded iff $\rho(M) \le 1$.

**Gershgorin circle theorem.** Every eigenvalue of $A$ lies in at least one of the discs $|z - A_{ii}| \le \sum_{j \ne i} |A_{ij}|$ (the *Gershgorin discs*). Useful for bounding the spectrum.

**Application: laser stability.** The laser equations (Lorenz–Haken) are nonlinear but can be linearised around the operating point. The stability of the operating point is determined by the eigenvalues of the linearisation. Some lasers are unstable (chaotic).

**Population dynamics.** The Leslie matrix models age-structured population growth. The dominant eigenvalue is the asymptotic growth rate; the right eigenvector is the stable age distribution.

**Markov chain Monte Carlo (MCMC).** Sampling from complex probability distributions by constructing a Markov chain with the desired distribution as the stationary state. Used in Bayesian statistics, statistical physics, and machine learning.

**Gibbs sampling.** A special MCMC method for multivariate distributions. Each variable is updated conditionally on the others.

**Metropolis–Hastings algorithm.** A general MCMC method. Given state $i$, propose $j$ with probability $q(j | i)$, accept with probability $\min(1, \pi_j q(i | j)/(\pi_i q(j | i))$. The chain has $\pi$ as stationary distribution.

**Hamiltonian Monte Carlo (HMC).** Uses the gradient of the log-density to propose moves that are far from the current state but accepted with high probability. Faster convergence than random-walk Metropolis for many problems.

**Convergence diagnostics for MCMC.** Trace plots, autocorrelation time, effective sample size, Gelman–Rubin statistic. Multiple chains are run to check convergence.

**Connection to physics.** Markov chains describe random walks, diffusion, kinetics, and (via the Fokker–Planck equation) stochastic differential equations. The Perron–Frobenius theorem is the starting point of the theory of stochastic processes.

**Connection to quantum mechanics.** The Schrödinger equation is a unitary evolution; the time-evolution operator has eigenvalues on the unit circle. The stationary states (eigenvectors of the Hamiltonian) are the eigenstates.

**Markov chains in physics.** Ehrenfest's urn model (heat exchange between two systems), Polya's urn (reinforced random process), random walks on lattices (diffusion), kinetic Monte Carlo (atomic processes), and the master equation approach to non-equilibrium statistical mechanics.

**Random walks in 1D.** A simple random walk on $\mathbb{Z}$ has $M(x, y) = 1/2$ for $y = x \pm 1$. Stationary distribution: none (the walk is unbounded). Recurrent in 1D and 2D; transient in 3D and higher.

**Master equation.** $\partial_t p_i = \sum_j (W_{ij} p_j - W_{ji} p_i)$, where $W_{ij}$ is the rate of transitions from $j$ to $i$. The stationary solution is $\pi_i \propto $ (something). For detailed balance, $\pi_i W_{ij} = \pi_j W_{ji}$.

**Detailed balance and thermodynamics.** A system in thermal equilibrium satisfies detailed balance: each transition is balanced by its reverse. This gives the Boltzmann distribution $\pi_i \propto e^{-E_i/(k_B T)}$.

**Convergence in distribution.** $M^n(x, \cdot) \to \pi(\cdot)$ for any starting state $x$, where $M^n(x, y) = \Pr(X_n = y | X_0 = x)$. By Perron–Frobenius, the convergence is geometric with rate $|\lambda_2|$.

**Mixing and the second eigenvalue.** The smaller $|\lambda_2|$, the faster the mixing. MCMC methods try to construct chains with small $|\lambda_2|$ (fast mixing). Slow mixing is the curse of MCMC in high dimensions.

**Why Perron–Frobenius is fundamental.** It guarantees the existence and uniqueness of the stationary distribution, the positivity of the dominant eigenvector, and the convergence of the power method. The entire theory of stochastic processes, MCMC, and stochastic optimisation rests on it.

**Computing stationary distributions.** Solve $(M^T - I) \pi = 0$ with $\sum \pi_i = 1$. For small matrices, direct methods. For large sparse matrices, power iteration on $M^T$ (which is what PageRank does).

**Convergence proof for power method.** Write $v_0 = c_1 v_1 + c_2 v_2 + \cdots$, where $v_i$ are the eigenvectors and $c_i$ the coefficients. Then $A^k v_0 = c_1 \lambda_1^k v_1 + c_2 \lambda_2^k v_2 + \ldots \to c_1 \lambda_1^k v_1$ (since $|\lambda_1| > |\lambda_i|$ for $i \ge 2$). Normalising gives $v_1$.

**Resolvent.** $(A - \lambda I)^{-1}$ has poles at the eigenvalues of $A$. Used in the holomorphic functional calculus: $f(A) = (1/2\pi i) \oint f(z) (z I - A)^{-1} dz$ over a contour enclosing the spectrum.

**Power method and PageRank.** The dominant eigenvalue $\lambda_1$ and eigenvector $v_1$ of a matrix are the fixed point of repeated multiplication $x^{(k+1)} = A x^{(k)} / \|A x^{(k)}\|$. The iteration converges whenever $|\lambda_1| > |\lambda_2|$, with rate governed by the spectral gap $|\lambda_1|/|\lambda_2|$. This is the workhorse of Markov-chain stationary-distribution computation, including the original PageRank algorithm: the stationary distribution of a random surfer on the web graph is the dominant eigenvector of a suitably modified Google matrix, found by the power method. The same machinery underlies recommender systems, link prediction in social networks, and many other graph algorithms.

## Key Ideas
- Power method: $v_{k+1} = A v_k / \|A v_k\| \to $ dominant eigenvector.
- Perron–Frobenius: positive matrix has unique dominant real positive eigenvalue.
- Markov chain: row-stochastic matrix; stationary distribution $\pi M = \pi$.
- Stability of $\dot{x} = A x$: all eigenvalues have $\text{Re}(\lambda) < 0$ for asymptotic stability.
- Mixing time: bounded by $1/(1 - |\lambda_2|)$.

## Worked Examples
**Example 1 — Power method.** $A = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$. $v_0 = (1, 1)^T$. $A v_0 = (3, 3)^T \to v_1 = (1, 1)^T$. Converged in one step! Dominant eigenvalue $3$, eigenvector $(1, 1)^T$. ✓

**Example 2 — Markov chain.** Two states, transition matrix $M = \begin{pmatrix} 0.9 & 0.5 \\ 0.1 & 0.5 \end{pmatrix}$. Stationary: $\pi M = \pi$. $\pi_1 = 0.9 \pi_1 + 0.5 \pi_2 \Rightarrow 0.1 \pi_1 = 0.5 \pi_2 \Rightarrow \pi_1 = 5 \pi_2$. Normalising: $\pi = (5/6, 1/6)$.

**Example 3 — Stability analysis.** $A = \begin{pmatrix} -1 & 1 \\ 0 & -2 \end{pmatrix}$. Eigenvalues $-1, -2$. Both negative, so the system $\dot{x} = A x$ is asymptotically stable. $x(t) = c_1 e^{-t} (1, 0) + c_2 e^{-2 t} (0, 1) \to 0$.

**Example 4 — Gershgorin discs.** $A = \begin{pmatrix} 2 & 1 \\ 0 & 3 \end{pmatrix}$. Gershgorin disc 1: $|z - 2| \le 1$, i.e. $[1, 3]$. Disc 2: $|z - 3| \le 0$, i.e. $\{3\}$. Union: $[1, 3] \cup \{3\}$. Both eigenvalues $2$ and $3$ are in this union. ✓ (The eigenvalues are exactly the diagonal entries since the matrix is upper triangular.)

**Example 5 — PageRank on a 3-node graph.** Links: $1 \to 2, 3$; $2 \to 3$; $3 \to 1$. Transition matrix (rows = from, columns = to): $M = \begin{pmatrix} 0 & 1/2 & 1/2 \\ 0 & 0 & 1 \\ 1 & 0 & 0 \end{pmatrix}$. With damping $\alpha = 0.85$: $G = 0.85 M + 0.15 (1/3) J$. PageRank = dominant eigenvector of $G^T$. Compute by power iteration: $v_0 = (1, 1, 1)/3$. $G^T v_0 = (G v_0)$. $G v_0 = 0.85 M v_0 + 0.05 (1, 1, 1) = 0.85 (1/2, 1/2, 1) + 0.05 (1, 1, 1) = (0.475, 0.475, 0.9)$. Normalise: sum $= 1.85$. $v_1 = (0.257, 0.257, 0.486)$. Iterate a few more times to converge.

**Example 6 — Two-state Markov chain with detailed balance.** $M = \begin{pmatrix} 0.9 & 0.3 \\ 0.1 & 0.7 \end{pmatrix}$. Check detailed balance: $\pi_1 M_{12} = 0.3 \pi_1$, $\pi_2 M_{21} = 0.1 \pi_2$. For $\pi_1/\pi_2 = 0.1/0.3 = 1/3$, so $\pi = (1/4, 3/4)$. ✓ Stationary distribution.

## Common Misconceptions
- **"The power method always converges."** Only for matrices with a unique dominant eigenvalue (spectral gap $> 0$).
- **"All nonnegative matrices have a real dominant eigenvalue."** Only for irreducible (and primitive) ones. Periodic matrices have complex dominant eigenvalues on the spectral circle.
- **"Stability means all eigenvalues have negative real part."** That's *asymptotic* stability. Lyapunov stability allows $\text{Re}(\lambda) = 0$ with no positive real part.
- **"Markov chains always converge to the stationary distribution."** Only for irreducible, aperiodic, positive recurrent chains.

## Connections
Markov chains, Perron–Frobenius, and stability of linear systems are the workhorses of stochastic processes, MCMC, dynamical systems, and control theory. The same mathematics underlies PageRank, recommendation systems, statistical physics, and many other areas.

## Quick Check
1. State the power method.
2. State the Perron–Frobenius theorem.
3. What is a stationary distribution?
4. When is $\dot{x} = A x$ asymptotically stable?
5. What is the spectral gap?

## Takeaway
- Power method: $v_{k+1} = A v_k / \|A v_k\| \to $ dominant eigenvector.
- Perron–Frobenius: positive matrix has unique positive dominant eigenvalue.
- Markov chain: stationary distribution $\pi M = \pi$.
- Stability: all eigenvalues of $A$ have $\text{Re}(\lambda) < 0$.
- Mixing time: bounded by $1/(1 - |\lambda_2|)$.
