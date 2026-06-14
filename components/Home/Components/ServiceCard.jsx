'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link'; 

export default function ServiceCard({ solution, animState, isActive, onClick }) {
  
  // Extract the icon component safely
  const Icon = solution.heroIcon;

  return (
    <motion.article 
      key={solution.id}
      initial={false}
      animate={{
        x: animState.x,
        scale: animState.scale,
        opacity: animState.opacity,
        zIndex: animState.zIndex,
      }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 20,
        mass: 0.9
      }}
      onClick={onClick} 
      aria-hidden={!isActive}
      className={`absolute w-[80vw] max-w-[340px] rounded-3xl p-[2px] shadow-xl shadow-black/5 bg-gradient-to-br from-pink-300 via-white to-yellow-300 ${
        isActive ? 'cursor-default' : 'cursor-pointer hover:shadow-black/10'
      }`}
    >
      {/* Inner Card Background */}
      <div className={`bg-white rounded-[22px] flex flex-col h-[320px] p-8`}>
        
        {/* Dynamic Icon & Title */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-full bg-pink-50 border border-pink-100 shrink-0 flex items-center justify-center text-pink-500" aria-hidden="true">
            {Icon && <Icon className="w-6 h-6" strokeWidth={1.5} />}
          </div>
          <h3 className="text-xl font-bold text-gray-900 leading-tight">
            {solution.title}
          </h3>
        </div>

        {/* Dynamic Description */}
        <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-grow">
          {solution.shortDesc}
        </p>

        {/* Dynamic Action Footer */}
        <div className="flex items-center justify-between mt-auto">
          {isActive ? (
            <Link 
              href={solution.link}
              tabIndex={isActive ? 0 : -1} 
              className="px-6 py-2 rounded-full bg-gradient-to-r from-pink-500 to-yellow-400 text-white font-medium text-sm shadow-md hover:opacity-90 transition-opacity"
            >
              Explore Tool
            </Link>
          ) : (
            <div className="rounded-full p-[2px] bg-gradient-to-r from-pink-400 to-yellow-300">
              <div className="bg-white rounded-full px-5 py-1.5">
                <span className="bg-gradient-to-r from-pink-500 to-yellow-400 bg-clip-text text-transparent font-semibold text-sm">
                  See More
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Dim overlay for inactive cards */}
      {!isActive && (
        <div className="absolute inset-0 bg-white/30 rounded-3xl z-10 pointer-events-none transition-opacity" />
      )}
    </motion.article>
  );
}