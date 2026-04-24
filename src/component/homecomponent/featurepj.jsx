import React from "react";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";

const Featurepj = () => {
  return (
    // Section background same rakha hai, padding aur alignment fix ki hai
    <section className="w-full bg-gray-50 pt-14 py-20 overflow-hidden font-sans">

      {/* Main Container - Added max-width fixes for ultra-wide screens */}
      <div className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Header Badge */}
        <div className="inline-flex items-center gap-2 mt-4 px-5 py-2 rounded-full border border-blue-200 bg-blue-50 text-blue-500 shadow-sm">
          <span className="w-2 h-2 bg-blue-800 rounded-full"></span>
          <span className="text-xs font-medium uppercase tracking-wider">Selected Work</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 text-gray-900 leading-tight">
          Featured <span className="text-blue-600">Projects</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl font-normal mt-5 max-w-3xl mx-auto text-gray-700 leading-relaxed">
          Discover how we've helped businesses transform their digital presence. From <br className="hidden md:block" />
          seed-stage startups to enterprise giants.
        </p>

        {/* Project 1 */}
        <div className="w-full py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center text-left">
            <div className="w-full">
              <img
                src="/billanory (2).png"
                alt="Billonary Club"
                className="w-full h-auto rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              />
            </div>

            <div className="flex flex-col gap-4 justify-center">
              <div className="flex gap-3 flex-wrap">
                <span className="text-[10px] uppercase font-bold tracking-widest rounded-full bg-white border border-gray-200 px-3 py-1 text-gray-500">Webflow</span>
                <span className="text-[10px] uppercase font-bold tracking-widest rounded-full bg-white border border-gray-200 px-3 py-1 text-gray-500">SaaS</span>
                <span className="text-[10px] uppercase font-bold tracking-widest rounded-full bg-white border border-gray-200 px-3 py-1 text-gray-500">B2B</span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">Billonary Club</h1>
              <p className="text-sm text-blue-600 font-bold uppercase tracking-tight">Financial SaaS Platform</p>

              <p className="text-base sm:text-lg text-gray-600 py-2 leading-relaxed">
                We engineered a robust financial supply chain platform that transformed how users manage high-volume transactions. By streamlining complex user flows and optimizing the dashboard architecture, we helped the client secure significant Series A funding.              </p>

              <h2 className="text-xl font-bold text-gray-900 mt-2">Key Outcomes</h2>
              <div className="py-3 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-1 rounded-full flex-shrink-0">
                    <FaCheck className="w-3 h-3 text-green-600" />
                  </div>
                  <p className="text-sm text-gray-700 font-semibold">300% increase in user conversions</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-1 rounded-full flex-shrink-0">
                    <FaCheck className="w-3 h-3 text-green-600" />
                  </div>
                  <p className="text-sm text-gray-700 font-semibold">$12.5M in funding raised</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-1 rounded-full flex-shrink-0">
                    <FaCheck className="w-3 h-3 text-green-600" />
                  </div>
                  <p className="text-sm text-gray-700 font-semibold">Dashboard load times cut by 50%</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="w-full py-16 lg:py-24 border-t border-gray-200">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center text-left">
            <div className="flex flex-col gap-4 justify-center order-2 lg:order-1">
              <div className="flex gap-3 flex-wrap">
                <span className="text-[10px] uppercase font-bold tracking-widest rounded-full bg-white border border-gray-200 px-3 py-1 text-gray-500">E-Commerce</span>
                <span className="text-[10px] uppercase font-bold tracking-widest rounded-full bg-white border border-gray-200 px-3 py-1 text-gray-500">UI/UX</span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">Ecommerce Solutions</h1>
              <p className="text-sm text-blue-600 font-bold uppercase tracking-tight">Digital Storefront Transformation</p>

              <p className="text-base sm:text-lg text-gray-600 py-2 leading-relaxed">
                A modern, high-performance e-commerce experience featuring advanced WebGL product interactions. This overhaul was designed to position the brand as an industry innovator, focusing on seamless navigation and immersive user engagement.              </p>

              <h2 className="text-xl font-bold text-gray-900 mt-2">Key Outcomes</h2>
              <div className="py-3 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-1 rounded-full flex-shrink-0">
                    <FaCheck className="w-3 h-3 text-green-600" />
                  </div>
                  <p className="text-sm text-gray-700 font-semibold">200% growth in inbound leads</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-1 rounded-full flex-shrink-0">
                    <FaCheck className="w-3 h-3 text-green-600" />
                  </div>
                  <p className="text-sm text-gray-700 font-semibold">40% increase in session duration</p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 w-full">
              <img
                src="/ecommerce.png"
                alt="Ecommerce Solutions"
                className="w-full h-auto rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              />
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="w-full py-16 lg:py-24 border-t border-gray-200">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center text-left">
            <div className="w-full">
              <img
                src="/video-player.jpg"
                alt="Video Player"
                className="w-full h-auto rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              />
            </div>

            <div className="flex flex-col gap-4 justify-center">
              <div className="flex gap-3 flex-wrap">
                <span className="text-[10px] uppercase font-bold tracking-widest rounded-full bg-white border border-gray-200 px-3 py-1 text-gray-500">Growth</span>
                <span className="text-[10px] uppercase font-bold tracking-widest rounded-full bg-white border border-gray-200 px-3 py-1 text-gray-500">Media</span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">Video Player</h1>
              <p className="text-sm text-blue-600 font-bold uppercase tracking-tight">High-Conversion Landing Experience</p>

              <p className="text-base sm:text-lg text-gray-600 py-2 leading-relaxed">
                A scientifically optimized landing page designed specifically to capture early adopters for a media startup. By clarifying the value proposition and simplifying the sign-up flow, we drove massive growth in user acquisition.              </p>

              <h2 className="text-xl font-bold text-gray-900 mt-2">Key Outcomes</h2>
              <div className="py-3 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-1 rounded-full flex-shrink-0">
                    <FaCheck className="w-3 h-3 text-green-600" />
                  </div>
                  <p className="text-sm text-gray-700 font-semibold">85% Conversion Rate on ad traffic</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-1 rounded-full flex-shrink-0">
                    <FaCheck className="w-3 h-3 text-green-600" />
                  </div>
                  <p className="text-sm text-gray-700 font-semibold">Secured crucial seed funding</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* View All Button */}
        <div className="mt-10 flex justify-center pb-10">
          <Link to="/portfolio">
            <button className="text-white bg-blue-600 font-bold rounded-2xl text-lg px-8 py-4 flex items-center hover:bg-blue-700 transition-all active:scale-95 shadow-xl shadow-blue-100">
              View All Projects <span className="ml-3 font-bold">→</span>
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Featurepj;