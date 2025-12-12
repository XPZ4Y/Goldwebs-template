# Physics and Quantum Computing Notes

## Unit I: Modern Physics & Quantum Mechanics

### Matter Waves (De Broglie Hypothesis)
* **Dual Nature:** Light exhibits wave nature (interference, diffraction) and particle nature (photoelectric, Compton effect). Matter (electrons, neutrons) exhibits similar duality.
* **De Broglie Wavelength ($\lambda$):** $\lambda = h/p = h/mv$.
    * Links momentum ($p$) to wavelength ($\lambda$).
    * For accelerated electron ($V$): $\lambda = h / \sqrt{2meV}$.
* **Significance:** Macroscopic bodies have negligible $\lambda$ (undetectable). Subatomic particles have measurable $\lambda$ (diffraction observable).

### Wave Properties
* **Phase Velocity ($v_p$):** Velocity of a specific phase point of a single wave. $v_p = \omega / k$.
* **Group Velocity ($v_g$):** Velocity of the envelope of a wave packet (superposition of waves with varying $k$). $v_g = d\omega / dk$.
    * Matter waves represent a particle located within the packet; thus particle velocity equals group velocity ($v_{particle} = v_g$).
* **Wave Function ($\Psi$):** Mathematical description of the quantum state.
    * **Physical Significance:** $\Psi$ has no direct physical meaning. $|\Psi|^2$ is the **probability density** (probability of finding particle per unit volume).
    * **Conditions:** Must be single-valued, finite, continuous, and normalizable ($\int |\Psi|^2 dV = 1$).

### Heisenberg’s Uncertainty Principle
* **Statement:** Impossible to determine conjugate variables (e.g., position $x$ and momentum $p$) simultaneously with infinite precision.
* **Formula:** $\Delta x \cdot \Delta p \ge \hbar / 2$ (also $\Delta E \cdot \Delta t \ge \hbar / 2$).
* **Consequence:** Electrons cannot exist inside the nucleus (confinement to $10^{-14}$ m implies kinetic energy > nuclear binding energy).

### Schrödinger’s Wave Equation
* **Time-Dependent:** Describes evolution of $\Psi$ over time. $i\hbar \frac{\partial \Psi}{\partial t} = \hat{H}\Psi$.
* **Time-Independent:** Used for stationary states (energy $E$ is constant). $\nabla^2 \psi + \frac{2m}{\hbar^2}(E - V)\psi = 0$.

### Application: Particle in a 1D Box (Infinite Potential Well)
* **Setup:** Particle mass $m$ trapped in region $0 < x < L$. Potential $V=0$ inside, $V=\infty$ outside.
* **Boundary Conditions:** $\Psi(0) = 0$ and $\Psi(L) = 0$.
* **Eigenfunctions:** $\psi_n(x) = \sqrt{\frac{2}{L}} \sin(\frac{n\pi x}{L})$.
* **Eigenvalues (Energy Levels):** $E_n = \frac{n^2 h^2}{8mL^2}$ where $n = 1, 2, 3...$
* **Key Insight:** Energy is quantized (discrete). Zero-point energy ($n=1$) is non-zero, consistent with Uncertainty Principle.

---

## Unit III: Lasers & Optical Fibers

### Lasers (Light Amplification by Stimulated Emission of Radiation)
**Mechanism:**
1.  **Absorption:** Atom absorbs photon, moves $E_1 \to E_2$. Rate $\propto$ Density($E_1$) & Energy density($U_\nu$).
2.  **Spontaneous Emission:** Random decay $E_2 \to E_1$, emitting photon. Incoherent.
3.  **Stimulated Emission:** Incident photon triggers decay $E_2 \to E_1$, emitting identical photon (same phase, frequency, direction). Coherent.

**Einstein Coefficients:** $A_{21}$ (Spontaneous), $B_{12}$ (Absorption), $B_{21}$ (Stimulated). At equilibrium, $Rate_{abs} = Rate_{spon} + Rate_{stim}$. Laser action requires dominated stimulated emission.

**Requisites for Lasing:**
* **Active Medium:** Material allowing population inversion.
* **Population Inversion:** More atoms in excited state than ground state ($N_2 > N_1$). Achieved via metastable states (long lifetime $\sim 10^{-3}s$).
* **Pumping:** Energy supply to achieve inversion (Optical, Electrical, Chemical).
* **Resonator Cavity:** Mirrors (one partial) to amplify light via feedback.

**Types:**
* **Ruby Laser (Solid State):** 3-level system. Optical pumping (Flash lamp). Pulsed output (694.3 nm). Efficiency low.
* **He-Ne Laser (Gas):** 4-level system. Electrical discharge pumping. He atoms transfer energy to Ne via collision. Continuous wave (632.8 nm). Highly monochromatic.
* **Semiconductor Laser (GaAs):** Direct bandgap. Forward bias injection creates electron-hole recombination yielding photons. Compact, efficient.

### Optical Fibers
**Principle:** Total Internal Reflection (TIR). Light confined in core ($n_1$) if incident angle > Critical Angle ($\theta_c = \sin^{-1}(n_2/n_1)$) relative to cladding ($n_2$).

