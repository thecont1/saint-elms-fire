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
lessonId: calculus-using-python-m2-l1
lessonName: Symbolic Computation with SymPy
lessonNumber: 3
moduleNumber: 2
semesterNumber: 2
difficulty: intermediate
estimatedStudyMinutes: 40
releaseOrder: 3
prerequisites:
  - calculus-using-python-m1-l2
learningObjectives:
  - Perform symbolic differentiation, integration, and simplification with SymPy.
  - Solve algebraic and transcendental equations symbolically.
  - Verify analytical results from the calculus courses numerically.
concepts:
  - Symbolic mathematics
  - SymPy expressions
  - Differentiation
  - Integration
  - Simplification
  - Series expansion
tags:
  - computational-methods
  - python
  - sympy
  - symbolic
sourceType: authored-courseware
assessmentHints:
  - short-answer
  - problem-solving
***

# Symbolic Computation with SymPy

## Overview

SymPy is the symbolic mathematics library for Python: it represents mathematical expressions as objects and manipulates them exactly (no round-off), the way a mathematician would with pencil and paper. The lesson introduces the SymPy workflow: defining symbols, building expressions, applying operations (differentiate, integrate, simplify, expand, factor, solve, series), and verifying the results numerically with NumPy. The lesson is the gateway to using Python as a serious tool for calculus, differential equations, and beyond.

## Learning Path

- **What you should already know**: the calculus (Differential and Integral Calculus); Python basics, NumPy, SciPy (Lessons m1-l1, m1-l2).
- **What this lesson adds**: the SymPy workflow; symbolic differentiation and integration; symbolic equation solving; series expansion; numerical verification.
- **What later lessons this will unlock**: root finding in Lesson m2-l2; ODEs in Lesson m2-l3; the capstone project in Lesson m2-l3; the use of SymPy throughout the rest of the programme.

## Core Explanation

### The SymPy workflow

SymPy represents mathematical expressions as trees of symbols and operations. The basic workflow:

1. **Define symbols**: `x, y, z = sp.symbols('x y z')`.
2. **Build expressions**: `f = sp.sin(x) + sp.cos(x)`.
3. **Apply operations**: `f.diff(x)`, `sp.integrate(f, x)`, `sp.solve(f, x)`, `sp.simplify(f)`, `sp.expand(f)`, `sp.factor(f)`.
4. **Convert to numerical values**: `f.subs(x, 1.5).evalf()` or `sp.lambdify(x, f)(1.5)`.
5. **Plot**: `sp.plot(f, (x, -2, 2))`.

The SymPy workflow is interactive: build a small expression, apply an operation, check the result, iterate.

### Defining symbols

The basic command is `sp.Symbol('x')` for a single symbol, or `sp.symbols('x y z')` for multiple. The symbols can have assumptions (e.g. real, positive, integer) that help SymPy simplify expressions:

```python
x = sp.Symbol('x', real=True)
y = sp.Symbol('y', positive=True)
n = sp.Symbol('n', integer=True, positive=True)
```

Assumptions affect the result: `sp.sqrt(x**2)` simplifies to `Abs(x)` if `x` is real, but to `x` if `x` is positive.

### Building expressions

SymPy expressions are built from symbols, numbers, and functions:

```python
x = sp.Symbol('x')
f = sp.sin(x) + sp.cos(x)
g = sp.exp(-x**2)
h = sp.log(x) + sp.sqrt(x + 1)
```

The library provides the standard mathematical functions (`sin`, `cos`, `tan`, `exp`, `log`, `sqrt`), the special functions (`erf`, `besselj`, `gamma`, `factorial`), and the constants (`pi`, `E`, `I`, `oo`).

### Differentiation

`f.diff(x)` computes the partial derivative of `f` with respect to `x`. For higher derivatives, use `f.diff(x, 2)` or `f.diff(x, x)`. For mixed partial derivatives, use `f.diff(x, y, 2)`.

```python
f = sp.sin(x**2)
f.diff(x)              # 2*x*cos(x**2)
f.diff(x, 2)           # 2*cos(x**2) - 4*x**2*sin(x**2)
```

For multivariate functions:

```python
x, y = sp.symbols('x y')
f = sp.sin(x) * sp.cos(y)
f.diff(x)              # cos(x)*cos(y)
f.diff(y)              # -sin(x)*sin(y)
f.diff(x, y)           # -cos(x)*sin(y)
```

### Integration

`sp.integrate(f, x)` computes the indefinite integral. For definite integrals, use `sp.integrate(f, (x, a, b))`.

