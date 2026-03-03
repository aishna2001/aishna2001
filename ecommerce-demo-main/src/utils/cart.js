const CART_KEY = "cart";

/* GET CART */
export const getCart = () => {
  const cart = localStorage.getItem(CART_KEY);
  return cart ? JSON.parse(cart) : [];
};

/* ADD TO CART */
export const addToCart = (product) => {
  const cart = getCart();

  const existing = cart.find((item) => item._id === product._id);

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  localStorage.setItem(CART_KEY, JSON.stringify(cart));
};

/* REMOVE FROM CART */
export const removeFromCart = (id) => {
  const cart = getCart().filter((item) => item._id !== id);
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
};

/* CLEAR CART */
export const clearCart = () => {
  localStorage.removeItem(CART_KEY);
};
