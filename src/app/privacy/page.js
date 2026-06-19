'use client';

import React from 'react';
import Link from 'next/link';

export default function PrivacyPolicyPage() {
  const lastUpdated = "June 16, 2026";

  return (
    <main className="w-full bg-white text-gray-900 min-h-screen font-sans pb-24">
      
      {/* Header Section */}
      <section className="relative w-full pt-32 pb-16 px-6 bg-gray-50/50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="text-pink-500 font-semibold text-sm hover:underline mb-6 inline-block">
            &larr; Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-gray-900">
            Privacy Policy
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
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
            <p>
              Development Innovation Vector Private Limited ("DIV", "we", "our", or "us") respects your privacy and is committed to protecting your personal data. This Privacy Policy outlines how we collect, process, and secure your information when you visit our website, use our enterprise software ecosystems, or apply for career opportunities with us.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
            <p>We collect data to provide secure and efficient enterprise solutions. Based on your interactions with our platform, we may collect:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li><strong>Account & Identity Data:</strong> Full name, email address, and encrypted passwords. If you choose to authenticate via third-party providers, we collect your respective OAuth identifiers.</li>
              <li><strong>Contact & Inquiry Data:</strong> Names, email addresses, subjects, and the contents of messages submitted through our contact forms.</li>
              <li><strong>Career Application Data:</strong> Full name, email, phone numbers, applied positions, cover letters, and resume documents.</li>
              <li><strong>Technical & Security Data:</strong> IP addresses are temporarily logged to enforce rate-limiting, prevent abuse, and maintain the security of our application infrastructure.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
            <p>Your data is processed strictly for the following operational purposes:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>To provision and manage your access to our custom software ecosystems.</li>
              <li>To facilitate seamless authentication (including Google and GitHub OAuth flows).</li>
              <li>To process and evaluate job applications.</li>
              <li>To respond to technical inquiries, support requests, and business communications.</li>
              <li>To protect our infrastructure against DDoS attacks, brute-force attempts, and unauthorized access.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Third-Party Integrations & Data Sharing</h2>
            <p>
              We do not sell your personal data. We only share data with carefully vetted third-party infrastructure providers necessary to operate our services:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li><strong>Authentication Partners:</strong> Google and GitHub (for users opting into OAuth single sign-on).</li>
              <li><strong>Communication Providers:</strong> Resend and associated SMTP gateways for delivering transactional emails and administrative notifications.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Security & Storage</h2>
            <p>
              We implement rigid security architectures to protect your data. All user passwords are cryptographically hashed, and authentication is managed via stateless JSON Web Tokens (JWT). File uploads, such as resumes, are strictly validated and stored on isolated local storage arrays independent of our primary database. We utilize automated threat logs and dual-layer verification where applicable to ensure data integrity.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Data Rights</h2>
            <p>
              Depending on your jurisdiction (including the Indian Digital Personal Data Protection Act, GDPR, or CCPA), you may have the right to access, correct, or request the deletion of your personal data. To exercise these rights, or to inquire about your stored data, please contact our administrative team.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Contact Us</h2>
            <p>
              If you have any questions regarding this Privacy Policy or our data processing practices, please contact us at:
            </p>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 mt-4 inline-block">
              <p className="font-bold text-gray-900">Development Innovation Vector Private Limited</p>
              {/* <p>Noida Sector 31</p> */}
              <p>Delhi-NCR, India</p>
              <p className="mt-2"><strong>Email:</strong> <a href="mailto:info@thediv.in" className="text-pink-500 hover:underline">info@thediv.in</a></p>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}