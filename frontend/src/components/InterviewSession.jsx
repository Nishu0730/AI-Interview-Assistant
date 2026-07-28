import { useState } from "react";
import { saveAnswer, evaluateInterview } from "../services/api";

function InterviewSession({ questions }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [answers, setAnswers] = useState([]);
  const [completed, setCompleted] = useState(false);
  const [evaluation, setEvaluation] = useState(null);

  const handleNext = async () => {
    const updatedAnswers = [...answers];

    updatedAnswers[currentQuestion] = {
      question: questions[currentQuestion],
      answer: currentAnswer,
    };

    setAnswers(updatedAnswers);

    try {
      await saveAnswer({
        candidate_name: "Nishchitha",
        role: "AI/ML Engineer",
        question: questions[currentQuestion],
        answer: currentAnswer,
      });
    } catch (error) {
      console.error("Error saving answer:", error);
    }

    setCurrentAnswer("");

    if (currentQuestion === questions.length - 1) {
      try {
        const result = await evaluateInterview({
          role: "AI/ML Engineer",
          questions: updatedAnswers.map((item) => item.question),
          answers: updatedAnswers.map((item) => item.answer),
        });

        setEvaluation(result);
      } catch (error) {
        console.error("Evaluation Error:", error);
      }

      setCompleted(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  if (!questions || questions.length === 0) {
    return <p>No questions available.</p>;
  }

  if (completed) {
    return (
      <div className="rounded-3xl border border-green-500 bg-slate-900 p-8">
        <h2 className="text-3xl font-bold text-green-400 text-center mb-8">
          🎉 Interview Completed
        </h2>

        <div className="grid gap-4">

          <div className="bg-slate-800 rounded-xl p-4">
            <p className="text-gray-400 text-sm">Candidate</p>
            <h3 className="text-xl font-semibold text-white">
              Nishchitha
            </h3>
          </div>

          <div className="bg-slate-800 rounded-xl p-4">
            <p className="text-gray-400 text-sm">Role</p>
            <h3 className="text-xl font-semibold text-white">
              AI/ML Engineer
            </h3>
          </div>

          <div className="bg-slate-800 rounded-xl p-4">
            <p className="text-gray-400 text-sm">Questions Answered</p>
            <h3 className="text-xl font-semibold text-white">
              {answers.length}
            </h3>
          </div>

          <div className="bg-slate-800 rounded-xl p-4">
            <p className="text-gray-400 text-sm">Status</p>
            <h3 className="text-xl font-semibold text-green-400">
              Completed ✅
            </h3>
          </div>

        </div>

        {evaluation && (
          <>
            <div className="mt-8 bg-slate-800 rounded-xl p-5">
              <h3 className="text-2xl font-bold text-yellow-400 mb-3">
                ⭐ Overall Score
              </h3>

              <p className="text-4xl font-bold text-white">
                {evaluation.score}
              </p>
            </div>

            <div className="mt-6 bg-slate-800 rounded-xl p-5">
              <h3 className="text-xl font-bold text-green-400 mb-3">
                💪 Strengths
              </h3>

              <ul className="list-disc ml-6 text-gray-300">
                {evaluation.strengths?.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="mt-6 bg-slate-800 rounded-xl p-5">
              <h3 className="text-xl font-bold text-red-400 mb-3">
                📈 Areas to Improve
              </h3>

              <ul className="list-disc ml-6 text-gray-300">
                {evaluation.improvements?.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="mt-6 bg-slate-800 rounded-xl p-5">
              <h3 className="text-xl font-bold text-violet-400 mb-3">
                📝 Overall Feedback
              </h3>

              <p className="text-gray-300 leading-7">
                {evaluation.feedback}
              </p>
            </div>
          </>
        )}

        <div className="mt-8 rounded-xl bg-violet-900/30 border border-violet-600 p-5">
          <h3 className="text-xl font-bold text-violet-300 mb-2">
            Thank You!
          </h3>

          <p className="text-gray-300">
            Your interview responses have been recorded and evaluated successfully.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-slate-700 bg-slate-900 p-6">
      <h2 className="text-2xl font-bold text-violet-400 mb-6">
        Question {currentQuestion + 1} / {questions.length}
      </h2>

      <p className="text-lg text-gray-200 leading-8 mb-6">
        {questions[currentQuestion]}
      </p>

      <textarea
        value={currentAnswer}
        onChange={(e) => setCurrentAnswer(e.target.value)}
        placeholder="Type your answer here..."
        className="w-full h-40 bg-slate-800 border border-slate-600 rounded-xl p-4 text-white outline-none focus:border-violet-500 resize-none"
      />

      <button
        onClick={handleNext}
        className="mt-6 bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded-xl transition"
      >
        {currentQuestion === questions.length - 1
          ? "Finish Interview"
          : "Next Question"}
      </button>
    </div>
  );
}

export default InterviewSession;