import os
import json
from dotenv import load_dotenv
import google.generativeai as genai

# Load environment variables
load_dotenv()

# Configure Gemini
genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

# Gemini Model
model = genai.GenerativeModel("gemini-2.5-flash")


def match_resume(resume_text, job_text):
    prompt = f"""
You are an expert ATS Resume Matching System.

Compare the Resume with the Job Description.

Return ONLY valid JSON.

Use EXACTLY this format:

{{
    "match_score": 0,
    "matched_skills": [],
    "missing_skills": [],
    "strengths": [],
    "weaknesses": [],
    "recommendations": [],
    "ats_tips": [],
    "resume_summary": "",
    "overall_feedback": ""
}}

Instructions:
- match_score should be between 0 and 100.
- matched_skills should contain only skills present in both the resume and job description.
- missing_skills should contain important job skills missing from the resume.
- strengths should list the resume's strongest points.
- weaknesses should list areas needing improvement.
- recommendations should contain actionable suggestions.
- ats_tips should contain ATS optimization tips.
- resume_summary should summarize the candidate in 2-3 sentences.
- overall_feedback should provide an overall evaluation in 2-3 sentences.

Resume:

{resume_text}

Job Description:

{job_text}

IMPORTANT:
- Return ONLY valid JSON.
- Do NOT use markdown.
- Do NOT use ```json.
- Do NOT include explanations.
"""

    try:
        response = model.generate_content(prompt)

        text = response.text.strip()

        # Remove markdown if Gemini returns it
        text = text.replace("```json", "")
        text = text.replace("```", "")
        text = text.strip()

        result = json.loads(text)

        # Ensure required keys exist
        defaults = {
            "match_score": 0,
            "matched_skills": [],
            "missing_skills": [],
            "strengths": [],
            "weaknesses": [],
            "recommendations": [],
            "ats_tips": [],
            "resume_summary": "",
            "overall_feedback": "",
        }

        for key, value in defaults.items():
            result.setdefault(key, value)

        return result

    except Exception as e:
        print("Gemini Error:", e)

        return {
            "match_score": 0,
            "matched_skills": [],
            "missing_skills": [],
            "strengths": [],
            "weaknesses": [],
            "recommendations": [],
            "ats_tips": [],
            "resume_summary": "",
            "overall_feedback": "",
            "error": str(e),
        }