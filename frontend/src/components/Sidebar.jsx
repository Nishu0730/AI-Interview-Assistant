import { useState } from "react";
import {
  LayoutDashboard,
  FileText,
  BrainCircuit,
  Settings,
  Bot,
  ChevronLeft,
  ChevronRight,
  User,
} from "lucide-react";

function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [active, setActive] = useState("Dashboard");

  const menuItems = [
    {
      name: "Dashboard",
      icon: <LayoutDashboard size={22} />,
    },
    {
      name: "Resume",
      icon: <FileText size={22} />,
    },
    {
      name: "Questions",
      icon: <BrainCircuit size={22} />,
    },
    {
      name: "Settings",
      icon: <Settings size={22} />,
    },
  ];

  return (
    <aside
      className={`${
        collapsed ? "w-24" : "w-72"
      } transition-all duration-300 bg-slate-950 border-r border-white/10 flex flex-col`}
    >
      {/* Header */}
      <div className="p-6 border-b border-white/10 flex items-center justify-between">
        {!collapsed && (
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 flex items-center justify-center">
              <Bot className="text-white" size={26} />
            </div>

            <div>
              <h2 className="font-bold text-white text-lg">
                AI Interview
              </h2>

              <p className="text-gray-400 text-sm">
                Assistant
              </p>
            </div>
          </div>
        )}

        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-2 rounded-lg hover:bg-slate-800 transition"
        >
          {collapsed ? (
            <ChevronRight className="text-white" />
          ) : (
            <ChevronLeft className="text-white" />
          )}
        </button>
      </div>

      {/* Menu */}
      <div className="flex-1 p-4">

        <p
          className={`text-xs uppercase tracking-widest text-gray-500 mb-4 ${
            collapsed && "hidden"
          }`}
        >
          Navigation
        </p>

        <div className="space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => setActive(item.name)}
              className={`w-full flex items-center gap-4 px-4 py-4 rounded-2xl transition-all duration-300 ${
                active === item.name
                  ? "bg-gradient-to-r from-violet-600 to-blue-600 text-white shadow-lg shadow-violet-500/30"
                  : "text-gray-400 hover:bg-slate-800 hover:text-white"
              }`}
            >
              {item.icon}

              {!collapsed && (
                <span className="font-medium">
                  {item.name}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* User Card */}
      <div className="p-4 border-t border-white/10">

        <div className="rounded-2xl bg-slate-900 p-4 border border-slate-700">

          <div className="flex items-center gap-3">

            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 flex items-center justify-center">
              <User className="text-white" />
            </div>

            {!collapsed && (
              <div>
                <h3 className="font-semibold text-white">
                  Welcome
                </h3>

                <p className="text-gray-400 text-sm">
                  AI Dashboard
                </p>
              </div>
            )}

          </div>

        </div>

      </div>
    </aside>
  );
}

export default Sidebar;