**Key Parameters:**
* **Numerical Aperture (NA):** Light gathering ability. $NA = \sin(\theta_{accept}) = \sqrt{n_1^2 - n_2^2}$.
* **V-Number:** Determines mode count. $V = \frac{\pi d}{\lambda} NA$.
    * $V < 2.405$: Single Mode.
    * $V \gg 2.405$: Multi Mode ($N \approx V^2/2$).

**Fiber Types:**
1.  **Step Index:** Uniform core refractive index. Abrupt change at cladding. High dispersion.
2.  **Graded Index (GRIN):** Core index decreases parabolically from center. Self-focusing reduces intermodal dispersion.

**Attenuation (Signal Loss):**
* **Absorption:** Impurities (OH ions, transition metals) or intrinsic material properties.
* **Scattering:** Rayleigh scattering due to density fluctuations (loss $\propto \lambda^{-4}$).
* **Bending:** Macrobending (leakage at curves) and Microbending (imperfections causing mode coupling).

**Sensors:**
* **Intrinsic:** Fiber *is* the sensor (e.g., Phase modulation/Interferometric for temp/strain).
* **Extrinsic:** Fiber transports light to external sensor (e.g., Intensity based displacement).

---

## Unit IV: Solid State Physics

### Classical Free Electron Theory (Drude-Lorentz)
* **Assumptions:** Valence electrons form a "gas" moving freely in lattice. Collisions with ions are instantaneous. Maxwell-Boltzmann statistics apply.
* **Parameters:**
    * **Drift Velocity ($v_d$):** Average velocity in electric field. $v_d = \mu E$.
    * **Relaxation Time ($\tau$):** Average time between collisions.
    * **Conductivity ($\sigma$):** $\sigma = \frac{n e^2 \tau}{m}$.
* **Success:** Explains Ohm’s law and Wiedemann-Franz law (ratio of thermal/electrical conductivity $\propto T$).
* **Failures:**
    * Predicts specific heat capacity $\propto$ free electrons (experimentally much lower).
    * Incorrect temperature dependence of $\sigma$ (Classical $\sigma \propto T^{-1/2}$, Experiment $\sigma \propto T^{-1}$).

### Quantum Free Electron Theory
* **Corrections:** Electrons are fermions (obey Pauli Exclusion Principle). Discrete energy levels.
* **Fermi Energy ($E_F$):** Energy of highest occupied level at 0K.
* **Fermi-Dirac Distribution $f(E)$:** Probability of occupation.
    * At 0K: $f(E) = 1$ for $E < E_F$, 0 above.
    * At $T > 0$: Step smooths out. Only electrons near $E_F$ participate in conduction.
* **Result:** Solves specific heat anomaly (only fraction $T/T_F$ electrons absorb thermal energy).

### Dielectrics
**Polarization ($P$):** Dipole moment per unit volume.
* **Relation:** $P = \epsilon_0 (\epsilon_r - 1) E$.
* **Mechanisms:**
    1.  **Electronic:** Shift of electron cloud vs nucleus (Optical freq).
    2.  **Ionic:** Displacement of ions in lattice (IR freq).
    3.  **Orientation:** Alignment of permanent dipoles (Microwave/Audio freq). Depends on Temp ($1/T$).
    4.  **Space Charge:** Mobile charge accumulation at interfaces (Low freq).

**Internal Field (Lorentz Field):**
* Field experienced by a dipole inside dielectric $\ne$ Applied field.
* $E_{int} = E + \frac{P}{3\epsilon_0}$.
* **Clausius-Mossotti Equation:** Relates microscopic polarizability ($\alpha$) to macroscopic dielectric constant ($\epsilon_r$):
    $\frac{\epsilon_r - 1}{\epsilon_r + 2} = \frac{N\alpha}{3\epsilon_0}$.

---

## Quantum Computing

### 1. Fundamentals & Qubits
* **The Qubit:** Quantum analog of a bit. Unit vector in 2D complex Hilbert space.
    * State $|\psi\rangle = \alpha|0\rangle + \beta|1\rangle$, where $|\alpha|^2 + |\beta|^2 = 1$.
    * **Superposition:** Exists in both states simultaneously until measured. Measurement collapses state to $|0\rangle$ or $|1\rangle$ with probability $|\alpha|^2$ or $|\beta|^2$.
* **Bloch Sphere:** Geometric representation of pure single-qubit states.
    * $|\psi\rangle = \cos(\theta/2)|0\rangle + e^{i\phi}\sin(\theta/2)|1\rangle$.
    * North pole $|0\rangle$, South pole $|1\rangle$. Operations are rotations on the sphere.

### 2. Linear Algebra Basics (Dirac Notation)
* **Ket $|\psi\rangle$:** Column vector.
* **Bra $\langle\psi|$:** Conjugate transpose (row vector).
* **Inner Product $\langle\phi|\psi\rangle$:** Scalar (complex number). Measure of overlap. $\langle\psi|\psi\rangle = 1$ (Normalization).
* **Outer Product $|\psi\rangle\langle\phi|$:** Operator/Matrix.
* **Unitary Operators ($U$):** $U^\dagger U = I$. Preserves norm (probability). All quantum gates are unitary.

