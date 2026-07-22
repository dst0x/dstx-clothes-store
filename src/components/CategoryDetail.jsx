import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { CATEGORY_PRODUCTS } from "./data";

export default function CategoryDetail() {
  const { category } = useParams();
  const products = CATEGORY_PRODUCTS[category?.toUpperCase()] || [];

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [category]);

  if (products.length === 0) {
    return (
      <div className="min-h-screen bg-[#F4F3F0] flex items-center justify-center pt-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-black mb-4">Kategori Tidak Ditemukan</h2>
          <Link 
            to="/" 
            className="text-[#FF4D00] hover:underline"
          >
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F4F3F0]">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 pt-20 md:pt-24">
        <div className="max-w-7xl mx-auto px-8 py-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-sm text-gray-600 hover:text-[#FF4D00] transition-colors mb-4"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Kembali ke Kategori
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-2">
            {category?.toUpperCase()} Collection
          </h1>
          <p className="text-gray-600">
            {products.length} produk tersedia
          </p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg"
            >
              {/* Product Image */}
              <Link to={`/category/${category}/${product.id}`}>
                <div className="relative aspect-[3/4] overflow-hidden bg-gray-50">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-[#FF4D00] text-[9px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full">
                    {product.category}
                  </div>
                </div>
              </Link>

              {/* Product Info */}
              <div className="p-5">
                <Link to={`/category/${category}/${product.id}`}>
                  <h3 className="text-lg font-bold text-black mb-2 line-clamp-1 hover:text-[#FF4D00] transition-colors">
                    {product.name}
                  </h3>
                </Link>
                <p className="text-sm text-gray-500 mb-3 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-[#FF4D00]">
                    {product.price}
                  </span>
                  <Link 
                    to={`/category/${category}/${product.id}`}
                    className="bg-black text-white text-xs font-semibold px-4 py-2 rounded-full hover:bg-[#FF4D00] transition-colors duration-300"
                  >
                    Lihat Detail
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="bg-gradient-to-r from-black to-gray-800 rounded-3xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Tidak Menemukan Yang Kamu Cari?
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Hubungi kami untuk rekomendasi produk atau informasi lebih lanjut tentang koleksi kami.
          </p>
          <button className="bg-[#FF4D00] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#FF6A00] transition-colors duration-300">
            Hubungi Kami
          </button>
        </div>
      </div>
    </div>
  );
}
