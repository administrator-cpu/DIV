'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useQueryClient } from '@tanstack/react-query';
import { resolveImageUrl } from '../../lib/imageUrl';
import { getImageDimensions } from '../../lib/imageDimensions';
import { fetchProductBySlug } from '../../src/app/api/hooks/useProducts';
import { useIntersectionPrefetch } from '../../lib/useIntersectionPrefetch';

export default function ProductCard({ product, priority = false }) {
  const queryClient = useQueryClient();
  const firstImage = product.previewImages?.[0];
  const prefetchTimer = useRef(null);
  const [imgError, setImgError] = useState(false);

  // Mobile: Prefetch when card scrolls into viewport
  const cardRef = useIntersectionPrefetch(
    ['product', product.slug],
    () => fetchProductBySlug(product.slug),
    { staleTime: 5 * 60 * 1000, rootMargin: '200px' }
  );

  // Desktop: Intent-delayed hover prefetch
  const handleMouseEnter = useCallback(() => {
    prefetchTimer.current = setTimeout(() => {
      queryClient.prefetchQuery({
        queryKey: ['product', product.slug],
        queryFn: () => fetchProductBySlug(product.slug),
        staleTime: 5 * 60 * 1000,
      });
    }, 150);
  }, [queryClient, product.slug]);

  const handleMouseLeave = useCallback(() => {
    if (prefetchTimer.current) {
      clearTimeout(prefetchTimer.current);
      prefetchTimer.current = null;
    }
  }, []);

  useEffect(() => {
    return () => {
      if (prefetchTimer.current) clearTimeout(prefetchTimer.current);
    };
  }, []);

  const imgSrc = imgError ? '/placeholder-service.svg' : resolveImageUrl(firstImage?.url);
  const dims = getImageDimensions(firstImage?.metadata);

  return (
    <Link
      ref={cardRef}
      href={`/products/${product.slug}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleMouseEnter}
      onBlur={handleMouseLeave}
      className="group bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg hover:border-pink-200 transition-all"
    >
      <div className="relative h-48 overflow-hidden bg-gray-100">
        {firstImage ? (
          dims ? (
            <Image
              src={imgSrc}
              alt={firstImage.alt || product.title}
              width={dims.width}
              height={dims.height}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading={priority ? undefined : 'lazy'}
              priority={priority}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="relative w-full h-full">
              <Image
                src={imgSrc}
                alt={firstImage.alt || product.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                loading={priority ? undefined : 'lazy'}
                priority={priority}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                onError={() => setImgError(true)}
              />
            </div>
          )
        ) : (
          <div className="flex items-center justify-center h-full text-gray-400">
            <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
            </svg>
          </div>
        )}

        {product.category && (
          <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-medium bg-white/90 backdrop-blur-sm text-gray-700">
            {product.category}
          </span>
        )}

        {product.totalRatings > 0 && (
          <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-medium bg-white/90 backdrop-blur-sm text-yellow-700 flex items-center gap-1">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
            </svg>
            {product.averageRating.toFixed(1)}
          </span>
        )}
      </div>

      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors">
          {product.title}
        </h3>
        <p className="text-sm text-gray-600 line-clamp-2 mb-4">
          {product.description}
        </p>

        {product.demoVideoUrl && (
          <div className="flex items-center gap-2 text-xs text-red-600">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
            Video demo available
          </div>
        )}
      </div>
    </Link>
  );
}