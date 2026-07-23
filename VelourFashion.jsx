import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar               from "./src/components/Navbar";
import Hero                 from "./src/components/Hero";
import { CartProvider, FlyingCartItems } from "./src/context/CartContext";

const FeaturedSection      = lazy(() => import("./src/components/FeaturedSection"));
const CategoriesSection    = lazy(() => import("./src/components/CategoriesSection"));
const TestimonialsSection  = lazy(() => import("./src/components/TestimonialsSection"));
const GallerySection       = lazy(() => import("./src/components/GallerySection"));
const Footer               = lazy(() => import("./src/components/Footer"));
const CategoryDetail       = lazy(() => import("./src/components/CategoryDetail"));
const ProductDetail        = lazy(() => import("./src/components/ProductDetail"));
const CartPage              = lazy(() => import("./src/components/CartPage"));

// Scroll to top component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function HomePage() {
  return (
    <>
      <Hero />
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#FF4D00]"></div></div>}>
        <CategoriesSection />
        <TestimonialsSection />
        <GallerySection />
      </Suspense>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <CartProvider>
      <ScrollToTop />
      <div className="font-sans antialiased bg-white">
        <FlyingCartItems />
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
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route 
              path="/category/:category" 
              element={
                <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#FF4D00]"></div></div>}>
                  <CategoryDetail />
                </Suspense>
              } 
            />
            <Route
              path="/category/:category/:productId"
              element={
                <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#FF4D00]"></div></div>}>
                  <ProductDetail />
                </Suspense>
              }
            />
            <Route
              path="/cart"
              element={
                <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#FF4D00]"></div></div>}>
                  <CartPage />
                </Suspense>
              }
            />
          </Routes>
        </main>

        <Suspense fallback={<div className="h-20"></div>}>
          <Footer />
        </Suspense>
      </div>
      </CartProvider>
    </Router>
  );
}
