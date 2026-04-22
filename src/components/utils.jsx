// ─── SHARED UTILITIES & BASE COMPONENTS ─────────────────────────────────────

export const cx = (...classes) => classes.filter(Boolean).join(" ");

export function OrangePlus({ size = 24, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="#FF4D00">
      <path d="M11 3h2v8h8v2h-8v8h-2v-8H3v-2h8V3z" />
    </svg>
  );
}

export function ClipImage({ src, alt, className = "", style = {} }) {
  return (
    <div
      className={cx("overflow-hidden relative group", className)}
      style={{ clipPath: "polygon(0 0, 100% 0, 100% 80%, 88% 100%, 0 100%)", ...style }}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
      />
    </div>
  );
}

export function ArrowButton({ direction = "right", onClick, size = "md", className = "" }) {
  const s = size === "sm" ? "w-8 h-8 text-xs" : "w-10 h-10 text-sm";
  return (
    <button
      onClick={onClick}
      className={cx(
        s,
        "rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition-all duration-200",
        className
      )}
    >
      {direction === "left" ? "←" : "→"}
    </button>
  );
}

export function SectionLabel({ children }) {
  return (
    <span className="text-[10px] tracking-[0.25em] text-gray-400 uppercase font-medium border border-gray-200 px-3 py-1 rounded-full">
      {children}
    </span>
  );
}

export function DividerLine({ className = "" }) {
  return <div className={cx("border-t border-dashed border-gray-200", className)} />;
}
