import { TICKER_ITEMS } from "./data";

export default function Ticker({ dark = false }) {
  const bg = dark ? "bg-black border-gray-800" : "bg-white border-gray-200";
  const text = dark ? "text-white" : "text-black";

  return (
    <div className={`border-t border-b border-dashed ${bg} py-3 overflow-hidden`}>
      <div className="flex animate-[ticker_22s_linear_infinite] whitespace-nowrap">
        {[...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
          <span
            key={i}
            className={`mx-8 text-[10px] font-bold tracking-[0.25em] ${text} uppercase flex items-center gap-3`}
          >
            {item}
            <span className="text-[#FF4D00] text-xs font-black">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
