//on page navigator
"use client";
import React from "react";

function Scroller() {
  const SectionNodes = ["Home", "Features", "Pricing", "About Us", "Contact", "FAQ"];
  
  const handleSmoothScroll = (e, navTitle) => {
    e.preventDefault();
    const targetId = navTitle.toLowerCase().replace(/\s+/g, "-");
    const element = document.getElementById(targetId);

    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      console.warn(`Could not find a section with id="${targetId}" on this page.`);
    }
  };

  return (
    <div className="w-full flex  px-20 relative z-20  p-4 ">
      
      <div className="flex items-center gap-3 overflow-x-auto p-2 snap-x max-w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
        {SectionNodes?.map((nav, idx) => (
          <a
            key={idx}
            href={`#${nav.toLowerCase().replace(/\s+/g, "-")}`}
            onClick={(e) => handleSmoothScroll(e, nav)}
            className="shrink-0 whitespace-nowrap px-6 py-2 rounded-full  backdrop-blur-md font-bold text-[14px]  tracking-wide text-gray-600 hover:text-[#561b5e] bg-[#fff]  hover:bg-[#fff] hover:shadow-sm transition-all duration-300 snap-center"
          >
            {nav}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Scroller;