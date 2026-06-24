import React from 'react';

// ==========================================
// CUSTOM SVG ICONS (Replaces lucide-react)
// ==========================================
const ActivityIcon = (props) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>;
const ZapIcon = (props) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>;
const ShieldCheckIcon = (props) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></svg>;
const EyeIcon = (props) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg>;
const BookOpenIcon = (props) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>;
const LockIcon = (props) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>;
const FileTextIcon = (props) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /><line x1="16" x2="8" y1="13" y2="13" /><line x1="16" x2="8" y1="17" y2="17" /><line x1="10" x2="8" y1="9" y2="9" /></svg>;
const CheckCircleIcon = (props) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>;
const LayoutDashboardIcon = (props) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="7" height="9" x="3" y="3" rx="1" /><rect width="7" height="5" x="14" y="3" rx="1" /><rect width="7" height="9" x="14" y="12" rx="1" /><rect width="7" height="5" x="3" y="16" rx="1" /></svg>;


export const DIV_PRODUCTS = [
  {
    id: "samadhan",
    title: "Samadhan",
    tagline: "Help is on the way in under 30 seconds.",
    shortDesc: "An organic bridge between technical infrastructure and human connection. Get from 'my internet is down' to 'fixing it' instantly.",
    fullDesc: "Designed for peace of mind. Samadhan automates technical support ticketing so you stop wondering what's happening and start seeing real-time resolutions.",
    link: "https://samadhan.fab5connect.com",
    
    heroIcon: ActivityIcon,
    featureImagePrimary: "/products/samadhan.webp",
    featureImageSecondary: "/products/samadhan.webp", 
    
    features: [
      { id: 1, icon: ZapIcon, text: "Support Speed: Automated diagnostics in under 30s" },
      { id: 2, icon: ShieldCheckIcon, text: "Total Accountability: Strict SLA tracking and auto-escalation" },
      { id: 3, icon: EyeIcon, text: "Real-Time Visibility: Transparent progress every step of the way" }
    ]
  },
  {
    id: "bahikhata",
    title: "Bahi Khata",
    tagline: "The Modern way to Track Business Dues.",
    shortDesc: "Ditch paper registers with a professional Maker-Checker ledger system designed for high-volume transactions.",
    fullDesc: "Built for transparency. Our digital ledger uses enterprise-grade verification logic to ensure your records are always accurate, secure, and completely audit-ready.",
    link: "https://tool-bahi-khataa.vercel.app",
    
    heroIcon: BookOpenIcon,
    featureImagePrimary: "/products/bahiKhataa.webp",
    featureImageSecondary: "/products/bahiKhataa.webp",
    
    features: [
      { id: 1, icon: LockIcon, text: "Maker-Checker Protocol: Dual-layer transaction verification" },
      { id: 2, icon: FileTextIcon, text: "90-Day Aging & Audit History: Permanent tracking for every credit" },
      { id: 3, icon: CheckCircleIcon, text: "Manager Mapping & SSO: Seamless identity and access control" }
    ]
  },
  {
    id: "connect",
    title: "Connect CRM",
    tagline: "Transform your workflow with us.",
    shortDesc: "Effortlessly manage the entire customer lifecycle from a single, centralized intelligent CRM dashboard.",
    fullDesc: "A complete custom CRM ecosystem designed to simplify complex operations. Connect eliminates bottlenecks by combining smart workflow management with automated deadline intelligence.",
    link: "https://fab5connect.com",
    
    heroIcon: LayoutDashboardIcon,
    featureImagePrimary: "/products/connectCRM.webp",
    featureImageSecondary: "/products/connectCRM.webp",
    
    features: [
      { id: 1, icon: ZapIcon, text: "Efficiency: Smart Workflow Management" },
      { id: 2, icon: CheckCircleIcon, text: "Automation: Automated Deadline Intelligence" },
      { id: 3, icon: EyeIcon, text: "Transparency: Complete Activity Audit" }
    ]
  }
];