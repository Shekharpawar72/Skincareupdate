import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import awardIcon from "../assets/Vector.svg"; // Replace with actual icon
import womanImg from "../assets/whyproduct.png"; // Replace with your image

const WhyOurProducts = () => {
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
    image.addEventListener("mouseenter", handleEnter);
    image.addEventListener("mouseleave", handleLeave);

    return () => {
      image.removeEventListener("mouseenter", handleEnter);
      image.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-[#FEFFF4] px-18 py-12 gap-6">
      {/* Left Section */}
      <div className="max-w-xl">
        <button className="flex items-center space-x-2 border border-[#2D3B36] px-4 py-1 rounded-full text-sm mb-4">
          <span className="bg-[#2D3B36] w-3 h-3 rounded-full"></span>
          <span>Why Our Products</span>
        </button>

        <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-[#2D3B36]">
          YOUR SKIN DESERVES <br /> THE BEST CARE.
        </h2>

        <p className="text-[#525349] text-sm mb-6">
          Discover a curated collection of skincare products designed to rejuvenate,
          protect, and pamper your skin. Explore our rage crafted with love backed
          by science, and inspired by nature.
        </p>

        {/* Features */}
        <div className="space-y-6">
          {["Bio Ingredients", "Everything Natural", "All Handmade"].map((title, index) => (
            <div key={index}>
              <h3 className="text-[36px] font-medium text-[#2D3B36] ">
                <span className="text-[36px] font-semibold bg-gradient-to-b from-[#293330] to-[#FEFFF4] bg-clip-text text-transparent mr-2" >
                  0{index + 1}
                </span>
                {title}
              </h3>
              <p className="text-sm text-[#525349] mt-1 ml-15">
                {index === 0 &&
                  "Get naturally beautiful and transform with our bio ingredients creams for healthy, radiant skin."}
                {index === 1 &&
                  "Pure ingredients for pure skin. The Perfect solution for your skin care needs."}
                {index === 2 &&
                  "Made with love and care. Just for you. Give your skin the tender loving care it deserves."}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Section */}
      <div className="relative">
        <img
          ref={imageRef}
          src={womanImg}
          alt="Skincare Model"
          className="rounded-2xl w-[350px] md:w-[420px] object-cover"
        />

        {/* Award Badge */}
        <div className="absolute bottom-18 left-1/2 -translate-x-1/2 bg-[#EFF5E1] px-4 py-2 rounded-full shadow flex items-center space-x-2">
          <img src={awardIcon} alt="Award" className="w-5 h-5 " />
          <p className="text-sm text-gray-700 font-medium ">Best Skin Care Product Award Winning</p>
        </div>

        <div className="flex justify-between mt-4 text-sm text-[#2D3B36] px-1">
          <span>SINCE 2001</span>
          <span className=" cursor-pointer">LEARN MORE</span>
        </div>
      </div>
    </div>
  );
};

export default WhyOurProducts;
