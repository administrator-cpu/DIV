// import { StarIcon } from "lucide-react";
import React from "react";


const StarIcon = ({ filled, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    // We use the 'filled' boolean to determine the color class, 
    // but we do NOT attach 'filled' to the svg tag below.
    className={`w-5 h-5 shrink-0 ${filled ? "text-yellow-400" : "text-gray-200"}`}
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
      clipRule="evenodd"
    />
  </svg>
);

function ReviewCard({review,i}) {
  return (
    <div
      key={`${review.id}-${i}`}
      className="w-[320px] md:w-[400px] flex-shrink-0 bg-white rounded-2xl p-6 mx-3 shadow-sm border border-gray-100 whitespace-normal"
    >
      <div className="flex gap-1 mb-3">
        {[...Array(5)].map((_, idx) => (
          <StarIcon key={idx} filled={idx < review.rating} />
        ))}
      </div>
      <p className="text-gray-700 text-sm mb-4 line-clamp-3">"{review.text}"</p>
      <div className="flex items-center gap-3">
        {/* <div className="w-10 h-10 rounded-full bg-gray-200" /> */}
        <img 
                    src={review.avatar} 
                    alt={review.name}
                    className="w-10 h-10 rounded-full border-2 border-white object-cover bg-white"
                  />
        <div>
          <h4 className="font-bold text-sm text-gray-900">{review.name}</h4>
          <p className="text-xs text-gray-500">{review.role}</p>
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;
