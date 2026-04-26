import { useState, useEffect } from "react";
import { cx } from "./utils";
import shopeeLogo from "../images/shopee_logo.png";
import tokopediaLogo from "../images/tokopedia_logo.png";

const NAV_ITEMS = [
  { name: "Home", href: "#home" },
  { name: "Categories", href: "#categories" },
  { name: "Lookbook", href: "#lookbook" },
  { name: "Service", href: "#service" }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 300);
  };

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
          "fixed inset-0 z-40 bg-black transition-all duration-500 flex flex-col justify-between px-10 md:px-20 py-16 md:py-24",
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex items-start justify-between mb-12">
          <p className="text-[10px] tracking-[0.3em] text-gray-500 uppercase">Yogyakarta Fashion House</p>
        </div>

        <div className="flex-1 flex flex-col justify-center">
          <ul className="space-y-0">
            {NAV_ITEMS.map((item, i) => (
              <li
                key={item.name}
                className="overflow-hidden"
              >
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={cx(
                    "block text-6xl md:text-8xl font-black text-white uppercase tracking-tighter hover:text-[#FF4D00] transition-all duration-300 leading-[0.9]",
                    menuOpen ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
                  )}
                  style={{ transition: `transform 0.5s ease ${i * 0.1}s, opacity 0.5s ease ${i * 0.1}s, color 0.3s` }}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-16">
            <p className="text-sm text-gray-400 max-w-md leading-relaxed">
              Timeless style. Modern edge.<br />
              Made for you.
            </p>
            <button className="mt-8 text-xs tracking-[0.2em] text-white uppercase border-b border-white pb-1 hover:text-[#FF4D00] hover:border-[#FF4D00] transition-colors inline-flex items-center gap-2">
              Explore Now
              <span>→</span>
            </button>
          </div>
        </div>

        <div className="flex items-end justify-between pt-12 border-t border-gray-800">
          <div>
            <p className="text-[10px] tracking-[0.2em] text-gray-600 uppercase mb-3">Find us on</p>
            <div className="flex items-center gap-4">
              <a href="#" className="flex items-center gap-2 text-xs text-gray-400 hover:text-white transition-colors">
                <img src={shopeeLogo} alt="Shopee" className="w-5 h-5 object-contain opacity-60 hover:opacity-100 transition-opacity" />
                Shopee
              </a>
              <a href="#" className="flex items-center gap-2 text-xs text-gray-400 hover:text-white transition-colors">
                <img src={tokopediaLogo} alt="Tokopedia" className="w-5 h-5 object-contain opacity-60 hover:opacity-100 transition-opacity" />
                Tokopedia
              </a>
              <a href="#" className="flex items-center gap-2 text-xs text-gray-400 hover:text-white transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-60 hover:opacity-100 transition-opacity">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
                Instagram
              </a>
            </div>
          </div>
          <p className="text-[10px] text-gray-600 tracking-wider">© 2026 TiiClothes</p>
        </div>
      </div>
    </>
  );
}
