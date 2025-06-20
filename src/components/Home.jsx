import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import accdo from "../assets/accdo.png";
import homePage from "../assets/home_page.jpg";

function Home() {
  const imageRef = useRef(null);
 


  useEffect(() => {
    gsap.set(imageRef.current, { scale: 1 });

    const handleEnter = () => {
      gsap.to(imageRef.current, {
        scale: 1.05,
        duration: 0.6,
        ease: "power2.out",
      });
    };

    const handleLeave = () => {
      gsap.to(imageRef.current, {
        scale: 1,
        duration: 0.6,
        ease: "power2.inOut",
      });
    };

    const image = imageRef.current;
    if (image) {
      image.addEventListener("mouseenter", handleEnter);
      image.addEventListener("mouseleave", handleLeave);
    }

    return () => {
      if (image) {
        image.removeEventListener("mouseenter", handleEnter);
        image.removeEventListener("mouseleave", handleLeave);
      }
    };
  }, []);
  return (
    <div className="bg-[#EFF5E1]">
      <div className="flex items-center justify-between h-[calc(100%-4rem)] px-16 ">
        <div className="max-w-xs text-gray-800 text-sm text-right">
          <p>
            Transform your skincare routine with premium products that restore,
            protect, and enhance your natural glow every day.
          </p>
        </div>

        <h1 className="text-6xl font-bold text-[#2D3B36] text-center leading-tight">
          GLOW
          <br />
          NATUR-
          <br />
          ALLY
        </h1>

        <div className="rounded-lg p-1">
          <img
            src={homePage}
            alt="Product"
            className="w-40 h-auto object-contain rounded-md"
            ref={imageRef}
          />
        </div>
      </div>

      <div className="relative flex flex-col items-center justify-center h-screen">
        <button className="absolute left-10 top-10 bg-[#2D3B36] text-white px-6 py-2 rounded-full shadow hover:bg-gray-800 z-20">
          Shop Now
        </button>
          
        <h1 className="text-[16.5rem] font-bold text-[#2D3B36] tracking-widest leading-none z-0">
          SKINCARE
        </h1>

        <div className="absolute bottom-[15rem] z-10">
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src={accdo}
              alt="Skincare Model"
              className="w-[350px] h-[400px] object-cover rounded-2xl"
              ref={imageRef}
            />

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-[#EFF5E1] px-1 py-1 h-14 w-[260px] rounded-4xl shadow-md flex items-center space-x-4">
              <div className="w-8 h-8 rounded-full border-2 border-dotted border-gray-400 flex items-center justify-center">
                <img
                  src={homePage}
                  alt="Product"
                  className="w-10 h-10 rounded-full object-cover"
                />
              </div>
              <p className="text-[12px] text-gray-800">
                While giving you an invigorating cleansing experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
