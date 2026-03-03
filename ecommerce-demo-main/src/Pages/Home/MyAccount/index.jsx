import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { FaBox, FaHeart, FaUser } from "react-icons/fa";

const MyAccount = () => {
  const navigate = useNavigate();

  /* ======================
     PROTECT PAGE (NEW)
  ====================== */
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  /* ======================
     LOGOUT
  ====================== */
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login");
  };

  return (
    <section className="min-h-screen bg-[#f5f5f5] py-10">
      <div className="max-w-5xl mx-auto px-4">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-semibold mb-1">
            My Account
          </h1>
          <p className="text-gray-600">
            Welcome back 👋 You are logged in
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Orders */}
          <div
            onClick={() => navigate("/account/orders")}
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition cursor-pointer"
          >
            <FaBox className="text-blue-600 text-2xl mb-3" />
            <h3 className="text-lg font-medium mb-1">My Orders</h3>
            <p className="text-sm text-gray-600">
              View your order history
            </p>
          </div>

          {/* Wishlist */}
          <div
            onClick={() => navigate("/account/wishlist")}
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition cursor-pointer"
          >
            <FaHeart className="text-red-500 text-2xl mb-3" />
            <h3 className="text-lg font-medium mb-1">Wishlist</h3>
            <p className="text-sm text-gray-600">
              Products you’ve saved
            </p>
          </div>

          {/* Profile */}
          <div
            onClick={() => navigate("/account/profile")}
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition cursor-pointer"
          >
            <FaUser className="text-green-600 text-2xl mb-3" />
            <h3 className="text-lg font-medium mb-1">Profile</h3>
            <p className="text-sm text-gray-600">
              Manage your account details
            </p>
          </div>

        </div>

        {/* Logout */}
        <div className="mt-10">
          <Button
            variant="outlined"
            color="error"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </div>

      </div>
    </section>
  );
};

export default MyAccount;
