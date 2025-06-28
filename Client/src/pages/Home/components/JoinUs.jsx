import React from "react";
import image from "../../../images/hero.jpg";

const JoinUs = () => {
  return (
    <div className="absolute bottom-[-10%] lg:mx-[20%] right-0 left-0 mx-[15px] mt-[150px] h-[250px] flex items-center justify-center bg-black rounded-2xl overflow-hidden">
      {/* Scope effect container */}
      <div className="relative w-screen  h-screen rounded-2xl overflow-hidden">
        <img
          src={image}
          alt="CTA"
          className="absolute top-10 left-20 lg:left-60 w-screen h-screen object-contain"
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 text-center lg:space-y-6">
          <h1 className="text-3xl w-[250px] lg:w-fit lg:text-5xl font-bold">
            Join Our Community
          </h1>
          <p className="my-[10px] lg:my-0 text-xs lg:text-lg w-[300px] lg:w-fit">
            Be the first to hear about new products, transformations, and
            exclusive offers.
          </p>
          <div className="flex justify-center w-full px-[30%]">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 w-[220px]  h-8 lg:h-12 px-4 rounded-l-full bg-black/20 text-white placeholder-white/60 backdrop-blur-md border border-white/30"
            />
            <button className="h-8 lg:h-12 px-2 lg:px-6 bg-white text-black font-semibold rounded-r-full hover:bg-transparent hover:text-white border border-white transition duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
