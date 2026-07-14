import os
import json
from dotenv import load_dotenv
import google.generativeai as genai

load_dotenv()

genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

model = genai.GenerativeModel("gemini-2.5-flash")


def analyze_resume(resume_text):

    prompt = f"""
You are an expert ATS Resume Analyzer.

Analyze the resume below.

Return ONLY valid JSON.

Use exactly this format:

{{
    "ats_score": 0,
    "summary": "",
    "technical_skills": [],
    "soft_skills": [],
    "missing_skills": [],
    "strengths": [],
    "weaknesses": [],
    "suggestions": []
}}

Resume:

{resume_text}

Remember:
- Output ONLY JSON.
- Do not explain.
- Do not use markdown.
"""

    response = model.generate_content(prompt)

    text = response.text.strip()

    # Remove markdown if Gemini returns ```json
    if text.startswith("```"):
        text = text.replace("```json", "")
        text = text.replace("```", "")
        text = text.strip()

    return json.loads(text)