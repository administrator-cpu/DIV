'use client';

import React from 'react';
import Link from 'next/link';

export default function CookiesPolicyPage() {
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
            Cookies Policy
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
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. What Are Cookies?</h2>
            <p>
              Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used by online service providers to facilitate secure logins, remember user preferences, and provide anonymized tracking data to website owners. 
            </p>
            <p className="mt-4">
              In addition to traditional cookies, Development Innovation Vector Private Limited (DIV) may also utilize modern browser storage technologies, such as Local Storage and Session Storage, to deliver our high-performance web applications.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Cookies</h2>
            <p>
              Because our enterprise platforms (including Connect CRM, Bahi Khata, and Samadhan) are engineered as modern single-page applications, we use cookies and local storage primarily for strictly necessary operational purposes rather than aggressive marketing tracking.
            </p>
            <p className="mt-4">We use these technologies for the following purposes:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li><strong>Authentication & Security:</strong> To securely store JSON Web Tokens (JWTs) that keep you logged in as you navigate between pages, and to mitigate Cross-Site Request Forgery (CSRF) attacks.</li>
              <li><strong>Functional Preferences:</strong> To remember your interface settings (such as dark mode toggles or sidebar configurations) so you do not have to re-apply them upon every visit.</li>
              <li><strong>Performance Monitoring:</strong> To anonymously analyze how users interact with our site so we can identify and resolve UX bottlenecks or server latency issues.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Types of Cookies We Use</h2>
            <div className="space-y-4 mt-4">
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <h3 className="font-bold text-gray-900 text-lg mb-2">Strictly Necessary Cookies</h3>
                <p className="text-sm">These cookies are essential for the website and our software platforms to function. They cannot be switched off in our systems. They are usually only set in response to actions made by you, such as logging in or filling in forms.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <h3 className="font-bold text-gray-900 text-lg mb-2">Analytics & Performance Cookies</h3>
                <p className="text-sm">These allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us know which pages are the most and least popular and see how visitors move around the platform.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Managing Your Cookie Preferences</h2>
            <p>
              Most web browsers allow you to control cookies through their settings preferences. However, please note that if you limit the ability of our websites to set strictly necessary cookies, you will not be able to log into your DIV enterprise accounts, as authentication tokens rely on browser storage to function properly.
            </p>
            <p className="mt-4">
              To learn more about how to manage and delete cookies, visit <a href="https://www.aboutcookies.org/" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:underline">aboutcookies.org</a>.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Updates to This Policy</h2>
            <p>
              We may update this Cookies Policy from time to time in order to reflect changes to the cookies we use or for other operational, legal, or regulatory reasons. Please revisit this page regularly to stay informed about our use of cookies and related technologies.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Contact Us</h2>
            <p>
              If you have any questions about our use of cookies or other technologies, please contact us at:
            </p>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 mt-4 inline-block">
              <p className="font-bold text-gray-900">Development Innovation Vector Private Limited</p>
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