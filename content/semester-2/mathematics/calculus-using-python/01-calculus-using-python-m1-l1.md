***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-2
semesterName: Semester 2
subjectId: mathematics
subjectName: Mathematics
courseId: calculus-using-python
courseName: Calculus using Python
moduleId: calculus-using-python-module-1
moduleName: Python Environment and Numerical Differentiation
lessonId: calculus-using-python-m1-l1
lessonName: Setting Up Python and Numerical Derivatives
lessonNumber: 1
moduleNumber: 1
semesterNumber: 2
difficulty: foundation
estimatedStudyMinutes: 40
releaseOrder: 1
prerequisites:
  - differential-calculus
  - integral-calculus
  - calculus-using-python
learningObjectives:
  - Set up a Python environment with NumPy, SciPy, and Matplotlib.
  - Implement forward, backward, and central finite differences for the derivative.
  - Visualise the trade-off between truncation and round-off error.
concepts:
  - Python interpreter
  - Jupyter notebook
  - Finite differences
  - Truncation error
  - Round-off error
  - Optimal step size
tags:
  - computational-methods
  - python
  - numerical-differentiation
  - finite-differences
sourceType: authored-courseware
assessmentHints:
  - short-answer
  - problem-solving
***

# Setting Up Python and Numerical Derivatives

## Overview

This lesson is the first of the Calculus using Python sequence, a computational Skills Enhancement that pairs the calculus of Semesters 1 and 2 with hands-on Python work. The lesson sets up the Python environment (interpreter, libraries, notebook interface) and develops numerical differentiation: forward, backward, and central finite differences. The lesson emphasises the trade-off between truncation and round-off error, and shows the optimal step size for a second-order central difference. The lesson is the foundation of the rest of the course: every later lesson uses Python to compute, visualise, and verify calculus results.

## Learning Path

- **What you should already know**: Differential Calculus (Sem 1) and Integral Calculus (Sem 2); basic familiarity with a programming language (any); the concept of a Taylor expansion.
- **What this lesson adds**: the Python scientific stack (NumPy, SciPy, Matplotlib, Jupyter); the three finite-difference formulas; the error analysis and optimal step size; visualisation with Matplotlib.
- **What later lessons this will unlock**: numerical integration in Lesson m1-l2; symbolic computation in Lesson m2-l1; root finding in Lesson m2-l2; ODEs in Lesson m2-l3.

## Core Explanation

### The Python scientific stack

The Python distribution for scientific computing consists of:

- **Python**: the interpreter, version 3.10 or later. Install from python.org or via a distribution like Anaconda.
- **NumPy**: the library for array operations. `import numpy as np` gives access to `np.array`, `np.linspace`, `np.sin`, etc.
- **SciPy**: the library for scientific computing. `scipy.integrate`, `scipy.optimize`, `scipy.linalg`, `scipy.special`, `scipy.stats`.
- **Matplotlib**: the library for plotting. `import matplotlib.pyplot as plt`; the conventions are `plt.plot(x, y)`, `plt.xlabel('x')`, `plt.ylabel('y')`, `plt.show()`.
- **SymPy**: the library for symbolic mathematics. `import sympy as sp`; the conventions are `sp.Symbol('x')`, `sp.diff`, `sp.integrate`, `sp.solve`.
- **Jupyter**: the notebook interface. Run cells interactively; the notebook supports markdown, code, and inline plots.

A typical install command (assuming Python is already installed):

```
pip install numpy scipy matplotlib sympy jupyter
```

For reproducibility, list the versions in your notebook (`pip freeze` or `python -m pip list`).

### The Jupyter notebook

A Jupyter notebook consists of cells, each either code (Python) or markdown (text). The notebook is interactive: the user runs cells in order, and the output (text, plots, error messages) appears below the cell. The notebook is the standard environment for data science and scientific computing.

The notebook supports:

- **Markdown cells**: formatted text, with headings, lists, equations (in LaTeX), links, images.
- **Code cells**: Python code, with syntax highlighting and inline output.
- **Inline plots**: Matplotlib figures, displayed below the code cell.

A new notebook is created with `jupyter notebook` (in a terminal) or via JupyterLab. The notebook is saved as a `.ipynb` file (a JSON document).

### Forward, backward, and central differences

The derivative $f'(x)$ can be approximated by **finite differences**. The three basic formulas:

**Forward difference**: $f'(x) \approx [f(x + h) - f(x)] / h$. Error: $O(h)$.

**Backward difference**: $f'(x) \approx [f(x) - f(x - h)] / h$. Error: $O(h)$.

**Central difference**: $f'(x) \approx [f(x + h) - f(x - h)] / (2 h)$. Error: $O(h^2)$.

