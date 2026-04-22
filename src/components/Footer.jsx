import { useState } from "react";
import { ECOMMERCE_PLATFORMS } from "./data";
import Ticker from "./Ticker";

const NAV_LINKS = {
  Koleksi:    ["Jacket", "Kemeja", "Outer", "Totebag", "Jeans"],
  Informasi:  ["Tentang Kami", "Blog", "FAQ", "Kontak"],
  Kebijakan:  ["Syarat & Ketentuan", "Privasi", "Retur & Refund"],
};

const SOCIAL = [
  { label: "Instagram", href: "https://instagram.com/tiiclothes",  abbr: "IG" },
  { label: "TikTok",    href: "https://tiktok.com/@tiiclothes",    abbr: "TK" },
  { label: "Facebook",  href: "https://facebook.com/tiiclothes",   abbr: "FB" },
  { label: "YouTube",   href: "https://youtube.com/@tiiclothes",   abbr: "YT" },
];

// ── Icon components ────────────────────────────────────────────────────────────
const IconCart = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
    <line x1="3" y1="6" x2="21" y2="6"/>
    <path d="M16 10a4 4 0 01-8 0"/>
  </svg>
);

const IconHeart = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
  </svg>
);

const IconCheckout = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);

const IconWhatsApp = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

// ── Icon action button ─────────────────────────────────────────────────────────
function IconAction({ icon, label, href = "#", accent = false }) {
  const Tag = href !== "#" ? "a" : "button";
  const extra = href !== "#" ? { href, target: "_blank", rel: "noopener noreferrer" } : {};
  return (
    <Tag
      {...extra}
      title={label}
      aria-label={label}
      className={`
        group flex flex-col items-center gap-1.5
        transition-all duration-200
        ${accent ? "text-[#FF4D00] hover:text-white" : "text-white/30 hover:text-white"}
      `}
    >
      <span className={`
        w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-200
        ${accent
          ? "border-[#FF4D00]/40 group-hover:border-[#FF4D00] group-hover:bg-[#FF4D00]"
          : "border-white/10 group-hover:border-white/40"
        }
      `}>
        {icon}
      </span>
      <span className="text-[8px] tracking-[0.18em] uppercase font-medium opacity-60 group-hover:opacity-100 transition-opacity">
        {label}
      </span>
    </Tag>
  );
}

