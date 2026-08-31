***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-6
semesterName: Semester 6
subjectId: physics
subjectName: Physics
courseId: nuclear-physics
courseName: Nuclear Physics
moduleId: nuclear-physics-module-2
moduleName: Radioactivity and Reactions
lessonId: nuclear-physics-m2-l2
lessonName: Half-life, Decay Chains and Activity
lessonNumber: 5
moduleNumber: 2
semesterNumber: 6
difficulty: intermediate
estimatedStudyMinutes: 50
releaseOrder: 5
prerequisites:
  - nuclear-physics-m2-l1
learningObjectives:
  - Derive and apply the radioactive decay law $N(t) = N_0 e^{-\lambda t}$ and the activity $A = \lambda N$.
  - Analyse simple decay chains and describe secular and transient equilibrium.
  - Compute the age of a sample from the parent–daughter ratio using the radioactive dating equation.
concepts:
  - Decay constant
  - Half-life
  - Mean life
  - Activity
  - Secular equilibrium
  - Radioactive dating
tags:
  - physics
  - nuclear-physics
  - radioactivity
  - dating
sourceType: authored-courseware
assessmentHints:
  - conceptual
  - derivation
  - problem-solving
  - short-answer
***

# Half-life, Decay Chains and Activity

## Overview

The radioactive decay law is the simplest kinetic equation in all of physics: a nucleus has a fixed probability per unit time of decaying, and the population therefore decreases exponentially. This lesson develops the decay law and its immediate consequences — half-life, mean life, and activity — and then generalises to decay chains, where a radioactive parent produces a radioactive daughter, which may in turn produce a granddaughter, and so on. Two important limiting regimes — secular equilibrium, where the parent is much longer-lived than any descendant, and transient equilibrium, where the parent is only somewhat longer-lived — give simple, useful relations between the populations of the chain members. The lesson closes with the radioactive dating equation, the foundation of geological and archaeological chronology.

## Learning Path

- **What you should already know**: the three principal modes of radioactive decay (Lesson m2-l1); the conservation of nucleon number in nuclear reactions; the basic algebra of exponentials and logarithms.
- **What this lesson adds**: the decay law, half-life, mean life, and activity; the analysis of decay chains in the secular and transient equilibrium limits; the dating equation for parent–daughter systems.
- **What later lessons this will unlock**: the dating applications in archaeology and geology (Lesson m3-l3); the kinetics of nuclear reactor operation and isotope production; the production of cosmogenic isotopes in the atmosphere.

## Core Explanation

### The decay law

A single radioactive nucleus has a fixed probability per unit time of decaying, regardless of its history. This probability is the decay constant $\lambda$, with dimensions of inverse time. For an ensemble of $N$ identical nuclei, the rate of change is

$$\frac{dN}{dt} = -\lambda N.$$

The solution is

$$N(t) = N_0 e^{-\lambda t},$$

the famous exponential decay law. The **half-life** $T_{1/2}$ is the time for the population to fall by a factor of 2:

$$T_{1/2} = \frac{\ln 2}{\lambda} = \frac{0.693}{\lambda}.$$

The **mean life** $\tau$ is the average lifetime of a single nucleus:

$$\tau = \int_0^\infty t \cdot \lambda e^{-\lambda t} dt = \frac{1}{\lambda}.$$

The mean life and the half-life are related by $\tau = T_{1/2}/\ln 2 = 1.443 T_{1/2}$.

The **activity** $A$ is the number of decays per unit time:

$$A = \lambda N = A_0 e^{-\lambda t}.$$

Activity is measured in becquerels (Bq, 1 decay per second) in SI units, or in curies (Ci, $3.7 \times 10^{10}$ Bq, the activity of 1 g of $^{226}$Ra) in older units.

### Statistical nature of decay

The decay law is a statement about the average behaviour of a large ensemble of nuclei. A single nucleus is unpredictable: it may decay in the next second, or it may survive for a million years. The probability of decay in a small time interval $\Delta t$ is $\lambda \Delta t$, so the probability of surviving for time $t$ without decaying is $e^{-\lambda t}$. The probability of decay at time $t$ is $\lambda e^{-\lambda t} dt$, the differential form of the decay law.

The decay law is exact in the limit of an infinite ensemble; for finite $N$, the standard deviation in the number of counts in a time interval $\Delta t$ is $\sqrt{N}$, so the fractional uncertainty is $1/\sqrt{N}$. To reduce the fractional uncertainty to 1%, one must collect at least 10,000 counts.

### Simple parent–daughter kinetics

