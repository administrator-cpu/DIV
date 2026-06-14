'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { techStackData, ecosystemStats } from '../../../src/constants/ecosystemData';

export default function TechnologyEcosystemSection() {
  return (
    <section 
      className="relative w-full py-24 px-4 bg-white overflow-hidden flex flex-col items-center"
      aria-labelledby="tech-stack-heading"
    >
      
      {/* Background Mesh Gradients */}
      <div className="absolute top-[40%] left-[-10%] w-[50%] h-[50%] rounded-full bg-gradient-to-tr from-cyan-100 to-blue-50 blur-[120px] -z-10 opacity-60 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-gradient-to-bl from-pink-100 to-yellow-50 blur-[120px] -z-10 opacity-60 pointer-events-none" aria-hidden="true" />

      {/* 1. Top Section: Technologies */}
      <div className="max-w-6xl w-full mx-auto text-center mb-16">
        <motion.h2 
          id="tech-stack-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
        >
          Technologies Across Every Layer
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-600 max-w-2xl mx-auto mb-12"
        >
          From high-performance frontend architectures to scalable cloud deployments, we utilize industry-leading tools to engineer robust digital solutions.
        </motion.p>

        {/* Tech Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left mb-12">
          {techStackData.map((tech, index) => (
            <motion.article
              key={tech.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              className={`p-[2px] rounded-2xl bg-gradient-to-br ${tech.borderGradient} shadow-sm hover:shadow-md transition-shadow`}
            >
              <div className="bg-white rounded-[14px] p-5 h-full flex flex-col justify-center gap-3">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${tech.iconBg}`}>
                    {tech.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900">{tech.title}</h3>
                </div>
                
                {/* SEO fix: Semantic list instead of a string */}
                <ul className="flex flex-wrap gap-x-2 text-sm text-gray-500 pl-[4.25rem]">
                  {tech.techs.map((item, i) => (
                    <li key={i} className="flex items-center">
                      {item}
                      {i < tech.techs.length - 1 && <span className="mx-1 opacity-50" aria-hidden="true">•</span>}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* 2. Bottom Section: Dark Ecosystem Card */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl w-full mx-auto relative mt-8"
      >
        <div className="bg-[#1C1C1C] rounded-[2rem] p-10 md:p-16 relative overflow-hidden shadow-2xl">
          
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-yellow-500/20 blur-[100px] rounded-full pointer-events-none" aria-hidden="true" />
          <div className="absolute top-[-50%] right-[-20%] w-96 h-96 bg-pink-500/10 blur-[100px] rounded-full pointer-events-none" aria-hidden="true" />

          <div className="relative z-10 flex flex-col items-center text-center">
            
            {/* SEO fix: Hidden H3 for bots, semantic paragraph for visuals */}
            <h3 className="sr-only">Our Software Ecosystem Impact</h3>
            <p className="text-4xl md:text-xl lg:text-4xl font-bold text-white mb-16 max-w-4xl leading-tight" aria-hidden="true">
              We&apos;ve Built A{' '}
              <span className="text-pink-500">Modern</span>{' '}
              <span className="text-orange-400">Software</span>{' '}
              <span className="text-yellow-400">Ecosystem</span>{' '}
              That Helps Businesses Operate Smarter, Faster And More Securely.
            </p>

            {/* SEO fix: Description List (<dl>) for Key-Value data */}
            <dl className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 w-full mb-4 border-t border-gray-800 pt-16">
              {ecosystemStats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center">
                  <dt className="text-gray-400 text-sm md:text-base font-medium order-2 mt-2">
                    {stat.label}
                  </dt>
                  <dd className="flex items-baseline text-4xl md:text-5xl font-bold text-white order-1">
                    {stat.value}
                    {stat.suffix && (
                      <span className="text-orange-400 text-3xl ml-1" aria-hidden="true">{stat.suffix}</span>
                    )}
                  </dd>
                </div>
              ))}
            </dl>
            
          </div>
        </div>
      </motion.div>

    </section>
  );
}