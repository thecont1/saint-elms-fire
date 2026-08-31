# Rules of Differentiation

## 1. Introduction
Differentiation measures the instantaneous rate of change of a function. This
lesson covers the core rules that let us differentiate combinations of
functions without returning to the limit definition each time.

## 2. The Constant Multiple and Sum Rules
The derivative is a linear operator. For a constant `c` and functions `f` and `g`:

- **Constant multiple rule**: `d/dx [c f(x)] = c f'(x)`.
- **Sum rule**: `d/dx [f(x) + g(x)] = f'(x) + g'(x)`.

Together these mean we differentiate polynomials term by term.

## 3. The Product and Quotient Rules
When functions are multiplied or divided, linearity no longer applies:

- **Product rule**: `d/dx [f(x) g(x)] = f'(x) g(x) + f(x) g'(x)`.
- **Quotient rule**: `d/dx [f(x) / g(x)] = (f'(x) g(x) - f(x) g'(x)) / (g(x))^2`,
  where `g(x)` is non-zero.

## 4. The Chain Rule
For a composition `h(x) = f(g(x))`, the chain rule gives
`h'(x) = f'(g(x)) * g'(x)`. The outer function is differentiated first and
evaluated at the inner function, then multiplied by the derivative of the
inner function.

**Worked example.** Differentiate `y = (3x^2 + 1)^4`. The outer function is
`u^4` and the inner function is `u = 3x^2 + 1`, so
`dy/dx = 4(3x^2 + 1)^3 * 6x = 24x(3x^2 + 1)^3`.

## 5. The Power Rule
For any real exponent `n`, `d/dx [x^n] = n x^(n-1)`. Combined with the rules
above, this differentiates polynomials, exponentials, logarithms, and
trigonometric compositions.

## Summary
The constant multiple, sum, product, quotient, chain, and power rules form the
working toolkit for differentiation. The **chain rule** is the rule that
handles compositions of functions.
