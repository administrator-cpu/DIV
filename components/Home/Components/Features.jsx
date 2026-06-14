'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { DIV_PRODUCTS } from '../../../src/constants/productsData'; // Check your import path!

export default function Features() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // 45-Second Auto-Play Timer
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % DIV_PRODUCTS.length);
    }, 45000); 
    
    return () => clearInterval(timer);
  }, [isPaused]);

  // Animation variants
  const contentVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.1 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
  };

  const itemVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 }
  };

  const activeProduct = DIV_PRODUCTS[activeIndex];

  return (
    <section 
      className="w-full flex flex-col items-center"
      aria-labelledby="features-main-heading"
    >
      <div className="relative w-full bg-white py-24 px-4 flex justify-center overflow-hidden">
        <div className="absolute top-0 right-[10%] w-[40%] h-full rounded-full bg-gradient-to-bl from-yellow-50 to-pink-50 blur-[100px] pointer-events-none" aria-hidden="true" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl text-center relative z-10"
        >
          <h2 id="features-main-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.2]">
            <span className="sr-only">Our Core Business Ecosystems</span>
            <span className="bg-gradient-to-r from-pink-500 to-yellow-400 bg-clip-text text-transparent" aria-hidden="true">
              Transforming Business Operations
            </span>{' '}
            <span aria-hidden="true">
              Through Automation, Security And Intelligent Software Solutions.
            </span>
          </h2>
        </motion.div>
      </div>

      <div 
        className="relative w-full bg-[#1C1C1C] py-24 px-4 overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="absolute top-0 left-[-10%] w-[50%] h-full bg-gradient-to-br from-orange-500/10 to-pink-500/10 blur-[120px] pointer-events-none" aria-hidden="true" />
        <div className="absolute top-0 right-[-10%] w-[50%] h-full bg-gradient-to-bl from-blue-500/10 to-purple-500/10 blur-[120px] pointer-events-none" aria-hidden="true" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center relative z-10">
          
          <div className="relative w-full max-w-lg mx-auto lg:mx-0 aspect-square flex items-center justify-center">
            
            <motion.div className="absolute top-[10%] left-[5%] w-[75%] h-[75%] bg-white rounded-3xl shadow-2xl shadow-black/50 border border-gray-100 flex items-center justify-center overflow-hidden">
                <img 
                  src={activeProduct.featureImagePrimary} 
                  alt={`${activeProduct.title} Main Dashboard`}
                  className="w-full h-full object-top object-cover"
                />
            </motion.div>
            
            <motion.div className="absolute bottom-[10%] right-[5%] w-[65%] h-[35%] bg-gray-50 rounded-2xl shadow-2xl shadow-black/50 border border-gray-200 flex items-center justify-center overflow-hidden">
                <img 
                  src={activeProduct.featureImageSecondary} 
                  alt={`${activeProduct.title} Secondary View`}
                  className="w-full h-full object-top object-cover" 
                />
            </motion.div>

          </div>

          <div className="flex flex-col justify-center min-h-[400px]">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProduct.id}
                variants={contentVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <div className="mb-8 leading-tight">
                  <h3 className="text-pink-500 font-bold tracking-wider uppercase text-sm mb-3">
                    {activeProduct.title}
                  </h3>
                  <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                    {activeProduct.tagline.split(' ').slice(0, 3).join(' ')}{' '}
                    <span className="bg-gradient-to-r from-pink-500 to-yellow-400 bg-clip-text text-transparent">
                      {activeProduct.tagline.split(' ').slice(3).join(' ')}
                    </span>
                  </p>
                  <p className="text-gray-400 mt-4 leading-relaxed max-w-lg">
                    {activeProduct.fullDesc}
                  </p>
                </div>

                <ul className="space-y-5 mb-10">
                  {activeProduct.features.map((item) => {
                    const Icon = item.icon;
                    return (
                      <motion.li key={item.id} variants={itemVariants} className="flex items-start gap-4 text-gray-300">
                        <Icon className="w-6 h-6 text-yellow-400 shrink-0 mt-0.5" aria-hidden="true" />
                        <span className="font-medium">{item.text}</span>
                      </motion.li>
                    );
                  })}
                </ul>

                <Link 
                  href={activeProduct.link}
                  className="inline-block px-8 py-3.5 rounded-full bg-gradient-to-r from-pink-500 to-yellow-400 text-white font-bold text-sm md:text-base hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-lg shadow-pink-500/20 w-fit"
                >
                  Explore {activeProduct.title}
                </Link>

              </motion.div>
            </AnimatePresence>

            <div className="flex gap-3 mt-12" role="tablist" aria-label="Select Product to view">
              {DIV_PRODUCTS.map((product, index) => (
                <button
                  key={product.id}
                  role="tab"
                  aria-selected={activeIndex === index}
                  aria-label={`View ${product.title} details`}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    activeIndex === index 
                      ? 'w-10 bg-gradient-to-r from-pink-500 to-yellow-400' 
                      : 'w-3 bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}