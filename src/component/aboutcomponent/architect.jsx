import React from "react";
import { Link } from "react-router-dom";

const Architecture = () => {
  return (
    <section className="w-full bg-gray-50 font-sans overflow-hidden">
      {/* Container: Synced with 768px (md:px-6) and 1700px (1550px) */}
      <div className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-4 sm:px-6 md:px-6 lg:px-8 py-12 sm:py-16 md:py-24 mt-16 md:mt-24 text-center">
        
        <div className="inline-flex items-center gap-2 mt-4 px-3 sm:px-5 py-1 sm:py-2 rounded-full border border-gray-100 bg-white text-gray-800 shadow-sm text-xs sm:text-sm">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          <span className="font-medium">Established 2018 • 150+ Projects Shipped</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold py-6 sm:py-8 md:py-8 leading-snug sm:leading-snug md:leading-[1.1]">
          We Are The Architects of <br />
          <span className="text-blue-700">Digital Intelligence</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
          More than just a software agency. We are your strategic partner in navigating the <br className="hidden md:block" />
          intersection of stunning Web Design and cutting-edge Artificial Intelligence.
        </p>

        <h4 className="text-xs sm:text-sm md:text-sm text-gray-400 py-6 sm:py-8 md:py-9 uppercase tracking-widest font-semibold">
          Trusted by innovators at
        </h4>

        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-12 text-gray-400 font-bold text-base sm:text-lg md:text-xl grayscale opacity-70">
          <h4 className="hover:grayscale-0 transition-all cursor-default">Google Cloud</h4>
          <h4 className="hover:grayscale-0 transition-all cursor-default">AWS Partner</h4>
          <h4 className="hover:grayscale-0 transition-all cursor-default">Shopify Plus</h4>
          <h4 className="hover:grayscale-0 transition-all cursor-default">Stripe</h4>
          <h4 className="hover:grayscale-0 transition-all cursor-default">Microsoft Azure</h4>
        </div>
      </div>
    </section>
  );
};

export default Architecture;