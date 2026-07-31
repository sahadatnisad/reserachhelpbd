# ✍️ Research Publishing & Formatting Guide

This guide covers how to format your research documents with LaTeX equations, code blocks, callouts, diagrams, and citations.

---

## 🧮 1. Mathematical Formulas (LaTeX)

You can write LaTeX math equations directly inline or in block mode.

### Inline Math
Use single dollar signs `$ ... $`:
- Example: `$E = mc^2$` renders as $E = mc^2$.
- Example: `$\sigma(z) = \frac{1}{1 + e^{-z}}$` renders as $\sigma(z) = \frac{1}{1 + e^{-z}}$.

### Display / Block Math
Use double dollar signs `$$ ... $$`:

$$
\mathcal{L}(\theta) = -\frac{1}{N} \sum_{i=1}^{N} \left[ y_i \log(\hat{y}_i) + (1 - y_i) \log(1 - \hat{y}_i) \right]
$$

```latex
$$
\mathcal{L}(\theta) = -\frac{1}{N} \sum_{i=1}^{N} \left[ y_i \log(\hat{y}_i) + (1 - y_i) \log(1 - \hat{y}_i) \right]
$$
```

---

## 💡 2. Custom Callout Containers

Use containers to highlight key insights, warnings, or notes:

::: tip 💡 Research Tip
Always store raw dataset backups before running transformation scripts.
:::

::: info ℹ️ Note
This paper was originally presented at NeurIPS 2025.
:::

::: warning ⚠️ Important Assumption
Model performance degrades if batch normalization parameters are uncalibrated.
:::

---

## 📊 3. Code Blocks & Pseudocode

Use fenced code blocks with language syntax highlighting:

```python
import numpy as np

def compute_attention(Q, K, V):
    """Compute Scaled Dot-Product Attention."""
    d_k = Q.shape[-1]
    scores = np.matmul(Q, K.T) / np.sqrt(d_k)
    weights = np.exp(scores) / np.sum(np.exp(scores), axis=-1, keepdims=True)
    return np.matmul(weights, V)
```

---

## 📚 4. Academic Citation References

Use clean markdown blockquotes or bibtex references for citing papers:

> **Citation**: Vaswani, A., et al. (2017). "Attention Is All You Need." *Advances in Neural Information Processing Systems*, 30. [DOI: 10.48550/arXiv.1706.03762](https://arxiv.org/abs/1706.03762)
