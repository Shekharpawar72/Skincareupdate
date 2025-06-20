import React from 'react';

const Footers = () => {
  return (
    <footer className="relative bg-[#2D3B36] text-[#E9ECE1] py-16 px-6 md:px-20 overflow-hidden">
      {/* Background SKINCARE text */}
      

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
        {/* Left Column */}
        <div>
          <h2 className="text-xl md:text-2xl font-semibold mb-2">Join The Skincare <br /> Community Now.</h2>
          <div className="flex gap-4 text-sm text-[#E9ECE1] mt-20">
            <a href="#" className="hover:text-white">Facebook</a>
            <a href="#" className="hover:text-white">Instagram</a>
            <a href="#" className="hover:text-white">YouTube</a>
          </div>
        </div>

      

        <div className="text-right md:text-left">
  <p className="text-sm text-[#E9ECE1]">Get in Touch</p>

  <a
    href="https://contact.skincare.com"
    className="text-lg md:text-xl font-semibold text-[#E9ECE1] hover:underline mt-2 block"
  >
    contact.skincare.com
  </a>

  <div className="flex gap-4 text-sm text-[#E9ECE1] mt-20 justify-end md:justify-start">
    <a href="#" className="hover:text-white">Terms of Service</a>
    <a href="#" className="hover:text-white">Privacy Policy</a>
    <a href="#" className="hover:text-white">Cookies Policy</a>
  </div>
</div>

      </div>

      
        <div className="relative pt-55"> {/* Parent container */}
        <div className="absolute inset-0   bottom-0 flex items-end justify-center pointer-events-none">
        <h1 className="text-[20vw] md:text-[22vw] font-bold text-[#34423E] leading-4.5 select-none">
          SKINCARE
            </h1>
               </div>
              </div>
    </footer>
  );
};

export default Footers;
