import { useState } from "react";
import { COLLECTIONS } from "./data";
import { cx, ClipImage, ArrowButton, SectionLabel } from "./utils";

export default function CollectionsSection() {
  const [hoveredId, setHoveredId] = useState(1);

  return (
    <section className="bg-white py-24 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-14 items-start">

        {/* Left: images + copy */}
        <div className="col-span-12 md:col-span-5">
          <SectionLabel>Our Collections</SectionLabel>
          <p className="text-xs text-gray-500 mt-6 mb-8 leading-relaxed max-w-xs">
            Dari klasik yang tak lekang waktu hingga statement piece yang berani — setiap koleksi TiiClothes dirancang dengan penuh niat dan kesadaran estetik.
          </p>
          <div className="relative space-y-2">
            <ClipImage
              src="https://images.unsplash.com/photo-1520975954732-35dd22299614?w=600&q=80"
              alt="Collection visual"
              className="w-full h-72"
            />
            <ClipImage
              src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80"
              alt="Collection visual 2"
              className="w-full h-52"
            />
          </div>
          <div className="flex items-center gap-3 mt-5">
            <span className="text-[#FF4D00] text-xs">✦</span>
            <p className="text-xs text-gray-400 italic">Bagian dari perjalanan mode lokal Yogyakarta.</p>
          </div>
        </div>

        {/* Right: collection list */}
        <div className="col-span-12 md:col-span-7 pt-4">
          <h2 className="text-4xl md:text-5xl font-black text-black leading-tight mb-10">
            Pilih<br />
            <span className="text-[#FF4D00]">Koleksi</span><br />
            Favoritmu
          </h2>

          {COLLECTIONS.map((col) => {
            const isHovered = hoveredId === col.id;
            return (
              <div
                key={col.id}
                onMouseEnter={() => setHoveredId(col.id)}
                className={cx(
                  "py-6 border-b transition-all duration-300 cursor-pointer",
                  isHovered ? "border-black" : "border-gray-100"
                )}
              >
                {isHovered && col.active ? (
                  /* Expanded view — NO button, just info */
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex-1">
                      <span className="text-[10px] tracking-widest text-[#FF4D00] uppercase font-bold">Featured ✦</span>
                      <h4 className="text-2xl font-black text-black mt-1 mb-2">{col.name}</h4>
                      <p className="text-sm text-gray-500 leading-relaxed">{col.desc}</p>
                    </div>
                    {col.image && (
                      <div
                        className="w-28 h-32 flex-shrink-0 overflow-hidden shadow-lg"
                        style={{ clipPath: "polygon(0 0, 100% 0, 100% 85%, 88% 100%, 0 100%)" }}
                      >
                        <img
                          src={col.image}
                          alt={col.name}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="flex items-center justify-between group">
                    <div className="flex items-center gap-4">
                      <span className="text-xs text-gray-200 font-mono">
                        {String(col.id).padStart(2, "0")}.
                      </span>
                      <h4 className={cx(
                        "font-black transition-all duration-300",
                        isHovered ? "text-2xl text-black" : "text-xl text-gray-700"
                      )}>
                        {col.name}
                      </h4>
                    </div>
                    <ArrowButton
                      direction="right"
                      size="sm"
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
