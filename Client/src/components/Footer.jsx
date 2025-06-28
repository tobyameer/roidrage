import React from "react";
import { FaInstagram } from "react-icons/fa";
import logoWhite from "../images/RoidRageWhite.png";
import { AiFillTikTok } from "react-icons/ai";

const Footer = () => {
  return (
    <div className=" mt-[150px]  lg:mt-[350px] w-screen flex flex-col items-center">
      {/* Logo Centered */}
      <img src={logoWhite} alt="" className="w-[35px] lg:w-[80px]" />

      {/* Links & Subscribe */}
      <div className="px-[35px] lg:px-[50px] w-screen flex justify-between flex-col lg:flex-row">
        {/* Link Grid Centered */}
        <div>
          <ul className="truncate text-[8px] w-full my-4 grid grid-cols-2 lg:grid-cols-3 lg:text-[15px] gap-y-2 gap-x-6 text-[#9D9D9D]">
            <li>About Us</li>
            <li>Contact Us</li>
            <li>FAQs</li>
            <li>Shipping Returning</li>
            <li>Sizing Guide</li>
            <li>Order Tracking</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Refund Policy</li>
          </ul>
        </div>

        {/* Subscribe Section Aligned to the Far Left */}
        <div className="w-fit flex justify-end">
          <div className="w-[250px] lg:w-[500px] flex flex-col">
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Email"
                className="w-full text-[8px] lg:text-[15px] h-[25px] lg:h-[70px] pl-[10px] lg:pl-[50px] rounded-full bg-inherit border border-white/50 placeholder:text-white/40"
              />
              <button className="text-[8px] h-[25px] lg:text-[15px] absolute top-0 bottom-0 right-0 bg-white text-black w-[80px] lg:w-[200px] lg:h-full rounded-full hover:bg-inherit hover:text-white duration-300">
                Subscribe
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex mt-[10px] lg:mt-[20px] gap-2 lg:gap-5 pl-[10px] lg:pl-[20px]">
              <FaInstagram
                color="white"
                className="IgGradient w-[20px] h-[20px] lg:w-[30px] lg:h-[30px] rounded-lg transition-all duration-500 cursor-pointer"
              />
              <AiFillTikTok
                color="white"
                className="TiktokGradient w-[20px] h-[20px] lg:w-[30px] lg:h-[30px] rounded-lg transition-all duration-500 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Centered */}
      <div className="flex items-center mx-[20px] lg:mx-[50px] my-[20px] lg:my-[100px] flex-col w-full justify-center">
        <div className="w-[calc(100%-100px)] bg-gray-500/50 h-[1px]"></div>
        <h1 className="py-[10px] lg:py-[20px] text-[10px] lg:text-[15px] text-gray-400">
          Copyright 2025
        </h1>
      </div>
    </div>
  );
};

export default Footer;
