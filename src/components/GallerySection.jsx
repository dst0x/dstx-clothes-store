import { useState } from "react";
import { GALLERY_ITEMS } from "./data";
import { cx, ArrowButton, SectionLabel } from "./utils";
import Ticker from "./Ticker";

export default function GallerySection() {
  const [active, setActive] = useState(2);

  return (
    <section className="bg-[#F4F3F0] py-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-8 mb-10 flex flex-col items-center text-center">
        <SectionLabel>Lookbook 2026</SectionLabel>
        <h2 className="text-4xl md:text-5xl font-black text-black leading-tight mt-4">
          ©TiiClothes —<br />
          <span className="text-[#FF4D00]">Jacket Momento</span>
        </h2>
        <p className="text-sm text-gray-400 mt-3 max-w-sm leading-relaxed">
          Setiap frame adalah cerita. Setiap gaya adalah identitas. Dibuat khusus untuk Yogyakarta dan sekitarnya.
        </p>
        <div className="flex items-center gap-4 mt-6">
          <span className="text-xs tracking-widest text-gray-400">2026</span>
          <div className="w-px h-5 bg-gray-200" />
          <ArrowButton direction="left" onClick={() => setActive((a) => Math.max(0, a - 1))} />
          <ArrowButton direction="right" onClick={() => setActive((a) => Math.min(GALLERY_ITEMS.length - 1, a + 1))} />
        </div>
      </div>

      {/* Scrollable gallery */}
      <div className="flex justify-center gap-3 px-8 overflow-x-auto pb-2 scrollbar-hide">
        {GALLERY_ITEMS.map((item, i) => {
          const isActive = i === active;
          return (
            <div
              key={item.id}
              onClick={() => setActive(i)}
              className={cx(
                "flex-shrink-0 cursor-pointer transition-all duration-500 overflow-hidden relative group",
                isActive ? "w-80 opacity-100" : "w-48 opacity-50 hover:opacity-75"
              )}
              style={{ height: "420px" }}
            >
              <img
                src={item.image}
                alt="Gallery"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay on active */}
              {isActive && (
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                  <p className="text-white text-[10px] tracking-widest uppercase">
                    {item.label ?? "TiiClothes Collection"}
                  </p>
                </div>
              )}
              {/* Active indicator */}
              {isActive && (
                <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-[#FF4D00]" />
              )}
            </div>
          );
        })}
      </div>



      {/* Dots + count */}
      <div className="flex items-center justify-center gap-3 mt-8">
        {GALLERY_ITEMS.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={cx(
              "h-1 rounded-full transition-all duration-300",
              i === active ? "w-10 bg-black" : "w-2 bg-gray-300"
            )}
          />
        ))}
      </div>
      <p className="text-center text-[10px] tracking-widest text-gray-400 mt-3 uppercase">
        {active + 1} / {GALLERY_ITEMS.length} — Geser untuk melihat semua
      </p>

      {/* Ticker below */}
      <div className="mt-12">
        <Ticker />
      </div>
    </section>
  );
}
