'use client';

import React from 'react';
import Link from 'next/link';

export default function CopyrightPolicyPage() {
  const lastUpdated = "June 16, 2026";
  const currentYear = new Date().getFullYear();

  return (
    <main className="w-full bg-white text-gray-900 min-h-screen font-sans pb-24">
      
      {/* Header Section */}
      <section className="relative w-full pt-32 pb-16 px-6 bg-gray-50/50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="text-pink-500 font-semibold text-sm hover:underline mb-6 inline-block">
            &larr; Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-gray-900">
            Copyright & Intellectual Property
          </h1>
          <p className="text-gray-500">
            Effective Date: {lastUpdated}
          </p>
        </div>
      </section>

      {/* Policy Content */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="prose prose-lg prose-pink max-w-none text-gray-600 space-y-8">
          
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Ownership of Content</h2>
            <p>
              All content published and made available on this website—including but not limited to text, graphics, logos, button icons, images, audio clips, digital downloads, data compilations, and interface design—is the exclusive property of <strong>Development Innovation Vector Private Limited ("DIV")</strong>[cite: 1] or its content suppliers. This property is protected by the Indian Copyright Act, 1957, and international copyright laws.
            </p>
            <p className="mt-4 font-bold text-gray-900">
              © {currentYear} Development Innovation Vector Private Limited. All rights reserved.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Software and Codebase License</h2>
            <p>
              The underlying software architectures, including our proprietary Node.js backend schemas[cite: 1], MongoDB database structures[cite: 1], custom API endpoints[cite: 1], and frontend Next.js UI/UX components, are the exclusive intellectual property of DIV. 
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Our enterprise software platforms (including Samadhan, Bahi Khata, and Connect CRM) are licensed, not sold, to our clients under specific Master Service Agreements (MSAs).</li>
              <li>You may not reverse-engineer, decompile, disassemble, or attempt to derive the source code of any DIV platform.</li>
              <li>Scraping, automated data extraction, or copying of our public-facing HTML/CSS/JavaScript structure is strictly prohibited.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Trademarks</h2>
            <p>
              "Development Innovation Vector", "DIV", and the DIV logo, alongside our specific product names (Samadhan, Bahi Khata, Connect CRM), are trademarks or registered trademarks of Development Innovation Vector Private Limited in India and/or other countries. Our trademarks and trade dress may not be used in connection with any product or service that is not ours, in any manner that is likely to cause confusion among customers, or in any manner that disparages or discredits DIV.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Restrictions on Use</h2>
            <p>
              Visitors and users are granted a limited, non-exclusive, and non-transferable license to access and use the public areas of this website for informational and business-inquiry purposes. You may not:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Reproduce, duplicate, copy, sell, resell, or exploit any portion of the site or its code for commercial purposes without express written consent.</li>
              <li>Frame or utilize framing techniques to enclose any trademark, logo, or other proprietary information (including images, text, page layout, or form) of DIV.</li>
              <li>Use any meta tags or "hidden text" utilizing DIV's name or trademarks.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Copyright Infringement Claims</h2>
            <p>
              DIV respects the intellectual property of others. If you believe that your work has been copied in a way that constitutes copyright infringement, please provide our legal team with the following information in writing:
            </p>
            <ol className="list-decimal pl-6 mt-4 space-y-2">
              <li>An electronic or physical signature of the person authorized to act on behalf of the owner of the copyright interest.</li>
              <li>A description of the copyrighted work that you claim has been infringed.</li>
              <li>A description of where the material that you claim is infringing is located on our site (URL).</li>
              <li>Your address, telephone number, and email address.</li>
              <li>A statement by you that you have a good faith belief that the disputed use is not authorized by the copyright owner, its agent, or the law.</li>
            </ol>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Contact Information</h2>
            <p>
              For permission requests, licensing inquiries, or infringement claims, please contact our administrative and legal team at:
            </p>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 mt-4 inline-block">
              <p className="font-bold text-gray-900">Development Innovation Vector Private Limited</p>
              <p>Legal & Compliance Department</p>
              <p>Noida Sector 31</p>
              <p>Delhi-NCR, India</p>
              <p className="mt-2"><strong>Email:</strong> <a href="mailto:info@thediv.in" className="text-pink-500 hover:underline">info@thediv.in</a></p>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}