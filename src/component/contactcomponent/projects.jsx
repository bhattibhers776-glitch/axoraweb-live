import React from "react";
import { FaClock, FaShieldAlt } from "react-icons/fa";

const Projects = () => {
  return (
    <section className="w-full bg-gray-50 py-24 md:py-32 overflow-hidden">
      {/* Master Width Container - EXACT same as your other sections */}
      <div className="max-w-7xl 2xl:max-w-[1450px] min-[1700px]:max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Grid layout: Vertical on mobile/tablet, Side-by-side on lg (1024px+) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Content - Original Style */}
          <div className="w-full">
            <div className="inline-flex items-center gap-2 mt-4 px-3 py-1 rounded-full border border-green-100 bg-green-50 shadow-sm">
              <span className="w-2 h-2 bg-green-300 rounded-full"></span>
              <span className="text-xs font-medium text-green-600">
                Accepting New Projects
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold py-5 leading-tight">
              Let's Engineer <br /> Your
            </h1>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold py-2 text-blue-600">
              Next Breakthrough
            </h2>

            <p className="text-gray-600 text-base sm:text-lg py-4 max-w-xl">
              Ready to automate your business or build the next SaaS unicorn? Fill
              out the form, and our engineering team will review your requirements.
            </p>

            <div className="py-8 space-y-5">
              <div className="flex gap-4 items-start">
                <FaClock className="text-blue-500 w-10 h-10 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold">Response in 24 Hours</h3>
                  <p className="text-sm text-gray-600">
                    Guaranteed response from a senior dev, not a bot.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <FaShieldAlt className="text-blue-500 w-10 h-10 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold">Mutual NDA Included</h3>
                  <p className="text-sm text-gray-600">
                    Your Intellectual Property is safe from day one.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form - Original Style & Width */}
          <div className="w-full bg-white shadow-2xl shadow-blue-200 rounded-xl p-6 sm:p-10 border border-gray-50">
            <form className="w-full">
              <h1 className="text-xl font-bold mb-6">Tell us about your project</h1>

              {/* Name & Email */}
              <div className="grid gap-4 grid-cols-1 md:grid-cols-2 mb-4">
                <div className="w-full">
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Ali Hamza"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50"
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Work Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="axoraweb@gmail.com"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50"
                  />
                </div>
              </div>

              {/* Service & Budget */}
              <div className="grid gap-4 grid-cols-1 md:grid-cols-2 mb-4">
                <div className="w-full">
                  <label htmlFor="service" className="block text-gray-700 font-medium mb-2">
                    Service Needed
                  </label>
                  <select
                    id="service"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50"
                  >
                    <option value="">Service Needed</option>
                    <option value="custom-software">Custom Software Development</option>
                    <option value="ai-ml">AI / Machine Learning</option>
                    <option value="web-development">Web Development</option>
                    <option value="mobile-app">Mobile App</option>
                  </select>
                </div>
                <div className="w-full">
                  <label htmlFor="budget" className="block text-gray-700 font-medium mb-2">
                    Estimated Budget
                  </label>
                  <select
                    id="budget"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50"
                  >
                    <option value="">Select price</option>
                    <option value="$5k-$10k">$5k-$10k</option>
                    <option value="$10k-$25k">$10k-$25k</option>
                    <option value="$25k-$50k">$25k-$50k</option>
                    <option value="$50k+">$50k+</option>
                  </select>
                </div>
              </div>

              {/* Project Details */}
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Project Details
                </label>
                <textarea
                  id="message"
                  placeholder="Tell us about your goals, timeline, requirements..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="4"
                ></textarea>
              </div>

              {/* Privacy Policy */}
              <div className="flex items-start gap-2 mb-6">
                <input type="checkbox" id="privacy" className="mt-1" />
                <label htmlFor="privacy" className="text-xs text-gray-400">
                  I agree to the Privacy Policy. Data is 256-bit encrypted.
                </label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-blue-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-600 transition-colors shadow-lg"
              >
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;