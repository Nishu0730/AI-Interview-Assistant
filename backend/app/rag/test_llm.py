from app.rag.llm import generate_questions

context = """
Supervised learning is a machine learning technique
that learns from labelled data.
"""

role = "AI/ML Engineer"

skills = [
    "Python",
    "Machine Learning",
    "FastAPI"
]

print(
    generate_questions(
        context,
        role,
        skills
    )
)