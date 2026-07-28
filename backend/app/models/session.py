from sqlalchemy import Column, Integer, String, Text
from app.database.database import Base


class InterviewSession(Base):
    __tablename__ = "interview_sessions"

    id = Column(Integer, primary_key=True, index=True)
    candidate_name = Column(String)
    role = Column(String)
    question = Column(Text)
    answer = Column(Text)