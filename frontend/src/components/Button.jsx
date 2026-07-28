function Button({
  children,
  onClick,
  type = "button",
  className = "",
  disabled = false,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        px-6
        py-3
        rounded-xl
        font-semibold
        text-white
        bg-gradient-to-r
        from-violet-600
        to-blue-600
        hover:scale-105
        hover:shadow-xl
        hover:shadow-violet-500/30
        transition-all
        duration-300
        disabled:opacity-50
        disabled:cursor-not-allowed
        ${className}
      `}
    >
      {children}
    </button>
  );
}

export default Button;