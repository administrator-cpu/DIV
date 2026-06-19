import React from 'react';

// ==========================================
// CUSTOM SVG ICONS (Native React Components)
// ==========================================
export const CodeIcon = (props) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>;
export const LayoutIcon = (props) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><line x1="3" x2="21" y1="9" y2="9" /><line x1="9" x2="9" y1="21" y2="9" /></svg>;
export const DatabaseIcon = (props) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M3 5V19A9 3 0 0 0 21 19V5" /><path d="M3 12A9 3 0 0 0 21 12" /></svg>;
export const WorkflowIcon = (props) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="8" height="8" x="3" y="3" rx="2" /><path d="M7 11v4a2 2 0 0 0 2 2h4" /><rect width="8" height="8" x="13" y="13" rx="2" /></svg>;
export const ServerIcon = (props) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="8" x="2" y="2" rx="2" ry="2" /><rect width="20" height="8" x="2" y="14" rx="2" ry="2" /><line x1="6" x2="6.01" y1="6" y2="6" /><line x1="6" x2="6.01" y1="18" y2="18" /></svg>;
export const TargetIcon = (props) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>;

// ==========================================
// DATA EXPORT
// ==========================================
export const SERVICES_PAGE_DATA = {
  hero: {
    badge: "Core Engineering Solutions",
    headlinePart1: "Architecting Scalable",
    headlinePart2: "Digital Ecosystems",
    description: "We don't just build software. We engineer resilient infrastructure, automated workflows, and custom enterprise tools designed to eliminate bottlenecks and accelerate growth.",
    primaryCta: { label: "Schedule Technical Audit", href: "/support" },
  },

  pillars: [
    {
      id: "custom-development",
      title: "Custom Enterprise Software",
      shortDesc: "Full-stack web applications and custom CRMs engineered from the ground up for your specific operational logic.",
      icon: CodeIcon,
      deliverables: ["Internal Dashboards & ERPs", "Custom CRM Development", "Legacy System Modernization"],
      caseStudy: { text: "See how we built Connect CRM ↗", href: "/products/connect" }
    },
    {
      id: "ui-ux-architecture",
      title: "UI/UX System Architecture",
      shortDesc: "Data-driven interface design focused on reducing cognitive load, improving adoption rates, and streamlining user workflows.",
      icon: LayoutIcon,
      deliverables: ["Wireframing & Prototyping", "Design System Creation", "Workflow Optimization"]
    },
    {
      id: "workflow-automation",
      title: "Workflow Automation",
      shortDesc: "Eliminate manual data entry and human error by connecting disjointed APIs, databases, and third-party SaaS tools.",
      icon: WorkflowIcon,
      deliverables: ["API Development & Integration", "SLA & Ticketing Automation", "Data Pipeline Engineering"],
      caseStudy: { text: "See how we automated support with Samadhan ↗", href: "/products/samadhan" }
    },
    {
      id: "cloud-infrastructure",
      title: "Cloud Infrastructure & Security",
      shortDesc: "Deploy applications on secure, auto-scaling cloud environments utilizing multi-factor access rules and encrypted databases.",
      icon: ServerIcon,
      deliverables: ["AWS / Vercel Deployment", "Maker-Checker Verification Setup", "Database Architecture"],
      caseStudy: { text: "See our dual-layer security in Bahi Khata ↗", href: "/products/bahikhata" }
    }
  ],

  methodology: {
    heading: "Our Engineering Process",
    steps: [
      { id: "step-1", number: "01", title: "Discovery & Architecture", desc: "We analyze your current bottlenecks, map out data flows, and define the technical architecture required for scale.", icon: TargetIcon },
      { id: "step-2", number: "02", title: "Interface Prototyping", desc: "We build interactive, high-fidelity prototypes to ensure the user experience aligns perfectly with operational goals before coding begins.", icon: LayoutIcon },
      { id: "step-3", number: "03", title: "Agile Development", desc: "Our engineers build your system in bi-weekly sprints, providing transparent progress and early access to staging environments.", icon: CodeIcon },
      { id: "step-4", number: "04", title: "Deployment & SLAs", desc: "We handle secure cloud deployment and provide ongoing monitoring, maintenance, and 24/7 technical support.", icon: DatabaseIcon }
    ]
  },

  techStack: [
    { name: "Next.js", type: "Frontend" }, { name: "React", type: "Frontend" }, { name: "TypeScript", type: "Frontend" }, { name: "JavaScript", type: "Frontend" },
    { name: "Tailwind CSS", type: "Styling" }, { name: "Framer Motion", type: "Styling" }, { name: "Material UI", type: "Styling" }, { name: "Shadcn UI", type: "Styling" }, { name: "Sass/SCSS", type: "Styling" },
    { name: "Node.js", type: "Backend" }, { name: "Express.js", type: "Backend" }, { name: "Django", type: "Backend" }, { name: "Java / Spring", type: "Backend" }, { name: "GraphQL", type: "Backend" }, { name: "REST APIs", type: "Backend" },
    { name: "PostgreSQL", type: "Database" }, { name: "MongoDB", type: "Database" }, { name: "MySQL", type: "Database" }, { name: "Redis", type: "Database" }, { name: "Supabase", type: "Database" }, { name: "Firebase", type: "Database" }, { name: "Prisma ORM", type: "Database" },
    { name: "AWS", type: "Infrastructure" }, { name: "Vercel", type: "Infrastructure" }, { name: "Google Cloud", type: "Infrastructure" }, { name: "Cloudflare", type: "Infrastructure" },
    { name: "Docker", type: "DevOps" }, { name: "GitHub Actions", type: "DevOps" }
  ],

  bottomCta: {
    headline: "Ready to modernize your infrastructure?",
    subheadline: "Stop letting legacy systems slow down your growth. Let's map out a scalable architecture tailored to your exact operational needs.",
    btnText: "Book a Technical Consultation",
    btnHref: "/contact"
  }
};