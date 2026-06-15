// src/constants/careersData.js
import React from 'react';

const CodeIcon = (props) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>;
const CoffeeIcon = (props) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M17 8h1a4 4 0 1 1 0 8h-1" /><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" /><line x1="6" x2="6" y1="2" y2="4" /><line x1="10" x2="10" y1="2" y2="4" /><line x1="14" x2="14" y1="2" y2="4" /></svg>;
const GlobeIcon = (props) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>;

export const CAREERS_PAGE_DATA = {
  hero: {
    badge: "Join DIV",
    title: "Build software that scales.",
    description: "We are an engineering-first company based in Noida Sector 31. We build resilient enterprise ecosystems, and we are looking for top-tier talent to join our mission."
  },

  perks: [
    {
      title: "Modern Tech Stack",
      description: "Work with Next.js, Node.js, MongoDB, BullMQ, and Redis on a daily basis.",
      icon: CodeIcon
    },
    {
      title: "Hybrid Work Culture",
      description: "Flexible schedules combining the best of in-office collaboration and remote deep-work.",
      icon: GlobeIcon
    },
    {
      title: "Continuous Learning",
      description: "We sponsor certifications and provide dedicated time to explore new frameworks.",
      icon: CoffeeIcon
    }
  ],

  // Current Openings
  positions: [
    {
      id: "full-stack-engineer",
      title: "Full-Stack Node.js Engineer",
      type: "Full-time",
      location: "Noida / Hybrid",
      description: "We are looking for an experienced backend engineer to architect RESTful APIs, manage Redis caching strategies, and optimize our PM2 cluster deployments."
    },
    {
      id: "frontend-architect",
      title: "Frontend Architect (Next.js)",
      type: "Full-time",
      location: "Noida / Hybrid",
      description: "Lead the UI/UX architecture of our custom CRM tools. Must have deep expertise in React, Tailwind CSS, and Framer Motion."
    },
    {
      id: "devops-specialist",
      title: "DevOps & Cloud Specialist",
      type: "Contract",
      location: "Remote",
      description: "Help us maintain our Nginx proxies, automate SSL renewals, and optimize our AWS/Vercel deployment pipelines."
    }
  ]
};