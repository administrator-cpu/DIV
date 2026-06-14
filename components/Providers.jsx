'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';

export default function Providers({ children }) {
  // We use useState to ensure the QueryClient is only created once per user session
  // and isn't recreated on every render.
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // Default settings for all queries
            staleTime: 60 * 1000, // Data is considered fresh for 1 minute
            refetchOnWindowFocus: false, // Don't refetch every time the user switches tabs
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}