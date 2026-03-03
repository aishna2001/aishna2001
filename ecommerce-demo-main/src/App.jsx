import { BrowserRouter, Routes, Route } from "react-router-dom";

import UserLayout from "./layouts/UserLayout";
import ProductOwnerLayout from "./layouts/ProductOwnerLayout";
import AdminLayout from "./layouts/AdminLayout";
import SuperAdminLayout from "./layouts/SuperAdminLayout";

import RoleProtectedRoute from "./utils/RoleProtectedRoute";

import Home from "./Pages/Home";
import ProductDetails from "./Pages/Home/ProductDetails";
import Login from "./Pages/Home/Login";
import Register from "./Pages/Home/Register";
import CartPage from "./Pages/Home/CartPage";
import CheckoutPage from "./Pages/Home/CheckoutPage";
import VerifyOtp from "./Pages/VerifyOtp/VerifyOtp";
import MyAccount from "./Pages/Home/MyAccount";

/* ✅ NEW PAGES */
import MyOrders from "./Pages/Home/MyAccount/MyOrders";
import Wishlist from "./Pages/Home/MyAccount/Wishlist";

import Products from "./Pages/ProductOwner/Products";
import OwnerDashboard from "./Pages/ProductOwner/Dashboard";
import AddProduct from "./Pages/ProductOwner/AddProduct";

import Users from "./Pages/Admin/Users";
import AdminProducts from "./Pages/Admin/AdminProducts";
import AdminDashboard from "./Pages/Admin/AdminDashboard";

import Admins from "./Pages/SuperAdmin/Admins";
import SuperAdminDashboard from "./Pages/SuperAdmin/SuperAdminDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ================= CUSTOMER ROUTES ================= */}
        <Route element={<UserLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/productdetails/:id" element={<ProductDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cartpage" element={<CartPage />} />
          <Route path="/checkoutpage" element={<CheckoutPage />} />
          <Route path="/verify" element={<VerifyOtp />} />

          {/* ACCOUNT */}
          <Route path="/account" element={<MyAccount />} />
          <Route path="/account/orders" element={<MyOrders />} />
          <Route path="/account/wishlist" element={<Wishlist />} />
        </Route>

        {/* ================= PRODUCT OWNER ================= */}
        <Route
          path="/product-owner"
          element={
            <RoleProtectedRoute allowedRoles={["owner"]}>
              <ProductOwnerLayout />
            </RoleProtectedRoute>
          }
        >
          <Route index element={<OwnerDashboard />} />
          <Route path="products/add" element={<AddProduct />} />
          <Route path="products" element={<Products />} />
        </Route>

        {/* ================= ADMIN ================= */}
        <Route
          path="/admin"
          element={
            <RoleProtectedRoute allowedRoles={["admin"]}>
              <AdminLayout />
            </RoleProtectedRoute>
          }
        >
          <Route index element={<AdminDashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="products" element={<AdminProducts />} />
        </Route>

        {/* ================= SUPER ADMIN ================= */}
        <Route
          path="/superadmin"
          element={
            <RoleProtectedRoute allowedRoles={["superadmin"]}>
              <SuperAdminLayout />
            </RoleProtectedRoute>
          }
        >
          <Route index element={<SuperAdminDashboard />} />
          <Route path="admins" element={<Admins />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;


