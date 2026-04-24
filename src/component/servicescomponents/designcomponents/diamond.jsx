import React from "react";
import { FaSearch, FaBars, FaBuilding } from "react-icons/fa";

const Diamondsec = () => {
  return (
    <section className="w-full font-sans overflow-hidden">
      <div className="w-full bg-gray-900">
        
        {/* Header - Standardized for 768px (md:px-6) and 1700px (1550px) */}
        <div className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-4 sm:px-6 md:px-6 lg:px-8 py-12 md:py-20">
          <h1 className="text-sm text-blue-600 font-bold uppercase tracking-wider">How We Design</h1>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold py-2 tracking-tight">The "Double Diamond" Process</h2>
          <p className="text-sm md:text-base text-gray-400 max-w-2xl leading-relaxed">
            We don't guess. We follow a proven framework to discover the problem and <br className="hidden md:block" />
            deliver the solution.
          </p>
        </div>

        {/* Timeline Section - md:px-6 added to increase width on 768px */}
        <section className="relative max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-4 sm:px-6 md:px-6 lg:px-8 py-12 md:py-24">
          
          {/* Vertical Line */}
          <div className="absolute top-0 left-6 md:left-1/2 h-full w-[2px] bg-gray-800 md:-translate-x-1/2"></div>

          {/* Step 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative mb-16 md:mb-28">
            <div className="pl-10 md:pl-0 md:text-right md:pr-20">
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">01. Discover & Empathize</h3>
              <p className="text-sm md:text-base text-gray-500 leading-relaxed">
                We start by understanding the "Who" and the "Why". We conduct stakeholder interviews and user surveys.
              </p>
              <div className="mt-3">
                <p className="text-xs md:text-sm text-blue-300 py-1">• Deliverable: User Personas</p>
                <p className="text-xs md:text-sm text-blue-300">• Deliverable: Empathy Maps</p>
              </div>
            </div>
            <div className="hidden md:flex justify-start">
              <div className="w-16 h-16 bg-gray-800/50 border border-gray-700 mt-2 rounded-xl flex items-center justify-center">
                <FaSearch className="text-blue-500 w-6 h-6" />
              </div>
            </div>
            <div className="absolute left-[18px] md:left-1/2 top-1.5 md:top-3 -translate-x-1/2">
              <div className="w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative mb-16 md:mb-28">
            <div className="hidden md:flex justify-end">
              <div className="w-16 h-16 bg-gray-800/50 border border-gray-700 mt-2 rounded-xl flex items-center justify-center">
                <FaBars className="text-white w-6 h-6" />
              </div>
            </div>
            <div className="pl-10 md:pl-20">
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">02. Define & Wireframe</h3>
              <p className="text-sm md:text-base text-gray-500 leading-relaxed">
                We organize the chaos. We define the user flow (Information Architecture) and sketch low-fidelity layouts.
              </p>
              <div className="mt-3">
                <p className="text-xs md:text-sm text-blue-300 py-1">• Deliverable: User Journey Map</p>
                <p className="text-xs md:text-sm text-blue-300">• Deliverable: Lo-Fi Wireframes</p>
              </div>
            </div>
            <div className="absolute left-[18px] md:left-1/2 top-1.5 md:top-3 -translate-x-1/2">
              <div className="w-4 h-4 rounded-full bg-gray-600"></div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative mb-16 md:mb-28">
            <div className="pl-10 md:pl-0 md:text-right md:pr-20">
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">03. Visual Design (UI)</h3>
              <p className="text-sm md:text-base text-gray-500 leading-relaxed">
                This is where it gets beautiful. We apply your branding, colors, and typography to create high-fidelity screens.
              </p>
              <div className="mt-3">
                <p className="text-xs md:text-sm text-blue-300 py-1">• Deliverable: High-Fidelity Mockups</p>
                <p className="text-xs md:text-sm text-blue-300">• Deliverable: UI Component Library</p>
              </div>
            </div>
            <div className="hidden md:flex justify-start">
              <div className="w-16 h-16 bg-gray-800/50 border border-gray-700 mt-2 rounded-xl flex items-center justify-center">
                <FaBuilding className="text-purple-500 w-6 h-6" />
              </div>
            </div>
            <div className="absolute left-[18px] md:left-1/2 top-1.5 md:top-3 -translate-x-1/2">
              <div className="w-4 h-4 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative">
            <div className="hidden md:flex justify-end">
              <div className="w-16 h-16 bg-gray-800/50 border border-gray-700 mt-2 rounded-xl flex items-center justify-center">
                <FaBars className="text-white w-6 h-6" />
              </div>
            </div>
            <div className="pl-10 md:pl-20">
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">04. Prototype & Handoff</h3>
              <p className="text-sm md:text-base text-gray-500 leading-relaxed">
                We link the screens to create a clickable prototype. Once approved, we prep files for developers.
              </p>
              <div className="mt-3">
                <p className="text-xs md:text-sm text-blue-300 py-1">• Deliverable: Interactive Prototype</p>
                <p className="text-xs md:text-sm text-blue-300">• Deliverable: Developer Handoff File</p>
              </div>
            </div>
            <div className="absolute left-[18px] md:left-1/2 top-1.5 md:top-3 -translate-x-1/2">
              <div className="w-4 h-4 rounded-full bg-gray-600"></div>
            </div>
          </div>
        </section>
      </div>

      {/* Tools Section - Global Width Fix */}
      <div className="w-full py-16 md:py-24 border-t border-gray-100 bg-white">
        <div className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-4 md:px-6 text-center">
          <h4 className="text-xs md:text-sm font-bold text-gray-400 uppercase tracking-widest mb-10">
            We speak the same language as your team
          </h4>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-14 text-gray-300 font-bold text-xl md:text-2xl">
            {["Figma", "Adobe XD", "Sketch", "Maze", "Zeplin"].map((tool) => (
              <span key={tool} className="hover:text-blue-500 transition-all duration-300 cursor-default hover:scale-110">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Diamondsec;