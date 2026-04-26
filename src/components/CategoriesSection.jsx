import boomberImg from "../images/catalog/Boomber.png";
import varsityImg from "../images/catalog/Varsity.png";
import item1Img from "../images/catalog/Item1.png";
import woman1Img from "../images/catalog/woman1.png";
import woman2Img from "../images/catalog/woman2.png";
import woman3Img from "../images/catalog/woman4.png";

const CATEGORY_CARDS = [
  {
    step: "01",
    title: "Bomber Jacket",
    desc: "Jaket bomber klasik dengan desain timeless. Sempurna untuk gaya kasual yang tetap stylish di segala suasana.",
    image: boomberImg,
    label: "BOMBER"
  },
  {
    step: "02",
    title: "Varsity Jacket",
    desc: "Jaket varsity dengan sentuhan retro modern. Kombinasi warna yang bold untuk tampilan sporty yang iconic.",
    image: varsityImg,
    label: "VARSITY"
  },
  {
    step: "03",
    title: "Premium Collection",
    desc: "Koleksi eksklusif dengan material premium dan detail craftsmanship yang menonjol. Limited edition untuk style statement kamu.",
    image: item1Img,
    label: "PREMIUM"
  }
];

const WOMEN_CATEGORY_CARDS = [
  {
    step: "04",
    title: "Double Breasted Coat",
    desc: "Coat elegan dengan double breasted button yang sophisticated. Perfect untuk tampilan formal maupun semi-formal dengan sentuhan klasik.",
    image: woman1Img,
    label: "WOMEN"
  },
  {
    step: "05",
    title: "Oversized Trench",
    desc: "Trench coat oversized dengan warna hijau emerald yang bold. Material premium dengan detail belt untuk siluet yang flattering.",
    image: woman2Img,
    label: "WOMEN"
  },
  {
    step: "06",
    title: "Knit Cardigan",
    desc: "Cardigan rajut dengan tekstur cable knit yang cozy. Desain oversized yang comfortable untuk daily wear dengan style effortless.",
    image: woman3Img,
    label: "WOMEN"
  }
];

export default function CategoriesSection() {
  return (
    <section id="categories" className="bg-[#F4F3F0] py-24 px-8 overflow-hidden border-t border-gray-200/50">
      <div className="max-w-7xl mx-auto">

        <div className="mb-20 text-center flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black leading-[1.1] tracking-tight max-w-2xl">
            Temukan Gaya Sesuai <br /> Karakter Kamu
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {CATEGORY_CARDS.map((item) => (
            <div key={item.step} className="group bg-white rounded-3xl p-6 border border-gray-200 hover:border-gray-300 transition-all duration-500 shadow-sm hover:shadow-md">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-8 bg-gray-50 flex items-start justify-center pt-8">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="eager"
                  fetchpriority="high"
                  decoding="async"
                  className="w-[85%] h-auto object-contain transition-transform duration-700 group-hover:scale-110"
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {WOMEN_CATEGORY_CARDS.map((item) => (
            <div key={item.step} className="group bg-white rounded-3xl p-6 border border-gray-200 hover:border-gray-300 transition-all duration-500 shadow-sm hover:shadow-md">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-8 bg-gray-50 flex items-start justify-center pt-8">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className="w-[85%] h-auto object-contain transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-[#FF4D00]/10 backdrop-blur-sm text-[#FF4D00] text-[9px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full">
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
