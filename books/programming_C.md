# Problem Solving Through Programming in C - Course Summary

This document serves as a high-density summary of Units 1 through 4 of the "Problem Solving Through Programming" course. It covers computer fundamentals, C language basics, control flow, arrays, strings, functions, and pointers.

---

## Unit 1: Introduction to Computers and C Language

### 1.1 Computer Systems & Problem Solving
* **Definition:** An electronic device that reads input, processes data based on instructions, and displays output.
* **Components:**
    * **Hardware:** Physical components (CPU, Memory, I/O devices).
    * **Software:** Programs and data.
    * **Users:** People interacting with the system.
* **The Microprocessor (CPU):**
    * **ALU (Arithmetic Logic Unit):** Performs calculations and logic operations.
    * **CU (Control Unit):** Manages data flow and instruction execution.
    * **Registers:** High-speed, temporary storage within the CPU.
* **Memory:**
    * **Primary (Volatile):** RAM. Directly accessible by CPU, fast, limited capacity.
    * **Secondary (Non-volatile):** HDD/SSD. Slower, high capacity, used for mass storage.

### 1.2 Program Development Steps
1.  **Define/Analyze Problem:** Identify inputs, outputs, and processing requirements.
2.  **Design (Algorithm/Flowchart):** Plan the logical solution.
3.  **Coding:** Translate logic into a programming language (C).
4.  **Compilation:** Convert source code to machine code.
5.  **Testing & Debugging:** Identify and fix errors (Syntax, Logic, Runtime).
6.  **Maintenance:** Updates and enhancements.

### 1.3 Algorithms & Flowcharts
* **Algorithm:** A step-by-step, finite, unambiguous procedure to solve a problem.
* **Flowchart:** Graphical representation of an algorithm.
    * *Oval:* Start/End
    * *Parallelogram:* Input/Output
    * *Rectangle:* Process
    * *Diamond:* Decision
    * *Arrows:* Flow direction

### 1.4 C Language Basics
* **History:** Developed by **Dennis Ritchie** at Bell Labs (1972) for UNIX. Evolved from BCPL and B.
* **Characteristics:** Structured, portable, efficient, case-sensitive, rich set of operators.
* **Compilation Model:** Source Code -> Preprocessor -> Compiler -> Assembler -> Linker -> Executable.

### 1.5 C Tokens & Data Types
* **Tokens:** Smallest individual units (Keywords, Identifiers, Constants, Strings, Operators, Special Characters).
* **Data Types & Sizes (Typical):**

| Type | Keyword | Size (Bytes) | Format Specifier | Range (Signed) |
| :--- | :--- | :--- | :--- | :--- |
| Integer | `int` | 2 or 4 | `%d` | -32,768 to 32,767 (2 bytes) |
| Floating Point | `float` | 4 | `%f` | 3.4E-38 to 3.4E+38 |
| Double | `double` | 8 | `%lf` | 1.7E-308 to 1.7E+308 |
| Character | `char` | 1 | `%c` | -128 to 127 |

* **Type Casting:**
    * **Implicit:** Automatic conversion by compiler (lower to higher precision).
    * **Explicit:** User-defined conversion. Syntax: `(type) expression`.

### 1.6 Input/Output Operations
* **Formatted I/O:** `scanf()` (Input), `printf()` (Output).
    * *Note:* `scanf` requires the address of variable (`&var`).
* **Unformatted I/O:**
    * Input: `getchar()`, `getch()`, `getche()`, `gets()` (for strings).
    * Output: `putchar()`, `putch()`, `puts()` (for strings).

