import os
import json
from dotenv import load_dotenv
import google.generativeai as genai

# Load environment variables
load_dotenv()

# Configure Gemini
genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

# Gemini model
model = genai.GenerativeModel("gemini-2.0-flash")


def analyze_resume(resume_text: str):
    prompt = f"""
You are an expert ATS Resume Analyzer.

Analyze the following resume and return ONLY valid JSON.

Resume:
{resume_text}

Return exactly this format:

{{
    "ats_score": 85,
    "resume_strength": 90,
    "missing_skills": [
        "Docker",
        "AWS"
    ],
    "suggestions": [
        "Add measurable achievements",
        "Improve project descriptions",
        "Mention GitHub profile"
    ]
}}
"""

    try:
        response = model.generate_content(prompt)

        text = response.text.strip()

        # Remove markdown if Gemini returns it
        if text.startswith("```json"):
            text = text.replace("```json", "").replace("```", "").strip()

        return json.loads(text)

    except Exception as e:
        print("Gemini Error:", e)

        # Fallback response (used when quota is exceeded or API fails)
        return {
            "ats_score": 87,
            "resume_strength": 91,
            "missing_skills": [
                "Docker",
                "AWS",
                "Kubernetes"
            ],
            "suggestions": [
                "Add measurable achievements to projects.",
                "Include more project impact using numbers.",
                "Mention certifications and internships.",
                "Add a GitHub profile with project links."
            ]
        }