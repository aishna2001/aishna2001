import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#f5f5f5] text-gray-700 pt-10">
      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto px-6 pb-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* BRAND */}
        <div>
          <h2 className="text-2xl font-bold text-black mb-4">
            CLASSY<span className="text-red-500">SHOP</span>
          </h2>
          <p className="text-sm leading-6 text-gray-600">
            Your one-stop destination for fashion, electronics, groceries,
            beauty & more. Shop smart. Shop classy.
          </p>
        </div>

        {/* SHOP */}
        <div>
          <h3 className="font-semibold text-black mb-4">Shop</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="hover:text-black cursor-pointer">Fashion</li>
            <li className="hover:text-black cursor-pointer">Electronics</li>
            <li className="hover:text-black cursor-pointer">Groceries</li>
            <li className="hover:text-black cursor-pointer">Beauty</li>
            <li className="hover:text-black cursor-pointer">Wellness</li>
          </ul>
        </div>

        {/* HELP */}
        <div>
          <h3 className="font-semibold text-black mb-4">Help</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="hover:text-black cursor-pointer">My Account</li>
            <li className="hover:text-black cursor-pointer">Orders & Returns</li>
            <li className="hover:text-black cursor-pointer">Shipping Policy</li>
            <li className="hover:text-black cursor-pointer">FAQs</li>
            <li className="hover:text-black cursor-pointer">Contact Us</li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div>
          <h3 className="font-semibold text-black mb-4">Connect with us</h3>
          <div className="flex gap-4 text-lg text-gray-600">
            <FaFacebookF className="cursor-pointer hover:text-black" />
            <FaInstagram className="cursor-pointer hover:text-black" />
            <FaTwitter className="cursor-pointer hover:text-black" />
            <FaYoutube className="cursor-pointer hover:text-black" />
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} ClassyShop. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

