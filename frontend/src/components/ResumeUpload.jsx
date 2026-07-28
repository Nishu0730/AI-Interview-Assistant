import { useState } from "react";
import { UploadCloud, FileText, CheckCircle } from "lucide-react";
import { uploadResume } from "../services/api";

function ResumeUpload({ setSkills, setAnalysis }) {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [uploaded, setUploaded] = useState(false);

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a PDF file.");
      return;
    }

    setLoading(true);

    try {
      const data = await uploadResume(file);

      setSkills(data.skills || []);
      setAnalysis(data.analysis || null);

      setUploaded(true);
    } catch (error) {
      console.error(error);
      alert("Upload Failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 className="flex items-center gap-3 text-3xl font-bold mb-6">
        <UploadCloud className="text-violet-400" size={32} />
        Upload Resume
      </h2>

      <label
        htmlFor="resume-upload"
        className="flex flex-col items-center justify-center h-72 rounded-3xl border-2 border-dashed border-violet-500/40 bg-gradient-to-br from-slate-900 to-slate-800 hover:border-violet-400 transition-all duration-300 cursor-pointer"
      >
        <input
          id="resume-upload"
          type="file"
          accept=".pdf"
          className="hidden"
          onChange={(e) => {
            setFile(e.target.files[0]);
            setUploaded(false);
          }}
        />

        {file ? (
          <>
            <FileText
              size={70}
              className="text-violet-400 mb-4"
            />

            <h3 className="text-xl font-semibold text-white text-center px-4">
              {file.name}
            </h3>

            <p className="text-gray-400 mt-2">
              Ready to upload
            </p>
          </>
        ) : (
          <>
            <UploadCloud
              size={70}
              className="text-violet-400 mb-4"
            />

            <h3 className="text-xl font-semibold text-white">
              Click to Upload PDF
            </h3>

            <p className="text-gray-400 mt-2">
              Drag & Drop also supported
            </p>
          </>
        )}
      </label>

      <button
        onClick={handleUpload}
        disabled={loading}
        className="mt-8 w-full py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-blue-600 text-white text-lg font-bold shadow-lg shadow-violet-500/30 hover:scale-[1.02] hover:shadow-violet-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? "Uploading..." : "Upload & Extract Skills"}
      </button>

      {uploaded && (
        <div className="mt-6 flex items-center justify-center gap-2 text-green-400 font-medium">
          <CheckCircle size={22} />
          Resume uploaded successfully
        </div>
      )}
    </div>
  );
}

export default ResumeUpload;