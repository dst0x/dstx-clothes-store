import { useState } from "react";
import { CATEGORIES } from "./data";
import { cx, ClipImage, SectionLabel } from "./utils";

export default function CategoriesSection() {
  const [activeCategory, setActiveCategory] = useState("02");

  return (
    <section className="bg-[#F4F3F0] py-24 px-8">
      <div className="max-w-7xl mx-auto">

        {/* Top label */}
        <div className="flex items-center justify-between mb-12">
          <SectionLabel>Browse Categories</SectionLabel>
          <div className="h-px flex-1 mx-6 bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
          <span className="text-xs text-gray-400 tracking-widest">05 Categories</span>
        </div>

        <div className="grid grid-cols-12 gap-10 items-center">

          {/* Left description — no button */}
          <div className="col-span-12 md:col-span-3">
            <h2 className="text-4xl font-black text-black leading-tight mb-4">
              Temukan<br />
              <span className="text-[#FF4D00]">Gaya</span><br />
              Kamu
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed mb-8">
              Setiap koleksi membawa energi tersendiri — dari streetwear kasual hingga tampilan elegan yang penuh karakter.
            </p>

            {/* Feature list (no button) */}
            <div className="pt-6 border-t border-dashed border-gray-300">
              <p className="text-[10px] tracking-widest text-gray-400 uppercase mb-3">Keunggulan Kami</p>
              <ul className="space-y-2">
                {["Bahan premium pilihan", "Jahitan presisi tinggi", "Desain eksklusif lokal"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs text-gray-600">
                    <span className="text-[#FF4D00] text-xs">✦</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Center model image */}
          <div className="col-span-12 md:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm">
              <ClipImage
                src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=600&q=80"
                alt="Category model"
                className="w-full h-[500px]"
              />
              <div className="absolute top-6 left-4 bg-white px-3 py-2 shadow-lg">
                <p className="text-[9px] tracking-widest text-gray-500 uppercase">Featured</p>
                <p className="text-sm font-black text-black">Jacket 2026</p>
              </div>
            </div>
          </div>

          {/* Right category list */}
          <div className="col-span-12 md:col-span-4">
            <ul className="space-y-0.5">
              {CATEGORIES.map((cat) => {
                const isActive = cat.id === activeCategory;
                return (
                  <li key={cat.id}>
                    <button
                      onClick={() => setActiveCategory(cat.id)}
                      className="w-full text-left flex items-center gap-4 group py-3 border-b border-gray-200 hover:border-black transition-colors duration-200"
                    >
                      <span className="text-[10px] text-gray-300 font-mono tracking-widest group-hover:text-gray-400 transition-colors">
                        [{cat.id}]
                      </span>
                      <span className={cx(
                        "font-black transition-all duration-300 flex-1",
                        isActive ? "text-3xl text-black" : "text-xl text-gray-300 group-hover:text-gray-500"
                      )}>
                        {cat.name}
                      </span>
                      <span className={cx(
                        "text-xs transition-all duration-300",
                        isActive ? "text-[#FF4D00] font-bold" : "text-gray-300"
                      )}>
                        {cat.count}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
            <div className="mt-6 flex items-center gap-3">
              <span className="text-[10px] text-gray-300 tracking-widest">[CATEGORIES]</span>
              <div className="flex-1 border-t border-dashed border-gray-200" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
