'use client';

import Image from 'next/image';
import { resolveImageUrl } from '../../lib/imageUrl';
import { getImageDimensions } from '../../lib/imageDimensions';

export default function ProductHero({ product }) {
  const heroImage = product.previewImages?.[0];

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Background Image */}
      {heroImage && (
        <div className="absolute inset-0 opacity-20">
          <Image
            src={resolveImageUrl(heroImage.url)}
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-transparent" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-3xl">
          {/* Category Badge */}
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-white/10 backdrop-blur-sm mb-6">
            {product.category}
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {product.title}
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
            {product.description}
          </p>

          {/* Rating */}
          {product.totalRatings > 0 && (
            <div className="flex items-center gap-3 mb-8">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${i < Math.round(product.averageRating) ? 'text-yellow-400' : 'text-gray-600'}`}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <span className="text-gray-300">
                {product.averageRating.toFixed(1)} ({product.totalRatings} reviews)
              </span>
            </div>
          )}

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#demo"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-pink-500 to-yellow-400 text-base font-bold text-white shadow-lg hover:from-pink-600 hover:to-yellow-500 transition-all"
            >
              Watch Demo
            </a>
            <a
              href="/contact"
              className="px-8 py-4 rounded-xl border border-white/30 text-base font-semibold text-white hover:bg-white/10 transition-all"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}