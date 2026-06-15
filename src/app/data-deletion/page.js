'use client';

import React from 'react';
import Link from 'next/link';

export default function DataDeletionPolicyPage() {
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
            Data Deletion Policy
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
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Our Commitment to Your Data</h2>
            <p>
              Development Innovation Vector Private Limited ("DIV") believes that you should have complete control over your personal and operational data. This Data Deletion Policy outlines the exact technical and administrative process by which you can request the removal of your account and associated personal information from our software ecosystems.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. The Two-Step Deletion Process</h2>
            <p>
              To protect users against accidental data loss and to maintain the integrity of active business workflows, we employ a strict, two-phase data deletion protocol in our databases.
            </p>
            
            <div className="space-y-6 mt-6">
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 border-l-4 border-l-orange-400">
                <h3 className="font-bold text-gray-900 text-lg mb-2">Phase 1: Soft Deletion (30-Day Recovery Window)</h3>
                <p className="text-sm leading-relaxed">
                  Upon receiving a valid deletion request, your account will be immediately suspended. At the database level, your user profile is flagged as inactive[cite: 13]. During this 1-month (30-day) cooling-off period:
                </p>
                <ul className="list-disc pl-6 mt-2 text-sm space-y-1">
                  <li>You will not be able to log into any DIV platform.</li>
                  <li>Your profile, avatars, and linked data will be hidden from public or organizational view.</li>
                  <li>You may contact support to cancel the deletion request and fully restore your account.</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 border-l-4 border-l-red-500">
                <h3 className="font-bold text-gray-900 text-lg mb-2">Phase 2: Hard Deletion (Permanent Wipe)</h3>
                <p className="text-sm leading-relaxed">
                  If the 30-day recovery window expires without a restoration request, our systems will execute a "Hard Delete." This action permanently wipes your user record entirely from our primary MongoDB databases. 
                </p>
                <ul className="list-disc pl-6 mt-2 text-sm space-y-1">
                  <li>Personally identifiable information (PII), such as names, email addresses, and encrypted password hashes, are permanently destroyed.</li>
                  <li>Linked files on local disk storage (such as uploaded avatars or resumes) are securely deleted.</li>
                  <li>This action is irreversible.</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Data Retention Exceptions</h2>
            <p>
              While your personal account data will be permanently wiped, certain anonymized or aggregated data may be retained to ensure systemic integrity. For example:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li><strong>Immutable Logs:</strong> System transaction logs, financial records in Bahi Khata, or previously submitted product ratings [cite: 44, 46] may be retained for legal compliance, tax auditing, or systemic abuse prevention. In these cases, the data is anonymized and stripped of personal identifiers.</li>
              <li><strong>System Backups:</strong> Secure, encrypted database backups may retain your data for an additional 60 to 90 days before being automatically overwritten. Access to these backups is strictly limited to disaster recovery scenarios.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. How to Request Deletion</h2>
            <p>
              You may initiate the deletion of your data at any time through the following methods:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li><strong>In-App:</strong> Navigate to your Account Settings within the DIV portal and select "Request Account Deletion".</li>
              <li><strong>Via Email:</strong> Send a direct request from the email address associated with your account to our privacy team. Please include "Data Deletion Request" in the subject line.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Contact Us</h2>
            <p>
              To submit a deletion request or if you have questions regarding this policy, please contact us at:
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