import { FileSearch } from "lucide-react";

function EmptyState({
  title = "Nothing Here",
  subtitle = "No data available.",
}) {
  return (
    <div className="flex flex-col justify-center items-center py-16">

      <div className="w-24 h-24 rounded-full bg-slate-800 flex items-center justify-center">

        <FileSearch
          size={50}
          className="text-violet-400"
        />

      </div>

      <h2 className="text-2xl font-bold mt-6">
        {title}
      </h2>

      <p className="text-gray-400 mt-3 text-center">
        {subtitle}
      </p>

    </div>
  );
}

export default EmptyState;