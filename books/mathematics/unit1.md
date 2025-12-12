# Unit 1: Linear Algebra, Vectors & Geometry
**Source**: Higher Engineering Mathematics by B.S. Grewal
**Scope**: Matrices, System of Equations, Eigenvalues, Vector Algebra, Solid Geometry

---

## 1. Matrices and Linear Systems

### 1.1 Rank of a Matrix
* **Definition**: The order of the largest non-vanishing minor of a matrix $A$. Denoted as $\rho(A)$.
* **Properties**:
    * $\rho(A) \leq \min(m, n)$ for an $m \times n$ matrix.
    * $\rho(A) = \rho(A^T)$.
    * Elementary transformations do not alter rank.
* **Echelon Form**:
    * Upper triangular structure.
    * Rank = Number of non-zero rows.
* **Normal Form (Canonical Form)**:
    * Reduced via row/column operations to $\begin{bmatrix} I_r & 0 \\ 0 & 0 \end{bmatrix}$.
    * Here, $r = \rho(A)$.

### 1.2 System of Linear Equations ($AX = B$)
* **Rouché-Capelli Theorem**:
    * Let $A$ be the coefficient matrix and $[A:B]$ be the augmented matrix.
    * **Inconsistent (No Solution)**: $\rho(A) \neq \rho(A:B)$.
    * **Consistent**: $\rho(A) = \rho(A:B) = r$.
        * **Unique Solution**: $r = n$ (number of unknowns).
        * **Infinite Solutions**: $r < n$ (System has $n-r$ linearly independent solutions).

### 1.3 Homogeneous Systems ($AX = 0$)
* Always consistent (trivial solution $X=0$ exists).
* **Non-trivial Solution**: Exists only if $\rho(A) < n$ (number of unknowns).
    * For a square matrix ($n \times n$), non-trivial solution exists if $|A| = 0$.

### 1.4 Linear Dependence
* Vectors $X_1, X_2, \dots, X_n$ are **Linearly Dependent** if scalars $c_1, c_2, \dots, c_n$ (not all zero) exist such that $c_1X_1 + \dots + c_nX_n = 0$.
* If the determinant of the matrix formed by vectors is zero, they are dependent.

---

## 2. Eigenvalues and Eigenvectors

### 2.1 Definitions
* **Characteristic Equation**: $|A - \lambda I| = 0$.
* **Eigenvalues ($\lambda$)**: Roots of the characteristic equation.
* **Eigenvectors ($X$)**: Non-zero solutions to $(A - \lambda I)X = 0$.

### 2.2 Properties of Eigenvalues
1.  Sum of Eigenvalues = **Trace(A)** (Sum of main diagonal elements).
2.  Product of Eigenvalues = **Determinant ($|A|$)**.
3.  If $A$ has eigenvalues $\lambda_1, \lambda_2$, then:
    * $A^k$ has eigenvalues $\lambda_1^k, \lambda_2^k$.
    * $A^{-1}$ has eigenvalues $1/\lambda_1, 1/\lambda_2$.
    * $kA$ has eigenvalues $k\lambda_1, k\lambda_2$.
4.  Eigenvalues of a real symmetric matrix are always **real**.
5.  Eigenvectors corresponding to distinct eigenvalues are **linearly independent**.

### 2.3 Cayley-Hamilton Theorem
* **Statement**: Every square matrix satisfies its own characteristic equation.
* If $c_0 \lambda^n + c_1 \lambda^{n-1} + \dots + c_n = 0$, then $c_0 A^n + c_1 A^{n-1} + \dots + c_n I = 0$.
* **Applications**:
    * Finding Inverse: $A^{-1} = -\frac{1}{c_n} (c_0 A^{n-1} + \dots + c_{n-1}I)$.
    * Finding higher powers of $A$.

### 2.4 Diagonalization
* A square matrix $A$ is diagonalizable if it has $n$ linearly independent eigenvectors.
* **Modal Matrix ($P$)**: Matrix formed by eigenvectors as columns.
* **Transformation**: $D = P^{-1}AP$, where $D$ is a diagonal matrix containing eigenvalues.

---

## 3. Quadratic Forms

### 3.1 General Form
* $Q = X^T A X = \sum_{i=1}^n \sum_{j=1}^n a_{ij} x_i x_j$.
* Matrix $A$ is always symmetric for quadratic forms.

### 3.2 Canonical Form (Sum of Squares)
* Transformation $X = PY$ converts $Q$ to Canonical form: $\lambda_1 y_1^2 + \lambda_2 y_2^2 + \dots + \lambda_n y_n^2$.
* **Index ($s$)**: Number of positive terms in canonical form.
* **Rank ($r$)**: Total number of non-zero terms (rank of $A$).
* **Signature**: Difference between positive and negative terms ($2s - r$).

