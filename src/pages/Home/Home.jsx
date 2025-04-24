import React, { useEffect, useRef, useState } from "react";
import image from "../../images/hero.jpg";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Featured from "./components/Featured";
import Collection from "./components/Collection";
import gsap from "gsap";
import Cart from "../../components/Cart/Cart";

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
      <div className="h-[50px] bg-black text-white text-[17px] font-semibold flex items-center justify-center">
        <h3>Order Now Free Shipping!</h3>
      </div>

      <Navbar />

      {/* Hero Section (No Motion, Full 100vh) */}
      <div
        className="h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
        ref={heroBackground}
      ></div>
      <Featured />
      <Collection />
      <Footer />
    </div>
  );
};

export default Home;
