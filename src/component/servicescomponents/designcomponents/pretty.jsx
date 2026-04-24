import React from "react";
import { FaSearch, FaBolt } from "react-icons/fa";
import { FaTableCellsLarge } from "react-icons/fa6";

const Pretty = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-gray-50 font-sans overflow-hidden">
      {/* Main Width Container - Standardized for 768px and 1700px */}
      <div className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-4 sm:px-6 md:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            More than just "pretty"
          </h1>
          <p className="text-gray-500 text-base sm:text-lg mt-4 max-w-2xl mx-auto px-4">
            We balance scientific research with artistic execution to create products that work.
          </p>
        </div>

        {/* Features Grid - Optimized for 768px (md) width */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-8 py-4">
          
          {/* UX Research */}
          <div className="group bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 w-full">
            <div className="w-14 h-12 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
              <FaSearch className="text-blue-600 w-6 h-6 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-2xl font-bold mt-6 mb-3 text-gray-900">UX Research</h3>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
              We interview your users, create personas, and map out customer journeys to ensure we are solving the right problem.
            </p>
          </div>

          {/* UI Design */}
          <div className="group bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 w-full">
            <div className="w-14 h-12 bg-purple-50 rounded-xl flex items-center justify-center group-hover:bg-purple-600 transition-colors duration-300">
              <FaTableCellsLarge className="text-purple-600 w-6 h-6 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-2xl font-bold mt-6 mb-3 text-gray-900">UI Design</h3>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
              Pixel-perfect layouts, typography, and color theory. We create Design Systems (UI Kits) for consistency across all screens.
            </p>
          </div>

          {/* Prototyping */}
          <div className="group bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 w-full">
            <div className="w-14 h-12 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
              <FaBolt className="text-blue-600 w-6 h-6 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-2xl font-bold mt-6 mb-3 text-gray-900">Prototyping</h3>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
              Clickable, interactive mockups that act like the real app. We test these with real users before writing a single line of code.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Pretty;