```python
sp.integrate(sp.sin(x), x)               # -cos(x)
sp.integrate(sp.exp(-x**2), x)           # sqrt(pi)/2 * erf(x)
sp.integrate(sp.exp(-x**2), (x, -sp.oo, sp.oo))   # sqrt(pi)
```

Some integrals cannot be expressed in closed form; SymPy returns an unevaluated `Integral` object. The user can evaluate numerically with `.evalf()`.

### Simplification

SymPy provides several simplification routines:

- `sp.simplify(f)`: applies a battery of simplification strategies.
- `sp.expand(f)`: expands products and powers.
- `sp.factor(f)`: factors polynomials.
- `sp.collect(f, x)`: collects terms in `x`.
- `sp.apart(f, x)`: partial fraction decomposition.
- `sp.trigsimp(f)`: simplifies trigonometric expressions.
- `sp.cancel(f)`: cancels common factors in rational functions.

The choice of routine depends on the desired form. `sp.simplify` is the catch-all, but it can be slow for large expressions; the specific routines are often faster and more predictable.

### Equation solving

`sp.solve(f, x)` solves the equation $f = 0$ for $x$. For systems of equations, use `sp.solve([f1, f2], [x, y])`.

```python
x = sp.Symbol('x')
sp.solve(x**2 - 4, x)         # [-2, 2]
sp.solve(sp.sin(x) - 1, x)    # [pi/2]
sp.solve(sp.exp(x) - 2, x)    # [log(2)]
```

For transcendental equations, SymPy may return an unevaluated `ConditionSet` or an empty list. Numerical methods (Lesson m2-l2) can be used as a fallback.

### Series expansion

`sp.series(f, x, x0, n)` computes the Taylor expansion of `f` around `x0` to order `n - 1`:

```python
x = sp.Symbol('x')
sp.series(sp.sin(x), x, 0, 6)   # x - x**3/6 + x**5/120 + O(x**6)
sp.series(sp.exp(x), x, 0, 5)   # 1 + x + x**2/2 + x**3/6 + x**4/24 + O(x**5)
```

The `O(x**n)` term is the big-O remainder; it indicates the order of the truncation. The series is a SymPy object that can be manipulated (e.g. truncated, substituted, plotted).

### Limits

`sp.limit(f, x, x0)` computes the limit of `f` as $x$ approaches $x0$:

```python
x = sp.Symbol('x')
sp.limit(sp.sin(x) / x, x, 0)    # 1
sp.limit((1 + 1/x)**x, x, sp.oo)  # E
sp.limit(sp.exp(-1/x**2), x, 0)  # 1
```

The library uses series expansion and the L'Hôpital rule to evaluate indeterminate forms.

### Numerical evaluation

`f.subs(x, 1.5).evalf()` substitutes a value and evaluates the result to 15 significant digits (the default precision). For faster evaluation, `sp.lambdify(x, f)` converts the expression to a NumPy-aware Python function:

```python
f = sp.sin(x) * sp.exp(-x)
f_num = sp.lambdify(x, f)
import numpy as np
f_num(np.array([0, 1, 2, 3]))  # array of values
```

`lambdify` is the standard way to evaluate SymPy expressions on large arrays for plotting or numerical computation.

### Worked examples

**Example 1 — Verifying the derivative of $x^3 \sin x$.**

Compute the derivative with SymPy and verify numerically.

```python
import sympy as sp
x = sp.Symbol('x')
f = x**3 * sp.sin(x)
f_prime = f.diff(x)
print(f_prime)  # 3*x**2*sin(x) + x**3*cos(x)
```

At $x = 1$: $f'(1) = 3 \sin 1 + \cos 1 \approx 3 \times 0.8415 + 0.5403 \approx 3.0648$.

Numerically using the central difference:

```python
import numpy as np
f_num = sp.lambdify(x, f)
h = 1e-5
(f_num(1 + h) - f_num(1 - h)) / (2 * h)  # ≈ 3.0648
```

The two agree to 4 decimal places, confirming the result.

**Example 2 — Definite integral with a non-elementary antiderivative.**

Compute $\int_0^1 e^{-x^2} dx$ symbolically and numerically.

```python
import sympy as sp
result = sp.integrate(sp.exp(-x**2), (x, 0, 1))
print(result)  # sqrt(pi)/2 * erf(1)
print(result.evalf())  # 0.746824132812427
```

The result is the error function. The numerical value is approximately $0.7468$.

**Example 3 — Solving a quadratic equation.**

Solve $a x^2 + b x + c = 0$ for $x$ in general.

```python
import sympy as sp
x, a, b, c = sp.symbols('x a b c')
sp.solve(a*x**2 + b*x + c, x)  # [(-b + sqrt(-4*a*c + b**2))/(2*a), -(b + sqrt(-4*a*c + b**2))/(2*a)]
```

