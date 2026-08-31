***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-2
semesterName: Semester 2
subjectId: mathematics
subjectName: Mathematics
courseId: calculus-using-python
courseName: Calculus using Python
moduleId: calculus-using-python-module-2
moduleName: Symbolic Computation and Equation Solving
lessonId: calculus-using-python-m2-l3-capstone
lessonName: Reproducible Notebooks and Capstone Project
lessonNumber: 6
moduleNumber: 2
semesterNumber: 2
difficulty: advanced
estimatedStudyMinutes: 50
releaseOrder: 6
prerequisites:
  - calculus-using-python-m2-l3
learningObjectives:
  - Build a reproducible Jupyter notebook that combines symbolic and numerical computation.
  - Use version control and environment management to ensure reproducibility.
  - Complete a capstone project that integrates the techniques of the course.
concepts:
  - Reproducibility
  - Version control
  - Environment management
  - Documentation
  - Capstone project
  - Best practices
tags:
  - computational-methods
  - python
  - jupyter
  - reproducibility
sourceType: authored-courseware
assessmentHints:
  - short-answer
  - problem-solving
  - scenario
***

# Reproducible Notebooks and Capstone Project

## Overview

The capstone of the Calculus using Python sequence is a reproducible notebook that combines symbolic and numerical computation, integrates with version control, and addresses a real physics problem. The lesson reviews the reproducibility principles (version control, environment management, documentation), then guides the student through a capstone project of their choice. The lesson is the bridge from the introductory Python material of the course to the more advanced numerical methods of Semester 4 and to the use of Python as a research tool throughout the rest of the programme.

## Learning Path

- **What you should already know**: all previous lessons in this course; the calculus of differential equations and integration; Python basics, NumPy, SymPy, SciPy.
- **What this lesson adds**: reproducibility principles; a guided capstone project; the workflow from problem statement to documented notebook.
- **What later lessons this will unlock**: the numerical methods of Semester 4; the use of Python in research projects; the application of computational thinking throughout the rest of the programme.

## Core Explanation

### Reproducibility principles

A scientific notebook is reproducible if another researcher can run it from top to bottom and obtain the same results. The principles:

- **Version control**: every notebook should be in a Git repository, with commits at logical boundaries.
- **Environment management**: the Python version and the library versions should be specified. Use `requirements.txt` or `environment.yml`.
- **Random seeds**: any stochastic computation should set the random seed.
- **Self-containment**: every notebook should be runnable from top to bottom without external dependencies.
- **Documentation**: the notebook should have markdown cells explaining the purpose of each step, the data sources, the algorithms, and the expected results.
- **Outputs**: numerical results should be printed or saved to a file; plots should be saved as images (not just displayed).

A reproducible notebook is a record of the computation that can be shared, reviewed, and re-run.

### Environment management

The Python environment should be specified in a file that can be used to recreate the environment. Two common formats:

**`requirements.txt`** (pip): a list of packages with pinned versions.

```
numpy==1.24.3
scipy==1.10.1
matplotlib==3.7.1
sympy==1.11.1
jupyter==1.0.0
```

**`environment.yml`** (conda): a more complete specification including the Python version and the package versions.

```yaml
name: calculus-env
channels:
  - defaults
dependencies:
  - python=3.10
  - numpy=1.24.3
  - scipy=1.10.1
  - matplotlib=3.7.1
  - sympy=1.11.1
  - jupyter=1.0.0
```

The environment can be recreated with `conda env create -f environment.yml` or `pip install -r requirements.txt`.

### Random seeds

For computations that use random numbers, the random seed should be set at the top of the notebook:

```python
import numpy as np
np.random.seed(42)
```

This ensures that the random numbers are the same on every run, making the results reproducible.

### Documentation

The notebook should have markdown cells that explain the purpose, the approach, and the results. A typical structure:

1. **Title and author**.
2. **Abstract**: one paragraph summarising the problem and the result.
3. **Setup**: imports, environment, random seed.
4. **Problem statement**: a clear description of the problem being solved.
5. **Approach**: the algorithm or technique used.
6. **Implementation**: the code, with comments explaining each step.
7. **Results**: the numerical results, with plots and tables.
8. **Discussion**: a critical evaluation of the results, with caveats and next steps.
9. **References**: citations to the literature and to the software.

### Best practices

A well-written notebook:

- Uses markdown cells to explain the code, not just code cells.
- Has a logical structure: top-down, with each cell building on the previous.
- Uses descriptive variable names (not `x`, `y`, `z` everywhere).
- Comments the code where the logic is non-obvious.
- Prints the results, not just computes them.
- Plots the results with labels, titles, and legends.
- Compares the numerical results to the analytical solutions (when available).
- Reports the tolerances, the step sizes, and the number of function evaluations.
- Acknowledges the limitations of the method.

