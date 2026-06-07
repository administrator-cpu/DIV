"use client";
import React, { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // 1. Import Next.js router

// 2. Added 'link' property to your data structure
const SLIDES_DATA = [
  { id: 1, link: "/destination-1" }, 
  { id: 2, link: "/destination-2" }, 
  { id: 3, link: "/destination-3" }, 
  { id: 4, link: "/destination-4" }, 
  { id: 5, link: "/destination-5" }, 
  { id: 6, link: "/destination-6" },
];

function IconGalleryCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  const router = useRouter(); // 3. Initialize the router

  const slides = SLIDES_DATA;
  const len = slides.length;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === len - 1 ? 0 : prev + 1));
  }, [len]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? len - 1 : prev - 1));
  }, [len]);

  useEffect(() => {
    if (isPaused || len === 0) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide, len]);

  return (
    <div className="flex items-center justify-center w-full">
      <div className="relative flex items-center justify-between w-full max-w-7xl mx-auto h-[250px] md:h-[300px]">
        
        <button 
            onClick={prevSlide}
            className="z-40 p-2 md:p-4 text-gray-200 hover:text-black transition-colors"
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 md:w-10 md:h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
        </button>

        <div 
          className="relative w-full h-full flex items-center justify-center overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {slides.map((slide, index) => {
            const isActive = index === currentSlide;
            const isPrev1 = index === (currentSlide - 1 + len) % len;
            const isNext1 = index === (currentSlide + 1) % len;
            const isPrev2 = index === (currentSlide - 2 + len) % len;
            const isNext2 = index === (currentSlide + 2) % len;

            let positionClasses = "opacity-0 scale-50 z-0 translate-x-0 pointer-events-none";

            // 4. Added 'cursor-pointer' to the isActive classes
            if (isActive) {
              positionClasses = "opacity-100 scale-100 z-30 translate-x-0 cursor-pointer hover:shadow-2xl"; 
            } else if (isPrev1) {
              positionClasses = "opacity-80 scale-[0.80] z-20 -translate-x-[60%] md:-translate-x-[70%] cursor-pointer";
            } else if (isNext1) {
              positionClasses = "opacity-80 scale-[0.80] z-20 translate-x-[60%] md:translate-x-[70%] cursor-pointer";
            } else if (isPrev2) {
              positionClasses = "opacity-40 scale-[0.60] z-10 -translate-x-[110%] md:-translate-x-[120%] cursor-pointer";
            } else if (isNext2) {
              positionClasses = "opacity-40 scale-[0.60] z-10 translate-x-[110%] md:translate-x-[120%] cursor-pointer";
            }

            return (
              <div
                key={slide.id}
                onClick={() => {
                  // 5. Navigate if active, otherwise slide left/right!
                  if (isActive && slide.link) {
                      router.push(slide.link);
                  }
                  if (isPrev1 || isPrev2) prevSlide();
                  if (isNext1 || isNext2) nextSlide();
                }}
                className={`absolute inset-0 m-auto w-[50%] md:w-[30%] max-w-[270px] aspect-square border-2 rounded-3xl overflow-hidden transition-all duration-700 ease-in-out shadow-lg ${positionClasses} bg-gray-200`}
              >
                <div className={`absolute inset-0 bg-black/10 transition-opacity duration-700 ${isActive ? 'opacity-0' : 'opacity-100'}`} />
                
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-gray-400 text-6xl font-bold">{slide.id}</span>
                </div>
              </div>
            );
          })}
        </div>

        <button 
            onClick={nextSlide}
            className="z-40 p-2 md:p-4 text-gray-200 hover:text-black transition-colors"
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 md:w-10 md:h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
        </button>
      </div>
    </div>
  );
}

export default IconGalleryCarousel;