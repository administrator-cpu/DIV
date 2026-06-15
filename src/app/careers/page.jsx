'use client';

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { CAREERS_PAGE_DATA } from '../../constants/careersData'; // Adjust path if needed

export default function CareersPage() {
  const { hero, perks, positions } = CAREERS_PAGE_DATA;
  
  // Form & UI State
  const [selectedRole, setSelectedRole] = useState(positions[0].title);
  const [file, setFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'
  const fileInputRef = useRef(null);

  // Handle File Selection & Validation
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile.type !== "application/pdf") {
        alert("Please upload a PDF document.");
        setFile(null);
        fileInputRef.current.value = "";
        return;
      }
      if (selectedFile.size > 5 * 1024 * 1024) { // 5MB limit based on schema
        alert("File size exceeds 5MB limit.");
        setFile(null);
        fileInputRef.current.value = "";
        return;
      }
      setFile(selectedFile);
    }
  };

  // Handle Form Submission via FormData (Multipart)
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      alert("A resume (PDF) is required.");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    // Create FormData object to handle the file upload
    const formData = new FormData();
    formData.append('fullName', e.target.fullName.value);
    formData.append('email', e.target.email.value);
    formData.append('phone', e.target.phone.value);
    formData.append('position', selectedRole);
    formData.append('coverLetter', e.target.coverLetter.value);
    formData.append('resume', file); // 'resume' matches the Multer .single('resume') key

    try {
      const response = await fetch('/api/v1/applications', {
        method: 'POST',
        body: formData // No Content-Type header; browser sets it automatically with the boundary
      });

      if (response.ok) {
        setSubmitStatus('success');
        e.target.reset();
        setFile(null);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error("Application failed:", error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="w-full bg-white text-gray-900 min-h-screen font-sans pb-24">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full pt-36 pb-20 px-6 text-center overflow-hidden bg-gray-50/50">
        <div className="absolute top-[-30%] right-[10%] w-[50%] h-[70%] rounded-full bg-gradient-to-bl from-pink-100/50 to-orange-50/50 blur-[120px] pointer-events-none" aria-hidden="true" />
        
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

      {/* 2. CULTURE & PERKS */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {perks.map((perk, index) => {
            const Icon = perk.icon;
            return (
              <div key={index} className="bg-white border border-gray-100 p-8 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-pink-50 text-pink-500 flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{perk.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{perk.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. OPEN POSITIONS & APPLICATION FORM */}
      <section id="apply" className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left: Job Listings */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 tracking-tight">Open Positions</h2>
            
            {positions.map((job) => (
              <div 
                key={job.id} 
                onClick={() => setSelectedRole(job.title)}
                className={`p-6 rounded-2xl border cursor-pointer transition-all ${
                  selectedRole === job.title 
                  ? 'border-pink-500 bg-pink-50/20 shadow-md scale-[1.02]' 
                  : 'border-gray-200 bg-white hover:border-pink-200'
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg text-gray-900">{job.title}</h3>
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded-full">{job.type}</span>
                </div>
                <p className="text-pink-500 text-sm font-semibold mb-3">{job.location}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{job.description}</p>
              </div>
            ))}
          </div>

          {/* Right: Application Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-gray-100 rounded-[2rem] p-8 md:p-10 shadow-xl shadow-black/5">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Submit Your Application</h2>
              <p className="text-gray-500 text-sm mb-8">Currently applying for: <strong className="text-pink-500">{selectedRole}</strong></p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="fullName" className="text-sm font-bold text-gray-900">Full Name *</label>
                    <input 
                      type="text" id="fullName" name="fullName" required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-bold text-gray-900">Email Address *</label>
                    <input 
                      type="email" id="email" name="email" required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-bold text-gray-900">Phone Number <span className="text-gray-400 font-normal">(Optional)</span></label>
                  <input 
                    type="tel" id="phone" name="phone"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 outline-none transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="coverLetter" className="text-sm font-bold text-gray-900">Cover Letter <span className="text-gray-400 font-normal">(Optional)</span></label>
                  <textarea 
                    id="coverLetter" name="coverLetter" rows="4"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 outline-none transition-all resize-none"
                    placeholder="Why DIV?"
                  ></textarea>
                </div>

                {/* File Upload Area */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-900">Resume (PDF, Max 5MB) *</label>
                  <div className="relative w-full px-4 py-8 rounded-xl border-2 border-dashed border-gray-200 bg-gray-50 text-center hover:border-pink-300 transition-colors">
                    <input 
                      type="file" 
                      id="resume" 
                      accept=".pdf"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    {file ? (
                      <span className="text-pink-600 font-medium">{file.name}</span>
                    ) : (
                      <span className="text-gray-500 font-medium">Click or drag a PDF file here to upload</span>
                    )}
                  </div>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-xl font-bold text-white transition-all ${
                    isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#1C1C1C] hover:bg-gray-800 hover:-translate-y-0.5 shadow-xl'
                  }`}
                >
                  {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
                </button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="p-4 rounded-xl bg-green-50 border border-green-200 text-green-700 text-sm font-medium text-center">
                    Application submitted! Keep an eye on your inbox.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm font-medium text-center">
                    An error occurred. Please try again.
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