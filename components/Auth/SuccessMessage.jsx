'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function SuccessMessage({ 
  title, 
  message, 
  primaryLink, 
  primaryLabel, 
  secondaryLink, 
  secondaryLabel 
}) {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md text-center"
      >
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h2 className="mt-6 text-3xl font-bold text-gray-900">{title}</h2>
        <p className="mt-3 text-sm text-gray-600">{message}</p>
        <div className="mt-8 space-y-3">
          <Link
            href={primaryLink}
            className="inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-pink-500 to-yellow-400 px-6 py-3.5 text-sm font-bold text-white shadow-lg transition-all hover:from-pink-600 hover:to-yellow-500 hover:shadow-xl"
          >
            {primaryLabel}
          </Link>
          {secondaryLink && (
            <Link
              href={secondaryLink}
              className="inline-flex w-full items-center justify-center rounded-xl border border-gray-300 bg-white px-6 py-3.5 text-sm font-semibold text-gray-700 shadow-sm transition-all hover:bg-gray-50"
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
      </motion.div>
    </div>
  );
}