from fastapi import APIRouter
import os

from resume_parser import extract_text
from services.match_service import match_resume

router = APIRouter(
    prefix="/match",
    tags=["Resume Match"]
)

RESUME_FOLDER = "uploads/resumes"
JOB_FOLDER = "uploads/jobs"


@router.post("/")
def compare_resume():

    # Resume
    if not os.path.exists(RESUME_FOLDER):
        return {"error": "Resume folder not found."}

    resume_files = os.listdir(RESUME_FOLDER)

    if not resume_files:
        return {"error": "No resume uploaded."}

    resume_path = max(
        [os.path.join(RESUME_FOLDER, f) for f in resume_files],
        key=os.path.getmtime
    )

    print("=" * 60)
    print("Resume Selected:", resume_path)

    resume_text = extract_text(resume_path)

    # Job Description
    if not os.path.exists(JOB_FOLDER):
        return {"error": "Job folder not found."}

    job_files = os.listdir(JOB_FOLDER)

    if not job_files:
        return {"error": "No job description uploaded."}

    job_path = max(
        [os.path.join(JOB_FOLDER, f) for f in job_files],
        key=os.path.getmtime
    )

    print("Job Selected:", job_path)

    extension = os.path.splitext(job_path)[1].lower()

    print("Extension:", extension)

    if extension == ".txt":

        try:
            with open(job_path, "r", encoding="utf-8") as file:
                job_text = file.read()

            print("Read using UTF-8")

        except UnicodeDecodeError:

            with open(job_path, "r", encoding="latin-1") as file:
                job_text = file.read()

            print("Read using Latin-1")

    elif extension == ".pdf":

        print("Reading PDF")
        job_text = extract_text(job_path)

    else:
        return {
            "error": f"Unsupported file type: {extension}"
        }

    print("Job Preview:")
    print(job_text[:300])

    result = match_resume(
        resume_text,
        job_text
    )

    print("=" * 80)
    print("FINAL RESULT")
    print(result)
    print("=" * 80)

    return result