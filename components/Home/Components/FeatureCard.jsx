import React from 'react';

function FeatureCard({
  title = "Smart Workflows",
  rating = "4.1",
  users = "21",
  description = "Automate your daily tasks with our advanced engine. Save time, reduce human error, and scale effortlessly."
}) {
  return (
    <article className="group bg-white border border-gray-200 rounded-2xl p-6 flex flex-col justify-between max-w-sm w-full hover:shadow-xl hover:border-gray-300 transition-all duration-300 relative overflow-hidden">

      {/* Brand Accent Top Line */}
      {/* <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF1493] via-[#FF8C00] to-[#FFD700] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div> */}

      <div className="w-full">
        
        {/* Sleek Icon Box */}
        <div className="w-12 h-12 rounded-xl bg-orange-50/50 border border-orange-100 flex items-center justify-center text-[#FF8C00] mb-5 group-hover:bg-gradient-to-br group-hover:from-[#FF1493] group-hover:to-[#FF8C00] group-hover:text-white group-hover:border-transparent transition-all duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
          </svg>
        </div>

        {/* Title and Clean, Integrated Stats */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-[#0B0B1A] tracking-tight">
            {title}
          </h3>
          
          {/* New Rating Section: No pills, just clean text layout */}
          <div className="flex items-center gap-1.5 text-sm text-gray-500 mt-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[#FFD700]">
              <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
            </svg>
            <span className="font-semibold text-gray-700">{rating}</span>
            <span className="text-gray-300 mx-1">•</span>
            <span className="font-medium text-gray-500">{users} Active Users</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-500 leading-relaxed mb-6 line-clamp-3">
          {description}
        </p>
      </div>

      {/* New Button Layout: Stacked for maximum clarity */}
      <div className="flex flex-col gap-4 mt-auto">
        
        {/* Full-width Primary Action */}
        <button className="w-full py-3 rounded-xl bg-[#0B0B1A] text-white text-sm font-bold hover:bg-gray-800 transition-all shadow-sm transform active:scale-[0.98]">
          Book Demo
        </button>

        {/* Secondary Actions Row */}
        <div className="flex items-center justify-between px-1">
          
          <a href="#" className="inline-flex items-center gap-1 text-sm font-bold text-[#FF1493] hover:text-[#FF8C00] transition-colors group/link">
            See details
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5 transform group-hover/link:translate-x-1 transition-transform">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </a>

          <button className="text-sm font-semibold text-gray-500 hover:text-[#0B0B1A] transition-colors">
            Live Demo
          </button>
          
        </div>
      </div>

    </article>
  );
}

export default FeatureCard;