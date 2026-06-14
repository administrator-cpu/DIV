'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqData } from '../../../src/constants/faqData';

const generateFaqSchema = (faqs) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };
};

export default function FaqSection() {
  // Initialize with the first item open
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      className="relative w-full py-24 bg-white flex flex-col items-center overflow-hidden"
      aria-labelledby="faq-heading"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFaqSchema(faqData.faqs)),
        }}
      />
      
      {/* Ambient Wave Background Element */}
      <div className="absolute top-[20%] right-[-10%] w-[40%] h-[60%] rounded-full bg-gradient-to-tr from-orange-100 to-pink-50 blur-[120px] -z-10 opacity-70 pointer-events-none" aria-hidden="true" />
      {/* Header */}
      <div className="text-center mb-16 relative z-10 px-4">
        <h2 id="faq-heading" className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Frequently <br /> Asked Questions
        </h2>
      </div>

      {/* Accordion Container */}
      <div className="max-w-4xl w-full px-6 relative z-10">
        
        {/* SEO Tip: Using a semantic list <dl> or generic div wrapper is fine, 
            but the ARIA tags inside are what truly matter. */}
        <div className="flex flex-col space-y-2">
          {faqData.faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div 
                key={faq.id} 
                className="border-b border-gray-100 last:border-none pb-4 mb-4"
              >
                {/* Question / Toggle Button */}
                <button
                  onClick={() => toggleAccordion(index)}
                  // CRITICAL SEO/A11y: Tells bots if the answer is currently visible
                  aria-expanded={isOpen}
                  // CRITICAL SEO/A11y: Connects the button to the specific answer ID
                  aria-controls={`answer-${faq.id}`}
                  className="w-full flex items-center justify-between py-4 text-left focus:outline-none group"
                >
                  <span className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-pink-500 transition-colors duration-300">
                    {faq.question}
                  </span>
                  
                  {/* Plus/Minus Icon - Updated to Brand Colors */}
                  <div className="ml-6 flex-shrink-0 flex items-center justify-center w-6 h-6 text-pink-500">
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      aria-hidden="true"
                    >
                      {isOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                      )}
                    </motion.div>
                  </div>
                </button>

                {/* Answer Content - Animated */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`answer-${faq.id}`} // Matches the aria-controls on the button
                      role="region"           // Tells screen readers this is a distinct content area
                      aria-labelledby={faq.id}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-600 text-base leading-relaxed pb-6 pr-12 pt-2">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
                
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
}