### 1.7 Operators
* **Arithmetic:** `+`, `-`, `*`, `/`, `%` (Modulus - int only).
* **Relational:** `<`, `<=`, `>`, `>=`, `==`, `!=`.
* **Logical:** `&&` (AND), `||` (OR), `!` (NOT).
* **Assignment:** `=`, `+=`, `-=`, `*=`, etc.
* **Increment/Decrement:** `++` (Pre/Post), `--` (Pre/Post).
* **Conditional (Ternary):** `condition ? true_val : false_val;`
* **Bitwise:** `&`, `|`, `^` (XOR), `~` (One's complement), `<<`, `>>`.
* **Special:** `sizeof()`, `,` (comma).

---

## Unit 2: Decision Making and Looping

### 2.1 Branching Statements
Used to change the execution order based on conditions.

* **Simple if:** Executes block if condition is true.
* **if...else:** Executes *true block* if condition is true, otherwise *false block*.
* **Nested if:** An `if` statement inside another `if`.
* **else...if Ladder:** Used for checking multiple conditions sequentially.
* **Switch Statement:** Multi-way branching based on the value of an expression.
    * *Syntax:*
        ```c
        switch(expression) {
            case value1: statement; break;
            case value2: statement; break;
            default: statement;
        }
        ```
    * *Note:* `break` prevents fall-through to subsequent cases.

### 2.2 Looping Statements
Used to repeat a block of code.

| Loop Type | Classification | Syntax | Description |
| :--- | :--- | :--- | :--- |
| **while** | Entry-Controlled | `while(cond) { ... }` | Condition checked before execution. May run 0 times. |
| **for** | Entry-Controlled | `for(init; cond; up) { ... }` | Ideal when iteration count is known. |
| **do...while** | Exit-Controlled | `do { ... } while(cond);` | Condition checked after execution. Runs at least once. |

### 2.3 Jump Statements
* **break:** Exits the immediate loop or switch statement.
* **continue:** Skips the rest of the current iteration and jumps to the loop update/condition.
* **goto:** Unconditional jump to a labeled statement (use sparingly).
* **return:** Exits a function and optionally returns a value.

---

## Unit 3: Arrays and Strings

### 3.1 Arrays
A collection of fixed-size, sequenced elements of the same data type stored in contiguous memory locations.

* **One-Dimensional Array:**
    * *Declaration:* `int arr[5];`
    * *Initialization:* `int arr[5] = {1, 2, 3, 4, 5};`
    * *Access:* `arr[index]` (Index starts at 0).
* **Two-Dimensional Array:**
    * *Declaration:* `int matrix[row][col];`
    * *Initialization:* `int mat[2][2] = {{1, 2}, {3, 4}};`
    * *Usage:* Matrix operations, tabular data.

### 3.2 Searching Algorithms
* **Linear Search:**
    * *Method:* Traverse array sequentially from start to end comparing key.
    * *Complexity:* O(n).
    * *Requirement:* Data can be unsorted.
* **Binary Search:**
    * *Method:* Divide and conquer. Check middle element; if key < mid, search left; if key > mid, search right.
    * *Complexity:* O(log n).
    * *Requirement:* **Data must be sorted.**

### 3.3 Sorting Algorithms
* **Selection Sort:**
    * Repeatedly finds the minimum element from the unsorted part and swaps it with the first element of the unsorted part.
* **Bubble Sort:**
    * Repeatedly swaps adjacent elements if they are in the wrong order. "Bubbles" the largest element to the end in each pass.

---

## Unit 4: Pointers and Functions

### 4.1 Pointers
A derived data type that stores the **memory address** of another variable.

* **Syntax:** `int *ptr;`
* **Operators:**
    * `&` (Address of): Returns the memory address of a variable. `ptr = &var;`
    * `*` (Dereference): Accesses the value stored at the address. `val = *ptr;`
* **Usage:** Dynamic memory allocation, call by reference, accessing arrays.

### 4.2 Functions
Self-contained block of code performing a specific task.

* **Components:**
    * **Declaration (Prototype):** `return_type func_name(params);`
    * **Definition:** The actual code block.
    * **Call:** Invoking the function. `func_name(args);`
* **Parameter Passing:**
    1.  **Call by Value:** Copy of data passed. Changes in function **do not** affect actual arguments.
    2.  **Call by Reference:** Address of data passed (using pointers). Changes **do** affect actual arguments.

### 4.3 Recursion
A function calling itself.
* **Requirements:**
    1.  **Base Case:** Condition to stop recursion.
    2.  **Recursive Case:** Function calls itself with modified arguments moving towards the base case.
* *Example (Factorial):* `if (n==1) return 1; else return n * fact(n-1);`

### 4.4 Storage Classes
Determines scope, visibility, and lifetime of variables.

| Class | Keyword | Storage | Initial Value | Scope | Lifetime |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Automatic** | `auto` | Stack | Garbage | Local | Within block |
| **External** | `extern` | Data Segment | Zero | Global | Program Runtime |
| **Static** | `static` | Data Segment | Zero | Local | Program Runtime (Persists value) |
| **Register** | `register` | CPU Register | Garbage | Local | Within block (Fast access) |