import { useState } from "react";
import { TESTIMONIALS } from "./data";
import { ArrowButton, SectionLabel } from "./utils";

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const total = TESTIMONIALS.length;
  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);
  const t = TESTIMONIALS[current];

  return (
    <section className="bg-white py-24 px-8">
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <div className="flex items-center justify-between mb-16">
          <div>
            <SectionLabel>Testimonial Pelanggan</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-black text-black leading-tight mt-4">
              Kata Mereka<br />
              <span className="text-[#FF4D00]">Tentang Kami</span>
            </h2>
          </div>
          <div className="hidden md:flex items-baseline gap-2">
            <span className="text-6xl font-black text-black">{String(current + 1).padStart(2, "0")}</span>
            <span className="text-2xl text-gray-200">/ {String(total).padStart(2, "0")}</span>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-10 items-start">
          {/* Left: photo + identity */}
          <div className="col-span-12 md:col-span-4">
            <div
              className="w-full max-w-[240px] overflow-hidden shadow-xl"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 88%, 85% 100%, 0 100%)" }}
            >
              <img
                src={t.image}
                alt={t.name}
                className="w-full aspect-[3/4] object-cover object-top transition-all duration-700 hover:scale-105"
              />
            </div>
            <div className="mt-5 pl-1">
              <p className="font-black text-base text-black">{t.name}</p>
              <p className="text-xs text-gray-400 tracking-widest mt-0.5">{t.title}</p>
              {/* Stars */}
              <div className="flex items-center gap-1 mt-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#FF4D00">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
                <span className="text-xs text-gray-400 ml-1">{t.rating}.0 ({t.reviews} ulasan)</span>
              </div>
            </div>
          </div>

          {/* Right: quote */}
          <div className="col-span-12 md:col-span-8 flex flex-col justify-between h-full">
            {/* Large quote mark */}
            <div
              className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center text-3xl text-gray-200 mb-8 font-serif"
            >
              "
            </div>
            <blockquote className="text-2xl md:text-3xl font-light italic text-gray-800 leading-[1.4] tracking-normal flex-1">
              "{t.quote}"
            </blockquote>

            {/* Niche credibility row */}
            <div className="mt-10 pt-6 border-t border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#FF4D00]/10 flex items-center justify-center">
                  <span className="text-[#FF4D00] text-lg">✦</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-black tracking-widest uppercase">Verified Purchase</p>
                  <p className="text-[10px] text-gray-400">Pembelian terverifikasi melalui platform resmi</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <ArrowButton direction="left" onClick={prev} size="sm" />
                <ArrowButton direction="right" onClick={next} size="sm" />
              </div>
            </div>
          </div>
        </div>

        {/* Progress dots */}
        <div className="flex justify-center gap-2 mt-12">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1 rounded-full transition-all duration-300 ${
                i === current ? "w-10 bg-black" : "w-2 bg-gray-200"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
