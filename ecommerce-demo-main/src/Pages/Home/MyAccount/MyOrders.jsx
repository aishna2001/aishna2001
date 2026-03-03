import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Chip,
  Divider,
} from "@mui/material";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  /* ======================
     DEMO ORDERS (AUTO FALLBACK)
  ====================== */
  const demoOrders = [
    {
      _id: "1",
      status: "Delivered",
      totalAmount: 2499,
      createdAt: new Date(),
      items: [
        { name: "Running Shoes", price: 1499, quantity: 1 },
        { name: "Sports T-Shirt", price: 1000, quantity: 1 },
      ],
    },
    {
      _id: "2",
      status: "Processing",
      totalAmount: 1299,
      createdAt: new Date(),
      items: [
        { name: "Wireless Headphones", price: 1299, quantity: 1 },
      ],
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

    fetchOrders(token);
  }, []);

  /* ======================
     FETCH ORDERS
  ====================== */
  const fetchOrders = async (token) => {
    try {
      const res = await axios.get(
        "http://localhost:5051/api/orders/my-orders",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // if no real orders → show demo
      if (res.data.length === 0) {
        setOrders(demoOrders);
      } else {
        setOrders(res.data);
      }
    } catch (error) {
      console.log(error);
      setOrders(demoOrders);
    }
  };

  /* ======================
     STATUS COLOR
  ====================== */
  const getStatusColor = (status) => {
    if (status === "Delivered") return "success";
    if (status === "Processing") return "warning";
    return "default";
  };

  return (
    <section className="min-h-screen bg-[#f5f5f5] py-10">
      <Container maxWidth="md">

        <Typography variant="h4" className="mb-8 font-semibold">
          My Orders
        </Typography>

        {orders.map((order) => (
          <Card
            key={order._id}
            className="mb-6 shadow-md rounded-lg"
          >
            <CardContent>

              {/* HEADER */}
              <div className="flex justify-between items-center mb-3">
                <Typography variant="h6">
                  Order #{order._id}
                </Typography>

                <Chip
                  label={order.status}
                  color={getStatusColor(order.status)}
                  size="small"
                />
              </div>

              <Divider className="mb-3" />

              {/* ITEMS */}
              {order.items?.map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between py-2"
                >
                  <Typography>
                    {item.name} × {item.quantity}
                  </Typography>

                  <Typography>
                    ₹{item.price}
                  </Typography>
                </div>
              ))}

              <Divider className="my-3" />

              {/* FOOTER */}
              <div className="flex justify-between items-center">
                <Typography variant="body2" color="text.secondary">
                  {new Date(order.createdAt).toLocaleDateString()}
                </Typography>

                <Typography className="font-semibold">
                  Total: ₹{order.totalAmount}
                </Typography>
              </div>

            </CardContent>
          </Card>
        ))}

      </Container>
    </section>
  );
};

export default Orders;
