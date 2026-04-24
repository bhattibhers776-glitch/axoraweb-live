import React, { useState } from "react";

const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-2xl mb-4 w-full overflow-hidden transition-all duration-300 bg-white hover:border-blue-200 shadow-sm">
      {/* Header */}
      <button
        className="w-full text-left px-6 py-5 bg-white text-gray-900 font-bold flex justify-between items-center focus:outline-none"
        onClick={() => setOpen(!open)}
      >
        <span className="text-base md:text-lg">{question}</span>
        <span className={`bg-blue-50 text-blue-600 p-2 rounded-full transition-transform duration-500 ${open ? "rotate-180 bg-blue-600 text-white" : ""}`}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>

      {/* Body with Smooth Transition Effect */}
      <div 
        className={`overflow-hidden transition-all duration-500 ease-in-out ${open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="px-6 pb-6 text-gray-600 text-sm md:text-base leading-relaxed border-t border-gray-50 pt-4">
          {answer}
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  return (
    <section className="bg-gray-50 w-full py-20 overflow-hidden font-sans">
      
      {/* Main Container - Aligned for 1700px ultra-wide */}
      <div className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 mt-4 px-5 py-2 rounded-full border border-blue-200 bg-blue-50 text-blue-500 shadow-sm">
          <span className="w-2 h-2 bg-blue-800 rounded-full"></span>
          <span className="text-xs font-medium uppercase tracking-wider">Common Queries</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold py-5 text-gray-900 text-center leading-tight">
          Frequently Asked <span className="text-blue-600">Questions</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl max-w-3xl mb-12 text-gray-600 text-center leading-relaxed">
          Everything you need to know about our development process, pricing, and support.
        </p>

        {/* FAQ Items Grid - Max width restricted for better readability */}
        <div className="w-full max-w-4xl py-6">
          <FAQItem
            question="1. What type of applications do you develop?"
            answer="We specialize in crafting web, mobile, and desktop applications, including custom CRM, HRM, and RSM systems. Our solutions are tailored to your business needs, ensuring scalability, user-focused design, and seamless performance across platforms."
          />
          <FAQItem
            question="2. How long does it take to develop a custom application?"
            answer="The timeline varies based on project complexity and requirements. A simple application may take 4-8 weeks, while complex systems like CRM or HRM can take 3-6 months. We provide a detailed timeline during our initial consultation."
          />
          <FAQItem
            question="3. Do you offer support and maintenance?"
            answer="Yes, we provide comprehensive support and maintenance packages, including regular updates, performance optimization, security monitoring, and technical support to ensure your application remains robust and efficient."
          />
          <FAQItem
            question="4. Can you modernize or upgrade my existing application?"
            answer="Absolutely. We specialize in analyzing and upgrading existing applications to improve functionality, scalability, and user experience while aligning with your current business goals and brand identity."
          />
          <FAQItem
            question="5. What is included in your software development services?"
            answer="Our services include custom design and development, responsive and scalable architecture, integration with CRM, HRM, or RSM systems, performance optimization, cross-platform compatibility, and post-launch support with training for your team."
          />
          <FAQItem
            question="6. How much does it cost to develop a custom application?"
            answer="Costs depend on the project’s scope and complexity. Basic applications start at $5,000, while advanced systems like CRM or HRM may range from $20,000 to $100,000+. Contact us for a tailored quote based on your needs."
          />
        </div>

        {/* Call to Action Box - Same style as Project sections */}
        <div className="w-full max-w-5xl mt-16 px-4">
          <div className="w-full bg-gray-900 rounded-[2.5rem] p-8 md:p-14 flex flex-col md:flex-row items-center md:justify-between gap-8 shadow-2xl relative overflow-hidden">
            {/* Decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full -mr-16 -mt-16"></div>
            
            <div className="text-center md:text-left z-10">
              <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">Still have questions?</h2>
              <p className="text-gray-400 mt-3 text-base">Our technical team is ready to help you define your scope.</p>
            </div>

            <div className="z-10 w-full md:w-auto">
              <a target="_blank" rel="noreferrer" href="https://calendly.com/axoraweb/30min">
                <button className="w-full md:w-auto bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all active:scale-95 shadow-xl shadow-blue-900/20">
                  Chat with an Expert
                </button>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FAQ;