***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-1
semesterName: Semester 1
subjectId: physics
subjectName: Physics
courseId: mechanics-lab
courseName: Mechanics Lab
moduleId: mechanics-lab-module-1
moduleName: Measurement and Uncertainty
lessonId: mechanics-lab-m1-l2
lessonName: Error Analysis, Significant Figures, and the Lab Notebook
lessonNumber: 2
moduleNumber: 1
semesterNumber: 1
difficulty: foundation
estimatedStudyMinutes: 50
releaseOrder: 2
prerequisites:
  - mechanics-lab-m1-l1
learningObjectives:
  - Distinguish random and systematic error and propagate uncertainties through calculations.
  - Write a clear, well-organised lab notebook entry with raw data, processed data, and observations.
  - Construct a proper plot with axis labels, error bars, a linear fit, and a residual analysis.
concepts:
  - Random error
  - Systematic error
  - Error propagation
  - Lab notebook
  - Linear regression
  - Residuals
tags:
  - physics
  - laboratory
  - error-analysis
  - lab-notebook
sourceType: authored-courseware
assessmentHints:
  - short-answer
  - scenario
  - problem-solving
***

# Error Analysis, Significant Figures, and the Lab Notebook

## Overview

The second lesson of the Mechanics Lab develops the quantitative treatment of error. The lesson covers the propagation of uncertainties through the standard arithmetic operations, the construction of a linear fit to data, the analysis of residuals, and the proper use of a lab notebook. The lesson is the foundation of every quantitative analysis you will do in the laboratory: every measurement is reported with an uncertainty, every derived quantity inherits the uncertainties of the measurements, every graph is checked for linearity, and every lab notebook entry is complete and reproducible. The lesson closes with a discussion of the standard format of a lab report.

## Learning Path

- **What you should already know**: the use of the vernier caliper and the micrometer (Lesson m1-l1); the concept of random and systematic error; the rules of significant figures.
- **What this lesson adds**: the propagation of uncertainties; the construction of a linear fit; the analysis of residuals; the proper use of a lab notebook; the standard format of a lab report.
- **What later lessons this will unlock**: the data analysis in every experiment of the course; the proper documentation of every measurement; the peer review of every lab report.

## Core Explanation

### Random and systematic error

**Random error** is the variability in repeated measurements. It arises from the noise of the instrument, the variability of the system, and the skill of the experimenter. The standard deviation of the measurements estimates the random error. The random error is reduced by averaging: the standard error of the mean is $\sigma / \sqrt{N}$ for $N$ independent measurements.

**Systematic error** is a bias in the measurement. It arises from a mis-calibrated instrument, a flawed technique, or a constant environmental factor. The systematic error is not reduced by averaging; it is reduced by calibration, by careful technique, and by control of the environment.

The two errors are independent and add in quadrature: $\delta x_\text{total} = \sqrt{\delta x_\text{random}^2 + \delta x_\text{systematic}^2}$. The total uncertainty is the combination.

### Error propagation

When a derived quantity is computed from measured quantities, the uncertainties propagate. For the standard operations:

- **Sum or difference**: $z = x + y$ or $z = x - y$. The absolute uncertainties add: $\delta z = \delta x + \delta y$.
- **Product or quotient**: $z = x y$ or $z = x / y$. The relative uncertainties add: $\delta z / z = \delta x / x + \delta y / y$.
- **Power**: $z = x^n$. The relative uncertainty is $|n| \delta x / x$: $\delta z / z = |n| \delta x / x$.
- **Function of one variable**: $z = f(x)$. The absolute uncertainty is $|f'(x)| \delta x$.

For more complex expressions, the chain rule and the rules above give the propagated uncertainty. The general formula: if $z = f(x_1, \ldots, x_n)$, then

$$\delta z = \sqrt{\sum_{i=1}^n \left( \frac{\partial f}{\partial x_i} \right)^2 \delta x_i^2},$$

the **propagation of uncertainties** in quadrature (assuming the errors are independent).

### Significant figures in computed quantities

