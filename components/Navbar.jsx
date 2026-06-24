"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { navbarData } from '../src/constants/navbarData';
import { useAuthContext } from './Providers';
import api from '../lib/axios';
import { useProducts } from './Product/ProductContext';

// Custom Native SVGs to avoid library dependencies
const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
  </svg>
);

const LogoutIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
  </svg>
);

const DashboardIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
  </svg>
);

export default function Navbar() {
  const router = useRouter();
  const { user, isAuthenticated, isHydrated, clearSession } = useAuthContext();
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);


  // Handle Scroll styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  // Close user menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isUserMenuOpen && !e.target.closest('[data-user-menu]')) {
        setIsUserMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isUserMenuOpen]);

  const handleLogout = async () => {
    try {
      await api.post('/auth/logout');
    } catch (error) {
      console.error('Backend logout failed:', error.message);
    } finally {
      await clearSession();
      setIsUserMenuOpen(false);
      setIsMobileMenuOpen(false);
      router.push('/');
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 border-b ${scrolled || isMobileMenuOpen
            ? "bg-white/80 backdrop-blur-lg border-gray-200/50 shadow-sm py-3"
            : "bg-transparent border-transparent py-5"
          }`}
        aria-label="Main Navigation"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">

          {/* LEFT: Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 w-20 transition-transform hover:scale-105 relative z-[60]"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <img
              src="/core/Logo.webp"
              alt={navbarData.logoAlt}
              className="w-20 md:h-10 object-cover"
            />
          </Link>

          {/* CENTER: Primary Route Links (Desktop) */}
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-600">
            {navbarData.links.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500 transition-all"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* RIGHT: Auth Section & Mobile Menu Toggle */}
          <div className="flex items-center gap-4 relative z-[60]">
            {/* Authenticated User Menu */}
            {isAuthenticated && isHydrated ? (
              <div data-user-menu className="relative">
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                  aria-expanded={isUserMenuOpen}
                  aria-haspopup="true"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-yellow-400 flex items-center justify-center text-white text-sm font-bold overflow-hidden">
                    {user?.avatarUrl ? (
                      <img src={user.avatarUrl} alt={user?.name} className="w-full h-full rounded-full object-cover" />
                    ) : (
                      user?.name?.charAt(0)?.toUpperCase() || 'U'
                    )}
                  </div>
                  <span className="hidden lg:block text-sm font-semibold text-gray-700">
                    {user?.name?.split(' ')[0]}
                  </span>
                </button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {isUserMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50"
                    >
                      {/* User Info */}
                      <div className="px-4 py-3 border-b border-gray-100">
                        <p className="text-sm font-semibold text-gray-900 truncate">
                          {user?.name}
                        </p>
                        <p className="text-xs text-gray-500 truncate">
                          {user?.email}
                        </p>
                      </div>

                      {/* Home Link */}
                      <Link
                        href="/"
                        onClick={() => setIsUserMenuOpen(false)}
                        className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                      >
                        <DashboardIcon />
                        Home
                      </Link>

                      {/* Profile Link */}
                      <Link
                        href="/profile"
                        onClick={() => setIsUserMenuOpen(false)}
                        className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                      >
                        <UserIcon />
                        Profile Settings
                      </Link>

                      {/* Divider */}
                      <div className="border-t border-gray-100 my-1" />

                      {/* Logout Button */}
                      <button
                        onClick={handleLogout}
                        className="flex items-center gap-3 w-full px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors"
                      >
                        <LogoutIcon />
                        Sign Out
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : isHydrated ? (
              /* Unauthenticated — Login/Signup Buttons (Desktop) */
              <div className="hidden sm:flex items-center gap-4">
                <Link
                  href="/login"
                  className="text-sm font-bold text-gray-700 hover:text-pink-500 transition-colors"
                >
                  Log In
                </Link>
                <Link
                  href="/register"
                  className="px-6 py-2.5 rounded-full bg-[#0B0B1A] text-white text-sm font-bold hover:bg-gray-800 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  Sign Up
                </Link>
              </div>
            ) : (
              /* Skeleton while auth loads (Desktop) */
              <div className="hidden sm:flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gray-200 animate-pulse" />
                <div className="w-20 h-4 bg-gray-200 rounded animate-pulse hidden lg:block" />
              </div>
            )}

            {/* Mobile Menu Hamburger Icon */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle Navigation Menu"
              className="md:hidden p-2 text-gray-600 hover:text-pink-500 transition-colors focus:outline-none"
            >
              {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>

        </div>

        {/* --- MOBILE DROPDOWN MENU --- */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl md:hidden flex flex-col"
            >
              <div className="flex flex-col px-6 py-8 space-y-6">
                {/* Auth Status for Mobile */}
                {isAuthenticated && isHydrated ? (
                  <div className="flex items-center gap-3 pb-4 border-b border-gray-100">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-yellow-400 flex items-center justify-center text-white font-bold overflow-hidden">
                      {user?.avatarUrl ? (
                        <img src={user.avatarUrl} alt={user?.name} className="w-full h-full rounded-full object-cover" />
                      ) : (
                        user?.name?.charAt(0)?.toUpperCase() || 'U'
                      )}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{user?.name}</p>
                      <p className="text-xs text-gray-500">{user?.email}</p>
                    </div>
                  </div>
                ) : !isHydrated ? (
                  /* Skeleton while auth loads (Mobile) */
                  <div className="flex items-center gap-3 pb-4 border-b border-gray-100">
                    <div className="w-10 h-10 rounded-full bg-gray-200 animate-pulse" />
                    <div className="space-y-2">
                      <div className="w-24 h-4 bg-gray-200 rounded animate-pulse" />
                      <div className="w-32 h-3 bg-gray-200 rounded animate-pulse" />
                    </div>
                  </div>
                ) : null}

                {/* Navigation Links */}
                {navbarData.links.map((link) => (
                  <Link
                    key={link.id}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg font-semibold text-gray-800 hover:text-pink-500 transition-colors border-b border-gray-50 pb-4"
                  >
                    {link.label}
                  </Link>
                ))}

                {/* Authenticated Mobile Links */}
                {isAuthenticated && isHydrated ? (
                  <>
                    <Link
                      href="/"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-lg font-semibold text-gray-800 hover:text-pink-500 transition-colors border-b border-gray-50 pb-4"
                    >
                      Home
                    </Link>
                    <Link
                      href="/profile"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-lg font-semibold text-gray-800 hover:text-pink-500 transition-colors border-b border-gray-50 pb-4"
                    >
                      Profile Settings
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="mt-4 text-center px-6 py-3.5 rounded-full bg-red-500 text-white text-base font-bold shadow-lg hover:bg-red-600 transition-colors"
                    >
                      Sign Out
                    </button>
                  </>
                ) : isHydrated ? (
                  /* Unauthenticated Mobile Links */
                  <div className="flex flex-col gap-3 mt-4">
                    <Link
                      href="/login"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="w-full text-center px-6 py-3.5 rounded-xl border-2 border-gray-200 text-gray-800 text-base font-bold hover:bg-gray-50 transition-colors"
                    >
                      Log In
                    </Link>
                    <Link
                      href="/register"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="w-full text-center px-6 py-3.5 rounded-xl bg-gradient-to-r from-pink-500 to-yellow-400 text-white text-base font-bold shadow-md hover:opacity-90 transition-opacity"
                    >
                      Sign Up
                    </Link>
                  </div>
                ) : (
                  /* Skeleton while auth loads (Mobile buttons) */
                  <div className="flex flex-col gap-3 mt-4">
                    <div className="w-full h-12 bg-gray-200 rounded-xl animate-pulse" />
                    <div className="w-full h-12 bg-gray-200 rounded-xl animate-pulse" />
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}