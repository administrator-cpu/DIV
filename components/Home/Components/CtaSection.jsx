'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ctaData } from '../../../src/constants/ctaData';

export default function CtaSection() {
  return (
    <section 
      className="relative w-full py-24 px-4 bg-white flex justify-center"
      aria-labelledby="cta-heading"
    >
      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full max-w-6xl bg-[#1C1C1C] rounded-[2.5rem] p-12 md:p-24 overflow-hidden flex flex-col items-center text-center shadow-2xl"
      >
        {/* Ambient Corner Glows */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-yellow-400/20 blur-[120px] pointer-events-none rounded-full" aria-hidden="true" />
        <div className="absolute -bottom-32 -left-32 w-[30rem] h-[30rem] bg-pink-500/15 blur-[120px] pointer-events-none rounded-full" aria-hidden="true" />

        {/* Content Wrapper */}
        <div className="relative z-10 flex flex-col items-center">
          
          <h2 id="cta-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            {/* SEO Text for Google/AI */}
            <span className="sr-only">{ctaData.header.seoTitle}</span>
            
            {/* Visual Text */}
            <span className="bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent" aria-hidden="true">
              Let&apos;s Talk!
            </span>{' '}
            <span aria-hidden="true">
              We&apos;re Here To Help
            </span>
          </h2>
          
          <p className="text-gray-300 md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
            {ctaData.description}
          </p>

          {/* Upgraded to Next.js Link wrapped in Framer Motion */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              href={ctaData.button.href}
              className="inline-block px-10 py-4 rounded-full bg-gradient-to-r from-pink-500 to-yellow-400 text-white font-bold text-lg hover:opacity-90 transition-opacity shadow-xl shadow-pink-500/20"
            >
              {ctaData.button.label}
            </Link>
          </motion.div>

        </div>
      </motion.div>

    </section>
  );
}