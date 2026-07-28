import { Bot, Heart } from "lucide-react";

function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 bg-black/30 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Left Section */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-violet-600 to-blue-600 flex items-center justify-center shadow-lg shadow-violet-500/30">
            <Bot className="text-white" size={24} />
          </div>

          <div>
            <h3 className="text-lg font-bold text-white">
              AI Interview Assistant
            </h3>

            <p className="text-sm text-gray-400">
              Powered by FastAPI • Gemini AI • RAG
            </p>
          </div>
        </div>

        {/* Center Section */}
        <div className="text-center">
          <p className="flex items-center gap-2 text-gray-400 text-sm">
            Made with
            <Heart
              size={16}
              className="text-red-500 fill-red-500"
            />
            using React & FastAPI
          </p>
        </div>

        {/* Right Section */}
        <div className="text-sm text-gray-500">
          © {new Date().getFullYear()} AI Interview Assistant
        </div>

      </div>
    </footer>
  );
}

export default Footer;