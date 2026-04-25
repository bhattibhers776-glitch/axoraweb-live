import React from 'react';
import { 
  Truck, Wind, Building2, Server, ShoppingCart, 
  Briefcase, Gamepad2, ShoppingBag, Mountain, 
  Baby, Utensils, TrendingUp 
} from 'lucide-react';

const Team = () => {
  const partners = [
    { name: "Brightway", sub: "Logistics", icon: <Truck className="w-5 h-5 md:w-6 md:h-6" />, style: "font-sans font-bold" },
    { name: "Remlyo", sub: "Harnessing Nature, Powered by AI", icon: <Wind className="w-5 h-5 md:w-6 md:h-6" />, style: "font-sans font-bold" },
    { name: "Construct Hub", sub: "BUILDING TOMORROW'S FOUNDATIONS", icon: <Building2 className="w-5 h-5 md:w-6 md:h-6" />, style: "font-sans font-bold uppercase" },
    { name: "HOST ETHICS", sub: "Hosting your online success", icon: <Server className="w-5 h-5 md:w-6 md:h-6" />, style: "font-sans font-black italic tracking-tighter" },
    { name: "Hello Shop", sub: "", icon: <ShoppingCart className="w-5 h-5 md:w-6 md:h-6" />, style: "font-serif italic text-lg md:text-xl" },
    { name: "SMARTCASE", sub: "manager", icon: <Briefcase className="w-4 h-4 md:w-5 md:h-5" />, hasLine: true, style: "font-sans tracking-widest font-light" },
    { name: "CCESS", icon: <Gamepad2 className="w-5 h-5 md:w-6 md:h-6" />, sub: "A LEADING GAMING BRAND", style: "font-sans font-black italic" },
    { name: "OMROLO", sub: "", icon: <ShoppingBag className="w-5 h-5 md:w-6 md:h-6" />, style: "font-sans font-black text-lg md:text-xl tracking-tighter" },
    { name: "Summit Estates", sub: "", icon: <Mountain className="w-5 h-5 md:w-6 md:h-6" />, style: "font-serif italic" },
    { name: "SNUG CRAZE", sub: "", icon: <Baby className="w-5 h-5 md:w-6 md:h-6" />, style: "font-sans font-black italic" },
    { name: "Taste Bites", sub: "", icon: <Utensils className="w-5 h-5 md:w-6 md:h-6" />, style: "font-serif italic font-semibold" },
    { name: "AS", sub: "", icon: <TrendingUp className="w-5 h-5 md:w-6 md:h-6" />, style: "font-serif italic border-b border-gray-600 group-hover:border-blue-500" },
  ];

  return (
    <section className="bg-[#0a0f1c] py-12 md:py-20 px-4 min-h-screen w-full overflow-hidden font-sans">
      
      <div className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-2 md:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-10 md:mb-16">
          <p className="text-gray-500 uppercase tracking-[0.3em] text-[8px] md:text-[10px] mb-3 font-bold italic">Trusted by Innovative Teams</p>
          <h2 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            Powering the Next Generation of <span className="text-blue-500">Industry Leaders</span>
          </h2>
        </div>

        {/* Grid Container - Height reduced to h-24 on mobile and h-32 on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
          {partners.map((p, i) => (
            <div 
              key={i}
              className="group bg-[#161f32]/60 border border-[#242d41] rounded-lg h-24 md:h-32 flex items-center justify-center p-3 md:p-6 
                         transition-all duration-300 cursor-pointer
                         hover:bg-[#1c273d] hover:border-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.1)]"
            >
              <div className="flex flex-row items-center gap-2 md:gap-4 transition-all duration-300 opacity-40 group-hover:opacity-100 w-full justify-center">
                
                {/* Icon */}
                <div className="text-gray-400 transition-colors duration-300 group-hover:text-blue-400 shrink-0">
                  {p.icon}
                </div>
                
                {/* Brand Text */}
                <div className={`flex flex-col ${p.hasLine ? 'border-t border-gray-600 group-hover:border-blue-400 pt-1' : ''}`}>
                  <span className={`text-gray-200 transition-colors duration-300 group-hover:text-white text-xs md:text-lg leading-none ${p.style}`}>
                    {p.name}
                  </span>
                  {p.sub && (
                    <span className="text-[6px] md:text-[9px] text-gray-500 uppercase mt-1 tracking-widest font-bold group-hover:text-blue-200 transition-colors leading-tight">
                      {p.sub}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats Section */}
        <div className="mt-16 pt-10 border-t border-gray-800/40">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 text-center">
            <div className="flex flex-col gap-1">
              <h3 className="text-blue-500 text-2xl md:text-4xl font-extrabold tracking-tighter">50+</h3>
              <p className="text-gray-500 text-[8px] md:text-[10px] uppercase tracking-[0.2em] font-bold">Enterprise Clients</p>
            </div>
            <div className="flex flex-col gap-1 md:border-x border-gray-800/30 px-4">
              <h3 className="text-blue-500 text-2xl md:text-4xl font-extrabold tracking-tighter">$100M+</h3>
              <p className="text-gray-500 text-[8px] md:text-[10px] uppercase tracking-[0.2em] font-bold">Revenue Enabled</p>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-blue-500 text-2xl md:text-4xl font-extrabold tracking-tighter">98%</h3>
              <p className="text-gray-500 text-[8px] md:text-[10px] uppercase tracking-[0.2em] font-bold">Retention Rate</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Team;