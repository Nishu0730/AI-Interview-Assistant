import { useState } from "react";
import { Sparkles, Briefcase } from "lucide-react";
import { generateInterview } from "../services/api";
import Loading from "./Loading";

function RoleForm({ skills, setQuestions }) {
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!role.trim()) {
      alert("Please enter a job role.");
      return;
    }

    if (skills.length === 0) {
      alert("Please upload your resume first.");
      return;
    }

    setLoading(true);

    try {
      const data = await generateInterview(role, skills);

      setQuestions(data.questions || "");
    } catch (error) {
      console.error(error);
      alert("Failed to generate interview questions.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 className="flex items-center gap-3 text-3xl font-bold mb-6">
        <Sparkles
          size={30}
          className="text-violet-400"
        />
        Generate Questions
      </h2>

      {loading ? (
        <Loading />
      ) : (
        <div className="space-y-6">

          <div className="relative">

            <Briefcase
              size={22}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-violet-400"
            />

            <input
              type="text"
              placeholder="Enter Job Role (e.g. Python Developer)"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="
                w-full
                pl-14
                pr-5
                py-4
                rounded-2xl
                bg-slate-900
                border
                border-slate-700
                text-white
                placeholder-gray-400
                outline-none
                transition-all
                duration-300
                focus:border-violet-500
                focus:ring-2
                focus:ring-violet-500/30
              "
            />

          </div>

          <button
            onClick={handleGenerate}
            className="
              w-full
              py-4
              rounded-2xl
              bg-gradient-to-r
              from-violet-600
              via-blue-600
              to-cyan-500
              text-white
              text-lg
              font-bold
              shadow-lg
              shadow-violet-500/30
              hover:scale-[1.02]
              hover:shadow-violet-500/50
              transition-all
              duration-300
            "
          >
            ✨ Generate Interview Questions
          </button>

          <div className="rounded-2xl border border-slate-700 bg-slate-900/60 p-4">
            <h3 className="text-violet-400 font-semibold mb-2">
              💡 Tip
            </h3>

            <p className="text-gray-400 text-sm leading-6">
              Enter the role you are preparing for, such as{" "}
              <span className="text-white font-medium">
                Python Developer
              </span>
              ,{" "}
              <span className="text-white font-medium">
                Full Stack Developer
              </span>
              ,{" "}
              <span className="text-white font-medium">
                Data Analyst
              </span>
              , or{" "}
              <span className="text-white font-medium">
                Software Engineer
              </span>
              . The AI will tailor questions based on your uploaded resume and extracted skills.
            </p>
          </div>

        </div>
      )}
    </div>
  );
}

export default RoleForm;