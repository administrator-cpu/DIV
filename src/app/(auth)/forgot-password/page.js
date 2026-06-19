'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { usePassword, forgotPasswordSchema, resetPasswordSchema } from '@thediv/auth-core';
import ErrorBanner from '@/components/auth/ErrorBanner';
import FormField from '@/components/auth/FormField';
import SubmitButton from '@/components/auth/SubmitButton';
import SuccessMessage from '@/components/auth/SuccessMessage';

export default function ForgotPasswordPage() {
  // ✅ FIX: Use correct function names from SDK
  const { requestReset, submitNewPassword } = usePassword();
  
  const [step, setStep] = useState('request');
  const [userEmail, setUserEmail] = useState('');
  const [serverError, setServerError] = useState('');

  const requestForm = useForm({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: { email: '' },
  });

  const resetForm = useForm({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: { otp: '', password: '', confirmPassword: '' },
  });

  // Step 1: Request OTP
  const onRequestOTP = async (data) => {
    setServerError('');
    try {
      // ✅ FIX: requestReset instead of forgotPassword
      await requestReset(data);
      setUserEmail(data.email);
      setStep('verify');
    } catch (error) {
      setServerError(error.message || 'Failed to send reset code');
    }
  };

  // Step 2: Submit OTP + New Password
  const onResetPassword = async (data) => {
    setServerError('');
    try {
      // ✅ FIX: submitNewPassword instead of resetPassword
      // Note: SDK strips confirmPassword before sending
      await submitNewPassword({
        email: userEmail,
        password: data.password,
        otp: data.otp,
      });
      setStep('success');
    } catch (error) {
      setServerError(error.message || 'Invalid or expired reset code');
    }
  };

  // Resend OTP
  const handleResendOTP = async () => {
    setServerError('');
    try {
      await requestReset({ email: userEmail });
      resetForm.setValue('otp', '');
    } catch (error) {
      setServerError(error.message || 'Failed to resend code');
    }
  };

  if (step === 'success') {
    return (
      <SuccessMessage
        title="Password updated"
        message="Your password has been successfully reset. You can now sign in with your new password."
        primaryLink="/login"
        primaryLabel="Back to sign in"
      />
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        {step === 'request' ? (
          <>
            <Header title="Forgot your password?" subtitle="Enter your email and we'll send you a 6-digit reset code." />
            <form onSubmit={requestForm.handleSubmit(onRequestOTP)} className="space-y-6">
              <ErrorBanner message={serverError} />
              <FormField
                id="email"
                label="Email address"
                type="email"
                autoComplete="email"
                placeholder="you@company.com"
                registration={requestForm.register('email')}
                error={requestForm.formState.errors.email}
              />
              <SubmitButton 
                isSubmitting={requestForm.formState.isSubmitting} 
                label="Send reset code" 
                loadingLabel="Sending code..." 
              />
            </form>
            <FooterLink text="Remember your password?" link="/login" linkText="Sign in" />
          </>
        ) : (
          <>
            <Header 
              title="Reset your password" 
              subtitle={<>Enter the 6-digit code sent to <span className="font-medium text-gray-900">{userEmail}</span></>} 
            />
            <form onSubmit={resetForm.handleSubmit(onResetPassword)} className="space-y-6">
              <ErrorBanner message={serverError} />
              
              <FormField
                id="otp"
                label="Reset code"
                type="text"
                inputMode="numeric"
                maxLength={6}
                autoComplete="one-time-code"
                placeholder="000000"
                registration={resetForm.register('otp')}
                error={resetForm.formState.errors.otp}
                className="text-center text-2xl tracking-widest"
              />
              
              <FormField
                id="password"
                label="New password"
                type="password"
                autoComplete="new-password"
                placeholder="••••••••"
                registration={resetForm.register('password')}
                error={resetForm.formState.errors.password}
                showPasswordToggle={true}
              />
              
              <FormField
                id="confirmPassword"
                label="Confirm new password"
                type="password"
                autoComplete="new-password"
                placeholder="••••••••"
                registration={resetForm.register('confirmPassword')}
                error={resetForm.formState.errors.confirmPassword}
                showPasswordToggle={true}
              />
              
              <SubmitButton 
                isSubmitting={resetForm.formState.isSubmitting} 
                label="Reset password" 
                loadingLabel="Resetting password..." 
              />
              
              <ActionLinks onResend={handleResendOTP} onBack={() => { setStep('request'); setServerError(''); resetForm.reset(); }} />
            </form>
          </>
        )}
      </div>
    </div>
  );
}

function Header({ title, subtitle }) {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900">{title}</h2>
      <p className="mt-2 text-sm text-gray-600">{subtitle}</p>
    </div>
  );
}

function FooterLink({ text, link, linkText }) {
  return (
    <p className="text-center text-sm text-gray-600 mt-8">
      {text}{' '}
      <Link href={link} className="font-medium text-blue-600 hover:text-blue-500">{linkText}</Link>
    </p>
  );
}

function ActionLinks({ onResend, onBack }) {
  return (
    <div className="flex items-center justify-between text-sm">
      <button type="button" onClick={onResend} className="font-medium text-blue-600 hover:text-blue-500">
        Resend code
      </button>
      <button type="button" onClick={onBack} className="font-medium text-gray-600 hover:text-gray-500">
        Try different email
      </button>
    </div>
  );
}