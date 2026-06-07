"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  // Add a subtle shadow to the navbar only when the user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (<>
    <nav 
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled 
          ? "bg-white/70 backdrop-blur-lg border-gray-200/50 shadow-sm py-3" 
          : "bg-transparent border-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        
        {/* LEFT: Brand Logo */}
        <Link href="/" className="flex items-center gap-2 transition-transform hover:scale-105">
          <img 
            src="/DIV1-removebg-preview.png" // Make sure this is in your Next.js 'public' folder
            alt="DIV Logo" 
            className="h-8 md:h-10 w-auto object-contain"
          />
        </Link>

        {/* CENTER: Primary Route Links (Hidden on small mobile for clean UI) */}
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-600">
          <Link href="/about" className="hover:text-black transition-colors">About Us</Link>
          <Link href="/services" className="hover:text-black transition-colors">Services</Link>
          <Link href="/portfolio" className="hover:text-[#FF1493] transition-colors">Portfolio</Link>
        </div>

        {/* RIGHT: Call to Action & Mobile Menu */}
        <div className="flex items-center gap-4">
          <Link 
            href="/contact" 
            className="hidden sm:inline-flex px-6 py-2.5 rounded-full bg-[#0B0B1A] text-white text-sm font-semibold hover:bg-gray-800 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Let's Talk
          </Link>

          {/* Mobile Menu Hamburger Icon */}
          <button className="md:hidden p-2 text-gray-600 hover:text-black transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
        
      </div>
    </nav>
    <div className=" h-[12vh]"></div>
    </>
  );
}