export default function Footer() {
  const [email, setEmail]   = useState("");
  const [sent,  setSent]    = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) { setSent(true); setEmail(""); }
  };

  return (
    <footer className="bg-[#0C0C0C] text-white">

      {/* ── Dark Ticker ── */}
      <Ticker dark />

      <div className="max-w-7xl mx-auto px-8">

        {/* ═══════════════════════════════════════════════════
            BAND 1 — Brand statement + Newsletter
        ═══════════════════════════════════════════════════ */}
        <div className="py-20 grid grid-cols-1 md:grid-cols-2 gap-16 border-b border-white/[0.05]">

          {/* Brand */}
          <div>
            <p className="text-[28px] font-black tracking-[0.22em] uppercase text-white leading-none mb-3">
              TiiClothes
            </p>
            <p className="text-[10px] tracking-[0.3em] text-white/20 uppercase mb-8">
              Yogyakarta Fashion House · Est. 2020
            </p>
            <p className="text-[13px] text-white/40 leading-[1.85] max-w-[300px] font-light">
              Fashion lokal berkualitas premium dari jantung kota Yogyakarta.
              Dirancang untuk mereka yang menghargai gaya, kenyamanan, dan identitas.
            </p>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col justify-between md:max-w-sm md:ml-auto">
            <div>
              <p className="text-[10px] tracking-[0.3em] text-white/25 uppercase mb-4">Newsletter</p>
              <p className="text-[13px] text-white/40 leading-relaxed mb-8 font-light">
                Dapatkan info drop terbaru dan penawaran eksklusif langsung ke emailmu.
              </p>
            </div>

            {sent ? (
              <p className="text-[11px] text-[#FF4D00] tracking-[0.2em] uppercase">
                ✦ Terima kasih sudah bergabung!
              </p>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="flex items-center border-b border-white/15 pb-3 gap-3 focus-within:border-white/40 transition-colors duration-300">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email@kamu.com"
                    className="bg-transparent text-[13px] text-white placeholder-white/20 outline-none flex-1 font-light"
                    required
                  />
                  <button
                    type="submit"
                    className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-white/30 hover:text-white hover:border-white/50 transition-all duration-200 text-sm"
                  >
                    →
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════
            BAND 2 — Nav links + Contact
        ═══════════════════════════════════════════════════ */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-4 gap-10 border-b border-white/[0.05]">

          {/* Nav link columns */}
          {Object.entries(NAV_LINKS).map(([section, links]) => (
            <div key={section}>
              <p className="text-[9px] tracking-[0.3em] text-white/20 uppercase mb-5 font-medium">
                {section}
              </p>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[12px] text-white/40 hover:text-white/80 transition-colors duration-200 font-light leading-relaxed"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <p className="text-[9px] tracking-[0.3em] text-white/20 uppercase mb-5 font-medium">
              Kontak
            </p>
            <div className="space-y-5">
              {[
                { label: "Lokasi",    value: "Jl. Malioboro No. 88\nYogyakarta 55271" },
                { label: "Email",     value: "hello@tiiclothes.id",                     href: "mailto:hello@tiiclothes.id" },
                { label: "WhatsApp",  value: "+62 812-3456-7890",                        href: "https://wa.me/6281234567890" },
                { label: "Jam Buka",  value: "08.00 – 22.00 WIB" },
              ].map(({ label, value, href }) => (
                <div key={label}>
                  <p className="text-[8px] tracking-[0.25em] uppercase text-white/15 mb-1">
                    {label}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="text-[12px] text-white/40 hover:text-white/80 transition-colors duration-200 font-light leading-snug"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-[12px] text-white/40 font-light leading-snug whitespace-pre-line">
                      {value}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════
            BAND 3 — Icon-based shopping actions (footer-only)
        ═══════════════════════════════════════════════════ */}
        <div className="py-12 border-b border-white/[0.05]">
          <p className="text-[9px] tracking-[0.35em] text-white/15 uppercase text-center mb-8">
            Belanja &amp; Aksi
          </p>

          <div className="flex flex-wrap items-start justify-center gap-8">
            {/* Core actions */}
            <IconAction icon={<IconCart />}     label="Keranjang" />
            <IconAction icon={<IconHeart />}    label="Wishlist" />
            <IconAction icon={<IconCheckout />} label="Checkout" accent />
            <IconAction icon={<IconWhatsApp />} label="WhatsApp" href="https://wa.me/6281234567890" />

            {/* Thin divider */}
            <div className="w-px h-11 bg-white/[0.06] self-center hidden sm:block" />

            {/* Marketplace icon links */}
            {ECOMMERCE_PLATFORMS.map((p) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={p.name}
                title={p.name}
                className="group flex flex-col items-center gap-1.5 text-white/25 hover:text-white/70 transition-all duration-200"
              >
                <span className="w-11 h-11 rounded-full border border-white/[0.08] group-hover:border-white/25 flex items-center justify-center text-lg transition-all duration-200">
                  {p.icon}
                </span>
                <span className="text-[8px] tracking-[0.18em] uppercase font-medium opacity-60 group-hover:opacity-100 transition-opacity">
                  {p.name.split(" ")[0]}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════
            BAND 4 — Social + bottom bar
        ═══════════════════════════════════════════════════ */}
        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Social icons */}
          <div className="flex items-center gap-2">
            {SOCIAL.map(({ label, href, abbr }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-8 h-8 rounded-full border border-white/[0.08] flex items-center justify-center text-[9px] font-bold text-white/25 hover:border-white/30 hover:text-white/60 transition-all duration-200"
              >
                {abbr}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-[9px] text-white/15 tracking-[0.15em] text-center order-last md:order-none">
            © 2026 TiiClothes · All rights reserved · Made with ✦ in Yogyakarta
          </p>

          {/* Live dot */}
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF4D00] animate-pulse" />
            <p className="text-[9px] text-white/15 tracking-[0.15em]">
              Yogyakarta Fashion House
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
