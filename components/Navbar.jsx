"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { navbarData } from '../src/constants/navbarData'; // Adjust path if needed

// Custom Native SVGs to avoid library dependencies
const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle Scroll styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 border-b ${
          scrolled || isMobileMenuOpen
            ? "bg-white/80 backdrop-blur-lg border-gray-200/50 shadow-sm py-3" 
            : "bg-transparent border-transparent py-5"
        }`}
        aria-label="Main Navigation"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          
          {/* LEFT: Brand Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-2 w-20  transition-transform hover:scale-105 relative z-[60]"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <img 
              src="/core/Logo.webp" 
              alt={navbarData.logoAlt} 
              className="w-20 md:h-10  object-cover"
            />
          </Link>

          {/* CENTER: Primary Route Links (Desktop) */}
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-600">
            {navbarData.links.map((link) => (
              <Link 
                key={link.id} 
                href={link.href} 
                className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500 transition-all"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* RIGHT: Call to Action & Mobile Menu Toggle */}
          <div className="flex items-center gap-4 relative z-[60]">
            <Link 
              href={navbarData.cta.href} 
              className="hidden sm:inline-flex px-6 py-2.5 rounded-full bg-[#0B0B1A] text-white text-sm font-semibold hover:bg-gray-800 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
            >
              {/* Safely rendering the apostrophe using standard text or HTML entity */}
              {navbarData.cta.label}
            </Link>

            {/* Mobile Menu Hamburger Icon */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle Navigation Menu"
              className="md:hidden p-2 text-gray-600 hover:text-pink-500 transition-colors focus:outline-none"
            >
              {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
          
        </div>

        {/* --- MOBILE DROPDOWN MENU --- */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl md:hidden flex flex-col"
            >
              <div className="flex flex-col px-6 py-8 space-y-6">
                {navbarData.links.map((link) => (
                  <Link
                    key={link.id}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg font-semibold text-gray-800 hover:text-pink-500 transition-colors border-b border-gray-50 pb-4"
                  >
                    {link.label}
                  </Link>
                ))}
                
                <Link
                  href={navbarData.cta.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mt-4 text-center px-6 py-3.5 rounded-full bg-gradient-to-r from-pink-500 to-yellow-400 text-white text-base font-bold shadow-lg hover:opacity-90 transition-opacity"
                >
                  {navbarData.cta.label}
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      
      {/* Spacer to prevent content from hiding behind the fixed navbar */}
    </>
  );
}