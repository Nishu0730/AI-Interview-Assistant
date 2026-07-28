from fastapi import APIRouter, UploadFile, File
import shutil
import os

from app.services.resume_parser import extract_text
from app.services.skill_extractor import extract_skills
from app.services.resume_analyzer import analyze_resume

router = APIRouter(
    prefix="/resume",
    tags=["Resume"]
)

UPLOAD_FOLDER = "app/uploads"

os.makedirs(UPLOAD_FOLDER, exist_ok=True)


@router.post("/upload")
async def upload_resume(file: UploadFile = File(...)):
    # Save uploaded resume
    file_path = os.path.join(UPLOAD_FOLDER, file.filename)

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    # Extract resume text
    resume_text = extract_text(file_path)

    # Extract skills
    skills = extract_skills(resume_text)

    # Analyze resume using Gemini
    analysis = analyze_resume(resume_text)

    return {
        "filename": file.filename,
        "skills": skills,
        "text": resume_text,
        "analysis": analysis
    }