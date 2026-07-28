import { Loader2, Sparkles } from "lucide-react";

function Loading() {
  return (
    <div className="flex flex-col items-center justify-center py-12">

      <div className="relative">

        {/* Glow */}
        <div className="absolute inset-0 rounded-full bg-violet-500 blur-3xl opacity-30 animate-pulse"></div>

        {/* Spinner */}
        <Loader2
          size={70}
          className="relative text-violet-400 animate-spin"
        />

      </div>

      <h2 className="mt-6 flex items-center gap-2 text-2xl font-bold text-white">
        <Sparkles className="text-violet-400" />
        AI is thinking...
      </h2>

      <p className="mt-3 text-center text-gray-400 max-w-md leading-7">
        Please wait while Gemini AI analyzes your resume and prepares
        personalized interview questions based on your skills.
      </p>

      {/* Loading Dots */}
      <div className="flex gap-2 mt-6">
        <div className="w-3 h-3 rounded-full bg-violet-500 animate-bounce"></div>
        <div
          className="w-3 h-3 rounded-full bg-blue-500 animate-bounce"
          style={{ animationDelay: "0.15s" }}
        ></div>
        <div
          className="w-3 h-3 rounded-full bg-cyan-500 animate-bounce"
          style={{ animationDelay: "0.3s" }}
        ></div>
      </div>

    </div>
  );
}

export default Loading;