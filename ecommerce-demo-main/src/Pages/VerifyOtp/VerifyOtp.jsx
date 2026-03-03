import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const VerifyOtp = () => {
  const navigate = useNavigate();

  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [error, setError] = useState("");
  const inputsRef = useRef([]);

  const HARDCODED_OTP = "123456";

  const handleChange = (value, index) => {
    if (isNaN(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    setError("");

    if (value && index < 5) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  const handleVerify = () => {
    const enteredOtp = otp.join("");

    if (enteredOtp === HARDCODED_OTP) {
      alert("OTP verified successfully ✅");
      navigate("/login");
    } else {
      setError("Invalid OTP. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-[#f6f3f0] flex items-center justify-center">
      <div className="bg-white w-[420px] p-8 rounded-md shadow-md text-center">

        {/* ICON */}
        <div className="flex justify-center mb-4">
          <div className="bg-blue-100 p-3 rounded-full">
            <svg
              className="w-10 h-10 text-blue-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l7 4v6c0 5-3.5 9-7 10-3.5-1-7-5-7-10V6l7-4z" />
            </svg>
          </div>
        </div>

        {/* TEXT */}
        <h2 className="text-xl font-semibold mb-2">Verify OTP</h2>
        <p className="text-gray-500 text-sm mb-6">
          OTP sent to <span className="text-blue-600 font-medium">your email</span>
        </p>

        {/* OTP INPUTS */}
        <div className="flex justify-between mb-4">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputsRef.current[index] = el)}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="w-12 h-12 border rounded-md text-center text-lg focus:outline-none focus:border-orange-500"
            />
          ))}
        </div>

        {error && (
          <p className="text-red-500 text-sm mb-3">{error}</p>
        )}

        {/* BUTTON */}
        <button
          onClick={handleVerify}
          className="w-full bg-blue-600 text-white py-3 rounded-md font-medium hover:bg-black transition"
        >
          VERIFY OTP
        </button>

     
        <p className="text-sm text-gray-500 mt-4">
          Didn’t receive OTP?{" "}
          <span className="text-blue-600 cursor-pointer hover:underline">
            Resend
          </span>
        </p>

        <p className="text-xs text-gray-400 mt-3">
          Demo OTP: <b>123456</b>
        </p>
      </div>
    </div>
  );
};

export default VerifyOtp;
