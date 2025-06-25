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
    <div className="top-0 fixed z-[9]">
      <div className="relative  h-[50px] bg-white text-black text-[17px] font-semibold flex items-center justify-center">
        <h3>Order Now Free Shipping!</h3>
      </div>
      <div
        className={
          "w-screen text-white  h-[150px] flex justify-between items-center transition-all duration-500 bg-black"
        }
      >
        <div className="w-full mx-[30px] h-[100px] flex justify-between items-center">
          {/* Left Nav */}
          <div className="flex gap-5 w-[350px]">
            <Link to="/">
              <button className="w-[100px] text-[20px] h-[70px] font-semibold">
                Home
              </button>
            </Link>
            <Link to="/shop">
              <button className="w-[100px] text-[20px] h-[70px] font-semibold">
                Shop
              </button>
            </Link>
            {/* <Link>
            <button className="w-[100px] text-[20px] h-[70px]">About Us</button>
            </Link> */}
          </div>

          {/* Center Logo */}
          <div className="text-center w-[350px]">
            <div className="flex justify-center items-center">
              <img
                src={logo}
                alt="Logo"
                className="w-[150px] h-[150px] object-cover"
              />
            </div>
          </div>

          {/* Right Nav */}
          <div className="flex gap-7 w-[350px] items-center justify-end pr-[50px]">
            {/* Cart visible to all users */}
            <FaShoppingCart
              size={20}
              onClick={handleClick}
              className="cursor-pointer"
            />

            {/* Show admin link if admin */}
            {role === "admin" && (
              <Link to="/admin">
                <button className="text-[16px]">Admin Panel</button>
              </Link>
            )}

            {/* Show profile if user */}
            {role === "user" && (
              <Link to="/profile">
                <FaUser size={20} className="cursor-pointer" />
              </Link>
            )}

            {/* Show Login/Logout based on auth */}
            {!role ? (
              <Link to="/login">
                <FaUser size={20} />
              </Link>
            ) : (
              <button onClick={logout} className=" text-[16px]">
                Logout
              </button>
            )}
          </div>
          <Cart isVisible={isVisible} setVisibility={setVisibility} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
