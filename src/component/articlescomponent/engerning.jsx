import React from "react";
import { Link } from "react-router-dom";

const Enginering = () => {
  return (
    <section className="w-full mt-10 md:mt-20 font-sans overflow-hidden">
      {/* Header Section - Fixed for PC & Tablet */}
      <div className="w-full bg-gray-50 py-16 sm:py-28">
        {/* Container: Synced for 768px (md:px-6) and 1700px (1550px) */}
        <div className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-4 sm:px-6 md:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Insights & <span className="text-blue-600">Engineering</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-500 py-4 sm:py-6 max-w-3xl mx-auto">
            Deep dives into AI, Scalability, and Product Strategy. Written by the engineers who build them.
          </p>
        </div>
      </div>

      {/* Placeholder Section for future content - Width Fixed */}
      <div className="w-full bg-gray-50 pb-10">
        <div className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-4 sm:px-6 md:px-6 lg:px-8">
          {/* Add your cards or articles here in future */}
        </div>
      </div>

      {/* Horizontal Line - Aligned with the content width */}
      <div className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-4 sm:px-6 md:px-6 lg:px-8">
        <hr className="border-gray-300" />
      </div>
    </section>
  );
};

export default Enginering;