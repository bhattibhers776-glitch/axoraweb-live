import React from 'react';

const PartnersSection = () => {
  return (
    <section className="bg-white py-16 px-4">
      {/* Fixed width to match your standard layout */}
      <div className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto text-center">
        
        {/* Heading Section */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#0a1d37] mb-3">
          Trusted Partners & Recognition
        </h2>
        
        {/* Blue Accent Line (Red replaced with Blue) */}
        <div className="w-16 h-1 bg-blue-600 mx-auto mb-8 rounded-full"></div>
        
        {/* Subtext */}
        <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-16 leading-relaxed">
          Collaborating with industry leaders to deliver world-class digital solutions.
        </p>

        {/* Logos Container */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-0">
          
          {/* Trigent Technologies Logo */}
          <div className="flex flex-col items-center px-12 md:border-r border-gray-200">
            <div className="h-32 flex items-center justify-center mb-6">
              <img 
                src="/parent.png" 
                alt="Trigent Technologies" 
                className="max-h-full object-contain"
              />
            </div>
            <span className="text-[10px] font-bold tracking-[0.2em] text-blue-600 uppercase">
              Technology Partner
            </span>
          </div>

          {/* DesignRush Logo */}
          <div className="flex flex-col items-center px-12">
            <div className="bg-[#0f172a] p-8 rounded-[2rem] shadow-lg mb-6 h-32 flex items-center justify-center min-w-[260px]">
              <img 
                src="/d1.png" 
                alt="DesignRush" 
                className="max-h-12 object-contain"
              />
            </div>
            <span className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase">
              Top Rated Agency
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PartnersSection;