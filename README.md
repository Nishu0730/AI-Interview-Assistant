# 🤖 AI Interview Assistant

An AI-powered interview preparation platform that analyzes resumes, generates personalized interview questions using Retrieval-Augmented Generation (RAG), evaluates candidate responses, and provides detailed AI feedback including strengths, weaknesses, and an overall interview score.

---

## ✨ Features

- 📄 Resume Upload
- 🧠 AI Resume Parsing
- 🎯 ATS Score Analysis
- 💡 AI Skill Extraction
- ❓ Personalized Interview Question Generation
- 💬 AI Answer Evaluation
- 📊 Overall Interview Score
- ✅ Strength & Weakness Analysis

---

## 🛠️ Tech Stack

### Frontend
- React
- Tailwind CSS
- Axios

### Backend
- FastAPI
- SQLAlchemy
- Python

### Database
- SQLite

### AI & Machine Learning
- Google Gemini
- FAISS
- Sentence Transformers
- Retrieval-Augmented Generation (RAG)

---

## 📂 Project Structure

```
AI-Interview-Assistant/
│
├── backend/
├── frontend/
├── README.md
└── .gitignore
```
---

## 🏗️ Architecture

```text
                   +----------------------+
                   |      React UI        |
                   +----------+-----------+
                              |
                              | REST API
                              ▼
                   +----------------------+
                   |      FastAPI         |
                   +----------+-----------+
                              |
      +-----------+-----------+-----------+-----------+
      |           |                       |           |
      ▼           ▼                       ▼           ▼
 Resume Parser  ATS Analyzer      RAG Pipeline   SQLAlchemy
                                      |
                                      ▼
                               FAISS Retriever
                                      |
                                      ▼
                           Sentence Transformers
                                      |
                                      ▼
                              Google Gemini API
```
---

## 🚀 Installation

### Clone the Repository

```bash
git clone https://github.com/<your-username>/AI-Interview-Assistant.git
```

### Backend Setup

```bash
cd backend

python -m venv venv

pip install -r requirements.txt

uvicorn app.main:app --reload
```

### Frontend Setup

```bash
cd frontend

npm install

npm run dev
```
---

## 🔑 Environment Variables

Create a `.env` file inside the `backend` folder.

```env
GEMINI_API_KEY=your_gemini_api_key
```

## 📡 API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/upload` | Upload and parse resume |
| POST | `/interview/start` | Generate interview questions |
| POST | `/interview/evaluate` | Evaluate candidate answers |
| GET | `/skills` | Retrieve extracted skills |
| GET | `/ats-score` | Retrieve ATS analysis |

## 🚀 Future Enhancements
- 🎙️ Voice-based mock interviews
- 🌍 Multi-language interview support
- 📈 Interview performance analytics dashboard
- 👤 User authentication and profiles
- 📝 Resume improvement suggestions
- 🏢 Company-specific interview modes
- ☁️ Cloud deployment with CI/CD

## 📸 Screenshots

### Home Page
*(Add screenshot after deployment)*

### Resume Analysis
*(Add screenshot after deployment)*

### Interview Session
*(Add screenshot after deployment)*

### AI Evaluation Report
*(Add screenshot after deployment)*

## 👩‍💻 Author

**Nishchitha G R**

- GitHub: https://github.com/your-username
- LinkedIn: https://linkedin.com/in/your-profile

## 📄 License

This project is licensed under the MIT License.