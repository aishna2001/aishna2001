import React, { useEffect, useState } from "react";
import { getCart, clearCart } from "../../../utils/cart";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

const CheckoutPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setCartItems(getCart());
  }, []);

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  const placeOrder = async () => {
  try {
    const token = localStorage.getItem("token");

    const res = await fetch("https://ecommerce-backend-1-szbm.onrender.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        items: cartItems.map((item) => ({
          productId: item._id,
          name: item.name,
          price: item.price,
          qty: item.qty,
        })),
        totalAmount: subtotal,
        shippingAddress: {
          firstName: "Test",
          lastName: "User",
          address: "Demo Address",
          city: "Delhi",
          state: "Delhi",
          pincode: "110001",
        },
        paymentMethod: "COD",
      }),
    });

    if (!res.ok) {
      alert("Order failed");
      return;
    }

    alert("Order placed successfully 🎉");
    clearCart();
    setCartItems([]);
  } catch (err) {
    alert("Server error");
  }
};


  return (
    <section className="bg-[#f6f3f1] py-10">
      <div className="container mx-auto px-4 flex gap-6">

        {/* LEFT SIDE */}
        <div className="w-[70%] bg-white rounded-md p-6">

          <h2 className="text-[20px] font-semibold mb-6">
            Checkout
          </h2>

          {/* CONTACT INFO */}
          <div className="mb-8">
            <h3 className="font-medium mb-4">Contact Information</h3>

            <TextField
              label="Email"
              fullWidth
              size="small"
            />
          </div>

          {/* SHIPPING ADDRESS */}
          <div className="mb-8">
            <h3 className="font-medium mb-4">Shipping Address</h3>

            <div className="grid grid-cols-2 gap-4">
              <TextField label="First Name" size="small" />
              <TextField label="Last Name" size="small" />
              <TextField label="Address" size="small" />
              <TextField label="City" size="small" />
              <TextField label="State" size="small" />
              <TextField label="Pincode" size="small" />
            </div>
          </div>

          {/* PAYMENT */}
          <div>
            <h3 className="font-medium mb-4">Payment Method</h3>

            <RadioGroup defaultValue="cod">
              <FormControlLabel
                value="cod"
                control={<Radio />}
                label="Cash on Delivery"
              />
              <FormControlLabel
                value="card"
                control={<Radio />}
                label="Credit / Debit Card"
              />
            </RadioGroup>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-[30%] bg-white rounded-md p-6 h-fit">

          <h3 className="font-medium mb-4">Order Summary</h3>

          {cartItems.map((item) => (
            <div
              key={item._id}
              className="flex justify-between text-sm mb-2"
            >
              <span>
                {item.name} × {item.qty}
              </span>
              <span>₹{item.price * item.qty}</span>
            </div>
          ))}

          <div className="flex justify-between text-sm mt-4">
            <span>Shipping</span>
            <span className="text-green-600">Free</span>
          </div>

          <div className="flex justify-between font-semibold text-lg mb-6 mt-4">
            <span>Total</span>
            <span className="text-blue-600">₹{subtotal}</span>
          </div>

          <Button
            variant="contained"
            fullWidth
            className="!bg-blue-600 !py-3"
            onClick={placeOrder}
            disabled={cartItems.length === 0}
          >
            Place Order
          </Button>
        </div>

      </div>
    </section>
  );
};

export default CheckoutPage;
