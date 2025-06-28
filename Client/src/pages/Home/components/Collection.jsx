import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

import arrival1 from "../../../images/arrival1.jpg";
import arrival2 from "../../../images/arrival2.jpg";
import arrival3 from "../../../images/arrival3.jpg";
import arrival4 from "../../../images/arrival4.jpg";
import arrival5 from "../../../images/arrival5.jpg";
import arrival6 from "../../../images/arrival6.jpg";
import arrival7 from "../../../images/arrival7.jpg";
import arrival8 from "../../../images/arrival8.jpg";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import JoinUs from "./JoinUs";
gsap.registerPlugin(ScrollTrigger);

const Collection = () => {
  const collection = useRef(null);

  const images = [
    arrival1,
    arrival2,
    arrival3,
    arrival4,
    arrival5,
    arrival6,
    arrival7,
    arrival8,
  ];

  return (
    <div className="relative bg-white pt-[25px] lg:pt-[50px] pb-[200px] lg:mb-[500px]">
      <div className="w-screen flex justify-center">
        <div
          className="mx-[15px] lg:mx-[50px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-y-20 lg:gap-10"
          ref={collection}
        >
          {images.map((src, i) => (
            <Link to={`/product/arrival${i + 1}`} key={i}>
              <div className="collection-item flex text-white text-[12px] lg:text-[22px] flex-col will-change-transform will-change-opacity cursor-pointer text-center">
                <img
                  src={src}
                  alt={`Arrival ${i + 1}`}
                  className="w-full h-[300px] lg:h-[600px] object-cover"
                />
                <div className="text-black my-2 lg:my-5">
                  <h2>Summer Season</h2>
                  <p className="text-[10px] lg:text-[15px] lg:my-1">$99.99</p>
                  <div className="flex justify-center">
                    <FaStar style={{ color: "white" }} />
                    <FaStar style={{ color: "white" }} />
                    <FaStar style={{ color: "white" }} />
                    <FaStar style={{ color: "white" }} />
                    <FaStar style={{ color: "white" }} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <JoinUs />
    </div>
  );
};

export default Collection;
