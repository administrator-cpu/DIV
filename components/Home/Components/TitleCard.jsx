"use client";
import React from "react";
import Link from "next/link";
// import { heroContent } from "@/constants/heroData";
import { heroContent } from "../../../src/constants/heroData";
import { FEATURED_REVIEWS } from "../../../src/constants/testimonialsData";

function TitleCard() {
  return (
    <section className="z-10 w-full m-auto max-w-5xl flex flex-col items-center justify-center text-center min-h-[280px] overflow-hidden pt-24 pb-12">
      <div className="max-w-4xl mx-auto text-center flex flex-col gap-6 px-4 relative z-10">
        
        {/* SEO Optimized Main Headline */}
        <h1 className="text-6xl md:text-7xl font-bold tracking-tight">
          <span className="sr-only">{heroContent.seoTitle}</span>
          <span className="text-pink-500">{heroContent.titleStart}</span>{" "}
          <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
            {heroContent.titleEnd}
          </span>
        </h1>

        <p className="text-gray-600 max-w-2xl mx-auto ">
          {heroContent.description}
        </p>

        {/* Dynamic CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          {heroContent.ctas.map((cta) => (
            <Link
              key={cta.id}
              href={cta.href}
              className={`px-8 py-3 rounded-full font-medium transition-all shadow-lg w-full sm:w-auto text-center ${
                cta.primary
                  ? "bg-black text-white hover:bg-gray-800 hover:-translate-y-1"
                  : "bg-white text-black border border-gray-200 hover:border-gray-900 hover:shadow-md"
              }`}
            >
              {cta.label}
            </Link>
          ))}
        </div>

        {/* Trust Indicators (SEO/AIO Friendly) */}
        <div 
          className="flex flex-col items-center gap-3"
          aria-label={`Trusted by ${heroContent.trust.count} people`}
        >
            <div className="flex -space-x-3">
            {FEATURED_REVIEWS.map((review, index) => (
              <img
                key={review.id} // Better React practice than using the map index
                src={review.avatar}
                alt={`Trusted Client - ${review.name}`} // Massive SEO & Accessibility win
                className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 shadow-sm object-cover relative"
                style={{ zIndex: 10 - index }} // Ensures correct left-to-right overlap
              />
            ))}
          </div>
          <p className="text-sm text-gray-600 font-medium">
            Trusted By{" "}
            <span className="font-bold text-black">{heroContent.trust.count} People</span>
          </p>
        </div>
        
      </div>
    </section>
  );
}

export default TitleCard;