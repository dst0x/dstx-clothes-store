import { FEATURED_PRODUCTS } from "./data";
import { SectionLabel } from "./utils";
import Ticker from "./Ticker";

export default function FeaturedSection() {
  return (
    <section className="bg-white py-24 px-8 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2
            className="font-bold leading-[0.85] tracking-tighter text-black uppercase"
            style={{ fontSize: "clamp(24px, 4vw, 42px)" }}
          >
            EVERY MOMENT,
          </h2>
          <h2
            className="font-bold leading-[0.85] tracking-tighter uppercase"
            style={{ fontSize: "clamp(24px, 4vw, 42px)", color: "#FF4D00" }}
          >
            YOUR WAY
          </h2>

          <p className="text-xs tracking-[0.35em] text-gray-300 uppercase mt-6">
            Yogyakarta · Limited Edition
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURED_PRODUCTS.slice(0, 3).map((product, i) => (
            <article
              key={product.id}
              className="group cursor-pointer"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="relative overflow-hidden bg-[#F4F3F0] w-full aspect-[3/4]">
                <img
                  src={product.image}
                  alt={product.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                />

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-all duration-500" />

                <div className="absolute top-4 left-4 w-8 h-8 bg-white flex items-center justify-center">
                  <span className="font-black text-[10px] text-black tracking-wider">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400">
                  <span className="text-[9px] tracking-[0.25em] text-white uppercase font-medium">
                    Lihat Detail →
                  </span>
                </div>
              </div>

              <div className="mt-4 px-0.5">
                <p className="font-black text-[15px] text-black leading-snug tracking-tight">
                  {product.title}
                </p>
                <p className="text-[10px] text-gray-400 mt-1 tracking-wide italic">
                  {product.caption}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-24 -mx-8">
        <Ticker />
      </div>
    </section>
  );
}
