'use client';

import { useEffect, useRef } from 'react';
import { useQueryClient } from '@tanstack/react-query';

export function useIntersectionPrefetch(queryKey, queryFn, options = {}) {
  const {
    staleTime = 5 * 60 * 1000,
    threshold = 0.1,
    rootMargin = '200px',
    dwellTime = 200,
  } = options;

  const queryClient = useQueryClient();
  const ref = useRef(null);
  const prefetchedRef = useRef(false);
  const dwellTimerRef = useRef(null);

  const queryKeyRef = useRef(queryKey);
  const queryFnRef = useRef(queryFn);
  const optionsRef = useRef({ staleTime });

  queryKeyRef.current = queryKey;
  queryFnRef.current = queryFn;
  optionsRef.current = { staleTime };

  useEffect(() => {
    const element = ref.current;
    if (!element || prefetchedRef.current) return;

    let observer;

    try {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !prefetchedRef.current) {
              dwellTimerRef.current = setTimeout(() => {
                if (prefetchedRef.current) return;

                prefetchedRef.current = true;

                queryClient.prefetchQuery({
                  queryKey: queryKeyRef.current,
                  queryFn: queryFnRef.current,
                  staleTime: optionsRef.current.staleTime,
                });

                if (entry.target instanceof Element) {
                  try { observer.unobserve(entry.target); } catch {}
                }
              }, dwellTime);
            } else {
              if (dwellTimerRef.current) {
                clearTimeout(dwellTimerRef.current);
                dwellTimerRef.current = null;
              }
            }
          });
        },
        { threshold, rootMargin }
      );

      observer.observe(element);
    } catch (err) {
      // Observer creation failed
    }

    return () => {
      if (dwellTimerRef.current) {
        clearTimeout(dwellTimerRef.current);
        dwellTimerRef.current = null;
      }
      if (observer) {
        try { observer.disconnect(); } catch {}
      }
    };
  }, []);

  return ref;
}