When a computed quantity is reported, the number of significant figures should reflect the precision of the input data:

- For sums and differences, the result has the precision of the least precise input.
- For products and quotients, the result has the relative precision of the least precise input.

For example, $1.23 + 4.567 = 5.797$, but the result should be reported as $5.80$ (three decimal places, the precision of the second input). And $1.23 \times 4.567 = 5.61741$, but the result should be reported as $5.6$ (two significant figures, the relative precision of the first input).

The rule of thumb: in multiplication and division, the number of significant figures of the result is the smallest of the inputs. In addition and subtraction, the number of decimal places of the result is the smallest of the inputs.

### The lab notebook

A **lab notebook** is the primary record of the experiment. It is a bound book with numbered pages, written in pen. The format:

- **Header**: date, title of the experiment, name of the experimenter, course and section.
- **Objective**: a brief statement of the purpose of the experiment.
- **Apparatus**: a list of the equipment used, with serial numbers if relevant.
- **Procedure**: a brief description of the procedure, in your own words, with a diagram or schematic.
- **Data**: the raw data, recorded in tables, with units and uncertainties. Never erase or overwrite; cross out mistakes with a single line.
- **Observations**: any qualitative observations (the colour of the solution, the behaviour of the apparatus, etc.).
- **Analysis**: the calculations, the plots, the linear fits, the residuals.
- **Conclusion**: a brief statement of the result and the uncertainty, with a comparison to the expected value (if known).
- **Discussion**: a critical evaluation of the experiment, the sources of error, the improvements.

The lab notebook is a legal document in research; it is the record of the work, and it must be complete and reproducible. A loose sheet of paper is not a record.

### Plotting data

A **plot** of data is a visual representation of the relationship between two variables. The standard format:

- **Axes**: the horizontal axis is the independent variable; the vertical axis is the dependent variable.
- **Labels**: each axis is labelled with the quantity and the unit. The plot has a title.
- **Error bars**: each data point has an error bar in both x and y, representing the uncertainty.
- **Markers**: data points are marked with symbols (circles, squares, triangles).
- **Fits**: a curve (usually a straight line) is fit to the data, with the equation of the fit and the parameters.

A plot is the most efficient way to communicate a relationship; a poorly designed plot can mislead. The standard format (labels, error bars, fits) ensures that the plot is readable and that the relationship is unambiguous.

### Linear regression

A **linear regression** fits a straight line $y = a + b x$ to a set of data points $(x_i, y_i)$. The best-fit parameters are the values of $a$ and $b$ that minimise the sum of the squared residuals $\sum (y_i - a - b x_i)^2$.

The formulas (for equal weights):

$$b = \frac{n \sum x_i y_i - \sum x_i \sum y_i}{n \sum x_i^2 - (\sum x_i)^2}, \quad a = \bar y - b \bar x,$$

where $n$ is the number of data points and $\bar x, \bar y$ are the means. The uncertainties in $a$ and $b$ are computed from the residuals.

For weighted fits (where each data point has an uncertainty $\sigma_i$), the formulas are similar but with weights $w_i = 1 / \sigma_i^2$. The SciPy function `scipy.stats.linregress` and the NumPy function `numpy.polyfit` are the standard tools.

### Residuals and goodness of fit

A **residual** is the difference between the data and the fit: $r_i = y_i - (a + b x_i)$. The residuals should be:

- **Randomly distributed** around zero, with no trend.
- **Comparable in magnitude** to the error bars.

If the residuals show a trend (e.g. a curve), the fit is missing a feature; try a different model (e.g. a quadratic). If the residuals are larger than the error bars, the error bars are too small; increase the uncertainties or the model is wrong.

A plot of the residuals vs. $x$ is the standard diagnostic. The plot should be a horizontal band of points around zero, with no structure.

### The chi-squared test

The **chi-squared** statistic measures the goodness of fit:

$$\chi^2 = \sum_{i=1}^n \left( \frac{y_i - a - b x_i}{\sigma_i} \right)^2.$$

