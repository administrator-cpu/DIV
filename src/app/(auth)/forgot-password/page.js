'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { usePassword, forgotPasswordSchema, resetPasswordSchema } from '@thediv/auth-core';

export default function ForgotPasswordPage() {
  const { forgotPassword, resetPassword } = usePassword();
  const [step, setStep] = useState('request'); // 'request' | 'verify' | 'success'
  const [userEmail, setUserEmail] = useState('');
  const [serverError, setServerError] = useState('');

  // ── Step 1: Request OTP Form ──────────────────────────────────────────────
  const requestForm = useForm({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: { email: '' },
  });

  const onRequestOTP = async (data) => {
    setServerError('');

    try {
      // SDK's forgotPassword() calls POST /api/auth/forgot-password
      // The backend always returns 200 (email enumeration prevention)
      // The SDK internally tracks the request for the subsequent reset
      await forgotPassword(data);

      setUserEmail(data.email);
      setStep('verify');
    } catch (error) {
      setServerError(error.message || 'Failed to send reset code');
    }
  };

  // ── Step 2: Verify OTP & Reset Password Form ──────────────────────────────
  const resetForm = useForm({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: { email: userEmail, otp: '', password: '' },
  });

  // Keep email in sync when step changes
  useState(() => {
    resetForm.setValue('email', userEmail);
  });

  const onResetPassword = async (data) => {
    setServerError('');

    try {
      // SDK's resetPassword() calls POST /api/auth/reset-password
      // Sends email, otp, and new password in a single call
      await resetPassword(data);

      setStep('success');
    } catch (error) {
      setServerError(error.message || 'Invalid or expired reset code');
    }
  };

  const handleResendOTP = async () => {
    setServerError('');
    try {
      await forgotPassword({ email: userEmail });
      resetForm.setValue('otp', '');
    } catch (error) {
      setServerError(error.message || 'Failed to resend code');
    }
  };

  // ── Render: Success State ─────────────────────────────────────────────────
  if (step === 'success') {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-md text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>
          <h2 className="mt-6 text-2xl font-bold text-gray-900">Password updated</h2>
          <p className="mt-2 text-sm text-gray-600">
            Your password has been successfully reset. You can now sign in with your new password.
          </p>
          <Link
            href="/login"
            className="mt-8 inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-700 focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
          >
            Back to sign in
          </Link>
        </div>
      </div>
    );
  }

  // ── Render: Request OTP (Step 1) ──────────────────────────────────────────
  if (step === 'request') {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Forgot your password?
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Enter your email and we&apos;ll send you a 6-digit reset code.
            </p>
          </div>

          <form onSubmit={requestForm.handleSubmit(onRequestOTP)} className="mt-8 space-y-6">
            {serverError && (
              <div className="rounded-lg border border-red-200 bg-red-50 p-4">
                <div className="flex items-center space-x-2">
                  <svg className="h-5 w-5 text-red-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                  </svg>
                  <p className="text-sm text-red-700">{serverError}</p>
                </div>
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                {...requestForm.register('email')}
                className={`mt-1 block w-full rounded-lg border px-4 py-3 text-gray-900 shadow-sm transition-colors placeholder:text-gray-400 focus:ring-2 focus:ring-offset-0 ${
                  requestForm.formState.errors.email
                    ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
                    : 'border-gray-300 focus:border-blue-600 focus:ring-blue-600'
                }`}
                placeholder="you@company.com"
              />
              {requestForm.formState.errors.email && (
                <p className="mt-1.5 text-sm text-red-600">
                  {requestForm.formState.errors.email.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={requestForm.formState.isSubmitting}
              className="flex w-full items-center justify-center rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-700 focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {requestForm.formState.isSubmitting ? (
                <>
                  <svg className="mr-2 h-4 w-4 animate-spin" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Sending code...
                </>
              ) : (
                'Send reset code'
              )}
            </button>
          </form>

          <p className="text-center text-sm text-gray-600">
            Remember your password?{' '}
            <Link href="/login" className="font-medium text-blue-600 hover:text-blue-500 transition-colors">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    );
  }

  // ── Render: Verify OTP & Reset Password (Step 2) ──────────────────────────
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Reset your password
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Enter the 6-digit code sent to{' '}
            <span className="font-medium text-gray-900">{userEmail}</span>
          </p>
        </div>

        <form onSubmit={resetForm.handleSubmit(onResetPassword)} className="mt-8 space-y-6">
          {serverError && (
            <div className="rounded-lg border border-red-200 bg-red-50 p-4">
              <div className="flex items-center space-x-2">
                <svg className="h-5 w-5 text-red-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                </svg>
                <p className="text-sm text-red-700">{serverError}</p>
              </div>
            </div>
          )}

          {/* Hidden email field to satisfy the schema */}
          <input type="hidden" {...resetForm.register('email')} value={userEmail} />

          <div className="space-y-4">
            {/* OTP Field */}
            <div>
              <label htmlFor="otp" className="block text-sm font-medium text-gray-700">
                Reset code
              </label>
              <input
                id="otp"
                type="text"
                inputMode="numeric"
                maxLength={6}
                autoComplete="one-time-code"
                {...resetForm.register('otp')}
                className={`mt-1 block w-full rounded-lg border px-4 py-3 text-center text-2xl tracking-widest text-gray-900 shadow-sm transition-colors placeholder:text-gray-400 focus:ring-2 focus:ring-offset-0 ${
                  resetForm.formState.errors.otp
                    ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
                    : 'border-gray-300 focus:border-blue-600 focus:ring-blue-600'
                }`}
                placeholder="000000"
              />
              {resetForm.formState.errors.otp && (
                <p className="mt-1.5 text-sm text-red-600">
                  {resetForm.formState.errors.otp.message}
                </p>
              )}
            </div>

            {/* New Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                New password
              </label>
              <input
                id="password"
                type="password"
                autoComplete="new-password"
                {...resetForm.register('password')}
                className={`mt-1 block w-full rounded-lg border px-4 py-3 text-gray-900 shadow-sm transition-colors placeholder:text-gray-400 focus:ring-2 focus:ring-offset-0 ${
                  resetForm.formState.errors.password
                    ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
                    : 'border-gray-300 focus:border-blue-600 focus:ring-blue-600'
                }`}
                placeholder="••••••••"
              />
              {resetForm.formState.errors.password && (
                <p className="mt-1.5 text-sm text-red-600">
                  {resetForm.formState.errors.password.message}
                </p>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={resetForm.formState.isSubmitting}
            className="flex w-full items-center justify-center rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-700 focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {resetForm.formState.isSubmitting ? (
              <>
                <svg className="mr-2 h-4 w-4 animate-spin" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Resetting password...
              </>
            ) : (
              'Reset password'
            )}
          </button>

          {/* Resend OTP & Back Links */}
          <div className="flex items-center justify-between text-sm">
            <button
              type="button"
              onClick={handleResendOTP}
              className="font-medium text-blue-600 hover:text-blue-500 transition-colors"
            >
              Resend code
            </button>
            <button
              type="button"
              onClick={() => {
                setStep('request');
                setServerError('');
                resetForm.reset();
              }}
              className="font-medium text-gray-600 hover:text-gray-500 transition-colors"
            >
              Try different email
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}