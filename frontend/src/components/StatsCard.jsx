function StatsCard({
  title,
  value,
  icon,
  color = "from-violet-600 to-blue-600",
}) {
  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-slate-900/80
        backdrop-blur-xl
        p-6
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-violet-500/40
        hover:shadow-[0_0_40px_rgba(139,92,246,0.2)]
      "
    >
      {/* Background Glow */}
      <div
        className={`absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-r ${color} opacity-20 blur-3xl`}
      ></div>

      <div className="relative flex items-center justify-between">

        <div>

          <p className="text-gray-400 text-sm">
            {title}
          </p>

          <h2 className="text-4xl font-bold text-white mt-3">
            {value}
          </h2>

        </div>

        <div
          className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${color} flex items-center justify-center shadow-lg`}
        >
          {icon}
        </div>

      </div>

    </div>
  );
}

export default StatsCard;