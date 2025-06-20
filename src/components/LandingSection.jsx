

import React  from "react";
import Navbar from "./Navbar";
import { FaRegSmile } from "react-icons/fa";
import homePageImg from "../assets/home page2.png";
import WhyOurProducts from "./WhyOurProducts";
import BestSellers from "./BestSellers";
import HeroSection from "./Herosection";
import ProductFilterSection from "./ProductFilterSection";
import FaqSection from "./FaqSection";
import Footers from "./Footers";
import Details from "./Details";



function LandingSection() {

  return(
    
      
      <div className="min-h-screen w-full bg-[#EFF5E1]">
      
      <Navbar/>

      
      <div className="flex items-center justify-between h-[calc(100%-4rem)] px-16 mt-20">
        
        <div className="max-w-xs text-gray-800 text-sm text-right">
          <p>
            Transform your skincare routine with premium products that restore, protect, and enhance your natural glow every day.
          </p>
        </div>

        
        <h1 className="text-6xl font-bold text-[#2D3B36] text-center leading-tight">
          GLOW<br />NATUR-<br />ALLY
        </h1>

        
        <div className=" rounded-lg p-1">
          <img
            src={"src/assets/home page.jpg"}
            alt="Product"
            className="w-40 h-auto object-contain rounded-md"
          />
        </div>
      </div>
        

        


      <div className="relative flex flex-col items-center justify-center h-screen">
  
  <button className="absolute left-10 top-10 bg-black text-white px-6 py-2 rounded-full shadow hover:bg-gray-800 z-20">
    Shop Now
  </button>

  
  <h1 className="text-[16.5rem] font-bold text-[#2D3B36] tracking-widest leading-none z-0">
    SKINCARE
  </h1>

  
  <div className="absolute bottom-[15rem] z-10">
    <div className="relative rounded-2xl overflow-hidden">
      <img
        src={homePageImg}
        alt="Skincare Model"
        className="w-[350px] h-[400px] object-cover rounded-2xl"
      />

      
<div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-[#EFF5E1] px-1 py-1 h-14 w-[260px]  rounded-4xl shadow-md flex items-center space-x-4">
  
  <div className="w-8 h-8 rounded-full border-2 border-dotted border-gray-400 flex items-center justify-center">
    <img
      src={"src/assets/home page.jpg"} 
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


      
     <Details/>
    <WhyOurProducts/>
    <BestSellers/>
    <HeroSection/>
    <ProductFilterSection/>
    <FaqSection/>
    <Footers/>








</div>  

     
  )
}

export default LandingSection;

// import React, { useEffect, useRef } from "react";
// import Navbar from "./Navbar";
// import Details from "./Details";
// import WhyOurProducts from "./WhyOurProducts";
// import BestSellers from "./BestSellers";
// import HeroSection from "./Herosection";
// import ProductFilterSection from "./ProductFilterSection";
// import FaqSection from "./FaqSection";
// import Footers from "./Footers";
// import { gsap } from "gsap";
 
// import Home from "./Home";

// function LandingSection() {
  
//   return (
//     <div className="min-h-screen w-full ">
      
//       <Navbar />

//       <Home/>

      
//       <Details />
//       <WhyOurProducts />
//       <BestSellers />
//       <HeroSection />
//       <ProductFilterSection />
//       <FaqSection />
//       <Footers />
//     </div>
//   );
// }

// export default LandingSection;