When a parent nucleus $P$ decays to a daughter $D$ that is also radioactive, the system is described by two coupled differential equations:

$$\frac{dN_P}{dt} = -\lambda_P N_P,$$
$$\frac{dN_D}{dt} = \lambda_P N_P - \lambda_D N_D.$$

The first equation has the usual solution $N_P(t) = N_P(0) e^{-\lambda_P t}$. Substituting into the second equation gives a first-order linear ODE with the solution

$$N_D(t) = N_D(0) e^{-\lambda_D t} + \frac{\lambda_P N_P(0)}{\lambda_D - \lambda_P}\left(e^{-\lambda_P t} - e^{-\lambda_D t}\right).$$

If the daughter is initially absent, $N_D(0) = 0$, and the population of the daughter rises from zero, reaches a maximum, and then decays with the longer of the two time constants.

Two important limits emerge:

**Secular equilibrium**: when $\lambda_P \ll \lambda_D$ (parent much longer-lived than daughter), the daughter population reaches a quasi-steady state with $N_D \approx (\lambda_P / \lambda_D) N_P$, decaying with the parent's half-life. The activity of the daughter equals the activity of the parent. This is the regime in which the uranium, thorium, and actinium decay chains reach a steady state after a few daughter half-lives.

**Transient equilibrium**: when $\lambda_P < \lambda_D$ but the two are comparable, the daughter population reaches a peak and then decays with the parent's half-life, but the ratio of daughter to parent is approximately $\lambda_D / (\lambda_D - \lambda_P)$. The activity of the daughter is greater than that of the parent.

**No equilibrium**: when $\lambda_P > \lambda_D$ (parent shorter-lived than daughter), the daughter population grows and then decays with its own half-life, after the parent has decayed away. This is the typical case for the daughter of a short-lived parent.

### Decay chains

Many heavy nuclei decay through a chain of alpha and beta decays, ending at a stable nucleus. The uranium-238 chain (the "uranium series") is the longest:

$^{238}$U $\xrightarrow{\alpha}$ $^{234}$Th $\xrightarrow{\beta}$ $^{234}$Pa $\xrightarrow{\beta}$ $^{234}$U $\xrightarrow{\alpha}$ $^{230}$Th $\xrightarrow{\alpha}$ $^{226}$Ra $\xrightarrow{\alpha}$ $^{222}$Rn $\xrightarrow{\alpha}$ $^{218}$Po $\xrightarrow{\alpha}$ $^{214}$Pb $\xrightarrow{\beta}$ $^{214}$Bi $\xrightarrow{\beta}$ $^{214}$Po $\xrightarrow{\alpha}$ $^{210}$Pb $\xrightarrow{\beta}$ $^{210}$Bi $\xrightarrow{\beta}$ $^{210}$Po $\xrightarrow{\alpha}$ $^{206}$Pb (stable).

The half-lives of the chain members range from 164 µs ($^{214}$Po) to 245,500 years ($^{234}$U) to 4.5 billion years ($^{238}$U). In secular equilibrium, the activities of all the chain members are equal:

$$\lambda_P N_P = \lambda_D N_D = \lambda_{GD} N_{GD} = \ldots = A_{\text{chain}}.$$

This is a useful fact in practice: the activity of a uranium sample is also the activity of each of its decay products (in equilibrium), so the radiotoxicity of uranium ore is determined by the entire chain, not just by the uranium itself.

The thorium-232 chain (4n series) ends at $^{208}$Pb, and the uranium-235 chain (4n+1 series, now extinct because the parent half-life is short) ends at $^{207}$Pb. A fourth chain starts at $^{237}$Np (4n+1, but extinct because $^{237}$Np has $T_{1/2} = 2.14$ million years, much shorter than the age of the earth).

### Radioactive dating

The decay law applied to a parent–daughter system is the basis of radioactive dating. For a parent $P$ with decay constant $\lambda_P$ and a stable daughter $D$, the number of daughter atoms at time $t$ is

$$N_D(t) = N_D(0) + N_P(0) - N_P(t) = N_D(0) + N_P(0)\left(1 - e^{-\lambda_P t}\right).$$

If the initial daughter abundance $N_D(0)$ can be determined independently (from a stable isotope of the same element, or from the systematics of the source), the age can be computed from

$$t = \frac{1}{\lambda_P} \ln\left(\frac{N_P(0) - N_D(0)}{N_P(t) - N_D(0) + N_D(t)}\right).$$

In the simpler case where $N_D(0) = 0$ (the "no initial daughter" assumption),

