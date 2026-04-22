import { useState, useEffect, useRef } from "react";

const CATEGORIES = [
  { id: "01", name: "Shirt", count: 174 },
  { id: "02", name: "Jacket", count: 361, active: true },
  { id: "03", name: "Jeans", count: 368 },
  { id: "04", name: "Outer", count: 117 },
  { id: "05", name: "Shoes", count: 78 },
];

const TESTIMONIALS = [
  {
    id: 1,
    name: "Emma Williams",
    title: "Fashion Stylist",
    quote:
      "Everything is absolutely perfect! From the fabric quality to the flawless fit every piece feels premium. This brand has completely transformed my wardrobe.",
    rating: 5,
    reviews: 49,
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=200&q=80",
  },
  {
    id: 2,
    name: "Marcus Chen",
    title: "Creative Director",
    quote:
      "TiiClothes has redefined what urban fashion means to me. The cuts are precise, the materials last, and every drop feels intentional. Genuinely impressive.",
    rating: 5,
    reviews: 37,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
  },
  {
    id: 3,
    name: "Sofia Reyes",
    title: "Content Creator",
    quote:
      "I've been wearing TiiClothes exclusively for six months. The quality speaks for itself — these pieces hold up and still look brand new every season.",
    rating: 5,
    reviews: 62,
    image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=200&q=80",
  },
];

const FEATURED_PRODUCTS = [
  {
    id: 1,
    title: "©International - going distance 2026",
    price: 120,
    discount: null,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&q=80",
    label: "Where Elegance Meets Sustainability Luxury Made Accessible",
  },
  {
    id: 2,
    title: "©International - just do it 2026",
    price: 220,
    discount: 45,
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=500&q=80",
    label: null,
  },
];

