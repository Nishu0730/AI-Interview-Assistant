import { useState } from "react";

import Sidebar from "../components/Sidebar";
import DashboardHeader from "../components/DashboardHeader";
import StatsCard from "../components/StatsCard";
import ResumeUpload from "../components/ResumeUpload";
import ATSAnalysis from "../components/ATSAnalysis";
import RoleForm from "../components/RoleForm";
import QuestionList from "../components/QuestionList";
import AIInsights from "../components/AIInsights";
import FloatingActionButton from "../components/FloatingActionButton";
import NotificationToast from "../components/NotificationToast";
import SettingsModal from "../components/SettingsModal";
import Footer from "../components/Footer";

import {
  BrainCircuit,
  FileCheck,
  Award,
  CircleCheckBig,
} from "lucide-react";

function Home() {
  const [skills, setSkills] = useState([]);
  const [analysis, setAnalysis] = useState(null);
  const [questions, setQuestions] = useState("");

  const [showToast, setShowToast] = useState(false);
  const [openSettings, setOpenSettings] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#050816] text-white">
      <Sidebar />

      <div className="flex-1 overflow-y-auto relative">
        {/* Background Glow */}

        <div className="fixed -top-52 -left-52 w-[450px] h-[450px] rounded-full bg-violet-700 blur-[180px] opacity-20 pointer-events-none"></div>

        <div className="fixed bottom-0 -right-44 w-[450px] h-[450px] rounded-full bg-cyan-700 blur-[180px] opacity-20 pointer-events-none"></div>

        {showToast && <NotificationToast />}

        <SettingsModal
          open={openSettings}
          onClose={() => setOpenSettings(false)}
        />

        <main className="relative z-10 px-8 py-8">
          <DashboardHeader />

          {/* Top Stats */}

          <div className="grid lg:grid-cols-4 gap-6 mt-8">
            <StatsCard
              title="Resume Uploaded"
              value={skills.length ? "Yes" : "No"}
              icon={<FileCheck className="text-white" size={28} />}
              color="from-green-500 to-emerald-600"
            />

            <StatsCard
              title="Skills Extracted"
              value={`${skills.length} Skills`}
              icon={<BrainCircuit className="text-white" size={28} />}
              color="from-violet-600 to-indigo-600"
            />

            <StatsCard
              title="ATS Score"
              value={analysis ? `${analysis.ats_score}/100` : "--"}
              icon={<Award className="text-white" size={28} />}
              color="from-yellow-500 to-orange-500"
            />

            <StatsCard
              title="Interview Ready"
              value={
                analysis
                  ? analysis.ats_score >= 75
                    ? "Ready"
                    : "Improve"
                  : "--"
              }
              icon={<CircleCheckBig className="text-white" size={28} />}
              color="from-cyan-600 to-blue-600"
            />
          </div>

          {/* Resume Upload + AI Insights */}

          <div className="grid xl:grid-cols-2 gap-8 mt-10">
            <div className="card p-7">
              <ResumeUpload
                setSkills={(skillsData) => {
                  setSkills(skillsData);

                  setShowToast(true);

                  setTimeout(() => {
                    setShowToast(false);
                  }, 3000);
                }}
                setAnalysis={setAnalysis}
              />
            </div>

            <AIInsights analysis={analysis} />
          </div>

          {/* ATS Analysis */}

          {analysis && (
            <div className="mt-8">
              <ATSAnalysis analysis={analysis} />
            </div>
          )}

          {/* AI Extracted Skills */}

          <div className="mt-8">
            <div className="card p-7">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">
                  AI Extracted Skills
                </h2>

                <span className="px-4 py-2 rounded-full bg-gradient-to-r from-violet-600 to-blue-600">
                  {skills.length}
                </span>
              </div>

              {skills.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-20">
                  <div className="text-7xl">📄</div>

                  <h2 className="text-2xl font-bold mt-5">
                    No Resume Uploaded
                  </h2>

                  <p className="text-gray-400 mt-3">
                    Upload your resume to extract AI-powered skills.
                  </p>
                </div>
              ) : (
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-5 py-3 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 font-medium shadow-lg hover:scale-105 transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Role Form + Interview Questions */}

          <div className="grid xl:grid-cols-2 gap-8 mt-8">
            <div className="card p-7">
              <RoleForm
                skills={skills}
                setQuestions={setQuestions}
              />
            </div>

            <div className="card p-7">
              <QuestionList questions={questions} />
            </div>
          </div>
        </main>

        <Footer />
      </div>

      <FloatingActionButton />
    </div>
  );
}

export default Home;