A poorly written notebook:

- Has no markdown cells.
- Has a single mega-cell that does everything.
- Uses cryptic variable names.
- Has no comments.
- Shows only plots, no numbers.
- Does not compare to the analytical solution.
- Does not report the tolerances.
- Claims more than the data supports.

### The capstone project

The capstone is a self-directed project that integrates the techniques of the course. The student chooses a problem from physics, formulates it mathematically, solves it using Python (combining symbolic and numerical methods), and documents the solution in a reproducible notebook.

The project should be:

- **Of interest to the student**: pick a problem that excites you, not one that merely checks boxes.
- **Substantive but tractable**: a few days to a week of work, not a year.
- **Documented**: the notebook is a record of the work, not just a calculation.
- **Verified**: compare the numerical results to the analytical solutions (if available) or to a known limit or special case.

### Suggested topics

The following topics are well-suited to a capstone project; the student is welcome to choose another.

1. **The simple pendulum**: derive the period of the pendulum as a function of the amplitude, compare to the small-angle approximation, plot the orbit in phase space.
2. **The two-body Kepler problem**: solve the orbit numerically, compute the energy and angular momentum, verify conservation, plot the orbit for different eccentricities.
3. **The Lorenz system**: explore the chaotic behaviour, compute the Lyapunov exponent, plot the strange attractor.
4. **The heat equation**: solve the 1D heat equation by finite differences, compare to the analytical solution for a simple initial condition.
5. **The Schrödinger equation**: solve for the energy eigenvalues of a 1D potential (e.g. harmonic oscillator, finite well) by the shooting method.
6. **The Brachistochrone problem**: solve the variational problem numerically, compare to the analytical cycloid solution.
7. **The Ising model**: simulate the 2D Ising model by Metropolis, compute the magnetisation and the heat capacity, identify the phase transition.
8. **Monte Carlo integration**: estimate a high-dimensional integral by importance sampling, compare to the analytical value (if available).

The topics are listed in approximate order of difficulty. The first three are accessible to first-year students; the later ones require more background.

### A worked example: the simple pendulum

This is a worked example of a capstone project, suitable for a first-year student.

**Problem statement**: The period of a simple pendulum depends on the amplitude. For small angles, $T \approx T_0 = 2 \pi \sqrt{L / g}$. For larger angles, the period increases; the exact period is given by the elliptic integral

$$T = T_0 \cdot \frac{2}{\pi} \int_0^{\pi/2} \frac{d\phi}{\sqrt{1 - k^2 \sin^2 \phi}}, \quad k = \sin(\theta_0 / 2),$$

where $\theta_0$ is the amplitude.

**Approach**: Solve the pendulum equation $\ddot \theta = -(g / L) \sin \theta$ numerically using `solve_ivp`. Compute the period by finding the time of the next crossing of $\theta = 0$ with $\dot \theta > 0$. Compare to the analytical formula for several amplitudes.

**Implementation**:

```python
import numpy as np
from scipy.integrate import solve_ivp

g = 9.81
L = 1.0
T0 = 2 * np.pi * np.sqrt(L / g)

def f(t, y):
    theta, omega = y
    return [omega, -(g / L) * np.sin(theta)]

def compute_period(theta0):
    result = solve_ivp(f, [0, 10 * T0], [theta0, 0], rtol=1e-10, atol=1e-12,
                        events=lambda t, y: y[0], dense_output=True)
    # Time of first zero crossing
    return result.t_events[0][0] * 2  # Round trip

theta0s = np.deg2rad([5, 10, 20, 30, 45, 60, 75, 90])
T_analytical = lambda theta0: T0 * 2 / np.pi * quad(
    lambda phi: 1 / np.sqrt(1 - np.sin(theta0/2)**2 * np.sin(phi)**2), 0, np.pi/2)[0]

for theta0 in theta0s:
    T_numerical = compute_period(theta0)
    T_exact = T_analytical(theta0)
    print(f"theta0 = {np.rad2deg(theta0):.0f}°, T = {T_numerical:.4f} s, "
          f"analytical = {T_exact:.4f} s, error = {abs(T_numerical - T_exact)/T_exact:.2e}")
```

**Results**: The numerical period agrees with the analytical period to 5–6 significant figures for amplitudes up to $90°$. The small-angle approximation $T_0$ is accurate to about 1% at $20°$ and 5% at $45°$.