### 3.3 Nature of Quadratic Forms (Definiteness)
Based on eigenvalues ($\lambda_i$) of $A$:
1.  **Positive Definite**: All $\lambda_i > 0$.
2.  **Negative Definite**: All $\lambda_i < 0$.
3.  **Positive Semidefinite**: All $\lambda_i \geq 0$ (at least one is 0).
4.  **Negative Semidefinite**: All $\lambda_i \leq 0$ (at least one is 0).
5.  **Indefinite**: Some $\lambda_i > 0$ and some $\lambda_i < 0$.

---

## 4. Vector Algebra & Geometry (Unit 1 Supplement)

### 4.1 Vector Operations
* **Scalar Product ($A \cdot B$)**: $|A||B|\cos\theta$. Condition for orthogonality: $A \cdot B = 0$.
* **Vector Product ($A \times B$)**: $|A||B|\sin\theta \hat{n}$. Represents area of parallelogram.
* **Scalar Triple Product ($[ABC]$)**: $A \cdot (B \times C)$.
    * Represents volume of parallelepiped.
    * Condition for **Coplanarity**: $[ABC] = 0$.
* **Vector Triple Product**: $A \times (B \times C) = (A \cdot C)B - (A \cdot B)C$.

### 4.2 Solid Geometry (Lines & Planes)
* **Direction Cosines ($l, m, n$)**: $l^2 + m^2 + n^2 = 1$.
* **Equation of a Line**:
    * Through point $(x_1, y_1, z_1)$ with direction ratios $a, b, c$:
        $$\frac{x-x_1}{a} = \frac{y-y_1}{b} = \frac{z-z_1}{c}$$
* **Equation of a Plane**:
    * General form: $ax + by + cz + d = 0$.
    * Normal form: $lx + my + nz = p$ (where $p$ is perpendicular distance from origin).
    * Angle between planes defined by normals $N_1$ and $N_2$: $\cos \theta = \frac{N_1 \cdot N_2}{|N_1||N_2|}$.

---

## 5. Numerical & Direct Methods (Solving Linear Systems)

### 5.1 Gauss Elimination Method (Direct)
* **Objective**: Convert Augmented Matrix $[A:B]$ to **Upper Triangular Matrix** $[U:B']$.
* **Process**:
    1.  **Forward Elimination**: Use elementary row operations ($R_i \to R_i - kR_j$) to make all elements below the main diagonal zero.
    2.  **Back Substitution**: Solve for unknowns starting from the last equation ($z \to y \to x$).
* **Pivoting**: If a diagonal element (pivot) is zero or very small, swap rows to place the largest available element on the diagonal to avoid division by zero/instability.

### 5.2 Gauss-Jordan Method
* **Objective**: Convert $[A:B]$ to **Diagonal/Identity Matrix** $[I:X]$.
* **Process**:
    * Perform row operations to make *all* non-diagonal elements zero (both above and below the diagonal).
* **Result**: The final column directly gives the solution vector $X$.
* **For Inverse ($A^{-1}$)**: Apply Gauss-Jordan to $[A:I]$. Result transforms to $[I:A^{-1}]$.

### 5.3 LU Decomposition (Method of Triangularization)
* **Concept**: Factorize non-singular matrix $A$ into Lower ($L$) and Upper ($U$) triangular matrices such that $A = LU$.
* $L$ has $1$s on the diagonal (Doolittle’s Method) OR $U$ has $1$s (Crout’s Method).
* **Solving $AX=B$**:
    1.  Write $LUX = B$. Let $UX = Y$.
    2.  Solve $LY = B$ for $Y$ (Forward substitution).
    3.  Solve $UX = Y$ for $X$ (Back substitution).
* **Utility**: Highly efficient for solving systems with same $A$ but different $B$ vectors.

---

# 6. Theory of Complex Matrices

### 6.1 Conjugate and Tranjugate
* **Conjugate Matrix ($\bar{A}$)**: Replace every element $a_{ij}$ with its complex conjugate $\bar{a}_{ij}$.
* **Tranjugate ($A^\theta$ or $A^*$):** Transpose of the conjugate. $A^\theta = (\bar{A})^T$.

### 6.2 Special Complex Matrices
* **Hermitian Matrix**:
    * **Definition**: $A^\theta = A$ (i.e., $a_{ij} = \bar{a}_{ji}$).
    * **Diagonal Elements**: Must be **Real**.
    * **Eigenvalues**: Always **Real**.
* **Skew-Hermitian Matrix**:
    * **Definition**: $A^\theta = -A$ (i.e., $a_{ij} = -\bar{a}_{ji}$).
    * **Diagonal Elements**: Must be **0** or **Purely Imaginary**.
    * **Eigenvalues**: **0** or **Purely Imaginary**.
* **Unitary Matrix**:
    * **Definition**: $A^\theta A = I$ (implies $A^\theta = A^{-1}$).
    * **Properties**: Determinant has modulus 1 ($|\det A| = 1$).
    * **Eigenvalues**: Have absolute value (modulus) of **1**.

### 6.3 Orthogonal Matrix (Real Space)
* **Definition**: $A^T A = I$ (Real analogue of Unitary).
* **Property**: Columns form an orthonormal set.
* **Determinant**: $\pm 1$.