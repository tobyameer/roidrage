import React, { useRef, useEffect } from "react";
import arrival1 from "../../../images/arrival1.jpg";
import arrival2 from "../../../images/arrival2.jpg";
import arrival3 from "../../../images/arrival3.jpg";
import arrival4 from "../../../images/arrival4.jpg";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Collection = () => {
  const collection = useRef(null);

  useEffect(() => {
    const items = collection.current?.querySelectorAll(".collection-item");

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
          trigger: collection.current,
          start: "top 70%", // ✅ Starts earlier (when 15% of section is in view)
          end: "top 30%", // ✅ Ends before the whole section is scrolled into view
          scrub: 1.5,
          markers: false,
        },
      }
    );

    // ✅ Fade out later (after user scrolls past it)
    gsap.to(collection.current, {
      opacity: 0,
      ease: "power2.out",
      scrollTrigger: {
        trigger: collection.current,
        start: "center center", // ✅ Don't fade out until bottom hits bottom of viewport
        end: "bottom top", // ✅ Fully fades out after it scrolls past
        scrub: 1.5,
        markers: false,
      },
    });
  }, []);

  return (
    <div>
      <div className="mb-[100px] mt-[500px] flex items-center">
        <h1 className="pl-[100px] text-white text-[40px] font-medium">
          NEW ARRIVALS
        </h1>
      </div>
      <div>
        <div className="w-screen flex justify-center">
          <div
            className="mx-[50px] grid grid-cols-2 xl:grid-cols-4 gap-y-20 gap-10 lg:gap-10"
            ref={collection}
          >
            {[arrival1, arrival2, arrival3, arrival4].map((src, i) => (
              <div
                key={i}
                className="collection-item flex text-white flex-col will-change-transform will-change-opacity"
              >
                <img
                  src={src}
                  alt=""
                  className="w-full h-[600px] object-cover"
                />
                <div className="my-5">
                  <h2 className="font-medium">Summer Season</h2>
                  <p>499 EGP</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
