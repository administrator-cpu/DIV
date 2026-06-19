// src/constants/supportData.js
import React from 'react';

export const MailIcon = (props) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>;
export const MapPinIcon = (props) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>;
export const FileTextIcon = (props) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/></svg>;

export const SUPPORT_PAGE_DATA = {
  hero: {
    badge: "Help Center",
    title: "How can we assist you today?",
    description: "Browse our frequently asked questions, access product documentation, or reach out to our engineering team directly."
  },
  
  contactInfo: {
    email: "info@thediv.in",
    // address: "Noida Sector 31, Delhi-NCR, India",
    responseTime: "We aim to respond to all technical inquiries within 24 hours."
  },

  faqs: [
    {
      question: "What kind of SLAs (Service Level Agreements) do you provide?",
      answer: "We offer comprehensive SLAs for our enterprise custom deployments, guaranteeing 99.9% uptime. Specific support response times and maintenance windows are detailed in your individual Master Service Agreement."
    },
    {
      question: "Can Samadhan integrate with our existing legacy systems?",
      answer: "Yes. Samadhan and our other platforms are built with API-first architectures. We specialize in building custom middleware to connect our tools with your existing legacy databases and third-party SaaS applications."
    },
    {
      question: "How do I request an upgrade or custom feature for Bahi Khata?",
      answer: "Existing clients can submit a feature request directly through their administrative dashboard, or fill out the technical inquiry form on this page. Our architecture team will review the request and provide a deployment timeline."
    },
    {
      question: "Is my data secure?",
      answer: "Absolutely. We utilize enterprise-grade security including bcrypt password hashing, stateless JWT authentication, and strict CORS policies to protect your data against unauthorized access."
    }
  ]
};