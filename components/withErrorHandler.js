import { NextResponse } from 'next/server';

/**
 * Wraps a Next.js Route Handler to catch errors globally.
 */
export function withErrorHandler(handler) {
  return async (...args) => {
    try {
      // Execute the original route function
      return await handler(...args);
    } catch (error) {
      // Global error logging
      console.error("🔥 API Error Caught:", error);

      // Standardized error response
      return NextResponse.json(
        { 
          success: false, 
          error: error.message || 'Internal Server Error' 
        },
        { status: error.status || 500 }
      );
    }
  };
}