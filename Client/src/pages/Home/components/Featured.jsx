import React, { useRef, useEffect } from "react";
import f1 from "../../../images/featured1.jpg";
import f2 from "../../../images/featured2.jpg";
import f3 from "../../../images/featured3.jpg";
import { FaArrowUp } from "react-icons/fa6";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Featured = () => {
  const featuredWrapper = useRef(null);

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

  return (
    <div className="my-[500px]">
      <div className="mb-[100px] mt-[500px] flex items-center">
        <h1 className="pl-[100px] text-white text-[40px] font-medium">
          FEATURED
        </h1>
      </div>
      <div className="w-screen flex justify-center">
        <div className="flex w-fit mx-[50px] relative" ref={featuredWrapper}>
          {/* Image 1 */}
          <div className="featured-item relative w-[33%]">
            <img src={f1} alt="" className="w-full object-cover h-[600px]" />
            <div className="absolute bottom-0 w-full h-[80px] bg-black/40 flex items-center justify-center">
              <p className="text-white font-semibold flex items-center gap-2">
                Shop <FaArrowUp />
              </p>
            </div>
          </div>

          {/* Image 2 */}
          <div className="featured-item relative w-[33%]">
            <img src={f2} alt="" className="w-full object-cover h-[600px]" />
            <div className="absolute bottom-0 w-full h-[80px] bg-black/40 flex items-center justify-center">
              <p className="text-white font-semibold flex items-center gap-2">
                Shop <FaArrowUp />
              </p>
            </div>
          </div>

          {/* Image 3 */}
          <div className="featured-item relative w-[33%]">
            <img src={f3} alt="" className="w-full object-cover h-[600px]" />
            <div className="absolute bottom-0 w-full h-[80px] bg-black/40 flex items-center justify-center">
              <p className="text-white font-semibold flex items-center gap-2">
                Shop <FaArrowUp />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
