# ⚙️ Deep Learning Optimization Algorithms: Adam, AdamW, & SGD

<span class="badge-tag">Optimization</span> <span class="badge-tag">Mathematics</span> <span class="badge-tag">Deep Learning</span>

---

## 📌 Introduction
Choosing the appropriate optimizer is critical for training stability, convergence speed, and generalization capability of neural networks.

---

## 🧮 1. Stochastic Gradient Descent (SGD) with Momentum

Standard SGD updates parameters $\theta$ along the negative gradient direction:

$$
\theta_{t+1} = \theta_t - \eta g_t
$$

With **Momentum** ($\gamma \approx 0.9$), we accumulate past gradients to smooth oscillations:

$$
v_t = \gamma v_{t-1} + \eta g_t
$$

$$
\theta_{t+1} = \theta_t - v_t
$$

---

## ⚡ 2. Adam (Adaptive Moment Estimation)

Adam combines the advantages of Momentum (first moment $m_t$) and RMSProp (second uncentered moment $v_t$):

$$
m_t = \beta_1 m_{t-1} + (1 - \beta_1) g_t
$$

$$
v_t = \beta_2 v_{t-1} + (1 - \beta_2) g_t^2
$$

Bias-corrected moments:

$$
\hat{m}_t = \frac{m_t}{1 - \beta_1^t}, \quad \hat{v}_t = \frac{v_t}{1 - \beta_2^t}
$$

Update rule:

$$
\theta_{t+1} = \theta_t - \frac{\eta}{\sqrt{\hat{v}_t} + \epsilon} \hat{m}_t
$$

---

## 🛡️ 3. Why AdamW Decouples Weight Decay

L2 regularization and Weight Decay are equivalent in standard SGD, but **not** in adaptive optimizers like Adam. **AdamW** applies weight decay directly to the weights rather than adding it to the gradient:

$$
\theta_{t+1} = (1 - \eta \lambda) \theta_t - \frac{\eta}{\sqrt{\hat{v}_t} + \epsilon} \hat{m}_t
$$

::: tip 💡 Recommendation
Use **AdamW** (with $\beta_1=0.9, \beta_2=0.999, \text{weight\_decay}=0.01$) for Transformer models and Large Language Models.
:::
