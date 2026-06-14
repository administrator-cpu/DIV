import { useState, useEffect, useCallback } from 'react';

export function useFetch(url, options = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async (fetchOptions = options) => {
    setLoading(true);
    setError(null);
    
    const abortController = new AbortController();

    try {
      const response = await fetch(url, {
        ...fetchOptions,
        signal: abortController.signal,
        headers: {
          'Content-Type': 'application/json',
          ...fetchOptions.headers,
        },
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const result = await response.json();
      setData(result);
    } catch (err) {
      if (err.name !== 'AbortError') {
        setError(err.message || 'Something went wrong');
      }
    } finally {
      setLoading(false);
    }

    return () => abortController.abort();
  }, [url]);

  useEffect(() => {
    const abortRequest = fetchData();
    return () => abortRequest.then(abort => abort && abort());
  }, [fetchData]);

  return { data, loading, error, refetch: fetchData };
}