const GALLERY_ITEMS = [
  { id: 1, image: "https://images.unsplash.com/photo-1516826957135-700dedea698c?w=400&q=80", label: null },
  { id: 2, image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=400&q=80", label: null },
  { id: 3, image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&q=80", label: "[Wear the Moment]", active: true },
  { id: 4, image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&q=80", label: null },
  { id: 5, image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&q=80", label: null },
];

const COLLECTIONS = [
  {
    id: 1,
    name: "Statement Pieces 2025",
    desc: "Your go-to wardrobe staples, crafted for comfort and effortless style.",
    active: true,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=200&q=80",
  },
  { id: 2, name: "Everyday Essentials 2026", desc: null },
  { id: 3, name: "Timeless Classics 2026", desc: null },
  { id: 4, name: "Seasonal Collections 2025", desc: null },
];

const TICKER_ITEMS = [
  "STYLING", "CRAFTED STORIES", "PREMIUM MATERIALS", "PREMIUM FABRICS",
  "TIMELESS CUTS", "URBAN INFLUENCE", "SMART STYLING",
];

// ─── UTILS ────────────────────────────────────────────────────────────────────
const cx = (...classes) => classes.filter(Boolean).join(" ");

// ─── REUSABLE COMPONENTS ──────────────────────────────────────────────────────

function OrangePlus({ size = 24, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="#FF4D00">
      <path d="M11 3h2v8h8v2h-8v8h-2v-8H3v-2h8V3z" />
    </svg>
  );
}

function OrangeStar({ size = 28, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={cx("fill-[#FF4D00]", className)}>
      <path d="M12 2 L9 9 L2 9 L7.5 13.5 L5.5 21 L12 17 L18.5 21 L16.5 13.5 L22 9 L15 9 Z" />
    </svg>
  );
}

function ClipImage({ src, alt, className = "", style = {} }) {
  return (
    <div
      className={cx("overflow-hidden relative", className)}
      style={{
        clipPath: "polygon(0 0, 100% 0, 100% 80%, 88% 100%, 0 100%)",
        ...style,
      }}
    >
      <img src={src} alt={alt} className="w-full h-full object-cover object-top" />
    </div>
  );
}

function ArrowButton({ direction = "right", onClick, size = "md", className = "" }) {
  const s = size === "sm" ? "w-8 h-8 text-xs" : "w-10 h-10 text-sm";
  return (
    <button
      onClick={onClick}
      className={cx(
        s,
        "rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-200",
        className
      )}
    >
      {direction === "left" ? "←" : "→"}
    </button>
  );
}

// ─── TICKER ───────────────────────────────────────────────────────────────────
function Ticker() {
  return (
    <div className="border-t border-b border-dashed border-gray-300 py-3 overflow-hidden bg-white">
      <div className="flex animate-[ticker_20s_linear_infinite] whitespace-nowrap">
        {[...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
          <span key={i} className="mx-6 text-xs font-bold tracking-widest text-black uppercase flex items-center gap-3">
            {item}
            <span className="text-[#FF4D00] font-bold">+</span>
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── NAVBAR ───────────────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={cx(
        "fixed top-0 left-0 right-0 z-50 px-8 py-4 flex items-center justify-between transition-all duration-300",
        scrolled ? "bg-white/90 backdrop-blur shadow-sm" : "bg-transparent"
      )}
    >
      <button className="w-10 h-10 flex flex-col items-center justify-center gap-1.5">
        <span className="w-6 h-0.5 bg-black" />
        <span className="w-6 h-0.5 bg-black" />
        <span className="w-4 h-0.5 bg-black" />
      </button>

      <span className="font-black text-xl tracking-[0.3em] text-black uppercase">TiiClothes</span>

      <div className="flex items-center gap-5">
        {["search", "bag", "user"].map((icon) => (
          <button key={icon} className="text-black hover:text-[#FF4D00] transition-colors">
            {icon === "search" && (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
              </svg>
            )}
            {icon === "bag" && (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
            )}
            {icon === "user" && (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
              </svg>
            )}
          </button>
        ))}
      </div>
    </nav>
  );
}

// ─── HERO ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative min-h-screen bg-[#F2F2F0] flex items-center overflow-hidden">
      {/* Grid lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[12%] top-0 bottom-0 border-l border-dashed border-gray-300 opacity-60" />
        <div className="absolute right-[12%] top-0 bottom-0 border-r border-dashed border-gray-300 opacity-60" />
      </div>

      {/* Large background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="text-[18vw] font-black text-black/[0.03] tracking-tight select-none leading-none">
          TIICLOTHES
        </span>
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-8 pt-24 pb-12">
        {/* Top right tag */}
        <div className="absolute top-28 right-10 text-right">
          <p className="text-xs tracking-widest text-gray-500 font-medium leading-relaxed">
            //STYLED FOR<br />LIFE.
          </p>
        </div>

        {/* "//FASHION" tag */}
        <div className="absolute left-8 top-1/2 -translate-y-1/2 mt-20">
          <p className="text-xs tracking-widest font-medium text-gray-400">//FASHION</p>
        </div>

        {/* Flex layout for tighter centering */}
        <div className="flex items-center justify-center min-h-[85vh] relative px-4 mt-8">
          {/* Left headline */}
          <div className="z-10 -mr-10 text-right">
            <h1 className="text-[8vw] font-black leading-[0.82] tracking-tighter text-black uppercase">
              where<br />- style
            </h1>
          </div>

          {/* Center model image */}
          <div className="relative z-0">
            <div className="w-full max-w-2xl">
              <img
                src="./src/images/Velour-model.png"
                alt="Fashion model"
                className="w-full object-cover object-top"
                style={{ height: "85vh", maxHeight: "850px" }}
              />
            </div>
          </div>

          {/* Right headline */}
          <div className="z-10 -ml-10 text-left">
            <h1 className="text-[8vw] font-black leading-[0.82] tracking-tighter text-black uppercase">
              lives<br />- now
            </h1>
          </div>
        </div>

        {/* Bottom left text */}
        <div className="absolute bottom-20 left-8 max-w-xs">
          <p className="text-xs text-gray-600 leading-relaxed mb-6">
            Explore curated collections exclusive drops and everyday essentials all thoughtfully designed in one stylish shopping destination.
          </p>
          <p className="text-xs text-gray-500 font-medium">
            / New<br />Collection 2026
          </p>
        </div>

        {/* Bottom right stats */}
        <div className="absolute bottom-20 right-10 text-right">
          <div className="flex items-center gap-2 justify-end mb-4">
            <div className="flex -space-x-3">
              {[
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
              ].map((src, i) => (
                <img key={i} src={src} className="w-9 h-9 rounded-full border-2 border-white object-cover" alt="" />
              ))}
            </div>
            <div className="w-9 h-9 rounded-full bg-[#FF4D00] flex items-center justify-center text-white text-lg font-bold">+</div>
          </div>
          <OrangePlus size={28} className="ml-auto mb-4" />
          <p className="text-3xl font-black text-black">280K</p>
          <p className="text-xs tracking-widest text-gray-500 uppercase">People We Inspire</p>
        </div>
      </div>
    </section>
  );
}

// ─── FEATURED PRODUCTS ────────────────────────────────────────────────────────
function FeaturedSection() {
  return (
    <section className="bg-white py-20 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-5xl md:text-6xl font-black text-black leading-tight">
            All - about<br />moments ©26
          </h2>
          <OrangePlus size={32} className="mt-4" />
        </div>

        <div className="grid grid-cols-12 gap-6 items-start">
          {/* Left product */}
          <div className="col-span-12 md:col-span-5">
            <div className="relative">
              <OrangePlus size={20} className="absolute -top-3 left-3 z-10" />
              <ClipImage
                src={FEATURED_PRODUCTS[0].image}
                alt={FEATURED_PRODUCTS[0].title}
                className="w-full h-[520px]"
              />
            </div>
            <p className="mt-3 text-xs text-gray-500">{FEATURED_PRODUCTS[0].title}</p>
          </div>

          {/* Center learn more */}
          <div className="col-span-12 md:col-span-2 flex flex-col items-center justify-center gap-6 pt-12">
            <div className="flex gap-1.5">
              <div className="w-2 h-2 rounded-full bg-[#FF4D00]" />
              <div className="w-2 h-2 rounded-full bg-gray-300" />
            </div>
            <button className="border border-black text-black text-xs font-semibold px-4 py-2 rounded-full flex items-center gap-2 hover:bg-black hover:text-white transition-colors">
              LEARN MORE →
            </button>
          </div>

          {/* Right column */}
          <div className="col-span-12 md:col-span-5 flex flex-col gap-4">
            {/* Small product top-right */}
            <div className="flex justify-between items-start">
              <div />
              <div>
                <ClipImage
                  src="https://images.unsplash.com/photo-1516826957135-700dedea698c?w=300&q=80"
                  alt="Product"
                  className="w-28 h-28"
                />
                <p className="text-2xl font-black text-black mt-2 text-right">($120)</p>
              </div>
            </div>

            <div>
              <p className="text-xs text-gray-500 leading-relaxed mb-3">{FEATURED_PRODUCTS[0].label}</p>
              <ClipImage
                src={FEATURED_PRODUCTS[1].image}
                alt={FEATURED_PRODUCTS[1].title}
                className="w-full h-64"
              />
              <div className="flex justify-between items-end mt-3">
                <p className="text-xs text-gray-500">{FEATURED_PRODUCTS[1].title}</p>
                <p className="text-2xl font-black text-black">(45%)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── CATEGORIES ───────────────────────────────────────────────────────────────
function CategoriesSection() {
  const [activeCategory, setActiveCategory] = useState("02");

  return (
    <section className="bg-white py-20 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8 items-center">
        {/* Left text */}
        <div className="col-span-12 md:col-span-3">
          <p className="text-sm text-gray-500 leading-relaxed mb-8">
            Every piece carries rhythm beyond clothing it's motion and meaning where street energy meets
          </p>
          <button className="border border-black text-black text-xs font-semibold px-5 py-2.5 rounded-full flex items-center gap-2 hover:bg-black hover:text-white transition-colors">
            SEE PRODUCT →
          </button>
        </div>

        {/* Center model */}
        <div className="col-span-12 md:col-span-5 flex justify-center">
          <ClipImage
            src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=600&q=80"
            alt="Category model"
            className="w-full max-w-sm h-[480px]"
          />
        </div>

        {/* Right categories */}
        <div className="col-span-12 md:col-span-4">
          <ul className="space-y-1">
            {CATEGORIES.map((cat) => {
              const isActive = cat.id === activeCategory;
              return (
                <li key={cat.id}>
                  <button
                    onClick={() => setActiveCategory(cat.id)}
                    className="w-full text-left flex items-baseline gap-3 group py-1"
                  >
                    <span className="text-xs text-gray-400 font-mono">[{cat.id}]</span>
                    <span
                      className={cx(
                        "font-black transition-all duration-200",
                        isActive
                          ? "text-4xl text-black"
                          : "text-2xl text-gray-300 group-hover:text-gray-500"
                      )}
                    >
                      {cat.name}{" "}
                      <span className={isActive ? "text-4xl" : "text-2xl"}>({cat.count})</span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
          <div className="mt-8 flex items-center gap-3">
            <span className="text-xs text-gray-400 tracking-widest">[CATEGORIES]</span>
            <div className="flex-1 border-t border-dashed border-gray-300" />
          </div>
        </div>
      </div>

      {/* Ticker */}
      <div className="mt-16 -mx-8">
        <Ticker />
      </div>
    </section>
  );
}

// ─── TESTIMONIALS ─────────────────────────────────────────────────────────────
function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const total = TESTIMONIALS.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  const t = TESTIMONIALS[current];

  return (
    <section className="bg-[#F2F2F0] py-20 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header row */}
        <div className="flex items-start justify-between mb-12">
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-black text-black">
              {String(current + 1).padStart(2, "0")}
            </span>
            <span className="text-xl text-gray-400">/{total}</span>
          </div>
          <span className="text-xs tracking-widest text-gray-400">[Testimonial]</span>
          <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-xl text-gray-400">
            "
          </div>
        </div>

        <div className="grid grid-cols-12 gap-8 items-center">
          {/* Left: name + photo */}
          <div className="col-span-12 md:col-span-4">
            <div className="mb-6">
              <p className="font-bold text-sm text-black">[{t.name}]</p>
              <p className="text-xs text-gray-500">{t.title}</p>
            </div>
            <div
              className="w-56 h-72 overflow-hidden shadow-2xl"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 88%, 85% 100%, 0 100%)" }}
            >
              <img src={t.image} alt={t.name} className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-110" />
            </div>
          </div>

          {/* Center: quote */}
          <div className="col-span-12 md:col-span-8">
            <blockquote className="text-3xl md:text-4xl font-black text-black leading-tight mb-8">
              {t.quote}
            </blockquote>
            <div className="flex items-center gap-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} width="22" height="22" viewBox="0 0 24 24" fill="#FF4D00">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
              <span className="text-sm text-gray-500 ml-2">{t.rating}.0 ({t.reviews} Reviews)</span>
            </div>
          </div>
        </div>

        {/* Navigation row */}
        <div className="flex items-center justify-between mt-12 pt-6 border-t border-gray-200">
          <ArrowButton direction="left" onClick={prev} />
          <div className="flex items-center gap-3">
            <span className="text-xs text-gray-500">See What Our Customers Are Saying</span>
            <span className="text-xl text-gray-400">"</span>
          </div>
          <ArrowButton direction="right" onClick={next} />
        </div>
      </div>
    </section>
  );
}

// ─── GALLERY ──────────────────────────────────────────────────────────────────
function GallerySection() {
  const [active, setActive] = useState(2);

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-8 mb-8 flex items-end justify-between">
        <div>
          <h3 className="text-3xl font-black text-black">
            ©tiiclothes -<br />jacket momento
          </h3>
        </div>
        <div className="flex items-center gap-6">
          <span className="text-sm text-gray-400">2026</span>
          <div />
          <div className="flex items-center gap-3">
            <span className="text-xs tracking-widest text-gray-400">[Other]</span>
            <ArrowButton direction="left" onClick={() => setActive((a) => Math.max(0, a - 1))} />
            <ArrowButton direction="right" onClick={() => setActive((a) => Math.min(GALLERY_ITEMS.length - 1, a + 1))} />
          </div>
        </div>
      </div>

      {/* Scrollable gallery */}
      <div className="flex gap-3 px-8 overflow-x-auto pb-4 scrollbar-hide">
        {GALLERY_ITEMS.map((item, i) => {
          const isActive = i === active;
          return (
            <div
              key={item.id}
              onClick={() => setActive(i)}
              className={cx(
                "flex-shrink-0 cursor-pointer transition-all duration-300 overflow-hidden",
                isActive ? "w-72 opacity-100" : "w-44 opacity-60 hover:opacity-80"
              )}
              style={{ height: "380px" }}
            >
              <img src={item.image} alt="Gallery" className="w-full h-full object-cover" />
              {item.label && (
                <p className="text-xs text-gray-500 mt-2 text-center">{item.label}</p>
              )}
            </div>
          );
        })}
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {GALLERY_ITEMS.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={cx(
              "h-1.5 rounded-full transition-all duration-200",
              i === active ? "w-8 bg-black" : "w-2 bg-gray-300"
            )}
          />
        ))}
      </div>

      {/* Ticker */}
      <div className="mt-10">
        <Ticker />
      </div>
    </section>
  );
}

// ─── COLLECTIONS ─────────────────────────────────────────────────────────────
function CollectionsSection() {
  const [hoveredId, setHoveredId] = useState(1);

  return (
    <section className="bg-white py-20 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-12 items-start">
        {/* Left image */}
        <div className="col-span-12 md:col-span-5">
          <p className="text-xs text-gray-500 text-center mb-6 max-w-xs mx-auto">
            From enduring classics to daring statement pieces, our collections are crafted with intention.
          </p>
          <div className="relative">
            <ClipImage
              src="https://images.unsplash.com/photo-1520975954732-35dd22299614?w=600&q=80"
              alt="Collection"
              className="w-full h-72"
            />
            <ClipImage
              src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80"
              alt="Collection 2"
              className="w-full h-56 mt-2"
            />
          </div>
          <p className="text-xs text-gray-400 mt-4">Being Part Of Our journey.</p>
        </div>

        {/* Right collections list */}
        <div className="col-span-12 md:col-span-7">
          {COLLECTIONS.map((col) => {
            const isHovered = hoveredId === col.id;
            return (
              <div
                key={col.id}
                onMouseEnter={() => setHoveredId(col.id)}
                className={cx(
                  "py-5 border-b border-gray-200 cursor-pointer transition-all duration-200",
                  isHovered ? "border-black" : ""
                )}
              >
                {isHovered && col.active ? (
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex-1">
                      <h4 className="text-2xl font-black text-black mb-2">{col.name}</h4>
                      <p className="text-sm text-gray-500 mb-4">{col.desc}</p>
                      <button className="border border-black text-xs font-semibold px-4 py-2 rounded-full flex items-center gap-2 hover:bg-black hover:text-white transition-colors">
                        GET STARTED →
                      </button>
                    </div>
                    {col.image && (
                      <div
                        className="w-24 h-28 flex-shrink-0 overflow-hidden"
                        style={{ clipPath: "polygon(0 0, 100% 0, 100% 85%, 88% 100%, 0 100%)" }}
                      >
                        <img src={col.image} alt={col.name} className="w-full h-full object-cover" />
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="flex items-center justify-between">
                    <h4 className={cx("font-black transition-all duration-200", isHovered ? "text-2xl text-black" : "text-xl text-gray-800")}>
                      {col.name}
                    </h4>
                    <ArrowButton direction="right" size="sm" />
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

// ─── FOOTER ───────────────────────────────────────────────────────────────────
function Footer() {
  const [email, setEmail] = useState("");

  const NAV_LINKS = {
    MENU: ["About", "Industries", "Product", "Categories"],
    SHOP: ["Jacket", "Totebag", "Hat", "Blouse"],
    CART: ["Blog", "Contact", "Terms", "Tutorials"],
  };

  return (
    <footer className="bg-black text-white pt-16 pb-8 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-8 mb-16">
          {/* Left */}
          <div className="col-span-12 md:col-span-5">
            <p className="text-xs tracking-widest text-gray-400 mb-4 uppercase">Contact Us</p>
            <h3 className="text-4xl md:text-5xl font-black leading-tight mb-8">
              Fast Selling Urban<br />__Fashion Collection
            </h3>
            <div className="relative border-b border-gray-700 pb-4 flex items-center justify-between">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Send email to us"
                className="bg-transparent text-sm text-gray-400 placeholder-gray-600 outline-none flex-1"
              />
              <button className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:border-white hover:text-white transition-colors text-gray-400">
                →
              </button>
            </div>

            <div className="mt-10">
              <p className="text-xs text-gray-500 mb-4">Follow Us</p>
              <div className="flex gap-3">
                {[
                  { label: "f", name: "Facebook" },
                  { label: "in", name: "Instagram" },
                  { label: "x", name: "Twitter/X" },
                  { label: "▶", name: "YouTube" },
                ].map(({ label, name }) => (
                  <button
                    key={name}
                    aria-label={name}
                    className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-xs text-gray-400 hover:border-white hover:text-white transition-colors"
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Spacer */}
          <div className="col-span-12 md:col-span-1" />

          {/* Contact info */}
          <div className="col-span-12 md:col-span-3">
            <div className="mb-8">
              <p className="text-xs tracking-widest text-gray-500 mb-2">LOCATION</p>
              <p className="text-sm text-gray-300">5567 Washington Ave,<br />America, 32289</p>
            </div>
            <div>
              <p className="text-xs tracking-widest text-gray-500 mb-2">EMAIL</p>
              <p className="text-sm text-gray-300">hello@orbix.studio</p>
            </div>
          </div>

          <div className="col-span-12 md:col-span-3">
            <div className="mb-8">
              <p className="text-xs tracking-widest text-gray-500 mb-2">CALL US</p>
              <p className="text-sm text-gray-300">+016 76234396</p>
            </div>
            <div>
              <p className="text-xs tracking-widest text-gray-500 mb-2">OPEN TIME</p>
              <p className="text-sm text-gray-300">08.00 - 11.00 pm</p>
            </div>
          </div>
        </div>

        {/* Nav links */}
        <div className="grid grid-cols-3 gap-8 mb-12 border-t border-gray-800 pt-10">
          {Object.entries(NAV_LINKS).map(([section, links]) => (
            <div key={section}>
              <p className="text-xs tracking-widest text-gray-500 mb-4">{section}</p>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex gap-6">
            <a href="#" className="text-xs text-gray-500 hover:text-white transition-colors">Terms & Conditions</a>
            <a href="#" className="text-xs text-gray-500 hover:text-white transition-colors">Privacy Policy</a>
          </div>
          <p className="text-xs text-gray-600">© 2026 TiiClothes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

// ─── APP ──────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div className="font-sans antialiased bg-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,400;0,700;0,900;1,900&family=Barlow+Condensed:wght@400;700;900&display=swap');

        * { font-family: 'Barlow', sans-serif; }
        h1, h2, h3, h4 { font-family: 'Barlow Condensed', sans-serif; }

        @keyframes ticker {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }

        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <Navbar />
      <Hero />
      <FeaturedSection />
      <CategoriesSection />
      <TestimonialsSection />
      <GallerySection />
      <CollectionsSection />
      <Footer />
    </div>
  );
}
