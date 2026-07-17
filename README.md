# AI Resume Analyzer

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)
![FastAPI](https://img.shields.io/badge/FastAPI-Python-009688?logo=fastapi)
![Python](https://img.shields.io/badge/Python-3.11-blue?logo=python)
![Google Gemini](https://img.shields.io/badge/Google-Gemini-orange)
![License](https://img.shields.io/badge/License-Portfolio-green)

An AI-powered Resume Analyzer built using **React**, **FastAPI**, **Google Gemini AI**, and **PyMuPDF**. The application compares a candidate's resume with a job description, generates an ATS compatibility score, identifies skill gaps, and provides AI-powered recommendations to improve the resume.

---

# 🚀 Live Demo

**Frontend**

https://ai-resume-analyzer-uwue.vercel.app

**Backend API**

https://ai-resume-analyzer-backend-bl01.onrender.com

---

# 📌 Project Highlights

- Full Stack AI Application
- Google Gemini AI Integration
- ATS Resume Score
- Resume–Job Match Score
- Skill Gap Analysis
- AI Recommendations
- PDF Resume Parsing
- Interactive Charts
- Responsive UI
- Deployed using Vercel and Render

---

# ✨ Features

- Upload Resume (PDF)
- Upload Job Description (TXT/PDF)
- AI Resume Analysis
- ATS Compatibility Score
- Resume Match Score
- Matched Skills
- Missing Skills
- Strength Analysis
- Weakness Analysis
- Personalized AI Recommendations
- Interactive Charts
- Download PDF Report

---

# 🛠 Tech Stack

## Frontend

- React.js
- Vite
- Tailwind CSS
- Axios
- Recharts

## Backend

- FastAPI
- Python
- PyMuPDF

## AI

- Google Gemini 2.5 Flash

## Deployment

- Vercel
- Render

---

# 📂 Project Structure

```text
AI-Resume-Analyzer
│
├── backend
│   ├── routers
│   ├── services
│   ├── uploads
│   ├── main.py
│   ├── requirements.txt
│   └── .env.example
│
├── frontend
│   ├── src
│   ├── public
│   ├── package.json
│   └── vite.config.js
│
├── screenshots
│   ├── home.png
│   ├── upload.png
│   ├── results.png
│   └── analysis.png
│
└── README.md
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/220467/AI-Resume-Analyzer.git
```

---

## Backend Setup

```bash
cd backend

python -m venv .venv

# Windows
.\.venv\Scripts\activate

# Linux / macOS
source .venv/bin/activate

pip install -r requirements.txt

uvicorn main:app --reload
```

---

## Frontend Setup

```bash
cd frontend/vite-project

npm install

npm run dev
```

---

# 🔄 Application Workflow

1. Upload a Resume (PDF)
2. Upload a Job Description
3. Click **Compare Resume**
4. Resume text is extracted using **PyMuPDF**
5. Google Gemini AI analyzes the resume and job description
6. ATS Score is generated
7. Resume Match Score is calculated
8. Skills are compared
9. Missing skills are identified
10. AI Recommendations are displayed
11. Download the analysis report

---

# 🏗 System Architecture

```text
 Resume PDF + Job Description
              │
              ▼
        React Frontend
              │
              ▼
        FastAPI Backend
              │
              ▼
      Google Gemini AI
              │
              ▼
 ATS Score
 Resume Match Score
 Skill Analysis
 AI Recommendations
```

---

# 📸 Screenshots

## Home Page

![Home](screenshots/home.png)

---

## Upload Resume

![Upload](screenshots/upload.png)

---

## Resume Analysis

![Results](screenshots/results.png)

---

## AI Analysis

![Analysis](screenshots/analysis.png)

---

# 🚧 Challenges Solved

- Integrated Google Gemini AI with FastAPI
- Extracted text from PDF resumes using PyMuPDF
- Built ATS scoring and skill-matching logic
- Connected React frontend with FastAPI backend
- Solved CORS issues between Vercel and Render
- Deployed a full-stack AI application to production

---

# 🔮 Future Improvements

- User Authentication
- Resume History
- Resume Version Comparison
- AI Resume Rewriter
- AI Cover Letter Generator
- AI Interview Question Generator
- Resume Templates
- Multi-language Support
- Resume Keyword Optimizer

---

# 👨‍💻 Author

**Raghava Raju Shashank**

B.Tech – Computer Science and Engineering

National Institute of Technology (NIT) Raipur

GitHub:

https://github.com/220467

---

# 📄 License

This project is shared for educational and portfolio purposes. Please contact the author before redistributing or using substantial portions of the code in commercial applications.
