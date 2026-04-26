import { useState, useEffect } from "react";
import { cx } from "./utils";

const NAV_ITEMS = ["Collections", "New Arrivals", "Categories", "About"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={cx(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-[0_1px_24px_rgba(0,0,0,0.06)] py-3"
            : "bg-transparent py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-10 h-10 flex flex-col items-center justify-center gap-[5px] group"
            aria-label="Menu"
          >
            <span className={cx("w-6 h-[1.5px] bg-black transition-all duration-300", menuOpen && "rotate-45 translate-y-[6.5px]")} />
            <span className={cx("w-6 h-[1.5px] bg-black transition-all duration-300", menuOpen && "opacity-0 scale-x-0")} />
            <span className={cx("w-4 h-[1.5px] bg-black transition-all duration-300", menuOpen && "-rotate-45 -translate-y-[6.5px] w-6")} />
          </button>

          <a href="#" className="flex flex-col items-center">
            <span className="font-black text-lg tracking-[0.35em] text-black uppercase leading-none">TiiClothes</span>
            <span className="text-[8px] tracking-[0.2em] text-gray-400 uppercase mt-0.5">Yogyakarta Fashion House</span>
          </a>

          <div className="flex items-center gap-4">
            <button className="text-black hover:text-[#FF4D00] transition-colors" aria-label="Search">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
              </svg>
            </button>
            <button className="text-black hover:text-[#FF4D00] transition-colors relative" aria-label="Cart">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              <span className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 bg-[#FF4D00] rounded-full text-[8px] text-white flex items-center justify-center font-bold">2</span>
            </button>
          </div>
        </div>
      </nav>

      <div
        className={cx(
          "fixed inset-0 z-40 bg-black transition-all duration-500 flex flex-col justify-between px-10 py-28",
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <ul className="space-y-2">
          {NAV_ITEMS.map((item, i) => (
            <li
              key={item}
              className="overflow-hidden"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <a
                href="#"
                onClick={() => setMenuOpen(false)}
                className={cx(
                  "block text-5xl md:text-7xl font-black text-white uppercase tracking-tight hover:text-[#FF4D00] transition-all duration-300 leading-tight",
                  menuOpen ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
                )}
                style={{ transition: `transform 0.4s ease ${i * 0.08}s, opacity 0.4s ease ${i * 0.08}s, color 0.2s` }}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs tracking-widest text-gray-500 mb-1">Find us on</p>
            <div className="flex gap-3">
              {["Shopee", "Tokopedia", "Instagram"].map((s) => (
                <a key={s} href="#" className="text-xs text-gray-400 hover:text-white transition-colors border border-gray-700 px-3 py-1 rounded-full">
                  {s}
                </a>
              ))}
            </div>
          </div>
          <p className="text-xs text-gray-600">© 2026 TiiClothes</p>
        </div>
      </div>
    </>
  );
}
