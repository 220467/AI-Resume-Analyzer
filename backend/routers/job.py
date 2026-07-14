from fastapi import APIRouter, UploadFile, File
import os
import shutil

router = APIRouter(
    prefix="/job",
    tags=["Job Description"]
)

UPLOAD_FOLDER = "uploads/jobs"

os.makedirs(UPLOAD_FOLDER, exist_ok=True)


@router.post("/upload")
async def upload_job(file: UploadFile = File(...)):

    file_path = os.path.join(
        UPLOAD_FOLDER,
        file.filename
    )

    # Save uploaded file
    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    # Read job description text
    with open(file_path, "r", encoding="utf-8", errors="ignore") as f:
        job_text = f.read()

    return {
        "filename": file.filename,
        "characters": len(job_text),
        "preview": job_text[:500],
        "message": "Job Description Uploaded Successfully"
    }