If the fit is good, $\chi^2$ should be of order $n - 2$ (the number of degrees of freedom, $n$ minus the number of fit parameters). A value of $\chi^2$ much larger than $n - 2$ indicates a poor fit; a value much smaller indicates overestimated uncertainties.

The reduced chi-squared $\chi^2 / (n - 2)$ should be of order $1$. The chi-squared test is the standard test for the agreement of data with a model.

### Worked example: error propagation

A rectangle has length $L = 12.3 \pm 0.1$ cm and width $W = 5.6 \pm 0.1$ cm. Find the area and its uncertainty.

**Solution.** Area $= L \times W = 12.3 \times 5.6 = 68.88$ cm$^2$. Relative uncertainty of $L$: $0.1 / 12.3 = 0.0081$. Relative uncertainty of $W$: $0.1 / 5.6 = 0.018$. Relative uncertainty of area (sum of relative uncertainties): $0.0081 + 0.018 = 0.026$. Absolute uncertainty of area: $0.026 \times 68.88 = 1.8$ cm$^2$. Result: $A = 69 \pm 2$ cm$^2$.

### Worked example: linear fit

Five data points are measured: $(1, 2.1), (2, 3.9), (3, 6.1), (4, 8.0), (5, 10.0)$. Fit a line $y = a + b x$.

**Solution.** $\sum x = 15$, $\sum y = 30.1$, $\sum x^2 = 55$, $\sum x y = 109.7$, $n = 5$. $b = (5 \cdot 109.7 - 15 \cdot 30.1) / (5 \cdot 55 - 15^2) = (548.5 - 451.5) / (275 - 225) = 97 / 50 = 1.94$. $a = (30.1 - 1.94 \cdot 15) / 5 = (30.1 - 29.1) / 5 = 0.20$. The fit is $y = 0.20 + 1.94 x$. The data are close to the line; the residuals are small.

### Lab report format

A **lab report** is a polished version of the lab notebook entry, with a standard format:

- **Title**: the title of the experiment.
- **Abstract**: a brief summary (about $200$ words) of the objective, the method, the result, and the conclusion.
- **Introduction**: a brief description of the physics, including the relevant equations and the expected result.
- **Apparatus**: a list of the equipment, with a diagram or schematic.
- **Procedure**: a description of the procedure, in enough detail that another experimenter could repeat the work.
- **Data**: the raw data, in tables, with units and uncertainties.
- **Analysis**: the calculations, the plots, the linear fits, the residuals, the error propagation, the final result.
- **Conclusion**: a brief statement of the result and the uncertainty, with a comparison to the expected value.
- **Discussion**: a critical evaluation of the experiment, the sources of error, the improvements.

The report is the final product of the experiment; the notebook is the record. The report is graded; the notebook is the reference.

### Common pitfalls

- **Not propagating errors**: a result without an uncertainty is not a result.
- **Not plotting the residuals**: the residuals are the diagnostic for the quality of the fit.
- **Not comparing to the expected value**: the comparison is the test of the experiment.
- **Not writing the report in your own words**: a report copied from a lab partner is plagiarism.
- **Not including the units**: a number without a unit is meaningless.
- **Not labelling the axes**: a plot without axis labels is unreadable.

### Key Ideas

- Random and systematic errors are the two types of error; the total uncertainty is the quadrature sum.
- Errors propagate: absolute errors add for sums and differences; relative errors add for products and quotients.
- The lab notebook is the primary record of the experiment; the report is the polished version.
- A plot should have axis labels, error bars, and a fit.
- A linear fit minimises the sum of squared residuals; the residuals should be randomly distributed.
- The chi-squared test is the standard test for the agreement of data with a model.

## Worked Examples

### Example 1 — Error propagation for a derived quantity

The period of a pendulum is $T = 2 \pi \sqrt{L / g}$, with $L = 1.000 \pm 0.005$ m and $g = 9.81 \pm 0.01$ m/s$^2$. Find $T$ and its uncertainty.

