import React, { useEffect, useRef, useState } from "react";
import image from "../../images/coming-soon2.webp";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Featured from "./components/Featured";
import Collection from "./components/Collection";
import gsap from "gsap";
import Cart from "../../components/Cart/Cart";
import JoinUs from "./components/JoinUs";

const Home = () => {
  let heroBackground = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      heroBackground.current,
      {
        opacity: 0,
        y: 250,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "expo.out",
        scrub: 1,
      }
    );
  }, []);

  return (
    <div>
      {/* Announcement Banner */}

      <Navbar />

      {/* Hero Section (No Motion, Full 100vh) */}
      <div
        className="flex justify-center items-center mt-[200px] h-screen bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${image})` }}
        ref={heroBackground}
      >
        <button className="relative overflow-hidden group text-white text-[35px] px-4 py-2 font-semibold bg-black/30 w-[300px] h-[100px] border-[3px] border-black duration-200">
          <span className="relative z-10">Shop Now</span>
          <span className="absolute inset-0 bg-black transition-transform duration-300 ease-in-out group-hover:-translate-x-full"></span>
        </button>
      </div>
      <div className="my-[200px]  flex justify-center">
        <h1 className=" text-white text-[45px] font-semibold ">FEATURED</h1>
      </div>
      <Featured />
      <div className="my-[200px] flex justify-center ">
        <h1 className="text-white text-[45px] font-semibold">NEW ARRIVALS</h1>
      </div>
      <Collection />
      <Footer />
    </div>
  );
};

export default Home;
