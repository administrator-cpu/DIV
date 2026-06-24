'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { resolveImageUrl } from '../../lib/imageUrl';
import { getImageDimensions } from '../../lib/imageDimensions';

const PLACEHOLDER = '/placeholder-service.svg';

function SafeImage({ src, alt, priority = false, className = '', sizes = '', width, height, fill }) {
  const [hasError, setHasError] = useState(false);

  const imgSrc = hasError ? PLACEHOLDER : resolveImageUrl(src);

  useEffect(() => {
    setHasError(false);
  }, [src]);

  const commonProps = {
    src: imgSrc,
    alt,
    className,
    loading: priority ? undefined : 'lazy',
    priority,
    sizes,
    onError: () => setHasError(true),
    unoptimized: imgSrc === PLACEHOLDER,
  };

  if (fill) {
    return <Image {...commonProps} fill />;
  }

  return <Image {...commonProps} width={width} height={height} />;
}

export default function PreviewImages({ images = [] }) {
  const [selectedImage, setSelectedImage] = useState(null);

  if (!images || images.length === 0) return null;

  const sortedImages = [...images].sort((a, b) => a.order - b.order);

  return (
    <>
      {/* Gallery Grid */}
      <div className="space-y-6">
        {sortedImages.map((image, index) => {
          const dims = getImageDimensions(image.metadata);

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative w-full rounded-xl overflow-hidden border border-gray-200 bg-gray-100">
                {dims ? (
                  <SafeImage
                    src={image.url}
                    alt={image.alt || `Preview ${index + 1}`}
                    width={dims.width}
                    height={dims.height}
                    priority={index === 0}
                    className="w-full h-auto"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 50vw"
                  />
                ) : (
                  <div className="relative w-full aspect-video">
                    <SafeImage
                      src={image.url}
                      alt={image.alt || `Preview ${index + 1}`}
                      fill
                      priority={index === 0}
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 50vw"
                    />
                  </div>
                )}

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                    <svg className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Caption */}
              {image.caption && (
                <p className="mt-2 text-sm text-gray-500 text-center">{image.caption}</p>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors z-10"
              onClick={() => setSelectedImage(null)}
              aria-label="Close preview"
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Image */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] max-w-[95vw]"
            >
              <SafeImage
                key={selectedImage.url}
                src={selectedImage.url}
                alt={selectedImage.alt || 'Preview'}
                width={selectedImage.metadata?.width || 1920}
                height={selectedImage.metadata?.height || 1080}
                priority
                className="max-h-[90vh] max-w-[95vw] object-contain rounded-lg"
                sizes="95vw"
              />
            </motion.div>

            {/* Caption in Lightbox */}
            {selectedImage.caption && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                <p className="text-white/80 text-sm bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">
                  {selectedImage.caption}
                </p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}