**Solution.** $T = 2 \pi \sqrt{1.000 / 9.81} = 2.007$ s. Partial derivatives: $\partial T / \partial L = \pi / \sqrt{L g} = T / (2 L)$, $\partial T / \partial g = -\pi \sqrt{L} / (g^{3/2}) = -T / (2 g)$. Propagated uncertainty: $\delta T = \sqrt{(\partial T / \partial L)^2 \delta L^2 + (\partial T / \partial g)^2 \delta g^2} = T \sqrt{(\delta L / (2 L))^2 + (\delta g / (2 g))^2} = 2.007 \sqrt{(0.0025)^2 + (0.0005)^2} \approx 2.007 \times 0.0026 = 0.005$ s. Result: $T = 2.007 \pm 0.005$ s.

### Example 2 — Linear fit and residuals

Five data points: $(0, 0.1), (1, 2.1), (2, 3.9), (3, 6.1), (4, 8.0)$. Fit a line.

**Solution.** $\sum x = 10$, $\sum y = 20.2$, $\sum x^2 = 30$, $\sum x y = 56.2$, $n = 5$. $b = (5 \cdot 56.2 - 10 \cdot 20.2) / (5 \cdot 30 - 100) = (281 - 202) / 50 = 1.58$. $a = (20.2 - 1.58 \cdot 10) / 5 = (20.2 - 15.8) / 5 = 0.88$. Fit: $y = 0.88 + 1.58 x$. Residuals: $0.1 - 0.88 = -0.78$, $2.1 - 2.46 = -0.36$, $3.9 - 4.04 = -0.14$, $6.1 - 5.62 = 0.48$, $8.0 - 7.20 = 0.80$. Sum of residuals: $-0.78 - 0.36 - 0.14 + 0.48 + 0.80 = 0.00$ ✓. The residuals are small but not random; there may be a slight curvature. A quadratic fit might be better.

### Example 3 — Chi-squared test

A fit to $n = 10$ data points with $2$ fit parameters gives $\chi^2 = 25$. The reduced chi-squared is $\chi^2 / (n - 2) = 25 / 8 = 3.13$. A reduced chi-squared of order $1$ is expected for a good fit; $3.13$ is much larger, indicating a poor fit. The model is missing a feature; try a different model.

## Common Misconceptions

- **"Errors are mistakes."** Errors are the limits of precision; mistakes are blunders. The two are different.
- **"Averaging reduces systematic error."** No, averaging reduces random error. Systematic error is not reduced by averaging.
- **"The error is the difference between my measurement and the textbook."** No, that is the accuracy, not the precision. The error is the random and systematic uncertainty of the measurement.
- **"A good fit goes through every data point."** A good fit goes through the data within the error bars. A fit that goes through every point is overfit.
- **"A report is just the data."** No, a report is the analysis, the interpretation, and the conclusion. The data is part of it.

## Connections

- The error analysis is the foundation of every quantitative analysis in science.
- The lab notebook is the primary record of the work; the report is the polished version.
- The linear fit and the chi-squared test are used in every field of science.
- The propagation of uncertainties is the foundation of the design of experiments (which measurements matter most) and of the combination of measurements (multiple measurements of the same quantity).

## Quick Check

1. State the two types of error and how to reduce each.
2. Compute the area of a rectangle with $L = 1.23 \pm 0.01$ m and $W = 0.45 \pm 0.01$ m, with the correct uncertainty.
3. A line is fit to $5$ data points. The slope is $b = 2.0 \pm 0.1$ and the intercept is $a = 0.5 \pm 0.2$. Which of the two parameters is better determined?
4. Compute the chi-squared for a fit with $n = 8$ data points and residuals $r = (0.1, -0.2, 0.3, -0.1, 0.2, 0.0, -0.1, 0.1)$ (in units of $\sigma$). Is the fit good?
5. State the three sections of a lab notebook entry.

## Takeaway

- Random and systematic errors are the two types of error.
- Errors propagate: absolute errors add for sums and differences; relative errors add for products and quotients.
- The lab notebook is the primary record; the report is the polished version.
- A linear fit minimises the sum of squared residuals; the residuals should be randomly distributed.
- The chi-squared test is the standard test for the goodness of fit.
