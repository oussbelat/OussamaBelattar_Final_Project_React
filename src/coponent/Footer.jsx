import React from 'react';
import { FaFacebook, FaTwitter, FaPinterest, FaInstagram } from "react-icons/fa";
import { GrGooglePlus } from "react-icons/gr";

export default function Footer() {
  return (
    <footer className="bg-gray-100 pt-16 pb-8 mt-16 text-sm text-gray-600 font-b">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-6 flex-wrap md:flex-nowrap">
        <div className="flex-[2] min-w-[200px]">
          <h3 className="text-black font-bold mb-4">GET IN TOUCH</h3>
          <p className="mb-6">
            Any questions? Let us know in store at 8th floor, 379 Hudson St,
            New York, NY 10018 or call us on (+1) 96 716 6979
          </p>
          <div className="flex gap-4 text-lg">
            <FaFacebook />
            <FaTwitter />
            <FaPinterest />
            <GrGooglePlus />
            <FaInstagram />
          </div>
        </div>
        <div className="flex-1 min-w-[150px]">
          <h3 className="text-black font-bold mb-5">CATEGORIES</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-black">Men</a></li>
            <li><a href="#" className="hover:text-black">Women</a></li>
            <li><a href="#" className="hover:text-black">Dresses</a></li>
            <li><a href="#" className="hover:text-black">Sunglasses</a></li>
          </ul>
        </div>
        <div className="flex-1 min-w-[150px]">
          <h3 className="mb-5 text-black font-bold">LINKS</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-black">Search</a></li>
            <li><a href="#" className="hover:text-black">About Us</a></li>
            <li><a href="#" className="hover:text-black">Contact Us</a></li>
            <li><a href="#" className="hover:text-black">Returns</a></li>
          </ul>
        </div>
        <div className="flex-1 min-w-[150px]">
          <h3 className="text-black font-bold mb-4">HELP</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-black">Track Order</a></li>
            <li><a href="#" className="hover:text-black">Returns</a></li>
            <li><a href="#" className="hover:text-black">Shipping</a></li>
            <li><a href="#" className="hover:text-black">FAQs</a></li>
          </ul>
        </div>
        <div className="flex-[2] min-w-[200px]">
          <h3 className="text-black font-bold mb-4">NEWSLETTER</h3>
          <input
            type="email"
            placeholder="Email Address"
            className="w-full border-b border-gray-400 bg-transparent py-2 mb-4 focus:outline-none"
          />
          <button className="w-full bg-black text-white py-3 rounded-full font-semibold hover:bg-gray-800 transition duration-300">
            SUBSCRIBE
          </button>
        </div>
      </div>
      <div className="text-center text- text-[16px] mt-12 px-6 ">
        Copyright &copy; 2022 <span className="font-semibold text-[#797373e8]">Shopify Theme by MassTechnologist</span>. All rights reserved.
      </div>
    </footer>
  );
}
