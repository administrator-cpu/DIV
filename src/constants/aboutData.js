import React from 'react';

// ==========================================
// CUSTOM SVG ICONS (Native React Components)
// ==========================================
const ShieldIcon = (props) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
const ZapIcon = (props) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>;
const TargetIcon = (props) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>;
const MapPinIcon = (props) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>;

// ==========================================
// DATA EXPORT
// ==========================================
export const ABOUT_PAGE_DATA = {
  hero: {
    badge: "About DIV",
    headlinePart1: "Engineering the Future of",
    headlinePart2: "Enterprise Software",
    description: "Development Innovation Vector Private Limited (DIV) bridges the gap between complex business operations and seamless digital workflows. We architect platforms that scale.",
  },

  story: {
    heading: "Our Mission",
    paragraphs: [
      "Founded with a strategic vision to eliminate operational bottlenecks, DIV specializes in purpose-built software ecosystems. From automated support ticketing in Samadhan to enterprise-grade dual-layer verification in Bahi Khata, our platforms are built for uncompromising reliability.",
      "We believe that true digital transformation requires more than just code. It requires an intimate understanding of business logic, user experience workflows, and secure cloud infrastructure. That is the vector of innovation we bring to every partnership."
    ],
    stats: [
      { label: "Proprietary Platforms", value: "3+" },
      { label: "Uptime SLA", value: "99.9%" },
      { label: "Deployment Focus", value: "B2B" }
    ]
  },

  values: {
    heading: "Core Engineering Principles",
    items: [
      {
        id: "v1",
        title: "Uncompromising Security",
        desc: "Implementing maker-checker protocols and strict multi-factor access rules to ensure zero single-points of failure.",
        icon: ShieldIcon
      },
      {
        id: "v2",
        title: "Workflow Agility",
        desc: "Designing intelligent UI/UX dashboards that reduce cognitive load and drastically accelerate daily operations.",
        icon: ZapIcon
      },
      {
        id: "v3",
        title: "Strategic Architecture",
        desc: "Building with scalable, modern stacks (Next.js, Node.js, MongoDB) to ensure your infrastructure grows with you.",
        icon: TargetIcon
      }
    ]
  },

  leadership: {
    heading: "Technical Leadership",
    description: "Led by a team of advanced full-stack developers and strategic architects dedicated to modernizing enterprise technology.",
    members: [
      {
        id: "harsh-jha",
        name: "Harsh Jha",
        role: "Founder & Lead Technical Architect",
        bio: "Specializing in advanced full-stack development and strategic planning, Harsh drives the technical vision of DIV. With deep expertise in Next.js, React, and Node.js ecosystems, he architects custom CRMs and B2B platforms designed for maximum operational efficiency.",
        initials: "HJ"
      },
      {
        id: "ayush",
        name: "Ayush",
        role: "Lead Systems Developer",
        bio: "Collaborating on complex technical repositories and CRM ecosystems, Ayush ensures seamless code integration, robust backend architecture, and flawless deployment pipelines.",
        initials: "AY"
      }
    ]
  },

  headquarters: {
    heading: "Our Headquarters",
    location: "Noida Sector 31",
    region: "Delhi-NCR, India",
    description: "Situated in the heart of India's premier technological hub, our engineering teams build solutions that scale globally.",
    icon: MapPinIcon
  }
};