'use client';

import { useState } from 'react';
import { useProduct } from '@/app/api/hooks/useProducts';
import ProductHero from '@/components/Product/ProductHero';
import ProductCTA from '@/components/Product/ProductCTA';
import VideoEmbed from '@/components/Product/VideoEmbed';
import VideoThumbnail from '@/components/Product/VideoThumbnail';
import PreviewImages from '@/components/Product/PreviewImages';

export default function ProductDetailClient({ product: initialProduct, initialDataUpdatedAt }) {
  const [showVideo, setShowVideo] = useState(false);
  console.log(product)

  const { data: product } = useProduct(initialProduct.slug, {
    initialData: initialProduct,
    initialDataUpdatedAt,
  });

  const currentProduct = product || initialProduct;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <ProductHero product={currentProduct} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Demo Video */}
            {currentProduct.demoVideoId && (
              <section id="demo">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Demo</h2>
                {showVideo ? (
                  <VideoEmbed videoId={currentProduct.demoVideoId} title={`${currentProduct.title} Demo`} />
                ) : (
                  <VideoThumbnail
                    videoId={currentProduct.demoVideoId}
                    title={`Watch ${currentProduct.title} demo`}
                    onClick={() => setShowVideo(true)}
                  />
                )}
              </section>
            )}

            {/* Preview Images */}
            {currentProduct.previewImages && currentProduct.previewImages.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Screenshots</h2>
                <PreviewImages images={currentProduct.previewImages} />
              </section>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 sticky top-24">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Interested?</h3>
              <p className="text-sm text-gray-600 mb-4">
                Get in touch to discuss how {currentProduct.title} can transform your business.
              </p>
              <a
                href="/contact"
                className="block w-full text-center px-6 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-yellow-400 text-sm font-bold text-white shadow-lg hover:from-pink-600 hover:to-yellow-500 transition-all"
              >
                Get This Product
              </a>
            </div>

            {/* Product Info */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="text-sm font-semibold text-gray-900 mb-3">Product Details</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex justify-between">
                  <span>Category</span>
                  <span className="font-medium text-gray-900 capitalize">{currentProduct.category}</span>
                </li>
                {currentProduct.totalRatings > 0 && (
                  <li className="flex justify-between">
                    <span>Rating</span>
                    <span className="font-medium text-gray-900">
                      ★ {currentProduct.averageRating.toFixed(1)} ({currentProduct.totalRatings})
                    </span>
                  </li>
                )}
                {currentProduct.demoVideoUrl && (
                  <li className="flex justify-between">
                    <span>Demo</span>
                    <span className="font-medium text-green-600">Available</span>
                  </li>
                )}
              </ul>
            </div>
          </aside>
        </div>
      </div>

      {/* Call to Action */}
      <ProductCTA product={currentProduct} />
    </div>
  );
}