'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import ServiceCard from './ServiceCard';
import { DIV_PRODUCTS } from '../../../src/constants/productsData'; 

export default function Services() {
  const [currentIndex, setCurrentIndex] = useState(2); 
  const len = DIV_PRODUCTS.length;

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % len);
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + len) % len);

  const getCardAnimation = (index) => {
    const diff = (index - currentIndex + len) % len;

    if (diff === 0) return { x: "0%", scale: 1.05, opacity: 1, zIndex: 30 };
    if (diff === 1) return { x: "65%", scale: 0.95, opacity: 0.9, zIndex: 20 };
    if (diff === len - 1) return { x: "-65%", scale: 0.95, opacity: 0.9, zIndex: 20 };
    if (diff === 2) return { x: "130%", scale: 0.85, opacity: 0.6, zIndex: 10 };
    if (diff === len - 2) return { x: "-130%", scale: 0.85, opacity: 0.6, zIndex: 10 };
    
    return { x: "200%", scale: 0.75, opacity: 0, zIndex: 0 };
  };

  return (
    <section 
      className="relative w-full py-24 bg-white flex flex-col items-center overflow-hidden"
      aria-label="Enterprise Services Carousel"
    >
      
      {/* Ambient Wave Gradients */}
      <div className="absolute top-0 left-[-10%] w-[50%] h-[50%] rounded-full bg-gradient-to-tr from-pink-100 to-purple-50 blur-[120px] -z-10 opacity-60 pointer-events-none" aria-hidden="true" />
      
      {/* Header Section */}
      <div className="text-center mb-16 relative z-10 px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Our Core Solutions
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Purpose-built enterprise software architectures designed for modern businesses.
        </p>
      </div>

      {/* Interactive Horizontal Carousel Area */}
      <div className="relative w-full max-w-7xl h-[400px] flex justify-center items-center mb-6">
        
        {/* Left Navigation Arrow */}
        <button 
          onClick={handlePrev}
          className="absolute left-4 md:left-12 z-40 p-3 rounded-full bg-white shadow-lg border border-gray-100 text-gray-600 hover:text-pink-500 hover:scale-110 transition-all focus:outline-none"
          aria-label="Previous service"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>

        {/* Dynamic Mapping from Central Data */}
        {DIV_PRODUCTS.map((solution, index) => {
          const animState = getCardAnimation(index);
          const isActive = index === currentIndex;
          
          return (
            <ServiceCard 
              key={solution.id} 
              animState={animState} 
              isActive={isActive} 
              solution={solution}
              onClick={() => setCurrentIndex(index)} 
            />
          );
        })}

        {/* Right Navigation Arrow */}
        <button 
          onClick={handleNext}
          className="absolute right-4 md:right-12 z-40 p-3 rounded-full bg-white shadow-lg border border-gray-100 text-gray-600 hover:text-pink-500 hover:scale-110 transition-all focus:outline-none"
          aria-label="Next service"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>

      </div>

      {/* Pagination Dots Indicator */}
      <div className="flex gap-2 relative z-20 mb-8" role="tablist">
        {DIV_PRODUCTS.map((_, index) => (
          <button
            key={index}
            role="tab"
            aria-selected={currentIndex === index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              currentIndex === index 
                ? 'w-8 bg-gradient-to-r from-pink-500 to-yellow-400' 
                : 'w-2.5 bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`View ${DIV_PRODUCTS[index].title}`}
          />
        ))}
      </div>

      {/* Global Explore All Link */}
      <div className="relative z-10 mt-4">
        <Link href="/services" className="rounded-full p-[2px] bg-gradient-to-r from-pink-400 to-yellow-300 hover:shadow-lg transition-shadow inline-block">
          <div className="bg-white rounded-full px-8 py-2">
            <span className="bg-gradient-to-r from-pink-500 to-yellow-400 bg-clip-text text-transparent font-bold text-lg">
              Explore All
            </span>
          </div>
        </Link>
      </div>

    </section>
  );
}