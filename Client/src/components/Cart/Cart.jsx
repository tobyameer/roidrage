import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const Cart = ({ isVisible, setVisibility }) => {
  const [count, setCount] = useState(1);
  const [shouldRender, setShouldRender] = useState(isVisible);
  const cartRef = useRef(null);

  // Handle GSAP animation for slide-in and slide-out
  useEffect(() => {
    console.log("isVisible:", isVisible); // Debug: Check if isVisible is changing

    // Set initial position for cart before animation starts
    if (isVisible) {
      setShouldRender(true);
      gsap.set(cartRef.current, { x: "100%" }); // Ensure it's off-screen initially

      // Animate cart sliding in
      gsap.to(cartRef.current, {
        x: 0,
        duration: 0.5,
        ease: "expo.out",
      });
    } else {
      // Animate cart sliding out
      gsap.to(cartRef.current, {
        x: "100%",
        duration: 1,
        ease: "expo.in",
        onComplete: () => setShouldRender(false), // Remove cart after animation
      });
    }
  }, [isVisible]);

  // Handle quantity change
  const handleQuantityChange = (change) => {
    setCount((prevCount) => Math.max(1, prevCount + change)); // Prevent negative or zero quantity
  };

  return (
    <>
      {shouldRender && (
        <div
          ref={cartRef}
          className="flex flex-col justify-between fixed top-0 right-0 h-full w-[60%] bg-white shadow-lg z-50 p-8 overflow-y-auto"
          style={{ position: "fixed", transition: "transform 0.5s ease" }} // Ensure transition is only on x-axis
        >
          <div>
            {/* Header + Close Button */}
            <div className="border-b mb-4 sticky top-0 bg-white z-10 flex justify-between items-center pb-4">
              <h2 className="text-2xl font-bold text-black">Cart</h2>
              <button
                onClick={() => setVisibility(false)}
                className="text-3xl text-black cursor-pointer font-bold"
              >
                &times;
              </button>
            </div>

            {/* Shipping Threshold Message */}
            <p className="text-sm text-gray-600 mb-4">
              Spend <span className="font-semibold">$40.00</span> more and get
              free shipping!
            </p>

            {/* Cart Item */}
            <div className="flex justify-between items-center border-y py-4">
              {/* Placeholder for Image */}
              <div className="w-24 h-24 bg-gray-300 rounded-md" />

              {/* Item Info */}
              <div className="text-black flex flex-col gap-2 text-right">
                <h3 className="font-semibold">T-Shirt</h3>
                <p className="text-sm text-gray-500">Black Wash / Small</p>
                <p className="font-bold">$35.00</p>

                {/* Quantity + Remove */}
                <div className="text-black flex items-center gap-4 mt-2 justify-end">
                  <div className="flex items-center border rounded">
                    <button
                      className="px-2"
                      onClick={() => handleQuantityChange(-1)}
                    >
                      -
                    </button>
                    <span className="px-3">{count}</span>
                    <button
                      className="px-2"
                      onClick={() => handleQuantityChange(1)}
                    >
                      +
                    </button>
                  </div>
                  <button className="text-sm text-gray-600 underline">
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Checkout Options */}
          <div className="flex flex-col gap-3">
            <button className="w-full h-[60px] bg-black text-white py-3 rounded-lg font-semibold">
              Protected Checkout | ${35 * count}
            </button>
            <p className="text-sm text-center text-gray-600 underline cursor-pointer">
              Checkout without protection
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
