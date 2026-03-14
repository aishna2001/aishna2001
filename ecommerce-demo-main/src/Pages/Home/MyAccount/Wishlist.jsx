import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Divider,
} from "@mui/material";

const Wishlist = () => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  /* ======================
     DEMO PRODUCTS
  ====================== */
  const demoWishlist = [
    {
      productId: "1",
      name: "Nike Running Shoes",
      price: 2499,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    },
    {
      productId: "2",
      name: "Wireless Headphones",
      price: 1799,
      image:
        "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd",
    },
    {
      productId: "3",
      name: "Smart Watch",
      price: 2999,
      image:
        "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b",
    },
  ];

  /* ======================
     PROTECT PAGE
  ====================== */
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }

    fetchWishlist(token);
  }, []);

  /* ======================
     FETCH WISHLIST
  ====================== */
  const fetchWishlist = async (token) => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/users/wishlist`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // show demo if empty
      if (res.data.length === 0) {
        setItems(demoWishlist);
      } else {
        setItems(res.data);
      }
    } catch (error) {
      console.log(error);
      setItems(demoWishlist);
    }
  };

  return (
    <section className="min-h-screen bg-[#f5f5f5] py-10">
      <Container maxWidth="md">

        <Typography variant="h4" className="mb-8 font-semibold">
          Wishlist
        </Typography>

        {items.map((item, index) => (
          <Card key={index} className="mb-5 shadow-md">
            <CardContent>

              <div className="flex gap-4 items-center">

                {/* IMAGE */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded"
                />

                {/* DETAILS */}
                <div className="flex-1">
                  <Typography variant="h6">
                    {item.name}
                  </Typography>

                  <Typography className="text-gray-600">
                    ₹{item.price}
                  </Typography>
                </div>

                {/* ACTIONS */}
                <div className="flex flex-col gap-2">
                  <Button
                    variant="contained"
                    size="small"
                    onClick={() => navigate("/cartpage")}
                  >
                    Move to Cart
                  </Button>

                  <Button
                    variant="outlined"
                    color="error"
                    size="small"
                  >
                    Remove
                  </Button>
                </div>

              </div>

              <Divider className="mt-4" />

            </CardContent>
          </Card>
        ))}

      </Container>
    </section>
  );
};

export default Wishlist;