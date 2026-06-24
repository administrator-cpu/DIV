'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ABOUT_PAGE_DATA } from '../../constants/aboutData'; // Adjust path if needed

export default function AboutPage() {
  const { hero, story, values, leadership, headquarters } = ABOUT_PAGE_DATA;

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <main className="w-full bg-white text-gray-900 min-h-screen font-sans">
      
      {/* --- HERO SECTION --- */}
      <section className="relative w-full pt-36 pb-24 px-6 text-center overflow-hidden bg-gray-50/30">
        <div className="absolute top-[-30%] right-[-10%] w-[50%] h-[70%] rounded-full bg-gradient-to-bl from-pink-100/60 to-yellow-50/60 blur-[120px] pointer-events-none" aria-hidden="true" />
        
        <motion.div 
          initial="hidden" animate="visible" variants={fadeUp}
          className="max-w-4xl mx-auto relative z-10 flex flex-col items-center"
        >
          <span className="px-4 py-1.5 rounded-full bg-white border border-gray-200 text-gray-600 font-bold text-xs uppercase tracking-widest mb-6 shadow-sm">
            {hero.badge}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
            {hero.headlinePart1} <br />
            <span className="bg-gradient-to-r from-pink-500 to-yellow-400 bg-clip-text text-transparent">
              {hero.headlinePart2}
            </span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl leading-relaxed">
            {hero.description}
          </p>
        </motion.div>
      </section>

      {/* --- OUR STORY & STATS (Split Layout) --- */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Text */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
              {story.heading}
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              {story.paragraphs.map((text, i) => (
                <p key={i}>{text}</p>
              ))}
            </div>
          </motion.div>

          {/* Right: Stats Grid */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {story.stats.map((stat, i) => (
              <div 
                key={i} 
                className={`p-8 rounded-[2rem] border border-gray-100 flex flex-col items-center justify-center text-center ${
                  i === 0 ? 'sm:col-span-2 bg-gradient-to-br from-pink-50 to-orange-50 border-pink-100' : 'bg-white shadow-lg shadow-black/5'
                }`}
              >
                <div className={`text-4xl md:text-5xl font-black mb-2 ${i === 0 ? 'text-pink-500' : 'text-gray-900'}`}>
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-gray-500 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* --- CORE VALUES (Bento Box) --- */}
      <section className="bg-[#1C1C1C] py-24 px-6 md:px-12 w-full">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
              {values.heading}
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              The foundational pillars that dictate how we write code, design interfaces, and manage client infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.items.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/[0.03] border border-white/[0.08] p-10 rounded-[2rem] hover:bg-white/[0.06] transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-yellow-400 text-white flex items-center justify-center mb-6 shadow-lg shadow-pink-500/20">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- LEADERSHIP / TEAM --- */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-24">
        <div className="mb-16 md:flex md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              {leadership.heading}
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              {leadership.description}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {leadership.members.map((member, index) => (
            <motion.div 
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white border border-gray-200/80 p-8 rounded-[2rem] shadow-xl shadow-black/5 flex flex-col sm:flex-row gap-6 items-start hover:border-pink-200 transition-colors"
            >
              <div className="w-20 h-20 shrink-0 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 border border-gray-300 flex items-center justify-center text-gray-500 font-bold text-xl tracking-widest shadow-inner">
                {member.initials}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-pink-500 font-semibold text-sm mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- HEADQUARTERS / LOCATION --- */}
      <section className="bg-gray-50 w-full py-20 px-6 border-t border-gray-200/60">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{headquarters.heading}</h2>
            <p className="text-gray-500 max-w-sm">{headquarters.description}</p>
          </div>
          
          <div className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 shrink-0">
            <div className="w-12 h-12 rounded-full bg-pink-50 text-pink-500 flex items-center justify-center shrink-0">
               <headquarters.icon className="w-5 h-5" />
            </div>
            <div>
              <p className="font-bold text-gray-900">{headquarters.location}</p>
              <p className="text-sm font-medium text-gray-500">{headquarters.region}</p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}