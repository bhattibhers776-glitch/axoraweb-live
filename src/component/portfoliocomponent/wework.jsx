import React from "react";
import { FaSearch, FaPencilRuler, FaLaptop, FaRocket } from "react-icons/fa";

const Work = () => {
  return (
    <section className="w-full font-sans overflow-hidden">
      {/* How We Work Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        {/* Container: Fixed for 768px (md:px-6) and 1700px (1550px) */}
        <div className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-4 sm:px-6 md:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-slate-900 mb-16 md:mb-24 tracking-tight">
            How We Work
          </h2>

          <div className="relative">
            {/* Desktop & Tablet Horizontal Line - Adjusted for md visibility */}
            <div className="hidden lg:block absolute top-10 left-0 w-full h-0.5 bg-slate-200 -z-0"></div>
            
            {/* Mobile/Tablet Vertical Line */}
            <div className="lg:hidden absolute top-0 left-10 md:left-10 w-0.5 h-full bg-slate-200 -z-0"></div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
              
              {/* Step 1 */}
              <div className="flex flex-row lg:flex-col items-start lg:items-center text-left lg:text-center group">
                <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-xl mb-0 lg:mb-6 border-2 border-blue-500 shrink-0 z-10 transition-all group-hover:scale-110 group-hover:bg-blue-500 duration-300">
                  <FaSearch className="w-6 h-6 text-gray-500 group-hover:text-white transition-colors" />
                </div>
                <div className="ml-8 lg:ml-0">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Discovery</h3>
                  <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-xs">
                    We analyze your goals and technical requirements.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-row lg:flex-col items-start lg:items-center text-left lg:text-center group">
                <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-xl mb-0 lg:mb-6 border-2 border-amber-500 shrink-0 z-10 transition-all group-hover:scale-110 group-hover:bg-amber-500 duration-300">
                  <FaPencilRuler className="w-6 h-6 text-amber-500 group-hover:text-white transition-colors" />
                </div>
                <div className="ml-8 lg:ml-0">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Design</h3>
                  <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-xs">
                    We craft intuitive UI/UX and system architecture.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-row lg:flex-col items-start lg:items-center text-left lg:text-center group">
                <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-xl mb-0 lg:mb-6 border-2 border-gray-700 shrink-0 z-10 transition-all group-hover:scale-110 group-hover:bg-gray-700 duration-300">
                  <FaLaptop className="w-6 h-6 text-gray-700 group-hover:text-white transition-colors" />
                </div>
                <div className="ml-8 lg:ml-0">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Development</h3>
                  <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-xs">
                    Agile sprints to bring the product to life.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex flex-row lg:flex-col items-start lg:items-center text-left lg:text-center group">
                <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-xl mb-0 lg:mb-6 border-2 border-blue-700 shrink-0 z-10 transition-all group-hover:scale-110 group-hover:bg-blue-700 duration-300">
                  <FaRocket className="w-6 h-6 text-blue-700 group-hover:text-white transition-colors" />
                </div>
                <div className="ml-8 lg:ml-0">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Launch</h3>
                  <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-xs">
                    Testing, deployment, and ongoing scaling.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Powering Solutions Section - Width Fixed for Ultra-Wide */}
      <div className="bg-white text-center py-16 border-t border-gray-100">
        <div className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-4 sm:px-6 md:px-6 lg:px-8">
          <h4 className="text-xs md:text-sm font-bold text-gray-400 uppercase tracking-[0.3em] mb-12">
            Powering Solutions With
          </h4>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-gray-300 font-bold text-xl md:text-3xl">
            {["Laravel", "React", "Tailwind", "Python", "AWS", "OpenAI"].map((tech) => {
              const colors = {
                Laravel: "hover:text-red-500",
                React: "hover:text-blue-500",
                Tailwind: "hover:text-sky-400",
                Python: "hover:text-yellow-500",
                AWS: "hover:text-orange-500",
                OpenAI: "hover:text-emerald-500",
              };
              return (
                <h4 key={tech} className={`${colors[tech]} transition-all duration-300 cursor-default hover:scale-110`}>
                  {tech}
                </h4>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;