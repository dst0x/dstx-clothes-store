import { useRef } from "react";

const LOOKBOOK_ITEMS = [
  {
    id: 1,
    title: "Urban Minimalism",
    subtitle: "A collection of core essentials for the modern city dweller.",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80",
    color: "bg-blue-500/10"
  },
  {
    id: 2,
    title: "Yogyakarta Heritage",
    subtitle: "Merging traditional craftsmanship with contemporary silhouettes.",
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&q=80",
    color: "bg-orange-500/10"
  },
  {
    id: 3,
    title: "Eco-Conscious Series",
    subtitle: "Designed with sustainability and longevity at its heart.",
    image: "https://images.unsplash.com/photo-1539109132314-347551cd9c7c?w=800&q=80",
    color: "bg-green-500/10"
  },
  {
    id: 4,
    title: "Signature Outerwear",
    subtitle: "Bold statements for those who define their own rules.",
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80",
    color: "bg-purple-500/10"
  }
];

export default function CollectionsSection() {
  const scrollRef = useRef(null);

  return (
    <section className="bg-[#F8F7F4] py-24 px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-2">
            Atmospheric Archives
          </h2>
          <p className="text-gray-500 text-base md:text-lg font-light leading-relaxed">
            A visual diary of moments captured across the archipelago.
          </p>
        </div>

        {/* Lookbook Cards Container */}
        <div className="relative">
          <div 
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto pb-12 scrollbar-hide snap-x snap-mandatory"
          >
            {LOOKBOOK_ITEMS.map((item, index) => (
              <div 
                key={item.id}
                className={`flex-shrink-0 w-[300px] md:w-[400px] snap-start group cursor-pointer transition-all duration-700 hover:-translate-y-4`}
              >
                <div className={`relative aspect-[4/5] rounded-[40px] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-700 group-hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.2)]`}>
                  {/* Background overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  
                  {/* Main Image */}
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />

                  {/* Content Overlay */}
                  <div className="absolute bottom-10 left-10 right-10 z-20 transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="text-white/60 text-[10px] font-bold tracking-[0.3em] uppercase mb-2">Issue {String(index + 1).padStart(2, "0")}</p>
                    <h3 className="text-white text-2xl font-bold mb-2">{item.title}</h3>
                    <p className="text-white/80 text-sm leading-relaxed font-light line-clamp-2">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
                
                {/* Visual indicator / number below */}
                <div className="mt-8 flex items-center gap-4 px-4 opacity-40 group-hover:opacity-100 transition-opacity">
                   <span className="text-[10px] font-bold tracking-widest text-black uppercase">Look 0{index + 1}</span>
                   <div className="h-px flex-1 bg-black/10 group-hover:bg-black/30 transition-colors" />
                </div>
              </div>
            ))}

            {/* Newsletter/CTA Card (Based on the blue section in reference) */}
            <div className="flex-shrink-0 w-[300px] md:w-[450px] snap-start">
               <div className="h-full bg-[#6366F1] rounded-[40px] p-12 flex flex-col justify-between text-white shadow-[0_30px_60px_-15px_rgba(99,102,241,0.3)]">
                  <div>
                    <h3 className="text-3xl font-bold mb-6 leading-tight">Join the Archive</h3>
                    <p className="text-white/80 text-lg leading-relaxed font-light mb-10">
                      Subscribe to our visual diary and get early access to our limited editions.
                    </p>
                    <div className="space-y-4">
                       <input 
                         type="email" 
                         placeholder="your@email.com"
                         className="w-full bg-white/10 border border-white/20 rounded-full px-8 py-4 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
                       />
                       <button className="w-full bg-white text-[#6366F1] font-bold rounded-full py-4 hover:bg-opacity-90 transition-all">
                         Subscribe
                       </button>
                    </div>
                  </div>
                  <p className="text-white/40 text-xs tracking-widest uppercase">© TiiClothes 2026</p>
               </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
