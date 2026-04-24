import React from "react";
import { FaLock, FaShieldAlt, FaBolt, FaCode } from "react-icons/fa";

const Bridging = () => {
  return (
    <section className="w-full font-sans overflow-hidden">
      {/* Top Section - Bridging the Gap */}
      {/* Container max-width fixed for 1700px screens */}
      <div className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-4 sm:px-6 md:px-6 lg:px-8 py-12 md:py-24">
        
        {/* grid-cols-1: Mobile aur 768px tak image top aur text bottom rakhega (full width).
           md:grid-cols-2: 768px se upar image aur text ko side-by-side kar dega.
        */}
        {/* grid-cols-1: Mobile, Tablet aur 768px/md par 100% width (Image top, Text bottom)
    lg:grid-cols-2: Sirf 1024px se bari screens par side-by-side hoga
*/}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
  {/* 1. Image Container: 768px par automatically top par full width rahay gi */}
  <div className="w-full group overflow-hidden rounded-2xl">
    <img
      src="/machice.jpg"
      alt="Human & Machine"
      className="w-full h-auto object-cover rounded-2xl hover:shadow-2xl transition-transform duration-700 group-hover:scale-105"
    />
  </div>

  {/* 2. Text Container: 768px par image ke neechay full width rahay ga */}
  <div className="w-full text-center lg:text-left">
    <h1 className="text-3xl md:text-5xl font-bold leading-tight text-gray-900">
      Bridging the Gap Between <br className="hidden lg:block" /> Human & Machine
    </h1>
    <p className="text-gray-500 py-6 text-base md:text-lg leading-relaxed">
      It started with a simple observation: businesses were struggling to adopt AI not because the technology wasn't there, but because the <b className="text-gray-900">integration was too complex.</b>
      <br /> <br />
      We founded this agency to solve that. We combine aesthetic excellence with rigorous engineering. We don't just write code; we solve business problems using the most advanced tools available.
    </p>

    <div className="flex gap-4 items-start justify-center lg:justify-start">
      {/* Vertical line: Sirf Desktop (lg) par dikhe gi */}
      <div className="hidden lg:block w-1.5 h-20 bg-blue-600 rounded-full flex-shrink-0"></div>
      <p className="text-gray-700 text-xl md:text-2xl italic leading-snug border-l-4 border-blue-600 lg:border-l-0 pl-4 lg:pl-0 text-left">
        "Our mission is to democratize enterprise-grade technology for ambitious companies."
      </p>
    </div>
  </div>
</div>
      </div>

      {/* Security Cards Section */}
      <div className="w-full bg-gray-900 py-16 md:py-24">
        <div className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-4 sm:px-6 md:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-white font-bold">Enterprise-Grade Security & Standards</h2>
            <p className="text-gray-400 mt-4 text-lg">We take your data and infrastructure seriously.</p>
          </div>

          {/* Grid layout for cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-8 rounded-2xl hover:border-blue-500 transition-all duration-300 flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-gray-700 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                <FaShieldAlt className="w-6 h-6 text-blue-500 group-hover:text-white" />
              </div>
              <h3 className="text-white font-bold mt-6 text-lg">ISO 27001 Certified</h3>
            </div>

            {/* Card 2 */}
            <div className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-8 rounded-2xl hover:border-blue-500 transition-all duration-300 flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-gray-700 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                <FaLock className="w-6 h-6 text-blue-500 group-hover:text-white" />
              </div>
              <h3 className="text-white font-bold mt-6 text-lg">GDPR Compliant</h3>
            </div>

            {/* Card 3 */}
            <div className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-8 rounded-2xl hover:border-blue-500 transition-all duration-300 flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-gray-700 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                <FaBolt className="w-6 h-6 text-blue-500 group-hover:text-white" />
              </div>
              <h3 className="text-white font-bold mt-6 text-lg">SOC 2 Type II</h3>
            </div>

            {/* Card 4 */}
            <div className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-8 rounded-2xl hover:border-blue-500 transition-all duration-300 flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-gray-700 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                <FaCode className="w-6 h-6 text-blue-500 group-hover:text-white" />
              </div>
              <h3 className="text-white font-bold mt-6 text-lg">Clean Code Guarantee</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bridging;