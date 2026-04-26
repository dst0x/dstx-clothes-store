import { useState, useRef, useEffect } from "react";
import model1 from "../images/model1.jpg";
import model2 from "../images/model2.webp";
import model3 from "../images/model3.avif";

const TESTIMONIALS = [
  {
    id: 1,
    quote: "Koleksi TiiClothes selalu memberikan sentuhan premium yang berbeda. Kualitas bahan dan jahitannya benar-benar terasa lokal tapi berkelas internasional.",
    author: "Fauziah Rahma",
    role: "Fashion Enthusiast, Yogyakarta",
    stats: [
      { label: "Happy Customers", value: "280K+" },
      { label: "Local Drops", value: "15+" }
    ],
    image: model1
  },
  {
    id: 2,
    quote: "Sangat suka dengan konsep minimalisnya. Baju-bajunya sangat versatille, bisa dipakai untuk hangout santai maupun acara formal dengan styling yang tepat.",
    author: "Larasati Putri",
    role: "Content Creator",
    stats: [
      { label: "Style Variants", value: "40+" },
      { label: "Cities Reached", value: "25+" }
    ],
    image: model2
  },
  {
    id: 3,
    quote: "Pengiriman cepat dan packingnya sangat aman. Detail di setiap produknya menunjukkan dedikasi TiiClothes dalam menjaga kualitas UMKM Yogyakarta.",
    author: "Dimas Pratama",
    role: "Entrepreneur",
    stats: [
      { label: "Fast Delivery", value: "24h" },
      { label: "Quality Check", value: "100%" }
    ],
    image: model3
  }
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [dragStart, setDragStart] = useState(null);
  const [dragOffset, setDragOffset] = useState(0);
  const containerRef = useRef(null);

  const next = () => setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
  const prev = () => setCurrent((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  const handleStart = (e) => {
    const x = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX;
    setDragStart(x);
  };

  const handleMove = (e) => {
    if (dragStart === null) return;
    const x = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX;
    const diff = x - dragStart;
    setDragOffset(diff);
  };

  const handleEnd = () => {
    if (dragOffset > 100) prev();
    else if (dragOffset < -100) next();
    setDragStart(null);
    setDragOffset(0);
  };

  return (
    <section className="bg-[#F4F3F0] py-24 px-8 overflow-hidden select-none">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16 relative">
          <h2 className="text-4xl md:text-5xl font-bold text-black tracking-tight mb-4">
            Kisah Komunitas Kami
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-lg mx-auto leading-relaxed font-light">
            Cerita nyata dari mereka yang mengenali makna di setiap jahitan dan desain yang kami hadirkan.
          </p>

          <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 right-0 gap-3">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300"
            >
              ←
            </button>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300"
            >
              →
            </button>
          </div>
        </div>

        <div
          ref={containerRef}
          onMouseDown={handleStart}
          onMouseMove={handleMove}
          onMouseUp={handleEnd}
          onMouseLeave={handleEnd}
          onTouchStart={handleStart}
          onTouchMove={handleMove}
          onTouchEnd={handleEnd}
          className="cursor-grab active:cursor-grabbing transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(${dragOffset}px)`,
          }}
        >
          <div
            key={current}
            className="bg-white rounded-[40px] shadow-[0_40px_100px_rgba(0,0,0,0.03)] border border-gray-100/50 flex flex-col lg:flex-row overflow-hidden animate-in fade-in slide-in-from-right-12 duration-700"
          >

            <div className="flex-1 p-10 md:p-16 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-gray-100/50">
              <div>
                <div className="flex items-center gap-2 mb-12">
                  <div className="w-2 h-2 bg-[#FF4D00] rounded-full" />
                  <span className="text-sm font-black tracking-[0.2em] uppercase text-black italic">TIICLOTHES</span>
                </div>

                <blockquote className="text-xl md:text-2xl font-medium text-gray-900 leading-[1.6] mb-12">
                  "{TESTIMONIALS[current].quote}"
                </blockquote>
              </div>

              <div className="flex gap-12">
                {TESTIMONIALS[current].stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-3xl font-black text-black mb-1">{stat.value}</p>
                    <p className="text-[10px] tracking-widest text-gray-400 uppercase font-medium">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-1 p-10 md:p-16 bg-gray-50/50 flex flex-col items-center justify-center relative">
              <div className="relative w-full max-w-sm mb-10">
                <div className="absolute top-0 left-0 w-12 h-12 bg-white rounded-2xl shadow-lg flex items-center justify-center animate-bounce duration-[3000ms]">
                  <span className="text-xs">✦</span>
                </div>
                <div className="absolute top-1/4 right-0 bg-white px-4 py-2 rounded-xl shadow-lg flex items-center gap-2 border border-gray-100">
                  <div className="w-4 h-4 bg-[#FF4D00] rounded-full" />
                  <span className="text-[9px] font-bold tracking-widest uppercase">Verified</span>
                </div>

                <div className="relative w-48 h-48 md:w-56 md:h-56 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#FF4D00]/20 to-transparent rounded-full animate-pulse" />
                  <img
                    src={TESTIMONIALS[current].image}
                    alt={TESTIMONIALS[current].author}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover rounded-full border-8 border-white shadow-2xl relative z-10"
                  />
                </div>
              </div>

              <div className="text-center">
                <h4 className="text-lg font-bold text-black mb-1">{TESTIMONIALS[current].author}</h4>
                <p className="text-xs text-gray-400 tracking-wider font-light">{TESTIMONIALS[current].role}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-12">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ${i === current ? "w-12 bg-black" : "w-3 bg-gray-300 hover:bg-gray-400"
                }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
