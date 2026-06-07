import React from 'react';

function ServiceCard({
  title = "Service Heading",
  description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita possimus natus voluptatibus vel minus.",
  rating = "4.1",
  link = "#"
}) {
  return (
    <article className="group relative flex flex-col items-start justify-between p-6 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden w-full max-w-sm">
      
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF1493] via-[#FF8C00] to-[#FFD700] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <div className="w-full">
        <div className="flex justify-between items-start mb-5">
          
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
          

          <div className="flex items-center gap-1 bg-gray-50 px-2.5 py-1 rounded-full border border-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-[#FFD700]">
              <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
            </svg>
            <span className="text-xs font-bold text-gray-700">{rating}</span>
          </div>
        </div>

        <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">
          {description}
        </p>
      </div>

      <div className="mt-6 pt-4 w-full flex items-center justify-between border-t border-gray-50">
        <a 
          href={link} 
          className="inline-flex items-center gap-2 text-sm font-bold text-gray-900 hover:text-[#FF1493] transition-colors"
        >
          See more
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </a>
      </div>

    </article>
  );
}

export default ServiceCard;