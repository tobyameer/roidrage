import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import arrival1 from "../../images/arrival1.jpg";
import arrival2 from "../../images/arrival2.jpg";
import arrival3 from "../../images/arrival3.jpg";
import arrival4 from "../../images/arrival4.jpg";

const productData = {
  arrival1: {
    name: "Sleeveless Top",
    price: "499 EGP",
    image: arrival1,
  },
  arrival2: {
    name: "Denim Jacket",
    price: "799 EGP",
    image: arrival2,
  },
  arrival3: {
    name: "T-shirt",
    price: "399 EGP",
    image: arrival3,
  },
  arrival4: {
    name: "Casual Shirt",
    price: "599 EGP",
    image: arrival4,
  },
};

const Product = () => {
  const { id } = useParams();
  const [cartVisible, setCartVisible] = useState(false);

  const product = productData[id];

  if (!product) {
    return (
      <div className="text-white text-center mt-[200px]">
        <Navbar />
        <p>Product not found.</p>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Navbar
        setCartVisible={setCartVisible}
        isVisible={cartVisible}
        onClose={() => setCartVisible(false)}
      />
      <div className="mt-[200px] mb-[100px]">
        <div>
          <img src={product.image} alt={product.name} className="w-full" />
          <div className="m-[50px] text-white">
            <p className="text-[35px]">{product.name}</p>
            <p className="text-[25px] text-gray-300">{product.price}</p>
            <div className="w-[100%] my-[50px] h-[2px] bg-[#292727]" />
            <p className="text-[20px] mb-3">Size:</p>
            <div className="flex gap-4 mb-[50px]">
              {["Small", "Medium", "Large", "XLarge", "XXLarge"].map((size) => (
                <button
                  key={size}
                  className="border-[#292727] duration-300 p-[10px] hover:border-white border-2"
                >
                  {size}
                </button>
              ))}
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
