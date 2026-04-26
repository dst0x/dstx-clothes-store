import { SectionLabel } from "./utils";

const CATEGORY_CARDS = [
  {
    step: "01",
    title: "Outerwear Series",
    desc: "Jelajahi koleksi Jaket dan Hoodie dengan material premium yang tahan lama.",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&q=80",
    label: "JACKETS"
  },
  {
    step: "02",
    title: "Daily Essentials",
    desc: "Kemeja dan kaos dengan potongan modern untuk kenyamanan aktivitas harianmu.",
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=600&q=80",
    label: "SHIRTS"
  },
  {
    step: "03",
    title: "Accessories & Bottoms",
    desc: "Lengkapi gayamu dengan Totebag eksklusif dan Jeans berkualitas tinggi.",
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&q=80",
    label: "ACCESSORIES"
  }
];

export default function CategoriesSection() {
  return (
    <section className="bg-[#F4F3F0] py-24 px-8 overflow-hidden border-t border-gray-200/50">
      <div className="max-w-7xl mx-auto">

        <div className="mb-20 text-center flex flex-col items-center">
          <div className="inline-block bg-white text-[#FF4D00] text-[10px] font-bold tracking-[0.2em] uppercase px-5 py-2.5 rounded-full border border-gray-200 mb-8 shadow-sm">
            Browse Categories
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-black leading-[1.1] tracking-tight max-w-2xl">
            Temukan Gaya Sesuai <br /> Karakter Kamu
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {CATEGORY_CARDS.map((item) => (
            <div key={item.step} className="group bg-white rounded-3xl p-6 border border-gray-200 hover:border-gray-300 transition-all duration-500 shadow-sm hover:shadow-md">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-8 bg-gray-50">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-black/5 backdrop-blur-sm text-black text-[9px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full">
                  {item.label}
                </div>
              </div>

              <p className="text-[#FF4D00] text-[10px] font-bold tracking-[0.2em] uppercase mb-3">
                STEP {item.step}
              </p>
              <h3 className="text-black text-xl font-bold mb-4">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed font-light">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
