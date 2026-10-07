***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-3
semesterName: Semester 3
subjectId: physics
subjectName: Physics
courseId: analog-and-digital-electronics
courseName: Analog and Digital Electronics
moduleId: analog-and-digital-electronics-module-3
moduleName: Digital Logic and Data Conversion
lessonId: analog-and-digital-electronics-m3-l1
lessonName: Number Systems, Boolean Algebra and Combinational Logic
lessonNumber: 7
moduleNumber: 3
semesterNumber: 3
difficulty: foundation
estimatedStudyMinutes: 50
releaseOrder: 7
prerequisites:
  - analog-and-digital-electronics-m2-l2
  - basic-electronics-m2-l2
learningObjectives:
  - Convert between binary, hexadecimal and decimal and represent signed integers in two's complement.
  - Apply Boolean identities, De Morgan's theorems and Karnaugh maps to simplify logic functions, and show that NAND alone is universal.
  - Design and verify half and full adders, multiplexers and decoders from their truth tables.
concepts:
  - Binary, hexadecimal and two's complement
  - Logic gates and truth tables
  - De Morgan's theorems
  - Universal gates
  - Karnaugh map
  - Full adder and ripple-carry adder
  - Multiplexer and decoder
tags:
  - physics
  - analog-and-digital-electronics
  - boolean-algebra
  - combinational-logic
sourceType: authored-courseware
status: in-review
assessmentHints:
  - problem-solving
  - derivation
  - conceptual
  - computational
***

# Number Systems, Boolean Algebra and Combinational Logic

## Overview

Module 2 ended with a comparator whose output is one of two voltage levels. Digital electronics takes that restriction seriously: every signal is either high (logic 1) or low (logic 0), and intermediate voltages are avoided. In exchange we gain immunity to noise, exact repeatability and a mathematics, Boolean algebra, that lets circuits be designed on paper and verified completely. This lesson covers number systems, the logic gates and their algebra, the Karnaugh map for simplifying functions, and the standard **combinational** building blocks, whose outputs depend only on the present inputs: the adder, multiplexer and decoder. The next lesson adds memory, and the last connects the digital world to the analogue one.

## Learning Path

- **What you should already know**: the transistor as a switch (Basic Electronics m2-l2); the comparator and Schmitt trigger as sources of two-level signals (Lesson m2-l2).
- **What this lesson adds**: binary, hexadecimal and two's complement arithmetic; the basic gates and Boolean identities; Karnaugh-map simplification; the half adder, full adder, multiplexer and decoder.
- **What later lessons this will unlock**: the flip-flops, counters and shift registers of Lesson m3-l2 are gates with feedback; the ADC output codes and the digital thermometer of Lesson m3-l3 use binary codes, adders and decoders.

## Core Explanation

### Number systems

A positive integer in base $b$ is $N = \sum_k d_k b^k$ with digits $0 \le d_k < b$. In **binary** ($b = 2$) each digit is a **bit** that can be held by a single switch, so $1011_2 = 8 + 0 + 2 + 1 = 11$. An $n$-bit word represents $2^n$ values, $0$ to $2^n - 1$. **Hexadecimal** ($b = 16$, digits $0$-$9$ and A-F for 10-15) is a compact notation, since four bits make one hex digit: $\text{B7}_{16} = 11\times16 + 7 = 183 = 1011\,0111_2$.

Signed integers use **two's complement**: the leading bit has weight $-2^{n-1}$ instead of $+2^{n-1}$, so an $n$-bit word covers $-2^{n-1}$ to $2^{n-1} - 1$. To negate a number, invert every bit and add 1. The advantage is that the same adder handles addition and subtraction: $A - B$ is $A + (\bar{B} + 1)$, and the carry out of the top bit is simply discarded.

### Gates and truth tables

A **logic gate** realises a Boolean function of two-valued variables. The basic gates are summarised below, with $+$ meaning OR and juxtaposition meaning AND:

| $A$ | $B$ | AND $AB$ | OR $A+B$ | NAND | NOR | XOR $A\oplus B$ | XNOR |
|---|---|---|---|---|---|---|---|
| 0 | 0 | 0 | 0 | 1 | 1 | 0 | 1 |
| 0 | 1 | 0 | 1 | 1 | 0 | 1 | 0 |
| 1 | 0 | 0 | 1 | 1 | 0 | 1 | 0 |
| 1 | 1 | 1 | 1 | 0 | 0 | 0 | 1 |

The NOT gate gives $\bar{A}$. Real gates define logic levels by voltage ranges. For a TTL gate, an input below $V_{IL} = 0.8$ V is read as 0 and above $V_{IH} = 2.0$ V as 1, while a driving gate guarantees $V_{OL} \le 0.4$ V and $V_{OH} \ge 2.4$ V. The **noise margin** is $0.4$ V on both sides ($V_{IL} - V_{OL}$ and $V_{OH} - V_{IH}$): each stage restores clean levels, the essential advantage over analogue transmission, where noise accumulates.

### Boolean algebra

