from text_extracter import PdfProcessor
import torch

job_embeddings = torch.load("models/embeddings.pt", map_location = torch.device("cpu"))
course_embeddings = torch.load("models/course_embeddings.pt", map_location = torch.device("cpu"))

pdf_processor = PdfProcessor()
resume_file = "Deedy_Resume_Reversed.pdf"
resume_text = pdf_processor.pdf_pipeline(resume_file)

print(resume_text)