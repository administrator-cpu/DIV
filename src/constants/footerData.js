import React from 'react';
import { DIV_PRODUCTS } from './productsData';

const LinkedinIcon = (props) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>;
const InstagramIcon = (props) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>;
const FacebookIcon = (props) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>;
const MailIcon = (props) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>;

export const footerData = {
  brand: {
    logo: "<Div/>",
    legalName: "Development Innovation Vector Private Limited.",
    description: "Engineering intelligent software ecosystems, custom CRMs, and automated workflows for modern enterprise scalability.",
  },
  
  solutions: DIV_PRODUCTS.map(product => ({
    label: product.title,
    href: product.link,
  })),

 company: [
    { label: "About Us", href: "/about" },
    { label: "Core Services", href: "/services" },
    { label: "Our Products", href: "/products" },
    // { label: "Client Reviews", href: "/reviews" }, 
    // { label: "Careers", href: "/careers" },         
    { label: "Support & Help", href: "/support" },  
    // { label: "Contact Us", href: "/contact" }
  ],

  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Cookies Policy", href: "/cookies" },
    { label: "Data Deletion", href: "/data-deletion" },
    { label: "Copyright", href: "/copyright" }
  ],

  contact: {
    email: "info@thediv.in",
    // location: "Noida Sector 31",
    socials: [
      { 
        id: 1, 
        icon: LinkedinIcon, 
        href: "https://www.linkedin.com/company/thediv/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_companies%3BxCjcn0FoTm2TD2rX6FuDjw%3D%3D", 
        label: "LinkedIn" 
      },
      { 
        id: 2, 
        icon: InstagramIcon, 
        href: "https://www.instagram.com/development_innovation_vector?igsh=Y3Rra3FkOWl0NDJr", 
        label: "Instagram" 
      },
      { 
        id: 3, 
        icon: FacebookIcon, 
        href: "https://www.facebook.com/profile.php?id=61590074293518", 
        label: "Facebook" 
      },
      { 
        id: 4, 
        icon: MailIcon, 
        href: "mailto:info@thediv.in", 
        label: "Email" 
      }
    ]
  }
};