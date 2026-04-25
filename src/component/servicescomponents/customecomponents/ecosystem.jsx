import React from "react";
import { FaMobile, FaCheck } from "react-icons/fa";

const Ecosystem = () => {
  return (
    <section className="w-full bg-gray-50 py-20 overflow-hidden">
      {/* Master Width Container - 1550px Alignment */}
      <div className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="w-full text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
            The <span className="text-blue-600">Complete</span> Ecosystem
          </h1>
          <p className="text-base md:text-lg py-4 text-gray-500 max-w-2xl mx-auto">
            We don't just build isolated apps; we build interconnected systems.
          </p>
        </div>

        {/* Grid - items-stretch ensures all columns have the same height */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">

          {/* Column 1 - Left Cards */}
          <div className="flex flex-col gap-8 w-full order-2 lg:order-1">
            <div className="flex-1 p-8 border border-gray-200 border-l-4 border-l-blue-600 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 bg-white rounded-2xl shadow-sm">
              <h1 className="text-xl font-bold text-slate-900">Custom Software & Web</h1>
              <h2 className="text-sm text-gray-400 font-medium py-2">The command center of your business.</h2>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Scalable web applications and complex backend architectures designed for high-volume data processing.
              </p>
            </div>

            <div className="flex-1 p-8 border border-gray-200 border-l-4 border-l-blue-400 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 bg-white rounded-2xl shadow-sm">
              <h1 className="text-xl font-bold text-slate-900">API & Integrations</h1>
              <h2 className="text-sm text-gray-400 font-medium py-2">Connecting your tools.</h2>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Unifying your ERP, CRM, and third-party tools into one seamless workflow.
              </p>
            </div>
          </div>

          {/* Column 2 - Main Featured Center (Height synced with sides) */}
          <div className="w-full order-1 lg:order-2 flex">
            <div className="bg-blue-900 p-8 md:p-10 rounded-2xl flex flex-col w-full shadow-2xl shadow-blue-900/20">
              <div className="w-16 h-16 bg-blue-800 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <FaMobile className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-white mb-4">Mobile Applications</h1>
              <p className="text-blue-50 text-base leading-relaxed mb-8">
                Extend your enterprise capability to the palm of your hand. We build native iOS and Android apps that sync instantly with your central software.
              </p>
              <div className="flex flex-col gap-4 mb-10">
                <div className="flex items-center gap-3 group">
                  <div className="w-6 h-6 bg-blue-700/50 rounded-full flex items-center justify-center">
                    <FaCheck className="text-blue-400 text-xs" />
                  </div>
                  <p className="text-sm md:text-base text-gray-100 font-semibold group-hover:text-white transition-colors">Field Workforce Apps</p>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="w-6 h-6 bg-blue-700/50 rounded-full flex items-center justify-center">
                    <FaCheck className="text-blue-400 text-xs" />
                  </div>
                  <p className="text-sm md:text-base text-gray-100 font-semibold group-hover:text-white transition-colors">Customer Client Portals</p>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="w-6 h-6 bg-blue-700/50 rounded-full flex items-center justify-center">
                    <FaCheck className="text-blue-400 text-xs" />
                  </div>
                  <p className="text-sm md:text-base text-gray-100 font-semibold group-hover:text-white transition-colors">Offline-First Architecture</p>
                </div>
              </div>
              <a href="#" className="mt-auto text-white text-xl font-bold flex items-center gap-2 hover:translate-x-2 transition-transform duration-300">
                View Mobile Cases <span className="text-2xl">→</span>
              </a>
            </div>
          </div>

          {/* Column 3 - Right Cards */}
          <div className="flex flex-col gap-8 w-full order-3">
            <div className="flex-1 p-8 border border-gray-200 border-l-4 border-l-blue-600 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 bg-white rounded-2xl shadow-sm">
              <h1 className="text-xl font-bold text-slate-900">QA & Testing</h1>
              <h2 className="text-sm text-gray-400 font-medium py-2">Ensuring reliability.</h2>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Rigorous automated testing to ensure your software works flawlessly across all devices and updates.
              </p>
            </div>

            <div className="flex-1 p-8 border border-gray-200 border-l-4 border-l-blue-400 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 bg-white rounded-2xl shadow-sm">
              <h1 className="text-xl font-bold text-slate-900">Maintenance</h1>
              <h2 className="text-sm text-gray-400 font-medium py-2">Long-term stability.</h2>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                24/7 monitoring and security patching to keep your digital infrastructure safe.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Ecosystem;