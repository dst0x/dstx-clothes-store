import { useState, useRef, useEffect, useCallback } from "react";
import { GALLERY_ITEMS } from "./data";
import Ticker from "./Ticker";

// easeOutExpo: fast start, silky landing — feels most natural for carousels
function easeOutExpo(t) {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

/**
 * Smoothly scrolls a container to targetLeft.
 * Returns a cancel function.
 * onFrame(progress) is called every RAF tick so callers can update DOM directly.
 * onComplete() is called when animation finishes naturally.
 */
function smoothScrollTo(container, targetLeft, duration, onFrame, onComplete) {
  // Freeze scroll-snap so browser doesn't override our animation
  const prevSnap = container.style.scrollSnapType;
  container.style.scrollSnapType = "none";

  const startLeft = container.scrollLeft;
  const distance = targetLeft - startLeft;
  const startTime = performance.now();
  let rafId = null;
  let cancelled = false;

  function restore() {
    container.style.scrollSnapType = prevSnap;
  }

  function step(now) {
    if (cancelled) return;
    const elapsed = now - startTime;
    const t = Math.min(elapsed / duration, 1);
    const eased = easeOutExpo(t);
    container.scrollLeft = startLeft + distance * eased;
    if (onFrame) onFrame(t);
    if (t < 1) {
      rafId = requestAnimationFrame(step);
    } else {
      restore();
      if (onComplete) onComplete();
    }
  }

  rafId = requestAnimationFrame(step);

  return () => {
    cancelled = true;
    if (rafId !== null) cancelAnimationFrame(rafId);
    restore();
  };
}

/** Apply blur + grayscale + opacity directly to a DOM item element — zero React re-render */
function applyItemStyle(el, isActive, blurPx) {
  if (!el) return;
  const inner = el.querySelector(".gallery-inner");
  if (!inner) return;
  if (isActive) {
    el.style.filter = "none";
    inner.style.opacity = "1";
    inner.style.filter = "none";
  } else {
    el.style.filter = blurPx > 0.5 ? `blur(${blurPx.toFixed(1)}px)` : "none";
    inner.style.opacity = "0.4";
    inner.style.filter = "grayscale(1)";
  }
}

/** Recompute and apply blur to all items based on current scroll position */
function updateItemStyles(container, activeIndex) {
  if (!container) return;
  const containerCenter = container.scrollLeft + container.offsetWidth / 2;
  const items = container.querySelectorAll(".gallery-item");
  items.forEach((item, i) => {
    const itemCenter = item.offsetLeft + item.offsetWidth / 2;
    const dist = Math.abs(containerCenter - itemCenter);
    const norm = Math.min(dist / 340, 1);
    const blurPx = norm * 5;
    applyItemStyle(item, i === activeIndex, blurPx);
  });
}

export default function GallerySection() {
  const [active, setActive] = useState(0);
  const activeRef = useRef(0); // shadow ref so RAF callbacks don't go stale
  const scrollRef = useRef(null);
  const scrollTimeoutRef = useRef(null);
  const cancelScrollRef = useRef(null);

  // On mount: apply initial styles without triggering any scroll
  useEffect(() => {
    updateItemStyles(scrollRef.current, 0);
  }, []);

  const scrollToItem = useCallback((index) => {
    // Cancel any running animation immediately
    if (cancelScrollRef.current) {
      cancelScrollRef.current();
      cancelScrollRef.current = null;
    }

    activeRef.current = index;
    setActive(index); // update dots/counter immediately on click

    const container = scrollRef.current;
    if (!container) return;

    const items = container.querySelectorAll(".gallery-item");
    const target = items[index];
    if (!target) return;

    const targetScrollLeft =
      target.offsetLeft - container.offsetWidth / 2 + target.offsetWidth / 2;

    cancelScrollRef.current = smoothScrollTo(
      container,
      targetScrollLeft,
      520,
      // onFrame: update blur every tick, fully outside React
      () => updateItemStyles(container, index),
      // onComplete
      () => {
        cancelScrollRef.current = null;
        updateItemStyles(container, index);
      }
    );
  }, []);

  const handleScroll = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;

    // Live blur update during manual drag — direct DOM, no setState
    updateItemStyles(container, activeRef.current);

    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    scrollTimeoutRef.current = setTimeout(() => {
      if (!container) return;
      const center = container.scrollLeft + container.offsetWidth / 2;
      const items = container.querySelectorAll(".gallery-item");
      let closest = 0;
      let minDist = Infinity;
      items.forEach((item, i) => {
        const d = Math.abs(center - (item.offsetLeft + item.offsetWidth / 2));
        if (d < minDist) { minDist = d; closest = i; }
      });
      if (closest !== activeRef.current) {
        activeRef.current = closest;
        setActive(closest);
        updateItemStyles(container, closest);
      }
    }, 80);
  }, []);

  return (
    <section id="lookbook" className="bg-[#F8F7F4] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">

        <div className="flex flex-col items-center text-center mb-16">
          <div className="max-w-xl">
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-gray-400 mb-6 block">
              Lookbook 2026
            </span>
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
                  className={`h-1 transition-all duration-500 ease-out ${
                    i === active ? "w-10 bg-black" : "w-2 bg-gray-200 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
            <span className="text-xs font-bold text-gray-400">
              {String(active + 1).padStart(2, "0")} / {String(GALLERY_ITEMS.length).padStart(2, "0")}
            </span>
          </div>
        </div>

        <div className="relative">
          <div className="relative" style={{ height: "600px" }}>
            {/* Left fade mask */}
            <div
              className="absolute left-0 top-0 bottom-0 z-10 pointer-events-none"
              style={{
                width: "180px",
                background: "linear-gradient(to right, #F8F7F4 15%, transparent 100%)",
              }}
            />
            {/* Right fade mask */}
            <div
              className="absolute right-0 top-0 bottom-0 z-10 pointer-events-none"
              style={{
                width: "180px",
                background: "linear-gradient(to left, #F8F7F4 15%, transparent 100%)",
              }}
            />

            <div
              ref={scrollRef}
              onScroll={handleScroll}
              className="flex gap-4 overflow-x-auto pb-16 pt-8 scrollbar-hide snap-x snap-proximity absolute inset-0"
              style={{
                scrollBehavior: "auto",
                paddingLeft: "calc(50% - 120px)",
                paddingRight: "calc(50% - 120px)",
                willChange: "scroll-position",
              }}
            >
              {GALLERY_ITEMS.map((item, i) => (
                <div
                  key={item.id}
                  onClick={() => scrollToItem(i)}
                  className="gallery-item flex-shrink-0 snap-center cursor-pointer w-[240px] md:w-[280px]"
                  style={{ willChange: "filter" }}
                >
                  {/* gallery-inner is the target for opacity/grayscale DOM updates */}
                  <div
                    className="gallery-inner relative aspect-[3/4.5] rounded-[40px] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] group/card"
                    style={{ transition: "opacity 0.35s ease, filter 0.35s ease" }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 z-10" />

                    <img
                      src={item.image}
                      alt="Lookbook"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover/card:scale-125"
                    />

                    {active === i && (
                      <div
                        className="absolute bottom-12 left-10 right-10 z-20"
                        style={{ animation: "fadeInUp 0.55s ease-out forwards", opacity: 0 }}
                      >
                        <style>{`
                          @keyframes fadeInUp {
                            from { opacity: 0; transform: translateY(18px); }
                            to   { opacity: 1; transform: translateY(0); }
                          }
                        `}</style>
                        <div className="flex items-center gap-3 mb-4">
                          <div className="h-px w-8 bg-[#FF4D00]" />
                          <p className="text-[#FF4D00] text-[10px] font-bold tracking-[0.4em] uppercase">
                            Archive Look
                          </p>
                        </div>
                        <h3 className="text-white text-3xl font-bold leading-tight">
                          Momentum<br />Series 0{i + 1}
                        </h3>
                        <p className="text-white/50 text-xs mt-4 leading-relaxed font-light">
                          Captured in the heart of Yogyakarta, 2026.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
