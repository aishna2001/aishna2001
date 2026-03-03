import React, { useState } from "react";
import { Link as RouterLink, useParams } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import { addToCart } from "../../../utils/cart";


import { FaRegHeart } from "react-icons/fa";
import { AiOutlineSwap } from "react-icons/ai";

const ProductDetails = () => {
  const { id } = useParams(); 

  const [selectedSize, setSelectedSize] = useState(0);
  const [quantity, setQuantity] = useState(1);

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4">

        {/* Breadcrumbs */}
        <Breadcrumbs aria-label="breadcrumb" className="mb-6">
          <Link component={RouterLink} to="/" underline="hover">
            Home
          </Link>
          <Typography color="text.primary">Product</Typography>
        </Breadcrumbs>

        <div className="flex gap-12">

          {/* LEFT IMAGE */}
          <div className="w-[40%]">
            <img
              src="https://api.spicezgold.com/download/file_1734529297930_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-1-202307260626.jpg"
              alt="Product"
              className="w-full rounded-2xl border"
            />
          </div>

          {/* RIGHT INFO */}
          <div className="w-[60%]">

            <h1 className="text-[28px] font-semibold mb-2">
              A-Line Kurti With Sharara & Dupatta
            </h1>

            <div className="flex items-center gap-3 mb-4">
              <Rating value={4} readOnly size="small" />
              <span className="text-sm text-gray-500">(15 Reviews)</span>
            </div>

            <div className="flex items-center gap-4 mb-5">
              <span className="line-through text-gray-400 text-lg">₹500</span>
              <span className="text-[24px] font-bold text-blue-600">₹700</span>
            </div>

            <p className="text-[15px] text-gray-600 mb-8 max-w-[90%]">
              This is a beautiful cotton kurti set perfect for daily and festive wear.
              Elegant design with comfortable fabric. Lorem ipsum dolor sit amet, 
              consectetur adipisicing elit. Accusamus facilis officiis quibusdam 
              architecto iusto placeat et labore, consequatur, quam dolore vero 
              soluta aperiam, quidem temporibus esse repellat suscipit eius pariatur.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis
               quod maiores quam iure at accusantium quibusdam autem! Expedita,
                aut quaerat fuga possimus repellat voluptas dicta cumque quis iure 
                placeat molestiae.

            </p>

            

            {/* QUANTITY + ACTIONS */}
            <div className="flex items-center gap-6">

              {/* Quantity */}
              <div className="flex items-center border rounded-full px-3 py-2">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="text-lg px-3"
                >
                  −
                </button>

                <span className="px-4 font-medium">{quantity}</span>

                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="text-lg px-3"
                >
                  +
                </button>
              </div>

              {/* Add to Cart */}
              <Link to="/CartPage">
<button
  className="bg-blue-600 text-white px-6 py-3 rounded-md"
  onClick={() => {
    addToCart({
      _id: "1",
      name: "A-Line Kurti With Sharara & Dupatta",
      price: 700,
      image:
        "https://api.spicezgold.com/download/file_1734529297930_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-1-202307260626.jpg",
      brand: "Sangria",
    });

    alert("Added to cart");
  }}
>
  ADD TO CART
</button>

</Link>

              {/* Wishlist */}
              <button className="w-10 h-10 flex items-center justify-center border rounded-full hover:text-blue-600">
                <FaRegHeart />
              </button>

              {/* Compare */}
              <button className="w-10 h-10 flex items-center justify-center border rounded-full hover:text-blue-600">
                <AiOutlineSwap />
              </button>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;