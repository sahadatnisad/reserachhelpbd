# 📖 Publishing Guidelines

To maintain academic quality and readability across **Research Help BD**, please follow these guidelines when writing documentation.

## 📝 Markdown & Formatting Standards

- **Use Clear Headings**: Organize your document with `#`, `##`, and `###` hierarchy.
- **LaTeX Math Rendering**:
  - Inline math: `$E = mc^2$`
  - Block math:
    $$\frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$
- **Code Blocks**: Always specify the language tag for syntax highlighting (e.g. ````python`, ````latex`, ````bibtex`).
- **Attribution & References**: Always cite original paper authors, DOI, and publication venue.

---

## 🎯 Code & Formula Style Guide

```python
def calculate_attention(Q, K, V):
    """Computes Scaled Dot-Product Attention."""
    import numpy as np
    d_k = Q.shape[-1]
    scores = np.matmul(Q, K.T) / np.sqrt(d_k)
    weights = np.exp(scores) / np.sum(np.exp(scores), axis=-1, keepdims=True)
    return np.matmul(weights, V)
```
