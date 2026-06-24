'use client';

import { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useLogin, loginSchema } from '@thediv/auth-core';
import { useAuthContext } from '@/components/Providers';
import AuthLayout from '@/components/auth/AuthLayout';
import OAuthButtons from '@/components/auth/OAuthButtons';
import Divider from '@/components/auth/Divider';
import ErrorBanner from '@/components/auth/ErrorBanner';
import FormField from '@/components/auth/FormField';
import SubmitButton from '@/components/auth/SubmitButton';
import LoadingScreen from '@/components/auth/LoadingScreen';

const RIGHT_FEATURES = [
  'Track project milestones in real-time',
  'Access premium development resources',
  'Connect with your dedicated team',
  'Monitor analytics and performance',
];

// 1. Rename your original function and remove 'export default'
function LoginContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { login, error: sdkError } = useLogin({ endpoint: '/auth/login', method: 'post' });
  const { user, isAuthenticated, isLoading } = useAuthContext();
  const [serverError, setServerError] = useState('');

  function getCookie(name) {
    if (typeof document === 'undefined') return null;
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
  }

  function deleteCookie(name) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  }

  useEffect(() => {
    const authError = getCookie('auth_error');
    if (authError) {
      setServerError(decodeURIComponent(authError));
      deleteCookie('auth_error');
    }
  }, []);

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(loginSchema),
    mode: 'onBlur',
    defaultValues: { email: '', password: '' },
  });

  useEffect(() => {
    if (!isLoading && isAuthenticated && user) {
      router.replace(searchParams.get('returnUrl') || '/');
    }
  }, [isLoading, isAuthenticated, user, router, searchParams]);

  // ✅ Show SDK error if it surfaces one
  useEffect(() => {
    if (sdkError) {
      setServerError(sdkError);
    }
  }, [sdkError]);

  const onSubmit = async (data) => {
    setServerError('');
    try {
      const result = await login(data);
      if (result.success) {
        window.location.href = searchParams.get('returnUrl') || '/';
      }
    } catch (error) {
      console.error('Full error object:', error); 

      if (!sdkError) {
        setServerError('Invalid email or password. Please try again.');
      }
    }
  };

  if (isLoading) return <LoadingScreen message="Checking session..." />;
  if (isAuthenticated && user) return null;

  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Sign in to your DIV account to continue"
      rightTitle="Manage Your Digital Solutions"
      rightDescription="Access your DIV dashboard to manage projects, track progress, and collaborate with your team."
      rightFeatures={RIGHT_FEATURES}
    >
      <OAuthButtons action="Continue" />
      <Divider text="or sign in with email" />

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <ErrorBanner message={serverError} title="Sign in failed" />

        <FormField
          id="email"
          label="Email address"
          type="email"
          autoComplete="email"
          placeholder="you@company.com"
          registration={register('email')}
          error={errors.email}
        />

        <FormField
          id="password"
          label="Password"
          type="password"
          autoComplete="current-password"
          placeholder="Enter your password"
          registration={register('password')}
          error={errors.password}
          showPasswordToggle={true}
        />

        <div className="flex items-center justify-between">
          <label className="flex items-center">
            <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600" />
            <span className="ml-2 text-sm text-gray-700">Remember me</span>
          </label>
          <Link href="/forgot-password" className="text-sm font-medium text-blue-600 hover:text-blue-500">
            Forgot password?
          </Link>
        </div>

        <SubmitButton isSubmitting={isSubmitting} label="Sign in" loadingLabel="Signing in..." />
      </form>

      <p className="mt-8 text-center text-sm text-gray-600">
        Don&apos;t have an account?{' '}
        <Link href="/register" className="font-semibold text-blue-600 hover:text-blue-500">Create one now</Link>
      </p>
    </AuthLayout>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<LoadingScreen message="Loading..." />}>
      <LoginContent />
    </Suspense>
  );
}