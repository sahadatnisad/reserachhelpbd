# 🧬 Genomic Sequence Analysis & Bio-AI Overview

<span class="badge-tag">Biotechnology</span> <span class="badge-tag">Bioinformatics</span> <span class="badge-tag">Genomics</span>

---

## 📌 Abstract
Next-Generation Sequencing (NGS) generates vast quantities of genomic sequence data. Machine learning models now assist in variant calling, gene prediction, and protein folding prediction (e.g. AlphaFold).

---

## 🧮 Sequence Alignment Mechanics
The Needleman-Wunsch algorithm uses dynamic programming for global alignment of two sequence strings $S_1, S_2$:

$$
F(i, j) = \max \begin{cases} 
F(i-1, j-1) + S(S_1[i], S_2[j]), \\
F(i-1, j) + d, \\
F(i, j-1) + d 
\end{cases}
$$

Where $d$ is the gap penalty score.

---

## 🔬 Essential Bio-AI Resources
- **NCBI BLAST**: National Center for Biotechnology Information sequence alignment.
- **Biopython**: Python tools for computational molecular biology.
- **UniProt**: Comprehensive database of protein sequence and functional information.
