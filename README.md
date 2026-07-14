# AI Resume Analyzer

An AI-powered Resume Analyzer that compares a candidate's resume with a job description and generates an ATS compatibility report using Google Gemini AI.

---

## Features

- Upload Resume (PDF)
- Upload Job Description (TXT/PDF)
- AI-powered Resume Analysis
- ATS Score
- Resume Match Score
- Matched Skills
- Missing Skills
- Strengths Analysis
- Weaknesses Analysis
- Personalized Recommendations
- Interactive Score Charts
- Download Professional PDF Report

---

## Tech Stack

### Frontend
- React.js
- Tailwind CSS
- Axios
- Recharts

### Backend
- FastAPI
- Python
- PyMuPDF

### AI
- Google Gemini 2.5 Flash

---

## Project Structure

```text
AI-Resume-Analyzer
│
├── backend
│   ├── routers
│   ├── services
│   ├── uploads
│   ├── main.py
│   └── requirements.txt
│
├── frontend
│   ├── src
│   ├── public
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/220467/AI-Resume-Analyzer.git
```

### Backend

```bash
cd backend
python -m venv .venv
.\.venv\Scripts\activate
pip install -r requirements.txt
python -m uvicorn main:app --reload
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## Workflow

1. Upload Resume.
2. Upload Job Description.
3. Click **Compare Resume**.
4. The AI analyzes both documents.
5. View ATS Score and Resume Match Score.
6. Review Matched Skills and Missing Skills.
7. Read AI-generated Strengths, Weaknesses, and Recommendations.
8. Download the PDF report.

---

## Future Improvements

- User Authentication
- Resume History
- AI Resume Rewrite
- Interview Question Generator
- Cover Letter Generator
- Multi-language Support
- Cloud Deployment

---

## Author

**Raghava Raju Shashank**

B.Tech Computer Science Engineering

National Institute of Technology (NIT) Raipur

---

## License

This project is intended for educational and portfolio purposes.
