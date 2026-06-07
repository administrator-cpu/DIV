import React from 'react';

function ReviewCard({
  name = "Sarah Jenkins",
  role = "VP of Engineering at TechFlow",
  rating = 5,
  review = "This platform completely transformed how our team operates. The workflows are intuitive, and the integration process was seamless. Highly recommend for scaling teams.",
  date = "Oct 24, 2023"
}) {
  return (
    <article className="group shrink-0 relative bg-white border border-gray-200 rounded-2xl p-6 flex flex-col justify-between max-w-sm w-full hover:shadow-xl hover:border-gray-300 transition-all duration-300 overflow-hidden">
      
      {/* Brand Accent Top Line */}
      {/* <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF1493] via-[#FF8C00] to-[#FFD700] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div> */}

      {/* Decorative Quote Mark (Faded in the background) */}
      <svg className="absolute top-4 right-6 w-12 h-12 text-gray-50 opacity-50 transform rotate-180 pointer-events-none" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
      </svg>

      <div className="relative z-10 w-full">
        {/* User Header Section */}
        <div className="flex items-center gap-4 mb-5">
          {/* Avatar Placeholder (Can be replaced with an <img> tag) */}
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 border border-gray-200 flex items-center justify-center text-gray-500 font-bold text-lg shrink-0 group-hover:border-[#FF8C00]/30 transition-colors">
            {name.charAt(0)}
          </div>
          
          <div className="flex flex-col">
            <h4 className="text-base font-bold text-[#0B0B1A] leading-tight">
              {name}
            </h4>
            <span className="text-xs font-medium text-gray-500 mt-0.5 line-clamp-1">
              {role}
            </span>
          </div>
        </div>

        {/* Dynamic Star Rating */}
        <div className="flex items-center gap-1 mb-4">
          {[...Array(5)].map((_, index) => (
            <svg 
              key={index} 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="currentColor" 
              className={`w-4 h-4 ${index < rating ? "text-[#FFD700]" : "text-gray-200"}`}
            >
              <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
            </svg>
          ))}
        </div>

        {/* The Review Text */}
        <p className="text-sm text-gray-600 leading-relaxed line-clamp-4">
          "{review}"
        </p>
      </div>

      {/* Footer: Date & Verification */}
      <div className="relative z-10 flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
        <span className="text-xs text-gray-400 font-medium">{date}</span>
        
        {/* Verified Badge */}
        <div className="flex items-center gap-1 text-xs font-bold text-green-600">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
            <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
          </svg>
          Verified User
        </div>
      </div>

    </article>
  );
}

export default ReviewCard;