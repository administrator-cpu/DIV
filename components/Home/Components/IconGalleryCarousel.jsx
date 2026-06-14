"use client";

import React, { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { DIV_PRODUCTS } from "../../../src/constants/productsData"; // Check your import path!

export default function IconGalleryCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const router = useRouter();

  const len = DIV_PRODUCTS.length;

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

  const getCardAnimation = (index) => {
    const diff = (index - currentSlide + len) % len;

    if (diff === 0) return { x: 0, y: 0, rotate: 0, scale: 1.1, zIndex: 30, opacity: 1 };
    if (diff === 1) return { x: 180, y: 30, rotate: 6, scale: 0.95, zIndex: 20, opacity: 1 };
    if (diff === len - 1) return { x: -180, y: 30, rotate: -6, scale: 0.95, zIndex: 20, opacity: 1 };
    if (diff === 2) return { x: 340, y: 60, rotate: 12, scale: 0.85, zIndex: 10, opacity: 0.7 };
    if (diff === len - 2) return { x: -340, y: 60, rotate: -12, scale: 0.85, zIndex: 10, opacity: 0.7 };
    
    return { x: 0, y: 150, rotate: 0, scale: 0.5, zIndex: 0, opacity: 0 };
  };

  return (
    <section 
      className="relative min-h-[60vh] w-full overflow-hidden py-24 flex flex-col items-center bg-gray-50/50"
      aria-label="Core Business Solutions"
    >
      <div className="">
        <h2 className="sr-only">Our Core Solutions</h2>
        <p className="sr-only">Secure, scalable, and intelligent software architecture.</p>
      </div>

      <div
        className="relative w-full max-w-6xl flex justify-center items-start h-[400px]"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {DIV_PRODUCTS.map((slide, index) => {
          const animState = getCardAnimation(index);
          const isActive = index === currentSlide;

          return (
            <motion.div
              key={slide.id}
              initial={false}
              animate={{
                x: animState.x,
                y: animState.y,
                rotate: animState.rotate,
                scale: animState.scale,
                opacity: animState.opacity,
                zIndex: animState.zIndex,
              }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 16,
                mass: 0.8,
              }}
              onClick={() => {
                const diff = (index - currentSlide + len) % len;
                if (diff === 0 && slide.link) {
                  router.push(slide.link); 
                } else if (diff === 1 || diff === 2) {
                  nextSlide(); 
                } else if (diff === len - 1 || diff === len - 2) {
                  prevSlide(); 
                }
              }}
              aria-hidden={!isActive}
              className={`absolute w-[320px] bg-white rounded-3xl p-8 shadow-xl shadow-black/5 border border-gray-100 ${
                isActive ? "cursor-pointer hover:shadow-2xl hover:shadow-black/10" : "cursor-pointer"
              }`}
            >
              {!isActive && (
                <div className="absolute inset-0 bg-white/40 rounded-3xl z-10 pointer-events-none transition-colors duration-300" />
              )}

              {/* Dynamic Icon added here */}
              <div className="w-12 h-12 rounded-full bg-pink-50 text-pink-500 flex items-center justify-center mb-6">
                {slide.heroIcon && <slide.heroIcon className="w-6 h-6" />}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {slide.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-8 h-20">
                {slide.shortDesc}
              </p>

              <button
                aria-label={`Learn more about ${slide.title}`}
                className={`px-6 py-2 rounded-full font-medium text-sm transition-all shadow-md ${
                  isActive
                    ? "bg-gradient-to-r from-pink-500 to-yellow-400 text-white hover:opacity-90 hover:scale-105"
                    : "bg-gray-100 text-gray-400"
                }`}
                tabIndex={isActive ? 0 : -1}
              >
                {isActive ? "See More" : "View"}
              </button>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}