import os
from dotenv import load_dotenv
import google.generativeai as genai

load_dotenv()

genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))

model = genai.GenerativeModel("gemini-2.0-flash")


def generate_questions(context, role, skills):
    prompt = f"""
You are an experienced technical interviewer.

Candidate Role:
{role}

Candidate Skills:
{', '.join(skills)}

Knowledge Context:
{context}

Generate exactly 5 interview questions.

Rules:
1. Questions must be based ONLY on the context.
2. Medium difficulty.
3. Don't give answers.
4. Number the questions.
"""

    response = model.generate_content(prompt)

    return response.text