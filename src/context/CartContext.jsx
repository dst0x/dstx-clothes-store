import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";

const CartContext = createContext(null);
const STORAGE_KEY = "tii-clothes-cart";

function loadCartItems() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(loadCartItems);
  const [flyingItems, setFlyingItems] = useState([]);
  const cartIconRef = useRef(null);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = useCallback((product, quantity, size, sourceEl) => {
    const cartEl = cartIconRef.current;
    if (sourceEl && cartEl) {
      const start = sourceEl.getBoundingClientRect();
      const end = cartEl.getBoundingClientRect();
      const flyId = `${Date.now()}-${Math.random()}`;

      setFlyingItems((items) => [...items, { id: flyId, image: product.image, start, end }]);
      setTimeout(() => {
        setFlyingItems((items) => items.filter((item) => item.id !== flyId));
      }, 700);
    }

    setCartItems((items) => {
      const cartItemId = `${product.id}-${size}`;
      const existing = items.find((item) => item.cartItemId === cartItemId);
      if (existing) {
        return items.map((item) =>
          item.cartItemId === cartItemId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [
        ...items,
        {
          cartItemId,
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          category: product.category,
          size,
          quantity,
          selected: true,
        },
      ];
    });
  }, []);

  const removeItems = useCallback((cartItemIds) => {
    setCartItems((items) => items.filter((item) => !cartItemIds.includes(item.cartItemId)));
  }, []);

  const updateQuantity = useCallback((cartItemId, quantity) => {
    setCartItems((items) =>
      items.map((item) =>
        item.cartItemId === cartItemId ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  }, []);

  const toggleSelect = useCallback((cartItemId) => {
    setCartItems((items) =>
      items.map((item) =>
        item.cartItemId === cartItemId ? { ...item, selected: !item.selected } : item
      )
    );
  }, []);

  const toggleSelectAll = useCallback((selected) => {
    setCartItems((items) => items.map((item) => ({ ...item, selected })));
  }, []);

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartCount,
        cartIconRef,
        addToCart,
        removeItems,
        updateQuantity,
        toggleSelect,
        toggleSelectAll,
        flyingItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}

function FlyingCartItem({ item }) {
  const [arrived, setArrived] = useState(false);

  useEffect(() => {
    const raf1 = requestAnimationFrame(() => {
      const raf2 = requestAnimationFrame(() => setArrived(true));
      return () => cancelAnimationFrame(raf2);
    });
    return () => cancelAnimationFrame(raf1);
  }, []);

  const { start, end } = item;
  const style = arrived
    ? {
        top: end.top + end.height / 2 - 10,
        left: end.left + end.width / 2 - 10,
        width: 20,
        height: 20,
        opacity: 0.15,
        transform: "scale(0.4) rotate(20deg)",
      }
    : {
        top: start.top,
        left: start.left,
        width: start.width,
        height: start.height,
        opacity: 1,
        transform: "scale(1) rotate(0deg)",
      };

  return (
    <img
      src={item.image}
      alt=""
      className="fixed z-[999] rounded-xl object-cover pointer-events-none shadow-2xl transition-all duration-[650ms] ease-in-out"
      style={style}
    />
  );
}

export function FlyingCartItems() {
  const { flyingItems } = useCart();
  return (
    <>
      {flyingItems.map((item) => (
        <FlyingCartItem key={item.id} item={item} />
      ))}
    </>
  );
}
