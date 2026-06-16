'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function AuthSuccessPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [status, setStatus] = useState('processing');

  useEffect(() => {
    const token = searchParams.get('token');
    const error = searchParams.get('error');

    if (error) {
      setStatus('error');
      setTimeout(() => router.replace('/login?error=oauth_failed'), 2500);
      return;
    }

    if (token) {
      setStatus('success');
      // The cookie is already set by the backend
      // Just redirect to home where useAuth will pick it up
      setTimeout(() => router.replace('/'), 1000);
    } else {
      setStatus('error');
      setTimeout(() => router.replace('/login?error=missing_token'), 2500);
    }
  }, [searchParams, router]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="text-center">
        {status === 'processing' && (
          <>
            <div className="mx-auto h-8 w-8 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" />
            <h2 className="mt-6 text-2xl font-bold text-gray-900">Completing sign in...</h2>
          </>
        )}
        
        {status === 'success' && (
          <>
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <h2 className="mt-6 text-2xl font-bold text-gray-900">Signed in successfully!</h2>
            <p className="mt-2 text-sm text-gray-600">Redirecting you to the homepage...</p>
          </>
        )}
        
        {status === 'error' && (
          <>
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
              <svg className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <h2 className="mt-6 text-2xl font-bold text-gray-900">Authentication Failed</h2>
            <p className="mt-2 text-sm text-gray-600">Redirecting to login...</p>
          </>
        )}
      </div>
    </div>
  );
}