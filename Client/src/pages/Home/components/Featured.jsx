import React, { useRef, useEffect, useState } from "react";
import f1 from "../../../images/featured1.jpg";
import f2 from "../../../images/featured2.jpg";
import f3 from "../../../images/featured3.jpg";
import f4 from "../../../images/featured4.jpg";
import { FaArrowUp } from "react-icons/fa6";
import { Link } from "react-router-dom";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Featured = () => {
  const featuredWrapper = useRef(null);
  const [hover, setHover] = useState(0);

  useEffect(() => {
    const wrapper = featuredWrapper.current;
    const items = wrapper?.querySelectorAll(".featured-item");

    if (!wrapper || !items || items.length === 0) return;

    // Fade-in effect
    gsap.fromTo(
      items,
      {
        opacity: 0,
        y: 80,
      },
      {
        opacity: 1,
        y: 0,
        ease: "expo.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: wrapper,
          start: "top 70%", // Fade in before fully visible
          end: "top 30%", // Finish fade-in by center
          scrub: 1.5,
          markers: false,
        },
      }
    );

    // Fade-out after center has passed center of viewport
    gsap.to(wrapper, {
      opacity: 0,
      ease: "power2.out",
      scrollTrigger: {
        trigger: wrapper,
        start: "center center", // Start fade out AFTER section's center hits viewport center
        end: "bottom top", // Fully faded out once bottom leaves screen
        scrub: 1.5,
        markers: false,
      },
    });
  }, []);

  const handleHover = (e) => {
    <Link
      onMouseEnter={(e) => handleHover(3)}
      onMouseLeave={(e) => handleHover(0)}
      to="/shop"
      className="featured-item relative w-[33%]"
    >
      <img
        src={f3}
        alt=""
        className="w-full object-cover h-[300px] md:h-[600px]"
      />
      <div
        className={
          hover == 3
            ? "absolute bottom-0 w-full h-full text-[15px] md:text-[28px] duration-300 ease-in-out  bg-black/40 flex items-center justify-center"
            : "absolute bottom-0 w-full h-[40px] md:h-[80px] duration-300 ease-in-out bg-black/40 flex items-center justify-center"
        }
      >
        <p className="text-white font-semibold flex items-center gap-2">
          Shop <FaArrowUp />
        </p>
      </div>
    </Link>;
    setHover(e);
  };

  return (
    <div className="md:mb-[400px] py-[25px] md:py-[50px] bg-red-900/14  border-gray-800/20 border-y-2">
      <div className="w-screen flex flex-col justify-center items-center">
        <div
          className="p-[1rem] flex w-fit mx-[20px] md:mx-[50px] gap-[2%] relative"
          ref={featuredWrapper}
        >
          {/* Image 1 */}
          <Link
            to="/shop"
            onMouseEnter={(e) => handleHover(1)}
            onMouseLeave={(e) => handleHover(0)}
            className="featured-item relative w-[33%]"
          >
            <img
              src={f1}
              alt=""
              className="w-full object-cover h-[300px] md:h-[600px]"
            />
            <div
              className={
                hover == 1
                  ? "absolute bottom-0 w-full h-full text-[15px] md:text-[28px] duration-300 ease-in-out bg-black/40 flex items-center justify-center"
                  : "absolute bottom-0 w-full h-[40px] md:h-[80px] duration-300 ease-in-out bg-black/40 flex items-center justify-center"
              }
            >
              <p className="text-white text-[12px] md:text-[20px] font-semibold flex items-center gap-2">
                Shop <FaArrowUp />
              </p>
            </div>
          </Link>

          {/* Image 2 */}
          <Link
            onMouseEnter={(e) => handleHover(2)}
            onMouseLeave={(e) => handleHover(0)}
            to="/shop"
            className="featured-item relative w-[33%]"
          >
            <img
              src={f2}
              alt=""
              className="w-full object-cover h-[300px] md:h-[600px]"
            />
            <div
              className={
                hover == 2
                  ? "absolute bottom-0 w-full h-full text-[15px] md:text-[28px] duration-300 ease-in-out bg-black/40 flex items-center justify-center"
                  : "absolute bottom-0 w-full h-[40px] md:h-[80px] duration-300 ease-in-out bg-black/40 flex items-center justify-center"
              }
            >
              {" "}
              <p className="text-white text-[12px] md:text-[20px] font-semibold flex items-center gap-2">
                Shop <FaArrowUp />
              </p>
            </div>
          </Link>

          {/* Image 3 */}
          <Link
            onMouseEnter={(e) => handleHover(3)}
            onMouseLeave={(e) => handleHover(0)}
            to="/shop"
            className="featured-item relative w-[33%]"
          >
            <img
              src={f3}
              alt=""
              className="w-full object-cover h-[300px] md:h-[600px]"
            />
            <div
              className={
                hover == 3
                  ? "absolute bottom-0 w-full h-full text-[15px] md:text-[28px] duration-300 ease-in-out bg-black/40 flex items-center justify-center"
                  : "absolute bottom-0 w-full h-[40px] md:h-[80px] duration-300 ease-in-out bg-black/40 flex items-center justify-center"
              }
            >
              {" "}
              <p className="text-white text-[12px] md:text-[20px] font-semibold flex items-center gap-2">
                Shop <FaArrowUp />
              </p>
            </div>
          </Link>
          <Link
            onMouseEnter={(e) => handleHover(4)}
            onMouseLeave={(e) => handleHover(0)}
            to="/shop"
            className="featured-item relative w-[33%]"
          >
            <img
              src={f4}
              alt=""
              className="w-full object-cover h-[300px] md:h-[600px]"
            />
            <div
              className={
                hover == 4
                  ? "absolute bottom-0 w-full h-full text-[15px] md:text-[28px] duration-300 ease-in-out bg-black/40 flex items-center justify-center"
                  : "absolute bottom-0 w-full h-[40px] md:h-[80px] duration-300 ease-in-out bg-black/40 flex items-center justify-center"
              }
            >
              {" "}
              <p className="text-white text-[12px] md:text-[20px] font-semibold flex items-center gap-2">
                Shop <FaArrowUp />
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Featured;
