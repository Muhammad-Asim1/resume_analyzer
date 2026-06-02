from text_extracter import PdfProcessor
import torch
from sentence_transformers import SentenceTransformer
import pandas as pd

job_embeddings = torch.load("models/embeddings.pt", map_location = torch.device("cpu"), weights_only= True)
course_embeddings = torch.load("models/course_embeddings.pt", map_location = torch.device("cpu"), weights_only= True)

job_csv = pd.read_csv("data/postings.csv")
course_csv = pd.read_csv("data/Coursera.csv")

pdf_processor = PdfProcessor()
resume_file = "Deedy_Resume_Reversed.pdf"
resume_text = pdf_processor.pdf_pipeline(resume_file)



model = SentenceTransformer('all-MiniLM-L6-v2')

resume_embedding = model.encode(resume_text, convert_to_tensor=True)


job_similarities = torch.nn.functional.cosine_similarity(resume_embedding, job_embeddings, dim=1)
job_top_matches = job_similarities.argsort(descending=True)
job_top_matches_scores = job_similarities.tolist()
job_top_matches_scores = [int(score * 100) for score in job_top_matches_scores]
print(job_top_matches_scores[:10])

course_similarities = torch.nn.functional.cosine_similarity(resume_embedding, course_embeddings, dim=1)
course_top_matches = course_similarities.argsort(descending=True)

print('-' *50)

job_top_matches = job_top_matches.tolist()
print("Top jobs:")
for i in range(5):
    print(f"{job_csv.loc[job_top_matches[i],'title']} {job_csv.loc[job_top_matches[i],'job_posting_url']}")

print("-" *50)
print("Top courses:")
course_top_matches = course_top_matches.tolist()
for i in range(5):
    print(f"{course_csv.loc[course_top_matches[i], 'Course Name']} {course_csv.loc[course_top_matches[i], 'Course URL']}")