import React, { useState, useEffect } from "react";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import logo from "../images/logo.gif";
import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import Cart from "./Cart/Cart";

const Navbar = () => {
  const [isVisible, setVisibility] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [role, setRole] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setRole(decoded.role);
      } catch (err) {
        console.error("Invalid token");
        setRole(null);
      }
    }
  }, []);

  const handleClick = () => setVisibility(true);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setRole(null);
    navigate("/login");
  };

  return (
    <div className="top-0 fixed z-[9] w-screen">
      {/* Banner */}
      <div className="relative h-[20px] xl:h-[50px] bg-white text-black text-[8px] xl:text-[17px] font-semibold flex items-center justify-center">
        <h3>Order Now Free Shipping!</h3>
      </div>

      {/* Navbar */}
      <div
        className={`px-[20px] text-white h-[70px] lg:h-[150px] flex items-center duration-500 bg-black`}
      >
        <div className="flex justify-around  items-center w-full lg:mx-[50px]">
          {/* Left Nav */}
          <div className="flex gap-5">
            <Link to="/">
              <h1 className="text-[10px] lg:text-[20px] font-semibold">Home</h1>
            </Link>
            <Link to="/shop">
              <h1 className="text-[10px] lg:text-[20px] font-semibold">Shop</h1>
            </Link>
          </div>

          {/* Center Logo */}
          <div className="flex justify-center items-center w-[120px]">
            <img
              src={logo}
              alt="Logo"
              className="w-[80px] lg:w-[150px] object-cover"
            />
          </div>

          {/* Right Nav */}
          <div className="flex gap-5 lg:gap-7 items-center">
            {/* Cart */}
            <FaShoppingCart
              onClick={handleClick}
              className="cursor-pointer w-[14px] h-[14px] lg:w-[25px] lg:h-[25px]"
            />

            {/* Admin Panel */}
            {role === "admin" && (
              <Link to="/admin">
                <button className="text-[16px]">Admin Panel</button>
              </Link>
            )}

            {/* User Profile */}
            {role === "user" && (
              <Link to="/profile">
                <FaUser className="cursor-pointer w-[14px] h-[14px] lg:w-[25px] lg:h-[25px]" />
              </Link>
            )}

            {/* Login or Logout */}
            {!role ? (
              <Link to="/login">
                <FaUser className="cursor-pointer w-[14px] h-[14px] lg:w-[25px] lg:h-[25px]" />
              </Link>
            ) : (
              <button onClick={logout} className="text-[16px]">
                Logout
              </button>
            )}
          </div>
        </div>
        {/* Cart Modal */}
        <Cart isVisible={isVisible} setVisibility={setVisibility} />
      </div>
    </div>
  );
};

export default Navbar;
