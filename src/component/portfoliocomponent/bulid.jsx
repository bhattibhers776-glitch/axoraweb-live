import React from "react";
import { Link } from "react-router-dom";

const Bulid = () => {
  return (
    <section className="w-full mt-20 font-sans overflow-hidden">
      {/* Hero Section - Responsive Width & Alignment */}
      <div className="bg-gray-50 py-16 md:py-24">
        {/* Container: Fixed for 768px (md:px-6) and 1700px (1550px) */}
        <div className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-4 sm:px-6 md:px-6 lg:px-8 text-center">
          <button className="text-blue-600 bg-blue-50 text-sm h-8 px-4 border border-blue-200 rounded-2xl mb-6">
            Award Winning Agency
          </button>

          {/* Heading: Optimized leading and tracking */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold py-4 leading-[1.1] text-gray-900 tracking-tight">
            We Build Digital <br className="hidden md:block" />
            <span className="text-blue-600">Masterpieces</span>
          </h1>

          {/* Paragraph: Max-width balanced for readability */}
          <p className="text-base sm:text-lg md:text-xl text-gray-500 py-4 max-w-3xl mx-auto leading-relaxed px-2">
            From intelligent AI algorithms to stunning web experiences, we engineer 
            software that transforms businesses and defines the future.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 py-8 px-4">
            <Link to="/portfolio" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-blue-600 text-white py-3.5 px-8 rounded-2xl hover:bg-blue-500 transition-all font-semibold shadow-lg shadow-blue-100 active:scale-95">
                View Our Work
              </button>
            </Link>
            <Link to="/contact" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-white text-black py-3.5 px-8 rounded-2xl border border-gray-200 hover:bg-slate-50 transition-all font-semibold active:scale-95">
                Start a Project
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Section - Precise Width Fix */}
      <div className="w-full bg-white py-16 md:py-20">
        <div className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-4 sm:px-6 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 text-center">
            
            <div className="flex flex-col items-center">
              <h2 className="text-4xl lg:text-5xl font-extrabold text-blue-600">150+</h2>
              <p className="mt-3 font-bold text-sm lg:text-lg text-gray-600 uppercase tracking-tight">Projects Delivered</p>
            </div>

            <div className="flex flex-col items-center">
              <h2 className="text-4xl lg:text-5xl font-extrabold text-blue-600">98%</h2>
              <p className="mt-3 font-bold text-sm lg:text-lg text-gray-600 uppercase tracking-tight">Client Satisfaction</p>
            </div>

            <div className="flex flex-col items-center">
              <h2 className="text-4xl lg:text-5xl font-extrabold text-blue-600">10M+</h2>
              <p className="mt-3 font-bold text-sm lg:text-lg text-gray-600 uppercase tracking-tight">Users Impacted</p>
            </div>

            <div className="flex flex-col items-center">
              <h2 className="text-4xl lg:text-5xl font-extrabold text-blue-600">24/7</h2>
              <p className="mt-3 font-bold text-sm lg:text-lg text-gray-600 uppercase tracking-tight">Support & Uptime</p>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Divider - Synced with max-width */}
      <div className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-6 lg:px-8">
        <hr className="border-gray-100" />
      </div>
    </section>
  );
};

export default Bulid;