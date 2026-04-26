import { useState, useRef, useCallback } from "react";
import { GALLERY_ITEMS } from "./data";
import { cx } from "./utils";
import Ticker from "./Ticker";

export default function GallerySection() {
  const [active, setActive] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const scrollRef = useRef(null);
  const scrollTimeoutRef = useRef(null);

  const handleScroll = useCallback(() => {
    if (!scrollRef.current || isTransitioning) return;
    
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    scrollTimeoutRef.current = setTimeout(() => {
      const container = scrollRef.current;
      if (!container) return;
      
      const scrollLeft = container.scrollLeft;
      const containerWidth = container.offsetWidth;
      const center = scrollLeft + containerWidth / 2;

      const items = container.querySelectorAll(".gallery-item");
      let closestIndex = 0;
      let minDistance = Infinity;

      items.forEach((item, index) => {
        const itemCenter = item.offsetLeft + item.offsetWidth / 2;
        const distance = Math.abs(center - itemCenter);
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      });

      if (closestIndex !== active) {
        setActive(closestIndex);
      }
    }, 50);
  }, [active, isTransitioning]);

  const scrollToItem = useCallback((index) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setActive(index);
    
    const container = scrollRef.current;
    const target = container?.querySelectorAll(".gallery-item")[index];
    
    if (target && container) {
      target.scrollIntoView({ 
        behavior: "smooth", 
        inline: "center", 
        block: "nearest" 
      });
    }
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 700);
  }, [isTransitioning]);

  return (
    <section id="lookbook" className="bg-[#F8F7F4] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">

        <div className="flex flex-col items-center text-center mb-16">
          <div className="max-w-xl">
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-gray-400 mb-6 block">Lookbook 2026</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-[1.1]">
              ©TiiClothes — <br />
              <span className="text-[#FF4D00]">Jacket Momento</span>
            </h2>
            <p className="text-gray-500 text-base md:text-lg font-light leading-relaxed mt-6">
              A visual diary of urban exploration. Every stitch tells a story of identity and style.
            </p>
          </div>

          <div className="flex items-center gap-6 mt-10">
            <div className="flex gap-2">
              {GALLERY_ITEMS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollToItem(i)}
                  className={`h-1 transition-all duration-500 ease-out ${i === active ? 'w-10 bg-black' : 'w-2 bg-gray-200 hover:bg-gray-400'}`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
            <span className="text-xs font-bold text-gray-400">{String(active + 1).padStart(2, '0')} / {String(GALLERY_ITEMS.length).padStart(2, '0')}</span>
          </div>
        </div>

        <div className="relative group">
          <div className="relative" style={{ height: '600px' }}>
            <div
              ref={scrollRef}
              onScroll={handleScroll}
              className="flex gap-4 overflow-x-auto pb-16 pt-8 scrollbar-hide snap-x snap-mandatory px-[calc(50%-120px)] md:px-[calc(50%-140px)] scroll-smooth absolute inset-0"
            >
              {GALLERY_ITEMS.map((item, i) => (
                <div
                  key={item.id}
                  onClick={() => scrollToItem(i)}
                  className={cx(
                    "gallery-item flex-shrink-0 snap-center cursor-pointer transition-all ease-out",
                    active === i ? "w-[240px] md:w-[280px] duration-700" : "w-[160px] md:w-[200px] duration-500"
                  )}
                  style={{ willChange: active === i ? 'width, transform, opacity' : 'auto' }}
                >
                  <div
                    className={cx(
                      "relative aspect-[3/4.5] rounded-[40px] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] transition-all ease-out group/card",
                      active === i 
                        ? "scale-100 rotate-0 opacity-100 duration-700" 
                        : "scale-90 rotate-1 opacity-30 grayscale duration-500"
                    )}
                    style={{ willChange: active === i ? 'transform, opacity, filter' : 'auto' }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 z-10" />

                    <img
                      src={item.image}
                      alt="Lookbook"
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover/card:scale-125"
                    />

                    {active === i && (
                      <div 
                        className="absolute bottom-12 left-10 right-10 z-20 transition-all duration-500 ease-out"
                        style={{ 
                          animation: 'fadeInUp 0.6s ease-out forwards',
                          opacity: 0
                        }}
                      >
                        <style>{`
                          @keyframes fadeInUp {
                            from {
                              opacity: 0;
                              transform: translateY(20px);
                            }
                            to {
                              opacity: 1;
                              transform: translateY(0);
                            }
                          }
                        `}</style>
                        <div className="flex items-center gap-3 mb-4">
                          <div className="h-px w-8 bg-[#FF4D00]" />
                          <p className="text-[#FF4D00] text-[10px] font-bold tracking-[0.4em] uppercase">Archive Look</p>
                        </div>
                        <h3 className="text-white text-3xl font-bold leading-tight">Momentum<br />Series 0{i + 1}</h3>
                        <p className="text-white/50 text-xs mt-4 leading-relaxed font-light">Captured in the heart of Yogyakarta, 2026.</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex justify-center md:justify-start">
            <p className="text-[10px] font-bold tracking-[0.2em] text-gray-300 uppercase">
              Drag or use scroll to explore archive — Yogyakarta, ID
            </p>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <Ticker />
      </div>
    </section>
  );
}
