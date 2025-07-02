import React, { useState, useContext } from "react";
import Images from "../constant/image";
import { LiaUserCircleSolid } from "react-icons/lia";
import { FaShoppingBag, FaEnvelope, FaTruck } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";
import { CartContext } from "../context/card.jsx";

export default function Navbar() {
  const [showCartMsg, setShowCartMsg] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { cartItems, removeFromCart } = useContext(CartContext);

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "Shop", to: "/Shop" },
    { name: "Sale", to: "/Sale" },
    { name: "Features", to: "/Featurrs" },
    { name: "Blog", to: "/Blog" },
    { name: "About", to: "/About" },
    { name: "Contact", to: "/Contact" },
  ];

  const TopInfoBar = () => (
    <div className="bg-gray-100 flex flex-col space-y-2 py-2 text-sm text-gray-600 px-6">
      <div className="flex items-center space-x-2">
        <FaTruck />
        <span>Free shipping for standard order over $100</span>
      </div>
      <div className="flex items-center space-x-2">
        <FaEnvelope />
        <a href="mailto:fashe@example.com" className="hover:underline">
          fashe@example.com
        </a>
      </div>
    </div>
  );

  return (
    <>
      <div className="flex items-center justify-between px-6 py-4 bg-white shadow-md relative">
        <div className="flex items-center">
         <Link to="/">
  <img src={Images.logo} alt="Logo" className="h-6" />
</Link>

        </div>

        <div className="hidden md:flex space-x-6 text-sm font-medium text-gray-700">
          {navLinks.map(({ name, to }) => (
            <Link key={name} to={to} className="hover:text-black">
              {name}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-4 text-xl text-gray-700 relative">
          <Link
            to="/user"
            aria-label="Go to User Page"
            className="hover:text-black"
          >
            <LiaUserCircleSolid className="cursor-pointer size-9" />
          </Link>

          <span>|</span>

          <div className="relative">
            <FaShoppingBag
              className="cursor-pointer"
              onClick={() => setShowCartMsg(!showCartMsg)}
            />

            <span className="absolute -top-2 -right-2 bg-black text-white text-xs font-semibold w-5 h-5 flex items-center justify-center rounded-full select-none">
              {cartItems.length}
            </span>

            {showCartMsg && (
              <div className="absolute top-8 right-0 w-[339px] max-h-[300px] overflow-y-auto bg-white border border-gray-200 shadow-md rounded-md p-4 text-sm font-medium z-50">
                {cartItems.length === 0 ? (
                  <p>Your shopping cart is empty!</p>
                ) : (
                  <ul>
                    {cartItems.map((item) => (
                      <li
                        key={item.id}
                        className="flex items-center justify-between py-2 border-b last:border-none"
                      >
                        <div className="flex items-center space-x-2">
                          <img
                            src={item.img}
                            alt={item.title}
                            className="w-12 h-12 object-cover rounded"
                          />
                          <div>
                            <p className="font-medium">{item.title}</p>
                            <p className="text-gray-600">
                              ${item.price.toFixed(2)}
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-600 hover:text-red-800 font-bold text-lg"
                          aria-label={`Remove ${item.title} from cart`}
                        >
                          &times;
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="block md:hidden cursor-pointer text-2xl focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <IoClose /> : <IoMenu />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200 shadow-md">
          <TopInfoBar />

          <ul className="flex flex-col space-y-2 text-gray-700 font-medium uppercase px-6 py-4">
            {navLinks.slice(0, 6).map(({ name, to }) => (
              <li
                key={name}
                className="border-b border-gray-300 last:border-b-0"
              >
                <Link
                  to={to}
                  className="block py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
}
