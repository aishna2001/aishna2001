import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";
import { getCart, removeFromCart } from "../../../utils/cart";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setCartItems(getCart());
  }, []);

  const handleRemove = (id) => {
    removeFromCart(id);
    setCartItems(getCart());
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  return (
    <section className="bg-[#f6f3f1] py-10">
      <div className="container mx-auto px-4 flex gap-6">

        {/* LEFT SIDE */}
        <div className="w-[70%] bg-white rounded-md p-6">
          <h2 className="text-[20px] font-semibold mb-4">
            Your Cart
          </h2>

          {cartItems.length === 0 ? (
            <p className="text-gray-500">Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <div
                key={item._id}
                className="flex gap-4 border-b pb-6 mb-6"
              >
                <img
                  src={item.image}
                  className="w-[120px] rounded border"
                  alt={item.name}
                />

                <div className="flex-1">
                  <h3 className="font-medium">{item.name}</h3>
                  <Rating value={4} readOnly size="small" />

                  <div className="mt-2 text-sm">
                    Qty: {item.qty}
                  </div>

                  <div className="mt-2 font-semibold">
                    ₹{item.price * item.qty}
                  </div>
                </div>

                <button
                  onClick={() => handleRemove(item._id)}
                  className="text-xl text-gray-400"
                >
                  ×
                </button>
              </div>
            ))
          )}
        </div>

        {/* RIGHT SIDE */}
        <div className="w-[30%] bg-white rounded-md p-6 h-fit">
          <h2 className="text-[18px] font-semibold mb-4">
            Cart Totals
          </h2>

          <div className="flex justify-between text-sm mb-4">
            <span>Total</span>
            <span className="text-blue-600 font-medium">
              ₹{subtotal}
            </span>
          </div>

          <Button
            variant="contained"
            fullWidth
            className="!bg-blue-600 !py-3"
            component={Link}
            to="/checkoutpage"
            disabled={cartItems.length === 0}
          >
            Checkout
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