Boolean algebra obeys identities that can be checked exhaustively on truth tables: $A + 0 = A$, $A\cdot 1 = A$, $A + \bar{A} = 1$, $A\bar{A} = 0$, $A + AB = A$ (absorption), and the distributive law $A + BC = (A+B)(A+C)$. The key results are **De Morgan's theorems**:

$$\overline{A + B} = \bar{A}\,\bar{B}, \qquad \overline{AB} = \bar{A} + \bar{B}.$$

A complete check of the first needs only four rows: for $A = B = 0$ both sides are 1; in the other three rows both are 0. De Morgan's theorems say that complementing every input and the output of an AND gives an OR,, so any circuit can be drawn in several equivalent forms.

NAND is **universal**: $\bar{A} = \overline{A\cdot A}$; $AB = \overline{\overline{AB}}$ (a NAND followed by a NAND wired as NOT); and by De Morgan $A + B = \overline{\bar{A}\,\bar{B}}$, a NAND whose inputs are inverted. Any function can therefore be built from one gate type; NOR is equally universal. Every function can be written as a **sum of products** (SOP): an OR of AND terms, one per input combination where the function is 1.

### Karnaugh maps

The **Karnaugh map** makes simplification visual. The truth table is laid out in a grid whose rows and columns are labelled in **Gray code** (00, 01, 11, 10), so that neighbouring cells, including those across the edges, differ in exactly one variable. Two adjacent 1s can be merged and the differing variable eliminated, since $XA + X\bar{A} = X$. Rules: circle groups of 1s in sizes 1, 2, 4, 8 or 16 (powers of two), as large as possible; groups may wrap around the edges; every 1 must be covered; each group gives one product term containing only the variables that are constant across the group.

### Adders

The **half adder** adds two bits: the sum is $S = A \oplus B$ and the carry is $C = AB$. Adding multi-bit numbers needs the carry from the previous bit, so the **full adder** has three inputs $A$, $B$, $C_{in}$:

| $A$ | $B$ | $C_{in}$ | $S$ | $C_{out}$ |
|---|---|---|---|---|
| 0 | 0 | 0 | 0 | 0 |
| 0 | 0 | 1 | 1 | 0 |
| 0 | 1 | 0 | 1 | 0 |
| 0 | 1 | 1 | 0 | 1 |
| 1 | 0 | 0 | 1 | 0 |
| 1 | 0 | 1 | 0 | 1 |
| 1 | 1 | 0 | 0 | 1 |
| 1 | 1 | 1 | 1 | 1 |

The sum is 1 when an odd number of inputs are 1, so $S = A \oplus B \oplus C_{in}$. The carry is 1 when at least two inputs are 1, which simplifies to $C_{out} = AB + C_{in}(A \oplus B)$. Chaining $n$ full adders, each carry feeding the next, makes an $n$-bit **ripple-carry adder** whose worst-case delay is $n$ carry delays (look-ahead adders trade gates for speed). The code simulates the equations and checks them arithmetically; its output reproduces the table above.

```python
for A in (0, 1):
    for B in (0, 1):
        for Cin in (0, 1):
            S = A ^ B ^ Cin
            Cout = (A & B) | (Cin & (A ^ B))
            assert 2*Cout + S == A + B + Cin      # arithmetic check
            print(A, B, Cin, "|", S, Cout)
```

### Multiplexers and decoders

A **multiplexer** (mux) selects one of $2^k$ data inputs using $k$ select lines. For a 4:1 mux with selects $S_1S_0$, $Y = \bar{S}_1\bar{S}_0 I_0 + \bar{S}_1 S_0 I_1 + S_1\bar{S}_0 I_2 + S_1 S_0 I_3$. An $8{:}1$ mux with its data inputs tied to 0 or 1 realises any three-variable function, the truth table written directly into the wiring. A **decoder** does the reverse: $k$ inputs activate one of $2^k$ outputs. For a 2:4 decoder, output $Y_j$ is 1 only when the input number equals $j$, so $Y_0 = \bar{A}_1\bar{A}_0$, $Y_1 = \bar{A}_1A_0$, $Y_2 = A_1\bar{A}_0$, $Y_3 = A_1A_0$. A decoder with an OR gate generates any SOP function, since each output is a minterm.

## Key Ideas

- **Binary and hex**: an $n$-bit word has $2^n$ values; one hex digit is four bits.
- **Two's complement**: negate by inverting and adding 1; one adder does addition and subtraction.
- **De Morgan**: $\overline{A+B} = \bar{A}\bar{B}$ and $\overline{AB} = \bar{A}+\bar{B}$; NAND (or NOR) alone is universal.
- **Karnaugh map**: Gray-ordered grid; groups of $2^k$ ones eliminate $k$ variables.
- **Full adder**: $S = A\oplus B\oplus C_{in}$, $C_{out} = AB + C_{in}(A\oplus B)$; ripple delay grows with the number of bits.
- **Mux and decoder**: data selection and one-of-$2^k$ selection, both implementing arbitrary truth tables.

## Worked Examples

### Example 1 — Two's complement subtraction

