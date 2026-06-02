import pandas as pd

df = pd.read_csv("data/postings.csv")
print(pd.value_counts(df['max_salary'].isna()))