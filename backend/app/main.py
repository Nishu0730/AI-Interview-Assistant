from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.resume import router as resume_router
from app.api.interview import router as interview_router
from app.database.database import Base, engine

Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="AI Interview System",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(resume_router)
app.include_router(interview_router)


@app.get("/")
def root():
    return {
        "message": "AI Interview System Running"
    }