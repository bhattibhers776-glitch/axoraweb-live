import React from "react";
import { Link } from "react-router-dom";

const Herodesign = () => {
  return (
    <section className="w-full mt-16 font-sans overflow-hidden">
      {/* Main Container - Controlled width for ultra-wide, flexible for smaller screens */}
      <div className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Text */}
        <div className="text-center flex flex-col items-center py-16 md:py-24 lg:py-28">
          <button className="text-black bg-gray-50 text-xs sm:text-sm h-8 px-4 border-[1px] border-gray-200 hover:border-blue-300 rounded-2xl transition-colors mb-4">
            Human-Centered Design
          </button>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold py-4 leading-[1.1] text-gray-900 tracking-tight">
            We turn complex logic into <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-blue-600 via-red-500 to-blue-600 bg-clip-text text-transparent">
              beautiful experiences.
            </span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-gray-500 mt-4 max-w-3xl leading-relaxed px-2">
            Great design isn't just about making things look pretty. It's about solving 
            problems. We design intuitive interfaces that users understand instantly <br className="hidden lg:block" />
            and love using.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 py-8 w-full sm:w-auto px-6 sm:px-0">
            <Link to="/portfolio" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-blue-600 text-white py-3.5 px-8 rounded-full hover:bg-blue-500 transition-all duration-300 shadow-lg shadow-blue-100 font-semibold active:scale-95">
                See Our Process
              </button>
            </Link>
            <Link to="/contact" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-white text-black py-3.5 px-8 rounded-full hover:bg-slate-50 border border-gray-200 transition-all duration-300 font-semibold active:scale-95">
                Book a UX Audit
              </button>
            </Link>
          </div>
        </div>

        {/* Hero Image - FULL WIDTH FIX for all smaller devices */}
        <div className="w-full pb-10 sm:pb-20 px-0 md:-mx-0 lg:px-0"> 
          <div className="relative overflow-hidden rounded-2xl md:rounded-[2.5rem] shadow-2xl border border-gray-100 bg-white w-full">
            <img
              src="/phonede.png"
              alt="UX Design Showcase"
              className="w-full h-auto object-cover block transform hover:scale-[1.01] transition-transform duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herodesign;