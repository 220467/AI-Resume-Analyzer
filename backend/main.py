from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routers.resume import router as resume_router
from routers.job import router as job_router
from routers.match import router as match_router

app = FastAPI(
    title="AI Resume Analyzer",
    version="1.0.0"
)

# Allowed frontend origins
origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
    "https://ai-resume-analyzer-uwue-306k7voxx.vercel.app",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Routers
app.include_router(resume_router)
app.include_router(job_router)
app.include_router(match_router)

# Home Route
@app.get("/")
def home():
    return {
        "message": "AI Resume Analyzer Backend Running"
    }

# Health Check
@app.get("/health")
def health():
    return {
        "status": "OK"
    }