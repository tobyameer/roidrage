import React from "react";
import { FaInstagram } from "react-icons/fa";
import logoWhite from "../images/RoidRageWhite.png";
import { AiFillTikTok } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="mt-[250px] lg:mt-[350px] w-screen flex flex-col items-center">
      <img src={logoWhite} alt="" className="w-[35px] lg:w-[50px]" />

      <div className="px-[15px] lg:px-[50px] w-full flex justify-between">
        <div>
          <ul className="text-[10px] lg:text-[15px] grid grid-cols-2 lg:grid-cols-3 gap-y-2 gap-x-4 w-full text-[#9D9D9D]">
            {/* Company */}
            <ol>About Us</ol>
            <ol>Contact Us</ol>
            <ol>FAQs</ol>
            {/* Customer Support */}
            <ol>Shipping Returning</ol>
            <ol>Sizing Guide</ol>
            <ol>Order Tracking</ol>
            {/* Legal */}
            <ol>Privacy Policy</ol>
            <ol>Terms & Conditions</ol>
            <ol>Refund Policy</ol>
          </ul>
        </div>

        {/* Subscribe */}
        <div className="w-[250px] lg:w-[500px] flex flex-col">
          <div className=" relative">
            <input
              type="text"
              placeholder="Email"
              className="w-full text-[10px] lg:text-[15px] h-[35px] lg:h-[70px] pl-[20px] lg:pl-[50px] rounded-full bg-inherit border border-white/50 placeholder:text-white/40"
            />
            <button className="text-[10px] lg:text-[15px] absolute top-0 bottom-0 right-0 bg-white text-black w-[100px] lg:w-[200px] rounded-full hover:bg-inherit hover:text-white duration-300 ">
              Subscribe
            </button>
          </div>
          <div className="flex mt-[10px] lg:mt-[20px] gap-2 lg:gap-5 pl-[10px] lg:pl-[20px]">
            <FaInstagram
              color="white"
              className="IgGradient w-[20px] h-[20px] lg:w-[30px] lg:h-[30px] rounded-lg transition-all duration-500 cursor-pointer"
            />

            <AiFillTikTok
              color="white"
              size={30}
              className="TiktokGradient w-[20px] h-[20px] lg:w-[30px] lg:h-[30px] rounded-lg transition-all duration-500 cursor-pointer"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center mx-[20px] lg:mx-[50px] my-[20px] lg:my-[100px] flex-col w-full justify-center">
        <div className="w-[calc(100%-100px)] bg-gray-500/50 h-[1px]"></div>
        <h1 className=" py-[10px] lg:py-[20px] text-[10px] lg:text-[15px] text-gray-400">
          Copyright 2025
        </h1>
      </div>
    </div>
  );
};

export default Footer;

// <div className="flex my-[20px]">
// <ul className="grid grid-cols-2 lg:grid-cols-4 gap-2  w-full text-[#9D9D9D]">
//   <ol>FAQ</ol>
//   <ol>Account</ol>
//   <ol>Investor Relations</ol>
//   <ol>Ways to watch</ol>
//   <ol>Privacy</ol>
//   <ol>Corporate Information</ol>
//   <ol>Speed Test</ol>
//   <ol>Only on Netflix</ol>
//   <ol>Help Center</ol>
//   <ol>Media Center</ol>
//   <ol>Jobs</ol>
//   <ol>Terms of Use</ol>
//   <ol>Cookie Preference</ol>
//   <ol>Contact Us</ol>
//   <ol>Legal Notices</ol>
// </ul>
// </div>
// <div>
