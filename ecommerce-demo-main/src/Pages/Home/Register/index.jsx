import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Button from "@mui/material/Button";

const Register = () => {
  return (
    <section className="min-h-screen bg-[#f5f5f5] flex items-center justify-center">
      <div className="w-full max-w-[420px] bg-white rounded-lg shadow-md p-8">

        <h2 className="text-[22px] font-semibold text-center mb-6">
          Register with a new account
        </h2>

        {/* Full Name */}
        <input
          type="text"
          placeholder="Full Name"
          className="w-full mb-4 px-4 py-3 border rounded-md outline-none focus:border-blue-600"
        />

        {/* Email */}
        <input
          type="email"
          placeholder="Email ID"
          className="w-full mb-4 px-4 py-3 border rounded-md outline-none focus:border-blue-600"
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 px-4 py-3 border rounded-md outline-none focus:border-blue-600"
        />

        {/* Register Button */}
        <Button
          variant="contained"
          fullWidth
          className="!bg-blue-600 !py-3 !rounded-md"
        >
          Register
        </Button>

        {/* Login link */}
        <p className="text-center text-sm mt-4">
          Already have an account?{" "}
          <RouterLink to="/login" className="text-blue-600 font-medium">
            Login
          </RouterLink>
        </p>

        {/* Divider */}
        <div className="text-center text-sm text-gray-500 my-4">
          Or continue with
        </div>

        {/* Google button (UI only) */}
        <button className="w-full border py-3 rounded-md flex items-center justify-center gap-2 text-sm hover:bg-gray-50">
          <img
            src="https://www.svgrepo.com/show/355037/google.svg"
            alt="google"
            className="w-5 h-5"
          />
          Login with Google
        </button>

      </div>
    </section>
  );
};

export default Register;