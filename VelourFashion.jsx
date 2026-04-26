import { lazy, Suspense } from "react";
import Navbar               from "./src/components/Navbar";
import Hero                 from "./src/components/Hero";

const FeaturedSection      = lazy(() => import("./src/components/FeaturedSection"));
const CategoriesSection    = lazy(() => import("./src/components/CategoriesSection"));
const TestimonialsSection  = lazy(() => import("./src/components/TestimonialsSection"));
const GallerySection       = lazy(() => import("./src/components/GallerySection"));
const Footer               = lazy(() => import("./src/components/Footer"));

export default function App() {
  return (
    <div className="font-sans antialiased bg-white">
      <style>{`
        * { font-family: 'Inter', sans-serif; }
        h1, h2, h3, h4 { font-family: 'Inter', sans-serif; font-weight: 700; }

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
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#FF4D00]"></div></div>}>
          <CategoriesSection />
          <TestimonialsSection />
          <GallerySection />
        </Suspense>
      </main>

      <Suspense fallback={<div className="h-20"></div>}>
        <Footer />
      </Suspense>
    </div>
  );
}
