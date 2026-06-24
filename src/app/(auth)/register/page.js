'use client';

import { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRegister, registerSchema } from '@thediv/auth-core';
import { useAuthContext } from '@/components/Providers';
import AuthLayout from '@/components/Auth/AuthLayout';
import OAuthButtons from '@/components/Auth/OAuthButtons';
import Divider from '@/components/Auth/Divider';
import ErrorBanner from '@/components/Auth/ErrorBanner';
import FormField from '@/components/Auth/FormField';
import SubmitButton from '@/components/Auth/SubmitButton';



const RIGHT_FEATURES = [
  'Access to all development services',
  'Real-time project tracking dashboard',
  'Direct collaboration with expert developers',
  'Priority support and dedicated resources',
];

// 1. Rename the original function to RegisterContent
function RegisterContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { register: registerUser } = useRegister({ endpoint: '/auth/register', method: 'post' });
  const { user, isAuthenticated, isLoading } = useAuthContext();
  const [serverError, setServerError] = useState('');

  const { register, handleSubmit, formState: { errors, isSubmitting }, watch } = useForm({
    resolver: zodResolver(registerSchema),
    mode: 'onBlur',
    defaultValues: { name: '', email: '', password: '' },
  });

  const watchedPassword = watch('password');

  // Redirect if already authenticated
  useEffect(() => {
    if (!isLoading && isAuthenticated && user) {
      router.replace(searchParams.get('returnUrl') || '/');
    }
  }, [isLoading, isAuthenticated, user, router, searchParams]);

  const onSubmit = async (data) => {
    setServerError('');
    try {
      await registerUser(data);
      // ✅ Full page reload so useAuth() picks up the cookie
      const returnUrl = searchParams.get('returnUrl') || '/';
      window.location.href = returnUrl;
    } catch (error) {
      setServerError(error.message || 'An unexpected error occurred.');
    }
  };

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" />
      </div>
    );
  }

  // Don't show form if authenticated
  if (isAuthenticated && user) return null;

  return (
    <AuthLayout
      title="Create your account"
      subtitle="Join DIV to manage your projects and collaborate with your team"
      rightTitle="Start Building with DIV"
      rightDescription="Create your account and get access to powerful development tools and expert collaboration."
      rightFeatures={RIGHT_FEATURES}
    >
      <OAuthButtons action="Sign up" />
      <Divider text="or sign up with email" />

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <ErrorBanner message={serverError} title="Registration failed" />

        <FormField
          id="name"
          label="Full name"
          autoComplete="name"
          placeholder="John Doe"
          registration={register('name')}
          error={errors.name}
        />

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
          autoComplete="new-password"
          placeholder="Create a strong password"
          registration={register('password')}
          error={errors.password}
          showPasswordToggle={true}
        />

        {watchedPassword && !errors.password && (
          <PasswordStrength password={watchedPassword} />
        )}

        <div className="flex items-start">
          <input id="terms" type="checkbox" required className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600" />
          <label htmlFor="terms" className="ml-3 text-sm text-gray-600">
            I agree to the{' '}
            <Link href="/terms" className="font-medium text-blue-600 hover:text-blue-500">Terms of Service</Link>
            {' '}and{' '}
            <Link href="/privacy" className="font-medium text-blue-600 hover:text-blue-500">Privacy Policy</Link>
          </label>
        </div>

        <SubmitButton isSubmitting={isSubmitting} label="Create account" loadingLabel="Creating account..." />
      </form>

      <p className="mt-8 text-center text-sm text-gray-600">
        Already have an account?{' '}
        <Link href="/login" className="font-semibold text-blue-600 hover:text-blue-500">Sign in</Link>
      </p>
    </AuthLayout>
  );
}

// 2. Export the main page with a Suspense boundary
export default function RegisterPage() {
  return (
    <Suspense 
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-gray-50">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" />
        </div>
      }
    >
      <RegisterContent />
    </Suspense>
  );
}

function PasswordStrength({ password }) {
  const checks = [
    password.length >= 8,
    /[A-Z]/.test(password),
    /[0-9]/.test(password),
    /[!@#$%^&*]/.test(password),
  ];
  const strength = checks.filter(Boolean).length;

  return (
    <div className="mt-2">
      <div className="flex gap-1">
        {[1, 2, 3, 4].map((level) => (
          <div
            key={level}
            className={`h-1 flex-1 rounded-full transition-all ${
              level <= strength
                ? strength <= 2 ? 'bg-red-500' : strength === 3 ? 'bg-yellow-500' : 'bg-green-500'
                : 'bg-gray-200'
            }`}
          />
        ))}
      </div>
      <p className="mt-1 text-xs text-gray-500">
        At least 8 characters with uppercase, number, and special character
      </p>
    </div>
  );
}