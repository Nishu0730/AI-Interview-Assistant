import re

SKILLS = [
    "Python",
    "Java",
    "C++",
    "FastAPI",
    "Flask",
    "Django",
    "React",
    "Next.js",
    "Node.js",
    "SQL",
    "PostgreSQL",
    "MongoDB",
    "Git",
    "GitHub",
    "Docker",
    "AWS",
    "Machine Learning",
    "Deep Learning",
    "NLP",
    "LLM",
    "RAG",
    "TensorFlow",
    "PyTorch",
    "Pandas",
    "NumPy",
    "OpenCV"
]


def extract_skills(text):
    found = []

    text = text.lower()

    for skill in SKILLS:
        if re.search(r"\b" + re.escape(skill.lower()) + r"\b", text):
            found.append(skill)

    return list(set(found))