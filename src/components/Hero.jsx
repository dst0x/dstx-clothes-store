import { OrangePlus } from "./utils";

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] bg-[#F4F3F0] flex items-center overflow-hidden">
      {/* Subtle grid lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[10%]  top-0 bottom-0 border-l border-dashed border-gray-300/50" />
        <div className="absolute right-[10%] top-0 bottom-0 border-r border-dashed border-gray-300/50" />
        <div className="absolute left-[50%]  top-0 bottom-0 border-l border-dashed border-gray-300/30" />
      </div>

      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span className="text-[20vw] font-black text-black/[0.025] tracking-tight select-none leading-none whitespace-nowrap">
          TIICLOTHES
        </span>
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-8 pt-24">

        {/* Top-right tag */}
        <div className="absolute top-28 right-10 text-right z-10">
          <span className="inline-block text-[9px] tracking-[0.3em] text-gray-400 uppercase border border-dashed border-gray-300 px-3 py-1 mb-2">
            Est. 2020 · Yogyakarta
          </span>
          <p className="text-xs tracking-widest text-gray-500 font-medium leading-relaxed mt-2">
            //STYLED FOR<br />LIFE.
          </p>
        </div>

        {/* Left side vertical label */}
        <div className="absolute left-5 top-1/2 -translate-y-1/2 z-10">
          <p
            className="text-[9px] tracking-[0.3em] font-semibold text-gray-400 uppercase"
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
          >
            //FASHION · YOGYAKARTA
          </p>
        </div>

        {/* Hero content */}
        <div className="flex items-center justify-center min-h-[75vh] relative pt-12">

          {/* Left headline */}
          <div className="z-10 -mr-24 text-right flex-shrink-0">
            <h1 className="text-[6.5vw] font-bold leading-[0.82] tracking-tighter text-black uppercase">
              YOUR<span className="text-[#FF4D00]"> -</span> <br />
              STYLE
            </h1>
            <p className="text-[10px] text-gray-400 tracking-widest mt-3 text-right pr-2">
              New Collection 2026
            </p>
          </div>

          {/* Model image — Using generated version based on user photo */}
          <div className="relative z-0 flex-shrink-0 flex items-center justify-center group">
            <img
              src="./src/images/korean.png"
              alt="Fashion model TiiClothes"
              className="object-contain object-bottom transition-transform duration-1000 group-hover:scale-[1.02]"
              style={{ height: "84vh", maxHeight: "800px", width: "auto" }}
            />
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 bg-black text-white text-[9px] tracking-[0.2em] uppercase px-6 py-2.5 whitespace-nowrap shadow-xl">
              Crafted in Yogyakarta ✦
            </div>
          </div>

          {/* Right headline */}
          <div className="z-10 -ml-24 text-left flex-shrink-0">
            <h1 className="text-[6.5vw] font-bold leading-[0.82] tracking-tighter text-black uppercase">
              YOUR<br /><span className="text-[#FF4D00]">- </span>RULES
            </h1>
            <p className="text-[10px] text-gray-400 tracking-widest mt-3 text-left pl-2">
              Premium · Lokal · Berkelas
            </p>
          </div>
        </div>

        {/* Bottom left description — White on mobile, Grey on desktop */}
        <div className="absolute bottom-12 md:bottom-20 left-4 md:left-8 max-w-[105px] md:max-w-[240px] z-10">
          <p className="text-[8px] md:text-xs text-gray-400 mb-4 leading-relaxed italic">
            Koleksi premium dari Yogyakarta. Dirancang dengan cermat, dibuat untuk gaya hidup modern yang dinamis.
          </p>
        </div>

        {/* Bottom right stats */}
        <div className="absolute bottom-20 right-10 text-right z-10">
          <div className="flex items-center gap-2 justify-end mb-3">
            <div className="flex -space-x-2">
              {[
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
                "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=100&q=80",
              ].map((src, i) => (
                <img key={i} src={src} className="w-8 h-8 rounded-full border-2 border-[#F4F3F0] object-cover" alt="" />
              ))}
            </div>
            <div className="w-8 h-8 rounded-full bg-[#FF4D00] flex items-center justify-center text-white text-sm font-bold">+</div>
          </div>
          <OrangePlus size={24} className="ml-auto mb-2" />
          <p className="text-3xl font-black text-black">280K</p>
          <p className="text-[10px] tracking-widest text-gray-500 uppercase">Pelanggan Setia</p>
        </div>
      </div>
    </section>
  );
}