### 3. Quantum Gates
* **Single Qubit:**
    * **Pauli-X (NOT):** Flips $|0\rangle \leftrightarrow |1\rangle$. Matrix: $\begin{bmatrix} 0 & 1 \\ 1 & 0 \end{bmatrix}$.
    * **Pauli-Z (Phase Flip):** $|1\rangle \to -|1\rangle$. Matrix: $\begin{bmatrix} 1 & 0 \\ 0 & -1 \end{bmatrix}$.
    * **Hadamard (H):** Creates superposition. $|0\rangle \to \frac{|0\rangle+|1\rangle}{\sqrt{2}}$ ($|+\rangle$). Matrix: $\frac{1}{\sqrt{2}}\begin{bmatrix} 1 & 1 \\ 1 & -1 \end{bmatrix}$.
* **Multi-Qubit:**
    * **CNOT (Controlled-NOT):** Flips Target if Control is 1. Entangling gate. Matrix: 4x4 identity with bottom right 2x2 flipped to X.
    * **Toffoli (CCNOT):** Universal for classical reversible computation.

### 4. Abstractions from Reference Textbook (Nielsen & Chuang)

#### The Four Postulates of Quantum Mechanics
1.  **State Space:** Isolated system = Hilbert space. State = unit vector.
2.  **Evolution:** Closed system evolution is unitary ($|\psi'\rangle = U|\psi\rangle$). (Continuous time: Schrödinger equation).
3.  **Measurement:** Described by measurement operators $\{M_m\}$. Probability $p(m) = \langle\psi|M_m^\dagger M_m|\psi\rangle$. State collapses to normalized $M_m|\psi\rangle$.
    * *Projective Measurement:* Standard observable-based measurement.
4.  **Composite Systems:** State space is tensor product of components ($H_{total} = H_1 \otimes H_2$).

#### Quantum Resources & Information Theory
* **No-Cloning Theorem:** Impossible to create an identical copy of an arbitrary unknown quantum state.
    * Proof: Linearity of quantum mechanics forbids $U(|\psi\rangle|0\rangle) = |\psi\rangle|\psi\rangle$ for all $\psi$.
    * Implication: Quantum information is unique and fragile.
* **Entanglement:** States that cannot be written as product states ($|\psi\rangle \ne |a\rangle \otimes |b\rangle$).
    * **Bell States (EPR Pairs):** e.g., $\frac{|00\rangle + |11\rangle}{\sqrt{2}}$. Maximally entangled.
    * **Bell Inequality:** Shows quantum mechanics violates Local Realism. Quantum correlations are stronger than classical correlations.
* **Teleportation:** Uses prior entanglement + 2 classical bits to transfer 1 qubit state. Does *not* violate speed of light (requires classical channel). Destroys original.
* **Superdense Coding:** Uses prior entanglement + 1 qubit transmission to transfer 2 classical bits.

#### Computational Complexity
* **Turing Machines:** Universal model of classical computation. Reversible Turing machines exist (Toffoli gate is universal).
* **Classes:**
    * **P:** Solvable in polynomial time (Classical).
    * **NP:** Verify solution in polynomial time. (Factoring is likely NP, not P).
    * **PSPACE:** Solvable with polynomial memory.
    * **BQP (Bounded-error Quantum Polynomial time):** Problems solvable by quantum computers. $P \subseteq BQP \subseteq PSPACE$.
    * *Significance:* Quantum computers likely solve problems outside P (e.g., Factoring), but cannot solve undecidable problems (Halting problem).

#### Algorithms
* **Quantum Parallelism:** Evaluation of function $f(x)$ on superposition of all inputs simultaneously via Hadamard transform.
* **Deutsch-Jozsa:** Determines if function is constant or balanced in **one** query (Classical requires $2^{n-1}+1$). Shows separation between quantum/classical complexity.
* **Grover's Search:** Search unsorted DB of $N$ items in $O(\sqrt{N})$. Quadratic speedup.
* **Shor's Algorithm:** Factors integers in polynomial time $O((\log N)^3)$. Exponential speedup over classical GNFS. Breaks RSA encryption. Relies on Quantum Fourier Transform (QFT).

---

## Lab Viva Concepts (Physics Lab)

* **Semiconductors:**
    * *Band Gap:* Energy difference between Valence and Conduction bands. $R$ decreases as $T$ increases (negative coefficient).
    * *Hall Effect:* Determines charge carrier sign/density. Hall voltage $V_H$ transverse to current and magnetic field.
* **Ultrasonics:**
    * *Piezoelectric Effect:* Mechanical stress $\leftrightarrow$ Electrical potential (Quartz). Used to generate ultrasonics.
    * *Interferometer:* Measures velocity of sound in liquid via standing waves.
* **Resonance (LCR):**
    * *Series Resonance:* Impedance minimum, Current maximum. Acceptor circuit.
    * *Parallel Resonance:* Impedance maximum, Current minimum. Rejector circuit.
    * *Q-Factor:* Sharpness of resonance. Energy stored / Energy lost.