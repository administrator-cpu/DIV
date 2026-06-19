'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useAuthContext } from '@/components/Providers';
import api from '@/lib/axios';
import LoadingScreen from '@/components/auth/LoadingScreen';
import { motion, AnimatePresence } from 'framer-motion';

// ── Validation Schemas ──────────────────────────────────────────────────────
const profileSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
});

const passwordSchema = z.object({
  newPassword: z.string().min(8, 'Password must be at least 8 characters'),
  confirmPassword: z.string(),
}).refine((data) => data.newPassword === data.confirmPassword, {
  message: 'Passwords do not match',
  path: ['confirmPassword'],
});

// ── SVG Icons ────────────────────────────────────────────────────────────────
const UserCircleIcon = () => (
  <svg className="w-20 h-20 text-gray-400" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const GoogleIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
  </svg>
);

const GitHubIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

// ── Toast Notification ───────────────────────────────────────────────────────
function Toast({ message, type = 'success', onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className={`fixed top-4 right-4 z-50 px-6 py-3 rounded-xl shadow-lg text-sm font-medium ${
        type === 'success' ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'
      }`}
    >
      {message}
    </motion.div>
  );
}

// ── Main Profile Page ────────────────────────────────────────────────────────
export default function ProfilePage() {
  const router = useRouter();
  const { user, isAuthenticated, isLoading, clearSession } = useAuthContext();
  const [activeTab, setActiveTab] = useState('profile');
  const [toast, setToast] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);

  // ── Profile Form ────────────────────────────────────────────────────────
  const profileForm = useForm({
    resolver: zodResolver(profileSchema),
    defaultValues: { name: '', email: '' },
  });

  // ── Password Form ────────────────────────────────────────────────────────
  const passwordForm = useForm({
    resolver: zodResolver(passwordSchema),
    defaultValues: { newPassword: '', confirmPassword: '' },
  });

  // Populate profile form when user loads
  useEffect(() => {
    if (user) {
      profileForm.reset({ name: user.name || '', email: user.email || '' });
    }
  }, [user, profileForm]);

  // Redirect if not authenticated
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.replace('/login?returnUrl=/profile');
    }
  }, [isLoading, isAuthenticated, router]);

  // ── Handlers ─────────────────────────────────────────────────────────────
  const onUpdateProfile = async (data) => {
    try {
      await api.put('/users/me', data);
      setToast({ message: 'Profile updated successfully!', type: 'success' });
    } catch (error) {
      setToast({ 
        message: error.response?.data?.error || 'Failed to update profile', 
        type: 'error' 
      });
    }
  };

  const onChangePassword = async (data) => {
    try {
      // Use forgot-password flow to set new password
      // First request OTP
      await api.post('/auth/forgot-password', { email: user.email });
      setToast({ message: 'Password reset code sent to your email. Check your inbox.', type: 'success' });
      
      // Redirect to reset password page
      setTimeout(() => router.push('/forgot-password'), 1500);
    } catch (error) {
      setToast({ 
        message: error.response?.data?.error || 'Failed to send reset code', 
        type: 'error' 
      });
    }
  };

  const onDeleteAccount = async () => {
    if (!window.confirm('Are you sure you want to delete your account? This action cannot be undone.')) return;
    
    setIsDeleting(true);
    try {
      await api.delete('/users/me');
      await clearSession();
      router.push('/');
    } catch (error) {
      setToast({ 
        message: error.response?.data?.error || 'Failed to delete account', 
        type: 'error' 
      });
      setIsDeleting(false);
    }
  };

  if (isLoading) return <LoadingScreen message="Loading profile..." />;
  if (!isAuthenticated) return null;

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <AnimatePresence>
        {toast && <Toast {...toast} onClose={() => setToast(null)} />}
      </AnimatePresence>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Account Settings</h1>
          <p className="mt-2 text-sm text-gray-600">Manage your profile, password, and account settings.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 space-y-1">
              {[
                { id: 'profile', label: 'Profile', icon: '' },
                { id: 'password', label: 'Password', icon: '' },
                { id: 'danger', label: 'Danger Zone', icon: '' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-pink-50 to-yellow-50 text-gray-900 shadow-sm'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <span className="text-lg">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>

            {/* User Card */}
            <div className="mt-6 bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
              {user?.avatarUrl ? (
                <img src={user.avatarUrl} alt={user.name} className="w-16 h-16 rounded-full mx-auto object-cover" />
              ) : (
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-yellow-400 flex items-center justify-center text-white text-xl font-bold mx-auto">
                  {user?.name?.charAt(0)?.toUpperCase() || 'U'}
                </div>
              )}
              <h3 className="mt-3 text-sm font-semibold text-gray-900 truncate">{user?.name}</h3>
              <p className="text-xs text-gray-500 truncate">{user?.email}</p>
              <div className="mt-2 flex items-center justify-center gap-2">
                <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                  user?.role === 'admin' ? 'bg-purple-100 text-purple-800' : 'bg-blue-100 text-blue-800'
                }`}>
                  {user?.role}
                </span>
                {user?.authProvider !== 'local' && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                    {user?.authProvider === 'google' ? <GoogleIcon /> : <GitHubIcon />}
                    {user?.authProvider}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8">
              {/* Profile Tab */}
              {activeTab === 'profile' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Profile Information</h2>
                  
                  <form onSubmit={profileForm.handleSubmit(onUpdateProfile)} className="space-y-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name</label>
                      <input
                        type="text"
                        {...profileForm.register('name')}
                        className={`w-full rounded-xl border px-4 py-3 text-gray-900 shadow-sm transition-all focus:ring-2 focus:ring-offset-0 ${
                          profileForm.formState.errors.name
                            ? 'border-red-300 focus:ring-red-500'
                            : 'border-gray-300 focus:ring-blue-600'
                        }`}
                      />
                      {profileForm.formState.errors.name && (
                        <p className="mt-1 text-sm text-red-600">{profileForm.formState.errors.name.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address</label>
                      <input
                        type="email"
                        {...profileForm.register('email')}
                        disabled
                        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-500 cursor-not-allowed"
                      />
                      <p className="mt-1 text-xs text-gray-500">Email cannot be changed. Contact support for assistance.</p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Role</label>
                      <input
                        type="text"
                        value={user?.role || 'user'}
                        disabled
                        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-500 cursor-not-allowed capitalize"
                      />
                    </div>

                    <div className="flex justify-end">
                      <button
                        type="submit"
                        disabled={profileForm.formState.isSubmitting || !profileForm.formState.isDirty}
                        className="px-6 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-yellow-400 text-sm font-bold text-white shadow-lg transition-all hover:from-pink-600 hover:to-yellow-500 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {profileForm.formState.isSubmitting ? 'Saving...' : 'Save Changes'}
                      </button>
                    </div>
                  </form>
                </motion.div>
              )}

              {/* Password Tab */}
              {activeTab === 'password' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">Change Password</h2>
                  <p className="text-sm text-gray-600 mb-6">
                    For security, we&apos;ll send a reset code to your email to verify your identity.
                  </p>

                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
                    <p className="text-sm text-blue-800">
                      <span className="font-semibold">How it works:</span> Click the button below to receive a 6-digit code at <span className="font-medium">{user?.email}</span>. You&apos;ll be redirected to set your new password.
                    </p>
                  </div>

                  <button
                    onClick={onChangePassword}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-yellow-400 text-sm font-bold text-white shadow-lg transition-all hover:from-pink-600 hover:to-yellow-500"
                  >
                    Send Reset Code
                  </button>
                </motion.div>
              )}

              {/* Danger Zone Tab */}
              {activeTab === 'danger' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <h2 className="text-xl font-bold text-red-600 mb-2">Danger Zone</h2>
                  <p className="text-sm text-gray-600 mb-6">
                    Irreversible actions. Please proceed with caution.
                  </p>

                  <div className="border border-red-200 rounded-xl p-6 bg-red-50/50">
                    <h3 className="text-base font-bold text-gray-900">Delete Account</h3>
                    <p className="mt-1 text-sm text-gray-600 mb-4">
                      Once you delete your account, there is no going back. All your data will be permanently removed.
                    </p>
                    <button
                      onClick={onDeleteAccount}
                      disabled={isDeleting}
                      className="px-6 py-3 rounded-xl bg-red-600 text-sm font-bold text-white shadow-lg transition-all hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isDeleting ? 'Deleting...' : 'Delete My Account'}
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}