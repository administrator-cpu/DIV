"use client";
import React from 'react';
import Link from 'next/link'; 
import { ArrowUpRight } from 'lucide-react';

function TitleCard() {
  return (<>
    <section className=" z-10 w-full  m-auto max-w-5xl flex flex-col items-center justify-center text-center   h-[33vh] min-h-[280px]  overflow-hidden">
      
      <span className="text-[10px] md:text-xs font-bold tracking-[0.1em] uppercase ">
        Development Innovation Vector
      </span>
      
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0B0B1A] tracking-tight leading-tight">
        Innovate With Us
      </h1>

      <p className="text-gray-500 text-xs md:text-sm max-w-xl leading-relaxed mb-1 md:mb-2">
        Join our ecosystem of forward-thinking creators. Turn your concepts into reality or explore what we've already built.
      </p>

      {/* Buttons Container: Forced into a row even on smaller screens to save vertical space */}
      <div className="flex flex-row items-center justify-center gap-3 w-full mt-1 md:mt-2">
        
        <Link 
          href="/idea" 
          className="relative group text-center shrink-0"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#FF1493] via-[#FF8C00] to-[#FFD700] rounded-full blur opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
          <div className="relative bg-[#0B0B1A] text-white px-6 py-2.5 md:px-8 md:py-3 rounded-full font-semibold text-xs md:text-sm transition-transform duration-300 transform group-hover:-translate-y-0.5 whitespace-nowrap">
            Have an Idea?
          </div>
        </Link>
        
        {/* SECONDARY CTA */}
        <Link 
          href="/projects" 
          className="relative group bg-white/50 backdrop-blur-sm text-gray-900 border-2 border-gray-200  rounded-full font-semibold text-xs md:text-sm hover:bg-white hover:shadow-sm transition-all duration-300 transform hover:-translate-y-0.5 text-center shrink-0 whitespace-nowrap"
        > 
        {/* Recent Projects */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF1493] via-[#FF8C00] to-[#FFD700] rounded-full blur opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
          <div className="relative flex justify-center items-center gap-2 bg-[#fffffc] px-6 py-2.5 md:px-8 md:py-3  rounded-full font-semibold text-xs md:text-sm transition-transform duration-300 transform group-hover:-translate-y-0.5 whitespace-nowrap">
           Recent Projects  <ArrowUpRight size={16} /> 
          </div>
          
        </Link>
        
      </div>
    </section>
</>  );
}

export default TitleCard;