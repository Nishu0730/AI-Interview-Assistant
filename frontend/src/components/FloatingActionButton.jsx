import { Plus } from "lucide-react";

function FloatingActionButton() {
  return (
    <button
      className="
      fixed
      bottom-8
      right-8
      w-16
      h-16
      rounded-full
      bg-gradient-to-r
      from-violet-600
      to-blue-600
      shadow-xl
      shadow-violet-500/40
      flex
      items-center
      justify-center
      hover:scale-110
      transition
      z-50
      "
    >
      <Plus size={30} />
    </button>
  );
}

export default FloatingActionButton;