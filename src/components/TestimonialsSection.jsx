import { useState, useRef, useCallback } from "react";
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
    quote: "Sangat suka dengan konsep minimalisnya. Baju-bajunya sangat versatile, bisa dipakai untuk hangout santai maupun acara formal dengan styling yang tepat.",
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
    author: "Beatrice Angelica",
    role: "Entrepreneur",
    stats: [
      { label: "Fast Delivery", value: "24h" },
      { label: "Quality Check", value: "100%" }
    ],
    image: model3
  }
];

const N = TESTIMONIALS.length;

const STRIP = [
  TESTIMONIALS[N - 1],   // clone of last
  ...TESTIMONIALS,       // real items
  TESTIMONIALS[0],       // clone of first
];

export default function TestimonialsSection() {
  // stripPos: position in STRIP (1-based for real items)
  const [stripPos, setStripPos] = useState(1);
  const [withTransition, setWithTransition] = useState(true);

  // current dot = stripPos - 1, clamped to 0..N-1
  const dotIndex = Math.min(Math.max(stripPos - 1, 0), N - 1);

  const dragStartX = useRef(null);

  const slideTo = useCallback((pos) => {
    setWithTransition(true);
    setStripPos(pos);
  }, []);

  const next = useCallback(() => slideTo(stripPos + 1), [slideTo, stripPos]);
  const prev = useCallback(() => slideTo(stripPos - 1), [slideTo, stripPos]);

  // After CSS transition ends, silently teleport from clone to real item
  const onTransitionEnd = useCallback(() => {
    if (stripPos === N + 1) {
      // was on clone_first → jump to real first (pos=1) without animation
      setWithTransition(false);
      setStripPos(1);
    } else if (stripPos === 0) {
      // was on clone_last → jump to real last (pos=N) without animation
      setWithTransition(false);
      setStripPos(N);
    }
  }, [stripPos]);

  // Drag / swipe
  const onDragStart = (e) => {
    dragStartX.current = e.type.includes("mouse") ? e.pageX : e.touches[0].pageX;
  };
  const onDragEnd = (e) => {
    if (dragStartX.current === null) return;
    const x = e.type.includes("mouse") ? e.pageX : (e.changedTouches?.[0]?.pageX ?? dragStartX.current);
    const diff = x - dragStartX.current;
    if (Math.abs(diff) > 60) {
      if (diff < 0) next();
      else prev();
    }
    dragStartX.current = null;
  };

  return (
    <section className="bg-[#F4F3F0] py-24 px-8 overflow-hidden select-none">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
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

        {/* Carousel viewport */}
        <div
          className="overflow-hidden cursor-grab active:cursor-grabbing"
          style={{ touchAction: "pan-y" }}
          onMouseDown={onDragStart}
          onMouseUp={onDragEnd}
          onMouseLeave={(e) => { if (dragStartX.current !== null) onDragEnd(e); }}
          onTouchStart={onDragStart}
          onTouchEnd={onDragEnd}
        >
          {/* Clone strip */}
          <div
            className="flex"
            onTransitionEnd={onTransitionEnd}
            style={{
              transform: `translateX(${-stripPos * 100}%)`,
              transition: withTransition
                ? "transform 0.52s cubic-bezier(0.4, 0, 0.2, 1)"
                : "none",
              willChange: "transform",
            }}
          >
            {STRIP.map((item, i) => (
              <div key={i} className="w-full flex-shrink-0">
                <SlideCard item={item} />
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-12">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => slideTo(i + 1)}
              className={`h-1.5 rounded-full transition-all duration-500 ${i === dotIndex ? "w-12 bg-black" : "w-3 bg-gray-300 hover:bg-gray-400"}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

function SlideCard({ item }) {
  return (
    <div className="bg-white rounded-[40px] shadow-[0_40px_100px_rgba(0,0,0,0.03)] border border-gray-100/50 flex flex-col lg:flex-row overflow-hidden">

      {/* Left: quote + stats */}
      <div className="flex-1 p-10 md:p-16 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-gray-100/50">
        <div>
          <div className="flex items-center gap-2 mb-12">
            <div className="w-2 h-2 bg-[#FF4D00] rounded-full" />
            <span className="text-sm font-black tracking-[0.2em] uppercase text-black italic">TIICLOTHES</span>
          </div>
          <blockquote className="text-xl md:text-2xl font-medium text-gray-900 leading-[1.6] mb-12">
            "{item.quote}"
          </blockquote>
        </div>
        <div className="flex gap-12">
          {item.stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-black text-black mb-1">{stat.value}</p>
              <p className="text-[10px] tracking-widest text-gray-400 uppercase font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right: photo */}
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
              src={item.image}
              alt={item.author}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover rounded-full border-8 border-white shadow-2xl relative z-10"
            />
          </div>
        </div>
        <div className="text-center">
          <h4 className="text-lg font-bold text-black mb-1">{item.author}</h4>
          <p className="text-xs text-gray-400 tracking-wider font-light">{item.role}</p>
        </div>
      </div>

    </div>
  );
}
