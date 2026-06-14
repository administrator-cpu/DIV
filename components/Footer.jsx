'use client';

import React from 'react';
import Link from 'next/link';
import { footerData } from '../src/constants/footerData'; // Ensure path is correct

export default function CleanFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="w-full bg-white pt-20 pb-12 font-sans border-t border-gray-100"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">Site Footer</h2>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Left Column: Branding & Mission */}
          <div className="md:col-span-12 lg:col-span-6 flex flex-col">
            
            {/* Logo */}
            <Link href="/" aria-label="DIV Home" className="flex items-center gap-2 mb-12 w-fit">
              <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
                &lt;/&gt;
              </span>
              <span className="font-bold text-xl text-gray-900 tracking-wide">
                DIV
              </span>
            </Link>

            {/* Headline */}
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-[1.1] mb-6">
              Stay Connected<br />With DIV
            </h2>
            
            {/* Description */}
            <p className="text-gray-600 leading-relaxed mb-10 max-w-md">
              {footerData.brand.description}
            </p>

            {/* Dynamic Social Icons */}
            <div className="flex items-center gap-5">
              {footerData.contact.socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.id}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="text-gray-800 hover:text-pink-500 hover:-translate-y-1 transition-all"
                  >
                    {/* Using your custom SVG components directly */}
                    <Icon className="w-5 h-5" /> 
                  </a>
                );
              })}
            </div>
            
          </div>

          {/* Middle Column: Navigation */}
          <nav className="md:col-span-6 lg:col-span-3 lg:pl-8" aria-label="Footer Company Navigation">
            <h3 className="text-gray-400 text-sm mb-6 mt-2 uppercase tracking-wider font-semibold">
              Navigation
            </h3>
            <ul className="space-y-4">
              {/* Dynamically rendering from footerData.company */}
              {footerData.company.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href} 
                    className="text-gray-900 font-medium hover:text-gray-500 hover:underline underline-offset-4 decoration-pink-200 transition-all"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              
              {/* If you want to keep 'Product' linking to the solutions, we can add that too */}
              <li>
                <Link 
                  href="/services" 
                  className="text-gray-900 font-medium hover:text-gray-500 hover:underline underline-offset-4 decoration-pink-200 transition-all"
                >
                  Our Products
                </Link>
              </li>
            </ul>
          </nav>

          {/* Right Column: Address */}
          <address className="md:col-span-6 lg:col-span-3 not-italic">
            <h3 className="text-gray-400 text-sm mb-6 mt-2 uppercase tracking-wider font-semibold">
              Our address
            </h3>
            <ul className="space-y-4">
              <li>
                {/* <a 
                  href="tel:+910000000000" // Update this in data if you have a phone number
                  className="text-gray-900 font-medium underline underline-offset-4 decoration-gray-300 hover:decoration-gray-900 transition-colors"
                >
                  +91 00000 00000
                </a> */}
              </li>
              <li>
                <a 
                  href={`mailto:${footerData.contact.email}`} 
                  className="text-gray-900 font-medium underline underline-offset-4 decoration-gray-300 hover:decoration-gray-900 transition-colors"
                >
                  {footerData.contact.email}
                </a>
              </li>
              <li className="text-gray-900 font-medium pt-1">
                {footerData.contact.location}
              </li>
            </ul>
          </address>

        </div>

        {/* Bottom Copyright Area */}
        <div className="mt-32 w-full flex flex-col md:flex-row justify-between items-center gap-4 pt-6 border-t border-gray-100">
          
          <p className="text-gray-600 text-sm font-medium text-center md:text-left">
            © {currentYear} {footerData.brand.legalName} All rights reserved.
          </p>

          {/* Optional: Brought back the 'Made in India' badge from the other mockup because it builds great local trust! */}
          <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-200 shadow-sm">
            <span className="text-xs font-bold text-gray-600 tracking-wide uppercase">
              Made in India
            </span>
            <div className="flex flex-col w-4 h-3 rounded-sm overflow-hidden border border-gray-100" aria-hidden="true">
              <div className="w-full h-1 bg-[#FF9933]"></div>
              <div className="w-full h-1 bg-white flex items-center justify-center">
                <div className="w-0.5 h-0.5 rounded-full bg-[#000080]"></div>
              </div>
              <div className="w-full h-1 bg-[#138808]"></div>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}