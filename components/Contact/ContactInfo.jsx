import React from 'react';

export default function ContactInfo() {
  return (
    <div className="w-full md:w-5/12 bg-[#1C1C1C] p-10 md:p-14 text-white flex flex-col relative overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-[-20%] left-[-20%] w-[80%] h-[80%] bg-pink-500/20 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="relative z-10 h-full flex flex-col">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's build something great.</h2>
        <p className="text-gray-400 mb-auto leading-relaxed">
          Whether you have a question about our services, pricing, or anything else, our team is ready to answer all your questions.
        </p>

        <div className="mt-12 space-y-6 text-sm text-gray-300">
          <div>
            <p className="font-semibold text-white mb-1">Email Us</p>
            <a href="mailto:hello@div.com" className="hover:text-pink-400 transition-colors">hello@div.com</a>
          </div>
          <div>
            <p className="font-semibold text-white mb-1">Call Us</p>
            <a href="tel:+910000000000" className="hover:text-pink-400 transition-colors">+91 00000 00000</a>
          </div>
          <div>
            <p className="font-semibold text-white mb-1">Visit Us</p>
            <p>Noida, Uttar Pradesh, India</p>
          </div>
        </div>
      </div>
    </div>
  );
}