Compute $100 - 37$ in 8-bit two's complement and convert $183$ to binary.

**Solution.** In binary $100 = 0110\,0100$ and $37 = 0010\,0101$. Inverting $37$ gives $1101\,1010$; adding 1 gives $1101\,1011$, which represents $-37$ ($219 - 256$). Adding,

$$0110\,0100 + 1101\,1011 = 1\,0011\,1111.$$

The carry out of bit 7 is discarded, leaving $0011\,1111 = 32+16+8+4+2+1 = 63 = 100 - 37$. For the second part, $183 = 128 + 32 + 16 + 4 + 2 + 1 = 1011\,0111_2 = \text{B7}_{16}$.

### Example 2 — Karnaugh-map simplification

Simplify $f(A,B,C,D) = \sum m(0,2,5,7,8,10,13,15)$, where the minterm index is $8A + 4B + 2C + D$.

**Solution.** The map, with rows $AB$ and columns $CD$ in Gray order, is

| $AB \backslash CD$ | 00 | 01 | 11 | 10 |
|---|---|---|---|---|
| 00 | 1 | 0 | 0 | 1 |
| 01 | 0 | 1 | 1 | 0 |
| 11 | 0 | 1 | 1 | 0 |
| 10 | 1 | 0 | 0 | 1 |

The four corner cells (minterms 0, 2, 8, 10) wrap around the edges to form one group of four in which $B = 0$ and $D = 0$ are constant, giving $\bar{B}\bar{D}$. The central block (5, 7, 13, 15) has $B = 1$ and $D = 1$, giving $BD$. Hence

$$f = \bar{B}\bar{D} + BD = \overline{B \oplus D},$$

a single XNOR gate replacing an eight-term expression.

### Example 3 — A 4-bit ripple-carry addition

Add $0110$ ($6$) and $0111$ ($7$) with four full adders, and find the delay if a carry takes 10 ns.

**Solution.** Work from the least significant bit with $C_0 = 0$:

| bit | $A$ | $B$ | $C_{in}$ | $S$ | $C_{out}$ |
|---|---|---|---|---|---|
| 0 | 0 | 1 | 0 | 1 | 0 |
| 1 | 1 | 1 | 0 | 0 | 1 |
| 2 | 1 | 1 | 1 | 1 | 1 |
| 3 | 0 | 0 | 1 | 1 | 0 |

The sum is $S_3S_2S_1S_0 = 1101 = 13 = 6 + 7$, with no carry out. In the worst case the carry must propagate through all four stages, so the result is valid after about $4\times10 = 40$ ns; a 32-bit ripple adder would need 320 ns, which is why fast processors use look-ahead logic.

## Common Misconceptions

- **"Hexadecimal is a different kind of number."** It is shorthand for binary, grouped in fours.
- **"Two's complement means a sign bit plus a magnitude."** The leading bit has negative weight $-2^{n-1}$; sign-magnitude is a different scheme with two zeros.
- **"Boolean OR is the same as addition."** In algebra $1 + 1 = 2$, but $1 + 1 = 1$ in Boolean algebra; the XOR gate and the adder's sum bit are what perform arithmetic addition.
- **"A K-map group may be any size."** Groups must be rectangular powers of two (including wrap-around).
- **"Digital signals are exactly 0 V or 5 V."** They are ranges with noise margins, and a signal in the forbidden zone between $V_{IL}$ and $V_{IH}$ is undefined.

## Connections

- Gray code, the K-map ordering, is used in shaft encoders because only one bit changes between positions, so a misread cannot give a large error.
- Boolean algebra is the algebra of subsets met in Introductory Algebra and Real Analysis, with the same De Morgan laws.
- Floating-point rounding in Numerical Methods arises because fractions such as 0.1 have no finite binary expansion.
- Telescope drives use decoders and multiplexers to address sensors and Gray-coded encoders to read positions.
- The adder's speed is set by a path through the logic, a limit that returns in the counter clock rates of Lesson m3-l2.

## Quick Check

1. Convert $0\text{x}3\text{C}$ to binary and decimal, and write $-5$ in 8-bit two's complement.
2. Prove $\overline{AB} = \bar{A} + \bar{B}$ with a truth table.
3. Show how to build a two-input OR gate from NAND gates only.
4. Simplify $f(A,B,C) = \sum m(1,3,5,7)$ with a Karnaugh map.
5. Write the truth table for a 2:4 decoder with an enable input, and say which output is active for input $10$.

## Takeaway

- Binary words represent integers; two's complement allows one adder to add and subtract.
- Gates implement Boolean functions; De Morgan's theorems and the universality of NAND allow any circuit to be rebuilt from one gate type.
- Karnaugh maps simplify a function by grouping adjacent ones into power-of-two blocks.
- The full adder has $S = A\oplus B\oplus C_{in}$ and $C_{out} = AB + C_{in}(A\oplus B)$; chaining gives a ripple-carry adder whose delay grows with word length.
- Multiplexers and decoders select inputs and outputs and can implement any truth table.
