import {
  Bell,
  Search,
  Calendar,
  User,
} from "lucide-react";

function DashboardHeader() {
  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-10">

      {/* Left */}

      <div>

        <h1 className="text-4xl font-bold text-white">
          Welcome 👋
        </h1>

        <p className="text-gray-400 mt-2">
          AI Interview Assistant Dashboard
        </p>

        <div className="flex items-center gap-2 mt-3 text-gray-500">

          <Calendar size={16} />

          <span>{today}</span>

        </div>

      </div>

      {/* Right */}

      <div className="flex items-center gap-4">

        {/* Search */}

        <div className="relative">

          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            placeholder="Search..."
            className="w-72 pl-11 pr-4 py-3 rounded-2xl bg-slate-900 border border-slate-700 text-white placeholder-gray-500 focus:outline-none focus:border-violet-500"
          />

        </div>

        {/* Notification */}

        <button className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center hover:border-violet-500 transition">

          <Bell className="text-white" />

        </button>

        {/* User */}

        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 flex items-center justify-center">

          <User className="text-white" />

        </div>

      </div>

    </div>
  );
}

export default DashboardHeader;