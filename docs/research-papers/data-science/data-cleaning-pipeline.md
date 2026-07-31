# 📊 Automated Data Preprocessing & Cleaning Pipelines

<span class="badge-tag">Data Science</span> <span class="badge-tag">Python</span> <span class="badge-tag">Reproducibility</span>

---

## 📌 Abstract
Data cleaning accounts for up to 80% of data science project time. Building deterministic, modular data pipelines ensures reproducible research findings.

---

## 🛠️ Data Pipeline Architecture

```python
import pandas as pd
import numpy as np

def clean_dataset(df: pd.DataFrame) -> pd.DataFrame:
    """
    Standardized data cleaning pipeline.
    """
    # 1. Remove duplicate entries
    df = df.drop_duplicates()
    
    # 2. Fill missing numeric values with median
    num_cols = df.select_dtypes(include=[np.number]).columns
    df[num_cols] = df[num_cols].fillna(df[num_cols].median())
    
    # 3. Z-score outlier detection
    for col in num_cols:
        z_scores = (df[col] - df[col].mean()) / df[col].std()
        df = df[z_scores.abs() <= 3.0]
        
    return df
```

---

## 📋 Checklist for Open Research Datasets
- [x] Check for missing values & documented imputation strategy
- [x] Normalize feature scales ($Z$-score or MinMax scaling)
- [x] Save intermediate data steps as immutable Parquet/CSV files
