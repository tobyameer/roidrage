import React, { useRef, useEffect, useState } from "react";
import arrival1 from "../../images/arrival1.jpg";
import arrival2 from "../../images/arrival2.jpg";
import arrival3 from "../../images/arrival3.jpg";
import arrival4 from "../../images/arrival4.jpg";
import arrival5 from "../../images/arrival5.jpg";
import arrival6 from "../../images/arrival6.jpg";
import arrival7 from "../../images/arrival7.jpg";
import arrival8 from "../../images/arrival8.jpg";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger);

const Shop = () => {
  const shop = useRef(null);
  const [selectedItem, setSelectedItem] = useState(0);

  useEffect(() => {
    const items = shop.current?.querySelectorAll(".shop-item");

    if (!items || items.length === 0) return;

    // ✅ Fade in earlier and finish earlier
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
          trigger: shop.current,
          start: "top 70%", // ✅ Starts earlier (when 15% of section is in view)
          end: "top 30%", // ✅ Ends before the whole section is scrolled into view
          scrub: 1.5,
          markers: false,
        },
      }
    );

    // ✅ Fade out later (after user scrolls past it)
    gsap.to(shop.current, {
      opacity: 0,
      ease: "power2.out",
      scrollTrigger: {
        trigger: shop.current,
        start: "center center", // ✅ Don't fade out until bottom hits bottom of viewport
        end: "bottom top", // ✅ Fully fades out after it scrolls past
        scrub: 1.5,
        markers: false,
      },
    });
  }, []);
  return (
    <div>
      <Navbar />
      <div>
        <div className="mt-[120px] lg:mt-[200px]">
          <div className="w-screen flex justify-center">
            <div
              className="lg:mx-[50px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-y-20 lg:gap-10"
              ref={shop}
            >
              {[
                arrival1,
                arrival2,
                arrival3,
                arrival4,
                arrival5,
                arrival6,
                arrival6,
                arrival8,
              ].map((src, i) => (
                <Link key={i} to={`/product/${i}`}>
                  <div
                    onClick={() => setSelectedItem(i)}
                    className="collection-item flex text-white text-[12px] lg:text-[22px] flex-col will-change-transform will-change-opacity cursor-pointer text-center"
                  >
                    <img
                      src={src}
                      alt=""
                      className="w-full h-[300px] lg:h-[600px] object-cover"
                    />
                    <div className=" my-2 lg:my-5 flex flex-col items-center justify-center ">
                      <h2 className="">Summer Season</h2>
                      <p className="text-[10px] lg:text-[15px] lg:my-1">
                        $99.99
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Shop;
