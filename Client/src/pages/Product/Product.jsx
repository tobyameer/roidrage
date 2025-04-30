import React, { useEffect, useRef, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import arrival3 from "../../images/arrival3.jpg";
import { Link } from "react-router-dom";

const Product = () => {
  const [cartVisible, setCartVisible] = useState(false);

  return (
    <div>
      <Navbar
        setCartVisible={setCartVisible}
        isVisible={cartVisible}
        onClose={() => setCartVisible(false)}
      />
      <div className="mt-[200px] mb-[100px]">
        <div className=" ">
          <img src={arrival3} alt="" className="w-fill" />
          <div className="m-[50px] text-white">
            <p className="text-[35px]">T-shirt</p>
            <p className="text-[25px] text-gray-300">30.00 EGP</p>
            <div className="w-[100%] my-[50px] h-[2px] bg-[#292727]" />
            <p className="text-[20px] mb-3">Size:</p>
            <div className="flex gap-4 mb-[50px]">
              <button className="border-[#292727] duration-300 p-[10px] hover:border-white border-2">
                Small
              </button>
              <button className="border-[#292727] duration-300 p-[10px] hover:border-white border-2">
                Medium
              </button>
              <button className="border-[#292727] duration-300 p-[10px] hover:border-white border-2">
                Large
              </button>
              <button className="border-[#292727] duration-300 p-[10px] hover:border-white border-2">
                XLarge
              </button>
              <button className="border-[#292727] duration-300 p-[10px] hover:border-white border-2">
                XXLarge
              </button>
            </div>

            <button className="w-[100%] duration-300 h-[60px] border-[#292727] hover:border-white border-2 text-white">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Product;