$$t = \frac{1}{\lambda_P} \ln\left(\frac{N_P(0)}{N_P(t)}\right) = \frac{1}{\lambda_P} \ln\left(1 + \frac{N_D(t)}{N_P(t)}\right).$$

The most important dating systems are:

- **$^{14}$C dating** (radiocarbon dating): $T_{1/2} = 5730$ years. $^{14}$C is produced by cosmic-ray spallation in the upper atmosphere and incorporated into living organisms. After the organism dies, the $^{14}$C decays with no replenishment, and the age can be measured up to about 50,000 years. Calibration with tree rings and other archives extends the accuracy.
- **K–Ar dating**: $^{40}$K ($T_{1/2} = 1.25 \times 10^9$ years) decays to $^{40}$Ar (a stable noble gas) and $^{40}$Ca. The K–Ar clock is used for volcanic rocks from about 100,000 years to billions of years.
- **Rb–Sr dating**: $^{87}$Rb ($T_{1/2} = 49 \times 10^9$ years) decays to $^{87}$Sr. Used for very old rocks and meteorites.
- **U–Pb dating**: $^{238}$U decays to $^{206}$Pb and $^{235}$U to $^{207}$Pb. The two clocks provide a self-consistency check; the U–Pb system is the gold standard for dating the oldest rocks and the age of the earth.
- **Sm–Nd dating**: $^{147}$Sm decays to $^{143}$Nd with $T_{1/2} = 1.06 \times 10^{11}$ years. Used for very old rocks and meteorites.
- **Cosmogenic isotopes**: $^{10}$Be, $^{26}$Al, $^{36}$Cl produced by cosmic rays in surface rocks; used for surface-exposure dating from thousands to millions of years.

The accuracy of radioactive dating depends on the accuracy of the half-life and on the assumption that the system has remained closed (no gain or loss of parent or daughter except by decay). For old rocks, metamorphism can reset the clock by allowing daughter isotopes to escape; for young samples, contamination by atmospheric daughter isotopes can be an issue.

## Key Ideas

- **Decay law**: $N(t) = N_0 e^{-\lambda t}$; **half-life** $T_{1/2} = \ln 2 / \lambda$; **mean life** $\tau = 1/\lambda$.
- **Activity**: $A = \lambda N$, measured in becquerels or curies.
- **Secular equilibrium**: when $\lambda_P \ll \lambda_D$, the daughter population reaches $N_D = (\lambda_P/\lambda_D) N_P$ and decays with the parent.
- **Transient equilibrium**: when $\lambda_P < \lambda_D$ but comparable, the daughter population peaks and decays with the parent, but at a higher activity.
- **No equilibrium**: when $\lambda_P > \lambda_D$, the daughter population grows and decays with its own half-life.
- **Radioactive dating**: parent–daughter systems give absolute ages from the decay equation; $^{14}$C for archaeology, K–Ar and U–Pb for geology, cosmogenic isotopes for surface-exposure dating.

## Worked Examples

### Example 1 — Activity of a tritium sample

A sample contains $10^{15}$ atoms of tritium ($^3$H, $T_{1/2} = 12.3$ years). Compute the activity in becquerels and in millicuries.

**Solution.** The decay constant is

$$\lambda = \frac{\ln 2}{T_{1/2}} = \frac{0.693}{12.3 \times 3.15 \times 10^7\,\text{s}} = 1.79 \times 10^{-9}\,\text{s}^{-1}.$$

The activity is

$$A = \lambda N = 1.79 \times 10^{-9} \times 10^{15} = 1.79 \times 10^6\,\text{Bq} \approx 1.8\,\text{MBq}.$$

In millicuries, $A = 1.79 \times 10^6 / 3.7 \times 10^7 = 0.048\,\text{mCi} \approx 48\,\mu\text{Ci}$. The activity is small but easily detected with a liquid-scintillation counter.

### Example 2 — Secular equilibrium in the uranium series

A rock contains 1 ppm of $^{238}$U by mass. Estimate the activity of $^{226}$Ra in secular equilibrium, in Bq per gram of rock.

**Solution.** The number of $^{238}$U atoms per gram of rock is

$$N_{238} = \frac{10^{-6}}{238} \times 6.022 \times 10^{23} = 2.53 \times 10^{15}\,\text{atoms}.$$

The activity of $^{238}$U is

$$A_{238} = \lambda_{238} N_{238} = \frac{0.693}{4.5 \times 10^9 \times 3.15 \times 10^7} \times 2.53 \times 10^{15} = 1.24 \times 10^{-17} \times 2.53 \times 10^{15} \approx 31.4\,\text{Bq/g}.$$

