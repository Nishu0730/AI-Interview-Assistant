import {
  Award,
  ShieldCheck,
  AlertTriangle,
  Lightbulb,
} from "lucide-react";

const ATSAnalysis = ({ analysis }) => {
  if (!analysis) return null;

  const atsScore = analysis.ats_score ?? 0;
  const resumeStrength = analysis.resume_strength ?? 0;

  const atsStatus =
    atsScore >= 90
      ? "Excellent ATS Compatibility"
      : atsScore >= 75
      ? "Good ATS Compatibility"
      : atsScore >= 60
      ? "Average ATS Compatibility"
      : "Needs Improvement";

  const strengthStatus =
    resumeStrength >= 90
      ? "Excellent Resume"
      : resumeStrength >= 75
      ? "Strong Resume"
      : resumeStrength >= 60
      ? "Average Resume"
      : "Needs Improvement";

  return (
    <div className="mt-8 rounded-3xl bg-slate-900 border border-violet-500/30 shadow-xl p-8">

      <h2 className="text-3xl font-bold text-white mb-8">
        📊 ATS Resume Analysis
      </h2>

      {/* Scores */}

      <div className="grid md:grid-cols-2 gap-6">

        <div className="rounded-2xl bg-slate-800 p-6 border border-green-500/20">

          <div className="flex items-center gap-3 mb-4">
            <Award className="text-green-400" />
            <h3 className="text-xl font-semibold text-white">
              ATS Score
            </h3>
          </div>

          <p className="text-5xl font-bold text-green-400">
            {atsScore}
            <span className="text-2xl text-gray-400"> /100</span>
          </p>

          <p className="mt-3 text-gray-300">
            {atsStatus}
          </p>

        </div>

        <div className="rounded-2xl bg-slate-800 p-6 border border-blue-500/20">

          <div className="flex items-center gap-3 mb-4">
            <ShieldCheck className="text-blue-400" />
            <h3 className="text-xl font-semibold text-white">
              Resume Strength
            </h3>
          </div>

          <p className="text-5xl font-bold text-blue-400">
            {resumeStrength}
            <span className="text-2xl text-gray-400"> /100</span>
          </p>

          <p className="mt-3 text-gray-300">
            {strengthStatus}
          </p>

        </div>

      </div>

      {/* Missing Skills */}

      <div className="mt-8 rounded-2xl bg-slate-800 p-6">

        <div className="flex items-center gap-3 mb-5">
          <AlertTriangle className="text-yellow-400" />
          <h3 className="text-xl font-semibold text-white">
            Missing Skills
          </h3>
        </div>

        <div className="flex flex-wrap gap-3">

          {(analysis.missing_skills || []).map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 rounded-full bg-yellow-500/20 text-yellow-300 border border-yellow-500/30"
            >
              {skill}
            </span>
          ))}

        </div>

      </div>

      {/* Suggestions */}

      <div className="mt-8 rounded-2xl bg-slate-800 p-6">

        <div className="flex items-center gap-3 mb-5">
          <Lightbulb className="text-violet-400" />
          <h3 className="text-xl font-semibold text-white">
            AI Suggestions
          </h3>
        </div>

        <ul className="space-y-3">

          {(analysis.suggestions || []).map((item, index) => (
            <li
              key={index}
              className="text-gray-300 flex gap-3"
            >
              <span className="text-violet-400 font-bold">✔</span>
              {item}
            </li>
          ))}

        </ul>

      </div>

    </div>
  );
};

export default ATSAnalysis;