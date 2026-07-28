import { Sparkles } from "lucide-react";
import InterviewSession from "./InterviewSession";

function QuestionList({ questions }) {
  if (!questions) {
    return (
      <div>
        <h2 className="flex items-center gap-3 text-3xl font-bold mb-6">
          <Sparkles className="text-violet-400" size={30} />
          Interview Questions
        </h2>

        <div className="flex flex-col items-center justify-center py-16 rounded-3xl border border-slate-700 bg-slate-900/50">
          <div className="text-6xl mb-4">🤖</div>

          <h3 className="text-xl font-semibold text-white">
            No Questions Generated
          </h3>

          <p className="text-gray-400 mt-2 text-center max-w-md">
            Upload your resume and enter a job role to generate personalized AI
            interview questions.
          </p>
        </div>
      </div>
    );
  }

  console.log("Questions from API:", questions);

  const questionArray = questions
    .split(/\n+/)
    .map((q) => q.trim())
    .filter(
      (q) =>
        q &&
        (/^\d+\./.test(q) ||
          q.endsWith("?") ||
          q.length > 15)
    );

  console.log("Parsed Questions:", questionArray);

  return (
    <div>
      <h2 className="flex items-center gap-3 text-3xl font-bold mb-6">
        <Sparkles className="text-violet-400" size={30} />
        AI Interview
      </h2>

      <InterviewSession questions={questionArray} />
    </div>
  );
}

export default QuestionList;