// components/Providers.jsx
'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useAuth } from '@thediv/auth-core';

const AuthContext = createContext(null);

export function useAuthContext() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthContext must be used within Providers');
  }
  return context;
}

function AuthProvider({ children }) {
  const auth = useAuth({
    endpoint: '/auth/me',     
    method: 'get',
    enableRefresh: false,
  });
  
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    if (!auth.isLoading && auth.isInitialized) {
      setIsHydrated(true);
    }
  }, [auth.isLoading, auth.isInitialized]);

  // Debug: Log auth state changes
  useEffect(() => {
    console.log('Auth State Updated:', {
      isAuthenticated: auth.isAuthenticated,
      isInitialized: auth.isInitialized,
      user: auth.user,
    });
  }, [auth.isAuthenticated, auth.isInitialized, auth.user]);

  if (!isHydrated && !auth.isInitialized) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <div className="flex flex-col items-center space-y-4">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" />
          <p className="text-sm text-gray-500">Loading session...</p>
        </div>
      </div>
    );
  }

  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  );
}

export default function Providers({ children }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
            refetchOnWindowFocus: false,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        {children}
      </AuthProvider>
    </QueryClientProvider>
  );
}