'use client';

import { createContext, useContext, useEffect, useState, useRef } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useAuth } from '@thediv/auth-core';
import ProductProvider from './Product/ProductContext';

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
  const hydrationTimeout = useRef(null);

  useEffect(() => {
    if (auth.isInitialized) {
      setIsHydrated(true);
      if (hydrationTimeout.current) {
        clearTimeout(hydrationTimeout.current);
        hydrationTimeout.current = null;
      }
    }
  }, [auth.isInitialized]);

  useEffect(() => {
    if (!auth.isInitialized) {
      hydrationTimeout.current = setTimeout(() => {
        setIsHydrated(true);
      }, 5000);
    }

    return () => {
      if (hydrationTimeout.current) {
        clearTimeout(hydrationTimeout.current);
      }
    };
  }, [auth.isInitialized]);

  return (
    <AuthContext.Provider value={{ ...auth, isHydrated }}>
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
            retry: 1,
            retryDelay: 1000,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <ProductProvider>
      <AuthProvider>
        {children}
      </AuthProvider>
      </ProductProvider>
    </QueryClientProvider>
  );
}