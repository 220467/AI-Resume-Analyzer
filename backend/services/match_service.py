import os
import json
from dotenv import load_dotenv
import google.generativeai as genai

load_dotenv()

genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

model = genai.GenerativeModel("gemini-2.5-flash")


def match_resume(resume_text, job_text):

    prompt = f"""
You are an ATS Resume Matching Expert.

Compare the resume with the job description.

Return ONLY valid JSON.

JSON format:

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

Rules:

- match_score MUST be an INTEGER between 0 and 100.
- Do NOT return "75%".
- Do NOT return text.
- Return ONLY JSON.

Resume:

{resume_text}

Job Description:

{job_text}
"""

    try:

        response = model.generate_content(prompt)

        text = response.text.strip()

        text = text.replace("```json", "")
        text = text.replace("```", "")
        text = text.strip()

        print("\n" + "=" * 80)
        print("RAW GEMINI RESPONSE")
        print("=" * 80)
        print(text)
        print("=" * 80)

        result = json.loads(text)

        score = result.get("match_score", 0)

        if isinstance(score, str):

            score = score.replace("%", "").strip()

            try:
                score = int(float(score))
            except:
                score = 0

        if score < 0:
            score = 0

        if score > 100:
            score = 100

        result["match_score"] = score

        defaults = {
            "matched_skills": [],
            "missing_skills": [],
            "strengths": [],
            "weaknesses": [],
            "recommendations": [],
            "ats_tips": [],
            "resume_summary": "",
            "overall_feedback": ""
        }

        for key in defaults:

            if key not in result:
                result[key] = defaults[key]

        return result

    except Exception as e:

        print("\n" + "=" * 80)
        print("MATCH SERVICE ERROR")
        print(e)
        print("=" * 80)

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
            "error": str(e)
        }