The central difference is the most accurate for a given $h$, because the leading error term cancels by symmetry. The truncation error of the central difference is $-h^2 f'''(\xi) / 6$ for some $\xi$ between $x - h$ and $x + h$.

For the second derivative, the central formula is

$$f''(x) \approx [f(x + h) - 2 f(x) + f(x - h)] / h^2,$$

with error $O(h^2)$. This is the basis of the finite-difference method for differential equations.

### Error analysis: truncation and round-off

Two sources of error in numerical differentiation:

- **Truncation error**: the error from approximating the derivative by a finite-difference formula. Decreases with $h$.
- **Round-off error**: the error from representing real numbers with finite precision (e.g. double-precision has about 16 decimal digits). Increases as $h$ becomes very small, because the numerator $f(x + h) - f(x)$ becomes small while the relative error stays the same.

The total error is the sum of the two. For a second-order central difference,

$$\text{Total error} \approx \frac{h^2}{6} |f'''| + \frac{\epsilon}{h} |f|,$$

where $\epsilon$ is the machine epsilon ($\approx 2.2 \times 10^{-16}$ for double precision). The optimal $h$ minimises the sum:

$$h_\text{opt} = \left(\frac{3 \epsilon |f|}{|f'''|}\right)^{1/3}.$$

For typical values ($|f| \sim 1$, $|f'''| \sim 1$, $\epsilon \sim 10^{-16}$), $h_\text{opt} \approx 10^{-5}$, a much smaller value than the naive choice.

### Worked example: numerical derivative of $\sin x$

Compute $f'(x) = \cos x$ at $x = 1$ using central differences with several step sizes, and compare to the exact value.

**Solution.** The exact value is $\cos 1 \approx 0.5403$. The central difference formula is

$$f'(1) \approx [\sin(1 + h) - \sin(1 - h)] / (2 h).$$

| $h$ | $f'(1)$ | Error |
|---|---|---|
| $10^{-1}$ | 0.5393 | $-1.0 \times 10^{-3}$ |
| $10^{-3}$ | 0.54030 | $-3.0 \times 10^{-7}$ |
| $10^{-5}$ | 0.54030 | $-3.0 \times 10^{-11}$ |
| $10^{-7}$ | 0.54030 | $-3.0 \times 10^{-7}$ (round-off dominant) |
| $10^{-9}$ | 0.54030 | $-3.0 \times 10^{-3}$ (round-off very large) |

The error decreases as $h^2$ until round-off takes over, then increases. The optimal $h$ is around $10^{-5}$.

### The complex step derivative

A high-accuracy method is the **complex step derivative**: $f'(x) \approx \text{Im}(f(x + i h)) / h$, with error $O(h^2)$ and no round-off error from cancellation (the imaginary part is computed exactly, no subtraction). The method is limited to functions that can be evaluated at complex arguments.

### Higher-order differences

The central difference can be extended to higher orders:

$$f'(x) \approx \frac{-f(x + 2 h) + 8 f(x + h) - 8 f(x - h) + f(x - 2 h)}{12 h},$$

with error $O(h^4)$. The formula uses five function evaluations for a fourth-order accurate derivative. Higher-order formulas are useful when the function is smooth and the function evaluations are cheap.

### Worked example in Python

The Python code for the central difference, with visual comparison:

```python
import numpy as np
import matplotlib.pyplot as plt

def f(x):
    return np.sin(x)

def f_prime_exact(x):
    return np.cos(x)

def f_prime_central(x, h):
    return (f(x + h) - f(x - h)) / (2 * h)

x = 1.0
print(f"Exact f'(1) = {f_prime_exact(x):.10f}")
for h in [1e-1, 1e-3, 1e-5, 1e-7, 1e-9, 1e-11, 1e-13]:
    approx = f_prime_central(x, h)
    error = abs(approx - f_prime_exact(x))
    print(f"h = {h:.0e}, approx = {approx:.10f}, error = {error:.2e}")
```

The output shows the U-shaped error curve, with the minimum at the optimal $h$.

### Visualising functions and derivatives

Matplotlib is the standard tool for plotting in Python. A few essentials:

```python
import numpy as np
import matplotlib.pyplot as plt

x = np.linspace(-2 * np.pi, 2 * np.pi, 1000)
plt.plot(x, np.sin(x), label='sin(x)')
plt.plot(x, np.cos(x), label='cos(x)')
plt.xlabel('x')
plt.ylabel('y')
plt.legend()
plt.title('Sine and cosine')
plt.grid(True)
plt.savefig('sincos.png', dpi=150)
plt.show()
```

The plot can be saved to a file (e.g. PNG, PDF) with `plt.savefig`. The `dpi` argument sets the resolution.

For 3D plots, use `mpl_toolkits.mplot3d` or the `plotly` library. For animations, use `matplotlib.animation` or the `celluloid` package.

### Common pitfalls

- **Confusing `np.array` with Python lists**: NumPy arrays support element-wise operations; lists do not. Use `np.array([1, 2, 3])` for arrays.
- **Integer division in Python 2**: in Python 2, `1 / 2 = 0`; in Python 3, `1 / 2 = 0.5`. Use `from __future__ import division` in Python 2.
- **Forgetting to import a module**: every module used must be imported. The standard scientific stack imports are typically: `numpy as np`, `scipy`, `matplotlib.pyplot as plt`, `sympy as sp`.
- **Plotting without labels**: every plot should have axis labels, a title, and a legend. A plot without labels is hard to interpret.
- **Not saving the figure**: `plt.show()` displays the figure, but does not save it. Use `plt.savefig` to save the figure to a file.

### Reproducibility

A scientific computation should be reproducible: another researcher should be able to run the same code and get the same results. The key practices:

- **Version control**: use Git to track changes to the code.
- **Pinned dependencies**: list the exact versions of the libraries in `requirements.txt` or `environment.yml`.
- **Random seeds**: set the random seed for any stochastic computation.
- **Documented environment**: specify the Python version and the OS.
- **Self-contained notebooks**: each notebook should be runnable from top to bottom without external dependencies.

The Jupyter notebook is a good environment for reproducibility because the cells are runnable and the outputs are saved.

## Key Ideas

- The Python scientific stack: NumPy, SciPy, Matplotlib, SymPy, Jupyter.
- Forward, backward, and central differences for the derivative.
- Truncation error decreases with $h$; round-off error increases as $h \to 0$.
- The optimal $h$ balances the two error contributions.
- The complex step derivative avoids round-off from cancellation.
- Higher-order differences use more function evaluations for higher accuracy.

## Worked Examples

### Example 1 — Central difference for $e^x$

Compute $f'(0) = 1$ for $f(x) = e^x$ using the central difference.

**Solution.** $f'(0) \approx (e^h - e^{-h}) / (2 h) = (2 \sinh h) / (2 h) = \sinh h / h$. For $h = 0.01$: $\sinh(0.01) / 0.01 = 0.010000167 / 0.01 = 1.0000167$. Error $\approx 1.7 \times 10^{-5}$, in agreement with the $O(h^2)$ truncation error $\approx h^2 / 6 = 1.7 \times 10^{-5}$.

### Example 2 — Plotting a function and its derivative

Plot $f(x) = \sin x$ and $f'(x) = \cos x$ on the same axes.

**Solution.** Use Matplotlib:

```python
import numpy as np
import matplotlib.pyplot as plt

x = np.linspace(0, 2 * np.pi, 200)
fig, ax = plt.subplots()
ax.plot(x, np.sin(x), label='$\sin x$')
ax.plot(x, np.cos(x), label='$\cos x$')
ax.set_xlabel('x')
ax.set_ylabel('y')
ax.legend()
ax.set_title('Sine and cosine')
plt.savefig('sincos.png', dpi=150)
plt.show()
```

The plot shows the two functions, with the cosine reaching its maximum where the sine crosses zero.

### Example 3 — Optimal step size for the second derivative

Estimate the optimal $h$ for the central second derivative of $f(x) = \sin x$ at $x = 1$ in double precision.

**Solution.** The truncation error is $\approx h^2 / 12 |f^{(4)}| = h^2 / 12 |\sin 1| \approx 0.07 h^2$. The round-off error is $\approx 3 \epsilon / h^2$ (three function evaluations, each with error $\epsilon$). Total: $E \approx 0.07 h^2 + 3 \epsilon / h^2$. Minimising: $dE / dh = 0.14 h - 6 \epsilon / h^3 = 0$, so $h^4 = 6 \epsilon / 0.14 \approx 43 \epsilon$, $h \approx (43 \times 2.2 \times 10^{-16})^{1/4} \approx 1.7 \times 10^{-4}$.

## Common Misconceptions

- **"Smaller $h$ is always better."** No. Beyond the optimal $h$, round-off takes over and the error grows.
- **"Forward and central differences are equally accurate."** No. The central difference has error $O(h^2)$; the forward difference has error $O(h)$. For the same $h$, the central difference is much more accurate.
- **"Python lists and NumPy arrays are interchangeable."** They are not. NumPy arrays support element-wise operations; lists do not.
- **"A plot without labels is acceptable."** No. A plot should have axis labels, a title, and a legend.
- **"The notebook is automatically reproducible."** Only if the code is self-contained, the dependencies are pinned, and the random seeds are set.

## Connections

- The Python scientific stack is the standard tool for scientific computing in physics, chemistry, and engineering.
- Numerical differentiation is the foundation of finite-difference methods for differential equations.
- The error analysis is a general theme in numerical analysis: every numerical method has truncation and round-off errors.
- The Jupyter notebook is the standard environment for data science and reproducible research.
- The complex step derivative is a special case of automatic differentiation, a more general technique.

## Quick Check

1. Implement the forward, backward, and central differences for the derivative.
2. What is the optimal step size for the central difference of $f(x) = \sin x$ at $x = 0$ in double precision?
3. Plot the function $f(x) = e^{-x^2}$ and its derivative on the same axes.
4. Explain the trade-off between truncation and round-off error.
5. State the main components of the Python scientific stack.

## Takeaway

- The Python scientific stack (NumPy, SciPy, Matplotlib, SymPy, Jupyter) is the standard environment.
- Forward, backward, and central differences approximate the derivative with errors $O(h)$, $O(h)$, and $O(h^2)$ respectively.
- The optimal step size balances truncation and round-off error.
- The complex step derivative avoids round-off from cancellation.
- Higher-order differences use more function evaluations for higher accuracy.
- Reproducibility requires version control, pinned dependencies, and self-contained notebooks.
