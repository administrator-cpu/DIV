'use client';

import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SERVICES_PAGE_DATA } from '../../constants/servicesData'; // Adjust path if needed

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-pink-500 shrink-0">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default function ServicesPage() {
  const { hero, pillars, methodology, techStack, bottomCta } = SERVICES_PAGE_DATA;
  const [activeSection, setActiveSection] = useState("hero");

  // Framer Motion Scroll Setup for Interactive Timeline
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  });
  // Transform scroll progress (0 to 1) into a percentage string
  const scaleY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // Intersection Observer for Sticky Sidebar Navigation
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -60% 0px" } // Adjust trigger zone to middle of screen
    );
    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  // Group Tech Stack
  const groupedTechStack = techStack.reduce((acc, tech) => {
    if (!acc[tech.type]) acc[tech.type] = [];
    acc[tech.type].push(tech.name);
    return acc;
  }, {});

  // Generate JSON-LD SEO Schema
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Enterprise Software Engineering",
    "provider": { "@type": "Organization", "name": "DIV" },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Core Engineering Solutions",
      "itemListElement": pillars.map((p, i) => ({
        "@type": "Offer",
        "itemOffered": { "@type": "Service", "name": p.title, "description": p.shortDesc }
      }))
    }
  };

  return (
    <main className="w-full bg-white text-gray-900 min-h-screen relative font-sans">
      
      {/* Invisible SEO Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

      {/* --- HERO SECTION --- */}
      <section id="hero" className="relative w-full pt-36 pb-24 px-6 text-center overflow-hidden bg-gray-50/50">
        <div className="absolute top-[-20%] left-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-tr from-pink-100/50 to-orange-50/50 blur-[120px] pointer-events-none" aria-hidden="true" />
        
        <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
          <span className="px-4 py-1.5 rounded-full bg-pink-50 border border-pink-100 text-pink-600 font-bold text-xs uppercase tracking-widest mb-6">
            {hero.badge}
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
            {hero.headlinePart1} <br />
            <span className="bg-gradient-to-r from-pink-500 to-yellow-400 bg-clip-text text-transparent">
              {hero.headlinePart2}
            </span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
            {hero.description}
          </p>
          <Link 
            href={hero.primaryCta.href}
            className="px-8 py-4 rounded-full bg-[#1C1C1C] text-white font-bold text-sm text-center shadow-xl hover:bg-gray-800 hover:-translate-y-0.5 transition-all"
          >
            {hero.primaryCta.label}
          </Link>
        </div>
      </section>

      {/* --- MAIN CONTENT WITH STICKY SIDEBAR --- */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 flex items-start gap-16 relative">
        
        {/* Sticky Sidebar Navigation (Hidden on Mobile) */}
        <nav className="hidden lg:flex flex-col w-64 sticky top-32 shrink-0 border-l border-gray-100 pl-6 space-y-6">
          <span className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-2">On this page</span>
          {[
            { id: "capabilities", label: "Core Capabilities" },
            { id: "methodology", label: "Engineering Process" },
            { id: "stack", label: "Technology Stack" }
          ].map((navItem) => (
            <button
              key={navItem.id}
              onClick={() => document.getElementById(navItem.id)?.scrollIntoView({ behavior: 'smooth' })}
              className={`text-left text-sm font-semibold transition-all duration-300 relative ${
                activeSection === navItem.id ? 'text-pink-500 translate-x-2' : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              {activeSection === navItem.id && (
                <span className="absolute -left-6 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-pink-500" />
              )}
              {navItem.label}
            </button>
          ))}
        </nav>

        {/* Content Area */}
        <div className="flex-1 w-full min-w-0">

          {/* CAPABILITIES SECTION */}
          <section id="capabilities" className="mb-32 scroll-mt-32">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">Core Capabilities</h2>
              <p className="text-gray-500">Purpose-built architectures designed to solve complex operational challenges.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {pillars.map((pillar, index) => {
                const Icon = pillar.icon;
                return (
                  <motion.article 
                    key={pillar.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white border border-gray-200/80 p-8 rounded-[2rem] shadow-xl shadow-black/5 flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-50 to-orange-50 text-pink-500 flex items-center justify-center border border-pink-100/50 mb-6">
                        {Icon && <Icon className="w-6 h-6" strokeWidth={1.5} />}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{pillar.title}</h3>
                      <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                        {pillar.shortDesc}
                      </p>
                      
                      <ul className="space-y-3 pt-6 border-t border-gray-100 mb-8">
                        {pillar.deliverables.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm font-semibold text-gray-700">
                            <CheckIcon />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Mini Case Study Injection */}
                    {pillar.caseStudy && (
                      <Link 
                        href={pillar.caseStudy.href}
                        className="inline-block mt-auto bg-gray-50 hover:bg-gray-100 text-gray-800 text-xs font-bold px-4 py-2.5 rounded-xl border border-gray-200 transition-colors self-start"
                      >
                        {pillar.caseStudy.text}
                      </Link>
                    )}
                  </motion.article>
                );
              })}
            </div>
          </section>

          {/* METHODOLOGY TIMELINE (Interactive) */}
          <section id="methodology" className="mb-32 scroll-mt-32">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">Engineering Process</h2>
              <p className="text-gray-500">A transparent, agile approach to building enterprise software.</p>
            </div>

            <div className="relative pl-6 md:pl-10 py-4" ref={timelineRef}>
              
              {/* Static Background Line */}
              <div className="absolute top-0 bottom-0 left-10 md:left-14 w-1 bg-gray-100 rounded-full" />
              
              {/* Animated Progress Line overlay */}
              <motion.div 
                className="absolute top-0 left-10 md:left-14 w-1 bg-gradient-to-b from-pink-500 to-yellow-400 rounded-full origin-top z-10"
                style={{ height: scaleY }}
              />

              <div className="space-y-16 relative z-20">
                {methodology.steps.map((step) => {
                  const StepIcon = step.icon;
                  return (
                    <div key={step.id} className="relative flex items-start gap-6 group">
                      
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-white text-gray-400 group-hover:text-pink-500 group-hover:scale-110 shadow-sm shrink-0 transition-all duration-300 relative z-20 mt-1">
                        <StepIcon className="w-4 h-4" />
                      </div>
                      
                      <div className="bg-white border border-gray-100 p-8 rounded-3xl shadow-lg shadow-black/5 flex-1 relative overflow-hidden group-hover:border-pink-100 transition-colors">
                        <div className="text-gray-100 font-black text-6xl absolute top-4 right-6 pointer-events-none select-none transition-colors group-hover:text-pink-50">
                          {step.number}
                        </div>
                        <h3 className="font-bold text-xl mb-3 text-gray-900 relative z-10">{step.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed relative z-10 max-w-lg">{step.desc}</p>
                      </div>

                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* TECHNOLOGY STACK */}
          <section id="stack" className="mb-16 scroll-mt-32">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">Technology Stack</h2>
              <p className="text-gray-500">We utilize industry-leading frameworks for maximum performance and security.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(groupedTechStack).map(([category, technologies]) => (
                <div key={category} className="p-8 rounded-3xl bg-gray-50 border border-gray-200/60 hover:shadow-md transition-shadow">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-pink-500 mb-6 flex items-center gap-2">
                    {category} <span className="h-px flex-1 bg-gray-200"></span>
                  </h3>
                  <div className="flex flex-wrap gap-2.5">
                    {technologies.map(tech => (
                      <span key={tech} className="px-4 py-2 bg-white border border-gray-200 text-gray-700 text-sm font-semibold rounded-xl shadow-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>

      {/* --- ANCHOR CTA (Global Footer Lead-In) --- */}
      <section className="bg-[#1C1C1C] w-full py-24 px-6 relative overflow-hidden mt-16">
        <div className="absolute top-0 right-[-10%] w-[40%] h-[100%] rounded-full bg-gradient-to-bl from-pink-500/20 to-transparent blur-[120px] pointer-events-none" aria-hidden="true" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            {bottomCta.headline}
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            {bottomCta.subheadline}
          </p>
          <Link 
            href={bottomCta.btnHref}
            className="inline-block px-10 py-4 rounded-full bg-gradient-to-r from-pink-500 to-yellow-400 text-white font-bold text-base shadow-xl shadow-pink-500/20 hover:opacity-90 hover:-translate-y-1 transition-all"
          >
            {bottomCta.btnText}
          </Link>
        </div>
      </section>

    </main>
  );
}