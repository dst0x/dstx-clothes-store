import { useState } from "react";

const NAV_LINKS = {
  COLLECTION: ["JACKET", "KEMEJA", "OUTER", "TOTEBAG", "JEANS"],
  INFORMATION: ["TENTANG KAMI", "BLOG", "FAQ", "KONTAK"],
  POLICY: ["SYARAT & KETENTUAN", "PRIVASI", "RETUR & REFUND"],
  CONNECT: ["INSTAGRAM", "TIKTOK", "WHATSAPP"],
};

export default function Footer() {
  return (
    <footer className="bg-white text-black py-24 px-8 border-t border-gray-50">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 mb-24">
          
          {/* Brand & Mission */}
          <div className="col-span-2 lg:col-span-1">
            <h3 className="text-sm font-bold tracking-[0.2em] uppercase mb-8">TIICLOTHES</h3>
            <p className="text-[13px] text-gray-400 leading-[1.8] max-w-[220px] mb-8 font-light">
              Curating essentials for a life of purpose. Minimally designed, maximum intention.
            </p>
            <div className="flex items-center gap-5">
              <a href="#" className="opacity-40 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0">
                <img src="./src/images/shopee_logo.png" alt="Shopee" className="h-6 w-auto object-contain" />
              </a>
              <a href="#" className="opacity-40 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0">
                <img src="./src/images/lazada_logo.png" alt="Lazada" className="h-5 w-auto object-contain" />
              </a>
              <a href="#" className="opacity-40 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0">
                <img src="./src/images/tokopedia_logo.png" alt="Tokopedia" className="h-6 w-auto object-contain" />
              </a>
            </div>
          </div>

          {/* Nav Columns */}
          {Object.entries(NAV_LINKS).map(([header, links]) => (
            <div key={header}>
              <h4 className="text-[11px] font-bold tracking-[0.2em] uppercase mb-8 text-gray-900">
                {header}
              </h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[11px] text-gray-400 hover:text-black transition-colors duration-300 tracking-[0.1em] font-light"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-gray-50 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[10px] tracking-[0.15em] text-gray-300 uppercase">
            © 2024 TIICLOTHES STUDIO. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-10">
            <p className="text-[10px] tracking-[0.15em] text-gray-300 uppercase">
              EST. 2024
            </p>
            <p className="text-[10px] tracking-[0.15em] text-gray-300 uppercase">
              INDONESIA
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
