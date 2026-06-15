// constants/ecosystemData.jsx
import React from "react";

export const techStackData = [
  {
    id: 1,
    title: "Frontend Architecture", // More professional than just "Development"
    techs: ["React", "Next.js", "Tailwind CSS"],
    iconBg: "bg-blue-100 text-blue-600",
    borderGradient: "from-purple-200 to-pink-200",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
    )
  },
  {
    id: 2,
    title: "Backend & Database",
    techs: ["Node.js", "MongoDB", "PostgreSQL"],
    iconBg: "bg-orange-100 text-orange-500",
    borderGradient: "from-pink-200 to-orange-200",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
    )
  },
  {
    id: 3,
    title: "DevOps & Cloud",
    techs: ["Git", "GitHub", "Vercel", "Render"],
    iconBg: "bg-purple-100 text-purple-600",
    borderGradient: "from-purple-200 to-indigo-200",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
    )
  },
  {
    id: 4,
    title: "UI/UX System Design",
    techs: ["Figma", "Adobe CC", "Canva"], // Swapped Affinity for Figma as it's a stronger enterprise keyword
    iconBg: "bg-emerald-100 text-emerald-600",
    borderGradient: "from-green-200 to-emerald-200",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
    )
  }
];

export const ecosystemStats = [
  // { value: "50", suffix: "+", label: "Business Workflows Automated" },
  { value: "99.9", suffix: "%", label: "Uptime & Data Security" },
  { value: "30", suffix: "%", label: "Reduction In Operational Costs" },
  { value: "24/7", suffix: "", label: "System Monitoring & Support" }
];