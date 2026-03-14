import React, { useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Login failed");
        return;
      }

      // save token + user
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      alert("Login successful");

      // role based redirect
      const role = data.user.role;

      if (role === "owner") {
        navigate("/product-owner");
      } else if (role === "admin") {
        navigate("/admin");
      } else if (role === "superadmin") {
        navigate("/superadmin");
      } else {
        navigate("/account");
      }
    } catch (error) {
      alert("Server error");
    }
  };

  const testBackend = async () => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}`
      );
      const data = await res.text();
      alert(data);
    } catch (error) {
      alert("Backend not reachable");
    }
  };

  return (
    <section className="min-h-screen bg-[#f5f5f5] flex items-center justify-center">
      <div className="w-full max-w-[420px] bg-white rounded-lg shadow-md p-8">
        <h2 className="text-[22px] font-semibold text-center mb-6">
          Login to your account
        </h2>

        <input
          type="email"
          placeholder="Email ID"
          className="w-full mb-4 px-4 py-3 border rounded-md outline-none focus:border-blue-600"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-3 border rounded-md outline-none focus:border-blue-600"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="text-right mt-2 mb-6">
          <RouterLink
            to="/verify"
            className="text-sm text-blue-600 hover:underline"
          >
            Forgot Password?
          </RouterLink>
        </div>

        <Button
          variant="contained"
          fullWidth
          className="!bg-blue-600 !py-3 !rounded-md"
          onClick={handleLogin}
        >
          Login
        </Button>

        <Button
          variant="outlined"
          fullWidth
          className="!mt-3"
          onClick={testBackend}
        >
          Test Backend
        </Button>

        <p className="text-center text-sm mt-4">
          Don’t have an account?{" "}
          <RouterLink to="/register" className="text-blue-600 font-medium">
            Register
          </RouterLink>
        </p>
      </div>
    </section>
  );
};

export default Login;

