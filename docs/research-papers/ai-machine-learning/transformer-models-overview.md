# 🤖 Transformer Architectures & Self-Attention Mechanics

<span class="badge-tag">AI / ML</span> <span class="badge-tag">Deep Learning</span> <span class="badge-tag">NLP</span>

---

## 📌 Abstract / Executive Summary
The Transformer architecture, introduced by Vaswani et al. in "Attention Is All You Need" (2017), replaced recurrent sequence processing (RNNs/LSTMs) with a parallelizable mechanism called **Scaled Dot-Product Attention**. This document details the mathematical formulation, architectural blocks, and key takeaways for researchers.

---

## 🧮 1. Scaled Dot-Product Attention

The core intuition behind attention is to compute a alignment matrix between input query vectors $Q$ and key vectors $K$, scaling down large dot products to prevent vanishing gradients during softmax computation.

Given matrices:
- $Q \in \mathbb{R}^{N \times d_k}$ (Queries)
- $K \in \mathbb{R}^{M \times d_k}$ (Keys)
- $V \in \mathbb{R}^{M \times d_v}$ (Values)

The attention output is defined as:

$$
\text{Attention}(Q, K, V) = \text{softmax}\left( \frac{QK^T}{\sqrt{d_k}} \right) V
$$

Where $\sqrt{d_k}$ acts as a variance scaling factor.

---

## 🏗️ 2. Multi-Head Attention

Instead of performing a single attention function, Multi-Head Attention projects $Q, K, V$ linearly $h$ times with different learned projection matrices:

$$
\text{MultiHead}(Q, K, V) = \text{Concat}(\text{head}_1, \dots, \text{head}_h) W^O
$$

$$
\text{head}_i = \text{Attention}(Q W_i^Q, K W_i^K, V W_i^V)
$$

```python
import torch
import torch.nn as nn
import math

class ScaledDotProductAttention(nn.Module):
    def __init__(self, d_k):
        super().__init__()
        self.d_k = d_k

    def forward(self, Q, K, V, mask=None):
        scores = torch.matmul(Q, K.transpose(-2, -1)) / math.sqrt(self.d_k)
        if mask is not None:
            scores = scores.masked_fill(mask == 0, -1e9)
        attention_weights = torch.softmax(scores, dim=-1)
        return torch.matmul(attention_weights, V), attention_weights
```

---

## 🎯 Key Takeaways for Researchers
1. **Parallelization**: Unlike RNNs, transformers allow processing of all tokens simultaneously during training.
2. **Global Context**: Token interactions are direct (constant path length $O(1)$) regardless of position.
3. **Positional Encoding**: Necessary because self-attention is permutation-invariant.
