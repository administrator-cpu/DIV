"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ReviewCard from "./ReviewCard";
// import { featuredReviews, ALL_REVIEWS } from "../../../src/constants/testimonialsData";
import { ALL_REVIEWS, getRandomFeaturedReviews } from "../../../src/constants/reviewsData";

const StarIcon = ({ filled }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true" // Hide from screen readers, we'll state the rating in text
    className={`w-5 h-5 ${filled ? "text-yellow-400" : "text-gray-200"}`}
  >
    <path
      fillRule="evenodd"
      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
      clipRule="evenodd"
    />
  </svg>
);

export default function EnhancedTestimonialSection() {
 const [featuredReviews, setFeaturedReviews] = useState(ALL_REVIEWS.slice(0, 5));

  // 2. Once the component mounts on the client browser, shuffle them!
  useEffect(() => {
    // Grabs 5 random, unique reviews
    const randomSelection = getRandomFeaturedReviews(5);
    setFeaturedReviews(randomSelection);
  }, []);

  const [randomAvatars, setRandomAvatars] = useState([]);

  // Safely shuffle and pick 3 random avatars on the client side
  useEffect(() => {

    const shuffled = [...featuredReviews].sort(() => 0.5 - Math.random());
    setRandomAvatars(shuffled.slice(0, 3));
  }, []);

  const [activeIndex, setActiveIndex] = useState(1);

  // Split bulk reviews for the two marquee rows
  const row1 = ALL_REVIEWS.slice(0, Math.ceil(ALL_REVIEWS.length / 2));
  const row2 = ALL_REVIEWS.slice(Math.ceil(ALL_REVIEWS.length / 2));

  const totalReviews = ALL_REVIEWS.length;
  
  // Calculate average rating and round it to 1 decimal place (e.g., "4.8")
  const averageRating = totalReviews > 0 
    ? (ALL_REVIEWS.reduce((sum, review) => sum + review.rating, 0) / totalReviews).toFixed(1)
    : "0.0";
  return (
    <section 
      className="relative w-full py-24 bg-white flex flex-col items-center overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      {/* Ambient Wave Gradients */}
      <div className="absolute top-[10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-gradient-to-bl from-pink-100 to-orange-50 blur-[120px] -z-10 opacity-60 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-[10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-gradient-to-tr from-cyan-50 to-purple-100 blur-[120px] -z-10 opacity-60 pointer-events-none" aria-hidden="true" />

      {/* --- TOP: Header & Aggregate Badge --- */}
      <div className="text-center mb-12 relative z-10 px-4 flex flex-col items-center">
        
        {/* Aggregate Trust Badge */}
        <div 
          className="flex items-center gap-3 mb-6 px-5 py-2.5 rounded-full bg-white/80 backdrop-blur-sm border border-gray-100 shadow-sm"
          aria-label="Rated 4.9 out of 5 stars from over 200 reviews"
        >
          <div className="flex -space-x-3" aria-hidden="true">
            {randomAvatars.length > 0 ? (
              randomAvatars.map((review, index) => (
                <img
                  key={review.id}
                  src={review.avatar}
                  alt="Reviewer"
                  className="w-8 h-8 rounded-full border-2 border-white object-cover bg-gray-200 relative"
                  style={{ zIndex: 10 - index }} // Maintains correct overlap order
                />
              ))
            ) : (
              // Fallback skeleton loader to prevent layout shift during the split-second before the randomizer runs
              [1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white relative"
                  style={{ zIndex: 10 - i }}
                />
              ))
            )}
          </div>
          
          <div className="flex items-center gap-1.5 border-l border-gray-200 pl-3">
            <StarIcon filled={true} />
            <span className="font-bold text-gray-900" aria-hidden="true">{averageRating}/5</span>
            <span className="text-sm text-gray-500 font-medium" aria-hidden="true">
              from {totalReviews}+ reviews
            </span>
          </div>
        </div>

        <h2 id="testimonials-heading" className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          What Our Clients Say
        </h2>
      </div>

      {/* --- MIDDLE: The Interactive Spotlight --- */}
      <div className="relative max-w-4xl w-full px-8 md:px-16 min-h-[250px] flex flex-col items-center justify-center mb-16">
        
        <div aria-hidden="true" className="absolute top-0 left-4 md:left-12 text-7xl md:text-8xl font-serif leading-none bg-gradient-to-r from-pink-500 to-yellow-400 bg-clip-text text-transparent select-none">
          “
        </div>

        <AnimatePresence mode="wait">
          <motion.figure
            key={activeIndex}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="flex flex-col items-center text-center z-10 pt-8 pb-4 m-0"
          >
            {/* SEO: Semantic Blockquote */}
            <blockquote className="text-lg md:text-xl text-gray-700 font-medium leading-relaxed max-w-2xl mb-8">
              "{featuredReviews[activeIndex].text}"
            </blockquote>
            
            <div 
              className="flex gap-1 mb-4"
              aria-label={`Rated ${featuredReviews[activeIndex].rating} out of 5 stars`}
            >
              {[...Array(5)].map((_, index) => (
                <StarIcon
                  key={index}
                  filled={index < featuredReviews[activeIndex].rating}
                />
              ))}
            </div>
            
            {/* SEO: Semantic Figcaption for Author */}
            <figcaption className="flex flex-col items-center">
              <span className="text-lg font-bold text-gray-900 block">
                {featuredReviews[activeIndex].name}
              </span>
              <span className="text-gray-500 text-sm block mt-1">
                — {featuredReviews[activeIndex].role}
              </span>
            </figcaption>
          </motion.figure>
        </AnimatePresence>

        <div aria-hidden="true" className="absolute bottom-0 right-4 md:right-12 text-7xl md:text-8xl font-serif leading-none bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent select-none translate-y-6">
          ”
        </div>
      </div>

{/* Spotlight Avatar Navigation */}
      <div 
        className="flex items-center justify-center gap-4 md:gap-6 relative z-10 mb-24"
        role="tablist"
        aria-label="Select a featured review"
      >
        {featuredReviews.map((review, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={review.id}
              role="tab"
              aria-selected={isActive}
              aria-label={`View review by ${review.name}`}
              onClick={() => setActiveIndex(index)}
              className="relative rounded-full focus:outline-none group transition-transform hover:scale-105"
            >
              {isActive ? (
                // Active State: Gradient Ring + Full Size Image
                <motion.div
                  layoutId="activeAvatarRing"
                  className="p-[3px] rounded-full bg-gradient-to-br from-pink-400 via-orange-400 to-yellow-400 shadow-lg shadow-pink-500/20"
                >
                  <img 
                    src={review.avatar} 
                    alt={review.name}
                    className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-white object-cover bg-white"
                  />
                </motion.div>
              ) : (
                // Inactive State: Smaller, faded image that brightens on hover
                <img 
                  src={review.avatar} 
                  alt={review.name}
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-transparent group-hover:border-gray-300 transition-all duration-300 object-cover opacity-60 group-hover:opacity-100 bg-gray-100"
                />
              )}
            </button>
          );
        })}
      </div>

      {/* --- BOTTOM: The "Wall of Love" Infinite Marquee --- */}
      <div className="w-full relative flex flex-col gap-6 py-10 bg-gray-50/50 border-y border-gray-100">
        
        {/* Row 1: Moves Left */}
        <div className="flex overflow-hidden group" aria-label="Customer Reviews Marquee">
          <div className="flex animate-marquee group-hover:[animation-play-state:paused] whitespace-nowrap w-max">
            {row1.map((review, i) => (
              <ReviewCard key={i} review={review} i={i} />
            ))}
            {/* SEO: Hide the duplicated set from screen readers to prevent duplicate content indexing */}
            {row1.map((review, i) => (
              <div key={`dup-${i}`} aria-hidden="true">
                <ReviewCard review={review} i={i} />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Moves Right */}
        <div className="flex overflow-hidden group" aria-hidden="true">
          <div className="flex animate-marquee-reverse group-hover:[animation-play-state:paused] whitespace-nowrap w-max">
            {row2.map((review, i) => (
              <ReviewCard key={i} review={review} i={i} />
            ))}
            {row2.map((review, i) => (
              <div key={`dup-${i}`} aria-hidden="true">
                <ReviewCard review={review} i={i} />
              </div>
            ))}
          </div>
        </div>

        {/* Fade Overlays */}
        <div className="absolute top-0 left-0 w-24 md:w-48 h-full bg-gradient-to-r from-white to-transparent pointer-events-none" aria-hidden="true" />
        <div className="absolute top-0 right-0 w-24 md:w-48 h-full bg-gradient-to-l from-white to-transparent pointer-events-none" aria-hidden="true" />
      </div>
    </section>
  );
}