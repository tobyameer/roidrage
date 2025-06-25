import React from "react";
import image from "../../../images/hero.jpg";

const JoinUs = () => {
  return (
    <div className="relative top-60 mx-[50px] mt-[180px] h-[500px] flex items-center justify-center bg-black rounded-2xl overflow-hidden">
      {/* Scope effect container */}
      <div className="relative w-screen h-screen rounded-2xl overflow-hidden">
        <img
          src={image}
          alt="CTA"
          className="absolute top-10 left-60 w-screen h-screen object-contain"
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 text-center space-y-6">
          <h1 className="text-5xl font-bold">Join Our Community</h1>
          <p className="text-lg max-w-xl">
            Be the first to hear about new products, transformations, and
            exclusive offers.
          </p>
          <div className="flex w-full max-w-md">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 h-12 px-4 rounded-l-full bg-black/20 text-white placeholder-white/60 backdrop-blur-md border border-white/30"
            />
            <button className="h-12 px-6 bg-white text-black font-semibold rounded-r-full hover:bg-transparent hover:text-white border border-white transition duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
{
  /* <div className="relative">
        <input
        type="text"
        placeholder="Email"
        className="w-full h-[70px] pl-[50px] rounded-full bg-inherit border border-white/50 placeholder:text-white/40"
        />
        <button className="absolute top-0 bottom-0 right-[0px] bg-white text-black w-[200px] rounded-full hover:bg-inherit hover:text-white duration-300 ">
        Subscribe
        </button>
        </div> */
}
