import { useState } from 'react';

export function useMutation(url, method = 'POST') {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const execute = async (payload = null, customOptions = {}) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          ...customOptions.headers,
        },
        body: payload ? JSON.stringify(payload) : null,
        ...customOptions,
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const result = await response.json();
      setData(result);
      return result; // Return result directly for easy chaining
    } catch (err) {
      setError(err.message || 'Something went wrong');
      throw err; // Re-throw so the component can handle it if needed
    } finally {
      setLoading(false);
    }
  };

  return { execute, data, loading, error };
}