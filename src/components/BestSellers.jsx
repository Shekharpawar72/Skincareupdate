import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import bestProduct1 from '../assets/Bestproduct-1.jpg';
import bestProduct2 from '../assets/Bestproduct-2.jpg';
import bestProduct3 from '../assets/Bestproduct-3.jpg';
const products = [
  {
    name: "ALYA SKIN CLEANSER.",
    price: "FROM $29.99",
    image: bestProduct1,
  },
  {
    name: "RITUAL OF SAKURA.",
    price: "FROM $27.99",
    image: bestProduct2,
  },
  {
    name: "THE BODY LOTION.",
    price: "FROM $19.99",
    image: bestProduct3,
  },
];




const BestSellers = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    cardRefs.current.forEach((card) => {
      if (!card) return;

      const onEnter = () => {
        gsap.to(card, {
          scale: 1.05,
          duration: 0.2,
          ease: "power2.out",
        });
      };

      const onLeave = () => {
        gsap.to(card, {
          scale: 1,
          duration: 0.2,
          ease: "power2.out",
        });
      };

      card.addEventListener("mouseenter", onEnter);
      card.addEventListener("mouseleave", onLeave);

      // Cleanup
      return () => {
        card.removeEventListener("mouseenter", onEnter);
        card.removeEventListener("mouseleave", onLeave);
      };
    });
  }, []);

   return (
    <div className="bg-[#FEFFF4] py-10 px-4 md:px-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 px-18 py-12 gap-6">
        <button className="flex items-center space-x-2 border border-[#2D3B36] px-4 py-1 rounded-full text-sm">
          <span className="bg-[#2D3B36] w-3 h-3 rounded-full"></span>
          <span>Best Selling Products</span>
        </button>

        <h2 className="text-xl md:text-3xl font-semibold text-[#2D3B36] text-center">
          Skincare That Brings Out <br className="hidden md:block" />
          Your Natural Radiance
        </h2>

        <div className="flex space-x-3">
          <button className="w-9 h-9 flex items-center justify-center border border-[#2D3B36] rounded-full text-[#2D3B36] hover:bg-[#BDC3AF] transition">
            ←
          </button>
          <button className="w-9 h-9 flex items-center justify-center bg-[#2D3B36] rounded-full text-white hover:opacity-90 transition">
            →
          </button>
        </div>
      </div>

      {/* Product Cards */}
      <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
        {products.map((product, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className="bg-white rounded-xl shadow-md overflow-hidden relative border border-transparent transform transition duration-300"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-[320px] h-[440px] object-cover"
            />

            {/* Footer */}
            <div className="absolute bottom-2 left-2 right-2 bg-[#FEFFF4] px-4 py-3 rounded-lg flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-[#2D3B36]">
                  {product.name}
                </p>
                <p className="text-xs text-[#959c95] mt-1">{product.price}</p>
              </div>
              <button className="bg-[#E9ECE1] rounded-md p-2">🛒</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSellers;