In secular equilibrium, each daughter has the same activity, so $A_{226} = 31.4\,\text{Bq/g}$ as well. This is the basis of the natural background radiation from uranium-bearing rocks.

### Example 3 — Radiocarbon age of an artefact

An archaeological charcoal sample has a $^{14}$C/$^{12}$C ratio that is 25% of the modern atmospheric value. Estimate the age.

**Solution.** The decay law gives

$$\frac{N(t)}{N_0} = e^{-\lambda t} = 0.25,$$

$$t = \frac{\ln 4}{\lambda} = \frac{1.386}{1.79 \times 10^{-9} \times 3.15 \times 10^7 / \ln 2 \cdot \ln 2} = \frac{T_{1/2} \ln 4}{\ln 2} = 2 T_{1/2} = 11{,}460\,\text{years}.$$

This is the famous "two half-lives" example. Calibration with tree-ring data adjusts this raw age to about 11,400 calendar years before present.

## Common Misconceptions

- **"A radioactive sample decays linearly, losing a fixed amount each year."** No. Decay is exponential, not linear. The activity in the first half-life is the same as the activity in any other half-life, but the number of decays in a fixed time interval is proportional to the current population.
- **"The half-life is the time for all the nuclei to decay."** No. The half-life is the time for half the nuclei to decay. The decay is complete only in the limit of infinite time; the average lifetime is $\tau = 1.443 T_{1/2}$.
- **"A nucleus with a long half-life is more stable than one with a short half-life."** In a sense, but the half-life depends on the Q-value and the Coulomb barrier, not on a fundamental "stability" property. Some very long-lived nuclei are very close to being unstable; some very short-lived nuclei are far from being unstable in the sense of energy.
- **"Carbon dating is unreliable because the half-life has changed."** The half-life is a fundamental constant, measured in the laboratory; it has not changed measurably. Calibration with tree rings and other archives is required because atmospheric $^{14}$C has varied with time.
- **"Secular equilibrium means equal numbers of atoms."** No. Secular equilibrium means equal activities, not equal numbers. The daughter with the shorter half-life has fewer atoms but the same activity.

## Connections

- The exponential decay law is the same mathematical form as the discharge of a capacitor through a resistor, the cooling of a hot body by Newton's law, the absorption of light by Beer's law, and the elimination of a drug from the body. It is the most common time-dependence in all of physics.
- The decay chains of uranium, thorium, and actinium are responsible for the natural background radiation on earth; they are also the basis of the radioactive dating of rocks and meteorites, which established the age of the earth at about 4.54 billion years.
- The transuranium elements (neptunium, plutonium, americium, curium, etc.) are produced in nuclear reactors and have applications in nuclear weapons, power sources (RTGs), and smoke detectors ($^{241}$Am).
- Cosmogenic isotopes produced by cosmic-ray spallation in the atmosphere and in surface rocks are widely used in geology, archaeology, and planetary science; $^{10}$Be and $^{26}$Al in particular have revolutionised surface-exposure dating.
- The decay of $^{40}$K to $^{40}$Ar is a major source of the earth's internal heat; together with the decay of uranium and thorium, it accounts for about half of the earth's heat flux.

## Quick Check

1. State the radioactive decay law and the relation between the decay constant and the half-life.
2. Distinguish secular equilibrium from transient equilibrium. When is each applicable?
3. A sample has $T_{1/2} = 10$ days. What fraction of the original nuclei remain after 30 days?
4. A charcoal sample has a $^{14}$C/$^{12}$C ratio of 12.5% of modern. Estimate the age.
5. Explain why the activity of $^{226}$Ra equals the activity of $^{238}$U in a rock in secular equilibrium, even though $^{226}$Ra has a half-life of 1600 years and $^{238}$U has a half-life of 4.5 billion years.

## Takeaway

- The decay law $N(t) = N_0 e^{-\lambda t}$ is the foundation of all radioactive decay kinetics.
- Activity $A = \lambda N$ is the number of decays per unit time; measured in becquerels or curies.
- Decay chains reach secular equilibrium when the parent is much longer-lived than the daughter, and transient equilibrium when the half-lives are comparable.
- Radioactive dating uses the parent–daughter ratio to compute the age of a sample; the most important systems are $^{14}$C, K–Ar, Rb–Sr, U–Pb, and cosmogenic isotopes.
- The exponential decay law is the most common time-dependence in physics, appearing in many other contexts from capacitor discharge to drug elimination.
