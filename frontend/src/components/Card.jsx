function Card({
  children,
  className = "",
}) {
  return (
    <div
      className={`
      bg-white/5
      backdrop-blur-lg
      border
      border-white/10
      rounded-3xl
      shadow-lg
      p-6
      hover:border-violet-500/40
      transition-all
      duration-300
      ${className}
      `}
    >
      {children}
    </div>
  );
}

export default Card;