
# Electronics

```bash
kpnc load electronics.baka
```

## Basics & Semiconductors
* **Semiconductors:** Conduct only when heated or doped. (Si, Ge).
* **P-type:** Trivalent impurity (Boron), Holes are majority. (**Positive** vibe).
* **N-type:** Pentavalent impurity (Phosphorus), Electrons are majority. (**Negative** vibe).
* **Temp Rule:** Temp ↑ = Resistance ↓ (NTC).

## Diode
* **PN Junction:** Join P + N. Creates **Depletion Region** (no charge carriers).
* **Forward Bias:** (+) to P, (-) to N. Depletion region shrinks -> Current flows.
* **Reverse Bias:** (-) to P, (+) to N. Depletion region widens -> No current (ideal).
* **App:** Rectifiers (AC -> DC), Clumpers, Clippers.

---

## BJT (Bipolar Junction Transistor)
**Function:** Current-controlled Current Source (CCCS).
**Terminals:** Emitter (Heavily doped), Base (Lightly doped, thin), Collector (Moderate).

### Types
1.  **NPN (Most Common):** Arrow points **Out**. Current flows C to E.
2.  **PNP:** Arrow points **In**. Current flows E to C.

### Regions of Operation
| Region | E-B Junction | C-B Junction | Application |
| :--- | :--- | :--- | :--- |
| **Cutoff** | Reverse | Reverse | Open Switch (OFF) |
| **Saturation** | Forward | Forward | Closed Switch (ON) |
| **Active** | Forward | Reverse | Amplifier |

### Key Formulas
* `I_E = I_B + I_C`
* `I_C = β * I_B` (where β is gain, typically 100-300)
* `α = I_C / I_E` (approx 0.95 to 0.99)

---

## MOSFET (Metal Oxide Semiconductor FET)
**Function:** Voltage-controlled Current Source (VCCS).
**Terminals:** Gate (G), Drain (D), Source (S).
**Advantage:** High Input Impedance (`Ig ≈ 0`).

### 1. Enhancement Type (Normally OFF)
* Need Gate Voltage (`Vgs`) to **create** channel.
* **N-Channel:** Apply (+) `Vgs` to attract electrons and form channel.
* **P-Channel:** Apply (-) `Vgs` to attract holes.

### 2. Depletion Type (Normally ON)
* Channel physically exists.
* Need Gate Voltage (`Vgs`) to **destroy/pinch** channel.
* Can work in both enhancement (bigger channel) and depletion (smaller channel) modes.

![MOSFET Structure](books/asset/MOSFET.jpg)

---

## Op-Amps (Operational Amplifiers)
**Symbol:** Triangle with Inverting `(-)` and Non-inverting `(+)` inputs.

### Ideal vs. Practical (LM741)
| Parameter | Ideal | Practical |
| :--- | :--- | :--- |
| **Open Loop Gain (A)** | ∞ | ~200,000 |
| **Input Impedance (Zi)** | ∞ (Open) | ~2 MΩ |
| **Output Impedance (Zo)** | 0 (Short) | ~75 Ω |
| **Bandwidth** | ∞ | ~1 MHz |
| **CMRR** | ∞ | ~90 dB |
| **Slew Rate** | ∞ | 0.5 V/µs |

### The "Golden Rules" (Negative Feedback)
1.  **No Current** flows into the inputs (`I+ = I- = 0`).
2.  **Virtual Short:** `V+` approx equals `V-`.

### Common Configurations

#### 1. Inverting Amplifier
* Signal to `(-)`.
* **Gain:** `Av = - (Rf / Rin)`
* Output is 180° out of phase.

#### 2. Non-Inverting Amplifier
* Signal to `(+)`.
* **Gain:** `Av = 1 + (Rf / Rin)`
* Phase is same.

#### 3. Voltage Follower (Buffer)
* `Vout = Vin`.
* **Gain:** 1.
* **Use:** Impedance matching (High Zin -> Low Zout).

#### 4. Comparator (Open Loop)
* No feedback.
* If `V+ > V-` -> `Vout = +Vsat`
* If `V- > V+` -> `Vout = -Vsat`

