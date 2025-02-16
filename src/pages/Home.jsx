import React from "react";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import image from "../images/hero.jpg";
import f1 from "../images/featured1.jpg";
import f2 from "../images/featured2.jpg";
import f3 from "../images/featured3.jpg";
import { FaArrowUp } from "react-icons/fa6";
import arrival1 from "../images/arrival1.jpg";
import arrival2 from "../images/arrival2.jpg";
import arrival3 from "../images/arrival3.jpg";
import arrival4 from "../images/arrival4.jpg";
import logo from "../images/logo.gif";

const Home = () => {
  return (
    <div>
      <div className="relative">
        <div className=" h-[50px] bg-black text-white text-[17px] font-semibold flex items-center justify-center">
          <h3>Order Now Free Shipping!</h3>
        </div>
        {/* Navbar */}
        <div className="z-[9] absolute w-[100%] bg-black text-white top-[50px] ">
          <div className="mx-[30px] h-[100px] flex justify-between items-center">
            <div className="flex gap-5 w-[350px]">
              <button className="w-[100px] text-[20px] h-[70px]">Home</button>
              <button className="w-[100px] text-[20px] h-[70px]">Shop</button>
              <button className="w-[100px] text-[20px] h-[70px]">
                About Us
              </button>
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
              <FaShoppingCart size={20} />
              <FaUser size={20} />
            </div>
          </div>
        </div>
        {/* Hero */}
        <div>
          <img src={image} alt="" className="mt-[350px]" />
        </div>
        {/* featured */}
        <div className="">
          <div className="mb-[100px] mt-[500px] flex items-center">
            <h1 className="pl-[100px] text-white text-[40px] font-medium">
              FEATURED
            </h1>
          </div>
          <div className="w-screen flex justify-center">
            <div className="flex w-fit mx-[50px] relative">
              {/* Image 1 */}
              <div className="relative w-[33%]">
                <img
                  src={f1}
                  alt=""
                  className="w-full object-cover h-[600px]"
                />
                <div className="absolute bottom-0 w-full h-[80px] bg-black/40 flex items-center justify-center">
                  <p className="text-white font-semibold flex items-center gap-2">
                    Shop <FaArrowUp />
                  </p>
                </div>
              </div>

              {/* Image 2 */}
              <div className="relative w-[33%]">
                <img
                  src={f2}
                  alt=""
                  className="w-full object-cover h-[600px]"
                />
                <div className="absolute bottom-0 w-full h-[80px] bg-black/40  flex items-center justify-center">
                  <p className="text-white font-semibold flex items-center gap-2">
                    Shop <FaArrowUp />
                  </p>
                </div>
              </div>

              {/* Image 3 */}
              <div className="relative w-[33%]">
                <img
                  src={f3}
                  alt=""
                  className="w-full object-cover h-[600px]"
                />
                <div className="absolute bottom-0 w-full h-[80px] bg-black/40  flex items-center justify-center">
                  <p className="text-white font-semibold flex items-center gap-2">
                    Shop <FaArrowUp />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* New Arrivals */}
        <div>
          <div className="mb-[100px] mt-[500px] flex items-center">
            <h1 className="pl-[100px] text-white text-[40px] font-medium">
              NEW ARRIVALS
            </h1>
          </div>
          <div>
            <div className="w-screen flex justify-center">
              <div className="mx-[50px] grid grid-cols-2 xl:grid-cols-4 gap-y-20 gap-10 lg:gap-10">
                {/* Arrival 1 */}
                <div className="flex text-white flex-col ">
                  <img
                    src={arrival1}
                    alt=""
                    className="w-full h-[600px] object-cover"
                  />
                  <div className="my-5">
                    <h2 className="font-medium">Summer Season</h2>
                    <p>499 EGP</p>
                  </div>
                </div>
                {/* Arrival 2 */}
                <div className="] flex text-white flex-col ">
                  <img
                    src={arrival2}
                    alt=""
                    className="w-full h-[600px] object-cover"
                  />
                  <div className="my-5">
                    <h2 className="font-medium">Summer Season</h2>
                    <p>499 EGP</p>
                  </div>
                </div>
                {/* Arrival  */}
                <div className="flex text-white flex-col ">
                  <img
                    src={arrival3}
                    alt=""
                    className="w-full h-[600px] object-cover"
                  />
                  <div className="my-5">
                    <h2 className="font-medium">Summer Season</h2>
                    <p>499 EGP</p>
                  </div>
                </div>
                {/* Arrival  */}
                <div className="flex text-white flex-col ">
                  <img
                    src={arrival4}
                    alt=""
                    className="w-full h-[600px] object-cover"
                  />
                  <div className="my-5">
                    <h2 className="font-medium">Summer Season</h2>
                    <p>499 EGP</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
