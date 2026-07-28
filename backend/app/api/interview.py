from fastapi import APIRouter, Depends
from pydantic import BaseModel
from sqlalchemy.orm import Session

from app.database.database import get_db
from app.models.session import InterviewSession

from app.rag.query_builder import build_query
from app.rag.retriever import retrieve_context
from app.rag.llm import generate_questions, evaluate_interview

router = APIRouter(
    prefix="/interview",
    tags=["Interview"]
)


class InterviewRequest(BaseModel):
    role: str
    skills: list[str]


class SaveAnswerRequest(BaseModel):
    candidate_name: str
    role: str
    question: str
    answer: str


class EvaluateInterviewRequest(BaseModel):
    role: str
    questions: list[str]
    answers: list[str]


@router.post("/generate")
def generate_interview(request: InterviewRequest):

    query = build_query(
        request.role,
        request.skills
    )

    context = retrieve_context(query)

    context = context[:1000]

    questions = generate_questions(
        context=context,
        role=request.role,
        skills=request.skills
    )

    return {
        "role": request.role,
        "skills": request.skills,
        "questions": questions
    }


@router.post("/save_answer")
def save_answer(
    request: SaveAnswerRequest,
    db: Session = Depends(get_db)
):

    interview = InterviewSession(
        candidate_name=request.candidate_name,
        role=request.role,
        question=request.question,
        answer=request.answer
    )

    db.add(interview)
    db.commit()
    db.refresh(interview)

    return {
        "message": "Answer saved successfully",
        "id": interview.id
    }


@router.post("/evaluate")
def evaluate(request: EvaluateInterviewRequest):

    result = evaluate_interview(
        role=request.role,
        questions=request.questions,
        answers=request.answers
    )

    return result