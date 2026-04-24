import React from "react";
import { FaTriangleExclamation } from "react-icons/fa6";

const Conversion = () => {
  return (
    <section className="w-full py-12 md:py-20 bg-gray-50 mt-12 overflow-hidden">
      {/* Container - Fixed to match Hero Section logic for 768px and 1700px */}
      <div className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-4 sm:px-6 md:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
              Confusion kills conversion.
            </h1>
            <p className="text-gray-500 text-lg font-medium leading-relaxed max-w-xl">
              Users judge your credibility in 0.05 seconds. If your software is hard to use, they churn. If your website is cluttered, they bounce.
            </p>

            <div className="w-full bg-white shadow-sm border border-gray-200 p-6 sm:p-8 rounded-2xl transform hover:shadow-md transition-shadow">
              <div className="flex gap-4 items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 flex items-center justify-center rounded-xl">
                  <FaTriangleExclamation className="text-2xl text-blue-500" />
                </div>
                <p className="font-bold text-lg text-gray-900">The "Frustration Gap"</p>
              </div>
              <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
                Every extra click, slow loader, or unclear label drops your conversion rate by <span className="text-blue-600 font-bold">20%</span>. We close that gap.
              </p>
            </div>
          </div>

          {/* Right Stats Grid - Width fix for 768px (md) to make it look wider */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 lg:gap-6">
            <div className="flex flex-col items-center justify-center p-6 border border-gray-100 bg-white shadow-sm rounded-2xl h-36 hover:border-blue-200 transition-colors w-full">
              <h1 className="text-4xl lg:text-5xl font-extrabold text-blue-600">300%</h1>
              <p className="text-xs sm:text-sm font-semibold text-gray-500 mt-2 uppercase tracking-wide text-center px-2">ROI on UX Design</p>
            </div>

            <div className="flex flex-col items-center justify-center p-6 border border-gray-100 bg-white shadow-sm rounded-2xl h-36 hover:border-blue-200 transition-colors w-full">
              <h1 className="text-4xl lg:text-5xl font-extrabold text-blue-600">50ms</h1>
              <p className="text-xs sm:text-sm font-semibold text-gray-500 mt-2 uppercase tracking-wide text-center px-2">Time to Impress</p>
            </div>

            <div className="flex flex-col items-center justify-center p-6 border border-gray-100 bg-white shadow-sm rounded-2xl h-36 hover:border-blue-200 transition-colors w-full">
              <h1 className="text-4xl lg:text-5xl font-extrabold text-blue-600">88%</h1>
              <p className="text-xs sm:text-sm font-semibold text-gray-500 mt-2 uppercase tracking-wide text-center px-2">Churn after bad XP</p>
            </div>

            <div className="flex flex-col items-center justify-center p-6 border border-blue-800 bg-blue-600 shadow-lg rounded-2xl h-36 transition-transform hover:scale-105 w-full">
              <h1 className="text-5xl font-extrabold text-white">∞</h1>
              <p className="text-xs sm:text-sm font-semibold text-blue-50 mt-2 uppercase tracking-wide text-center px-2">Value of Trust</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Conversion;