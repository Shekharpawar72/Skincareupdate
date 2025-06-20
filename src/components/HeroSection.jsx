import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import heroImage from "../assets/Herosection.png"; // Replace with your image

const HeroSection = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    // Initial animation
    gsap.fromTo(
      imageRef.current,
      { scale: 1.1, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.5, ease: "power2.out" }
    );

    // Hover animation
    const el = imageRef.current;
    const handleMouseEnter = () => {
      gsap.to(el, { scale: 1.05, duration: 0.3, ease: "power2.out" });
    };
    const handleMouseLeave = () => {
      gsap.to(el, { scale: 1, duration: 0.3, ease: "power2.out" });
    };

    el.addEventListener("mouseenter", handleMouseEnter);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      el.removeEventListener("mouseenter", handleMouseEnter);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
     <div className=" flex items-center justify-center p-8 mt-20  bg-[#FEFFF4]">
    <div className="relative w-[1380px] h-[600px] rounded-3xl overflow-hidden">
      <img
        ref={imageRef}
        src={heroImage}
        alt="Product"
        className="object-cover w-full h-[600px] transition-all duration-200"
      />
      <div className="absolute inset-0  mt-90 bg-gradient-to-t from-black/70 via-black/30 to-transparent  flex flex-col items-center justify-center text-white text-center px-4">
        <h2 className="text-sm md:text-4xl font-semibold mb-4">
          Feel Beautiful Inside and Out <br /> with Every Product.
        </h2>
        <button className="bg-white text-black font-medium px-6 py-2 rounded-full shadow hover:bg-gray-200 transition">
          Shop Now
        </button>
      </div>
      
      </div>
    </div>
  );
};

export default HeroSection;

