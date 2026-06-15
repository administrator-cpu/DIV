'use client';

import React from 'react';
import Link from 'next/link';

export default function TermsAndConditionsPage() {
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
            Terms and Conditions
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
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Agreement to Terms</h2>
            <p>
              These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you"), and Development Innovation Vector Private Limited ("DIV", "we", "us", or "our"), located in Noida Sector 31, Delhi-NCR, India. By accessing our website, utilizing our enterprise platforms (including but not limited to Samadhan, Bahi Khata, and Connect CRM), or engaging our custom engineering services, you agree that you have read, understood, and agreed to be bound by all of these Terms and Conditions.
            </p>
            <p className="mt-4">
              Specific custom development projects may be subject to additional Master Service Agreements (MSAs) or Statements of Work (SOWs), which will supersede these general terms in the event of a conflict.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. User Accounts and Security</h2>
            <p>
              To access certain features of our software ecosystems, you may be required to register for an account. 
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>You agree to keep your password and/or OAuth credentials confidential and will be responsible for all use of your account and password.</li>
              <li>We reserve the right to remove, reclaim, or permanently suspend your account if we determine, in our sole discretion, that such account is being used maliciously or in violation of these Terms. Account suspension is enforced at the database level[cite: 1].</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Acceptable Use Policy & Infrastructure Protection</h2>
            <p>
              Our infrastructure is engineered for high availability. As a user of our public endpoints or authenticated platforms, you agree not to:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Attempt to bypass our API rate limits or automated threat protection mechanisms[cite: 1].</li>
              <li>Upload or transmit viruses, Trojan horses, or other malicious payloads. File uploads through our portals (such as the careers portal) are strictly limited to approved MIME types (e.g., application/pdf) and maximum file size constraints[cite: 1].</li>
              <li>Systematically retrieve data or other content from our services to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.</li>
              <li>Interfere with, disrupt, or create an undue burden on the networks or background worker queues connected to our services[cite: 1].</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Intellectual Property Rights</h2>
            <p>
              Unless otherwise explicitly stated in a bespoke Master Service Agreement, the website, our proprietary software products (Samadhan, Bahi Khata, Connect CRM), custom UI/UX architectures, databases, source code, and overall platform functionality are the exclusive property of DIV. They are protected by copyright, trademark, and other intellectual property laws of India and foreign jurisdictions.
            </p>
            <p className="mt-4">
              You are granted a limited, non-exclusive, non-transferable license to access and use the platforms strictly in accordance with your active service tier or contractual agreement.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Disclaimer of Warranties</h2>
            <p>
              The site and our baseline software products are provided on an "as-is" and "as-available" basis. While we strive for 99.9% uptime, we make no warranties or representations about the absolute accuracy or completeness of the site’s content or the content of any websites linked to this site. DIV assumes no liability for any (1) bugs, viruses, or Trojan horses transmitted to or through our site by any third party, or (2) unauthorized access to or use of our secure servers.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Limitation of Liability</h2>
            <p>
              In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the site or our services, even if we have been advised of the possibility of such damages.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Governing Law and Jurisdiction</h2>
            <p>
              These Terms shall be governed by and defined following the laws of India. Development Innovation Vector Private Limited and yourself irrevocably consent that the courts of New Delhi / Noida, Uttar Pradesh, shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Contact Information</h2>
            <p>
              In order to resolve a complaint regarding our services or to receive further information regarding the use of our platforms, please contact us at:
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