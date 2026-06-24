'use client';

import Link from 'next/link';

export default function AuthLayout({ 
  children, 
  title, 
  subtitle, 
  rightTitle, 
  rightDescription, 
  rightFeatures = [] 
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex min-h-screen">
        {/* Left Column - Form */}
        <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div className="mb-10">
              <Link href="/" className="inline-block">
                <img src="/core/Logo.webp" alt="DIV" className="h-12 w-auto" />
              </Link>
              <h2 className="mt-8 text-3xl font-bold tracking-tight text-gray-900">{title}</h2>
              <p className="mt-2 text-sm text-gray-600">{subtitle}</p>
            </div>
            {children}
          </div>
        </div>

        {/* Right Column */}
        <div className="relative hidden w-0 flex-1 lg:block">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-purple-500/5 to-yellow-400/10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(236,72,153,0.1),transparent_50%)]" />
          <div className="relative flex h-full flex-col items-center justify-center p-12">
            <div className="max-w-md text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">{rightTitle}</h2>
              <p className="text-lg text-gray-600 mb-8">{rightDescription}</p>
              {rightFeatures.length > 0 && (
                <div className="space-y-4 text-left">
                  {rightFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-pink-500 to-yellow-400 flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}