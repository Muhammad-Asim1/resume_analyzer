from flask import Flask, request, jsonify
from flask_cors import CORS
import torch
from sentence_transformers import SentenceTransformer
import pandas as pd
from text_extracter import PdfProcessor
from cv_scorer import CV_Scorer

app = Flask(__name__)
CORS(app)

# Load precomputed embeddings and model
job_embeddings = torch.load("models/embeddings.pt", map_location=torch.device("cpu"), weights_only = True)
course_embeddings = torch.load("models/course_embeddings.pt", map_location=torch.device("cpu"), weights_only = True)
job_csv = pd.read_csv("data/postings.csv")
course_csv = pd.read_csv("data/Coursera.csv")
model = SentenceTransformer('all-MiniLM-L6-v2')
pdf_processor = PdfProcessor()
keywords = ['Arts', 'Drawing', 'Data Analysis']  # Example keywords
skills = ['Teamwork', 'Leadership', 'Project Management']  # Example skills

@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return jsonify({"error": "No file part"}), 400
    file = request.files['file']

    if file.filename == '':
        return jsonify({"error": "No selected file"}), 400

    # Read file content (assuming it's text-based, like PDF)
    resume_text = pdf_processor.pdf_pipeline(file)

    cv_analyzer = CV_Scorer(resume_text)
    cv_score, grammar_score, spelling_score, readability_score, structure_score, keyword_match_score, skills_highlighting_score, consistency_score = cv_analyzer.evaluate_cv(keywords, skills)

    # Generate embedding for the resume
    resume_embedding = model.encode(resume_text, convert_to_tensor=True)

    # Find job matches
    job_similarities = torch.nn.functional.cosine_similarity(resume_embedding, job_embeddings, dim=1)
    job_top_matches = job_similarities.argsort(descending=True).tolist()
    job_top_matches_scores = job_similarities.tolist()
    job_top_matches_scores = [int(score * 100) for score in job_top_matches_scores]

    # Find course matches
    course_similarities = torch.nn.functional.cosine_similarity(resume_embedding, course_embeddings, dim=1)
    course_top_matches = course_similarities.argsort(descending=True).tolist()

    # Return top 5 jobs and courses
    jobs = [
        {
            "title": job_csv.loc[idx, "title"],
            "url": f"https://www.linkedin.com/jobs/search/?currentJobId=12345&keywords={job_csv.loc[idx, "title"]}&origin=JOBS_HOME_SEARCH_BUTTON&refresh=true",
            "company": job_csv.loc[idx, "company_name"],
            "location": job_csv.loc[idx, "location"],
            "matchPercentage": job_top_matches_scores[idx]
        }
        for idx in job_top_matches[:2]
    ]
    cv_scores = [
        {
            "cv_score": cv_score,
            "grammar_score": grammar_score,
            "spelling_score": spelling_score,
            "readability_score": readability_score,
            "structure_score": structure_score,
            "keyword_match_score": keyword_match_score,
            "skills_highlighting_score": skills_highlighting_score,
            "consistency_score": consistency_score
        }
    ]
    courses = [
        {
            "title": course_csv.loc[idx, "Course Name"],
            "url": course_csv.loc[idx, "Course URL"],
            "provider": course_csv.loc[idx, "University"],
            "difficulty": course_csv.loc[idx, "Difficulty Level"]
        }
        for idx in course_top_matches[:3]
    ]

    return jsonify({"jobs": jobs, "courses": courses, "cv_scores": cv_scores})

if __name__ == '__main__':
    app.run(debug=True)
