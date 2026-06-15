'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SUPPORT_PAGE_DATA, MailIcon, MapPinIcon, FileTextIcon } from '../../constants/supportData';

export default function SupportPage() {
  const { hero, contactInfo, faqs } = SUPPORT_PAGE_DATA;
  
  // Form State
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'
  const [openFaq, setOpenFaq] = useState(0);

  // Handle Input Changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission (Wired for your Express API)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Assuming your backend is running on the same domain or properly configured for CORS
      const response = await fetch('/api/v1/contacts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error("Submission failed:", error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="w-full bg-white text-gray-900 min-h-screen font-sans pb-24">
      
      {/* HERO SECTION */}
      <section className="relative w-full pt-36 pb-20 px-6 text-center overflow-hidden bg-gray-50/50">
        <div className="absolute top-[-30%] left-[20%] w-[50%] h-[70%] rounded-full bg-gradient-to-tr from-pink-100/50 to-orange-50/50 blur-[120px] pointer-events-none" aria-hidden="true" />
        
        <div className="max-w-3xl mx-auto relative z-10 flex flex-col items-center">
          <span className="px-4 py-1.5 rounded-full bg-pink-50 border border-pink-100 text-pink-600 font-bold text-xs uppercase tracking-widest mb-6 shadow-sm">
            {hero.badge}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            {hero.title}
          </h1>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            {hero.description}
          </p>
        </div>
      </section>

      {/* MAIN CONTENT SPLIT */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* LEFT COLUMN: FAQs & Info */}
          <div className="lg:col-span-5 space-y-12">
            
            {/* Contact Details */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 tracking-tight">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-pink-50 text-pink-500 flex items-center justify-center shrink-0">
                    <MailIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900 mb-1">Email Support</p>
                    <a href={`mailto:${contactInfo.email}`} className="text-gray-600 hover:text-pink-500 transition-colors">
                      {contactInfo.email}
                    </a>
                    <p className="text-xs text-gray-400 mt-1">{contactInfo.responseTime}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-orange-50 text-orange-500 flex items-center justify-center shrink-0">
                    <MapPinIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900 mb-1">Headquarters</p>
                    <p className="text-gray-600">{contactInfo.address}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center shrink-0">
                    <FileTextIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900 mb-1">Client Portal</p>
                    <a href="/login" className="text-pink-500 font-medium text-sm hover:underline underline-offset-4">
                      Login to submit a secure ticket &rarr;
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <hr className="border-gray-100" />

            {/* Accordion FAQs */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 tracking-tight">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div 
                    key={index} 
                    className={`border rounded-2xl overflow-hidden transition-colors ${openFaq === index ? 'border-pink-200 bg-pink-50/30' : 'border-gray-200 bg-white'}`}
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                      className="w-full text-left px-6 py-4 flex items-center justify-between focus:outline-none"
                    >
                      <span className="font-bold text-sm text-gray-900 pr-4">{faq.question}</span>
                      <span className={`text-pink-500 transform transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}>
                        ▼
                      </span>
                    </button>
                    <AnimatePresence>
                      {openFaq === index && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="px-6 pb-4 text-sm text-gray-600 leading-relaxed"
                        >
                          {faq.answer}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-gray-100 rounded-[2rem] p-8 md:p-10 shadow-xl shadow-black/5">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Send us a message</h2>
              <p className="text-gray-500 text-sm mb-8">Fill out the form below and our engineering team will get back to you shortly.</p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-bold text-gray-900">Full Name</label>
                    <input 
                      type="text" id="name" name="name" required
                      value={formData.name} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 outline-none transition-all"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-bold text-gray-900">Email Address</label>
                    <input 
                      type="email" id="email" name="email" required
                      value={formData.email} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 outline-none transition-all"
                      placeholder="jane@company.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-bold text-gray-900">Subject <span className="text-gray-400 font-normal">(Optional)</span></label>
                  <input 
                    type="text" id="subject" name="subject"
                    value={formData.subject} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 outline-none transition-all"
                    placeholder="How can we help?"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-bold text-gray-900">Message</label>
                  <textarea 
                    id="message" name="message" required rows="5"
                    value={formData.message} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 outline-none transition-all resize-none"
                    placeholder="Please describe your inquiry or project requirements..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-xl font-bold text-white transition-all ${
                    isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#1C1C1C] hover:bg-gray-800 hover:-translate-y-0.5 shadow-xl'
                  }`}
                >
                  {isSubmitting ? 'Sending Request...' : 'Submit Inquiry'}
                </button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="p-4 rounded-xl bg-green-50 border border-green-200 text-green-700 text-sm font-medium text-center">
                    Message sent successfully! We will contact you soon.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm font-medium text-center">
                    An error occurred while sending your message. Please try again.
                  </div>
                )}

              </form>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}