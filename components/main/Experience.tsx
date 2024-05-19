import React from 'react';

const Experience = () => {
  return (
    <section className="flex flex-col items-center justify-center py-20 relative overflow-hidden" id="experience">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
        Experience
      </h1>
      <div className="relative flex flex-col items-center w-full max-w-4xl mx-auto px-6">
        {/* Vertical Line */}
        <div className="absolute w-1 h-full bg-gray-600 rounded"></div>

        {/* Job 1 (Left) */}
        <div className="flex justify-between items-center w-full mb-16">
          <div className="w-1/2 pr-6 flex flex-col items-end text-right">
            <div className="bg-[#0300145e] p-3 font-semibold rounded-lg text-gray-200 w-fit">
              Web Developer
            </div>
            <div className="p-3 text-sm italic text-gray-400">
              Develop and maintain a shopify website for a local business.
            </div>
            <div className="p-3 text-purple-500 text-sm font-semibold">
              Present
            </div>
            <div className="p-1 rounded bg-[#0300145e] text-sm font-semibold w-fit text-gray-200">
              SaturdayNeon
            </div>
          </div>
          <div className="w-1/2 pl-6 relative">
            {/* Horizontal Line to Job 1 */}
            <div className="absolute top-1/2 w-12 h-1 bg-gray-600 left-0 transform -translate-y-1/2"></div>
          </div>
        </div>

        {/* Job 2 (Right) */}
        <div className="flex justify-between items-center w-full mb-16">
          <div className="w-1/2 pr-6 relative">
            {/* Horizontal Line to Job 2 */}
            <div className="absolute top-1/2 w-12 h-1 bg-gray-600 right-0 transform -translate-y-1/2"></div>
          </div>
          <div className="w-1/2 pl-6 flex flex-col items-start text-left">
            <div className="bg-[#0300145e] p-3 font-semibold rounded-lg text-gray-200 w-fit">
              Software Engineer
            </div>
            <div className="p-3 text-sm italic text-gray-400">
              Led the development of a script to automate tasks for the company.
            </div>
            <div className="p-3 text-purple-500 text-sm font-semibold">
              2017 - 2023
            </div>
            <div className="p-1 rounded bg-[#0300145e] text-sm font-semibold w-fit text-gray-200">
              Gemini Titan Consulting
            </div>
          </div>
        </div>

        {/* Job 3 (Left) */}
        <div className="flex justify-between items-center w-full">
          <div className="w-1/2 pr-6 flex flex-col items-end text-right">
            <div className="bg-[#0300145e] p-3 font-semibold rounded-lg text-gray-200 w-fit">
              Software Engineer / Embedded Systems Developer
            </div>
            <div className="p-3 text-sm italic text-gray-400">
              6 month internship developing embedded systems for a tech company in Switzerland
            </div>
            <div className="p-3 text-purple-500 text-sm font-semibold">
              2023
            </div>
            <div className="p-1 rounded bg-[#0300145e] text-sm font-semibold w-fit text-gray-200">
              Hemargroup
            </div>
          </div>
          <div className="w-1/2 pl-6 relative">
            {/* Horizontal Line to Job 3 */}
            <div className="absolute top-1/2 w-12 h-1 bg-gray-600 left-0 transform -translate-y-1/2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
