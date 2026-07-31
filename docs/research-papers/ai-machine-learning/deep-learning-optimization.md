# ⚡ Deep Learning Optimization Techniques

Optimization algorithms govern how neural network parameters ($\theta$) are updated to minimize loss ($\mathcal{L}$).

## ⚙️ Adam Optimizer (Adaptive Moment Estimation)

$$\begin{aligned}
m_t &= \beta_1 m_{t-1} + (1 - \beta_1) g_t \\
v_t &= \beta_2 v_{t-1} + (1 - \beta_2) g_t^2 \\
\hat{m}_t &= \frac{m_t}{1 - \beta_1^t}, \quad \hat{v}_t = \frac{v_t}{1 - \beta_2^t} \\
\theta_t &= \theta_{t-1} - \frac{\eta}{\sqrt{\hat{v}_t} + \epsilon} \hat{m}_t
\end{aligned}$$
