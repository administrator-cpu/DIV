import React from 'react'
import ReviewCard from './ReviewCard';

function Reviews() {
  return (
    <div className="w-full flex  px-4 relative z-20 ">
      
      <div className="flex items-center gap-3 overflow-x-auto p-2 snap-x max-w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
        <ReviewCard/>
        <ReviewCard/>
        <ReviewCard/>
        <ReviewCard/>
        <ReviewCard/>
        <ReviewCard/>
        <ReviewCard/>
        <ReviewCard/>
      </div>
    </div>
  );
}

export default Reviews

// //on page navigator
// "use client";
// import React from "react";

// function Scroller() {
//   const SectionNodes = ["Home", "Features", "Pricing", "About Us", "Contact", "FAQ"];
  
//   const handleSmoothScroll = (e, navTitle) => {
//     e.preventDefault();
//     const targetId = navTitle.toLowerCase().replace(/\s+/g, "-");
//     const element = document.getElementById(targetId);

//     if (element) {
//       element.scrollIntoView({ behavior: "smooth", block: "start" });
//     } else {
//       console.warn(`Could not find a section with id="${targetId}" on this page.`);
//     }
//   };

  
// }

// export default Scroller;