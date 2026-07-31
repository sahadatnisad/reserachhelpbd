# 🤖 Transformer Architectures: An Overview

The Transformer architecture, introduced by Vaswani et al. in *Attention Is All You Need* (2017), revolutionized Natural Language Processing and Deep Learning.

## 🔑 Key Formula: Scaled Dot-Product Attention

$$\text{Attention}(Q, K, V) = \text{softmax}\left(\frac{QK^T}{\sqrt{d_k}}\right)V$$

Where:
- $Q \in \mathbb{R}^{n \times d_k}$: Query Matrix
- $K \in \mathbb{R}^{m \times d_k}$: Key Matrix
- $V \in \mathbb{R}^{m \times d_v}$: Value Matrix
- $d_k$: Scaling Factor (dimension of keys)

---

## 🏗️ Multi-Head Attention

$$\text{MultiHead}(Q, K, V) = \text{Concat}(\text{head}_1, \dots, \text{head}_h)W^O$$

$$\text{where } \text{head}_i = \text{Attention}(QW_i^Q, KW_i^K, VW_i^V)$$
