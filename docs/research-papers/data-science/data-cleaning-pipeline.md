# 📊 Automated Data Cleaning Pipeline

A robust data pipeline ensures high data quality before modeling.

```python
import pandas as pd
import numpy as np

def clean_dataset(df: pd.DataFrame) -> pd.DataFrame:
    """Cleans raw research datasets automatically."""
    # Deduplicate
    df = df.drop_duplicates()
    
    # Handle missing numerical values with median imputation
    num_cols = df.select_dtypes(include=[np.number]).columns
    df[num_cols] = df[num_cols].fillna(df[num_cols].median())
    
    return df
```
