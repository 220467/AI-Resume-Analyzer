from fastapi import APIRouter, UploadFile, File
import os
import shutil

from resume_parser import extract_text
from services.gemini_service import analyze_resume

router = APIRouter(
    prefix="/resume",
    tags=["Resume"]
)

UPLOAD_FOLDER = "uploads/resumes"

os.makedirs(UPLOAD_FOLDER, exist_ok=True)


@router.post("/upload")
async def upload_resume(file: UploadFile = File(...)):

    # Save uploaded PDF
    file_path = os.path.join(UPLOAD_FOLDER, file.filename)

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    # Extract text from PDF
    resume_text = extract_text(file_path)

    # Analyze Resume (Handle Gemini Errors)
    try:
        analysis = analyze_resume(resume_text)

    except Exception as e:
        print("Gemini Error:", e)

        analysis = {
            "message": "Gemini API quota exceeded or unavailable.",
            "technical_skills": [],
            "soft_skills": [],
            "ats_score": 0
        }

    # Return response
    return {
        "filename": file.filename,
        "characters": len(resume_text),
        "analysis": analysis
    }