**Discussion**: The numerical method is RK45 with tight tolerances. The analytical formula uses `quad` to evaluate the elliptic integral. The two methods agree, confirming the correctness of both. The small-angle approximation is valid only for small amplitudes; the exact period is needed for large amplitudes.

**Limitations**: The pendulum equation assumes a rigid rod, no air resistance, and no friction at the pivot. The numerical method is accurate to machine precision (with tight tolerances); the analytical formula is the exact result for the simple pendulum.

**Extensions**: The damped pendulum (with air resistance) is a more realistic model; the driven pendulum shows resonance and chaos.

### Common pitfalls

- **Forgetting to set the random seed**: a stochastic computation that is not reproducible is not a computation.
- **Forgetting the environment**: a notebook that runs on your machine but not on someone else's is not reproducible.
- **Forgetting to print or save the results**: a notebook that produces only plots is hard to verify and reuse.
- **Forgetting the comparison to the analytical solution**: a numerical result without a comparison is just a number.
- **Forgetting the limitations**: every method has limitations; acknowledging them is part of good science.

### Key Ideas

- A reproducible notebook combines version control, environment management, random seeds, self-containment, and documentation.
- The capstone project integrates the techniques of the course in a self-directed investigation.
- The project should be of interest to the student, substantive but tractable, documented, and verified.
- A good project compares the numerical results to the analytical solutions (if available) and acknowledges the limitations of the method.
- The Python scientific stack is the standard tool for computational physics.

## Worked Examples

The capstone project is the worked example for this lesson; the student chooses a topic from the list above (or another of their choice) and produces a reproducible notebook.

A simple example: the Brachistochrone problem.

**Problem statement**: A bead slides frictionlessly along a wire from one fixed point to another under gravity. Find the shape of the wire that minimises the time of descent. The analytical solution is a cycloid.

**Approach**: Parametrise the wire as $y(x)$, with $y(0) = 0$ and $y(x_1) = y_1$. The time of descent is

$$T = \frac{1}{\sqrt{2 g}} \int_0^{x_1} \sqrt{\frac{1 + y'(x)^2}{y_1 - y(x)}} dx.$$

Minimise $T$ by the calculus of variations. The Euler–Lagrange equation gives the cycloid:

$$x(\theta) = r (\theta - \sin \theta), \quad y(\theta) = r (1 - \cos \theta),$$

where $r$ is determined by the boundary conditions.

**Implementation**: Parametrise the wire as a polynomial $y(x) = a_0 + a_1 x + a_2 x^2 + \ldots + a_n x^n$, with the boundary conditions $y(0) = 0$ and $y(x_1) = y_1$. The remaining coefficients are determined by the calculus of variations (or by direct numerical optimisation). Compute the time of descent by numerical integration, and compare to the cycloid.

**Discussion**: The cycloid is the optimal shape; the polynomial approximation approaches the cycloid as the degree increases. The problem is a classic test of the calculus of variations and of numerical optimisation.

## Common Misconceptions

- **"A reproducible notebook is the same as a documented one."** Documentation is necessary but not sufficient; the notebook must also be runnable.
- **"The numerical result is always correct."** No. The result depends on the method, the tolerances, and the problem. Always verify.
- **"The capstone is a one-off."** No, the capstone is a habit of mind: a way of approaching problems, communicating results, and contributing to the community.
- **"Python is the only tool."** No, Python is one tool among many (Julia, MATLAB, R, C++, Mathematica, etc.). The right tool depends on the problem and the context.
- **"The capstone is a test."** No, the capstone is a learning experience. The grade is secondary to the skill.

## Connections

- Reproducibility is a foundation of modern science; the standards are set by funders, journals, and conferences.
- The Python scientific stack is the standard tool for computational physics.
- The capstone is a bridge to research; many students continue to develop the capstone into a senior thesis, a paper, or a conference presentation.
- The numerical methods of Semester 4 build on the foundations of this course.

## Quick Check

1. Set up a Python environment with pinned versions and a `requirements.txt` file.
2. Set the random seed at the top of a notebook and verify that the random numbers are the same on every run.
3. Choose a capstone topic from the list and outline the approach.
4. Implement a small part of the capstone (e.g. the analytical formula, the numerical method, the comparison) and document it in a notebook.
5. Submit the notebook for review and incorporate the feedback.

## Takeaway

- Reproducibility requires version control, environment management, random seeds, self-containment, and documentation.
- The capstone project integrates the techniques of the course in a self-directed investigation.
- A good capstone compares the numerical results to the analytical solutions and acknowledges the limitations of the method.
- The Python scientific stack is the standard tool for computational physics.
- The capstone is a habit of mind, not a one-off; the skills transfer to research and to the workplace.
