import {
  Sparkles,
  BadgeCheck,
  TrendingUp,
  Lightbulb,
  Lock,
} from "lucide-react";

function AIInsights({ analysis }) {
  // ----------------------------
  // BEFORE RESUME UPLOAD
  // ----------------------------
  if (!analysis) {
    return (
      <div className="card p-7">

        <div className="flex items-center justify-between mb-6">

          <h2 className="text-2xl font-bold">
            AI Insights
          </h2>

          <Sparkles className="text-violet-400" />

        </div>

        <div className="flex flex-col items-center justify-center py-6">

          <div className="w-20 h-20 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 flex items-center justify-center mb-5">

            <Lock size={36} />

          </div>

          <h3 className="text-xl font-bold text-center">
            Unlock AI Insights
          </h3>

          <p className="text-gray-400 text-center mt-3 leading-7">
            Upload your resume to receive AI-powered analysis
            and personalized interview preparation.
          </p>

        </div>

        <div className="mt-8 space-y-4">

          <div className="flex items-center gap-4 rounded-xl bg-slate-900 p-4 border border-slate-700">

            <BadgeCheck className="text-green-400" />

            <span>
              ATS Compatibility Score
            </span>

          </div>

          <div className="flex items-center gap-4 rounded-xl bg-slate-900 p-4 border border-slate-700">

            <TrendingUp className="text-cyan-400" />

            <span>
              Resume Strength Analysis
            </span>

          </div>

          <div className="flex items-center gap-4 rounded-xl bg-slate-900 p-4 border border-slate-700">

            <Sparkles className="text-yellow-400" />

            <span>
              Missing Skills Detection
            </span>

          </div>

          <div className="flex items-center gap-4 rounded-xl bg-slate-900 p-4 border border-slate-700">

            <Lightbulb className="text-violet-400" />

            <span>
              Personalized AI Suggestions
            </span>

          </div>

        </div>

      </div>
    );
  }

  // ----------------------------
  // AFTER RESUME UPLOAD
  // ----------------------------

  const atsScore = analysis.ats_score || 0;
  const strength = analysis.resume_strength || 0;

  return (
    <div className="card p-7">

      <div className="flex items-center justify-between mb-6">

        <h2 className="text-2xl font-bold">
          AI Insights
        </h2>

        <Sparkles className="text-violet-400" />

      </div>

      <div className="space-y-5">

        <div className="flex items-center justify-between bg-slate-900 rounded-2xl p-5 border border-slate-700">

          <div className="flex items-center gap-4">

            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center">
              <BadgeCheck size={24} />
            </div>

            <div>

              <h3 className="font-semibold text-white">
                ATS Score
              </h3>

              <p className="text-gray-400 text-sm">
                ATS Compatibility
              </p>

            </div>

          </div>

          <span className="text-xl font-bold">
            {atsScore}/100
          </span>

        </div>

        <div className="flex items-center justify-between bg-slate-900 rounded-2xl p-5 border border-slate-700">

          <div className="flex items-center gap-4">

            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center">
              <TrendingUp size={24} />
            </div>

            <div>

              <h3 className="font-semibold text-white">
                Resume Strength
              </h3>

              <p className="text-gray-400 text-sm">
                Overall Resume Quality
              </p>

            </div>

          </div>

          <span className="text-xl font-bold">
            {strength}/100
          </span>

        </div>

      </div>

      <div className="mt-7 rounded-2xl bg-gradient-to-r from-violet-600 to-blue-600 p-5">

        <div className="flex gap-4">

          <Lightbulb className="mt-1" />

          <div>

            <h3 className="font-bold">
              AI Recommendation
            </h3>

            <p className="text-sm mt-2 text-white/90 leading-6">
              {(analysis.suggestions || [])[0] ||
                "Your resume looks good. Continue improving your technical profile."}
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default AIInsights;