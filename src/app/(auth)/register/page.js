'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRegister, registerSchema } from '@thediv/auth-core';
import { useAuthContext } from '../../../../components/Providers';
import { motion, AnimatePresence } from 'framer-motion';

export default function RegisterPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  // Configure useRegister to match your backend
  const { register: registerUser } = useRegister({
    endpoint: '/auth/register',  // Matches: POST /api/v1/auth/register
    method: 'post',
  });
  
  const { user, isAuthenticated } = useAuthContext();
  const [serverError, setServerError] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);

useEffect(() => {
  if (isAuthenticated && user) {
    const returnUrl = searchParams.get('returnUrl') || '/'; 
    router.replace(returnUrl);
  }
}, [isAuthenticated, user, router, searchParams]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm({
    resolver: zodResolver(registerSchema),
    mode: 'onBlur',
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const watchedPassword = watch('password');

  const onSubmit = async (data) => {
    setServerError('');

    try {
      const result = await registerUser(data);
      
      if (result.success) {
        setIsRegistered(true);
      }
    } catch (error) {
      setServerError(error.message || 'An unexpected error occurred. Please try again.');
    }
  };

  // Don't render if already authenticated
  if (isAuthenticated && user) {
    return null;
  }

  // Success state after registration
  if (isRegistered) {
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
          
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            Account created!
          </h2>
          <p className="mt-3 text-sm text-gray-600">
            Your account has been successfully created. You can now sign in to access your dashboard.
          </p>
          
          <div className="mt-8 space-y-3">
            <Link
              href="/login"
              className="inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-pink-500 to-yellow-400 px-6 py-3.5 text-sm font-bold text-white shadow-lg transition-all hover:from-pink-600 hover:to-yellow-500 hover:shadow-xl"
            >
              Sign in to your account
            </Link>
            
            <Link
              href="/"
              className="inline-flex w-full items-center justify-center rounded-xl border border-gray-300 bg-white px-6 py-3.5 text-sm font-semibold text-gray-700 shadow-sm transition-all hover:bg-gray-50"
            >
              Back to home
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex min-h-screen">
        {/* Left Column - Form */}
        <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            {/* Logo */}
            <div className="mb-10">
              <Link href="/" className="inline-block">
                <img
                  src="/core/Logo.webp"
                  alt="DIV"
                  className="h-12 w-auto"
                />
              </Link>
              <h2 className="mt-8 text-3xl font-bold tracking-tight text-gray-900">
                Create your account
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Join DIV to manage your projects and collaborate with your team
              </p>
            </div>

            {/* OAuth Buttons */}
            <div className="space-y-3 mb-8">
              <a
                href={`${process.env.NEXT_PUBLIC_API_URL}/auth/google`}
                className="flex w-full items-center justify-center gap-3 rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm font-semibold text-gray-700 shadow-sm transition-all hover:bg-gray-50 hover:shadow-md"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                Sign up with Google
              </a>

              <a
                href={`${process.env.NEXT_PUBLIC_API_URL}/auth/github`}
                className="flex w-full items-center justify-center gap-3 rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm font-semibold text-gray-700 shadow-sm transition-all hover:bg-gray-50 hover:shadow-md"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
                Sign up with GitHub
              </a>
            </div>

            {/* Divider */}
            <div className="relative mb-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-gray-50 px-4 text-gray-500">
                  or sign up with email
                </span>
              </div>
            </div>

            {/* Registration Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* Server Error Banner */}
              <AnimatePresence>
                {serverError && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="rounded-xl border border-red-200 bg-red-50 p-4"
                  >
                    <div className="flex items-start space-x-3">
                      <svg className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                      </svg>
                      <div>
                        <h3 className="text-sm font-medium text-red-800">
                          Registration failed
                        </h3>
                        <p className="mt-1 text-sm text-red-700">
                          {serverError}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Full name
                </label>
                <input
                  id="name"
                  type="text"
                  autoComplete="name"
                  {...register('name')}
                  className={`block w-full rounded-xl border px-4 py-3 text-gray-900 shadow-sm transition-all placeholder:text-gray-400 focus:ring-2 focus:ring-offset-0 ${
                    errors.name
                      ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
                      : 'border-gray-300 focus:border-blue-600 focus:ring-blue-600'
                  }`}
                  placeholder="John Doe"
                />
                <AnimatePresence>
                  {errors.name && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className="mt-1.5 text-sm text-red-600"
                    >
                      {errors.name.message}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  {...register('email')}
                  className={`block w-full rounded-xl border px-4 py-3 text-gray-900 shadow-sm transition-all placeholder:text-gray-400 focus:ring-2 focus:ring-offset-0 ${
                    errors.email
                      ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
                      : 'border-gray-300 focus:border-blue-600 focus:ring-blue-600'
                  }`}
                  placeholder="you@company.com"
                />
                <AnimatePresence>
                  {errors.email && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className="mt-1.5 text-sm text-red-600"
                    >
                      {errors.email.message}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Password Field */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  autoComplete="new-password"
                  {...register('password')}
                  className={`block w-full rounded-xl border px-4 py-3 text-gray-900 shadow-sm transition-all placeholder:text-gray-400 focus:ring-2 focus:ring-offset-0 ${
                    errors.password
                      ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
                      : 'border-gray-300 focus:border-blue-600 focus:ring-blue-600'
                  }`}
                  placeholder="Create a strong password"
                />
                <AnimatePresence>
                  {errors.password && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className="mt-1.5 text-sm text-red-600"
                    >
                      {errors.password.message}
                    </motion.p>
                  )}
                </AnimatePresence>
                
                {/* Password Strength Indicator */}
                {watchedPassword && !errors.password && (
                  <div className="mt-2">
                    <div className="flex gap-1">
                      {[1, 2, 3, 4].map((level) => {
                        const strength = 
                          watchedPassword.length >= 8 ? 1 : 0 +
                          /[A-Z]/.test(watchedPassword) ? 1 : 0 +
                          /[0-9]/.test(watchedPassword) ? 1 : 0 +
                          /[!@#$%^&*]/.test(watchedPassword) ? 1 : 0;
                        
                        return (
                          <div
                            key={level}
                            className={`h-1 flex-1 rounded-full transition-all ${
                              level <= strength
                                ? strength <= 2
                                  ? 'bg-red-500'
                                  : strength === 3
                                  ? 'bg-yellow-500'
                                  : 'bg-green-500'
                                : 'bg-gray-200'
                            }`}
                          />
                        );
                      })}
                    </div>
                    <p className="mt-1 text-xs text-gray-500">
                      Password must be at least 8 characters with uppercase, number, and special character
                    </p>
                  </div>
                )}
              </div>

              {/* Terms & Conditions */}
              <div className="flex items-start">
                <div className="flex h-5 items-center">
                  <input
                    id="terms"
                    name="terms"
                    type="checkbox"
                    required
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600"
                  />
                </div>
                <div className="ml-3">
                  <label htmlFor="terms" className="text-sm text-gray-600">
                    I agree to the{' '}
                    <Link href="/terms" className="font-medium text-blue-600 hover:text-blue-500">
                      Terms of Service
                    </Link>{' '}
                    and{' '}
                    <Link href="/privacy" className="font-medium text-blue-600 hover:text-blue-500">
                      Privacy Policy
                    </Link>
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-pink-500 to-yellow-400 px-4 py-3.5 text-sm font-bold text-white shadow-lg transition-all hover:from-pink-600 hover:to-yellow-500 hover:shadow-xl focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <svg className="mr-2 h-5 w-5 animate-spin" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Creating account...
                  </>
                ) : (
                  'Create account'
                )}
              </button>
            </form>

            {/* Sign In Link */}
            <p className="mt-8 text-center text-sm text-gray-600">
              Already have an account?{' '}
              <Link
                href="/login"
                className="font-semibold text-blue-600 hover:text-blue-500 transition-colors"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>

        {/* Right Column - Hero Section (Desktop) */}
        <div className="relative hidden w-0 flex-1 lg:block">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-purple-500/5 to-yellow-400/10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(236,72,153,0.1),transparent_50%)]" />
          
          <div className="relative flex h-full flex-col items-center justify-center p-12">
            <div className="max-w-md text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Start Building with DIV
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Create your account and get access to powerful development tools and expert collaboration.
              </p>
              
              {/* Feature List */}
              <div className="space-y-4 text-left">
                {[
                  'Access to all development services',
                  'Real-time project tracking dashboard',
                  'Direct collaboration with expert developers',
                  'Priority support and dedicated resources',
                ].map((feature, index) => (
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

              {/* Testimonial */}
              <div className="mt-12 p-6  backdrop-blur-sm rounded-xl border border-gray-200/50">
                <p className="text-sm text-gray-600 italic">
                  {/* "DIV transformed our development workf/low. Their platform and team are exceptional." */}
                </p>
                <p className="mt-3 text-sm font-semibold text-gray-900">
                  {/* — Sarah Johnson, CTO at TechStart */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}