The result is the quadratic formula, with the two solutions in a list.

### Common pitfalls

- **Forgetting to declare symbols**: every variable must be declared with `sp.Symbol` or `sp.symbols`. Undeclared variables are treated as Python objects and will produce errors in the operations.
- **Confusing `sp.Symbol` with `sp.symbols`**: `sp.Symbol('x')` declares a single symbol; `sp.symbols('x y z')` declares multiple.
- **Mixing SymPy and NumPy**: SymPy expressions and NumPy arrays cannot be combined directly. Use `sp.lambdify` to convert.
- **Forgetting the assumptions**: `sp.sqrt(x**2)` is `Abs(x)` for real `x`, but `x` for positive `x`. The assumption matters.
- **Trying to solve an equation with no closed-form solution**: SymPy may return an unevaluated `ConditionSet` or an empty list. Use `nsolve` for numerical solutions.

### Key Ideas

- SymPy is the symbolic mathematics library for Python.
- The workflow: define symbols, build expressions, apply operations, evaluate numerically, plot.
- `diff`, `integrate`, `solve`, `simplify`, `series`, `limit` are the main operations.
- `lambdify` converts a SymPy expression to a NumPy function for fast evaluation.
- SymPy is the symbolic counterpart of NumPy/SciPy: it produces exact results, not numerical approximations.

## Worked Examples

### Example 1 — Symbolic and numerical computation of the Fresnel integral

Compute $\int_0^1 \sin(x^2) dx$ symbolically and numerically.

```python
import sympy as sp
x = sp.Symbol('x')
result = sp.integrate(sp.sin(x**2), (x, 0, 1))
print(result)  # sqrt(2)*pi*FresnelIntegral(1)
print(result.evalf())  # 0.310268301686...
```

The result involves the Fresnel integral, a special function. Numerically, the value is approximately $0.3103$.

### Example 2 — Taylor expansion of $\ln(1 + x)$.

Compute the Taylor expansion of $\ln(1 + x)$ around $x = 0$ to order 5.

```python
import sympy as sp
x = sp.Symbol('x')
sp.series(sp.log(1 + x), x, 0, 5)  # x - x**2/2 + x**3/3 - x**4/4 + O(x**5)
```

The result is the alternating series $x - x^2/2 + x^3/3 - x^4/4 + \ldots$, valid for $|x| < 1$.

### Example 3 — Solving a transcendental equation.

Solve $\cos x = x$ for $x$.

```python
import sympy as sp
x = sp.Symbol('x')
sp.solve(sp.cos(x) - x, x)  # ConditionSet
```

SymPy cannot solve this in closed form. Use a numerical solver (Lesson m2-l2) instead. The solution is approximately $x \approx 0.7391$.

## Common Misconceptions

- **"SymPy is just a calculator."** No, it manipulates expressions exactly, not numerically. The result is a symbolic expression, not a number.
- **"SymPy can solve any equation."** No, it returns an unevaluated `ConditionSet` for equations without closed-form solutions.
- **"SymPy is slow."** It can be slow for large expressions, but for typical calculus problems, it is fast enough. For large-scale problems, use NumPy and SciPy.
- **"SymPy and NumPy are interchangeable."** They are complementary: SymPy for symbolic work, NumPy for numerical work. Use `lambdify` to convert between them.

## Connections

- SymPy is the symbolic counterpart of NumPy and SciPy.
- The differential and integral calculus from the previous courses can be verified symbolically with SymPy.
- The series expansion of SymPy is the basis of the Taylor series and perturbation theory in physics.
- The numerical solvers of SciPy (covered in the Numerical Methods course in Semester 4) complement the symbolic solvers of SymPy.
- The simplification routines of SymPy are the basis of computer algebra systems in research and engineering.

## Quick Check

1. Compute the third derivative of $f(x) = e^{x^2} \sin x$ with SymPy.
2. Compute $\int_0^\infty e^{-x^2} dx$ with SymPy.
3. Solve the cubic $x^3 - 6 x^2 + 11 x - 6 = 0$ with SymPy.
4. Compute the Taylor expansion of $\cos x$ around $x = \pi$ to order 3.
5. Use `lambdify` to convert a SymPy expression to a NumPy function and plot it.

## Takeaway

- SymPy is the symbolic mathematics library for Python.
- The workflow: define symbols, build expressions, apply operations, evaluate numerically.
- The main operations are `diff`, `integrate`, `solve`, `simplify`, `series`, `limit`.
- `lambdify` converts SymPy expressions to NumPy functions.
- SymPy is the symbolic counterpart of NumPy; use it for exact results, not numerical approximations.
