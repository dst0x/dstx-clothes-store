import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { CATEGORY_PRODUCTS } from "./data";

export default function ProductDetail() {
  const { category, productId } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("M");
  const [addedToCart, setAddedToCart] = useState(false);

  // Scroll to top when product changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [productId]);

  // Find the product
  const categoryProducts = CATEGORY_PRODUCTS[category?.toUpperCase()] || [];
  const product = categoryProducts.find(p => p.id === productId);

  if (!product) {
    return (
      <div className="min-h-screen bg-[#F4F3F0] flex items-center justify-center pt-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-black mb-4">Produk Tidak Ditemukan</h2>
          <Link 
            to={`/category/${category}`}
            className="text-[#FF4D00] hover:underline"
          >
            Kembali ke Kategori
          </Link>
        </div>
      </div>
    );
  }

  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
  
  const relatedProducts = categoryProducts
    .filter(p => p.id !== productId)
    .slice(0, 4);

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 3000);
  };

  const handleBuyNow = () => {
    // Simulate buying - could integrate with actual e-commerce
    alert(`Membeli ${product.name} - Size: ${selectedSize} - Qty: ${quantity}`);
  };

  return (
    <div className="min-h-screen bg-[#F4F3F0]">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200 pt-20 md:pt-24">
        <div className="max-w-7xl mx-auto px-8 py-4">
          <div className="flex items-center text-sm text-gray-600">
            <Link to="/" className="hover:text-[#FF4D00]">Beranda</Link>
            <span className="mx-2">/</span>
            <Link to={`/category/${category}`} className="hover:text-[#FF4D00]">
              {category?.toUpperCase()}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-black font-medium">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Detail Section */}
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Product Image */}
          <div className="sticky top-8 self-start">
            <div className="bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-lg">
              <div className="aspect-[3/4] relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="text-[#FF4D00] text-xs font-bold tracking-wider">
                    {product.category}
                  </span>
                </div>
              </div>
            </div>

            {/* Image Gallery Thumbnails */}
            <div className="grid grid-cols-4 gap-3 mt-4">
              {[1, 2, 3, 4].map((i) => (
                <div 
                  key={i}
                  className="aspect-square bg-white rounded-xl border border-gray-200 overflow-hidden cursor-pointer hover:border-[#FF4D00] transition-colors"
                >
                  <img
                    src={product.image}
                    alt={`${product.name} view ${i}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm">
              
              {/* Product Name & Price */}
              <div className="mb-6 pb-6 border-b border-gray-200">
                <h1 className="text-3xl md:text-4xl font-bold text-black mb-3">
                  {product.name}
                </h1>
                <div className="flex items-baseline gap-3">
                  <span className="text-4xl font-bold text-[#FF4D00]">
                    {product.price}
                  </span>
                  <span className="text-sm text-gray-500 line-through">
                    Rp {parseInt(product.price.replace(/\D/g, '')) * 1.3 / 1000}k
                  </span>
                  <span className="bg-red-100 text-red-600 text-xs font-bold px-3 py-1 rounded-full">
                    -23%
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-black mb-3">Deskripsi Produk</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {product.description}
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    Material Premium & Berkualitas Tinggi
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    Gratis Ongkir Seluruh Indonesia
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    Garansi 30 Hari Uang Kembali
                  </li>
                </ul>
              </div>

              {/* Size Selection */}
              <div className="mb-6">
                <h3 className="text-sm font-bold text-black mb-3">Pilih Ukuran</h3>
                <div className="flex flex-wrap gap-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-5 py-2.5 rounded-lg border-2 font-semibold text-sm transition-all ${
                        selectedSize === size
                          ? "border-[#FF4D00] bg-[#FF4D00] text-white"
                          : "border-gray-200 bg-white text-gray-700 hover:border-gray-300"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Selection */}
              <div className="mb-8">
                <h3 className="text-sm font-bold text-black mb-3">Jumlah</h3>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 rounded-lg border-2 border-gray-200 hover:border-gray-300 flex items-center justify-center font-bold text-gray-700"
                  >
                    −
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-20 h-10 text-center rounded-lg border-2 border-gray-200 font-bold text-black"
                  />
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 rounded-lg border-2 border-gray-200 hover:border-gray-300 flex items-center justify-center font-bold text-gray-700"
                  >
                    +
                  </button>
                  <span className="ml-4 text-sm text-gray-600">
                    Stok: <span className="font-bold text-black">24 pcs</span>
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  onClick={handleBuyNow}
                  className="w-full bg-[#FF4D00] text-white font-bold py-4 rounded-full hover:bg-[#FF6A00] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Beli Sekarang
                </button>
                <button
                  onClick={handleAddToCart}
                  className="w-full bg-white text-black font-bold py-4 rounded-full border-2 border-black hover:bg-black hover:text-white transition-all duration-300"
                >
                  {addedToCart ? (
                    <span className="flex items-center justify-center">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      Ditambahkan ke Keranjang!
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      Masukkan ke Keranjang
                    </span>
                  )}
                </button>
              </div>

              {/* Share & Wishlist */}
              <div className="flex gap-3 mt-4">
                <button className="flex-1 py-3 rounded-full border border-gray-200 hover:border-gray-300 text-sm font-semibold text-gray-700 transition-colors">
                  ❤️ Wishlist
                </button>
                <button className="flex-1 py-3 rounded-full border border-gray-200 hover:border-gray-300 text-sm font-semibold text-gray-700 transition-colors">
                  📤 Share
                </button>
              </div>
            </div>

            {/* Shipping Info */}
            <div className="mt-6 bg-gradient-to-r from-[#FF4D00] to-[#FF6A00] rounded-3xl p-6 text-white">
              <h3 className="font-bold mb-3 text-lg">🚚 Info Pengiriman</h3>
              <p className="text-sm opacity-90">
                Gratis ongkir ke seluruh Indonesia untuk pembelian minimal Rp 300.000. 
                Estimasi pengiriman 2-5 hari kerja.
              </p>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20">
            <style>{`
              @keyframes productSlideIn {
                from {
                  opacity: 0;
                  transform: translateY(20px) scale(0.95);
                }
                to {
                  opacity: 1;
                  transform: translateY(0) scale(1);
                }
              }

              .product-card-animate {
                animation: productSlideIn 0.5s ease-out forwards;
              }
            `}</style>
            
            <h2 className="text-3xl font-bold text-black mb-8">Produk Serupa</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct, index) => (
                <Link
                  key={`${relatedProduct.id}-${productId}`}
                  to={`/category/${category}/${relatedProduct.id}`}
                  className="product-card-animate group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg opacity-0"
                  style={{ 
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <div className="relative aspect-[3/4] overflow-hidden bg-gray-50">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-bold text-black mb-1 line-clamp-1">
                      {relatedProduct.name}
                    </h3>
                    <span className="text-lg font-bold text-[#FF4D00]">
                      {relatedProduct.price}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
