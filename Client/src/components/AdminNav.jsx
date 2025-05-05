import React, { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import logo from "../images/logo.gif";
import { Link } from "react-router-dom";

const AdminNavbar = () => {
  const [isVisible, setVisibility] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [nav, setNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50); // Navbar becomes sticky after scrolling past 50px
      setNav(window.scrollY > 780); // Navbar becomes sticky after scrolling past 50px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    setVisibility(true);
  };
  return (
    <div
      className={`w-screen text-white fixed z-[9]  h-[100px] flex justify-between items-center transition-all duration-500  ${
        isSticky
          ? "top-0  bg-black/80 text-white"
          : "top-[50px] bg-transparent "
      }`}
    >
      <div className="w-[100%] mx-[30px] h-[100px] flex justify-between items-center">
        <div className="flex gap-5 w-[350px]">
          <Link to="/admin">
            <button className="w-[100px] text-[20px] h-[70px]">Home</button>
          </Link>
          <Link to="/shop">
            <button className="w-[100px] text-[20px] h-[70px]">Shop</button>
          </Link>
          {/* <Link>
            <button className="w-[100px] text-[20px] h-[70px]">About Us</button>
          </Link> */}
        </div>
        <div className=" text-center w-[350px]">
          <div className="flex justify-center items-center">
            <img
              src={logo}
              alt="Animated GIF"
              className="w-[150px] h-[150px] object-cover"
            />
          </div>
        </div>
        <div className="flex gap-7 w-[350px] items-center justify-end pr-[50px]">
          <Link to="/adminProducts">
            <button className="w-[100px] text-[20px] h-[70px]">Products</button>
          </Link>
          <Link to="/adminCategories">
            <button className="w-[100px] text-[20px] h-[70px]">
              Categories
            </button>
          </Link>
          {/* <FaShoppingCart
            size={20}
            onClick={handleClick}
            className="cursor-pointer"
          /> */}
          {/* <Link to="/profile">
            <FaUser size={20} />
          </Link> */}
        </div>
        {/* <Cart isVisible={isVisible} setVisibility={setVisibility} /> */}
      </div>
    </div>
  );
};

export default AdminNavbar;
