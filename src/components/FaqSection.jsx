// import React, { useState, useEffect, useRef } from "react";
// import faqImage from "../assets/Faqimg.jpg";
// import headphoneimg from "../assets/headphone.svg";
// import { gsap } from "gsap";

// const faqs = [
//   {
//     question: "Are your products safe for sensitive skin?",
//     answer: "Yes, our products are dermatologist-tested and formulated to be gentle on all skin types.",
//   },
//   {
//     question: "Are your products cruelty-free?",
//     answer:
//       "Absolutely! All our products are cruelty-free, and most are vegan. Check individual product details for specifics.",
//   },
//   {
//     question: "What’s your return policy?",
//     answer: "You can return any item within 30 days of purchase for a full refund.",
//   },
//   {
//     question: "Do you ship internationally?",
//     answer: "Yes, we ship to over 100 countries worldwide.",
//   },
//   {
//     question: "How do I choose the right product?",
//     answer: "Check our product guides or speak to our skincare experts via live chat.",
//   },
// ];

// const FaqSection = () => {
//   const [openIndex, setOpenIndex] = useState(1);

//   const toggleFAQ = (index) => {
//     setOpenIndex(index === openIndex ? null : index);
//   };

//   return (
//     <div className="bg-[#fdfdf3] px-4 py-16 md:px-20 flex flex-col md:flex-row gap-12 items-center">

//       <div className="w-full md:w-1/2 relative rounded-xl overflow-hidden">
//         <img
//           src={faqImage}
//           alt="Skincare Product "
//           className="rounded-xl w-[560px] h-[600px] "
//         />

//         <div className="absolute bottom-2 left-1/3 -translate-x-1/4 flex items-center gap-2 bg-[#E9ECE1] px-4 py-2 rounded-full shadow text-sm">
//   <img src={headphoneimg} alt="headphone" className="w-6 h-6" />
//   24/7 We’re Here to Help You
// </div>

//       </div>

//       <div className="w-full md:w-1/2 mt-22">
//         <div className="mb-6">
//           <span className="inline-flex items-center px-4 py-1 border border-[#2D3B36] rounded-full text-sm text-[#2D3B36] ">
//             <span className="bg-gray-800 w-2 h-2 rounded-full mr-2"></span>
//             Frequently Asked Question
//           </span>
//         </div>

//         <h2 className="text-3xl font-semibold text-[#2D3B36] mb-12">
//           Answers to Your <br /> Skincare Questions, All <br /> in One Place.
//         </h2>

//         <div className="space-y-3">
//           {faqs.map((faq, index) => (
//             <div
//               key={index}
//               className="border rounded-md px-4 py-3 text-left transition-all duration-300"
//             >
//               <button
//                 className="flex justify-between items-center w-full font-medium text-gray-800"
//                 onClick={() => toggleFAQ(index)}
//               >
//                 {faq.question}
//                 <span className="text-xl">
//                   {openIndex === index ? "−" : "+"}
//                 </span>
//               </button>
//               {openIndex === index && (
//                 <p className="text-sm mt-2 text-[#2D3B36]">{faq.answer}</p>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FaqSection;

import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import faqImage from "../assets/Faqimg.jpg";
import headphoneimg from "../assets/headphone.svg";

const faqs = [
  {
    question: "Are your products safe for sensitive skin?",
    answer:
      "Yes, our products are dermatologist-tested and formulated to be gentle on all skin types.",
  },
  {
    question: "Are your products cruelty-free?",
    answer:
      "Absolutely! All our products are cruelty-free, and most are vegan. Check individual product details for specifics.",
  },
  {
    question: "What’s your return policy?",
    answer:
      "You can return any item within 30 days of purchase for a full refund.",
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes, we ship to over 100 countries worldwide.",
  },
  {
    question: "How do I choose the right product?",
    answer:
      "Check our product guides or speak to our skincare experts via live chat.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(1); // Start with 2nd question open
  const imageRef = useRef(null); // For GSAP animation

  const toggleFAQ = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  // GSAP Image Hover Animation
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
    <div className="bg-[#fdfdf3] px-4 py-16 md:px-20 flex flex-col md:flex-row gap-12 items-center">
      {/* Left Image Block */}
      <div className="w-full md:w-1/2 relative rounded-xl overflow-hidden">
        <img
          ref={imageRef}
          src={faqImage}
          alt="Skincare Product"
          className="rounded-xl w-[560px] h-[600px]"
        />
        <div className="absolute bottom-2 left-1/3 -translate-x-1/4 flex items-center gap-2 bg-[#E9ECE1] px-4 py-2 rounded-full shadow text-sm">
          <img src={headphoneimg} alt="headphone" className="w-6 h-6" />
          24/7 We’re Here to Help You
        </div>
      </div>

      {/* Right FAQ Content */}
      <div className="w-full md:w-1/2">
        <div className="mb-6">
          <span className="inline-flex items-center px-4 py-1 border border-[#2D3B36] rounded-full text-sm text-[#2D3B36]">
            <span className="bg-gray-800 w-2 h-2 rounded-full mr-2"></span>
            Frequently Asked Question
          </span>
        </div>

        <h2 className="text-3xl font-semibold text-[#2D3B36] mb-12">
          Answers to Your <br /> Skincare Questions, All <br /> in One Place.
        </h2>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border rounded-md px-4 py-3 text-left transition-all duration-300"
            >
              <button
                className="flex justify-between items-center w-full font-medium text-gray-800"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span className="text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <p className="text-sm mt-2 text-[#2D3B36]">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
