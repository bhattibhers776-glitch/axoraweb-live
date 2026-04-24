import React from "react";
import { Link } from "react-router-dom";

const Digitalsection = () => {
  return (
    <section className="w-full bg-gray-50 overflow-hidden mt-16">
      {/* 1700px logic added. 
          flex-col: Default for mobile/tablet (425px to 1024px)
          lg:flex-row: Desktop (1024px+) par side-by-side hoga
      */}
      <div className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        
        {/* Text Content */}
        {/* w-full: 768px tak full width rahega */}
        <div className="w-full lg:flex-1 text-left order-1">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-200 bg-blue-50 text-blue-800 shadow-sm">
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
            <span className="text-sm font-medium">WHO ARE YOU</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mt-7 leading-tight text-gray-900">
            Architects of <br className="hidden sm:block" />
            <span className="text-blue-700">Digital Transformation</span>
          </h1>

          <p className="text-base sm:text-lg md:text-2sm text-gray-600 mt-6 leading-relaxed">
            We are a dedicated team of expert developers and designers specializing in crafting stunning, modern, and scalable software. From <b>Web & Mobile Apps</b> to complex <b>CRM, HRM, and RSM systems,</b> we build the engines that power business growth. <br /><br />
            Since our founding, we’ve focused on one goal: delivering high-quality, user-focused solutions. We collaborate closely with startups and enterprises to turn ambitious visions into <u className="decoration-blue-600 decoration-2 underline-offset-4 text-gray-900">clean, maintainable code.</u>
          </p>

          <div className="mt-10">
            <Link to="/about">
              <button className="text-white bg-blue-600 rounded-xl text-sm sm:text-base px-7 py-4 flex items-center hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-100 active:scale-95">
                Learn more About us
                <span className="ml-3 font-bold">→</span>
              </button>
            </Link>
          </div>
        </div>

        {/* Image Section */}
        {/* w-full: 768px par image bhi full width hogi */}
        <div className="w-full lg:flex-1 flex justify-center lg:justify-end order-2">
          <div className="relative w-full max-w-full lg:max-w-lg">
            <img
              src="/herose2.png"
              alt="Digital Transformation"
              className="rounded-3xl shadow-2xl w-full h-auto object-cover transform hover:rotate-1 transition-transform duration-500 border border-gray-100"
            />
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-100/50 rounded-full blur-2xl -z-10"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Digitalsection;