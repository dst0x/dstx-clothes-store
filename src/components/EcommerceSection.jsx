import { ECOMMERCE_PLATFORMS } from "./data";
import { SectionLabel } from "./utils";

export default function EcommerceSection() {
  return (
    <section id="ecommerce" className="bg-[#0A0A0A] py-24 px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <SectionLabel>Beli Sekarang</SectionLabel>
          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mt-4">
            Temukan Kami di<br />
            <span className="text-[#FF4D00]">Platform Favoritmu</span>
          </h2>
          <p className="text-sm text-gray-500 mt-4 max-w-lg mx-auto leading-relaxed">
            TiiClothes tersedia di berbagai marketplace terpercaya. Nikmati kemudahan belanja, gratis ongkir, dan promo eksklusif hanya untuk pelanggan setia kami.
          </p>
        </div>

        {/* Platform cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {ECOMMERCE_PLATFORMS.map((platform) => (
            <a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block border border-gray-800 bg-white/[0.03] hover:bg-white/[0.08] transition-all duration-400 p-6 overflow-hidden"
            >
              {/* Top accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 transition-all duration-300 group-hover:h-1"
                style={{ backgroundColor: platform.color }}
              />

              {/* Icon */}
              <div className="text-4xl mb-4">{platform.icon}</div>

              {/* Name */}
              <h3 className="text-xl font-black text-white mb-1">{platform.name}</h3>

              {/* Desc */}
              <p className="text-xs text-gray-500 leading-relaxed mb-6">{platform.desc}</p>

              {/* CTA */}
              <div className="flex items-center justify-between">
                <span
                  className="text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full transition-all duration-300"
                  style={{
                    backgroundColor: platform.color + "20",
                    color: platform.color === "#000000" ? "#fff" : platform.color,
                    border: `1px solid ${platform.color}40`,
                  }}
                >
                  Kunjungi →
                </span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-gray-600 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                >
                  <path d="M7 17L17 7M7 7h10v10" />
                </svg>
              </div>

              {/* Decorative corner */}
              <div
                className="absolute bottom-0 right-0 w-16 h-16 opacity-5 group-hover:opacity-10 transition-opacity"
                style={{
                  background: `radial-gradient(circle at center, ${platform.color}, transparent)`,
                }}
              />
            </a>
          ))}
        </div>

        {/* Bottom trust badges */}
        <div className="mt-16 pt-10 border-t border-gray-800 grid grid-cols-3 gap-6 text-center">
          {[
            { icon: "🔒", title: "Transaksi Aman", desc: "Dijamin oleh platform resmi" },
            { icon: "🚚", title: "Pengiriman Cepat", desc: "Sampai dalam 1–3 hari kerja" },
            { icon: "↩️", title: "Garansi Produk", desc: "Retur mudah jika tidak sesuai" },
          ].map((badge) => (
            <div key={badge.title} className="flex flex-col items-center gap-2">
              <span className="text-3xl">{badge.icon}</span>
              <p className="text-xs font-black text-white tracking-widest uppercase">{badge.title}</p>
              <p className="text-[10px] text-gray-600">{badge.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
