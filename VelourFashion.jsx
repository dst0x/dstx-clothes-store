// ─── TIICLOTHES — Main App Entry ──────────────────────────────────────────────
// Yogyakarta Fashion House · Est. 2020

import Navbar               from "./src/components/Navbar";
import Hero                 from "./src/components/Hero";
import FeaturedSection      from "./src/components/FeaturedSection";
import CategoriesSection    from "./src/components/CategoriesSection";
import TestimonialsSection  from "./src/components/TestimonialsSection";
import GallerySection       from "./src/components/GallerySection";
import CollectionsSection   from "./src/components/CollectionsSection";
import Footer               from "./src/components/Footer";

export default function App() {
  return (
    <div className="font-sans antialiased bg-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,400;0,600;0,700;0,900;1,900&family=Barlow+Condensed:wght@400;600;700;900&display=swap');

        * { font-family: 'Barlow', sans-serif; }
        h1, h2, h3, h4 { font-family: 'Barlow Condensed', sans-serif; }

        @keyframes ticker {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-25%); }
        }

        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }

        html { scroll-behavior: smooth; }

        ::selection { background: #FF4D00; color: #fff; }
      `}</style>

      <Navbar />

      <main>
        <Hero />
        <FeaturedSection />
        <CategoriesSection />
        <TestimonialsSection />
        <GallerySection />
        <CollectionsSection />
        {/* EcommerceSection removed — marketplace links live in the Footer action band */}
      </main>

      <Footer />
    </div>
  );
}
