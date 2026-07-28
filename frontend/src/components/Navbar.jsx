import { Bot } from "lucide-react";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        <div className="flex items-center gap-4">

          <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-violet-600 to-blue-600 flex items-center justify-center shadow-lg shadow-violet-500/40">
            <Bot size={30} className="text-white" />
          </div>

          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              AI Interview Assistant
            </h1>

            <p className="text-gray-400 text-sm mt-1">
              Resume Analysis • Skill Extraction • AI Interview Questions
            </p>
          </div>

        </div>

        <div className="hidden md:flex items-center gap-3">

          <div className="px-4 py-2 rounded-full bg-violet-600/20 border border-violet-500/30 text-violet-300 text-sm">
            React
          </div>

          <div className="px-4 py-2 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-300 text-sm">
            FastAPI
          </div>

          <div className="px-4 py-2 rounded-full bg-cyan-600/20 border border-cyan-500/30 text-cyan-300 text-sm">
            Gemini AI
          </div>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;