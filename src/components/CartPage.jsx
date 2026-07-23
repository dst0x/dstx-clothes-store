import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function parsePrice(price) {
  return parseInt(price.replace(/\D/g, ""), 10) || 0;
}

function formatPrice(value) {
  return `Rp ${value.toLocaleString("id-ID")}`;
}

export default function CartPage() {
  const { cartItems, removeItems, updateQuantity, toggleSelect, toggleSelectAll } = useCart();
  const [confirmDelete, setConfirmDelete] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const allSelected = cartItems.length > 0 && cartItems.every((item) => item.selected);
  const selectedItems = cartItems.filter((item) => item.selected);
  const selectedTotal = selectedItems.reduce(
    (sum, item) => sum + parsePrice(item.price) * item.quantity,
    0
  );

  const requestDeleteItem = (item) => {
    setConfirmDelete({ ids: [item.cartItemId], count: 1 });
  };

  const requestDeleteSelected = () => {
    setConfirmDelete({ ids: selectedItems.map((item) => item.cartItemId), count: selectedItems.length });
  };

  const confirmDeleteYes = () => {
    removeItems(confirmDelete.ids);
    setConfirmDelete(null);
  };

  const confirmDeleteNo = () => {
    setConfirmDelete(null);
  };

  const handleCheckout = () => {
    if (selectedItems.length === 0) return;
    alert(`Checkout ${selectedItems.length} item - Total: ${formatPrice(selectedTotal)}`);
    removeItems(selectedItems.map((item) => item.cartItemId));
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-[#F4F3F0] flex items-center justify-center pt-20">
        <div className="text-center px-8">
          <h2 className="text-3xl font-bold text-black mb-4">Keranjang Kamu Kosong</h2>
          <p className="text-gray-600 mb-6">Yuk mulai belanja dan temukan koleksi favoritmu.</p>
          <Link
            to="/"
            className="inline-block bg-[#FF4D00] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#FF6A00] transition-colors duration-300"
          >
            Mulai Belanja
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F4F3F0]">
      <div className="bg-white border-b border-gray-200 pt-20 md:pt-24">
        <div className="max-w-5xl mx-auto px-8 py-8">
          <h1 className="text-3xl md:text-4xl font-bold text-black mb-2">Keranjang Belanja</h1>
          <p className="text-gray-600">{cartItems.length} produk di keranjang</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Item list */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl border border-gray-200 p-5 mb-4 flex items-center justify-between">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={allSelected}
                  onChange={(e) => toggleSelectAll(e.target.checked)}
                  className="w-5 h-5 accent-[#FF4D00] cursor-pointer"
                />
                <span className="text-sm font-semibold text-black">Pilih Semua</span>
              </label>
              <button
                onClick={requestDeleteSelected}
                disabled={selectedItems.length === 0}
                className="text-sm font-semibold text-gray-500 hover:text-red-600 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                Hapus Terpilih ({selectedItems.length})
              </button>
            </div>

            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.cartItemId}
                  className="bg-white rounded-2xl border border-gray-200 p-5 flex items-center gap-4"
                >
                  <input
                    type="checkbox"
                    checked={item.selected}
                    onChange={() => toggleSelect(item.cartItemId)}
                    className="w-5 h-5 accent-[#FF4D00] cursor-pointer flex-shrink-0"
                  />

                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-24 object-cover rounded-xl flex-shrink-0"
                  />

                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-bold text-black mb-1 line-clamp-1">
                      {item.name}
                    </h3>
                    <p className="text-xs text-gray-500 mb-2">Ukuran: {item.size}</p>
                    <span className="text-lg font-bold text-[#FF4D00]">{item.price}</span>
                  </div>

                  <div className="flex flex-col items-end gap-3 flex-shrink-0">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                        className="w-8 h-8 rounded-lg border-2 border-gray-200 hover:border-gray-300 flex items-center justify-center font-bold text-gray-700"
                      >
                        −
                      </button>
                      <span className="w-8 text-center font-bold text-black">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                        className="w-8 h-8 rounded-lg border-2 border-gray-200 hover:border-gray-300 flex items-center justify-center font-bold text-gray-700"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => requestDeleteItem(item)}
                      aria-label="Hapus item"
                      className="text-xs font-semibold text-gray-400 hover:text-red-600 transition-colors"
                    >
                      Hapus
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl border border-gray-200 p-6 sticky top-24">
              <h3 className="text-lg font-bold text-black mb-4">Ringkasan Belanja</h3>
              <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                <span>Item terpilih</span>
                <span>{selectedItems.length}</span>
              </div>
              <div className="flex items-center justify-between text-base font-bold text-black pt-4 border-t border-gray-200 mb-6">
                <span>Total</span>
                <span className="text-[#FF4D00]">{formatPrice(selectedTotal)}</span>
              </div>
              <button
                onClick={handleCheckout}
                disabled={selectedItems.length === 0}
                className="w-full bg-[#FF4D00] text-white font-bold py-4 rounded-full hover:bg-[#FF6A00] transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none"
              >
                Checkout
              </button>
              <Link
                to="/"
                className="block text-center mt-4 text-sm text-gray-500 hover:text-[#FF4D00] transition-colors"
              >
                Lanjut Belanja
              </Link>
            </div>
          </div>
        </div>
      </div>

      {confirmDelete && (
        <div className="fixed inset-0 z-[1000] bg-black/50 flex items-center justify-center px-6">
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-2xl">
            <h3 className="text-lg font-bold text-black mb-2">Hapus Item?</h3>
            <p className="text-sm text-gray-600 mb-6">
              {confirmDelete.count > 1
                ? `Kamu akan menghapus ${confirmDelete.count} item dari keranjang. Tindakan ini tidak dapat dibatalkan.`
                : "Kamu akan menghapus item ini dari keranjang. Tindakan ini tidak dapat dibatalkan."}
            </p>
            <div className="flex gap-3">
              <button
                onClick={confirmDeleteNo}
                className="flex-1 py-3 rounded-full border-2 border-gray-200 font-semibold text-sm text-gray-700 hover:border-gray-300 transition-colors"
              >
                Tidak
              </button>
              <button
                onClick={confirmDeleteYes}
                className="flex-1 py-3 rounded-full bg-red-600 font-semibold text-sm text-white hover:bg-red-700 transition-colors"
              >
                Ya, Hapus
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
