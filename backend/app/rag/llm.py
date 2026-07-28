import os
import json
from dotenv import load_dotenv
from google import genai

load_dotenv()

client = genai.Client(
    api_key=os.getenv("GOOGLE_API_KEY")
)


def generate_questions(context, role, skills):
    prompt = f"""
You are an experienced technical interviewer.

Candidate Role:
{role}

Candidate Skills:
{', '.join(skills)}

Knowledge Context:
{context}

Generate exactly FIVE interview questions.

Rules:
1. Ask only interview questions.
2. Medium difficulty.
3. No explanations.
4. No answers.
5. Keep each question short (1-2 lines maximum).
6. Number them from 1 to 5.
7. Focus only on the candidate's role and skills.
"""

    try:
        response = client.models.generate_content(
            model="gemini-flash-latest",
            contents=prompt
        )

        if response.text:
            return response.text.strip()

        return "No interview questions were generated."

    except Exception as e:
        print(f"\nGemini Error:\n{e}\n")

        return (
            "Unable to generate interview questions right now. "
            "Please try again after a few seconds."
        )


def evaluate_interview(role, questions, answers):
    prompt = f"""
You are a senior technical interviewer.

Candidate Role:
{role}

Interview Questions:
{questions}

Candidate Answers:
{answers}

Evaluate the candidate.

Return ONLY valid JSON.

Do not use markdown.
Do not wrap the response in ```json.

Return exactly:

{{
  "score":"8/10",
  "strengths":[
    "Strength 1",
    "Strength 2"
  ],
  "improvements":[
    "Improvement 1",
    "Improvement 2"
  ],
  "feedback":"Overall feedback."
}}
"""

    try:
        response = client.models.generate_content(
            model="gemini-flash-latest",
            contents=prompt
        )

        text = response.text.strip()

        if text.startswith("```json"):
            text = text.replace("```json", "").strip()

        if text.startswith("```"):
            text = text.replace("```", "").strip()

        if text.endswith("```"):
            text = text[:-3].strip()

        print("\n===== GEMINI RESPONSE =====")
        print(text)
        print("===========================\n")

        return json.loads(text)

    except Exception as e:
        print("\nEvaluation Error:")
        print(e)

        return {
            "score": "N/A",
            "strengths": [],
            "improvements": [],
            "feedback": "Evaluation unavailable."
        }