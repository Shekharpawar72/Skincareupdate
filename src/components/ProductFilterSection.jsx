
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

const ProductFilterSection = () => {

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
    <div className="bg-[#FEFFF4] py-12 text-center">
      <h2 className="text-2xl md:text-3xl font-medium text-[#2D3B36] mb-6">
        Feel Beautiful Inside and Out <br /> with Every Product.
      </h2>

      <div className="flex flex-wrap justify-center gap-4">
        <button className="bg-[#2D3B36] text-white text-sm font-semibold px-5 py-2 rounded-full">
          NEW ARRIVAL
        </button>
        <button className="border border-[#2D3B36] text-[#2D3B36] text-sm font-medium px-5 py-2 rounded-full hover:bg-gray-100">
          CLEANSING
        </button>
        <button className="border border-[#2D3B36] text-[#2D3B36] text-sm font-medium px-5 py-2 rounded-full hover:bg-gray-100">
          ACNE FIGHTER
        </button>
        <button className="border border-[#2D3B36] text-[#2D3B36] text-sm font-medium px-5 py-2 rounded-full hover:bg-gray-100">
          ANTI AGING
        </button>
      </div>

          
      <div className="flex flex-col md:flex-row gap-6 justify-center items-center mt-20">
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

export default ProductFilterSection;
